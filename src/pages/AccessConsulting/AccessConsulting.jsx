import { useState } from 'react';
import { Link } from 'react-router-dom';
import FAQSchema from '../../components/SEO/FAQSchema';
import SEO from '../../components/SEO/SEO';
import '../../styles/global.css';

function AccessConsulting() {
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
        title='Access Database Consultant | MS Access Expert'
        description='Access database consultant. Build stable multi-user databases, fix crashing systems, optimize performance. 20+ years experience. Fixed pricing. Free consultation.'
        keywords='access database consultant, ms access expert, access database crashing fix, access database repair, access database development, ms access consultant'
        url='https://excelaccessconsultant.com/access-consulting'
        ogTitle='Access Database Consultant Services'
      />

      <FAQSchema
        faqs={[
          {
            question: 'Why does my Access database keep crashing?',
            answer:
              'Common causes include: too many users accessing simultaneously without proper locking, corrupted data, inefficient queries, missing indexes, or database bloat. I can diagnose and fix these issues.',
          },
          {
            question: 'How many users can Access handle?',
            answer:
              'With proper design, Access can handle 20-50 concurrent users reliably. Beyond that, consider migrating to SQL Server. I can optimize your database for maximum users or help with migration.',
          },
          {
            question: 'Can you fix a corrupted Access database?',
            answer:
              'Yes, in most cases. I can repair corrupted databases, recover lost data, and rebuild damaged structures. Prevention is better though—I also optimize databases to prevent future corruption.',
          },
          {
            question: 'How long does Access database development take?',
            answer:
              'Simple databases: 2-3 weeks. Medium complexity: 4-6 weeks. Complex multi-user systems: 6-10 weeks. I provide a timeline after our free consultation based on your specific needs.',
          },
          {
            question: 'Do you work with existing Access databases?',
            answer:
              'Yes. Most of my work is fixing, optimizing, or enhancing existing Access databases. I rarely start from scratch unless you want a complete rebuild.',
          },
        ]}
      />

      {/* Hero Section */}
      <section className='py-8 md:py-12 bg-white border-b border-slate-200'>
        <div className='max-w-7xl mx-auto px-6'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-display text-slate-900'>
            Access Database Consulting Services
          </h1>
          <p className='text-lg md:text-xl text-slate-700 mb-8 leading-relaxed'>
            Build stable, multi-user Access databases that don&apos;t crash. Fix corrupted
            databases, optimize performance, and create systems your team will actually use. 20+
            years of experience. 200+ database projects. Fixed pricing. Free consultation.
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
              className='bg-white hover:bg-slate-50 text-primary border-2 border-primary hover:border-primary-hover px-8 py-4 text-base font-medium transition-colors rounded-md text-center'
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
                    Multi-User Database Systems
                  </h3>
                  <p className='text-slate-600'>
                    Access databases that handle 10-50 concurrent users without crashes. Proper
                    locking, split database architecture, and optimized queries.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Custom Forms & Interfaces
                  </h3>
                  <p className='text-slate-600'>
                    User-friendly forms with validation, dropdowns, and navigation. Your team can
                    enter and manage data without training manuals.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Advanced Queries & Reports
                  </h3>
                  <p className='text-slate-600'>
                    Complex queries that pull exactly the data you need. Professional reports with
                    formatting, grouping, and calculations.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Database Repair & Recovery
                  </h3>
                  <p className='text-slate-600'>
                    Fix corrupted databases, recover lost data, rebuild damaged structures. Get your
                    database working again without losing information.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Performance Optimization
                  </h3>
                  <p className='text-slate-600'>
                    Speed up slow databases. Add indexes, optimize queries, compact and repair
                    regularly. Turn a 5-minute query into a 5-second query.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Data Validation & Rules
                  </h3>
                  <p className='text-slate-600'>
                    Enforce business rules at the database level. Prevent invalid data entry, ensure
                    data consistency, and maintain data integrity.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Integration with Excel & SQL
                  </h3>
                  <p className='text-slate-600'>
                    Connect Access to Excel files, SQL Server databases, and other data sources.
                    Import/export data automatically.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Security & User Management
                  </h3>
                  <p className='text-slate-600'>
                    Set up user permissions, password protection, and access controls. Ensure only
                    authorized users can view or modify sensitive data.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Automation & Macros
                  </h3>
                  <p className='text-slate-600'>
                    Automate repetitive tasks with VBA macros. Run processes on schedule, send
                    automated emails, and trigger actions based on events.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Database Migration
                  </h3>
                  <p className='text-slate-600'>
                    Migrate Access databases to SQL Server when you outgrow Access. Preserve all
                    data, relationships, and functionality.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Backup & Maintenance Systems
                  </h3>
                  <p className='text-slate-600'>
                    Set up automated backups, compact and repair schedules, and maintenance
                    routines. Keep your database healthy and prevent data loss.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Custom Business Applications
                  </h3>
                  <p className='text-slate-600'>
                    Complete business applications built in Access: inventory management, customer
                    databases, project tracking, and more.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Real Examples */}
            <div className='lg:col-span-1'>
              <div className='sticky top-28'>
                <div className='bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-200'>
                  <div className='flex items-center gap-3 mb-5'>
                    <div className='w-1 h-8 bg-primary rounded-full'></div>
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
                      <h3 className='text-base md:text-lg font-bold mb-2 font-display text-slate-900 group-hover:text-primary transition-colors duration-200 leading-tight'>
                        Manufacturing Company - Inventory Database
                      </h3>
                      <p className='text-slate-600 text-sm leading-relaxed'>
                        Zero crashes in 8 months. All 15 users can work simultaneously. Saves 10
                        hours/week.
                      </p>
                    </Link>
                    <Link
                      to='/case-studies'
                      className='block group pb-5 border-b border-slate-200 last:border-0 last:pb-0 hover:translate-x-1 transition-all duration-200'
                    >
                      <h3 className='text-base md:text-lg font-bold mb-2 font-display text-slate-900 group-hover:text-primary transition-colors duration-200 leading-tight'>
                        Finance Team - Client Database
                      </h3>
                      <p className='text-slate-600 text-sm leading-relaxed'>
                        Reports load in 5 seconds. Database performance improved 60x.
                      </p>
                    </Link>
                    <Link
                      to='/case-studies'
                      className='block group pb-5 border-b border-slate-200 last:border-0 last:pb-0 hover:translate-x-1 transition-all duration-200'
                    >
                      <h3 className='text-base md:text-lg font-bold mb-2 font-display text-slate-900 group-hover:text-primary transition-colors duration-200 leading-tight'>
                        Operations - Project Tracking System
                      </h3>
                      <p className='text-slate-600 text-sm leading-relaxed'>
                        Complete project tracking system. Team productivity increased 40%.
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
              <div className='text-primary font-bold text-3xl font-mono flex-shrink-0'>1</div>
              <div>
                <h3 className='text-heading-lg font-bold mb-2 font-display text-slate-900'>
                  Free Consultation (15-30 minutes)
                </h3>
                <p className='text-slate-600 leading-relaxed'>
                  We discuss your current database (or needs), identify issues or requirements, and
                  I provide an initial assessment. No obligation.
                </p>
              </div>
            </div>
            <div className='flex gap-6'>
              <div className='text-primary font-bold text-3xl font-mono flex-shrink-0'>2</div>
              <div>
                <h3 className='text-heading-lg font-bold mb-2 font-display text-slate-900'>
                  Fixed-Price Quote (within 24 hours)
                </h3>
                <p className='text-slate-600 leading-relaxed'>
                  I provide a detailed quote with timeline, deliverables, and fixed price. You know
                  exactly what you&apos;re getting and how much it costs.
                </p>
              </div>
            </div>
            <div className='flex gap-6'>
              <div className='text-primary font-bold text-3xl font-mono flex-shrink-0'>3</div>
              <div>
                <h3 className='text-heading-lg font-bold mb-2 font-display text-slate-900'>
                  Build & Test (in sandbox)
                </h3>
                <p className='text-slate-600 leading-relaxed'>
                  I build or fix the database in a test environment. You can review and test before
                  it goes live. I make adjustments based on your feedback.
                </p>
              </div>
            </div>
            <div className='flex gap-6'>
              <div className='text-primary font-bold text-3xl font-mono flex-shrink-0'>4</div>
              <div>
                <h3 className='text-heading-lg font-bold mb-2 font-display text-slate-900'>
                  Training & Delivery
                </h3>
                <p className='text-slate-600 leading-relaxed'>
                  I provide documentation and hands-on training for your team. You own 100% of the
                  database. No licenses, no recurring fees.
                </p>
              </div>
            </div>
            <div className='flex gap-6'>
              <div className='text-primary font-bold text-3xl font-mono flex-shrink-0'>5</div>
              <div>
                <h3 className='text-heading-lg font-bold mb-2 font-display text-slate-900'>
                  Ongoing Support (optional)
                </h3>
                <p className='text-slate-600 leading-relaxed'>
                  Need updates, fixes, or new features? I&apos;m available for support. We can set
                  up a maintenance plan or handle requests as they come.
                </p>
              </div>
            </div>
          </div>
          <div className='mt-8 bg-slate-50 p-6 rounded-lg border border-slate-200'>
            <p className='text-slate-700 font-medium mb-2'>
              <strong>Timeline Expectations:</strong>
            </p>
            <ul className='text-slate-600 space-y-1 list-disc list-inside'>
              <li>Simple databases: 2-3 weeks</li>
              <li>Medium complexity: 4-6 weeks</li>
              <li>Complex multi-user systems: 6-10 weeks</li>
            </ul>
            <p className='text-slate-600 mt-4'>
              <strong>What You Provide:</strong> Current database (if fixing), requirements, sample
              data, access to systems (if needed)
            </p>
            <p className='text-slate-600 mt-2'>
              <strong>What You Get:</strong> Working database, documentation, training, 100%
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
              <div className='text-3xl font-bold text-primary mb-2'>$1,500-$3,000</div>
              <p className='text-slate-600 mb-4 text-sm'>Basic database, single-user, 2-3 weeks</p>
              <ul className='text-slate-600 space-y-2 text-sm'>
                <li>✓ Simple database design</li>
                <li>✓ Basic forms and reports</li>
                <li>✓ Single-user system</li>
                <li>✓ Documentation included</li>
              </ul>
            </div>
            <div className='bg-white p-6 rounded-lg border-2 border-primary'>
              <h3 className='text-heading-lg font-bold mb-4 font-display text-slate-900'>
                Advanced Projects
              </h3>
              <div className='text-3xl font-bold text-primary mb-2'>$3,000-$8,000</div>
              <p className='text-slate-600 mb-4 text-sm'>
                Multi-user systems, complex logic, 4-6 weeks
              </p>
              <ul className='text-slate-600 space-y-2 text-sm'>
                <li>✓ Multi-user database</li>
                <li>✓ Complex forms and queries</li>
                <li>✓ Advanced reporting</li>
                <li>✓ Performance optimization</li>
                <li>✓ Full documentation</li>
              </ul>
            </div>
            <div className='bg-white p-6 rounded-lg border-2 border-slate-200'>
              <h3 className='text-heading-lg font-bold mb-4 font-display text-slate-900'>
                Enterprise Projects
              </h3>
              <div className='text-3xl font-bold text-primary mb-2'>$8,000+</div>
              <p className='text-slate-600 mb-4 text-sm'>
                Large systems, SQL migration, 6-10 weeks
              </p>
              <ul className='text-slate-600 space-y-2 text-sm'>
                <li>✓ Large multi-user systems</li>
                <li>✓ SQL Server migration</li>
                <li>✓ System integration</li>
                <li>✓ Comprehensive training</li>
                <li>✓ Extended support</li>
              </ul>
            </div>
          </div>
          <p className='text-center text-slate-600 mt-8'>
            <strong>All projects include:</strong> Documentation, training, 100% database ownership,
            no recurring fees
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
                  Why does my Access database keep crashing?
                </h3>
                <span className='text-primary text-2xl font-bold flex-shrink-0'>
                  {openFaqIndex === 0 ? '−' : '+'}
                </span>
              </button>
              {openFaqIndex === 0 && (
                <div className='px-6 pb-6'>
                  <p className='text-slate-600'>
                    Common causes include: too many users accessing simultaneously without proper
                    locking, corrupted data, inefficient queries, missing indexes, or database
                    bloat. I can diagnose and fix these issues.
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
                  How many users can Access handle?
                </h3>
                <span className='text-primary text-2xl font-bold flex-shrink-0'>
                  {openFaqIndex === 1 ? '−' : '+'}
                </span>
              </button>
              {openFaqIndex === 1 && (
                <div className='px-6 pb-6'>
                  <p className='text-slate-600'>
                    With proper design, Access can handle 20-50 concurrent users reliably. Beyond
                    that, consider migrating to SQL Server. I can optimize your database for maximum
                    users or help with migration.
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
                  Can you fix a corrupted Access database?
                </h3>
                <span className='text-primary text-2xl font-bold flex-shrink-0'>
                  {openFaqIndex === 2 ? '−' : '+'}
                </span>
              </button>
              {openFaqIndex === 2 && (
                <div className='px-6 pb-6'>
                  <p className='text-slate-600'>
                    Yes, in most cases. I can repair corrupted databases, recover lost data, and
                    rebuild damaged structures. Prevention is better though—I also optimize
                    databases to prevent future corruption.
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
                  How long does Access database development take?
                </h3>
                <span className='text-primary text-2xl font-bold flex-shrink-0'>
                  {openFaqIndex === 3 ? '−' : '+'}
                </span>
              </button>
              {openFaqIndex === 3 && (
                <div className='px-6 pb-6'>
                  <p className='text-slate-600'>
                    Simple databases: 2-3 weeks. Medium complexity: 4-6 weeks. Complex multi-user
                    systems: 6-10 weeks. I provide a timeline after our free consultation based on
                    your specific needs.
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
                  Do you work with existing Access databases?
                </h3>
                <span className='text-primary text-2xl font-bold flex-shrink-0'>
                  {openFaqIndex === 4 ? '−' : '+'}
                </span>
              </button>
              {openFaqIndex === 4 && (
                <div className='px-6 pb-6'>
                  <p className='text-slate-600'>
                    Yes. Most of my work is fixing, optimizing, or enhancing existing Access
                    databases. I rarely start from scratch unless you want a complete rebuild.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className='mt-8 text-center'>
            <Link
              to='/faq'
              className='text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2 transition-colors duration-micro'
            >
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        id='contact'
        className='py-8 md:py-12 bg-slate-50 text-slate-900 relative overflow-hidden'
      >
        <div className='relative z-10'>
          <div className='max-w-7xl mx-auto px-6 text-center'>
            <h2 className='text-heading-lg md:text-heading-xl font-bold mb-6 font-display text-slate-900'>
              Ready to Fix or Build Your Access Database?
            </h2>
            <p className='text-lg mb-8 text-slate-700 max-w-7xl mx-auto leading-relaxed'>
              Stop dealing with crashes and slow performance. Get a free consultation and see how I
              can fix or build your Access database.
            </p>
            <div className='flex flex-col sm:flex-row justify-center gap-4'>
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default AccessConsulting;
