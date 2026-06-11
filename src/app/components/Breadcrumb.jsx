'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BreadcrumbSchema from '../../components/SEO/BreadcrumbSchema/BreadcrumbSchema';
import { resolveCaseStudySlug } from '../case-studies/registry';

export default function Breadcrumb() {
  const pathname = usePathname();

  if (pathname === '/') {
    return null;
  }

  const routeLabels = {
    '/excel-automation': 'Excel Automation',
    '/access-consulting': 'Access Development',
    '/financial-modeling': 'Financial Modeling',
    '/database-migration': 'Database Migration',
    '/vba-development': 'VBA Development',
    '/case-studies': 'Case Studies',
    '/blog': 'Blog',
    '/about': 'About',
    '/contact': 'Contact',
    '/faq': 'FAQ',
    '/pricing': 'Pricing',
    '/privacy-policy': 'Privacy Policy',
    '/thank-you': 'Thank You',
    '/access-database-repair': 'Access Database Repair',
    '/excel-consultant-utah': 'Excel Consultant Utah',
    '/hire-excel-vba-consultant': 'Hire Excel VBA Consultant',
    '/free-checklist': 'Free Resources',
    '/free-resources': 'Free Resources',
  };

  const buildBreadcrumbs = () => {
    const items = [{ path: '/', label: 'Home' }];
    const pathSegments = pathname.split('/').filter(Boolean);

    if (pathSegments[0] === 'case-studies' && pathSegments.length > 1) {
      items.push({ path: '/case-studies', label: 'Case Studies' });
      const studySlug = resolveCaseStudySlug(pathSegments[1]);
      items.push({
        path: pathname,
        label: studySlug
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' '),
        isActive: true,
      });
      return items;
    }

    if (pathSegments[0] === 'blog' && pathSegments.length > 1) {
      items.push({ path: '/blog', label: 'Blog' });
      const postSlug = pathSegments[1];
      const postLabels = {
        '10-signs-you-need-excel-automation': '10 Signs You Need Excel Automation',
        'why-your-access-database-keeps-crashing': 'Why Your Access Database Keeps Crashing',
        'excel-automation-cost-what-to-expect': 'Excel Automation Cost',
        'how-to-speed-up-slow-excel-spreadsheets': 'How to Speed Up Slow Excel Spreadsheets',
        'access-vs-sql-server-when-to-migrate': 'Access vs SQL Server',
        'common-excel-vba-mistakes-and-how-to-fix-them': 'Common Excel VBA Mistakes',
        'excel-reporting-automation-complete-guide': 'Excel Reporting Automation',
        'financial-modeling-best-practices': 'Financial Modeling Best Practices',
        'access-database-repair-guide': 'Access Database Repair Guide',
        'is-microsoft-access-still-relevant-2026': 'Is Microsoft Access Still Relevant',
        'access-vs-power-apps-when-to-stay-on-access': 'Access vs Power Apps',
        'when-to-migrate-from-access': 'When to Migrate from Access',
        'access-vs-excel-when-to-use-each': 'Access vs Excel',
      };
      items.push({
        path: pathname,
        label: postLabels[postSlug] || 'Blog Post',
        isActive: true,
      });
      return items;
    }

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;

      if (routeLabels[currentPath]) {
        items.push({
          path: currentPath,
          label: routeLabels[currentPath],
          isActive: isLast,
        });
      } else {
        items.push({
          path: currentPath,
          label: segment
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '),
          isActive: isLast,
        });
      }
    });

    return items;
  };

  const breadcrumbs = buildBreadcrumbs();

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <nav className='breadcrumb' aria-label='Breadcrumb'>
        <div className='breadcrumb__inner'>
          <ol className='breadcrumb__list'>
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <li key={item.path} className='breadcrumb__item'>
                  {index > 0 && (
                    <svg
                      className='breadcrumb__separator'
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
                  )}
                  {isLast ? (
                    <span className='breadcrumb__current' aria-current='page'>
                      <span className='breadcrumb__current-dot' aria-hidden='true' />
                      {item.label}
                    </span>
                  ) : (
                    <Link href={item.path} className='breadcrumb__link'>
                      {index === 0 && (
                        <svg
                          className='breadcrumb__link-icon'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                          />
                        </svg>
                      )}
                      <span className='breadcrumb__link-text'>{item.label}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
