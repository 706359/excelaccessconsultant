'use client';

import Link from 'next/link';
import PageCTASection from '../../../components/ui/PageCTASection/PageCTASection';
import { CONSULTANTS } from '../../../constants/site';
import { getServiceAccent } from '../../../utils/contentAccents';
import CaseStudySidebar from './CaseStudySidebar';

export default function CaseStudyShell({ study, otherStudies, children }) {
  const accent = getServiceAccent(study.relatedService);

  return (
    <div className='page'>
      <section className='page-hero'>
        <div className='container'>
          <span className={accent === 'primary' ? 'chip-primary' : 'chip-secondary'}>
            {study.industry}
          </span>
          <h1 className='page-hero__title page-hero__title--compact'>{study.title}</h1>
          <div className='content-meta'>
            <Link href='/about'>{CONSULTANTS.displayName}</Link>
            <span aria-hidden='true'>•</span>
            <span>ExcelAccessConsultant.com</span>
          </div>
        </div>
      </section>

      <section className='page-section page-section--white page-section--border'>
        <div className='container'>
          <div className='grid-sidebar'>
            <div className='grid-sidebar__main blog-content'>{children}</div>
            <div className='grid-sidebar__aside'>
              <CaseStudySidebar study={study} otherStudies={otherStudies} accent={accent} />
            </div>
          </div>
        </div>
      </section>

      <PageCTASection
        heading='Have a Similar Problem?'
        subtext='Every business is different, but the approach is the same: understand the problem, build a targeted solution, and deliver measurable results.'
      />
    </div>
  );
}
