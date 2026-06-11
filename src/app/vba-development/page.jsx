'use client';

import { useEffect } from 'react';
import FAQSchema from '../../components/SEO/FAQSchema';
import SEO from '../../components/SEO/SEO';
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
import { SERVICE_CONTENT, getServiceSidebarTagline } from '../../constants/servicePageContent';
import { SERVICE_PROCESS_STEPS } from '../../constants/serviceProcessSteps';
import { TRUST } from '../../constants/site';
import { trackServicePageView } from '../../utils/analytics';

const content = SERVICE_CONTENT['vba-development'];

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
  useEffect(() => {
    trackServicePageView('vba-development');
  }, []);

  return (
    <div className='page'>
      <SEO
        title='Excel VBA Developer | Hire VBA Programmer'
        description='Custom VBA development for Excel and Access. Build macros, automation scripts, and applications. Fix broken code or build from scratch. Fixed scope, fixed price.'
        url='https://excelaccessconsultant.com/vba-development'
        ogTitle='Excel VBA Development Services'
      />

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

      <ProblemSection problems={content.problems} />
      <SolutionSection paragraphs={content.solutionParagraphs} bullets={content.solutionBullets} />
      <BenefitsSection benefits={content.benefits} />

      <ServiceCapabilitiesSection
        title={content.capabilitiesTitle}
        accent={content.cardAccent}
        sidebar={
          <ServiceSidebar
            tagline={getServiceSidebarTagline('vba-development')}
            examples={content.sidebarExamples}
          />
        }
      >
        <div className='grid-2'>
          {[
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
                ].map((item) => (
                  <div key={item.title} className='card card--interactive'>
                    <h3>{item.title}</h3>
                    <p className='text-muted'>{item.desc}</p>
                  </div>
                ))}
        </div>
      </ServiceCapabilitiesSection>

      <ServiceHowItWorks steps={SERVICE_PROCESS_STEPS['vba-development']} accent='primary'>
        <ServiceTimelineBox {...content.timelineBox} />
      </ServiceHowItWorks>

      <MidPageCTA heading={content.midCtaHeading} subtext={content.midCtaSubtext} />

      <ServicePricingSection variant='excel' tiers={servicePricingTiers} />

      <ServiceFAQSection faqs={serviceFaqs} />

      <ServiceRelatedSection links={content.relatedLinks} />

      <ServiceFinalCTASection
        heading={content.finalCta.heading}
        body={content.finalCta.body}
      />
    </div>
  );
}
