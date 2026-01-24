import { Link } from 'react-router-dom';
import Section from '../../components/Layout/Section/Section';
import Card from '../../components/ui/Card/Card';

const Services = () => {
  return (
    <div className="Services">
      <Section background="secondary" className="Services-hero">
        <div className="ServicesHero">
          <h1 className="ServicesHero-title">What I Do</h1>
          <p className="ServicesHero-subtitle">
            I build automation and data solutions that fit your business. No fluff, just stuff that works.
          </p>
        </div>
      </Section>

      <Section>
        <div className="Services-grid">
          <Card hover className="ServiceCard">
            <div className="ServiceCard-icon">📊</div>
            <h2 className="ServiceCard-title">Excel Automation</h2>
            <p className="ServiceCard-description">
              Tired of doing the same Excel tasks over and over? I'll build you custom macros and automation 
              that actually work. Save hours every week and cut down on mistakes.
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
              Need a database that fits your business? I'll build you an Access system that your team 
              will actually use. From simple forms to complex multi-user setups.
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
              Turn your messy data into something useful. I'll set up automated processing and dashboards 
              that help you make decisions, not just look at numbers.
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
            Let's talk about what's slowing you down. I'll show you how to automate the tedious stuff and make your data work for you.
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

