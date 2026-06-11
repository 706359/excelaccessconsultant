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
      className='data-security-disclaimer'
      role='complementary'
      aria-label='Data security disclaimer'
    >
      <div className='data-security-disclaimer__body'>
        <div className='data-security-disclaimer__content'>
          <p className='data-security-disclaimer__title'>Your data is secure</p>
          <p className='data-security-disclaimer__text'>
            We do not share or sell your information. Data is handled in line with our{' '}
            <Link href='/privacy-policy' className='data-security-disclaimer__link'>
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <button
          type='button'
          onClick={handleDismiss}
          className='data-security-disclaimer__close'
          aria-label='Dismiss data security notice'
        >
          <svg className='data-security-disclaimer__close-icon' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
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
