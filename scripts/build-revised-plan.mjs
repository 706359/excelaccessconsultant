import fs from 'fs';

const OUT = 'docs/seo/internal-links';
const BASE = 'https://excelaccessconsultant.com';
const snap = JSON.parse(fs.readFileSync(`${OUT}/crawl-snapshot.json`, 'utf8'));

function parseCsvLine(line) {
  const cols = [];
  let cur = '';
  let q = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      q = !q;
      continue;
    }
    if (c === ',' && !q) {
      cols.push(cur);
      cur = '';
      continue;
    }
    cur += c;
  }
  cols.push(cur);
  return cols;
}

function pathOf(url) {
  return (url || '').replace('https://excelaccessconsultant.com', '') || '/';
}

// Existing contextual pairs from crawl
const ctx = new Set();
const all = new Set();
for (const line of fs.readFileSync(`${OUT}/crawl-links-raw.csv`, 'utf8').trim().split(/\n/).slice(1)) {
  const [s, t, , loc] = parseCsvLine(line);
  const src = pathOf(s);
  const tgt = pathOf(t);
  all.add(`${src}->${tgt}`);
  if (
    (loc === 'body' || loc === 'related') &&
    !['/blog', '/case-studies'].includes(src) &&
    !src.startsWith('/blog/categories/')
  ) {
    ctx.add(`${src}->${tgt}`);
  }
}

const rows = [];
const pair = new Set();
function add(source, target, anchor, location, reason) {
  if (source === target) return;
  const k = `${source}->${target}`;
  if (pair.has(k)) return;
  pair.add(k);
  const existing = ctx.has(k);
  rows.push({
    source_URL: BASE + (source === '/' ? '' : source),
    target_URL: BASE + (target === '/' ? '' : target),
    anchor_text: anchor,
    insertion_location: location,
    reason,
    new_or_existing: existing ? 'existing' : 'new',
  });
}

// --- D: REQUIRED ---
add('/', '/free-resources', 'Free Resources', 'footer Resources column', 'REQUIRED footer reachability');
add('/pricing', '/free-resources', 'free Excel resources', 'body near lead magnets', 'REQUIRED free-resources contextual');
add('/contact', '/free-resources', 'free Excel resources', 'body before form', 'REQUIRED free-resources contextual');
add(
  '/blog/access-database-maintenance-checklist',
  '/free-resources',
  'free Access checklist',
  'body closing CTA',
  'REQUIRED free-resources contextual',
);
add(
  '/blog/access-database-best-practices',
  '/free-resources',
  'free Access resources',
  'body closing CTA',
  'REQUIRED free-resources contextual',
);

add('/pricing', '/resources/calculator', 'ROI calculator', 'body near pricing tiers', 'REQUIRED calculator contextual');
add(
  '/blog/excel-automation-cost-what-to-expect',
  '/resources/calculator',
  'automation ROI calculator',
  'body cost paragraph',
  'REQUIRED calculator contextual',
);
add(
  '/blog/access-sql-server-migration-cost',
  '/resources/calculator',
  'migration ROI calculator',
  'body cost paragraph',
  'REQUIRED calculator contextual',
);
add(
  '/blog/access-database-repair-cost',
  '/resources/calculator',
  'repair ROI calculator',
  'body cost paragraph',
  'REQUIRED calculator contextual',
);
add('/free-resources', '/resources/calculator', 'manual work calculator', 'related resources block', 'REQUIRED calculator contextual');

add('/', '/faq', 'FAQ', 'footer Resources column', 'REQUIRED footer reachability');
add('/pricing', '/faq', 'consulting FAQ', 'body near FAQ teaser', 'REQUIRED faq contextual');
add('/contact', '/faq', 'common consulting questions', 'body before form', 'REQUIRED faq contextual');
add('/hire-excel-vba-consultant', '/faq', 'VBA consulting FAQ', 'body FAQ intro', 'REQUIRED faq contextual');
add('/excel-consultant-utah', '/faq', 'Utah consulting FAQ', 'body near process', 'REQUIRED faq contextual');
add('/excel-automation', '/faq', 'automation FAQ', 'Related resources block', 'REQUIRED faq contextual');
add('/access-consulting', '/faq', 'Access consulting FAQ', 'Related resources block', 'REQUIRED faq contextual');
add('/database-migration', '/faq', 'migration FAQ', 'Related resources block', 'REQUIRED faq contextual');
add('/vba-development', '/faq', 'VBA development FAQ', 'Related resources block', 'REQUIRED faq contextual');
add('/financial-modeling', '/faq', 'modeling FAQ', 'Related resources block', 'REQUIRED faq contextual');

