import { useState } from 'react';
import { Link } from 'react-router-dom';
import FAQSchema from '../../components/SEO/FAQSchema';
import SEO from '../../components/SEO/SEO';
import '../../styles/global.css';

function DatabaseMigration() {
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
        title='Access Database Migration | Migrate Access to SQL'
        description='Access database migration services. Migrate Access to SQL Server, optimize performance, scale to more users. 20+ years experience. Fixed pricing. Free consultation.'
        keywords='access database migration, migrate access to sql, access to cloud migration, access to sql server, database migration services'
        url='https://excelaccessconsultant.com/database-migration'
        ogTitle='Access Database Migration Services'
      />

      <FAQSchema
        faqs={[
          {
            question: 'When should I migrate from Access to SQL Server?',
            answer:
              'Consider migration when: you have 50+ concurrent users, need better performance, require cloud access, need better security, or want to scale beyond Access limits. I can help you decide if migration is right for you.',
          },
          {
            question: 'Will I lose data during migration?',
            answer:
              'No. I use proven migration processes that preserve all data, relationships, and structure. I test thoroughly before going live. Data loss is extremely rare and I have recovery procedures.',
          },
          {
            question: 'How long does database migration take?',
            answer:
              'Simple databases: 3-4 weeks. Medium complexity: 5-8 weeks. Complex multi-user systems: 8-12 weeks. Timeline includes planning, migration, testing, and training.',
          },
          {
            question: 'Can you migrate Access forms and reports?',
            answer:
              'Yes. I can recreate Access forms in web-based interfaces or keep them in Access connected to SQL Server. Reports can be migrated to SQL Server Reporting Services or kept in Access.',
          },
          {
            question: 'What happens to my existing Access database?',
            answer:
              'Your original Access database remains untouched as backup. I migrate to SQL Server, then we test thoroughly. Once you confirm everything works, you can retire the old Access database.',
          },
        ]}
      />

      {/* Hero Section */}
      <section className='py-8 md:py-12 bg-white border-b border-slate-200'>
        <div className='max-w-7xl mx-auto px-6'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-display text-slate-900'>
            Access Database Migration Services
          </h1>
          <p className='text-lg md:text-xl text-slate-700 mb-8 leading-relaxed'>
            Migrate your Access database to SQL Server for better performance, scalability, and
            cloud access. Preserve all data and functionality. 20+ years of migration experience.
            Fixed pricing. Free consultation.
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

      {/* What I Migrate Section with Real Examples */}
      <section className='py-12 md:py-16 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid lg:grid-cols-3 gap-8 lg:gap-10'>
            {/* Left side - What I Migrate */}
            <div className='lg:col-span-2'>
              <h2 className='text-heading-lg md:text-heading-xl font-bold mb-10 font-display text-slate-900'>
                What I Migrate
              </h2>
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Access to SQL Server
                  </h3>
                  <p className='text-slate-600'>
                    Migrate Access databases to SQL Server. Preserve all tables, relationships, data
                    types, and constraints. Optimize for SQL Server performance.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Access to Cloud (Azure SQL)
                  </h3>
                  <p className='text-slate-600'>
                    Migrate Access databases to Azure SQL Database for cloud access. Enable remote
                    access, automatic backups, and scalable infrastructure.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Data Migration
                  </h3>
                  <p className='text-slate-600'>
                    Migrate all data with zero loss. Preserve data integrity, handle data type
                    conversions, and maintain referential integrity throughout migration.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Table Structure Migration
                  </h3>
                  <p className='text-slate-600'>
                    Convert Access table structures to SQL Server. Optimize indexes, add proper
                    constraints, and improve performance with SQL Server features.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Query Migration
                  </h3>
                  <p className='text-slate-600'>
                    Convert Access queries to SQL Server stored procedures, views, and functions.
                    Optimize for better performance and maintainability.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Form & Report Migration
                  </h3>
                  <p className='text-slate-600'>
                    Recreate Access forms in web interfaces or keep Access front-end connected to
                    SQL Server. Migrate reports to SQL Server Reporting Services.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    VBA Code Migration
                  </h3>
                  <p className='text-slate-600'>
                    Convert Access VBA code to SQL Server stored procedures, triggers, or
                    application code. Preserve business logic and functionality.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Security Migration
                  </h3>
                  <p className='text-slate-600'>
                    Set up SQL Server security, user permissions, and access controls. Migrate
                    Access user accounts and permissions to SQL Server.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Performance Optimization
                  </h3>
                  <p className='text-slate-600'>
                    Optimize migrated database for SQL Server. Add proper indexes, optimize queries,
                    and leverage SQL Server performance features.
                  </p>
                </div>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                    Hybrid Solutions
                  </h3>
                  <p className='text-slate-600'>
                    Keep Access front-end, migrate data to SQL Server. Best of both worlds: familiar
                    Access interface with SQL Server backend performance.
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
                        Manufacturing Company - Production Database
                      </h3>
                      <p className='text-slate-600 text-sm leading-relaxed'>
                        Handles 50+ users simultaneously. 10x faster queries. Cloud access enabled.
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
                        Secure cloud access. Remote team can access database from anywhere.
                        Automatic backups.
                      </p>
                    </Link>
                    <Link
                      to='/case-studies'
                      className='block group pb-5 border-b border-slate-200 last:border-0 last:pb-0 hover:translate-x-1 transition-all duration-200'
                    >
                      <h3 className='text-base md:text-lg font-bold mb-2 font-display text-slate-900 group-hover:text-primary transition-colors duration-200 leading-tight'>
                        Operations - Multi-Location System
                      </h3>
                      <p className='text-slate-600 text-sm leading-relaxed'>
                        20x faster queries. Handles 10x more data. Scales for future growth.
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
                  We discuss your current Access database, migration goals, and I assess if
                  migration is right for you. No obligation.
                </p>
              </div>
            </div>
            <div className='flex gap-6'>
              <div className='text-primary font-bold text-3xl font-mono flex-shrink-0'>2</div>
              <div>
                <h3 className='text-heading-lg font-bold mb-2 font-display text-slate-900'>
                  Migration Plan & Quote (within 24 hours)
                </h3>
                <p className='text-slate-600 leading-relaxed'>
                  I provide a detailed migration plan, timeline, and fixed-price quote. You know
                  exactly what will be migrated and how much it costs.
                </p>
              </div>
            </div>
            <div className='flex gap-6'>
              <div className='text-primary font-bold text-3xl font-mono flex-shrink-0'>3</div>
              <div>
                <h3 className='text-heading-lg font-bold mb-2 font-display text-slate-900'>
                  Migration & Testing (in test environment)
                </h3>
                <p className='text-slate-600 leading-relaxed'>
                  I migrate your database to SQL Server in a test environment. We test thoroughly to
                  ensure everything works correctly before going live.
                </p>
              </div>
            </div>
            <div className='flex gap-6'>
              <div className='text-primary font-bold text-3xl font-mono flex-shrink-0'>4</div>
              <div>
                <h3 className='text-heading-lg font-bold mb-2 font-display text-slate-900'>
                  Training & Go-Live
                </h3>
                <p className='text-slate-600 leading-relaxed'>
                  I provide documentation and training on the new SQL Server database. We go live
                  when you&apos;re ready. Your original Access database remains as backup.
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
                  Need help with the migrated database? I&apos;m available for support,
                  optimization, and new features. We can set up a maintenance plan.
                </p>
              </div>
            </div>
          </div>
          <div className='mt-8 bg-slate-50 p-6 rounded-lg border border-slate-200'>
            <p className='text-slate-700 font-medium mb-2'>
              <strong>Timeline Expectations:</strong>
            </p>
            <ul className='text-slate-600 space-y-1 list-disc list-inside'>
              <li>Simple databases: 3-4 weeks</li>
              <li>Medium complexity: 5-8 weeks</li>
              <li>Complex systems: 8-12 weeks</li>
            </ul>
            <p className='text-slate-600 mt-4'>
              <strong>What You Provide:</strong> Current Access database, access to SQL Server (or I
              can set up), requirements for new system
            </p>
            <p className='text-slate-600 mt-2'>
              <strong>What You Get:</strong> Migrated SQL Server database, documentation, training,
              100% ownership
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
              <div className='text-3xl font-bold text-primary mb-2'>$3,000-$5,000</div>
              <p className='text-slate-600 mb-4 text-sm'>
                Small databases, basic migration, 3-4 weeks
              </p>
              <ul className='text-slate-600 space-y-2 text-sm'>
                <li>✓ Small database migration</li>
                <li>✓ Basic table migration</li>
                <li>✓ Data migration</li>
                <li>✓ Documentation included</li>
              </ul>
            </div>
            <div className='bg-white p-6 rounded-lg border-2 border-primary'>
              <h3 className='text-heading-lg font-bold mb-4 font-display text-slate-900'>
                Advanced Projects
              </h3>
              <div className='text-3xl font-bold text-primary mb-2'>$5,000-$12,000</div>
              <p className='text-slate-600 mb-4 text-sm'>
                Medium databases, form migration, 5-8 weeks
              </p>
              <ul className='text-slate-600 space-y-2 text-sm'>
                <li>✓ Medium database migration</li>
                <li>✓ Query migration</li>
                <li>✓ Form/report migration</li>
                <li>✓ Performance optimization</li>
                <li>✓ Full documentation</li>
              </ul>
            </div>
            <div className='bg-white p-6 rounded-lg border-2 border-slate-200'>
              <h3 className='text-heading-lg font-bold mb-4 font-display text-slate-900'>
                Enterprise Projects
              </h3>
              <div className='text-3xl font-bold text-primary mb-2'>$12,000+</div>
              <p className='text-slate-600 mb-4 text-sm'>
                Large systems, full migration, 8-12 weeks
              </p>
              <ul className='text-slate-600 space-y-2 text-sm'>
                <li>✓ Large database migration</li>
                <li>✓ Complete system migration</li>
                <li>✓ Cloud migration (Azure)</li>
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
                  When should I migrate from Access to SQL Server?
                </h3>
                <span className='text-primary text-2xl font-bold flex-shrink-0'>
                  {openFaqIndex === 0 ? '−' : '+'}
                </span>
              </button>
              {openFaqIndex === 0 && (
                <div className='px-6 pb-6'>
                  <p className='text-slate-600'>
                    Consider migration when: you have 50+ concurrent users, need better performance,
                    require cloud access, need better security, or want to scale beyond Access
                    limits. I can help you decide if migration is right for you.
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
                  Will I lose data during migration?
                </h3>
                <span className='text-primary text-2xl font-bold flex-shrink-0'>
                  {openFaqIndex === 1 ? '−' : '+'}
                </span>
              </button>
              {openFaqIndex === 1 && (
                <div className='px-6 pb-6'>
                  <p className='text-slate-600'>
                    No. I use proven migration processes that preserve all data, relationships, and
                    structure. I test thoroughly before going live. Data loss is extremely rare and
                    I have recovery procedures.
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
                  How long does database migration take?
                </h3>
                <span className='text-primary text-2xl font-bold flex-shrink-0'>
                  {openFaqIndex === 2 ? '−' : '+'}
                </span>
              </button>
              {openFaqIndex === 2 && (
                <div className='px-6 pb-6'>
                  <p className='text-slate-600'>
                    Simple databases: 3-4 weeks. Medium complexity: 5-8 weeks. Complex multi-user
                    systems: 8-12 weeks. Timeline includes planning, migration, testing, and
                    training.
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
                  Can you migrate Access forms and reports?
                </h3>
                <span className='text-primary text-2xl font-bold flex-shrink-0'>
                  {openFaqIndex === 3 ? '−' : '+'}
                </span>
              </button>
              {openFaqIndex === 3 && (
                <div className='px-6 pb-6'>
                  <p className='text-slate-600'>
                    Yes. I can recreate Access forms in web-based interfaces or keep them in Access
                    connected to SQL Server. Reports can be migrated to SQL Server Reporting
                    Services or kept in Access.
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
                  What happens to my existing Access database?
                </h3>
                <span className='text-primary text-2xl font-bold flex-shrink-0'>
                  {openFaqIndex === 4 ? '−' : '+'}
                </span>
              </button>
              {openFaqIndex === 4 && (
                <div className='px-6 pb-6'>
                  <p className='text-slate-600'>
                    Your original Access database remains untouched as backup. I migrate to SQL
                    Server, then we test thoroughly. Once you confirm everything works, you can
                    retire the old Access database.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className='mt-8 text-center'>
            <Link
              to='/faq'
              className='text-primary hover:text-primary-hover font-semibold inline-flex items-center gap-2 transition-colors duration-micro'
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
              Ready to Migrate Your Access Database?
            </h2>
            <p className='text-lg mb-8 text-slate-700 max-w-7xl mx-auto leading-relaxed'>
              Scale beyond Access limits. Get better performance and cloud access. Get a free
              consultation to see if migration is right for you.
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

export default DatabaseMigration;
