'use client';

import Link from 'next/link';

export default function AuthorBio() {
  return (
    <div className='mt-12 pt-8 border-t border-slate-200'>
      <div className='flex items-start gap-4'>
        <div className='w-16 h-16 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center'>
          <span className='text-2xl font-bold text-slate-500'>RT</span>
        </div>
        <div>
          <h4 className='text-heading-sm font-bold font-display text-slate-900 mb-1'>
            <Link href='/about' className='hover:text-primary transition-colors'>
              Robert Terry
            </Link>
          </h4>
          <p className='text-body-sm text-slate-500 mb-3'>Excel VBA & Access Database Consultant</p>
          <p className='text-body-base text-slate-600 leading-relaxed'>
            Robert Terry is an Excel VBA and Access database consultant based in Springville, Utah, with 20+ years of experience automating business processes for companies across the US.
          </p>
          <Link
            href='/contact'
            className='inline-flex items-center gap-2 text-primary font-semibold text-sm mt-3 hover:text-primary-hover transition-colors'
          >
            Contact Robert →
          </Link>
        </div>
      </div>
    </div>
  );
}
