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
            tagline={getServiceSidebarTagline('financial-modeling')}
            examples={content.sidebarExamples}
          />
        }
      >
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
      </ServiceCapabilitiesSection>

      <ServiceHowItWorks steps={SERVICE_PROCESS_STEPS['financial-modeling']} accent='primary'>
        <ServiceTimelineBox {...content.timelineBox} />
      </ServiceHowItWorks>

      <MidPageCTA heading={content.midCtaHeading} subtext={content.midCtaSubtext} />

      <ServicePricingSection
        variant='excel'
        tiers={servicePricingTiers}
        footerNote='Documentation, training, 100% model ownership, no recurring fees'
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
