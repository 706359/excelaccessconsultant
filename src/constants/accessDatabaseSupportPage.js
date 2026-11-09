/** Copy for /access-database-support */

export const PAGE_REVIEWED = '2026-11-05';

export const SUPPORT_COVERS = [
  {
    title: 'Bug fixes',
    description:
      'Broken buttons, failed saves, wrong totals, and VBA errors that stop daily work. I reproduce the failure on a copy, then patch the form, query, or module that caused it.',
  },
  {
    title: 'Slow forms and queries',
    description:
      'Forms that lag on open, queries that time out, and reports that freeze the UI. Fixes often include indexes, leaner joins, and removing work that belongs in the back end.',
  },
  {
    title: 'Multi-user and locking problems',
    description:
      'Record locks, ghost sessions, and conflicts when several people edit at once. I check split design, linked tables, and how forms lock rows while staff enter data.',
  },
  {
    title: 'Small changes and new reports',
    description:
      'Extra fields, new dropdowns, filtered reports, and short VBA tweaks your team needs. Scoped as small support tasks when the change stays inside the current design.',
  },
  {
    title: 'Office and Windows update compatibility',
    description:
      'Issues that appear after Microsoft 365 or Windows updates change how Access behaves. I test the same screens your users open after an update cycle.',
  },
  {
    title: 'Backup checks and compact routines',
    description:
      'Confirm backups ran, review .accdb growth, and schedule compact and repair off hours. Compact and repair rewrites the file to reclaim space and clear some corruption risk.',
  },
  {
    title: 'Documentation and handover notes',
    description:
      'Plain notes on how the front end and back end fit together so the next person is not lost. You keep ownership of every file I touch.',
  },
];

export const SUPPORT_AUDIENCE = [
  {
    title: 'The developer left',
    description:
      'You have a live .accdb and no one on staff who will touch the VBA or linked tables.',
  },
  {
    title: 'You inherited the database',
    description:
      'It runs, but tables, queries, and forms were never documented for your team.',
  },
  {
    title: 'It works until it does not',
    description:
      'Staff see messages like "Could not update; currently locked" or "Operation must use an updateable query" during busy hours.',
  },
  {
    title: 'More users, more friction',
    description:
      'As headcount grows, opens slow down, locks pile up, or someone gets "Unrecognized database format" after a bad copy.',
  },
];

export const SUPPORT_STEPS = [
  {
    title: 'First response',
    desc: 'You describe the symptom, who is affected, and whether the file opens. I tell you if this is support, repair, or a larger project.',
  },
  {
    title: 'Review of the database',
    desc: 'I work on a copy when possible. I check the split (front end vs back end), linked tables, recent errors, and how users connect.',
  },
  {
    title: 'Fixes',
    desc: 'I repair the failing form, query, or VBA path. I test the same steps your staff take before you put anything back in production.',
  },
  {
    title: 'Documentation',
    desc: 'You get short notes on what changed and how to avoid the same break next time.',
  },
  {
    title: 'Ongoing changes',
    desc: 'After the fire is out, we can queue small enhancements on demand, under a retainer, or as a scoped follow-on project.',
  },
];

export const SERVICE_COMPARE = [
  {
    service: 'Support',
    bestFor: 'A working database that needs fixes and small changes over time',
    youGet: 'On-demand or retainer help for bugs, locking, reports, and maintenance',
    href: '/access-database-support',
    pageLabel: 'Access database support',
  },
  {
    service: 'Repair',
    bestFor: 'Corruption, crashes, or a file that will not open',
    youGet: 'Recovery work, data salvage, and hardening against repeat failure',
    href: '/access-database-repair',
    pageLabel: 'Access database repair',
  },
  {
    service: 'Consulting',
    bestFor: 'Design, rebuild, or major feature work on Access',
    youGet: 'Fixed-price development for forms, queries, multi-user design, and VBA',
    href: '/access-consulting',
    pageLabel: 'Access database consulting',
  },
  {
    service: 'Migration',
    bestFor: 'User or size limits that Access alone cannot hold',
    youGet: 'Move data to SQL Server or Azure SQL, often keeping the Access front end',
    href: '/database-migration',
    pageLabel: 'Database migration',
  },
];

