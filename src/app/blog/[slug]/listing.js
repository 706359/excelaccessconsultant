import { BLOG_CATEGORIES } from '../../../constants/blogCategories';
import { POST_META, BLOG_SLUG_ALIASES } from './registry';

const CATEGORY_BY_SLUG = {};
for (const [categorySlug, config] of Object.entries(BLOG_CATEGORIES)) {
  for (const slug of config.postSlugs || []) {
    CATEGORY_BY_SLUG[slug] = {
      categorySlug,
      category: config.title,
    };
  }
}

/** Canonical blog slugs only (no aliases). */
export const CANONICAL_BLOG_SLUGS = Object.keys(POST_META).filter(
  (slug) => !Object.values(BLOG_SLUG_ALIASES).includes(slug) && !POST_META[slug]?.canonicalSlug,
);

function displayTitle(meta) {
  return meta.ogTitle || meta.title.replace(/\s*\|\s*ExcelAccessConsultant.*$/i, '').trim();
}

/**
 * Listing cards for /blog and category pages — titles/excerpts from registry.
 */
export function getBlogListingPosts() {
  return CANONICAL_BLOG_SLUGS.map((slug, index) => {
    const meta = POST_META[slug];
    const cat = CATEGORY_BY_SLUG[slug] || {
      categorySlug: 'access-database',
      category: 'Access Database',
    };
    return {
      id: index + 1,
      slug,
      title: displayTitle(meta),
      excerpt: meta.description,
      date: meta.datePublished || '2025-01-01',
      category: cat.category,
      categorySlug: cat.categorySlug,
      readTime: meta.readTime || '8 min read',
    };
  });
}

/** @deprecated Use getBlogListingPosts — kept as alias while callers migrate */
export const BLOG_POSTS = getBlogListingPosts();
