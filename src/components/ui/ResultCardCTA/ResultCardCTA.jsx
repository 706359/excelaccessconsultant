function stripArrow(text) {
  return String(text)
    .replace(/\s*→\s*$/, '')
    .trim();
}

export default function ResultCardCTA({ label, as: Tag = 'span', className = '', ...props }) {
  const classes = ['cs-result-card__cta', className].filter(Boolean).join(' ');

  return (
    <Tag className={classes} {...props}>
      <span className='cs-result-card__cta-label'>{stripArrow(label)}</span>
      <span className='cs-result-card__cta-arrow' aria-hidden='true'>
        <svg
          width='14'
          height='14'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M5 12h14' />
          <path d='M13 5l7 7-7 7' />
        </svg>
      </span>
    </Tag>
  );
}
