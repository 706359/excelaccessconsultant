import { Link } from 'react-router-dom';
import Section from '../../../components/Layout/Section/Section';
import Card from '../../../components/ui/Card/Card';
import Button from '../../../components/ui/Button/Button';

const MSAccessDevelopment = () => {
  return (
    <div className="MSAccessDevelopment">
      <Section background="secondary" className="ServicePage-hero">
        <div className="ServicePageHero">
          <h1 className="ServicePageHero-title">MS Access Development</h1>
          <p className="ServicePageHero-subtitle">
            Need a database that fits your business? I'll build you an Access system that your team 
            will actually want to use. From simple forms to complex multi-user setups.
          </p>
        </div>
      </Section>

      <Section>
        <div className="ServicePage-content">
          <div className="ServicePage-problem">
            <h2 className="ServicePage-section-title">The Problem</h2>
            <p className="ServicePage-section-text">
              Spreadsheets can only take you so far. You need a real database that handles relationships, 
              keeps your data clean, works for multiple people, and doesn't make your team want to pull 
              their hair out. Off-the-shelf stuff doesn't fit your workflow, and enterprise systems are 
              way more than you need (and way more expensive).
            </p>
          </div>

          <div className="ServicePage-solution">
            <h2 className="ServicePage-section-title">Our Solution</h2>
            <p className="ServicePage-section-text">
              I'll build you a custom Access database that actually fits how you work. It'll have the 
              power of a real relational database, but with interfaces your team can actually use without 
              needing a manual.
            </p>
          </div>

          <div className="ServicePage-deliverables">
            <h2 className="ServicePage-section-title">What We Deliver</h2>
            <div className="ServicePage-deliverables-grid">
              <Card className="DeliverableCard">
                <h3 className="DeliverableCard-title">Custom Database Design</h3>
                <p className="DeliverableCard-description">
                  Databases built the right way—proper relationships, normalized structure, and rules 
                  that keep your data clean and consistent.
                </p>
              </Card>
              <Card className="DeliverableCard">
                <h3 className="DeliverableCard-title">User-Friendly Forms</h3>
                <p className="DeliverableCard-description">
                  Forms and interfaces that make sense. Your team can enter and manage data without 
                  needing a computer science degree.
                </p>
              </Card>
              <Card className="DeliverableCard">
                <h3 className="DeliverableCard-title">Advanced Queries</h3>
                <p className="DeliverableCard-description">
                  Queries and reports that get you exactly what you need, when you need it. No more 
                  digging through data to find answers.
                </p>
              </Card>
              <Card className="DeliverableCard">
                <h3 className="DeliverableCard-title">Multi-User Systems</h3>
                <p className="DeliverableCard-description">
                  Systems that handle multiple people working at the same time, with proper security 
                  and no data conflicts.
                </p>
              </Card>
            </div>
          </div>

          <div className="ServicePage-process">
            <h2 className="ServicePage-section-title">Our Process</h2>
            <div className="ServicePage-process-steps">
              <div className="ProcessStep">
                <div className="ProcessStep-number">1</div>
                <h3 className="ProcessStep-title">Requirements Analysis</h3>
                <p className="ProcessStep-description">
                  I'll work with you to understand your data, how you work, and exactly what you need.
                </p>
              </div>
              <div className="ProcessStep">
                <div className="ProcessStep-number">2</div>
                <h3 className="ProcessStep-title">Database Design</h3>
                <p className="ProcessStep-description">
                  I'll design the database structure, relationships, and everything else to fit 
                  exactly how you'll use it.
                </p>
              </div>
              <div className="ProcessStep">
                <div className="ProcessStep-number">3</div>
                <h3 className="ProcessStep-title">Development</h3>
                <p className="ProcessStep-description">
                  I'll build the forms, queries, reports, and automation with clean, documented code 
                  that you can actually understand.
                </p>
              </div>
              <div className="ProcessStep">
                <div className="ProcessStep-number">4</div>
                <h3 className="ProcessStep-title">Testing & Deployment</h3>
                <p className="ProcessStep-description">
                  I'll test it thoroughly, get it set up for you, train your team, and I'm here if 
                  you need help later.
                </p>
              </div>
            </div>
          </div>

          <div className="ServicePage-cta">
            <h2 className="ServicePage-cta-title">Ready to Build Your Custom Database?</h2>
            <p className="ServicePage-cta-text">
              Let's talk about what you need. I'll build you a database that actually fits your business.
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

export default MSAccessDevelopment;

