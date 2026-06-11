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

const content = SERVICE_CONTENT['excel-automation'];

const serviceFaqs = [
  {
    question: 'What can be automated in Excel?',
    answer:
      'Almost any repetitive Excel task can be automated: report generation, data consolidation from multiple files, formatting, calculations, dashboard updates, email sending, and more. If you do it regularly, we can automate it.',
  },
  {
    question: 'How long does Excel automation take?',
    answer:
      'Simple automations (single process) typically take 1-2 weeks. Advanced automations (multiple processes, complex logic) take 3-6 weeks. I provide a timeline after our free consultation.',
  },
  {
    question: 'Do I need to know VBA to use the automation?',
    answer:
      'No. I build user-friendly interfaces with buttons and forms. Your team just clicks a button to run the automation. I provide training and documentation.',
  },
  {
    question: 'What if my Excel file structure changes?',
    answer:
      'I build flexible automation that can handle minor changes. For major structural changes, I can update the automation. Most clients find the automation adapts well to their evolving needs.',
  },
  {
    question: 'Can you automate Excel to work with other systems?',
    answer:
      'Yes. I can connect Excel to Access databases, SQL Server, web APIs, and other data sources. Excel can pull data automatically and push results back to other systems.',
  },
];

export default function ExcelAutomation() {
  useEffect(() => {
    trackServicePageView('excel-automation');
  }, []);

  return (
    <div className='page'>
      <SEO
        title='Excel VBA Automation Services | ExcelAccessConsultant'
        description='Excel VBA automation consultant. I build custom VBA solutions that eliminate repetitive Excel work, consolidation, reporting, and workflows. Fixed price. Free consultation.'
        url='https://excelaccessconsultant.com/excel-automation'
        ogTitle='Excel VBA Automation Services'
      />

      <FAQSchema faqs={serviceFaqs} />

      <section className='page-hero'>
        <div className='container'>
          <h1 className='page-hero__title'>Excel VBA Automation Services</h1>
          <p className='page-hero__lead'>
            Stop wasting hours on manual Excel work. I build custom VBA automation that turns your
            repetitive tasks into one-click solutions. {TRUST.years} of experience. {TRUST.projects}{' '}
            automation projects. Fixed pricing. Free consultation.
          </p>
          <ContactCTAs green phoneLocation='excel-automation-hero' />
        </div>
      </section>

      <ProblemSection problems={content.problems} />
      <SolutionSection paragraphs={content.solutionParagraphs} bullets={content.solutionBullets} />
      <BenefitsSection benefits={content.benefits} />

      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <div className='grid-sidebar'>
            <div className='grid-sidebar__main'>
              <h2>What I Automate</h2>
              <div className='grid-2'>
                <div className='card card--interactive'>
                  <h3 className='card-hover-title card-hover-title--secondary'>
                    Report Generation
                  </h3>
                  <p className='text-muted'>
                    Automated weekly, monthly, and quarterly reports. Pull data from multiple
                    sources, format, calculate, and generate PDFs or Excel files automatically.
                  </p>
                </div>
                <div className='card card--interactive'>
                  <h3 className='card-hover-title card-hover-title--secondary'>
                    Data Consolidation
                  </h3>
                  <p className='text-muted'>
                    Combine data from multiple Excel files, Access databases, or CSV files into one
                    master file. Automatically clean, validate, and format the data.
                  </p>
                </div>
                <div className='card card--interactive'>
                  <h3 className='card-hover-title card-hover-title--secondary'>
                    Multi-File Processing
                  </h3>
                  <p className='text-muted'>
                    Process hundreds of Excel files at once. Extract data, perform calculations,
                    generate summaries, and organize results automatically.
                  </p>
                </div>
                <div className='card card--interactive'>
                  <h3 className='card-hover-title card-hover-title--secondary'>
                    Dashboard Creation
                  </h3>
                  <p className='text-muted'>
                    Interactive dashboards with charts, pivot tables, and controls. Automatically
                    update when new data arrives. No manual refresh needed.
                  </p>
                </div>
                <div className='card card--interactive'>
                  <h3 className='card-hover-title card-hover-title--secondary'>
                    Data Validation & Cleaning
                  </h3>
                  <p className='text-muted'>
                    Automatically check for errors, duplicates, missing data, and inconsistencies.
                    Clean and standardize data according to your business rules.
                  </p>
                </div>
                <div className='card card--interactive'>
                  <h3 className='card-hover-title card-hover-title--secondary'>Email Automation</h3>
                  <p className='text-muted'>
                    Automatically send formatted reports via email. Schedule daily, weekly, or
                    monthly emails to specific recipients with customized content.
                  </p>
                </div>
                <div className='card card--interactive'>
                  <h3 className='card-hover-title card-hover-title--secondary'>
                    Formula Automation
                  </h3>
                  <p className='text-muted'>
                    Complex calculations that run automatically. Update formulas across multiple
                    sheets, handle conditional logic, and perform advanced calculations.
                  </p>
                </div>
                <div className='card card--interactive'>
                  <h3 className='card-hover-title card-hover-title--secondary'>
                    Formatting & Styling
                  </h3>
                  <p className='text-muted'>
                    Apply consistent formatting across multiple files. Auto-format reports, apply
                    conditional formatting, and maintain brand standards automatically.
                  </p>
                </div>
                <div className='card card--interactive'>
                  <h3 className='card-hover-title card-hover-title--secondary'>
                    Data Import/Export
                  </h3>
                  <p className='text-muted'>
                    Automatically import data from external sources (databases, APIs, CSV files) and
                    export results to various formats (PDF, Excel, CSV, Access).
                  </p>
                </div>
                <div className='card card--interactive'>
                  <h3 className='card-hover-title card-hover-title--secondary'>
                    Workflow Automation
                  </h3>
                  <p className='text-muted'>
                    Automate entire workflows: data entry → validation → calculation → reporting →
                    distribution. One button runs the entire process.
                  </p>
                </div>
                <div className='card card--interactive'>
                  <h3 className='card-hover-title card-hover-title--secondary'>
                    Pivot Table Automation
                  </h3>
                  <p className='text-muted'>
                    Automatically create and update pivot tables. Refresh data sources, rebuild
                    pivot tables, and generate pivot-based reports automatically.
                  </p>
                </div>
                <div className='card card--interactive'>
                  <h3 className='card-hover-title card-hover-title--secondary'>
                    Chart & Graph Generation
                  </h3>
                  <p className='text-muted'>
                    Automatically create charts and graphs from data. Update charts when data
                    changes, apply consistent styling, and export chart images.
                  </p>
                </div>
              </div>
            </div>

            <div className='grid-sidebar__aside'>
              <ServiceSidebar
                tagline={getServiceSidebarTagline('excel-automation')}
                examples={content.sidebarExamples}
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceHowItWorks steps={SERVICE_PROCESS_STEPS['excel-automation']} accent='secondary'>
        <div className='highlight-box'>
          <p>
            <strong>Timeline Expectations:</strong>
          </p>
          <ul className='highlight-box__list'>
            <li>Simple automations: 1-2 weeks</li>
            <li>Advanced automations: 3-6 weeks</li>
            <li>Complex multi-process systems: 6-8 weeks</li>
          </ul>
          <p className='text-muted'>
            <strong>What You Provide:</strong> Sample files, process documentation, access to data
            sources (if needed)
          </p>
          <p className='text-muted'>
            <strong>What You Get:</strong> Working automation, documentation, training, 100% code
            ownership
          </p>
        </div>
      </ServiceHowItWorks>

      <MidPageCTA heading={content.midCtaHeading} subtext={content.midCtaSubtext} green />

      <ServicePricingSection variant='excel' />

      <ServiceFAQSection faqs={serviceFaqs} />

      <section className='page-section page-section--compact page-section--white page-section--border-t'>
        <div className='container'>
          <h2 className='page-section--centered'>Related Services & Resources</h2>
          <div className='grid-3'>
            <Link href='/vba-development' className='related-tile'>
              <h3>VBA Development</h3>
              <p className='text-muted-sm'>
                Custom VBA macros, scripts, and applications built from scratch or fixed.
              </p>
            </Link>
            <Link href='/case-studies/construction-automated-reporting' className='related-tile'>
              <h3>Case Study: 6 Hours → 30 Seconds</h3>
              <p className='text-muted-sm'>
                How VBA automation eliminated weekly manual reporting for a construction firm.
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
          <h2>Ready to Automate Your Excel Workflows?</h2>
          <p className='text-lead service-final-cta'>
            Stop wasting hours on manual Excel work. Get a free consultation and see how automation
            can save your team time and eliminate errors.
          </p>
          <ContactCTAs green phoneLocation='excel-automation-final' center />
        </div>
      </section>
    </div>
  );
}
