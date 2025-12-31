import { Link } from 'react-router-dom';
import Section from '../../../components/Section/Section';
import Card from '../../../components/Card/Card';
import Button from '../../../components/Button/Button';
import './MSAccessDevelopment.css';

const MSAccessDevelopment = () => {
  return (
    <div className="MSAccessDevelopment">
      <Section background="secondary" className="ServicePage-hero">
        <div className="ServicePageHero">
          <h1 className="ServicePageHero-title">MS Access Development</h1>
          <p className="ServicePageHero-subtitle">
            Build robust database applications and management systems tailored to your business needs, 
            from simple data entry forms to complex multi-user systems.
          </p>
        </div>
      </Section>

      <Section>
        <div className="ServicePage-content">
          <div className="ServicePage-problem">
            <h2 className="ServicePage-section-title">The Problem</h2>
            <p className="ServicePage-section-text">
              Managing business data efficiently requires more than spreadsheets. You need a proper 
              database system that can handle relationships, enforce data integrity, support multiple 
              users, and provide intuitive interfaces. Off-the-shelf solutions often don't fit your 
              specific workflows, and enterprise database systems can be overkill and expensive.
            </p>
          </div>

          <div className="ServicePage-solution">
            <h2 className="ServicePage-section-title">Our Solution</h2>
            <p className="ServicePage-section-text">
              We develop custom MS Access database applications that are perfectly tailored to your 
              business processes. Our solutions combine the power of relational databases with 
              user-friendly interfaces, making data management efficient and accessible to your team.
            </p>
          </div>

          <div className="ServicePage-deliverables">
            <h2 className="ServicePage-section-title">What We Deliver</h2>
            <div className="ServicePage-deliverables-grid">
              <Card className="DeliverableCard">
                <h3 className="DeliverableCard-title">Custom Database Design</h3>
                <p className="DeliverableCard-description">
                  Well-structured databases with proper relationships, normalization, and data 
                  integrity constraints.
                </p>
              </Card>
              <Card className="DeliverableCard">
                <h3 className="DeliverableCard-title">User-Friendly Forms</h3>
                <p className="DeliverableCard-description">
                  Intuitive forms and interfaces that make data entry and management simple for 
                  non-technical users.
                </p>
              </Card>
              <Card className="DeliverableCard">
                <h3 className="DeliverableCard-title">Advanced Queries</h3>
                <p className="DeliverableCard-description">
                  Complex queries and reports that extract exactly the information you need, when 
                  you need it.
                </p>
              </Card>
              <Card className="DeliverableCard">
                <h3 className="DeliverableCard-title">Multi-User Systems</h3>
                <p className="DeliverableCard-description">
                  Architectures that support multiple concurrent users with proper security and 
                  data locking.
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
                  We work with you to understand your data structure, workflows, and specific 
                  requirements.
                </p>
              </div>
              <div className="ProcessStep">
                <div className="ProcessStep-number">2</div>
                <h3 className="ProcessStep-title">Database Design</h3>
                <p className="ProcessStep-description">
                  We design the database schema, relationships, and structure optimized for your 
                  use case.
                </p>
              </div>
              <div className="ProcessStep">
                <div className="ProcessStep-number">3</div>
                <h3 className="ProcessStep-title">Development</h3>
                <p className="ProcessStep-description">
                  We build forms, queries, reports, and automation features with clean, documented 
                  code.
                </p>
              </div>
              <div className="ProcessStep">
                <div className="ProcessStep-number">4</div>
                <h3 className="ProcessStep-title">Testing & Deployment</h3>
                <p className="ProcessStep-description">
                  We thoroughly test the system, deploy it, train your team, and provide ongoing 
                  support.
                </p>
              </div>
            </div>
          </div>

          <div className="ServicePage-cta">
            <h2 className="ServicePage-cta-title">Ready to Build Your Custom Database?</h2>
            <p className="ServicePage-cta-text">
              Let's discuss how we can create a database solution that perfectly fits your business needs.
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

