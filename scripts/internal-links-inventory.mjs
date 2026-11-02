import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const SRC = path.join(ROOT, 'src');
const OUT = path.join(ROOT, 'docs', 'seo', 'internal-links');
const BASE = 'https://excelaccessconsultant.com';

fs.mkdirSync(OUT, { recursive: true });

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (['node_modules', '.next', 'dist'].includes(ent.name)) continue;
      walk(p, acc);
    } else if (/\.(jsx?|tsx?)$/.test(ent.name)) acc.push(p);
  }
  return acc;
}

const BLOG_ALIASES = {
  'access-vs-sql-server': 'access-vs-sql-server-when-to-migrate',
  'common-excel-vba-mistakes': 'common-excel-vba-mistakes-and-how-to-fix-them',
  'excel-reporting-automation': 'excel-reporting-automation-complete-guide',
  'excel-automation-signs': '10-signs-you-need-excel-automation',
  'access-database-crashing': 'why-your-access-database-keeps-crashing',
  'excel-automation-cost': 'excel-automation-cost-what-to-expect',
  'speed-up-excel': 'how-to-speed-up-slow-excel-spreadsheets',
};

const LEGACY_BLOG = {
  'excel-automation-signs': '10-signs-you-need-excel-automation',
  'access-database-crashing': 'why-your-access-database-keeps-crashing',
  'excel-automation-cost': 'excel-automation-cost-what-to-expect',
  'speed-up-excel': 'how-to-speed-up-slow-excel-spreadsheets',
};

function normalize(urlPath) {
  if (!urlPath || urlPath.includes('${') || urlPath.includes('{')) return null;
  let p = urlPath.split('?')[0].split('#')[0];
  if (!p.startsWith('/')) return null;
  if (p.startsWith('//') || p.startsWith('/api') || p.startsWith('/#')) return null;
  p = p.replace(/\.html$/i, '');
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);

  const svc = p.match(/^\/services\/(.+)$/);
  if (svc) p = `/${svc[1]}`;

  const legacy = p.match(/^\/blog\/2026\/01\/(.+)$/);
  if (legacy) p = `/blog/${LEGACY_BLOG[legacy[1]] || legacy[1]}`;

  const blog = p.match(/^\/blog\/([^/]+)$/);
  if (blog && BLOG_ALIASES[blog[1]]) p = `/blog/${BLOG_ALIASES[blog[1]]}`;

  return p || '/';
}

function extractHrefs(text) {
  const hrefs = new Set();
  const patterns = [
    /(?:href|to)\s*=\s*['"`](\/[^'"`?#]*)/g,
    /href:\s*['"](\/[^'"]+)['"]/g,
    /link:\s*['"](\/[^'"]+)['"]/g,
    /relatedService:\s*['"](\/[^'"]+)['"]/g,
  ];
  for (const re of patterns) {
    let m;
    while ((m = re.exec(text))) {
      const n = normalize(m[1]);
      if (n) hrefs.add(n);
    }
  }
  return [...hrefs];
}

function csvEscape(v) {
  const s = String(v ?? '');
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function writeCsv(file, headers, rows) {
  const lines = [headers.join(',')];
  for (const row of rows) {
    lines.push(headers.map((h) => csvEscape(row[h])).join(','));
  }
  fs.writeFileSync(file, lines.join('\n') + '\n', 'utf8');
}

// --- Registries ---
const blogReg = fs.readFileSync(path.join(SRC, 'app/blog/[slug]/registry.js'), 'utf8');
const postBlock = blogReg.split('export const BLOG_SLUG_ALIASES')[0];
const blogSlugs = [...postBlock.matchAll(/^\s+'([^']+)':\s*\{/gm)].map((m) => m[1]);

const blogMeta = {};
for (const slug of blogSlugs) {
  const chunk = postBlock.split(`'${slug}':`)[1]?.slice(0, 800) || '';
  const title = chunk.match(/title:\s*'([^']+)'/)?.[1] || slug;
  const og = chunk.match(/ogTitle:\s*'([^']+)'/)?.[1] || title;
  blogMeta[slug] = { title, h1: og };
}

