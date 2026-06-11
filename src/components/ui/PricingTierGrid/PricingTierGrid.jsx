import Link from 'next/link';
import ResultCardCTA from '../ResultCardCTA/ResultCardCTA';

export default function PricingTierGrid({ tiers, variant = 'excel', contactHref = '/contact' }) {
  const accent = variant === 'access' ? 'secondary' : 'primary';
  const chipClass = accent === 'primary' ? 'chip-primary' : 'chip-secondary';

  return (
    <div className='grid-3'>
      {tiers.map((tier, index) => {
        const num = String(index + 1).padStart(2, '0');
        const href = tier.href || contactHref;

        return (
          <Link
            key={tier.name}
            href={href}
            className={`cs-result-card cs-result-card--${accent} ${tier.highlighted ? 'cs-result-card--featured' : ''}`}
          >
            <div className='cs-result-card__top'>
              <span className={chipClass}>{tier.highlighted ? 'Most Common' : tier.name}</span>
              <span className='cs-result-card__num'>{num}</span>
            </div>
            <div className='cs-result-card__metric'>{tier.price}</div>
            <div className='cs-result-card__label'>
              {tier.highlighted ? tier.name : tier.description}
            </div>
            <div className='cs-result-card__transform'>
              <span className='cs-result-card__before'>Hourly billing</span>
              <span className='cs-result-card__sep'>→</span>
              <span className='cs-result-card__after'>Fixed price</span>
            </div>
            <p className='cs-result-card__desc'>
              {tier.highlighted ? tier.description : tier.features?.join(' · ')}
            </p>
            {tier.highlighted && tier.features?.length > 0 && (
              <p className='cs-result-card__meta'>{tier.features.join(' · ')}</p>
            )}
            <ResultCardCTA label='Get quote →' />
          </Link>
        );
      })}
    </div>
  );
}
