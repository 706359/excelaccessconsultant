export const PRICING_HOW_IT_WORKS = [
  {
    title: 'Free Consultation',
    description:
      'We review your process, files, and goals in a 15–30 minute call. No pressure. Just an honest assessment of what can be fixed or built.',
  },
  {
    title: 'Fixed-Price Quote',
    description:
      'Within 24–48 hours you receive a written quote with scope, timeline, deliverables, and exact cost. No hourly billing surprises.',
  },
  {
    title: 'Build & Deliver',
    description:
      'I develop in a test environment, share progress updates, and hand off working code with documentation and training.',
  },
  {
    title: 'You Own Everything',
    description:
      '100% code ownership. No licenses, no lock-in, no recurring fees. Optional support after delivery if you need updates.',
  },
];

export const PRICING_INCLUDED = [
  'Written documentation tailored to your team',
  'Live training walkthrough',
  '100% source code ownership',
  '30-day post-delivery warranty',
  'Fixed price quoted before work begins',
  'Work done in your IT environment. Your data stays secure',
];

export const GENERAL_PROJECT_TIERS = [
  {
    name: 'Simple Projects',
    price: '$1,500–$3,000',
    description: 'Single process, focused scope, typically 1–3 weeks',
    features: [
      'One primary workflow or fix',
      'Basic VBA macros or database work',
      'Standard reporting or forms',
      'Documentation included',
    ],
    highlighted: false,
  },
  {
    name: 'Advanced Projects',
    price: '$3,000–$8,000',
    description: 'Multi-step workflows, integrations, typically 3–6 weeks',
    features: [
      'Complex logic or multi-user systems',
      'Multi-file or multi-table processing',
      'Dashboards, queries, or advanced reports',
      'System integration',
      'Full documentation & training',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise Projects',
    price: '$8,000+',
    description: 'Large systems, migrations, or multi-department scope, 6+ weeks',
    features: [
      'Full system design or migration',
      'SQL Server / cloud integration',
      'Multi-user or multi-location rollout',
      'Team walkthrough and written guides',
      'Extended support options',
    ],
    highlighted: false,
  },
];

export const SERVICE_PRICING = [
  {
    slug: 'excel-automation',
    href: '/excel-automation',
    title: 'Excel VBA Automation',
    intro:
      'Automate reporting, consolidation, imports, and repetitive Excel workflows. Most projects fall in the standard tiers below.',
    variant: 'excel',
    tiers: [
      {
        name: 'Simple Automation',
        price: '$1,500–$3,000',
        description: 'Single process, 1–2 weeks',
        features: [
          'Single process automation',
          'Basic VBA macros',
          'Simple reporting',
          'Documentation included',
        ],
        highlighted: false,
      },
      {
        name: 'Advanced Automation',
        price: '$3,000–$8,000',
        description: 'Complex workflows, 3–6 weeks',
        features: [
          'Complex workflows',
          'Multi-file processing',
          'Advanced dashboards',
          'System integration',
          'Full documentation',
        ],
        highlighted: true,
      },
      {
        name: 'Enterprise Automation',
        price: '$8,000+',
        description: 'Full integration, 6+ weeks',
        features: [
          'Full system integration',
          'Custom database connections',
          'Multi-user systems',
          'Team walkthrough and written guides',
          'Extended support',
        ],
        highlighted: false,
      },
    ],
  },
  {
    slug: 'vba-development',
    href: '/vba-development',
    title: 'VBA Development',
    intro:
      'Custom macros, user forms, and Excel applications: built from scratch or repaired when existing code breaks.',
    variant: 'excel',
    tiers: [
      {
        name: 'Simple VBA',
        price: '$1,500–$3,000',
        description: 'Basic macros, 1–2 weeks',
        features: [
          'Simple VBA macros',
          'Basic automation',
          'Code documentation',
          'Training included',
        ],
        highlighted: false,
      },
      {
        name: 'Advanced VBA',
        price: '$3,000–$8,000',
        description: 'Complex scripts & forms, 2–4 weeks',
        features: [
          'Complex VBA applications',
          'User forms & interfaces',
          'Database integration',
          'Performance optimization',
          'Full documentation',
        ],
        highlighted: true,
      },
      {
        name: 'Enterprise VBA',
        price: '$8,000+',
        description: 'Complete applications, 4–8 weeks',
        features: [
          'Complete Excel applications',
          'Add-in development',
          'System integration',
          'Team walkthrough and written guides',
          'Extended support',
        ],
        highlighted: false,
      },
    ],
  },
  {
    slug: 'financial-modeling',
    href: '/financial-modeling',
    title: 'Financial Modeling',
    intro:
      'Forecasting, budgeting, and scenario models: structured, documented, and ready for stakeholders.',
    variant: 'excel',
    tiers: [
      {
        name: 'Simple Models',
        price: '$1,500–$3,000',
        description: 'Single business unit, 2–3 weeks',
        features: [
          'Single business unit model',
          'Basic forecasting',
          'Standard reports',
          'Documentation included',
        ],
        highlighted: false,
      },
      {
        name: 'Advanced Models',
        price: '$3,000–$8,000',
        description: 'Multi-department, 4–6 weeks',
        features: [
          'Multi-department models',
          'Scenario analysis',
          'Advanced dashboards',
          'Performance optimization',
          'Full documentation',
        ],
        highlighted: true,
      },
      {
        name: 'Enterprise Models',
        price: '$8,000+',
        description: 'Multi-entity, 6–10 weeks',
        features: [
          'Multi-entity and scenario models',
          'System integration',
          'Custom business logic',
          'Team walkthrough and written guides',
          'Extended support',
        ],
        highlighted: false,
      },
    ],
  },
  {
    slug: 'access-consulting',
    href: '/access-consulting',
    title: 'Access Database Consulting',
    intro:
      'Design, rebuild, and optimize Microsoft Access databases for reliable multi-user operations.',
    variant: 'access',
    tiers: [
      {
        name: 'Simple Database',
        price: '$1,500–$3,000',
        description: 'Single-user, 2–3 weeks',
        features: [
          'Simple database design',
          'Basic forms and reports',
          'Single-user system',
          'Documentation included',
        ],
        highlighted: false,
      },
      {
        name: 'Advanced Database',
        price: '$3,000–$8,000',
        description: 'Multi-user, 4–6 weeks',
        features: [
          'Multi-user database',
          'Complex forms and queries',
          'Advanced reporting',
          'Performance optimization',
          'Full documentation',
        ],
        highlighted: true,
      },
      {
        name: 'Enterprise Database',
        price: '$8,000+',
        description: 'Large systems, 6–10 weeks',
        features: [
          'Large multi-user systems',
          'SQL Server migration path',
          'System integration',
          'Team walkthrough and written guides',
          'Extended support',
        ],
        highlighted: false,
      },
    ],
  },
  {
    slug: 'access-database-repair',
    href: '/access-database-repair',
    title: 'Access Database Repair',
    intro:
      'Fix corruption, recover data, and stop crashes: with a fixed-price quote before any repair work begins.',
    variant: 'access',
    tiers: [
      {
        name: 'Simple Repair',
        price: '$1,500–$3,000',
        description: 'Single-user corruption, 1–2 weeks',
        features: [
          'Corruption diagnosis & recovery',
          'Compact & repair damaged files',
          'Basic stability fixes',
          'Documentation included',
        ],
        highlighted: false,
      },
      {
        name: 'Advanced Repair',
        price: '$3,000–$8,000',
        description: 'Multi-user recovery, 2–4 weeks',
        features: [
          'Multi-user conflict resolution',
          'Split database redesign',
          'Query & form recovery',
          'Performance tuning',
          'Full documentation',
        ],
        highlighted: true,
      },
      {
        name: 'Rebuild + Repair',
        price: '$8,000+',
        description: 'Full redesign when repair is not enough',
        features: [
          'Complete database rebuild',
          'Data migration & validation',
          'Multi-user architecture',
          'Team walkthrough and written guides',
          'Extended support',
        ],
        highlighted: false,
      },
    ],
  },
  {
    slug: 'database-migration',
    href: '/database-migration',
    title: 'Database Migration',
    intro:
      'Access-to-SQL Server and cloud migrations with zero data loss and minimal disruption to daily operations.',
    variant: 'access',
    tiers: [
      {
        name: 'Simple Migration',
        price: '$3,000–$5,000',
        description: 'Small databases, 3–4 weeks',
        features: [
          'Small database migration',
          'Basic table migration',
          'Data validation',
          'Documentation included',
        ],
        highlighted: false,
      },
      {
        name: 'Advanced Migration',
        price: '$5,000–$12,000',
        description: 'Medium systems, 5–8 weeks',
        features: [
          'Medium database migration',
          'Query & form migration',
          'Report migration',
          'Performance optimization',
          'Full documentation',
        ],
        highlighted: true,
      },
      {
        name: 'Enterprise Migration',
        price: '$12,000+',
        description: 'Large systems, 8–12 weeks',
        features: [
          'Large database migration',
          'Complete system migration',
          'Cloud migration (Azure)',
          'Team walkthrough and written guides',
          'Extended support',
        ],
        highlighted: false,
      },
    ],
  },
];

export const PRICING_FAQS = [
  {
    question: 'Are these prices exact or estimates?',
    answer:
      'These are typical ranges based on 500+ projects. Every quote is fixed-price and tailored to your scope after a free consultation. You know the exact cost before work begins.',
  },
  {
    question: 'Do you charge hourly?',
    answer:
      'No. I quote fixed prices for defined scope. Hourly billing creates surprises. Fixed pricing aligns our incentives and gives you budget certainty.',
  },
  {
    question: 'What affects the final price?',
    answer:
      'Scope complexity, number of data sources, multi-user requirements, integrations (SQL, APIs, email), and timeline urgency. Simple single-process work stays in the lower tier; migrations and enterprise systems are higher.',
  },
  {
    question: 'Is a deposit required?',
    answer:
      'For most projects, work begins after you approve the written quote. Payment terms are outlined in the proposal, typically milestone-based for larger projects.',
  },
  {
    question: 'What if the scope changes mid-project?',
    answer:
      'We discuss changes openly. If scope expands, I provide an updated fixed-price quote before additional work starts. No surprise invoices.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer:
      'Yes. A 30-day warranty is included. After that, you can request ad-hoc fixes or set up a maintenance arrangement for updates and enhancements.',
  },
];
