/** Copy and structured content for /access-to-web-app-migration */

export const PAGE_UPDATED = '2026-11-04';

export const WEB_SIGNS = [
  {
    title: 'Remote or mobile access',
    symptom:
      'Staff need the system from home, a warehouse floor, or a browser without installing desktop Access or wrestling with VPN file shares.',
  },
  {
    title: 'User count and concurrency',
    symptom:
      'Too many people in the same .accdb at once: locking, slow queries, or crashes that keep returning after repair.',
  },
  {
    title: 'File corruption risk',
    symptom:
      'Network drops or shared-file architecture keep damaging the database, and emergency repairs are becoming a routine cost.',
  },
  {
    title: 'Security and audit pressure',
    symptom:
      'IT or leadership wants server-side logins, clearer permissions, and recoverable backups beyond a shared Access file.',
  },
  {
    title: 'Office / Windows dependency',
    symptom:
      'Every user needs a Windows PC with Access licensed just to enter data, which blocks contractors or mixed-device teams.',
  },
  {
    title: 'Vendor or IT modernization mandates',
    symptom:
      'Internal IT or an outside audit is pushing legacy Access off the critical path toward a supported server and browser model.',
  },
];

export const WEB_DELIVERABLES = [
  {
    title: 'Tables, relationships, and data',
    description:
      'Your Access tables and relationships move to a SQL Server or Azure SQL back end with validated row counts and integrity checks—not a blind file copy.',
  },
  {
    title: 'Queries and business rules',
    description:
      'Critical Access queries become views, stored procedures, or application logic so filters and calculations keep working after cutover.',
  },
  {
    title: 'Forms rebuilt as web screens',
    description:
      'Day-to-day Access forms are recreated as web-based interfaces your team opens in a browser, instead of desktop .accdb screens.',
  },
  {
    title: 'Reports',
    description:
      'Operational reports move to SQL Server Reporting Services or equivalent web reporting where that fits, or stay on a transitional Access front end when that is the better interim step.',
  },
  {
    title: 'VBA and macros rewritten',
    description:
      'Business logic in VBA is redesigned as stored procedures, triggers, or application code—macros are not “converted” line-for-line automatically.',
  },
  {
    title: 'Roles, permissions, and handover',
    description:
      'SQL Server (or Azure SQL) logins and roles map who can view and change what. You receive documentation, training, and ownership of the migrated system.',
  },
];

export const WEB_STEPS = [
  {
    title: 'Discovery and Access inventory',
    desc: 'Audit tables, forms, reports, VBA, user count, and which workflows are business-critical. Sometimes optimization or a hybrid SQL back end is enough—I will say so before quoting a full web rebuild.',
  },
  {
    title: 'Scope and architecture decision',
    desc: 'Choose hybrid (Access UI + SQL back end), custom web UI on SQL/Azure SQL, or a Power Apps path when that fits. Fixed-price plan, cutover window, and rollback steps before build work starts.',
  },
  {
    title: 'Database migration to a server back end',
    desc: 'Schema and data move to SQL Server or Azure SQL with validation. The original Access file stays untouched as backup until you retire it.',
  },
  {
    title: 'Application build',
    desc: 'Rebuild agreed forms as web-based interfaces and migrate or rewrite the logic those screens depend on. Reports follow the plan from discovery.',
  },
  {
    title: 'Data validation and testing',
    desc: 'Row counts, spot checks, and side-by-side runs with production users before anyone depends on the new path alone.',
  },
  {
    title: 'User acceptance and training',
    desc: 'Power users and IT walk through real workflows. Written guides and training so the team can operate without me in the middle.',
  },
  {
    title: 'Cutover and post-launch support',
    desc: 'Cutover in a low-traffic window with support on standby, then early post-go-live tuning for performance and report fixes.',
  },
];

export const ARCHITECTURE_ROWS = [
  {
    option: 'Access front end + SQL Server / Azure SQL',
    remote: 'Desktop Access (often via VPN); not a pure browser app',
    scale: 'Strong multi-user gains vs .accdb file sharing',
    customization: 'Keep existing Access forms, reports, and most VBA',
    costDrivers: 'SQL licensing/hosting + migration labor; lowest disruption',
    fit: 'Best first step when the UI still works and concurrency is the pain',
    linkHref: '/database-migration',
    linkLabel: 'Access database migration services',
  },
  {
    option: 'Custom web application + SQL / Azure SQL',
    remote: 'Browser-based access for remote and multi-site teams',
    scale: 'Built for larger concurrent use than desktop Access alone',
    customization: 'Forms and workflows rebuilt as web screens; VBA rewritten',
    costDrivers: 'UI rebuild effort, integrations, roles, hosting',
    fit: 'When you must replace Access with a web application',
    linkHref: '/blog/how-to-modernize-access-database',
    linkLabel: 'Access modernization layers guide',
  },
  {
    option: 'Power Apps / Dataverse',
    remote: 'Strong browser and mobile via Microsoft 365',
    scale: 'Good for form-centric apps; licensing scales per user/app',
    customization: 'Fast forms; less depth for complex Access-style reports',
    costDrivers: 'Redevelopment plus ongoing Power Platform licensing',
    fit: 'Mobile-first Microsoft 365 shops—not always cheaper than Access',
    linkHref: '/blog/access-vs-power-apps-when-to-stay-on-access',
    linkLabel: 'Access vs Power Apps comparison',
  },
];

