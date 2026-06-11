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

const content = SERVICE_CONTENT['access-database-repair'];

const serviceFaqs = [
  {
    question: 'Can you recover data from a corrupted Access database?',
    answer:
      'In most cases, yes. I use compact/repair, decompile, and structural recovery techniques. If tables are damaged, I rebuild structures and import recoverable data.',
  },
  {
    question: 'How fast can you fix an Access database emergency?',
    answer:
      'Urgent repairs are scheduled when I am available, often within 24–48 hours. I will assess severity on a quick call and give you a realistic timeline.',
  },
  {
    question: 'How much does Access database repair cost?',
    answer:
      'Simple repairs: $1,500–$3,000. Complex recovery with multi-user redesign: $3,000–$8,000. Fixed-price quote after initial assessment.',
  },
  {
    question: 'Should I repair or rebuild my Access database?',
    answer:
      'If corruption is isolated and architecture is sound, repair is faster and cheaper. If the database was never designed for your current user count, rebuild may be the durable fix.',
  },
  {
    question: 'Do you work remotely on Access repair?',
    answer:
      'Yes. I work remotely with secure file transfer. Your data stays in your environment. I work on copies until you approve deployment.',
  },
];

const servicePricingTiers = [
  {
    name: 'Simple Repair',
    price: '$1,500–$3,000',
    description: 'Single-user corruption, 1–2 weeks',
    features: [],
    highlighted: false,
  },
  {
    name: 'Advanced Repair',
    price: '$3,000–$8,000',
    description: 'Multi-user recovery, 2–4 weeks',
    features: [],
    highlighted: true,
  },
  {
    name: 'Rebuild + Repair',
    price: '$8,000+',
    description: 'Full redesign when repair is not enough',
    features: [],
    highlighted: false,
  },
];

export default function AccessDatabaseRepair() {
  useEffect(() => {
    trackServicePageView('access-database-repair');
  }, []);

  return (
    <div className='page'>
      <SEO
        title='Access Database Repair | Fix Corrupted Access Files'
        description='Access database repair specialist. Fix corrupted files, recover data, stop crashes. 20+ years experience. Fixed-price repair quotes. Free consultation.'
        url='https://excelaccessconsultant.com/access-database-repair'
        ogTitle='Access Database Repair Services'
      />
      <FAQSchema faqs={serviceFaqs} />

      <section className='page-hero'>
        <div className='container'>
          <h1 className='page-hero__title'>Access Database Repair Services</h1>
          <p className='page-hero__lead'>
            Corrupted, crashing, or locked-out Access database? I repair and recover Access files,
            restore multi-user access, and harden your system against repeat failures. {TRUST.years}{' '}
            of experience. {TRUST.projects} projects. Fixed-price repair quotes. Free consultation.
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
            tagline={getServiceSidebarTagline('access-database-repair')}
            examples={content.sidebarExamples}
            accent='secondary'
          />
        }
      >
        <div className='grid-2'>
          {[
            {
              title: 'Corruption Recovery',
              desc: 'Repair damaged tables, recover records, and rebuild relationships after compact/repair failures.',
            },
            {
              title: 'Crash Diagnosis',
              desc: 'Find root causes of daily crashes, locking, bloat, network, or bad queries.',
            },
            {
              title: 'Multi-User Lockouts',
              desc: 'Resolve .laccdb lock files, ghost sessions, and record-locking conflicts.',
            },
            {
              title: 'Performance Recovery',
              desc: 'Decompile, reindex, and optimize queries so the database opens and runs normally again.',
            },
            {
              title: 'Data Validation',
              desc: 'Verify recovered data integrity and flag gaps before you go back to production.',
            },
            {
              title: 'Prevention Setup',
              desc: 'Automated backups, maintenance schedules, and split-database architecture when needed.',
            },
          ].map((item) => (
            <div key={item.title} className='card card--interactive'>
              <h3>{item.title}</h3>
              <p className='text-muted'>{item.desc}</p>
            </div>
          ))}
        </div>
      </ServiceCapabilitiesSection>

      <ServiceHowItWorks steps={SERVICE_PROCESS_STEPS['access-database-repair']} accent='secondary'>
        <ServiceTimelineBox {...content.timelineBox} />
      </ServiceHowItWorks>

      <MidPageCTA heading={content.midCtaHeading} subtext={content.midCtaSubtext} />

      <ServicePricingSection variant='access' tiers={servicePricingTiers} />

      <ServiceFAQSection faqs={serviceFaqs} />

      <ServiceRelatedSection links={content.relatedLinks} />

      <ServiceFinalCTASection heading={content.finalCta.heading} body={content.finalCta.body} />
    </div>
  );
}
