import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import '../../styles/global.css';

function ThankYou() {
  return (
    <div className='bg-base min-h-screen text-slate-900 font-sans selection:bg-excel selection:text-white'>
      <SEO
        title='Thank You - ExcelAccessConsultant'
        description='Thank you for contacting ExcelAccessConsultant. We will get back to you within one business day.'
        keywords='thank you, contact confirmation'
        url='https://excelaccessconsultant.com/thank-you'
        ogTitle='Thank You - ExcelAccessConsultant'
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
                href='/#services'
                className='text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors'
              >
                Services
              </a>
              <a
                href='/#faq'
                className='text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors'
              >
                FAQ
              </a>
              <a href='/#contact' className='btn-primary'>
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Thank You Section */}
        <section className='py-24 min-h-[60vh] flex items-center'>
          <div className='max-w-4xl mx-auto px-6 text-center'>
            <div className='mb-8'>
              <div className='inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6'>
                <svg
                  className='w-12 h-12 text-green-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
              </div>
            </div>

            <h1 className='text-4xl md:text-6xl font-bold mb-6 font-display text-slate-900'>
              Thank You!
            </h1>

            <p className='text-xl text-slate-700 mb-8 max-w-2xl mx-auto leading-relaxed'>
              We've received your message and appreciate you taking the time to contact us.
            </p>

            <div className='bg-slate-50 border border-slate-200 rounded-lg p-8 mb-8 max-w-2xl mx-auto'>
              <h2 className='text-2xl font-bold mb-4 font-display text-slate-900'>
                What Happens Next?
              </h2>
              <div className='space-y-4 text-left text-slate-700'>
                <div className='flex items-start gap-4'>
                  <div className='flex-shrink-0 w-8 h-8 bg-excel text-white rounded-full flex items-center justify-center font-bold'>
                    1
                  </div>
                  <div>
                    <p className='font-semibold mb-1'>We'll Review Your Message</p>
                    <p className='text-slate-600'>
                      Our team will carefully review your project needs and requirements.
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='flex-shrink-0 w-8 h-8 bg-excel text-white rounded-full flex items-center justify-center font-bold'>
                    2
                  </div>
                  <div>
                    <p className='font-semibold mb-1'>We'll Get Back to You</p>
                    <p className='text-slate-600'>
                      You'll receive a response from us within one business day via email.
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='flex-shrink-0 w-8 h-8 bg-excel text-white rounded-full flex items-center justify-center font-bold'>
                    3
                  </div>
                  <div>
                    <p className='font-semibold mb-1'>Schedule a Consultation</p>
                    <p className='text-slate-600'>
                      We'll work with you to find a convenient time for a Teams or Zoom call to
                      discuss your project in detail.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-blue-50 border-l-4 border-excel p-6 mb-8 max-w-2xl mx-auto text-left'>
              <p className='text-slate-700 mb-2'>
                <strong>📧 Check Your Email</strong>
              </p>
              <p className='text-slate-600 text-sm'>
                We've sent you a confirmation email with next steps. Please check your inbox (and
                spam folder) for a message from us. The email will include a request for your
                preferred time slots for a consultation call.
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link to='/' className='btn-primary'>
                Return to Home
              </Link>
              <a
                href='mailto:rob@excelaccessconsultant.com'
                className='btn-secondary'
              >
                Contact Us Directly
              </a>
            </div>

            <div className='mt-12 pt-8 border-t border-slate-200'>
              <p className='text-slate-600 mb-4'>Need immediate assistance?</p>
              <p className='text-lg'>
                <a
                  href='tel:8017045604'
                  className='text-excel hover:text-excel-hover font-semibold'
                >
                  Call us at (801) 704-5604
                </a>
              </p>
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
                  <a href='/#services' className='hover:text-white transition-colors'>
                    Services
                  </a>
                </li>
                <li>
                  <a href='/#faq' className='hover:text-white transition-colors'>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href='/#contact' className='hover:text-white transition-colors'>
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
                  <a href='/#services' className='hover:text-white transition-colors'>
                    Process Automation
                  </a>
                </li>
                <li>
                  <a href='/#services' className='hover:text-white transition-colors'>
                    Enterprise Access Databases
                  </a>
                </li>
                <li>
                  <a href='/#services' className='hover:text-white transition-colors'>
                    Data Rescue & Optimization
                  </a>
                </li>
                <li>
                  <a href='/#contact' className='hover:text-white transition-colors'>
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

export default ThankYou;

