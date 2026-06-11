'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import HomeCommonProblems from '../components/HomeBelowHero/HomeCommonProblems';
import HomeWhyTeaser from '../components/HomeBelowHero/HomeWhyTeaser';
import HomeHero from '../components/HomeHero/HomeHero';
import ROICalculator from '../components/ROICalculator/ROICalculator';
import SEO from '../components/SEO/SEO';
import FAQAccordion from '../components/ui/FAQAccordion/FAQAccordion';
import PageCTASection from '../components/ui/PageCTASection/PageCTASection';
import ResultCardCTA from '../components/ui/ResultCardCTA/ResultCardCTA';
import ScrollReveal from '../components/ui/ScrollReveal/ScrollReveal';
import { HOME_CLIENT_RESULTS } from '../constants/homeClientResults';
import { HOME_FAQS } from '../constants/homeFaq';
import { HOME_TESTIMONIALS } from '../constants/homeTestimonials';
import { CONSULTANTS } from '../constants/site';

const PROBLEMS = [
  {
    num: '01',
    category: 'Excel Automation',
    title: 'Hours Lost on Weekly Reports',
    before: 'Manual pull & format',
    after: 'One-click report',
    desc: 'Pulling from multiple sources, reformatting, checking formulas, and distributing. The same manual process every period.',
    cta: 'Automate it →',
    accent: 'primary',
    href: '/excel-automation',
  },
  {
    num: '02',
    category: 'Access Database',
    title: 'Access Database Unstable',
    before: 'Crashes & corruption',
    after: 'Stable multi-user DB',
    desc: "Corruption, slow queries, or multi-user conflicts. When you can't rely on your data, operations suffer.",
    cta: 'Fix it →',
    accent: 'secondary',
    href: '/access-consulting',
  },
  {
    num: '03',
    category: 'Financial Modeling',
    title: "Financial Models That Don't Keep Up",
    before: 'Slow recalc times',
    after: 'Fast, reliable model',
    desc: 'Long recalc times, limited scenarios, or formulas that break. Your model should support decisions, not slow them down.',
    cta: 'Make it faster →',
    accent: 'primary',
    href: '/financial-modeling',
  },
];

const SERVICES = [
  {
    num: '01',
    industry: 'Excel',
    title: 'Excel VBA Process Automation',
    desc: 'I build VBA solutions that run your repetitive Excel tasks automatically: consolidation, reporting, and workflows. Your team can focus on analysis and decisions.',
    link: '/excel-automation',
    accent: 'primary',
  },
  {
    num: '02',
    industry: 'Access',
    title: 'Access Database Development',
    desc: 'I design and build Access databases that support multiple users, clear workflows, and reliable data so your operations run without surprises.',
    link: '/access-consulting',
    accent: 'secondary',
  },
  {
    num: '03',
    industry: 'Excel',
    title: 'Financial Modeling',
    desc: 'I build and audit Excel financial models for forecasting, budgeting, and analysis: structured, documented, and ready for stakeholders.',
    link: '/financial-modeling',
    accent: 'primary',
  },
  {
    num: '04',
    industry: 'Access',
    title: 'Database Migration',
    desc: 'I plan and execute Access-to-SQL Server migrations so you get better performance and scalability without losing data or workflows.',
    link: '/database-migration',
    accent: 'secondary',
  },
  {
    num: '05',
    industry: 'Excel',
    title: 'VBA Development',
    desc: 'Custom VBA for Excel: macros, automation scripts, and applications. I fix broken code or build from scratch with clear scope and deliverables.',
    link: '/vba-development',
    accent: 'primary',
  },
  {
    num: '06',
    industry: 'Access',
    title: 'Access Database Repair',
    desc: 'Fix corrupted databases, recover lost data, and stop crashes. Get your Access system stable again without losing information.',
    link: '/access-database-repair',
    accent: 'secondary',
  },
];

const PROCESS_STEPS = [
  {
    num: 1,
    title: 'Free Consultation',
    desc: '30-minute Zoom call to understand your process, pain points, and goals. No pressure.',
    accent: 'primary',
  },
  {
    num: 2,
    title: 'Fixed-Price Quote',
    desc: 'Within 48 hours, you get a detailed proposal with scope, timeline, and exact cost. No surprises.',
    accent: 'secondary',
  },
  {
    num: 3,
    title: 'Build & Test',
    desc: 'I develop your solution in 1-6 weeks (depending on complexity). You get progress updates weekly.',
    accent: 'primary',
  },
  {
    num: 4,
    title: 'Training & Delivery',
    desc: "1-hour walkthrough session, written documentation, sample files. You're fully equipped to use it.",
    accent: 'primary',
  },
  {
    num: 5,
    title: 'Ongoing Support',
    desc: "30-day warranty included. Optional maintenance plans available. I don't disappear after delivery.",
    accent: 'secondary',
  },
];

