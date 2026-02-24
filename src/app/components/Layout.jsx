'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import CookieConsent from '../../components/SEO/CookieConsent/CookieConsent';
import TrustBadge from '../../components/SEO/TrustBadge/TrustBadge';
import Button from '../../components/ui/Button/Button';
import Breadcrumb from './Breadcrumb';

export default function Layout({ children }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' });
    } else if (pathname !== '/') {
      window.location.href = `/#${id}`;
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
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
  }, [pathname]);

  return (
    <>
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:shadow-lg'
      >
        Skip to main content
      </a>

      <header className='sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-[0_1px_3px_rgba(0,0,0,0.06)] pt-4'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16 md:h-[72px] min-h-[64px]'>
            <Link
              href='/'
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className='flex items-center shrink-0 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-white rounded-lg transition-opacity hover:opacity-90'
              aria-label='ExcelAccessConsultant – Home'
            >
              <img
                src='/logo.png'
                alt='ExcelAccessConsultant – Excel & Access Consulting'
                className='h-12 md:h-14 w-auto max-w-[240px] object-contain'
                width='240'
                height='56'
                loading='eager'
                fetchPriority='high'
              />
            </Link>

            <nav
              className='hidden lg:flex items-center gap-4 absolute left-1/2 -translate-x-1/2 bg-slate-100/90 rounded-full px-4 py-2.5 border border-slate-200/80 shadow-sm'
              aria-label='Main navigation'
            >
              <Link
                href='/excel-automation'
                className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-100 ${
                  pathname === '/excel-automation'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-slate-700 hover:bg-white hover:text-primary'
                }`}
              >
                Excel Automation
              </Link>
              <Link
                href='/access-consulting'
                className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-100 ${
                  pathname === '/access-consulting'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-slate-700 hover:bg-white hover:text-primary'
                }`}
              >
                Access Consulting
              </Link>
              <Link
                href='/case-studies'
                className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-100 ${
                  pathname === '/case-studies'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-slate-700 hover:bg-white hover:text-primary'
                }`}
              >
                Case Studies
              </Link>
              <Link
                href='/blog'
                className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-100 ${
                  pathname === '/blog' || pathname.startsWith('/blog/')
                    ? 'bg-primary text-white shadow-md'
                    : 'text-slate-700 hover:bg-white hover:text-primary'
                }`}
              >
                Blog
              </Link>
            </nav>

            <div className='hidden lg:block shrink-0'>
              <Button
                variant='primary'
                as={Link}
                href='/contact'
                className='px-6 py-3 text-sm font-bold rounded-lg shadow-md hover:shadow-lg transition-shadow'
              >
                Get Started
              </Button>
            </div>
            <button
              className='lg:hidden text-slate-700 p-3 -mr-2 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label='Toggle menu'
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

          <div
            className={`lg:hidden fixed inset-y-0 right-0 w-full sm:w-[320px] bg-white shadow-2xl z-50 transform transition-transform duration-200 ease-out ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className='flex flex-col h-full'>
              <div className='flex justify-between items-center p-4 border-b border-slate-200'>
                <img
                  src='/logo.png'
                  alt='ExcelAccessConsultant'
                  className='h-11 w-auto'
                  loading='eager'
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='p-2.5 hover:bg-slate-100 rounded-lg transition-colors text-slate-600'
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
              <nav className='flex-1 overflow-y-auto p-4 flex flex-col gap-1'>
                <Link
                  href='/excel-automation'
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='px-4 py-3 text-slate-800 hover:text-primary hover:bg-primary/5 font-medium rounded-lg transition-colors'
                >
                  Excel Automation
                </Link>
                <Link
                  href='/access-consulting'
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='px-4 py-3 text-slate-800 hover:text-primary hover:bg-primary/5 font-medium rounded-lg transition-colors'
                >
                  Access Consulting
                </Link>
                <Link
                  href='/case-studies'
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='px-4 py-3 text-slate-800 hover:text-primary hover:bg-primary/5 font-medium rounded-lg transition-colors'
                >
                  Case Studies
                </Link>
                <Link
                  href='/blog'
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='px-4 py-3 text-slate-800 hover:text-primary hover:bg-primary/5 font-medium rounded-lg transition-colors'
                >
                  Blog
                </Link>
                <Link
                  href='/about'
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='px-4 py-3 text-slate-600 hover:text-primary hover:bg-slate-50 font-medium rounded-lg transition-colors text-sm'
                >
                  About
                </Link>
                <Link
                  href='/faq'
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='px-4 py-3 text-slate-600 hover:text-primary hover:bg-slate-50 font-medium rounded-lg transition-colors text-sm'
                >
                  FAQ
                </Link>
              </nav>
              <div className='p-4 border-t border-slate-200 space-y-3'>
                <a
                  href='tel:8016163702'
                  className='block w-full text-center py-3 text-primary font-bold text-lg hover:underline'
                >
                  801-616-3702
                </a>
                <Button
                  variant='primary'
                  as={Link}
                  href='/contact'
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='w-full justify-center py-3 text-base font-bold'
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div
              className='lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40'
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
        </div>
      </header>

      <Breadcrumb />

      <main id='main-content'>{children}</main>

      <footer className='bg-slate-900 text-slate-300 border-t border-slate-800'>
        <div className='max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-12'>
          <div className='grid md:grid-cols-5 gap-6 md:gap-8 mb-8'>
            <div>
              <Link
                href='/'
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className='flex items-center mb-3'
              >
                <img
                  src='/logo.png'
                  alt='ExcelAccessConsultant Logo'
                  className='h-10 md:h-11 w-auto brightness-0 invert'
                  width='180'
                  height='48'
                  loading='lazy'
                />
              </Link>
              <p className='text-slate-400 text-xs leading-relaxed'>
                Professional Excel and Access consulting. 20+ years automating business processes.
              </p>
            </div>

            <div>
              <h4 className='font-semibold mb-3 text-xs text-white uppercase tracking-wider'>
                Services
              </h4>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link
                    href='/excel-automation'
                    className='text-white hover:text-slate-300 transition-colors duration-150'
                  >
                    Excel VBA Automation
                  </Link>
                </li>
                <li>
                  <Link
                    href='/access-consulting'
                    className='text-white hover:text-slate-200 transition-colors'
                  >
                    Access Database Consulting
                  </Link>
                </li>
                <li>
                  <Link
                    href='/financial-modeling'
                    className='text-white hover:text-slate-200 transition-colors'
                  >
                    Financial Modeling
                  </Link>
                </li>
                <li>
                  <Link
                    href='/database-migration'
                    className='text-white hover:text-slate-200 transition-colors'
                  >
                    Database Migration
                  </Link>
                </li>
                <li>
                  <Link
                    href='/vba-development'
                    className='text-white hover:text-slate-200 transition-colors'
                  >
                    VBA Development
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className='font-semibold mb-3 text-xs text-white uppercase tracking-wider'>
                Resources
              </h4>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link
                    href='/case-studies'
                    className='text-white hover:text-slate-200 transition-colors'
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href='/blog' className='text-white hover:text-slate-200 transition-colors'>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href='/faq' className='text-white hover:text-slate-200 transition-colors'>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className='font-semibold mb-3 text-xs text-white uppercase tracking-wider'>
                Company
              </h4>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link href='/about' className='text-white hover:text-slate-200 transition-colors'>
                    About Robert Terry
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contact'
                    className='text-white hover:text-slate-200 transition-colors'
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href='/privacy-policy'
                    className='text-white hover:text-slate-200 transition-colors'
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className='font-semibold mb-3 text-xs text-white uppercase tracking-wider'>
                Contact
              </h4>
              <ul className='space-y-2 text-sm'>
                <li>
                  <a
                    href='tel:8016163702'
                    className='text-white hover:text-slate-200 transition-colors'
                  >
                    801-616-3702
                  </a>
                </li>
                <li>
                  <a
                    href='mailto:rob@excelaccessconsultant.com'
                    className='text-white hover:text-slate-200 transition-colors duration-300 ease-in-out'
                  >
                    rob@excelaccessconsultant.com
                  </a>
                </li>
                <li className='text-white'>Springville, UT</li>
                <li className='text-white'>Serving nationwide</li>
              </ul>
            </div>
          </div>

          <div className='pt-6 border-t border-slate-800'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-3'>
              <p className='text-slate-500 text-xs'>
                © 2020–2026 ExcelAccessConsultant.com. All rights reserved.
              </p>
              <div className='flex items-center gap-4 text-slate-500 text-xs'>
                <span>20+ Years</span>
                <span className='hidden md:inline'>·</span>
                <span>500+ Projects</span>
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
