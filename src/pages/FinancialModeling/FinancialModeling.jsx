import { useState } from 'react';
import { Link } from 'react-router-dom';
import FAQSchema from '../../components/SEO/FAQSchema';
import SEO from '../../components/SEO/SEO';
import '../../styles/global.css';

function FinancialModeling() {
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
        title='Financial Modeling Consultant | Excel Financial Models'
        description='Financial modeling consultant. Build accurate Excel financial models, forecasts, and budgets. 20+ years experience. Fixed pricing. Free consultation.'
        keywords='financial modeling consultant, excel financial model, financial model help, financial forecasting, budget modeling, excel consultant'
        url='https://excelaccessconsultant.com/financial-modeling'
        ogTitle='Financial Modeling Consultant Services'
      />

      <FAQSchema
        faqs={[
          {
            question: 'What types of financial models do you build?',
            answer:
              'I build various financial models: 3-statement models, budget models, forecasting models, valuation models, cash flow models, and scenario analysis models. I customize each model to your specific business needs.',
          },
          {
            question: 'How long does it take to build a financial model?',
            answer:
              'Simple models (single business unit): 2-3 weeks. Medium complexity (multi-department): 4-6 weeks. Complex models (enterprise-level): 6-10 weeks. Timeline depends on data availability and complexity.',
          },
          {
            question: 'Do you work with existing financial models?',
            answer:
              'Yes. I can fix broken models, optimize slow models, add new features, or rebuild models that are no longer working correctly. Most of my work involves improving existing models.',
          },
          {
            question: 'Can you speed up slow financial models?',
            answer:
              'Yes. I optimize formulas, add efficient calculations, remove unnecessary calculations, and restructure models for better performance. I can turn a 5-minute calculation into seconds.',
          },
          {
            question: 'What data do you need to build a financial model?',
            answer:
              'I need historical financial data, business assumptions, growth projections, and understanding of your business model. I work with whatever data you have available.',
          },
        ]}
      />

      {/* Hero Section */}
      <section className='py-8 md:py-12 bg-white border-b border-slate-200'>
        <div className='max-w-7xl mx-auto px-6'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-display text-slate-900'>
            Financial Modeling Services
          </h1>
          <p className='text-lg md:text-xl text-slate-700 mb-8 leading-relaxed'>
            Build accurate, fast Excel financial models for forecasting, budgeting, and analysis.
            Fix slow models, add new features, or build from scratch. 20+ years of experience. MBA
            in Accounting. Fixed pricing. Free consultation.
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <a
              to='/contact'
              className='bg-primary hover:bg-primary-hover text-white hover:text-white px-8 py-4 text-base font-medium transition-colors rounded-md text-center'
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

      {/* What I Build Section with Real Examples */}
      <section className='py-12 md:py-16 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid lg:grid-cols-3 gap-8 lg:gap-10'>
            {/* Left side - What I Build */}
            <div className='lg:col-span-2'>
              <h2 className='text-heading-lg md:text-heading-xl font-bold mb-10 font-display text-slate-900'>
                What I Build
              </h2>
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    3-Statement Financial Models
                  </h3>
                  <p className='text-slate-600'>
                    Integrated income statement, balance sheet, and cash flow statement.
                    Automatically linked and balanced. Perfect for forecasting and scenario
                    analysis.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Budget & Forecast Models
                  </h3>
                  <p className='text-slate-600'>
                    Annual budgets, quarterly forecasts, and rolling forecasts. Compare actuals to
                    budget, track variances, and update forecasts easily.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Cash Flow Models
                  </h3>
                  <p className='text-slate-600'>
                    Detailed cash flow forecasting. Track operating, investing, and financing
                    activities. Identify cash shortfalls before they happen.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Valuation Models
                  </h3>
                  <p className='text-slate-600'>
                    DCF models, comparable company analysis, and other valuation methodologies.
                    Built for accuracy and ease of use.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Scenario Analysis Models
                  </h3>
                  <p className='text-slate-600'>
                    What-if analysis with multiple scenarios. Compare best case, base case, and
                    worst case outcomes. Sensitivity analysis built in.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Performance Dashboards
                  </h3>
                  <p className='text-slate-600'>
                    Visual dashboards showing key financial metrics, KPIs, and trends. Automatically
                    update when data changes. Executive-ready presentations.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Model Optimization
                  </h3>
                  <p className='text-slate-600'>
                    Speed up slow models. Optimize formulas, remove circular references, restructure
                    for performance. Turn 5-minute calculations into seconds.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Model Repair & Fixes
                  </h3>
                  <p className='text-slate-600'>
                    Fix broken formulas, correct calculation errors, resolve circular references,
                    and restore corrupted models. Get your model working again.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Custom Business Models
                  </h3>
                  <p className='text-slate-600'>
                    Industry-specific models: SaaS metrics, manufacturing costs, retail inventory,
                    service businesses. Built for your specific business model.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Automated Reporting
                  </h3>
                  <p className='text-slate-600'>
                    Models that automatically generate reports, charts, and summaries. Update
                    reports with one click. No manual formatting needed.
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
                        Finance Team - Budget Model
                      </h3>
                      <p className='text-slate-600 text-sm leading-relaxed'>
                        Budget builds in 30 minutes. Multiple scenarios can be compared instantly.
                      </p>
                    </Link>
                    <Link
                      to='/case-studies'
                      className='block group pb-5 border-b border-slate-200 last:border-0 last:pb-0 hover:translate-x-1 transition-all duration-200'
                    >
                      <h3 className='text-base md:text-lg font-bold mb-2 font-display text-slate-900 group-hover:text-secondary transition-colors duration-200 leading-tight'>
                        CFO - Slow Forecast Model
                      </h3>
                      <p className='text-slate-600 text-sm leading-relaxed'>
                        Calculations now run in 5 seconds. 60x faster. What-if analysis is instant.
                      </p>
                    </Link>
                    <Link
                      to='/case-studies'
                      className='block group pb-5 border-b border-slate-200 last:border-0 last:pb-0 hover:translate-x-1 transition-all duration-200'
                    >
                      <h3 className='text-base md:text-lg font-bold mb-2 font-display text-slate-900 group-hover:text-secondary transition-colors duration-200 leading-tight'>
                        Startup - Cash Flow Model
                      </h3>
                      <p className='text-slate-600 text-sm leading-relaxed'>
                        Can forecast cash flow 12 months ahead. Identifies shortfalls before they
                        happen.
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
                  We discuss your financial modeling needs, review existing models (if any), and I
                  provide an initial assessment. No obligation.
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
                  Build & Test (in sandbox)
                </h3>
                <p className='text-slate-600 leading-relaxed'>
                  I build the model in a test environment. You can review calculations, test
                  scenarios, and provide feedback before final delivery.
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
                  I provide documentation and training on how to use and update the model. You own
                  100% of the model. No recurring fees.
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
                  Need model updates, new features, or fixes? I&apos;m available for support. We can
                  set up a maintenance plan or handle requests as needed.
                </p>
              </div>
            </div>
          </div>
          <div className='mt-8 bg-slate-50 p-6 rounded-lg border border-slate-200'>
            <p className='text-slate-700 font-medium mb-2'>
              <strong>Timeline Expectations:</strong>
            </p>
            <ul className='text-slate-600 space-y-1 list-disc list-inside'>
              <li>Simple models: 2-3 weeks</li>
              <li>Medium complexity: 4-6 weeks</li>
              <li>Complex models: 6-10 weeks</li>
            </ul>
            <p className='text-slate-600 mt-4'>
              <strong>What You Provide:</strong> Historical financial data, business assumptions,
              growth projections, access to accounting systems (if needed)
            </p>
            <p className='text-slate-600 mt-2'>
              <strong>What You Get:</strong> Working financial model, documentation, training, 100%
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
                Basic models, single business unit, 2-3 weeks
              </p>
              <ul className='text-slate-600 space-y-2 text-sm'>
                <li>✓ Single business unit model</li>
                <li>✓ Basic forecasting</li>
                <li>✓ Standard reports</li>
                <li>✓ Documentation included</li>
              </ul>
            </div>
            <div className='bg-white p-6 rounded-lg border-2 border-secondary'>
              <h3 className='text-heading-lg font-bold mb-4 font-display text-slate-900'>
                Advanced Projects
              </h3>
              <div className='text-3xl font-bold text-secondary mb-2'>$3,000-$8,000</div>
              <p className='text-slate-600 mb-4 text-sm'>
                Multi-department models, scenario analysis, 4-6 weeks
              </p>
              <ul className='text-slate-600 space-y-2 text-sm'>
                <li>✓ Multi-department models</li>
                <li>✓ Scenario analysis</li>
                <li>✓ Advanced dashboards</li>
                <li>✓ Performance optimization</li>
                <li>✓ Full documentation</li>
              </ul>
            </div>
            <div className='bg-white p-6 rounded-lg border-2 border-slate-200'>
              <h3 className='text-heading-lg font-bold mb-4 font-display text-slate-900'>
                Enterprise Projects
              </h3>
              <div className='text-3xl font-bold text-secondary mb-2'>$8,000+</div>
              <p className='text-slate-600 mb-4 text-sm'>
                Enterprise-level models, complex integrations, 6-10 weeks
              </p>
              <ul className='text-slate-600 space-y-2 text-sm'>
                <li>✓ Enterprise-level models</li>
                <li>✓ System integration</li>
                <li>✓ Custom business logic</li>
                <li>✓ Comprehensive training</li>
                <li>✓ Extended support</li>
              </ul>
            </div>
          </div>
          <p className='text-center text-slate-600 mt-8'>
            <strong>All projects include:</strong> Documentation, training, 100% model ownership, no
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
                  What types of financial models do you build?
                </h3>
                <span className='text-secondary text-2xl font-bold flex-shrink-0'>
                  {openFaqIndex === 0 ? '−' : '+'}
                </span>
              </button>
              {openFaqIndex === 0 && (
                <div className='px-6 pb-6'>
                  <p className='text-slate-600'>
                    I build various financial models: 3-statement models, budget models, forecasting
                    models, valuation models, cash flow models, and scenario analysis models. I
                    customize each model to your specific business needs.
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
                  How long does it take to build a financial model?
                </h3>
                <span className='text-primary text-2xl font-bold flex-shrink-0'>
                  {openFaqIndex === 1 ? '−' : '+'}
                </span>
              </button>
              {openFaqIndex === 1 && (
                <div className='px-6 pb-6'>
                  <p className='text-slate-600'>
                    Simple models (single business unit): 2-3 weeks. Medium complexity
                    (multi-department): 4-6 weeks. Complex models (enterprise-level): 6-10 weeks.
                    Timeline depends on data availability and complexity.
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
                  Do you work with existing financial models?
                </h3>
                <span className='text-secondary text-2xl font-bold flex-shrink-0'>
                  {openFaqIndex === 2 ? '−' : '+'}
                </span>
              </button>
              {openFaqIndex === 2 && (
                <div className='px-6 pb-6'>
                  <p className='text-slate-600'>
                    Yes. I can fix broken models, optimize slow models, add new features, or rebuild
                    models that are no longer working correctly. Most of my work involves improving
                    existing models.
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
                  Can you speed up slow financial models?
                </h3>
                <span className='text-secondary text-2xl font-bold flex-shrink-0'>
                  {openFaqIndex === 3 ? '−' : '+'}
                </span>
              </button>
              {openFaqIndex === 3 && (
                <div className='px-6 pb-6'>
                  <p className='text-slate-600'>
                    Yes. I optimize formulas, add efficient calculations, remove unnecessary
                    calculations, and restructure models for better performance. I can turn a
                    5-minute calculation into seconds.
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
                  What data do you need to build a financial model?
                </h3>
                <span className='text-secondary text-2xl font-bold flex-shrink-0'>
                  {openFaqIndex === 4 ? '−' : '+'}
                </span>
              </button>
              {openFaqIndex === 4 && (
                <div className='px-6 pb-6'>
                  <p className='text-slate-600'>
                    I need historical financial data, business assumptions, growth projections, and
                    understanding of your business model. I work with whatever data you have
                    available.
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
            Ready to Build or Fix Your Financial Model?
          </h2>
          <p className='text-lg mb-8 text-slate-700 max-w-7xl mx-auto leading-relaxed'>
            Stop struggling with slow or broken financial models. Get a free consultation and see
            how I can help.
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

export default FinancialModeling;
