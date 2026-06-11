import CheckList from '../CheckList/CheckList';

const DEFAULT_TIERS = [
  {
    name: 'Simple Projects',
    price: '$1,500-$3,000',
    description: 'Basic automation, single process, 1-2 weeks',
    features: [
      'Single process automation',
      'Basic VBA macros',
      'Simple reporting',
      'Documentation included',
    ],
    highlighted: false,
  },
  {
    name: 'Advanced Projects',
    price: '$3,000-$8,000',
    description: 'Complex workflows, multi-file processing, 3-6 weeks',
    features: [
      'Complex workflows',
      'Multi-file processing',
      'Advanced dashboards',
      'System integration',
      'Full documentation',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise Projects',
    price: '$8,000+',
    description: 'Full system integration, custom database connections, 6+ weeks',
    features: [
      'Full system integration',
      'Custom database design',
      'Multi-user systems',
      'Team walkthrough and written guides',
      'Extended support',
    ],
    highlighted: false,
  },
];

export default function ServicePricingSection({
  tiers = DEFAULT_TIERS,
  variant = 'excel',
  footerNote = 'Documentation, training, 100% code ownership, no recurring fees',
}) {
  const accent = variant === 'access' ? 'secondary' : 'primary';
  const accentClass =
    variant === 'access' ? 'pricing-card--accent-secondary' : 'pricing-card--accent-primary';
  const priceClass =
    variant === 'access' ? 'pricing-card__price--secondary' : 'pricing-card__price--primary';

  return (
    <section className='service-section service-section--alt'>
      <div className='service-section__inner'>
        <h2 className='service-section__title'>Pricing</h2>
        <p className='service-section__intro'>
          Fixed pricing. No hourly billing. No surprises. You know the cost before we start.
        </p>
        <div className='pricing-grid'>
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`pricing-card ${tier.highlighted ? accentClass : ''}`}
            >
              <h3 className='pricing-card__title'>{tier.name}</h3>
              <div className={`pricing-card__price ${priceClass}`}>{tier.price}</div>
              <p className='pricing-card__desc'>{tier.description}</p>
              <CheckList items={tier.features} accent={accent} />
            </div>
          ))}
        </div>
        <p className='pricing-section__footer'>
          <strong>All projects include:</strong> {footerNote}
        </p>
      </div>
    </section>
  );
}
