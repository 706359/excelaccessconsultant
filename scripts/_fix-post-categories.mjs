import fs from 'fs';

const updates = {
  'FinancialModelingBestPractices.jsx': 'Excel Automation',
  'HowToSpeedUpSlowExcelSpreadsheets.jsx': 'Excel Automation',
  'CommonExcelVBAMistakes.jsx': 'Excel Automation',
  'HowToModernizeAccessDatabase.jsx': 'Database Migration',
  'AccessSqlServerMigrationCost.jsx': 'Database Migration',
};

const dir = 'src/app/blog/[slug]/posts';
for (const [file, label] of Object.entries(updates)) {
  const path = `${dir}/${file}`;
  const src = fs.readFileSync(path, 'utf8');
  const next = src.replace(/category: '[^']+'/, `category: '${label}'`);
  if (next === src) console.log('no change', file);
  else {
    fs.writeFileSync(path, next);
    console.log('updated', file, '→', label);
  }
}
