import Section from '../../components/Section/Section';
import ContactForm from '../../components/ContactForm/ContactForm';

const Contact = () => {
  return (
    <div className="Contact">
      <Section background="secondary" className="Contact-hero">
        <div className="ContactHero">
          <h1 className="ContactHero-title">Let's Talk</h1>
          <p className="ContactHero-subtitle">
            Give me a call, shoot me an email, or fill out the form below. I'll get back to you within one business day.
          </p>
        </div>
      </Section>

      <Section>
        <div className="Contact-content">
          <div className="Contact-info">
            <h2 className="Contact-info-title">Contact Information</h2>
            
            <div className="Contact-info-section Contact-phone-section">
              <a href="tel:8017045604" className="Contact-phone">
                (801) 704-5604
              </a>
            </div>

            <div className="Contact-info-section">
              <h3 className="Contact-info-heading">Email</h3>
              <p className="Contact-info-text">
                <a href="mailto:rob@excelaccessconsultant.com" className="Contact-info-link">
                  rob@excelaccessconsultant.com
                </a>
              </p>
            </div>

            <div className="Contact-info-section">
              <h3 className="Contact-info-heading">What to Expect</h3>
              <ul className="Contact-service-list">
                <li className="Contact-service-item">Free quote for your project - no obligation</li>
                <li className="Contact-service-item">Consulting rate: $90/hour</li>
                <li className="Contact-service-item">I'll respond within one business day</li>
              </ul>
            </div>
          </div>

          <div className="Contact-form-wrapper">
            <h2 className="Contact-form-title">Send Me a Message</h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;

