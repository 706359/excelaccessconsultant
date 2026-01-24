import { useState, useEffect } from 'react';

const TrustBadge = () => {
  const [showBadge, setShowBadge] = useState(false);
  const [hasSeenBadge, setHasSeenBadge] = useState(false);

  useEffect(() => {
    // Check if user has seen the trust badge before
    const seen = sessionStorage.getItem('trustBadgeSeen');
    if (!seen) {
      // Show badge after user has been on page for 5 seconds
      const timer = setTimeout(() => {
        setShowBadge(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShowBadge(false);
    setHasSeenBadge(true);
    sessionStorage.setItem('trustBadgeSeen', 'true');
  };

  if (!showBadge || hasSeenBadge) return null;

  return (
    <div className='fixed bottom-4 right-4 z-40 max-w-sm animate-slide-in'>
      <div className='bg-white border border-slate-200 rounded-lg shadow-xl p-5'>
        <button
          onClick={handleClose}
          className='absolute top-2 right-2 text-slate-400 hover:text-slate-600 transition-colors'
          aria-label='Close trust badge'
        >
          <svg
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
        <div className='flex items-start gap-3'>
          <div className='flex-shrink-0'>
            <div className='w-12 h-12 bg-excel/10 rounded-full flex items-center justify-center'>
              <svg
                className='w-6 h-6 text-excel'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
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
          <div className='flex-1'>
            <h3 className='text-sm font-semibold text-slate-900 mb-1'>
              Your Data is Secure
            </h3>
            <p className='text-xs text-slate-600 mb-2'>
              We sign NDAs, work in your systems (not ours), and never share your information.
              20+ years of handling sensitive business data.
            </p>
            <a
              href='#contact'
              className='text-xs font-medium text-excel hover:text-excel-hover inline-flex items-center gap-1'
            >
              Get started
              <svg
                className='w-3 h-3'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBadge;