const csReg = fs.readFileSync(path.join(SRC, 'app/case-studies/registry.js'), 'utf8');
const csSplit = csReg.split(/export const CASE_STUDY_ALIASES/);
const csBlock = csSplit[0];
const caseSlugs = [...csBlock.matchAll(/^\s+'([^']+)':\s*\{/gm)].map((m) => m[1]);
const caseMeta = {};
for (const slug of caseSlugs) {
  const chunk = csBlock.split(`'${slug}':`)[1]?.slice(0, 1200) || '';
  const title = chunk.match(/title:\s*'([^']+)'/)?.[1] || chunk.match(/title:\s*\n\s*'([^']+)'/)?.[1] || slug;
  const metaTitle = chunk.match(/metaTitle:\s*'([^']+)'/)?.[1] || title;
  const related = chunk.match(/relatedService:\s*'([^']+)'/)?.[1] || '';
  caseMeta[slug] = { title, h1: title, relatedService: related };
}

const catMeta = {
  'excel-tips': { title: 'Excel Tips', h1: 'Excel Tips', topic: 'excel tips' },
  'access-database': { title: 'Access Database', h1: 'Access Database', topic: 'access database' },
  'automation-guides': {
    title: 'Automation Guides',
    h1: 'Automation Guides',
    topic: 'automation guides',
  },
};

const serviceMeta = {
  '/excel-automation': {
    title: 'Excel Automation',
    h1: 'Excel Automation Services',
    topic: 'excel automation',
    type: 'pillar',
  },
  '/access-consulting': {
    title: 'Access Consulting',
    h1: 'Access Database Consulting',
    topic: 'access consulting',
    type: 'pillar',
  },
  '/access-database-repair': {
    title: 'Access Database Repair',
    h1: 'Access Database Repair',
    topic: 'access repair',
    type: 'service',
  },
  '/database-migration': {
    title: 'Database Migration',
    h1: 'Access Database Migration',
    topic: 'access to sql migration',
    type: 'pillar',
  },
  '/vba-development': {
    title: 'VBA Development',
    h1: 'Excel VBA Development',
    topic: 'excel vba development',
    type: 'pillar',
  },
  '/financial-modeling': {
    title: 'Financial Modeling',
    h1: 'Financial Modeling Services',
    topic: 'excel financial modeling',
    type: 'pillar',
  },
  '/hire-excel-vba-consultant': {
    title: 'Hire Excel VBA Consultant',
    h1: 'Hire an Excel VBA Consultant',
    topic: 'hire vba consultant',
    type: 'service',
  },
  '/excel-consultant-utah': {
    title: 'Excel Consultant Utah',
    h1: 'Excel VBA Consultant Serving Utah',
    topic: 'utah excel consultant',
    type: 'service',
  },
};

const pages = new Map();

function addPage(urlPath, meta) {
  const u = normalize(urlPath);
  if (!u || u === '/thank-you') return;
  if (!pages.has(u)) {
    pages.set(u, {
      path: u,
      url: BASE + (u === '/' ? '' : u),
      title: meta.title || u,
      h1: meta.h1 || meta.title || u,
      primary_topic: meta.topic || '',
      page_type: meta.type || 'utility',
      inbound: new Set(),
      outbound: new Set(),
      contextual_inbound: new Set(),
      contextual_outbound: new Set(),
    });
  } else {
    Object.assign(pages.get(u), Object.fromEntries(Object.entries(meta).filter(([, v]) => v)));
  }
}

addPage('/', { title: 'Home', h1: 'Home', topic: 'home', type: 'home' });
addPage('/about', { title: 'About', h1: 'About', topic: 'brand', type: 'utility' });
addPage('/contact', { title: 'Contact', h1: 'Contact', topic: 'conversion', type: 'utility' });
addPage('/pricing', { title: 'Pricing', h1: 'Pricing', topic: 'pricing', type: 'utility' });
addPage('/faq', { title: 'FAQ', h1: 'FAQ', topic: 'faq', type: 'utility' });
addPage('/privacy-policy', {
  title: 'Privacy Policy',
  h1: 'Privacy Policy',
  topic: 'legal',
  type: 'utility',
});
addPage('/blog', { title: 'Blog', h1: 'Blog', topic: 'blog hub', type: 'utility' });
addPage('/case-studies', {
  title: 'Case Studies',
  h1: 'Case Studies',
  topic: 'proof hub',
  type: 'utility',
});
addPage('/free-checklist', {
  title: 'Free Checklist',
  h1: 'Free Checklist',
  topic: 'lead magnet',
  type: 'utility',
});
addPage('/free-resources', {
  title: 'Free Resources',
  h1: 'Free Resources',
  topic: 'lead magnet',
  type: 'utility',
});
addPage('/resources/calculator', {
  title: 'ROI Calculator',
  h1: 'ROI Calculator',
  topic: 'lead magnet',
  type: 'utility',
});
addPage('/resources/faq', { title: 'Resources FAQ', h1: 'Resources FAQ', topic: 'faq', type: 'utility' });
addPage('/resources/free-checklist', {
  title: 'Resources Free Checklist',
  h1: 'Free Checklist',
  topic: 'lead magnet',
  type: 'utility',
});

