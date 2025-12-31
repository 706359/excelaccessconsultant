import Section from '../../components/Section/Section';

const PrivacyPolicy = () => {
  return (
    <div className="PrivacyPolicy">
      <Section background="secondary" className="PrivacyPolicy-hero">
        <div className="PrivacyPolicyHero">
          <h1 className="PrivacyPolicyHero-title">Privacy Policy</h1>
          <p className="PrivacyPolicyHero-subtitle">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </Section>

      <Section>
        <div className="PrivacyPolicy-content">
          <div className="PrivacyPolicy-section">
            <h2 className="PrivacyPolicy-section-title">Introduction</h2>
            <p className="PrivacyPolicy-section-text">
              ExcelAccessConsultant ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website or use our services.
            </p>
          </div>

          <div className="PrivacyPolicy-section">
            <h2 className="PrivacyPolicy-section-title">Information We Collect</h2>
            <p className="PrivacyPolicy-section-text">
              We may collect information that you provide directly to us, including:
            </p>
            <ul className="PrivacyPolicy-list">
              <li>Name and contact information (email address, phone number)</li>
              <li>Company name and business information</li>
              <li>Project requirements and details</li>
              <li>Any other information you choose to provide</li>
            </ul>
            <p className="PrivacyPolicy-section-text">
              We may also automatically collect certain information when you visit our website, such as 
              your IP address, browser type, device information, and usage patterns.
            </p>
          </div>

          <div className="PrivacyPolicy-section">
            <h2 className="PrivacyPolicy-section-title">How We Use Your Information</h2>
            <p className="PrivacyPolicy-section-text">
              We use the information we collect to:
            </p>
            <ul className="PrivacyPolicy-list">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and communicate with you</li>
              <li>Process and deliver projects</li>
              <li>Send you technical updates, security alerts, and support messages</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div className="PrivacyPolicy-section">
            <h2 className="PrivacyPolicy-section-title">Information Sharing</h2>
            <p className="PrivacyPolicy-section-text">
              We do not sell, trade, or rent your personal information to third parties. We may share 
              your information only in the following circumstances:
            </p>
            <ul className="PrivacyPolicy-list">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations or respond to legal requests</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>With service providers who assist us in operating our business (under strict confidentiality agreements)</li>
            </ul>
          </div>

          <div className="PrivacyPolicy-section">
            <h2 className="PrivacyPolicy-section-title">Data Security</h2>
            <p className="PrivacyPolicy-section-text">
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. However, 
              no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </div>

          <div className="PrivacyPolicy-section">
            <h2 className="PrivacyPolicy-section-title">Data Retention</h2>
            <p className="PrivacyPolicy-section-text">
              We retain your personal information only for as long as necessary to fulfill the purposes 
              outlined in this Privacy Policy, unless a longer retention period is required or 
              permitted by law.
            </p>
          </div>

          <div className="PrivacyPolicy-section">
            <h2 className="PrivacyPolicy-section-title">Your Rights</h2>
            <p className="PrivacyPolicy-section-text">
              Depending on your location, you may have certain rights regarding your personal information, 
              including:
            </p>
            <ul className="PrivacyPolicy-list">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to object to processing of your information</li>
              <li>The right to data portability</li>
            </ul>
            <p className="PrivacyPolicy-section-text">
              To exercise these rights, please contact us using the information provided in the Contact 
              section.
            </p>
          </div>

          <div className="PrivacyPolicy-section">
            <h2 className="PrivacyPolicy-section-title">Cookies and Tracking</h2>
            <p className="PrivacyPolicy-section-text">
              Our website may use cookies and similar tracking technologies to enhance your experience. 
              You can set your browser to refuse cookies, but this may limit some functionality of the site.
            </p>
          </div>

          <div className="PrivacyPolicy-section">
            <h2 className="PrivacyPolicy-section-title">Third-Party Links</h2>
            <p className="PrivacyPolicy-section-text">
              Our website may contain links to third-party websites. We are not responsible for the 
              privacy practices of these external sites. We encourage you to review the privacy policies 
              of any third-party sites you visit.
            </p>
          </div>

          <div className="PrivacyPolicy-section">
            <h2 className="PrivacyPolicy-section-title">Changes to This Policy</h2>
            <p className="PrivacyPolicy-section-text">
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </div>

          <div className="PrivacyPolicy-section">
            <h2 className="PrivacyPolicy-section-title">Contact Us</h2>
            <p className="PrivacyPolicy-section-text">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="PrivacyPolicy-contact">
              <strong>Email:</strong>{' '}
              <a href="mailto:rob@excelaccessconsultant.com" className="PrivacyPolicy-link">
                rob@excelaccessconsultant.com
              </a>
              <br />
              <strong>Phone:</strong>{' '}
              <a href="tel:8017045604" className="PrivacyPolicy-link">
                801-704-5604
              </a>
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default PrivacyPolicy;

