import fs from 'fs';

const OUT = 'docs/seo/internal-links';
const BASE = 'https://excelaccessconsultant.com';
const gather = JSON.parse(fs.readFileSync(`${OUT}/plan-revision-gather.json`, 'utf8'));
const snap = JSON.parse(fs.readFileSync(`${OUT}/crawl-snapshot.json`, 'utf8'));

function csvEscape(v) {
  const s = String(v ?? '');
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}
function writeCsv(file, headers, rows) {
  fs.writeFileSync(
    file,
    [headers.join(','), ...rows.map((r) => headers.map((h) => csvEscape(r[h])).join(','))].join('\n') +
      '\n',
  );
}
function u(path) {
  return BASE + (path === '/' ? '' : path);
}
function pathOf(url) {
  return (url || '').replace(BASE, '') || '/';
}

// ---------- 2a Related posts registry proposal ----------
// Every post lists 3 related (same cluster / adjacent subtopic).
// Graph balanced so every post receives >=3 inbound from related blocks.
const relatedPosts = {
  // excel-automation
  '10-signs-you-need-excel-automation': [
    'excel-automation-cost-what-to-expect',
    'excel-reporting-automation-complete-guide',
    'financial-modeling-best-practices',
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
    'financial-modeling-best-practices',
  ],
  'financial-modeling-best-practices': [
    'excel-automation-cost-what-to-expect',
    'excel-reporting-automation-complete-guide',
    'how-to-speed-up-slow-excel-spreadsheets',
  ],
  // access repair
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
  // multi-user / architecture
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
  // optimize / maintain
  'access-database-performance-optimization': [
    'how-to-modernize-access-database',
    'access-database-best-practices',
    'access-database-maintenance-checklist',
  ],
  'how-to-modernize-access-database': [
    'access-database-performance-optimization',
    'when-to-migrate-from-access',
    'is-microsoft-access-still-relevant-2026',
  ], // when + is-relevant keep modernize inbound >=3
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
  // compare / relevance
  'is-microsoft-access-still-relevant-2026': [
    'access-vs-power-apps-when-to-stay-on-access',
    'access-vs-excel-when-to-use-each',
    'access-vs-sql-server-when-to-migrate',
  ],
  'access-vs-excel-when-to-use-each': [
    'is-microsoft-access-still-relevant-2026',
    'access-vs-power-apps-when-to-stay-on-access',
    'access-sql-server-migration-cost',
  ],
  'access-vs-power-apps-when-to-stay-on-access': [
    'is-microsoft-access-still-relevant-2026',
    'access-vs-excel-when-to-use-each',
    'how-to-modernize-access-database',
  ],
  // migration
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

const inboundRelated = {};
for (const [src, tgts] of Object.entries(relatedPosts)) {
  for (const t of tgts) {
    inboundRelated[t] = (inboundRelated[t] || 0) + 1;
  }
}

const relatedPostsRows = [];
for (const [src, tgts] of Object.entries(relatedPosts)) {
  tgts.forEach((t, i) => {
    relatedPostsRows.push({
      source_post: src,
      related_1: i === 0 ? t : '',
      related_2: i === 1 ? t : '',
      related_3: i === 2 ? t : '',
      slot: i + 1,
      target: t,
      projected_inbound_for_target: inboundRelated[t],
    });
  });
}
// flatter table: one row per post
const relatedPostsTable = Object.entries(relatedPosts).map(([src, tgts]) => ({
  post_slug: src,
  related_1: tgts[0],
  related_2: tgts[1],
  related_3: tgts[2],
  inbound_from_related_blocks: inboundRelated[src] || 0,
}));
writeCsv(
  `${OUT}/template-related-posts.csv`,
  ['post_slug', 'related_1', 'related_2', 'related_3', 'inbound_from_related_blocks'],
  relatedPostsTable,
);
const thinPosts = relatedPostsTable.filter((r) => r.inbound_from_related_blocks < 3);
if (thinPosts.length) {
  console.error(
    'RELATED POSTS inbound <3:',
    thinPosts.map((r) => `${r.post_slug}:${r.inbound_from_related_blocks}`).join(', '),
  );
  process.exit(1);
}

// ---------- 2b Related case studies ----------
const caseStudies = [
  {
    slug: 'manufacturing-inventory-tracking',
    relatedService: '/access-consulting',
    cluster: 'access-consulting',
  },
  {
    slug: 'retail-pricing-system',
    relatedService: '/access-consulting',
    cluster: 'access-consulting',
  },
  {
    slug: 'distribution-warehouse-pick-list',
    relatedService: '/access-consulting',
    cluster: 'access-consulting',
  },
  {
    slug: 'construction-job-costing-tracker',
    relatedService: '/access-consulting',
    cluster: 'access-consulting',
  },
  {
    slug: 'construction-automated-reporting',
    relatedService: '/excel-automation',
    cluster: 'excel-automation',
  },
  {
    slug: 'distribution-slow-spreadsheet',
    relatedService: '/excel-automation',
    cluster: 'excel-automation',
  },
  {
    slug: 'financial-services-data-integration',
    relatedService: '/excel-automation',
    cluster: 'excel-automation',
  },
  {
    slug: 'access-sql-migration-enterprise',
    relatedService: '/database-migration',
    cluster: 'database-migration',
  },
  {
    slug: 'healthcare-records-access-sql-migration',
    relatedService: '/database-migration',
    cluster: 'database-migration',
  },
];

// Prefer relatedService/cluster; fill cross-cluster only to hit >=3 inbound each.
const relatedCases = {
  'manufacturing-inventory-tracking': [
    'retail-pricing-system',
    'distribution-warehouse-pick-list',
    'construction-job-costing-tracker',
  ],
  'retail-pricing-system': [
    'manufacturing-inventory-tracking',
    'distribution-warehouse-pick-list',
    'healthcare-records-access-sql-migration',
  ],
  'distribution-warehouse-pick-list': [
    'manufacturing-inventory-tracking',
    'retail-pricing-system',
    'financial-services-data-integration',
  ],
  'construction-job-costing-tracker': [
    'manufacturing-inventory-tracking',
    'retail-pricing-system',
    'access-sql-migration-enterprise',
  ],
  'construction-automated-reporting': [
    'distribution-slow-spreadsheet',
    'financial-services-data-integration',
    'healthcare-records-access-sql-migration',
  ],
  'distribution-slow-spreadsheet': [
    'construction-automated-reporting',
    'financial-services-data-integration',
    'access-sql-migration-enterprise',
  ],
  'financial-services-data-integration': [
    'construction-automated-reporting',
    'distribution-slow-spreadsheet',
    'distribution-warehouse-pick-list',
  ],
  'access-sql-migration-enterprise': [
    'healthcare-records-access-sql-migration',
    'construction-job-costing-tracker',
    'distribution-slow-spreadsheet',
  ],
  'healthcare-records-access-sql-migration': [
    'access-sql-migration-enterprise',
    'construction-automated-reporting',
    'construction-job-costing-tracker',
  ],
};

const caseInbound = {};
for (const [s, tgts] of Object.entries(relatedCases)) {
  for (const t of tgts) caseInbound[t] = (caseInbound[t] || 0) + 1;
}
const relatedCasesTable = caseStudies.map((c) => ({
  case_slug: c.slug,
  relatedService: c.relatedService,
  related_1: relatedCases[c.slug][0],
  related_2: relatedCases[c.slug][1],
  related_3: relatedCases[c.slug][2],
  inbound_from_related_blocks: caseInbound[c.slug] || 0,
  note: 'Replace otherStudies.slice(0,2) hard-order (always manufacturing + construction-reporting)',
}));
const thinCases = relatedCasesTable.filter((r) => r.inbound_from_related_blocks < 3);
if (thinCases.length) {
  console.error(
    'RELATED CASES inbound <3:',
    thinCases.map((r) => `${r.case_slug}:${r.inbound_from_related_blocks}`).join(', '),
  );
  process.exit(1);
}
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
  relatedCasesTable,
);

