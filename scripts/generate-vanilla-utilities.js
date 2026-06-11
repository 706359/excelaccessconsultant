/**
 * Generates vanilla CSS utilities matching Tailwind classes used in src/.
 * Run: node scripts/generate-vanilla-utilities.js
 */
const fs = require('fs');
const path = require('path');

const BREAKPOINTS = { sm: 640, md: 768, lg: 1024 };
const COLORS = {
  primary: '#1B5E20',
  'primary-hover': '#155016',
  'primary-light': '#267A2B',
  secondary: '#8B1A1A',
  'secondary-hover': '#6E1515',
  excel: '#1B5E20',
  'excel-hover': '#155016',
  'excel-green': '#1B5E20',
  navy: '#0F172A',
  base: '#FFFFFF',
  surface: '#F8FAFC',
  background: '#F8FAFC',
  text: '#2D2D2D',
  slate: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  },
  white: '#FFFFFF',
  'green-50': '#F0FDF4',
  'red-600': '#DC2626',
  'yellow-600': '#CA8A04',
};

const FONT = `'Manrope', 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;

function escapeClass(name) {
  return name
    .replace(/\\/g, '\\\\')
    .replace(/:/g, '\\:')
    .replace(/\//g, '\\/')
    .replace(/\[/g, '\\[')
    .replace(/\]/g, '\\]')
    .replace(/\./g, '\\.');
}

function parseColor(val) {
  if (val.includes('/')) {
    const [name, alpha] = val.split('/');
    const pct = parseInt(alpha, 10);
    const hex = resolveColor(name);
    if (hex && hex.startsWith('#')) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${pct / 100})`;
    }
  }
  return resolveColor(val);
}

function resolveColor(name) {
  if (name === 'black') return '#000000';
  if (name === 'white') return '#FFFFFF';
  if (COLORS[name]) return COLORS[name];
  const m = name.match(/^(.+)-(\d+)$/);
  if (m && COLORS[m[1]]?.[m[2]]) return COLORS[m[1]][m[2]];
  return null;
}

function rule(selector, props) {
  const body = Object.entries(props)
    .filter(([, v]) => v != null)
    .map(([k, v]) => `  ${k}: ${v};`)
    .join('\n');
  return body ? `${selector} {\n${body}\n}` : '';
}

