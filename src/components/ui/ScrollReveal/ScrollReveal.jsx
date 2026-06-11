'use client';

import { Children, cloneElement, isValidElement, useEffect, useRef, useState } from 'react';

function applyStagger(children, stagger) {
  if (!stagger) return children;

  return Children.map(children, (child, index) => {
    if (!isValidElement(child)) return child;

    const existingClass = child.props.className || '';
    return cloneElement(child, {
      className: `${existingClass} stagger-child`.trim(),
      style: {
        ...child.props.style,
        '--stagger-index': index,
      },
    });
  });
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  stagger = false,
  as: Tag = 'div',
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => setVisible(true);

    const isInViewport = () => {
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      return rect.top < viewportHeight * 0.92 && rect.bottom > 0;
    };

    if (isInViewport()) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -24px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const content = stagger ? applyStagger(children, true) : children;

  return (
    <Tag
      ref={ref}
      {...rest}
      className={`scroll-reveal ${visible ? 'scroll-reveal--visible' : 'scroll-reveal--hidden'} ${className}`.trim()}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {content}
    </Tag>
  );
}
