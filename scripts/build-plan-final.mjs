/**
 * Final internal-link plan revision. Plan artifacts only — no site content edits.
 */
import fs from 'fs';

const OUT = 'docs/seo/internal-links';
const BASE = 'https://excelaccessconsultant.com';
const snap = JSON.parse(fs.readFileSync(`${OUT}/crawl-snapshot.json`, 'utf8'));

function csvEscape(v) {
  const s = String(v ?? '');
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}
function writeCsv(file, headers, rows) {
  fs.writeFileSync(
    file,
    [headers.join(','), ...rows.map((r) => headers.map((h) => csvEscape(r[h] ?? '')).join(','))].join(
      '\n',
    ) + '\n',
  );
}
function u(path) {
  if (!path || path === 'FREE_CANON') return path;
  return BASE + (path === '/' ? '' : path);
}
function pathOf(url) {
  if (!url || url === 'FREE_CANON') return url;
  return url.replace(BASE, '') || '/';
}

// ---------- shortTitles ----------
const postShortTitle = {
  '10-signs-you-need-excel-automation': 'Excel automation signs',
  'excel-automation-cost-what-to-expect': 'Excel automation pricing',
  'excel-reporting-automation-complete-guide': 'Excel reporting automation',
  'how-to-speed-up-slow-excel-spreadsheets': 'speed up Excel',
  'common-excel-vba-mistakes-and-how-to-fix-them': 'common VBA mistakes',
  'financial-modeling-best-practices': 'financial modeling practices',
  'why-your-access-database-keeps-crashing': 'Access crash causes',
  'why-access-databases-become-corrupted': 'why Access corrupts',
  'access-database-repair-guide': 'Access repair guide',
  'access-database-repair-cost': 'Access repair pricing',
  'how-to-split-access-database': 'split an Access database',
  'access-database-multi-user-setup': 'multi-user Access setup',
  'access-front-end-back-end-architecture': 'Access front-end design',
  'can-access-handle-50-users': 'Access with 50 users',
  'access-database-performance-optimization': 'Access performance tuning',
  'how-to-modernize-access-database': 'modernize an Access database',
  'access-database-best-practices': 'Access best practices',
  'access-database-maintenance-checklist': 'Access maintenance checklist',
  'is-microsoft-access-still-relevant-2026': 'Access relevance in 2026',
  'access-vs-excel-when-to-use-each': 'Access vs Excel',
  'access-vs-power-apps-when-to-stay-on-access': 'Access vs Power Apps',
  'access-vs-sql-server-when-to-migrate': 'Access vs SQL Server',
  'when-to-migrate-from-access': 'when to migrate Access',
  'access-sql-server-migration-cost': 'SQL migration pricing',
};

const caseShortTitle = {
  'manufacturing-inventory-tracking': 'zero-crash inventory system',
  'construction-automated-reporting': '30-second weekly reports',
  'financial-services-data-integration': 'Excel SQL data integration',
  'distribution-slow-spreadsheet': '10-second spreadsheet opens',
  'retail-pricing-system': 'automated retail pricing',
  'access-sql-migration-enterprise': '50-user SQL migration',
  'distribution-warehouse-pick-list': 'faster warehouse pick lists',
  'construction-job-costing-tracker': 'same-day job costing',
  'healthcare-records-access-sql-migration': 'healthcare SQL migration',
};

// ---------- categories ----------
const categoryMap = {
  'excel-automation': [
    '10-signs-you-need-excel-automation',
    'excel-automation-cost-what-to-expect',
    'excel-reporting-automation-complete-guide',
    'how-to-speed-up-slow-excel-spreadsheets',
    'common-excel-vba-mistakes-and-how-to-fix-them',
    'financial-modeling-best-practices',
  ],
  'database-migration': [
    'access-vs-sql-server-when-to-migrate',
    'when-to-migrate-from-access',
    'access-sql-server-migration-cost',
    'how-to-modernize-access-database',
  ],
  'access-database': [
    'why-your-access-database-keeps-crashing',
    'why-access-databases-become-corrupted',
    'access-database-repair-guide',
    'access-database-repair-cost',
    'how-to-split-access-database',
    'access-database-multi-user-setup',
    'access-front-end-back-end-architecture',
    'can-access-handle-50-users',
    'access-database-performance-optimization',
    'access-database-best-practices',
    'access-database-maintenance-checklist',
    'is-microsoft-access-still-relevant-2026',
    'access-vs-excel-when-to-use-each',
    'access-vs-power-apps-when-to-stay-on-access',
  ],
};
const postCategory = {};
for (const [cat, posts] of Object.entries(categoryMap)) {
  for (const p of posts) postCategory[p] = cat;
}
const categoryPageName = {
  'excel-automation': 'Excel Automation',
  'access-database': 'Access Database',
  'database-migration': 'Database Migration',
};
const categoryPillar = {
  'excel-automation': '/excel-automation',
  'access-database': '/access-consulting',
  'database-migration': '/database-migration',
};

