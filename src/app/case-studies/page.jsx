'use client';

import Link from 'next/link';
import SEO from '../../components/SEO/SEO';
import PageCTASection from '../../components/ui/PageCTASection/PageCTASection';
import { ALL_CASE_STUDY_SLUGS, CASE_STUDIES } from './registry';

export default function CaseStudiesPage() {
  const studies = ALL_CASE_STUDY_SLUGS.filter((slug) => !CASE_STUDIES[slug].canonicalSlug).map(
    (slug) => CASE_STUDIES[slug],
  );

  return (
    <div className='blog-index'>
      <SEO
        title='Case Studies | ExcelAccessConsultant'
        description='Real Excel and Access consulting results: manufacturing automation, finance close, database repair, and more. See before/after metrics from client projects.'
        url='https://excelaccessconsultant.com/case-studies'
        ogTitle='Case Studies, Real Results'
      />

      <section className='blog-index__hero'>
        <div className='blog-index__hero-inner'>
          <h1 className='blog-index__title'>Real Results from Real Projects</h1>
          <p className='blog-index__intro'>
            See how I&apos;ve helped businesses eliminate manual work, fix broken systems, and
            automate repetitive tasks. Real problems. Real solutions. Real numbers.
          </p>
        </div>
      </section>

      <section className='blog-index__list-section'>
        <div className='blog-index__list-inner'>
          <div className='blog-card-grid'>
            {studies.map((study) => (
              <Link key={study.slug} href={`/case-studies/${study.slug}`} className='blog-card'>
                <div className='blog-card__body'>
                  <span className='blog-card__category'>{study.industry}</span>
                  <h2 className='blog-card__title'>{study.title}</h2>
                  <p className='blog-card__excerpt'>{study.problem[0].slice(0, 200)}…</p>
                  <div className='blog-card__meta'>
                    <span>
                      {study.metrics[0].label}: {study.metrics[0].value}
                    </span>
                    {study.metrics[1] && (
                      <span>
                        {study.metrics[1].label}: {study.metrics[1].value}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCTASection
        heading='Ready to Get Similar Results?'
        subtext='Every business is different, but the approach is the same: understand the problem, build a targeted solution, and deliver measurable results.'
        phoneLocation='case-studies-index'
      />
    </div>
  );
}
