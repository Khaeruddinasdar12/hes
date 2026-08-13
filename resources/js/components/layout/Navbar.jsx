 import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Set navbar background on scroll
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    closeMenu();
  };

  return (
    <>
      <nav className={`nav-container ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <Link to="/" className="nav-brand" onClick={scrollToTop}>
              <div className="nav-logo">HES</div>
              <div>
                <div className="nav-title">Hukum Ekonomi Syariah</div>
                <div className="nav-subtitle">FSHI - IAIN Bone</div>
              </div>
            </Link>
            
            <div className="nav-menu">
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                onClick={scrollToTop}
              >
                Beranda
              </Link>
              <Link 
                to="/about" 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                onClick={scrollToTop}
              >
                Tentang
              </Link>
              <Link 
                to="/lecturers" 
                className={`nav-link ${location.pathname === '/lecturers' ? 'active' : ''}`}
                onClick={scrollToTop}
              >
                Dosen
              </Link>
              <Link 
                to="/gallery" 
                className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}
                onClick={scrollToTop}
              >
                Galeri
              </Link>
                <Link
                  to="/news"
                  className={`nav-link ${location.pathname === '/news' ? 'active' : ''}`}
                  onClick={scrollToTop}
                >
                  Berita
                </Link>
                <Link
                  to="/announcements"
                  className={`nav-link ${location.pathname === '/announcements' ? 'active' : ''}`}
                  onClick={scrollToTop}
                >
                  Pengumuman
                </Link>
                  <Link
                    to="/services"
                    className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
                    onClick={scrollToTop}
                  >
                    Layanan
                  </Link>
                  <Link
                    to="/accreditation"
                    className={`nav-link ${location.pathname === '/accreditation' ? 'active' : ''}`}
                    onClick={scrollToTop}
                  >
                    Akreditasi
                  </Link>
                  <Link
                    to="/contact"
                    className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                    onClick={scrollToTop}
                  >
                    Kontak
                  </Link>
                  <a
                    href="https://www.scilit.com/sources/127219"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    Jurnal
                  </a>
            </div>
            
            <button className="nav-toggle" onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <h3>Menu</h3>
          <button onClick={closeMenu}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="mobile-menu-content">
          <Link 
            to="/" 
            className={`mobile-menu-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={scrollToTop}
          >
            Beranda
          </Link>
          <Link 
            to="/about" 
            className={`mobile-menu-link ${location.pathname === '/about' ? 'active' : ''}`}
            onClick={scrollToTop}
          >
            Tentang
          </Link>
          <Link 
            to="/lecturers" 
            className={`mobile-menu-link ${location.pathname === '/lecturers' ? 'active' : ''}`}
            onClick={scrollToTop}
          >
            Dosen
          </Link>
          <Link 
            to="/gallery" 
            className={`mobile-menu-link ${location.pathname === '/gallery' ? 'active' : ''}`}
            onClick={scrollToTop}
          >
            Galeri
          </Link>
            <Link
              to="/news"
              className={`mobile-menu-link ${location.pathname === '/news' ? 'active' : ''}`}
              onClick={scrollToTop}
            >
              Berita
            </Link>
            <Link
              to="/announcements"
              className={`mobile-menu-link ${location.pathname === '/announcements' ? 'active' : ''}`}
              onClick={scrollToTop}
            >
              Pengumuman
            </Link>
              <Link
                to="/services"
                className={`mobile-menu-link ${location.pathname === '/services' ? 'active' : ''}`}
                onClick={scrollToTop}
              >
                Layanan
              </Link>
              <Link
                to="/accreditation"
                className={`mobile-menu-link ${location.pathname === '/accreditation' ? 'active' : ''}`}
                onClick={scrollToTop}
              >
                Akreditasi
              </Link>
              <Link
                to="/contact"
                className={`mobile-menu-link ${location.pathname === '/contact' ? 'active' : ''}`}
                onClick={scrollToTop}
              >
                Kontak
              </Link>
              <a
                href="https://www.scilit.com/sources/127219"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-menu-link"
              >
                Jurnal
              </a>

        </div>
      </div>

      {/* Overlay */}
      <div 
        className={`overlay ${isMenuOpen ? 'active' : ''}`} 
        id="overlay" 
        onClick={closeMenu}
      ></div>
    </>
  );
};

export default Navbar;