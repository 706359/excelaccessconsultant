export const BLOG_CATEGORIES = {
  'excel-automation': {
    title: 'Excel Automation',
    metaTitle: 'Excel Automation Articles | ExcelAccessConsultant Blog',
    metaDescription:
      'Excel automation signs, pricing, reporting workflows, VBA fixes, and spreadsheet performance guidance.',
    pillarHref: '/excel-automation',
    pillarLabel: 'Excel VBA Automation',
    // Populated by post categorySlug in step 4; keep empty match list until then
    postSlugs: [
      '10-signs-you-need-excel-automation',
      'excel-automation-cost-what-to-expect',
      'excel-reporting-automation-complete-guide',
      'how-to-speed-up-slow-excel-spreadsheets',
      'common-excel-vba-mistakes-and-how-to-fix-them',
      'financial-modeling-best-practices',
    ],
  },
  'access-database': {
    title: 'Access Database',
    metaTitle: 'Access Database Articles | ExcelAccessConsultant Blog',
    metaDescription:
      'Access database repair, stability, multi-user setup, and maintenance guides for teams that depend on Microsoft Access every day.',
    pillarHref: '/access-consulting',
    pillarLabel: 'Access Database Consulting',
    postSlugs: [
      'why-your-access-database-keeps-crashing',
      'why-access-databases-become-corrupted',
      'access-database-repair-guide',
      'access-database-repair-cost',
      'how-to-split-access-database',
      'access-database-multi-user-setup',
      'access-front-end-back-end-architecture',
      'can-access-handle-50-users',
      'access-database-performance-optimization',
      'access-database-best-practices',
      'access-database-maintenance-checklist',
      'is-microsoft-access-still-relevant-2026',
      'access-vs-excel-when-to-use-each',
      'access-vs-power-apps-when-to-stay-on-access',
    ],
  },
  'database-migration': {
    title: 'Database Migration',
    metaTitle: 'Database Migration Articles | ExcelAccessConsultant Blog',
    metaDescription:
      'When to migrate from Access to SQL Server, migration cost guidance, and Access modernization paths.',
    pillarHref: '/database-migration',
    pillarLabel: 'Database Migration',
    postSlugs: [
      'access-vs-sql-server-when-to-migrate',
      'when-to-migrate-from-access',
      'access-sql-server-migration-cost',
      'how-to-modernize-access-database',
    ],
  },
};

export const ALL_BLOG_CATEGORY_SLUGS = Object.keys(BLOG_CATEGORIES);

export function resolveBlogCategorySlug(slug) {
  return slug.replace(/\.html$/i, '');
}
