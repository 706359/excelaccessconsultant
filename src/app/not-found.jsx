import Link from 'next/link';
import BrandSubline from '../components/BrandSubline/BrandSubline';
import Button from '../components/ui/Button/Button';
import { CONSULTANTS, CTA } from '../constants/site';

export const metadata = {
  title: 'Page Not Found | ExcelAccessConsultant',
  description: `The page you requested could not be found. Browse Excel automation, Access consulting, case studies, or contact ${CONSULTANTS.displayName} for help.`,
  robots: { index: false, follow: true },
};

const POPULAR_PAGES = [
  {
    href: '/excel-automation',
    title: 'Excel Automation',
    desc: 'Automate reports and repetitive spreadsheet work',
    accent: 'primary',
  },
  {
    href: '/access-consulting',
    title: 'Access Consulting',
    desc: 'Fix crashes, multi-user issues, and database design',
    accent: 'secondary',
  },
  {
    href: '/case-studies',
    title: 'Case Studies',
    desc: 'Real client results and before/after metrics',
    accent: 'primary',
  },
  {
    href: '/blog',
    title: 'Blog',
    desc: 'Guides on Excel VBA, Access, and automation',
    accent: 'secondary',
  },
  {
    href: '/free-checklist',
    title: 'Free Resources',
    desc: 'Access health check and automation checklists',
    accent: 'primary',
  },
  {
    href: '/contact',
    title: 'Contact',
    desc: `Free 30-minute consultation with ${CONSULTANTS.displayName}`,
    accent: 'secondary',
  },
];

export default function NotFound() {
  return (
    <div className='page'>
      <section className='not-found-section' aria-labelledby='not-found-heading'>
        <div className='not-found-section__ambient' aria-hidden='true'>
          <div className='not-found-section__blob not-found-section__blob--green' />
          <div className='not-found-section__blob not-found-section__blob--crimson' />
        </div>

        <div className='container'>
          <div className='not-found__glass'>
            <BrandSubline text='Page not found' centered className='not-found__eyebrow' />

            <p className='not-found__code' aria-hidden='true'>
              404
            </p>

            <h1 id='not-found-heading' className='not-found__title'>
              This page doesn&apos;t exist
            </h1>

            <p className='not-found__message'>
              The link may be outdated or the URL was typed incorrectly. Try one of the pages below,
              or contact {CONSULTANTS.displayName} for direct help with Excel and Access projects.
            </p>

            <div className='not-found__actions'>
              <Button variant='primary' size='large' as={Link} href='/'>
                Back to Home
              </Button>
              <Button variant='outline-access' size='large' as={Link} href={CTA.primaryHref}>
                {CTA.primary}
              </Button>
            </div>

            <div className='not-found__grid'>
              {POPULAR_PAGES.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`not-found__card not-found__card--${item.accent}`}
                >
                  <h2 className='not-found__card-title'>{item.title}</h2>
                  <p className='not-found__card-desc'>{item.desc}</p>
                  <span className='not-found__card-cta'>
                    Visit page
                    <svg
                      className='icon-arrow'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>

            <p className='not-found__help'>
              Prefer to talk now?{' '}
              <a href={CTA.phoneHref} className='text-link'>
                {CTA.phone}
              </a>{' '}
              or{' '}
              <a href='mailto:rob@excelaccessconsultant.com' className='text-link'>
                rob@excelaccessconsultant.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
