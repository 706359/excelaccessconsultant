import Link from 'next/link';
import { HOME_WHY_TEASER } from '../../constants/homeConversion';

export default function HomeWhyTeaser() {
  return (
    <section
      className='page-section page-section--compact page-section--alt page-section--border'
      aria-labelledby='home-why-teaser-heading'
    >
      <div className='container'>
        <div className='section-header section-header--lg'>
          <h2 id='home-why-teaser-heading' className='section-header__title'>
            {HOME_WHY_TEASER.heading}
          </h2>
          {HOME_WHY_TEASER.description ? (
            <p className='section-header__desc'>{HOME_WHY_TEASER.description}</p>
          ) : null}
        </div>

        <div className='home-why-teaser'>
          {HOME_WHY_TEASER.items.map((item) => (
            <div key={item.label} className='stat-pill home-why-teaser__item'>
              <p className='home-why-teaser__label'>{item.label}</p>
              <p className='home-why-teaser__detail text-muted-sm'>{item.detail}</p>
            </div>
          ))}
        </div>

        <p className='home-why-teaser__cta text-center-link'>
          <Link href={HOME_WHY_TEASER.anchor} className='text-link text-link--underline'>
            {HOME_WHY_TEASER.ctaLabel}
          </Link>
        </p>
      </div>
    </section>
  );
}
