import Link from 'next/link';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'dataSecurityDisclaimerDismissed';

const DataSecurityDisclaimer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, 'true');
  };

  if (!visible) return null;

  return (
    <div
      className='fixed bottom-6 right-6 z-40 max-w-sm bg-white border border-slate-200 rounded-lg shadow-lg p-4 animate-fade-in'
      role='complementary'
      aria-label='Data security disclaimer'
    >
      <div className='flex items-start gap-3'>
        <div className='flex-1 min-w-0'>
          <p className='text-sm font-medium text-slate-900 mb-1'>Your data is secure</p>
          <p className='text-xs text-slate-600 leading-relaxed'>
            We do not share or sell your information. Data is handled in line with our{' '}
            <Link
              href='/privacy-policy'
              className='text-primary hover:text-primary-hover underline font-medium'
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <button
          type='button'
          onClick={handleDismiss}
          className='flex-shrink-0 p-1 rounded text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1'
          aria-label='Dismiss data security notice'
        >
          <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DataSecurityDisclaimer;
