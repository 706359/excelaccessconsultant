import Link from 'next/link';
import ServicePageTracker from '../../components/Analytics/ServicePageTracker';
import FAQSchema from '../../components/SEO/FAQSchema';
import ReviewSchema from '../../components/SEO/ReviewSchema';
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

const content = SERVICE_CONTENT['access-consulting'];

// Spacing for the extra content sections on this page.
// Swap for your site's own section wrapper class if you have one.
const sectionStyle = { paddingBlock: '3rem' };

const serviceFaqs = [
  {
    question: 'What does an Access database consultant do?',
    answer:
      'An Access database consultant designs, repairs, optimizes and extends Microsoft Access systems. That includes building multi-user databases, fixing crashes and corruption, speeding up slow queries, writing VBA automation, and migrating to SQL Server when Access is outgrown. You get a working system and the documentation to run it.',
  },
  {
    question: 'How much does an Access database consultant cost?',
    answer:
      'Fixed-price Access projects typically run $1,500-$3,000 for simple single-user databases, $3,000-$8,000 for multi-user systems with complex logic, and $8,000+ for large systems or SQL Server migrations. There is no hourly billing, and the first consultation is free.',
  },
  {
    question: 'Why does my Access database keep crashing?',
    answer:
      'Common causes include: too many users accessing simultaneously without proper locking, corrupted data, inefficient queries, missing indexes, or database bloat. I can diagnose and fix these issues.',
  },
  {
    question: 'How many users can Access handle?',
    answer:
      'With proper design, Access can handle 20-50 concurrent users reliably. Beyond that, consider migrating to SQL Server. I can optimize your database for maximum users or help with migration.',
  },
  {
    question: 'Can you fix a corrupted Access database?',
    answer:
      'Yes, in most cases. I can repair corrupted databases, recover lost data, and rebuild damaged structures. Prevention is better though. I also optimize databases to prevent future corruption.',
  },
  {
    question: 'How long does Access database development take?',
    answer:
      'Simple databases: 2-3 weeks. Medium complexity: 4-6 weeks. Complex multi-user systems: 6-10 weeks. I provide a timeline after our free consultation based on your specific needs.',
  },
  {
    question: 'Do you work with existing Access databases?',
    answer:
      'Yes. Most of my work is fixing, optimizing, or enhancing existing Access databases. I rarely start from scratch unless you want a complete rebuild.',
  },
  {
    question: 'What should I look for in an Access database specialist?',
    answer:
      'Look for an experienced Access database expert who has built and fixed multi-user systems, not just single-user files. When comparing MS Access consultants, ask about split front-end and back-end design, query optimization, VBA, SQL Server migration, and whether you receive full documentation and ownership of the database.',
  },
  {
    question: 'Can you help with both Excel and Access?',
    answer:
      'Yes. As Excel and Access experts, I handle both: Excel automation and VBA, Access databases, and the connections between them. Many clients start with spreadsheets that outgrew themselves, move the heavy data into Access or SQL Server, and keep Excel for reporting.',
  },
  {
    question: 'Do you offer database design consulting?',
    answer:
      'Yes. Database design consulting covers table structure, relationships, keys and business rules before any forms or reports are built. Getting the design right is what keeps an Access database fast, accurate and easy to extend as your team grows.',
  },
  {
    question: 'When should I move from Access to SQL Server?',
    answer:
      'Consider it when you regularly need more than about 50 concurrent users, are approaching the 2 GB Access file size limit, need stronger security or remote access, or keep hitting corruption despite good design. Many teams keep Access as the front end and move only the data to SQL Server.',
  },
];

const servicePricingTiers = [
  {
    name: 'Simple Projects',
    price: '$1,500-$3,000',
    description: 'Basic database, single-user, 2-3 weeks',
    features: [
      'Simple database design',
      'Basic forms and reports',
      'Single-user system',
      'Documentation included',
    ],
    highlighted: false,
  },
  {
    name: 'Advanced Projects',
    price: '$3,000-$8,000',
    description: 'Multi-user systems, complex logic, 4-6 weeks',
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
    name: 'Enterprise Projects',
    price: '$8,000+',
    description: 'Large systems, SQL migration, 6-10 weeks',
    features: [
      'Large multi-user systems',
      'SQL Server migration',
      'System integration',
      'Team walkthrough and written guides',
      'Extended support',
    ],
    highlighted: false,
  },
];

// Service schema for AEO/GEO. Check the provider name matches your Organization schema.
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Access Database Consulting',
  serviceType: 'Microsoft Access database consulting',
  url: 'https://excelaccessconsultant.com/access-consulting',
  description:
    'Microsoft Access database consulting: custom multi-user databases, crash and corruption repair, performance optimization, VBA automation and SQL Server migration at fixed prices.',
  provider: {
    '@type': 'Organization',
    name: 'Excel Access Consultant',
    url: 'https://excelaccessconsultant.com',
  },
  offers: [
    {
      '@type': 'Offer',
      name: 'Simple Access database projects',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: 1500,
        maxPrice: 3000,
        priceCurrency: 'USD',
      },
    },
    {
      '@type': 'Offer',
      name: 'Advanced Access database projects',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: 3000,
        maxPrice: 8000,
        priceCurrency: 'USD',
      },
    },
    {
      '@type': 'Offer',
      name: 'Enterprise Access database projects',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: 8000,
        priceCurrency: 'USD',
      },
    },
  ],
};

