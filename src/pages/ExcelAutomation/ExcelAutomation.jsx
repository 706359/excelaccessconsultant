import { useState } from 'react';
import { Link } from 'react-router-dom';
import FAQSchema from '../../components/SEO/FAQSchema';
import SEO from '../../components/SEO/SEO';
import '../../styles/global.css';

function ExcelAutomation() {
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
        title='Excel VBA Automation Services | ExcelAccessConsultant'
        description='Excel VBA automation services. Custom macros, automated reporting, data processing. 20+ years experience. Fixed pricing. Free consultation. Turn manual work into minutes.'
        keywords='excel vba automation, excel automation services, automate excel reporting, excel macro development, vba programming, excel consultant'
        url='https://excelaccessconsultant.com/excel-automation'
        ogTitle='Excel VBA Automation Services'
      />

      <FAQSchema
        faqs={[
          {
            question: 'What can be automated in Excel?',
            answer:
              'Almost any repetitive Excel task can be automated: report generation, data consolidation from multiple files, formatting, calculations, dashboard updates, email sending, and more. If you do it regularly, we can automate it.',
          },
          {
            question: 'How long does Excel automation take?',
            answer:
              'Simple automations (single process) typically take 1-2 weeks. Advanced automations (multiple processes, complex logic) take 3-6 weeks. I provide a timeline after our free consultation.',
          },
          {
            question: 'Do I need to know VBA to use the automation?',
            answer:
              'No. I build user-friendly interfaces with buttons and forms. Your team just clicks a button to run the automation. I provide training and documentation.',
          },
          {
            question: 'What if my Excel file structure changes?',
            answer:
              'I build flexible automation that can handle minor changes. For major structural changes, I can update the automation. Most clients find the automation adapts well to their evolving needs.',
          },
          {
            question: 'Can you automate Excel to work with other systems?',
            answer:
              'Yes. I can connect Excel to Access databases, SQL Server, web APIs, and other data sources. Excel can pull data automatically and push results back to other systems.',
          },
        ]}
      />

      {/* Hero Section */}
      <section className='py-8 md:py-12 bg-white border-b border-slate-200'>
        <div className='max-w-7xl mx-auto px-6'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-display text-slate-900'>
            Excel VBA Automation Services
          </h1>
          <p className='text-lg md:text-xl text-slate-700 mb-8 leading-relaxed'>
            Stop wasting hours on manual Excel work. I build custom VBA automation that turns your
            repetitive tasks into one-click solutions. 20+ years of experience. 200+ automation
            projects completed. Fixed pricing. Free consultation.
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Link
              to='/contact'
              className='inline-flex items-center justify-center bg-secondary hover:bg-secondary-hover text-white hover:text-white font-semibold px-8 py-4 text-base rounded-md transition-colors'
            >
              Get Free Consultation
            </Link>
            <a
              href='tel:8016163702'
              className='inline-flex items-center justify-center bg-white hover:bg-slate-50 text-secondary hover:text-secondary-hover border-2 border-secondary hover:border-secondary-hover font-semibold px-8 py-4 text-base rounded-md transition-colors'
            >
              Call 801-616-3702
            </a>
          </div>
        </div>
      </section>

      {/* What I Automate Section with Real Examples */}
      <section className='py-8 md:py-12 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid lg:grid-cols-3 gap-6'>
            {/* Left side - What I Automate */}
            <div className='lg:col-span-2'>
              <h2 className='text-heading-lg md:text-heading-xl font-bold mb-8 font-display text-slate-900'>
                What I Automate
              </h2>
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900 group-hover:text-secondary transition-colors duration-micro'>
                    Report Generation
                  </h3>
                  <p className='text-body-base text-slate-600'>
                    Automated weekly, monthly, and quarterly reports. Pull data from multiple
                    sources, format, calculate, and generate PDFs or Excel files automatically.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900 group-hover:text-secondary transition-colors duration-micro'>
                    Data Consolidation
                  </h3>
                  <p className='text-body-base text-slate-600'>
                    Combine data from multiple Excel files, Access databases, or CSV files into one
                    master file. Automatically clean, validate, and format the data.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900 group-hover:text-secondary transition-colors duration-micro'>
                    Multi-File Processing
                  </h3>
                  <p className='text-body-base text-slate-600'>
                    Process hundreds of Excel files at once. Extract data, perform calculations,
                    generate summaries, and organize results automatically.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900 group-hover:text-secondary transition-colors duration-micro'>
                    Dashboard Creation
                  </h3>
                  <p className='text-body-base text-slate-600'>
                    Interactive dashboards with charts, pivot tables, and controls. Automatically
                    update when new data arrives. No manual refresh needed.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900 group-hover:text-secondary transition-colors duration-micro'>
                    Data Validation & Cleaning
                  </h3>
                  <p className='text-body-base text-slate-600'>
                    Automatically check for errors, duplicates, missing data, and inconsistencies.
                    Clean and standardize data according to your business rules.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900 group-hover:text-secondary transition-colors duration-micro'>
                    Email Automation
                  </h3>
                  <p className='text-body-base text-slate-600'>
                    Automatically send formatted reports via email. Schedule daily, weekly, or
                    monthly emails to specific recipients with customized content.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900 group-hover:text-secondary transition-colors duration-micro'>
                    Formula Automation
                  </h3>
                  <p className='text-body-base text-slate-600'>
                    Complex calculations that run automatically. Update formulas across multiple
                    sheets, handle conditional logic, and perform advanced calculations.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900 group-hover:text-secondary transition-colors duration-micro'>
                    Formatting & Styling
                  </h3>
                  <p className='text-body-base text-slate-600'>
                    Apply consistent formatting across multiple files. Auto-format reports, apply
                    conditional formatting, and maintain brand standards automatically.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900 group-hover:text-secondary transition-colors duration-micro'>
                    Data Import/Export
                  </h3>
                  <p className='text-body-base text-slate-600'>
                    Automatically import data from external sources (databases, APIs, CSV files) and
                    export results to various formats (PDF, Excel, CSV, Access).
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900 group-hover:text-secondary transition-colors duration-micro'>
                    Workflow Automation
                  </h3>
                  <p className='text-body-base text-slate-600'>
                    Automate entire workflows: data entry → validation → calculation → reporting →
                    distribution. One button runs the entire process.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900 group-hover:text-secondary transition-colors duration-micro'>
                    Pivot Table Automation
                  </h3>
                  <p className='text-body-base text-slate-600'>
                    Automatically create and update pivot tables. Refresh data sources, rebuild
                    pivot tables, and generate pivot-based reports automatically.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900 group-hover:text-secondary transition-colors duration-micro'>
                    Chart & Graph Generation
                  </h3>
                  <p className='text-body-base text-slate-600'>
                    Automatically create charts and graphs from data. Update charts when data
                    changes, apply consistent styling, and export chart images.
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
                        Manufacturing Company - Production Reporting
                      </h3>
                      <p className='text-slate-600 text-sm leading-relaxed'>
                        Reports now generate in 30 seconds. Saves 6 hours per week.
                      </p>
                    </Link>
                    <Link
                      to='/case-studies'
                      className='block group pb-5 border-b border-slate-200 last:border-0 last:pb-0 hover:translate-x-1 transition-all duration-200'
                    >
                      <h3 className='text-base md:text-lg font-bold mb-2 font-display text-slate-900 group-hover:text-secondary transition-colors duration-200 leading-tight'>
                        Finance Team - Accounting Close
                      </h3>
                      <p className='text-slate-600 text-sm leading-relaxed'>
                        Close process reduced to 10 minutes. Zero errors.
                      </p>
                    </Link>
                    <Link
                      to='/case-studies'
                      className='block group pb-5 border-b border-slate-200 last:border-0 last:pb-0 hover:translate-x-1 transition-all duration-200'
                    >
                      <h3 className='text-base md:text-lg font-bold mb-2 font-display text-slate-900 group-hover:text-secondary transition-colors duration-200 leading-tight'>
                        Operations - Multi-Location Data
                      </h3>
                      <p className='text-slate-600 text-sm leading-relaxed'>
                        Data consolidates automatically in 5 minutes. Real-time updates.
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
                  We discuss your current process, identify what can be automated, and I provide an
                  initial assessment. No obligation, just honest advice.
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
                  I provide a detailed quote with timeline, deliverables, and fixed price. No
                  surprises, no hourly billing. You know exactly what you&apos;re getting.
                </p>
              </div>
            </div>
            <div className='flex gap-6'>
              <div className='text-secondary font-bold text-3xl font-mono flex-shrink-0'>3</div>
              <div>
                <h3 className='text-heading-lg font-bold mb-2 font-display text-slate-900'>
                  Build & Test (in sandbox)
                </h3>
                <p className='text-slate-600 leading-relaxed'>
                  I build the automation in a test environment. You can review and test before it
                  goes live. I make adjustments based on your feedback.
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
                  I provide documentation and hands-on training for your team. You own 100% of the
                  code. No licenses, no recurring fees.
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
                  Need updates or changes? I&apos;m available for support. We can set up a
                  maintenance plan or handle requests as they come.
                </p>
              </div>
            </div>
          </div>
          <div className='mt-8 bg-slate-50 p-6 rounded-lg border border-slate-200'>
            <p className='text-slate-700 font-medium mb-2'>
              <strong>Timeline Expectations:</strong>
            </p>
            <ul className='text-slate-600 space-y-1 list-disc list-inside'>
              <li>Simple automations: 1-2 weeks</li>
              <li>Advanced automations: 3-6 weeks</li>
              <li>Complex multi-process systems: 6-8 weeks</li>
            </ul>
            <p className='text-slate-600 mt-4'>
              <strong>What You Provide:</strong> Sample files, process documentation, access to data
              sources (if needed)
            </p>
            <p className='text-slate-600 mt-2'>
              <strong>What You Get:</strong> Working automation, documentation, training, 100% code
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
              <p className='text-slate-600 mb-4 text-sm'>
                Basic automation, single process, 1-2 weeks
              </p>
              <ul className='text-slate-600 space-y-2 text-sm'>
                <li>✓ Single process automation</li>
                <li>✓ Basic VBA macros</li>
                <li>✓ Simple reporting</li>
                <li>✓ Documentation included</li>
              </ul>
            </div>
            <div className='bg-white p-6 rounded-lg border-2 border-secondary'>
              <h3 className='text-heading-lg font-bold mb-4 font-display text-slate-900'>
                Advanced Projects
              </h3>
              <div className='text-3xl font-bold text-secondary mb-2'>$3,000-$8,000</div>
              <p className='text-slate-600 mb-4 text-sm'>
                Complex workflows, multi-file processing, 3-6 weeks
              </p>
              <ul className='text-slate-600 space-y-2 text-sm'>
                <li>✓ Complex workflows</li>
                <li>✓ Multi-file processing</li>
                <li>✓ Advanced dashboards</li>
                <li>✓ System integration</li>
                <li>✓ Full documentation</li>
              </ul>
            </div>
            <div className='bg-white p-6 rounded-lg border-2 border-slate-200'>
              <h3 className='text-heading-lg font-bold mb-4 font-display text-slate-900'>
                Enterprise Projects
              </h3>
              <div className='text-3xl font-bold text-secondary mb-2'>$8,000+</div>
              <p className='text-slate-600 mb-4 text-sm'>
                Full system integration, custom database connections, 6+ weeks
              </p>
              <ul className='text-slate-600 space-y-2 text-sm'>
                <li>✓ Full system integration</li>
                <li>✓ Custom database design</li>
                <li>✓ Multi-user systems</li>
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
                  What can be automated in Excel?
                </h3>
                <span className='text-secondary text-2xl font-bold flex-shrink-0'>
                  {openFaqIndex === 0 ? '−' : '+'}
                </span>
              </button>
              {openFaqIndex === 0 && (
                <div className='px-6 pb-6'>
                  <p className='text-body-base text-slate-600'>
                    Almost any repetitive Excel task can be automated: report generation, data
                    consolidation from multiple files, formatting, calculations, dashboard updates,
                    email sending, and more. If you do it regularly, we can automate it.
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
                  How long does Excel automation take?
                </h3>
                <span className='text-secondary text-2xl font-bold flex-shrink-0'>
                  {openFaqIndex === 1 ? '−' : '+'}
                </span>
              </button>
              {openFaqIndex === 1 && (
                <div className='px-6 pb-6'>
                  <p className='text-body-base text-slate-600'>
                    Simple automations (single process) typically take 1-2 weeks. Advanced
                    automations (multiple processes, complex logic) take 3-6 weeks. I provide a
                    timeline after our free consultation.
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
                  Do I need to know VBA to use the automation?
                </h3>
                <span className='text-secondary text-2xl font-bold flex-shrink-0'>
                  {openFaqIndex === 2 ? '−' : '+'}
                </span>
              </button>
              {openFaqIndex === 2 && (
                <div className='px-6 pb-6'>
                  <p className='text-body-base text-slate-600'>
                    No. I build user-friendly interfaces with buttons and forms. Your team just
                    clicks a button to run the automation. I provide training and documentation.
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
                  What if my Excel file structure changes?
                </h3>
                <span className='text-secondary text-2xl font-bold flex-shrink-0'>
                  {openFaqIndex === 3 ? '−' : '+'}
                </span>
              </button>
              {openFaqIndex === 3 && (
                <div className='px-6 pb-6'>
                  <p className='text-body-base text-slate-600'>
                    I build flexible automation that can handle minor changes. For major structural
                    changes, I can update the automation. Most clients find the automation adapts
                    well to their evolving needs.
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
                  Can you automate Excel to work with other systems?
                </h3>
                <span className='text-secondary text-2xl font-bold flex-shrink-0'>
                  {openFaqIndex === 4 ? '−' : '+'}
                </span>
              </button>
              {openFaqIndex === 4 && (
                <div className='px-6 pb-6'>
                  <p className='text-body-base text-slate-600'>
                    Yes. I can connect Excel to Access databases, SQL Server, web APIs, and other
                    data sources. Excel can pull data automatically and push results back to other
                    systems.
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
            Ready to Automate Your Excel Workflows?
          </h2>
          <p className='text-lg mb-8 text-slate-700 max-w-7xl mx-auto leading-relaxed'>
            Stop wasting hours on manual Excel work. Get a free consultation and see how automation
            can save your team time and eliminate errors.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <Link
              to='/contact'
              className='inline-flex items-center justify-center bg-secondary hover:bg-secondary-hover text-white hover:text-white font-semibold px-8 py-4 text-base rounded-lg transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2'
            >
              Schedule Free Consultation
            </Link>
            <a
              href='tel:8016163702'
              className='inline-flex items-center justify-center bg-white hover:bg-slate-100 text-secondary border-2 border-secondary hover:border-secondary-hover font-semibold px-8 py-4 text-base rounded-md transition-colors'
            >
              Call 801-616-3702
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExcelAutomation;
