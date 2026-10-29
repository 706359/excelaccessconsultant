import ServicePageTracker from '../../components/Analytics/ServicePageTracker';
import FAQSchema from '../../components/SEO/FAQSchema';
import {
  BenefitsSection,
  MidPageCTA,
  ProblemSection,
  ServiceCapabilitiesSection,
  ServiceFAQSection,
  ServiceFinalCTASection,
  ServiceHeroCTAs,
  ServiceRelatedSection,
  ServiceSidebar,
  ServiceTimelineBox,
  SolutionSection,
} from '../../components/ui/ServicePageSections/ServicePageSections';
import ServiceHowItWorks from '../../components/ui/ServiceHowItWorks/ServiceHowItWorks';
import ServicePricingSection from '../../components/ui/ServicePricingSection/ServicePricingSection';
import { TRUST } from '../../constants/site';

const problems = [
  'Broken macros that nobody knows how to fix',
  'Need custom Excel tools but internal team lacks VBA expertise',
  'Legacy VBA code that is fragile and undocumented',
  'Manual processes that need a reliable programmatic solution',
];

const solutionParagraphs = [
  'I write, fix, and document VBA for Excel and Access: from targeted macro repairs to full custom applications.',
  'You work directly with me. Fixed-price quotes after a scoping call.',
];

const solutionBullets = [
  'Custom macro and module development',
  'Debugging and refactoring legacy VBA',
  'User forms, automation, and API integrations',
];

const benefits = [
  {
    title: 'Expert VBA Code',
    description: '20+ years writing production VBA that runs reliably for years.',
  },
  {
    title: 'Clear Documentation',
    description: 'Commented code and user guides: not black-box macros.',
  },
  {
    title: 'Fast Turnaround',
    description: 'Targeted fixes often completed in days, not weeks.',
  },
  { title: 'Fixed-Price Projects', description: 'Scoped builds quoted upfront.' },
  { title: 'Full Ownership', description: 'You receive all source code.' },
  {
    title: 'Ongoing Maintenance',
    description: 'Available for updates when Excel or business rules change.',
  },
];

const capabilityItems = [
  {
    title: 'Custom VBA Macros',
    desc: 'Macros tailored to your specific workflows. Automate data entry, calculations, formatting, and repetitive tasks. One-click solutions.',
  },
  {
    title: 'Automation Scripts',
    desc: 'Scripts that run complex processes automatically. Multi-file processing, data consolidation, report generation, and workflow automation.',
  },
  {
    title: 'User Forms & Interfaces',
    desc: 'Professional user forms with validation, dropdowns, and controls. Make complex processes simple for your team to use.',
  },
  {
    title: 'Excel Applications',
    desc: 'Complete Excel applications with custom menus, toolbars, and functionality. Turn Excel into a custom business tool.',
  },
  {
    title: 'Database Integration',
    desc: 'Connect Excel to Access, SQL Server, and other databases. Pull data automatically, push results back, and keep data in sync.',
  },
  {
    title: 'Error Handling & Debugging',
    desc: 'Fix broken VBA code, add proper error handling, debug issues, and optimize performance. Make your code reliable and maintainable.',
  },
  {
    title: 'Code Optimization',
    desc: 'Speed up slow VBA code. Optimize loops, reduce calculation overhead, and improve efficiency. Turn minutes into seconds.',
  },
  {
    title: 'API Integration',
    desc: 'Connect Excel to web APIs, REST services, and external data sources. Pull live data, send data, and integrate with cloud services.',
  },
  {
    title: 'Email Automation',
    desc: 'Automatically send emails from Excel. Format reports, attach files, send to multiple recipients, and schedule automated emails.',
  },
  {
    title: 'File Operations',
    desc: 'Automate file operations: open, save, copy, move, rename, and process multiple files. Work with folders and file systems.',
  },
  {
    title: 'Chart & Graph Automation',
    desc: 'Automatically create and update charts. Generate chart images, format charts, and create dashboard visualizations programmatically.',
  },
  {
    title: 'Add-In Development',
    desc: 'Build Excel add-ins that extend Excel functionality. Custom functions, commands, and features available across all workbooks.',
  },
];

const sidebarExamples = [
  {
    href: '/case-studies/retail-pricing-system',
    title: 'Retail: Pricing Automation',
    description: 'Complex pricing rules automated in Excel and Access.',
  },
  {
    href: '/case-studies/construction-automated-reporting',
    title: 'Construction: Reporting Macro',
    description: 'Weekly report generation cut from hours to seconds.',
  },
  {
    href: '/excel-automation',
    title: 'Excel Automation Services',
    description: 'End-to-end process automation beyond single macros.',
  },
];

const processSteps = [
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
];

const timelineBox = {
  timelines: [
    'Simple macros: 1-2 weeks',
    'Medium complexity: 2-4 weeks',
    'Complex applications: 4-8 weeks',
  ],
  provide:
    'Requirements, sample files, access to data sources (if needed), existing code (if fixing)',
  deliver: 'Working VBA code, documentation, training, 100% code ownership',
};

