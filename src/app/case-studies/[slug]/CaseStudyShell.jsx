'use client';

import Link from 'next/link';
import { CONSULTANTS } from '../../../constants/site';
import PageCTASection from '../../../components/ui/PageCTASection/PageCTASection';
import CaseStudySidebar from './CaseStudySidebar';

export default function CaseStudyShell({ study, otherStudies, children }) {
  return (
    <div className='blog-page'>
      <article className='blog-article'>
        <div className='blog-article__inner'>
          <header className='blog-article__header'>
            <span className='blog-article__category'>{study.industry}</span>
            <h1 className='blog-article__title'>{study.title}</h1>
            <div className='blog-article__meta'>
              <Link href='/about'>{CONSULTANTS.displayName}</Link>
              <span aria-hidden='true'>•</span>
              <span>ExcelAccessConsultant.com</span>
            </div>
          </header>

          <div className='blog-article__layout'>
            <div className='blog-content'>{children}</div>
            <CaseStudySidebar study={study} otherStudies={otherStudies} />
          </div>
        </div>
      </article>

      <PageCTASection
        heading='Have a Similar Problem?'
        subtext='Every business is different, but the approach is the same: understand the problem, build a targeted solution, and deliver measurable results.'
        phoneLocation={`case-study-${study.slug}`}
      />
    </div>
  );
}
