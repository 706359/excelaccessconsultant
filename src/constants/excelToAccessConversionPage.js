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
    question: 'How much does it cost to convert Excel to Access?',
    answer:
      'Most projects cost between $1,500 and $8,000. A focused conversion with a few clean sheets runs $1,500 to $3,000. A multi-user database with forms, queries and reports usually runs $3,000 to $8,000. Large or multi-department rebuilds start at $8,000. You get a fixed price after a free consultation.',
  },
  {
    question: 'How long does an Excel to Access conversion take?',
    answer:
      'Simple conversions take about 1 to 3 weeks. Multi-user systems with forms and validation usually take 3 to 6 weeks. Larger rebuilds take longer. The main factors are the number of sheets and macros, how messy the data is, and how many people will use the database at once.',
  },
  {
    question: 'Can I import my Excel file into Access myself?',
    answer:
      'Yes, for clean, flat data. The Access import wizard copies rows into a table. It does not fix duplicate keys, merged cells, repeating columns or mixed data types, and it does not build forms or reports. If one person uses a simple sheet, try the wizard first. If several people share the file, get the structure designed before importing.',
  },
  {
    question: 'Will my Excel formulas and macros still work in Access?',
    answer:
      'The logic carries over, the syntax does not. Formulas are rebuilt as queries, calculated fields or VBA, depending on what they do. Excel VBA macros are reviewed and rewritten for Access where you still need them.',
  },
  {
    question: 'Can we keep using Excel after the conversion?',
    answer:
      'Yes. Excel can pull data from Access for reporting and analysis, so your pivot tables and models keep working. The shared data lives in Access, where several people can edit it safely.',
  },
  {
    question: 'How many people can use an Access database at the same time?',
    answer:
      'A split Access database suits small and mid-size teams, and we have built one for 15 concurrent users. Once dozens of people write at the same time, SQL Server is the safer back end. We check this in the consultation, before you pay for a build.',
  },
  {
    question: 'When should I move to SQL Server instead of Access?',
    answer:
      'Move to SQL Server or a web app if you need dozens of people writing at once, browser or mobile access, or your file is close to the 2 GB Access limit. If Access is the wrong fit, we tell you before you spend money on it.',
  },
  {
    question: 'Is Microsoft Access still supported?',
    answer:
      'Yes. Microsoft still ships Access with Microsoft 365, and desktop Access databases remain a supported way to run shared business data for small and mid-size teams.',
  },
  {
    question: 'What do you need from me to quote a conversion?',
    answer:
      'Send one or two sample workbooks through the contact form. You can remove sensitive values, because the structure matters more than the data. We review them in the free consultation and give you a fixed price.',
  },
  {
    question: 'Who owns the Access database when it is finished?',
    answer:
      'You do. You own 100% of the files, and there is no hosted subscription.',
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
