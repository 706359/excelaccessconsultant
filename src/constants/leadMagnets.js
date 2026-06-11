export const LEAD_MAGNETS = [
  {
    id: 'access-database-health-check',
    title: 'Access Database Health Check',
    subtitle: '15-point stability assessment',
    description:
      'Assess whether your Microsoft Access database is stable, secure, and ready to scale, or headed for a crash.',
    category: 'Access Database',
    accent: 'secondary',
    downloadPath: '/downloads/access-database-health-check.html',
    features: [
      'Multi-user stability checks',
      'Backup and recovery readiness',
      'Performance and bloat warning signs',
      'When to repair vs migrate to SQL Server',
    ],
    serviceHref: '/access-database-repair',
    serviceLabel: 'Access database repair',
  },
  {
    id: 'excel-automation-readiness-checklist',
    title: 'Excel Automation Readiness Checklist',
    subtitle: '15-point process audit',
    description:
      'Score your spreadsheets and workflows to see which manual Excel tasks are ready for VBA automation.',
    category: 'Excel Automation',
    accent: 'primary',
    downloadPath: '/downloads/excel-automation-readiness-checklist.html',
    features: [
      'Repetitive task identification',
      'Data source and format consistency',
      'Error-prone manual step flags',
      'ROI signals before you hire a developer',
    ],
    serviceHref: '/excel-automation',
    serviceLabel: 'Excel automation services',
  },
  {
    id: 'vba-best-practices-guide',
    title: 'VBA Best Practices Guide',
    subtitle: 'Coding standards & performance',
    description:
      'Practical standards for maintainable Excel VBA: error handling, structure, and performance patterns that survive handoffs.',
    category: 'VBA Development',
    accent: 'primary',
    downloadPath: '/downloads/vba-best-practices-guide.html',
    features: [
      'Module structure and naming conventions',
      'Error handling patterns that actually work',
      'Performance tips for large workbooks',
      'Documentation checklist for your team',
    ],
    serviceHref: '/vba-development',
    serviceLabel: 'VBA development',
  },
];

export const DEFAULT_LEAD_MAGNET_ID = LEAD_MAGNETS[0].id;

export function getLeadMagnetById(id) {
  return LEAD_MAGNETS.find((resource) => resource.id === id) ?? LEAD_MAGNETS[0];
}
