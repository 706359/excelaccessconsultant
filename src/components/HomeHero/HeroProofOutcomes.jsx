import Link from 'next/link';
import { HERO_PROOF_OUTCOMES } from '../../constants/homeConversion';
import { ICON_SIZE } from '../../constants/iconSizes';
import { IconArrowRight } from '../ui/Icons/Icons';

export default function HeroProofOutcomes() {
  return (
    <div className='hero-proof-grid' role='list' aria-label='Client outcome examples'>
      {HERO_PROOF_OUTCOMES.map((outcome) => (
        <Link
          key={`${outcome.href}-${outcome.label}`}
          href={outcome.href}
          className='Hero-proof-bar Hero-proof-bar--item'
          role='listitem'
          aria-label={outcome.label}
        >
          <span className='Hero-proof-bar__label' aria-hidden='true'>{outcome.label}</span>
          <span className='Hero-proof-bar__transform' aria-hidden='true'>
            <span className='Hero-proof-bar__before'>{outcome.before}</span>
            <IconArrowRight className='Hero-proof-bar__icon' size={ICON_SIZE.sm} aria-hidden />
            <span className='Hero-proof-bar__after'>{outcome.after}</span>
          </span>
          <span className='Hero-proof-bar__link' aria-hidden='true'>
            Case study
            <IconArrowRight size={ICON_SIZE.sm} aria-hidden />
          </span>
        </Link>
      ))}
    </div>
  );
}
