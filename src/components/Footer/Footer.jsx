
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
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
              <img src="/logo.png" alt="ExcelAccessConsultant" className="Footer-logo" />
            </div>
            <p className="Footer-text">
              Professional business automation and data solutions. 
              We design reliable systems, automation tools, and internal dashboards.
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
              <li><a href="#services" className="Footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Excel Automation</a></li>
              <li><a href="#services" className="Footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>MS Access Development</a></li>
              <li><a href="#services" className="Footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Data Processing & Reporting</a></li>
            </ul>
          </div>

          <div className="Footer-section">
            <h4 className="Footer-heading">Contact</h4>
            <div className="Footer-contact">
              <p className="Footer-text">
                <a href="mailto:rob.infodatix@gmail.com" className="Footer-link">
                  rob.infodatix@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="Footer-bottom">
          <p className="Footer-copyright">
            © {currentYear} ExcelAccessConsultant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