add('/free-resources', '/free-checklist', 'Access repair checklist', 'related resource card', 'REQUIRED free-checklist contextual');
add('/access-consulting', '/free-checklist', 'Access repair checklist', 'Related resources block', 'REQUIRED free-checklist contextual');
add('/access-database-repair', '/free-checklist', 'database repair checklist', 'Related resources block', 'REQUIRED free-checklist contextual');
add(
  '/blog/access-database-best-practices',
  '/free-checklist',
  'maintenance checklist download',
  'body CTA paragraph',
  'REQUIRED free-checklist contextual',
);

add('/vba-development', '/hire-excel-vba-consultant', 'hire a VBA consultant', 'Related resources block', 'REQUIRED hire contextual');
add(
  '/excel-automation',
  '/hire-excel-vba-consultant',
  'hire an Excel VBA consultant',
  'Related resources block',
  'REQUIRED hire contextual',
);
add(
  '/blog/common-excel-vba-mistakes-and-how-to-fix-them',
  '/hire-excel-vba-consultant',
  'hire a VBA consultant',
  'body closing CTA',
  'REQUIRED hire contextual',
);
add(
  '/case-studies/retail-pricing-system',
  '/hire-excel-vba-consultant',
  'hire a VBA consultant',
  'body outcome CTA',
  'REQUIRED hire contextual',
);
add(
  '/case-studies/construction-automated-reporting',
  '/hire-excel-vba-consultant',
  'hire an Excel consultant',
  'body outcome CTA',
  'REQUIRED hire contextual',
);
add('/pricing', '/hire-excel-vba-consultant', 'hire Excel VBA help', 'body near VBA tier', 'REQUIRED hire contextual');

add('/about', '/excel-consultant-utah', 'Utah Excel consulting', 'body location paragraph', 'REQUIRED utah contextual');
add('/contact', '/excel-consultant-utah', 'Utah Excel consultant', 'body service-area paragraph', 'REQUIRED utah contextual');
add('/pricing', '/excel-consultant-utah', 'Utah consulting rates', 'body local note', 'REQUIRED utah contextual');
add('/', '/excel-consultant-utah', 'Utah Excel consultant', 'body local teaser', 'REQUIRED utah contextual');
add(
  '/hire-excel-vba-consultant',
  '/excel-consultant-utah',
  'Utah VBA consultant',
  'body service-area paragraph',
  'REQUIRED utah contextual',
);

// --- Pillar Related resources (max 8 each, unreachable/thin first) ---
// excel-automation
add('/excel-automation', '/blog/10-signs-you-need-excel-automation', 'signs you need automation', 'Related resources block', 'pillar related');
add('/excel-automation', '/blog/excel-automation-cost-what-to-expect', 'Excel automation pricing', 'Related resources block', 'pillar related');
add('/excel-automation', '/blog/excel-reporting-automation-complete-guide', 'automating Excel reports', 'Related resources block', 'pillar related');
add('/excel-automation', '/blog/how-to-speed-up-slow-excel-spreadsheets', 'speed up slow spreadsheets', 'Related resources block', 'pillar related');
add('/excel-automation', '/blog/common-excel-vba-mistakes-and-how-to-fix-them', 'common VBA mistakes', 'Related resources block', 'pillar related');
add('/excel-automation', '/case-studies/construction-automated-reporting', 'construction reporting case study', 'Related resources block', 'pillar related');
add('/excel-automation', '/case-studies/distribution-slow-spreadsheet', 'slow spreadsheet case study', 'Related resources block', 'pillar related');
// 8th is hire (already added)

