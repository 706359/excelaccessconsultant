import fs from 'fs';

const a = JSON.parse(fs.readFileSync('docs/seo/internal-links/links-audit-latest.json', 'utf8'));
const prevPath = 'docs/seo/internal-links/per-page-inbound-depth.csv';
const prevMap = {};
if (fs.existsSync(prevPath)) {
  for (const line of fs.readFileSync(prevPath, 'utf8').trim().split(/\r?\n/).slice(1)) {
    const [path, inboundBefore, , depthBefore, depthAfterPlan] = line.split(',');
    prevMap[path] = { inboundBefore, depthBefore, depthAfterPlan };
  }
}

const targets = [
  '/faq',
  '/free-resources',
  '/access-consulting',
  '/excel-automation',
  '/hire-excel-vba-consultant',
  '/pricing',
  '/case-studies/healthcare-records-access-sql-migration',
];

console.log('=== KEY INBOUND (strict) ===');
for (const t of targets) {
  const src = a.contextualInbound[t] || [];
  console.log(
    `${t} inbound=${src.length} depth=${a.depth[t]} sources=${src.join(' | ')}`,
  );
}

console.log('\n=== ANCHOR SHARE (editorial only) ===');
for (const t of [
  '/faq',
  '/free-resources',
  '/access-consulting',
  '/excel-automation',
  '/hire-excel-vba-consultant',
]) {
  const e = a.editorialAnchors[t];
  if (!e || !e.top) {
    console.log(`${t}: (no editorial anchors tracked)`);
    continue;
  }
  const flag = e.top.pct > 30 && e.total >= 8 && e.top.count >= 3 ? ' OVER_30' : '';
  console.log(
    `${t}: top="${e.top.anchor}" ${e.top.pct.toFixed(1)}% (${e.top.count}/${e.total})${flag}`,
  );
  for (const x of e.all.slice(0, 6)) {
    console.log(`  - "${x.anchor}" ${x.pct.toFixed(1)}% (${x.count})`);
  }
}

console.log('\n=== UNDER 3 ===');
console.log(a.under3.length ? a.under3 : '(none)');

const rows = [
  [
    'path',
    'contextual_inbound_before',
    'contextual_inbound_after',
    'depth_before',
    'depth_after',
  ],
];
const paths = new Set([
  ...Object.keys(prevMap),
  ...Object.keys(a.depth || {}),
  ...Object.keys(a.contextualInbound || {}),
]);
for (const p of [...paths].sort()) {
  if (p.endsWith('.html')) continue;
  const before = prevMap[p]?.inboundBefore ?? '';
  const after = Array.isArray(a.contextualInbound[p]) ? a.contextualInbound[p].length : 0;
  const depthBefore = prevMap[p]?.depthBefore ?? '';
  const depthAfter = a.depth[p] ?? '';
  rows.push([p, before, after, depthBefore, depthAfter]);
}
fs.writeFileSync('docs/seo/internal-links/before-after-final.csv', rows.map((r) => r.join(',')).join('\n'));
console.log(`\nwrote before-after-final.csv (${rows.length - 1} rows)`);
