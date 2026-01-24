import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CookieConsent from '../SEO/CookieConsent/CookieConsent';
import TrustBadge from '../SEO/TrustBadge/TrustBadge';
import Button from '../ui/Button/Button';
import Breadcrumb from './Breadcrumb/Breadcrumb';

function Layout({ children }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      // Scroll to the top of the section
      window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' });
    } else if (location.pathname !== '/') {
      // If section not found on current page, navigate to homepage with hash
      window.location.href = `/#${id}`;
    }
  };

  // Handle hash navigation on page load and route change
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1); // Remove the # symbol
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      {/* Skip to Content Link - Accessibility */}
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:shadow-lg'
      >
        Skip to main content
      </a>

      {/* Top Contact Bar - Premium Design with Icons */}
      <div className='bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-3 border-b-2 border-primary/30 shadow-lg'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm'>
            <div className='flex items-center gap-2 group'>
              <svg
                className='w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-micro'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                />
              </svg>
              <span className='text-slate-300 font-medium'>Call Us Today:</span>
              <a
                href='tel:8016163702'
                className='text-primary hover:text-primary-hover font-bold text-sm md:text-base transition-colors duration-micro hover:underline decoration-2 underline-offset-2'
              >
                801-616-3702
              </a>
            </div>
            <div className='hidden sm:block w-px h-4 bg-slate-600'></div>
            <div className='flex items-center gap-2 group'>
              <svg
                className='w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-micro'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
              <a
                href='mailto:rob@excelaccessconsultant.com'
                className='text-primary hover:text-primary-hover font-bold text-sm md:text-base transition-colors duration-micro hover:underline decoration-2 underline-offset-2'
              >
                rob@excelaccessconsultant.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation - Premium Design with Glass Effect */}
      <nav className='sticky top-0 z-50 bg-white/98 backdrop-blur-xl border-b-2 border-slate-200/80 shadow-lg transition-all duration-standard'>
        <div className='max-w-7xl mx-auto px-6 md:px-8'>
          <div className='flex justify-between items-center h-18 md:h-20'>
            {/* Logo - Left Aligned with Hover Effect */}
            <Link
              to='/'
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className='flex items-center group transition-all duration-standard hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg p-2 -ml-2'
              aria-label='Home'
            >
              <div className='relative'>
                <img
                  src='/logo.png'
                  alt='ExcelAccessConsultant Logo'
                  className='h-11 md:h-14 w-auto max-w-[200px] transition-all duration-standard group-hover:brightness-110'
                  width='200'
                  height='60'
                  loading='eager'
                  fetchpriority='high'
                />
                <div className='absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-lg transition-all duration-standard -z-10'></div>
              </div>
            </Link>

            {/* Navigation Items - Centered with Modern Styling */}
            <div className='hidden lg:flex items-center gap-1 absolute left-1/2 transform -translate-x-1/2 bg-slate-50/80 backdrop-blur-sm rounded-full px-2 py-1.5 border border-slate-200/60 shadow-sm'>
              <Link
                to='/excel-automation'
                className={`px-5 py-2.5 text-sm font-semibold transition-all duration-micro rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  location.pathname === '/excel-automation'
                    ? 'text-primary bg-white'
                    : 'text-slate-700 hover:text-primary hover:bg-white'
                }`}
              >
                Excel Automation
              </Link>
              <Link
                to='/access-consulting'
                className={`px-5 py-2.5 text-sm font-semibold transition-all duration-micro rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  location.pathname === '/access-consulting'
                    ? 'text-primary bg-white'
                    : 'text-slate-700 hover:text-primary hover:bg-white'
                }`}
              >
                Access Consulting
              </Link>
              <Link
                to='/case-studies'
                className={`px-5 py-2.5 text-sm font-semibold transition-all duration-micro rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  location.pathname === '/case-studies'
                    ? 'text-primary bg-white'
                    : 'text-slate-700 hover:text-primary hover:bg-white'
                }`}
              >
                Case Studies
              </Link>
              <Link
                to='/blog'
                className={`px-5 py-2.5 text-sm font-semibold transition-all duration-micro rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  location.pathname === '/blog' || location.pathname.startsWith('/blog/')
                    ? 'text-primary bg-white'
                    : 'text-slate-700 hover:text-primary hover:bg-white'
                }`}
              >
                Blog
              </Link>
            </div>

            {/* CTA Button - Right Aligned with Premium Styling */}
            <div className='hidden lg:block'>
              <Button
                variant='primary'
                as={Link}
                to='/contact'
                className='bg-primary hover:bg-primary-hover text-white px-7 py-3 text-sm font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-standard transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 border-2 border-primary/20 hover:border-primary/40'
              >
                Get Started
              </Button>
            </div>
            {/* Mobile Menu Button */}
            <button
              className='lg:hidden text-slate-700 p-2.5 rounded-full hover:bg-slate-100 transition-all duration-micro focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:scale-110'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label='Toggle mobile menu'
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu - Full-screen slide-in drawer from right */}
          <div
            className={`lg:hidden fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-standard ease-smooth ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className='flex flex-col h-full p-6'>
              <div className='flex justify-between items-center mb-8'>
                <img
                  src='/logo.png'
                  alt='ExcelAccessConsultant Logo'
                  className='h-10 w-auto'
                  loading='eager'
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='p-2 hover:bg-slate-100 rounded-lg transition-colors'
                  aria-label='Close menu'
                >
                  <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
              <nav className='flex flex-col gap-2'>
                <Link
                  to='/excel-automation'
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='px-4 py-3 text-slate-700 hover:text-excel hover:bg-slate-50 text-base font-medium transition-all rounded-lg'
                >
                  Excel Automation
                </Link>
                <Link
                  to='/access-consulting'
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='px-4 py-3 text-slate-700 hover:text-excel hover:bg-slate-50 text-base font-medium transition-all rounded-lg'
                >
                  Access Consulting
                </Link>
                <Link
                  to='/case-studies'
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='px-4 py-3 text-slate-700 hover:text-excel hover:bg-slate-50 text-base font-medium transition-all rounded-lg'
                >
                  Case Studies
                </Link>
                <Link
                  to='/blog'
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='px-4 py-3 text-slate-700 hover:text-excel hover:bg-slate-50 text-base font-medium transition-all rounded-lg'
                >
                  Blog
                </Link>
                <div className='mt-4 pt-4 border-t border-slate-200'>
                  <Button
                    variant='primary'
                    as={Link}
                    to='/contact'
                    onClick={() => setIsMobileMenuOpen(false)}
                    className='w-full justify-center'
                  >
                    Get Started
                  </Button>
                </div>
              </nav>
            </div>
          </div>
          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div
              className='lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40'
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
        </div>
      </nav>

      {/* Breadcrumb Navigation */}
      <Breadcrumb />

      {/* Main Content */}
      <main id='main-content'>{children}</main>

      {/* Footer - Modern Design */}
      <footer className='bg-slate-900 text-slate-300 border-t border-slate-800'>
        <div className='max-w-7xl mx-auto px-6 py-16 md:py-20'>
          <div className='grid md:grid-cols-5 gap-8 md:gap-12 mb-12'>
            {/* Logo Column */}
            <div>
              <Link
                to='/'
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className='flex items-center mb-4'
              >
                <img
                  src='/logo.png'
                  alt='ExcelAccessConsultant Logo'
                  className='h-12 md:h-14 w-auto'
                  width='200'
                  height='60'
                  loading='lazy'
                />
              </Link>
              <p className='text-white text-sm leading-relaxed'>
                Professional Excel and Access consulting services. 20+ years of experience
                automating business processes.
              </p>
            </div>

            {/* Services Column */}
            <div>
              <h4 className='font-bold mb-4 text-sm text-white uppercase tracking-wider'>
                Services
              </h4>
              <ul className='space-y-3 text-sm'>
                <li>
                  <Link to='/excel-automation' className='text-white hover:text-slate-200 transition-colors'>
                    Excel VBA Automation
                  </Link>
                </li>
                <li>
                  <Link to='/access-consulting' className='text-white hover:text-slate-200 transition-colors'>
                    Access Database Consulting
                  </Link>
                </li>
                <li>
                  <Link to='/financial-modeling' className='text-white hover:text-slate-200 transition-colors'>
                    Financial Modeling
                  </Link>
                </li>
                <li>
                  <Link to='/database-migration' className='text-white hover:text-slate-200 transition-colors'>
                    Database Migration
                  </Link>
                </li>
                <li>
                  <Link to='/vba-development' className='text-white hover:text-slate-200 transition-colors'>
                    VBA Development
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className='font-bold mb-4 text-sm text-white uppercase tracking-wider'>
                Resources
              </h4>
              <ul className='space-y-3 text-sm'>
                <li>
                  <Link to='/case-studies' className='text-white hover:text-slate-200 transition-colors'>
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link to='/blog' className='text-white hover:text-slate-200 transition-colors'>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to='/faq' className='text-white hover:text-slate-200 transition-colors'>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className='font-bold mb-4 text-sm text-white uppercase tracking-wider'>
                Company
              </h4>
              <ul className='space-y-3 text-sm'>
                <li>
                  <Link to='/about' className='text-white hover:text-slate-200 transition-colors'>
                    About Robert Terry
                  </Link>
                </li>
                <li>
                  <Link to='/contact' className='text-white hover:text-slate-200 transition-colors'>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to='/privacy-policy' className='text-white hover:text-slate-200 transition-colors'>
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className='font-bold mb-4 text-sm text-white uppercase tracking-wider'>
                Contact
              </h4>
              <ul className='space-y-3 text-sm'>
                <li>
                  <a href='tel:8016163702' className='text-white hover:text-slate-200 transition-colors'>
                    801-616-3702
                  </a>
                </li>
                <li>
                  <a
                    href='mailto:rob@excelaccessconsultant.com'
                    className='text-white hover:text-slate-200 transition-colors'
                  >
                    rob@excelaccessconsultant.com
                  </a>
                </li>
                <li className='text-white'>Springville, UT</li>
                <li className='text-white'>Serving nationwide</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className='pt-8 border-t border-slate-800'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
              <p className='text-white text-sm'>
                © 2026 ExcelAccessConsultant.com. All rights reserved.
              </p>
              <div className='flex items-center gap-6 text-white text-sm'>
                <span>20+ Years Experience</span>
                <span className='hidden md:inline'>•</span>
                <span>500+ Projects Completed</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <CookieConsent />
      <TrustBadge />
    </>
  );
}

export default Layout;
