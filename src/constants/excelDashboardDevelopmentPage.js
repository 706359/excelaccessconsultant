/** Copy for /excel-dashboard-development */

export const PAGE_REVIEWED = '2026-11-06';

export const DASHBOARD_TYPES = [
  {
    title: 'Sales and order performance',
    description:
      'Answers which orders, customers, or routes are ahead or behind plan without opening a stack of weekly files.',
  },
  {
    title: 'Inventory and operations',
    description:
      'Shows stock levels, movement, and operational status so managers see problems before the warehouse does.',
  },
  {
    title: 'Finance and cash',
    description:
      'Tracks KPIs such as cash, variance, and period totals that update when the source workbook refreshes.',
  },
  {
    title: 'Job costing',
    description:
      'Surfaces work-in-progress, job margin, and budget vs actual so field and finance share one view.',
  },
  {
    title: 'Operations KPI scorecards',
    description:
      'Puts charts, PivotTables, and slicers on one sheet so leadership can filter the week without rebuilding the file.',
  },
];

export const DATA_SOURCES = [
  {
    title: 'Excel workbooks and folders',
    description:
      'Project files, monthly exports, and named ranges already used by your team. Folder drops work when each period adds a new file with a stable layout.',
  },
  {
    title: 'CSV and accounting exports',
    description:
      'Flat files from accounting or ops systems dropped into a known folder each period. Column names must stay stable or the refresh map needs a quick update.',
  },
  {
    title: 'Microsoft Access databases',
    description:
      'Live or linked Access tables when Excel is the reporting layer on top of Access. Common when history is too large to keep inside the dashboard workbook.',
  },
  {
    title: 'SQL Server',
    description:
      'Server data pulled into Excel when your IT stack already stores facts there. Useful for teams that already run Access or Excel against SQL Server.',
  },
];

export const BUILD_STEPS = [
  {
    title: 'Questions the dashboard must answer',
    desc: 'I list the decisions the workbook must support: which KPIs, which filters, who opens it, and how often numbers change. Vague goals become a short written list before any chart is drawn.',
  },
  {
    title: 'Data review',
    desc: 'I inspect sample files for broken #REF! links, mixed layouts, and fields that do not match across months. Gaps get fixed before charting starts. Dirty source files are the usual reason a pretty dashboard fails in week two.',
  },
  {
    title: 'Build',
    desc: 'I shape the data, create measures where needed, and lay out charts, PivotTables, and slicers. Refresh paths are built so next month is not a rebuild. VBA is added only when a button or mail step is part of the scope.',
  },
  {
    title: 'Testing against your numbers',
    desc: 'I compare dashboard totals to your known reports. Wrong figures get traced to the query or formula that caused them. Sign-off happens when your numbers and the dashboard agree on the same period.',
  },
  {
    title: 'Handover and documentation',
    desc: 'You get the finished workbook, short notes on how to refresh, and ownership of the file. Training covers the refresh button and any VBA helpers. Your staff should be able to run the next close without me on the call.',
  },
];

export const SERVICE_COMPARE = [
  {
    service: 'Excel dashboards',
    bestFor: 'A living scorecard or reporting workbook leaders open every week',
    youGet: 'Custom Excel dashboards with refreshable data, charts, and filters',
    href: '/excel-dashboard-development',
    pageLabel: 'Excel dashboard development',
  },
  {
    service: 'Excel automation',
    bestFor: 'Repeating tasks: consolidate, format, email, or run a button workflow',
    youGet: 'VBA that runs the process so staff stop copying cells by hand',
    href: '/excel-automation',
    pageLabel: 'Excel automation services',
  },
  {
    service: 'Financial modeling',
    bestFor: 'Forecasts, budgets, valuation, and scenario models',
    youGet: 'Structured models with clear assumptions and one-click updates',
    href: '/financial-modeling',
    pageLabel: 'Financial modeling services',
  },
  {
    service: 'VBA development',
    bestFor: 'Custom macros, forms, and code fixes inside Excel or Access',
    youGet: 'Targeted VBA modules with documentation your team can keep',
    href: '/vba-development',
    pageLabel: 'VBA development',
  },
];

