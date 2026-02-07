import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button/Button';
import Card from '../../components/ui/Card/Card';
import Section from '../../components/Layout/Section/Section';

const Home = () => {
  return (
    <div className='Home'>
      {/* Hero Section */}
      <Section background='secondary' className='Home-hero'>
        <div className='Hero'>
          <div className='Hero-image'>
            <img
              src='/hero.jpeg'
              alt='Business Automation & Data Solutions'
              className='Hero-image-element'
              width={1200}
              height={630}
              fetchPriority='high'
              loading='eager'
              decoding='async'
            />
          </div>
          <div className='Hero-content'>
            <h1 className='Hero-title'>Excel & Access Consultant | Business Automation & Data Solutions</h1>
            <p className='Hero-subtitle'>
              I build reliable systems, automation tools, and dashboards that actually work.
              Let&apos;s streamline your operations and get your team back to what matters.
            </p>
            <div className='Hero-actions'>
              <Button variant='primary' size='large' as={Link} to='/contact'>
                Get Started
              </Button>
              <Button variant='secondary' size='large' as={Link} to='/services'>
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Trust Indicators */}
      <Section>
        <div className='TrustIndicators'>
          <div className='TrustIndicators-item'>
            <div className='TrustIndicators-number'>10+</div>
            <div className='TrustIndicators-label'>Years of Experience</div>
          </div>
          <div className='TrustIndicators-item'>
            <div className='TrustIndicators-number'>500+</div>
            <div className='TrustIndicators-label'>Projects Delivered</div>
          </div>
          <div className='TrustIndicators-item'>
            <div className='TrustIndicators-number'>98%</div>
            <div className='TrustIndicators-label'>Client Satisfaction</div>
          </div>
          <div className='TrustIndicators-item'>
            <div className='TrustIndicators-number'>24/7</div>
            <div className='TrustIndicators-label'>Support Available</div>
          </div>
        </div>
      </Section>

      {/* Services Preview */}
      <Section background='secondary'>
        <div className='ServicesPreview'>
          <h2 className='ServicesPreview-title'>Our Services</h2>
          <p className='ServicesPreview-subtitle'>
            Real solutions for real problems. I&apos;ll help you automate the tedious stuff and make
            your data work for you.
          </p>
          <div className='ServicesPreview-grid'>
            <Card hover className='ServiceCard'>
              <div className='ServiceCard-icon'>📊</div>
              <h3 className='ServiceCard-title'>Excel Automation</h3>
              <p className='ServiceCard-description'>
                Stop doing the same Excel tasks over and over. I&apos;ll build custom macros and
                automation that actually save you time.
              </p>
              <Link to='/services/excel-automation' className='ServiceCard-link'>
                Learn More →
              </Link>
            </Card>

            <Card hover className='ServiceCard'>
              <div className='ServiceCard-icon'>🗄️</div>
              <h3 className='ServiceCard-title'>MS Access Development</h3>
              <p className='ServiceCard-description'>
                Need a database that fits your business? I&apos;ll build you an Access system that
                your team will actually want to use.
              </p>
              <Link to='/services/ms-access-development' className='ServiceCard-link'>
                Learn More →
              </Link>
            </Card>

            <Card hover className='ServiceCard'>
              <div className='ServiceCard-icon'>📈</div>
              <h3 className='ServiceCard-title'>Data Processing & Reporting</h3>
              <p className='ServiceCard-description'>
                Turn your messy data into clear insights. I&apos;ll set up automated processing and
                dashboards that make sense.
              </p>
              <Link to='/services/data-processing' className='ServiceCard-link'>
                Learn More →
              </Link>
            </Card>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <div className='WhyChooseUs'>
          <h2 className='WhyChooseUs-title'>Why Choose Us</h2>
          <div className='WhyChooseUs-grid'>
            <div className='WhyChooseUs-item'>
              <div className='WhyChooseUs-icon'>⚡</div>
              <h3 className='WhyChooseUs-item-title'>Proven Process</h3>
              <p className='WhyChooseUs-item-description'>
                I&apos;ve got a process that works. From our first conversation to handing over the
                finished system, you&apos;ll know exactly what&apos;s happening.
              </p>
            </div>
            <div className='WhyChooseUs-item'>
              <div className='WhyChooseUs-icon'>🛡️</div>
              <h3 className='WhyChooseUs-item-title'>Reliable Solutions</h3>
              <p className='WhyChooseUs-item-description'>
                I build things that last. Your system will handle today&apos;s workload and grow
                with your business.
              </p>
            </div>
            <div className='WhyChooseUs-item'>
              <div className='WhyChooseUs-icon'>💬</div>
              <h3 className='WhyChooseUs-item-title'>Clear Communication</h3>
              <p className='WhyChooseUs-item-description'>
                No surprises, no jargon. I&apos;ll explain what I&apos;m doing in plain English and
                keep you in the loop.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Dashboard Visual Section */}
      <Section background='secondary'>
        <div className='DashboardVisual'>
          <h2 className='DashboardVisual-title'>Enterprise-Grade Dashboards</h2>
          <p className='DashboardVisual-subtitle'>
            See your data the way it should be seen. Clean, clear dashboards that help you make
            decisions, not just look at numbers.
          </p>
          <div className='DashboardVisual-grid'>
            <Card className='DashboardCard'>
              <div className='DashboardCard-header'>
                <div className='DashboardCard-dot'></div>
                <div className='DashboardCard-dot'></div>
                <div className='DashboardCard-dot'></div>
              </div>
              <div className='DashboardCard-content'>
                <div className='DashboardCard-bar DashboardCard-bar--75'></div>
                <div className='DashboardCard-bar DashboardCard-bar--60'></div>
                <div className='DashboardCard-bar DashboardCard-bar--85'></div>
                <div className='DashboardCard-bar DashboardCard-bar--45'></div>
              </div>
            </Card>
            <Card className='DashboardCard'>
              <div className='DashboardCard-header'>
                <div className='DashboardCard-dot'></div>
                <div className='DashboardCard-dot'></div>
                <div className='DashboardCard-dot'></div>
              </div>
              <div className='DashboardCard-content'>
                <div className='DashboardCard-chart'>
                  <div className='DashboardCard-chart-bar DashboardCard-chart-bar--40'></div>
                  <div className='DashboardCard-chart-bar DashboardCard-chart-bar--70'></div>
                  <div className='DashboardCard-chart-bar DashboardCard-chart-bar--55'></div>
                  <div className='DashboardCard-chart-bar DashboardCard-chart-bar--90'></div>
                  <div className='DashboardCard-chart-bar DashboardCard-chart-bar--65'></div>
                </div>
              </div>
            </Card>
            <Card className='DashboardCard'>
              <div className='DashboardCard-header'>
                <div className='DashboardCard-dot'></div>
                <div className='DashboardCard-dot'></div>
                <div className='DashboardCard-dot'></div>
              </div>
              <div className='DashboardCard-content'>
                <div className='DashboardCard-metric'>
                  <div className='DashboardCard-metric-value'>$2.4M</div>
                  <div className='DashboardCard-metric-label'>Revenue</div>
                </div>
                <div className='DashboardCard-metric'>
                  <div className='DashboardCard-metric-value'>1,247</div>
                  <div className='DashboardCard-metric-label'>Customers</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
