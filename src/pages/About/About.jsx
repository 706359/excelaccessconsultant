import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';
import './About.css';

const About = () => {
  return (
    <div className="About">
      <Section background="secondary" className="About-hero">
        <div className="AboutHero">
          <h1 className="AboutHero-title">About ExcelAccessConsultant</h1>
          <p className="AboutHero-subtitle">
            We specialize in designing reliable systems, automation tools, and internal dashboards 
            that help businesses streamline operations and make data-driven decisions.
          </p>
        </div>
      </Section>

      <Section>
        <div className="About-content">
          <div className="About-section">
            <h2 className="About-section-title">Our Mission</h2>
            <p className="About-section-text">
              Our mission is to empower businesses with custom automation solutions and data tools 
              that eliminate manual work, reduce errors, and unlock actionable insights. We believe 
              that every business, regardless of size, deserves access to enterprise-grade automation 
              and reporting capabilities.
            </p>
          </div>

          <div className="About-section">
            <h2 className="About-section-title">What We Do</h2>
            <p className="About-section-text">
              We design and develop custom solutions using Microsoft Excel, Access, and other data 
              processing tools. Our expertise spans from simple macro automation to complex database 
              systems and comprehensive reporting dashboards. Every solution we build is tailored to 
              your specific business needs and designed for long-term reliability.
            </p>
          </div>

          <div className="About-section">
            <h2 className="About-section-title">Our Approach</h2>
            <div className="About-approach-grid">
              <Card className="ApproachCard">
                <h3 className="ApproachCard-title">1. Understand</h3>
                <p className="ApproachCard-description">
                  We start by thoroughly understanding your business processes, pain points, and goals. 
                  This deep understanding ensures our solutions address real needs.
                </p>
              </Card>
              <Card className="ApproachCard">
                <h3 className="ApproachCard-title">2. Design</h3>
                <p className="ApproachCard-description">
                  We design solutions that are both powerful and user-friendly, ensuring your team can 
                  adopt and maintain them with confidence.
                </p>
              </Card>
              <Card className="ApproachCard">
                <h3 className="ApproachCard-title">3. Build</h3>
                <p className="ApproachCard-description">
                  Our development process emphasizes quality, testing, and documentation. We build 
                  solutions that are robust, scalable, and maintainable.
                </p>
              </Card>
              <Card className="ApproachCard">
                <h3 className="ApproachCard-title">4. Support</h3>
                <p className="ApproachCard-description">
                  We provide ongoing support and maintenance to ensure your systems continue to perform 
                  optimally as your business evolves.
                </p>
              </Card>
            </div>
          </div>

          <div className="About-section">
            <h2 className="About-section-title">Why Work With Us</h2>
            <div className="About-values">
              <div className="About-value">
                <h3 className="About-value-title">Expertise</h3>
                <p className="About-value-text">
                  Over 10 years of experience in business automation and data solutions across 
                  various industries and use cases.
                </p>
              </div>
              <div className="About-value">
                <h3 className="About-value-title">Reliability</h3>
                <p className="About-value-text">
                  We build systems that you can depend on. Our solutions are thoroughly tested and 
                  designed for long-term stability.
                </p>
              </div>
              <div className="About-value">
                <h3 className="About-value-title">Communication</h3>
                <p className="About-value-text">
                  Clear, transparent communication throughout every project. You'll always know where 
                  things stand and what's coming next.
                </p>
              </div>
              <div className="About-value">
                <h3 className="About-value-title">Results</h3>
                <p className="About-value-text">
                  Our solutions deliver measurable results: time savings, error reduction, and 
                  improved decision-making capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;

