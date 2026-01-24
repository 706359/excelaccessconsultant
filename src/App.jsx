import { useEffect, useState } from 'react';
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from 'react-router-dom';
import Button from './components/ui/Button/Button';
import Layout from './components/Layout/Layout';
import FAQSchema from './components/SEO/FAQSchema';
import ReviewSchema from './components/SEO/ReviewSchema';
import SEO from './components/SEO/SEO';
import About from './pages/About/About';
import AccessConsulting from './pages/AccessConsulting/AccessConsulting';
import Blog from './pages/Blog/Blog';
import TenSignsYouNeedExcelAutomation from './pages/Blog/Posts/10SignsYouNeedExcelAutomation';
import AccessVsSQLServer from './pages/Blog/Posts/AccessVsSQLServer';
import CommonExcelVBAMistakes from './pages/Blog/Posts/CommonExcelVBAMistakes';
import ExcelAutomationCost from './pages/Blog/Posts/ExcelAutomationCost';
import ExcelReportingAutomation from './pages/Blog/Posts/ExcelReportingAutomation';
import FinancialModelingBestPractices from './pages/Blog/Posts/FinancialModelingBestPractices';
import HowToSpeedUpSlowExcelSpreadsheets from './pages/Blog/Posts/HowToSpeedUpSlowExcelSpreadsheets';
import WhyYourAccessDatabaseKeepsCrashing from './pages/Blog/Posts/WhyYourAccessDatabaseKeepsCrashing';
import CaseStudies from './pages/CaseStudies/CaseStudies';
import Contact from './pages/Contact/Contact';
import DatabaseMigration from './pages/DatabaseMigration/DatabaseMigration';
import ExcelAutomation from './pages/ExcelAutomation/ExcelAutomation';
import FAQ from './pages/FAQ/FAQ';
import FinancialModeling from './pages/FinancialModeling/FinancialModeling';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import ThankYou from './pages/ThankYou/ThankYou';
import VBADevelopment from './pages/VBADevelopment/VBADevelopment';
import './styles/global.css';

