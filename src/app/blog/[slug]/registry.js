/** Blog post slug -> metadata for generateMetadata and component mapping */
export const POST_META = {
  '10-signs-you-need-excel-automation': {
    title: '10 Signs You Need Excel Automation | ExcelAccessConsultant',
    description:
      'Is your team spending too much time on manual Excel work? Here are 10 clear signs that automation could save you hours every week. Expert advice from 20+ years of experience.',
    keywords:
      'excel automation, signs you need automation, excel automation benefits, when to automate excel, excel productivity',
    ogTitle: '10 Signs You Need Excel Automation',
  },
  'why-your-access-database-keeps-crashing': {
    title: 'Why Your Access Database Keeps Crashing | ExcelAccessConsultant',
    description:
      'Access database crashes are frustrating and costly. Learn the common causes of Access database crashes and how to fix them permanently.',
    keywords:
      'access database crash, access database fix, access database repair, ms access crashing',
    ogTitle: 'Why Your Access Database Keeps Crashing',
  },
  'excel-automation-cost-what-to-expect': {
    title: 'Excel Automation Cost: What to Expect in 2025 | ExcelAccessConsultant',
    description:
      'Wondering how much Excel automation costs? Get realistic pricing expectations for 2025 and understand what factors affect the cost.',
    keywords: 'excel automation cost, excel automation pricing, vba development cost',
    ogTitle: 'Excel Automation Cost: What to Expect',
  },
  'how-to-speed-up-slow-excel-spreadsheets': {
    title: 'How to Speed Up Slow Excel Spreadsheets | ExcelAccessConsultant',
    description:
      'Is your Excel file taking forever to open or calculate? Learn proven techniques to speed up slow spreadsheets and improve performance.',
    keywords: 'slow excel, excel performance, speed up excel, excel optimization',
    ogTitle: 'How to Speed Up Slow Excel Spreadsheets',
  },
  'access-vs-sql-server-when-to-migrate': {
    title: 'Access vs SQL Server: When to Migrate | ExcelAccessConsultant',
    description:
      'Should you migrate from Access to SQL Server? Learn when Access is sufficient and when SQL Server migration makes sense for your business.',
    keywords: 'access vs sql server, access migration, database migration',
    ogTitle: 'Access vs SQL Server: When to Migrate',
  },
  'common-excel-vba-mistakes-and-how-to-fix-them': {
    title: 'Common Excel VBA Mistakes (And How to Fix Them) | ExcelAccessConsultant',
    description:
      'Avoid these 10 common Excel VBA mistakes that cause errors, slow performance, and code that breaks. Learn how to fix them with expert tips.',
    keywords: 'excel vba mistakes, vba errors, vba best practices',
    ogTitle: 'Common Excel VBA Mistakes',
  },
  'financial-modeling-best-practices': {
    title: 'Financial Modeling Best Practices | ExcelAccessConsultant',
    description:
      'Learn financial modeling best practices to build accurate, reliable Excel financial models. Expert tips from 15+ years of finance consulting.',
    keywords: 'financial modeling, excel financial model, modeling best practices',
    ogTitle: 'Financial Modeling Best Practices',
  },
  'excel-reporting-automation-complete-guide': {
    title: 'Excel Reporting Automation: Complete Guide | ExcelAccessConsultant',
    description:
      'Complete guide to automating Excel reports. Learn how to automate monthly reports, consolidate data, and generate dashboards automatically.',
    keywords: 'excel reporting automation, automate excel reports, report automation',
    ogTitle: 'Excel Reporting Automation: Complete Guide',
  },
};

export const SLUG_TO_COMPONENT = {
  '10-signs-you-need-excel-automation': () =>
    import('./posts/10SignsYouNeedExcelAutomation').then((m) => m.default),
  'why-your-access-database-keeps-crashing': () =>
    import('./posts/WhyYourAccessDatabaseKeepsCrashing').then((m) => m.default),
  'excel-automation-cost-what-to-expect': () =>
    import('./posts/ExcelAutomationCost').then((m) => m.default),
  'how-to-speed-up-slow-excel-spreadsheets': () =>
    import('./posts/HowToSpeedUpSlowExcelSpreadsheets').then((m) => m.default),
  'access-vs-sql-server-when-to-migrate': () =>
    import('./posts/AccessVsSQLServer').then((m) => m.default),
  'common-excel-vba-mistakes-and-how-to-fix-them': () =>
    import('./posts/CommonExcelVBAMistakes').then((m) => m.default),
  'financial-modeling-best-practices': () =>
    import('./posts/FinancialModelingBestPractices').then((m) => m.default),
  'excel-reporting-automation-complete-guide': () =>
    import('./posts/ExcelReportingAutomation').then((m) => m.default),
};

export const ALL_SLUGS = Object.keys(POST_META);