function classToCss(className) {
  const props = {};

  // Layout
  if (className === 'flex') props.display = 'flex';
  if (className === 'inline-flex') props.display = 'inline-flex';
  if (className === 'inline-block') props.display = 'inline-block';
  if (className === 'block') props.display = 'block';
  if (className === 'hidden') props.display = 'none';
  if (className === 'contents') props.display = 'contents';
  if (className === 'grid') props.display = 'grid';
  if (className === 'flex-col') props['flex-direction'] = 'column';
  if (className === 'flex-1') props.flex = '1 1 0%';
  if (className === 'flex-wrap') props['flex-wrap'] = 'wrap';
  if (className === 'flex-shrink-0') props['flex-shrink'] = '0';
  if (className === 'shrink-0') props['flex-shrink'] = '0';
  if (className === 'items-center') props['align-items'] = 'center';
  if (className === 'items-start') props['align-items'] = 'flex-start';
  if (className === 'items-stretch') props['align-items'] = 'stretch';
  if (className === 'justify-center') props['justify-content'] = 'center';
  if (className === 'justify-between') props['justify-content'] = 'space-between';
  if (className === 'self-center') props['align-self'] = 'center';

  // Position
  if (className === 'relative') props.position = 'relative';
  if (className === 'absolute') props.position = 'absolute';
  if (className === 'fixed') props.position = 'fixed';
  if (className === 'sticky') props.position = 'sticky';
  if (className === 'inset-0') {
    props.top = props.right = props.bottom = props.left = '0';
  }
  if (className === 'inset-y-0') {
    props.top = props.bottom = '0';
  }
  if (className === 'top-0') props.top = '0';
  if (className === 'top-2') props.top = '0.5rem';
  if (className === 'top-4') props.top = '1rem';
  if (className === 'top-24') props.top = '6rem';
  if (className === 'top-28') props.top = '7rem';
  if (className === 'top-full') props.top = '100%';
  if (className === 'right-0') props.right = '0';
  if (className === 'right-2') props.right = '0.5rem';
  if (className === 'right-4') props.right = '1rem';
  if (className === 'right-6') props.right = '1.5rem';
  if (className === 'bottom-0') props.bottom = '0';
  if (className === 'bottom-4') props.bottom = '1rem';
  if (className === 'bottom-6') props.bottom = '1.5rem';
  if (className === 'left-0') props.left = '0';
  if (className === 'left-1/2') {
    props.left = '50%';
  }
  if (className === '-translate-x-1/2') props.transform = 'translateX(-50%)';
  if (className === 'transform') props.transform = 'var(--tw-transform, none)';
  if (className === 'translate-x-0') props.transform = 'translateX(0)';
  if (className === 'translate-x-full') props.transform = 'translateX(100%)';

  // Z-index
  const zMatch = className.match(/^z-(\d+)$/) || className.match(/^z-\[(\d+)\]$/);
  if (zMatch) props['z-index'] = zMatch[1];
  if (className === '-z-10') props['z-index'] = '-10';

  // Sizing
  if (className === 'w-full') props.width = '100%';
  if (className === 'w-auto') props.width = 'auto';
  if (className === 'w-fit') props.width = 'fit-content';
  if (className === 'h-full') props.height = '100%';
  if (className === 'h-fit') props.height = 'fit-content';
  if (className === 'min-h-0') props['min-height'] = '0';
  if (className === 'min-h-screen') props['min-height'] = '100vh';
  if (className === 'min-h-[60vh]') props['min-height'] = '60vh';
  if (className === 'min-w-0') props['min-width'] = '0';
  if (className === 'min-w-full') props['min-width'] = '100%';
  if (className === 'min-w-[200px]') props['min-width'] = '200px';
  if (className === 'min-w-[300px]') props['min-width'] = '300px';
  if (className === 'max-w-none') props['max-width'] = 'none';
  if (className === 'max-w-sm') props['max-width'] = '24rem';
  if (className === 'max-w-md') props['max-width'] = '28rem';
  if (className === 'max-w-lg') props['max-width'] = '32rem';
  if (className === 'max-w-xl') props['max-width'] = '36rem';
  if (className === 'max-w-2xl') props['max-width'] = '42rem';
  if (className === 'max-w-3xl') props['max-width'] = '48rem';
  if (className === 'max-w-4xl') props['max-width'] = '56rem';
  if (className === 'max-w-7xl') props['max-width'] = '80rem';
  if (className === 'max-w-[220px]') props['max-width'] = '220px';
  if (className === 'max-w-[240px]') props['max-width'] = '240px';
  if (className === 'max-w-[280px]') props['max-width'] = '280px';
  if (className === 'mx-auto') {
    props['margin-left'] = 'auto';
    props['margin-right'] = 'auto';
  }

  const sizeMap = {
    'w-1': '0.25rem',
    'w-3': '0.75rem',
    'w-3.5': '0.875rem',
    'w-4': '1rem',
    'w-5': '1.25rem',
    'w-6': '1.5rem',
    'w-8': '2rem',
    'w-10': '2.5rem',
    'w-12': '3rem',
    'w-16': '4rem',
    'w-20': '5rem',
    'w-24': '6rem',
    'w-56': '14rem',
    'h-0.5': '0.125rem',
    'h-1': '0.25rem',
    'h-1.5': '0.375rem',
    'h-3': '0.75rem',
    'h-3.5': '0.875rem',
    'h-4': '1rem',
    'h-5': '1.25rem',
    'h-6': '1.5rem',
    'h-8': '2rem',
    'h-10': '2.5rem',
    'h-11': '2.75rem',
    'h-12': '3rem',
    'h-16': '4rem',
    'h-20': '5rem',
  };
  if (sizeMap[className]) {
    if (className.startsWith('w-')) props.width = sizeMap[className];
    else props.height = sizeMap[className];
  }

  // Spacing
  const spaceMap = {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
  };
  for (const [prefix, prop] of [
    ['p', 'padding'],
    ['px', ['padding-left', 'padding-right']],
    ['py', ['padding-top', 'padding-bottom']],
    ['pt', 'padding-top'],
    ['pb', 'padding-bottom'],
    ['pl', 'padding-left'],
    ['pr', 'padding-right'],
    ['m', 'margin'],
    ['mx', ['margin-left', 'margin-right']],
    ['my', ['margin-top', 'margin-bottom']],
    ['mt', 'margin-top'],
    ['mb', 'margin-bottom'],
    ['ml', 'margin-left'],
    ['mr', 'margin-right'],
  ]) {
    const m = className.match(new RegExp(`^${prefix}-(.+)$`));
    if (m) {
      let val = spaceMap[m[1]] || (m[1] === 'md' ? '1.5rem' : null);
      if (m[1] === '1.5') val = '0.375rem';
      if (m[1] === '2.5') val = '0.625rem';
      if (val) {
        if (Array.isArray(prop)) prop.forEach((p) => (props[p] = val));
        else props[prop] = val;
      }
    }
  }
  if (className === 'p-md') props.padding = '1.5rem';
  if (className === '-mx-md') {
    props['margin-left'] = '-1.5rem';
    props['margin-right'] = '-1.5rem';
  }
  if (className === '-mt-md') props['margin-top'] = '-1.5rem';
  if (className === '-mr-2') props['margin-right'] = '-0.5rem';
  if (className === 'mb-md') props['margin-bottom'] = '1.5rem';

  const gapMatch = className.match(/^gap-(.+)$/);
  if (gapMatch) {
    const g = {
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
    };
    if (g[gapMatch[1]]) props.gap = g[gapMatch[1]];
  }

  // Grid
  const gcMatch = className.match(/^grid-cols-(\d+)$/);
  if (gcMatch) props['grid-template-columns'] = `repeat(${gcMatch[1]}, minmax(0, 1fr))`;
  if (className === 'lg:grid-cols-[1fr_320px]') return null; // handled via media

  // Typography
  const typeScale = {
    'text-xs': ['0.75rem', '1.5'],
    'text-sm': ['0.875rem', '1.5'],
    'text-base': ['1rem', '1.6'],
    'text-lg': ['1.125rem', '1.7'],
    'text-xl': ['1.25rem', '1.5'],
    'text-2xl': ['1.5rem', '1.3'],
    'text-3xl': ['1.875rem', '1.3'],
    'text-4xl': ['2.25rem', '1.2'],
    'text-5xl': ['3rem', '1.1'],
    'text-display-lg': ['48px', '1.2'],
    'text-display-md': ['40px', '1.2'],
    'text-heading-xl': ['32px', '1.3'],
    'text-heading-lg': ['28px', '1.3'],
    'text-heading-md': ['24px', '1.4'],
    'text-heading-sm': ['20px', '1.4'],
    'text-body-xl': ['20px', '1.7'],
    'text-body-lg': ['18px', '1.7'],
    'text-body-base': ['16px', '1.6'],
    'text-body-sm': ['14px', '1.5'],
    'text-body-xs': ['12px', '1.5'],
  };
  if (typeScale[className]) {
    props['font-size'] = typeScale[className][0];
    props['line-height'] = typeScale[className][1];
  }
  if (className === 'font-display' || className === 'font-sans') props['font-family'] = FONT;
  if (className === 'font-mono')
    props['font-family'] = 'ui-monospace, SFMono-Regular, Menlo, monospace';
  if (className === 'font-bold') props['font-weight'] = '700';
  if (className === 'font-semibold') props['font-weight'] = '600';
  if (className === 'font-medium') props['font-weight'] = '500';
  if (className === 'font-light') props['font-weight'] = '300';
  if (className === 'text-center') props['text-align'] = 'center';
  if (className === 'text-left') props['text-align'] = 'left';
  if (className === 'text-balance') props['text-wrap'] = 'balance';
  if (className === 'uppercase') props['text-transform'] = 'uppercase';
  if (className === 'italic') props['font-style'] = 'italic';
  if (className === 'underline') props['text-decoration'] = 'underline';
  if (className === 'line-through') props['text-decoration'] = 'line-through';
  if (className === 'underline-offset-2') props['text-underline-offset'] = '2px';
  if (className === 'decoration-2') props['text-decoration-thickness'] = '2px';
  if (className === 'decoration-primary/50')
    props['text-decoration-color'] = 'rgba(27, 94, 32, 0.5)';
  if (className === 'leading-relaxed') props['line-height'] = '1.625';
  if (className === 'leading-tight') props['line-height'] = '1.25';
  if (className === 'leading-[1.08]') props['line-height'] = '1.08';
  if (className === 'tracking-tight') props['letter-spacing'] = '-0.025em';
  if (className === 'tracking-wide') props['letter-spacing'] = '0.025em';
  if (className === 'tracking-wider') props['letter-spacing'] = '0.05em';
  if (className === 'tracking-widest') props['letter-spacing'] = '0.1em';
  if (className === 'whitespace-nowrap') props['white-space'] = 'nowrap';
  if (className === 'break-all') props['word-break'] = 'break-all';
  if (className === 'line-clamp-2') {
    props.display = '-webkit-box';
    props['-webkit-line-clamp'] = '2';
    props['-webkit-box-orient'] = 'vertical';
    props.overflow = 'hidden';
  }
  if (className === 'line-clamp-3') {
    props.display = '-webkit-box';
    props['-webkit-line-clamp'] = '3';
    props['-webkit-box-orient'] = 'vertical';
    props.overflow = 'hidden';
  }

  // Colors - text
  if (className.startsWith('text-')) {
    const c = className.slice(5);
    const col = parseColor(c);
    if (col) props.color = col;
  }

  // Colors - bg
  if (className.startsWith('bg-')) {
    const c = className.slice(3);
    const col = parseColor(c);
    if (col) props['background-color'] = col;
  }

  // Border
  if (className === 'border') props['border-width'] = '1px';
  if (className === 'border-2') props['border-width'] = '2px';
  if (className === 'border-b') props['border-bottom-width'] = '1px';
  if (className === 'border-t') props['border-top-width'] = '1px';
  if (className === 'border-y') {
    props['border-top-width'] = '1px';
    props['border-bottom-width'] = '1px';
  }
  if (className === 'border-l-4') props['border-left-width'] = '4px';
  if (className === 'border-collapse') props['border-collapse'] = 'collapse';
  if (className === 'last:border-0')
    return { selectorSuffix: ':last-child', props: { 'border-width': '0' } };
  if (className.startsWith('border-') && !className.startsWith('border-collapse')) {
    const c = className.slice(7);
    const col = parseColor(c);
    if (col) {
      props['border-style'] = 'solid';
      props['border-color'] = col;
    }
  }

  // Border radius
  const radius = {
    rounded: '0.25rem',
    'rounded-md': '0.375rem',
    'rounded-lg': '0.5rem',
    'rounded-xl': '0.75rem',
    'rounded-2xl': '1rem',
    'rounded-full': '9999px',
    'rounded-card': '12px',
    'rounded-btn': '8px',
    'rounded-t-card': '12px 12px 0 0',
    'rounded-b-xl': '0 0 0.75rem 0.75rem',
    'rounded-r-xl': '0 0.75rem 0.75rem 0',
  };
  if (radius[className]) props['border-radius'] = radius[className];

  // Shadow
  const shadows = {
    'shadow-sm': '0 1px 2px rgba(0,0,0,0.05)',
    'shadow-md': '0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)',
    'shadow-card': '0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)',
    'shadow-lg': '0 10px 30px rgba(0,0,0,0.1)',
    'shadow-xl': '0 20px 40px rgba(0,0,0,0.15)',
    'shadow-2xl': '0 25px 50px rgba(0,0,0,0.25)',
    'shadow-nav': '0 1px 0 rgba(0,0,0,0.06), 0 4px 16px rgba(15,23,42,0.06)',
  };
  if (shadows[className]) props['box-shadow'] = shadows[className];

  // Opacity
  const opMatch = className.match(/^opacity-(\d+)$/);
  if (opMatch) props.opacity = parseInt(opMatch[1], 10) / 100;

  // Overflow
  if (className === 'overflow-hidden') props.overflow = 'hidden';
  if (className === 'overflow-x-auto') props['overflow-x'] = 'auto';
  if (className === 'overflow-y-auto') props['overflow-y'] = 'auto';

  // Lists
  if (className === 'list-none') props['list-style'] = 'none';
  if (className === 'list-disc') props['list-style-type'] = 'disc';
  if (className === 'list-decimal') props['list-style-type'] = 'decimal';
  if (className === 'list-inside') props['list-style-position'] = 'inside';

  // Misc
  if (className === 'cursor-pointer') props.cursor = 'pointer';
  if (className === 'resize-y') props.resize = 'vertical';
  if (className === 'object-contain') props['object-fit'] = 'contain';
  if (className === 'backdrop-blur-sm') props['backdrop-filter'] = 'blur(4px)';
  if (className === 'backdrop-blur-md') props['backdrop-filter'] = 'blur(12px)';
  if (className === 'blur-3xl') props.filter = 'blur(64px)';
  if (className === 'antialiased') {
    props['-webkit-font-smoothing'] = 'antialiased';
    props['-moz-osx-font-smoothing'] = 'grayscale';
  }

  // Transitions
  if (className === 'transition-all') props.transition = 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)';
  if (className === 'transition-colors')
    props.transition = 'color 200ms, background-color 200ms, border-color 200ms';
  if (className === 'transition-opacity') props.transition = 'opacity 200ms';
  if (className === 'transition-shadow') props.transition = 'box-shadow 200ms';
  if (className === 'transition-transform') props.transition = 'transform 200ms';
  if (className === 'duration-150') props['transition-duration'] = '150ms';
  if (className === 'duration-200') props['transition-duration'] = '200ms';
  if (className === 'duration-300') props['transition-duration'] = '300ms';
  if (className === 'duration-micro') props['transition-duration'] = '150ms';
  if (className === 'duration-standard') props['transition-duration'] = '200ms';
  if (className === 'ease-out') props['transition-timing-function'] = 'cubic-bezier(0, 0, 0.2, 1)';
  if (className === 'ease-in-out')
    props['transition-timing-function'] = 'cubic-bezier(0.4, 0, 0.2, 1)';
  if (className === 'ease-smooth')
    props['transition-timing-function'] = 'cubic-bezier(0.4, 0, 0.2, 1)';

  // Space-y
  const syMatch = className.match(/^space-y-(\d+)$/);
  if (syMatch) return { spaceY: syMatch[1] };

  if (className === 'group') return { group: true };
  if (className === 'animate-spin') {
    props.animation = 'spin 1s linear infinite';
  }

  return Object.keys(props).length ? props : null;
}

