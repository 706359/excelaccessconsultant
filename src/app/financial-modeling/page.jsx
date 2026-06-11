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

const content = SERVICE_CONTENT['financial-modeling'];

const serviceFaqs = [
  {
    question: 'What types of financial models do you build?',
    answer:
      'I build various financial models: 3-statement models, budget models, forecasting models, valuation models, cash flow models, and scenario analysis models. I customize each model to your specific business needs.',
  },
  {
    question: 'How long does it take to build a financial model?',
    answer:
      'Simple models (single business unit): 2-3 weeks. Medium complexity (multi-department): 4-6 weeks. Complex models (enterprise-level): 6-10 weeks. Timeline depends on data availability and complexity.',
  },
  {
    question: 'Do you work with existing financial models?',
    answer:
      'Yes. I can fix broken models, optimize slow models, add new features, or rebuild models that are no longer working correctly. Most of my work involves improving existing models.',
  },
  {
    question: 'Can you speed up slow financial models?',
    answer:
      'Yes. I optimize formulas, add efficient calculations, remove unnecessary calculations, and restructure models for better performance. I can turn a 5-minute calculation into seconds.',
  },
  {
    question: 'What data do you need to build a financial model?',
    answer:
      'I need historical financial data, business assumptions, growth projections, and understanding of your business model. I work with whatever data you have available.',
  },
];

const servicePricingTiers = [
  {
    name: 'Simple Projects',
    price: '$1,500-$3,000',
    description: 'Basic models, single business unit, 2-3 weeks',
    features: [
      'Single business unit model',
      'Basic forecasting',
      'Standard reports',
      'Documentation included',
    ],
    highlighted: false,
  },
  {
    name: 'Advanced Projects',
    price: '$3,000-$8,000',
    description: 'Multi-department models, scenario analysis, 4-6 weeks',
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
    name: 'Enterprise Projects',
    price: '$8,000+',
    description: 'Multi-entity models, complex integrations, 6-10 weeks',
    features: [
      'Multi-entity and scenario models',
      'System integration',
      'Custom business logic',
      'Team walkthrough and written guides',
      'Extended support',
    ],
    highlighted: false,
  },
];

