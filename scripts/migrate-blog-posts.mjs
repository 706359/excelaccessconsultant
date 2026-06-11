import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const postsDir = path.join(__dirname, '../src/app/blog/[slug]/posts');

const REPLACEMENTS = [
  ["import BlogPostSidebar from '../BlogPostSidebar';", "import BlogPostShell from '../components/BlogPostShell';"],
  ["className='bg-excel/10 p-6 rounded-lg border border-excel/20 mt-8'", "className='blog-callout'"],
  ["className='bg-excel/10 p-6 rounded-lg border border-excel/20 my-6'", "className='blog-callout'"],
  ["className='bg-slate-50 p-6 rounded-lg border border-slate-200 my-6'", "className='blog-box'"],
  ["className='bg-slate-50 p-4 rounded-lg border border-slate-200 my-4'", "className='blog-box blog-box--compact'"],
  ["className='bg-green-50 p-4 rounded-lg border border-excel-green/30 my-4'", "className='blog-box blog-box--success'"],
  ["className='bg-slate-50 p-6 rounded-lg border border-excel my-6'", "className='blog-box blog-box--accent'"],
  ["className='bg-slate-50 p-4 rounded-lg border border-slate-200'", "className='blog-box blog-box--compact'"],
  ["className='grid md:grid-cols-2 gap-4 my-6'", "className='blog-grid-2'"],
  ["className='overflow-x-auto my-6'", "className='blog-table-wrap'"],
  ["className='overflow-x-auto'", "className='blog-table-wrap'"],
  ["className='text-xs bg-slate-900 text-slate-100 p-3 rounded overflow-x-auto'", "className='blog-pre'"],
  ["className='text-sm font-mono text-slate-700 mb-2'", "className='blog-code-label'"],
  ["className='space-y-8'", ''],
  ["<div >", ''],
  ['</div>\n      </BlogPostShell>', '</BlogPostShell>'],
];

const STRIP_CLASS_PATTERNS = [
  [/<h2 className='[^']*'>/g, '<h2>'],
  [/<h3 className='[^']*'>/g, '<h3>'],
  [/<h4 className='[^']*'>/g, '<h4>'],
  [/<p className='text-lg text-slate-700 font-medium'>/g, '<p>'],
  [/<p className='text-slate-700 mb-4'>/g, '<p>'],
  [/<p className='text-slate-700'>/g, '<p>'],
  [/<p className='mt-4 text-slate-700'>/g, '<p>'],
  [/<ul className='[^']*'>/g, '<ul>'],
  [/<ol className='[^']*'>/g, '<ol>'],
  [/<li className='[^']*'>/g, '<li>'],
  [/<table className='[^']*'>/g, '<table>'],
  [/<thead className='[^']*'>/g, '<thead>'],
  [/<tr className='[^']*'>/g, '<tr>'],
  [/<th className='[^']*'>/g, '<th>'],
  [/<td className='[^']*'>/g, '<td>'],
  [/<code className='[^']*'>/g, '<code>'],
  [/ className='text-primary font-semibold hover:text-primary-hover'/g, ''],
  [/ className='hover:text-primary transition-colors'/g, ''],
  [/ className='font-bold mb-2 text-slate-900'/g, ''],
  [/ className='font-bold mb-2'/g, ''],
];

function applyReplacements(content) {
  let result = content;
  for (const [from, to] of REPLACEMENTS) {
    result = result.split(from).join(to);
  }
  for (const [pattern, replacement] of STRIP_CLASS_PATTERNS) {
    result = result.replace(pattern, replacement);
  }
  // Clean up broken Link formatting from stripped classNames
  result = result.replace(/<Link\n\s+href=/g, '<Link href=');
  result = result.replace(/\n\s*\n\s*>/g, '>');
  return result;
}

function extractContentBlock(content) {
  const contentVarMatch = content.match(/content:\s*\(\s*\n([\s\S]*?)\n\s*\),\s*\n\s*};/);
  if (contentVarMatch) {
    let inner = contentVarMatch[1].trim();
    inner = inner.replace(/^<div>\s*\n?/, '').replace(/\n?\s*<\/div>\s*$/, '');
    return { type: 'contentVar', inner: inner.trim(), fullMatch: contentVarMatch[0] };
  }

  const proseMatch = content.match(
    /<div className='prose[^']*'>\s*\n([\s\S]*?)\n\s*<\/div>\s*\n\s*<\/div>\s*\n\s*<BlogPostSidebar/
  );
  if (proseMatch) {
    return { type: 'prose', inner: proseMatch[1].trim() };
  }

  return null;
}

function needsMigration(content) {
  return (
    content.includes("BlogPostSidebar") ||
    content.includes("className='bg-base min-h-screen") ||
    content.includes("className='prose prose-lg")
  );
}

function restructurePost(content) {
  if (!needsMigration(content) && content.includes('BlogPostShell')) {
    return applyReplacements(content);
  }

  content = applyReplacements(content);

  const extracted = extractContentBlock(content);
  if (!extracted) {
    console.warn('Could not extract content block');
    return content;
  }

  let innerContent = applyReplacements(extracted.inner);

  if (extracted.type === 'contentVar') {
    content = content.replace(extracted.fullMatch, '};');
  }

  const seoMatch = content.match(/<SEO[\s\S]*?\/>/);
  const faqMatch = content.match(/<FAQSchema[\s\S]*?\/>/);

  const newReturn = `return (
    <>
      ${seoMatch ? seoMatch[0].trim() : ''}

      ${faqMatch ? faqMatch[0].trim() : ''}

      <BlogPostShell post={post}>
${innerContent
  .split('\n')
  .map((line) => '        ' + line.trimEnd())
  .join('\n')}
      </BlogPostShell>
    </>
  );
}`;

  content = content.replace(/return \(\s*\n[\s\S]*?\n  \);\s*\n}/, newReturn);
  return content;
}

const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.jsx'));
for (const file of files) {
  const filePath = path.join(postsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const before = content;
  content = restructurePost(content);
  if (content !== before) {
    fs.writeFileSync(filePath, content);
    console.log('Migrated:', file);
  } else {
    console.log('Skipped (no changes):', file);
  }
}
