/** Service-specific How It Works steps keyed by service slug */
export const SERVICE_PROCESS_STEPS = {
  'access-consulting': [
    {
      title: 'Free Consultation (15–30 minutes)',
      description:
        'We walk through your Access file, user count, and crash history. I identify whether the fix is repair, split architecture, or a controlled rebuild.',
    },
    {
      title: 'Fixed-Price Quote (within 48 hours)',
      description:
        'You get scope, timeline, and a fixed price. No hourly billing on the build. I work in a test copy so production stays safe.',
    },
    {
      title: 'Database Build or Repair',
      description:
        'I split front-end and back-end, optimize queries, fix locking, and harden VBA error handling. Multi-user testing runs before go-live.',
    },
    {
      title: 'Training & Handoff',
      description:
        'Your team gets a walkthrough, written guides, and documented backup routines. You own 100% of the database files.',
    },
    {
      title: 'Ongoing Support (optional)',
      description:
        'Maintenance plans for compact schedules, user additions, and feature requests as your operation grows.',
    },
  ],
  'access-database-repair': [
    {
      title: 'Emergency Assessment',
      description:
        'You send the corrupt file or grant remote access. I determine whether Compact and Repair is enough or full recovery is needed.',
    },
    {
      title: 'Fixed-Price Repair Quote',
      description:
        'Clear quote for recovery, structural fixes, and stabilization. If rebuild is smarter, I say so upfront with a separate fixed price.',
    },
    {
      title: 'Data Recovery & Repair',
      description:
        'I recover tables, relationships, and queries where possible. Corrupt objects are rebuilt. Backups verified before handoff.',
    },
    {
      title: 'Stabilization & Prevention',
      description:
        'Split architecture, backup routines, and maintenance checklist so the same corruption does not repeat next month.',
    },
    {
      title: 'Follow-Up Support',
      description: 'Available for tuning after repair if user load or network conditions change.',
    },
  ],
  'excel-automation': [
    {
      title: 'Free Consultation (15–30 minutes)',
      description:
        'We map your manual Excel steps: data sources, report layout, and who runs it each week. I flag what VBA can automate reliably.',
    },
    {
      title: 'Fixed-Price Quote (within 48 hours)',
      description:
        'Detailed quote with deliverables, test plan, and fixed price. You know the cost before any build work starts.',
    },
    {
      title: 'Build & Test in Sandbox',
      description:
        'I build macros against copies of your files. You review output on real data before anything touches production.',
    },
    {
      title: 'Training & Delivery',
      description:
        'Documentation and a live walkthrough for your team. Full VBA source code delivered. No licenses or recurring fees.',
    },
    {
      title: 'Ongoing Support (optional)',
      description:
        'Updates when Excel versions change, new data sources appear, or report formats shift.',
    },
  ],
  'database-migration': [
    {
      title: 'Migration Readiness Review',
      description:
        'I audit user count, file size, query load, and business-critical workflows. Sometimes optimization beats migration; I will tell you honestly.',
    },
    {
      title: 'Migration Plan & Fixed Quote',
      description:
        'Phased plan: schema design, data validation rules, cutover window, and rollback steps. Fixed price before work begins.',
    },
    {
      title: 'SQL Server Setup & Data Transfer',
      description:
        'Back-end on SQL Server (or Azure SQL), Access front-end re-linked and tested. Row counts and spot checks validated.',
    },
    {
      title: 'Parallel Testing & Cutover',
      description:
        'Side-by-side runs with production users. Cutover scheduled for low-traffic window with support on standby.',
    },
    {
      title: 'Post-Migration Support',
      description:
        'Training for IT and power users. Performance tuning and report fixes in the first weeks after go-live.',
    },
  ],
  'vba-development': [
    {
      title: 'Scope the Macro or Module',
      description:
        'We review broken code, error messages, and what the macro should do. I estimate repair vs rewrite.',
    },
    {
      title: 'Fixed-Price Quote',
      description:
        'Quote covers debugging, new modules, user forms, or full tool builds. Timeline included.',
    },
    {
      title: 'Develop & Unit Test',
      description:
        'Code written with error handling and logging. Tested against edge cases your team hits in daily use.',
    },
    {
      title: 'Documentation & Training',
      description:
        'Commented source, quick-start guide, and walkthrough for maintainers on your staff.',
    },
    {
      title: 'Maintenance (optional)',
      description: 'Retainer or per-request support when Office updates or business rules change.',
    },
  ],
  'financial-modeling': [
    {
      title: 'Model Review Call',
      description:
        'We walk through your current workbook: recalc time, scenario needs, and audit requirements.',
    },
    {
      title: 'Fixed-Price Scope',
      description:
        'Quote for build, audit, or optimization. Deliverables list every sheet, scenario, and output report.',
    },
    {
      title: 'Build or Audit',
      description:
        'Structured tabs, consistent formulas, assumption tracking, and performance tuning for large models.',
    },
    {
      title: 'Stakeholder Walkthrough',
      description:
        'Finance team training on scenarios, inputs, and how to extend the model without breaking it.',
    },
    {
      title: 'Support (optional)',
      description:
        'Quarterly reviews or updates when your chart of accounts or reporting format changes.',
    },
  ],
};