export const PROOF_CASES = [
  {
    href: '/case-studies/manufacturing-inventory-tracking',
    title: '15-user manufacturing inventory Access system',
    outcome:
      'After a split redesign and locking fixes, the database ran without a crash for over 8 months. Fifteen users worked at once. The team saved about 10 hours per week previously lost to re-entry and troubleshooting.',
    metric: '8+ months · zero crashes',
  },
  {
    href: '/case-studies/distribution-warehouse-pick-list',
    title: 'Warehouse pick lists moved into multi-user Access',
    outcome:
      'A regional distributor replaced printed Excel pick lists with Access pick forms. Average pick time dropped 40%. Re-picks fell from 8% of lines to under 2%.',
    metric: 'Pick time −40%',
  },
  {
    href: '/case-studies/retail-pricing-system',
    title: 'Retail pricing rules in Access',
    outcome:
      'Pricing rules lived in Access with an Excel front end. Quotes that took 15–30 minutes now finish in seconds, with rules updated in one place for every location.',
    metric: 'Quote time → seconds',
  },
];

export const SUPPORT_FAQS = [
  {
    question: 'What does Access database support include?',
    answer:
      'It covers bug fixes, slow forms and queries, multi-user locking issues, small feature changes, new reports, update compatibility checks, backup reviews, and short documentation. Corruption recovery is a separate repair engagement when the file itself is damaged.',
  },
  {
    question: 'How much does Access database support cost?',
    answer:
      'Cost depends on urgency, how complex the VBA and linked tables are, and whether you need one fix or ongoing help. Advisory and diagnostic work is $90/hour on this site. Larger scoped changes get a fixed-price quote. See the pricing page for how quotes are structured.',
  },
  {
    question: 'Can you support a database someone else built?',
    answer:
      'Yes. Most support work starts on systems I did not write. I review the front end and back end, map linked tables, and fix what is breaking before suggesting bigger redesigns.',
  },
  {
    question: 'Does an Access database that already works need support?',
    answer:
      'Often yes. Backups, compact and repair, front-end version control, and small change requests keep a live system stable. Waiting until the file corrupts usually costs more than light maintenance.',
  },
  {
    question: 'Does Access still work with current Microsoft 365 and Windows?',
    answer:
      'Yes. Access remains part of Microsoft 365 and Office suites and continues to receive updates. Support work often includes checking that your .accdb still behaves after those updates.',
  },
  {
    question: 'How many users can Access handle?',
    answer:
      'With a proper split design, many teams run in the teens to low dozens of concurrent users. Past that range, performance and locking risk rise. I cover practical limits in the blog post on Access with 50 users.',
  },
  {
    question: 'How fast can support start?',
    answer:
      'I schedule support when I am available after a short intake. {{CONFIRM: typical first-response window for non-emergency Access support}}. Urgent corruption is handled as repair, not routine support.',
  },
  {
    question: 'What if the database is corrupted?',
    answer:
      'That is repair work. I assess whether compact and repair, recovery, or a rebuild is needed, then quote before recovery starts. Use Access database repair for files that will not open or keep crashing.',
  },
];

export const RELATED_GROUPS = [
  {
    heading: 'Services',
    links: [
      {
        href: '/access-consulting',
        title: 'Access Database Consulting',
        description: 'Fixed-price builds and redesigns when support alone is not enough.',
      },
      {
        href: '/access-database-repair',
        title: 'Access Database Repair',
        description: 'Corruption, crashes, and recovery.',
      },
      {
        href: '/database-migration',
        title: 'Database Migration',
        description: 'SQL Server or Azure SQL when Access limits are the real problem.',
      },
      {
        href: '/pricing',
        title: 'Pricing',
        description: 'How advisory and fixed-price work is quoted.',
      },
      {
        href: '/faq',
        title: 'FAQ',
        description: 'Ownership, timelines, and how projects run.',
      },
    ],
  },
  {
    heading: 'Guides',
    links: [
      {
        href: '/blog/access-database-maintenance-checklist',
        title: 'Access maintenance checklist',
        description: 'Weekly and monthly tasks that prevent avoidable outages.',
      },
      {
        href: '/blog/when-to-migrate-from-access',
        title: 'When to migrate from Access',
        description: 'Hard signals that support should become a migration plan.',
      },
      {
        href: '/blog/can-access-handle-50-users',
        title: 'Access with 50 users',
        description: 'Concurrency limits in plain terms.',
      },
      {
        href: '/blog/access-front-end-back-end-architecture',
        title: 'Front-end / back-end architecture',
        description: 'Why split databases matter for multi-user Access.',
      },
    ],
  },
];
