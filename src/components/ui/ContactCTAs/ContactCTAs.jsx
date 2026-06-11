import Link from 'next/link';
import { CTA } from '../../../constants/site';
import Button from '../Button/Button';

export default function ContactCTAs({
  primaryVariant = 'primary',
  secondaryVariant = 'secondary',
  size = 'large',
  center = false,
  green = false,
}) {
  const primaryBtnVariant = green ? 'primary-green' : primaryVariant;
  const secondaryBtnVariant = green ? 'outline-access' : secondaryVariant;

  const classes = ['contact-ctas', 'contact-ctas--stack'];
  if (center) classes.push('contact-ctas--center');

  return (
    <div className={classes.join(' ')}>
      <Button variant={primaryBtnVariant} size={size} as={Link} href={CTA.primaryHref}>
        {CTA.primary}
      </Button>
      <Button variant={secondaryBtnVariant} size={size} as={Link} href={CTA.secondaryHref}>
        {CTA.secondary}
      </Button>
    </div>
  );
}
