'use client';

import Link from 'next/link';
import SEO from '../../components/SEO/SEO';
import { CTA } from '../../constants/site';

export default function PrivacyPolicy() {
  return (
    <div className='page'>
      <SEO
        title='Privacy Policy | ExcelAccessConsultant.com'
        description='Privacy Policy for ExcelAccessConsultant.com. Learn how we collect, use, and protect your personal information.'
        keywords='privacy policy, data protection, privacy'
        url='https://excelaccessconsultant.com/privacy-policy'
        ogTitle='Privacy Policy - ExcelAccessConsultant.com'
      />

      <section className='page-hero'>
        <div className='container page-section--centered'>
          <h1 className='page-hero__title'>Privacy Policy</h1>
          <p className='page-hero__lead text-muted'>
            Last updated:{' '}
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </section>

      <section className='page-section page-section--lg page-section--alt'>
        <div className='container'>
          <div className='privacy-doc'>
            <div className='privacy-prose'>
              <div className='privacy-section'>
                <h2>Introduction</h2>
                <p className='text-muted'>
                  ExcelAccessConsultant ("we," "our," or "us") is committed to protecting your
                  privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
                  your information when you visit our website or use our services.
                </p>
              </div>

              <div className='privacy-section'>
                <h2>Information We Collect</h2>
                <p className='text-muted'>
                  We may collect information that you provide directly to us, including:
                </p>
                <ul className='privacy-list'>
                  <li className='privacy-list__item'>
                    <span className='privacy-list__bullet'>•</span>
                    <span>Name and contact information (email address, phone number)</span>
                  </li>
                  <li className='privacy-list__item'>
                    <span className='privacy-list__bullet'>•</span>
                    <span>Company name and business information</span>
                  </li>
                  <li className='privacy-list__item'>
                    <span className='privacy-list__bullet'>•</span>
                    <span>Project requirements and details</span>
                  </li>
                  <li className='privacy-list__item'>
                    <span className='privacy-list__bullet'>•</span>
                    <span>Any other information you choose to provide</span>
                  </li>
                </ul>
                <p className='text-muted'>
                  We may also automatically collect certain information when you visit our website,
                  such as your IP address, browser type, device information, and usage patterns.
                </p>
              </div>

              <div className='privacy-section'>
                <h2>How We Use Your Information</h2>
                <p className='text-muted'>We use the information we collect to:</p>
                <ul className='privacy-list'>
                  <li className='privacy-list__item'>
                    <span className='privacy-list__bullet'>•</span>
                    <span>Provide, maintain, and improve our services</span>
                  </li>
                  <li className='privacy-list__item'>
                    <span className='privacy-list__bullet'>•</span>
                    <span>Respond to your inquiries and communicate with you</span>
                  </li>
                  <li className='privacy-list__item'>
                    <span className='privacy-list__bullet'>•</span>
                    <span>Process and deliver projects</span>
                  </li>
                  <li className='privacy-list__item'>
                    <span className='privacy-list__bullet'>•</span>
                    <span>Send you technical updates, security alerts, and support messages</span>
                  </li>
                  <li className='privacy-list__item'>
                    <span className='privacy-list__bullet'>•</span>
                    <span>Comply with legal obligations</span>
                  </li>
                </ul>
              </div>

              <div className='privacy-section'>
                <h2>Information Sharing</h2>
                <p className='text-muted'>
                  We do not sell, trade, or rent your personal information to third parties. We may
                  share your information only in the following circumstances:
                </p>
                <ul className='privacy-list'>
                  <li className='privacy-list__item'>
                    <span className='privacy-list__bullet'>•</span>
                    <span>With your explicit consent</span>
                  </li>
                  <li className='privacy-list__item'>
                    <span className='privacy-list__bullet'>•</span>
                    <span>To comply with legal obligations or respond to legal requests</span>
                  </li>
                  <li className='privacy-list__item'>
                    <span className='privacy-list__bullet'>•</span>
                    <span>To protect our rights, privacy, safety, or property</span>
                  </li>
                  <li className='privacy-list__item'>
                    <span className='privacy-list__bullet'>•</span>
                    <span>
                      With service providers who assist us in operating our business (under strict
                      confidentiality agreements)
                    </span>
                  </li>
                </ul>
              </div>

              <div className='privacy-section'>
                <h2>Data Security</h2>
                <p className='text-muted'>
                  We implement appropriate technical and organizational measures to protect your
                  personal information against unauthorized access, alteration, disclosure, or
                  destruction. However, no method of transmission over the internet or electronic
                  storage is 100% secure.
                </p>
              </div>

              <div className='privacy-section'>
                <h2>Data Retention</h2>
                <p className='text-muted'>
                  We retain your personal information only for as long as necessary to fulfill the
                  purposes outlined in this Privacy Policy, unless a longer retention period is
                  required or permitted by law.
                </p>
              </div>

              <div className='privacy-section'>
                <h2>Your Rights</h2>
                <p className='text-muted'>
                  Depending on your location, you may have certain rights regarding your personal
                  information, including:
                </p>
                <ul className='privacy-list'>
                  <li className='privacy-list__item'>
                    <span className='privacy-list__bullet'>•</span>
                    <span>The right to access your personal information</span>
                  </li>
                  <li className='privacy-list__item'>
                    <span className='privacy-list__bullet'>•</span>
                    <span>The right to correct inaccurate information</span>
                  </li>
                  <li className='privacy-list__item'>
                    <span className='privacy-list__bullet'>•</span>
                    <span>The right to request deletion of your information</span>
                  </li>
                  <li className='privacy-list__item'>
                    <span className='privacy-list__bullet'>•</span>
                    <span>The right to object to processing of your information</span>
                  </li>
                  <li className='privacy-list__item'>
                    <span className='privacy-list__bullet'>•</span>
                    <span>The right to data portability</span>
                  </li>
                </ul>
                <p className='text-muted'>
                  To exercise these rights, please contact us using the information provided in the{' '}
                  <Link href='/contact' className='text-link text-link--underline'>
                    Contact
                  </Link>{' '}
                  section.
                </p>
              </div>

              <div className='privacy-section'>
                <h2>Cookies and Tracking</h2>
                <p className='text-muted'>
                  Our website may use cookies and similar tracking technologies to enhance your
                  experience. You can set your browser to refuse cookies, but this may limit some
                  functionality of the site.
                </p>
              </div>

              <div className='privacy-section'>
                <h2>Third-Party Links</h2>
                <p className='text-muted'>
                  Our website may contain links to third-party websites. We are not responsible for
                  the privacy practices of these external sites. We encourage you to review the
                  privacy policies of any third-party sites you visit.
                </p>
              </div>

              <div className='privacy-section'>
                <h2>Changes to This Policy</h2>
                <p className='text-muted'>
                  We may update this Privacy Policy from time to time. We will notify you of any
                  changes by posting the new Privacy Policy on this page and updating the "Last
                  updated" date.
                </p>
              </div>

              <div className='privacy-section privacy-section--bordered'>
                <h2>Contact Us</h2>
                <p className='text-muted'>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className='stack stack--sm'>
                  <div>
                    <p className='text-muted-sm'>Email</p>
                    <a href='mailto:rob@excelaccessconsultant.com' className='text-link'>
                      rob@excelaccessconsultant.com
                    </a>
                  </div>
                  <div>
                    <p className='text-muted-sm'>Phone</p>
                    <a href={CTA.phoneHref} className='text-link'>
                      {CTA.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
