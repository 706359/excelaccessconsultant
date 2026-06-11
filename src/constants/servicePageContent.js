import { SERVICE_SIDEBAR_TAGLINES } from './site';

export const SERVICE_CONTENT = {
  'access-consulting': {
    problems: [
      'Access database crashes when multiple users work at the same time',
      'Corrupted tables, missing records, or slow queries blocking daily work',
      'Spreadsheets and Access files duplicated across teams with no single source of truth',
      'Legacy Access system that nobody wants to touch but the business depends on it',
    ],
    solutionParagraphs: [
      'I diagnose the root cause first: locking issues, bloated files, bad queries, or broken relationships. Then I fix or rebuild with a clear scope.',
      'You get a fixed-price quote within 24 hours. I work in a test copy of your database so production stays safe until you approve.',
    ],
    solutionBullets: [
      'Split-database architecture for multi-user stability',
      'Repair and recovery for corrupted Access files',
      'Forms, reports, and workflows your team can use without a manual',
    ],
    benefits: [
      {
        title: 'Stable Multi-User Access',
        description: '15+ users working simultaneously without daily crashes or data conflicts.',
      },
      {
        title: 'Faster Queries & Reports',
        description: 'Optimized indexes and queries: minutes become seconds on critical reports.',
      },
      {
        title: 'Fixed-Price Delivery',
        description: 'Know the cost before work starts. No open-ended hourly billing on builds.',
      },
      {
        title: 'Long-Term Support',
        description:
          'Optional maintenance after delivery: updates, fixes, and enhancements as you grow.',
      },
      {
        title: 'You Own Everything',
        description: '100% ownership of the database. No licenses, no vendor lock-in.',
      },
      {
        title: 'Documented Handoff',
        description: 'Training and documentation so your team can operate the system confidently.',
      },
    ],
    sidebarExamples: [
      {
        href: '/case-studies/manufacturing-inventory-tracking',
        title: 'Manufacturing: Inventory Database',
        description: 'Zero crashes in 8 months. 15 users simultaneous. Saves 10 hours/week.',
      },
      {
        href: '/case-studies/retail-pricing-system',
        title: 'Retail: Pricing System',
        description: 'Access pricing rules prevented $30K–$50K in quarterly errors.',
      },
      {
        href: '/case-studies/distribution-warehouse-pick-list',
        title: 'Distribution: Warehouse Pick Lists',
        description: '40% faster picks. Multi-user Access replaced paper lists on the dock.',
      },
    ],
    midCtaHeading: 'Ready to stabilize your Access database?',
    midCtaSubtext:
      'Book a free consultation. I will review your system and outline a fixed-price path forward.',
    capabilitiesTitle: 'What I Build',
    cardAccent: 'secondary',
    timelineBox: {
      timelines: [
        'Simple databases: 2-3 weeks',
        'Medium complexity: 4-6 weeks',
        'Complex multi-user systems: 6-10 weeks',
      ],
      provide:
        'Current database (if fixing), requirements, sample data, access to systems (if needed)',
      deliver: 'Working database, documentation, training, 100% ownership',
    },
    relatedLinks: [
      {
        href: '/database-migration',
        title: 'Database Migration',
        description: 'Migrate Access to SQL Server for better performance and scalability.',
      },
      {
        href: '/access-database-repair',
        title: 'Access Database Repair',
        description: 'Emergency repair and recovery for corrupted or crashing Access databases.',
      },
      {
        href: '/case-studies/manufacturing-inventory-tracking',
        title: 'Case Study: Zero Crashes',
        description: 'How I fixed a crashing Access database used by 15 people daily.',
      },
    ],
    finalCta: {
      heading: 'Ready to Fix or Build Your Access Database?',
      body: 'Stop dealing with crashes and slow performance. Get a free consultation and see how I can fix or build your Access database.',
    },
  },
  'access-database-repair': {
    problems: [
      'Access file will not open or shows corruption errors',
      'Users locked out, missing data, or tables that fail to load',
      'Database grew unstable after a network outage or improper shutdown',
      'Previous developer left and nobody knows how to fix it safely',
    ],
    solutionParagraphs: [
      'I recover data, repair structures, and restore multi-user access, usually without a full rebuild.',
      'If repair is not enough, I will tell you upfront and quote a controlled rebuild with migration of your existing data.',
    ],
    solutionBullets: [
      'Compact, repair, and decompile corrupted Access files',
      'Recover tables, relationships, and queries where possible',
      'Harden the database to prevent repeat corruption',
    ],
    benefits: [
      {
        title: 'Fast Emergency Response',
        description: 'Urgent Access failures get priority scheduling when I am available.',
      },
      {
        title: 'Data Recovery Focus',
        description: 'Goal is to get your data back and your team working again.',
      },
      {
        title: 'Root-Cause Fix',
        description: 'Not just a patch: I address why corruption happened in the first place.',
      },
      {
        title: 'Fixed-Price Repair',
        description: 'Clear quote after initial assessment. No surprise hourly creep.',
      },
      {
        title: 'Prevention Plan',
        description: 'Backup, compact, and maintenance recommendations included.',
      },
      {
        title: 'Ongoing Support',
        description: 'Available for follow-up fixes and optimization after repair.',
      },
    ],
    sidebarExamples: [
      {
        href: '/case-studies/manufacturing-inventory-tracking',
        title: 'Manufacturing: Crash Recovery',
        description: 'Fixed daily crashes for 15-user inventory system.',
      },
      {
        href: '/case-studies/retail-pricing-system',
        title: 'Retail: Database Stabilization',
        description: 'Rebuilt unstable pricing database with business rules intact.',
      },
      {
        href: '/access-consulting',
        title: 'Access Development',
        description: 'When repair is not enough, I rebuild with proper architecture.',
      },
    ],
    midCtaHeading: 'Access database down or corrupted?',
    midCtaSubtext:
      'Call or book a consultation. I will assess recovery options and give you a fixed-price repair quote.',
    capabilitiesTitle: 'What I Repair',
    cardAccent: 'secondary',
    timelineBox: {
      timelines: [
        'Simple repairs: 1-2 weeks',
        'Advanced recovery: 2-4 weeks',
        'Rebuild when repair is not enough: 4-8 weeks',
      ],
      provide:
        'Copy of the Access file, description of symptoms, and list of users or workflows affected',
      deliver:
        'Repaired database, recovery summary, prevention recommendations, and 100% ownership',
    },
    relatedLinks: [
      {
        href: '/access-consulting',
        title: 'Access Database Consulting',
        description: 'Fix crashes, rebuild databases, and scale for multi-user access.',
      },
      {
        href: '/database-migration',
        title: 'Database Migration',
        description: 'Migrate Access to SQL Server when repair alone is not enough.',
      },
      {
        href: '/case-studies/manufacturing-inventory-tracking',
        title: 'Case Study: Crash Recovery',
        description: 'Fixed daily crashes for a 15-user manufacturing inventory system.',
      },
    ],
    finalCta: {
      heading: 'Access Database Down? Let\'s Fix It.',
      body: 'Book a free consultation or request a fixed-price repair estimate. I will assess recovery options and give you a clear path forward.',
    },
  },
  'excel-automation': {
    problems: [
      'Hours spent every week copying data between spreadsheets and systems',
      'Manual reports that break when someone adds a row or changes a formula',
      'Error-prone copy-paste workflows that nobody has time to document',
      'Excel files that are too slow to open or recalculate',
    ],
    solutionParagraphs: [
      'I build VBA automation that runs your repetitive Excel tasks in one click: consolidation, reporting, imports, and distribution.',
      'Every project starts with a free consultation and ends with a fixed-price quote, documentation, and training.',
    ],
    solutionBullets: [
      'Automated report generation from multiple data sources',
      'Custom VBA macros with error handling and logging',
      'Integration with Access, SQL Server, and external files',
    ],
    benefits: [
      {
        title: 'Hours Back Every Week',
        description: 'Clients routinely save 4–10+ hours per week on manual Excel work.',
      },
      {
        title: 'Fewer Errors',
        description: 'Automation removes copy-paste mistakes from critical reporting.',
      },
      {
        title: 'Faster Close Cycles',
        description: 'Month-end and weekly reporting completes in minutes, not days.',
      },
      {
        title: 'Fixed-Price Builds',
        description: 'Quoted upfront after consultation. No open-ended billing.',
      },
      {
        title: 'You Own the Code',
        description: 'Full VBA source code and documentation delivered to you.',
      },
      {
        title: 'Reliable Long-Term',
        description: 'Code written for maintainability: not one-off hacks.',
      },
    ],
    sidebarExamples: [
      {
        href: '/case-studies/construction-automated-reporting',
        title: 'Construction: Automated Reporting',
        description: '6 hours of weekly work reduced to 30 seconds.',
      },
      {
        href: '/case-studies/distribution-slow-spreadsheet',
        title: 'Distribution: Spreadsheet Speed',
        description: '50MB file opens in under 10 seconds after optimization.',
      },
      {
        href: '/case-studies/financial-services-data-integration',
        title: 'Finance: Data Integration',
        description: '500 hours/year saved on manual data entry.',
      },
    ],
    midCtaHeading: 'Still doing the same Excel work every week?',
    midCtaSubtext:
      'Book a free consultation. I will map what can be automated and send a fixed-price estimate.',
    capabilitiesTitle: 'What I Automate',
    cardAccent: 'primary',
    timelineBox: {
      timelines: [
        'Simple automations: 1-2 weeks',
        'Advanced automations: 3-6 weeks',
        'Complex multi-process systems: 6-8 weeks',
      ],
      provide:
        'Sample files, process documentation, access to data sources (if needed)',
      deliver: 'Working automation, documentation, training, 100% code ownership',
    },
    relatedLinks: [
      {
        href: '/vba-development',
        title: 'VBA Development',
        description: 'Custom VBA macros, scripts, and applications built from scratch or fixed.',
      },
      {
        href: '/case-studies/construction-automated-reporting',
        title: 'Case Study: 6 Hours → 30 Seconds',
        description: 'How VBA automation eliminated weekly manual reporting for a construction firm.',
      },
      {
        href: '/access-consulting',
        title: 'Access Database Consulting',
        description: 'Fix crashes, rebuild databases, and scale for multi-user access.',
      },
    ],
    finalCta: {
      heading: 'Ready to Automate Your Excel Workflows?',
      body: 'Stop wasting hours on manual Excel work. Get a free consultation and see how automation can save your team time and eliminate errors.',
    },
  },
  'database-migration': {
    problems: [
      'Access database hitting the 2GB limit or slowing with 30+ users',
      'Frequent corruption and locking errors as usage grows',
      'Need for better security, backups, and IT-standard database platform',
      'Leadership asking when to move off Access but unsure of cost and risk',
    ],
    solutionParagraphs: [
      'I plan and execute Access-to-SQL Server migrations, including Azure SQL and hybrid setups, while preserving data, relationships, and key workflows.',
      'Not every database needs migration. I will tell you honestly if optimization is enough before quoting a migration project.',
    ],
    solutionBullets: [
      'Access front-end with SQL Server back-end (split architecture)',
      'Full migration to SQL Server with validated data transfer',
      'Hybrid modernization paths when a phased approach reduces risk',
    ],
    benefits: [
      {
        title: 'Scalable Infrastructure',
        description: 'Support more users and data volume without Access file limits.',
      },
      {
        title: 'Better Performance',
        description: 'SQL Server handles heavy queries and concurrent access reliably.',
      },
      {
        title: 'IT-Ready Platform',
        description: 'Aligns with standard backup, security, and compliance requirements.',
      },
      {
        title: 'Controlled Migration',
        description: 'Phased cutover with testing: not a risky big-bang switch.',
      },
      {
        title: 'Fixed-Price Scope',
        description: 'Detailed migration plan and quote before work begins.',
      },
      {
        title: 'Post-Migration Support',
        description: 'Training and support so your team adopts the new system confidently.',
      },
    ],
    sidebarExamples: [
      {
        href: '/case-studies/access-sql-migration-enterprise',
        title: 'Enterprise: Access to SQL Migration',
        description: '50-user system migrated with zero data loss.',
      },
      {
        href: '/case-studies/manufacturing-inventory-tracking',
        title: 'Manufacturing: Multi-User Access',
        description: 'Stable 15-user system. Sometimes optimization beats migration.',
      },
      {
        href: '/blog/access-vs-sql-server-when-to-migrate',
        title: 'Blog: When to Migrate',
        description: 'Decision guide: Access vs SQL Server for growing teams.',
      },
    ],
    midCtaHeading: 'Outgrowing Microsoft Access?',
    midCtaSubtext:
      'Book a consultation. I will assess whether migration, hybrid, or optimization is the right move.',
    capabilitiesTitle: 'What I Migrate',
    cardAccent: 'secondary',
    timelineBox: {
      timelines: [
        'Simple databases: 3-4 weeks',
        'Medium complexity: 5-8 weeks',
        'Complex systems: 8-12 weeks',
      ],
      provide:
        'Current Access database, access to SQL Server (or I can set up), requirements for new system',
      deliver: 'Migrated SQL Server database, documentation, training, 100% ownership',
    },
    relatedLinks: [
      {
        href: '/access-consulting',
        title: 'Access Database Consulting',
        description: 'Fix crashes, rebuild databases, and scale for multi-user access.',
      },
      {
        href: '/case-studies/access-sql-migration-enterprise',
        title: 'Case Study: Access to SQL Migration',
        description: '50-user system migrated with zero data loss. Reports in 15 seconds.',
      },
      {
        href: '/excel-automation',
        title: 'Excel Automation',
        description: 'Automate repetitive Excel tasks with custom VBA solutions.',
      },
    ],
    finalCta: {
      heading: 'Ready to Migrate Your Access Database?',
      body: 'Scale beyond Access limits. Get better performance and cloud access. Get a free consultation to see if migration is right for you.',
    },
  },
  'vba-development': {
    problems: [
      'Broken macros that nobody knows how to fix',
      'Need custom Excel tools but internal team lacks VBA expertise',
      'Legacy VBA code that is fragile and undocumented',
      'Manual processes that need a reliable programmatic solution',
    ],
    solutionParagraphs: [
      'I write, fix, and document VBA for Excel and Access: from targeted macro repairs to full custom applications.',
      'You work directly with me. Fixed-price quotes after a scoping call.',
    ],
    solutionBullets: [
      'Custom macro and module development',
      'Debugging and refactoring legacy VBA',
      'User forms, automation, and API integrations',
    ],
    benefits: [
      {
        title: 'Expert VBA Code',
        description: '20+ years writing production VBA that runs reliably for years.',
      },
      {
        title: 'Clear Documentation',
        description: 'Commented code and user guides: not black-box macros.',
      },
      {
        title: 'Fast Turnaround',
        description: 'Targeted fixes often completed in days, not weeks.',
      },
      { title: 'Fixed-Price Projects', description: 'Scoped builds quoted upfront.' },
      { title: 'Full Ownership', description: 'You receive all source code.' },
      {
        title: 'Ongoing Maintenance',
        description: 'Available for updates when Excel or business rules change.',
      },
    ],
    sidebarExamples: [
      {
        href: '/case-studies/retail-pricing-system',
        title: 'Retail: Pricing Automation',
        description: 'Complex pricing rules automated in Excel and Access.',
      },
      {
        href: '/case-studies/construction-automated-reporting',
        title: 'Construction: Reporting Macro',
        description: 'Weekly report generation cut from hours to seconds.',
      },
      {
        href: '/excel-automation',
        title: 'Excel Automation Services',
        description: 'End-to-end process automation beyond single macros.',
      },
    ],
    midCtaHeading: 'Need a VBA developer who delivers?',
    midCtaSubtext: 'Book a free consultation for macro repair or custom VBA development.',
    capabilitiesTitle: 'What I Develop',
    cardAccent: 'primary',
    timelineBox: {
      timelines: [
        'Simple macros: 1-2 weeks',
        'Medium complexity: 2-4 weeks',
        'Complex applications: 4-8 weeks',
      ],
      provide:
        'Requirements, sample files, access to data sources (if needed), existing code (if fixing)',
      deliver: 'Working VBA code, documentation, training, 100% code ownership',
    },
    relatedLinks: [
      {
        href: '/excel-automation',
        title: 'Excel Automation',
        description: 'End-to-end Excel process automation with VBA.',
      },
      {
        href: '/case-studies/retail-pricing-system',
        title: 'Case Study: Pricing System',
        description: 'Automated complex pricing calculations with VBA and Access.',
      },
      {
        href: '/access-consulting',
        title: 'Access Database Consulting',
        description: 'Fix crashes, rebuild databases, and scale for multi-user access.',
      },
    ],
    finalCta: {
      heading: 'Ready to Automate with VBA?',
      body: 'Stop doing manual Excel work. Get custom VBA code that automates your processes. Get a free consultation.',
    },
  },
  'financial-modeling': {
    problems: [
      'Financial models that take minutes to recalculate',
      'Broken formulas and version control nightmares across the team',
      'Models that cannot support scenario analysis leadership needs',
      'Audit requests that expose structural weaknesses in the spreadsheet',
    ],
    solutionParagraphs: [
      'I build and audit Excel financial models for forecasting, budgeting, and analysis: structured, documented, and stakeholder-ready.',
      'Fixed-price engagement after a review of your current model and requirements.',
    ],
    solutionBullets: [
      'Three-statement models and scenario planning',
      'Model audit and error correction',
      'Performance optimization for large workbooks',
    ],
    benefits: [
      {
        title: 'Decision-Ready Models',
        description: 'Clear structure leadership can trust for planning and board reviews.',
      },
      {
        title: 'Faster Recalculation',
        description: 'Optimized formulas and architecture reduce wait time on large models.',
      },
      {
        title: 'Audit-Ready Documentation',
        description: 'Formula transparency and assumption tracking built in.',
      },
      {
        title: 'Scenario Flexibility',
        description: 'Sensitivity and scenario analysis without rebuilding from scratch.',
      },
      { title: 'Fixed-Price Delivery', description: 'Scoped quote after model review.' },
      {
        title: 'Knowledge Transfer',
        description: 'Walkthrough and documentation for your finance team.',
      },
    ],
    sidebarExamples: [
      {
        href: '/case-studies/financial-services-data-integration',
        title: 'Finance: Data Integration',
        description: 'Excel connected to SQL. 500 hours/year saved.',
      },
      {
        href: '/blog/financial-modeling-best-practices',
        title: 'Blog: Modeling Best Practices',
        description: 'How to build models that scale with your business.',
      },
      {
        href: '/excel-automation',
        title: 'Excel Automation',
        description: 'Automate reporting around your financial models.',
      },
    ],
    midCtaHeading: 'Need a financial model that keeps up?',
    midCtaSubtext: 'Book a consultation for model build, audit, or optimization.',
    capabilitiesTitle: 'What I Build',
    cardAccent: 'primary',
    timelineBox: {
      timelines: [
        'Simple models: 2-3 weeks',
        'Medium complexity: 4-6 weeks',
        'Complex models: 6-10 weeks',
      ],
      provide:
        'Historical financial data, business assumptions, growth projections, access to accounting systems (if needed)',
      deliver: 'Working financial model, documentation, training, 100% ownership',
    },
    relatedLinks: [
      {
        href: '/excel-automation',
        title: 'Excel Automation',
        description: 'Automate repetitive Excel tasks with custom VBA solutions.',
      },
      {
        href: '/case-studies/financial-services-data-integration',
        title: 'Case Study: 500 Hours Saved',
        description: 'How Excel-to-SQL integration eliminated manual data entry.',
      },
      {
        href: '/vba-development',
        title: 'VBA Development',
        description: 'Custom VBA macros and applications for Excel and Access.',
      },
    ],
    finalCta: {
      heading: 'Ready to Build or Fix Your Financial Model?',
      body: 'Stop struggling with slow or broken financial models. Get a free consultation and see how I can help.',
    },
  },
};

export function getServiceSidebarTagline(serviceKey) {
  return SERVICE_SIDEBAR_TAGLINES[serviceKey] || SERVICE_SIDEBAR_TAGLINES['access-consulting'];
}
