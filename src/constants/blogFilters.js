import { BLOG_CATEGORIES } from './blogCategories';
import { getBlogListingPosts } from './blogPosts';

export function getBlogCategoryFilters() {
  const posts = getBlogListingPosts();
  const counts = posts.reduce((acc, post) => {
    acc[post.categorySlug] = (acc[post.categorySlug] || 0) + 1;
    return acc;
  }, {});

  return [
    { id: 'all', label: 'All Posts', count: posts.length, accent: 'primary' },
    ...Object.entries(BLOG_CATEGORIES).map(([slug, config]) => ({
      id: slug,
      label: config.title,
      count: counts[slug] || 0,
      accent: slug === 'access-database' ? 'secondary' : 'primary',
    })),
  ];
}

export function filterBlogPosts(categoryId) {
  const posts = getBlogListingPosts();
  if (!categoryId || categoryId === 'all') return posts;
  return posts.filter((post) => post.categorySlug === categoryId || post.category === categoryId);
}