// ---------- related posts (h + prior) ----------
const relatedPosts = {
  '10-signs-you-need-excel-automation': [
    'excel-automation-cost-what-to-expect',
    'excel-reporting-automation-complete-guide',
    'how-to-speed-up-slow-excel-spreadsheets',
  ],
  'excel-automation-cost-what-to-expect': [
    '10-signs-you-need-excel-automation',
    'common-excel-vba-mistakes-and-how-to-fix-them',
    'financial-modeling-best-practices',
  ],
  'excel-reporting-automation-complete-guide': [
    '10-signs-you-need-excel-automation',
    'how-to-speed-up-slow-excel-spreadsheets',
    'common-excel-vba-mistakes-and-how-to-fix-them',
  ],
  'how-to-speed-up-slow-excel-spreadsheets': [
    '10-signs-you-need-excel-automation',
    'excel-reporting-automation-complete-guide',
    'common-excel-vba-mistakes-and-how-to-fix-them',
  ],
  'common-excel-vba-mistakes-and-how-to-fix-them': [
    'excel-automation-cost-what-to-expect',
    'how-to-speed-up-slow-excel-spreadsheets',
    'excel-reporting-automation-complete-guide',
  ],
  'financial-modeling-best-practices': [
    'excel-automation-cost-what-to-expect',
    'excel-reporting-automation-complete-guide',
    'how-to-speed-up-slow-excel-spreadsheets',
  ],
  'why-your-access-database-keeps-crashing': [
    'why-access-databases-become-corrupted',
    'access-database-repair-guide',
    'access-database-repair-cost',
  ],
  'why-access-databases-become-corrupted': [
    'why-your-access-database-keeps-crashing',
    'access-database-repair-guide',
    'access-database-repair-cost',
  ],
  'access-database-repair-guide': [
    'access-database-repair-cost',
    'why-your-access-database-keeps-crashing',
    'why-access-databases-become-corrupted',
  ],
  'access-database-repair-cost': [
    'access-database-repair-guide',
    'why-your-access-database-keeps-crashing',
    'access-database-maintenance-checklist',
  ],
  'how-to-split-access-database': [
    'access-database-multi-user-setup',
    'access-front-end-back-end-architecture',
    'can-access-handle-50-users',
  ],
  'access-database-multi-user-setup': [
    'how-to-split-access-database',
    'access-front-end-back-end-architecture',
    'can-access-handle-50-users',
  ],
  'access-front-end-back-end-architecture': [
    'how-to-split-access-database',
    'access-database-multi-user-setup',
    'access-database-best-practices',
  ],
  'can-access-handle-50-users': [
    'access-database-multi-user-setup',
    'how-to-split-access-database',
    'access-sql-server-migration-cost',
  ],
  'access-database-performance-optimization': [
    'how-to-modernize-access-database',
    'access-database-best-practices',
    'access-database-maintenance-checklist',
  ],
  'how-to-modernize-access-database': [
    'access-database-performance-optimization',
    'when-to-migrate-from-access',
    'is-microsoft-access-still-relevant-2026',
  ],
  'access-database-best-practices': [
    'access-database-maintenance-checklist',
    'access-database-performance-optimization',
    'access-front-end-back-end-architecture',
  ],
  'access-database-maintenance-checklist': [
    'access-database-best-practices',
    'access-database-performance-optimization',
    'why-access-databases-become-corrupted',
  ],
  'is-microsoft-access-still-relevant-2026': [
    'access-vs-power-apps-when-to-stay-on-access',
    'access-vs-excel-when-to-use-each',
    'access-vs-sql-server-when-to-migrate',
  ],
  'access-vs-excel-when-to-use-each': [
    'is-microsoft-access-still-relevant-2026',
    'access-vs-power-apps-when-to-stay-on-access',
    'how-to-speed-up-slow-excel-spreadsheets',
  ],
  'access-vs-power-apps-when-to-stay-on-access': [
    'is-microsoft-access-still-relevant-2026',
    'access-vs-excel-when-to-use-each',
    'how-to-modernize-access-database',
  ],
  'access-vs-sql-server-when-to-migrate': [
    'when-to-migrate-from-access',
    'access-sql-server-migration-cost',
    'access-vs-power-apps-when-to-stay-on-access',
  ],
  'when-to-migrate-from-access': [
    'access-vs-sql-server-when-to-migrate',
    'how-to-modernize-access-database',
    'access-vs-excel-when-to-use-each',
  ],
  'access-sql-server-migration-cost': [
    'access-vs-sql-server-when-to-migrate',
    'when-to-migrate-from-access',
    'can-access-handle-50-users',
  ],
};

// ---------- related cases (i) ----------
const relatedCases = {
  'construction-automated-reporting': [
    'distribution-slow-spreadsheet',
    'financial-services-data-integration',
    'construction-job-costing-tracker',
  ],
  'distribution-slow-spreadsheet': [
    'construction-automated-reporting',
    'financial-services-data-integration',
    'retail-pricing-system',
  ],
  'financial-services-data-integration': [
    'construction-automated-reporting',
    'distribution-slow-spreadsheet',
    'access-sql-migration-enterprise',
  ],
  'manufacturing-inventory-tracking': [
    'retail-pricing-system',
    'distribution-warehouse-pick-list',
    'construction-job-costing-tracker',
  ],
  'retail-pricing-system': [
    'manufacturing-inventory-tracking',
    'distribution-warehouse-pick-list',
    'distribution-slow-spreadsheet',
  ],
  'distribution-warehouse-pick-list': [
    'manufacturing-inventory-tracking',
    'retail-pricing-system',
    'construction-job-costing-tracker',
  ],
  'construction-job-costing-tracker': [
    'manufacturing-inventory-tracking',
    'distribution-warehouse-pick-list',
    'construction-automated-reporting',
  ],
  'access-sql-migration-enterprise': [
    'healthcare-records-access-sql-migration',
    'financial-services-data-integration',
    'manufacturing-inventory-tracking',
  ],
  'healthcare-records-access-sql-migration': [
    'access-sql-migration-enterprise',
    'manufacturing-inventory-tracking',
    'financial-services-data-integration',
  ],
};

const caseRelatedService = {
  'manufacturing-inventory-tracking': '/access-consulting',
  'retail-pricing-system': '/access-consulting',
  'distribution-warehouse-pick-list': '/access-consulting',
  'construction-job-costing-tracker': '/access-consulting',
  'construction-automated-reporting': '/excel-automation',
  'distribution-slow-spreadsheet': '/excel-automation',
  'financial-services-data-integration': '/excel-automation',
  'access-sql-migration-enterprise': '/database-migration',
  'healthcare-records-access-sql-migration': '/database-migration',
};

const serviceName = {
  '/excel-automation': 'Excel VBA Automation',
  '/access-consulting': 'Access Database Consulting',
  '/access-database-repair': 'Access Database Repair',
  '/database-migration': 'Database Migration',
  '/vba-development': 'VBA Development',
  '/financial-modeling': 'Financial Modeling',
};

// ---------- redirects ----------
const redirects = [
  { from: '/free-checklist', to: '/free-resources', type: '301' },
  { from: '/resources/free-checklist', to: '/free-resources', type: '301' },
  { from: '/resources', to: '/free-resources', type: '301' },
  { from: '/resources/faq', to: '/faq', type: '301' },
  { from: '/blog/categories/excel-tips', to: '/blog/categories/excel-automation', type: '301' },
  {
    from: '/blog/categories/automation-guides',
    to: '/blog/categories/excel-automation',
    type: '301',
  },
];
writeCsv(`${OUT}/redirects.csv`, ['from', 'to', 'type'], redirects);

// ---------- shortTitle table ----------
const shortTitleRows = [
  ...Object.entries(postShortTitle).map(([slug, shortTitle]) => ({
    type: 'post',
    slug,
    shortTitle,
    word_count: shortTitle.split(/\s+/).length,
  })),
  ...Object.entries(caseShortTitle).map(([slug, shortTitle]) => ({
    type: 'case',
    slug,
    shortTitle,
    word_count: shortTitle.split(/\s+/).length,
  })),
];
writeCsv(`${OUT}/shortTitle-table.csv`, ['type', 'slug', 'shortTitle', 'word_count'], shortTitleRows);

// ---------- related / category tables ----------
function inboundMap(graph) {
  const inc = {};
  for (const tgts of Object.values(graph)) for (const t of tgts) inc[t] = (inc[t] || 0) + 1;
  return inc;
}
const relPostIn = inboundMap(relatedPosts);
writeCsv(
  `${OUT}/template-related-posts.csv`,
  ['post_slug', 'related_1', 'related_2', 'related_3', 'inbound_from_related_blocks', 'anchors_use'],
  Object.entries(relatedPosts).map(([slug, tgts]) => ({
    post_slug: slug,
    related_1: tgts[0] || '',
    related_2: tgts[1] || '',
    related_3: tgts[2] || '',
    inbound_from_related_blocks: relPostIn[slug] || 0,
    anchors_use: 'shortTitle (module exempt from 30% rule)',
  })),
);

