'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import AnalyticsListener from '../../components/Analytics/AnalyticsListener';
import BrandLogo from '../../components/BrandLogo/BrandLogo';
import CookieConsent from '../../components/SEO/CookieConsent/CookieConsent';
import TrustBadge from '../../components/SEO/TrustBadge/TrustBadge';
import Button from '../../components/ui/Button/Button';
import { CONSULTANTS, CTA } from '../../constants/site';
import Breadcrumb from './Breadcrumb';

export default function Layout({ children }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const servicesMenuRef = useRef(null);
  const servicesCloseTimerRef = useRef(null);
  const navRef = useRef(null);
  const navIndicatorRef = useRef(null);
  const caseStudiesNavRef = useRef(null);
  const pricingNavRef = useRef(null);
  const blogNavRef = useRef(null);
  const contactNavRef = useRef(null);
  const [hoverNavId, setHoverNavId] = useState(null);

  const openServicesMenu = () => {
    if (servicesCloseTimerRef.current) {
      clearTimeout(servicesCloseTimerRef.current);
      servicesCloseTimerRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const closeServicesMenu = (delay = 0) => {
    if (servicesCloseTimerRef.current) {
      clearTimeout(servicesCloseTimerRef.current);
    }
    if (delay === 0) {
      setIsServicesOpen(false);
      return;
    }
    servicesCloseTimerRef.current = setTimeout(() => {
      setIsServicesOpen(false);
      servicesCloseTimerRef.current = null;
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (servicesCloseTimerRef.current) {
        clearTimeout(servicesCloseTimerRef.current);
      }
    };
  }, []);

  const serviceLinks = [
    { href: '/excel-automation', label: 'Excel Automation' },
    { href: '/access-consulting', label: 'Access Consulting' },
    { href: '/access-database-repair', label: 'Access Database Repair' },
    { href: '/database-migration', label: 'Database Migration' },
    { href: '/vba-development', label: 'VBA Development' },
    { href: '/financial-modeling', label: 'Financial Modeling' },
  ];

  const isServiceActive = serviceLinks.some((s) => pathname === s.href);

  const getActiveNavId = useCallback(() => {
    if (isServiceActive) return 'services';
    if (pathname === '/case-studies') return 'case-studies';
    if (pathname === '/pricing') return 'pricing';
    if (pathname === '/blog' || pathname.startsWith('/blog/')) return 'blog';
    if (pathname === '/contact' || pathname === '/thank-you') return 'contact';
    return null;
  }, [isServiceActive, pathname]);

  const getNavTarget = useCallback((id) => {
    switch (id) {
      case 'services':
        return servicesMenuRef.current?.querySelector('.site-nav__trigger');
      case 'case-studies':
        return caseStudiesNavRef.current;
      case 'pricing':
        return pricingNavRef.current;
      case 'blog':
        return blogNavRef.current;
      case 'contact':
        return contactNavRef.current;
      default:
        return null;
    }
  }, []);

  const activeNavId = getActiveNavId();
  const litNavId = hoverNavId ?? activeNavId;

  const updateNavIndicator = useCallback(() => {
    const nav = navRef.current;
    const indicator = navIndicatorRef.current;
    if (!nav || !indicator) return;

    const targetId = hoverNavId ?? activeNavId;
    const target = targetId ? getNavTarget(targetId) : null;

    if (!target) {
      indicator.classList.remove('site-nav__indicator--visible', 'site-nav__indicator--hover');
      return;
    }

    const navRect = nav.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    indicator.style.width = `${targetRect.width}px`;
    indicator.style.height = `${targetRect.height}px`;
    indicator.style.transform = `translate3d(${targetRect.left - navRect.left}px, ${targetRect.top - navRect.top}px, 0)`;
    indicator.classList.toggle('site-nav__indicator--hover', Boolean(hoverNavId));
    indicator.classList.add('site-nav__indicator--visible');
  }, [activeNavId, getNavTarget, hoverNavId]);

  useLayoutEffect(() => {
    updateNavIndicator();
    const frame = requestAnimationFrame(updateNavIndicator);
    return () => cancelAnimationFrame(frame);
  }, [updateNavIndicator, isServicesOpen]);

  useEffect(() => {
    window.addEventListener('resize', updateNavIndicator);
    return () => window.removeEventListener('resize', updateNavIndicator);
  }, [updateNavIndicator]);

  useEffect(() => {
    setIsServicesOpen(false);
    setHoverNavId(null);
  }, [pathname]);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsHeaderScrolled(false);

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    scrollToTop();
    const raf = requestAnimationFrame(scrollToTop);
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isServicesOpen) return;

    const handlePointerDown = (event) => {
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target)) {
        closeServicesMenu();
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, [isServicesOpen]);

  return (
    <>
      <a href='#main-content' className='skip-link sr-only'>
        Skip to main content
      </a>

      <header className={`site-header ${isHeaderScrolled ? 'site-header--scrolled' : ''}`}>
        <div className='site-header__shell'>
          <div className='site-header__inner'>
            <div className='site-header__bar'>
              <Link
                href='/'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className='site-header__logo-link'
                aria-label='ExcelAccessConsultant – Home'
              >
                <BrandLogo className='site-header__logo' loading='eager' fetchPriority='high' />
              </Link>

              <nav
                ref={navRef}
                className='site-nav'
                aria-label='Main navigation'
                onMouseLeave={() => setHoverNavId(null)}
              >
                <span ref={navIndicatorRef} className='site-nav__indicator' aria-hidden='true' />
                <div
                  ref={servicesMenuRef}
                  className='site-nav__item'
                  onMouseEnter={() => {
                    setHoverNavId('services');
                    openServicesMenu();
                  }}
                  onMouseLeave={() => closeServicesMenu(120)}
                  onFocus={openServicesMenu}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      closeServicesMenu();
                    }
                  }}
                >
                  <button
                    type='button'
                    onClick={() => (isServicesOpen ? closeServicesMenu() : openServicesMenu())}
                    className={`site-nav__trigger ${isServicesOpen ? 'site-nav__trigger--open' : ''} ${litNavId === 'services' ? 'site-nav__trigger--lit' : ''}`}
                    aria-current={isServiceActive ? 'page' : undefined}
                    aria-expanded={isServicesOpen}
                    aria-haspopup='true'
                    aria-controls='services-menu'
                  >
                    <span>Services</span>
                    <svg
                      className='site-nav__chevron'
                      width='14'
                      height='14'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      aria-hidden='true'
                    >
                      <path d='M6 9l6 6 6-6' />
                    </svg>
                  </button>
                  {isServicesOpen && (
                    <div className='site-nav__dropdown'>
                      <div id='services-menu' role='menu' className='site-nav__dropdown-menu'>
                        {serviceLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            role='menuitem'
                            onClick={() => closeServicesMenu()}
                            className={`site-nav__dropdown-item ${pathname === link.href ? 'site-nav__dropdown-item--active' : ''}`}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <span className='site-nav__divider' aria-hidden='true' />
                <Link
                  ref={caseStudiesNavRef}
                  href='/case-studies'
                  className={`site-nav__link ${litNavId === 'case-studies' ? 'site-nav__link--lit' : ''}`}
                  aria-current={pathname === '/case-studies' ? 'page' : undefined}
                  onMouseEnter={() => setHoverNavId('case-studies')}
                >
                  Case Studies
                </Link>
                <span className='site-nav__divider' aria-hidden='true' />
                <Link
                  ref={pricingNavRef}
                  href='/pricing'
                  className={`site-nav__link ${litNavId === 'pricing' ? 'site-nav__link--lit' : ''}`}
                  aria-current={pathname === '/pricing' ? 'page' : undefined}
                  onMouseEnter={() => setHoverNavId('pricing')}
                >
                  Pricing
                </Link>
                <span className='site-nav__divider' aria-hidden='true' />
                <Link
                  ref={blogNavRef}
                  href='/blog'
                  className={`site-nav__link ${litNavId === 'blog' ? 'site-nav__link--lit' : ''}`}
                  aria-current={
                    pathname === '/blog' || pathname.startsWith('/blog/') ? 'page' : undefined
                  }
                  onMouseEnter={() => setHoverNavId('blog')}
                >
                  Blog
                </Link>
                <span className='site-nav__divider' aria-hidden='true' />
                <Link
                  ref={contactNavRef}
                  href={CTA.primaryHref}
                  className={`site-nav__link ${litNavId === 'contact' ? 'site-nav__link--lit' : ''}`}
                  aria-current={
                    pathname === '/contact' || pathname === '/thank-you' ? 'page' : undefined
                  }
                  onMouseEnter={() => setHoverNavId('contact')}
                >
                  Contact
                </Link>
              </nav>

              {/* Red CTA, green nav active + red CTA = both brand colors in header */}
              <div className='site-header__cta'>
                <Button variant='primary-green' as={Link} href={CTA.primaryHref}>
                  {CTA.primary}
                </Button>
              </div>

              <button
                type='button'
                className='site-header__menu-toggle'
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label='Toggle menu'
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <svg
                    className='icon icon--md'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                ) : (
                  <svg
                    className='icon icon--md'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
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

            <div className={`mobile-nav ${isMobileMenuOpen ? 'mobile-nav--open' : ''}`}>
              <div className='mobile-nav__inner'>
                <div className='mobile-nav__header'>
                  <BrandLogo className='site-header__logo' loading='eager' />
                  <button
                    type='button'
                    onClick={() => setIsMobileMenuOpen(false)}
                    className='site-header__menu-toggle'
                    aria-label='Close menu'
                  >
                    <svg
                      className='icon icon--md'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>
                <nav className='mobile-nav__links'>
                  <p className='mobile-nav__section-label'>Services</p>
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className='mobile-nav__link'
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href='/case-studies'
                    onClick={() => setIsMobileMenuOpen(false)}
                    className='mobile-nav__link'
                  >
                    Case Studies
                  </Link>
                  <Link
                    href='/pricing'
                    onClick={() => setIsMobileMenuOpen(false)}
                    className='mobile-nav__link'
                  >
                    Pricing
                  </Link>
                  <Link
                    href='/blog'
                    onClick={() => setIsMobileMenuOpen(false)}
                    className='mobile-nav__link'
                  >
                    Blog
                  </Link>
                  <Link
                    href={CTA.primaryHref}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className='mobile-nav__link'
                  >
                    Contact
                  </Link>
                  <Link
                    href='/about'
                    onClick={() => setIsMobileMenuOpen(false)}
                    className='mobile-nav__link mobile-nav__link--muted'
                  >
                    About
                  </Link>
                  <Link
                    href='/faq'
                    onClick={() => setIsMobileMenuOpen(false)}
                    className='mobile-nav__link mobile-nav__link--muted'
                  >
                    FAQ
                  </Link>
                </nav>
                <div className='mobile-nav__footer'>
                  <a href={CTA.phoneHref} className='mobile-nav__phone'>
                    {CTA.phone}
                  </a>
                  <Button
                    variant='primary-green'
                    as={Link}
                    href={CTA.primaryHref}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className='btn--block'
                  >
                    {CTA.primary}
                  </Button>
                </div>
              </div>
            </div>

            {isMobileMenuOpen && (
              <div
                className='mobile-nav__overlay'
                onClick={() => setIsMobileMenuOpen(false)}
                aria-hidden='true'
              />
            )}
          </div>
        </div>
      </header>

      <Breadcrumb />

      <main id='main-content'>
        <div key={pathname} className='page-body'>
          {children}
        </div>
      </main>

      <footer className='site-footer'>
        <div className='site-footer__inner'>
          <div className='site-footer__grid'>
            <div>
              <Link href='/' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <BrandLogo className='site-footer__logo' loading='lazy' invert />
              </Link>
              <p className='site-footer__brand-text'>
                Professional Excel and Access consulting. 20+ years automating business processes.
              </p>
            </div>

            <div>
              <h4 className='site-footer__heading'>Services</h4>
              <ul className='site-footer__links'>
                <li>
                  <Link href='/excel-automation'>Excel VBA Automation</Link>
                </li>
                <li>
                  <Link href='/access-consulting'>Access Database Consulting</Link>
                </li>
                <li>
                  <Link href='/access-database-repair'>Access Database Repair</Link>
                </li>
                <li>
                  <Link href='/financial-modeling'>Financial Modeling</Link>
                </li>
                <li>
                  <Link href='/database-migration'>Database Migration</Link>
                </li>
                <li>
                  <Link href='/vba-development'>VBA Development</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className='site-footer__heading'>Resources</h4>
              <ul className='site-footer__links'>
                <li>
                  <Link href='/case-studies'>Case Studies</Link>
                </li>
                <li>
                  <Link href='/blog'>Blog</Link>
                </li>
                <li>
                  <Link href='/pricing'>Pricing</Link>
                </li>
                <li>
                  <Link href='/faq'>FAQ</Link>
                </li>
                <li>
                  <Link href='/excel-consultant-utah'>Excel Consultant Utah</Link>
                </li>
                <li>
                  <Link href='/hire-excel-vba-consultant'>Hire Excel VBA Consultant</Link>
                </li>
                <li>
                  <Link href='/free-checklist'>Free Resources</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className='site-footer__heading'>Company</h4>
              <ul className='site-footer__links'>
                <li>
                  <Link href='/about'>About {CONSULTANTS.displayName}</Link>
                </li>
                <li>
                  <Link href='/contact'>Contact</Link>
                </li>
                <li>
                  <Link href='/privacy-policy'>Privacy Policy</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className='site-footer__heading'>Contact</h4>
              <ul className='site-footer__links'>
                <li>
                  <a href={CTA.phoneHref}>{CTA.phone}</a>
                </li>
                <li>
                  <a href='mailto:rob@excelaccessconsultant.com'>rob@excelaccessconsultant.com</a>
                </li>
                <li>Springville, UT</li>
                <li>Serving nationwide</li>
              </ul>
            </div>
          </div>

          <div className='site-footer__bottom'>
            <p className='site-footer__copyright'>
              © 2020–2026 ExcelAccessConsultant.com. All rights reserved.
            </p>
            <div className='site-footer__stats'>
              <span>20+ Years</span>
              <span>500+ Projects</span>
            </div>
          </div>
        </div>
      </footer>

      <AnalyticsListener />
      <CookieConsent />
      <TrustBadge />
    </>
  );
}
