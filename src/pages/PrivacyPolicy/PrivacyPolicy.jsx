import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import '../../styles/global.css';

const PrivacyPolicy = () => {
  return (
    <div className='bg-base min-h-screen text-slate-800 font-sans'>
      <SEO
        title='Privacy Policy | ExcelAccessConsultant.com'
        description='Privacy Policy for ExcelAccessConsultant.com. Learn how we collect, use, and protect your personal information.'
        keywords='privacy policy, data protection, privacy'
        url='https://excelaccessconsultant.com/privacy-policy'
        ogTitle='Privacy Policy - ExcelAccessConsultant.com'
      />

      {/* Hero Section */}
      <section className='py-8 md:py-12 bg-white border-b border-slate-200'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-display text-slate-900'>
            Privacy Policy
          </h1>
          <p className='text-lg md:text-xl text-slate-600 leading-relaxed'>
            Last updated:{' '}
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className='py-12 md:py-16 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-slate-200'>
            <div className='prose prose-slate max-w-none'>
              {/* Introduction */}
              <div className='mb-10'>
                <h2 className='text-heading-md md:text-heading-lg font-bold mb-4 font-display text-slate-900'>
                  Introduction
                </h2>
                <p className='text-slate-600 leading-relaxed'>
                  ExcelAccessConsultant ("we," "our," or "us") is committed to protecting your
                  privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
                  your information when you visit our website or use our services.
                </p>
              </div>

              {/* Information We Collect */}
              <div className='mb-10'>
                <h2 className='text-heading-md md:text-heading-lg font-bold mb-4 font-display text-slate-900'>
                  Information We Collect
                </h2>
                <p className='text-slate-600 leading-relaxed mb-4'>
                  We may collect information that you provide directly to us, including:
                </p>
                <ul className='list-none space-y-2 mb-4'>
                  <li className='text-slate-600 flex items-start gap-2'>
                    <span className='text-primary mt-1'>•</span>
                    <span>Name and contact information (email address, phone number)</span>
                  </li>
                  <li className='text-slate-600 flex items-start gap-2'>
                    <span className='text-primary mt-1'>•</span>
                    <span>Company name and business information</span>
                  </li>
                  <li className='text-slate-600 flex items-start gap-2'>
                    <span className='text-primary mt-1'>•</span>
                    <span>Project requirements and details</span>
                  </li>
                  <li className='text-slate-600 flex items-start gap-2'>
                    <span className='text-primary mt-1'>•</span>
                    <span>Any other information you choose to provide</span>
                  </li>
                </ul>
                <p className='text-slate-600 leading-relaxed'>
                  We may also automatically collect certain information when you visit our website,
                  such as your IP address, browser type, device information, and usage patterns.
                </p>
              </div>

              {/* How We Use Your Information */}
              <div className='mb-10'>
                <h2 className='text-heading-md md:text-heading-lg font-bold mb-4 font-display text-slate-900'>
                  How We Use Your Information
                </h2>
                <p className='text-slate-600 leading-relaxed mb-4'>
                  We use the information we collect to:
                </p>
                <ul className='list-none space-y-2'>
                  <li className='text-slate-600 flex items-start gap-2'>
                    <span className='text-primary mt-1'>•</span>
                    <span>Provide, maintain, and improve our services</span>
                  </li>
                  <li className='text-slate-600 flex items-start gap-2'>
                    <span className='text-primary mt-1'>•</span>
                    <span>Respond to your inquiries and communicate with you</span>
                  </li>
                  <li className='text-slate-600 flex items-start gap-2'>
                    <span className='text-primary mt-1'>•</span>
                    <span>Process and deliver projects</span>
                  </li>
                  <li className='text-slate-600 flex items-start gap-2'>
                    <span className='text-primary mt-1'>•</span>
                    <span>Send you technical updates, security alerts, and support messages</span>
                  </li>
                  <li className='text-slate-600 flex items-start gap-2'>
                    <span className='text-primary mt-1'>•</span>
                    <span>Comply with legal obligations</span>
                  </li>
                </ul>
              </div>

              {/* Information Sharing */}
              <div className='mb-10'>
                <h2 className='text-heading-md md:text-heading-lg font-bold mb-4 font-display text-slate-900'>
                  Information Sharing
                </h2>
                <p className='text-slate-600 leading-relaxed mb-4'>
                  We do not sell, trade, or rent your personal information to third parties. We may
                  share your information only in the following circumstances:
                </p>
                <ul className='list-none space-y-2'>
                  <li className='text-slate-600 flex items-start gap-2'>
                    <span className='text-primary mt-1'>•</span>
                    <span>With your explicit consent</span>
                  </li>
                  <li className='text-slate-600 flex items-start gap-2'>
                    <span className='text-primary mt-1'>•</span>
                    <span>To comply with legal obligations or respond to legal requests</span>
                  </li>
                  <li className='text-slate-600 flex items-start gap-2'>
                    <span className='text-primary mt-1'>•</span>
                    <span>To protect our rights, privacy, safety, or property</span>
                  </li>
                  <li className='text-slate-600 flex items-start gap-2'>
                    <span className='text-primary mt-1'>•</span>
                    <span>
                      With service providers who assist us in operating our business (under strict
                      confidentiality agreements)
                    </span>
                  </li>
                </ul>
              </div>

              {/* Data Security */}
              <div className='mb-10'>
                <h2 className='text-heading-md md:text-heading-lg font-bold mb-4 font-display text-slate-900'>
                  Data Security
                </h2>
                <p className='text-slate-600 leading-relaxed'>
                  We implement appropriate technical and organizational measures to protect your
                  personal information against unauthorized access, alteration, disclosure, or
                  destruction. However, no method of transmission over the internet or electronic
                  storage is 100% secure.
                </p>
              </div>

              {/* Data Retention */}
              <div className='mb-10'>
                <h2 className='text-heading-md md:text-heading-lg font-bold mb-4 font-display text-slate-900'>
                  Data Retention
                </h2>
                <p className='text-slate-600 leading-relaxed'>
                  We retain your personal information only for as long as necessary to fulfill the
                  purposes outlined in this Privacy Policy, unless a longer retention period is
                  required or permitted by law.
                </p>
              </div>

              {/* Your Rights */}
              <div className='mb-10'>
                <h2 className='text-heading-md md:text-heading-lg font-bold mb-4 font-display text-slate-900'>
                  Your Rights
                </h2>
                <p className='text-slate-600 leading-relaxed mb-4'>
                  Depending on your location, you may have certain rights regarding your personal
                  information, including:
                </p>
                <ul className='list-none space-y-2 mb-4'>
                  <li className='text-slate-600 flex items-start gap-2'>
                    <span className='text-primary mt-1'>•</span>
                    <span>The right to access your personal information</span>
                  </li>
                  <li className='text-slate-600 flex items-start gap-2'>
                    <span className='text-primary mt-1'>•</span>
                    <span>The right to correct inaccurate information</span>
                  </li>
                  <li className='text-slate-600 flex items-start gap-2'>
                    <span className='text-primary mt-1'>•</span>
                    <span>The right to request deletion of your information</span>
                  </li>
                  <li className='text-slate-600 flex items-start gap-2'>
                    <span className='text-primary mt-1'>•</span>
                    <span>The right to object to processing of your information</span>
                  </li>
                  <li className='text-slate-600 flex items-start gap-2'>
                    <span className='text-primary mt-1'>•</span>
                    <span>The right to data portability</span>
                  </li>
                </ul>
                <p className='text-slate-600 leading-relaxed'>
                  To exercise these rights, please contact us using the information provided in the{' '}
                  <Link
                    to='/contact'
                    className='text-primary hover:text-primary-hover font-semibold underline'
                  >
                    Contact
                  </Link>{' '}
                  section.
                </p>
              </div>

              {/* Cookies and Tracking */}
              <div className='mb-10'>
                <h2 className='text-heading-md md:text-heading-lg font-bold mb-4 font-display text-slate-900'>
                  Cookies and Tracking
                </h2>
                <p className='text-slate-600 leading-relaxed'>
                  Our website may use cookies and similar tracking technologies to enhance your
                  experience. You can set your browser to refuse cookies, but this may limit some
                  functionality of the site.
                </p>
              </div>

              {/* Third-Party Links */}
              <div className='mb-10'>
                <h2 className='text-heading-md md:text-heading-lg font-bold mb-4 font-display text-slate-900'>
                  Third-Party Links
                </h2>
                <p className='text-slate-600 leading-relaxed'>
                  Our website may contain links to third-party websites. We are not responsible for
                  the privacy practices of these external sites. We encourage you to review the
                  privacy policies of any third-party sites you visit.
                </p>
              </div>

              {/* Changes to This Policy */}
              <div className='mb-10'>
                <h2 className='text-heading-md md:text-heading-lg font-bold mb-4 font-display text-slate-900'>
                  Changes to This Policy
                </h2>
                <p className='text-slate-600 leading-relaxed'>
                  We may update this Privacy Policy from time to time. We will notify you of any
                  changes by posting the new Privacy Policy on this page and updating the "Last
                  updated" date.
                </p>
              </div>

              {/* Contact Us */}
              <div className='mb-10 pb-6 border-b border-slate-200'>
                <h2 className='text-heading-md md:text-heading-lg font-bold mb-4 font-display text-slate-900'>
                  Contact Us
                </h2>
                <p className='text-slate-600 leading-relaxed mb-4'>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className='space-y-3'>
                  <div>
                    <p className='text-sm font-semibold text-slate-700 mb-1'>Email</p>
                    <a
                      href='mailto:rob@excelaccessconsultant.com'
                      className='text-primary hover:text-primary-hover font-medium transition-colors duration-200'
                    >
                      rob@excelaccessconsultant.com
                    </a>
                  </div>
                  <div>
                    <p className='text-sm font-semibold text-slate-700 mb-1'>Phone</p>
                    <a
                      href='tel:8016163702'
                      className='text-primary hover:text-primary-hover font-medium transition-colors duration-200'
                    >
                      801-616-3702
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
};

export default PrivacyPolicy;
