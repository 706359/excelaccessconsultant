'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import SEO from '../../components/SEO/SEO';
import ContactCTAs, { CTA_BUTTON_VARIANTS } from '../../components/ui/ContactCTAs/ContactCTAs';
import FilterChipBar from '../../components/ui/FilterChipBar/FilterChipBar';
import PageCTASection from '../../components/ui/PageCTASection/PageCTASection';
import ResultCardCTA from '../../components/ui/ResultCardCTA/ResultCardCTA';
import ScrollReveal from '../../components/ui/ScrollReveal/ScrollReveal';
import { getCaseStudyCardDisplay } from '../../utils/contentAccents';
import { ALL_CASE_STUDY_SLUGS, CASE_STUDIES } from './registry';

const ALL_STUDIES = ALL_CASE_STUDY_SLUGS.filter((slug) => !CASE_STUDIES[slug].canonicalSlug).map(
  (slug) => CASE_STUDIES[slug],
);

const INDUSTRY_ORDER = [
  'Manufacturing',
  'Construction',
  'Financial Services',
  'Distribution',
  'Retail',
  'Healthcare',
];

function getIndustryFilters(studies) {
  const counts = studies.reduce((acc, study) => {
    acc[study.industry] = (acc[study.industry] || 0) + 1;
    return acc;
  }, {});

  return [
    { id: 'all', label: 'All Industries', count: studies.length, accent: 'primary' },
    ...INDUSTRY_ORDER.filter((industry) => counts[industry]).map((industry) => ({
      id: industry,
      label: industry,
      count: counts[industry],
      accent: industry === 'Financial Services' || industry === 'Retail' ? 'primary' : 'secondary',
    })),
  ];
}

const FILTER_OPTIONS = getIndustryFilters(ALL_STUDIES);

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const industry = new URLSearchParams(window.location.search).get('industry');
    if (industry && FILTER_OPTIONS.some((option) => option.id === industry)) {
      setActiveFilter(industry);
    }
  }, []);

  const filteredStudies = useMemo(() => {
    if (activeFilter === 'all') return ALL_STUDIES;
    return ALL_STUDIES.filter((study) => study.industry === activeFilter);
  }, [activeFilter]);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    const nextUrl =
      filterId === 'all'
        ? '/case-studies'
        : `/case-studies?industry=${encodeURIComponent(filterId)}`;
    window.history.replaceState(null, '', nextUrl);
  };

  return (
    <div className='page'>
      <SEO
        title='Case Studies | ExcelAccessConsultant'
        description='Real Excel and Access consulting results: manufacturing automation, finance close, database repair, and more. See before/after metrics from client projects.'
        url='https://excelaccessconsultant.com/case-studies'
        ogTitle='Case Studies, Real Results'
      />

      <section className='page-hero page-hero--centered'>
        <div className='container'>
          <span className='chip-primary lead-magnet-hero__eyebrow'>Client Results</span>
          <h1 className='page-hero__title page-hero__title--compact'>
            Real Results from Real Projects
          </h1>
          <p className='page-hero__lead'>
            See how I&apos;ve helped businesses eliminate manual work, fix broken systems, and
            automate repetitive tasks. Real problems. Real solutions. Real numbers.
          </p>
          <ContactCTAs {...CTA_BUTTON_VARIANTS.onLight} center />
        </div>
      </section>

      <ScrollReveal as='section' className='page-section page-section--white page-section--border'>
        <div className='container'>
          <div className='section-header section-header--lg'>
            <h2 className='section-header__title'>All Case Studies</h2>
            <p className='section-header__desc'>
              Filter by industry to find projects similar to yours.
            </p>
          </div>

          <FilterChipBar
            label='Filter by industry'
            options={FILTER_OPTIONS}
            value={activeFilter}
            onChange={handleFilterChange}
          />

          <p className='filter-bar__results'>
            Showing {filteredStudies.length} of {ALL_STUDIES.length} case studies
            {activeFilter !== 'all' ? ` in ${activeFilter}` : ''}
          </p>

          {filteredStudies.length === 0 ? (
            <p className='text-muted filter-bar__empty'>No case studies match this filter.</p>
          ) : (
            <div className='cs-grid'>
              {filteredStudies.map((study, index) => {
                const { accent, transform, highlightValue, highlightLabel, excerpt } =
                  getCaseStudyCardDisplay(study);

                return (
                  <Link
                    key={study.slug}
                    href={`/case-studies/${study.slug}`}
                    className={`cs-result-card cs-result-card--${accent}`}
                  >
                    <div className='cs-result-card__top'>
                      <span className={accent === 'primary' ? 'chip-primary' : 'chip-secondary'}>
                        {study.industry}
                      </span>
                      <span className='cs-result-card__num'>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h2 className='cs-result-card__metric cs-result-card__metric--title'>
                      {study.title}
                    </h2>
                    {highlightValue && (
                      <>
                        <div className='cs-result-card__metric'>{highlightValue}</div>
                        <div className='cs-result-card__label'>{highlightLabel}</div>
                      </>
                    )}
                    {transform && (
                      <div className='cs-result-card__transform'>
                        <span className='cs-result-card__before'>{transform.before}</span>
                        <span className='cs-result-card__sep'>→</span>
                        <span className='cs-result-card__after'>{transform.after}</span>
                      </div>
                    )}
                    <p className='cs-result-card__desc'>{excerpt}</p>
                    <ResultCardCTA label='Read case study →' />
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </ScrollReveal>

      <PageCTASection
        heading='Ready to Get Similar Results?'
        subtext='Every business is different, but the approach is the same: understand the problem, build a targeted solution, and deliver measurable results.'
      />
    </div>
  );
}
