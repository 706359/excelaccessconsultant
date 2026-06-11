import ContactCTAs, { CTA_BUTTON_VARIANTS } from '../ContactCTAs/ContactCTAs';

export default function PageCTASection({
  heading = 'Ready to Talk About Your Project?',
  subtext = 'Book a free consultation or request a fixed-price estimate. I respond within 24 hours.',
  dark = false,
  solidPrimary = false,
  className = '',
}) {
  const sectionClass = [
    'page-cta',
    solidPrimary ? 'page-cta--solid-primary' : dark ? 'page-cta--navy' : 'page-cta--light',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const isDark = dark || solidPrimary;

  return (
    <section className={sectionClass}>
      <div className='page-cta__inner page-cta__inner--animate'>
        <h2 className='page-cta__title'>{heading}</h2>
        <p className='page-cta__text'>{subtext}</p>
        <ContactCTAs
          {...(isDark ? CTA_BUTTON_VARIANTS.onDark : CTA_BUTTON_VARIANTS.onLight)}
          center
        />
      </div>
    </section>
  );
}
