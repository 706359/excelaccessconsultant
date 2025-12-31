import { Link } from 'react-router-dom';
import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';

const Home = () => {
  return (
    <div className="Home">
      {/* Hero Section */}
      <Section background="secondary" className="Home-hero">
        <div className="Hero">
          <div className="Hero-content">
            <h1 className="Hero-title">
              Business Automation & Data Solutions
            </h1>
            <p className="Hero-subtitle">
              We design reliable systems, automation tools, and internal dashboards 
              that streamline your operations and drive business growth.
            </p>
            <div className="Hero-actions">
              <Button variant="primary" size="large" as={Link} to="/contact">
                Get Started
              </Button>
              <Button variant="secondary" size="large" as={Link} to="/services">
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Trust Indicators */}
      <Section>
        <div className="TrustIndicators">
          <div className="TrustIndicators-item">
            <div className="TrustIndicators-number">10+</div>
            <div className="TrustIndicators-label">Years of Experience</div>
          </div>
          <div className="TrustIndicators-item">
            <div className="TrustIndicators-number">500+</div>
            <div className="TrustIndicators-label">Projects Delivered</div>
          </div>
          <div className="TrustIndicators-item">
            <div className="TrustIndicators-number">98%</div>
            <div className="TrustIndicators-label">Client Satisfaction</div>
          </div>
          <div className="TrustIndicators-item">
            <div className="TrustIndicators-number">24/7</div>
            <div className="TrustIndicators-label">Support Available</div>
          </div>
        </div>
      </Section>

      {/* Services Preview */}
      <Section background="secondary">
        <div className="ServicesPreview">
          <h2 className="ServicesPreview-title">Our Services</h2>
          <p className="ServicesPreview-subtitle">
            Comprehensive solutions to automate your business processes and unlock the power of your data.
          </p>
          <div className="ServicesPreview-grid">
            <Card hover className="ServiceCard">
              <div className="ServiceCard-icon">📊</div>
              <h3 className="ServiceCard-title">Excel Automation</h3>
              <p className="ServiceCard-description">
                Transform your Excel workflows with custom macros, VBA solutions, and automated reporting systems.
              </p>
              <Link to="/services/excel-automation" className="ServiceCard-link">
                Learn More →
              </Link>
            </Card>

            <Card hover className="ServiceCard">
              <div className="ServiceCard-icon">🗄️</div>
              <h3 className="ServiceCard-title">MS Access Development</h3>
              <p className="ServiceCard-description">
                Build robust database applications and management systems tailored to your business needs.
              </p>
              <Link to="/services/ms-access-development" className="ServiceCard-link">
                Learn More →
              </Link>
            </Card>

            <Card hover className="ServiceCard">
              <div className="ServiceCard-icon">📈</div>
              <h3 className="ServiceCard-title">Data Processing & Reporting</h3>
              <p className="ServiceCard-description">
                Extract insights from your data with automated processing pipelines and comprehensive reporting dashboards.
              </p>
              <Link to="/services/data-processing" className="ServiceCard-link">
                Learn More →
              </Link>
            </Card>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <div className="WhyChooseUs">
          <h2 className="WhyChooseUs-title">Why Choose Us</h2>
          <div className="WhyChooseUs-grid">
            <div className="WhyChooseUs-item">
              <div className="WhyChooseUs-icon">⚡</div>
              <h3 className="WhyChooseUs-item-title">Proven Process</h3>
              <p className="WhyChooseUs-item-description">
                Our systematic approach ensures consistent delivery, from initial consultation to final deployment and support.
              </p>
            </div>
            <div className="WhyChooseUs-item">
              <div className="WhyChooseUs-icon">🛡️</div>
              <h3 className="WhyChooseUs-item-title">Reliable Solutions</h3>
              <p className="WhyChooseUs-item-description">
                We build robust, scalable systems that stand the test of time and adapt to your evolving business needs.
              </p>
            </div>
            <div className="WhyChooseUs-item">
              <div className="WhyChooseUs-icon">💬</div>
              <h3 className="WhyChooseUs-item-title">Clear Communication</h3>
              <p className="WhyChooseUs-item-description">
                Transparent communication throughout the project lifecycle, keeping you informed every step of the way.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Dashboard Visual Section */}
      <Section background="secondary">
        <div className="DashboardVisual">
          <h2 className="DashboardVisual-title">Enterprise-Grade Dashboards</h2>
          <p className="DashboardVisual-subtitle">
            Visualize your data with intuitive, professional dashboards designed for decision-makers.
          </p>
          <div className="DashboardVisual-grid">
            <Card className="DashboardCard">
              <div className="DashboardCard-header">
                <div className="DashboardCard-dot"></div>
                <div className="DashboardCard-dot"></div>
                <div className="DashboardCard-dot"></div>
              </div>
              <div className="DashboardCard-content">
                <div className="DashboardCard-bar DashboardCard-bar--75"></div>
                <div className="DashboardCard-bar DashboardCard-bar--60"></div>
                <div className="DashboardCard-bar DashboardCard-bar--85"></div>
                <div className="DashboardCard-bar DashboardCard-bar--45"></div>
              </div>
            </Card>
            <Card className="DashboardCard">
              <div className="DashboardCard-header">
                <div className="DashboardCard-dot"></div>
                <div className="DashboardCard-dot"></div>
                <div className="DashboardCard-dot"></div>
              </div>
              <div className="DashboardCard-content">
                <div className="DashboardCard-chart">
                  <div className="DashboardCard-chart-bar DashboardCard-chart-bar--40"></div>
                  <div className="DashboardCard-chart-bar DashboardCard-chart-bar--70"></div>
                  <div className="DashboardCard-chart-bar DashboardCard-chart-bar--55"></div>
                  <div className="DashboardCard-chart-bar DashboardCard-chart-bar--90"></div>
                  <div className="DashboardCard-chart-bar DashboardCard-chart-bar--65"></div>
                </div>
              </div>
            </Card>
            <Card className="DashboardCard">
              <div className="DashboardCard-header">
                <div className="DashboardCard-dot"></div>
                <div className="DashboardCard-dot"></div>
                <div className="DashboardCard-dot"></div>
              </div>
              <div className="DashboardCard-content">
                <div className="DashboardCard-metric">
                  <div className="DashboardCard-metric-value">$2.4M</div>
                  <div className="DashboardCard-metric-label">Revenue</div>
                </div>
                <div className="DashboardCard-metric">
                  <div className="DashboardCard-metric-value">1,247</div>
                  <div className="DashboardCard-metric-label">Customers</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="CTA">
          <h2 className="CTA-title">Ready to Transform Your Business?</h2>
          <p className="CTA-subtitle">
            Let's discuss how we can automate your processes and unlock the full potential of your data.
          </p>
          <div className="CTA-actions">
            <Button variant="primary" size="large" as={Link} to="/contact">
              Start a Conversation
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;