// ---------- 2c Category taxonomy ----------
const postCategories = [
  ['10-signs-you-need-excel-automation', 'Excel Automation'],
  ['excel-automation-cost-what-to-expect', 'Excel Automation'],
  ['excel-reporting-automation-complete-guide', 'Excel Automation'],
  ['how-to-speed-up-slow-excel-spreadsheets', 'Excel Tips'],
  ['common-excel-vba-mistakes-and-how-to-fix-them', 'VBA Development'],
  ['financial-modeling-best-practices', 'Financial Modeling'],
  ['why-your-access-database-keeps-crashing', 'Access Database'],
  ['why-access-databases-become-corrupted', 'Access Database'],
  ['access-database-repair-guide', 'Access Database'],
  ['access-database-repair-cost', 'Access Database'],
  ['how-to-split-access-database', 'Access Database'],
  ['access-database-multi-user-setup', 'Access Database'],
  ['access-front-end-back-end-architecture', 'Access Database'],
  ['can-access-handle-50-users', 'Access Database'],
  ['access-database-performance-optimization', 'Access Database'],
  ['how-to-modernize-access-database', 'Access Database'],
  ['access-database-best-practices', 'Access Database'],
  ['access-database-maintenance-checklist', 'Access Database'],
  ['is-microsoft-access-still-relevant-2026', 'Access Database'],
  ['access-vs-excel-when-to-use-each', 'Access Database'],
  ['access-vs-power-apps-when-to-stay-on-access', 'Access Database'],
  ['access-vs-sql-server-when-to-migrate', 'Database Migration'],
  ['when-to-migrate-from-access', 'Database Migration'],
  ['access-sql-server-migration-cost', 'Access Database'], // MISMATCH — content is migration
];