// access-consulting — prioritize thin/unreachable cluster pages
add('/access-consulting', '/blog/access-database-repair-cost', 'Access repair pricing', 'Related resources block', 'pillar related + reachability');
add('/access-consulting', '/blog/access-database-performance-optimization', 'Access performance tuning', 'Related resources block', 'pillar related + reachability');
add('/access-consulting', '/case-studies/construction-job-costing-tracker', 'same-day WIP case study', 'Related resources block', 'pillar related');
add('/access-consulting', '/blog/access-database-best-practices', 'Access best practices', 'Related resources block', 'pillar related');
add('/access-consulting', '/blog/access-database-maintenance-checklist', 'Access maintenance checklist', 'Related resources block', 'pillar related');
add('/access-consulting', '/blog/why-your-access-database-keeps-crashing', 'why Access keeps crashing', 'Related resources block', 'pillar related');
add('/access-consulting', '/access-database-repair', 'Access database repair', 'Related resources block', 'pillar related');
// 8th is free-checklist (already)

// database-migration
add('/database-migration', '/blog/how-to-modernize-access-database', 'modernize an Access database', 'Related resources block', 'pillar related + reachability');
add('/database-migration', '/case-studies/healthcare-records-access-sql-migration', 'healthcare SQL migration case study', 'Related resources block', 'pillar related');
add('/database-migration', '/blog/access-vs-sql-server-when-to-migrate', 'Access vs SQL Server', 'Related resources block', 'pillar related');
add('/database-migration', '/blog/when-to-migrate-from-access', 'when to leave Access', 'Related resources block', 'pillar related');
add('/database-migration', '/blog/access-sql-server-migration-cost', 'SQL migration pricing', 'Related resources block', 'pillar related');
add('/database-migration', '/case-studies/access-sql-migration-enterprise', '50-user SQL migration case study', 'Related resources block', 'pillar related');
add('/database-migration', '/access-consulting', 'Access consulting services', 'Related resources block', 'related pillar');
// 8th is faq (already)

// vba-development: hire+faq already; add mistakes + retail + excel-automation
add('/vba-development', '/blog/common-excel-vba-mistakes-and-how-to-fix-them', 'common VBA mistakes', 'Related resources block', 'pillar related');
add('/vba-development', '/case-studies/retail-pricing-system', 'retail pricing case study', 'Related resources block', 'pillar related');
add('/vba-development', '/excel-automation', 'Excel automation services', 'Related resources block', 'related pillar');

// financial-modeling: faq already
add('/financial-modeling', '/blog/financial-modeling-best-practices', 'financial modeling best practices', 'Related resources block', 'pillar related');
add('/financial-modeling', '/case-studies/financial-services-data-integration', 'Excel to SQL case study', 'Related resources block', 'pillar related');
add('/financial-modeling', '/excel-automation', 'Excel automation services', 'Related resources block', 'related pillar');

