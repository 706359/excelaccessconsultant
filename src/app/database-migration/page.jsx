'use client';

import Link from 'next/link';
import { useState } from 'react';
import FAQSchema from '../../components/SEO/FAQSchema';
import SEO from '../../components/SEO/SEO';
import Button from '../../components/ui/Button/Button';

export default function DatabaseMigrationPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

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
            <Button variant='primary' size='large' as={Link} href='/contact'>
              Get Free Consultation
            </Button>
            <Button variant='secondary' size='large' as='a' href='tel:8016163702'>
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
                What I Migrate
              </h2>
              <div className='grid md:grid-cols-2 gap-6'>
                {[
                  {
                    title: 'Access to SQL Server',
                    desc: 'Migrate Access databases to SQL Server. Preserve all tables, relationships, data types, and constraints. Optimize for SQL Server performance.',
                  },
                  {
                    title: 'Access to Cloud (Azure SQL)',
                    desc: 'Migrate Access databases to Azure SQL Database for cloud access. Enable remote access, automatic backups, and scalable infrastructure.',
                  },
                  {
                    title: 'Data Migration',
                    desc: 'Migrate all data with zero loss. Preserve data integrity, handle data type conversions, and maintain referential integrity throughout migration.',
                  },
                  {
                    title: 'Table Structure Migration',
                    desc: 'Convert Access table structures to SQL Server. Optimize indexes, add proper constraints, and improve performance with SQL Server features.',
                  },
                  {
                    title: 'Query Migration',
                    desc: 'Convert Access queries to SQL Server stored procedures, views, and functions. Optimize for better performance and maintainability.',
                  },
                  {
                    title: 'Form & Report Migration',
                    desc: 'Recreate Access forms in web interfaces or keep Access front-end connected to SQL Server. Migrate reports to SQL Server Reporting Services.',
                  },
                  {
                    title: 'VBA Code Migration',
                    desc: 'Convert Access VBA code to SQL Server stored procedures, triggers, or application code. Preserve business logic and functionality.',
                  },
                  {
                    title: 'Security Migration',
                    desc: 'Set up SQL Server security, user permissions, and access controls. Migrate Access user accounts and permissions to SQL Server.',
                  },
                  {
                    title: 'Performance Optimization',
                    desc: 'Optimize migrated database for SQL Server. Add proper indexes, optimize queries, and leverage SQL Server performance features.',
                  },
                  {
                    title: 'Hybrid Solutions',
                    desc: 'Keep Access front-end, migrate data to SQL Server. Best of both worlds: familiar Access interface with SQL Server backend performance.',
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
                      href='/case-studies'
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
                      href='/case-studies'
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
                      href='/case-studies'
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
                text: 'We discuss your current Access database, migration goals, and I assess if migration is right for you. No obligation.',
              },
              {
                num: '2',
                title: 'Migration Plan & Quote (within 24 hours)',
                text: 'I provide a detailed migration plan, timeline, and fixed-price quote. You know exactly what will be migrated and how much it costs.',
              },
              {
                num: '3',
                title: 'Migration & Testing (in test environment)',
                text: 'I migrate your database to SQL Server in a test environment. We test thoroughly to ensure everything works correctly before going live.',
              },
              {
                num: '4',
                title: 'Training & Go-Live',
                text: "I provide documentation and training on the new SQL Server database. We go live when you're ready. Your original Access database remains as backup.",
              },
              {
                num: '5',
                title: 'Ongoing Support (optional)',
                text: "Need help with the migrated database? I'm available for support, optimization, and new features. We can set up a maintenance plan.",
              },
            ].map((step) => (
              <div key={step.num} className='flex gap-6'>
                <div className='text-primary font-bold text-3xl font-mono flex-shrink-0'>
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

      <section className='py-8 md:py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-heading-lg md:text-heading-xl font-bold mb-8 font-display text-slate-900'>
            Common Questions
          </h2>
          <div className='space-y-4'>
            {[
              {
                q: 'When should I migrate from Access to SQL Server?',
                a: 'Consider migration when: you have 50+ concurrent users, need better performance, require cloud access, need better security, or want to scale beyond Access limits. I can help you decide if migration is right for you.',
              },
              {
                q: 'Will I lose data during migration?',
                a: 'No. I use proven migration processes that preserve all data, relationships, and structure. I test thoroughly before going live. Data loss is extremely rare and I have recovery procedures.',
              },
              {
                q: 'How long does database migration take?',
                a: 'Simple databases: 3-4 weeks. Medium complexity: 5-8 weeks. Complex multi-user systems: 8-12 weeks. Timeline includes planning, migration, testing, and training.',
              },
              {
                q: 'Can you migrate Access forms and reports?',
                a: 'Yes. I can recreate Access forms in web-based interfaces or keep them in Access connected to SQL Server. Reports can be migrated to SQL Server Reporting Services or kept in Access.',
              },
              {
                q: 'What happens to my existing Access database?',
                a: 'Your original Access database remains untouched as backup. I migrate to SQL Server, then we test thoroughly. Once you confirm everything works, you can retire the old Access database.',
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
                  <span className='text-primary text-2xl font-bold flex-shrink-0'>
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
              className='text-primary hover:text-primary-hover font-semibold inline-flex items-center gap-2 transition-colors duration-micro'
            >
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

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
              <Button variant='primary' size='large' as={Link} href='/contact'>
                Schedule Free Consultation
              </Button>
              <Button variant='secondary' size='large' as='a' href='tel:8016163702'>
                Call 801-616-3702
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
