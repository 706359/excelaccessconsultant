import { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import FAQSchema from './components/SEO/FAQSchema';
import SEO from './components/SEO/SEO';
import About from './pages/About/About';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  );
}

function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [openCaseStudyIndex, setOpenCaseStudyIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      setIsMobileMenuOpen(false); // Close mobile menu when navigating
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const toggleCaseStudy = (index) => {
    setOpenCaseStudyIndex(openCaseStudyIndex === index ? null : index);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Create mailto link as fallback
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Full Name: ${formData.name}\nEmail Address: ${formData.email}\nPhone Number: ${
        formData.phone || 'Not provided'
      }\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:rob@excelaccessconsultant.com?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='bg-base min-h-screen text-slate-800 font-sans selection:bg-excel selection:text-white'>
      {/* Skip to main content link for accessibility */}
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-excel focus:text-white focus:rounded-md focus:font-medium'
      >
        Skip to main content
      </a>

      <SEO
        title='Excel and Access Consulting That Actually Works | ExcelAccessConsultant'
        description='Excel and Access consulting that actually works. 20+ years of experience fixing broken spreadsheets, building stable databases, and automating repetitive tasks. Free consultation available.'
        keywords='Excel consulting, Access consulting, Excel automation, VBA programming, MS Access database, Excel expert, Access expert, database repair, spreadsheet automation, Excel macros, Access database development'
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
              "Depends on what you need. Simple automations? A few days to a week. Big database projects? Usually 4 to 8 weeks. I'll give you a timeline when we talk.",
          },
          {
            question: 'Do you provide documentation?',
            answer:
              "Yes. I write documentation that explains how things work. You shouldn't need me to explain it every time you use it.",
          },
          {
            question: 'Can you help with urgent issues?',
            answer:
              "If I'm available, yes. I've done plenty of emergency fixes. Call me and we'll figure it out.",
          },
          {
            question: 'Do you work remotely?',
            answer:
              "Yes. I work remotely. We'll use screen sharing, secure file transfer, whatever works for you. I've been doing remote work long before it was trendy.",
          },
        ]}
      />

      {/* Top Banner */}
      <div className='bg-red-600 text-white py-3 text-center text-sm font-medium'>
        <div className='max-w-7xl mx-auto px-6'>
          <p>
            Call Us Today!{' '}
            <a href='tel:8017045604' className='hover:underline font-semibold'>
              (801) 704-5604
            </a>
            {' | '}
            <a
              href='mailto:rob@excelaccessconsultant.com'
              className='hover:underline font-semibold'
            >
              rob@excelaccessconsultant.com
            </a>
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className='border-b border-slate-200 sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm'>
        <div className='max-w-7xl mx-auto px-6 md:px-8'>
          <div className='flex justify-between items-center py-6'>
            <Link to='/' className='flex items-center'>
              <img
                src='/logo.png'
                alt='ExcelAccessConsultant Logo'
                className='h-14 md:h-16 w-auto'
              />
            </Link>
            <div className='hidden md:flex items-center gap-8'>
              <Link
                to='/'
                className='text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors'
              >
                Home
              </Link>
              <Link
                to='/about'
                className='text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors'
              >
                About
              </Link>
              <a
                href='#services'
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services');
                }}
                className='text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors'
              >
                Services
              </a>
              <a
                href='#faq'
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('faq');
                }}
                className='text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors'
              >
                FAQ
              </a>
              <button onClick={() => scrollToSection('contact')} className='btn-primary'>
                Get Started
              </button>
            </div>
            <button
              className='md:hidden text-slate-700 p-2'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label='Toggle mobile menu'
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className='md:hidden border-t border-slate-200 py-4'>
              <div className='flex flex-col gap-4'>
                <Link
                  to='/'
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors py-2'
                >
                  Home
                </Link>
                <Link
                  to='/about'
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors py-2'
                >
                  About
                </Link>
                <a
                  href='#services'
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                  className='text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors py-2'
                >
                  Services
                </a>
                <a
                  href='#faq'
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('faq');
                  }}
                  className='text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors py-2'
                >
                  FAQ
                </a>
                <button
                  onClick={() => {
                    scrollToSection('contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className='btn-primary text-left w-full py-2'
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main id='main-content'>
        {/* Hero Section */}
        <section
          id='home'
          className='relative w-full h-[600px] md:h-[700px] flex items-center justify-center text-center overflow-hidden bg-slate-100'
        >
          {/* Hero Background Image - Full Screen */}
          <div className='absolute inset-0 z-0 overflow-hidden'>
            <img
              src='/hero.jpeg'
              alt='Excel and Access Consulting'
              className='w-full h-full object-cover'
              style={{
                objectPosition: 'center',
                minHeight: '100%',
                minWidth: '100%',
                transform: 'scale(1.5)',
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          {/* Subtle overlay for text readability */}
          <div className='absolute inset-0 z-[1] bg-gradient-to-b from-white/75 via-white/55 to-white/75'></div>

          {/* Content Container */}
          <div className='relative z-10 max-w-5xl mx-auto px-6 py-24'>
            <div className='badge mb-8 text-excel border-excel/30 bg-white/90 backdrop-blur-sm'>
              20 Years of Excel & Access Experience
            </div>

            <h1 className='text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 font-display drop-shadow-sm'>
              Excel and Access consulting that actually works.
            </h1>

            <p className='text-lg text-slate-700 max-w-2xl mx-auto mb-10 leading-relaxed font-medium'>
              I fix broken spreadsheets, build databases that don't crash, and automate the stuff
              that wastes your time. No fluff, just working systems.
            </p>

            <div className='flex flex-col sm:flex-row justify-center gap-4 mb-16'>
              <button
                onClick={() => scrollToSection('contact')}
                className='bg-excel hover:bg-excel-hover text-white px-8 py-4 text-base font-medium transition-colors'
              >
                Schedule a Free Consultation
              </button>
              <button onClick={() => scrollToSection('services')} className='btn-secondary'>
                See What I Do →
              </button>
            </div>

            {/* Trust Bar */}
            <div className='border-t border-slate-200 pt-10 text-slate-600 text-sm font-medium'>
              <div className='flex flex-wrap justify-center items-center gap-4'>
                <span>20+ Years Experience</span>
                <span className='text-slate-400'>•</span>
                <span>Excel & MS Access Specialist</span>
                <span className='text-slate-400'>•</span>
                <span>Direct Principal Access</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id='services' className='py-24 bg-white'>
          <div className='max-w-6xl mx-auto px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold mb-6 font-display text-slate-900'>
                What I Do
              </h2>
              <p className='text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed'>
                I build Excel and Access systems for companies that actually use them every day. If
                your spreadsheet crashes or your database is slow, I can fix it. If you're doing the
                same thing manually every week, I can automate it.
              </p>
            </div>

            <div className='space-y-6'>
              {/* Service 01 */}
              <div className='card'>
                <div className='flex items-start gap-6'>
                  <div className='text-excel font-bold text-2xl font-mono'>01</div>
                  <div className='flex-1'>
                    <h3 className='text-2xl font-bold mb-3 font-display text-slate-900'>
                      Process Automation
                    </h3>
                    <p className='text-slate-600 leading-relaxed'>
                      Stop doing the same thing over and over. I write VBA code that handles your
                      repetitive tasks automatically, so you can focus on actual work.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 02 */}
              <div className='card'>
                <div className='flex items-start gap-6'>
                  <div className='text-excel font-bold text-2xl font-mono'>02</div>
                  <div className='flex-1'>
                    <h3 className='text-2xl font-bold mb-3 font-display text-slate-900'>
                      Access Databases
                    </h3>
                    <p className='text-slate-600 leading-relaxed'>
                      I build Access databases that multiple people can use without breaking.
                      They're fast, they don't corrupt your data, and they'll still work in five
                      years.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 03 */}
              <div className='card'>
                <div className='flex items-start gap-6'>
                  <div className='text-excel font-bold text-2xl font-mono'>03</div>
                  <div className='flex-1'>
                    <h3 className='text-2xl font-bold mb-3 font-display text-slate-900'>
                      Fixing Broken Systems
                    </h3>
                    <p className='text-slate-600 leading-relaxed'>
                      Your spreadsheet takes forever to open? Your database crashes? I can usually
                      fix it without starting over. I'll clean it up, speed it up, and make it
                      stable again.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 04 */}
              <div className='card'>
                <div className='flex items-start gap-6'>
                  <div className='text-excel font-bold text-2xl font-mono'>04</div>
                  <div className='flex-1'>
                    <h3 className='text-2xl font-bold mb-3 font-display text-slate-900'>
                      Custom Business Rules
                    </h3>
                    <p className='text-slate-600 leading-relaxed'>
                      I code your actual business rules into the system. That way your reports and
                      calculations are right every time, not just when someone remembers to check.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 05 */}
              <div className='card'>
                <div className='flex items-start gap-6'>
                  <div className='text-excel font-bold text-2xl font-mono'>05</div>
                  <div className='flex-1'>
                    <h3 className='text-2xl font-bold mb-3 font-display text-slate-900'>
                      Connecting Systems
                    </h3>
                    <p className='text-slate-600 leading-relaxed'>
                      I hook up your Excel and Access files to other systems—SQL databases, ERP
                      software, whatever you're using. No more copying and pasting data between
                      systems.
                    </p>
                  </div>
                </div>
              </div>

              {/* Case Studies */}
              <div className='mt-20 pt-16 border-t border-slate-200'>
                <div className='text-center mb-12'>
                  <h3 className='text-3xl md:text-4xl font-bold mb-4 font-display text-slate-900'>
                    Case Studies
                  </h3>
                  <p className='text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed'>
                    Real problems, real solutions. Here's what I've fixed for clients.
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
                        <div className='text-excel font-bold text-xl font-mono flex-shrink-0'>
                          01
                        </div>
                        <div>
                          <h4 className='text-xl font-bold font-display text-slate-900'>
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
                            so when something goes wrong, it doesn't lose data.
                          </p>
                        </div>
                        <div>
                          <p className='font-semibold text-slate-900 mb-2'>The Result:</p>
                          <p>
                            Zero crashes in the last 8 months. All 15 people can use it
                            simultaneously without issues. They're saving about 10 hours a week that
                            they used to spend fixing problems.
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
                        <div className='text-excel font-bold text-xl font-mono flex-shrink-0'>
                          02
                        </div>
                        <div>
                          <h4 className='text-xl font-bold font-display text-slate-900'>
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
                            spreadsheets, runs the calculations, and generates the reports. One
                            button click, done in 30 seconds.
                          </p>
                        </div>
                        <div>
                          <p className='font-semibold text-slate-900 mb-2'>The Result:</p>
                          <p>
                            They get their reports in 30 seconds instead of 6 hours. No more
                            calculation errors. The person who used to do this manually now handles
                            other work. Saves them about $15,000 a year in time.
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
                        <div className='text-excel font-bold text-xl font-mono flex-shrink-0'>
                          03
                        </div>
                        <div>
                          <h4 className='text-xl font-bold font-display text-slate-900'>
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
                            I built an Excel workbook that connects directly to their SQL database.
                            It pulls data automatically, runs their analysis, and can push results
                            back to the database. All with a few clicks.
                          </p>
                        </div>
                        <div>
                          <p className='font-semibold text-slate-900 mb-2'>The Result:</p>
                          <p>
                            What used to take 2-3 hours now takes 5 minutes. No more copy-paste
                            errors. Data stays in sync automatically. They're saving about 500 hours
                            a year.
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
                        <div className='text-excel font-bold text-xl font-mono flex-shrink-0'>
                          04
                        </div>
                        <div>
                          <h4 className='text-xl font-bold font-display text-slate-900'>
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
                            I cleaned up the file structure, removed unnecessary formatting,
                            optimized formulas, and moved some data to a separate Access database.
                            The Excel file now handles the analysis, Access stores the data.
                          </p>
                        </div>
                        <div>
                          <p className='font-semibold text-slate-900 mb-2'>The Result:</p>
                          <p>
                            File opens in 10 seconds instead of 5 minutes. Calculations run
                            instantly. No more crashes. They can add as much data as they need
                            without worrying about performance.
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
                        <div className='text-excel font-bold text-xl font-mono flex-shrink-0'>
                          05
                        </div>
                        <div>
                          <h4 className='text-xl font-bold font-display text-slate-900'>
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
                            Pricing is now instant and accurate. No more calculation errors. They
                            can update pricing rules in one place and it applies everywhere. Saves
                            them time and prevents costly mistakes.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About & Why Teams Trust Section */}
        <section id='about' className='py-24 bg-white border-y border-slate-200'>
          <div className='max-w-6xl mx-auto px-6'>
            {/* About Content */}
            <div className='max-w-4xl mx-auto mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold mb-6 font-display text-center text-slate-900'>
                About Me
              </h2>
              <div className='space-y-6 text-lg text-slate-700 leading-relaxed'>
                <p>
                  I'm Robert Terry. I've been fixing Excel and Access problems for 20 years. I've
                  seen what works and what doesn't.
                </p>
                <p>
                  Here's how I work: I figure out what's slowing you down, then I build something
                  that fixes it. No fancy tech for the sake of it. Just systems that work and keep
                  working.
                </p>
                <p>
                  I'm not a big agency. When you call, you talk to me. When I build something, I
                  build it right. That's it.
                </p>
              </div>
              <div className='mt-8 text-center'>
                <Link to='/about' className='text-excel hover:text-excel-hover font-medium'>
                  More About Me →
                </Link>
              </div>
            </div>

            {/* Why Teams Trust Content */}
            <div className='mt-16'>
              <div className='text-center mb-12'>
                <h2 className='text-4xl md:text-5xl font-bold mb-6 font-display text-slate-900'>
                  Why People Work With Me
                </h2>
                <p className='text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed'>
                  I build real systems for real businesses. Not demos. Not templates. Stuff that
                  actually runs your operations every single day.
                </p>
              </div>

              <div className='grid md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
                <div className='card'>
                  <div className='text-excel font-bold text-xl font-mono mb-3'>01</div>
                  <h3 className='text-xl font-bold mb-3 font-display text-slate-900'>
                    20 Years of Experience
                  </h3>
                  <p className='text-slate-600 leading-relaxed'>
                    I've been doing this for 20 years. Just Excel and Access. I know the quirks, the
                    gotchas, and how to make things work.
                  </p>
                </div>

                <div className='card'>
                  <div className='text-excel font-bold text-xl font-mono mb-3'>02</div>
                  <h3 className='text-xl font-bold mb-3 font-display text-slate-900'>
                    Built for You
                  </h3>
                  <p className='text-slate-600 leading-relaxed'>
                    I build what you actually need, not what some template thinks you need. Your
                    workflow, your rules, your system.
                  </p>
                </div>

                <div className='card'>
                  <div className='text-excel font-bold text-xl font-mono mb-3'>03</div>
                  <h3 className='text-xl font-bold mb-3 font-display text-slate-900'>
                    You Talk to Me
                  </h3>
                  <p className='text-slate-600 leading-relaxed'>
                    No account managers. No junior developers. You call, I answer. I build it, I
                    test it, I deliver it.
                  </p>
                </div>

                <div className='card'>
                  <div className='text-excel font-bold text-xl font-mono mb-3'>04</div>
                  <h3 className='text-xl font-bold mb-3 font-display text-slate-900'>
                    Clear Communication
                  </h3>
                  <p className='text-slate-600 leading-relaxed'>
                    I tell you what I'm doing, when it'll be done, and what it costs. No surprises,
                    no hidden fees.
                  </p>
                </div>

                <div className='card md:col-span-2'>
                  <div className='text-excel font-bold text-xl font-mono mb-3'>05</div>
                  <h3 className='text-xl font-bold mb-3 font-display text-slate-900'>
                    Your Data Stays Safe
                  </h3>
                  <p className='text-slate-600 leading-relaxed'>
                    I sign NDAs. I work in your secure systems. Your data doesn't leave your
                    control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className='py-24 bg-slate-50 border-y border-slate-200'>
          <div className='max-w-4xl mx-auto px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold mb-4 font-display text-slate-900'>
                How Engagements Work
              </h2>
            </div>

            <div className='space-y-6'>
              <div className='card'>
                <div className='flex items-start gap-6'>
                  <div className='text-excel font-bold text-2xl font-mono'>01</div>
                  <div className='flex-1'>
                    <h3 className='text-xl font-bold mb-3 font-display text-slate-900'>
                      Understand
                    </h3>
                    <p className='text-slate-600 leading-relaxed'>
                      I look at what you have, how you use it, and what's actually broken. Then I
                      figure out the real problem, not just the symptoms.
                    </p>
                  </div>
                </div>
              </div>

              <div className='card'>
                <div className='flex items-start gap-6'>
                  <div className='text-excel font-bold text-2xl font-mono'>02</div>
                  <div className='flex-1'>
                    <h3 className='text-xl font-bold mb-3 font-display text-slate-900'>Design</h3>
                    <p className='text-slate-600 leading-relaxed'>
                      I plan out what I'm going to build and how it'll work. Simple, reliable, and
                      something you can actually use.
                    </p>
                  </div>
                </div>
              </div>

              <div className='card'>
                <div className='flex items-start gap-6'>
                  <div className='text-excel font-bold text-2xl font-mono'>03</div>
                  <div className='flex-1'>
                    <h3 className='text-xl font-bold mb-3 font-display text-slate-900'>Build</h3>
                    <p className='text-slate-600 leading-relaxed'>
                      I write the code, test it thoroughly, and document how it works. You get
                      something that runs and keeps running.
                    </p>
                  </div>
                </div>
              </div>

              <div className='card'>
                <div className='flex items-start gap-6'>
                  <div className='text-excel font-bold text-2xl font-mono'>04</div>
                  <div className='flex-1'>
                    <h3 className='text-xl font-bold mb-3 font-display text-slate-900'>Support</h3>
                    <p className='text-slate-600 leading-relaxed'>
                      After I deliver it, I help you get comfortable using it. If something breaks
                      or you need changes, I'm here.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id='faq' className='py-24 bg-slate-50 border-y border-slate-200'>
          <div className='max-w-4xl mx-auto px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold mb-4 font-display text-slate-900'>
                FAQ
              </h2>
            </div>

            <div className='space-y-4'>
              <div className='card'>
                <button
                  onClick={() => toggleFaq(0)}
                  className='w-full flex items-center justify-between text-left'
                  aria-expanded={openFaqIndex === 0}
                >
                  <h3 className='text-xl font-bold font-display text-slate-900'>
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
                  <h3 className='text-xl font-bold font-display text-slate-900'>
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
                  <h3 className='text-xl font-bold font-display text-slate-900'>
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
                  <h3 className='text-xl font-bold font-display text-slate-900'>
                    How long do projects take?
                  </h3>
                  <span className='text-2xl font-light text-slate-400 ml-4 flex-shrink-0'>
                    {openFaqIndex === 3 ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === 3 && (
                  <p className='text-slate-600 leading-relaxed mt-4'>
                    Depends on what you need. Simple automations? A few days to a week. Big database
                    projects? Usually 4 to 8 weeks. I'll give you a timeline when we talk.
                  </p>
                )}
              </div>

              <div className='card'>
                <button
                  onClick={() => toggleFaq(4)}
                  className='w-full flex items-center justify-between text-left'
                  aria-expanded={openFaqIndex === 4}
                >
                  <h3 className='text-xl font-bold font-display text-slate-900'>
                    Do you provide documentation?
                  </h3>
                  <span className='text-2xl font-light text-slate-400 ml-4 flex-shrink-0'>
                    {openFaqIndex === 4 ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === 4 && (
                  <p className='text-slate-600 leading-relaxed mt-4'>
                    Yes. I write documentation that explains how things work. You shouldn't need me
                    to explain it every time you use it.
                  </p>
                )}
              </div>

              <div className='card'>
                <button
                  onClick={() => toggleFaq(5)}
                  className='w-full flex items-center justify-between text-left'
                  aria-expanded={openFaqIndex === 5}
                >
                  <h3 className='text-xl font-bold font-display text-slate-900'>
                    Can you help with urgent issues?
                  </h3>
                  <span className='text-2xl font-light text-slate-400 ml-4 flex-shrink-0'>
                    {openFaqIndex === 5 ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === 5 && (
                  <p className='text-slate-600 leading-relaxed mt-4'>
                    If I'm available, yes. I've done plenty of emergency fixes. Call me and we'll
                    figure it out.
                  </p>
                )}
              </div>

              <div className='card'>
                <button
                  onClick={() => toggleFaq(6)}
                  className='w-full flex items-center justify-between text-left'
                  aria-expanded={openFaqIndex === 6}
                >
                  <h3 className='text-xl font-bold font-display text-slate-900'>
                    Do you work remotely?
                  </h3>
                  <span className='text-2xl font-light text-slate-400 ml-4 flex-shrink-0'>
                    {openFaqIndex === 6 ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === 6 && (
                  <p className='text-slate-600 leading-relaxed mt-4'>
                    Yes. I work remotely. We'll use screen sharing, secure file transfer, whatever
                    works for you. I've been doing remote work long before it was trendy.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing & Contact Section */}
        <section id='contact' className='py-24 bg-white'>
          <div className='max-w-7xl mx-auto px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold mb-4 font-display text-slate-900'>
                Get Started
              </h2>
              <p className='text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed'>
                Let's talk about what you need. No sales pitch, just a real conversation.
              </p>
            </div>

            <div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
              {/* Pricing Content */}
              <div>
                <h3 className='text-2xl md:text-3xl font-bold mb-6 font-display text-slate-900'>
                  Pricing
                </h3>
                <div className='card space-y-6'>
                  <div>
                    <h4 className='text-xl font-bold mb-4 font-display text-slate-900'>
                      Free consultation
                    </h4>
                    <p className='text-slate-600'>
                      Let's talk about your problem. No charge for the first conversation.
                    </p>
                  </div>

                  <div className='pt-4 border-t border-slate-200'>
                    <div className='text-excel text-2xl font-bold mb-2'>$90/hour</div>
                    <div className='text-slate-600 text-sm mb-4'>
                      For consulting and diagnostic work
                    </div>
                  </div>

                  <div className='pt-4 border-t border-slate-200 space-y-3 text-slate-600'>
                    <p>• Most projects are fixed-price once we agree on scope</p>
                    <p>• No monthly fees or licenses</p>
                    <p>• You own everything I build</p>
                  </div>

                  <div className='pt-4 border-t border-slate-200'>
                    <p className='text-slate-600'>
                      I tell you what it costs before I start. No surprises.
                    </p>
                  </div>

                  <div className='pt-6 border-t border-slate-200'>
                    <div className='space-y-3'>
                      <div>
                        <p className='text-sm font-medium text-slate-700 mb-1'>Phone</p>
                        <a
                          href='tel:8017045604'
                          className='text-excel hover:text-excel-hover font-medium'
                        >
                          (801) 704-5604
                        </a>
                      </div>
                      <div>
                        <p className='text-sm font-medium text-slate-700 mb-1'>Email</p>
                        <a
                          href='mailto:rob@excelaccessconsultant.com'
                          className='text-excel hover:text-excel-hover font-medium'
                        >
                          rob@excelaccessconsultant.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className='text-2xl md:text-3xl font-bold mb-6 font-display text-slate-900'>
                  Get in Touch
                </h3>
                <p className='text-slate-600 mb-6 leading-relaxed'>
                  Tell me what's broken or what you need built. I'll get back to you and we can
                  figure out if I can help.
                </p>

                <div className='card'>
                  {formSubmitted ? (
                    <div className='text-center py-8'>
                      <p className='text-excel font-semibold mb-2'>Thank you!</p>
                      <p className='text-slate-600 text-sm'>
                        Your email client should open. If not, email me directly at
                        rob@excelaccessconsultant.com
                      </p>
                    </div>
                  ) : (
                    <form className='space-y-6' onSubmit={handleFormSubmit}>
                      <div>
                        <label
                          htmlFor='name'
                          className='block text-sm font-medium text-slate-700 mb-2'
                        >
                          Full Name <span className='text-red-600'>*</span>
                        </label>
                        <input
                          id='name'
                          name='name'
                          type='text'
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-excel focus:border-excel'
                          placeholder='Your full name'
                        />
                      </div>
                      <div>
                        <label
                          htmlFor='email'
                          className='block text-sm font-medium text-slate-700 mb-2'
                        >
                          Email Address <span className='text-red-600'>*</span>
                        </label>
                        <input
                          id='email'
                          name='email'
                          type='email'
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-excel focus:border-excel'
                          placeholder='your.email@company.com'
                        />
                      </div>
                      <div>
                        <label
                          htmlFor='phone'
                          className='block text-sm font-medium text-slate-700 mb-2'
                        >
                          Phone Number
                        </label>
                        <input
                          id='phone'
                          name='phone'
                          type='tel'
                          value={formData.phone}
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-excel focus:border-excel'
                          placeholder='Your phone number'
                        />
                      </div>
                      <div>
                        <div className='flex items-center justify-between mb-2'>
                          <label
                            htmlFor='message'
                            className='block text-sm font-medium text-slate-700'
                          >
                            Message
                          </label>
                          <span className='text-xs text-slate-500'>
                            {formData.message.length}/180
                          </span>
                        </div>
                        <textarea
                          id='message'
                          name='message'
                          rows='5'
                          required
                          maxLength={180}
                          value={formData.message}
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-excel focus:border-excel resize-y'
                          placeholder='What do you need help with?'
                        ></textarea>
                      </div>
                      <button
                        type='submit'
                        className='btn-primary w-full py-4 text-base'
                        aria-label='Submit contact form'
                      >
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='bg-slate-900 text-slate-300 border-t border-slate-800'>
        <div className='max-w-7xl mx-auto px-6 py-16'>
          <div className='grid md:grid-cols-3 gap-12 mb-12'>
            {/* Brand Section */}
            <div className='md:col-span-1'>
              <Link to='/' className='flex items-center mb-4'>
                <img
                  src='/logo.png'
                  alt='ExcelAccessConsultant Logo'
                  className='h-14 md:h-16 w-auto brightness-0 invert'
                />
              </Link>
              <p className='text-slate-400 text-sm leading-relaxed mb-4'>
                Senior-level Excel and Microsoft Access consulting focused on automation, data
                integrity, and operational clarity.
              </p>
              <div className='text-slate-400 text-sm'>
                <p className='font-medium text-slate-300 mb-1'>Email</p>
                <a
                  href='mailto:rob@excelaccessconsultant.com'
                  className='hover:text-white transition-colors'
                >
                  rob@excelaccessconsultant.com
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className='font-bold mb-4 text-sm text-white uppercase tracking-wider'>
                Navigation
              </h4>
              <ul className='space-y-3 text-slate-400 text-sm'>
                <li>
                  <Link to='/' className='hover:text-white transition-colors'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to='/about' className='hover:text-white transition-colors'>
                    About
                  </Link>
                </li>
                <li>
                  <a
                    href='#services'
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('services');
                    }}
                    className='hover:text-white transition-colors'
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href='#faq'
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('faq');
                    }}
                    className='hover:text-white transition-colors'
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href='#contact'
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('contact');
                    }}
                    className='hover:text-white transition-colors'
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services Quick Links */}
            <div>
              <h4 className='font-bold mb-4 text-sm text-white uppercase tracking-wider'>
                Services
              </h4>
              <ul className='space-y-3 text-slate-400 text-sm'>
                <li>
                  <a
                    href='#services'
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('services');
                    }}
                    className='hover:text-white transition-colors'
                  >
                    Process Automation
                  </a>
                </li>
                <li>
                  <a
                    href='#services'
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('services');
                    }}
                    className='hover:text-white transition-colors'
                  >
                    Enterprise Access Databases
                  </a>
                </li>
                <li>
                  <a
                    href='#services'
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('services');
                    }}
                    className='hover:text-white transition-colors'
                  >
                    Data Rescue & Optimization
                  </a>
                </li>
                <li>
                  <a
                    href='#contact'
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('contact');
                    }}
                    className='hover:text-white transition-colors'
                  >
                    Free Consultation
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className='pt-8 border-t border-slate-800'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
              <p className='text-slate-500 text-sm'>
                © 2026 ExcelAccessConsultant. All rights reserved.
              </p>
              <div className='flex items-center gap-6 text-slate-500 text-sm'>
                <span>20+ Years Experience</span>
                <span className='hidden md:inline'>•</span>
                <span>Excel & MS Access Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
