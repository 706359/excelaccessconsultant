'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
    '/privacy-policy': 'Privacy Policy',
    '/thank-you': 'Thank You',
  };

  const buildBreadcrumbs = () => {
    const items = [{ path: '/', label: 'Home' }];
    const pathSegments = pathname.split('/').filter(Boolean);

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
    <nav className='bg-slate-50/80 border-b border-slate-200' aria-label='Breadcrumb'>
      <div className='max-w-7xl mx-auto px-4 md:px-6 py-2.5'>
        <ol className='flex items-center gap-2 text-xs md:text-sm'>
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <li key={item.path} className='flex items-center gap-2'>
                {index > 0 && (
                  <svg
                    className='w-3.5 h-3.5 text-slate-400 flex-shrink-0'
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
                  <span
                    className='text-slate-900 font-semibold text-sm flex items-center gap-1.5'
                    aria-current='page'
                  >
                    <span className='w-1 h-1 bg-primary rounded-full'></span>
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className='text-slate-600 hover:text-primary transition-colors font-medium flex items-center gap-1.5 group'
                  >
                    {index === 0 && (
                      <svg
                        className='w-3.5 h-3.5 group-hover:text-primary transition-colors'
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
                    <span className='group-hover:underline decoration-2 underline-offset-2'>
                      {item.label}
                    </span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
