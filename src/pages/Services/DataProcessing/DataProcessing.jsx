import { Link } from 'react-router-dom';
import Section from '../../../components/Section/Section';
import Card from '../../../components/Card/Card';
import Button from '../../../components/Button/Button';

const DataProcessing = () => {
  return (
    <div className="DataProcessing">
      <Section background="secondary" className="ServicePage-hero">
        <div className="ServicePageHero">
          <h1 className="ServicePageHero-title">Data Processing & Reporting</h1>
          <p className="ServicePageHero-subtitle">
            Extract insights from your data with automated processing pipelines and comprehensive 
            reporting dashboards designed for decision-makers.
          </p>
        </div>
      </Section>

      <Section>
        <div className="ServicePage-content">
          <div className="ServicePage-problem">
            <h2 className="ServicePage-section-title">The Problem</h2>
            <p className="ServicePage-section-text">
              Your business generates vast amounts of data, but turning that data into actionable 
              insights is challenging. Manual data processing is slow and error-prone, and 
              creating reports takes valuable time away from analysis. You need automated systems 
              that process data efficiently and present it in clear, decision-ready formats.
            </p>
          </div>

          <div className="ServicePage-solution">
            <h2 className="ServicePage-section-title">Our Solution</h2>
            <p className="ServicePage-section-text">
              We design and build automated data processing pipelines and reporting systems that 
              transform raw data into meaningful insights. Our solutions handle data validation, 
              cleaning, transformation, and visualization, giving you the information you need to 
              make informed decisions quickly.
            </p>
          </div>

          <div className="ServicePage-deliverables">
            <h2 className="ServicePage-section-title">What We Deliver</h2>
            <div className="ServicePage-deliverables-grid">
              <Card className="DeliverableCard">
                <h3 className="DeliverableCard-title">Automated Data Pipelines</h3>
                <p className="DeliverableCard-description">
                  End-to-end automation that processes data from multiple sources, validates it, 
                  and prepares it for analysis.
                </p>
              </Card>
              <Card className="DeliverableCard">
                <h3 className="DeliverableCard-title">Custom Reporting Dashboards</h3>
                <p className="DeliverableCard-description">
                  Professional dashboards with charts, graphs, and KPIs that update automatically 
                  with new data.
                </p>
              </Card>
              <Card className="DeliverableCard">
                <h3 className="DeliverableCard-title">Data Validation & Cleaning</h3>
                <p className="DeliverableCard-description">
                  Automated tools that identify and fix data quality issues, ensuring accuracy and 
                  reliability.
                </p>
              </Card>
              <Card className="DeliverableCard">
                <h3 className="DeliverableCard-title">Real-Time Analytics</h3>
                <p className="DeliverableCard-description">
                  Systems that provide up-to-date insights and metrics, enabling faster 
                  decision-making.
                </p>
              </Card>
            </div>
          </div>

          <div className="ServicePage-process">
            <h2 className="ServicePage-section-title">Our Process</h2>
            <div className="ServicePage-process-steps">
              <div className="ProcessStep">
                <div className="ProcessStep-number">1</div>
                <h3 className="ProcessStep-title">Data Assessment</h3>
                <p className="ProcessStep-description">
                  We analyze your data sources, formats, and quality to understand what we're 
                  working with.
                </p>
              </div>
              <div className="ProcessStep">
                <div className="ProcessStep-number">2</div>
                <h3 className="ProcessStep-title">Pipeline Design</h3>
                <p className="ProcessStep-description">
                  We design the processing workflow, identify transformation needs, and plan the 
                  reporting structure.
                </p>
              </div>
              <div className="ProcessStep">
                <div className="ProcessStep-number">3</div>
                <h3 className="ProcessStep-title">Development</h3>
                <p className="ProcessStep-description">
                  We build the processing automation and reporting dashboards with robust error 
                  handling and validation.
                </p>
              </div>
              <div className="ProcessStep">
                <div className="ProcessStep-number">4</div>
                <h3 className="ProcessStep-title">Deployment & Optimization</h3>
                <p className="ProcessStep-description">
                  We deploy the solution, monitor performance, optimize as needed, and provide 
                  ongoing support.
                </p>
              </div>
            </div>
          </div>

          <div className="ServicePage-cta">
            <h2 className="ServicePage-cta-title">Ready to Unlock Your Data Insights?</h2>
            <p className="ServicePage-cta-text">
              Let's discuss how we can automate your data processing and create powerful reporting 
              solutions for your business.
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

export default DataProcessing;