function generateSpaceY(className, val) {
  const map = {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
  };
  const gap = map[val];
  if (!gap) return '';
  const sel = escapeClass(className);
  return `.${sel} > * + * { margin-top: ${gap}; }`;
}

function generateHover(className) {
  const rest = className.slice(6);
  let target = rest;
  if (!rest.startsWith('bg-') && !rest.startsWith('text-') && !rest.startsWith('border-')) {
    if (rest === 'underline') target = 'underline';
    else if (rest === 'opacity-90' || rest === 'opacity-100') target = rest;
    else if (rest === 'shadow-lg') target = 'shadow-lg';
    else if (rest === 'translate-x-1')
      return `.${escapeClass(className)}:hover { transform: translateX(0.25rem); }`;
    else return '';
  }
  const inner = classToCss(target);
  if (!inner || inner.spaceY || inner.group) return '';
  const sel = `.${escapeClass(className)}:hover`;
  return rule(sel, inner);
}

function generateFocus(className) {
  const map = {
    'focus:outline-none': { outline: 'none' },
    'focus:border-primary': { 'border-color': COLORS.primary },
    'focus:ring-0': { 'box-shadow': 'none' },
    'focus:ring-2': { 'box-shadow': `0 0 0 2px ${COLORS.primary}` },
    'focus:ring-primary': { 'box-shadow': `0 0 0 2px ${COLORS.primary}` },
    'focus:ring-offset-0': { 'outline-offset': '0' },
    'focus:ring-offset-1': { 'outline-offset': '1px' },
    'focus:ring-offset-2': { 'outline-offset': '2px' },
    'focus:ring-offset-slate-100': {},
    'focus:rounded-lg': { 'border-radius': '0.5rem' },
    'focus:text-white': { color: '#fff' },
    'focus:bg-primary': { 'background-color': COLORS.primary },
    'focus:absolute': { position: 'absolute' },
    'focus:left-4': { left: '1rem' },
    'focus:top-4': { top: '1rem' },
    'focus:px-4': { 'padding-left': '1rem', 'padding-right': '1rem' },
    'focus:py-2': { 'padding-top': '0.5rem', 'padding-bottom': '0.5rem' },
    'focus:shadow-lg': { 'box-shadow': '0 10px 30px rgba(0,0,0,0.1)' },
    'focus:z-[100]': { 'z-index': '100' },
    'focus:not-sr-only:focus': {},
  };
  if (className === 'focus:not-sr-only') {
    return `.${escapeClass('focus:not-sr-only')}:focus {
  position: relative;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  white-space: normal;
  clip: auto;
}`;
  }
  const props = map[className];
  if (!props) return '';
  return rule(`.${escapeClass(className)}:focus`, props);
}