// repair service extras for thin posts (related block — not subject to pillar-8 cap)
add('/access-database-repair', '/blog/access-database-repair-cost', 'Access repair pricing', 'Related resources block', 'raise inbound + reachability');
add('/access-database-repair', '/blog/why-access-databases-become-corrupted', 'why databases corrupt', 'Related resources block', 'raise inbound');
add('/access-database-repair', '/blog/access-database-best-practices', 'Access best practices', 'Related resources block', 'raise inbound');
add('/access-database-repair', '/blog/access-database-multi-user-setup', 'multi-user Access setup', 'Related resources block', 'raise inbound');
add('/access-database-repair', '/blog/access-front-end-back-end-architecture', 'front-end back-end design', 'Related resources block', 'raise inbound');
add('/access-database-repair', '/blog/access-vs-excel-when-to-use-each', 'Access vs Excel guide', 'Related resources block', 'raise inbound');
add('/case-studies/access-sql-migration-enterprise', '/blog/access-sql-server-migration-cost', 'SQL migration pricing', 'body related reading', 'raise inbound');
add('/case-studies/healthcare-records-access-sql-migration', '/blog/how-to-modernize-access-database', 'modernize an Access database', 'body related reading', 'raise inbound');
add('/blog/how-to-split-access-database', '/blog/access-database-multi-user-setup', 'multi-user Access setup', 'body topical sentence', 'sibling');
add('/blog/access-database-maintenance-checklist', '/blog/access-database-best-practices', 'Access best practices', 'body topical sentence', 'sibling');
add('/blog/access-vs-power-apps-when-to-stay-on-access', '/blog/access-vs-excel-when-to-use-each', 'Access vs Excel guide', 'body topical sentence', 'sibling');
add('/blog/when-to-migrate-from-access', '/blog/access-sql-server-migration-cost', 'SQL migration pricing', 'body topical sentence', 'sibling');
add('/blog/access-database-performance-optimization', '/blog/access-front-end-back-end-architecture', 'front-end back-end design', 'body topical sentence', 'sibling');
add('/blog/is-microsoft-access-still-relevant-2026', '/blog/access-vs-power-apps-when-to-stay-on-access', 'Access vs Power Apps', 'body topical sentence', 'sibling');
add('/case-studies/construction-job-costing-tracker', '/case-studies/distribution-warehouse-pick-list', 'warehouse pick-time case study', 'body related case studies', 'raise inbound');
add('/case-studies/retail-pricing-system', '/case-studies/construction-job-costing-tracker', 'same-day WIP case study', 'body related case studies', 'raise inbound');
add('/case-studies/distribution-slow-spreadsheet', '/case-studies/distribution-warehouse-pick-list', 'warehouse pick-time case study', 'body related case studies', 'raise inbound');
add('/case-studies/financial-services-data-integration', '/case-studies/healthcare-records-access-sql-migration', 'healthcare SQL migration case study', 'body related case studies', 'raise inbound');

// case study siblings for thin cases
add(
  '/case-studies/manufacturing-inventory-tracking',
  '/case-studies/construction-job-costing-tracker',
  'same-day WIP case study',
  'body related case studies',
  'raise inbound',
);
add(
  '/case-studies/distribution-warehouse-pick-list',
  '/case-studies/construction-job-costing-tracker',
  'job costing tracker results',
  'body related case studies',
  'raise inbound',
);
add(
  '/case-studies/access-sql-migration-enterprise',
  '/case-studies/healthcare-records-access-sql-migration',
  'healthcare SQL migration case study',
  'body related case studies',
  'raise inbound',
);
add(
  '/case-studies/healthcare-records-access-sql-migration',
  '/case-studies/access-sql-migration-enterprise',
  '50-user SQL migration case study',
  'body related case studies',
  'sibling case study',
);
add(
  '/case-studies/manufacturing-inventory-tracking',
  '/case-studies/distribution-warehouse-pick-list',
  'warehouse pick-time case study',
  'body related case studies',
  'raise inbound',
);