export default function FinancialModeling() {
  useEffect(() => {
    trackServicePageView('financial-modeling');
  }, []);

  return (
    <div className='page'>
      <SEO
        title='Financial Modeling Consultant | Excel Financial Models'
        description='Excel financial modeling consultant. Build and audit forecasting, budgeting, and analysis models. Structured, documented, stakeholder-ready. Free consultation.'
        url='https://excelaccessconsultant.com/financial-modeling'
        ogTitle='Financial Modeling Consultant Services'
      />

      <FAQSchema faqs={serviceFaqs} />

      <section className='page-hero'>
        <div className='container'>
          <h1 className='page-hero__title'>Financial Modeling Services</h1>
          <p className='page-hero__lead'>
            Build accurate, fast Excel financial models for forecasting, budgeting, and analysis.
            Fix slow models, add new features, or build from scratch. {TRUST.years} of experience.{' '}
            {TRUST.projects} financial modeling projects. MBA in Accounting. Fixed pricing. Free
            consultation.
          </p>
          <ContactCTAs green phoneLocation='financial-modeling-hero' />
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
                  <h3>3-Statement Financial Models</h3>
                  <p className='text-muted'>
                    Integrated income statement, balance sheet, and cash flow statement.
                    Automatically linked and balanced. Perfect for forecasting and scenario
                    analysis.
                  </p>
                </div>
                <div className='card card--interactive'>
                  <h3>Budget & Forecast Models</h3>
                  <p className='text-muted'>
                    Annual budgets, quarterly forecasts, and rolling forecasts. Compare actuals to
                    budget, track variances, and update forecasts easily.
                  </p>
                </div>
                <div className='card card--interactive'>
                  <h3>Cash Flow Models</h3>
                  <p className='text-muted'>
                    Detailed cash flow forecasting. Track operating, investing, and financing
                    activities. Identify cash shortfalls before they happen.
                  </p>
                </div>
                <div className='card card--interactive'>
                  <h3>Valuation Models</h3>
                  <p className='text-muted'>
                    DCF models, comparable company analysis, and other valuation methodologies.
                    Built for accuracy and ease of use.
                  </p>
                </div>
                <div className='card card--interactive'>
                  <h3>Scenario Analysis Models</h3>
                  <p className='text-muted'>
                    What-if analysis with multiple scenarios. Compare best case, base case, and
                    worst case outcomes. Sensitivity analysis built in.
                  </p>
                </div>
                <div className='card card--interactive'>
                  <h3>Performance Dashboards</h3>
                  <p className='text-muted'>
                    Visual dashboards showing key financial metrics, KPIs, and trends. Automatically
                    update when data changes. Executive-ready presentations.
                  </p>
                </div>
                <div className='card card--interactive'>
                  <h3>Model Optimization</h3>
                  <p className='text-muted'>
                    Speed up slow models. Optimize formulas, remove circular references, restructure
                    for performance. Turn 5-minute calculations into seconds.
                  </p>
                </div>
                <div className='card card--interactive'>
                  <h3>Model Repair & Fixes</h3>
                  <p className='text-muted'>
                    Fix broken formulas, correct calculation errors, resolve circular references,
                    and restore corrupted models. Get your model working again.
                  </p>
                </div>
                <div className='card card--interactive'>
                  <h3>Custom Business Models</h3>
                  <p className='text-muted'>
                    Industry-specific models: SaaS metrics, manufacturing costs, retail inventory,
                    service businesses. Built for your specific business model.
                  </p>
                </div>
                <div className='card card--interactive'>
                  <h3>Automated Reporting</h3>
                  <p className='text-muted'>
                    Models that automatically generate reports, charts, and summaries. Update
                    reports with one click. No manual formatting needed.
                  </p>
                </div>
              </div>
            </div>

            <div className='grid-sidebar__aside'>
              <ServiceSidebar
                tagline={getServiceSidebarTagline('financial-modeling')}
                examples={content.sidebarExamples}
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceHowItWorks steps={SERVICE_PROCESS_STEPS['financial-modeling']} accent='primary'>
        <div className='highlight-box'>
          <p>
            <strong>Timeline Expectations:</strong>
          </p>
          <ul className='highlight-box__list'>
            <li>Simple models: 2-3 weeks</li>
            <li>Medium complexity: 4-6 weeks</li>
            <li>Complex models: 6-10 weeks</li>
          </ul>
          <p className='text-muted'>
            <strong>What You Provide:</strong> Historical financial data, business assumptions,
            growth projections, access to accounting systems (if needed)
          </p>
          <p className='text-muted'>
            <strong>What You Get:</strong> Working financial model, documentation, training, 100%
            ownership
          </p>
        </div>
      </ServiceHowItWorks>

      <MidPageCTA heading={content.midCtaHeading} subtext={content.midCtaSubtext} green />

      <ServicePricingSection
        variant='excel'
        tiers={servicePricingTiers}
        footerNote='Documentation, training, 100% model ownership, no recurring fees'
      />

      <ServiceFAQSection faqs={serviceFaqs} />

      <section className='page-section page-section--compact page-section--white page-section--border-t'>
        <div className='container'>
          <h2 className='page-section--centered'>Related Services & Resources</h2>
          <div className='grid-3'>
            <Link href='/excel-automation' className='related-tile'>
              <h3>Excel Automation</h3>
              <p className='text-muted-sm'>
                Automate repetitive Excel tasks with custom VBA solutions.
              </p>
            </Link>
            <Link href='/case-studies/financial-services-data-integration' className='related-tile'>
              <h3>Case Study: 500 Hours Saved</h3>
              <p className='text-muted-sm'>
                How Excel-to-SQL integration eliminated manual data entry.
              </p>
            </Link>
            <Link href='/vba-development' className='related-tile'>
              <h3>VBA Development</h3>
              <p className='text-muted-sm'>
                Custom VBA macros and applications for Excel and Access.
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
          <h2>Ready to Build or Fix Your Financial Model?</h2>
          <p className='text-lead service-final-cta'>
            Stop struggling with slow or broken financial models. Get a free consultation and see
            how I can help.
          </p>
          <ContactCTAs green phoneLocation='financial-modeling-final' center />
        </div>
      </section>
    </div>
  );
}
