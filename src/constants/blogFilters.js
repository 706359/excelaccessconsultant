import { BLOG_POSTS } from './blogPosts';
import { getBlogAccent } from '../utils/contentAccents';

const CATEGORY_ORDER = [
  'Excel Automation',
  'Excel Tips',
  'Access Database',
  'Database Migration',
  'VBA Development',
  'Financial Modeling',
];

export function getBlogCategoryFilters() {
  const counts = BLOG_POSTS.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {});

  return [
    { id: 'all', label: 'All Posts', count: BLOG_POSTS.length, accent: 'primary' },
    ...CATEGORY_ORDER.filter((category) => counts[category]).map((category) => ({
      id: category,
      label: category,
      count: counts[category],
      accent: getBlogAccent(category),
    })),
  ];
}

export function filterBlogPosts(categoryId) {
  if (!categoryId || categoryId === 'all') return BLOG_POSTS;
  return BLOG_POSTS.filter((post) => post.category === categoryId);
}
