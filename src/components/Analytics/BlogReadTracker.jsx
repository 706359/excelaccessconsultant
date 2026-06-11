'use client';

import { useEffect, useRef } from 'react';
import { trackBlogRead } from '../../utils/analytics';

export default function BlogReadTracker({ slug }) {
  const fired = useRef(false);

  useEffect(() => {
    if (!slug) return;

    const onScroll = () => {
      if (fired.current) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      if (scrollTop / docHeight >= 0.75) {
        fired.current = true;
        trackBlogRead(slug);
        window.removeEventListener('scroll', onScroll);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [slug]);

  return null;
}
