import { TRUST } from '../../constants/site';

/** Hero / section eyebrow, flanking accent lines + uppercase tagline */
export default function BrandSubline({ text = TRUST.eyebrow, className = '', centered = false }) {
  const rootClass = [
    'brand-subline',
    'brand-subline--eyebrow',
    centered ? 'brand-subline--centered' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClass}>
      <span className='brand-subline__line brand-subline__line--excel' aria-hidden='true' />
      <span className='brand-subline__eyebrow-text'>{text}</span>
      <span className='brand-subline__line brand-subline__line--access' aria-hidden='true' />
    </div>
  );
}
