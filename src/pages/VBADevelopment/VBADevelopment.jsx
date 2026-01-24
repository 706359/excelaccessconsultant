import { useState } from 'react';
import { Link } from 'react-router-dom';
import FAQSchema from '../../components/SEO/FAQSchema';
import SEO from '../../components/SEO/SEO';
import '../../styles/global.css';

function VBADevelopment() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

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

      {/* Hero Section */}
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
            <a
              to='/contact'
              className='bg-secondary hover:bg-secondary-hover text-white hover:text-white px-8 py-4 text-base font-medium transition-colors rounded-md text-center'
            >
              Get Free Consultation
            </a>
            <a
              href='tel:8016163702'
              className='bg-white hover:bg-slate-50 text-secondary hover:text-secondary-hover border-2 border-secondary hover:border-secondary-hover px-8 py-4 text-base font-medium transition-colors rounded-md text-center font-semibold'
            >
              Call 801-616-3702
            </a>
          </div>
        </div>
      </section>

      {/* What I Develop Section with Real Examples */}
      <section className='py-12 md:py-16 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid lg:grid-cols-3 gap-8 lg:gap-10'>
            {/* Left side - What I Develop */}
            <div className='lg:col-span-2'>
              <h2 className='text-heading-lg md:text-heading-xl font-bold mb-10 font-display text-slate-900'>
                What I Develop
              </h2>
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Custom VBA Macros
                  </h3>
                  <p className='text-slate-600'>
                    Macros tailored to your specific workflows. Automate data entry, calculations,
                    formatting, and repetitive tasks. One-click solutions.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Automation Scripts
                  </h3>
                  <p className='text-slate-600'>
                    Scripts that run complex processes automatically. Multi-file processing, data
                    consolidation, report generation, and workflow automation.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    User Forms & Interfaces
                  </h3>
                  <p className='text-slate-600'>
                    Professional user forms with validation, dropdowns, and controls. Make complex
                    processes simple for your team to use.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Excel Applications
                  </h3>
                  <p className='text-slate-600'>
                    Complete Excel applications with custom menus, toolbars, and functionality. Turn
                    Excel into a custom business tool.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Database Integration
                  </h3>
                  <p className='text-slate-600'>
                    Connect Excel to Access, SQL Server, and other databases. Pull data
                    automatically, push results back, and keep data in sync.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Error Handling & Debugging
                  </h3>
                  <p className='text-slate-600'>
                    Fix broken VBA code, add proper error handling, debug issues, and optimize
                    performance. Make your code reliable and maintainable.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Code Optimization
                  </h3>
                  <p className='text-slate-600'>
                    Speed up slow VBA code. Optimize loops, reduce calculation overhead, and improve
                    efficiency. Turn minutes into seconds.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    API Integration
                  </h3>
                  <p className='text-slate-600'>
                    Connect Excel to web APIs, REST services, and external data sources. Pull live
                    data, send data, and integrate with cloud services.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Email Automation
                  </h3>
                  <p className='text-slate-600'>
                    Automatically send emails from Excel. Format reports, attach files, send to
                    multiple recipients, and schedule automated emails.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    File Operations
                  </h3>
                  <p className='text-slate-600'>
                    Automate file operations: open, save, copy, move, rename, and process multiple
                    files. Work with folders and file systems.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Chart & Graph Automation
                  </h3>
                  <p className='text-slate-600'>
                    Automatically create and update charts. Generate chart images, format charts,
                    and create dashboard visualizations programmatically.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Add-In Development
                  </h3>
                  <p className='text-slate-600'>
                    Build Excel add-ins that extend Excel functionality. Custom functions, commands,
                    and features available across all workbooks.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Real Examples */}
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
                      to='/case-studies'
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
                      to='/case-studies'
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
                      to='/case-studies'
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

      {/* How It Works Section */}
      <section className='py-8 md:py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-heading-lg md:text-heading-xl font-bold mb-8 font-display text-slate-900'>
            How It Works
          </h2>
          <div className='space-y-8'>
            <div className='flex gap-6'>
              <div className='text-secondary font-bold text-3xl font-mono flex-shrink-0'>1</div>
              <div>
                <h3 className='text-heading-lg font-bold mb-2 font-display text-slate-900'>
                  Free Consultation (15-30 minutes)
                </h3>
                <p className='text-slate-600 leading-relaxed'>
                  We discuss your VBA needs, review existing code (if any), and I provide an initial
                  assessment. No obligation.
                </p>
              </div>
            </div>
            <div className='flex gap-6'>
              <div className='text-secondary font-bold text-3xl font-mono flex-shrink-0'>2</div>
              <div>
                <h3 className='text-heading-lg font-bold mb-2 font-display text-slate-900'>
                  Fixed-Price Quote (within 24 hours)
                </h3>
                <p className='text-slate-600 leading-relaxed'>
                  I provide a detailed quote with timeline, deliverables, and fixed price. You know
                  exactly what you&apos;re getting and the cost.
                </p>
              </div>
            </div>
            <div className='flex gap-6'>
              <div className='text-secondary font-bold text-3xl font-mono flex-shrink-0'>3</div>
              <div>
                <h3 className='text-heading-lg font-bold mb-2 font-display text-slate-900'>
                  Development & Testing
                </h3>
                <p className='text-slate-600 leading-relaxed'>
                  I write clean, documented VBA code in a test environment. You can test and provide
                  feedback. I make adjustments as needed.
                </p>
              </div>
            </div>
            <div className='flex gap-6'>
              <div className='text-secondary font-bold text-3xl font-mono flex-shrink-0'>4</div>
              <div>
                <h3 className='text-heading-lg font-bold mb-2 font-display text-slate-900'>
                  Training & Delivery
                </h3>
                <p className='text-slate-600 leading-relaxed'>
                  I provide code documentation and training on how to use the VBA macros. You own
                  100% of the code. No licenses, no recurring fees.
                </p>
              </div>
            </div>
            <div className='flex gap-6'>
              <div className='text-secondary font-bold text-3xl font-mono flex-shrink-0'>5</div>
              <div>
                <h3 className='text-heading-lg font-bold mb-2 font-display text-slate-900'>
                  Ongoing Support (optional)
                </h3>
                <p className='text-slate-600 leading-relaxed'>
                  Need code updates, new features, or bug fixes? I&apos;m available for support. We
                  can set up a maintenance plan or handle requests as needed.
                </p>
              </div>
            </div>
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

      {/* Pricing Section */}
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

      {/* Common Questions Section */}
      <section className='py-8 md:py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-heading-lg md:text-heading-xl font-bold mb-8 font-display text-slate-900'>
            Common Questions
          </h2>
          <div className='space-y-4'>
            <div
              className={`bg-slate-50 rounded-lg border border-slate-200 overflow-hidden transition-all duration-200 ${openFaqIndex === 0 ? 'shadow-md' : ''}`}
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
                className='w-full p-6 text-left flex items-center justify-between hover:bg-slate-100 transition-colors duration-200'
                aria-expanded={openFaqIndex === 0}
              >
                <h3 className='text-lg font-bold font-display text-slate-900 pr-4'>
                  What can VBA do in Excel?
                </h3>
                <span className='text-secondary text-2xl font-bold flex-shrink-0'>
                  {openFaqIndex === 0 ? '−' : '+'}
                </span>
              </button>
              {openFaqIndex === 0 && (
                <div className='px-6 pb-6'>
                  <p className='text-slate-600'>
                    VBA can automate almost anything in Excel: data processing, report generation,
                    file operations, email sending, database connections, user interfaces,
                    calculations, and more. If you can do it manually in Excel, VBA can automate it.
                  </p>
                </div>
              )}
            </div>
            <div
              className={`bg-slate-50 rounded-lg border border-slate-200 overflow-hidden transition-all duration-200 ${openFaqIndex === 1 ? 'shadow-md' : ''}`}
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
                className='w-full p-6 text-left flex items-center justify-between hover:bg-slate-100 transition-colors duration-200'
                aria-expanded={openFaqIndex === 1}
              >
                <h3 className='text-lg font-bold font-display text-slate-900 pr-4'>
                  How long does VBA development take?
                </h3>
                <span className='text-secondary text-2xl font-bold flex-shrink-0'>
                  {openFaqIndex === 1 ? '−' : '+'}
                </span>
              </button>
              {openFaqIndex === 1 && (
                <div className='px-6 pb-6'>
                  <p className='text-slate-600'>
                    Simple macros: 1-2 weeks. Medium complexity: 2-4 weeks. Complex applications:
                    4-8 weeks. Timeline depends on requirements and complexity.
                  </p>
                </div>
              )}
            </div>
            <div
              className={`bg-slate-50 rounded-lg border border-slate-200 overflow-hidden transition-all duration-200 ${openFaqIndex === 2 ? 'shadow-md' : ''}`}
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}
                className='w-full p-6 text-left flex items-center justify-between hover:bg-slate-100 transition-colors duration-200'
                aria-expanded={openFaqIndex === 2}
              >
                <h3 className='text-lg font-bold font-display text-slate-900 pr-4'>
                  Do I need to know programming to use VBA macros?
                </h3>
                <span className='text-secondary text-2xl font-bold flex-shrink-0'>
                  {openFaqIndex === 2 ? '−' : '+'}
                </span>
              </button>
              {openFaqIndex === 2 && (
                <div className='px-6 pb-6'>
                  <p className='text-slate-600'>
                    No. I build user-friendly interfaces with buttons and forms. Your team just
                    clicks a button to run the macro. I provide training and documentation.
                  </p>
                </div>
              )}
            </div>
            <div
              className={`bg-slate-50 rounded-lg border border-slate-200 overflow-hidden transition-all duration-200 ${openFaqIndex === 3 ? 'shadow-md' : ''}`}
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === 3 ? null : 3)}
                className='w-full p-6 text-left flex items-center justify-between hover:bg-slate-100 transition-colors duration-200'
                aria-expanded={openFaqIndex === 3}
              >
                <h3 className='text-lg font-bold font-display text-slate-900 pr-4'>
                  Can you fix existing VBA code?
                </h3>
                <span className='text-secondary text-2xl font-bold flex-shrink-0'>
                  {openFaqIndex === 3 ? '−' : '+'}
                </span>
              </button>
              {openFaqIndex === 3 && (
                <div className='px-6 pb-6'>
                  <p className='text-slate-600'>
                    Yes. I can debug, optimize, and enhance existing VBA code. I fix errors, improve
                    performance, add features, and refactor code for better maintainability.
                  </p>
                </div>
              )}
            </div>
            <div
              className={`bg-slate-50 rounded-lg border border-slate-200 overflow-hidden transition-all duration-200 ${openFaqIndex === 4 ? 'shadow-md' : ''}`}
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === 4 ? null : 4)}
                className='w-full p-6 text-left flex items-center justify-between hover:bg-slate-100 transition-colors duration-200'
                aria-expanded={openFaqIndex === 4}
              >
                <h3 className='text-lg font-bold font-display text-slate-900 pr-4'>
                  What if my Excel version changes?
                </h3>
                <span className='text-secondary text-2xl font-bold flex-shrink-0'>
                  {openFaqIndex === 4 ? '−' : '+'}
                </span>
              </button>
              {openFaqIndex === 4 && (
                <div className='px-6 pb-6'>
                  <p className='text-slate-600'>
                    I write VBA code that works across Excel versions (2010, 2013, 2016, 2019, 365).
                    I test compatibility and provide version-specific solutions when needed.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className='mt-8 text-center'>
            <Link
              to='/faq'
              className='text-secondary hover:text-secondary/80 font-semibold inline-flex items-center gap-2 transition-colors duration-micro'
            >
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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
            <Link
              to='/contact'
              className='bg-secondary hover:bg-secondary-hover text-white hover:text-white px-8 py-4 text-base font-medium transition-colors rounded-md'
            >
              Schedule Free Consultation
            </Link>
            <a
              href='tel:8016163702'
              className='bg-white hover:bg-slate-100 text-secondary border-2 border-secondary px-8 py-4 text-base font-medium transition-colors rounded-md'
            >
              Call 801-616-3702
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VBADevelopment;