export default function HomePageClient() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.substring(1);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        scrollToSection(id);
        return;
      }
      if (id === 'contact') {
        window.location.href = '/contact';
      }
    }, 100);
  }, []);

  return (
    <>
      <SEO
        title={`Microsoft Excel Access Consultant | Access Database Expert | ${CONSULTANTS.displayName}`}
        description='Access repair, SQL Server migration, and Excel VBA automation. Fixed-price quotes and a free 30-minute call with Robert Terry, 20+ years, 500+ projects, USA remote.'
        url='https://excelaccessconsultant.com/'
        ogTitle={`Microsoft Excel Access Consultant | Access Database Expert | ${CONSULTANTS.displayName}`}
      />

      <div className='page'>
        <HomeHero />

        <HomeCommonProblems />
        <HomeWhyTeaser />

        <ScrollReveal
          as='section'
          className='page-section page-section--white page-section--border'
        >
          <div className='container'>
            <div className='section-header section-header--lg'>
              <h2 className='section-header__title'>Problems I Solve</h2>
              <p className='section-header__desc'>
                Recurring business scenarios, with before-and-after outcomes from real projects.
              </p>
            </div>

            <div className='grid-3 stagger-group'>
              {PROBLEMS.map((problem) => (
                <Link
                  key={problem.num}
                  href={problem.href}
                  className={`cs-result-card cs-result-card--${problem.accent}`}
                >
                  <div className='cs-result-card__top'>
                    <span
                      className={problem.accent === 'primary' ? 'chip-primary' : 'chip-secondary'}
                    >
                      {problem.category}
                    </span>
                    <span className='cs-result-card__num'>{problem.num}</span>
                  </div>
                  <div className='cs-result-card__metric cs-result-card__metric--title'>
                    {problem.title}
                  </div>
                  <div className='cs-result-card__transform'>
                    <span className='cs-result-card__before'>{problem.before}</span>
                    <span className='cs-result-card__sep'>→</span>
                    <span className='cs-result-card__after'>{problem.after}</span>
                  </div>
                  <p className='cs-result-card__desc'>{problem.desc}</p>
                  <ResultCardCTA label={problem.cta} />
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal
          as='section'
          className='page-section page-section--white page-section--border'
          delay={80}
        >
          <div className='container'>
            <div className='section-header section-header--lg'>
              <h2 className='section-header__title'>Client Results</h2>
              <p className='section-header__desc'>
                Measurable outcomes from recent Excel and Access projects.
              </p>
            </div>
            <div className='grid-3 stagger-group'>
              {HOME_CLIENT_RESULTS.map((cs) => (
                <Link
                  key={cs.href}
                  href={cs.href}
                  className={`cs-result-card cs-result-card--${cs.accent}`}
                >
                  <div className='cs-result-card__top'>
                    <span className={cs.accent === 'primary' ? 'chip-primary' : 'chip-secondary'}>
                      {cs.industry}
                    </span>
                    <span className='cs-result-card__num'>{cs.num}</span>
                  </div>
                  <div className='cs-result-card__metric'>{cs.metric}</div>
                  <div className='cs-result-card__label'>{cs.label}</div>
                  <div className='cs-result-card__transform'>
                    <span className='cs-result-card__before'>{cs.before}</span>
                    <span className='cs-result-card__sep'>→</span>
                    <span className='cs-result-card__after'>{cs.after}</span>
                  </div>
                  <dl className='cs-result-card__pso'>
                    <div className='cs-result-card__pso-row'>
                      <dt>Problem</dt>
                      <dd>{cs.problem}</dd>
                    </div>
                    <div className='cs-result-card__pso-row'>
                      <dt>Solution</dt>
                      <dd>{cs.solution}</dd>
                    </div>
                    <div className='cs-result-card__pso-row'>
                      <dt>Outcome</dt>
                      <dd>{cs.outcome}</dd>
                    </div>
                  </dl>
                  <ResultCardCTA label='Read case study →' />
                </Link>
              ))}
            </div>
            <p className='text-center-link'>
              <Link href='/case-studies' className='text-link text-link--underline'>
                View all case studies →
              </Link>
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal
          as='section'
          className='page-section page-section--alt page-section--border'
          delay={120}
        >
          <div className='container'>
            <div className='section-header section-header--lg'>
              <h2 className='section-header__title'>Industries Served</h2>
              <p className='section-header__desc'>
                I work with operations and finance teams across the United States who depend on
                Excel and Access daily.
              </p>
            </div>
            <div className='cs-grid stagger-group'>
              {[
                {
                  num: '01',
                  name: 'Manufacturing',
                  outcome:
                    '15-user inventory databases, production tracking, crash-free multi-user Access',
                  accent: 'primary',
                },
                {
                  num: '02',
                  name: 'Finance',
                  outcome: 'Month-end close automation, audit-ready models, live SQL data feeds',
                  accent: 'secondary',
                },
                {
                  num: '03',
                  name: 'Construction',
                  outcome: 'Job costing databases, field-to-office reporting, weekly rollup macros',
                  accent: 'primary',
                },
                {
                  num: '04',
                  name: 'Distribution',
                  outcome:
                    'Order management systems, warehouse spreadsheets, vendor report automation',
                  accent: 'secondary',
                },
                {
                  num: '05',
                  name: 'Healthcare',
                  outcome:
                    'Patient intake workflows, compliance reporting, legacy Access modernization',
                  accent: 'primary',
                },
              ].map((industry) => (
                <div
                  key={industry.name}
                  className={`cs-item cs-item--${industry.accent} cs-item--static`}
                >
                  <span className='cs-item__num'>{industry.num}</span>
                  <div className='cs-item__body'>
                    <h3 className='cs-item__title'>{industry.name}</h3>
                    <p className='cs-item__outcome'>{industry.outcome}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal
          as='section'
          id='services'
          className='page-section page-section--white'
          delay={160}
        >
          <div className='container'>
            <div className='section-header section-header--xl'>
              <h2 className='section-header__title'>Services</h2>
              <p className='section-header__desc'>
                Six core services, from emergency Access repair to full SQL Server migrations and
                Excel VBA that replaces hours of manual reporting. Every project starts with a free
                consultation and ends with code you own outright.
              </p>
            </div>

            <div className='cs-grid stagger-group'>
              {SERVICES.map((service) => (
                <Link
                  key={service.num}
                  href={service.link}
                  className={`cs-item cs-item--${service.accent}`}
                >
                  <span className='cs-item__num'>{service.num}</span>
                  <div className='cs-item__body'>
                    <span className='cs-item__industry'>{service.industry}</span>
                    <h3 className='cs-item__title'>{service.title}</h3>
                    <p className='cs-item__outcome'>{service.desc}</p>
                  </div>
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
                </Link>
              ))}
            </div>

            <div className='divider-section'>
              <div className='section-header'>
                <h3>Case Studies</h3>
                <p className='section-header__desc'>
                  Before-and-after metrics from manufacturing, construction, finance, and
                  distribution projects.{' '}
                  <Link href='/case-studies' className='text-link text-link--underline'>
                    Browse all case studies →
                  </Link>
                </p>
              </div>

              <div className='cs-grid stagger-group'>
                {[
                  {
                    num: '01',
                    slug: 'manufacturing-inventory-tracking',
                    industry: 'Manufacturing',
                    title: 'Inventory Tracking System',
                    outcome: '8 months crash-free after rebuilding 15-user Access database',
                    accent: 'primary',
                  },
                  {
                    num: '02',
                    slug: 'construction-automated-reporting',
                    industry: 'Construction',
                    title: 'Automated Reporting',
                    outcome: '6 hours/week cut to 30 seconds with Excel VBA automation',
                    accent: 'secondary',
                  },
                  {
                    num: '03',
                    slug: 'financial-services-data-integration',
                    industry: 'Finance',
                    title: 'Data Integration Pipeline',
                    outcome: '500 hours per year saved connecting Excel to SQL Server',
                    accent: 'primary',
                  },
                  {
                    num: '04',
                    slug: 'distribution-slow-spreadsheet',
                    industry: 'Distribution',
                    title: 'Spreadsheet Performance Fix',
                    outcome: '50MB file that took 5 min to open now loads instantly',
                    accent: 'secondary',
                  },
                  {
                    num: '05',
                    slug: 'retail-pricing-system',
                    industry: 'Retail',
                    title: 'Automated Pricing System',
                    outcome: 'Complex pricing rules automated, eliminating weekly calculations',
                    accent: 'primary',
                  },
                ].map((cs) => (
                  <Link
                    key={cs.slug}
                    href={`/case-studies/${cs.slug}`}
                    className={`cs-item cs-item--${cs.accent}`}
                  >
                    <span className='cs-item__num'>{cs.num}</span>
                    <div className='cs-item__body'>
                      <span className='cs-item__industry'>{cs.industry}</span>
                      <h4 className='cs-item__title'>{cs.title}</h4>
                      <p className='cs-item__outcome'>{cs.outcome}</p>
                    </div>
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
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal
          as='section'
          className='page-section page-section--compact page-section--white page-section--border-y'
        >
          <div className='container'>
            <div className='section-header section-header--xl'>
              <h2 className='section-header__title'>What Clients Say</h2>
              <p className='section-header__desc'>
                Outcome-focused feedback from operations, finance, and IT leaders.{' '}
                <Link href='/contact' className='text-link text-link--underline'>
                  Book your free consultation →
                </Link>
              </p>
            </div>

            <div className='grid-2 stagger-group'>
              {HOME_TESTIMONIALS.slice(0, 4).map((testimonial) => (
                <div
                  key={testimonial.subtitle}
                  className={`testimonial-card ${
                    testimonial.color === 'secondary' ? 'testimonial-card--secondary' : ''
                  }`}
                >
                  <div
                    className={`testimonial-stars ${
                      testimonial.color === 'secondary'
                        ? 'testimonial-stars--secondary'
                        : 'testimonial-stars--primary'
                    }`}
                    role='img'
                    aria-label='5 out of 5 stars'
                  >
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                  <p className='testimonial-quote'>&quot;{testimonial.quote}&quot;</p>
                  <div className='testimonial-author'>
                    <p className='testimonial-author__name'>{testimonial.author}</p>
                    <p className='text-muted-sm'>{testimonial.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal
          as='section'
          id='about'
          className='page-section page-section--compact page-section--surface page-section--border-y'
        >
          <div className='container'>
            <div className='section-header section-header--xl page-hero--centered'>
              <h2 className='section-header__title'>
                Excel and Access Work for Finance and Operations Teams
              </h2>
              <p className='section-header__desc'>
                Senior-level consulting for businesses that depend on Microsoft Excel and Access.
                You work with me directly, not through an agency.
              </p>
            </div>

            <div className='stack stack--lg text-lead'>
              <p>
                I&apos;m {CONSULTANTS.displayName}, a {CONSULTANTS.title.toLowerCase()} based in
                Springville, Utah. For over 20 years, I&apos;ve worked at the intersection of
                business logic and Microsoft technology, serving businesses nationwide.
              </p>
              <p>
                My approach is straightforward: I find the manual steps that slow your team down and
                build systems that remove them.
              </p>
              <p>
                When you hire me, you&apos;re not getting just a programmer. You&apos;re getting a
                business partner who understands how your operations work. Whether you&apos;re in
                Utah or anywhere in the United States, I work remotely to deliver the same
                high-quality Excel and Access consulting services.
              </p>
            </div>

            <div className='grid-2 stagger-group' style={{ marginTop: 'var(--space-12)' }}>
              <div className='fact-card fact-card--primary'>
                <span className='fact-card__num'>01</span>
                <h3 className='fact-card__title'>Direct Principal Access</h3>
                <p className='fact-card__body'>
                  Every conversation is with {CONSULTANTS.displayName}. No account managers, no
                  junior developers, no outsourcing. The consultant who understands your business is
                  the same person writing your code.
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
                  After the free consultation, you get a written scope with timeline and fixed
                  price. Advisory work is $90/hour; builds are quoted as a flat fee before any code
                  is written.
                </p>
                <div className='card-divider'>
                  <div className='text-price'>$90/hour</div>
                  <div className='text-muted-sm'>Advisory</div>
                  <div className='text-muted-sm' style={{ marginTop: 'var(--space-2)' }}>
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

            <div
              className='cs-result-card cs-result-card--primary cs-result-card--featured cs-result-card--static'
              style={{ marginTop: 'var(--space-12)' }}
            >
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
                  these platforms. I know how to push Excel to its limits without breaking it. I
                  know how to build Access databases that scale to hundreds of users. I know how to
                  write VBA that runs reliably for years.
                </p>
                <p>
                  When your business depends on these tools, you need someone who&apos;s spent
                  decades mastering them, not someone who can &quot;also do Excel&quot; among a
                  dozen other technologies.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal
          as='section'
          className='page-section page-section--white page-section--border-y'
        >
          <div className='container'>
            <div className='section-header section-header--xl'>
              <h2 className='section-header__title'>How It Works</h2>
              <p className='section-header__desc'>
                Fixed-price quote within 48 hours. Build, test, handoff, and ongoing support.
              </p>
            </div>

            <div className='grid-5 process-grid stagger-group'>
              {PROCESS_STEPS.map((step) => (
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
          id='faq'
          className='page-section page-section--compact page-section--surface page-section--border-y'
        >
          <div className='container'>
            <div className='section-header section-header--xl'>
              <h2 className='section-header__title'>Frequently Asked Questions</h2>
              <p className='section-header__desc'>
                Pricing, timelines, remote work, and what happens when you hand off a broken
                spreadsheet or database.
              </p>
            </div>

            <FAQAccordion items={HOME_FAQS} className='faq-list--numbered' />
          </div>
        </ScrollReveal>

        <ScrollReveal as='section' id='calculator' className='roi-section-wrap page-section'>
          <div className='container'>
            <ROICalculator />
          </div>
        </ScrollReveal>

        <PageCTASection
          heading='Ready to Cut the Manual Work?'
          subtext="Free 30-minute call. We'll look at your process and talk through what can be automated. No pressure."
          solidPrimary
        />
      </div>
    </>
  );
}
