import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import '../../styles/global.css';

function FreeResources() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!email.trim()) {
      setError('Email address is required');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Replace with actual email service API call
      // Example: ConvertKit, Mailchimp, or custom API endpoint

      // For now, we'll use a placeholder that can be replaced
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          name: name.trim() || '',
          source: 'lead-magnet',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        // Track conversion
        try {
          if (typeof window !== 'undefined' && window.gtag && typeof window.gtag === 'function') {
            window.gtag('event', 'lead_magnet_signup', {
              event_category: 'Conversion',
              event_label: 'Free Resources',
            });
          }
        } catch (error) {
          // Silently fail - analytics errors should not break the site
          console.debug('Google Analytics error (blocked or failed):', error);
        }
      } else {
        const data = await response.json();
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Unable to process request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resources = [
    {
      title: 'Excel Automation Readiness Checklist',
      description:
        '15-point checklist to determine if your Excel processes are ready for automation. Covers documentation, data structure, formulas, and business requirements.',
      icon: '✓',
    },
    {
      title: 'Access Database Health Check Guide',
      description:
        'Identify warning signs, assess performance, and determine maintenance needs. Includes performance indicators and prevention tips.',
      icon: '🔍',
    },
    {
      title: 'VBA Best Practices Guide',
      description:
        'Coding standards, error handling, and performance tips from 15+ years of VBA development. Write maintainable, reliable, and fast code.',
      icon: '💻',
    },
  ];

  return (
    <div className='bg-base min-h-screen text-slate-800 font-sans'>
      <SEO
        title='Free Excel & Access Resources | ExcelAccessConsultant.com'
        description='Get free Excel automation checklist, Access database health check guide, and VBA best practices guide. Download instantly after email signup.'
        keywords='free excel resources, excel automation checklist, access database guide, vba best practices, excel consultant resources'
        url='https://excelaccessconsultant.com/free-resources'
        ogTitle='Free Excel & Access Resources'
      />

      {/* Hero Section */}
      <section className='py-8 md:py-12 bg-slate-50 border-b border-slate-200'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-display text-slate-900'>
            Free Excel & Access Resources
          </h1>
          <p className='text-xl text-slate-600 mb-8 max-w-7xl mx-auto leading-relaxed'>
            Get instant access to three professional guides that will help you automate Excel
            processes, maintain healthy Access databases, and write better VBA code.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className='py-8 md:py-12 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid lg:grid-cols-3 gap-8 lg:gap-10'>
            {/* Left side - Resources List */}
            <div className='lg:col-span-2 order-2 lg:order-1'>
              <h2 className='text-heading-lg md:text-heading-xl font-bold mb-8 font-display text-slate-900'>
                What You&apos;ll Get
              </h2>
              <div className='space-y-6 mb-8'>
                {resources.map((resource, index) => (
                  <div
                    key={index}
                    className='bg-white rounded-xl p-6 border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300'
                  >
                    <div className='flex items-start gap-4'>
                      <div className='text-4xl flex-shrink-0'>{resource.icon}</div>
                      <div>
                        <h3 className='text-heading-lg font-bold mb-2 font-display text-slate-900'>
                          {resource.title}
                        </h3>
                        <p className='text-slate-600 leading-relaxed'>{resource.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Section */}
              <div className='bg-white rounded-xl p-8 border border-slate-200 shadow-md mb-8'>
                <h3 className='text-heading-lg font-bold mb-4 font-display text-slate-900'>
                  Why These Resources?
                </h3>
                <ul className='space-y-3 text-slate-700'>
                  <li className='flex items-start gap-3'>
                    <span className='text-secondary text-lg mt-1 font-bold'>✓</span>
                    <span>
                      <strong>15+ years of experience</strong> distilled into actionable checklists
                      and guides
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-secondary text-lg mt-1 font-bold'>✓</span>
                    <span>
                      <strong>200+ projects</strong> worth of real-world insights and best practices
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-secondary text-lg mt-1 font-bold'>✓</span>
                    <span>
                      <strong>No fluff</strong> - just practical, actionable advice you can use
                      immediately
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-secondary text-lg mt-1 font-bold'>✓</span>
                    <span>
                      <strong>Free forever</strong> - no credit card, no trial, no catch
                    </span>
                  </li>
                </ul>
              </div>

              {/* CTA Section */}
              <div className='bg-white rounded-xl p-8 border border-slate-200 shadow-md'>
                <h3 className='text-heading-lg font-bold mb-4 font-display text-slate-900'>
                  Need Help Implementing These Practices?
                </h3>
                <p className='text-slate-700 mb-6 leading-relaxed'>
                  I can help you automate your Excel processes, fix your Access database, or
                  optimize your VBA code. Get a free consultation.
                </p>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <Link
                    to='/contact'
                    className='bg-primary hover:bg-primary-hover text-white hover:text-white px-8 py-4 text-base font-medium transition-colors rounded-md text-center'
                  >
                    Schedule Free Consultation
                  </Link>
                  <a
                    href='tel:8016163702'
                    className='bg-white hover:bg-slate-100 text-primary border-2 border-primary px-8 py-4 text-base font-medium transition-colors rounded-md text-center'
                  >
                    Call 801-616-3702
                  </a>
                </div>
              </div>
            </div>

            {/* Right side - Email Capture Form */}
            <div className='lg:col-span-1 order-1 lg:order-2'>
              <div className='bg-white rounded-2xl p-8 shadow-lg border border-slate-200 sticky top-28'>
                <h2 className='text-heading-md md:text-heading-lg font-bold mb-4 font-display text-slate-900'>
                  Get Your Free Resources
                </h2>
                <p className='text-slate-600 mb-6 leading-relaxed'>
                  Enter your email below and get instant access to all three guides. No spam,
                  unsubscribe anytime.
                </p>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                      <label
                        htmlFor='name'
                        className='block text-sm font-medium text-slate-700 mb-2'
                      >
                        Name (Optional)
                      </label>
                      <input
                        id='name'
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='w-full px-4 py-3 bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary rounded-md'
                        placeholder='Your name'
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
                        type='email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full px-4 py-3 bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary rounded-md'
                        placeholder='your.email@company.com'
                      />
                    </div>
                    {error && (
                      <div className='bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm'>
                        {error}
                      </div>
                    )}
                    <button
                      type='submit'
                      disabled={isSubmitting}
                      className='w-full bg-primary hover:bg-primary-hover text-white hover:text-white px-8 py-4 text-base font-semibold transition-all duration-standard rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className='animate-spin h-5 w-5 text-white'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                          >
                            <circle
                              className='opacity-25'
                              cx='12'
                              cy='12'
                              r='10'
                              stroke='currentColor'
                              strokeWidth='4'
                            ></circle>
                            <path
                              className='opacity-75'
                              fill='currentColor'
                              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                            ></path>
                          </svg>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <span>Get Free Resources →</span>
                      )}
                    </button>
                    <p className='text-xs text-slate-500 text-center'>
                      By submitting, you agree to receive emails from ExcelAccessConsultant.com.
                      Unsubscribe anytime.
                    </p>
                  </form>
                ) : (
                  <div className='text-center py-8'>
                    <div className='text-6xl mb-4'>✓</div>
                    <h3 className='text-2xl font-bold mb-4 font-display text-slate-900'>
                      Check Your Email!
                    </h3>
                    <p className='text-slate-600 mb-6'>
                      We&apos;ve sent you links to download all three resources. Check your inbox
                      (and spam folder) for the email.
                    </p>
                    <div className='space-y-3'>
                      <a
                        href='/downloads/excel-automation-readiness-checklist.html'
                        download
                        className='w-full bg-secondary hover:bg-secondary-hover text-white hover:text-white px-8 py-4 text-base font-medium transition-colors rounded-md text-center block'
                      >
                        Download Excel Checklist →
                      </a>
                      <a
                        href='/downloads/access-database-health-check.html'
                        download
                        className='w-full bg-primary hover:bg-primary-hover text-white hover:text-white px-8 py-4 text-base font-medium transition-colors rounded-md text-center block'
                      >
                        Download Access Guide →
                      </a>
                      <a
                        href='/downloads/vba-best-practices-guide.html'
                        download
                        className='w-full bg-secondary hover:bg-secondary-hover text-white hover:text-white px-8 py-4 text-base font-medium transition-colors rounded-md text-center block'
                      >
                        Download VBA Guide →
                      </a>
                    </div>
                    <p className='text-xs text-slate-500 mt-4 text-center'>
                      Tip: Right-click and select &quot;Print&quot; then &quot;Save as PDF&quot; to
                      convert to PDF format.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FreeResources;
