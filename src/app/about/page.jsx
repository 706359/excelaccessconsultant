'use client';

import Link from 'next/link';
import SEO from '../../components/SEO/SEO';
import ContactCTAs from '../../components/ui/ContactCTAs/ContactCTAs';
import PageCTASection from '../../components/ui/PageCTASection/PageCTASection';
import ScrollReveal from '../../components/ui/ScrollReveal/ScrollReveal';
import { ABOUT_RELATED_LINKS, ABOUT_WORKFLOW } from '../../constants/aboutPage';
import { CONSULTANTS, TRUST } from '../../constants/site';

const ItemArrow = () => (
  <svg
    className='cs-item__arrow'
    width='14'
    height='14'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
  >
    <path d='M9 5l7 7-7 7' />
  </svg>
);

export default function About() {
  return (
    <div className='page'>
      <SEO
        title='Operational Stability & Data Governance | ExcelAccessConsultant'
        description='I replace fragile spreadsheets with stable, audit-ready systems. Senior-level Excel and Access consulting for finance and operations. You work with me directly.'
        keywords='operational stability, data governance, Excel consulting, Access consulting, audit-ready systems, business continuity, risk mitigation'
        url='https://excelaccessconsultant.com/about'
        ogTitle='Operational Stability & Data Governance | ExcelAccessConsultant'
      />

      <section className='page-hero page-hero--centered'>
        <div className='container'>
          <span className='chip-primary lead-magnet-hero__eyebrow'>{TRUST.eyebrow}</span>
          <h1 className='page-hero__title text-display-sm md:text-display-md lg:text-display-lg'>
            {CONSULTANTS.displayName}
          </h1>
          <p className='text-body-lg text-muted about-hero__role'>{CONSULTANTS.title}</p>
          <p className='page-hero__lead'>
            {TRUST.years} of direct Excel and Access work for finance and operations teams:
            multi-user databases, SQL Server migrations, and VBA automation that replaces manual
            reporting. You work with me directly: no account managers, no handoffs, no middlemen.
          </p>
          <ContactCTAs center />
        </div>
      </section>

      <ScrollReveal as='section' className='page-section page-section--white page-section--border'>
        <div className='container'>
          <div className='section-header section-header--lg'>
            <h2 className='section-header__title'>A Specialist for Complex Operations</h2>
            <p className='section-header__desc'>
              I focus on one thing: making Excel and Access reliable for teams that depend on them
              every day.
            </p>
          </div>

          <div className='stack stack--lg text-lead'>
            <p>
              I&apos;m {CONSULTANTS.displayName}, a {CONSULTANTS.title.toLowerCase()} based in
              Springville, Utah. For over 20 years, I&apos;ve worked at the intersection of business
              logic and Microsoft technology, serving businesses nationwide.
            </p>
            <p>
              My approach is straightforward: I find the manual steps that slow your team down and
              build systems that get rid of it.
            </p>
            <p>
              When you hire me, you&apos;re not getting just a programmer. You&apos;re getting a
              business partner who understands how your operations work. Whether you&apos;re in Utah
              or anywhere in the United States, I deliver the same high-quality Excel and Access
              consulting remotely.
            </p>
          </div>

          <div className='grid-2 stagger-group about-principles'>
            <div className='fact-card fact-card--primary'>
              <span className='fact-card__num'>01</span>
              <h3 className='fact-card__title'>Direct Principal Access</h3>
              <p className='fact-card__body'>
                Every conversation is with {CONSULTANTS.displayName}. No account managers, no junior
                developers, no outsourcing. The consultant who understands your business is the same
                person writing your code.
              </p>
            </div>
            <div className='fact-card fact-card--secondary'>
              <span className='fact-card__num'>02</span>
              <h3 className='fact-card__title'>Code Ownership</h3>
              <p className='fact-card__body'>
                You own 100% of what I build. No licenses, no lock-in, no recurring fees. The
                systems I build are yours, period.
              </p>
            </div>
            <div className='fact-card fact-card--primary'>
              <span className='fact-card__num'>03</span>
              <h3 className='fact-card__title'>Transparent Pricing</h3>
              <p className='fact-card__body'>
                After the free consultation, you get a written scope with timeline and fixed price.
                Advisory work is $90/hour; builds are quoted as a flat fee before any code is
                written.
              </p>
              <div className='card-divider'>
                <div className='text-price'>$90/hour</div>
                <div className='text-muted-sm'>Advisory</div>
                <div className='text-muted-sm about-pricing-note'>
                  Builds: Fixed-price after consultation
                </div>
              </div>
            </div>
            <div className='fact-card fact-card--secondary'>
              <span className='fact-card__num'>04</span>
              <h3 className='fact-card__title'>Enterprise Security</h3>
              <p className='fact-card__body'>
                All work happens in your IT environment. Your data never leaves your firewall.
                I&apos;m ready to sign corporate NDAs right away.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal
        as='section'
        className='page-section page-section--alt page-section--border'
        delay={80}
      >
        <div className='container'>
          <div className='cs-result-card cs-result-card--primary cs-result-card--featured cs-result-card--static'>
            <div className='cs-result-card__top'>
              <span className='chip-primary'>Microsoft Data Stack</span>
              <span className='cs-result-card__num'>Focus</span>
            </div>
            <h2 className='cs-result-card__metric cs-result-card__metric--title'>
              Specialization Over Generalization
            </h2>
            <div className='stack stack--lg text-lead cs-result-card__desc-block'>
              <p>
                I&apos;m not a creative designer. I&apos;m not generalist IT support. I&apos;m a
                specialist in the Microsoft Data Stack: Excel, Access, VBA, and SQL Server.
              </p>
              <p>
                This focus means I understand the deep technical constraints and possibilities of
                these platforms. I know how to push Excel to its limits without breaking it. I know
                how to build Access databases that scale to hundreds of users. I know how to write
                VBA that runs reliably for years.
              </p>
              <p>
                When your business depends on these tools, you need someone who&apos;s spent decades
                mastering them, not someone who can &quot;also do Excel&quot; among a dozen other
                technologies.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal
        as='section'
        className='page-section page-section--white page-section--border'
        delay={120}
      >
        <div className='container'>
          <div className='section-header section-header--lg'>
            <h2 className='section-header__title'>How I Work</h2>
            <p className='section-header__desc'>
              From audit to handover, a clear path with milestone visibility throughout.
            </p>
          </div>

          <div className='grid-2 process-grid stagger-group'>
            {ABOUT_WORKFLOW.map((step) => (
              <div key={step.num} className='process-card'>
                <span className={`process-card__label process-card__label--${step.accent}`}>
                  {step.num}
                </span>
                <h3>{step.title}</h3>
                <p className='text-muted-sm'>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal
        as='section'
        className='page-section page-section--alt page-section--border'
        delay={160}
      >
        <div className='container'>
          <div className='section-header section-header--lg'>
            <h2 className='section-header__title'>Explore Further</h2>
            <p className='section-header__desc'>
              Services, case studies, and Utah-based consulting.
            </p>
          </div>

          <div className='cs-grid stagger-group'>
            {ABOUT_RELATED_LINKS.map((link) => (
              <Link key={link.num} href={link.href} className={`cs-item cs-item--${link.accent}`}>
                <span className='cs-item__num'>{link.num}</span>
                <div className='cs-item__body'>
                  <span className='cs-item__industry'>{link.industry}</span>
                  <h3 className='cs-item__title'>{link.title}</h3>
                  <p className='cs-item__outcome'>{link.outcome}</p>
                </div>
                <ItemArrow />
              </Link>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <PageCTASection
        heading='Ready to Cut the Manual Work?'
        subtext='Talk about your Excel or Access challenges directly with me. Book a free consultation or request a fixed-price estimate.'
      />
    </div>
  );
}
