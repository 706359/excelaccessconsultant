'use client';

import ROICalculator from '../../../components/ROICalculator/ROICalculator';
import SEO from '../../../components/SEO/SEO';
import PageCTASection from '../../../components/ui/PageCTASection/PageCTASection';
import ScrollReveal from '../../../components/ui/ScrollReveal/ScrollReveal';

export default function CalculatorResourcePage() {
  return (
    <div className='page'>
      <SEO
        title='Manual Work ROI Calculator | ExcelAccessConsultant'
        description='Estimate how much manual Excel and Access work costs your team each year. Free ROI calculator from ExcelAccessConsultant.com.'
        url='https://excelaccessconsultant.com/resources/calculator'
        ogTitle='Manual Work ROI Calculator'
      />

      <section className='page-hero page-hero--centered'>
        <div className='container'>
          <span className='chip-primary lead-magnet-hero__eyebrow'>Free Tool</span>
          <h1 className='page-hero__title page-hero__title--compact'>Manual Work ROI Calculator</h1>
          <p className='page-hero__lead'>
            See what repetitive Excel and Access tasks cost your business in lost hours, and what
            automation could save you each year.
          </p>
        </div>
      </section>

      <ScrollReveal as='section' className='page-section page-section--white page-section--border'>
        <div className='container container--narrow'>
          <ROICalculator hideHeader />
        </div>
      </ScrollReveal>

      <PageCTASection
        heading='Want a Custom ROI Estimate?'
        subtext='Book a free consultation. I will review your workflow and give you an honest fixed-price quote.'
        phoneLocation='resources-calculator'
      />
    </div>
  );
}
