import Link from 'next/link';
import { CASE_STUDIES, ALL_CASE_STUDY_SLUGS } from './registry';

export default function CaseStudiesPage() {
  const studies = ALL_CASE_STUDY_SLUGS.map((slug) => CASE_STUDIES[slug]);

  return (
    <div className='bg-base min-h-screen text-slate-800 font-sans'>
      <section className='py-12 md:py-16 bg-white border-b border-slate-200'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <h1 className='text-display-lg md:text-display-xl lg:text-display-2xl font-extrabold mb-6 font-display text-slate-900'>
            Real Results from Real Projects
          </h1>
          <p className='text-lg md:text-xl text-slate-700 mb-8 leading-relaxed max-w-3xl mx-auto'>
            See how I&apos;ve helped businesses eliminate manual work, fix broken systems, and
            automate repetitive tasks. Real problems. Real solutions. Real numbers.
          </p>
        </div>
      </section>

      <section className='py-12 md:py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid lg:grid-cols-3 gap-6 lg:gap-8'>
            <div className='lg:col-span-2 space-y-6'>
              {studies.map((study, idx) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className='group block bg-white rounded-2xl p-8 md:p-10 shadow-md border border-slate-200 hover:border-slate-300 transition-all duration-200'
                >
                  <div className='flex items-start gap-4 mb-4'>
                    <span className='text-primary font-bold text-xl font-mono flex-shrink-0'>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className='inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full'>
                      {study.industry}
                    </span>
                  </div>
                  <h2 className='text-heading-lg md:text-heading-xl font-bold mb-3 font-display text-slate-900 group-hover:text-primary transition-colors'>
                    {study.title}
                  </h2>
                  <p className='text-slate-600 leading-relaxed mb-4 line-clamp-2'>
                    {study.problem[0].slice(0, 200)}…
                  </p>
                  <div className='flex flex-wrap gap-4 mb-4'>
                    {study.metrics.slice(0, 3).map((m) => (
                      <div key={m.label} className='text-sm'>
                        <span className='font-bold text-primary'>{m.value}</span>{' '}
                        <span className='text-slate-500'>{m.label}</span>
                      </div>
                    ))}
                  </div>
                  <span className='inline-flex items-center gap-1 text-primary text-sm font-medium'>
                    Read Full Case Study
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>

            <div className='lg:col-span-1'>
              <div className='sticky top-24 space-y-6'>
                <div className='bg-white rounded-2xl p-8 shadow-lg border border-slate-200'>
                  <div className='flex items-center gap-3 mb-6'>
                    <div className='w-1 h-8 bg-primary rounded-full'></div>
                    <h3 className='text-heading-md md:text-heading-lg font-bold font-display text-slate-900'>
                      Quick Links
                    </h3>
                  </div>
                  <div className='space-y-4'>
                    <Link
                      href='/excel-automation'
                      className='block group pb-4 border-b border-slate-200 last:border-0 last:pb-0 hover:translate-x-1 transition-all duration-200'
                    >
                      <h4 className='text-base md:text-lg font-bold mb-1 font-display text-slate-900 group-hover:text-primary transition-colors duration-200 leading-tight'>
                        Excel Automation
                      </h4>
                      <p className='text-slate-600 text-sm leading-relaxed'>
                        Automate your Excel processes
                      </p>
                    </Link>
                    <Link
                      href='/access-consulting'
                      className='block group pb-4 border-b border-slate-200 last:border-0 last:pb-0 hover:translate-x-1 transition-all duration-200'
                    >
                      <h4 className='text-base md:text-lg font-bold mb-1 font-display text-slate-900 group-hover:text-primary transition-colors duration-200 leading-tight'>
                        Access Consulting
                      </h4>
                      <p className='text-slate-600 text-sm leading-relaxed'>
                        Fix and optimize your database
                      </p>
                    </Link>
                    <Link
                      href='/contact'
                      className='block group pb-4 border-b border-slate-200 last:border-0 last:pb-0 hover:translate-x-1 transition-all duration-200'
                    >
                      <h4 className='text-base md:text-lg font-bold mb-1 font-display text-slate-900 group-hover:text-primary transition-colors duration-200 leading-tight'>
                        Get Free Consultation
                      </h4>
                      <p className='text-slate-600 text-sm leading-relaxed'>
                        Discuss your project needs
                      </p>
                    </Link>
                  </div>
                </div>
                <div className='bg-white rounded-2xl p-8 shadow-lg border border-slate-200'>
                  <div className='flex items-center gap-3 mb-6'>
                    <div className='w-1 h-8 bg-secondary rounded-full'></div>
                    <h3 className='text-heading-md md:text-heading-lg font-bold font-display text-slate-900'>
                      Contact Info
                    </h3>
                  </div>
                  <div className='space-y-4'>
                    <div>
                      <p className='text-sm font-semibold text-slate-700 mb-2'>Phone</p>
                      <a
                        href='tel:8016163702'
                        className='text-primary hover:text-primary-hover font-bold text-lg transition-colors duration-200'
                      >
                        801-616-3702
                      </a>
                    </div>
                    <div>
                      <p className='text-sm font-semibold text-slate-700 mb-2'>Email</p>
                      <a
                        href='mailto:rob@excelaccessconsultant.com'
                        className='text-primary hover:text-primary-hover font-medium transition-colors duration-200 break-all text-sm'
                      >
                        rob@excelaccessconsultant.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-12 md:py-16 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <h2 className='text-heading-lg md:text-heading-xl font-bold mb-6 font-display text-slate-900'>
            Ready to Get Similar Results?
          </h2>
          <p className='text-lg mb-8 text-slate-700 max-w-7xl mx-auto leading-relaxed'>
            Every business is different, but the results are similar: massive time savings, zero
            errors, and better decision-making. Get a free consultation to see how automation can
            help your business.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4 mb-8'>
            <Link
              href='/contact'
              className='inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-hover text-white font-medium rounded-md transition-colors'
            >
              Schedule Free Consultation
            </Link>
            <a
              href='tel:8016163702'
              className='inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium rounded-md transition-colors'
            >
              Call 801-616-3702
            </a>
          </div>
          <div className='flex flex-wrap justify-center gap-4 text-sm'>
            <Link
              href='/excel-automation'
              className='text-slate-600 hover:text-primary font-medium transition-colors duration-200'
            >
              Learn more about Excel Automation →
            </Link>
            <span className='text-slate-300'>|</span>
            <Link
              href='/access-consulting'
              className='text-slate-600 hover:text-primary font-medium transition-colors duration-200'
            >
              Learn more about Access Consulting →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
