'use client';

import Link from 'next/link';
import FAQSchema from '../../components/SEO/FAQSchema';
import SEO from '../../components/SEO/SEO';
import ContactCTAs, { CTA_BUTTON_VARIANTS } from '../../components/ui/ContactCTAs/ContactCTAs';
import FAQAccordion from '../../components/ui/FAQAccordion/FAQAccordion';
import PageCTASection from '../../components/ui/PageCTASection/PageCTASection';
import PricingTierGrid from '../../components/ui/PricingTierGrid/PricingTierGrid';
import ResultCardCTA from '../../components/ui/ResultCardCTA/ResultCardCTA';
import {
  GENERAL_PROJECT_TIERS,
  PRICING_FAQS,
  PRICING_HOW_IT_WORKS,
  PRICING_INCLUDED,
  SERVICE_PRICING,
} from '../../constants/pricingPageContent';
import { CTA, TRUST } from '../../constants/site';

export default function PricingPage() {
  return (
    <div className='page'>
      <SEO
        title='Pricing | Excel & Access Consulting | ExcelAccessConsultant'
        description='Fixed-price Excel VBA automation, Access database, and migration consulting. Simple $1,500–$3,000, Advanced $3,000–$8,000, Enterprise $8,000+. Free consultation.'
        keywords='excel consultant pricing, access database consultant cost, vba development pricing, excel automation cost, fixed price consulting'
        url='https://excelaccessconsultant.com/pricing'
        ogTitle='Consulting Pricing, Fixed Price, No Surprises'
      />
      <FAQSchema faqs={PRICING_FAQS} />

      <section className='page-hero'>
        <div className='container'>
          <h1 className='page-hero__title'>Fixed-Price Consulting</h1>
          <p className='page-hero__lead'>
            Transparent pricing for Excel VBA automation, Access database work, repairs, and
            migrations. {TRUST.years} of experience. {TRUST.projects} projects delivered. You get a
            fixed quote after a free consultation, no hourly billing surprises.
          </p>
          <ContactCTAs {...CTA_BUTTON_VARIANTS.onLight} center />
        </div>
      </section>

      <section className='page-section page-section--surface'>
        <div className='container'>
          <div className='section-header section-header--lg'>
            <h2 className='section-header__title'>How Pricing Works</h2>
            <p className='section-header__desc'>
              Every project starts with clarity, scope, timeline, and exact cost before work
              begins.
            </p>
          </div>
          <div className='pricing-page__intro-grid'>
            {PRICING_HOW_IT_WORKS.map((step, index) => (
              <div
                key={step.title}
                className={`fact-card fact-card--${index % 2 === 0 ? 'primary' : 'secondary'}`}
              >
                <span className='fact-card__num'>Step {String(index + 1).padStart(2, '0')}</span>
                <h3 className='fact-card__title'>{step.title}</h3>
                <p className='fact-card__body'>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='page-section page-section--white page-section--border'>
        <div className='container'>
          <div className='section-header section-header--lg'>
            <h2 className='section-header__title'>General Project Tiers</h2>
            <p className='section-header__desc'>
              Most Excel and Access projects fall into one of these ranges. Service-specific details
              are below.
            </p>
          </div>
          <PricingTierGrid tiers={GENERAL_PROJECT_TIERS} variant='excel' />
          <p className='pricing-page__note'>
            <strong>All projects include:</strong> documentation, training, 100% code ownership, and
            a 30-day warranty.{' '}
            <Link href={CTA.primaryHref} className='text-link'>
              Request your fixed-price quote →
            </Link>
          </p>
        </div>
      </section>

      <section className='page-section page-section--surface'>
        <div className='container'>
          <div className='section-header section-header--lg'>
            <h2 className='section-header__title'>Pricing by Service</h2>
            <p className='section-header__desc'>
              Typical ranges by service type. Final quotes depend on your files, users, and
              integrations.
            </p>
          </div>

          {SERVICE_PRICING.map((service) => (
            <article key={service.slug} className='pricing-page__service-group'>
              <div className='pricing-page__service-header'>
                <div>
                  <h3 className='pricing-page__service-title'>{service.title}</h3>
                  <p className='pricing-page__service-intro'>{service.intro}</p>
                </div>
                <ResultCardCTA as={Link} href={service.href} label='View service →' />
              </div>
              <PricingTierGrid
                tiers={service.tiers}
                variant={service.variant}
                contactHref={`${CTA.primaryHref}?service=${service.slug}`}
              />
            </article>
          ))}
        </div>
      </section>

      <section className='page-section page-section--white page-section--border'>
        <div className='container'>
          <div className='section-header section-header--lg'>
            <h2 className='section-header__title'>Included in Every Project</h2>
            <p className='section-header__desc'>
              Fixed price covers delivery, not just code. You leave with a system your team can
              use.
            </p>
          </div>
          <div className='grid-3'>
            {PRICING_INCLUDED.map((item, index) => (
              <div
                key={item}
                className={`fact-card fact-card--${index % 2 === 0 ? 'primary' : 'secondary'}`}
              >
                <span className='fact-card__num'>{String(index + 1).padStart(2, '0')}</span>
                <p className='fact-card__body'>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='page-section page-section--surface'>
        <div className='container'>
          <div className='section-header section-header--lg'>
            <h2 className='section-header__title'>Pricing Questions</h2>
            <p className='section-header__desc'>
              Common questions about quotes, scope, and payment.
            </p>
          </div>
          <FAQAccordion items={PRICING_FAQS} />
          <p className='pricing-page__note'>
            Still comparing options? Read{' '}
            <Link href='/blog/excel-automation-cost-what-to-expect' className='text-link'>
              Excel automation cost expectations
            </Link>{' '}
            or browse{' '}
            <Link href='/case-studies' className='text-link'>
              client results
            </Link>
            .
          </p>
        </div>
      </section>

      <PageCTASection
        heading='Get Your Fixed-Price Quote'
        subtext='Free 30-minute consultation. I will review your process and send a detailed quote within 24–48 hours.'
      />
    </div>
  );
}