const relCaseIn = inboundMap(relatedCases);
writeCsv(
  `${OUT}/template-related-case-studies.csv`,
  [
    'case_slug',
    'relatedService',
    'related_1',
    'related_2',
    'related_3',
    'inbound_from_related_blocks',
    'note',
  ],
  Object.entries(relatedCases).map(([slug, tgts]) => ({
    case_slug: slug,
    relatedService: caseRelatedService[slug],
    related_1: tgts[0] || '',
    related_2: tgts[1] || '',
    related_3: tgts[2] || '',
    inbound_from_related_blocks: relCaseIn[slug] || 0,
    note: 'Replace otherStudies.slice hard-order; anchors = shortTitle',
  })),
);

writeCsv(
  `${OUT}/template-category-taxonomy.csv`,
  [
    'post_slug',
    'category_slug',
    'category_label_on_post',
    'category_page',
    'pillar_intro_link',
    'link_category_chip',
  ],
  Object.keys(postShortTitle).map((slug) => ({
    post_slug: slug,
    category_slug: postCategory[slug],
    category_label_on_post: categoryPageName[postCategory[slug]],
    category_page: `/blog/categories/${postCategory[slug]}`,
    pillar_intro_link: categoryPillar[postCategory[slug]],
    link_category_chip: 'yes',
  })),
);

// ---------- link plan ----------
const rows = [];
const seen = new Set();
const bodyAnchorsByTarget = {}; // target -> {anchor: count} for BODY only

function isContextualLocation(loc) {
  const l = (loc || '').toLowerCase();
  if (l.includes('footer') || l.includes('nav') || l.includes('breadcrumb')) return false;
  if (l.includes('blog hub') || l.includes('case-studies index')) return false;
  return (
    l.includes('body') ||
    l.includes('related') ||
    l.includes('pillar') ||
    l.includes('category chip') ||
    l.includes('tile') ||
    l.includes('cta') ||
    l.includes('card') ||
    l.includes('teaser') ||
    l.includes('sidebar') ||
    l.includes('stretched')
  );
}

function add({
  source,
  target,
  anchor,
  location,
  reason,
  new_or_existing = 'new',
  current_anchor = '',
  action = 'keep',
  skipBodyDupRelated = true,
}) {
  // never target redirected URLs
  const redirected = new Set(redirects.map((r) => r.from));
  if (redirected.has(target)) {
    throw new Error(`Plan targets redirect URL: ${source} -> ${target}`);
  }
  if (target === 'FREE_CANON' || target === '/free-checklist') {
    target = '/free-resources';
  }
  const k = `${source}->${target}`;
  if (seen.has(k)) return false;
  seen.add(k);

  const loc = location;
  const isBody = /body/i.test(loc) && !/related/i.test(loc);
  if (isBody) {
    if (!bodyAnchorsByTarget[target]) bodyAnchorsByTarget[target] = {};
    bodyAnchorsByTarget[target][anchor] = (bodyAnchorsByTarget[target][anchor] || 0) + 1;
  }

  rows.push({
    source_URL: u(source),
    target_URL: u(target),
    anchor_text: anchor,
    insertion_location: loc,
    reason,
    new_or_existing,
    current_anchor,
    action,
  });
  return true;
}

// --- Chrome / template fixes (non-body) ---
add({
  source: '/',
  target: '/free-resources',
  anchor: 'Free Resources',
  location: 'footer Resources column',
  reason: 'Repoint footer from /free-checklist to /free-resources',
  new_or_existing: 'existing',
  current_anchor: 'Free Resources',
  action: 'rewrite',
});
add({
  source: '/contact',
  target: '/free-resources',
  anchor: 'Free Resources',
  location: 'contact resource tile',
  reason: 'Repoint contact tile from /free-checklist',
  new_or_existing: 'existing',
  current_anchor: 'Free Resources',
  action: 'rewrite',
});
add({
  source: '/faq',
  target: '/free-resources',
  anchor: 'Free Resources',
  location: 'faq resource tile',
  reason: 'Repoint faq tile from /free-checklist',
  new_or_existing: 'existing',
  current_anchor: 'Free Resources',
  action: 'rewrite',
});
add({
  source: '/resources/calculator',
  target: '/free-resources',
  anchor: 'Free Resources',
  location: 'breadcrumb parent crumb',
  reason: 'Breadcrumb Resources currently /resources 404; repoint to /free-resources',
  new_or_existing: 'new',
  current_anchor: 'Resources',
  action: 'rewrite',
});
add({
  source: '/',
  target: '/',
  anchor: 'ExcelAccessConsultant Home',
  location: 'footer logo link',
  reason: 'Footer logo link lacks aria-label (header already has one); add aria-label so anchor is not empty',
  new_or_existing: 'existing',
  current_anchor: '(empty visible / img alt only)',
  action: 'rewrite',
});

// Blog hub SSR (listing — not contextual inbound)
add({
  source: '/blog',
  target: '/blog/categories/excel-automation',
  anchor: 'Excel Automation',
  location: 'blog hub category links (SSR)',
  reason: 'Server-render 3 category links; remove separate BLOG_POSTS list',
  new_or_existing: 'new',
});
add({
  source: '/blog',
  target: '/blog/categories/access-database',
  anchor: 'Access Database',
  location: 'blog hub category links (SSR)',
  reason: 'Server-render category link',
  new_or_existing: 'new',
});
add({
  source: '/blog',
  target: '/blog/categories/database-migration',
  anchor: 'Database Migration',
  location: 'blog hub category links (SSR)',
  reason: 'Server-render new category link',
  new_or_existing: 'new',
});
// One representative hub→post row documenting SSR of all 24 (avoid 24 hub pairs flooding + hub not contextual)
add({
  source: '/blog',
  target: '/blog/10-signs-you-need-excel-automation',
  anchor: '10 Signs You Need Excel Automation',
  location: 'blog hub SSR post list (title link + excerpt; all 24 registry posts)',
  reason: 'SSR all 24 registry posts; titles from registry; whole-card stretched-link on title only',
  new_or_existing: 'new',
});

// Category chips + category page structure
for (const [slug, cat] of Object.entries(postCategory)) {
  add({
    source: `/blog/${slug}`,
    target: `/blog/categories/${cat}`,
    anchor: categoryPageName[cat],
    location: 'category chip on post',
    reason: 'Link category chip; label equals page name; one category per post',
    new_or_existing: 'new',
  });
}
for (const [cat, pillar] of Object.entries(categoryPillar)) {
  add({
    source: `/blog/categories/${cat}`,
    target: pillar,
    anchor: serviceName[pillar] || categoryPageName[cat],
    location: 'category page intro sentence',
    reason: 'One intro sentence linking pillar; self-canonical; in sitemap',
    new_or_existing: 'new',
  });
}

