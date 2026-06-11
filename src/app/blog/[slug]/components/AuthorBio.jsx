'use client';

import Link from 'next/link';
import { CONSULTANTS } from '../../../../constants/site';

export default function AuthorBio() {
  return (
    <section className='page-section page-section--alt page-section--border-t'>
      <div className='container'>
        <div className='card card--interactive author-bio'>
          <div className='author-bio__avatar' aria-hidden='true'>
            RT
          </div>
          <div>
            <h2 className='author-bio__name'>
              <Link href='/about'>{CONSULTANTS.displayName}</Link>
            </h2>
            <p className='text-muted-sm'>{CONSULTANTS.title}</p>
            <p className='text-body-base'>
              {CONSULTANTS.displayName} is an Excel VBA and Access database consultant based in
              Springville, Utah, with 20+ years of experience automating business processes for
              companies across the US.
            </p>
            <Link href='/contact' className='text-link'>
              Contact me →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
