import fs from 'fs';

const OUT = './docs/seo/internal-links';
const snap = JSON.parse(fs.readFileSync(`${OUT}/crawl-snapshot.json`, 'utf8'));
const planRaw = fs.readFileSync(`${OUT}/link-plan.csv`, 'utf8').trim().split(/\n/);
const headers = planRaw[0].split(',');

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
  return url.replace('https://excelaccessconsultant.com', '') || '/';
}

const rows = planRaw.slice(1).map((line) => {
  const c = parseCsvLine(line);
  return {
    source_URL: c[0],
    target_URL: c[1],
    anchor_text: c[2],
    insertion_location: c[3],
    reason: c[4],
    new_or_existing: c[5],
  };
});

// Dedupe source+target — prefer new over existing if conflict, else first
const byPair = new Map();
for (const r of rows) {
  const k = `${pathOf(r.source_URL)}->${pathOf(r.target_URL)}`;
  if (!byPair.has(k)) byPair.set(k, r);
  else if (byPair.get(k).new_or_existing === 'existing' && r.new_or_existing === 'new') byPair.set(k, r);
}

let deduped = [...byPair.values()];

// Cap Related resources to 8 NEW+EXISTING related per pillar source
const pillars = new Set([
  '/excel-automation',
  '/access-consulting',
  '/database-migration',
  '/vba-development',
  '/financial-modeling',
]);
const relatedCounts = new Map();
deduped = deduped.filter((r) => {
  const src = pathOf(r.source_URL);
  if (!pillars.has(src)) return true;
  if (!/related/i.test(r.insertion_location)) return true;
  const n = relatedCounts.get(src) || 0;
  if (n >= 8) return false;
  relatedCounts.set(src, n + 1);
  return true;
});

// Cap NEW body links to 5 per source (footer/related excluded from body cap)
const bodyNew = new Map();
deduped = deduped.filter((r) => {
  if (r.new_or_existing !== 'new') return true;
  if (!/^body/i.test(r.insertion_location)) return true;
  const src = pathOf(r.source_URL);
  const n = bodyNew.get(src) || 0;
  if (n >= 5) return false;
  bodyNew.set(src, n + 1);
  return true;
});

// Anchor identical-target limit: max 2 identical anchor texts per target among NEW rows
const anchorToTarget = new Map();
deduped = deduped.filter((r) => {
  if (r.new_or_existing !== 'new') return true;
  const t = pathOf(r.target_URL);
  const key = `${t}::${r.anchor_text.toLowerCase()}`;
  const n = anchorToTarget.get(key) || 0;
  if (n >= 2) return false;
  anchorToTarget.set(key, n + 1);
  return true;
});

// Sort for readability
deduped.sort((a, b) => a.source_URL.localeCompare(b.source_URL) || a.target_URL.localeCompare(b.target_URL));

