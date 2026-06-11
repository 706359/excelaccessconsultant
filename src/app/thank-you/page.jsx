'use client';

import Link from 'next/link';
import SEO from '../../components/SEO/SEO';
import Button from '../../components/ui/Button/Button';
import { IconMail } from '../../components/ui/Icons/Icons';
import { ICON_SIZE } from '../../constants/iconSizes';
import { CTA } from '../../constants/site';

export default function ThankYou() {
  return (
    <div className='page'>
      <SEO
        title='Thank You - ExcelAccessConsultant'
        description="Thanks for reaching out. I'll get back to you within one business day."
        keywords='thank you, contact confirmation'
        url='https://excelaccessconsultant.com/thank-you'
        ogTitle='Thank You - ExcelAccessConsultant'
      />

      <section className='thank-you-section'>
        <div className='container page-section--centered'>
          <div>
            <div className='thank-you__icon-wrap'>
              <svg
                className='thank-you__icon'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
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

          <h1>Thank You!</h1>

          <p className='text-lead'>Got your message. Thanks for reaching out.</p>

          <div className='thank-you__panel'>
            <h2>What Happens Next?</h2>
            <div className='thank-you__steps'>
              <div className='thank-you__step'>
                <div className='thank-you__step-num'>1</div>
                <div>
                  <p>
                    <strong>We'll Review Your Message</strong>
                  </p>
                  <p className='text-muted'>
                    I'll read through what you sent and figure out how I can help.
                  </p>
                </div>
              </div>
              <div className='thank-you__step'>
                <div className='thank-you__step-num'>2</div>
                <div>
                  <p>
                    <strong>We'll Get Back to You</strong>
                  </p>
                  <p className='text-muted'>
                    You'll hear back from me within one business day by email.
                  </p>
                </div>
              </div>
              <div className='thank-you__step'>
                <div className='thank-you__step-num'>3</div>
                <div>
                  <p>
                    <strong>Schedule a Consultation</strong>
                  </p>
                  <p className='text-muted'>
                    We'll find a time that works for a Teams or Zoom call and go through your
                    project.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='thank-you__callout'>
            <p className='thank-you__callout-title'>
              <strong>
                <IconMail size={ICON_SIZE.lg} aria-hidden />
                Check Your Email
              </strong>
            </p>
            <p className='text-muted-sm'>
              I've sent a confirmation email with next steps. Check your inbox (and spam) for a
              message from me, it'll ask for your preferred times for a call.
            </p>
          </div>

          <div className='thank-you__actions'>
            <Button variant='primary' size='large' as={Link} href='/'>
              Return to Home
            </Button>
            <Button
              variant='secondary'
              size='large'
              as='a'
              href='mailto:rob@excelaccessconsultant.com'
            >
              Contact Us Directly
            </Button>
          </div>

          <div className='thank-you__footer'>
            <p className='text-muted'>Need to talk sooner?</p>
            <p className='thank-you__phone'>
              <a href={CTA.phoneHref}>Call {CTA.phone}</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