function generateGroupHover(className) {
  const rest = className.slice(12);
  let props = {};
  if (rest === 'opacity-100') props.opacity = '1';
  if (rest === 'opacity-90') props.opacity = '0.9';
  if (rest === 'underline') props['text-decoration'] = 'underline';
  if (rest.startsWith('text-')) {
    const col = parseColor(rest.slice(5));
    if (col) props.color = col;
  }
  if (!Object.keys(props).length) return '';
  return `.group:hover .${escapeClass(className)} {\n${Object.entries(props)
    .map(([k, v]) => `  ${k}: ${v};`)
    .join('\n')}\n}`;
}

function generateResponsive(bp, className) {
  const inner = classToCss(className);
  if (!inner || inner.spaceY) return '';
  return `@media (min-width: ${BREAKPOINTS[bp]}px) {\n  .${bp}\\:${escapeClass(className).replace(/\\:/g, ':')} {\n${Object.entries(
    inner,
  )
    .map(([k, v]) => `    ${k}: ${v};`)
    .join('\n')}\n  }\n}`;
}

// Load used classes
const usedPath = path.join(__dirname, 'used-classes.txt');
let classes = [];
if (fs.existsSync(usedPath)) {
  classes = fs.readFileSync(usedPath, 'utf8').split('\n').filter(Boolean);
} else {
  console.error('Run class extraction first');
  process.exit(1);
}