const categoryPages = {
  'Excel Tips': '/blog/categories/excel-tips',
  'Excel Automation': '/blog/categories/excel-tips OR /blog/categories/automation-guides (BOTH match today)',
  'Access Database': '/blog/categories/access-database',
  'Database Migration':
    '/blog/categories/access-database OR /blog/categories/automation-guides (BOTH match today)',
  'VBA Development': '/blog/categories/automation-guides',
  'Financial Modeling': 'NONE — no category page',
};

const catTaxonomy = postCategories.map(([slug, label]) => {
  let recommended_category_page = '';
  let issue = '';
  if (label === 'Excel Tips') recommended_category_page = '/blog/categories/excel-tips';
  else if (label === 'Excel Automation') {
    recommended_category_page = '/blog/categories/automation-guides';
    issue = 'Label also matches excel-tips via matchCategories — pick one primary';
  } else if (label === 'Access Database') recommended_category_page = '/blog/categories/access-database';
  else if (label === 'Database Migration') {
    recommended_category_page = '/blog/categories/access-database';
    issue = 'Also matches automation-guides; recommend dedicated /blog/categories/database-migration OR keep under access-database only';
  } else if (label === 'VBA Development') recommended_category_page = '/blog/categories/automation-guides';
  else if (label === 'Financial Modeling') {
    recommended_category_page = '(create /blog/categories/financial-modeling) OR map to excel-tips';
    issue = 'No category page exists';
  }
  if (slug === 'access-sql-server-migration-cost') {
    issue =
      (issue ? issue + '; ' : '') +
      'Post category label is Access Database but topic is migration — retag to Database Migration';
    recommended_category_page = '/blog/categories/access-database (until migration category exists)';
  }
  if (slug === 'how-to-modernize-access-database') {
    issue =
      (issue ? issue + '; ' : '') +
      'Modernization/migration-adjacent; consider Database Migration label';
  }
  return {
    post_slug: slug,
    category_label_on_post: label,
    category_page_exists: categoryPages[label] || '',
    recommended_category_page,
    issue,
    link_category_chip: issue.includes('No category') ? 'no — wait until page exists' : 'yes — after primary mapping fixed',
  };
});
writeCsv(
  `${OUT}/template-category-taxonomy.csv`,
  [
    'post_slug',
    'category_label_on_post',
    'category_page_exists',
    'recommended_category_page',
    'issue',
    'link_category_chip',
  ],
  catTaxonomy,
);

// ---------- Free pages comparison ----------
const fp = gather.free_pages;
const freeCompare = ['/free-checklist', '/free-resources', '/resources/free-checklist'].map((p) => ({
  path: p,
  title: fp[p].title,
  H1: fp[p].h1,
  meta: fp[p].meta,
  word_count: fp[p].word_count,
  body_link_count: fp[p].body_links.filter((h) => !h.startsWith('/_next') && !h.includes('favicon') && !h.includes('manifest') && !h.includes('.png') && !h.includes('.ico') && !h.includes('.css') && !h.includes('.js')).length,
  overlap_vs_free_checklist: gather.free_pages_overlap_jaccard_words_gt3[
    p === '/free-checklist'
      ? 'free-checklist_vs_free-resources'
      : p === '/free-resources'
        ? 'free-checklist_vs_free-resources'
        : 'free-checklist_vs_resources-free-checklist'
  ],
  note:
    p === '/resources/free-checklist'
      ? 'Near-duplicate; pending 301 to FREE_CANON; breadcrumb emits /resources 404'
      : 'Jaccard word overlap vs siblings ≈ 1.0 (duplicate content)',
}));
writeCsv(
  `${OUT}/free-pages-comparison.csv`,
  ['path', 'title', 'H1', 'meta', 'word_count', 'body_link_count', 'overlap_vs_free_checklist', 'note'],
  freeCompare,
);

// ---------- Generic / blob anchors ----------
const genericAnchors = [
  {
    current_anchor: 'View service →',
    page: '/case-studies/[slug] (CaseStudyContent)',
    proposed_fix: 'Link the relatedServiceLabel title only; drop arrow CTA or use service name as anchor',
  },
  {
    current_anchor: 'View service →',
    page: '/pricing (ResultCardCTA on each service card)',
    proposed_fix: 'Make card title the only link; remove separate View service CTA or set label to service name',
  },
  {
    current_anchor: 'Explore the service behind this project',
    page: '/case-studies/[slug] (CaseStudySidebar Related Service description)',
    proposed_fix: 'Anchor = relatedServiceLabel (e.g. Access Database Consulting); description unlinked',
  },
  {
    current_anchor: 'Read full case study →',
    page: '/hire-excel-vba-consultant (3 cards all → /case-studies)',
    proposed_fix:
      'Map cards: (1) production reports → /case-studies/construction-automated-reporting (2) finance close → /case-studies/financial-services-data-integration (3) ops dashboard → /case-studies/distribution-slow-spreadsheet; anchor = case study title short form',
  },
  {
    current_anchor: '[concatenated card text: num + title + excerpt + readTime]',
    page: '/blog BlogPostGrid (entire card wrapped in <Link>)',
    proposed_fix: 'Link title element only; excerpt/meta plain text',
  },
  {
    current_anchor: '[concatenated card / cs-item blob]',
    page: '/case-studies index and similar cs-grid cards if whole-card links',
    proposed_fix: 'Link title only',
  },
];
writeCsv(
  `${OUT}/generic-anchor-fixes.csv`,
  ['current_anchor', 'page', 'proposed_fix'],
  genericAnchors,
);

