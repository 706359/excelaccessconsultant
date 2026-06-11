'use client';

import Link from 'next/link';
import { CONSULTANTS } from '../../../../constants/site';

export default function AuthorBio() {
  return (
    <div className='blog-author'>
      <div className='blog-author__inner'>
        <div className='blog-author__avatar'>
          <span className='blog-author__initials'>RT</span>
        </div>
        <div>
          <h4 className='blog-author__name'>
            <Link href='/about'>{CONSULTANTS.displayName}</Link>
          </h4>
          <p className='blog-author__role'>{CONSULTANTS.title}</p>
          <p className='blog-author__bio'>
            {CONSULTANTS.displayName} is an Excel VBA and Access database consultant based in
            Springville, Utah, with 20+ years of experience automating business processes for
            companies across the US.
          </p>
          <Link href='/contact' className='blog-author__contact'>
            Contact me →
          </Link>
        </div>
      </div>
    </div>
  );
}
