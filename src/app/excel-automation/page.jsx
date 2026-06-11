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

const SERVICE_KEY = 'excel-automation';
const content = SERVICE_CONTENT[SERVICE_KEY];

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

const CAPABILITY_ITEMS = [
  {
    title: 'Report Generation',
    desc: 'Automated weekly, monthly, and quarterly reports. Pull data from multiple sources, format, calculate, and generate PDFs or Excel files automatically.',
  },
  {
    title: 'Data Consolidation',
    desc: 'Combine data from multiple Excel files, Access databases, or CSV files into one master file. Automatically clean, validate, and format the data.',
  },
  {
    title: 'Multi-File Processing',
    desc: 'Process hundreds of Excel files at once. Extract data, perform calculations, generate summaries, and organize results automatically.',
  },
  {
    title: 'Dashboard Creation',
    desc: 'Interactive dashboards with charts, pivot tables, and controls. Automatically update when new data arrives. No manual refresh needed.',
  },
  {
    title: 'Data Validation & Cleaning',
    desc: 'Automatically check for errors, duplicates, missing data, and inconsistencies. Clean and standardize data according to your business rules.',
  },
  {
    title: 'Email Automation',
    desc: 'Automatically send formatted reports via email. Schedule daily, weekly, or monthly emails to specific recipients with customized content.',
  },
  {
    title: 'Formula Automation',
    desc: 'Complex calculations that run automatically. Update formulas across multiple sheets, handle conditional logic, and perform advanced calculations.',
  },
  {
    title: 'Formatting & Styling',
    desc: 'Apply consistent formatting across multiple files. Auto-format reports, apply conditional formatting, and maintain brand standards automatically.',
  },
  {
    title: 'Data Import/Export',
    desc: 'Automatically import data from external sources (databases, APIs, CSV files) and export results to various formats (PDF, Excel, CSV, Access).',
  },
  {
    title: 'Workflow Automation',
    desc: 'Automate entire workflows: data entry → validation → calculation → reporting → distribution. One button runs the entire process.',
  },
  {
    title: 'Pivot Table Automation',
    desc: 'Automatically create and update pivot tables. Refresh data sources, rebuild pivot tables, and generate pivot-based reports automatically.',
  },
  {
    title: 'Chart & Graph Generation',
    desc: 'Automatically create charts and graphs from data. Update charts when data changes, apply consistent styling, and export chart images.',
  },
];

export default function ExcelAutomation() {
  useEffect(() => {
    trackServicePageView(SERVICE_KEY);
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
            tagline={getServiceSidebarTagline(SERVICE_KEY)}
            examples={content.sidebarExamples}
          />
        }
      >
        <div className='grid-2'>
          {CAPABILITY_ITEMS.map((item) => (
            <div key={item.title} className='card card--interactive'>
              <h3>{item.title}</h3>
              <p className='text-muted'>{item.desc}</p>
            </div>
          ))}
        </div>
      </ServiceCapabilitiesSection>

      <ServiceHowItWorks steps={SERVICE_PROCESS_STEPS[SERVICE_KEY]} accent='secondary'>
        <ServiceTimelineBox {...content.timelineBox} />
      </ServiceHowItWorks>

      <MidPageCTA heading={content.midCtaHeading} subtext={content.midCtaSubtext} />

      <ServicePricingSection variant='excel' />

      <ServiceFAQSection faqs={serviceFaqs} />

      <ServiceRelatedSection links={content.relatedLinks} />

      <ServiceFinalCTASection
        heading={content.finalCta.heading}
        body={content.finalCta.body}
      />
    </div>
  );
}