// ---------- Revised link-plan ----------
const FREE_CANON = 'FREE_CANON'; // placeholder until user decides
const rows = [];
const seen = new Set();

function add({
  source,
  target,
  anchor,
  location,
  reason,
  new_or_existing = 'new',
  current_anchor = '',
  action = 'keep',
}) {
  let tgt = target;
  if (tgt === '/free-checklist' || tgt === FREE_CANON) tgt = FREE_CANON;
  // do not plan body links between free dupes (breadcrumb chrome fixes still allowed)
  if (
    !String(location).toLowerCase().includes('breadcrumb') &&
    ['/free-checklist', '/free-resources', '/resources/free-checklist', FREE_CANON].includes(source) &&
    ['/free-checklist', '/free-resources', '/resources/free-checklist', FREE_CANON].includes(tgt) &&
    source !== tgt
  ) {
    return;
  }
  const k = `${source}->${tgt}`;
  if (seen.has(k)) return;
  seen.add(k);
  rows.push({
    source_URL: u(source),
    target_URL: tgt === FREE_CANON ? 'FREE_CANON' : u(tgt),
    anchor_text: anchor,
    insertion_location: location,
    reason,
    new_or_existing,
    current_anchor,
    action,
  });
}

// Footer free resources — HOLD
rows.push({
  source_URL: u('/'),
  target_URL: 'FREE_CANON',
  anchor_text: 'Free Resources',
  insertion_location: 'footer Resources column',
  reason: 'HOLD: footer currently points to /free-checklist; repoint after canonical decision',
  new_or_existing: 'existing',
  current_anchor: 'Free Resources',
  action: 'rewrite',
});

// Breadcrumb /resources → /free-resources
add({
  source: '/resources/calculator',
  target: '/free-resources',
  anchor: 'Free Resources',
  location: 'breadcrumb parent crumb',
  reason: 'FIX: breadcrumb Resources currently builds /resources 404; repoint segment to /free-resources',
  new_or_existing: 'new',
  current_anchor: 'Resources',
  action: 'rewrite',
});
add({
  source: '/resources/faq',
  target: '/free-resources',
  anchor: 'Free Resources',
  location: 'breadcrumb parent crumb',
  reason: 'FIX breadcrumb (page itself pending 301 to /faq)',
  current_anchor: 'Resources',
  action: 'rewrite',
});
add({
  source: '/resources/free-checklist',
  target: '/free-resources',
  anchor: 'Free Resources',
  location: 'breadcrumb parent crumb',
  reason: 'FIX: /resources/* breadcrumb parent → /free-resources (page pending 301 to FREE_CANON)',
  current_anchor: 'Resources',
  action: 'rewrite',
});

// Homepage faq — mark existing (chrome), no new homepage body faq
add({
  source: '/',
  target: '/faq',
  anchor: 'FAQ',
  location: 'footer / nav chrome',
  reason: 'DROP new homepage→faq body; mark existing chrome',
  new_or_existing: 'existing',
  current_anchor: 'FAQ',
  action: 'keep',
});

// Required free-resources contextual (not between free pages)
add({
  source: '/pricing',
  target: '/free-resources',
  anchor: 'free Excel resources',
  location: 'body near lead magnets',
  reason: 'REQUIRED free-resources contextual',
});
add({
  source: '/contact',
  target: '/free-resources',
  anchor: 'free Excel resources',
  location: 'body before form',
  reason: 'REQUIRED free-resources contextual',
});
add({
  source: '/blog/access-database-maintenance-checklist',
  target: '/free-resources',
  anchor: 'free Access guides',
  location: 'body closing CTA',
  reason: 'REQUIRED free-resources contextual',
});
add({
  source: '/blog/access-database-best-practices',
  target: '/free-resources',
  anchor: 'free Access resources',
  location: 'body closing CTA',
  reason: 'REQUIRED free-resources contextual',
});

// FREE_CANON targets (was /free-checklist)
add({
  source: '/free-resources',
  target: FREE_CANON,
  anchor: 'Access repair checklist',
  location: 'related resource card',
  reason: 'REQUIRED checklist contextual — target FREE_CANON until decided',
});
add({
  source: '/access-consulting',
  target: FREE_CANON,
  anchor: 'Access repair checklist',
  location: 'Related resources block',
  reason: 'REQUIRED FREE_CANON contextual',
});
add({
  source: '/access-database-repair',
  target: FREE_CANON,
  anchor: 'database repair checklist',
  location: 'Related resources block',
  reason: 'REQUIRED FREE_CANON contextual',
});
add({
  source: '/blog/access-database-best-practices',
  target: FREE_CANON,
  anchor: 'maintenance checklist download',
  location: 'body CTA paragraph',
  reason: 'REQUIRED FREE_CANON contextual',
});

