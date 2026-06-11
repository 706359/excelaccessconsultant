'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  DEFAULT_LEAD_MAGNET_ID,
  LEAD_MAGNETS,
  getLeadMagnetById,
} from '../../constants/leadMagnets';
import { TRUST } from '../../constants/site';
import SEO from '../SEO/SEO';
import PageCTASection from '../ui/PageCTASection/PageCTASection';
import ScrollReveal from '../ui/ScrollReveal/ScrollReveal';
import LeadMagnetCapture from './LeadMagnetCapture';

function getInitialResourceId() {
  if (typeof window === 'undefined') return DEFAULT_LEAD_MAGNET_ID;
  const params = new URLSearchParams(window.location.search);
  const guide = params.get('guide');
  return guide && getLeadMagnetById(guide) ? guide : DEFAULT_LEAD_MAGNET_ID;
}

export default function LeadMagnetHub({
  seoUrl = 'https://excelaccessconsultant.com/free-checklist',
  seoTitle = 'Free Excel & Access Resources | ExcelAccessConsultant',
  seoDescription = 'Download free Excel automation checklists, Access database health guides, and VBA best practices from Robert Terry. No cost, no spam.',
  phoneLocation = 'free-checklist',
}) {
  const [selectedId, setSelectedId] = useState(DEFAULT_LEAD_MAGNET_ID);
  const [captureKey, setCaptureKey] = useState(0);

  useEffect(() => {
    setSelectedId(getInitialResourceId());
  }, []);

  const selectedResource = getLeadMagnetById(selectedId);

  const selectResource = (id) => {
    setSelectedId(id);
    setCaptureKey((key) => key + 1);
    requestAnimationFrame(() => {
      const panel = document.getElementById('download-form');
      if (panel) {
        const offset = 100;
        const top = panel.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      }
    });
  };

  return (
    <div className='page'>
      <SEO title={seoTitle} description={seoDescription} url={seoUrl} ogTitle={seoTitle} />

      <section className='page-hero page-hero--centered'>
        <div className='container'>
          <span className='chip-primary lead-magnet-hero__eyebrow'>Free Downloads</span>
          <h1 className='page-hero__title page-hero__title--compact'>
            Free Excel &amp; Access Resources
          </h1>
          <p className='page-hero__lead'>
            Practical checklists and guides from a consultant with {TRUST.years} of experience and{' '}
            {TRUST.projects} completed projects. Pick a resource, enter your email, and download
            instantly.
          </p>
        </div>
      </section>

      <ScrollReveal as='section' className='page-section page-section--alt page-section--border'>
        <div className='container'>
          <div className='section-header section-header--lg'>
            <h2 className='section-header__title'>Choose a Free Guide</h2>
            <p className='section-header__desc'>
              Three focused downloads for Access stability, Excel automation readiness, and VBA
              maintainability.
            </p>
          </div>

          <div className='grid-3 stagger-group lead-magnet-grid'>
            {LEAD_MAGNETS.map((resource, index) => {
              const isSelected = resource.id === selectedId;
              const chipClass = resource.accent === 'primary' ? 'chip-primary' : 'chip-secondary';

              return (
                <button
                  key={resource.id}
                  type='button'
                  className={[
                    'lead-magnet-card',
                    `lead-magnet-card--${resource.accent}`,
                    isSelected ? 'lead-magnet-card--selected' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => selectResource(resource.id)}
                  aria-pressed={isSelected}
                >
                  <div className='lead-magnet-card__top'>
                    <span className={chipClass}>{resource.category}</span>
                    <span className='lead-magnet-card__num'>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className='lead-magnet-card__title'>{resource.title}</h3>
                  <p className='lead-magnet-card__subtitle'>{resource.subtitle}</p>
                  <p className='lead-magnet-card__desc'>{resource.description}</p>
                  <span className='lead-magnet-card__action'>
                    {isSelected ? 'Selected, scroll to download' : 'Select this guide →'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal
        as='section'
        className='page-section page-section--white page-section--border'
        delay={80}
      >
        <div className='container container--narrow'>
          <LeadMagnetCapture key={`${selectedId}-${captureKey}`} resource={selectedResource} />
        </div>
      </ScrollReveal>

      <ScrollReveal
        as='section'
        className='page-section page-section--alt page-section--border'
        delay={120}
      >
        <div className='container'>
          <div className='section-header section-header--lg'>
            <h2 className='section-header__title'>More Free Tools</h2>
            <p className='section-header__desc'>
              Estimate ROI or browse articles while you review your download.
            </p>
          </div>
          <div className='cs-grid'>
            <Link href='/resources/calculator' className='cs-item cs-item--primary'>
              <span className='cs-item__num'>01</span>
              <div className='cs-item__body'>
                <span className='cs-item__industry'>Calculator</span>
                <h3 className='cs-item__title'>Manual Work ROI Calculator</h3>
                <p className='cs-item__outcome'>
                  Estimate annual cost of repetitive Excel and Access work.
                </p>
              </div>
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
            </Link>
            <Link href='/blog' className='cs-item cs-item--secondary'>
              <span className='cs-item__num'>02</span>
              <div className='cs-item__body'>
                <span className='cs-item__industry'>Blog</span>
                <h3 className='cs-item__title'>Excel &amp; Access Articles</h3>
                <p className='cs-item__outcome'>
                  Practical guides on automation, repair, and migration.
                </p>
              </div>
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
            </Link>
            <Link href='/case-studies' className='cs-item cs-item--primary'>
              <span className='cs-item__num'>03</span>
              <div className='cs-item__body'>
                <span className='cs-item__industry'>Results</span>
                <h3 className='cs-item__title'>Client Case Studies</h3>
                <p className='cs-item__outcome'>Before-and-after outcomes from recent projects.</p>
              </div>
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
            </Link>
          </div>
        </div>
      </ScrollReveal>

      <PageCTASection
        heading='Want an Expert to Review Your System?'
        subtext='Book a free consultation or request a fixed-price estimate for Access repair, Excel automation, or VBA development.'
        phoneLocation={phoneLocation}
      />
    </div>
  );
}
