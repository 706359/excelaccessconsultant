import Link from 'next/link';

const ItemArrow = () => (
  <svg
    className='cs-item__arrow'
    width='14'
    height='14'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
  >
    <path d='M9 5l7 7-7 7' />
  </svg>
);

/**
 * Card shell with stretched-link on the title only (anchor text = title).
 */
export default function StretchedCsItem({
  href,
  accent = 'primary',
  num,
  industry,
  title,
  outcome,
  titleAs: TitleTag = 'h3',
  children,
  className = '',
}) {
  const classes = ['cs-item', `cs-item--${accent}`, 'stretched-card', className]
    .filter(Boolean)
    .join(' ');

  return (
    <article className={classes}>
      {num != null && <span className='cs-item__num'>{num}</span>}
      <div className='cs-item__body'>
        {industry ? <span className='cs-item__industry'>{industry}</span> : null}
        <TitleTag className='cs-item__title'>
          <Link href={href} className='stretched-link'>
            {title}
          </Link>
        </TitleTag>
        {outcome ? <p className='cs-item__outcome'>{outcome}</p> : null}
        {children}
      </div>
      <ItemArrow />
    </article>
  );
}
