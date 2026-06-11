'use client';

import Link from 'next/link';
import { useState } from 'react';
import FAQSchema from '../../components/SEO/FAQSchema';
import SEO from '../../components/SEO/SEO';
import ContactCTAs, { CTA_BUTTON_VARIANTS } from '../../components/ui/ContactCTAs/ContactCTAs';
import PageCTASection from '../../components/ui/PageCTASection/PageCTASection';
import { CONSULTANTS, CTA } from '../../constants/site';

export default function HireExcelVBAConsultant() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqs = [
    {
      question: 'How much does it cost to hire an Excel VBA consultant?',
      answer:
        'It depends on project complexity. Simple automations (single process, one file) typically run $1,500–$3,000. Advanced projects with multiple integrations run $3,000–$8,000. Enterprise solutions start at $8,000+. Advisory work is $90/hour. Every build project gets a fixed-price quote after consultation, no hourly surprises.',
    },
    {
      question: 'How long does a typical VBA project take?',
      answer:
        'Simple automations take 1–2 weeks. Advanced projects with multiple processes take 3–6 weeks. Enterprise solutions can take 2–3 months. I provide a clear timeline in the proposal, and I stick to it.',
    },
    {
      question: 'Do I own the code you write?',
      answer:
        'Yes, 100%. All code, documentation, and deliverables are yours. No licensing fees, no ongoing payments to keep using what I built. You own everything outright from day one of delivery.',
    },
    {
      question: 'What if I need changes after the project is delivered?',
      answer:
        'I include a 30-day support window after delivery for bug fixes and minor adjustments at no extra cost. After that, I offer ongoing support at my advisory rate ($90/hour) or we scope a new fixed-price project for larger changes.',
    },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Excel VBA Consulting Services',
    provider: {
      '@type': 'LocalBusiness',
      name: 'ExcelAccessConsultant.com',
      founder: CONSULTANTS.founders.map((name) => ({ '@type': 'Person', name })),
      telephone: CTA.phone,
      email: 'rob@excelaccessconsultant.com',
    },
    description:
      'Hire an experienced Excel VBA consultant for automation, database development, financial modeling, and reporting. Fixed pricing, 20+ years experience, 500+ completed projects.',
    areaServed: { '@type': 'Country', name: 'United States' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Excel VBA Consulting Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Advisory Consulting' },
          price: '90',
          priceCurrency: 'USD',
          unitText: 'per hour',
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Simple Automation Build' },
          price: '1500',
          priceCurrency: 'USD',
          description: 'Fixed price, starts at $1,500',
        },
      ],
    },
  };

  return (
    <div className='page'>
      <SEO
        title='Hire an Excel VBA Consultant | Fixed Price, Fast Turnaround'
        description='Hire an experienced Excel VBA consultant. 20+ years, 500+ projects. Fixed price, clear scope, no surprises. Free 30-minute consultation.'
        url='https://excelaccessconsultant.com/hire-excel-vba-consultant'
        ogTitle='Hire an Excel VBA Consultant | Fixed Price, Fast Turnaround'
      />

      <FAQSchema faqs={faqs} />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className='page-hero'>
        <div className='container'>
          <h1 className='page-hero__title'>Hire an Excel VBA Consultant</h1>
          <p className='page-hero__lead'>
            You need someone who can take your messy, time-consuming spreadsheet processes and turn
            them into reliable automation. Someone who&apos;s done it hundreds of times. Someone who
            gives you a fixed price, delivers on time, and hands over clean, documented code that
            your team can actually use.
          </p>
          <p className='page-hero__lead'>
            That&apos;s what I do. I bring 20+ years of Excel VBA and Access development, 500+
            completed projects, and a straightforward process that eliminates guesswork.
          </p>
          <ContactCTAs {...CTA_BUTTON_VARIANTS.onLight} />
        </div>
      </section>

      {/* What to Look For */}
      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>What to Look for When Hiring an Excel VBA Consultant</h2>
          <p className='text-lead'>
            Not all consultants are equal. Before you hire anyone, including me, here&apos;s what
            separates a professional from someone who just knows a bit of VBA:
          </p>
          <div className='grid-3--services'>
            <div className='card'>
              <h3>Deep Experience</h3>
              <p className='text-muted'>
                Look for 10+ years of dedicated VBA work, not a generalist who dabbles. Excel VBA
                has quirks and limitations that only experience teaches you to work efficiently.
              </p>
            </div>
            <div className='card'>
              <h3>Portfolio of Real Projects</h3>
              <p className='text-muted'>
                Ask for examples. A good consultant can describe past projects, the problems they
                solved, and the measurable results. Vague descriptions are a red flag.
              </p>
            </div>
            <div className='card'>
              <h3>Fixed vs. Hourly Pricing</h3>
              <p className='text-muted'>
                Hourly billing incentivizes slow work. Fixed pricing means the consultant is
                confident in their estimate and motivated to deliver efficiently. You know costs
                upfront.
              </p>
            </div>
            <div className='card'>
              <h3>Clear Communication</h3>
              <p className='text-muted'>
                Can they explain technical solutions in plain English? Do they respond promptly?
                You&apos;ll be working together for weeks, communication style matters as much as
                technical skill.
              </p>
            </div>
            <div className='card'>
              <h3>Support After Delivery</h3>
              <p className='text-muted'>
                What happens after handoff? A professional includes documentation, training, and a
                support period. You shouldn&apos;t be left alone with code you can&apos;t maintain.
              </p>
            </div>
            <div className='card'>
              <h3>Code Ownership</h3>
              <p className='text-muted'>
                You should own everything delivered. No licensing, no lock-in, no ongoing fees to
                use your own automation. If a consultant retains ownership, walk away.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='page-section page-section--compact page-section--white'>
        <div className='container'>
          <h2>Why Clients Choose {CONSULTANTS.displayName}</h2>
          <div className='grid-2 grid-2--gap-lg'>
            <div className='stack stack--lg'>
              <div className='check-row'>
                <div className='check-row__icon'>
                  <span>✓</span>
                </div>
                <div>
                  <h3>20+ Years of Dedicated Experience</h3>
                  <p className='text-muted'>
                    Not a generalist. I&apos;ve spent my entire career in Excel VBA and Access
                    development. I&apos;ve seen every edge case, every corporate environment, every
                    version of Office.
                  </p>
                </div>
              </div>
              <div className='check-row'>
                <div className='check-row__icon'>
                  <span>✓</span>
                </div>
                <div>
                  <h3>500+ Completed Projects</h3>
                  <p className='text-muted'>
                    Manufacturing, finance, healthcare, real estate, government, education,
                    I&apos;ve automated processes across every industry. Your challenge isn&apos;t
                    new to me.
                  </p>
                </div>
              </div>
              <div className='check-row'>
                <div className='check-row__icon'>
                  <span>✓</span>
                </div>
                <div>
                  <h3>Direct Principal Access</h3>
                  <p className='text-muted'>
                    No account managers, no junior developers. You work directly with me, the person
                    writing your code. Questions get answered in hours, not days.
                  </p>
                </div>
              </div>
            </div>
            <div className='stack stack--lg'>
              <div className='check-row'>
                <div className='check-row__icon'>
                  <span>✓</span>
                </div>
                <div>
                  <h3>Fixed Pricing, No Surprises</h3>
                  <p className='text-muted'>
                    After our consultation, you get a fixed price for the entire project. The scope
                    is clear, the cost is locked, and you won&apos;t see a surprise invoice.
                  </p>
                </div>
              </div>
              <div className='check-row'>
                <div className='check-row__icon'>
                  <span>✓</span>
                </div>
                <div>
                  <h3>Full Code Ownership</h3>
                  <p className='text-muted'>
                    Everything I build is yours. Code, documentation, training materials, no
                    licensing fees, no lock-in. You can modify, extend, or hand it to another
                    developer anytime.
                  </p>
                </div>
              </div>
              <div className='check-row'>
                <div className='check-row__icon'>
                  <span>✓</span>
                </div>
                <div>
                  <h3>Training & Documentation Included</h3>
                  <p className='text-muted'>
                    Every project includes user documentation and a training session. Your team will
                    know how to use, maintain, and troubleshoot the solution from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How the Process Works */}
      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>How the Process Works</h2>
          <div className='step-list'>
            {[
              {
                step: '1',
                title: 'Free Consultation',
                desc: 'We spend 30 minutes discussing your current process, pain points, and goals. I ask questions, you share your screen if helpful. No cost, no pressure.',
              },
              {
                step: '2',
                title: 'Fixed-Price Quote',
                desc: "Within 2–3 business days, you receive a detailed proposal: scope, deliverables, timeline, and a fixed price. You know exactly what you're getting before committing.",
              },
              {
                step: '3',
                title: 'Build & Test',
                desc: 'I build your solution with regular progress updates. You see working demos during development and provide feedback. No disappearing for weeks.',
              },
              {
                step: '4',
                title: 'Training & Delivery',
                desc: 'Once testing is complete, I deliver the final solution with documentation and a live training session for your team. Everyone knows how to use it.',
              },
              {
                step: '5',
                title: 'Ongoing Support',
                desc: "30 days of included support after delivery for any questions or minor adjustments. After that, I'm available at my advisory rate for updates as your needs evolve.",
              },
            ].map((item) => (
              <div key={item.step} className='step-item'>
                <div className='step-badge'>{item.step}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p className='text-muted'>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Build */}
      <section className='page-section page-section--compact page-section--white'>
        <div className='container'>
          <h2>What I Build</h2>
          <div className='grid-3--services'>
            <div className='card'>
              <h3>Excel VBA Macros & Automation</h3>
              <p className='text-muted'>
                Report generation, data consolidation, multi-file processing, email automation,
                dashboard updates, and custom functions.
              </p>
            </div>
            <div className='card'>
              <h3>Access Databases</h3>
              <p className='text-muted'>
                Multi-user database applications with custom forms, reports, queries, and VBA
                automation. Replace spreadsheet chaos with structured data.
              </p>
            </div>
            <div className='card'>
              <h3>Financial Models</h3>
              <p className='text-muted'>
                Budgets, forecasts, scenario analysis, and valuation models. Clean structure, clear
                assumptions, and automated data feeds.
              </p>
            </div>
            <div className='card'>
              <h3>Database Migrations</h3>
              <p className='text-muted'>
                Move from Access to SQL Server, Azure, or web-based platforms. Preserve data
                integrity and business logic through the transition.
              </p>
            </div>
            <div className='card'>
              <h3>Reporting Automation</h3>
              <p className='text-muted'>
                Automated daily, weekly, and monthly reports. Pull from multiple data sources,
                format consistently, and distribute automatically.
              </p>
            </div>
            <div className='card'>
              <h3>Legacy System Integration</h3>
              <p className='text-muted'>
                Connect Excel and Access to ERP systems, accounting software, CRMs, and other data
                sources your business already uses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Results */}
      <section className='page-section page-section--compact page-section--alt'>
        <div className='container'>
          <h2>Real Results from Real Projects</h2>
          <div className='grid-3'>
            <div className='card'>
              <div className='card__metric'>8 hrs → 15 min</div>
              <h3>Manufacturing Report Automation</h3>
              <p className='text-muted'>
                A manufacturing company spent 8 hours weekly compiling production reports from
                multiple departments. Automated the entire process into a 15-minute one-click
                solution. Saved $15,000/year.
              </p>
              <Link href='/case-studies' className='text-link text-link--underline'>
                Read full case study →
              </Link>
            </div>
            <div className='card'>
              <div className='card__metric'>3 days → 10 min</div>
              <h3>Financial Close Process</h3>
              <p className='text-muted'>
                A finance team&apos;s monthly close took 3 days of manual data gathering and
                reconciliation. Built an automated system that completes the process in 10 minutes.
                Saved $25,000/year.
              </p>
              <Link href='/case-studies' className='text-link text-link--underline'>
                Read full case study →
              </Link>
            </div>
            <div className='card'>
              <div className='card__metric'>6 hrs/wk → 5 min</div>
              <h3>Operations Dashboard</h3>
              <p className='text-muted'>
                An operations manager spent 6 hours weekly updating dashboards from multiple data
                sources. Automated data pulling, calculations, and formatting. Saved $18,000/year.
              </p>
              <Link href='/case-studies' className='text-link text-link--underline'>
                Read full case study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className='page-section page-section--compact page-section--white'>
        <div className='container'>
          <h2>Pricing</h2>
          <div className='grid-2 grid-2--gap-lg container--narrow'>
            <div className='card'>
              <h3>Advisory & Consulting</h3>
              <div className='text-price'>
                $90<span className='text-muted-sm'>/hour</span>
              </div>
              <ul className='stack stack--sm text-muted'>
                <li>• Code review and optimization</li>
                <li>• Architecture planning</li>
                <li>• Troubleshooting existing VBA</li>
                <li>• Training sessions</li>
                <li>• Ongoing support calls</li>
              </ul>
            </div>
            <div className='card pricing-card--featured'>
              <h3>Build Projects</h3>
              <div className='text-price'>Fixed Price</div>
              <ul className='stack stack--sm text-muted'>
                <li>• Simple automation: $1,500–$3,000</li>
                <li>• Advanced projects: $3,000–$8,000</li>
                <li>• Enterprise solutions: $8,000+</li>
                <li>• Includes training & documentation</li>
                <li>• 30-day support included</li>
              </ul>
              <p className='text-muted-sm'>Exact price quoted after free consultation</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='page-section page-section--compact page-section--alt'>
        <div className='container container--narrow'>
          <h2>Frequently Asked Questions</h2>
          <div className='stack stack--md'>
            {faqs.map((faq, index) => (
              <div key={index} className='card'>
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className='faq-toggle'
                >
                  <span>{faq.question}</span>
                  <span className='faq-toggle__icon'>{openFaqIndex === index ? '−' : '+'}</span>
                </button>
                {openFaqIndex === index && (
                  <div className='faq-answer'>
                    <p className='text-muted'>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTASection
        heading='Schedule Your Free Consultation'
        subtext="30 minutes. No cost. No pressure. Tell me about your process and I'll outline what automation can do, and what it would cost."
      />

      {/* Internal Links */}
      <section className='page-section page-section--compact page-section--white'>
        <div className='container'>
          <h2>Explore Services</h2>
          <div className='footer-links'>
            <Link href='/excel-automation' className='text-link text-link--underline'>
              Excel Automation
            </Link>
            <Link href='/access-consulting' className='text-link text-link--underline'>
              Access Consulting
            </Link>
            <Link href='/vba-development' className='text-link text-link--underline'>
              VBA Development
            </Link>
            <Link href='/case-studies' className='text-link text-link--underline'>
              Case Studies
            </Link>
            <Link href='/contact' className='text-link text-link--underline'>
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
