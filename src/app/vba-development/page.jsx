'use client';

import Link from 'next/link';
import { useState } from 'react';
import FAQSchema from '../../components/SEO/FAQSchema';
import SEO from '../../components/SEO/SEO';
import Button from '../../components/ui/Button/Button';

export default function VBADevelopmentPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  return (
    <div className='bg-base min-h-screen text-slate-800 font-sans'>
      <SEO
        title='Excel VBA Developer | Hire VBA Programmer'
        description='Excel VBA developer services. Custom VBA macros, automation scripts, Excel programming. 20+ years experience. Fixed pricing. Free consultation.'
        keywords='excel vba developer, hire vba programmer, excel macro development, vba programming services, excel vba consultant, vba code development'
        url='https://excelaccessconsultant.com/vba-development'
        ogTitle='Excel VBA Development Services'
      />

      <FAQSchema
        faqs={[
          {
            question: 'What can VBA do in Excel?',
            answer:
              'VBA can automate almost anything in Excel: data processing, report generation, file operations, email sending, database connections, user interfaces, calculations, and more. If you can do it manually in Excel, VBA can automate it.',
          },
          {
            question: 'How long does VBA development take?',
            answer:
              'Simple macros: 1-2 weeks. Medium complexity: 2-4 weeks. Complex applications: 4-8 weeks. Timeline depends on requirements and complexity.',
          },
          {
            question: 'Do I need to know programming to use VBA macros?',
            answer:
              'No. I build user-friendly interfaces with buttons and forms. Your team just clicks a button to run the macro. I provide training and documentation.',
          },
          {
            question: 'Can you fix existing VBA code?',
            answer:
              'Yes. I can debug, optimize, and enhance existing VBA code. I fix errors, improve performance, add features, and refactor code for better maintainability.',
          },
          {
            question: 'What if my Excel version changes?',
            answer:
              'I write VBA code that works across Excel versions (2010, 2013, 2016, 2019, 365). I test compatibility and provide version-specific solutions when needed.',
          },
        ]}
      />

      <section className='py-8 md:py-12 bg-white border-b border-slate-200'>
        <div className='max-w-7xl mx-auto px-6'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-display text-slate-900'>
            Excel VBA Development Services
          </h1>
          <p className='text-lg md:text-xl text-slate-700 mb-8 leading-relaxed'>
            Custom VBA programming for Excel. Build macros, automation scripts, and Excel
            applications. Fix broken code, optimize performance, or build from scratch. 20+ years of
            VBA experience. Fixed pricing. Free consultation.
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Button variant='primary-green' size='large' as={Link} href='/contact'>
              Get Free Consultation
            </Button>
            <Button variant='secondary-green' size='large' as='a' href='tel:8016163702'>
              Call 801-616-3702
            </Button>
          </div>
        </div>
      </section>

      <section className='py-12 md:py-16 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid lg:grid-cols-3 gap-8 lg:gap-10'>
            <div className='lg:col-span-2'>
              <h2 className='text-heading-lg md:text-heading-xl font-bold mb-10 font-display text-slate-900'>
                What I Develop
              </h2>
              <div className='grid md:grid-cols-2 gap-6'>
                {[
                  {
                    title: 'Custom VBA Macros',
                    desc: 'Macros tailored to your specific workflows. Automate data entry, calculations, formatting, and repetitive tasks. One-click solutions.',
                  },
                  {
                    title: 'Automation Scripts',
                    desc: 'Scripts that run complex processes automatically. Multi-file processing, data consolidation, report generation, and workflow automation.',
                  },
                  {
                    title: 'User Forms & Interfaces',
                    desc: 'Professional user forms with validation, dropdowns, and controls. Make complex processes simple for your team to use.',
                  },
                  {
                    title: 'Excel Applications',
                    desc: 'Complete Excel applications with custom menus, toolbars, and functionality. Turn Excel into a custom business tool.',
                  },
                  {
                    title: 'Database Integration',
                    desc: 'Connect Excel to Access, SQL Server, and other databases. Pull data automatically, push results back, and keep data in sync.',
                  },
                  {
                    title: 'Error Handling & Debugging',
                    desc: 'Fix broken VBA code, add proper error handling, debug issues, and optimize performance. Make your code reliable and maintainable.',
                  },
                  {
                    title: 'Code Optimization',
                    desc: 'Speed up slow VBA code. Optimize loops, reduce calculation overhead, and improve efficiency. Turn minutes into seconds.',
                  },
                  {
                    title: 'API Integration',
                    desc: 'Connect Excel to web APIs, REST services, and external data sources. Pull live data, send data, and integrate with cloud services.',
                  },
                  {
                    title: 'Email Automation',
                    desc: 'Automatically send emails from Excel. Format reports, attach files, send to multiple recipients, and schedule automated emails.',
                  },
                  {
                    title: 'File Operations',
                    desc: 'Automate file operations: open, save, copy, move, rename, and process multiple files. Work with folders and file systems.',
                  },
                  {
                    title: 'Chart & Graph Automation',
                    desc: 'Automatically create and update charts. Generate chart images, format charts, and create dashboard visualizations programmatically.',
                  },
                  {
                    title: 'Add-In Development',
                    desc: 'Build Excel add-ins that extend Excel functionality. Custom functions, commands, and features available across all workbooks.',
                  },
                ].map((item) => (
                  <div key={item.title} className='card group'>
                    <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                      {item.title}
                    </h3>
                    <p className='text-slate-600'>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='lg:col-span-1'>
              <div className='sticky top-28'>
                <div className='bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-200'>
                  <div className='flex items-center gap-3 mb-5'>
                    <div className='w-1 h-8 bg-secondary rounded-full'></div>
                    <h2 className='text-heading-md md:text-heading-lg font-bold font-display text-slate-900'>
                      Real Examples
                    </h2>
                  </div>
                  <p className='text-slate-600 text-sm mb-6 leading-relaxed'>
                    Enterprise-level solutions delivering measurable results
                  </p>
                  <div className='space-y-5'>
                    <Link
                      href='/case-studies'
                      className='block group pb-5 border-b border-slate-200 last:border-0 last:pb-0 hover:translate-x-1 transition-all duration-200'
                    >
                      <h3 className='text-base md:text-lg font-bold mb-2 font-display text-slate-900 group-hover:text-secondary transition-colors duration-200 leading-tight'>
                        Construction Firm - Automated Reporting
                      </h3>
                      <p className='text-slate-600 text-sm leading-relaxed'>
                        Reports generate in 30 seconds. Saves 6 hours per week. Zero errors.
                      </p>
                    </Link>
                    <Link
                      href='/case-studies'
                      className='block group pb-5 border-b border-slate-200 last:border-0 last:pb-0 hover:translate-x-1 transition-all duration-200'
                    >
                      <h3 className='text-base md:text-lg font-bold mb-2 font-display text-slate-900 group-hover:text-secondary transition-colors duration-200 leading-tight'>
                        Finance Team - Data Integration
                      </h3>
                      <p className='text-slate-600 text-sm leading-relaxed'>
                        Data imports automatically in 5 minutes. Saves 500 hours per year.
                      </p>
                    </Link>
                    <Link
                      href='/case-studies'
                      className='block group pb-5 border-b border-slate-200 last:border-0 last:pb-0 hover:translate-x-1 transition-all duration-200'
                    >
                      <h3 className='text-base md:text-lg font-bold mb-2 font-display text-slate-900 group-hover:text-secondary transition-colors duration-200 leading-tight'>
                        Operations - Multi-File Processing
                      </h3>
                      <p className='text-slate-600 text-sm leading-relaxed'>
                        All files process automatically in 10 minutes. Saves 8 hours monthly.
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-8 md:py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-heading-lg md:text-heading-xl font-bold mb-8 font-display text-slate-900'>
            How It Works
          </h2>
          <div className='space-y-8'>
            {[
              {
                num: '1',
                title: 'Free Consultation (15-30 minutes)',
                text: 'We discuss your VBA needs, review existing code (if any), and I provide an initial assessment. No obligation.',
              },
              {
                num: '2',
                title: 'Fixed-Price Quote (within 24 hours)',
                text: "I provide a detailed quote with timeline, deliverables, and fixed price. You know exactly what you're getting and the cost.",
              },
              {
                num: '3',
                title: 'Development & Testing',
                text: 'I write clean, documented VBA code in a test environment. You can test and provide feedback. I make adjustments as needed.',
              },
              {
                num: '4',
                title: 'Training & Delivery',
                text: 'I provide code documentation and training on how to use the VBA macros. You own 100% of the code. No licenses, no recurring fees.',
              },
              {
                num: '5',
                title: 'Ongoing Support (optional)',
                text: "Need code updates, new features, or bug fixes? I'm available for support. We can set up a maintenance plan or handle requests as needed.",
              },
            ].map((step) => (
              <div key={step.num} className='flex gap-6'>
                <div className='text-secondary font-bold text-3xl font-mono flex-shrink-0'>
                  {step.num}
                </div>
                <div>
                  <h3 className='text-heading-lg font-bold mb-2 font-display text-slate-900'>
                    {step.title}
                  </h3>
                  <p className='text-slate-600 leading-relaxed'>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='mt-8 bg-slate-50 p-6 rounded-lg border border-slate-200'>
            <p className='text-slate-700 font-medium mb-2'>
              <strong>Timeline Expectations:</strong>
            </p>
            <ul className='text-slate-600 space-y-1 list-disc list-inside'>
              <li>Simple macros: 1-2 weeks</li>
              <li>Medium complexity: 2-4 weeks</li>
              <li>Complex applications: 4-8 weeks</li>
            </ul>
            <p className='text-slate-600 mt-4'>
              <strong>What You Provide:</strong> Requirements, sample files, access to data sources
              (if needed), existing code (if fixing)
            </p>
            <p className='text-slate-600 mt-2'>
              <strong>What You Get:</strong> Working VBA code, documentation, training, 100% code
              ownership
            </p>
          </div>
        </div>
      </section>

      <section className='py-8 md:py-12 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-heading-lg md:text-heading-xl font-bold mb-8 font-display text-slate-900'>
            Pricing
          </h2>
          <p className='text-lg text-slate-700 mb-8 leading-relaxed'>
            Fixed pricing. No hourly billing. No surprises. You know the cost before we start.
          </p>
          <div className='grid md:grid-cols-3 gap-6'>
            <div className='bg-white p-6 rounded-lg border-2 border-slate-200'>
              <h3 className='text-heading-lg font-bold mb-4 font-display text-slate-900'>
                Simple Projects
              </h3>
              <div className='text-3xl font-bold text-secondary mb-2'>$1,500-$3,000</div>
              <p className='text-slate-600 mb-4 text-sm'>Basic macros, single process, 1-2 weeks</p>
              <ul className='text-slate-600 space-y-2 text-sm'>
                <li>✓ Simple VBA macros</li>
                <li>✓ Basic automation</li>
                <li>✓ Code documentation</li>
                <li>✓ Training included</li>
              </ul>
            </div>
            <div className='bg-white p-6 rounded-lg border-2 border-secondary'>
              <h3 className='text-heading-lg font-bold mb-4 font-display text-slate-900'>
                Advanced Projects
              </h3>
              <div className='text-3xl font-bold text-secondary mb-2'>$3,000-$8,000</div>
              <p className='text-slate-600 mb-4 text-sm'>Complex scripts, user forms, 2-4 weeks</p>
              <ul className='text-slate-600 space-y-2 text-sm'>
                <li>✓ Complex VBA applications</li>
                <li>✓ User forms & interfaces</li>
                <li>✓ Database integration</li>
                <li>✓ Performance optimization</li>
                <li>✓ Full documentation</li>
              </ul>
            </div>
            <div className='bg-white p-6 rounded-lg border-2 border-slate-200'>
              <h3 className='text-heading-lg font-bold mb-4 font-display text-slate-900'>
                Enterprise Projects
              </h3>
              <div className='text-3xl font-bold text-secondary mb-2'>$8,000+</div>
              <p className='text-slate-600 mb-4 text-sm'>Complete Excel applications, 4-8 weeks</p>
              <ul className='text-slate-600 space-y-2 text-sm'>
                <li>✓ Complete Excel applications</li>
                <li>✓ Add-in development</li>
                <li>✓ System integration</li>
                <li>✓ Comprehensive training</li>
                <li>✓ Extended support</li>
              </ul>
            </div>
          </div>
          <p className='text-center text-slate-600 mt-8'>
            <strong>All projects include:</strong> Documentation, training, 100% code ownership, no
            recurring fees
          </p>
        </div>
      </section>

      <section className='py-8 md:py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-heading-lg md:text-heading-xl font-bold mb-8 font-display text-slate-900'>
            Common Questions
          </h2>
          <div className='space-y-4'>
            {[
              {
                q: 'What can VBA do in Excel?',
                a: 'VBA can automate almost anything in Excel: data processing, report generation, file operations, email sending, database connections, user interfaces, calculations, and more. If you can do it manually in Excel, VBA can automate it.',
              },
              {
                q: 'How long does VBA development take?',
                a: 'Simple macros: 1-2 weeks. Medium complexity: 2-4 weeks. Complex applications: 4-8 weeks. Timeline depends on requirements and complexity.',
              },
              {
                q: 'Do I need to know programming to use VBA macros?',
                a: 'No. I build user-friendly interfaces with buttons and forms. Your team just clicks a button to run the macro. I provide training and documentation.',
              },
              {
                q: 'Can you fix existing VBA code?',
                a: 'Yes. I can debug, optimize, and enhance existing VBA code. I fix errors, improve performance, add features, and refactor code for better maintainability.',
              },
              {
                q: 'What if my Excel version changes?',
                a: 'I write VBA code that works across Excel versions (2010, 2013, 2016, 2019, 365). I test compatibility and provide version-specific solutions when needed.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className={`bg-slate-50 rounded-lg border border-slate-200 overflow-hidden transition-all duration-200 ${
                  openFaqIndex === i ? 'shadow-md' : ''
                }`}
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className='w-full p-6 text-left flex items-center justify-between hover:bg-slate-100 transition-colors duration-200'
                  aria-expanded={openFaqIndex === i}
                >
                  <h3 className='text-lg font-bold font-display text-slate-900 pr-4'>{faq.q}</h3>
                  <span className='text-secondary text-2xl font-bold flex-shrink-0'>
                    {openFaqIndex === i ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === i && (
                  <div className='px-6 pb-6'>
                    <p className='text-slate-600'>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className='mt-8 text-center'>
            <Link
              href='/faq'
              className='text-secondary hover:text-secondary/80 font-semibold inline-flex items-center gap-2 transition-colors duration-micro'
            >
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      <section id='contact' className='py-8 md:py-12 bg-slate-50 text-slate-900'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <h2 className='text-heading-lg md:text-heading-xl font-bold mb-6 font-display text-slate-900'>
            Ready to Automate with VBA?
          </h2>
          <p className='text-lg mb-8 text-slate-700 max-w-7xl mx-auto leading-relaxed'>
            Stop doing manual Excel work. Get custom VBA code that automates your processes. Get a
            free consultation.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <Button variant='primary-green' size='large' as={Link} href='/contact'>
              Schedule Free Consultation
            </Button>
            <Button variant='secondary-green' size='large' as='a' href='tel:8016163702'>
              Call 801-616-3702
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
