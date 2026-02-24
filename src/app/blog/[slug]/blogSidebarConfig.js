/**
 * Per-blog config: 2 related article slugs and 2 related service links.
 * Used by BlogPostSidebar so every post has consistent sidebar with content-specific links.
 */
export const BLOG_SIDEBAR_CONFIG = {
  '10-signs-you-need-excel-automation': {
    relatedArticles: ['excel-automation-cost-what-to-expect', 'how-to-speed-up-slow-excel-spreadsheets'],
    relatedServices: [
      { href: '/excel-automation', label: 'Excel Automation' },
      { href: '/vba-development', label: 'VBA Development' },
    ],
  },
  'why-your-access-database-keeps-crashing': {
    relatedArticles: ['access-vs-sql-server-when-to-migrate', 'common-excel-vba-mistakes-and-how-to-fix-them'],
    relatedServices: [
      { href: '/access-consulting', label: 'Access Consulting' },
      { href: '/database-migration', label: 'Database Migration' },
    ],
  },
  'excel-automation-cost-what-to-expect': {
    relatedArticles: ['10-signs-you-need-excel-automation', 'excel-reporting-automation-complete-guide'],
    relatedServices: [
      { href: '/excel-automation', label: 'Excel Automation' },
      { href: '/vba-development', label: 'VBA Development' },
    ],
  },
  'how-to-speed-up-slow-excel-spreadsheets': {
    relatedArticles: ['common-excel-vba-mistakes-and-how-to-fix-them', 'excel-reporting-automation-complete-guide'],
    relatedServices: [
      { href: '/excel-automation', label: 'Excel Automation' },
      { href: '/vba-development', label: 'VBA Development' },
    ],
  },
  'access-vs-sql-server-when-to-migrate': {
    relatedArticles: ['why-your-access-database-keeps-crashing', 'financial-modeling-best-practices'],
    relatedServices: [
      { href: '/access-consulting', label: 'Access Consulting' },
      { href: '/database-migration', label: 'Database Migration' },
    ],
  },
  'common-excel-vba-mistakes-and-how-to-fix-them': {
    relatedArticles: ['how-to-speed-up-slow-excel-spreadsheets', 'excel-reporting-automation-complete-guide'],
    relatedServices: [
      { href: '/vba-development', label: 'VBA Development' },
      { href: '/excel-automation', label: 'Excel Automation' },
    ],
  },
  'financial-modeling-best-practices': {
    relatedArticles: ['excel-reporting-automation-complete-guide', 'excel-automation-cost-what-to-expect'],
    relatedServices: [
      { href: '/financial-modeling', label: 'Financial Modeling' },
      { href: '/excel-automation', label: 'Excel Automation' },
    ],
  },
  'excel-reporting-automation-complete-guide': {
    relatedArticles: ['financial-modeling-best-practices', 'common-excel-vba-mistakes-and-how-to-fix-them'],
    relatedServices: [
      { href: '/excel-automation', label: 'Excel Automation' },
      { href: '/vba-development', label: 'VBA Development' },
    ],
  },
};
