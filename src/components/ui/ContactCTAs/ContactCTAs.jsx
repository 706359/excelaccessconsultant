import Link from 'next/link';
import { CTA } from '../../../constants/site';
import Button from '../Button/Button';

/** Shared CTA button pairs — always pass explicitly to avoid SSR/client default drift. */
export const CTA_BUTTON_VARIANTS = {
  onLight: { primaryVariant: 'primary', secondaryVariant: 'outline-access' },
  onDark: { primaryVariant: 'inverse', secondaryVariant: 'outline-access' },
};

export default function ContactCTAs({
  primaryVariant = CTA_BUTTON_VARIANTS.onLight.primaryVariant,
  secondaryVariant = CTA_BUTTON_VARIANTS.onLight.secondaryVariant,
  size = 'large',
  center = false,
}) {
  const classes = ['contact-ctas', 'contact-ctas--stack'];
  if (center) classes.push('contact-ctas--center');

  return (
    <div className={classes.join(' ')}>
      <Button variant={primaryVariant} size={size} as={Link} href={CTA.primaryHref}>
        {CTA.primary}
      </Button>
      <Button variant={secondaryVariant} size={size} as={Link} href={CTA.secondaryHref}>
        {CTA.secondary}
      </Button>
    </div>
  );
}