for (const [p, m] of Object.entries(serviceMeta)) addPage(p, m);
for (const slug of blogSlugs) {
  addPage(`/blog/${slug}`, {
    title: blogMeta[slug].title,
    h1: blogMeta[slug].h1,
    topic: guessBlogTopic(slug),
    type: 'blog',
  });
}
for (const slug of caseSlugs) {
  addPage(`/case-studies/${slug}`, {
    title: caseMeta[slug].title,
    h1: caseMeta[slug].h1,
    topic: guessCaseTopic(slug, caseMeta[slug].relatedService),
    type: 'cluster',
  });
}
for (const [slug, m] of Object.entries(catMeta)) {
  addPage(`/blog/categories/${slug}`, {
    title: m.title,
    h1: m.h1,
    topic: m.topic,
    type: 'cluster',
  });
}

function guessBlogTopic(slug) {
  if (slug.includes('access') || slug.includes('migrate') || slug.includes('sql')) return 'access';
  if (slug.includes('financial') || slug.includes('modeling')) return 'financial modeling';
  if (slug.includes('vba')) return 'vba';
  if (slug.includes('excel') || slug.includes('automat') || slug.includes('spreadsheet') || slug.includes('report'))
    return 'excel automation';
  return 'general';
}

function guessCaseTopic(slug, related) {
  if (related) return related.replace(/^\//, '');
  return guessBlogTopic(slug);
}

// Global chrome links (Layout)
const layoutPath = path.join(SRC, 'app/components/Layout.jsx');
const layoutText = fs.readFileSync(layoutPath, 'utf8');
const globalLinks = new Set(extractHrefs(layoutText).filter((h) => pages.has(h)));

// Source-file -> page path mapping (best effort)
function fileToPage(file) {
  const rel = path.relative(path.join(SRC, 'app'), file).replace(/\\/g, '/');
  if (rel === 'page.jsx' || rel === 'HomePageClient.jsx') return '/';
  if (rel.startsWith('blog/[slug]/posts/')) return null; // handled via slug map below
  if (rel.startsWith('blog/[slug]/')) return '/blog';
  if (rel.startsWith('case-studies/[slug]/')) return '/case-studies';
  if (rel.startsWith('blog/categories/')) return '/blog';
  if (rel.includes('[') || rel.includes('services/')) return null;
  const m = rel.match(/^([^/]+)\/page\.jsx$/);
  if (m) return `/${m[1]}`;
  const m2 = rel.match(/^([^/]+)\/([^/]+)\/page\.jsx$/);
  if (m2) return `/${m2[1]}/${m2[2]}`;
  return null;
}

const postFileToSlug = {
  '10SignsYouNeedExcelAutomation': '10-signs-you-need-excel-automation',
  WhyYourAccessDatabaseKeepsCrashing: 'why-your-access-database-keeps-crashing',
  ExcelAutomationCost: 'excel-automation-cost-what-to-expect',
  HowToSpeedUpSlowExcelSpreadsheets: 'how-to-speed-up-slow-excel-spreadsheets',
  AccessVsSQLServer: 'access-vs-sql-server-when-to-migrate',
  CommonExcelVBAMistakes: 'common-excel-vba-mistakes-and-how-to-fix-them',
  FinancialModelingBestPractices: 'financial-modeling-best-practices',
  ExcelReportingAutomation: 'excel-reporting-automation-complete-guide',
  AccessDatabaseRepairGuide: 'access-database-repair-guide',
  IsMicrosoftAccessStillRelevant: 'is-microsoft-access-still-relevant-2026',
  AccessVsPowerApps: 'access-vs-power-apps-when-to-stay-on-access',
  WhenToMigrateFromAccess: 'when-to-migrate-from-access',
  AccessVsExcel: 'access-vs-excel-when-to-use-each',
  HowToSplitAccessDatabase: 'how-to-split-access-database',
  AccessDatabaseMultiUserSetup: 'access-database-multi-user-setup',
  CanAccessHandle50Users: 'can-access-handle-50-users',
  AccessSqlServerMigrationCost: 'access-sql-server-migration-cost',
  AccessDatabaseRepairCost: 'access-database-repair-cost',
  WhyAccessDatabasesBecomeCorrupted: 'why-access-databases-become-corrupted',
  AccessFrontEndBackEndArchitecture: 'access-front-end-back-end-architecture',
  HowToModernizeAccessDatabase: 'how-to-modernize-access-database',
  AccessDatabasePerformanceOptimization: 'access-database-performance-optimization',
  AccessDatabaseBestPractices: 'access-database-best-practices',
  AccessDatabaseMaintenanceChecklist: 'access-database-maintenance-checklist',
};

const contentEdges = []; // {from,to,source:'content'|'global'|'constant'}
const files = walk(SRC);

for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  const hrefs = extractHrefs(text);
  if (!hrefs.length) continue;

  const rel = path.relative(SRC, file).replace(/\\/g, '/');
  const isGlobal = rel === 'app/components/Layout.jsx';
  let from = null;

  if (isGlobal) {
    // applied to all pages later
  } else if (rel.startsWith('app/blog/[slug]/posts/')) {
    const base = path.basename(file, path.extname(file));
    const slug = postFileToSlug[base];
    if (slug) from = `/blog/${slug}`;
  } else if (rel === 'app/case-studies/registry.js') {
    // case studies link via relatedService field — handled below
    from = null;
  } else if (rel.startsWith('constants/') || rel.startsWith('app/components/')) {
    // shared constants: attribute outbound to pages that import them where possible
    from = null;
    for (const to of hrefs) {
      if (!pages.has(to)) continue;
      contentEdges.push({ from: '__shared__', to, file: rel });
    }
    continue;
  } else {
    from = fileToPage(file);
  }

  if (isGlobal) continue;
  if (!from || !pages.has(from)) continue;

  for (const to of hrefs) {
    if (!pages.has(to)) continue;
    if (to === from) continue;
    contentEdges.push({ from, to, file: rel });
  }
}

