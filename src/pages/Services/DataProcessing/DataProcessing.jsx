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
            Turn your messy data into something useful. I'll set up automated processing and dashboards 
            that help you make decisions, not just look at numbers.
          </p>
        </div>
      </Section>

      <Section>
        <div className="ServicePage-content">
          <div className="ServicePage-problem">
            <h2 className="ServicePage-section-title">The Problem</h2>
            <p className="ServicePage-section-text">
              You've got tons of data, but turning it into something useful? That's the hard part. 
              Manual processing is slow and full of mistakes, and building reports takes forever. 
              You need systems that handle the processing automatically and give you answers in a 
              format that actually makes sense.
            </p>
          </div>

          <div className="ServicePage-solution">
            <h2 className="ServicePage-section-title">Our Solution</h2>
            <p className="ServicePage-section-text">
              I'll build you automated processing pipelines and reporting systems that turn your raw 
              data into something you can actually use. I'll handle validation, cleaning, transformation, 
              and visualization so you get the information you need to make decisions, fast.
            </p>
          </div>

          <div className="ServicePage-deliverables">
            <h2 className="ServicePage-section-title">What We Deliver</h2>
            <div className="ServicePage-deliverables-grid">
              <Card className="DeliverableCard">
                <h3 className="DeliverableCard-title">Automated Data Pipelines</h3>
                <p className="DeliverableCard-description">
                  Complete automation that pulls data from wherever it lives, checks it for problems, 
                  and gets it ready for you to analyze.
                </p>
              </Card>
              <Card className="DeliverableCard">
                <h3 className="DeliverableCard-title">Custom Reporting Dashboards</h3>
                <p className="DeliverableCard-description">
                  Clean dashboards with charts, graphs, and the metrics you care about. They update 
                  automatically when new data comes in.
                </p>
              </Card>
              <Card className="DeliverableCard">
                <h3 className="DeliverableCard-title">Data Validation & Cleaning</h3>
                <p className="DeliverableCard-description">
                  Tools that find and fix data problems automatically. Your data stays clean and 
                  reliable without you having to babysit it.
                </p>
              </Card>
              <Card className="DeliverableCard">
                <h3 className="DeliverableCard-title">Real-Time Analytics</h3>
                <p className="DeliverableCard-description">
                  Systems that give you current insights and metrics when you need them, so you can 
                  make decisions without waiting around.
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
                  I'll take a look at where your data comes from, what format it's in, and how good 
                  it is so I know what we're dealing with.
                </p>
              </div>
              <div className="ProcessStep">
                <div className="ProcessStep-number">2</div>
                <h3 className="ProcessStep-title">Pipeline Design</h3>
                <p className="ProcessStep-description">
                  I'll design how the processing will work, figure out what transformations you need, 
                  and plan out how the reports should look.
                </p>
              </div>
              <div className="ProcessStep">
                <div className="ProcessStep-number">3</div>
                <h3 className="ProcessStep-title">Development</h3>
                <p className="ProcessStep-description">
                  I'll build the automation and dashboards with solid error handling and validation 
                  so things don't break when something unexpected happens.
                </p>
              </div>
              <div className="ProcessStep">
                <div className="ProcessStep-number">4</div>
                <h3 className="ProcessStep-title">Deployment & Optimization</h3>
                <p className="ProcessStep-description">
                  I'll get it set up, keep an eye on how it's performing, tweak it if needed, and 
                  I'm here if you need help.
                </p>
              </div>
            </div>
          </div>

          <div className="ServicePage-cta">
            <h2 className="ServicePage-cta-title">Ready to Unlock Your Data Insights?</h2>
            <p className="ServicePage-cta-text">
              Let's talk about your data. I'll show you how to automate the processing and build 
              reports that actually help.
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

