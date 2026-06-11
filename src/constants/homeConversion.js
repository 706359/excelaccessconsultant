import { CONSULTANTS } from './site';

export const HERO_AUTHORITY = {
  name: CONSULTANTS.displayName,
  title: CONSULTANTS.title,
  credentials: '20+ years on Excel, Access, VBA & SQL Server · 500+ projects · remote USA',
};

export const HERO_PROOF_OUTCOMES = [
  {
    label: 'Reporting automation',
    before: '4 hrs',
    after: '15 min',
    href: '/case-studies/construction-automated-reporting',
  },
  {
    label: 'Inventory management',
    before: '5 crashes/wk',
    after: '0 crashes',
    href: '/case-studies/manufacturing-inventory-tracking',
  },
  {
    label: 'Data entry workflows',
    before: 'Manual entry',
    after: 'Automated',
    href: '/case-studies/financial-services-data-integration',
  },
  {
    label: 'Spreadsheet performance',
    before: '5 min open',
    after: '10 sec open',
    href: '/case-studies/distribution-slow-spreadsheet',
  },
];

/** Quick symptom scan below hero: grouped checklist, not scenario cards */
export const HOME_SYMPTOM_GROUPS = [
  {
    id: 'access',
    label: 'Access Database',
    accent: 'secondary',
    symptoms: [
      { label: 'Database crashes on open or during use', href: '/access-database-repair' },
      { label: 'Slow queries and lag with multiple users', href: '/access-consulting' },
      { label: 'Record locking and multi-user conflicts', href: '/access-consulting' },
      { label: 'Corrupted tables or missing data', href: '/access-database-repair' },
    ],
  },
  {
    id: 'excel',
    label: 'Excel & VBA',
    accent: 'primary',
    symptoms: [
      { label: 'Broken macros and VBA runtime errors', href: '/vba-development' },
      { label: 'Manual copy-paste and formatting every week', href: '/excel-automation' },
      { label: 'Reports that take hours to compile', href: '/excel-automation' },
    ],
  },
];

export const HOME_WHY_TEASER = {
  heading: `Why Businesses Choose ${CONSULTANTS.displayName}`,
  description:
    'No agency layers. You talk through the problem with the same person who scopes, builds, and delivers the fix.',
  items: [
    {
      label: 'Direct consultant access',
      detail: `Every call and email goes to ${CONSULTANTS.displayName}. No account managers, no handoffs to junior developers.`,
    },
    {
      label: 'Fixed-price estimates',
      detail:
        'Scope, timeline, and cost written up before build work starts, usually within 48 hours of the first call.',
    },
    {
      label: '20+ years on the Microsoft stack',
      detail:
        'Multi-user Access design, SQL Server migrations, and Excel VBA that still runs years later. Not generalist IT support.',
    },
  ],
  anchor: '#about',
  ctaLabel: 'See how I work →',
};

export const HOME_SYMPTOM_SCAN_DESC =
  'If two or more apply, the root cause is usually fixable: bad table design, a corrupt file, or a report held together with copy-paste.';