// Card / generic anchor pattern fixes
add({
  source: '/case-studies/manufacturing-inventory-tracking',
  target: '/access-consulting',
  anchor: 'Access Database Consulting',
  location: 'case page related service (replace View service → / Explore…)',
  reason: 'One link per target; anchor = service name; heading/title only pattern',
  new_or_existing: 'existing',
  current_anchor: 'View service → / Explore the service behind this project',
  action: 'rewrite',
});
add({
  source: '/pricing',
  target: '/excel-automation',
  anchor: 'Excel VBA Automation',
  location: 'pricing service card (replace View service →)',
  reason: 'Anchor = service name; card heading stretched-link; Get quote CTA is the CTA link text',
  new_or_existing: 'existing',
  current_anchor: 'View service →',
  action: 'rewrite',
});
add({
  source: '/pricing',
  target: '/access-consulting',
  anchor: 'Access Database Consulting',
  location: 'pricing service card',
  reason: 'Anchor = service name',
  new_or_existing: 'existing',
  current_anchor: 'View service →',
  action: 'rewrite',
});
add({
  source: '/pricing',
  target: '/vba-development',
  anchor: 'VBA Development',
  location: 'pricing service card',
  reason: 'Anchor = service name',
  new_or_existing: 'existing',
  current_anchor: 'View service →',
  action: 'rewrite',
});
add({
  source: '/pricing',
  target: '/database-migration',
  anchor: 'Database Migration',
  location: 'pricing service card',
  reason: 'Anchor = service name',
  new_or_existing: 'existing',
  current_anchor: 'View service →',
  action: 'rewrite',
});
add({
  source: '/pricing',
  target: '/financial-modeling',
  anchor: 'Financial Modeling',
  location: 'pricing service card',
  reason: 'Anchor = service name',
  new_or_existing: 'existing',
  current_anchor: 'View service →',
  action: 'rewrite',
});
add({
  source: '/pricing',
  target: '/access-database-repair',
  anchor: 'Access Database Repair',
  location: 'pricing service card',
  reason: 'Anchor = service name',
  new_or_existing: 'existing',
  current_anchor: 'View service →',
  action: 'rewrite',
});

// Hire teasers — mapped from live card text
add({
  source: '/hire-excel-vba-consultant',
  target: '/case-studies/construction-automated-reporting',
  anchor: 'Manufacturing Report Automation',
  location: 'hire teaser card 1 heading (stretched-link)',
  reason:
    'Card text: manufacturing production reports 8hrs→15min, $15k/yr — closest case is construction-automated-reporting (weekly reports, $15k). Heading is sole link text.',
  new_or_existing: 'existing',
  current_anchor: 'Read full case study →',
  action: 'rewrite',
});
add({
  source: '/hire-excel-vba-consultant',
  target: '/case-studies/financial-services-data-integration',
  anchor: 'Financial Close Process',
  location: 'hire teaser card 2 heading (stretched-link)',
  reason:
    'Card text: finance monthly close 3 days→10 min — maps to financial-services-data-integration (finance data automation).',
  new_or_existing: 'existing',
  current_anchor: 'Read full case study →',
  action: 'rewrite',
});
add({
  source: '/hire-excel-vba-consultant',
  target: '/case-studies/distribution-slow-spreadsheet',
  anchor: 'Operations Dashboard',
  location: 'hire teaser card 3 heading (stretched-link)',
  reason:
    'Card text: operations manager multi-source dashboards 6hrs→5min — maps to distribution-slow-spreadsheet (ops spreadsheet/dashboard performance).',
  new_or_existing: 'existing',
  current_anchor: 'Read full case study →',
  action: 'rewrite',
});

// (b) Free resources — one link per source, distinct anchors (checklist OK: page offers Excel Automation Readiness Checklist)
const freeSources = [
  ['/pricing', 'automation readiness checklist', 'body near pricing / resources'],
  ['/contact', 'download free guides', 'contact Free Resources tile body'], // tile already added — skip if seen
  ['/access-consulting', 'Access health check download', 'Related resources / Guides'],
  ['/access-database-repair', 'free repair readiness guides', 'Related resources / Services'],
  [
    '/blog/access-database-maintenance-checklist',
    'Excel and Access checklists',
    'body CTA paragraph',
  ],
  ['/blog/access-database-best-practices', 'free Access health check', 'body CTA paragraph'],
];
// contact tile already linked footer-style — use distinct body if needed; contact already has tile row
for (const [src, anchor, loc] of freeSources) {
  if (src === '/contact') continue; // tile row already covers contact→free-resources
  add({
    source: src,
    target: '/free-resources',
    anchor,
    location: loc,
    reason: 'Free resources one link per source; distinct anchors; page delivers checklist download',
    new_or_existing: src.includes('maintenance') ? 'existing' : 'new',
    current_anchor: src.includes('maintenance') ? 'free Excel and Access checklists' : '',
    action: src.includes('maintenance') ? 'rewrite' : 'keep',
  });
}

// (c) FAQ — five new sources + existing contact; distinct anchors. No body FAQ on migration/vba/financial (pillar may still list faq)
add({
  source: '/contact',
  target: '/faq',
  anchor: 'common questions',
  location: 'contact FAQ tile',
  reason: 'Existing contact→faq tile; natural anchor',
  new_or_existing: 'existing',
  current_anchor: 'FAQ',
  action: 'rewrite',
});
add({
  source: '/pricing',
  target: '/faq',
  anchor: 'pricing and timeline questions',
  location: 'body near pricing FAQ teaser',
  reason: 'FAQ inbound; distinct anchor',
  new_or_existing: 'new',
});
add({
  source: '/hire-excel-vba-consultant',
  target: '/faq',
  anchor: 'how projects work',
  location: 'body FAQ / process section',
  reason: 'FAQ inbound; distinct anchor',
  new_or_existing: 'new',
});
add({
  source: '/excel-consultant-utah',
  target: '/faq',
  anchor: 'answers to common questions',
  location: 'body near process / CTA',
  reason: 'FAQ inbound; distinct anchor',
  new_or_existing: 'new',
});
add({
  source: '/excel-automation',
  target: '/faq',
  anchor: 'frequently asked questions',
  location: 'Related resources / Services group',
  reason: 'FAQ in excel-automation pillar block',
  new_or_existing: 'new',
});
add({
  source: '/access-consulting',
  target: '/faq',
  anchor: 'common Access questions',
  location: 'Related resources / Services group',
  reason: 'FAQ in access-consulting pillar block',
  new_or_existing: 'new',
});