export const PROOF_CASES = [
  {
    href: '/case-studies/access-sql-migration-enterprise',
    title: '50-user Access system moved to SQL Server',
    note: 'Hybrid path: Access front end retained',
    outcome:
      'A distribution company with ~50 users migrated to SQL Server with zero data loss. Report runtimes dropped from 4–6 minutes to under 15 seconds; corruption incidents stopped. Staff kept familiar Access screens while the back end scaled.',
    metric: '50 users · zero data loss',
  },
  {
    href: '/case-studies/healthcare-records-access-sql-migration',
    title: 'Healthcare records: Access to SQL over one weekend',
    note: 'Hybrid path: weekend cutover, Access workflows preserved',
    outcome:
      'A clinic network migrated scheduling and records indexing from Access to SQL Server with weekend-only downtime and zero record loss—proof of careful data migration and cutover discipline.',
    metric: '30 users · weekend cutover',
  },
  {
    href: '/case-studies/retail-pricing-system',
    title: 'Retail pricing rules in Access + Excel',
    note: 'Not a browser rebuild—shows complex business-rule systems EAC designs',
    outcome:
      'A multi-location retailer centralized pricing rules in Access with an Excel front end. Quote time dropped from 15–30 minutes to seconds. Useful reference when pricing or rules engines must survive modernization.',
    metric: 'Quote time → seconds',
  },
];

export const WEB_FAQS = [
  {
    question: 'Can an Access database be converted to a web app?',
    answer:
      'Yes. Tables and data move to SQL Server or Azure SQL, and Access forms are rebuilt as web-based interfaces. Microsoft Access is not a browser runtime—Access web apps were discontinued—so conversion means redesigning the UI and rewriting VBA, not uploading an .accdb to the internet.',
  },
  {
    question: 'Can Access run in a browser?',
    answer:
      'No. Desktop Access does not run natively in a browser. Teams that need browser access either keep Access on managed PCs (often with a SQL back end) or replace the front end with a web application, Power Apps, or similar. Remote file sharing of an .accdb is not a web app.',
  },
  {
    question: 'How much does it cost to convert Access to a web application?',
    answer:
      'Scope drives price. Hybrid SQL-back-end projects on this site commonly start in the $3,000–$12,000 bands used for database migration. Fuller rebuilds with web UI are typically higher; planning content on this site cites roughly $10,000–$25,000+ for custom web or .NET-style front ends, and more when Power Apps licensing and rebuild effort stack up. You get a fixed quote after discovery.',
  },
  {
    question: 'How long does an Access to web app migration take?',
    answer:
      'Simple database-focused moves often take about 3–4 weeks. Medium scopes with form work commonly take 5–8 weeks. Large systems run 8–12 weeks or longer. Full UI rebuilds sit toward the longer end because every critical form and VBA workflow must be redesigned and tested.',
  },
  {
    question: 'What happens to my Access forms, reports and VBA?',
    answer:
      'Forms are rebuilt as web screens (or kept in Access on a hybrid path). Reports may move to SQL Server Reporting Services, stay in Access temporarily, or be redesigned for the web. VBA is rewritten as stored procedures, triggers, or application logic—there is no reliable one-click VBA-to-web converter.',
  },
  {
    question: 'Do I have to leave Access entirely?',
    answer:
      'Not always. Many teams migrate data to SQL Server or Azure SQL first and keep Access forms. That hybrid path is often the right answer until browser or mobile requirements force a UI rebuild. I recommend the lighter path when it meets the business need.',
  },
  {
    question: 'Is Power Apps the same as a custom web app migration?',
    answer:
      'No. Power Apps is a low-code Microsoft 365 path with different licensing and limits. A custom web application rebuilds screens and logic outside that model. Which fits depends on mobile needs, report complexity, and total cost of ownership—not marketing labels.',
  },
  {
    question: 'Will my original Access database be deleted?',
    answer:
      'No. The original Access database remains untouched as backup through migration and testing. You retire it only after you confirm the new system works. Cutover plans include validation and a rollback posture for the go-live window.',
  },
];

export const RELATED_GROUPS = [
  {
    heading: 'Services',
    links: [
      {
        href: '/database-migration',
        title: 'Database Migration',
        description: 'SQL Server / Azure SQL paths, including hybrid Access front ends.',
      },
      {
        href: '/access-consulting',
        title: 'Access Database Consulting',
        description: 'Stabilize and extend Access when a full web rebuild is not required.',
      },
      {
        href: '/access-database-repair',
        title: 'Access Database Repair',
        description: 'Recover corrupted files before or during modernization.',
      },
      {
        href: '/pricing',
        title: 'Fixed-price project ranges',
        description: 'How quotes are scoped for migration work.',
      },
      {
        href: '/faq',
        title: 'Common project questions',
        description: 'Ownership, timelines, and how engagements work.',
      },
      {
        href: '/resources/calculator',
        title: 'Spreadsheet ROI calculator',
        description: 'Estimate the cost of staying on fragile manual processes.',
      },
    ],
  },
  {
    heading: 'Guides',
    links: [
      {
        href: '/blog/how-to-modernize-access-database',
        title: 'How to modernize Access',
        description: 'Layered approach: optimize, SQL back end, then UI replace.',
      },
      {
        href: '/blog/when-to-migrate-from-access',
        title: 'When to migrate from Access',
        description: 'Hard signals vs stay-on-Access cases.',
      },
      {
        href: '/blog/access-vs-power-apps-when-to-stay-on-access',
        title: 'Access vs Power Apps',
        description: 'Honest comparison before a Power Platform rebuild.',
      },
      {
        href: '/blog/access-sql-server-migration-cost',
        title: 'Access to SQL Server cost',
        description: 'What drives migration budgets.',
      },
      {
        href: '/blog/can-access-handle-50-users',
        title: 'Access with 50 users',
        description: 'Practical concurrency limits.',
      },
      {
        href: '/blog/access-front-end-back-end-architecture',
        title: 'Access FE/BE architecture',
        description: 'Split design before or alongside migration.',
      },
    ],
  },
];
