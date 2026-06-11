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

const content = SERVICE_CONTENT['database-migration'];

const serviceFaqs = [
  {
    question: 'When should I migrate from Access to SQL Server?',
    answer:
      'Consider migration when: you have 50+ concurrent users, need better performance, require cloud access, need better security, or want to scale beyond Access limits. I can help you decide if migration is right for you.',
  },
  {
    question: 'Will I lose data during migration?',
    answer:
      'No. I use proven migration processes that preserve all data, relationships, and structure. I test thoroughly before going live. Data loss is extremely rare and I have recovery procedures.',
  },
  {
    question: 'How long does database migration take?',
    answer:
      'Simple databases: 3-4 weeks. Medium complexity: 5-8 weeks. Complex multi-user systems: 8-12 weeks. Timeline includes planning, migration, testing, and training.',
  },
  {
    question: 'Can you migrate Access forms and reports?',
    answer:
      'Yes. I can recreate Access forms in web-based interfaces or keep them in Access connected to SQL Server. Reports can be migrated to SQL Server Reporting Services or kept in Access.',
  },
  {
    question: 'What happens to my existing Access database?',
    answer:
      'Your original Access database remains untouched as backup. I migrate to SQL Server, then we test thoroughly. Once you confirm everything works, you can retire the old Access database.',
  },
];

const servicePricingTiers = [
  {
    name: 'Simple Projects',
    price: '$3,000-$5,000',
    description: 'Small databases, basic migration, 3-4 weeks',
    features: [
      'Small database migration',
      'Basic table migration',
      'Data migration',
      'Documentation included',
    ],
    highlighted: false,
  },
  {
    name: 'Advanced Projects',
    price: '$5,000-$12,000',
    description: 'Medium databases, form migration, 5-8 weeks',
    features: [
      'Medium database migration',
      'Query migration',
      'Form/report migration',
      'Performance optimization',
      'Full documentation',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise Projects',
    price: '$12,000+',
    description: 'Large systems, full migration, 8-12 weeks',
    features: [
      'Large database migration',
      'Complete system migration',
      'Cloud migration (Azure)',
      'Team walkthrough and written guides',
      'Extended support',
    ],
    highlighted: false,
  },
];

export default function DatabaseMigrationPage() {
  useEffect(() => {
    trackServicePageView('database-migration');
  }, []);

  return (
    <div className='page'>
      <SEO
        title='Access Database Migration | Migrate Access to SQL'
        description='Access to SQL Server migration consultant. Plan and execute database migrations without data loss. Better performance and scalability. Free consultation.'
        url='https://excelaccessconsultant.com/database-migration'
        ogTitle='Access Database Migration Services'
      />

      <FAQSchema faqs={serviceFaqs} />

      <section className='page-hero'>
        <div className='container'>
          <h1 className='page-hero__title'>Access Database Migration & Modernization Services</h1>
          <p className='page-hero__lead'>
            Migrate your Access database to SQL Server for better performance, scalability, and
            cloud access. Preserve all data and functionality. {TRUST.years} of migration
            experience. {TRUST.projects} migration projects. Fixed pricing. Free consultation.
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
            tagline={getServiceSidebarTagline('database-migration')}
            examples={content.sidebarExamples}
            accent='secondary'
          />
        }
      >
        <div className='grid-2'>
          {[
                  {
                    title: 'Access to SQL Server',
                    desc: 'Migrate Access databases to SQL Server. Preserve all tables, relationships, data types, and constraints. Optimize for SQL Server performance.',
                  },
                  {
                    title: 'Access to Cloud (Azure SQL)',
                    desc: 'Migrate Access databases to Azure SQL Database for cloud access. Enable remote access, automatic backups, and scalable infrastructure.',
                  },
                  {
                    title: 'Data Migration',
                    desc: 'Migrate all data with zero loss. Preserve data integrity, handle data type conversions, and maintain referential integrity throughout migration.',
                  },
                  {
                    title: 'Table Structure Migration',
                    desc: 'Convert Access table structures to SQL Server. Optimize indexes, add proper constraints, and improve performance with SQL Server features.',
                  },
                  {
                    title: 'Query Migration',
                    desc: 'Convert Access queries to SQL Server stored procedures, views, and functions. Optimize for better performance and maintainability.',
                  },
                  {
                    title: 'Form & Report Migration',
                    desc: 'Recreate Access forms in web interfaces or keep Access front-end connected to SQL Server. Migrate reports to SQL Server Reporting Services.',
                  },
                  {
                    title: 'VBA Code Migration',
                    desc: 'Convert Access VBA code to SQL Server stored procedures, triggers, or application code. Preserve business logic and functionality.',
                  },
                  {
                    title: 'Security Migration',
                    desc: 'Set up SQL Server security, user permissions, and access controls. Migrate Access user accounts and permissions to SQL Server.',
                  },
                  {
                    title: 'Performance Optimization',
                    desc: 'Optimize migrated database for SQL Server. Add proper indexes, optimize queries, and use SQL Server performance features.',
                  },
                  {
                    title: 'Hybrid Solutions',
                    desc: 'Keep Access front-end, migrate data to SQL Server. Best of both worlds: familiar Access interface with SQL Server backend performance.',
                  },
                ].map((item) => (
                  <div key={item.title} className='card card--interactive'>
                    <h3>{item.title}</h3>
                    <p className='text-muted'>{item.desc}</p>
                  </div>
                ))}
        </div>
      </ServiceCapabilitiesSection>

      <ServiceHowItWorks steps={SERVICE_PROCESS_STEPS['database-migration']} accent='secondary'>
        <ServiceTimelineBox {...content.timelineBox} />
      </ServiceHowItWorks>

      <MidPageCTA heading={content.midCtaHeading} subtext={content.midCtaSubtext} />

      <ServicePricingSection
        variant='access'
        tiers={servicePricingTiers}
        footerNote='Documentation, training, 100% database ownership, no recurring fees'
      />

      <ServiceFAQSection faqs={serviceFaqs} />

      <ServiceRelatedSection links={content.relatedLinks} />

      <ServiceFinalCTASection
        heading={content.finalCta.heading}
        body={content.finalCta.body}
      />
    </div>
  );
}
