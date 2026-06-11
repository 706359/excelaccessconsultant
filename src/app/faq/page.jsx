'use client';

import Link from 'next/link';
import FAQSchema from '../../components/SEO/FAQSchema';
import SEO from '../../components/SEO/SEO';
import ContactCTAs, { CTA_BUTTON_VARIANTS } from '../../components/ui/ContactCTAs/ContactCTAs';
import FAQAccordion from '../../components/ui/FAQAccordion/FAQAccordion';
import ScrollReveal from '../../components/ui/ScrollReveal/ScrollReveal';
import { FAQ_PAGE_ITEMS, FAQ_RELATED_LINKS, FAQ_SECTIONS } from '../../constants/faqPage';
import { TRUST } from '../../constants/site';

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

export default function FAQ() {
  return (
    <div className='page'>
      <SEO
        title='FAQ | ExcelAccessConsultant.com'
        description='Frequently asked questions about Excel and Access consulting services. Get answers about pricing, timelines, support, and more.'
        keywords='excel consultant faq, access database faq, vba automation questions, excel consulting questions'
        url='https://excelaccessconsultant.com/faq'
        ogTitle='Frequently Asked Questions'
      />
      <FAQSchema faqs={FAQ_PAGE_ITEMS} />

      <section className='page-hero page-hero--centered'>
        <div className='container'>
          <span className='chip-primary lead-magnet-hero__eyebrow'>Questions &amp; Answers</span>
          <h1 className='page-hero__title page-hero__title--compact'>Frequently Asked Questions</h1>
          <p className='page-hero__lead'>
            Answers about pricing, project timelines, remote delivery, and what to expect when you
            hand off a broken spreadsheet or database, from a consultant with {TRUST.years} of
            experience and {TRUST.projects} completed projects.
          </p>
        </div>
      </section>

      <ScrollReveal as='section' className='page-section page-section--alt page-section--border'>
        <div className='container container--narrow'>
          <div className='faq-sections'>
            {FAQ_SECTIONS.map((section) => (
              <div key={section.id} className='faq-section-block'>
                <div className='section-header section-header--lg'>
                  <h2 className='section-header__title'>{section.title}</h2>
                  <p className='section-header__desc'>{section.description}</p>
                </div>
                <FAQAccordion items={section.items} className='faq-list--numbered' />
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal
        as='section'
        className='page-section page-section--white page-section--border'
        delay={80}
      >
        <div className='container container--narrow'>
          <div className='faq-callout'>
            <span className='chip-secondary'>Still have questions?</span>
            <h2 className='faq-callout__title'>Talk to me directly</h2>
            <p className='faq-callout__text'>
              If your situation is not covered here, book a free consultation or send a message, I
              respond within 24 hours.
            </p>
            <ContactCTAs {...CTA_BUTTON_VARIANTS.onLight} center />
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
            <h2 className='section-header__title'>Helpful Next Steps</h2>
            <p className='section-header__desc'>
              Contact, pricing, and free resources for Excel and Access teams.
            </p>
          </div>
          <div className='cs-grid stagger-group'>
            {FAQ_RELATED_LINKS.map((link) => (
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