// Calculator — revised donors
add({
  source: '/pricing',
  target: '/resources/calculator',
  anchor: 'ROI calculator',
  location: 'body near pricing tiers',
  reason: 'REQUIRED calculator',
});
add({
  source: '/blog/excel-automation-cost-what-to-expect',
  target: '/resources/calculator',
  anchor: 'automation ROI calculator',
  location: 'body cost paragraph',
  reason: 'REQUIRED calculator',
});
add({
  source: '/blog/10-signs-you-need-excel-automation',
  target: '/resources/calculator',
  anchor: 'manual work calculator',
  location: 'body ROI/savings sentence',
  reason: 'REQUIRED calculator (replaces repair-cost/migration-cost donors)',
});
add({
  source: '/blog/how-to-speed-up-slow-excel-spreadsheets',
  target: '/resources/calculator',
  anchor: 'time savings calculator',
  location: 'body productivity sentence',
  reason: 'REQUIRED calculator (replaces repair-cost/migration-cost donors)',
});
add({
  source: '/free-resources',
  target: '/resources/calculator',
  anchor: 'manual work calculator',
  location: 'related resources block',
  reason: 'REQUIRED calculator',
  new_or_existing: 'existing',
  action: 'keep',
});

// FAQ — natural anchors only
add({
  source: '/',
  target: '/faq',
  anchor: 'FAQ',
  location: 'footer Resources column',
  reason: 'REQUIRED footer reachability for /faq',
});
add({
  source: '/pricing',
  target: '/faq',
  anchor: 'frequently asked questions',
  location: 'body near FAQ teaser',
  reason: 'REQUIRED faq contextual',
});
add({
  source: '/contact',
  target: '/faq',
  anchor: 'frequently asked questions',
  location: 'body before form',
  reason: 'REQUIRED faq contextual',
  new_or_existing: 'existing',
  current_anchor: 'FAQ / common questions (verify on implement)',
  action: 'rewrite',
});
add({
  source: '/hire-excel-vba-consultant',
  target: '/faq',
  anchor: 'frequently asked questions',
  location: 'body FAQ section',
  reason: 'REQUIRED faq contextual',
});
add({
  source: '/excel-consultant-utah',
  target: '/faq',
  anchor: 'frequently asked questions',
  location: 'body near process',
  reason: 'REQUIRED faq contextual',
});
for (const p of [
  '/excel-automation',
  '/access-consulting',
  '/database-migration',
  '/vba-development',
  '/financial-modeling',
]) {
  add({
    source: p,
    target: '/faq',
    anchor: 'frequently asked questions',
    location: 'Related resources block',
    reason: 'REQUIRED faq contextual',
  });
}

// Hire + Utah required
add({
  source: '/vba-development',
  target: '/hire-excel-vba-consultant',
  anchor: 'hire a VBA consultant',
  location: 'Related resources block',
  reason: 'REQUIRED hire contextual',
});
add({
  source: '/excel-automation',
  target: '/hire-excel-vba-consultant',
  anchor: 'hire an Excel VBA consultant',
  location: 'Related resources block',
  reason: 'REQUIRED hire contextual',
});
add({
  source: '/blog/common-excel-vba-mistakes-and-how-to-fix-them',
  target: '/hire-excel-vba-consultant',
  anchor: 'hire a VBA consultant',
  location: 'body closing CTA',
  reason: 'REQUIRED hire contextual',
});
add({
  source: '/case-studies/retail-pricing-system',
  target: '/hire-excel-vba-consultant',
  anchor: 'hire a VBA consultant',
  location: 'body outcome CTA',
  reason: 'REQUIRED hire contextual',
});
add({
  source: '/case-studies/construction-automated-reporting',
  target: '/hire-excel-vba-consultant',
  anchor: 'hire an Excel consultant',
  location: 'body outcome CTA',
  reason: 'REQUIRED hire contextual',
});
add({
  source: '/pricing',
  target: '/hire-excel-vba-consultant',
  anchor: 'hire Excel VBA help',
  location: 'body near VBA tier',
  reason: 'REQUIRED hire contextual',
});
add({
  source: '/about',
  target: '/excel-consultant-utah',
  anchor: 'Utah Excel consulting',
  location: 'body location paragraph',
  reason: 'REQUIRED utah',
  new_or_existing: 'existing',
  action: 'keep',
});
add({
  source: '/contact',
  target: '/excel-consultant-utah',
  anchor: 'Utah Excel consultant',
  location: 'body service-area paragraph',
  reason: 'REQUIRED utah',
});
add({
  source: '/pricing',
  target: '/excel-consultant-utah',
  anchor: 'Utah consulting rates',
  location: 'body local note',
  reason: 'REQUIRED utah',
});
add({
  source: '/',
  target: '/excel-consultant-utah',
  anchor: 'Utah Excel consultant',
  location: 'body local teaser',
  reason: 'REQUIRED utah',
});
add({
  source: '/hire-excel-vba-consultant',
  target: '/excel-consultant-utah',
  anchor: 'Utah VBA consultant',
  location: 'body service-area paragraph',
  reason: 'REQUIRED utah',
});

