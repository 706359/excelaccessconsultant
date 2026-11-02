import fs from 'fs';

const lines = fs.readFileSync('./docs/seo/internal-links/crawl-links-raw.csv', 'utf8').trim().split(/\n/).slice(1);
const contextual = new Set();
const all = new Set();

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

for (const line of lines) {
  const [srcU, tgtU, , loc] = parseCsvLine(line);
  if (!srcU || !tgtU) continue;
  const src = srcU.replace('https://excelaccessconsultant.com', '') || '/';
  const tgt = tgtU.replace('https://excelaccessconsultant.com', '') || '/';
  all.add(`${src}->${tgt}`);
  if ((loc === 'body' || loc === 'related') && !['/blog', '/case-studies'].includes(src) && !src.startsWith('/blog/categories/')) {
    contextual.add(`${src}->${tgt}`);
  }
}

const needed = [
  ['/pricing', '/free-resources'],
  ['/contact', '/free-resources'],
  ['/blog/access-database-maintenance-checklist', '/free-resources'],
  ['/blog/access-database-best-practices', '/free-resources'],
  ['/pricing', '/resources/calculator'],
  ['/blog/excel-automation-cost-what-to-expect', '/resources/calculator'],
  ['/blog/access-sql-server-migration-cost', '/resources/calculator'],
  ['/blog/access-database-repair-cost', '/resources/calculator'],
  ['/free-resources', '/resources/calculator'],
  ['/pricing', '/faq'],
  ['/contact', '/faq'],
  ['/hire-excel-vba-consultant', '/faq'],
  ['/excel-consultant-utah', '/faq'],
  ['/excel-automation', '/faq'],
  ['/access-consulting', '/faq'],
  ['/database-migration', '/faq'],
  ['/vba-development', '/faq'],
  ['/financial-modeling', '/faq'],
  ['/free-resources', '/free-checklist'],
  ['/access-consulting', '/free-checklist'],
  ['/access-database-repair', '/free-checklist'],
  ['/blog/access-database-best-practices', '/free-checklist'],
  ['/vba-development', '/hire-excel-vba-consultant'],
  ['/excel-automation', '/hire-excel-vba-consultant'],
  ['/blog/common-excel-vba-mistakes-and-how-to-fix-them', '/hire-excel-vba-consultant'],
  ['/case-studies/retail-pricing-system', '/hire-excel-vba-consultant'],
  ['/case-studies/construction-automated-reporting', '/hire-excel-vba-consultant'],
  ['/pricing', '/hire-excel-vba-consultant'],
  ['/about', '/excel-consultant-utah'],
  ['/contact', '/excel-consultant-utah'],
  ['/pricing', '/excel-consultant-utah'],
  ['/', '/excel-consultant-utah'],
  ['/hire-excel-vba-consultant', '/excel-consultant-utah'],
];

for (const [s, t] of needed) {
  const k = `${s}->${t}`;
  console.log(`${contextual.has(k) ? 'CTX' : all.has(k) ? 'CHR' : 'NEW'}\t${k}`);
}