// --- Cluster -> pillar (body CTA) only if missing contextual ---
const pillarLinks = [
  ['/blog/10-signs-you-need-excel-automation', '/excel-automation', 'Excel automation services'],
  ['/blog/excel-automation-cost-what-to-expect', '/excel-automation', 'Excel automation consultant'],
  ['/blog/excel-reporting-automation-complete-guide', '/excel-automation', 'automating Excel reports'],
  ['/blog/how-to-speed-up-slow-excel-spreadsheets', '/excel-automation', 'Excel automation services'],
  ['/blog/common-excel-vba-mistakes-and-how-to-fix-them', '/vba-development', 'custom VBA development'],
  ['/blog/why-your-access-database-keeps-crashing', '/access-consulting', 'Access database consulting'],
  ['/blog/access-database-repair-guide', '/access-consulting', 'Microsoft Access consultants'],
  ['/blog/access-database-repair-cost', '/access-consulting', 'Access consulting services'],
  ['/blog/why-access-databases-become-corrupted', '/access-consulting', 'Access database consulting'],
  ['/blog/access-database-multi-user-setup', '/access-consulting', 'Microsoft Access consultants'],
  ['/blog/can-access-handle-50-users', '/access-consulting', 'Access consulting services'],
  ['/blog/how-to-split-access-database', '/access-consulting', 'Access database consulting'],
  ['/blog/access-front-end-back-end-architecture', '/access-consulting', 'Access consulting services'],
  ['/blog/access-database-performance-optimization', '/access-consulting', 'Microsoft Access consultants'],
  ['/blog/access-database-best-practices', '/access-consulting', 'Access database consulting'],
  ['/blog/access-database-maintenance-checklist', '/access-consulting', 'Access consulting services'],
  ['/blog/is-microsoft-access-still-relevant-2026', '/access-consulting', 'Access database consulting'],
  ['/blog/access-vs-excel-when-to-use-each', '/access-consulting', 'Microsoft Access consultants'],
  ['/blog/access-vs-power-apps-when-to-stay-on-access', '/access-consulting', 'Access consulting services'],
  ['/blog/access-vs-sql-server-when-to-migrate', '/database-migration', 'Access to SQL Server migration'],
  ['/blog/when-to-migrate-from-access', '/database-migration', 'migrating Access to SQL'],
  ['/blog/access-sql-server-migration-cost', '/database-migration', 'database migration services'],
  ['/blog/how-to-modernize-access-database', '/database-migration', 'Access to SQL Server migration'],
  ['/blog/financial-modeling-best-practices', '/financial-modeling', 'Excel financial modeling'],
  ['/case-studies/construction-automated-reporting', '/excel-automation', 'Excel automation services'],
  ['/case-studies/distribution-slow-spreadsheet', '/excel-automation', 'Excel automation consultant'],
  ['/case-studies/manufacturing-inventory-tracking', '/access-consulting', 'Access database consulting'],
  ['/case-studies/retail-pricing-system', '/access-consulting', 'Microsoft Access consultants'],
  ['/case-studies/distribution-warehouse-pick-list', '/access-consulting', 'Access consulting services'],
  ['/case-studies/construction-job-costing-tracker', '/access-consulting', 'Access database consulting'],
  ['/case-studies/access-sql-migration-enterprise', '/database-migration', 'Access to SQL Server migration'],
  ['/case-studies/healthcare-records-access-sql-migration', '/database-migration', 'migrating Access to SQL'],
  ['/case-studies/financial-services-data-integration', '/financial-modeling', 'financial modeling services'],
  ['/blog/categories/access-database', '/access-consulting', 'Access consulting services'],
  ['/blog/categories/excel-tips', '/excel-automation', 'Excel automation services'],
  ['/blog/categories/automation-guides', '/excel-automation', 'Excel automation consultant'],
];
for (const [s, t, a] of pillarLinks) add(s, t, a, 'body service CTA', 'cluster to pillar');