// Case study relatedService edges
for (const slug of caseSlugs) {
  const related = caseMeta[slug].relatedService;
  if (!related) continue;
  const to = normalize(related);
  const from = `/case-studies/${slug}`;
  if (pages.has(to) && pages.has(from) && to !== from) {
    contentEdges.push({ from, to, file: 'case-studies/registry.js' });
  }
}

// Constants used by many service pages — expand known SERVICE_CONTENT related links
const serviceContent = fs.readFileSync(path.join(SRC, 'constants/servicePageContent.js'), 'utf8');
const serviceKeys = [
  'access-consulting',
  'access-database-repair',
  'excel-automation',
  'database-migration',
  'vba-development',
  'financial-modeling',
];
for (const key of serviceKeys) {
  const parts = serviceContent.split(`'${key}':`);
  if (parts.length < 2) continue;
  const chunk = parts[1].slice(0, 3500);
  const relatedChunk = chunk.split('relatedLinks:')[1]?.slice(0, 800) || chunk;
  const hrefs = extractHrefs(relatedChunk);
  const sidebarChunk = chunk.split('sidebarExamples:')[1]?.slice(0, 800) || '';
  const hrefs2 = extractHrefs(sidebarChunk);
  const from = `/${key}`;
  for (const to of [...hrefs, ...hrefs2]) {
    if (!pages.has(to) || to === from) continue;
    contentEdges.push({ from, to, file: 'constants/servicePageContent.js' });
  }
}

// Utah page constants
const utah = fs.readFileSync(path.join(SRC, 'constants/utahPage.js'), 'utf8');
for (const to of extractHrefs(utah)) {
  if (!pages.has(to) || to === '/excel-consultant-utah') continue;
  contentEdges.push({ from: '/excel-consultant-utah', to, file: 'constants/utahPage.js' });
}

