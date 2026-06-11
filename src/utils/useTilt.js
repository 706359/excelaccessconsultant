'use client';

import { useEffect } from 'react';

export default function useTilt(ref, { max = 6, enabled = true } = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isCoarse = window.matchMedia('(hover: none)').matches;
    if (prefersReduced || isCoarse) return;

    const handleEnter = () => {
      el.style.transition = 'none';
    };

    const handleMove = (event) => {
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      const rotateY = x * max * 2;
      const rotateX = -y * max * 2;
      el.style.transform = `perspective(var(--perspective, 1200px)) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    };

    const handleLeave = () => {
      el.style.transition = '';
      el.style.transform = '';
    };

    el.addEventListener('mouseenter', handleEnter);
    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);

    return () => {
      el.removeEventListener('mouseenter', handleEnter);
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
      el.style.transition = '';
      el.style.transform = '';
    };
  }, [ref, max, enabled]);
}
