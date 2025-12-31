import { useEffect, useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (id) => {
    closeMenu();
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="Header">
      <div className="Header-inner">
        <a href="#home" className="Header-logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} aria-label="ExcelAccessConsultant Home">
          <img src="/logo.png" alt="ExcelAccessConsultant - Expert Excel and Access Consulting Services" className="Header-logo-image" width="200" height="60" />
        </a>
        
        <button 
          className="Header-menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`Header-menu-icon ${isMenuOpen ? 'Header-menu-icon--open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <nav className={`Header-nav ${isMenuOpen ? 'Header-nav--open' : ''}`}>
          <a 
            href="#home"
            className={`Header-link ${activeSection === 'home' ? 'Header-link--active' : ''}`}
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          >
            Home
          </a>
          <a 
            href="#about"
            className={`Header-link ${activeSection === 'about' ? 'Header-link--active' : ''}`}
            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
          >
            About
          </a>
          <a 
            href="#services"
            className={`Header-link ${activeSection === 'services' ? 'Header-link--active' : ''}`}
            onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
          >
            Services
          </a>
          <a 
            href="#faq"
            className={`Header-link ${activeSection === 'faq' ? 'Header-link--active' : ''}`}
            onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}
          >
            FAQ
          </a>
          <a 
            href="#contact"
            className={`Header-link ${activeSection === 'contact' ? 'Header-link--active' : ''}`}
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