// Home conversion constants
const homeConv = fs.readFileSync(path.join(SRC, 'constants/homeConversion.js'), 'utf8');
for (const to of extractHrefs(homeConv)) {
  if (!pages.has(to) || to === '/') continue;
  contentEdges.push({ from: '/', to, file: 'constants/homeConversion.js' });
}

// Pricing page service links
const pricing = fs.readFileSync(path.join(SRC, 'constants/pricingPageContent.js'), 'utf8');
for (const to of extractHrefs(pricing)) {
  if (!pages.has(to) || to === '/pricing') continue;
  contentEdges.push({ from: '/pricing', to, file: 'constants/pricingPageContent.js' });
}

// Blog index / case study index typically list children — approximate from registries
for (const slug of blogSlugs) {
  contentEdges.push({ from: '/blog', to: `/blog/${slug}`, file: 'blog-index' });
}
for (const slug of Object.keys(catMeta)) {
  contentEdges.push({ from: '/blog', to: `/blog/categories/${slug}`, file: 'blog-categories' });
}
for (const slug of caseSlugs) {
  contentEdges.push({ from: '/case-studies', to: `/case-studies/${slug}`, file: 'case-studies-index' });
}

// Deduplicate content edges
const seenEdge = new Set();
const uniqueContent = [];
for (const e of contentEdges) {
  if (e.from === '__shared__') continue;
  const k = `${e.from}->${e.to}`;
  if (seenEdge.has(k)) continue;
  seenEdge.add(k);
  uniqueContent.push(e);
}

// Apply content edges
for (const e of uniqueContent) {
  const a = pages.get(e.from);
  const b = pages.get(e.to);
  if (!a || !b) continue;
  a.outbound.add(e.to);
  a.contextual_outbound.add(e.to);
  b.inbound.add(e.from);
  b.contextual_inbound.add(e.from);
}

// Apply global chrome to every page (except self)
for (const [p, page] of pages) {
  for (const g of globalLinks) {
    if (g === p) continue;
    page.outbound.add(g);
    // inbound from every other page via chrome is not realistic for "page A links to B";
    // model chrome as: homepage + every page can reach chrome targets at depth+1
  }
}

// For crawler reachability: homepage has all global links as outbound
const home = pages.get('/');
for (const g of globalLinks) {
  if (g === '/') continue;
  home.outbound.add(g);
  pages.get(g)?.inbound.add('/');
}

// BFS click depth from homepage using content + global links from each page
function neighbors(p) {
  const set = new Set(pages.get(p)?.outbound || []);
  for (const g of globalLinks) if (g !== p) set.add(g);
  return set;
}

const depth = new Map([['/', 0]]);
const q = ['/'];
while (q.length) {
  const cur = q.shift();
  const d = depth.get(cur);
  for (const n of neighbors(cur)) {
    if (!pages.has(n) || depth.has(n)) continue;
    depth.set(n, d + 1);
    q.push(n);
  }
}

// Inventory CSV
const invRows = [...pages.values()]
  .sort((a, b) => a.path.localeCompare(b.path))
  .map((p) => ({
    URL: p.url,
    title: p.title,
    H1: p.h1,
    primary_topic: p.primary_topic,
    page_type: p.page_type,
    current_inbound_count: p.inbound.size,
    current_outbound_count: new Set([...p.outbound, ...globalLinks].filter((x) => x !== p.path)).size,
    contextual_inbound_count: p.contextual_inbound.size,
    contextual_outbound_count: p.contextual_outbound.size,
    click_depth_from_homepage: depth.has(p.path) ? depth.get(p.path) : 'UNREACHABLE',
    contextual_inbound_from: [...p.contextual_inbound].sort().join(' | '),
  }));

writeCsv(path.join(OUT, 'internal-links-inventory.csv'), Object.keys(invRows[0]), invRows);