// Safe Google Analytics helper function
const safeGtag = (...args) => {
  try {
    if (typeof window !== 'undefined' && window.gtag && typeof window.gtag === 'function') {
      window.gtag(...args);
    }
  } catch (error) {
    // Silently fail - analytics errors should not break the site
    console.debug('Google Analytics error (blocked or failed):', error);
  }
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/thank-you' element={<ThankYou />} />
          <Route path='/excel-automation' element={<ExcelAutomation />} />
          <Route path='/access-consulting' element={<AccessConsulting />} />
          <Route path='/financial-modeling' element={<FinancialModeling />} />
          <Route path='/database-migration' element={<DatabaseMigration />} />
          <Route path='/vba-development' element={<VBADevelopment />} />
          <Route path='/case-studies' element={<CaseStudies />} />
          <Route path='/blog' element={<Blog />} />
          <Route
            path='/blog/10-signs-you-need-excel-automation'
            element={<TenSignsYouNeedExcelAutomation />}
          />
          <Route
            path='/blog/why-your-access-database-keeps-crashing'
            element={<WhyYourAccessDatabaseKeepsCrashing />}
          />
          <Route
            path='/blog/excel-automation-cost-what-to-expect'
            element={<ExcelAutomationCost />}
          />
          <Route
            path='/blog/how-to-speed-up-slow-excel-spreadsheets'
            element={<HowToSpeedUpSlowExcelSpreadsheets />}
          />
          <Route
            path='/blog/access-vs-sql-server-when-to-migrate'
            element={<AccessVsSQLServer />}
          />
          <Route
            path='/blog/common-excel-vba-mistakes-and-how-to-fix-them'
            element={<CommonExcelVBAMistakes />}
          />
          <Route
            path='/blog/financial-modeling-best-practices'
            element={<FinancialModelingBestPractices />}
          />
          <Route
            path='/blog/excel-reporting-automation-complete-guide'
            element={<ExcelReportingAutomation />}
          />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

function HomePage() {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [openCaseStudyIndex, setOpenCaseStudyIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      setIsMobileMenuOpen(false); // Close mobile menu when navigating
      const headerOffset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      // Ensure we scroll to the top of the section
      window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' });
    }
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const toggleCaseStudy = (index) => {
    setOpenCaseStudyIndex(openCaseStudyIndex === index ? null : index);
  };

  // Handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1); // Remove the # symbol
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    }
  }, []);

  return (
    <>
      <SEO
        title='Excel VBA Consultant | Access Database Expert'
        description='Excel VBA & Access database consultant. 20+ years. Fix broken spreadsheets, build stable databases, automate tasks. Nationwide service. Free consultation.'
        keywords='excel vba consultant, access database consultant, Excel consulting, Access consulting, Excel automation, VBA programming, MS Access database, Excel expert, Access expert, database repair, spreadsheet automation, Excel macros, Access database development, Excel VBA consultant Utah, Access database consultant Springville'
        url='https://excelaccessconsultant.com/'
        ogTitle='Excel VBA Consultant & Access Database Consultant | ExcelAccessConsultant'
      />

      <FAQSchema
        faqs={[
          {
            question: 'Who do you work with?',
            answer:
              'Companies that use Excel and Access every day to run their business. If your spreadsheets are critical to operations, I can help.',
          },
          {
            question: 'Why hire a solo consultant instead of an agency?',
            answer:
              'Agencies hand your project to junior developers. I do the work myself. You get 20 years of experience, not someone learning on your dime.',
          },
          {
            question: 'Do you work with existing systems?',
            answer:
              'Yes. Most of what I do is fixing or improving stuff that already exists. I rarely start from scratch unless you want me to.',
          },
          {
            question: 'How long do projects take?',
            answer:
              'Depends on what you need. Simple automations? A few days to a week. Big database projects? Usually 4 to 8 weeks. I&apos;ll give you a timeline when we talk.',
          },
          {
            question: 'Do you provide documentation?',
            answer:
              "Yes. I write documentation that explains how things work. You shouldn't need me to explain it every time you use it.",
          },
          {
            question: 'Can you help with urgent issues?',
            answer:
              'If I&apos;m available, yes. I&apos;ve done plenty of emergency fixes. Call me and we&apos;ll figure it out.',
          },
          {
            question: 'Do you work remotely?',
            answer:
              "Yes. I work remotely. We'll use screen sharing, secure file transfer, whatever works for you. I've been doing remote work long before it was trendy.",
          },
        ]}
      />

      <ReviewSchema
        reviews={[
          {
            author: 'Manufacturing Company',
            rating: '5',
            text: "Robert fixed our Access database that was crashing multiple times a day. Zero crashes in 8 months. As an Access database consultant, he really knows what he's doing.",
          },
          {
            author: 'Construction Firm',
            rating: '5',
            text: "The Excel VBA automation he built saves us 6 hours every week. What used to take all Friday afternoon now takes 30 seconds. Best investment we've made.",
          },
          {
            author: 'Financial Services',
            rating: '5',
            text: "He connected our Excel to SQL database and eliminated all manual data entry. Saves us 500 hours a year. As an Excel VBA consultant, he's the real deal.",
          },
        ]}
      />

      <div className='bg-base min-h-screen text-slate-800 font-sans selection:bg-primary selection:text-white'>
        {/* Hero Section - Asymmetric Split: 55% content / 45% visual */}
        <section
          id='home'
          className='relative w-full min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden bg-slate-50'
        >
          {/* Pattern Overlay */}
          <div
            className='absolute inset-0 opacity-10'
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          ></div>

          <div className='relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8'>
            <div className='grid md:grid-cols-[55%_45%] gap-6 md:gap-8 items-center py-8 md:py-12'>
              {/* Content - 55% */}
              <div className='text-slate-900'>
                <div className='inline-block mb-6 px-3 py-1 bg-slate-100 rounded-full text-xs md:text-sm font-semibold text-slate-700 border border-slate-200'>
                  200+ Projects Since 2010
                </div>

                <h1 className='text-display-lg md:text-display-xl lg:text-display-2xl font-extrabold mb-6 text-slate-900 max-w-[600px] leading-tight'>
                  Turn Days of Manual Excel Work Into Minutes
                </h1>

                <p className='text-lg md:text-xl text-slate-700 max-w-[500px] mb-8 leading-relaxed'>
                  I automate repetitive Excel and Access tasks that waste your team's time—data
                  consolidation, reporting, calculations, and more. Serving businesses nationwide
                  for 15+ years.
                </p>

                {/* CTA Buttons - 16px gap */}
                <div className='flex flex-col sm:flex-row gap-4 mb-6'>
                  <a
                    href='#calculator'
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('calculator');
                    }}
                    className='bg-primary hover:bg-primary-hover text-white px-8 py-4 text-base font-semibold transition-all duration-standard rounded-lg shadow-lg text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                  >
                    Calculate Your Savings
                  </a>
                  <a
                    href='tel:8016163702'
                    className='bg-white hover:bg-slate-100 text-primary border-2 border-primary px-8 py-4 text-base font-semibold transition-all duration-standard rounded-lg text-center flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                  >
                    <svg width='20' height='20' viewBox='0 0 20 20' fill='currentColor'>
                      <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                    </svg>
                    <span>Call 801-616-3702</span>
                  </a>
                </div>

                {/* Trust Line */}
                <p className='text-slate-600 text-sm md:text-base'>
                  Free 45-minute consultation. No sales pitch.
                </p>
              </div>

              {/* Visual - 45% - High-quality image with subtle parallax */}
              <div className='relative hidden md:block'>
                <div className='relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-complex'>
                  <img
                    src='/hero.jpeg'
                    alt='Excel and Access Consulting'
                    className='w-full h-[400px] object-cover'
                    loading='eager'
                    fetchpriority='high'
                    style={{
                      transform: 'translateZ(0)',
                      willChange: 'transform',
                    }}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
                </div>
                {/* Floating Stats Cards */}
                <div className='absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 transform hover:scale-105 transition-transform duration-standard'>
                  <div className='text-2xl font-bold text-primary'>500+</div>
                  <div className='text-sm text-slate-600'>Projects Delivered</div>
                </div>
                <div className='absolute -top-6 -right-6 bg-white rounded-lg shadow-xl p-4 transform hover:scale-105 transition-transform duration-standard'>
                  <div className='text-2xl font-bold text-secondary'>20+</div>
                  <div className='text-sm text-slate-600'>Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem-Solution Section - Modern Cards */}
        <section className='py-8 md:py-12 bg-surface'>
          <div className='max-w-7xl mx-auto px-6'>
            <div className='text-center mb-8 md:mb-16'>
              <h2 className='text-heading-lg md:text-heading-xl font-bold mb-4 font-display text-slate-900'>
                Still Doing Manual Excel Work?
              </h2>
              <p className='text-body-lg text-slate-600 max-w-2xl mx-auto'>
                These are the problems I solve every day:
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-6'>
              {/* Problem Card 1 */}
              <div className='card group'>
                <div className='mb-4'>
                  <div className='text-primary text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-standard'>
                    ⏱️
                  </div>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900 group-hover:text-primary transition-colors duration-micro'>
                    Spending Hours on Weekly Reports?
                  </h3>
                </div>
                <p className='text-body-base text-slate-600 leading-relaxed mb-6'>
                  Copying data from 10+ files, reformatting, checking formulas, emailing results.
                  Same process every week.
                </p>
                <Link
                  to='/excel-automation'
                  className='text-primary hover:text-primary-hover font-semibold inline-flex items-center gap-2 transition-colors duration-micro'
                >
                  Automate It →
                </Link>
              </div>

              {/* Problem Card 2 */}
              <div className='card group'>
                <div className='mb-4'>
                  <div className='text-secondary text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-standard'>
                    💥
                  </div>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900 group-hover:text-secondary transition-colors duration-micro'>
                    Access Database Keeps Crashing?
                  </h3>
                </div>
                <p className='text-body-base text-slate-600 leading-relaxed mb-6'>
                  File corruption, slow queries, multi-user conflicts. Can't rely on your data
                  anymore.
                </p>
                <Link
                  to='/access-consulting'
                  className='text-secondary hover:text-secondary-hover font-semibold inline-flex items-center gap-2 transition-colors duration-micro'
                >
                  Fix It →
                </Link>
              </div>

              {/* Problem Card 3 */}
              <div className='card group'>
                <div className='mb-4'>
                  <div className='text-accent text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-standard'>
                    🔢
                  </div>
                  <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900 group-hover:text-accent transition-colors duration-micro'>
                    Financial Model Too Slow?
                  </h3>
                </div>
                <p className='text-body-base text-slate-600 leading-relaxed mb-6'>
                  Recalculation takes 5+ minutes. Can't add more scenarios. Formulas breaking
                  randomly.
                </p>
                <Link
                  to='/financial-modeling'
                  className='text-accent hover:text-accent-hover font-semibold inline-flex items-center gap-2 transition-colors duration-micro'
                >
                  Optimize It →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Modern Card Grid */}
        <section id='services' className='py-12 md:py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-6'>
            <div className='text-center mb-10 md:mb-14'>
              <h2 className='text-heading-lg md:text-heading-xl font-bold mb-4 font-display text-slate-900'>
                What I Do
              </h2>
              <p className='text-body-lg text-slate-600 max-w-3xl mx-auto leading-relaxed'>
                I automate repetitive Excel and Access tasks that waste your team's time. Here's how
                I can help.
              </p>
            </div>

            {/* Services Grid - Clean Card Layout */}
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6'>
              {[
                {
                  num: '01',
                  title: 'Excel VBA Process Automation',
                  desc: 'Stop doing the same thing over and over. As an Excel VBA consultant, I write VBA code that handles your repetitive tasks automatically, so you can focus on actual work.',
                  link: '/excel-automation',
                  bgColor: 'bg-primary',
                  textColor: 'text-primary',
                  hoverBorder: 'hover:border-primary',
                  hoverText: 'group-hover:text-primary',
                  icon: '📊',
                },
                {
                  num: '02',
                  title: 'Access Database Development',
                  desc: 'As an Access database consultant, I build databases that multiple people can use without breaking.',
                  link: '/access-consulting',
                  bgColor: 'bg-secondary',
                  textColor: 'text-secondary',
                  hoverBorder: 'hover:border-secondary',
                  hoverText: 'group-hover:text-secondary',
                  icon: '🗄️',
                },
                {
                  num: '03',
                  title: 'Financial Modeling',
                  desc: 'Build accurate Excel financial models for forecasting, budgeting, and analysis.',
                  link: '/financial-modeling',
                  bgColor: 'bg-primary',
                  textColor: 'text-primary',
                  hoverBorder: 'hover:border-primary',
                  hoverText: 'group-hover:text-primary',
                  icon: '📈',
                },
                {
                  num: '04',
                  title: 'Database Migration',
                  desc: 'Migrate Access databases to SQL Server for better performance and scalability.',
                  link: '/database-migration',
                  bgColor: 'bg-secondary',
                  textColor: 'text-secondary',
                  hoverBorder: 'hover:border-secondary',
                  hoverText: 'group-hover:text-secondary',
                  icon: '🔄',
                },
                {
                  num: '05',
                  title: 'VBA Development',
                  desc: 'Custom VBA programming for Excel. Build macros, automation scripts, and Excel applications. Fix broken code or build from scratch.',
                  link: '/vba-development',
                  bgColor: 'bg-primary',
                  textColor: 'text-primary',
                  hoverBorder: 'hover:border-primary',
                  hoverText: 'group-hover:text-primary',
                  icon: '⚙️',
                },
              ].map((service, idx) => (
                <Link
                  key={service.num}
                  to={service.link}
                  className={`group relative bg-white rounded-xl border-2 border-slate-200 ${service.hoverBorder} p-6 md:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1`}
                >
                  {/* Number Badge */}
                  <div className='flex items-start justify-between mb-4'>
                    <div
                      className={`w-12 h-12 ${service.bgColor} text-white rounded-lg flex items-center justify-center text-lg font-bold shadow-sm group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.num}
                    </div>
                    <div className='text-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300'>
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      className={`text-heading-md md:text-heading-lg font-bold mb-3 font-display text-slate-900 ${service.hoverText} transition-colors duration-300`}
                    >
                      {service.title}
                    </h3>
                    <p className='text-body-sm text-slate-600 leading-relaxed mb-4'>
                      {service.desc}
                    </p>
                    <span
                      className={`inline-flex items-center gap-2 ${service.textColor} font-semibold text-sm group-hover:gap-3 transition-all duration-300`}
                    >
                      Learn More
                      <svg
                        className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </span>
                  </div>

                  {/* Hover Accent */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 ${service.bgColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-xl`}
                  ></div>
                </Link>
              ))}
            </div>

            {/* Case Studies */}
            <div className='mt-20 pt-16 border-t border-slate-200'>
              <div className='text-center mb-8'>
                <h3 className='text-heading-lg md:text-heading-xl font-bold mb-4 font-display text-slate-900'>
                  Case Studies
                </h3>
                <p className='text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed'>
                  Real problems, real solutions. Here&apos;s what I&apos;ve fixed for clients.
                </p>
              </div>

              <div className='space-y-4'>
                <div className='card'>
                  <button
                    onClick={() => toggleCaseStudy(0)}
                    className='w-full flex items-center justify-between text-left'
                    aria-expanded={openCaseStudyIndex === 0}
                  >
                    <div className='flex items-start gap-4'>
                      <div className='text-primary font-bold text-xl font-mono flex-shrink-0'>
                        01
                      </div>
                      <div>
                        <h4 className='text-heading-sm md:text-heading-md font-bold font-display text-slate-900'>
                          Manufacturing Company - Inventory Tracking
                        </h4>
                        <p className='text-slate-500 text-sm mt-1'>
                          Fixed a crashing Access database used by 15 people daily
                        </p>
                      </div>
                    </div>
                    <span className='text-2xl font-light text-slate-400 ml-4 flex-shrink-0'>
                      {openCaseStudyIndex === 0 ? '−' : '+'}
                    </span>
                  </button>
                  {openCaseStudyIndex === 0 && (
                    <div className='mt-4 pt-4 border-t border-slate-200 text-slate-600 leading-relaxed space-y-4'>
                      <div>
                        <p className='font-semibold text-slate-900 mb-2'>The Problem:</p>
                        <p>
                          Their Access database crashed multiple times a day. Fifteen people were
                          trying to use it at once, and it kept corrupting data. They were losing
                          hours every week re-entering lost information.
                        </p>
                      </div>
                      <div>
                        <p className='font-semibold text-slate-900 mb-2'>What I Did:</p>
                        <p>
                          I rebuilt the database structure to handle concurrent users properly.
                          Fixed the queries that were causing crashes. Added proper error handling
                          so when something goes wrong, it doesn&apos;t lose data.
                        </p>
                      </div>
                      <div>
                        <p className='font-semibold text-slate-900 mb-2'>The Result:</p>
                        <p>
                          Zero crashes in the last 8 months. All 15 people can use it simultaneously
                          without issues. They&apos;re saving about 10 hours a week that they used
                          to spend fixing problems.
                        </p>
                        <p className='mt-3'>
                          <a
                            href='#services'
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection('services');
                            }}
                            className='text-primary hover:text-primary-hover font-medium underline transition-colors duration-micro'
                          >
                            Learn more about Access database consulting services →
                          </a>
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className='card'>
                  <button
                    onClick={() => toggleCaseStudy(1)}
                    className='w-full flex items-center justify-between text-left'
                    aria-expanded={openCaseStudyIndex === 1}
                  >
                    <div className='flex items-start gap-4'>
                      <div className='text-primary font-bold text-xl font-mono flex-shrink-0'>
                        02
                      </div>
                      <div>
                        <h4 className='text-heading-sm md:text-heading-md font-bold font-display text-slate-900'>
                          Construction Firm - Automated Reporting
                        </h4>
                        <p className='text-slate-500 text-sm mt-1'>
                          Eliminated 6 hours of weekly manual work
                        </p>
                      </div>
                    </div>
                    <span className='text-2xl font-light text-slate-400 ml-4 flex-shrink-0'>
                      {openCaseStudyIndex === 1 ? '−' : '+'}
                    </span>
                  </button>
                  {openCaseStudyIndex === 1 && (
                    <div className='mt-4 pt-4 border-t border-slate-200 text-slate-600 leading-relaxed space-y-4'>
                      <div>
                        <p className='font-semibold text-slate-900 mb-2'>The Problem:</p>
                        <p>
                          Every Friday, someone spent 6 hours pulling data from multiple
                          spreadsheets, doing calculations, and creating reports. It was tedious,
                          error-prone, and nobody wanted to do it.
                        </p>
                      </div>
                      <div>
                        <p className='font-semibold text-slate-900 mb-2'>What I Did:</p>
                        <p>
                          I wrote VBA code that automatically pulls data from all their
                          spreadsheets, runs the calculations, and generates the reports. One button
                          click, done in 30 seconds.
                        </p>
                      </div>
                      <div>
                        <p className='font-semibold text-slate-900 mb-2'>The Result:</p>
                        <p>
                          They get their reports in 30 seconds instead of 6 hours. No more
                          calculation errors. The person who used to do this manually now handles
                          other work. Saves them about $15,000 a year in time.
                        </p>
                        <p className='mt-3'>
                          <a
                            href='#services'
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection('services');
                            }}
                            className='text-primary hover:text-primary-hover font-medium underline transition-colors duration-micro'
                          >
                            Learn more about Excel VBA automation services →
                          </a>
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className='card'>
                  <button
                    onClick={() => toggleCaseStudy(2)}
                    className='w-full flex items-center justify-between text-left'
                    aria-expanded={openCaseStudyIndex === 2}
                  >
                    <div className='flex items-start gap-4'>
                      <div className='text-primary font-bold text-xl font-mono flex-shrink-0'>
                        03
                      </div>
                      <div>
                        <h4 className='text-heading-sm md:text-heading-md font-bold font-display text-slate-900'>
                          Financial Services - Data Integration
                        </h4>
                        <p className='text-slate-500 text-sm mt-1'>
                          Connected Excel to SQL database, eliminated manual data entry
                        </p>
                      </div>
                    </div>
                    <span className='text-2xl font-light text-slate-400 ml-4 flex-shrink-0'>
                      {openCaseStudyIndex === 2 ? '−' : '+'}
                    </span>
                  </button>
                  {openCaseStudyIndex === 2 && (
                    <div className='mt-4 pt-4 border-t border-slate-200 text-slate-600 leading-relaxed space-y-4'>
                      <div>
                        <p className='font-semibold text-slate-900 mb-2'>The Problem:</p>
                        <p>
                          They had client data in a SQL database but needed to work with it in
                          Excel. Every day, someone exported data, cleaned it up in Excel, did
                          analysis, then manually entered results back into the database. Took 2-3
                          hours daily.
                        </p>
                      </div>
                      <div>
                        <p className='font-semibold text-slate-900 mb-2'>What I Did:</p>
                        <p>
                          I built an Excel workbook that connects directly to their SQL database. It
                          pulls data automatically, runs their analysis, and can push results back
                          to the database. All with a few clicks.
                        </p>
                      </div>
                      <div>
                        <p className='font-semibold text-slate-900 mb-2'>The Result:</p>
                        <p>
                          What used to take 2-3 hours now takes 5 minutes. No more copy-paste
                          errors. Data stays in sync automatically. They&apos;re saving about 500
                          hours a year.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className='card'>
                  <button
                    onClick={() => toggleCaseStudy(3)}
                    className='w-full flex items-center justify-between text-left'
                    aria-expanded={openCaseStudyIndex === 3}
                  >
                    <div className='flex items-start gap-4'>
                      <div className='text-primary font-bold text-xl font-mono flex-shrink-0'>
                        04
                      </div>
                      <div>
                        <h4 className='text-heading-sm md:text-heading-md font-bold font-display text-slate-900'>
                          Distribution Company - Slow Spreadsheet
                        </h4>
                        <p className='text-slate-500 text-sm mt-1'>
                          Fixed a 50MB Excel file that took 5 minutes to open
                        </p>
                      </div>
                    </div>
                    <span className='text-2xl font-light text-slate-400 ml-4 flex-shrink-0'>
                      {openCaseStudyIndex === 3 ? '−' : '+'}
                    </span>
                  </button>
                  {openCaseStudyIndex === 3 && (
                    <div className='mt-4 pt-4 border-t border-slate-200 text-slate-600 leading-relaxed space-y-4'>
                      <div>
                        <p className='font-semibold text-slate-900 mb-2'>The Problem:</p>
                        <p>
                          Their main Excel file was 50MB and took 5 minutes to open. Every
                          calculation took forever. It crashed regularly. They were afraid to add
                          more data because it would get worse.
                        </p>
                      </div>
                      <div>
                        <p className='font-semibold text-slate-900 mb-2'>What I Did:</p>
                        <p>
                          I cleaned up the file structure, removed unnecessary formatting, optimized
                          formulas, and moved some data to a separate Access database. The Excel
                          file now handles the analysis, Access stores the data.
                        </p>
                      </div>
                      <div>
                        <p className='font-semibold text-slate-900 mb-2'>The Result:</p>
                        <p>
                          File opens in 10 seconds instead of 5 minutes. Calculations run instantly.
                          No more crashes. They can add as much data as they need without worrying
                          about performance.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className='card'>
                  <button
                    onClick={() => toggleCaseStudy(4)}
                    className='w-full flex items-center justify-between text-left'
                    aria-expanded={openCaseStudyIndex === 4}
                  >
                    <div className='flex items-start gap-4'>
                      <div className='text-primary font-bold text-xl font-mono flex-shrink-0'>
                        05
                      </div>
                      <div>
                        <h4 className='text-heading-sm md:text-heading-md font-bold font-display text-slate-900'>
                          Retail Chain - Pricing System
                        </h4>
                        <p className='text-slate-500 text-sm mt-1'>
                          Automated complex pricing calculations with business rules
                        </p>
                      </div>
                    </div>
                    <span className='text-2xl font-light text-slate-400 ml-4 flex-shrink-0'>
                      {openCaseStudyIndex === 4 ? '−' : '+'}
                    </span>
                  </button>
                  {openCaseStudyIndex === 4 && (
                    <div className='mt-4 pt-4 border-t border-slate-200 text-slate-600 leading-relaxed space-y-4'>
                      <div>
                        <p className='font-semibold text-slate-900 mb-2'>The Problem:</p>
                        <p>
                          They had complicated pricing rules based on product type, quantity,
                          customer tier, and promotions. Someone had to manually calculate prices
                          for every order. Mistakes were common and expensive.
                        </p>
                      </div>
                      <div>
                        <p className='font-semibold text-slate-900 mb-2'>What I Did:</p>
                        <p>
                          I built an Access database that stores all their pricing rules and an
                          Excel interface that calculates prices automatically. Enter the product
                          and customer info, it gives you the right price every time.
                        </p>
                      </div>
                      <div>
                        <p className='font-semibold text-slate-900 mb-2'>The Result:</p>
                        <p>
                          Pricing is now instant and accurate. No more calculation errors. They can
                          update pricing rules in one place and it applies everywhere. Saves them
                          time and prevents costly mistakes.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Modern Cards */}
        <section className='py-8 md:py-12 bg-white border-y border-slate-200'>
          <div className='max-w-7xl mx-auto px-6'>
            <div className='text-center mb-8 md:mb-16'>
              <h2 className='text-heading-lg md:text-heading-xl font-bold mb-6 font-display text-slate-900'>
                What Clients Say
              </h2>
              <p className='text-body-lg text-slate-600 max-w-3xl mx-auto leading-relaxed'>
                Don&apos;t just take my word for it. Here&apos;s what businesses say about working
                with an experienced Excel VBA consultant and Access database consultant.{' '}
                <Link
                  to='/contact'
                  className='text-primary hover:text-primary-hover font-semibold underline transition-colors duration-micro'
                >
                  Get your free consultation →
                </Link>
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-6'>
              <div className='card group animate-fade-in'>
                <div className='mb-4'>
                  <div className='flex text-primary mb-3'>
                    {'★★★★★'.split('').map((star, i) => (
                      <span
                        key={i}
                        className='text-xl transform group-hover:scale-110 transition-transform duration-micro'
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        {star}
                      </span>
                    ))}
                  </div>
                </div>
                <p className='text-body-base text-slate-700 leading-relaxed mb-4 italic'>
                  &quot;Robert fixed our Access database that was crashing multiple times a day.
                  Zero crashes in 8 months. As an Access database consultant, he really knows what
                  he&apos;s doing.&quot;
                </p>
                <div className='pt-4 border-t border-slate-200'>
                  <p className='font-semibold text-slate-900'>Manufacturing Company</p>
                  <p className='text-body-sm text-slate-600'>15-user Access database system</p>
                </div>
              </div>

              <div className='card group animate-fade-in' style={{ animationDelay: '100ms' }}>
                <div className='mb-4'>
                  <div className='flex text-secondary mb-3'>
                    {'★★★★★'.split('').map((star, i) => (
                      <span
                        key={i}
                        className='text-xl transform group-hover:scale-110 transition-transform duration-micro'
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        {star}
                      </span>
                    ))}
                  </div>
                </div>
                <p className='text-body-base text-slate-700 leading-relaxed mb-4 italic'>
                  &quot;The Excel VBA automation he built saves us 6 hours every week. What used to
                  take all Friday afternoon now takes 30 seconds. Best investment we&apos;ve
                  made.&quot;
                </p>
                <div className='pt-4 border-t border-slate-200'>
                  <p className='font-semibold text-slate-900'>Construction Firm</p>
                  <p className='text-body-sm text-slate-600'>Automated reporting system</p>
                </div>
              </div>

              <div className='card group animate-fade-in' style={{ animationDelay: '200ms' }}>
                <div className='mb-4'>
                  <div className='flex text-accent mb-3'>
                    {'★★★★★'.split('').map((star, i) => (
                      <span
                        key={i}
                        className='text-xl transform group-hover:scale-110 transition-transform duration-micro'
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        {star}
                      </span>
                    ))}
                  </div>
                </div>
                <p className='text-body-base text-slate-700 leading-relaxed mb-4 italic'>
                  &quot;He connected our Excel to SQL database and eliminated all manual data entry.
                  Saves us 500 hours a year. As an Excel VBA consultant, he&apos;s the real
                  deal.&quot;
                </p>
                <div className='pt-4 border-t border-slate-200'>
                  <p className='font-semibold text-slate-900'>Financial Services</p>
                  <p className='text-body-sm text-slate-600'>Data integration project</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Modern Design */}
        <section id='about' className='py-8 md:py-12 bg-surface border-y border-slate-200'>
          <div className='max-w-7xl mx-auto px-6'>
            {/* Header */}
            <div className='relative max-w-7xl mx-auto px-6 text-center mb-8 md:mb-16'>
              <div className='absolute inset-0 -z-10 bg-primary/5 rounded-full blur-3xl'></div>
              <h2 className='text-heading-lg md:text-heading-xl font-extrabold tracking-tight mb-6 text-slate-900 font-display'>
                A Specialist for Complex Enterprises.
              </h2>
              <p className='text-body-lg text-slate-600 max-w-3xl mx-auto leading-relaxed'>
                Direct access to 20+ years of enterprise-level Excel and Access expertise.
              </p>
            </div>

            {/* About Robert Terry */}
            <div className='max-w-7xl mx-auto px-6 mb-8 md:mb-16'>
              <div className='space-y-6 text-body-lg text-slate-700 leading-relaxed'>
                <p>
                  I&apos;m Robert Terry, an Excel VBA consultant and Access database consultant
                  based in Springville, Utah. For over 20 years, I&apos;ve worked at the
                  intersection of business logic and Microsoft technology, serving businesses
                  nationwide.
                </p>
                <p>
                  My approach is straightforward: I find the friction in your data processes and
                  build systems that get rid of it.
                </p>
                <p>
                  When you hire me, you&apos;re not getting just a programmer. You&apos;re getting a
                  business partner who actually understands how your operations work. Whether
                  you&apos;re in Utah or anywhere in the United States, I work remotely to deliver
                  the same high-quality Excel and Access consulting services.
                </p>
              </div>

              <div className='mt-12 md:mt-16 grid md:grid-cols-2 gap-6'>
                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-4 font-display group-hover:text-primary transition-colors duration-micro'>
                    Direct Principal Access
                  </h3>
                  <p className='text-body-base text-slate-600 leading-relaxed'>
                    Every conversation is with me. No account managers, no junior developers, no
                    outsourcing. The person who understands your business is the same person writing
                    your code.
                  </p>
                </div>

                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-4 font-display group-hover:text-secondary transition-colors duration-micro'>
                    Code Ownership
                  </h3>
                  <p className='text-body-base text-slate-600 leading-relaxed'>
                    You own 100% of what I build. No licenses, no lock-in, no recurring fees. The
                    systems I build are yours, period.
                  </p>
                </div>

                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-4 font-display group-hover:text-accent transition-colors duration-micro'>
                    Transparent Pricing
                  </h3>
                  <p className='text-body-base text-slate-600 leading-relaxed mb-4'>
                    Clear scope, clear milestones, clear expectations. No surprises, no hidden
                    costs.
                  </p>
                  <div className='pt-4 border-t border-slate-200'>
                    <div className='text-primary text-3xl font-bold mb-2'>$90/hour</div>
                    <div className='text-body-sm text-slate-600'>Advisory</div>
                    <div className='text-body-sm text-slate-600 mt-2'>
                      Builds: Fixed-price after consultation
                    </div>
                  </div>
                </div>

                <div className='card group'>
                  <h3 className='text-heading-lg font-bold mb-4 font-display group-hover:text-primary transition-colors duration-micro'>
                    Enterprise Security
                  </h3>
                  <p className='text-body-base text-slate-600 leading-relaxed'>
                    All work happens in your IT environment. Your data never leaves your firewall.
                    I&apos;m ready to sign corporate NDAs right away.
                  </p>
                </div>
              </div>
            </div>

            {/* Expertise Section */}
            <div className='max-w-7xl mx-auto px-6 py-12 md:py-16 bg-white border border-slate-200 rounded-card shadow-card'>
              <h2 className='text-heading-lg md:text-heading-xl font-bold mb-8 md:mb-8 font-display text-center'>
                Specialization Over Generalization
              </h2>

              <div className='space-y-6 text-body-lg text-slate-700 leading-relaxed'>
                <p>
                  I&apos;m not a creative designer. I&apos;m not generalist IT support. I&apos;m a
                  specialist in the Microsoft Data Stack—Excel, Access, VBA, and SQL Server.
                </p>
                <p>
                  This focus means I understand the deep technical constraints and possibilities of
                  these platforms. I know how to push Excel to its limits without breaking it. I
                  know how to build Access databases that scale to hundreds of users. I know how to
                  write VBA that runs reliably for years.
                </p>
                <p>
                  When your business depends on these tools, you need someone who&apos;s spent
                  decades mastering them, not someone who can &quot;also do Excel&quot; among a
                  dozen other technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section - Refined Card Design */}
        <section className='py-12 md:py-16 bg-white border-y border-slate-200'>
          <div className='max-w-7xl mx-auto px-6'>
            <div className='text-center mb-10 md:mb-14'>
              <h2 className='text-heading-lg md:text-heading-xl font-bold mb-4 font-display text-slate-900'>
                How It Works
              </h2>
              <p className='text-body-lg text-slate-600 max-w-2xl mx-auto'>
                Simple, transparent process from consultation to delivery
              </p>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4'>
              {[
                {
                  num: 1,
                  title: 'Free Consultation',
                  desc: '45-minute Zoom call to understand your process, pain points, and goals. No obligation.',
                  bgColor: 'bg-primary',
                  lightBg: 'bg-primary/5',
                  textColor: 'text-primary',
                },
                {
                  num: 2,
                  title: 'Fixed-Price Quote',
                  desc: 'Within 48 hours, you get a detailed proposal with scope, timeline, and exact cost. No surprises.',
                  bgColor: 'bg-secondary',
                  lightBg: 'bg-secondary/5',
                  textColor: 'text-secondary',
                },
                {
                  num: 3,
                  title: 'Build & Test',
                  desc: 'I develop your solution in 1-6 weeks (depending on complexity). You get progress updates weekly.',
                  bgColor: 'bg-primary',
                  lightBg: 'bg-primary/5',
                  textColor: 'text-primary',
                },
                {
                  num: 4,
                  title: 'Training & Delivery',
                  desc: "1-hour walkthrough session, written documentation, sample files. You're fully equipped to use it.",
                  bgColor: 'bg-primary',
                  lightBg: 'bg-primary/5',
                  textColor: 'text-primary',
                },
                {
                  num: 5,
                  title: 'Ongoing Support',
                  desc: "30-day warranty included. Optional maintenance plans available. I don't disappear after delivery.",
                  bgColor: 'bg-secondary',
                  lightBg: 'bg-secondary/5',
                  textColor: 'text-secondary',
                },
              ].map((step, idx) => (
                <div
                  key={step.num}
                  className={`group relative ${step.lightBg} rounded-xl border border-slate-200/60 p-4 md:p-5 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 hover:border-slate-300`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {/* Badge - Centered at top */}
                  <div className='flex flex-col items-center text-center mb-4'>
                    <div
                      className={`w-14 h-14 ${step.bgColor} text-white rounded-xl flex items-center justify-center text-2xl font-bold mb-3 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}
                    >
                      {step.num}
                    </div>
                    <h3
                      className={`text-heading-sm md:text-heading-md font-bold font-display ${step.textColor} mb-2`}
                    >
                      {step.title}
                    </h3>
                  </div>
                  {/* Description */}
                  <p className='text-body-sm text-slate-600 leading-relaxed text-center'>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Modern Design */}
        <section id='faq' className='py-8 md:py-12 bg-surface border-y border-slate-200'>
          <div className='max-w-7xl mx-auto px-6'>
            <div className='text-center mb-8 md:mb-16'>
              <h2 className='text-heading-lg md:text-heading-xl font-bold mb-4 font-display text-slate-900'>
                Frequently Asked Questions
              </h2>
            </div>

            <div className='space-y-4'>
              <div className='card'>
                <button
                  onClick={() => toggleFaq(0)}
                  className='w-full flex items-center justify-between text-left'
                  aria-expanded={openFaqIndex === 0}
                >
                  <h3 className='text-heading-sm md:text-heading-md font-bold font-display text-slate-900'>
                    Who do you work with?
                  </h3>
                  <span className='text-2xl font-light text-slate-400 ml-4 flex-shrink-0'>
                    {openFaqIndex === 0 ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === 0 && (
                  <p className='text-slate-600 leading-relaxed mt-4'>
                    Companies that use Excel and Access every day to run their business. If your
                    spreadsheets are critical to operations, I can help.
                  </p>
                )}
              </div>

              <div className='card'>
                <button
                  onClick={() => toggleFaq(1)}
                  className='w-full flex items-center justify-between text-left'
                  aria-expanded={openFaqIndex === 1}
                >
                  <h3 className='text-heading-sm md:text-heading-md font-bold font-display text-slate-900'>
                    Why hire a solo consultant instead of an agency?
                  </h3>
                  <span className='text-2xl font-light text-slate-400 ml-4 flex-shrink-0'>
                    {openFaqIndex === 1 ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === 1 && (
                  <p className='text-slate-600 leading-relaxed mt-4'>
                    Agencies hand your project to junior developers. I do the work myself. You get
                    20 years of experience, not someone learning on your dime.
                  </p>
                )}
              </div>

              <div className='card'>
                <button
                  onClick={() => toggleFaq(2)}
                  className='w-full flex items-center justify-between text-left'
                  aria-expanded={openFaqIndex === 2}
                >
                  <h3 className='text-heading-sm md:text-heading-md font-bold font-display text-slate-900'>
                    Do you work with existing systems?
                  </h3>
                  <span className='text-2xl font-light text-slate-400 ml-4 flex-shrink-0'>
                    {openFaqIndex === 2 ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === 2 && (
                  <p className='text-slate-600 leading-relaxed mt-4'>
                    Yes. Most of what I do is fixing or improving stuff that already exists. I
                    rarely start from scratch unless you want me to.
                  </p>
                )}
              </div>

              <div className='card'>
                <button
                  onClick={() => toggleFaq(3)}
                  className='w-full flex items-center justify-between text-left'
                  aria-expanded={openFaqIndex === 3}
                >
                  <h3 className='text-heading-sm md:text-heading-md font-bold font-display text-slate-900'>
                    How long do projects take?
                  </h3>
                  <span className='text-2xl font-light text-slate-400 ml-4 flex-shrink-0'>
                    {openFaqIndex === 3 ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === 3 && (
                  <p className='text-slate-600 leading-relaxed mt-4'>
                    Depends on what you need. Simple automations? A few days to a week. Big database
                    projects? Usually 4 to 8 weeks. I&apos;ll give you a timeline when we talk.
                  </p>
                )}
              </div>

              <div className='card'>
                <button
                  onClick={() => toggleFaq(4)}
                  className='w-full flex items-center justify-between text-left'
                  aria-expanded={openFaqIndex === 4}
                >
                  <h3 className='text-heading-sm md:text-heading-md font-bold font-display text-slate-900'>
                    Do you provide documentation?
                  </h3>
                  <span className='text-2xl font-light text-slate-400 ml-4 flex-shrink-0'>
                    {openFaqIndex === 4 ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === 4 && (
                  <p className='text-slate-600 leading-relaxed mt-4'>
                    Yes. I write documentation that explains how things work. You shouldn&apos;t
                    need me to explain it every time you use it.
                  </p>
                )}
              </div>

              <div className='card'>
                <button
                  onClick={() => toggleFaq(5)}
                  className='w-full flex items-center justify-between text-left'
                  aria-expanded={openFaqIndex === 5}
                >
                  <h3 className='text-heading-sm md:text-heading-md font-bold font-display text-slate-900'>
                    Can you help with urgent issues?
                  </h3>
                  <span className='text-2xl font-light text-slate-400 ml-4 flex-shrink-0'>
                    {openFaqIndex === 5 ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === 5 && (
                  <p className='text-slate-600 leading-relaxed mt-4'>
                    If I&apos;m available, yes. I&apos;ve done plenty of emergency fixes. Call me
                    and we&apos;ll figure it out.
                  </p>
                )}
              </div>

              <div className='card'>
                <button
                  onClick={() => toggleFaq(6)}
                  className='w-full flex items-center justify-between text-left'
                  aria-expanded={openFaqIndex === 6}
                >
                  <h3 className='text-heading-sm md:text-heading-md font-bold font-display text-slate-900'>
                    Do you work remotely?
                  </h3>
                  <span className='text-2xl font-light text-slate-400 ml-4 flex-shrink-0'>
                    {openFaqIndex === 6 ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === 6 && (
                  <p className='text-slate-600 leading-relaxed mt-4'>
                    Yes. I work remotely. We&apos;ll use screen sharing, secure file transfer,
                    whatever works for you. I&apos;ve been doing remote work long before it was
                    trendy.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className='py-8 md:py-12 bg-slate-100 text-slate-900 relative overflow-hidden'>
          <div className='relative z-10 max-w-7xl mx-auto px-6 text-center'>
            <h2 className='text-heading-lg md:text-heading-xl font-bold mb-6 font-display text-slate-900'>
              Ready to Stop Wasting Time on Manual Work?
            </h2>
            <p className='text-body-lg text-slate-700 max-w-2xl mx-auto mb-8 leading-relaxed'>
              Free 45-minute consultation. We'll review your process and discuss automation options.
              No obligation, no sales pitch.
            </p>
            <div className='flex flex-col sm:flex-row justify-center gap-4'>
              <Link
                to='/contact'
                className='bg-primary hover:bg-primary-hover text-white hover:text-white px-8 py-4 text-base font-semibold transition-all duration-standard rounded-lg text-center shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
              >
                Schedule Free Consultation
              </Link>
              <a
                href='tel:8016163702'
                className='bg-white hover:bg-slate-100 text-primary border-2 border-primary px-8 py-4 text-base font-semibold transition-all duration-standard rounded-lg text-center flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
              >
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                </svg>
                <span>Call 801-616-3702</span>
              </a>
            </div>
            <p className='text-slate-600 text-body-sm mt-6'>Most projects start within 1-2 weeks</p>
          </div>
        </section>

      </div>
    </>
  );
}

export default App;