const lines = ['/* AUTO-GENERATED vanilla utilities — do not edit by hand */', ''];
const handled = new Set();

lines.push('@keyframes spin { to { transform: rotate(360deg); } }');
lines.push(
  '@keyframes pulse-metric { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.03); } }',
);
lines.push('.motion-safe\\:animate-fade-in { animation: fade-in 0.5s ease-out; }');
lines.push(
  '.motion-safe\\:animate-pulse-metric { animation: pulse-metric 2.5s ease-in-out infinite; }',
);
lines.push(
  '@media (prefers-reduced-motion: reduce) { .motion-safe\\:animate-fade-metric, .motion-safe\\:animate-pulse-metric { animation: none; } }',
);
lines.push('');

for (const cls of classes) {
  if (handled.has(cls)) continue;
  handled.add(cls);

  // Skip component classes defined elsewhere
  if (
    cls.startsWith('Hero') ||
    cls.startsWith('section-') ||
    cls.startsWith('card') ||
    cls.startsWith('btn-') ||
    cls.startsWith('hero-enter') ||
    cls === 'accordion-trigger' ||
    cls === 'text-tagline' ||
    cls === 'sr-only' ||
    cls.startsWith('prose')
  )
    continue;

  if (cls.startsWith('hover:')) {
    const r = generateHover(cls);
    if (r) lines.push(r);
    continue;
  }
  if (cls.startsWith('focus:')) {
    const r = generateFocus(cls);
    if (r) lines.push(r);
    continue;
  }
  if (cls.startsWith('group-hover:')) {
    const r = generateGroupHover(cls);
    if (r) lines.push(r);
    continue;
  }
  if (cls.startsWith('motion-safe:')) continue;

  const bpMatch = cls.match(/^(sm|md|lg):(.+)$/);
  if (bpMatch) {
    if (bpMatch[2] === 'grid-cols-[1fr_320px]') {
      lines.push(`@media (min-width: ${BREAKPOINTS.lg}px) {
  .lg\\:grid-cols-\\[1fr_320px\\] {
    grid-template-columns: 1fr 320px;
  }
}`);
      continue;
    }
    const r = generateResponsive(bpMatch[1], bpMatch[2]);
    if (r) lines.push(r);
    continue;
  }

  const result = classToCss(cls);
  if (!result) continue;
  if (result.spaceY) {
    lines.push(generateSpaceY(cls, result.spaceY));
    continue;
  }
  if (result.group) {
    lines.push(`.${escapeClass(cls)} { /* group marker */ }`);
    continue;
  }
  if (result.selectorSuffix) {
    lines.push(rule(`.${escapeClass(cls)}${result.selectorSuffix}`, result.props));
    continue;
  }
  lines.push(rule(`.${escapeClass(cls)}`, result));
}

