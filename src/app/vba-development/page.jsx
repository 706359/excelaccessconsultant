'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import FAQSchema from '../../components/SEO/FAQSchema';
import SEO from '../../components/SEO/SEO';
import ContactCTAs from '../../components/ui/ContactCTAs/ContactCTAs';
import ServiceHowItWorks from '../../components/ui/ServiceHowItWorks/ServiceHowItWorks';
import {
  BenefitsSection,
  MidPageCTA,
  ProblemSection,
  ServiceFAQSection,
  ServiceSidebar,
  SolutionSection,
} from '../../components/ui/ServicePageSections/ServicePageSections';
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
          <ContactCTAs green phoneLocation='vba-development-hero' />
        </div>
      </section>

      <ProblemSection problems={content.problems} />
      <SolutionSection paragraphs={content.solutionParagraphs} bullets={content.solutionBullets} />
      <BenefitsSection benefits={content.benefits} />

      <section className='page-section page-section--lg page-section--alt'>
        <div className='container'>
          <div className='grid-sidebar'>
            <div className='grid-sidebar__main'>
              <h2>What I Develop</h2>
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
            </div>
            <div className='grid-sidebar__aside'>
              <ServiceSidebar
                tagline={getServiceSidebarTagline('vba-development')}
                examples={content.sidebarExamples}
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceHowItWorks steps={SERVICE_PROCESS_STEPS['vba-development']} accent='primary'>
        <div className='highlight-box'>
          <p>
            <strong>Timeline Expectations:</strong>
          </p>
          <ul className='highlight-box__list'>
            <li>Simple macros: 1-2 weeks</li>
            <li>Medium complexity: 2-4 weeks</li>
            <li>Complex applications: 4-8 weeks</li>
          </ul>
          <p className='text-muted'>
            <strong>What You Provide:</strong> Requirements, sample files, access to data sources
            (if needed), existing code (if fixing)
          </p>
          <p className='text-muted'>
            <strong>What You Get:</strong> Working VBA code, documentation, training, 100% code
            ownership
          </p>
        </div>
      </ServiceHowItWorks>

      <MidPageCTA heading={content.midCtaHeading} subtext={content.midCtaSubtext} green />

      <ServicePricingSection variant='excel' tiers={servicePricingTiers} />

      <ServiceFAQSection faqs={serviceFaqs} />

      <section className='page-section page-section--compact page-section--white page-section--border-t'>
        <div className='container'>
          <h2 className='page-section--centered'>Related Services & Resources</h2>
          <div className='grid-3'>
            <Link href='/excel-automation' className='related-tile'>
              <h3>Excel Automation</h3>
              <p className='text-muted-sm'>End-to-end Excel process automation with VBA.</p>
            </Link>
            <Link href='/case-studies/retail-pricing-system' className='related-tile'>
              <h3>Case Study: Pricing System</h3>
              <p className='text-muted-sm'>
                Automated complex pricing calculations with VBA and Access.
              </p>
            </Link>
            <Link href='/access-consulting' className='related-tile'>
              <h3>Access Database Consulting</h3>
              <p className='text-muted-sm'>
                Fix crashes, rebuild databases, and scale for multi-user access.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section
        id='contact'
        className='page-section page-section--compact page-section--alt service-final-cta page-section--centered'
      >
        <div className='container page-section--centered'>
          <h2>Ready to Automate with VBA?</h2>
          <p className='text-lead service-final-cta'>
            Stop doing manual Excel work. Get custom VBA code that automates your processes. Get a
            free consultation.
          </p>
          <ContactCTAs green phoneLocation='vba-development-final' center />
        </div>
      </section>
    </div>
  );
}