const relatedLinks = [
  {
    href: '/excel-automation',
    title: 'Excel Automation',
    description: 'End-to-end Excel process automation with VBA.',
  },
  {
    href: '/case-studies/retail-pricing-system',
    title: 'Case Study: Pricing System',
    description: 'Automated complex pricing calculations with VBA and Access.',
  },
  {
    href: '/access-consulting',
    title: 'Access Database Consulting',
    description: 'Fix crashes, rebuild databases, and scale for multi-user access.',
  },
];

const serviceFaqs = [
  {
    question: 'What can VBA do in Excel?',
    answer:
      'VBA can automate almost anything in Excel: data processing, report generation, file operations, email sending, database connections, user interfaces, calculations, and more. If you can do it manually in Excel, VBA can automate it.',
  },
  {
    question: 'How long does VBA development take?',
    answer:
      'Simple macros: 1-2 weeks. Medium complexity: 2-4 weeks. Complex applications: 4-8 weeks. Timeline depends on requirements and complexity.',
  },
  {
    question: 'Do I need to know programming to use VBA macros?',
    answer:
      'No. I build user-friendly interfaces with buttons and forms. Your team just clicks a button to run the macro. I provide training and documentation.',
  },
  {
    question: 'Can you fix existing VBA code?',
    answer:
      'Yes. I can debug, optimize, and enhance existing VBA code. I fix errors, improve performance, add features, and refactor code for better maintainability.',
  },
  {
    question: 'What if my Excel version changes?',
    answer:
      'I write VBA code that works across Excel versions (2010, 2013, 2016, 2019, 365). I test compatibility and provide version-specific solutions when needed.',
  },
];

const servicePricingTiers = [
  {
    name: 'Simple Projects',
    price: '$1,500-$3,000',
    description: 'Basic macros, single process, 1-2 weeks',
    features: ['Simple VBA macros', 'Basic automation', 'Code documentation', 'Training included'],
    highlighted: false,
  },
  {
    name: 'Advanced Projects',
    price: '$3,000-$8,000',
    description: 'Complex scripts, user forms, 2-4 weeks',
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
    name: 'Enterprise Projects',
    price: '$8,000+',
    description: 'Complete Excel applications, 4-8 weeks',
    features: [
      'Complete Excel applications',
      'Add-in development',
      'System integration',
      'Team walkthrough and written guides',
      'Extended support',
    ],
    highlighted: false,
  },
];

export default function VBADevelopmentPage() {
  return (
    <div className='page'>
      <ServicePageTracker service='vba-development' />

      <FAQSchema faqs={serviceFaqs} />

      <section className='page-hero'>
        <div className='container'>
          <h1 className='page-hero__title'>Excel VBA Development Services</h1>
          <p className='page-hero__lead'>
            Custom VBA programming for Excel. Build macros, automation scripts, and Excel
            applications. Fix broken code, optimize performance, or build from scratch.{' '}
            {TRUST.years} of VBA experience. {TRUST.projects} VBA projects. Fixed pricing. Free
            consultation.
          </p>
          <ServiceHeroCTAs />
        </div>
      </section>

      <ProblemSection title='The Problem' problems={problems} />
      <SolutionSection
        title='The Solution'
        paragraphs={solutionParagraphs}
        bullets={solutionBullets}
      />
      <BenefitsSection title='Business Benefits' benefits={benefits} />

      <ServiceCapabilitiesSection
        title='What I Develop'
        accent='primary'
        sidebar={
          <ServiceSidebar
            title='Real Examples'
            tagline='6 hours of weekly manual work reduced to 30 seconds.'
            examples={sidebarExamples}
          />
        }
      >
        <div className='grid-2'>
          {capabilityItems.map((item) => (
            <div key={item.title} className='card card--interactive'>
              <h3>{item.title}</h3>
              <p className='text-muted'>{item.desc}</p>
            </div>
          ))}
        </div>
      </ServiceCapabilitiesSection>

      <ServiceHowItWorks title='How It Works' steps={processSteps} accent='primary'>
        <ServiceTimelineBox {...timelineBox} />
      </ServiceHowItWorks>

      <MidPageCTA
        heading='Need a VBA developer who delivers?'
        subtext='Book a free consultation for macro repair or custom VBA development.'
      />

      <ServicePricingSection
        title='Pricing'
        description='Fixed pricing. No hourly billing. No surprises. You know the cost before we start.'
        variant='excel'
        tiers={servicePricingTiers}
        footerNote='Documentation, training, 100% code ownership, no recurring fees'
      />

      <ServiceFAQSection title='Common Questions' faqs={serviceFaqs} />

      <ServiceRelatedSection title='Related Services & Resources' links={relatedLinks} />

      <ServiceFinalCTASection
        heading='Ready to Automate with VBA?'
        body='Stop doing manual Excel work. Get custom VBA code that automates your processes. Get a free consultation.'
      />
    </div>
  );
}
