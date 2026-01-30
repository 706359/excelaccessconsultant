import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import Button from '../../components/ui/Button/Button';
import '../../styles/global.css';

function ThankYou() {
  return (
    <div className='bg-base min-h-screen text-slate-900 font-sans selection:bg-primary selection:text-white'>
      <SEO
        title='Thank You - ExcelAccessConsultant'
        description="Thanks for reaching out. I'll get back to you within one business day."
        keywords='thank you, contact confirmation'
        url='https://excelaccessconsultant.com/thank-you'
        ogTitle='Thank You - ExcelAccessConsultant'
      />

      <div>
        {/* Thank You Section */}
        <section className='py-12 md:py-20 min-h-[60vh] flex items-center'>
          <div className='max-w-7xl mx-auto px-6 text-center'>
            <div className='mb-8'>
              <div className='inline-flex items-center justify-center w-20 h-20 bg-excel-green/10 rounded-full mb-6'>
                <svg
                  className='w-12 h-12 text-excel-green'
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

            <p className='text-xl text-slate-700 mb-8 max-w-7xl mx-auto leading-relaxed'>
              Got your message—thanks for reaching out.
            </p>

            <div className='bg-slate-50 border border-slate-200 rounded-lg p-8 mb-8 max-w-7xl mx-auto'>
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
                      I'll read through what you sent and figure out how I can help.
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
                      You'll hear back from me within one business day by email.
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
                      We'll find a time that works for a Teams or Zoom call and go through your project.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-slate-50 border-l-4 border-excel p-6 mb-8 max-w-7xl mx-auto text-left'>
              <p className='text-slate-700 mb-2'>
                <strong>📧 Check Your Email</strong>
              </p>
              <p className='text-slate-600 text-sm'>
                I've sent a confirmation email with next steps. Check your inbox (and spam) for a message from me—it'll ask for your preferred times for a call.
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button variant='primary' as={Link} to='/'>
                Return to Home
              </Button>
              <Button variant='secondary' as='a' href='mailto:rob@excelaccessconsultant.com'>
                Contact Us Directly
              </Button>
            </div>

            <div className='mt-12 pt-8 border-t border-slate-200'>
              <p className='text-slate-600 mb-4'>Need to talk sooner?</p>
              <p className='text-lg'>
                <a
                  href='tel:8016163702'
                  className='text-excel hover:text-excel-hover font-semibold'
                >
                  Call 801-616-3702
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ThankYou;
