import { useState, useEffect, useRef, lazy, Suspense } from 'react';

/**
 * Renders children only when the sentinel enters (or is near) the viewport.
 * Reduces initial JS and DOM for faster FCP/LCP.
 */
function LazyWhenVisible({ id, children, fallbackMinHeight = '400px', rootMargin = '200px' }) {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    if (visible) return;
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { rootMargin, threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible, rootMargin]);

  if (visible) {
    return (
      <Suspense fallback={<div id={id} style={{ minHeight: fallbackMinHeight }} />}>
        {children}
      </Suspense>
    );
  }

  return (
    <div
      id={id}
      ref={sentinelRef}
      style={{ minHeight: fallbackMinHeight }}
      aria-hidden="true"
    />
  );
}

export default LazyWhenVisible;
