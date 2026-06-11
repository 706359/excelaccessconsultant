export const FAQ_SECTIONS = [
  {
    id: 'working-together',
    title: 'Working Together',
    description:
      'Who I work with, how we collaborate, and what makes custom Excel and Access work different.',
    items: [
      {
        question: 'What types of businesses do you work with?',
        answer:
          'Small to mid-size businesses across industries: manufacturing, finance, construction, distribution, and healthcare. If your team depends on Excel and Access daily, I can likely help.',
      },
      {
        question: 'Do you offer remote services?',
        answer:
          'Yes. I work remotely with screen sharing and secure file transfer. I serve clients nationwide and have worked remotely long before it became standard.',
      },
      {
        question: 'Can you help with urgent or time-sensitive projects?',
        answer:
          'Often, yes. Planning ahead is ideal, but if you have an Access emergency or a broken Excel workflow, reach out. I will tell you honestly what is possible and how fast.',
      },
      {
        question: 'What makes your solutions different from off-the-shelf software?',
        answer:
          'I build for your process, not a generic one. Solutions plug into what you already use, do exactly what you need, and can evolve as you grow without bloat or vendor lock-in.',
      },
    ],
  },
  {
    id: 'projects-pricing',
    title: 'Projects & Pricing',
    description: 'Timelines, quotes, and how new work fits with your existing files and databases.',
    items: [
      {
        question: 'How long does a typical project take?',
        answer:
          'Simple Excel automations often take 1–2 weeks. Access database work and larger integrations may take 3–6 weeks. You get a realistic timeline and fixed price before build work starts.',
      },
      {
        question: 'What is your pricing model?',
        answer:
          'Build projects are fixed-price after a free consultation and scope review. Advisory and diagnostic work is $90/hour. You know the cost before I start. No hourly billing surprises on builds.',
      },
      {
        question: 'Can you work with our existing systems and data?',
        answer:
          'Yes. Most of my work improves what you already have. I review your current Excel files and Access databases and design solutions that fit your environment and team.',
      },
    ],
  },
  {
    id: 'delivery-support',
    title: 'Delivery & Support',
    description: 'Training, documentation, ongoing help, and how I handle data security.',
    items: [
      {
        question: 'Do you provide training for the solutions you build?',
        answer:
          'Yes. Every project includes documentation and a walkthrough so your team knows how to use and maintain the system. You should not need me for everyday tasks after handoff.',
      },
      {
        question: 'What kind of support do you offer after project completion?',
        answer:
          'I include 30 days of post-delivery support for questions and minor adjustments. After that, ongoing help is available at my advisory rate or as a scoped follow-on project.',
      },
      {
        question: 'How do you ensure data security and privacy?',
        answer:
          'Work happens in your IT environment. Your data does not leave your firewall. I follow access-control best practices and can work within your compliance requirements and NDAs.',
      },
    ],
  },
];

export const FAQ_PAGE_ITEMS = FAQ_SECTIONS.flatMap((section) => section.items);

export const FAQ_RELATED_LINKS = [
  {
    num: '01',
    industry: 'Contact',
    title: 'Book a Consultation',
    outcome: 'Free 30-minute call. Fixed-price quote within 48 hours.',
    href: '/contact',
    accent: 'primary',
  },
  {
    num: '02',
    industry: 'Pricing',
    title: 'Project Pricing',
    outcome: 'Typical ranges for Excel automation and Access database work.',
    href: '/pricing',
    accent: 'secondary',
  },
  {
    num: '03',
    industry: 'Free',
    title: 'Free Resources',
    outcome: 'Checklists and guides for Excel and Access teams.',
    href: '/free-checklist',
    accent: 'primary',
  },
];
