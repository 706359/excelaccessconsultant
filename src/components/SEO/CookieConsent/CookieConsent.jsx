'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from '../../ui/Button/Button';

const safeGtag = (...args) => {
  try {
    if (typeof window !== 'undefined' && window.gtag && typeof window.gtag === 'function') {
      window.gtag(...args);
    }
  } catch (error) {
    console.debug('Google Analytics error (blocked or failed):', error);
  }
};

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => {
        setShowBanner(true);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.dispatchEvent(
      new CustomEvent('cookieConsentChange', { detail: { visible: showBanner } }),
    );
  }, [showBanner]);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    safeGtag('consent', 'update', {
      analytics_storage: 'granted',
    });
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
    safeGtag('consent', 'update', {
      analytics_storage: 'denied',
    });
  };

  if (!showBanner) return null;

  return (
    <div className='cookie-consent'>
      <div className='cookie-consent__inner'>
        <div className='cookie-consent__layout'>
          <div className='cookie-consent__content'>
            <h3 className='cookie-consent__title'>Your privacy matters</h3>
            <p className='cookie-consent__text'>
              This site uses cookies to understand how visitors use it. Your data stays here and
              isn&apos;t shared.{' '}
              <Link href='/privacy-policy' className='cookie-consent__link'>
                Privacy Policy
              </Link>
            </p>
          </div>
          <div className='cookie-consent__actions'>
            <button
              type='button'
              onClick={handleDecline}
              className='cookie-consent__btn cookie-consent__btn--decline'
            >
              Decline
            </button>
            <Button type='button' variant='primary' onClick={handleAccept}>
              Accept Cookies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
