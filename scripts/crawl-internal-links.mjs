/**
 * Live BFS crawl of production server for internal-link baseline.
 * Usage: node scripts/crawl-internal-links.mjs [baseUrl]
 */
import fs from 'fs';
import path from 'path';

const BASE_ORIGIN = process.argv[2] || 'http://127.0.0.1:5063';
const CANONICAL_HOST = 'https://excelaccessconsultant.com';
const OUT = path.join(process.cwd(), 'docs', 'seo', 'internal-links');
fs.mkdirSync(OUT, { recursive: true });

const EXCLUDE_TARGETS = new Set(['/thank-you']);
const LISTING_PATHS = new Set(['/blog', '/case-studies']);
const CATEGORY_RE = /^\/blog\/categories\//;

const BLOG_ALIASES = {
  'access-vs-sql-server': 'access-vs-sql-server-when-to-migrate',
  'common-excel-vba-mistakes': 'common-excel-vba-mistakes-and-how-to-fix-them',
  'excel-reporting-automation': 'excel-reporting-automation-complete-guide',
  'excel-automation-signs': '10-signs-you-need-excel-automation',
  'access-database-crashing': 'why-your-access-database-keeps-crashing',
  'excel-automation-cost': 'excel-automation-cost-what-to-expect',
  'speed-up-excel': 'how-to-speed-up-slow-excel-spreadsheets',
};

const LEGACY_BLOG = { ...BLOG_ALIASES };

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function normalizePath(href, fromPath = '/') {
  if (!href || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:'))
    return null;
  let raw = href.trim();
  if (raw.startsWith('#')) return null;

  try {
    const u = new URL(raw, BASE_ORIGIN + fromPath);
    if (!['http:', 'https:'].includes(u.protocol)) return null;
    const host = u.hostname.replace(/^www\./, '');
    if (!['127.0.0.1', 'localhost', 'excelaccessconsultant.com'].includes(host)) return null;
    let p = u.pathname || '/';
    p = p.replace(/\.html$/i, '');
    if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);

    const svc = p.match(/^\/services\/(.+)$/);
    if (svc) p = `/${svc[1]}`;

    const legacy = p.match(/^\/blog\/2026\/01\/(.+)$/);
    if (legacy) p = `/blog/${LEGACY_BLOG[legacy[1]] || legacy[1]}`;

    const blog = p.match(/^\/blog\/([^/]+)$/);
    if (blog && BLOG_ALIASES[blog[1]]) p = `/blog/${BLOG_ALIASES[blog[1]]}`;

    if (EXCLUDE_TARGETS.has(p)) return null;
    return p || '/';
  } catch {
    return null;
  }
}

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function classifyLocation(classStack) {
  const joined = classStack.join(' ');
  if (
    /\bsite-nav\b/.test(joined) ||
    /\bmobile-nav\b/.test(joined) ||
    /\bsite-header\b/.test(joined) ||
    /\bheader\b/.test(joined)
  )
    return 'nav';
  if (/\bsite-footer\b/.test(joined) || /\bfooter\b/.test(joined)) return 'footer';
  if (/\bbreadcrumb\b/.test(joined)) return 'breadcrumb';
  if (
    /\brelated-tile\b/.test(joined) ||
    /\bservice-related\b/.test(joined) ||
    /\bpage-section--border-t\b/.test(joined) ||
    /Related Services/.test(joined)
  )
    return 'related';
  // listing grids on hub pages often use card grids — refined at page level
  return 'body';
}

/**
 * Extract anchors with a lightweight tag stack (no external deps).
 */
function extractLinks(html, pagePath) {
  const links = [];
  const classStack = [];
  const tagRe = /<\/?([a-zA-Z0-9]+)([^>]*)>|([^<]+)/g;
  let m;
  let pendingText = '';
  let inAnchor = null;

  while ((m = tagRe.exec(html))) {
    if (m[3] != null) {
      if (inAnchor) pendingText += m[3];
      continue;
    }
    const tag = m[1].toLowerCase();
    const attrs = m[2] || '';
    const isClose = html[m.index + 1] === '/';

    if (isClose) {
      if (tag === 'a' && inAnchor) {
        const anchor = stripTags(pendingText).replace(/\s+/g, ' ').trim();
        links.push({
          source: pagePath,
          target: inAnchor.href,
          anchor_text: anchor || '(empty)',
          location: inAnchor.location,
        });
        inAnchor = null;
        pendingText = '';
      }
      // pop matching open class
      for (let i = classStack.length - 1; i >= 0; i--) {
        if (classStack[i].startsWith(tag + ':')) {
          classStack.splice(i, 1);
          break;
        }
      }
      continue;
    }

    const selfClosing = /\/>$/.test(attrs) || ['br', 'img', 'hr', 'meta', 'link', 'input'].includes(tag);
    const classMatch = attrs.match(/\bclass\s*=\s*["']([^"']*)["']/i);
    const cls = classMatch ? classMatch[1] : '';
    if (!selfClosing) classStack.push(`${tag}:${cls}`);

    if (tag === 'a') {
      const hrefMatch = attrs.match(/\bhref\s*=\s*["']([^"']*)["']/i);
      if (hrefMatch) {
        const target = normalizePath(hrefMatch[1], pagePath);
        if (target && target !== pagePath) {
          const ancestorClasses = classStack.map((x) => x.split(':').slice(1).join(':'));
          ancestorClasses.push(cls); // include the <a> class itself (e.g. related-tile)
          inAnchor = {
            href: target,
            location: classifyLocation(ancestorClasses),
          };
          pendingText = '';
        }
      }
    }
  }
  return links;
}

