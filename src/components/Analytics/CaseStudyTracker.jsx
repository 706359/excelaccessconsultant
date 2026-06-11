'use client';

import { useEffect } from 'react';
import { trackCaseStudyView } from '../../utils/analytics';

export default function CaseStudyTracker({ slug }) {
  useEffect(() => {
    if (slug) trackCaseStudyView(slug);
  }, [slug]);

  return null;
}
