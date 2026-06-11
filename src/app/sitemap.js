import { ALL_BLOG_CATEGORY_SLUGS } from '../constants/blogCategories';
import { ALL_SLUGS, LEGACY_DATED_BLOG_SLUGS } from './blog/[slug]/registry';
import { CANONICAL_CASE_STUDY_SLUGS } from './case-studies/registry';

const BASE = 'https://excelaccessconsultant.com';

const staticRoutes = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  { path: 'contact', priority: 0.9, changeFrequency: 'monthly' },
  { path: 'about', priority: 0.8, changeFrequency: 'monthly' },
  { path: 'excel-automation', priority: 0.9, changeFrequency: 'monthly' },
  { path: 'access-consulting', priority: 0.9, changeFrequency: 'monthly' },
  { path: 'access-database-repair', priority: 0.9, changeFrequency: 'monthly' },
  { path: 'free-checklist', priority: 0.8, changeFrequency: 'monthly' },
  { path: 'free-resources', priority: 0.8, changeFrequency: 'monthly' },
  { path: 'financial-modeling', priority: 0.9, changeFrequency: 'monthly' },
  { path: 'database-migration', priority: 0.9, changeFrequency: 'monthly' },
  { path: 'vba-development', priority: 0.9, changeFrequency: 'monthly' },
  { path: 'case-studies', priority: 0.8, changeFrequency: 'monthly' },
  { path: 'pricing', priority: 0.9, changeFrequency: 'monthly' },
  { path: 'faq', priority: 0.8, changeFrequency: 'monthly' },
  { path: 'blog', priority: 0.9, changeFrequency: 'weekly' },
  { path: 'resources/calculator', priority: 0.7, changeFrequency: 'monthly' },
  { path: 'resources/faq', priority: 0.7, changeFrequency: 'monthly' },
  { path: 'resources/free-checklist', priority: 0.7, changeFrequency: 'monthly' },
  { path: 'excel-consultant-utah', priority: 0.8, changeFrequency: 'monthly' },
  { path: 'hire-excel-vba-consultant', priority: 0.8, changeFrequency: 'monthly' },
  { path: 'thank-you', priority: 0.5, changeFrequency: 'yearly' },
  { path: 'privacy-policy', priority: 0.5, changeFrequency: 'yearly' },
];

export default function sitemap() {
  const now = new Date().toISOString();
  const entries = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: path ? `${BASE}/${path}` : BASE,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const caseStudyEntries = CANONICAL_CASE_STUDY_SLUGS.map((slug) => ({
    url: `${BASE}/case-studies/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const blogEntries = ALL_SLUGS.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const categoryEntries = ALL_BLOG_CATEGORY_SLUGS.map((category) => ({
    url: `${BASE}/blog/categories/${category}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.65,
  }));

  const legacyBlogEntries = Object.keys(LEGACY_DATED_BLOG_SLUGS).map((legacySlug) => ({
    url: `${BASE}/blog/2026/01/${legacySlug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    ...entries,
    ...caseStudyEntries,
    ...blogEntries,
    ...categoryEntries,
    ...legacyBlogEntries,
  ];
}
