/** Copy and structured content for /excel-to-access-conversion */

export const PAGE_UPDATED = '2026-11-04';

export const CONVERSION_SIGNS = [
  'Two or more people need to edit the same workbook at once, so you end up with emailed copies and version chaos.',
  'Inventory, orders, or job costs live across many sheets with VLOOKUP chains that break when someone inserts a column.',
  'The file is slow to open, freezes on recalculation, or crashes weekly as row counts grow.',
  'You need enforceable rules (required fields, valid SKUs, unique IDs) that Excel formulas cannot reliably police.',
  'Managers want searchable forms and filtered operational reports, not another grid of unprotected cells.',
  'You are planning multi-user Access work and still doing daily data entry in Excel master files.',
];

export const CONVERSION_DELIVERABLES = [
  {
    title: 'Normalized relational tables',
    description:
      'Excel columns become proper tables with primary keys, relationships, and indexes so customers, items, and transactions stay consistent.',
  },
  {
    title: 'Data cleanup and import',
    description:
      'Duplicates, blank keys, mixed types, and broken lookups are cleaned before import so Access starts from trustworthy data.',
  },
  {
    title: 'Data entry forms',
    description:
      'Staff enter and update records through validated forms with dropdowns and required fields, not unprotected worksheet cells.',
  },
  {
    title: 'Queries and operational reports',
    description:
      'Saved queries and Access reports replace manual copy-paste rollups for inventory, WIP, picks, or management summaries.',
  },
  {
    title: 'Multi-user Access setup',
    description:
      'Split front-end / back-end architecture so concurrent users do not lock or corrupt a single shared workbook.',
  },
  {
    title: 'Validation and integrity rules',
    description:
      'Business rules live in the database layer so bad data is blocked at entry instead of discovered in Friday reports.',
  },
];

export const CONVERSION_STEPS = [
  {
    title: 'Discovery',
    desc: 'We map who uses the workbook, what breaks today, and which processes must survive conversion. Scope and fixed price come after this call.',
  },
  {
    title: 'Data audit and normalization',
    desc: 'I review sheets, keys, and duplicates, then design relational tables that match how your business actually works.',
  },
  {
    title: 'Schema design',
    desc: 'Tables, relationships, indexes, and validation rules are built in Microsoft Access before any mass import.',
  },
  {
    title: 'Import and validation',
    desc: 'Data moves from Excel into Access with checksums and sample reviews so row counts and critical fields match.',
  },
  {
    title: 'Forms and reports',
    desc: 'Day-to-day screens and reports replace the old sheet workflows your team already knows.',
  },
  {
    title: 'Testing, training, and handover',
    desc: 'We test with real users, document the system, train your team, and you own 100% of the database files.',
  },
];

export const COMPARISON_ROWS = [
  {
    factor: 'Concurrent users',
    excel: 'One editor at a time is safe; shared workbooks create copies and conflicts',
    access: 'Designed for multiple simultaneous users with a split database',
  },
  {
    factor: 'Data integrity',
    excel: 'Rules depend on formulas and user discipline',
    access: 'Keys, relationships, and field validation enforce integrity',
  },
  {
    factor: 'Relationships',
    excel: 'Lookups across sheets; easy to break',
    access: 'True relational tables (customers → orders → lines)',
  },
  {
    factor: 'Reporting',
    excel: 'Strong for ad-hoc analysis and pivots',
    access: 'Strong for repeatable operational reports and queries',
  },
  {
    factor: 'Scale',
    excel: 'Best for smaller active datasets and analysis',
    access: 'Better for growing transactional data under Access limits',
  },
  {
    factor: 'Cost of ownership',
    excel: 'No extra licenses if you already use Microsoft 365',
    access: 'Uses desktop Access; no new SaaS subscription for typical builds',
  },
  {
    factor: 'When it wins',
    excel: 'Models, forecasts, one-owner trackers, analysis workbooks',
    access: 'Multi-user entry, inventory, job costing, fulfillment tools',
  },
];

export const PROOF_CASES = [
  {
    href: '/case-studies/distribution-slow-spreadsheet',
    title: '50MB operations workbook moved to Access + lean Excel',
    outcome:
      'A distribution company cut open time from about 5 minutes to about 10 seconds by storing historical data in Access and keeping Excel for analysis.',
    metric: '5 min → 10 sec open',
  },
  {
    href: '/case-studies/distribution-warehouse-pick-list',
    title: 'Excel pick lists replaced with multi-user Access',
    outcome:
      'A regional distributor replaced printed Excel pick lists with Access pick forms. Average pick time dropped 40% and re-picks fell from 8% to under 2%.',
    metric: 'Pick time −40%',
  },
  {
    href: '/case-studies/construction-job-costing-tracker',
    title: 'Spreadsheet job costing converted to Access WIP',
    outcome:
      'A construction firm moved per-job Excel cost files into Access so WIP is available the same day instead of a Friday rollup.',
    metric: 'WIP: 5 days → same day',
  },
];