export const PROOF_CASES = [
  {
    href: '/case-studies/construction-automated-reporting',
    title: 'Construction weekly reporting: 6 hours to 30 seconds',
    outcome:
      'A construction firm pulled 8–12 project workbooks into one weekly package. VBA automation cut the process from about 6 hours to about 30 seconds and removed copy-paste errors.',
    metric: '6 hrs → 30 sec',
  },
  {
    href: '/case-studies/construction-job-costing-tracker',
    title: 'Job costing WIP: same-day instead of Friday',
    outcome:
      'Job costs moved from separate Excel files into Access with WIP and job P&L reports. WIP lag went from five days to same day. Weekly rollup dropped from 6 hours to under 30 minutes.',
    metric: 'WIP: 5 days → same day',
  },
  {
    href: '/case-studies/distribution-slow-spreadsheet',
    title: 'Distribution ops file: lean Excel dashboards on Access data',
    outcome:
      'A 50MB operations workbook opened in about 5 minutes. Historical data moved to Access. The Excel layer for analysis and dashboards opened in about 10 seconds and stopped crashing.',
    metric: '5 min → 10 sec open',
  },
];

export const DASHBOARD_FAQS = [
  {
    question: 'What does an Excel dashboard developer do?',
    answer:
      'An Excel dashboard developer designs a workbook that answers specific business questions with charts, PivotTables, and filters. They connect your data, define KPIs, and set up refresh so staff are not rebuilding the file every month.',
  },
  {
    question: 'How much does a custom Excel dashboard cost?',
    answer:
      'Cost follows scope: number of data sources, cleanup needed, KPI count, chart layout, and whether VBA refresh or email steps are included. Fixed-price quotes follow the same project bands on the pricing page. This page does not list a separate dashboard rate.',
  },
  {
    question: 'Does the dashboard refresh automatically?',
    answer:
      'It refreshes when you run the path I build: Power Query refresh, a VBA refresh button, or a pull from Access or SQL Server. Fully unattended schedules depend on your PC or server setup. I document the steps for your file.',
  },
  {
    question: 'Can you fix or rebuild an existing dashboard?',
    answer:
      'Yes. Broken #REF! links, stale PivotTables, and workbooks that only one person understands are common. I repair what still works and rebuild the parts that cannot be trusted.',
  },
  {
    question: 'What is the difference between Power Query and Power Pivot?',
    answer:
      'Power Query imports and cleans data before it lands in Excel. Power Pivot builds a Data Model with relationships and DAX measures. Full Power Pivot editing needs Excel on Windows with a license that includes it.',
  },
  {
    question: 'Should I use Excel or Power BI?',
    answer:
      'Stay in Excel when your team lives in workbooks, needs offline files, or wants a fixed-price custom file they own. Consider Power BI when the org standard is cloud BI with many viewers. EAC builds Excel solutions; Power BI is not listed as a service here.',
  },
  {
    question: 'Will the file work for several people, on Mac, or in Excel for the web?',
    answer:
      'Several people can open a shared workbook, but concurrent editing has limits. Advanced Data Model and Power Pivot work is a Windows desktop Excel feature. Excel for the web can view many charts and some Power Pivot visuals, but cannot create Power Pivot models or new external connections.',
  },
  {
    question: 'Who owns the finished dashboard file?',
    answer:
      'You do. Deliverables on this site include 100% ownership of the files and code. There is no license fee to keep using what I build after handover.',
  },
];

export const RELATED_GROUPS = [
  {
    heading: 'Services',
    links: [
      {
        href: '/excel-automation',
        title: 'Excel Automation',
        description: 'One-click workflows, consolidation, and email distribution.',
      },
      {
        href: '/financial-modeling',
        title: 'Financial Modeling',
        description: 'Forecast and budget models that sit beside reporting.',
      },
      {
        href: '/vba-development',
        title: 'VBA Development',
        description: 'Custom macros and code when the dashboard needs a button.',
      },
      {
        href: '/pricing',
        title: 'Pricing',
        description: 'How fixed-price Excel projects are quoted.',
      },
      {
        href: '/faq',
        title: 'FAQ',
        description: 'Ownership, timelines, and how engagements run.',
      },
    ],
  },
  {
    heading: 'Guides and tools',
    links: [
      {
        href: '/resources/calculator',
        title: 'Spreadsheet ROI calculator',
        description: 'Estimate the cost of manual reporting work.',
      },
      {
        href: '/blog/excel-reporting-automation-complete-guide',
        title: 'Excel reporting automation guide',
        description: 'Informational guide; this page is the hire path.',
      },
      {
        href: '/blog/how-to-speed-up-slow-excel-spreadsheets',
        title: 'Speed up slow Excel files',
        description: 'When the dashboard file itself is the bottleneck.',
      },
    ],
  },
];