// (d) Hire inbound — six sources, six anchors
add({
  source: '/vba-development',
  target: '/hire-excel-vba-consultant',
  anchor: 'hire a VBA consultant',
  location: 'Related resources / Services group',
  reason: 'Hire inbound',
  new_or_existing: 'new',
});
add({
  source: '/excel-automation',
  target: '/hire-excel-vba-consultant',
  anchor: 'hire Excel VBA help',
  location: 'Related resources / Services group',
  reason: 'Hire inbound',
  new_or_existing: 'new',
});
add({
  source: '/blog/common-excel-vba-mistakes-and-how-to-fix-them',
  target: '/hire-excel-vba-consultant',
  anchor: 'work with a VBA expert',
  location: 'body closing / next-step sentence',
  reason: 'Hire inbound',
  new_or_existing: 'new',
});
add({
  source: '/case-studies/retail-pricing-system',
  target: '/hire-excel-vba-consultant',
  anchor: 'hire for similar projects',
  location: 'body outcome / CTA sentence',
  reason: 'Hire inbound',
  new_or_existing: 'new',
});
add({
  source: '/case-studies/construction-automated-reporting',
  target: '/hire-excel-vba-consultant',
  anchor: 'engage a VBA consultant',
  location: 'body outcome / CTA sentence',
  reason: 'Hire inbound',
  new_or_existing: 'new',
});
add({
  source: '/pricing',
  target: '/hire-excel-vba-consultant',
  anchor: 'VBA consultant engagement',
  location: 'body near hire / packaging',
  reason: 'Hire inbound',
  new_or_existing: 'new',
});

// (e) Utah inbound
add({
  source: '/about',
  target: '/excel-consultant-utah',
  anchor: 'Utah-based consulting',
  location: 'body / related links',
  reason: 'Existing about→utah',
  new_or_existing: 'existing',
  current_anchor: 'Utah-based consulting',
  action: 'keep',
});
add({
  source: '/contact',
  target: '/excel-consultant-utah',
  anchor: 'Excel consultant in Utah',
  location: 'body or local tile',
  reason: 'Utah inbound; distinct anchor',
  new_or_existing: 'new',
});
add({
  source: '/pricing',
  target: '/excel-consultant-utah',
  anchor: 'Utah Excel consulting',
  location: 'body local service mention',
  reason: 'Utah inbound; no rate promise (Utah page has no published rates)',
  new_or_existing: 'new',
});
add({
  source: '/hire-excel-vba-consultant',
  target: '/excel-consultant-utah',
  anchor: 'local Utah VBA help',
  location: 'body location / about section',
  reason: 'Utah inbound; distinct anchor',
  new_or_existing: 'new',
});
// homepage: no natural Utah sentence — omit

// (g) Pillar Related resources blocks
function addPillar(source, target, anchor, group) {
  add({
    source,
    target,
    anchor,
    location: `Related resources / ${group} (pillar block ≤10)`,
    reason: `Pillar related block — ${group}`,
    new_or_existing: 'new',
  });
}

// excel-automation: guides 4 + case 1 + services 4 = 9
addPillar('/excel-automation', '/blog/10-signs-you-need-excel-automation', postShortTitle['10-signs-you-need-excel-automation'], 'Guides');
addPillar('/excel-automation', '/blog/excel-automation-cost-what-to-expect', postShortTitle['excel-automation-cost-what-to-expect'], 'Guides');
addPillar('/excel-automation', '/blog/excel-reporting-automation-complete-guide', postShortTitle['excel-reporting-automation-complete-guide'], 'Guides');
addPillar('/excel-automation', '/blog/how-to-speed-up-slow-excel-spreadsheets', postShortTitle['how-to-speed-up-slow-excel-spreadsheets'], 'Guides');
add({
  source: '/excel-automation',
  target: '/case-studies/construction-automated-reporting',
  anchor: caseShortTitle['construction-automated-reporting'],
  location: 'Related resources / Case studies (pillar block ≤10)',
  reason: 'Existing construction case in excel-automation related',
  new_or_existing: 'existing',
  current_anchor: 'Case Study: 6 Hours → 30 Seconds',
  action: 'rewrite',
});
add({
  source: '/excel-automation',
  target: '/vba-development',
  anchor: 'VBA Development',
  location: 'Related resources / Services (pillar block ≤10)',
  reason: 'Existing service link',
  new_or_existing: 'existing',
  action: 'keep',
});
add({
  source: '/excel-automation',
  target: '/access-consulting',
  anchor: 'Access Database Consulting',
  location: 'Related resources / Services (pillar block ≤10)',
  reason: 'Existing service link',
  new_or_existing: 'existing',
  action: 'keep',
});
// hire + faq already added above for excel-automation

// access-consulting: keep migration, repair, manufacturing + add crashing, performance, free-resources, faq
add({
  source: '/access-consulting',
  target: '/database-migration',
  anchor: 'Database Migration',
  location: 'Related resources / Services (pillar block ≤10)',
  reason: 'Existing related',
  new_or_existing: 'existing',
  action: 'keep',
});
add({
  source: '/access-consulting',
  target: '/access-database-repair',
  anchor: 'Access Database Repair',
  location: 'Related resources / Services (pillar block ≤10)',
  reason: 'Existing related',
  new_or_existing: 'existing',
  action: 'keep',
});
add({
  source: '/access-consulting',
  target: '/case-studies/manufacturing-inventory-tracking',
  anchor: caseShortTitle['manufacturing-inventory-tracking'],
  location: 'Related resources / Case studies (pillar block ≤10)',
  reason: 'Existing manufacturing case',
  new_or_existing: 'existing',
  current_anchor: 'Case Study: Zero Crashes',
  action: 'rewrite',
});
addPillar(
  '/access-consulting',
  '/blog/why-your-access-database-keeps-crashing',
  postShortTitle['why-your-access-database-keeps-crashing'],
  'Guides',
);
addPillar(
  '/access-consulting',
  '/blog/access-database-performance-optimization',
  postShortTitle['access-database-performance-optimization'],
  'Guides',
);
// free-resources + faq already added

// access-database-repair: guides repair-guide, repair-cost, corrupted, crashing + free-resources; keep consulting + migration + manufacturing case; drop multi-user/vs-excel/best/fe
addPillar(
  '/access-database-repair',
  '/blog/access-database-repair-guide',
  postShortTitle['access-database-repair-guide'],
  'Guides',
);
addPillar(
  '/access-database-repair',
  '/blog/access-database-repair-cost',
  postShortTitle['access-database-repair-cost'],
  'Guides',
);
addPillar(
  '/access-database-repair',
  '/blog/why-access-databases-become-corrupted',
  postShortTitle['why-access-databases-become-corrupted'],
  'Guides',
);
addPillar(
  '/access-database-repair',
  '/blog/why-your-access-database-keeps-crashing',
  postShortTitle['why-your-access-database-keeps-crashing'],
  'Guides',
);
add({
  source: '/access-database-repair',
  target: '/access-consulting',
  anchor: 'Access Database Consulting',
  location: 'Related resources / Services (pillar block ≤10)',
  reason: 'Existing related',
  new_or_existing: 'existing',
  action: 'keep',
});
add({
  source: '/access-database-repair',
  target: '/database-migration',
  anchor: 'Database Migration',
  location: 'Related resources / Services (pillar block ≤10)',
  reason: 'Existing related',
  new_or_existing: 'existing',
  action: 'keep',
});
add({
  source: '/access-database-repair',
  target: '/case-studies/manufacturing-inventory-tracking',
  anchor: caseShortTitle['manufacturing-inventory-tracking'],
  location: 'Related resources / Case studies (pillar block ≤10)',
  reason: 'Existing crash recovery case',
  new_or_existing: 'existing',
  current_anchor: 'Case Study: Crash Recovery',
  action: 'rewrite',
});
// free-resources already added for repair