function isListingPage(p) {
  return LISTING_PATHS.has(p) || CATEGORY_RE.test(p);
}

function isContextual(link, sourcePath) {
  if (link.location !== 'body' && link.location !== 'related') return false;
  // listing hubs don't count as contextual donors/recipients per user rule B
  if (isListingPage(sourcePath)) return false;
  return true;
}

async function fetchPage(p) {
  const url = BASE_ORIGIN + (p === '/' ? '/' : p);
  const res = await fetch(url, {
    redirect: 'manual',
    headers: { 'user-agent': 'EAC-InternalLinkCrawler/1.0' },
  });
  const status = res.status;
  let location = res.headers.get('location') || '';
  let html = '';
  if (status >= 200 && status < 300) {
    html = await res.text();
  } else if (status >= 300 && status < 400 && location) {
    // follow one hop for crawl discovery but record redirect
  }
  return { status, location, html, url };
}

async function waitForServer() {
  for (let i = 0; i < 40; i++) {
    try {
      const r = await fetch(BASE_ORIGIN + '/');
      if (r.ok) return;
    } catch {
      /* retry */
    }
    await sleep(500);
  }
  throw new Error('Server not reachable at ' + BASE_ORIGIN);
}

function csvEscape(v) {
  const s = String(v ?? '');
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function writeCsv(file, headers, rows) {
  const lines = [headers.join(',')];
  for (const row of rows) lines.push(headers.map((h) => csvEscape(row[h])).join(','));
  fs.writeFileSync(file, lines.join('\n') + '\n');
}

async function main() {
  await waitForServer();
  console.log('Server up. Crawling from', BASE_ORIGIN);

  const queue = ['/'];
  const visited = new Set();
  const depth = new Map([['/', 0]]);
  const allLinks = [];
  const pageMeta = new Map();
  const statusMap = new Map();

  while (queue.length) {
    const cur = queue.shift();
    if (visited.has(cur)) continue;
    visited.add(cur);

    const { status, location, html } = await fetchPage(cur);
    statusMap.set(cur, { status, location });

    const title = html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim() || '';
    const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const h1Text = h1 ? stripTags(h1[1]) : '';
    pageMeta.set(cur, { title, h1: h1Text });

    if (status < 200 || status >= 300 || !html) continue;

    const links = extractLinks(html, cur);
    for (const link of links) {
      // refine listing: on /blog and /case-studies, body card links are listings
      if (isListingPage(cur) && link.location === 'body') {
        link.location = 'listing';
      }
      if (CATEGORY_RE.test(cur) && link.location === 'body') {
        link.location = 'listing';
      }
      allLinks.push(link);

      if (!visited.has(link.target) && !depth.has(link.target)) {
        depth.set(link.target, (depth.get(cur) ?? 0) + 1);
        queue.push(link.target);
      }
    }
  }

  // Known indexable set from sitemap.xml live fetch
  let sitemapPaths = new Set(visited);
  try {
    const sm = await (await fetch(BASE_ORIGIN + '/sitemap.xml')).text();
    for (const m of sm.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      const p = normalizePath(m[1], '/');
      if (p && !EXCLUDE_TARGETS.has(p)) sitemapPaths.add(p);
    }
  } catch {
    /* ignore */
  }

  // Also add any discovered but ensure thank-you out
  sitemapPaths.delete('/thank-you');

  // Fetch sitemap-only pages not reached
  for (const p of [...sitemapPaths]) {
    if (visited.has(p)) continue;
    const { status, location, html } = await fetchPage(p);
    statusMap.set(p, { status, location });
    const title = html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim() || '';
    const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    pageMeta.set(p, { title, h1: h1 ? stripTags(h1[1]) : '' });
    if (html && status >= 200 && status < 300) {
      const links = extractLinks(html, p);
      for (const link of links) {
        if (isListingPage(p) && link.location === 'body') link.location = 'listing';
        allLinks.push(link);
      }
    }
    if (!depth.has(p)) depth.set(p, 'UNREACHABLE');
  }

  // Aggregate per page
  const pages = new Map();
  function ensure(p) {
    if (!pages.has(p)) {
      const meta = pageMeta.get(p) || {};
      pages.set(p, {
        path: p,
        url: CANONICAL_HOST + (p === '/' ? '' : p),
        title: meta.title || p,
        h1: meta.h1 || '',
        inbound_all: new Set(),
        outbound_all: new Set(),
        contextual_inbound: new Set(),
        contextual_outbound: new Set(),
        inbound_contextual_sources: new Set(),
      });
    }
    return pages.get(p);
  }

  for (const p of sitemapPaths) ensure(p);
  for (const p of visited) ensure(p);

  for (const link of allLinks) {
    const src = ensure(link.source);
    const tgt = ensure(link.target);
    if (!sitemapPaths.has(link.target) && !visited.has(link.target)) continue;
    src.outbound_all.add(link.target);
    tgt.inbound_all.add(link.source);
    if (isContextual(link, link.source)) {
      src.contextual_outbound.add(link.target);
      tgt.contextual_inbound.add(link.source);
      tgt.inbound_contextual_sources.add(link.source);
    }
  }

  function guessType(p) {
    if (p === '/') return 'home';
    if (
      [
        '/excel-automation',
        '/access-consulting',
        '/database-migration',
        '/vba-development',
        '/financial-modeling',
      ].includes(p)
    )
      return 'pillar';
    if (['/access-database-repair', '/hire-excel-vba-consultant', '/excel-consultant-utah'].includes(p))
      return 'service';
    if (p.startsWith('/blog/') && !CATEGORY_RE.test(p)) return 'blog';
    if (p.startsWith('/case-studies/') && p !== '/case-studies') return 'cluster';
    if (CATEGORY_RE.test(p)) return 'cluster';
    return 'utility';
  }

  function guessTopic(p) {
    if (p.includes('access') || p.includes('migrat') || p.includes('sql')) return 'access';
    if (p.includes('financial') || p.includes('modeling')) return 'financial modeling';
    if (p.includes('vba')) return 'vba';
    if (p.includes('excel') || p.includes('automat')) return 'excel automation';
    if (p.includes('utah')) return 'local utah';
    return '';
  }

  const invRows = [...pages.values()]
    .filter((p) => sitemapPaths.has(p.path) || visited.has(p.path))
    .filter((p) => p.path !== '/thank-you')
    // drop alias-only paths that aren't in sitemap canonical preference
    .sort((a, b) => a.path.localeCompare(b.path))
    .map((p) => {
      const d = depth.get(p.path);
      return {
        URL: p.url,
        title: p.title,
        H1: p.h1,
        primary_topic: guessTopic(p.path),
        page_type: guessType(p.path),
        current_inbound_count: p.inbound_all.size,
        current_outbound_count: p.outbound_all.size,
        contextual_inbound_count: p.contextual_inbound.size,
        contextual_outbound_count: p.contextual_outbound.size,
        click_depth_from_homepage: d === undefined ? 'UNREACHABLE' : d,
        contextual_inbound_from: [...p.inbound_contextual_sources].sort().join(' | '),
        http_status: statusMap.get(p.path)?.status ?? '',
      };
    });

  writeCsv(path.join(OUT, 'internal-links-inventory.csv'), Object.keys(invRows[0] || { URL: 1 }), invRows);

  writeCsv(
    path.join(OUT, 'crawl-links-raw.csv'),
    ['source_URL', 'target_URL', 'anchor_text', 'location'],
    allLinks.map((l) => ({
      source_URL: CANONICAL_HOST + (l.source === '/' ? '' : l.source),
      target_URL: CANONICAL_HOST + (l.target === '/' ? '' : l.target),
      anchor_text: l.anchor_text,
      location: l.location,
    })),
  );

  const unreachable = invRows.filter((r) => r.click_depth_from_homepage === 'UNREACHABLE');
  const thin = invRows.filter((r) => {
    if (r.URL.endsWith('/privacy-policy')) return false;
    return Number(r.contextual_inbound_count) < 3;
  });

  fs.writeFileSync(
    path.join(OUT, 'crawl-snapshot.json'),
    JSON.stringify(
      {
        base: BASE_ORIGIN,
        crawledAt: new Date().toISOString(),
        pagesVisited: visited.size,
        sitemapPaths: [...sitemapPaths].sort(),
        linkCount: allLinks.length,
        unreachable: unreachable.map((r) => r.URL),
        thinContextual: thin.map((r) => ({
          url: r.URL,
          contextual_inbound: r.contextual_inbound_count,
          from: r.contextual_inbound_from,
        })),
        inventory: invRows,
      },
      null,
      2,
    ),
  );

  console.log(
    JSON.stringify(
      {
        visited: visited.size,
        sitemapPages: sitemapPaths.size,
        links: allLinks.length,
        unreachable: unreachable.length,
        thinContextual: thin.length,
        out: OUT,
      },
      null,
      2,
    ),
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
