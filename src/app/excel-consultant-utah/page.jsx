'use client';

import Link from 'next/link';
import SEO from '../../components/SEO/SEO';
import ContactCTAs, { CTA_BUTTON_VARIANTS } from '../../components/ui/ContactCTAs/ContactCTAs';
import PageCTASection from '../../components/ui/PageCTASection/PageCTASection';
import ScrollReveal from '../../components/ui/ScrollReveal/ScrollReveal';
import { CONSULTANTS, CTA, TRUST } from '../../constants/site';
import {
  UTAH_CITIES,
  UTAH_LOCAL_BENEFITS,
  UTAH_PROCESS_STEPS,
  UTAH_RELATED_LINKS,
  UTAH_SERVICES,
} from '../../constants/utahPage';

const ItemArrow = () => (
  <svg
    className='cs-item__arrow'
    width='14'
    height='14'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
  >
    <path d='M9 5l7 7-7 7' />
  </svg>
);

export default function ExcelConsultantUtah() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ExcelAccessConsultant.com',
    description:
      'Excel VBA and Access Database consultant based in Springville, Utah. Serving businesses across Utah with custom automation, database development, and financial modeling solutions.',
    founder: CONSULTANTS.founders.map((name) => ({
      '@type': 'Person',
      name,
    })),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Springville',
      addressRegion: 'UT',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.1652,
      longitude: -111.6107,
    },
    telephone: CTA.phone,
    email: 'rob@excelaccessconsultant.com',
    url: 'https://excelaccessconsultant.com',
    areaServed: [
      { '@type': 'State', name: 'Utah' },
      { '@type': 'City', name: 'Salt Lake City' },
      { '@type': 'City', name: 'Provo' },
      { '@type': 'City', name: 'Ogden' },
      { '@type': 'City', name: 'Park City' },
      { '@type': 'City', name: 'St. George' },
    ],
    priceRange: '$$',
    foundingDate: '2004',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 1 },
    knowsAbout: [
      'Excel VBA',
      'Microsoft Access',
      'Database Development',
      'Financial Modeling',
      'Business Automation',
    ],
  };

  return (
    <div className='page'>
      <SEO
        title={`Excel VBA Consultant in Utah | ${CONSULTANTS.displayName}`}
        description='Excel VBA consultant based in Springville, Utah. Serving Salt Lake City, Provo, Ogden, and all of Utah. 20+ years automating business processes. Free consultation.'
        url='https://excelaccessconsultant.com/excel-consultant-utah'
        ogTitle={`Excel VBA Consultant in Utah | ${CONSULTANTS.displayName}`}
      />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <section className='page-hero'>
        <div className='container'>
          <span className='chip-secondary lead-magnet-hero__eyebrow'>Utah · Springville</span>
          <h1 className='page-hero__title page-hero__title--compact'>
            Excel VBA Consultant Serving Utah Businesses
          </h1>
          <p className='page-hero__lead'>
            {CONSULTANTS.displayName} is an Excel VBA and Access database consultant based in
            Springville, Utah. For {TRUST.years}, I&apos;ve helped Utah businesses eliminate manual
            spreadsheet work, build reliable databases, and automate reporting that saves thousands
            of hours every year.
          </p>
          <p className='page-hero__lead'>
            Whether you&apos;re in Salt Lake City, Provo, Ogden, Park City, St. George, or anywhere
            in Utah, you get the same direct consulting, with the added benefit of being local.
            In-person meetings are available in Utah County and along the Wasatch Front.
          </p>
          <ContactCTAs {...CTA_BUTTON_VARIANTS.onLight} />
        </div>
      </section>

      <ScrollReveal as='section' className='page-section page-section--alt page-section--border'>
        <div className='container'>
          <div className='section-header section-header--lg'>
            <h2 className='section-header__title'>Services for Utah Businesses</h2>
            <p className='section-header__desc'>
              From small teams in Provo to enterprise groups in Salt Lake City, fixed-price projects
              with training so your team can maintain what I build.
            </p>
          </div>

          <div className='cs-grid stagger-group'>
            {UTAH_SERVICES.map((service) => (
              <Link
                key={service.num}
                href={service.href}
                className={`cs-item cs-item--${service.accent}`}
              >
                <span className='cs-item__num'>{service.num}</span>
                <div className='cs-item__body'>
                  <span className='cs-item__industry'>{service.industry}</span>
                  <h3 className='cs-item__title'>{service.title}</h3>
                  <p className='cs-item__outcome'>{service.desc}</p>
                </div>
                <ItemArrow />
              </Link>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal
        as='section'
        className='page-section page-section--white page-section--border'
        delay={80}
      >
        <div className='container'>
          <div className='section-header section-header--lg'>
            <h2 className='section-header__title'>Why Hire a Local Utah Consultant</h2>
            <p className='section-header__desc'>
              Remote delivery works statewide, local presence adds speed, context, and long-term
              support when you need it.
            </p>
          </div>

          <div className='grid-2 stagger-group'>
            {UTAH_LOCAL_BENEFITS.map((item) => (
              <div key={item.num} className={`fact-card fact-card--${item.accent}`}>
                <span className='fact-card__num'>{item.num}</span>
                <h3 className='fact-card__title'>{item.title}</h3>
                <p className='fact-card__body'>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal
        as='section'
        className='page-section page-section--alt page-section--border'
        delay={120}
      >
        <div className='container'>
          <div className='section-header section-header--lg'>
            <h2 className='section-header__title'>How It Works</h2>
            <p className='section-header__desc'>
              A straightforward process, no hourly billing surprises, no disappearing after
              delivery.
            </p>
          </div>

          <div className='grid-3 process-grid stagger-group'>
            {UTAH_PROCESS_STEPS.map((step) => (
              <div key={step.num} className='process-card'>
                <span className={`process-card__label process-card__label--${step.accent}`}>
                  {step.num}
                </span>
                <h3>{step.title}</h3>
                <p className='text-muted-sm'>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal
        as='section'
        className='page-section page-section--white page-section--border'
        delay={160}
      >
        <div className='container'>
          <div className='section-header section-header--lg'>
            <h2 className='section-header__title'>Serving All of Utah</h2>
            <p className='section-header__desc'>
              Based in Springville. Most projects run remotely with screen-sharing and calls.
              In-person meetings available along the Wasatch Front.
            </p>
          </div>

          <div className='cs-grid stagger-group'>
            {UTAH_CITIES.map((city) => (
              <div key={city.name} className={`cs-item cs-item--${city.accent} cs-item--static`}>
                <span className='cs-item__num'>{city.num}</span>
                <div className='cs-item__body'>
                  <span className='cs-item__industry'>{city.region}</span>
                  <h3 className='cs-item__title'>{city.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <PageCTASection
        heading='Schedule a Free Consultation'
        subtext="Let's discuss your Excel or Access project. 30 minutes, no cost, no pressure. I'll outline what's possible and what it would take."
        phoneLocation='utah-footer'
      />

      <ScrollReveal
        as='section'
        className='page-section page-section--alt page-section--border'
        delay={80}
      >
        <div className='container'>
          <div className='section-header section-header--lg'>
            <h2 className='section-header__title'>Learn More</h2>
            <p className='section-header__desc'>
              Explore services, case studies, and ways to get started.
            </p>
          </div>

          <div className='cs-grid stagger-group'>
            {UTAH_RELATED_LINKS.map((link) => (
              <Link key={link.num} href={link.href} className={`cs-item cs-item--${link.accent}`}>
                <span className='cs-item__num'>{link.num}</span>
                <div className='cs-item__body'>
                  <span className='cs-item__industry'>{link.industry}</span>
                  <h3 className='cs-item__title'>{link.title}</h3>
                  <p className='cs-item__outcome'>{link.outcome}</p>
                </div>
                <ItemArrow />
              </Link>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