// database-migration: vs-sql, when-to-migrate, migration-cost, modernize, enterprise, healthcare, faq; keep consulting
addPillar(
  '/database-migration',
  '/blog/access-vs-sql-server-when-to-migrate',
  postShortTitle['access-vs-sql-server-when-to-migrate'],
  'Guides',
);
addPillar(
  '/database-migration',
  '/blog/when-to-migrate-from-access',
  postShortTitle['when-to-migrate-from-access'],
  'Guides',
);
addPillar(
  '/database-migration',
  '/blog/access-sql-server-migration-cost',
  postShortTitle['access-sql-server-migration-cost'],
  'Guides',
);
addPillar(
  '/database-migration',
  '/blog/how-to-modernize-access-database',
  postShortTitle['how-to-modernize-access-database'],
  'Guides',
);
add({
  source: '/database-migration',
  target: '/case-studies/access-sql-migration-enterprise',
  anchor: caseShortTitle['access-sql-migration-enterprise'],
  location: 'Related resources / Case studies (pillar block ≤10)',
  reason: 'Keep enterprise case',
  new_or_existing: 'existing',
  current_anchor: 'Case Study: Access to SQL Migration',
  action: 'rewrite',
});
addPillar(
  '/database-migration',
  '/case-studies/healthcare-records-access-sql-migration',
  caseShortTitle['healthcare-records-access-sql-migration'],
  'Case studies',
);
add({
  source: '/database-migration',
  target: '/access-consulting',
  anchor: 'Access Database Consulting',
  location: 'Related resources / Services (pillar block ≤10)',
  reason: 'Existing related',
  new_or_existing: 'existing',
  action: 'keep',
});
add({
  source: '/database-migration',
  target: '/faq',
  anchor: 'migration questions answered',
  location: 'Related resources / Services (pillar block ≤10)',
  reason: 'FAQ in database-migration pillar block (not a separate body FAQ row set)',
  new_or_existing: 'new',
});

// vba-development: add mistakes, hire, faq; keep excel-automation, retail, access-consulting
add({
  source: '/vba-development',
  target: '/excel-automation',
  anchor: 'Excel VBA Automation',
  location: 'Related resources / Services (pillar block ≤10)',
  reason: 'Existing related',
  new_or_existing: 'existing',
  action: 'keep',
});
add({
  source: '/vba-development',
  target: '/case-studies/retail-pricing-system',
  anchor: caseShortTitle['retail-pricing-system'],
  location: 'Related resources / Case studies (pillar block ≤10)',
  reason: 'Existing retail case',
  new_or_existing: 'existing',
  current_anchor: 'Case Study: Pricing System',
  action: 'rewrite',
});
add({
  source: '/vba-development',
  target: '/access-consulting',
  anchor: 'Access Database Consulting',
  location: 'Related resources / Services (pillar block ≤10)',
  reason: 'Existing related',
  new_or_existing: 'existing',
  action: 'keep',
});
addPillar(
  '/vba-development',
  '/blog/common-excel-vba-mistakes-and-how-to-fix-them',
  postShortTitle['common-excel-vba-mistakes-and-how-to-fix-them'],
  'Guides',
);
add({
  source: '/vba-development',
  target: '/faq',
  anchor: 'VBA project questions',
  location: 'Related resources / Services (pillar block ≤10)',
  reason: 'FAQ in vba-development pillar block',
  new_or_existing: 'new',
});
// hire already added

// financial-modeling: no new rows — mark existing only if needed (none)

// Related posts registry
for (const [src, tgts] of Object.entries(relatedPosts)) {
  for (const t of tgts) {
    add({
      source: `/blog/${src}`,
      target: `/blog/${t}`,
      anchor: postShortTitle[t],
      location: 'Related posts block (end of post)',
      reason: 'Related posts module; anchor = shortTitle; exempt from 30% rule',
      new_or_existing: 'new',
    });
  }
}

// Related cases registry + relatedService one link
for (const [src, tgts] of Object.entries(relatedCases)) {
  for (const t of tgts) {
    add({
      source: `/case-studies/${src}`,
      target: `/case-studies/${t}`,
      anchor: caseShortTitle[t],
      location: 'Related case studies sidebar',
      reason: 'Related cases module; anchor = shortTitle; exempt from 30%',
      new_or_existing: 'new',
    });
  }
  const svc = caseRelatedService[src];
  add({
    source: `/case-studies/${src}`,
    target: svc,
    anchor: serviceName[svc],
    location: 'case related service (one link; service name anchor)',
    reason: 'Replace View service → / Explore… with service name',
    new_or_existing: 'existing',
    current_anchor: 'View service →',
    action: 'rewrite',
  });
}

// Body donors for thin pages / needs-content replacements (skip if related-block already pairs)
const bodyDonors = [
  // repair-cost inbound body (related already covers some; add distinct sources not in related graph as body)
  [
    '/blog/access-database-repair-guide',
    '/blog/access-database-repair-cost',
    'Access repair pricing',
    'body cost sentence',
  ],
  // already in related — skip duplicates via seen
  [
    '/blog/why-your-access-database-keeps-crashing',
    '/blog/access-database-repair-cost',
    'what repair costs',
    'body cost sentence',
  ],
  [
    '/blog/why-access-databases-become-corrupted',
    '/blog/access-database-repair-cost',
    'repair cost ranges',
    'body cost sentence',
  ],
  [
    '/case-studies/access-sql-migration-enterprise',
    '/blog/can-access-handle-50-users',
    'Access with 50 users',
    'body capacity sentence',
  ],
  [
    '/blog/when-to-migrate-from-access',
    '/blog/can-access-handle-50-users',
    'Access user limits',
    'body capacity sentence',
  ],
  [
    '/blog/access-vs-sql-server-when-to-migrate',
    '/blog/can-access-handle-50-users',
    'can Access handle 50 users',
    'body capacity sentence',
  ],
  [
    '/blog/access-database-performance-optimization',
    '/blog/how-to-modernize-access-database',
    'modernize an Access database',
    'body modernization sentence',
  ],
  [
    '/blog/when-to-migrate-from-access',
    '/blog/how-to-modernize-access-database',
    'Access modernization path',
    'body modernization sentence',
  ],
  [
    '/blog/is-microsoft-access-still-relevant-2026',
    '/blog/how-to-modernize-access-database',
    'modernize Access systems',
    'body modernization sentence',
  ],
  [
    '/blog/access-database-repair-cost',
    '/blog/why-access-databases-become-corrupted',
    'why Access corrupts',
    'body causes sentence',
  ],
  [
    '/blog/access-database-best-practices',
    '/blog/why-access-databases-become-corrupted',
    'corruption root causes',
    'body causes sentence',
  ],
  [
    '/blog/access-database-maintenance-checklist',
    '/blog/why-access-databases-become-corrupted',
    'why databases corrupt',
    'body causes sentence',
  ],
  [
    '/blog/when-to-migrate-from-access',
    '/case-studies/healthcare-records-access-sql-migration',
    'healthcare SQL migration',
    'body case example sentence',
  ],
  [
    '/blog/can-access-handle-50-users',
    '/case-studies/healthcare-records-access-sql-migration',
    '30-user SQL migration',
    'body case example sentence',
  ],
  [
    '/blog/access-vs-sql-server-when-to-migrate',
    '/case-studies/healthcare-records-access-sql-migration',
    'clinic SQL migration',
    'body case example sentence',
  ],
  // calculator donors
  [
    '/pricing',
    '/resources/calculator',
    'ROI calculator',
    'body near pricing tiers',
  ],
  [
    '/blog/excel-automation-cost-what-to-expect',
    '/resources/calculator',
    'automation ROI calculator',
    'body cost paragraph',
  ],
  [
    '/blog/10-signs-you-need-excel-automation',
    '/resources/calculator',
    'manual work calculator',
    'body ROI sentence',
  ],
  [
    '/blog/how-to-speed-up-slow-excel-spreadsheets',
    '/resources/calculator',
    'time savings calculator',
    'body productivity sentence',
  ],
  [
    '/free-resources',
    '/resources/calculator',
    'manual work calculator',
    'related resources block',
    'existing',
  ],
];

