export const CASE_STUDIES = {
  'manufacturing-inventory-tracking': {
    slug: 'manufacturing-inventory-tracking',
    title: 'How We Fixed a Crashing Access Database for a 15-User Manufacturing Team',
    metaTitle: 'Manufacturing Access Database Fix - Zero Crashes in 8 Months | Case Study',
    metaDescription:
      'A manufacturing company with 15 daily users had an Access database crashing multiple times a day. We rebuilt the database structure, eliminated all crashes, and saved 10 hours per week.',
    industry: 'Manufacturing',
    problem: [
      'A mid-size manufacturing company relied on a Microsoft Access database for daily inventory tracking across their entire operation. Fifteen employees used the system simultaneously every day to log materials, track work orders, and generate inventory reports. The database had grown organically over several years without proper architecture, and it was falling apart.',
      'The database crashed multiple times per day. Each crash corrupted data, forcing staff to re-enter information they had already logged. Some days, employees lost hours of work. Inventory counts became unreliable because records disappeared or duplicated during crashes. Management could not trust the numbers coming out of the system.',
      'The IT team had tried quick fixes, compacting and repairing, splitting the database, increasing timeouts, but nothing stuck. The root cause was structural: the database was never designed for 15 concurrent users. Queries ran against local tables with no optimization, forms locked entire tables instead of individual records, and there was no error handling to recover gracefully from conflicts.',
    ],
    solution: [
      'I started with a full audit of the existing database: table structure, relationships, queries, forms, and VBA code. I identified the specific bottlenecks causing crashes, primarily table-level locking, unindexed queries on large tables, and missing error handling in multi-user scenarios.',
      "I rebuilt the database with a proper split architecture: a shared backend on the network server holding all data tables, and individual frontend files on each user's machine containing forms, queries, and reports. I rewrote the critical queries to use proper indexing and optimized joins. I converted all forms to use record-level locking instead of table-level locking, so multiple users could work simultaneously without conflicts.",
      "I added full error handling throughout the VBA code so that when a conflict does occur, the system handles it gracefully, saving the user's work, retrying the operation, and logging the issue, instead of crashing. I also built an automated backup routine that runs every 4 hours during business hours, so even in a worst-case scenario, data loss is minimal.",
    ],
    outcome:
      'The database has run without a single crash for over 8 months. All 15 users work simultaneously without conflicts or data loss. The team saves approximately 10 hours per week that was previously spent re-entering lost data and troubleshooting crashes. Inventory accuracy improved from roughly 85% to over 99%, which reduced over-ordering and stockouts.',
    metrics: [
      { label: 'Uptime', value: '8+ months' },
      { label: 'Crashes', value: 'Zero' },
      { label: 'Concurrent Users', value: '15' },
      { label: 'Weekly Time Saved', value: '10 hours' },
      { label: 'Inventory Accuracy', value: '99%+' },
    ],
    testimonial: {
      quote:
        'Robert Terry rebuilt our multi-user Access database. Zero crashes in 8 months, and we save about 10 hours every week we used to spend re-entering lost data.',
      attribution: 'Operations Manager, Manufacturing Company',
    },
    relatedService: '/access-consulting',
    relatedServiceLabel: 'Access Database Consulting',
  },

  'construction-automated-reporting': {
    slug: 'construction-automated-reporting',
    title:
      'How We Built a Construction Tracking System That Cut Weekly Reporting from 6 Hours to 30 Seconds',
    metaTitle: 'Construction Tracking System Case Study - 6 Hours to 30 Seconds',
    metaDescription:
      'A construction firm needed a reliable construction tracking system for weekly job reports. We built Excel VBA automation that generates the same reports in 30 seconds, saving $15,000 per year.',
    industry: 'Construction',
    problem: [
      'A regional construction firm with multiple active projects needed a construction tracking system that produced reliable weekly reports for project managers and executives. Every Friday, one staff member spent the entire afternoon, roughly 6 hours, pulling data from separate project spreadsheets, consolidating numbers, running calculations, formatting the output, and distributing reports by email.',
      'The process involved opening 8 to 12 different Excel files depending on active projects, copying specific data ranges from each, pasting into a master reporting template, recalculating budgets and variances, checking formulas, and then creating individual project summaries plus a company-wide rollup. The person doing this work had to remember which cells to copy from each file, which changed as projects evolved.',
      'Errors were frequent. Wrong numbers got copied, formulas broke when project files changed structure, and reports occasionally went out with incorrect totals. The firm had tried hiring temporary help for reporting, but training someone on the process took weeks, and mistakes increased with new people. The reporting bottleneck also meant management decisions based on Friday data were sometimes based on flawed numbers.',
    ],
    solution: [
      'I built an Excel VBA automation system that handles the entire weekly reporting process. The core is a master workbook with VBA code that automatically locates and opens all active project files from a shared network folder, extracts the required data ranges using named ranges and structured references, and consolidates everything into standardized report templates.',
      'The system validates data as it pulls, checking for missing values, out-of-range numbers, and formula errors in source files. It flags any issues in a log sheet so the user can address problems before reports go out. The calculation engine handles all budget vs. actual comparisons, variance analysis, and trend calculations automatically.',
      'I also added automated email distribution using Outlook integration. Once reports are generated, the system creates formatted PDF attachments and sends them to the correct recipients based on a distribution list. The entire process, from clicking the "Generate Reports" button to emails landing in inboxes, takes about 30 seconds.',
    ],
    outcome:
      'The weekly reporting process dropped from 6 hours to 30 seconds. The firm saves approximately $15,000 per year in labor costs. Report accuracy improved to near-perfect since manual copy-paste errors were eliminated. The staff member who previously spent Friday afternoons on reports now uses that time for project coordination and cost analysis.',
    metrics: [
      { label: 'Time Reduction', value: '6 hrs → 30 sec' },
      { label: 'Annual Savings', value: '$15,000' },
      { label: 'Report Errors', value: 'Zero' },
      { label: 'Project Files Processed', value: '8-12' },
      { label: 'ROI Payback', value: '3 months' },
    ],
    testimonial: {
      quote:
        'Our construction tracking reports used to take all Friday afternoon. Now the same weekly package runs in 30 seconds with zero copy-paste errors.',
      attribution: 'Project Director, Construction Firm',
    },
    relatedService: '/excel-automation',
    relatedServiceLabel: 'Excel VBA Automation',
  },

  'financial-services-data-integration': {
    slug: 'financial-services-data-integration',
    title: 'How We Connected Excel to SQL and Eliminated 500 Hours of Annual Data Entry',
    metaTitle: 'Financial Services Data Integration - 500 Hours Saved Per Year | Case Study',
    metaDescription:
      'A financial services company spent 2-3 hours daily on manual data entry between Excel and SQL Server. We built a direct integration that saves 500 hours per year with zero copy-paste errors.',
    industry: 'Financial Services',
    problem: [
      'A financial services firm managed client portfolios using a SQL Server database as their system of record, but analysts needed to work with the data in Excel for daily analysis, reporting, and client communications. Every morning, a team member exported data from SQL Server, cleaned it up in Excel, distributed it to analysts, and at the end of the day, manually entered analysis results back into the database.',
      "This daily round-trip took 2 to 3 hours. The export process alone involved running multiple SQL queries, saving results as CSV files, opening them in Excel, reformatting columns, and fixing data types that got mangled in the export. The re-entry process at day's end was even worse, someone had to manually type analysis results, notes, and updated valuations back into the database, row by row.",
      'Copy-paste errors were a constant problem. Client names got mixed up, decimal points shifted, and data sometimes went into the wrong fields. The firm discovered several instances where incorrect data had been sent to clients in reports. Beyond the errors, the 2-3 hour daily overhead meant analysts had less time for actual analysis, which is what generated revenue.',
    ],
    solution: [
      'I built a custom Excel workbook that connects directly to the SQL Server database using ADO (ActiveX Data Objects) through VBA. The workbook pulls live data from the database on demand, no exports, no CSV files, no reformatting. Analysts click a "Refresh Data" button and get current client data in properly formatted Excel tables within seconds.',
      'For the write-back process, I created a structured input form within Excel where analysts enter their analysis results, notes, and updated valuations. When they click "Submit," the VBA code validates all entries, checks for data type mismatches and out-of-range values, and then writes the data directly to the appropriate SQL Server tables using parameterized queries to prevent SQL injection.',
      "I also built a reconciliation feature that compares the Excel working data against the database at the end of each day, flagging any discrepancies. This catches any issues before they propagate. The entire system includes detailed logging so there's a complete audit trail of every data read and write operation.",
    ],
    outcome:
      'The daily data round-trip dropped from 2-3 hours to about 5 minutes. Over a year, the firm saves approximately 500 hours of manual data entry and cleanup. Copy-paste errors were completely eliminated since data flows directly between Excel and SQL Server without human transcription. The audit trail has also satisfied compliance requirements that were previously met with manual logs.',
    metrics: [
      { label: 'Daily Time Saved', value: '2-3 hours' },
      { label: 'Annual Hours Saved', value: '500+' },
      { label: 'Data Entry Errors', value: 'Zero' },
      { label: 'Data Refresh Time', value: '< 10 seconds' },
      { label: 'Compliance Audit Trail', value: 'Automated' },
    ],
    testimonial: {
      quote:
        'He connected our Excel workbooks directly to SQL Server. Daily data entry dropped from 2–3 hours to about 5 minutes, over 500 hours saved per year with no transcription errors.',
      attribution: 'Managing Director, Financial Services Firm',
    },
    relatedService: '/excel-automation',
    relatedServiceLabel: 'Excel VBA Automation',
  },

  'distribution-slow-spreadsheet': {
    slug: 'distribution-slow-spreadsheet',
    title: 'How We Fixed a 50MB Excel File That Took 5 Minutes to Open',
    metaTitle: 'Distribution Company Excel Optimization - 5 Minutes to 10 Seconds | Case Study',
    metaDescription:
      'A distribution company had a 50MB Excel file that took 5 minutes to open and crashed regularly. We optimized the file structure and moved data to Access, cutting load time to 10 seconds.',
    industry: 'Distribution',
    problem: [
      'A distribution company used a single Excel workbook as their central operations file. Over several years, it had grown to 50MB, packed with tens of thousands of rows of historical order data, hundreds of formulas, conditional formatting rules, pivot tables, and multiple linked sheets. Opening the file took over 5 minutes. Any calculation change triggered a recalculation that froze Excel for 30 seconds to a minute.',
      "The file crashed at least once a week, sometimes more. When it crashed, the most recent changes were usually lost because auto-recovery couldn't handle the file size reliably. Staff had stopped adding new data analysis features they needed because every addition made the file slower. They were afraid to change anything for fear of making it worse.",
      'The company had considered switching to a different system entirely, but their entire workflow, order tracking, inventory levels, vendor management, and executive dashboards, was built around this one file. The cost and disruption of migrating to an enterprise system was prohibitive for a company their size.',
    ],
    solution: [
      "I performed a thorough analysis of the workbook to identify what was consuming space and processing time. The biggest culprits were: 200,000+ rows of historical data that didn't need to be in the active workbook, thousands of volatile formulas (INDIRECT, OFFSET) that forced full recalculation on every change, excessive conditional formatting applied to entire columns instead of data ranges, and orphaned named ranges and unused objects bloating the file.",
      'I designed a two-part architecture: an Access database to store all historical and reference data, and a lean Excel workbook for active analysis and dashboards. I migrated historical order data, vendor information, and product catalogs into properly structured Access tables with appropriate indexes. The Excel workbook now pulls only the data it needs from Access using queries, keeping the working dataset small and fast.',
      'I rewrote the critical formulas to eliminate volatile functions, replacing INDIRECT and OFFSET with INDEX/MATCH combinations and structured table references. I cleaned up conditional formatting to apply only to actual data ranges. I rebuilt the pivot tables to reference the Access backend, so they refresh quickly without loading all historical data into memory.',
    ],
    outcome:
      "The Excel file now opens in about 10 seconds instead of 5 minutes. Calculations that used to freeze the screen for 30+ seconds now complete instantly. The file hasn't crashed once since the optimization. The team can now add new analysis features and dashboards without worrying about performance degradation, and they have access to all their historical data through the Access backend.",
    metrics: [
      { label: 'Open Time', value: '5 min → 10 sec' },
      { label: 'File Size', value: '50MB → 4MB' },
      { label: 'Crashes', value: 'Zero' },
      { label: 'Calc Speed', value: 'Instant' },
      { label: 'Historical Data', value: 'Fully preserved' },
    ],
    testimonial: {
      quote:
        'Our main Excel file went from unusable to lightning fast. We can finally add the reports we need without worrying about crashes. The team understood exactly what was slowing us down and fixed every issue.',
      attribution: 'Operations Manager, Distribution Company',
    },
    relatedService: '/excel-automation',
    relatedServiceLabel: 'Excel VBA Automation',
  },

  'retail-pricing-system': {
    slug: 'retail-pricing-system',
    title: 'How We Automated Complex Pricing Calculations for a Multi-Location Retail Chain',
    metaTitle: 'Retail Pricing Automation - Eliminated Manual Pricing Errors | Case Study',
    metaDescription:
      'A retail chain with complex pricing rules across product types, customer tiers, and promotions was calculating prices manually. We built an automated Excel + Access pricing system that eliminated errors and saves hours daily.',
    industry: 'Retail',
    problem: [
      'A retail chain with multiple locations had a complex pricing structure that depended on product category, order quantity, customer tier (wholesale, preferred, standard), seasonal promotions, and regional adjustments. With hundreds of product SKUs and dozens of pricing rules, calculating the correct price for any given order was a manual process that required looking up multiple tables and applying layered discounts.',
      "Staff at each location had printed pricing sheets that were updated monthly, but the sheets were frequently out of date. When a customer asked for a quote on a large order, the sales team had to manually calculate tiered discounts, check for active promotions, verify the customer's tier status, and apply any regional adjustments. This process took 15 to 30 minutes per quote and was highly error-prone.",
      'Pricing mistakes were costing the company real money. Undercharging on large orders cut into margins, while overcharging led to lost customers. The company estimated pricing errors were costing them $30,000 to $50,000 annually in margin loss and customer attrition combined. They needed a system that could handle the complexity without relying on staff to remember every rule.',
    ],
    solution: [
      'I built an Access database that serves as the central pricing rules engine. All pricing rules, base prices, tier discounts, quantity breaks, promotional rates, and regional adjustments, are stored in structured tables that managers can update through simple forms. When a rule changes, it takes effect immediately across all locations.',
      "I created an Excel-based front-end interface that connects to the Access pricing database. Sales staff enter the product, quantity, customer name, and location. The system automatically looks up the customer's tier, applies the correct base price, calculates quantity discounts, checks for active promotions, and applies regional adjustments. The final price appears in seconds with a full breakdown showing each discount applied.",
      'The system also generates professional quotes as formatted PDF documents that can be emailed directly to customers. I added an audit log that records every price calculation, so management can review pricing patterns, identify margin issues, and verify that rules are being applied correctly. The entire system runs on their existing Excel and Access infrastructure with no additional software costs.',
    ],
    outcome:
      'Pricing calculations that took 15-30 minutes now complete in seconds. Pricing errors have been virtually eliminated since the system enforces all business rules automatically. Managers can update pricing rules in one central location and changes propagate instantly. The company estimates the system prevents $30,000-$50,000 in annual losses from pricing errors, and sales staff can now generate professional quotes while the customer is still on the phone.',
    metrics: [
      { label: 'Quote Time', value: '30 min → seconds' },
      { label: 'Pricing Errors', value: 'Near zero' },
      { label: 'Annual Loss Prevented', value: '$30-50K' },
      { label: 'Rule Updates', value: 'Instant' },
      { label: 'Locations Served', value: 'All' },
    ],
    testimonial: {
      quote:
        'Pricing used to be our biggest headache. Now it takes seconds and the price is always right. We can update rules in one place and every location gets the change immediately. It paid for itself in the first month.',
      attribution: 'Regional Manager, Retail Chain',
    },
    relatedService: '/access-consulting',
    relatedServiceLabel: 'Access Database Consulting',
  },

  'access-sql-migration-enterprise': {
    slug: 'access-sql-migration-enterprise',
    title: 'How We Migrated a 50-User Access System to SQL Server With Zero Data Loss',
    metaTitle: 'Access to SQL Migration Case Study - 50 Users, Zero Data Loss',
    metaDescription:
      'A growing company hit Access limits with 50 users and a 1.8GB database. We migrated to SQL Server with zero data loss, improved performance, and kept the Access front-end familiar to staff.',
    industry: 'Distribution',
    problem: [
      'A distribution company had outgrown their Microsoft Access database. Fifty employees across three locations used it daily for orders, inventory, and customer management. The file approached the 2GB limit, queries took minutes to run, and corruption incidents increased to several per month.',
      'IT leadership knew they needed to move to SQL Server but feared losing years of business logic embedded in Access forms, reports, and VBA. Previous vendors quoted six-month timelines and full application rewrites that would disrupt operations.',
      'Users were frustrated. Management could not get reliable reports during peak season. Every corruption event meant hours of downtime and manual data reconciliation.',
    ],
    solution: [
      'I designed a phased migration: SQL Server backend on their existing infrastructure, Access front-end retained so users kept familiar screens. I migrated all tables, relationships, and indexes with validation scripts comparing row counts and checksums before cutover.',
      'Heavy queries and reports were rewritten to run against linked SQL tables with optimized indexes. I implemented a split architecture with the backend on SQL Server and front-end files distributed to each location.',
      'Cutover happened over a weekend: final sync, DNS/path updates, and smoke testing with power users before Monday opening. Rollback plan was documented but not needed.',
    ],
    outcome:
      'Migration completed in 8 weeks with zero data loss. Report runtimes dropped from 4–6 minutes to under 15 seconds. Corruption incidents stopped entirely. All 50 users continued working in Access forms while the backend scaled on SQL Server.',
    metrics: [
      { label: 'Users Migrated', value: '50' },
      { label: 'Data Loss', value: 'Zero' },
      { label: 'Report Speed', value: '4 min → 15 sec' },
      { label: 'Timeline', value: '8 weeks' },
      { label: 'Downtime', value: 'Weekend only' },
    ],
    testimonial: {
      quote:
        'We were terrified of losing our Access workflows. Robert Terry moved us to SQL Server without disrupting the team. Reports that took minutes now run in seconds.',
      attribution: 'IT Director, Distribution Company',
    },
    relatedService: '/database-migration',
    relatedServiceLabel: 'Access Database Migration',
  },

  'distribution-warehouse-pick-list': {
    slug: 'distribution-warehouse-pick-list',
    title: 'How We Cut Warehouse Pick Time 40% With an Access Order Fulfillment System',
    metaTitle: 'Distribution Warehouse Pick List Case Study | 40% Faster Picks',
    metaDescription:
      'A regional distributor replaced paper pick lists with a multi-user Access system. Pick accuracy improved and fulfillment time dropped 40%.',
    industry: 'Distribution',
    problem: [
      'A regional distributor fulfilled 200+ orders daily from a single warehouse. Pickers used printed lists from Excel exports. Wrong items, missed lines, and re-picks slowed the loading dock.',
      'Supervisors re-printed lists when inventory changed intraday. There was no live view of order status for customer service.',
    ],
    solution: [
      'I built a split Access database linked to their existing product table. Handheld-ready pick forms filtered by route and priority. Barcode fields reduced SKU entry errors.',
      'Status flags updated in real time so customer service could see Shipped, Picking, or Hold without calling the warehouse.',
    ],
    outcome:
      'Average pick time per order dropped 40%. Re-picks fell from 8% of lines to under 2%. Customer service call volume about order status dropped noticeably in the first month.',
    metrics: [
      { label: 'Pick Time', value: '-40%' },
      { label: 'Re-pick Rate', value: '8% → 2%' },
      { label: 'Daily Orders', value: '200+' },
      { label: 'Users', value: '12 pickers' },
      { label: 'Go-Live', value: '3 weeks' },
    ],
    testimonial: {
      quote:
        'Pickers stopped chasing paper. We see status live and the dock clears faster every afternoon.',
      attribution: 'Warehouse Manager, Regional Distributor',
    },
    relatedService: '/access-consulting',
    relatedServiceLabel: 'Access Database Development',
  },

  'construction-job-costing-tracker': {
    slug: 'construction-job-costing-tracker',
    title: 'Construction Job Costing Tracker: Same-Day WIP Instead of Friday Spreadsheets',
    metaTitle: 'Construction Job Costing Case Study | Same-Day WIP Reports',
    metaDescription:
      'A construction firm replaced spreadsheet job costing with Access. Work-in-progress reports available same day instead of end-of-week.',
    industry: 'Construction',
    problem: [
      'Project managers tracked job costs in separate Excel files per job. Finance rolled up WIP every Friday, so field decisions ran on stale numbers.',
      'Change orders were logged in email and often missed in the weekly rollup.',
    ],
    solution: [
      'I built an Access database with jobs, cost codes, commitments, and actuals imported from accounting CSV. PMs enter change orders once; reports refresh on demand.',
      'Standard WIP and job P&L reports replaced the manual consolidation workbook.',
    ],
    outcome:
      'WIP available same day instead of five days late. Finance cut weekly rollup from 6 hours to under 30 minutes. PMs catch budget overruns earlier in the job cycle.',
    metrics: [
      { label: 'WIP Lag', value: '5 days → same day' },
      { label: 'Weekly Rollup', value: '6 hrs → 30 min' },
      { label: 'Active Jobs', value: '35+' },
      { label: 'Users', value: '8 PMs + finance' },
    ],
    testimonial: {
      quote:
        'We finally see job margin while the crew is still on site, not after the weekend close.',
      attribution: 'Controller, Regional Construction Firm',
    },
    relatedService: '/access-consulting',
    relatedServiceLabel: 'Access Database Development',
  },

  'healthcare-records-access-sql-migration': {
    slug: 'healthcare-records-access-sql-migration',
    title: 'Healthcare Records: 30-User Access System Migrated to SQL Server Over One Weekend',
    metaTitle: 'Healthcare Access to SQL Migration | 30 Users, Weekend Cutover',
    metaDescription:
      'A clinic network migrated patient scheduling and records indexing from Access to SQL Server with weekend-only downtime and zero record loss.',
    industry: 'Healthcare',
    problem: [
      'A clinic network used a 1.6GB Access database for scheduling and internal records indexing. Thirty staff across two locations caused daily locking errors and monthly corruption events.',
      'Compliance required audit trails and nightly backups IT could not get reliably from a file share database.',
    ],
    solution: [
      'I migrated tables to SQL Server Express on their existing VM, retained Access forms for minimal retraining, and added timestamp triggers for audit logging.',
      'Cutover ran Saturday–Sunday with parallel validation: row counts, sample record checks, and report comparisons before Monday clinics opened.',
    ],
    outcome:
      'Zero records lost. Locking errors eliminated. Report runtime for daily schedule summaries dropped from 3 minutes to 12 seconds. IT gained standard SQL backup jobs.',
    metrics: [
      { label: 'Users', value: '30' },
      { label: 'Downtime', value: 'Weekend only' },
      { label: 'Data Loss', value: 'Zero' },
      { label: 'Report Speed', value: '3 min → 12 sec' },
      { label: 'Corruption Events', value: 'Monthly → none' },
    ],
    testimonial: {
      quote:
        'Staff kept the same screens Monday morning. IT finally has a database they can backup like every other system.',
      attribution: 'IT Manager, Multi-Location Clinic Network',
    },
    relatedService: '/database-migration',
    relatedServiceLabel: 'Access Database Migration',
  },
};

export const CASE_STUDY_ALIASES = {
  'manufacturing-automation': 'manufacturing-inventory-tracking',
  'finance-close-automation': 'financial-services-data-integration',
  'operations-consolidation': 'construction-automated-reporting',
};

for (const [alias, primarySlug] of Object.entries(CASE_STUDY_ALIASES)) {
  const primary = CASE_STUDIES[primarySlug];
  if (primary) {
    CASE_STUDIES[alias] = {
      ...primary,
      slug: alias,
      canonicalSlug: primarySlug,
    };
  }
}

export function resolveCaseStudySlug(slug) {
  return slug.replace(/\.html$/i, '');
}

export const CANONICAL_CASE_STUDY_SLUGS = Object.keys(CASE_STUDIES).filter(
  (slug) => !CASE_STUDY_ALIASES[slug],
);

export const ALL_CASE_STUDY_SLUGS = CANONICAL_CASE_STUDY_SLUGS;
