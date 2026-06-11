'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import FAQSchema from '../../components/SEO/FAQSchema';
import ReviewSchema from '../../components/SEO/ReviewSchema';
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

const content = SERVICE_CONTENT['access-consulting'];

const serviceFaqs = [
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

export default function AccessConsulting() {
  useEffect(() => {
    trackServicePageView('access-consulting');
  }, []);

  return (
    <div className='page'>
      <SEO
        title='Access Database Consultant | MS Access Expert'
        description='MS Access database consultant. Fix crashes, multi-user conflicts, slow queries. Design and rebuild Access databases that run reliably. 20+ years experience. Free consultation.'
        url='https://excelaccessconsultant.com/access-consulting'
        ogTitle='Access Database Consultant Services'
      />

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

      <section className='page-hero'>
        <div className='container'>
          <h1 className='page-hero__title'>Access Database Consulting Services</h1>
          <p className='page-hero__lead'>
            Build stable, multi-user Access databases that don&apos;t crash. Fix corrupted
            databases, optimize performance, and create systems your team will actually use.{' '}
            {TRUST.years} of experience. {TRUST.projects} database projects. Fixed pricing. Free
            consultation.
          </p>
          <ContactCTAs phoneLocation='access-consulting-hero' />
        </div>
      </section>

      <ProblemSection problems={content.problems} />
      <SolutionSection paragraphs={content.solutionParagraphs} bullets={content.solutionBullets} />
      <BenefitsSection benefits={content.benefits} />

      <section className='page-section page-section--lg page-section--alt'>
        <div className='container'>
          <div className='grid-sidebar'>
            <div className='grid-sidebar__main'>
              <h2>What I Build</h2>
              <div className='grid-2'>
                <div className='card card--interactive'>
                  <h3>Multi-User Database Systems</h3>
                  <p className='text-muted'>
                    Access databases that handle 10-50 concurrent users without crashes. Proper
                    locking, split database architecture, and optimized queries.
                  </p>
                </div>
                <div className='card card--interactive'>
                  <h3>Custom Forms & Interfaces</h3>
                  <p className='text-muted'>
                    User-friendly forms with validation, dropdowns, and navigation. Your team can
                    enter and manage data without training manuals.
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
                    Speed up slow databases. Add indexes, optimize queries, compact and repair
                    regularly. Turn a 5-minute query into a 5-second query.
                  </p>
                </div>
                <div className='card card--interactive'>
                  <h3>Data Validation & Rules</h3>
                  <p className='text-muted'>
                    Enforce business rules at the database level. Prevent invalid data entry, ensure
                    data consistency, and maintain data integrity.
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
                  <h3>Automation & Macros</h3>
                  <p className='text-muted'>
                    Automate repetitive tasks with VBA macros. Run processes on schedule, send
                    automated emails, and trigger actions based on events.
                  </p>
                </div>
                <div className='card card--interactive'>
                  <h3>Database Migration</h3>
                  <p className='text-muted'>
                    Migrate Access databases to SQL Server when you outgrow Access. Preserve all
                    data, relationships, and functionality.
                  </p>
                </div>
                <div className='card card--interactive'>
                  <h3>Backup & Maintenance Systems</h3>
                  <p className='text-muted'>
                    Set up automated backups, compact and repair schedules, and maintenance
                    routines. Keep your database healthy and prevent data loss.
                  </p>
                </div>
                <div className='card card--interactive'>
                  <h3>Custom Business Applications</h3>
                  <p className='text-muted'>
                    Complete business applications built in Access: inventory management, customer
                    databases, project tracking, and more.
                  </p>
                </div>
              </div>
            </div>

            <div className='grid-sidebar__aside'>
              <ServiceSidebar
                tagline={getServiceSidebarTagline('access-consulting')}
                examples={content.sidebarExamples}
                accent='secondary'
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceHowItWorks steps={SERVICE_PROCESS_STEPS['access-consulting']} accent='primary'>
        <div className='highlight-box'>
          <p>
            <strong>Timeline Expectations:</strong>
          </p>
          <ul className='highlight-box__list'>
            <li>Simple databases: 2-3 weeks</li>
            <li>Medium complexity: 4-6 weeks</li>
            <li>Complex multi-user systems: 6-10 weeks</li>
          </ul>
          <p className='text-muted'>
            <strong>What You Provide:</strong> Current database (if fixing), requirements, sample
            data, access to systems (if needed)
          </p>
          <p className='text-muted'>
            <strong>What You Get:</strong> Working database, documentation, training, 100% ownership
          </p>
        </div>
      </ServiceHowItWorks>

      <MidPageCTA heading={content.midCtaHeading} subtext={content.midCtaSubtext} />

      <ServicePricingSection
        variant='access'
        tiers={servicePricingTiers}
        footerNote='Documentation, training, 100% database ownership, no recurring fees'
      />

      <ServiceFAQSection faqs={serviceFaqs} />

      <section className='page-section page-section--compact page-section--white page-section--border-t'>
        <div className='container'>
          <h2 className='page-section--centered'>Related Services & Resources</h2>
          <div className='grid-industries--4'>
            <Link href='/database-migration' className='related-tile'>
              <h3>Database Migration</h3>
              <p className='text-muted-sm'>
                Migrate Access to SQL Server for better performance and scalability.
              </p>
            </Link>
            <Link href='/access-database-repair' className='related-tile'>
              <h3>Access Database Repair</h3>
              <p className='text-muted-sm'>
                Emergency repair and recovery for corrupted or crashing Access databases.
              </p>
            </Link>
            <Link href='/case-studies/retail-pricing-system' className='related-tile'>
              <h3>Case Study: Retail Pricing</h3>
              <p className='text-muted-sm'>
                Access pricing system prevented $30K–$50K in quarterly errors.
              </p>
            </Link>
            <Link href='/case-studies/manufacturing-inventory-tracking' className='related-tile'>
              <h3>Case Study: Zero Crashes</h3>
              <p className='text-muted-sm'>
                How I fixed a crashing Access database used by 15 people daily.
              </p>
            </Link>
            <Link href='/excel-automation' className='related-tile'>
              <h3>Excel Automation</h3>
              <p className='text-muted-sm'>
                Automate repetitive Excel tasks with custom VBA solutions.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section
        id='contact'
        className='page-section page-section--compact page-section--alt service-final-cta'
      >
        <div className='container page-section--centered'>
          <div className='container page-section--centered'>
            <h2>Ready to Fix or Build Your Access Database?</h2>
            <p className='text-lead service-final-cta'>
              Stop dealing with crashes and slow performance. Get a free consultation and see how I
              can fix or build your Access database.
            </p>
            <ContactCTAs phoneLocation='access-consulting-final' center />
          </div>
        </div>
      </section>
    </div>
  );
}