export const CONVERSION_FAQS = [
  {
    question: 'Can Excel be converted to an Access database?',
    answer:
      'Yes. Spreadsheet tabs can become relational tables in Microsoft Access, with forms for data entry, queries for filtering, and reports for recurring output. Conversion is not a file rename: keys, relationships, and cleanup determine whether the database stays reliable under multi-user use.',
  },
  {
    question: 'When should I move from Excel to Access?',
    answer:
      'Move when multiple people must edit the same data, when relationships and validation matter, or when the workbook is slow, crashing, or version-fragmented. Keep Excel for models and analysis. I outline the decision in more detail on Access vs Excel.',
  },
  {
    question: 'How much does it cost to convert Excel to Access?',
    answer:
      'Most conversion projects fall in the same fixed-price bands as other Access and Excel work on this site: roughly $1,500–$3,000 for focused scopes, $3,000–$8,000 for multi-user systems with forms and reports, and $8,000+ for large or multi-department builds. Exact cost depends on sheet count, data quality, and how many workflows you replace.',
  },
  {
    question: 'How long does Excel to Access conversion take?',
    answer:
      'Simple conversions often land in about 1–3 weeks. Multi-user systems with forms, reports, and cleanup commonly take 3–6 weeks. Larger rebuilds run longer. Timeline is confirmed in the fixed-price quote after we review your files.',
  },
  {
    question: 'Will my team still be able to use Excel after conversion?',
    answer:
      'Usually yes. Many clients keep Excel for analysis and dashboards while Access becomes the system of record. We can link Excel to Access queries so reports refresh without putting transactional data back into a fragile master workbook.',
  },
  {
    question: 'What happens to my existing Excel formulas and macros?',
    answer:
      'Operational logic that belongs in the database moves into tables, queries, forms, and Access VBA where needed. Pure analysis workbooks can stay in Excel. Broken macros that only papered over spreadsheet limits are replaced by proper validation and multi-user design.',
  },
  {
    question: 'Can you convert an Excel inventory tracker to a multi-user Access database?',
    answer:
      'Yes. Inventory trackers are a common conversion: items, locations, transactions, and users become related tables with forms for receiving, issues, and counts. Concurrent staff can work without emailing copies of the master file.',
  },
  {
    question: 'When is Access the wrong destination?',
    answer:
      'If you need dozens of concurrent writers, heavy web/mobile access, or you are already near Access size and concurrency limits, SQL Server or another platform may fit better. I will say so up front and point you toward database migration options instead of forcing Access.',
  },
];

export const RELATED_GROUPS = [
  {
    heading: 'Services',
    links: [
      {
        href: '/access-consulting',
        title: 'Access Database Consulting',
        description: 'Ongoing Access design, repair, and multi-user systems.',
      },
      {
        href: '/excel-automation',
        title: 'Excel VBA Automation',
        description: 'Keep Excel when automation is enough.',
      },
      {
        href: '/database-migration',
        title: 'Database Migration',
        description: 'When Access is not the right long-term home.',
      },
      {
        href: '/access-database-repair',
        title: 'Access Database Repair',
        description: 'Stabilize corrupted files before or after conversion.',
      },
      {
        href: '/pricing',
        title: 'Fixed-price project ranges',
        description: 'See how quotes are scoped.',
      },
      {
        href: '/faq',
        title: 'Common project questions',
        description: 'Timelines, ownership, and how engagements work.',
      },
    ],
  },
  {
    heading: 'Guides',
    links: [
      {
        href: '/blog/access-vs-excel-when-to-use-each',
        title: 'Access vs Excel',
        description: 'When each tool should win.',
      },
      {
        href: '/blog/access-database-multi-user-setup',
        title: 'Multi-user Access setup',
        description: 'How concurrent Access environments are structured.',
      },
      {
        href: '/blog/can-access-handle-50-users',
        title: 'Access with 50 users',
        description: 'Practical concurrency limits.',
      },
      {
        href: '/blog/access-front-end-back-end-architecture',
        title: 'Access front-end design',
        description: 'Split architecture after conversion.',
      },
    ],
  },
];
