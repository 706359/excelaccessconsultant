import { ALL_SLUGS } from './blog/[slug]/registry';

const BASE = 'https://excelaccessconsultant.com';

const staticRoutes = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  { path: 'contact', priority: 0.9, changeFrequency: 'monthly' },
  { path: 'about', priority: 0.8, changeFrequency: 'monthly' },
  { path: 'excel-automation', priority: 0.9, changeFrequency: 'monthly' },
  { path: 'access-consulting', priority: 0.9, changeFrequency: 'monthly' },
  { path: 'financial-modeling', priority: 0.9, changeFrequency: 'monthly' },
  { path: 'database-migration', priority: 0.9, changeFrequency: 'monthly' },
  { path: 'vba-development', priority: 0.9, changeFrequency: 'monthly' },
  { path: 'case-studies', priority: 0.8, changeFrequency: 'monthly' },
  { path: 'faq', priority: 0.8, changeFrequency: 'monthly' },
  { path: 'thank-you', priority: 0.5, changeFrequency: 'yearly' },
  { path: 'privacy-policy', priority: 0.5, changeFrequency: 'yearly' },
  { path: 'blog', priority: 0.9, changeFrequency: 'weekly' },
];

export default function sitemap() {
  const now = new Date().toISOString();
  const entries = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: path ? `${BASE}/${path}` : BASE,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const blogEntries = ALL_SLUGS.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...entries, ...blogEntries];
}