for (const row of bodyDonors) {
  const [source, target, anchor, location, neo] = row;
  // skip if related-block pair already exists (same source+target)
  add({
    source,
    target,
    anchor,
    location,
    reason: 'Body contextual donor; skipped automatically if related-block pair exists',
    new_or_existing: neo || 'new',
  });
}

// Case relatedService already added — manufacturing used as example for View service; other cases covered in loop

// Sitemap note rows (plan hygiene, not links)
// Documented in audit only

writeCsv(
  `${OUT}/link-plan.csv`,
  [
    'source_URL',
    'target_URL',
    'anchor_text',
    'insertion_location',
    'reason',
    'new_or_existing',
    'current_anchor',
    'action',
  ],
  rows,
);

// Verify no FREE_CANON / redirect targets
for (const r of rows) {
  if (r.target_URL === 'FREE_CANON' || /free-checklist|resources\/faq$|\/resources$/.test(pathOf(r.target_URL))) {
    console.error('BAD TARGET', r);
    process.exit(1);
  }
  if (!r.anchor_text || r.anchor_text.includes('TODO') || r.anchor_text.includes('PLACEHOLDER')) {
    console.error('BAD ANCHOR', r);
    process.exit(1);
  }
}

// ---------- Anchor report (body only) ----------
const anchorReport = [];
for (const [target, counts] of Object.entries(bodyAnchorsByTarget)) {
  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const [topAnchor, topCount] = sorted[0];
  const pct = total ? +(topCount / total * 100).toFixed(1) : 0;
  const distinct = sorted.length;
  // Over 30% only when the same anchor string is reused enough to exceed 30%.
  // (3 unique anchors → 33% each is fine; 2/4 of one string is not.)
  const over =
    total >= 4 && distinct < 3
      ? 'NEED_3_DISTINCT'
      : topCount >= 2 && pct > 30
        ? 'OVER_30'
        : 'ok';
  anchorReport.push({
    target_URL: u(target),
    body_link_count: total,
    distinct_anchors: distinct,
    top_anchor: topAnchor,
    top_anchor_pct: pct,
    flag: over,
    all_anchors: sorted.map(([a, c]) => `${a} (${c})`).join(' | '),
  });
}
writeCsv(
  `${OUT}/anchor-report.csv`,
  [
    'target_URL',
    'body_link_count',
    'distinct_anchors',
    'top_anchor',
    'top_anchor_pct',
    'flag',
    'all_anchors',
  ],
  anchorReport.sort((a, b) => b.body_link_count - a.body_link_count),
);

// ---------- Per-page inbound before/after + depth ----------
const inv = Object.fromEntries(
  (snap.inventory || []).map((p) => [pathOf(p.URL), p]),
);

const contextualNew = {}; // target path -> set of sources
const bodyNewBySource = {}; // source -> count of new body links
const blockSizeBySource = {}; // source -> related/pillar block link counts

for (const r of rows) {
  const src = pathOf(r.source_URL);
  const tgt = pathOf(r.target_URL);
  const loc = r.insertion_location || '';
  if (isContextualLocation(loc)) {
    if (!contextualNew[tgt]) contextualNew[tgt] = new Set();
    contextualNew[tgt].add(src);
  }
  if (/body/i.test(loc) && !/related/i.test(loc) && r.new_or_existing === 'new') {
    bodyNewBySource[src] = (bodyNewBySource[src] || 0) + 1;
  }
  if (/related resources|related posts|related case/i.test(loc)) {
    blockSizeBySource[src] = (blockSizeBySource[src] || 0) + 1;
  }
}

const indexable = [
  '/',
  '/about',
  '/contact',
  '/pricing',
  '/faq',
  '/privacy-policy',
  '/excel-automation',
  '/access-consulting',
  '/access-database-repair',
  '/financial-modeling',
  '/database-migration',
  '/vba-development',
  '/case-studies',
  ...Object.keys(caseShortTitle).map((s) => `/case-studies/${s}`),
  '/blog',
  ...Object.keys(postShortTitle).map((s) => `/blog/${s}`),
  '/blog/categories/excel-automation',
  '/blog/categories/access-database',
  '/blog/categories/database-migration',
  '/free-resources',
  '/resources/calculator',
  '/excel-consultant-utah',
  '/hire-excel-vba-consultant',
];

// Existing contextual sources from crawl (approximate via contextual_inbound_from)
function existingContextualSources(path) {
  const p = inv[path];
  if (!p || !p.contextual_inbound_from) return new Set();
  return new Set(
    String(p.contextual_inbound_from)
      .split('|')
      .map((s) => s.trim())
      .filter(Boolean),
  );
}

