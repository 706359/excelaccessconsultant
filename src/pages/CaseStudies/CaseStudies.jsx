import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import '../../styles/global.css';

function CaseStudies() {
  return (
    <div className='bg-base min-h-screen text-slate-800 font-sans'>
      <SEO
        title='Case Studies - Excel & Access Automation Success Stories'
        description='Real Excel and Access automation case studies. See how we reduced manual work from hours to minutes. Manufacturing, finance, and operations examples. 200+ projects completed.'
        keywords='excel automation case study, access database case study, automation success stories, excel consultant results, access database results'
        url='https://excelaccessconsultant.com/case-studies'
        ogTitle='Case Studies - Excel & Access Automation'
      />

      {/* Hero Section */}
      <section className='py-12 md:py-16 bg-gradient-to-br from-slate-50 to-white border-b border-slate-200'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <h1 className='text-display-lg md:text-display-xl lg:text-display-2xl font-extrabold mb-6 font-display text-slate-900'>
            Real Results from Real Projects
          </h1>
          <p className='text-lg md:text-xl text-slate-700 mb-8 leading-relaxed max-w-3xl mx-auto'>
            See how I&apos;ve helped businesses eliminate manual work, fix broken systems, and
            automate repetitive tasks. Real problems. Real solutions. Real numbers.
          </p>
        </div>
      </section>

      {/* Case Studies with Sidebar */}
      <section className='py-12 md:py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid lg:grid-cols-3 gap-6 lg:gap-8'>
            {/* Left Column - All Case Studies */}
            <div className='lg:col-span-2 space-y-12'>
              {/* Case Study 1: Manufacturing */}
              <article className='bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300'>
                <div className='mb-8'>
                  <span className='inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4'>
                    Manufacturing
                  </span>
                  <h2 className='text-heading-lg md:text-heading-xl font-bold mb-4 font-display text-slate-900'>
                    From 8 Hours to 15 Minutes: Production Reporting Automation
                  </h2>
                </div>

                <div className='space-y-8 text-slate-700 leading-relaxed'>
                  <div>
                    <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                      The Problem
                    </h3>
                    <p className='mb-4'>
                      A mid-size manufacturing company with 50+ employees was spending 8 hours every
                      week compiling production reports. The process involved manually collecting
                      data from 5 different Excel files, copying and pasting into a master
                      spreadsheet, running calculations, formatting reports, and emailing to
                      stakeholders.
                    </p>
                    <p>
                      The process was error-prone. Data entry mistakes were common, formulas broke
                      when files changed, and the person doing the reports dreaded Friday
                      afternoons.
                    </p>
                  </div>

                  <div>
                    <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                      The Solution
                    </h3>
                    <p className='mb-4'>
                      I built an automated Excel VBA system that handles the entire reporting
                      process:
                    </p>
                    <ul className='list-none space-y-2 mb-4'>
                      <li className='text-slate-600 flex items-start gap-2'>
                        <span className='text-primary mt-1 font-bold'>•</span>
                        <span>
                          <strong>Automated Data Collection:</strong> VBA script automatically opens
                          all 5 source files, extracts data, and consolidates into master file
                        </span>
                      </li>
                      <li className='text-slate-600 flex items-start gap-2'>
                        <span className='text-primary mt-1 font-bold'>•</span>
                        <span>
                          <strong>Error-Proof Calculations:</strong> All formulas are locked and
                          validated. Data validation prevents entry errors
                        </span>
                      </li>
                      <li className='text-slate-600 flex items-start gap-2'>
                        <span className='text-primary mt-1 font-bold'>•</span>
                        <span>
                          <strong>One-Click Report Generation:</strong> Single button click
                          generates formatted reports with charts and summaries
                        </span>
                      </li>
                      <li className='text-slate-600 flex items-start gap-2'>
                        <span className='text-primary mt-1 font-bold'>•</span>
                        <span>
                          <strong>Automated Distribution:</strong> Reports automatically email to
                          management team with formatted PDF attachments
                        </span>
                      </li>
                    </ul>
                    <p className='text-sm text-slate-600'>
                      <strong>Technologies:</strong> Excel VBA, Access database, Outlook automation
                      | <strong>Timeline:</strong> 4 weeks
                    </p>
                  </div>

                  <div>
                    <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                      The Results
                    </h3>
                    <div className='bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl border border-primary/20 mb-6'>
                      <div className='grid md:grid-cols-2 gap-6'>
                        <div className='text-center md:text-left'>
                          <div className='text-4xl font-bold text-primary mb-2 font-display'>
                            8 hours → 15 min
                          </div>
                          <div className='text-slate-600 text-sm font-medium'>Time Reduction</div>
                        </div>
                        <div className='text-center md:text-left'>
                          <div className='text-4xl font-bold text-primary mb-2 font-display'>
                            98%
                          </div>
                          <div className='text-slate-600 text-sm font-medium'>Time Saved</div>
                        </div>
                        <div className='text-center md:text-left'>
                          <div className='text-4xl font-bold text-primary mb-2 font-display'>0</div>
                          <div className='text-slate-600 text-sm font-medium'>
                            Errors Since Launch
                          </div>
                        </div>
                        <div className='text-center md:text-left'>
                          <div className='text-4xl font-bold text-primary mb-2 font-display'>
                            $15k/year
                          </div>
                          <div className='text-slate-600 text-sm font-medium'>Cost Savings</div>
                        </div>
                      </div>
                    </div>
                    <p className='mb-4'>
                      The reporting process that used to take 8 hours now takes 15 minutes.
                      That&apos;s a 98% time reduction. More importantly: zero errors, faster
                      decisions, and scalable to handle 10x more data.
                    </p>
                    <p className='text-sm text-slate-600'>
                      <strong>ROI:</strong> Project cost $4,500. Annual savings: $15,000. Payback:
                      3.6 months
                    </p>
                  </div>

                  <div className='bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl border-l-4 border-primary mt-8'>
                    <p className='text-slate-700 italic mb-3 text-lg leading-relaxed'>
                      &quot;We went from dreading Friday reports to having them done automatically.
                      Robert built exactly what we needed, and it works perfectly every week. Best
                      investment we&apos;ve made this year.&quot;
                    </p>
                    <p className='text-slate-600 text-sm font-semibold'>
                      — Operations Manager, Manufacturing Company
                    </p>
                  </div>
                </div>
              </article>

              {/* Case Study 2: Finance */}
              <article className='bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300'>
                <div className='mb-8'>
                  <span className='inline-block px-4 py-2 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-4'>
                    Finance & Accounting
                  </span>
                  <h2 className='text-heading-lg md:text-heading-xl font-bold mb-4 font-display text-slate-900'>
                    From 3 Days to 10 Minutes: Accounting Close Automation
                  </h2>
                </div>

                <div className='space-y-8 text-slate-700 leading-relaxed'>
                  <div>
                    <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                      The Problem
                    </h3>
                    <p className='mb-4'>
                      A finance team at a growing company was spending 3 full days every month on
                      the accounting close process. The manual process included collecting data from
                      8 different Excel files and 2 Access databases, manual reconciliation, copying
                      data between spreadsheets with constant formula errors, building financial
                      statements manually, and creating variance reports.
                    </p>
                    <p>
                      The close process was stressful, error-prone, and delayed other financial
                      work. Overtime was common, and mistakes were costly.
                    </p>
                  </div>

                  <div>
                    <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                      The Solution
                    </h3>
                    <p className='mb-4'>
                      I built a comprehensive Excel and Access automation system that handles the
                      entire close process:
                    </p>
                    <ul className='list-none space-y-2 mb-4'>
                      <li className='text-slate-600 flex items-start gap-2'>
                        <span className='text-secondary mt-1 font-bold'>•</span>
                        <span>
                          <strong>Automated Data Collection:</strong> VBA scripts pull data from all
                          8 Excel files and 2 Access databases automatically
                        </span>
                      </li>
                      <li className='text-slate-600 flex items-start gap-2'>
                        <span className='text-secondary mt-1 font-bold'>•</span>
                        <span>
                          <strong>Automated Reconciliation:</strong> System matches transactions,
                          flags discrepancies, and creates reconciliation reports
                        </span>
                      </li>
                      <li className='text-slate-600 flex items-start gap-2'>
                        <span className='text-secondary mt-1 font-bold'>•</span>
                        <span>
                          <strong>Auto-Generated Financial Statements:</strong> Income statement,
                          balance sheet, and cash flow statement generate automatically
                        </span>
                      </li>
                      <li className='text-slate-600 flex items-start gap-2'>
                        <span className='text-secondary mt-1 font-bold'>•</span>
                        <span>
                          <strong>One-Click Close Package:</strong> Single button generates all
                          reports, financial statements, and presentation materials
                        </span>
                      </li>
                    </ul>
                    <p className='text-sm text-slate-600'>
                      <strong>Technologies:</strong> Excel VBA, Access database, SQL Server
                      connection | <strong>Timeline:</strong> 6 weeks
                    </p>
                  </div>

                  <div>
                    <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                      The Results
                    </h3>
                    <div className='bg-gradient-to-br from-secondary/5 to-secondary/10 p-8 rounded-xl border border-secondary/20 mb-6'>
                      <div className='grid md:grid-cols-2 gap-6'>
                        <div className='text-center md:text-left'>
                          <div className='text-4xl font-bold text-secondary mb-2 font-display'>
                            3 days → 10 min
                          </div>
                          <div className='text-slate-600 text-sm font-medium'>
                            Close Time Reduction
                          </div>
                        </div>
                        <div className='text-center md:text-left'>
                          <div className='text-4xl font-bold text-secondary mb-2 font-display'>
                            99.7%
                          </div>
                          <div className='text-slate-600 text-sm font-medium'>Time Saved</div>
                        </div>
                        <div className='text-center md:text-left'>
                          <div className='text-4xl font-bold text-secondary mb-2 font-display'>
                            0
                          </div>
                          <div className='text-slate-600 text-sm font-medium'>
                            Reconciliation Errors
                          </div>
                        </div>
                        <div className='text-center md:text-left'>
                          <div className='text-4xl font-bold text-secondary mb-2 font-display'>
                            $25k/year
                          </div>
                          <div className='text-slate-600 text-sm font-medium'>Cost Savings</div>
                        </div>
                      </div>
                    </div>
                    <p className='mb-4'>
                      The accounting close that used to take 3 days now takes 10 minutes.
                      That&apos;s a 99.7% time reduction. Zero reconciliation errors, faster
                      business decisions, and the team freed up 2.5 days monthly for analysis.
                    </p>
                    <p className='text-sm text-slate-600'>
                      <strong>ROI:</strong> Project cost $7,500. Annual savings: $25,000. Payback:
                      3.6 months
                    </p>
                  </div>

                  <div className='bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl border-l-4 border-secondary mt-8'>
                    <p className='text-slate-700 italic mb-3 text-lg leading-relaxed'>
                      &quot;We went from 3-day closes to 10-minute closes. The automation is
                      flawless, and we haven&apos;t had a single reconciliation error since launch.
                      Robert understood our process and built exactly what we needed.&quot;
                    </p>
                    <p className='text-slate-600 text-sm font-semibold'>
                      — CFO, Financial Services Company
                    </p>
                  </div>
                </div>
              </article>

              {/* Case Study 3: Operations */}
              <article className='bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300'>
                <div className='mb-8'>
                  <span className='inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4'>
                    Operations
                  </span>
                  <h2 className='text-heading-lg md:text-heading-xl font-bold mb-4 font-display text-slate-900'>
                    From 6 Hours to 5 Minutes: Multi-Location Data Consolidation
                  </h2>
                </div>

                <div className='space-y-8 text-slate-700 leading-relaxed'>
                  <div>
                    <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                      The Problem
                    </h3>
                    <p className='mb-4'>
                      A business with 5 locations across 3 states needed to consolidate operational
                      data weekly. Each location emailed Excel files to headquarters every Friday.
                      Headquarters manually opened 5 files, copied data into master spreadsheet,
                      cleaned inconsistent formats, and created consolidated reports.
                    </p>
                    <p>
                      The process took 6 hours every week. Data was often outdated by the time
                      decisions were made. Location managers had to spend time preparing files
                      instead of managing operations.
                    </p>
                  </div>

                  <div>
                    <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                      The Solution
                    </h3>
                    <p className='mb-4'>
                      I built an automated data consolidation system that handles everything:
                    </p>
                    <ul className='list-none space-y-2 mb-4'>
                      <li className='text-slate-600 flex items-start gap-2'>
                        <span className='text-primary mt-1 font-bold'>•</span>
                        <span>
                          <strong>Automated File Collection:</strong> System monitors email folders
                          and automatically processes incoming Excel files from all locations
                        </span>
                      </li>
                      <li className='text-slate-600 flex items-start gap-2'>
                        <span className='text-primary mt-1 font-bold'>•</span>
                        <span>
                          <strong>Smart Data Mapping:</strong> System recognizes different file
                          formats and maps data correctly regardless of column order
                        </span>
                      </li>
                      <li className='text-slate-600 flex items-start gap-2'>
                        <span className='text-primary mt-1 font-bold'>•</span>
                        <span>
                          <strong>Automatic Data Cleaning:</strong> Standardizes naming conventions,
                          formats dates consistently, and validates data quality
                        </span>
                      </li>
                      <li className='text-slate-600 flex items-start gap-2'>
                        <span className='text-primary mt-1 font-bold'>•</span>
                        <span>
                          <strong>Real-Time Consolidation:</strong> Data consolidates automatically
                          as files arrive. No waiting for all files
                        </span>
                      </li>
                    </ul>
                    <p className='text-sm text-slate-600'>
                      <strong>Technologies:</strong> Excel VBA, Access database, Outlook automation,
                      Power Query | <strong>Timeline:</strong> 5 weeks
                    </p>
                  </div>

                  <div>
                    <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                      The Results
                    </h3>
                    <div className='bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl border border-primary/20 mb-6'>
                      <div className='grid md:grid-cols-2 gap-6'>
                        <div className='text-center md:text-left'>
                          <div className='text-4xl font-bold text-primary mb-2 font-display'>
                            6 hours → 5 min
                          </div>
                          <div className='text-slate-600 text-sm font-medium'>
                            Consolidation Time
                          </div>
                        </div>
                        <div className='text-center md:text-left'>
                          <div className='text-4xl font-bold text-primary mb-2 font-display'>
                            98.6%
                          </div>
                          <div className='text-slate-600 text-sm font-medium'>Time Saved</div>
                        </div>
                        <div className='text-center md:text-left'>
                          <div className='text-4xl font-bold text-primary mb-2 font-display'>
                            Real-time
                          </div>
                          <div className='text-slate-600 text-sm font-medium'>
                            Data Availability
                          </div>
                        </div>
                        <div className='text-center md:text-left'>
                          <div className='text-4xl font-bold text-primary mb-2 font-display'>
                            $18k/year
                          </div>
                          <div className='text-slate-600 text-sm font-medium'>Cost Savings</div>
                        </div>
                      </div>
                    </div>
                    <p className='mb-4'>
                      The data consolidation process that used to take 6 hours now takes 5 minutes.
                      That&apos;s a 98.6% time reduction. Real-time visibility, faster decisions,
                      consistent data, and scalable to handle 10+ locations.
                    </p>
                    <p className='text-sm text-slate-600'>
                      <strong>ROI:</strong> Project cost $6,000. Annual savings: $18,000. Payback: 4
                      months
                    </p>
                  </div>

                  <div className='bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl border-l-4 border-primary mt-8'>
                    <p className='text-slate-700 italic mb-3 text-lg leading-relaxed'>
                      &quot;We went from 6-hour weekly consolidations to 5-minute automated
                      processes. The system handles all 5 locations flawlessly, and we get real-time
                      visibility we never had before. Game changer for our operations.&quot;
                    </p>
                    <p className='text-slate-600 text-sm font-semibold'>
                      — Operations Director, Multi-Location Business
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* Right Sidebar - Quick Links & Contact (Sticky) */}
            <div className='lg:col-span-1'>
              <div className='sticky top-24 space-y-6'>
                <div className='bg-white rounded-2xl p-8 shadow-lg border border-slate-200'>
                  <div className='flex items-center gap-3 mb-6'>
                    <div className='w-1 h-8 bg-primary rounded-full'></div>
                    <h3 className='text-heading-md md:text-heading-lg font-bold font-display text-slate-900'>
                      Quick Links
                    </h3>
                  </div>
                  <div className='space-y-4'>
                    <Link
                      to='/excel-automation'
                      className='block group pb-4 border-b border-slate-200 last:border-0 last:pb-0 hover:translate-x-1 transition-all duration-200'
                    >
                      <h4 className='text-base md:text-lg font-bold mb-1 font-display text-slate-900 group-hover:text-primary transition-colors duration-200 leading-tight'>
                        Excel Automation
                      </h4>
                      <p className='text-slate-600 text-sm leading-relaxed'>
                        Automate your Excel processes
                      </p>
                    </Link>
                    <Link
                      to='/access-consulting'
                      className='block group pb-4 border-b border-slate-200 last:border-0 last:pb-0 hover:translate-x-1 transition-all duration-200'
                    >
                      <h4 className='text-base md:text-lg font-bold mb-1 font-display text-slate-900 group-hover:text-primary transition-colors duration-200 leading-tight'>
                        Access Consulting
                      </h4>
                      <p className='text-slate-600 text-sm leading-relaxed'>
                        Fix and optimize your database
                      </p>
                    </Link>
                    <Link
                      to='/contact'
                      className='block group pb-4 border-b border-slate-200 last:border-0 last:pb-0 hover:translate-x-1 transition-all duration-200'
                    >
                      <h4 className='text-base md:text-lg font-bold mb-1 font-display text-slate-900 group-hover:text-primary transition-colors duration-200 leading-tight'>
                        Get Free Consultation
                      </h4>
                      <p className='text-slate-600 text-sm leading-relaxed'>
                        Discuss your project needs
                      </p>
                    </Link>
                  </div>
                </div>

                <div className='bg-white rounded-2xl p-8 shadow-lg border border-slate-200'>
                  <div className='flex items-center gap-3 mb-6'>
                    <div className='w-1 h-8 bg-secondary rounded-full'></div>
                    <h3 className='text-heading-md md:text-heading-lg font-bold font-display text-slate-900'>
                      Contact Info
                    </h3>
                  </div>
                  <div className='space-y-4'>
                    <div>
                      <p className='text-sm font-semibold text-slate-700 mb-2'>Phone</p>
                      <a
                        href='tel:8016163702'
                        className='text-primary hover:text-primary-hover font-bold text-lg transition-colors duration-200'
                      >
                        801-616-3702
                      </a>
                    </div>
                    <div>
                      <p className='text-sm font-semibold text-slate-700 mb-2'>Email</p>
                      <a
                        href='mailto:rob@excelaccessconsultant.com'
                        className='text-primary hover:text-primary-hover font-medium transition-colors duration-200 break-all text-sm'
                      >
                        rob@excelaccessconsultant.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-12 md:py-16 bg-gradient-to-br from-slate-50 to-white'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <h2 className='text-heading-lg md:text-heading-xl font-bold mb-6 font-display text-slate-900'>
            Ready to Get Similar Results?
          </h2>
          <p className='text-lg mb-8 text-slate-700 max-w-7xl mx-auto leading-relaxed'>
            Every business is different, but the results are similar: massive time savings, zero
            errors, and better decision-making. Get a free consultation to see how automation can
            help your business.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4 mb-8'>
            <Link
              to='/contact'
              className='bg-primary hover:bg-primary-hover text-white hover:text-white px-8 py-4 text-base font-medium transition-colors rounded-md'
            >
              Schedule Free Consultation
            </Link>
            <a
              href='tel:8016163702'
              className='bg-white hover:bg-slate-100 text-primary border-2 border-primary px-8 py-4 text-base font-medium transition-colors rounded-md'
            >
              Call 801-616-3702
            </a>
          </div>
          <div className='flex flex-wrap justify-center gap-4 text-sm'>
            <Link
              to='/excel-automation'
              className='text-slate-600 hover:text-primary font-medium transition-colors duration-200'
            >
              Learn more about Excel Automation →
            </Link>
            <span className='text-slate-300'>|</span>
            <Link
              to='/access-consulting'
              className='text-slate-600 hover:text-primary font-medium transition-colors duration-200'
            >
              Learn more about Access Consulting →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CaseStudies;
