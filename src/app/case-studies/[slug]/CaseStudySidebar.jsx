'use client';

import Link from 'next/link';

export default function CaseStudySidebar({ study, otherStudies }) {
  return (
    <aside className='blog-sidebar'>
      {otherStudies.length > 0 && (
        <div className='blog-sidebar__panel'>
          <h3 className='blog-sidebar__title'>More Case Studies</h3>
          <ul className='blog-sidebar__list'>
            {otherStudies.map((other) => (
              <li key={other.slug}>
                <Link href={`/case-studies/${other.slug}`} className='blog-sidebar__link'>
                  {other.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className='blog-sidebar__panel'>
        <h3 className='blog-sidebar__title'>Related Service</h3>
        <ul className='blog-sidebar__list'>
          <li>
            <Link href={study.relatedService} className='blog-sidebar__link'>
              {study.relatedServiceLabel} →
            </Link>
          </li>
        </ul>
      </div>

      <div className='blog-sidebar__cta'>
        <h3 className='blog-sidebar__title'>Need Help?</h3>
        <p className='blog-sidebar__cta-text'>Get a free consultation to discuss your project.</p>
        <Link href='/contact' className='blog-sidebar__cta-button'>
          Free Consultation
        </Link>
      </div>

      <div className='blog-sidebar__back'>
        <Link href='/case-studies' className='blog-sidebar__back-link'>
          ← View All Case Studies
        </Link>
      </div>
    </aside>
  );
}
