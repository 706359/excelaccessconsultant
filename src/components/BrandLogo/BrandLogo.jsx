import { BRAND_LOGO } from '../../config/brand';

export default function BrandLogo({
  className = '',
  width,
  height,
  loading = 'eager',
  fetchPriority,
  invert = false,
}) {
  const imgClassName = [className, invert ? 'brand-logo--invert' : ''].filter(Boolean).join(' ');

  return (
    <picture>
      <source srcSet={BRAND_LOGO.webp} type='image/webp' />
      <img
        src={BRAND_LOGO.src}
        alt={BRAND_LOGO.alt}
        className={imgClassName}
        width={width ?? BRAND_LOGO.width}
        height={height ?? BRAND_LOGO.height}
        loading={loading}
        {...(fetchPriority ? { fetchPriority } : {})}
      />
    </picture>
  );
}
