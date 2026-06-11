'use client';

import { useEffect, useMemo, useState } from 'react';

function parseStatValue(value) {
  const match = String(value).match(/^(\d+)(.*)$/);
  if (!match) return null;
  return { target: parseInt(match[1], 10), suffix: match[2] || '' };
}

export default function useCountUp(value, { duration = 1200, enabled = true } = {}) {
  const parsed = useMemo(() => parseStatValue(value), [value]);
  const [display, setDisplay] = useState(() => (parsed ? `0${parsed.suffix}` : value));

  useEffect(() => {
    if (!parsed || !enabled) {
      setDisplay(value);
      return undefined;
    }

    let frame;
    const start = performance.now();
    const { target, suffix } = parsed;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      const current = Math.round(target * eased);
      setDisplay(`${current}${suffix}`);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, duration, enabled, parsed]);

  return display;
}