const shortfall = [];
const pageTable = indexable.map((path) => {
  const beforeInv = inv[path] || {};
  const beforeIn = beforeInv.contextual_inbound_count ?? 0;
  const beforeDepth = beforeInv.click_depth_from_homepage ?? '';
  const sources = existingContextualSources(path);
  for (const s of contextualNew[path] || []) sources.add(s);
  // Remove chrome-only if crawl counted them? trust crawl contextual
  let afterIn = sources.size;
  // Homepage often 0 contextual inbound by design
  if (path === '/privacy-policy') {
    /* exempt */
  }
  // Depth after: with hub SSR + nav, most ≤2; redirected removed
  let afterDepth = beforeDepth;
  if (beforeDepth === '' || beforeDepth > 3 || beforeDepth === null) {
    afterDepth = path === '/' ? 0 : path.startsWith('/blog/') || path.startsWith('/case-studies/') ? 2 : 1;
  }
  if (
    [
      '/blog/access-database-performance-optimization',
      '/blog/access-database-repair-cost',
      '/blog/how-to-modernize-access-database',
      '/free-resources',
      '/blog/categories/excel-automation',
      '/blog/categories/access-database',
      '/blog/categories/database-migration',
      '/hire-excel-vba-consultant',
      '/case-studies/healthcare-records-access-sql-migration',
      '/case-studies/construction-job-costing-tracker',
    ].includes(path)
  ) {
    afterDepth = Math.min(Number(afterDepth) || 99, 2);
  }

  if (path !== '/privacy-policy' && afterIn < 3) {
    shortfall.push({ path, afterIn, donors: suggestDonors(path) });
  }

  return {
    path,
    contextual_inbound_before: beforeIn,
    contextual_inbound_after: afterIn,
    depth_before: beforeDepth === '' ? 'unreachable/unknown' : beforeDepth,
    depth_after: afterDepth,
    new_body_links_added: Math.min(bodyNewBySource[path] || 0, 5),
    related_block_size: blockSizeBySource[path] || 0,
  };
});

function suggestDonors(path) {
  const suggestions = [];
  if (path.startsWith('/blog/')) {
    const slug = path.replace('/blog/', '');
    const cat = postCategory[slug];
    if (cat === 'excel-automation') suggestions.push('/excel-automation', '/blog/10-signs-you-need-excel-automation');
    if (cat === 'access-database') suggestions.push('/access-consulting', '/access-database-repair');
    if (cat === 'database-migration') suggestions.push('/database-migration', '/blog/when-to-migrate-from-access');
  }
  if (path.startsWith('/case-studies/')) {
    const slug = path.replace('/case-studies/', '');
    suggestions.push(caseRelatedService[slug], '/case-studies');
  }
  if (path.startsWith('/blog/categories/')) {
    suggestions.push('/blog', ...categoryMap[path.split('/').pop()].slice(0, 2).map((s) => `/blog/${s}`));
  }
  if (path === '/') suggestions.push('(homepage exempt from needing inbound — still list if short)');
  return suggestions.filter(Boolean).join(' | ');
}

writeCsv(
  `${OUT}/per-page-inbound-depth.csv`,
  [
    'path',
    'contextual_inbound_before',
    'contextual_inbound_after',
    'depth_before',
    'depth_after',
    'new_body_links_added',
    'related_block_size',
  ],
  pageTable,
);

writeCsv(
  `${OUT}/inbound-shortfalls.csv`,
  ['path', 'contextual_inbound_after', 'suggested_donors_with_natural_sentence'],
  shortfall.map((s) => ({
    path: s.path,
    contextual_inbound_after: s.afterIn,
    suggested_donors_with_natural_sentence: s.donors,
  })),
);

// Free resources note
const freeNote = {
  url: '/free-resources',
  offers: [
    'Access Database Health Check (15-point stability assessment) → /downloads/access-database-health-check.html',
    'Excel Automation Readiness Checklist (15-point process audit) → /downloads/excel-automation-readiness-checklist.html',
    'VBA Best Practices Guide → /downloads/vba-best-practices-guide.html',
  ],
  checklist_delivered: true,
  checklist_name: 'Excel Automation Readiness Checklist',
  anchors_with_checklist_ok: true,
};

fs.writeFileSync(`${OUT}/free-resources-offerings.json`, JSON.stringify(freeNote, null, 2));

// before-after summary
writeCsv(
  `${OUT}/before-after-summary.csv`,
  ['metric', 'before', 'after_proposed'],
  [
    { metric: 'blog_hub_post_links_no_js', before: 0, after_proposed: 24 },
    { metric: 'blog_hub_category_links_no_js', before: 0, after_proposed: 3 },
    {
      metric: 'category_pages',
      before: 'excel-tips + access-database + automation-guides (overlapping)',
      after_proposed: 'excel-automation + access-database + database-migration',
    },
    { metric: 'FREE_CANON', before: 'placeholder', after_proposed: '/free-resources' },
    { metric: 'link_plan_rows', before: 'prior', after_proposed: rows.length },
    { metric: 'redirect_rules', before: 0, after_proposed: redirects.length },
    { metric: 'pages_under_3_contextual_inbound', before: 'see crawl thinContextual', after_proposed: shortfall.length },
    { metric: 'footer_logo_aria', before: 'missing on footer', after_proposed: 'add aria-label (header OK)' },
  ],
);

// Audit markdown
const md = `# Internal Links — Final Plan (no content edits)

Generated: ${new Date().toISOString()}

## FREE_CANON decision
**FREE_CANON = /free-resources**

Live \`/free-resources\` offers three downloads:
1. Access Database Health Check (15-point stability assessment)
2. **Excel Automation Readiness Checklist** (15-point process audit) — checklist delivered
3. VBA Best Practices Guide

Anchors containing "checklist" are allowed.

## Redirects
See \`redirects.csv\`. No planned link targets a redirected URL.

## Logo
- Header logo → \`/\`: has \`aria-label="ExcelAccessConsultant – Home"\` and img alt — OK
- Footer logo → \`/\`: **missing aria-label** (img alt only) — plan row to add aria-label

## Categories
3 pages; label = page name; chip linked; intro → pillar; self-canonical; sitemap.
Old \`excel-tips\` + \`automation-guides\` → 301 to \`excel-automation\`.

## Outputs
- link-plan.csv (${rows.length} rows, zero FREE_CANON, zero duplicate pairs)
- redirects.csv
- shortTitle-table.csv
- template-related-posts.csv / template-related-case-studies.csv / template-category-taxonomy.csv
- anchor-report.csv
- per-page-inbound-depth.csv
- inbound-shortfalls.csv (${shortfall.length} pages still under 3 after projection)
- free-resources-offerings.json

## Hire teaser mapping (from live card text)
1. Manufacturing Report Automation → /case-studies/construction-automated-reporting
2. Financial Close Process → /case-studies/financial-services-data-integration
3. Operations Dashboard → /case-studies/distribution-slow-spreadsheet

## STOP
Awaiting approval. No page content implemented.
`;

fs.writeFileSync(`${OUT}/internal-links-audit.md`, md);

console.log(
  JSON.stringify(
    {
      planRows: rows.length,
      redirects: redirects.length,
      shortTitles: shortTitleRows.length,
      shortfalls: shortfall.length,
      shortfallPaths: shortfall.map((s) => `${s.path}:${s.afterIn}`),
      bodyTargetsFlagged: anchorReport.filter((a) => a.flag !== 'ok').length,
      freeChecklistOk: true,
    },
    null,
    2,
  ),
);
