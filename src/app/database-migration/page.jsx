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
import { SERVICE_CONTENT, getServiceSidebarTagline } from '../../constants/servicePageContent';
import { SERVICE_PROCESS_STEPS } from '../../constants/serviceProcessSteps';
import { TRUST } from '../../constants/site';

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
  return (
    <div className='page'>
      <ServicePageTracker service='database-migration' />

      <FAQSchema faqs={serviceFaqs} />

      <section className='page-hero'>
        <div className='container'>
          <h1 className='page-hero__title'>Access Database Migration & Modernization Services</h1>
          <p className='page-hero__lead'>
          migrate access database to cloud for better performance, scalability, and
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
                  title: 'Migrate Access Database to the Cloud',
                  desc: 'Move your Access database to the cloud so remote teams work from the same data. Access database migration to cloud means a cloud SQL backend, automatic backups, and an optional Access front end so your users keep the screens they know.',
                },
                {
                  title: 'Migrate Access Database to Azure',
                  desc: 'Upgrade your Microsoft Access database to Azure SQL. You get remote access, automatic backups, and room to grow without buying or running a server.',
                },
                {
                  title: 'Migrate Access to SQL Server',
                  desc: 'Migrate data from Access to SQL Server with your tables, relationships, data types, and constraints kept intact. Indexes and structure are tuned for SQL Server.',
                },
                {
                  title: 'Access Database Modernization',
                  desc: 'Is your Access file slow, crashing, or stuck on one person\'s PC? We split it, move the data to SQL Server or the cloud, and clean up the forms and VBA.',
                },
                {
                  title: 'MS Access Application Migration Services',
                  desc: 'US-based help for the whole application: data, queries, forms, reports, and VBA. We scope it, quote it, and move it in stages so your team keeps working.',
                },
                {
                  title: 'Access Data Migration',
                  desc: 'We move every table and check the results against your original data. Data type conversions and referential integrity are handled during the move.',
                },
                {
                  title: 'Table Structure Migration',
                  desc: 'Convert Access tables to SQL Server with proper keys, indexes, and constraints so the database runs faster than it did in Access.',
                },
                {
                  title: 'Query Migration',
                  desc: 'Convert Access queries to SQL Server views, stored procedures, and functions. Slow queries get rewritten, not just copied.',
                },
                {
                  title: 'Form & Report Migration',
                  desc: 'Keep your Access forms connected to SQL Server, or rebuild them as web forms. Reports can move to SQL Server Reporting Services.',
                },
                {
                  title: 'VBA Code Migration',
                  desc: 'Move VBA logic into stored procedures, triggers, or application code. Your business rules keep working after the move.',
                },
                {
                  title: 'Security & Permissions',
                  desc: 'Set up SQL Server logins, roles, and permissions, and carry over who can see and change what in your current Access database.',
                },
                {
                  title: 'Hybrid: Access Front End, SQL Server Back End',
                  desc: 'Keep the Access screens your team already knows and move the data to SQL Server. Faster, safer for multiple users, and the cheapest first step for most small businesses.',
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
