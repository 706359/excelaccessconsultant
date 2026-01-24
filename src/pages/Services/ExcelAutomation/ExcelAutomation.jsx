import { Link } from 'react-router-dom';
import Section from '../../../components/Layout/Section/Section';
import Card from '../../../components/ui/Card/Card';
import Button from '../../../components/ui/Button/Button';

const ExcelAutomation = () => {
  return (
    <div className="ExcelAutomation">
      <Section background="secondary" className="ServicePage-hero">
        <div className="ServicePageHero">
          <h1 className="ServicePageHero-title">Excel Automation</h1>
          <p className="ServicePageHero-subtitle">
            Stop doing the same Excel tasks over and over. I'll build you automation that saves time, 
            cuts down on mistakes, and makes your data actually useful.
          </p>
        </div>
      </Section>

      <Section>
        <div className="ServicePage-content">
          <div className="ServicePage-problem">
            <h2 className="ServicePage-section-title">The Problem</h2>
            <p className="ServicePage-section-text">
              You're probably spending way too much time in Excel doing the same things over and over. 
              Data entry, formatting, calculations, building reports—it's tedious, it's error-prone, and 
              it's eating up hours that your team could spend on actual work. There's got to be a better way.
            </p>
          </div>

          <div className="ServicePage-solution">
            <h2 className="ServicePage-section-title">Our Solution</h2>
            <p className="ServicePage-section-text">
              I'll build you custom Excel automation using VBA and Excel's advanced features. The boring, 
              repetitive stuff? That gets automated. Your workflows? Streamlined. And I'll build you dashboards 
              that actually help you understand your data, not just look at it.
            </p>
          </div>

          <div className="ServicePage-deliverables">
            <h2 className="ServicePage-section-title">What We Deliver</h2>
            <div className="ServicePage-deliverables-grid">
              <Card className="DeliverableCard">
                <h3 className="DeliverableCard-title">Custom VBA Macros</h3>
                <p className="DeliverableCard-description">
                  Custom macros built for your exact workflows. I'll automate what you need automated, 
                  from processing data to building reports.
                </p>
              </Card>
              <Card className="DeliverableCard">
                <h3 className="DeliverableCard-title">Automated Reporting</h3>
                <p className="DeliverableCard-description">
                  Reports that update themselves when new data comes in. No more manual compilation—just 
                  open the file and there's your report.
                </p>
              </Card>
              <Card className="DeliverableCard">
                <h3 className="DeliverableCard-title">Interactive Dashboards</h3>
                <p className="DeliverableCard-description">
                  Clean dashboards with charts, pivot tables, and controls that actually make sense. 
                  See your data the way you need to see it.
                </p>
              </Card>
              <Card className="DeliverableCard">
                <h3 className="DeliverableCard-title">Data Processing Tools</h3>
                <p className="DeliverableCard-description">
                  Tools that clean up messy data, check for errors, transform it how you need it, 
                  and pull it all together from different sources.
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
                  I'll take a look at what you're doing now, figure out where automation makes sense, 
                  and understand exactly what you need.
                </p>
              </div>
              <div className="ProcessStep">
                <div className="ProcessStep-number">2</div>
                <h3 className="ProcessStep-title">Design</h3>
                <p className="ProcessStep-description">
                  I'll design the solution, show you what it'll look like, and get your okay before 
                  I start building.
                </p>
              </div>
              <div className="ProcessStep">
                <div className="ProcessStep-number">3</div>
                <h3 className="ProcessStep-title">Development</h3>
                <p className="ProcessStep-description">
                  I'll build it with clean, documented code and test it to make sure it actually works 
                  when you need it.
                </p>
              </div>
              <div className="ProcessStep">
                <div className="ProcessStep-number">4</div>
                <h3 className="ProcessStep-title">Deployment & Training</h3>
                <p className="ProcessStep-description">
                  I'll get it set up for you, train your team on how to use it, and I'm here if you 
                  need help later.
                </p>
              </div>
            </div>
          </div>

          <div className="ServicePage-cta">
            <h2 className="ServicePage-cta-title">Ready to Automate Your Excel Workflows?</h2>
            <p className="ServicePage-cta-text">
              Let's talk about what's eating up your team's time. I'll show you how to automate it.
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

