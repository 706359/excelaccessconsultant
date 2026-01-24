import { Link, useLocation } from 'react-router-dom';

function Breadcrumb() {
  const location = useLocation();
  const pathname = location.pathname;

  // Don't show breadcrumb on homepage
  if (pathname === '/') {
    return null;
  }

  // Route to label mapping
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

  // Build breadcrumb items
  const buildBreadcrumbs = () => {
    const items = [{ path: '/', label: 'Home' }];
    const pathSegments = pathname.split('/').filter(Boolean);

    // Handle blog posts
    if (pathSegments[0] === 'blog' && pathSegments.length > 1) {
      items.push({ path: '/blog', label: 'Blog' });
      // Blog post title - use a generic label or extract from route
      const postSlug = pathSegments[1];
      const postLabels = {
        '10-signs-you-need-excel-automation': '10 Signs You Need Excel Automation',
        'why-your-access-database-keeps-crashing': 'Why Your Access Database Keeps Crashing',
        'excel-automation-cost-what-to-expect': 'Excel Automation Cost',
        'how-to-speed-up-slow-excel-spreadsheets': 'How to Speed Up Slow Excel Spreadsheets',
        'access-vs-sql-server-when-to-migrate': 'Access vs SQL Server',
        'common-excel-vba-mistakes-and-how-to-fix-them': 'Common Excel VBA Mistakes',
        'excel-reporting-automation': 'Excel Reporting Automation',
        'financial-modeling-best-practices': 'Financial Modeling Best Practices',
      };
      items.push({
        path: pathname,
        label: postLabels[postSlug] || 'Blog Post',
        isActive: true,
      });
      return items;
    }

    // Handle regular pages
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
        // Fallback for unknown routes
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
    <nav
      className='bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b-2 border-slate-200/60 shadow-sm'
      aria-label='Breadcrumb'
    >
      <div className='max-w-7xl mx-auto px-6 py-4'>
        <ol className='flex items-center gap-3 text-sm'>
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <li key={item.path} className='flex items-center gap-3'>
                {index > 0 && (
                  <svg
                    className='w-4 h-4 text-slate-400'
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
                    className='text-slate-900 font-bold text-base flex items-center gap-2'
                    aria-current='page'
                  >
                    <span className='w-1.5 h-1.5 bg-primary rounded-full'></span>
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className='text-slate-600 hover:text-primary transition-all duration-micro font-medium flex items-center gap-2 group'
                  >
                    {index === 0 && (
                      <svg
                        className='w-4 h-4 group-hover:scale-110 transition-transform duration-micro'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
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

export default Breadcrumb;