// Topic clusters
const clusters = [
  {
    cluster: 'excel-automation',
    pillar: '/excel-automation',
    pages: [
      '/excel-automation',
      '/hire-excel-vba-consultant',
      '/vba-development',
      '/blog/10-signs-you-need-excel-automation',
      '/blog/excel-automation-cost-what-to-expect',
      '/blog/excel-reporting-automation-complete-guide',
      '/blog/how-to-speed-up-slow-excel-spreadsheets',
      '/blog/common-excel-vba-mistakes-and-how-to-fix-them',
      '/blog/categories/excel-tips',
      '/blog/categories/automation-guides',
      '/case-studies/construction-automated-reporting',
      '/case-studies/distribution-slow-spreadsheet',
    ],
  },
  {
    cluster: 'access-consulting',
    pillar: '/access-consulting',
    pages: [
      '/access-consulting',
      '/access-database-repair',
      '/blog/why-your-access-database-keeps-crashing',
      '/blog/access-database-repair-guide',
      '/blog/access-database-repair-cost',
      '/blog/why-access-databases-become-corrupted',
      '/blog/access-database-multi-user-setup',
      '/blog/can-access-handle-50-users',
      '/blog/how-to-split-access-database',
      '/blog/access-front-end-back-end-architecture',
      '/blog/access-database-performance-optimization',
      '/blog/access-database-best-practices',
      '/blog/access-database-maintenance-checklist',
      '/blog/is-microsoft-access-still-relevant-2026',
      '/blog/access-vs-excel-when-to-use-each',
      '/blog/access-vs-power-apps-when-to-stay-on-access',
      '/blog/categories/access-database',
      '/case-studies/manufacturing-inventory-tracking',
      '/case-studies/retail-pricing-system',
      '/case-studies/distribution-warehouse-pick-list',
    ],
  },
  {
    cluster: 'database-migration',
    pillar: '/database-migration',
    pages: [
      '/database-migration',
      '/blog/access-vs-sql-server-when-to-migrate',
      '/blog/when-to-migrate-from-access',
      '/blog/access-sql-server-migration-cost',
      '/blog/how-to-modernize-access-database',
      '/case-studies/access-sql-migration-enterprise',
    ],
  },
  {
    cluster: 'vba-development',
    pillar: '/vba-development',
    pages: [
      '/vba-development',
      '/hire-excel-vba-consultant',
      '/blog/common-excel-vba-mistakes-and-how-to-fix-them',
      '/case-studies/retail-pricing-system',
    ],
  },
  {
    cluster: 'financial-modeling',
    pillar: '/financial-modeling',
    pages: [
      '/financial-modeling',
      '/blog/financial-modeling-best-practices',
      '/case-studies/financial-services-data-integration',
    ],
  },
  {
    cluster: 'local-utah',
    pillar: '/excel-consultant-utah',
    pages: ['/excel-consultant-utah'],
  },
];

const competitionFlags = [
  {
    cluster: 'vba-vs-excel-automation',
    note: 'COMPETES: /vba-development and /excel-automation overlap; /hire-excel-vba-consultant sits between both. Treat excel-automation as process-automation pillar; vba-development as code/macro pillar; hire page as conversion bridge linking both.',
  },
  {
    cluster: 'access-repair-vs-consulting',
    note: 'COMPETES mildly: /access-database-repair vs /access-consulting. Keep repair as problem-specific service; consulting as broader pillar.',
  },
  {
    cluster: 'free-resources-dupes',
    note: 'COMPETES: /free-checklist, /free-resources, /resources/free-checklist may cannibalize. Do not cross-link all three heavily; pick /free-resources as hub if kept.',
  },
];

const clusterRows = [];
for (const c of clusters) {
  for (const p of c.pages) {
    clusterRows.push({
      cluster: c.cluster,
      pillar_URL: BASE + c.pillar,
      cluster_page_URL: BASE + (p === '/' ? '' : p),
      is_pillar: p === c.pillar ? 'yes' : 'no',
    });
  }
}
for (const f of competitionFlags) {
  clusterRows.push({
    cluster: f.cluster,
    pillar_URL: '',
    cluster_page_URL: '',
    is_pillar: f.note,
  });
}
writeCsv(path.join(OUT, 'topic-clusters.csv'), ['cluster', 'pillar_URL', 'cluster_page_URL', 'is_pillar'], clusterRows);

