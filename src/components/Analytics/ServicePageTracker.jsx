'use client';

import { useEffect } from 'react';
import { trackServicePageView } from '../../utils/analytics';

export default function ServicePageTracker({ service }) {
  useEffect(() => {
    if (service) trackServicePageView(service);
  }, [service]);

  return null;
}
