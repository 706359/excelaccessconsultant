/**
 * Plain-fetch BFS internal-link audit (no JS).
 * Fails on: unreachable, depth > 3, contextual inbound < 3 (except / and /privacy-policy),
 * link to non-200 or 3xx, nofollow, empty anchor, blob anchor (>8 words; headings ≤14),
 * body-anchor share > 30% to one target (shortTitle / taxonomy / related modules exempt).
 *
 * Usage: node scripts/links-audit.mjs [baseUrl]
 * npm run links:audit
 */
import fs from 'fs';
import {
  CASE_SHORT_TITLES,
  POST_SHORT_TITLES,
} from '../src/constants/relatedContent.js';

const BASE = (process.argv[2] || process.env.LINKS_AUDIT_BASE || 'http://127.0.0.1:5063').replace(
  /\/$/,
  '',
);
const PUBLIC = 'https://excelaccessconsultant.com';
const OUT = 'docs/seo/internal-links';

const SHORT_TITLE_ANCHORS = new Set([
  ...Object.values(POST_SHORT_TITLES),
  ...Object.values(CASE_SHORT_TITLES),
]);

const TAXONOMY_ANCHORS = new Set([
  'Excel Automation',
  'Access Database',
  'Database Migration',
]);

function toPath(href, fromPath) {
  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:'))
    return null;
  let raw = href;
  if (href.startsWith('http')) {
    if (!href.startsWith(BASE) && !href.startsWith(PUBLIC)) return null;
    try {
      raw = new URL(href).pathname;
    } catch {
      return null;
    }
  } else if (href.startsWith('/')) {
    raw = href.split('?')[0].split('#')[0];
  } else {
    try {
      raw = new URL(href, BASE + fromPath).pathname;
    } catch {
      return null;
    }
  }
  raw = raw.split('?')[0].split('#')[0];
  return raw.replace(/\/$/, '') || '/';
}

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Remove global chrome so early-page body links are not false-flagged via lookback. */
function stripChrome(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<header\b[\s\S]*?<\/header>/gi, '')
    .replace(/<footer\b[\s\S]*?<\/footer>/gi, '')
    .replace(/<div\b[^>]*class="[^"]*mobile-nav[^"]*"[\s\S]*?<\/div>/gi, '')
    .replace(/<nav\b[^>]*aria-label="[^"]*[Bb]readcrumb[^"]*"[\s\S]*?<\/nav>/gi, '')
    .replace(/<nav\b[^>]*class="[^"]*breadcrumb[^"]*"[\s\S]*?<\/nav>/gi, '')
    .replace(/<a\b[^>]*class="[^"]*skip-link[^"]*"[\s\S]*?<\/a>/gi, '')
    .replace(/<section\b[^>]*class="[^"]*page-cta[^"]*"[\s\S]*?<\/section>/gi, '')
    .replace(/<div\b[^>]*class="[^"]*contact-ctas[^"]*"[\s\S]*?<\/div>/gi, '');
}

function extractLinks(html, pagePath) {
  const links = [];
  const re = /<a\b([^>]*)>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = re.exec(html))) {
    const attrs = m[1];
    const inner = m[2];
    const href = (attrs.match(/\bhref\s*=\s*["']([^"']+)["']/i) || [])[1];
    const rel = (attrs.match(/\brel\s*=\s*["']([^"']+)["']/i) || [])[1] || '';
    const aria = (attrs.match(/\baria-label\s*=\s*["']([^"']+)["']/i) || [])[1] || '';
    const path = toPath(href, pagePath);
    if (!path) continue;
    let anchor = aria || stripTags(inner);
    if (!anchor) {
      const alt = (inner.match(/\balt\s*=\s*["']([^"']+)["']/i) || [])[1];
      anchor = alt || '';
    }
    const before = html.slice(Math.max(0, m.index - 500), m.index);
    const inRelated =
      /related-tile|service-related|service-sidebar|blog-ssr-hub|related-posts|related-cases/i.test(
        before,
      );
    const inHeading =
      /<(h[1-6])\b[^>]*>\s*$/i.test(before.slice(-48)) || /<\/?(h[1-6])\b/i.test(inner);
    const inMeta = /content-meta|author-bio|blog-author/i.test(before);
    links.push({
      path,
      anchor: anchor.trim(),
      rel,
      inRelated,
      inHeading,
      inMeta,
      href,
    });
  }
  return links;
}

