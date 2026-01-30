import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const establishedYear = 2020;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      // Scroll to the top of the section
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="Footer">
      <div className="Footer-inner">
        <div className="Footer-content">
          <div className="Footer-section">
            <div className="Footer-logo-wrapper">
              <img 
                src="/logo.png" 
                alt="ExcelAccessConsultant Logo" 
                className="h-14 md:h-16 w-auto"
                width="200"
                height="60"
                loading="lazy"
              />
            </div>
            <p className="Footer-text">
              Business automation and data solutions. I build reliable systems, automation tools, and internal dashboards.
            </p>
          </div>

          <div className="Footer-section">
            <h4 className="Footer-heading">Quick Links</h4>
            <ul className="Footer-links">
              <li><a href="#home" className="Footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
              <li><a href="#about" className="Footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
              <li><a href="#services" className="Footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
              <li><a href="#faq" className="Footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>FAQ</a></li>
              <li><a href="#contact" className="Footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
            </ul>
          </div>

          <div className="Footer-section">
            <h4 className="Footer-heading">Services</h4>
            <ul className="Footer-links">
              <li><Link to="/excel-automation" className="Footer-link">Excel Automation</Link></li>
              <li><Link to="/access-consulting" className="Footer-link">Access Database Consulting</Link></li>
              <li><Link to="/financial-modeling" className="Footer-link">Financial Modeling</Link></li>
              <li><Link to="/database-migration" className="Footer-link">Database Migration</Link></li>
              <li><Link to="/vba-development" className="Footer-link">VBA Development</Link></li>
            </ul>
          </div>

          <div className="Footer-section">
            <h4 className="Footer-heading">Contact</h4>
            <div className="Footer-contact">
              <p className="Footer-text">
                <a href="mailto:rob@excelaccessconsultant.com" className="Footer-link">
                  rob@excelaccessconsultant.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="Footer-bottom">
          <p className="Footer-copyright">
            © {establishedYear}–{currentYear} ExcelAccessConsultant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

