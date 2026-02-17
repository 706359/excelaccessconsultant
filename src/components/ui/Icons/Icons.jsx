/**
 * Professional SVG icons for site-wide use.
 * Use currentColor so icons inherit text color (e.g. text-primary, text-secondary).
 */

const iconClass = 'inline-block shrink-0';

export function IconClock({ className = '', size = 24, ...props }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      width={size}
      height={size}
      className={`${iconClass} ${className}`}
      {...props}
    >
      <circle cx='12' cy='12' r='10' />
      <path d='M12 6v6l4 2' />
    </svg>
  );
}

export function IconDatabase({ className = '', size = 24, ...props }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      width={size}
      height={size}
      className={`${iconClass} ${className}`}
      {...props}
    >
      <ellipse cx='12' cy='5' rx='9' ry='3' />
      <path d='M21 12c0 1.66-4 3-9 3s-9-1.34-9-3' />
      <path d='M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5' />
      <path d='M21 12c0 1.66-4 3-9 3s-9-1.34-9-3' />
    </svg>
  );
}

export function IconChart({ className = '', size = 24, ...props }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      width={size}
      height={size}
      className={`${iconClass} ${className}`}
      {...props}
    >
      <path d='M3 3v18h18' />
      <path d='M18 17V9' />
      <path d='M13 17V5' />
      <path d='M8 17v-3' />
    </svg>
  );
}

export function IconTable({ className = '', size = 24, ...props }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      width={size}
      height={size}
      className={`${iconClass} ${className}`}
      {...props}
    >
      <path d='M12 3v18' />
      <rect x='3' y='3' width='18' height='18' rx='2' />
      <path d='M3 9h18' />
      <path d='M3 15h18' />
    </svg>
  );
}

export function IconTrendingUp({ className = '', size = 24, ...props }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      width={size}
      height={size}
      className={`${iconClass} ${className}`}
      {...props}
    >
      <path d='m22 7-8.5 8.5-5-5L2 17' />
      <path d='M16 7h6v6' />
    </svg>
  );
}

export function IconRefresh({ className = '', size = 24, ...props }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      width={size}
      height={size}
      className={`${iconClass} ${className}`}
      {...props}
    >
      <path d='M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8' />
      <path d='M3 3v5h5' />
    </svg>
  );
}

export function IconSettings({ className = '', size = 24, ...props }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      width={size}
      height={size}
      className={`${iconClass} ${className}`}
      {...props}
    >
      <path d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z' />
      <circle cx='12' cy='12' r='3' />
    </svg>
  );
}

export function IconZap({ className = '', size = 24, ...props }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      width={size}
      height={size}
      className={`${iconClass} ${className}`}
      {...props}
    >
      <path d='M13 2 3 14h9l-1 8 10-12h-9l1-8z' />
    </svg>
  );
}

export function IconShield({ className = '', size = 24, ...props }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      width={size}
      height={size}
      className={`${iconClass} ${className}`}
      {...props}
    >
      <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' />
    </svg>
  );
}

export function IconMessageCircle({ className = '', size = 24, ...props }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      width={size}
      height={size}
      className={`${iconClass} ${className}`}
      {...props}
    >
      <path d='M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z' />
    </svg>
  );
}

export function IconMail({ className = '', size = 24, ...props }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      width={size}
      height={size}
      className={`${iconClass} ${className}`}
      {...props}
    >
      <rect width='20' height='16' x='2' y='4' rx='2' />
      <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
    </svg>
  );
}

export function IconAlertCircle({ className = '', size = 24, ...props }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      width={size}
      height={size}
      className={`${iconClass} ${className}`}
      {...props}
    >
      <circle cx='12' cy='12' r='10' />
      <path d='M12 8v4' />
      <path d='M12 16h.01' />
    </svg>
  );
}