// Link plan — only NEW contextual links needed to hit goals
const plan = [];
function planLink(source, target, anchor, location, reason) {
  if (source === target) return;
  if (!pages.has(source) || !pages.has(target)) return;
  const src = pages.get(source);
  if (src.contextual_outbound.has(target)) return; // already linked
  plan.push({
    source_URL: BASE + (source === '/' ? '' : source),
    target_URL: BASE + (target === '/' ? '' : target),
    anchor_text: anchor,
    insertion_location: location,
    reason,
  });
}

// Pillar <-> cluster bidirectional
for (const c of clusters) {
  for (const p of c.pages) {
    if (p === c.pillar) continue;
    planLink(
      p,
      c.pillar,
      pillarAnchor(c.pillar),
      'body paragraph near related-service mention OR related block',
      'cluster -> pillar (required)',
    );
    planLink(
      c.pillar,
      p,
      clusterAnchor(p),
      p.startsWith('/blog/')
        ? 'related resources / mid-body topical sentence'
        : p.startsWith('/case-studies/')
          ? 'sidebar examples or related section'
          : 'body or related section',
      'pillar -> cluster page (required)',
    );
  }
}

// Sibling links (1-3) where sensible
const siblingSets = [
  [
    '/blog/why-your-access-database-keeps-crashing',
    '/blog/why-access-databases-become-corrupted',
    '/blog/access-database-repair-guide',
  ],
  [
    '/blog/how-to-split-access-database',
    '/blog/access-database-multi-user-setup',
    '/blog/access-front-end-back-end-architecture',
  ],
  [
    '/blog/access-vs-sql-server-when-to-migrate',
    '/blog/when-to-migrate-from-access',
    '/blog/access-sql-server-migration-cost',
  ],
  [
    '/blog/10-signs-you-need-excel-automation',
    '/blog/excel-automation-cost-what-to-expect',
    '/blog/excel-reporting-automation-complete-guide',
  ],
  ['/blog/common-excel-vba-mistakes-and-how-to-fix-them', '/vba-development', '/excel-automation'],
  ['/access-database-repair', '/access-consulting', '/database-migration'],
  ['/hire-excel-vba-consultant', '/vba-development', '/excel-automation'],
];

for (const set of siblingSets) {
  for (let i = 0; i < set.length; i++) {
    for (let j = 0; j < set.length; j++) {
      if (i === j) continue;
      planLink(set[i], set[j], clusterAnchor(set[j]), 'in-body topical sentence', 'sibling cluster link');
    }
  }
}

// Related pillars
planLink('/excel-automation', '/vba-development', 'custom VBA development', 'capabilities or solution section', 'related pillars overlap');
planLink('/vba-development', '/excel-automation', 'Excel automation services', 'related section', 'related pillars overlap');
planLink('/access-consulting', '/database-migration', 'Access to SQL migration', 'related section', 'related pillars overlap');
planLink('/database-migration', '/access-consulting', 'Access database consulting', 'related section', 'related pillars overlap');
planLink('/access-consulting', '/access-database-repair', 'Access database repair', 'problem or related section', 'related service');
planLink('/financial-modeling', '/excel-automation', 'Excel automation', 'related section', 'related pillars overlap');
planLink('/excel-automation', '/financial-modeling', 'financial modeling', 'related section where reporting meets models', 'related pillars overlap');

// Homepage -> pillars already via nav; ensure hire + utah get homepage contextual if thin
planLink('/', '/hire-excel-vba-consultant', 'hire an Excel VBA consultant', 'services or CTA section paragraph', 'money page visibility');
planLink('/', '/excel-consultant-utah', 'Utah Excel consultant', 'local/about teaser if present else skip if no natural spot', 'local landing reach — skip if no natural homepage copy');

// Fill pages with <3 contextual inbound
for (const [p, page] of pages) {
  if (page.page_type === 'home') continue;
  if (['/privacy-policy', '/resources/faq', '/resources/free-checklist', '/free-checklist'].includes(p))
    continue;
  const need = 3 - page.contextual_inbound.size;
  if (need <= 0) continue;
  // find donors: same-cluster pillars/hubs
  const donors = suggestDonors(p);
  let added = 0;
  for (const d of donors) {
    if (added >= need) break;
    const before = plan.length;
    planLink(d, p, clusterAnchor(p), 'body paragraph or related block', `raise contextual inbound to 3 (currently ${page.contextual_inbound.size})`);
    if (plan.length > before) added++;
  }
}