// --- Post -> category (PRIORITY body links; keep under 5 with required) ---
const catMap = {
  '/blog/10-signs-you-need-excel-automation': ['/blog/categories/excel-tips', 'Excel tips articles'],
  '/blog/how-to-speed-up-slow-excel-spreadsheets': ['/blog/categories/excel-tips', 'Excel tip library'],
  '/blog/financial-modeling-best-practices': ['/blog/categories/excel-tips', 'more Excel tips'],
  '/blog/excel-automation-cost-what-to-expect': ['/blog/categories/automation-guides', 'automation guides'],
  '/blog/excel-reporting-automation-complete-guide': ['/blog/categories/automation-guides', 'automation how-tos'],
  '/blog/common-excel-vba-mistakes-and-how-to-fix-them': ['/blog/categories/automation-guides', 'VBA automation guides'],
  '/blog/why-your-access-database-keeps-crashing': ['/blog/categories/access-database', 'Access database articles'],
  '/blog/access-database-repair-guide': ['/blog/categories/access-database', 'Access repair articles'],
  '/blog/access-database-repair-cost': ['/blog/categories/access-database', 'Access cost guides'],
  '/blog/why-access-databases-become-corrupted': ['/blog/categories/access-database', 'Access corruption guides'],
  '/blog/access-database-multi-user-setup': ['/blog/categories/access-database', 'multi-user Access guides'],
  '/blog/can-access-handle-50-users': ['/blog/categories/access-database', 'Access capacity articles'],
  '/blog/how-to-split-access-database': ['/blog/categories/access-database', 'Access split guides'],
  '/blog/access-front-end-back-end-architecture': ['/blog/categories/access-database', 'Access architecture posts'],
  '/blog/access-database-performance-optimization': ['/blog/categories/access-database', 'Access speed articles'],
  '/blog/access-database-best-practices': ['/blog/categories/access-database', 'Access best-practice posts'],
  '/blog/access-database-maintenance-checklist': ['/blog/categories/access-database', 'Access maintenance posts'],
  '/blog/is-microsoft-access-still-relevant-2026': ['/blog/categories/access-database', 'Access relevance articles'],
  '/blog/access-vs-excel-when-to-use-each': ['/blog/categories/access-database', 'Access vs Excel posts'],
  '/blog/access-vs-power-apps-when-to-stay-on-access': ['/blog/categories/access-database', 'Access vs Power Apps posts'],
  '/blog/access-vs-sql-server-when-to-migrate': ['/blog/categories/access-database', 'Access migration articles'],
  '/blog/when-to-migrate-from-access': ['/blog/categories/access-database', 'when to leave Access'],
  '/blog/access-sql-server-migration-cost': ['/blog/categories/access-database', 'Access SQL cost posts'],
  '/blog/how-to-modernize-access-database': ['/blog/categories/access-database', 'Access modernization posts'],
};
for (const [s, [t, a]] of Object.entries(catMap)) {
  add(s, t, a, 'body tag line under title', 'post to category');
}

// Targeted siblings for remaining thin pages (only if under body budget later)
add(
  '/blog/access-vs-sql-server-when-to-migrate',
  '/blog/how-to-modernize-access-database',
  'modernize an Access database',
  'body topical sentence',
  'sibling + reachability',
);
add(
  '/blog/can-access-handle-50-users',
  '/blog/access-database-performance-optimization',
  'Access performance tuning',
  'body topical sentence',
  'sibling + reachability',
);
add(
  '/blog/access-database-repair-guide',
  '/blog/access-database-repair-cost',
  'Access repair pricing',
  'body topical sentence',
  'sibling + raise inbound',
);
add(
  '/blog/why-access-databases-become-corrupted',
  '/blog/access-database-repair-guide',
  'Access repair guide',
  'body topical sentence',
  'sibling',
);
add(
  '/blog/access-front-end-back-end-architecture',
  '/blog/access-database-multi-user-setup',
  'multi-user Access setup',
  'body topical sentence',
  'sibling',
);
add(
  '/blog/excel-reporting-automation-complete-guide',
  '/blog/10-signs-you-need-excel-automation',
  'signs you need automation',
  'body topical sentence',
  'sibling',
);
add(
  '/blog/access-vs-excel-when-to-use-each',
  '/blog/access-vs-power-apps-when-to-stay-on-access',
  'Access vs Power Apps',
  'body topical sentence',
  'sibling',
);

// Cap NEW body to 5 per source — drop lowest-priority (siblings first, then category if over — actually keep category+required)
const priority = (r) => {
  if (/REQUIRED/.test(r.reason)) return 0;
  if (/post to category/.test(r.reason)) return 1;
  if (/cluster to pillar/.test(r.reason)) return 2;
  if (/reachability|raise inbound/.test(r.reason)) return 3;
  if (/sibling/.test(r.reason)) return 4;
  return 5;
};
rows.sort((a, b) => priority(a) - priority(b));

const bodyNew = new Map();
const relatedCount = new Map();
const pillars = new Set([
  '/excel-automation',
  '/access-consulting',
  '/database-migration',
  '/vba-development',
  '/financial-modeling',
]);
const kept = [];
const anchorCount = new Map();

