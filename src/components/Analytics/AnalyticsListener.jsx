'use client';

import { useEffect } from 'react';
import { trackEmailClick, trackPhoneClick } from '../../utils/analytics';

export default function AnalyticsListener() {
  useEffect(() => {
    const handleClick = (event) => {
      const anchor = event.target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href') || '';
      if (href.startsWith('tel:')) {
        trackPhoneClick('sitewide');
      } else if (href.startsWith('mailto:')) {
        trackEmailClick('sitewide');
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
