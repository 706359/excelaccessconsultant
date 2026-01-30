import { useState, useEffect } from 'react';

// Safe Google Analytics helper function
const safeGtag = (...args) => {
  try {
    if (typeof window !== 'undefined' && window.gtag && typeof window.gtag === 'function') {
      window.gtag(...args);
    }
  } catch (error) {
    // Silently fail - analytics errors should not break the site
    console.debug('Google Analytics error (blocked or failed):', error);
  }
};

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => {
        setShowBanner(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    // Enable Google Analytics if consent is given
    safeGtag('consent', 'update', {
      analytics_storage: 'granted',
    });
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
    // Disable Google Analytics if consent is declined
    safeGtag('consent', 'update', {
      analytics_storage: 'denied',
    });
  };

  if (!showBanner) return null;

  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-lg'>
      <div className='max-w-7xl mx-auto px-6 py-4'>
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
          <div className='flex-1'>
            <h3 className='text-sm font-semibold text-slate-900 mb-1'>
              Your privacy matters
            </h3>
            <p className='text-xs text-slate-600'>
              This site uses cookies to understand how visitors use it. Your data stays here and isn't shared.{' '}
              <a
                href='/privacy'
                className='text-primary hover:underline font-medium transition-colors duration-micro'
                onClick={(e) => {
                  e.preventDefault();
                  // You can add a privacy policy page later
                }}
              >
                Learn more
              </a>
            </p>
          </div>
          <div className='flex items-center gap-3'>
            <button
              onClick={handleDecline}
              className='px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 border border-slate-300 rounded-md hover:bg-slate-50 transition-colors'
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className='px-4 py-2 text-sm font-medium text-white hover:text-white bg-primary hover:bg-primary-hover rounded-md transition-colors'
            >
              Accept Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
