'use client';

import Link from 'next/link';
import { useState } from 'react';
import FAQSchema from '../../components/SEO/FAQSchema';
import SEO from '../../components/SEO/SEO';
import Button from '../../components/ui/Button/Button';

export default function HireExcelVBAConsultant() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqs = [
    {
      question: 'How much does it cost to hire an Excel VBA consultant?',
      answer:
        'It depends on project complexity. Simple automations (single process, one file) typically run $1,500–$3,000. Advanced projects with multiple integrations run $3,000–$8,000. Enterprise solutions start at $8,000+. Advisory work is $90/hour. Every build project gets a fixed-price quote after consultation — no hourly surprises.',
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
      founder: { '@type': 'Person', name: 'Robert Terry' },
      telephone: '801-616-3702',
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
    <div className='bg-base min-h-screen text-slate-800 font-sans'>
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
      <section className='py-8 md:py-12 bg-white border-b border-slate-200'>
        <div className='max-w-7xl mx-auto px-6'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-display text-slate-900'>
            Hire an Excel VBA Consultant
          </h1>
          <p className='text-lg md:text-xl text-slate-700 mb-4 leading-relaxed'>
            You need someone who can take your messy, time-consuming spreadsheet processes and turn them into reliable automation. Someone who&apos;s done it hundreds of times. Someone who gives you a fixed price, delivers on time, and hands over clean, documented code that your team can actually use.
          </p>
          <p className='text-lg text-slate-700 mb-8 leading-relaxed'>
            That&apos;s what I do. I&apos;m Robert Terry — 20+ years of Excel VBA and Access development, 500+ completed projects, and a straightforward process that eliminates guesswork.
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Button variant='primary' size='large' as={Link} href='/contact'>
              Schedule Free Consultation
            </Button>
            <Button variant='secondary' size='large' as='a' href='tel:8016163702'>
              Call 801-616-3702
            </Button>
          </div>
        </div>
      </section>

      {/* What to Look For */}
      <section className='py-8 md:py-12 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-heading-lg md:text-heading-xl font-bold mb-6 font-display text-slate-900'>
            What to Look for When Hiring an Excel VBA Consultant
          </h2>
          <p className='text-body-lg text-slate-700 mb-8'>
            Not all consultants are equal. Before you hire anyone — including me — here&apos;s what separates a professional from someone who just knows a bit of VBA:
          </p>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='card'>
              <h3 className='text-heading-md font-bold mb-3 font-display text-slate-900'>
                Deep Experience
              </h3>
              <p className='text-body-base text-slate-600'>
                Look for 10+ years of dedicated VBA work, not a generalist who dabbles. Excel VBA has quirks and limitations that only experience teaches you to navigate efficiently.
              </p>
            </div>
            <div className='card'>
              <h3 className='text-heading-md font-bold mb-3 font-display text-slate-900'>
                Portfolio of Real Projects
              </h3>
              <p className='text-body-base text-slate-600'>
                Ask for examples. A good consultant can describe past projects, the problems they solved, and the measurable results. Vague descriptions are a red flag.
              </p>
            </div>
            <div className='card'>
              <h3 className='text-heading-md font-bold mb-3 font-display text-slate-900'>
                Fixed vs. Hourly Pricing
              </h3>
              <p className='text-body-base text-slate-600'>
                Hourly billing incentivizes slow work. Fixed pricing means the consultant is confident in their estimate and motivated to deliver efficiently. You know costs upfront.
              </p>
            </div>
            <div className='card'>
              <h3 className='text-heading-md font-bold mb-3 font-display text-slate-900'>
                Clear Communication
              </h3>
              <p className='text-body-base text-slate-600'>
                Can they explain technical solutions in plain English? Do they respond promptly? You&apos;ll be working together for weeks — communication style matters as much as technical skill.
              </p>
            </div>
            <div className='card'>
              <h3 className='text-heading-md font-bold mb-3 font-display text-slate-900'>
                Support After Delivery
              </h3>
              <p className='text-body-base text-slate-600'>
                What happens after handoff? A professional includes documentation, training, and a support period. You shouldn&apos;t be left alone with code you can&apos;t maintain.
              </p>
            </div>
            <div className='card'>
              <h3 className='text-heading-md font-bold mb-3 font-display text-slate-900'>
                Code Ownership
              </h3>
              <p className='text-body-base text-slate-600'>
                You should own everything delivered. No licensing, no lock-in, no ongoing fees to use your own automation. If a consultant retains ownership, walk away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Robert Terry */}
      <section className='py-8 md:py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-heading-lg md:text-heading-xl font-bold mb-6 font-display text-slate-900'>
            Why Clients Choose Robert Terry
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='space-y-6'>
              <div className='flex gap-4'>
                <div className='w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1'>
                  <span className='text-secondary font-bold text-sm'>✓</span>
                </div>
                <div>
                  <h3 className='text-heading-sm font-bold font-display text-slate-900'>
                    20+ Years of Dedicated Experience
                  </h3>
                  <p className='text-body-base text-slate-600 mt-1'>
                    Not a generalist. I&apos;ve spent my entire career in Excel VBA and Access development. I&apos;ve seen every edge case, every corporate environment, every version of Office.
                  </p>
                </div>
              </div>
              <div className='flex gap-4'>
                <div className='w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1'>
                  <span className='text-secondary font-bold text-sm'>✓</span>
                </div>
                <div>
                  <h3 className='text-heading-sm font-bold font-display text-slate-900'>
                    500+ Completed Projects
                  </h3>
                  <p className='text-body-base text-slate-600 mt-1'>
                    Manufacturing, finance, healthcare, real estate, government, education — I&apos;ve automated processes across every industry. Your challenge isn&apos;t new to me.
                  </p>
                </div>
              </div>
              <div className='flex gap-4'>
                <div className='w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1'>
                  <span className='text-secondary font-bold text-sm'>✓</span>
                </div>
                <div>
                  <h3 className='text-heading-sm font-bold font-display text-slate-900'>
                    Direct Principal Access
                  </h3>
                  <p className='text-body-base text-slate-600 mt-1'>
                    No account managers, no junior developers. You work directly with me — the person writing your code. Questions get answered in hours, not days.
                  </p>
                </div>
              </div>
            </div>
            <div className='space-y-6'>
              <div className='flex gap-4'>
                <div className='w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1'>
                  <span className='text-secondary font-bold text-sm'>✓</span>
                </div>
                <div>
                  <h3 className='text-heading-sm font-bold font-display text-slate-900'>
                    Fixed Pricing, No Surprises
                  </h3>
                  <p className='text-body-base text-slate-600 mt-1'>
                    After our consultation, you get a fixed price for the entire project. The scope is clear, the cost is locked, and you won&apos;t see a surprise invoice.
                  </p>
                </div>
              </div>
              <div className='flex gap-4'>
                <div className='w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1'>
                  <span className='text-secondary font-bold text-sm'>✓</span>
                </div>
                <div>
                  <h3 className='text-heading-sm font-bold font-display text-slate-900'>
                    Full Code Ownership
                  </h3>
                  <p className='text-body-base text-slate-600 mt-1'>
                    Everything I build is yours. Code, documentation, training materials — no licensing fees, no lock-in. You can modify, extend, or hand it to another developer anytime.
                  </p>
                </div>
              </div>
              <div className='flex gap-4'>
                <div className='w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1'>
                  <span className='text-secondary font-bold text-sm'>✓</span>
                </div>
                <div>
                  <h3 className='text-heading-sm font-bold font-display text-slate-900'>
                    Training & Documentation Included
                  </h3>
                  <p className='text-body-base text-slate-600 mt-1'>
                    Every project includes user documentation and a training session. Your team will know how to use, maintain, and troubleshoot the solution from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How the Process Works */}
      <section className='py-8 md:py-12 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-heading-lg md:text-heading-xl font-bold mb-8 font-display text-slate-900'>
            How the Process Works
          </h2>
          <div className='space-y-8'>
            {[
              {
                step: '1',
                title: 'Free Consultation',
                desc: 'We spend 30 minutes discussing your current process, pain points, and goals. I ask questions, you share your screen if helpful. No cost, no obligation.',
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
              <div key={item.step} className='flex gap-6 items-start'>
                <div className='w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold flex-shrink-0'>
                  {item.step}
                </div>
                <div>
                  <h3 className='text-heading-md font-bold font-display text-slate-900'>
                    {item.title}
                  </h3>
                  <p className='text-body-base text-slate-600 mt-1'>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Build */}
      <section className='py-8 md:py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-heading-lg md:text-heading-xl font-bold mb-6 font-display text-slate-900'>
            What I Build
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='card'>
              <h3 className='text-heading-md font-bold mb-2 font-display text-slate-900'>
                Excel VBA Macros & Automation
              </h3>
              <p className='text-body-base text-slate-600'>
                Report generation, data consolidation, multi-file processing, email automation, dashboard updates, and custom functions.
              </p>
            </div>
            <div className='card'>
              <h3 className='text-heading-md font-bold mb-2 font-display text-slate-900'>
                Access Databases
              </h3>
              <p className='text-body-base text-slate-600'>
                Multi-user database applications with custom forms, reports, queries, and VBA automation. Replace spreadsheet chaos with structured data.
              </p>
            </div>
            <div className='card'>
              <h3 className='text-heading-md font-bold mb-2 font-display text-slate-900'>
                Financial Models
              </h3>
              <p className='text-body-base text-slate-600'>
                Budgets, forecasts, scenario analysis, and valuation models. Clean structure, clear assumptions, and automated data feeds.
              </p>
            </div>
            <div className='card'>
              <h3 className='text-heading-md font-bold mb-2 font-display text-slate-900'>
                Database Migrations
              </h3>
              <p className='text-body-base text-slate-600'>
                Move from Access to SQL Server, Azure, or web-based platforms. Preserve data integrity and business logic through the transition.
              </p>
            </div>
            <div className='card'>
              <h3 className='text-heading-md font-bold mb-2 font-display text-slate-900'>
                Reporting Automation
              </h3>
              <p className='text-body-base text-slate-600'>
                Automated daily, weekly, and monthly reports. Pull from multiple data sources, format consistently, and distribute automatically.
              </p>
            </div>
            <div className='card'>
              <h3 className='text-heading-md font-bold mb-2 font-display text-slate-900'>
                Legacy System Integration
              </h3>
              <p className='text-body-base text-slate-600'>
                Connect Excel and Access to ERP systems, accounting software, CRMs, and other data sources your business already uses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Results */}
      <section className='py-8 md:py-12 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-heading-lg md:text-heading-xl font-bold mb-8 font-display text-slate-900'>
            Real Results from Real Projects
          </h2>
          <div className='grid md:grid-cols-3 gap-6'>
            <div className='card'>
              <div className='text-primary font-bold text-2xl mb-2'>8 hrs → 15 min</div>
              <h3 className='text-heading-sm font-bold mb-2 font-display text-slate-900'>
                Manufacturing Report Automation
              </h3>
              <p className='text-body-base text-slate-600 mb-4'>
                A manufacturing company spent 8 hours weekly compiling production reports from multiple departments. Automated the entire process into a 15-minute one-click solution. Saved $15,000/year.
              </p>
              <Link href='/case-studies' className='text-primary font-medium hover:underline'>
                Read full case study →
              </Link>
            </div>
            <div className='card'>
              <div className='text-primary font-bold text-2xl mb-2'>3 days → 10 min</div>
              <h3 className='text-heading-sm font-bold mb-2 font-display text-slate-900'>
                Financial Close Process
              </h3>
              <p className='text-body-base text-slate-600 mb-4'>
                A finance team&apos;s monthly close took 3 days of manual data gathering and reconciliation. Built an automated system that completes the process in 10 minutes. Saved $25,000/year.
              </p>
              <Link href='/case-studies' className='text-primary font-medium hover:underline'>
                Read full case study →
              </Link>
            </div>
            <div className='card'>
              <div className='text-primary font-bold text-2xl mb-2'>6 hrs/wk → 5 min</div>
              <h3 className='text-heading-sm font-bold mb-2 font-display text-slate-900'>
                Operations Dashboard
              </h3>
              <p className='text-body-base text-slate-600 mb-4'>
                An operations manager spent 6 hours weekly updating dashboards from multiple data sources. Automated data pulling, calculations, and formatting. Saved $18,000/year.
              </p>
              <Link href='/case-studies' className='text-primary font-medium hover:underline'>
                Read full case study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className='py-8 md:py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-heading-lg md:text-heading-xl font-bold mb-6 font-display text-slate-900'>
            Pricing
          </h2>
          <div className='grid md:grid-cols-2 gap-8 max-w-4xl'>
            <div className='card border-2 border-slate-200'>
              <h3 className='text-heading-md font-bold mb-2 font-display text-slate-900'>
                Advisory & Consulting
              </h3>
              <div className='text-3xl font-bold text-primary mb-4'>
                $90<span className='text-lg text-slate-500'>/hour</span>
              </div>
              <ul className='space-y-2 text-body-base text-slate-600'>
                <li>• Code review and optimization</li>
                <li>• Architecture planning</li>
                <li>• Troubleshooting existing VBA</li>
                <li>• Training sessions</li>
                <li>• Ongoing support calls</li>
              </ul>
            </div>
            <div className='card border-2 border-primary'>
              <h3 className='text-heading-md font-bold mb-2 font-display text-slate-900'>
                Build Projects
              </h3>
              <div className='text-3xl font-bold text-primary mb-4'>
                Fixed Price
              </div>
              <ul className='space-y-2 text-body-base text-slate-600'>
                <li>• Simple automation: $1,500–$3,000</li>
                <li>• Advanced projects: $3,000–$8,000</li>
                <li>• Enterprise solutions: $8,000+</li>
                <li>• Includes training & documentation</li>
                <li>• 30-day support included</li>
              </ul>
              <p className='text-body-sm text-slate-500 mt-4'>
                Exact price quoted after free consultation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='py-8 md:py-12 bg-slate-50'>
        <div className='max-w-4xl mx-auto px-6'>
          <h2 className='text-heading-lg md:text-heading-xl font-bold mb-8 font-display text-slate-900'>
            Frequently Asked Questions
          </h2>
          <div className='space-y-4'>
            {faqs.map((faq, index) => (
              <div key={index} className='bg-white rounded-lg shadow-sm border border-slate-200'>
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className='w-full px-6 py-4 text-left flex justify-between items-center'
                >
                  <span className='text-heading-sm font-bold font-display text-slate-900'>
                    {faq.question}
                  </span>
                  <span className='text-2xl text-primary ml-4 flex-shrink-0'>
                    {openFaqIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === index && (
                  <div className='px-6 pb-4'>
                    <p className='text-body-base text-slate-600'>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-12 md:py-16 bg-primary'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h2 className='text-heading-lg md:text-heading-xl font-bold mb-4 font-display text-white'>
            Schedule Your Free Consultation
          </h2>
          <p className='text-body-lg text-white/90 mb-8'>
            30 minutes. No cost. No obligation. Tell me about your process and I&apos;ll tell you exactly what automation can do for you — and what it would cost.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button variant='secondary' size='large' as={Link} href='/contact'>
              Book Free Consultation
            </Button>
            <Button variant='secondary' size='large' as='a' href='tel:8016163702'>
              Call 801-616-3702
            </Button>
          </div>
          <p className='text-white/80 text-body-sm mt-6'>
            Or email:{' '}
            <a href='mailto:rob@excelaccessconsultant.com' className='underline text-white'>
              rob@excelaccessconsultant.com
            </a>
          </p>
        </div>
      </section>

      {/* Internal Links */}
      <section className='py-8 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-heading-md font-bold mb-4 font-display text-slate-900'>
            Explore Services
          </h2>
          <div className='flex flex-wrap gap-4'>
            <Link href='/excel-automation' className='text-primary hover:underline font-medium'>
              Excel Automation
            </Link>
            <Link href='/access-consulting' className='text-primary hover:underline font-medium'>
              Access Consulting
            </Link>
            <Link href='/vba-development' className='text-primary hover:underline font-medium'>
              VBA Development
            </Link>
            <Link href='/case-studies' className='text-primary hover:underline font-medium'>
              Case Studies
            </Link>
            <Link href='/contact' className='text-primary hover:underline font-medium'>
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