// Hire case study teaser remaps
add({
  source: '/hire-excel-vba-consultant',
  target: '/case-studies/construction-automated-reporting',
  anchor: 'construction reporting case study',
  location: 'body card 1 CTA',
  reason: 'FIX hire teaser → specific case study',
  current_anchor: 'Read full case study →',
  action: 'rewrite',
});
add({
  source: '/hire-excel-vba-consultant',
  target: '/case-studies/financial-services-data-integration',
  anchor: 'finance close case study',
  location: 'body card 2 CTA',
  reason: 'FIX hire teaser → specific case study',
  current_anchor: 'Read full case study →',
  action: 'rewrite',
});
add({
  source: '/hire-excel-vba-consultant',
  target: '/case-studies/distribution-slow-spreadsheet',
  anchor: 'slow spreadsheet case study',
  location: 'body card 3 CTA',
  reason: 'FIX hire teaser → specific case study',
  current_anchor: 'Read full case study →',
  action: 'rewrite',
});

// access-database-repair: exactly 5 new Related links (dropped best-practices + front-end-back-end)
// FREE_CANON already added above as required free contextual
add({
  source: '/access-database-repair',
  target: '/blog/access-database-repair-guide',
  anchor: 'Access repair guide',
  location: 'Related resources block',
  reason: 'repair related #1 of 5',
});
add({
  source: '/access-database-repair',
  target: '/blog/access-database-repair-cost',
  anchor: 'Access repair pricing',
  location: 'Related resources block',
  reason: 'repair related #2 of 5',
});
add({
  source: '/access-database-repair',
  target: '/blog/why-access-databases-become-corrupted',
  anchor: 'why databases corrupt',
  location: 'Related resources block',
  reason: 'repair related #3 of 5',
});
add({
  source: '/access-database-repair',
  target: '/blog/access-database-multi-user-setup',
  anchor: 'multi-user Access setup',
  location: 'Related resources block',
  reason: 'repair related #4 of 5',
});
add({
  source: '/access-database-repair',
  target: '/blog/access-vs-excel-when-to-use-each',
  anchor: 'Access vs Excel guide',
  location: 'Related resources block',
  reason: 'repair related #5 of 5 — dropped best-practices and front-end-back-end',
});

// database-migration related includes healthcare
add({
  source: '/database-migration',
  target: '/case-studies/healthcare-records-access-sql-migration',
  anchor: 'healthcare SQL migration case study',
  location: 'Related resources block',
  reason: 'Add healthcare to migration Related block',
});
add({
  source: '/database-migration',
  target: '/blog/how-to-modernize-access-database',
  anchor: 'modernize an Access database',
  location: 'Related resources block',
  reason: 'pillar related reachability',
});
add({
  source: '/database-migration',
  target: '/blog/access-vs-sql-server-when-to-migrate',
  anchor: 'Access vs SQL Server',
  location: 'Related resources block',
  reason: 'pillar related',
  new_or_existing: 'existing',
  action: 'keep',
});
add({
  source: '/database-migration',
  target: '/case-studies/access-sql-migration-enterprise',
  anchor: '50-user SQL migration case study',
  location: 'Related resources block',
  reason: 'pillar related',
  new_or_existing: 'existing',
  action: 'keep',
});

// Replace needs-content donors (section 5)
const donorFixes = [
  [
    '/blog/access-database-repair-guide',
    '/blog/access-database-repair-cost',
    'Access repair pricing',
    'body cost/budget sentence',
  ],
  [
    '/blog/why-your-access-database-keeps-crashing',
    '/blog/access-database-repair-cost',
    'Access repair pricing',
    'body cost sentence',
  ],
  [
    '/blog/why-access-databases-become-corrupted',
    '/blog/access-database-repair-cost',
    'what repair costs',
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
    'modernize an Access database',
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
    'healthcare SQL migration case study',
    'body case example sentence',
  ],
  [
    '/blog/can-access-handle-50-users',
    '/case-studies/healthcare-records-access-sql-migration',
    '30-user SQL migration case study',
    'body case example sentence',
  ],
  [
    '/blog/access-vs-sql-server-when-to-migrate',
    '/case-studies/healthcare-records-access-sql-migration',
    'healthcare SQL migration case study',
    'body case example sentence',
  ],
];
for (const [s, t, a, loc] of donorFixes) {
  add({
    source: s,
    target: t,
    anchor: a,
    location: loc,
    reason: 'Replaces needs-content; natural sentence donor',
  });
}

