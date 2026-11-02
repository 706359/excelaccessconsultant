import fs from 'fs';

console.log('audit mtime', fs.statSync('docs/seo/internal-links/internal-links-audit.md').mtime.toISOString());
console.log('audit head:\n', fs.readFileSync('docs/seo/internal-links/internal-links-audit.md', 'utf8').slice(0, 1200));

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

const lines = fs.readFileSync('docs/seo/internal-links/link-plan.csv', 'utf8').trim().split(/\n/).slice(1);
const body = {};
const related = {};
for (const line of lines) {
  const cols = parseCsvLine(line);
  const src = cols[0].replace('https://excelaccessconsultant.com', '') || '/';
  if (cols[5] === 'new' && /^body/i.test(cols[3])) body[src] = (body[src] || 0) + 1;
  if (/related/i.test(cols[3])) related[src] = (related[src] || 0) + 1;
}
console.log('\nNEW body counts:');
console.log(
  Object.entries(body)
    .sort((a, b) => b[1] - a[1])
    .map(([k, v]) => `${v}\t${k}`)
    .join('\n'),
);
console.log('\nRelated counts:');
console.log(
  Object.entries(related)
    .sort((a, b) => b[1] - a[1])
    .map(([k, v]) => `${v}\t${k}`)
    .join('\n'),
);

const proj = fs.readFileSync('docs/seo/internal-links/projected-contextual-inbound.csv', 'utf8');
console.log('\nProjected thin/unreachable sample:');
for (const line of proj.split(/\n/).slice(1)) {
  if (!line) continue;
  const c = parseCsvLine(line);
  const after = Number(c[2]);
  const depth = c[4];
  if ((after < 3 && !c[0].includes('privacy') && c[0] !== 'https://excelaccessconsultant.com') || depth === 'UNREACHABLE' || Number(depth) > 3) {
    console.log(after, depth, c[0]);
  }
}