function pillarAnchor(p) {
  const map = {
    '/excel-automation': 'Excel automation',
    '/access-consulting': 'Access consulting',
    '/database-migration': 'database migration',
    '/vba-development': 'VBA development',
    '/financial-modeling': 'financial modeling',
    '/excel-consultant-utah': 'Utah Excel consulting',
  };
  return map[p] || p.replace(/^\//, '').replace(/-/g, ' ');
}

function clusterAnchor(p) {
  if (p.startsWith('/blog/')) {
    const slug = p.replace('/blog/', '');
    const h = blogMeta[slug]?.h1 || slug;
    const words = h.replace(/\s*\|\s*.*$/, '').split(/\s+/).slice(0, 5).join(' ');
    return words.length <= 40 ? words : pillarAnchor(p);
  }
  if (p.startsWith('/case-studies/')) {
    const slug = p.replace('/case-studies/', '');
    return slug.split('-').slice(0, 4).join(' ');
  }
  return pillarAnchor(p);
}

function suggestDonors(p) {
  const list = [];
  for (const c of clusters) {
    if (c.pages.includes(p)) {
      list.push(c.pillar, '/blog', '/case-studies', '/pricing', '/faq');
      for (const sib of c.pages) if (sib !== p) list.push(sib);
    }
  }
  if (p.startsWith('/blog/')) list.push('/blog', '/excel-automation', '/access-consulting');
  if (p.startsWith('/case-studies/')) {
    list.push('/case-studies', caseMeta[p.split('/').pop()]?.relatedService);
  }
  return [...new Set(list.filter((x) => x && x !== p && pages.has(x)))];
}

writeCsv(
  path.join(OUT, 'link-plan.csv'),
  ['source_URL', 'target_URL', 'anchor_text', 'insertion_location', 'reason'],
  plan,
);

// Summary report
const orphans = invRows.filter((r) => r.current_inbound_count === 0);
const thin = invRows.filter((r) => Number(r.contextual_inbound_count) < 3);
const deep = invRows.filter((r) => r.click_depth_from_homepage === 'UNREACHABLE' || Number(r.click_depth_from_homepage) > 3);

const summary = `# Internal Links Inventory Summary (BEFORE implementation)

Generated: ${new Date().toISOString()}

## Counts
- Indexable pages inventoried (excl. thank-you, aliases, /services/*): **${invRows.length}**
- Blog posts: **${blogSlugs.length}**
- Case studies: **${caseSlugs.length}**
- Planned NEW contextual links: **${plan.length}**

## Reachability (nav+footer chrome included)
- Unreachable from homepage: **${deep.filter((r) => r.click_depth_from_homepage === 'UNREACHABLE').length}**
- Deeper than 3 clicks: **${deep.filter((r) => r.click_depth_from_homepage !== 'UNREACHABLE').length}**

## Orphans (zero total inbound including homepage chrome attribution)
- Count: **${orphans.length}**
${orphans
  .slice(0, 30)
  .map((r) => `- ${r.URL}`)
  .join('\n') || '- (none)'}

## Thin contextual inbound (<3 body/content links, chrome excluded)
- Count: **${thin.length}**
${thin
  .slice(0, 40)
  .map((r) => `- ${r.URL} (contextual inbound: ${r.contextual_inbound_count})`)
  .join('\n')}

## Competition / cannibalization flags
${competitionFlags.map((f) => `- ${f.note}`).join('\n')}

## Excluded from linking targets
- /thank-you
- /services/* (canonical aliases of service pillars)
- Blog slug aliases and /blog/2026/01/* legacy URLs (canonicalize to /blog/{slug})
- .html variants

## Next step
Review \`link-plan.csv\` before any content edits (STEP 3 gate).
`;

fs.writeFileSync(path.join(OUT, 'internal-links-audit.md'), summary, 'utf8');

console.log(
  JSON.stringify(
    {
      pages: invRows.length,
      plannedLinks: plan.length,
      thinContextual: thin.length,
      orphans: orphans.length,
      unreachable: deep.filter((r) => r.click_depth_from_homepage === 'UNREACHABLE').length,
      outDir: OUT,
    },
    null,
    2,
  ),
);