// Generic anchor rewrites (existing pages)
add({
  source: '/case-studies/manufacturing-inventory-tracking',
  target: '/access-consulting',
  anchor: 'Access database consulting',
  location: 'CaseStudyContent related service',
  reason: 'Rewrite generic View service →',
  new_or_existing: 'existing',
  current_anchor: 'View service →',
  action: 'rewrite',
});
add({
  source: '/pricing',
  target: '/excel-automation',
  anchor: 'Excel automation services',
  location: 'service pricing card',
  reason: 'Rewrite generic View service → (title link)',
  new_or_existing: 'existing',
  current_anchor: 'View service →',
  action: 'rewrite',
});

// Template-driven related posts → plan rows (registry field; implement later)
for (const [src, tgts] of Object.entries(relatedPosts)) {
  const anchors = {
    '10-signs-you-need-excel-automation': 'signs you need automation',
    'excel-automation-cost-what-to-expect': 'Excel automation pricing',
    'excel-reporting-automation-complete-guide': 'Excel reporting automation',
    'how-to-speed-up-slow-excel-spreadsheets': 'speed up slow spreadsheets',
    'common-excel-vba-mistakes-and-how-to-fix-them': 'common VBA mistakes',
    'financial-modeling-best-practices': 'financial modeling best practices',
    'why-your-access-database-keeps-crashing': 'why Access keeps crashing',
    'why-access-databases-become-corrupted': 'why Access corrupts',
    'access-database-repair-guide': 'Access repair guide',
    'access-database-repair-cost': 'Access repair pricing',
    'how-to-split-access-database': 'split an Access database',
    'access-database-multi-user-setup': 'multi-user Access setup',
    'access-front-end-back-end-architecture': 'front-end back-end design',
    'can-access-handle-50-users': 'Access with 50 users',
    'access-database-performance-optimization': 'Access performance tuning',
    'how-to-modernize-access-database': 'modernize an Access database',
    'access-database-best-practices': 'Access best practices',
    'access-database-maintenance-checklist': 'Access maintenance checklist',
    'is-microsoft-access-still-relevant-2026': 'is Access still relevant',
    'access-vs-excel-when-to-use-each': 'Access vs Excel guide',
    'access-vs-power-apps-when-to-stay-on-access': 'Access vs Power Apps',
    'access-vs-sql-server-when-to-migrate': 'Access vs SQL Server',
    'when-to-migrate-from-access': 'when to migrate Access',
    'access-sql-server-migration-cost': 'SQL migration pricing',
  };
  for (const t of tgts) {
    add({
      source: `/blog/${src}`,
      target: `/blog/${t}`,
      anchor: anchors[t] || t.replace(/-/g, ' ').split(' ').slice(0, 5).join(' '),
      location: 'Related posts block (end of post)',
      reason: 'TEMPLATE 2a related posts registry',
    });
  }
}

// Template case study related
for (const [src, tgts] of Object.entries(relatedCases)) {
  const amap = {
    'manufacturing-inventory-tracking': 'zero-crash inventory case study',
    'retail-pricing-system': 'retail pricing case study',
    'distribution-warehouse-pick-list': 'warehouse pick-time case study',
    'construction-job-costing-tracker': 'same-day WIP case study',
    'construction-automated-reporting': 'construction reporting case study',
    'distribution-slow-spreadsheet': 'slow spreadsheet case study',
    'financial-services-data-integration': 'Excel to SQL case study',
    'access-sql-migration-enterprise': '50-user SQL migration case study',
    'healthcare-records-access-sql-migration': 'healthcare SQL migration case study',
  };
  for (const t of tgts) {
    add({
      source: `/case-studies/${src}`,
      target: `/case-studies/${t}`,
      anchor: amap[t],
      location: 'Related case studies sidebar (replace hard-coded first-two)',
      reason: 'TEMPLATE 2b related case studies by relatedService/cluster',
    });
  }
}

// Blog hub SSR proposal row (not a link row — documented in audit); optional plan note:
rows.push({
  source_URL: u('/blog'),
  target_URL: u('/blog'),
  anchor_text: 'N/A — hub SSR',
  insertion_location: 'server-rendered post list + 3 category links',
  reason: `BEFORE no-JS post links=${gather.blog.post_link_count}; AFTER proposed=24 post title links + 3 category links. Implement Blog hub SSR (no content-copy change beyond structure).`,
  new_or_existing: 'new',
  current_anchor: '',
  action: 'rewrite',
});

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
  rows.filter((r) => !(r.source_URL === r.target_URL && !r.reason.includes('hub SSR'))),
);

