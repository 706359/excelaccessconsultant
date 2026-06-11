import Link from 'next/link';
import { ICON_SIZE } from '../../../constants/iconSizes';
import ContactCTAs from '../ContactCTAs/ContactCTAs';
import FAQAccordion from '../FAQAccordion/FAQAccordion';
import { IconArrowRight, IconCheck } from '../Icons/Icons';

export function ProblemSection({ title = 'The Problem', problems }) {
  return (
    <section className='service-section'>
      <div className='service-section__inner'>
        <h2 className='service-section__title'>{title}</h2>
        <ul className='service-problem-list'>
          {problems.map((problem) => (
            <li key={problem} className='service-problem-item card card--interactive'>
              <IconArrowRight
                className='service-problem-item__icon'
                size={ICON_SIZE.base}
                aria-hidden
              />
              {problem}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function SolutionSection({ title = 'The Solution', paragraphs, bullets }) {
  return (
    <section className='service-section service-section--alt'>
      <div className='service-section__inner'>
        <h2 className='service-section__title'>{title}</h2>
        {paragraphs.map((p) => (
          <p key={p} className='service-section__text'>
            {p}
          </p>
        ))}
        {bullets && (
          <ul className='service-check-list'>
            {bullets.map((item) => (
              <li key={item}>
                <IconCheck className='service-check-list__icon' size={ICON_SIZE.md} aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export function BenefitsSection({ title = 'Business Benefits', benefits }) {
  return (
    <section className='service-section'>
      <div className='service-section__inner'>
        <h2 className='service-section__title'>{title}</h2>
        <div className='service-benefits-grid'>
          {benefits.map(({ title: benefitTitle, description }) => (
            <div key={benefitTitle} className='card card--interactive'>
              <h3 className='service-benefit-card__title'>{benefitTitle}</h3>
              <p className='service-benefit-card__desc'>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MidPageCTA({ heading, subtext, green = false }) {
  return (
    <section className='mid-page-cta'>
      <div className='mid-page-cta__inner'>
        <h2 className='mid-page-cta__title'>{heading}</h2>
        {subtext && <p className='mid-page-cta__text'>{subtext}</p>}
        <ContactCTAs
          green={green}
          primaryVariant='inverse'
          secondaryVariant='outline-white'
          center
        />
      </div>
    </section>
  );
}

export function ServiceSidebar({ tagline, examples, accent = 'primary' }) {
  return (
    <div className='service-sidebar'>
      <div className='service-sidebar__card'>
        <div className='service-sidebar__header'>
          <div
            className={`service-sidebar__accent${accent === 'secondary' ? ' service-sidebar__accent--secondary' : ''}`}
            aria-hidden='true'
          />
          <h2 className='service-sidebar__title'>Real Examples</h2>
        </div>
        <p className='service-sidebar__tagline'>{tagline}</p>
        <div className='service-sidebar__examples'>
          {examples.map(({ href, title: exampleTitle, description }) => (
            <Link key={href} href={href} className='service-sidebar__link'>
              <h3 className='service-sidebar__link-title'>{exampleTitle}</h3>
              <p className='service-sidebar__link-desc'>{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ServiceFAQSection({ title = 'Common Questions', faqs }) {
  return (
    <section className='service-section service-section--no-border'>
      <div className='service-section__inner'>
        <h2 className='service-section__title'>{title}</h2>
        <FAQAccordion items={faqs} />
      </div>
    </section>
  );
}