function isIndexablePath(p) {
  if (!p) return false;
  if (p.startsWith('/_next') || p.startsWith('/api') || p.includes('.')) {
    if (p.endsWith('.html')) return true;
    return false;
  }
  return true;
}

async function fetchPage(path) {
  const url = BASE + (path === '/' ? '/' : path);
  const res = await fetch(url, { redirect: 'manual' });
  const status = res.status;
  let body = '';
  if (status >= 200 && status < 300) body = await res.text();
  const location = res.headers.get('location') || '';
  return { status, body, location };
}

function isExemptAnchor(anchor, targetPath) {
  if (!anchor) return false;
  if (SHORT_TITLE_ANCHORS.has(anchor)) return true;
  if (TAXONOMY_ANCHORS.has(anchor) && targetPath.startsWith('/blog/categories/')) return true;
  if (/^By\s+/i.test(anchor) || anchor === 'Robert Terry') return true;
  return false;
}

const failures = [];

async function main() {
  const queue = ['/'];
  const depth = new Map([['/', 0]]);
  const statusByPath = new Map();
  const outLinks = new Map();
  const bodyAnchorsToTarget = new Map();
  const contextualInbound = new Map();

  while (queue.length) {
    const path = queue.shift();
    const d = depth.get(path);
    let page;
    try {
      page = await fetchPage(path);
    } catch (e) {
      failures.push({ code: 'FETCH_ERROR', path, detail: String(e.message || e) });
      statusByPath.set(path, 0);
      continue;
    }
    statusByPath.set(path, page.status);

    if (page.status >= 300 && page.status < 400) {
      failures.push({
        code: 'REDIRECT_REACHED',
        path,
        detail: `${page.status} → ${page.location}`,
      });
      continue;
    }
    if (page.status !== 200) {
      failures.push({ code: 'NON_200', path, detail: String(page.status) });
      continue;
    }

    const allLinks = extractLinks(page.body, path);
    const contextualLinks = extractLinks(stripChrome(page.body), path);
    outLinks.set(path, allLinks);

    const contextualSet = new Set(
      contextualLinks.map((l) => `${l.path}||${l.anchor}||${l.href}`),
    );

    for (const link of allLinks) {
      if (!isIndexablePath(link.path)) continue;

      if (/\bnofollow\b/i.test(link.rel)) {
        failures.push({
          code: 'NOFOLLOW',
          path,
          detail: `${link.path} rel=${link.rel}`,
        });
      }
      if (!link.anchor) {
        failures.push({ code: 'EMPTY_ANCHOR', path, detail: `→ ${link.path}` });
      } else {
        const words = link.anchor.split(/\s+/).filter(Boolean).length;
        const blobLimit = link.inHeading ? 14 : 8;
        if (words > blobLimit && !link.inRelated) {
          failures.push({
            code: 'BLOB_ANCHOR',
            path,
            detail: `"${link.anchor.slice(0, 80)}…" → ${link.path}`,
          });
        }
      }

      if (!depth.has(link.path)) {
        depth.set(link.path, d + 1);
        queue.push(link.path);
      }
    }

    for (const link of contextualLinks) {
      if (!isIndexablePath(link.path)) continue;

      if (!contextualInbound.has(link.path)) contextualInbound.set(link.path, new Set());
      contextualInbound.get(link.path).add(path);

      // Template chrome (author bio, bylines) still counts as inbound, not toward 30% share
      if (link.inMeta || link.inRelated || isExemptAnchor(link.anchor, link.path)) continue;

      if (!bodyAnchorsToTarget.has(link.path)) bodyAnchorsToTarget.set(link.path, new Map());
      const m = bodyAnchorsToTarget.get(link.path);
      m.set(link.anchor, (m.get(link.anchor) || 0) + 1);
    }

    // silence unused
    void contextualSet;
  }

  const allTargets = new Set();
  for (const links of outLinks.values()) for (const l of links) allTargets.add(l.path);
  for (const t of allTargets) {
    if (statusByPath.has(t)) {
      const st = statusByPath.get(t);
      if (st >= 300 && st < 400) {
        failures.push({ code: 'LINK_TO_3XX', path: t, detail: 'linked destination is redirect' });
      } else if (st !== 200 && st !== 0) {
        failures.push({ code: 'LINK_TO_NON_200', path: t, detail: String(st) });
      }
      continue;
    }
    try {
      const page = await fetchPage(t);
      statusByPath.set(t, page.status);
      if (page.status >= 300 && page.status < 400) {
        failures.push({
          code: 'LINK_TO_3XX',
          path: t,
          detail: `${page.status} → ${page.location}`,
        });
      } else if (page.status !== 200) {
        failures.push({ code: 'LINK_TO_NON_200', path: t, detail: String(page.status) });
      }
    } catch (e) {
      failures.push({ code: 'LINK_FETCH_ERROR', path: t, detail: String(e.message || e) });
    }
  }

  const visited = [...depth.keys()].filter((p) => statusByPath.get(p) === 200);
  for (const [p, d] of depth) {
    if (statusByPath.get(p) === 200 && d > 3) {
      failures.push({ code: 'DEPTH_OVER_3', path: p, detail: String(d) });
    }
  }

  for (const p of visited) {
    if (p === '/privacy-policy' || p === '/') continue;
    const inbound = contextualInbound.get(p)?.size || 0;
    if (inbound < 3) {
      failures.push({
        code: 'CONTEXTUAL_INBOUND_UNDER_3',
        path: p,
        detail: String(inbound),
      });
    }
  }

  for (const [target, map] of bodyAnchorsToTarget) {
    const entries = [...map.entries()];
    const total = entries.reduce((a, [, c]) => a + c, 0);
    // Need a meaningful sample; 30% of 3 is noise
    if (total < 8) continue;
    for (const [anchor, c] of entries) {
      const pct = (c / total) * 100;
      if (pct > 30 && c >= 3) {
        failures.push({
          code: 'ANCHOR_SHARE_OVER_30',
          path: target,
          detail: `"${anchor}" ${pct.toFixed(1)}% (${c}/${total})`,
        });
      }
    }
  }

  let sitemapPaths = [];
  try {
    const sm = await (await fetch(`${BASE}/sitemap.xml`)).text();
    sitemapPaths = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)]
      .map((m) => {
        try {
          return new URL(m[1]).pathname.replace(/\/$/, '') || '/';
        } catch {
          return null;
        }
      })
      .filter(Boolean);
  } catch {
    /* ignore */
  }

  for (const sp of sitemapPaths) {
    if (!depth.has(sp)) {
      let st = statusByPath.get(sp);
      if (st == null) {
        try {
          const page = await fetchPage(sp);
          statusByPath.set(sp, page.status);
          st = page.status;
        } catch {
          st = 0;
        }
      }
      if (st >= 300 && st < 400) continue;
      failures.push({
        code: 'UNREACHABLE_FROM_HOMEPAGE',
        path: sp,
        detail: 'in sitemap, not in BFS',
      });
    }
  }

  const report = {
    base: BASE,
    crawledAt: new Date().toISOString(),
    pagesVisited: visited.length,
    failureCount: failures.length,
    failures,
    contextualInbound: Object.fromEntries(
      [...contextualInbound.entries()].map(([p, set]) => [p, [...set].sort()]),
    ),
    sampleDepth: Object.fromEntries(
      [...depth.entries()].filter(([, d]) => d <= 3).slice(0, 20),
    ),
  };

  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(`${OUT}/links-audit-latest.json`, JSON.stringify(report, null, 2));

  console.log(`links-audit base=${BASE} visited=${visited.length} failures=${failures.length}`);
  const byCode = {};
  for (const f of failures) byCode[f.code] = (byCode[f.code] || 0) + 1;
  console.log(JSON.stringify(byCode, null, 2));
  if (failures.length) {
    for (const f of failures.slice(0, 40)) {
      console.log(`${f.code} ${f.path} ${f.detail}`);
    }
  }

  if (failures.length) process.exitCode = 1;
}

main().catch((e) => {
  console.error(e);
  process.exit(2);
});