// before/after table from snap + related template inbound
const beforeUnreach = snap.unreachable || [];
const audit = `# Internal Links Audit — Plan Revision (no content edits)

Generated: ${new Date().toISOString()}
Crawl: ${gather.blog ? 'live server checks + prior BFS snapshot' : ''}

## 1. /blog hub (no-JS)
- **BEFORE** unique \`/blog/<slug>\` links in HTML without JS: **${gather.blog.post_link_count}**
- Category links without JS: **${gather.blog.category_links.length}**
- Cause: \`blog/page.jsx\` only renders client \`BlogPageClient\` + \`BlogPostGrid\` (whole-card links). Also \`BLOG_POSTS\` lists **13** posts while registry has **24**.
- **AFTER (proposed SSR, not implemented):** **24** linked titles+excerpts from registry + **3** category page links in HTML.
- Action when approved: server-render list from registry; keep filters as progressive enhancement.

## 7. Title \`&amp;\` check
View-source on \`/blog\`: title is \`Blog - Excel &amp; Access Automation Tips &amp; Guides\`.
- \`&amp;amp;\` (double-encode): **no**
- Bare \`&\`: **no**
- Verdict: **correct HTML escaping of \`&\`**, not double-encoding. Crawl CSV showed entities because the parser kept raw HTML entities.

## 2. Template proposals (design only)
Files:
- \`template-related-posts.csv\` — full 3-related map; every post inbound ≥3 from related blocks
- \`template-related-case-studies.csv\` — by relatedService/cluster; replaces \`otherStudies.slice(0,2)\` (manufacturing + construction-reporting hard order)
- \`template-category-taxonomy.csv\` — label vs category page + fix recommendation; **do not link chips until membership fixed**

### Category fix recommendation
1. Give each post exactly one \`categorySlug\` (\`excel-tips\` | \`access-database\` | \`automation-guides\` | new \`financial-modeling\` | optional \`database-migration\`).
2. Stop overlapping \`matchCategories\` (Excel Automation must not match both excel-tips and automation-guides).
3. Retag \`access-sql-server-migration-cost\` → Database Migration.
4. Add \`/blog/categories/financial-modeling\` or map Financial Modeling → excel-tips intentionally.
5. Only then wrap the category chip in \`<Link href={categorySlug}>\`.

## 3. Fixes captured in plan
- Footer Free Resources → **HOLD** (FREE_CANON)
- Breadcrumb \`/resources\` → \`/free-resources\`; pending 301 \`/resources\` → \`/free-resources\`
- Hire teasers mapped to 3 case study URLs; rewrite anchors
- Generic/blob anchors listed in \`generic-anchor-fixes.csv\`

## 4. Free pages
See \`free-pages-comparison.csv\`. Jaccard overlap ≈ **1.0** across all three — duplicates. No links planned between them. Targets that were \`/free-checklist\` → **FREE_CANON**.

## Pending approval redirects
- \`/resources/faq\` → \`/faq\`
- \`/resources/free-checklist\` → FREE_CANON (after decision)
- \`/resources\` → \`/free-resources\` (**new**)

## Plan hygiene this revision
- Dropped: financial-services→healthcare; financial-modeling-best-practices→excel-tips; all post→category rows; homepage→faq as new (marked existing)
- access-database-repair capped at 5 related (dropped best-practices + front-end-back-end)
- Calculator donors updated
- FAQ anchors = "frequently asked questions" / "FAQ" only
- Healthcare added to database-migration Related
- Former needs-content five filled with specified donors
- Columns: \`current_anchor\`, \`action\` (keep/rewrite)

## UNREACHABLE before (from prior crawl)
${beforeUnreach.map((x) => `- ${x}`).join('\n')}

## STOP
Awaiting approval. No page content implemented in this step.
`;

fs.writeFileSync(`${OUT}/internal-links-audit.md`, audit);

// before/after summary csv
writeCsv(
  `${OUT}/before-after-summary.csv`,
  ['metric', 'before', 'after_proposed'],
  [
    {
      metric: 'blog_hub_post_links_no_js',
      before: gather.blog.post_link_count,
      after_proposed: 24,
    },
    {
      metric: 'blog_hub_category_links_no_js',
      before: gather.blog.category_links.length,
      after_proposed: 3,
    },
    {
      metric: 'unreachable_from_homepage',
      before: beforeUnreach.length,
      after_proposed: '0 (with footer FREE_CANON + hub SSR + planned links)',
    },
    {
      metric: 'link_plan_rows',
      before: 'prior plan',
      after_proposed: rows.length,
    },
    {
      metric: 'title_amp_double_encoded',
      before: 'appeared in CSV',
      after_proposed: 'false — correct &amp; escaping',
    },
  ],
);

console.log(
  JSON.stringify(
    {
      relatedPostsMinInbound: Math.min(...Object.values(inboundRelated)),
      relatedCasesMinInbound: Math.min(...Object.values(caseInbound)),
      planRows: rows.length,
      blogBefore: gather.blog.post_link_count,
      freeOverlap: gather.free_pages_overlap_jaccard_words_gt3,
    },
    null,
    2,
  ),
);
