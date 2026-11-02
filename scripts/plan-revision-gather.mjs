import fs from 'fs';

const base = process.argv[2] || 'http://127.0.0.1:5063';

async function get(path) {
  const r = await fetch(base + path, { redirect: 'manual' });
  const html = await r.text();
  return { status: r.status, html, headers: r.headers };
}

function strip(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function metaDescription(html) {
  const m =
    html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
    html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
  return m?.[1] || '';
}

function h1(html) {
  const m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  return m ? strip(m[1]) : '';
}

function title(html) {
  return html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1] || '';
}

function bodyHrefs(html) {
  // crude: all internal hrefs
  return [...html.matchAll(/href=["'](\/[^"'#?]*)/g)].map((m) => m[1]);
}

function jaccard(a, b) {
  const wa = new Set(a.toLowerCase().split(/\s+/).filter((w) => w.length > 3));
  const wb = new Set(b.toLowerCase().split(/\s+/).filter((w) => w.length > 3));
  let inter = 0;
  for (const w of wa) if (wb.has(w)) inter++;
  const union = wa.size + wb.size - inter;
  return union ? +(inter / union).toFixed(3) : 0;
}

const blog = await get('/blog');
const posts = new Set();
for (const m of blog.html.matchAll(/href=["'](\/blog\/[a-z0-9-]+)["']/gi)) {
  if (!m[1].includes('/categories') && m[1] !== '/blog') posts.add(m[1]);
}
const cats = new Set();
for (const m of blog.html.matchAll(/href=["'](\/blog\/categories\/[a-z0-9-]+)["']/gi)) {
  cats.add(m[1]);
}

const access = await get('/access-consulting');
const accessTitle = title(access.html);

const freePages = {};
for (const p of ['/free-checklist', '/free-resources', '/resources/free-checklist']) {
  const x = await get(p);
  const text = strip(x.html);
  freePages[p] = {
    status: x.status,
    title: title(x.html),
    h1: h1(x.html),
    meta: metaDescription(x.html),
    word_count: text.split(/\s+/).filter(Boolean).length,
    body_links: [...new Set(bodyHrefs(x.html))],
    text,
  };
}

const overlap = {
  'free-checklist_vs_free-resources': jaccard(freePages['/free-checklist'].text, freePages['/free-resources'].text),
  'free-checklist_vs_resources-free-checklist': jaccard(
    freePages['/free-checklist'].text,
    freePages['/resources/free-checklist'].text,
  ),
  'free-resources_vs_resources-free-checklist': jaccard(
    freePages['/free-resources'].text,
    freePages['/resources/free-checklist'].text,
  ),
};

// View-source title encoding check: look for literal &amp; in title vs decoded &
const titleChecks = {};
for (const p of ['/blog', '/access-consulting', '/free-checklist']) {
  const x = await get(p);
  const raw = title(x.html);
  titleChecks[p] = {
    raw_title: raw,
    contains_amp_entity: raw.includes('&amp;'),
    contains_bare_amp: /&(?!amp;|lt;|gt;|quot;|#)/.test(raw),
    // Next often sends & as &amp; in HTML source which is CORRECT encoding, not double
    // Double would look like &amp;amp;
    contains_double_amp: raw.includes('&amp;amp;'),
  };
}

const out = {
  blog: {
    status: blog.status,
    html_length: blog.html.length,
    unique_post_links_no_js: [...posts].sort(),
    post_link_count: posts.size,
    category_links: [...cats].sort(),
    has_latest_posts_string: blog.html.includes('Latest Posts'),
    notes:
      'page.jsx only Suspense-wraps BlogPageClient (use client). Post grid is client-rendered; crawler without JS sees 0 post slug links.',
    proposed_after_ssr: {
      post_links: 'all canonical posts from registry (24) as <a href=/blog/slug>title</a> + excerpt',
      category_links: 3,
    },
  },
  title_encoding: titleChecks,
  access_consulting_title_sample: accessTitle,
  free_pages: Object.fromEntries(
    Object.entries(freePages).map(([k, v]) => {
      const { text, ...rest } = v;
      return [k, rest];
    }),
  ),
  free_pages_overlap_jaccard_words_gt3: overlap,
};

fs.writeFileSync('docs/seo/internal-links/plan-revision-gather.json', JSON.stringify(out, null, 2));
console.log(JSON.stringify(out, null, 2));