// Special responsive display combos
lines.push(`
@media (min-width: 640px) {
  .sm\\:block { display: block; }
  .sm\\:inline { display: inline; }
  .sm\\:w-auto { width: auto; }
  .sm\\:w-\\[320px\\] { width: 320px; }
}
@media (min-width: 768px) {
  .md\\:inline { display: inline; }
  .md\\:flex-row { flex-direction: row; }
  .md\\:items-center { align-items: center; }
  .md\\:text-display-xl { font-size: 64px; line-height: 1.1; }
  .md\\:text-display-md { font-size: 40px; line-height: 1.2; }
  .md\\:text-display-2xl { font-size: 72px; line-height: 1.1; }
  .md\\:text-base { font-size: 1rem; color: #0F172A !important; }
  .md\\:h-11 { height: 2.75rem; }
  .md\\:h-14 { height: 3.5rem; }
}
@media (min-width: 1024px) {
  .lg\\:block { display: block; }
  .lg\\:hidden { display: none; }
  .lg\\:flex { display: flex; }
  .lg\\:sticky { position: sticky; }
  .lg\\:top-24 { top: 6rem; }
  .lg\\:text-display-2xl { font-size: 72px; line-height: 1.1; }
  .lg\\:text-6xl { font-size: 3.75rem; line-height: 1; }
  .lg\\:col-span-1 { grid-column: span 1; }
  .lg\\:col-span-2 { grid-column: span 2; }
}
@media (min-width: 640px) {
  .sm\\:block.Hero-stat-divider,
  .Hero-stat-divider { display: none; }
}
@media (min-width: 640px) {
  .Hero-stat-divider { display: block; }
}
`);

const outPath = path.join(__dirname, '../src/app/styles/utilities/generated.css');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, lines.filter(Boolean).join('\n\n'));
console.log('Wrote', outPath, 'with', lines.length, 'blocks');
