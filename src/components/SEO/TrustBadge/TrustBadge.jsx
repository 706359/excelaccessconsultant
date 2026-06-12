'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const TrustBadge = () => {
  const pathname = usePathname();
  const [showBadge, setShowBadge] = useState(false);
  const [cookieBannerVisible, setCookieBannerVisible] = useState(false);

  useEffect(() => {
    const onCookieChange = (event) => {
      setCookieBannerVisible(Boolean(event.detail?.visible));
    };

    window.addEventListener('cookieConsentChange', onCookieChange);

    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setCookieBannerVisible(true);
    }

    const seen = sessionStorage.getItem('trustBadgeSeen');
    if (!seen && pathname !== '/contact') {
      const timer = setTimeout(() => {
        setShowBadge(true);
      }, 5000);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('cookieConsentChange', onCookieChange);
      };
    }

    return () => {
      window.removeEventListener('cookieConsentChange', onCookieChange);
    };
  }, [pathname]);

  const handleClose = () => {
    setShowBadge(false);
    sessionStorage.setItem('trustBadgeSeen', 'true');
  };

  if (!showBadge || cookieBannerVisible || pathname === '/contact') return null;

  return (
    <div className='trust-badge'>
      <div className='trust-badge__card'>
        <button
          type='button'
          onClick={handleClose}
          className='trust-badge__close'
          aria-label='Close trust badge'
        >
          <svg
            className='trust-badge__close-icon'
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
        <div className='trust-badge__body'>
          <div className='trust-badge__icon-wrap'>
            <div className='trust-badge__icon-circle'>
              <svg
                className='trust-badge__icon'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                />
              </svg>
            </div>
          </div>
          <div className='trust-badge__content'>
            <h3 className='trust-badge__title'>Your Data is Secure</h3>
            <p className='trust-badge__text'>
              Your business data stays private and confidential. Information you share is never sold
              or distributed. 20+ years protecting sensitive client data.
            </p>
            <Link href='/contact' className='trust-badge__link'>
              Book Free Consultation
              <svg
                className='trust-badge__link-icon'
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBadge;