function csvEscape(v) {
  const s = String(v ?? '');
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

const outLines = [
  headers.join(','),
  ...deduped.map((r) =>
    ['source_URL', 'target_URL', 'anchor_text', 'insertion_location', 'reason', 'new_or_existing']
      .map((h) => csvEscape(r[h]))
      .join(','),
  ),
];
fs.writeFileSync(`${OUT}/link-plan.csv`, outLines.join('\n') + '\n');

// Project contextual inbound
const baseline = new Map();
for (const row of snap.inventory) {
  const p = pathOf(row.URL);
  baseline.set(p, {
    url: row.URL,
    depth: row.click_depth_from_homepage,
    contextual: Number(row.contextual_inbound_count),
    from: new Set(
      (row.contextual_inbound_from || '')
        .split(' | ')
        .map((s) => s.trim())
        .filter(Boolean),
    ),
  });
}

const listing = new Set(['/blog', '/case-studies']);
function isListing(p) {
  return listing.has(p) || p.startsWith('/blog/categories/');
}

for (const r of deduped) {
  if (r.new_or_existing !== 'new') continue;
  const src = pathOf(r.source_URL);
  const tgt = pathOf(r.target_URL);
  const loc = r.insertion_location.toLowerCase();
  const contextualLoc = loc.startsWith('body') || loc.includes('related');
  if (!contextualLoc) continue; // footer doesn't count as contextual
  if (isListing(src)) continue;
  if (!baseline.has(tgt)) continue;
  baseline.get(tgt).from.add(src);
  baseline.get(tgt).contextual = baseline.get(tgt).from.size;
}

// Simulated reachability after footer adds + new links (approx):
// Start from homepage; chrome includes current footer+nav plus planned footer targets
const chromeTargets = new Set([
  '/',
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
  '/free-resources', // NEW footer
  '/about',
  '/contact',
  '/privacy-policy',
]);

const edges = new Map();
function addEdge(a, b) {
  if (!edges.has(a)) edges.set(a, new Set());
  edges.get(a).add(b);
}
for (const t of chromeTargets) {
  if (t !== '/') addEdge('/', t);
  // every page has chrome — model as homepage depth already covers chrome targets at 1
}
// content edges from crawl raw + new plan
const raw = fs.readFileSync(`${OUT}/crawl-links-raw.csv`, 'utf8').trim().split(/\n/).slice(1);
for (const line of raw) {
  const c = parseCsvLine(line);
  const src = pathOf(c[0]);
  const tgt = pathOf(c[1]);
  addEdge(src, tgt);
}
for (const r of deduped) {
  if (r.new_or_existing !== 'new') continue;
  addEdge(pathOf(r.source_URL), pathOf(r.target_URL));
}

const depth = new Map([['/', 0]]);
const q = ['/'];
while (q.length) {
  const cur = q.shift();
  const d = depth.get(cur);
  // from any page, chrome targets are reachable at d+1 via global chrome except self
  for (const t of chromeTargets) {
    if (t === cur) continue;
    if (!depth.has(t)) {
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

const exempt = new Set(['/privacy-policy', '/']);
const pendingRedirect = new Set(['/resources/faq', '/resources/free-checklist']);
const needsContent = [];
const stillThin = [];
const stillUnreachable = [];

for (const [p, info] of baseline) {
  if (pendingRedirect.has(p)) continue;
  if (p === '/resources') {
    needsContent.push(`${info.url} (404 hub — not a real page)`);
    continue;
  }
  const d = depth.has(p) ? depth.get(p) : 'UNREACHABLE';
  info.projected_depth = d;
  if (d === 'UNREACHABLE' || d > 3) stillUnreachable.push({ url: info.url, depth: d });
  if (!exempt.has(p) && info.contextual < 3) {
    stillThin.push({ url: info.url, contextual: info.contextual, from: [...info.from].sort().join(' | ') });
  }
}

// Pages that remain thin after plan → needs content if no more relevant donors
for (const t of stillThin) {
  needsContent.push(`${t.url} (projected contextual inbound ${t.contextual})`);
}

const beforeUnreachable = snap.unreachable || [];
const summary = `# Internal Links Audit — Revised Steps 1–3 (LIVE CRAWL BASELINE)

Generated: ${new Date().toISOString()}
Crawl origin: ${snap.base}
**NO PAGE CONTENT EDITED YET — awaiting approval.**

## A. Real baseline (BFS crawl)
- Pages visited from homepage crawl: **${snap.pagesVisited}**
- Sitemap indexable paths considered: **${snap.sitemapPages}**
- Raw internal links recorded: **${snap.linkCount}** (see \`crawl-links-raw.csv\`)
- Link locations observed: nav / footer / breadcrumb / body / related / listing

### UNREACHABLE from homepage (BEFORE) — each on its own line
${beforeUnreachable.map((u) => `- ${u}`).join('\n')}

## B. Contextual definition used
Body + curated related blocks only.  
**Excluded:** nav, footer, breadcrumb, \`/blog\`, \`/case-studies\`, \`/blog/categories/*\`, other listing pages.

Thin contextual inbound BEFORE (<3, privacy exempt): **${snap.thinContextual.length}**

## C. Cluster assignment note
- \`/case-studies/healthcare-records-access-sql-migration\` → **database-migration** (Access→SQL weekend cutover; relatedService already \`/database-migration\`).
- \`/case-studies/construction-job-costing-tracker\` → **access-consulting** — Access DB for jobs/cost codes/WIP/P&L; Excel was only the legacy process; relatedService already \`/access-consulting\`.

## D–G. Revised link plan hygiene
- Unique source+target rows after dedupe/caps: **${deduped.length}**
- New rows: **${deduped.filter((r) => r.new_or_existing === 'new').length}**
- Existing rows kept for tracking: **${deduped.filter((r) => r.new_or_existing === 'existing').length}**
- Pillar Related resources capped at **8** per pillar
- New body links capped at **5** per source page
- Post→category tag links planned (body tag line, not breadcrumb-only)
- No links planned to \`/resources/faq\` or \`/resources/free-checklist\`

## Pending approval (redirects — do not implement links)
- **301** \`/resources/faq\` → \`/faq\`
- **301** \`/resources/free-checklist\` → \`/free-checklist\`

## Projected AFTER plan (simulation)
### UNREACHABLE or depth > 3 (AFTER)
${stillUnreachable.length ? stillUnreachable.map((u) => `- ${u.url} (depth: ${u.depth})`).join('\n') : '- (none)'}

### Contextual inbound still < 3 (AFTER, excl. home + privacy + pending redirects)
${stillThin.length ? stillThin.map((t) => `- ${t.url} — ${t.contextual} (${t.from || 'no sources'})`).join('\n') : '- (none)'}

### Needs content / structural decision (do not force irrelevant links)
${[...new Set(needsContent)].map((x) => `- ${x}`).join('\n') || '- (none)'}

## Footer structure changes included in plan (not contextual)
- Add \`/free-resources\` to footer
- Add \`/faq\` to footer (if not already labeled distinctly from other resource links)

## Files
- \`internal-links-inventory.csv\` — rebuilt from live crawl
- \`crawl-links-raw.csv\` — every crawled link with location
- \`topic-clusters.csv\` — revised clusters + flags
- \`link-plan.csv\` — revised plan (deduped/capped)
- \`crawl-snapshot.json\` — machine-readable baseline

## STOP
Awaiting approval before any implementation (STEP 5+).
`;

fs.writeFileSync(`${OUT}/internal-links-audit.md`, summary);

// Projected inbound table
const projRows = [...baseline.entries()]
  .sort((a, b) => a[0].localeCompare(b[0]))
  .map(([p, info]) => ({
    URL: info.url,
    contextual_inbound_before: snap.inventory.find((x) => pathOf(x.URL) === p)?.contextual_inbound_count ?? '',
    contextual_inbound_after: info.contextual,
    click_depth_before: snap.inventory.find((x) => pathOf(x.URL) === p)?.click_depth_from_homepage ?? '',
    click_depth_after: info.projected_depth ?? '',
  }));

fs.writeFileSync(
  `${OUT}/projected-contextual-inbound.csv`,
  [
    'URL,contextual_inbound_before,contextual_inbound_after,click_depth_before,click_depth_after',
    ...projRows.map((r) =>
      [r.URL, r.contextual_inbound_before, r.contextual_inbound_after, r.click_depth_before, r.click_depth_after]
        .map(csvEscape)
        .join(','),
    ),
  ].join('\n') + '\n',
);

console.log(
  JSON.stringify(
    {
      uniquePlanRows: deduped.length,
      newRows: deduped.filter((r) => r.new_or_existing === 'new').length,
      stillThin: stillThin.length,
      stillUnreachable: stillUnreachable.length,
      needsContent: [...new Set(needsContent)].length,
    },
    null,
    2,
  ),
);
