export const BLOG_CATEGORIES = {
  'excel-tips': {
    title: 'Excel Tips',
    metaTitle: 'Excel Tips & Tutorials | ExcelAccessConsultant Blog',
    metaDescription:
      'Practical Excel tips, performance fixes, and automation advice from a consultant with 20+ years of experience.',
    matchCategories: ['Excel Tips', 'Excel Automation'],
  },
  'access-database': {
    title: 'Access Database',
    metaTitle: 'Access Database Articles | ExcelAccessConsultant Blog',
    metaDescription:
      'Access database repair, stability, and migration guides for teams that depend on Microsoft Access every day.',
    matchCategories: ['Access Database', 'Database Migration'],
  },
  'automation-guides': {
    title: 'Automation Guides',
    metaTitle: 'Excel & Access Automation Guides | ExcelAccessConsultant Blog',
    metaDescription:
      'Step-by-step automation guides for Excel VBA, reporting workflows, and database projects.',
    matchCategories: ['Excel Automation', 'VBA Development', 'Database Migration'],
  },
};

export const ALL_BLOG_CATEGORY_SLUGS = Object.keys(BLOG_CATEGORIES);

export function resolveBlogCategorySlug(slug) {
  return slug.replace(/\.html$/i, '');
}
