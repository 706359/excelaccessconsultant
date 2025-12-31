import { Link } from 'react-router-dom';
import Section from '../../../components/Section/Section';
import Card from '../../../components/Card/Card';
import Button from '../../../components/Button/Button';
import './ExcelAutomation.css';

const ExcelAutomation = () => {
  return (
    <div className="ExcelAutomation">
      <Section background="secondary" className="ServicePage-hero">
        <div className="ServicePageHero">
          <h1 className="ServicePageHero-title">Excel Automation</h1>
          <p className="ServicePageHero-subtitle">
            Transform your Excel workflows with custom automation solutions that save time, 
            reduce errors, and unlock the full potential of your data.
          </p>
        </div>
      </Section>

      <Section>
        <div className="ServicePage-content">
          <div className="ServicePage-problem">
            <h2 className="ServicePage-section-title">The Problem</h2>
            <p className="ServicePage-section-text">
              Many businesses rely heavily on Excel for data management, reporting, and analysis. 
              However, manual processes are time-consuming, error-prone, and don't scale. Your team 
              spends hours on repetitive tasks like data entry, formatting, calculations, and report 
              generation—time that could be better spent on strategic work.
            </p>
          </div>

          <div className="ServicePage-solution">
            <h2 className="ServicePage-section-title">Our Solution</h2>
            <p className="ServicePage-section-text">
              We design and develop custom Excel automation solutions using VBA (Visual Basic for 
              Applications) and advanced Excel features. Our solutions automate repetitive tasks, 
              streamline workflows, and create dynamic, interactive dashboards that make data 
              analysis effortless.
            </p>
          </div>

          <div className="ServicePage-deliverables">
            <h2 className="ServicePage-section-title">What We Deliver</h2>
            <div className="ServicePage-deliverables-grid">
              <Card className="DeliverableCard">
                <h3 className="DeliverableCard-title">Custom VBA Macros</h3>
                <p className="DeliverableCard-description">
                  Tailored macros that automate your specific workflows, from data processing to 
                  report generation.
                </p>
              </Card>
              <Card className="DeliverableCard">
                <h3 className="DeliverableCard-title">Automated Reporting</h3>
                <p className="DeliverableCard-description">
                  Dynamic reports that update automatically with new data, eliminating manual 
                  compilation work.
                </p>
              </Card>
              <Card className="DeliverableCard">
                <h3 className="DeliverableCard-title">Interactive Dashboards</h3>
                <p className="DeliverableCard-description">
                  Professional dashboards with charts, pivot tables, and interactive controls for 
                  real-time data visualization.
                </p>
              </Card>
              <Card className="DeliverableCard">
                <h3 className="DeliverableCard-title">Data Processing Tools</h3>
                <p className="DeliverableCard-description">
                  Automated tools for data cleaning, validation, transformation, and consolidation 
                  from multiple sources.
                </p>
              </Card>
            </div>
          </div>

          <div className="ServicePage-process">
            <h2 className="ServicePage-section-title">Our Process</h2>
            <div className="ServicePage-process-steps">
              <div className="ProcessStep">
                <div className="ProcessStep-number">1</div>
                <h3 className="ProcessStep-title">Discovery</h3>
                <p className="ProcessStep-description">
                  We analyze your current Excel workflows, identify automation opportunities, and 
                  understand your specific requirements.
                </p>
              </div>
              <div className="ProcessStep">
                <div className="ProcessStep-number">2</div>
                <h3 className="ProcessStep-title">Design</h3>
                <p className="ProcessStep-description">
                  We design the automation solution, create mockups, and get your approval before 
                  development begins.
                </p>
              </div>
              <div className="ProcessStep">
                <div className="ProcessStep-number">3</div>
                <h3 className="ProcessStep-title">Development</h3>
                <p className="ProcessStep-description">
                  We build the solution with clean, documented code and test it thoroughly to ensure 
                  reliability.
                </p>
              </div>
              <div className="ProcessStep">
                <div className="ProcessStep-number">4</div>
                <h3 className="ProcessStep-title">Deployment & Training</h3>
                <p className="ProcessStep-description">
                  We deploy the solution, provide training to your team, and offer ongoing support 
                  as needed.
                </p>
              </div>
            </div>
          </div>

          <div className="ServicePage-cta">
            <h2 className="ServicePage-cta-title">Ready to Automate Your Excel Workflows?</h2>
            <p className="ServicePage-cta-text">
              Let's discuss how we can help streamline your processes and save your team valuable time.
            </p>
            <Button variant="primary" size="large" as={Link} to="/contact">
              Get Started
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ExcelAutomation;