export default function AccessConsulting() {
  return (
    <div className='page'>
      <ServicePageTracker service='access-consulting' />

      <FAQSchema faqs={serviceFaqs} />

      <ReviewSchema
        reviews={[
          {
            author: 'Operations Manager, Manufacturing Company',
            rating: '5',
            text: 'Zero crashes in 8 months with 15 users working simultaneously after Robert Terry redesigned our Access database.',
          },
          {
            author: 'Pricing Analyst, Retail Chain',
            rating: '5',
            text: 'The Access pricing system prevented errors that would have cost us $30K–$50K in a single quarter.',
          },
        ]}
      />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className='page-hero'>
        <div className='container'>
          <h1 className='page-hero__title'>Access Database Consultant &amp; Microsoft Access Experts</h1>
          <p className='page-hero__lead'>
            Hire a Microsoft Access database consultant to build stable, multi-user databases that
            don&apos;t crash. Fix corrupted files, speed up slow queries, and get a system your team
            will actually use. {TRUST.years} of experience. {TRUST.projects} database projects. Fixed
            pricing. Free consultation.
          </p>
          <ServiceHeroCTAs />
        </div>
      </section>

      {/* Answer-first block: written to be quoted by search snippets and AI answers */}
      <section className='container' style={sectionStyle}>
        <h2>What Do Access Database Consultants Do?</h2>
        <p>
          Access database consulting means designing, repairing, speeding up and extending Microsoft
          Access systems so a team can rely on them every day. Access database consultants build
          multi-user databases, fix crashes and corruption, tune slow queries, add VBA automation,
          and move data to SQL Server when Access is no longer the right fit. Most projects take
          2-10 weeks at a fixed price, starting from $1,500.
        </p>
        <p>
          Access data consulting is often about the data as much as the software: getting tables,
          relationships and rules right so the numbers you report on can be trusted. Most Access
          database consultancy work starts with a system that already exists and has started to
          fail. If yours keeps crashing or throwing corruption errors, the first step is usually an{' '}
          <Link href='/access-database-repair'>Access database repair</Link>. If it only struggles
          when several people are in it at once, the cause is almost always how the file is set up,
          not your computers.
        </p>
      </section>

      <ProblemSection problems={content.problems} />
      <SolutionSection paragraphs={content.solutionParagraphs} bullets={content.solutionBullets} />
      <BenefitsSection benefits={content.benefits} />

      <ServiceCapabilitiesSection
        title={content.capabilitiesTitle}
        accent={content.cardAccent}
        sidebar={
          <ServiceSidebar
            tagline={getServiceSidebarTagline('access-consulting')}
            examples={content.sidebarExamples}
            accent='secondary'
          />
        }
      >
        <div className='grid-2'>
          <div className='card card--interactive'>
            <h3>Multi-User Database Systems</h3>
            <p className='text-muted'>
              Access databases that handle 10-50 concurrent users without crashes. Proper locking,
              split database architecture, and optimized queries.
            </p>
          </div>
          <div className='card card--interactive'>
            <h3>Custom Forms & Interfaces</h3>
            <p className='text-muted'>
              User-friendly forms with validation, dropdowns, and navigation. Your team can enter
              and manage data without training manuals.
            </p>
          </div>
          <div className='card card--interactive'>
            <h3>Advanced Queries & Reports</h3>
            <p className='text-muted'>
              Complex queries that pull exactly the data you need. Professional reports with
              formatting, grouping, and calculations.
            </p>
          </div>
          <div className='card card--interactive'>
            <h3>Database Repair & Recovery</h3>
            <p className='text-muted'>
              Fix corrupted databases, recover lost data, rebuild damaged structures. Get your
              database working again without losing information.
            </p>
          </div>
          <div className='card card--interactive'>
            <h3>Performance Optimization</h3>
            <p className='text-muted'>
              Speed up slow databases. Add indexes, optimize queries, compact and repair regularly.
              Turn a 5-minute query into a 5-second query.
            </p>
          </div>
          <div className='card card--interactive'>
            <h3>Data Validation & Rules</h3>
            <p className='text-muted'>
              Enforce business rules at the database level. Prevent invalid data entry, ensure data
              consistency, and maintain data integrity.
            </p>
          </div>
          <div className='card card--interactive'>
            <h3>Integration with Excel & SQL</h3>
            <p className='text-muted'>
              Connect Access to Excel files, SQL Server databases, and other data sources.
              Import/export data automatically.
            </p>
          </div>
          <div className='card card--interactive'>
            <h3>Security & User Management</h3>
            <p className='text-muted'>
              Set up user permissions, password protection, and access controls. Ensure only
              authorized users can view or modify sensitive data.
            </p>
          </div>
          <div className='card card--interactive'>
            <h3>Access VBA, Macros & Automation</h3>
            <p className='text-muted'>
              <Link href='/vba-development'>Access VBA development</Link> to automate repetitive
              tasks. Run processes on schedule, send automated emails, and trigger actions based on
              events.
            </p>
          </div>
          <div className='card card--interactive'>
            <h3>Database Migration</h3>
            <p className='text-muted'>
              <Link href='/database-migration'>Migrate Access databases to SQL Server</Link> when
              you outgrow Access. Preserve all data, relationships, and functionality.
            </p>
          </div>
          <div className='card card--interactive'>
            <h3>Database Support & Maintenance</h3>
            <p className='text-muted'>
              Automated backups, compact and repair schedules, and maintenance routines, plus
              consultant database support when something breaks. Keep your database healthy and
              prevent data loss.
            </p>
          </div>
          <div className='card card--interactive'>
            <h3>Custom Business Applications</h3>
            <p className='text-muted'>
              Complete business applications built in Access: inventory management, customer
              databases, project tracking, and more.
            </p>
          </div>
          <div className='card card--interactive'>
            <h3>Database Design Consulting</h3>
            <p className='text-muted'>
              Table structure, relationships, keys and business rules planned around{' '}
              <Link href='/blog/access-database-best-practices'>Access database best practices</Link>{' '}
              before any form is built.
            </p>
          </div>
          <div className='card card--interactive'>
            <h3>Existing Database Takeover</h3>
            <p className='text-muted'>
              Inherited an Access database nobody fully understands? An experienced Access database
              expert can review it, stabilize it, document it and keep it running, without a
              rebuild unless you want one.
            </p>
          </div>
        </div>
      </ServiceCapabilitiesSection>

      <section className='container' style={sectionStyle}>
        <h2>Why Access Databases Crash, Slow Down or Corrupt</h2>
        <p>
          Like most Access database specialists, I see the same few causes behind most of
          these problems. The most common is a single file shared over the network, with the forms
          and the data in the same place. Everyone opens the same file, so one dropped connection can
          damage it for the whole team. The usual fix is to{' '}
          <Link href='/blog/how-to-split-access-database'>split the database</Link> so each person
          runs their own front end and the tables sit in a shared back end. That alone often clears
          up a lot of the crashing and locking.
        </p>
        <p>
          If a file is already damaged, I look at why it got corrupted before repairing it, because
          otherwise it just happens again. Slowness is usually missing indexes or queries that pull
          far more data than they need. And if the team has really{' '}
          <Link href='/blog/when-to-migrate-from-access'>outgrown Access</Link>, I will say so and
          walk through the options. Moving to SQL Server is not always the answer, though. I wrote up
          one{' '}
          <Link href='/case-studies/access-sql-migration-enterprise'>
            enterprise Access to SQL Server migration
          </Link>{' '}
          if you want to see what that looks like in practice.
        </p>
      </section>

      <section className='container' style={sectionStyle}>
        <h2>Excel and Access Experts Under One Roof</h2>
        <p>
          Most Access databases sit next to Excel. They pull data from spreadsheets, send reports
          back to them, or replace a spreadsheet that got too big to trust. As an Excel and Access consultant, I work on both sides, so
          the handoff between the two does not become the weak point.
        </p>
        <p>
          Sometimes the right move is to keep the spreadsheet and{' '}
          <Link href='/excel-automation'>automate the repetitive parts</Link>. Other times the data
          belongs in a database, and I explain how I decide in{' '}
          <Link href='/blog/access-vs-excel-when-to-use-each'>when to use Access vs Excel</Link>.
          There is also a case study on{' '}
          <Link href='/case-studies/distribution-slow-spreadsheet'>
            a slow spreadsheet at a distribution company
          </Link>{' '}
          if you want a real example.
        </p>
      </section>

      <ServiceHowItWorks steps={SERVICE_PROCESS_STEPS['access-consulting']} accent='primary'>
        <ServiceTimelineBox {...content.timelineBox} />
      </ServiceHowItWorks>

      <MidPageCTA heading={content.midCtaHeading} subtext={content.midCtaSubtext} />

      <ServicePricingSection
        title='Access Database Consulting Pricing'
        description='Fixed pricing for Microsoft Access consulting: database design, repair, and multi-user systems. No hourly billing. No surprises.'
        variant='access'
        tiers={servicePricingTiers}
        footerNote='Documentation, training, 100% database ownership, no recurring fees'
      />

      <ServiceFAQSection faqs={serviceFaqs} />

      <ServiceRelatedSection links={content.relatedLinks} />

      <ServiceFinalCTASection heading={content.finalCta.heading} body={content.finalCta.body} />
    </div>
  );
}