for (const r of rows) {
  const src = pathOf(r.source_URL);
  const tgt = pathOf(r.target_URL);
  if (r.new_or_existing === 'new' && /^body/i.test(r.insertion_location)) {
    const n = bodyNew.get(src) || 0;
    if (n >= 5) continue;
    bodyNew.set(src, n + 1);
  }
  if (/related/i.test(r.insertion_location) && pillars.has(src)) {
    const n = relatedCount.get(src) || 0;
    if (n >= 8) continue;
    relatedCount.set(src, n + 1);
  }
  if (r.new_or_existing === 'new') {
    const ak = `${tgt}::${r.anchor_text.toLowerCase()}`;
    const n = anchorCount.get(ak) || 0;
    if (n >= 2) continue;
    anchorCount.set(ak, n + 1);
  }
  kept.push(r);
}

kept.sort((a, b) => a.source_URL.localeCompare(b.source_URL) || a.target_URL.localeCompare(b.target_URL));

function csvEscape(v) {
  const s = String(v ?? '');
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

fs.writeFileSync(
  `${OUT}/link-plan.csv`,
  [
    'source_URL,target_URL,anchor_text,insertion_location,reason,new_or_existing',
    ...kept.map((r) =>
      [r.source_URL, r.target_URL, r.anchor_text, r.insertion_location, r.reason, r.new_or_existing]
        .map(csvEscape)
        .join(','),
    ),
  ].join('\n') + '\n',
);

// Project
const baseline = new Map();
for (const row of snap.inventory) {
  const p = pathOf(row.URL);
  baseline.set(p, {
    url: row.URL,
    before: Number(row.contextual_inbound_count),
    depthBefore: row.click_depth_from_homepage,
    from: new Set(
      String(row.contextual_inbound_from || '')
        .split(' | ')
        .map((x) => x.trim())
        .filter(Boolean),
    ),
  });
}
for (const r of kept) {
  if (r.new_or_existing !== 'new') continue;
  const src = pathOf(r.source_URL);
  const tgt = pathOf(r.target_URL);
  const loc = r.insertion_location.toLowerCase();
  if (!(loc.startsWith('body') || loc.includes('related'))) continue;
  if (['/blog', '/case-studies'].includes(src) || src.startsWith('/blog/categories/')) continue;
  if (!baseline.has(tgt)) continue;
  baseline.get(tgt).from.add(src);
}

const chrome = new Set([
  '/excel-automation',
  '/access-consulting',
  '/access-database-repair',
  '/financial-modeling',
  '/database-migration',
  '/vba-development',
  '/case-studies',
  '/blog',
  '/pricing',
  '/faq',
  '/excel-consultant-utah',
  '/hire-excel-vba-consultant',
  '/free-checklist',
  '/free-resources',
  '/about',
  '/contact',
  '/privacy-policy',
]);
const edges = new Map();
function addE(a, b) {
  if (!edges.has(a)) edges.set(a, new Set());
  edges.get(a).add(b);
}
for (const line of fs.readFileSync(`${OUT}/crawl-links-raw.csv`, 'utf8').trim().split(/\n/).slice(1)) {
  const [s, t] = parseCsvLine(line);
  addE(pathOf(s), pathOf(t));
}
for (const r of kept) {
  if (r.new_or_existing === 'new') addE(pathOf(r.source_URL), pathOf(r.target_URL));
}
const depth = new Map([['/', 0]]);
const q = ['/'];
while (q.length) {
  const cur = q.shift();
  const d = depth.get(cur);
  for (const t of chrome) {
    if (t !== cur && !depth.has(t)) {
      depth.set(t, d + 1);
      q.push(t);
    }
  }
  for (const n of edges.get(cur) || []) {
    if (!depth.has(n)) {
      depth.set(n, d + 1);
      q.push(n);
    }
  }
}

const pending = new Set(['/resources/faq', '/resources/free-checklist']);
const exempt = new Set(['/', '/privacy-policy']);
const thin = [];
const unreachable = [];
const needs = [];
for (const [p, info] of baseline) {
  if (pending.has(p)) continue;
  if (p === '/resources') {
    needs.push(`${info.url} — 404 path in sitemap/crawl; remove or create page (pending decision)`);
    continue;
  }
  const after = info.from.size;
  const d = depth.has(p) ? depth.get(p) : 'UNREACHABLE';
  info.after = after;
  info.depthAfter = d;
  if (d === 'UNREACHABLE' || d > 3) unreachable.push({ url: info.url, depth: d, after });
  if (!exempt.has(p) && after < 3) {
    thin.push({ url: info.url, before: info.before, after, from: [...info.from].sort().join(' | ') });
    needs.push(`${info.url} — projected contextual inbound ${after}; needs content or approved donor outside strict relevance`);
  }
}

const beforeUnreach = snap.unreachable || [];
const summary = `# Internal Links Audit — Revised Steps 1–3 (LIVE CRAWL BASELINE)

Generated: ${new Date().toISOString()}
Crawl origin: ${snap.base}
**NO PAGE CONTENT EDITED YET — awaiting approval.**

## A. Real baseline (BFS crawl)
- Pages visited from homepage: **${snap.pagesVisited}**
- Sitemap paths in snapshot: **${(snap.sitemapPaths || []).length}**
- Raw internal links recorded: **${snap.linkCount}** (\`crawl-links-raw.csv\` with source, target, anchor, location)
- Inventory rebuilt: \`internal-links-inventory.csv\`

### UNREACHABLE from homepage (BEFORE)
${beforeUnreach.map((u) => `- ${u}`).join('\n')}

## B. Contextual definition
Counts **body + related blocks only**.  
Does **not** count: nav, footer, breadcrumb, \`/blog\`, \`/case-studies\`, \`/blog/categories/*\`, listing pages.

Thin contextual inbound BEFORE (<3, privacy exempt): **${snap.thinContextual.length}**

## C. Clusters
- \`healthcare-records-access-sql-migration\` → **database-migration** (Access→SQL cutover; relatedService matches).
- \`construction-job-costing-tracker\` → **access-consulting** — Access app for jobs/cost codes/WIP; Excel was legacy process only; relatedService=\`/access-consulting\`.

## D–G. Plan hygiene
- Unique source+target rows: **${kept.length}**
- New: **${kept.filter((r) => r.new_or_existing === 'new').length}**
- Existing tracked: **${kept.filter((r) => r.new_or_existing === 'existing').length}**
- Pillar Related resources ≤ 8; new body links ≤ 5/source; anchors hand-written; ≤2 identical anchors per target

## Pending approval (do not link; proposed 301s)
- \`/resources/faq\` → \`/faq\`
- \`/resources/free-checklist\` → \`/free-checklist\`

## Projected AFTER
### UNREACHABLE or depth > 3
${unreachable.length ? unreachable.map((u) => `- ${u.url} (depth: ${u.depth})`).join('\n') : '- (none)'}

### Contextual inbound still < 3 (excl. home, privacy, pending redirects)
${thin.length ? thin.map((t) => `- ${t.url} — before ${t.before} → after ${t.after}`).join('\n') : '- (none)'}

### Needs content / decision (do not force weak links)
${[...new Set(needs)].map((x) => `- ${x}`).join('\n') || '- (none)'}

## STOP
Awaiting your approval before implementing STEP 5+.
`;

fs.writeFileSync(`${OUT}/internal-links-audit.md`, summary);
fs.writeFileSync(
  `${OUT}/projected-contextual-inbound.csv`,
  [
    'URL,contextual_inbound_before,contextual_inbound_after,click_depth_before,click_depth_after',
    ...[...baseline.entries()]
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([p, info]) =>
        [info.url, info.before, info.after ?? info.from.size, info.depthBefore, info.depthAfter ?? '']
          .map(csvEscape)
          .join(','),
      ),
  ].join('\n') + '\n',
);

console.log(
  JSON.stringify(
    {
      unique: kept.length,
      neu: kept.filter((r) => r.new_or_existing === 'new').length,
      thinAfter: thin.length,
      unreachableAfter: unreachable.length,
      needs: [...new Set(needs)].length,
    },
    null,
    2,
  ),
);
