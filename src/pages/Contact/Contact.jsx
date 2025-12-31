import Section from '../../components/Section/Section';
import ContactForm from '../../components/ContactForm/ContactForm';

const Contact = () => {
  return (
    <div className="Contact">
      <Section background="secondary" className="Contact-hero">
        <div className="ContactHero">
          <h1 className="ContactHero-title">Get in Touch</h1>
          <p className="ContactHero-subtitle">
            Call, email, or send the contact form and a Senior Programmer will be there for you.
          </p>
        </div>
      </Section>

      <Section>
        <div className="Contact-content">
          <div className="Contact-info">
            <h2 className="Contact-info-title">Contact Information</h2>
            
            <div className="Contact-info-section Contact-phone-section">
              <a href="tel:8017045604" className="Contact-phone">
                801-704-5604
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
              <h3 className="Contact-info-heading">Service Details</h3>
              <ul className="Contact-service-list">
                <li className="Contact-service-item">Free quote for your project</li>
                <li className="Contact-service-item">Consulting rate: $90/hr</li>
              </ul>
            </div>
          </div>

          <div className="Contact-form-wrapper">
            <h2 className="Contact-form-title">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;

