import { Link } from 'react-router-dom';
import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';
import './Services.css';

const Services = () => {
  return (
    <div className="Services">
      <Section background="secondary" className="Services-hero">
        <div className="ServicesHero">
          <h1 className="ServicesHero-title">Our Services</h1>
          <p className="ServicesHero-subtitle">
            Comprehensive automation and data solutions tailored to your business needs.
          </p>
        </div>
      </Section>

      <Section>
        <div className="Services-grid">
          <Card hover className="ServiceCard">
            <div className="ServiceCard-icon">📊</div>
            <h2 className="ServiceCard-title">Excel Automation</h2>
            <p className="ServiceCard-description">
              Transform your Excel workflows with custom macros, VBA solutions, and automated 
              reporting systems. Reduce manual work, eliminate errors, and save hours every week.
            </p>
            <ul className="ServiceCard-features">
              <li>Custom VBA macros and scripts</li>
              <li>Automated data processing</li>
              <li>Dynamic reporting dashboards</li>
              <li>Workflow optimization</li>
            </ul>
            <Link to="/services/excel-automation" className="ServiceCard-link">
              Learn More →
            </Link>
          </Card>

          <Card hover className="ServiceCard">
            <div className="ServiceCard-icon">🗄️</div>
            <h2 className="ServiceCard-title">MS Access Development</h2>
            <p className="ServiceCard-description">
              Build robust database applications and management systems tailored to your business. 
              From simple data entry forms to complex multi-user systems.
            </p>
            <ul className="ServiceCard-features">
              <li>Custom database design</li>
              <li>User-friendly forms and interfaces</li>
              <li>Advanced query development</li>
              <li>Multi-user system architecture</li>
            </ul>
            <Link to="/services/ms-access-development" className="ServiceCard-link">
              Learn More →
            </Link>
          </Card>

          <Card hover className="ServiceCard">
            <div className="ServiceCard-icon">📈</div>
            <h2 className="ServiceCard-title">Data Processing & Reporting</h2>
            <p className="ServiceCard-description">
              Extract insights from your data with automated processing pipelines and comprehensive 
              reporting dashboards designed for decision-makers.
            </p>
            <ul className="ServiceCard-features">
              <li>Automated data pipelines</li>
              <li>Custom reporting dashboards</li>
              <li>Data validation and cleaning</li>
              <li>Real-time analytics</li>
            </ul>
            <Link to="/services/data-processing" className="ServiceCard-link">
              Learn More →
            </Link>
          </Card>
        </div>
      </Section>

      <Section background="secondary">
        <div className="Services-cta">
          <h2 className="Services-cta-title">Ready to Get Started?</h2>
          <p className="Services-cta-text">
            Let's discuss how we can help automate your processes and unlock the power of your data.
          </p>
          <Link to="/contact" className="Services-cta-link">
            Contact Us
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default Services;

