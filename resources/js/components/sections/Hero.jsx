import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  // Default to desktop to prevent layout shift on first render
  const [windowWidth, setWindowWidth] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
    return 1024; // Default to desktop size
  });
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Set initial width
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024;
  
  // Use desktop layout initially to prevent layout shift
  const displayMobile = isHydrated && isMobile;
  const displayTablet = isHydrated && isTablet;
  const displayDesktop = !isHydrated || isDesktop;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

    return (
      <section className="hero-section-custom" style={{ 
        background: 'linear-gradient(180deg, rgba(240, 253, 250, 0.8) 0%, rgba(204, 251, 241, 0.6) 50%, rgba(153, 246, 228, 0.4) 100%)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: displayMobile ? 'auto' : displayTablet ? '100vh' : '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: displayMobile ? 'calc(90px + var(--space-xl))' : displayTablet ? 'calc(90px + var(--space-lg))' : 'calc(90px + var(--space-sm))',
        paddingBottom: displayMobile ? 'var(--space-xl)' : displayTablet ? 'var(--space-lg)' : 'var(--space-sm)',
        paddingLeft: 0,
        paddingRight: 0
      }}>
      {/* Animated Background Patterns - Responsive */}
      <div className="hero-bg-pattern-1" style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: displayMobile ? '200px' : displayTablet ? '300px' : '400px',
        height: displayMobile ? '200px' : displayTablet ? '300px' : '400px',
        background: 'linear-gradient(135deg, rgba(14, 184, 166, 0.15), rgba(5, 150, 105, 0.1))',
        borderRadius: '50%',
        filter: 'blur(60px)',
        zIndex: 0,
        animation: 'float 6s ease-in-out infinite'
      }}></div>
      <div className="hero-bg-pattern-2" style={{
        position: 'absolute',
        bottom: '15%',
        left: '8%',
        width: displayMobile ? '150px' : displayTablet ? '250px' : '350px',
        height: displayMobile ? '150px' : displayTablet ? '250px' : '350px',
        background: 'linear-gradient(225deg, rgba(45, 212, 191, 0.12), rgba(20, 184, 166, 0.08))',
        borderRadius: '50%',
        filter: 'blur(70px)',
        zIndex: 0,
        animation: 'float 8s ease-in-out infinite reverse'
      }}></div>
      <div className="hero-bg-pattern-3" style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: displayMobile ? '300px' : displayTablet ? '450px' : '600px',
        height: displayMobile ? '300px' : displayTablet ? '450px' : '600px',
        background: 'radial-gradient(circle, rgba(14, 184, 166, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        zIndex: 0
      }}></div>

      {/* Geometric Shapes - Hidden on mobile */}
      <div className="hero-shape-1" style={{
        position: 'absolute',
        top: '20%',
        right: '15%',
        width: displayMobile ? '0' : displayTablet ? '80px' : '120px',
        height: displayMobile ? '0' : displayTablet ? '80px' : '120px',
        border: '2px solid rgba(14, 184, 166, 0.2)',
        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        transform: 'rotate(45deg)',
        zIndex: 0,
        animation: 'rotate 20s linear infinite',
        display: displayMobile ? 'none' : 'block'
      }}></div>
      <div className="hero-shape-2" style={{
        position: 'absolute',
        bottom: '25%',
        left: '12%',
        width: displayMobile ? '0' : displayTablet ? '60px' : '80px',
        height: displayMobile ? '0' : displayTablet ? '60px' : '80px',
        border: '2px solid rgba(5, 150, 105, 0.15)',
        borderRadius: '50%',
        zIndex: 0,
        animation: 'pulse 3s ease-in-out infinite',
        display: displayMobile ? 'none' : 'block'
      }}></div>

      <div className="container hero-container-wrapper" style={{ 
        position: 'relative', 
        zIndex: 1, 
        width: '100%', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: displayMobile ? '0 var(--space-md)' : displayTablet ? '0 var(--space-lg)' : '0 var(--space-xl)',
        overflow: 'visible'
      }}>
        <div className="hero-container" style={{ 
          display: 'grid',
          gridTemplateColumns: displayMobile ? '1fr' : displayTablet ? '1fr' : '1fr 1fr',
          gap: displayMobile ? 'var(--space-xl)' : displayTablet ? 'var(--space-2xl)' : 'var(--space-2xl)',
          alignItems: 'center',
          width: '100%'
        }}>
          {/* Left Content */}
          <div className="hero-content-left" style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: displayMobile ? 'var(--space-md)' : displayTablet ? 'var(--space-lg)' : 'var(--space-md)',
            width: '100%',
            maxWidth: '100%'
          }}>
            {/* Badge dengan icon - Fixed untuk tidak terpotong */}
            <div className="hero-badge" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: displayMobile ? 'var(--space-sm)' : 'var(--space-md)',
              padding: displayMobile ? 'var(--space-xs) var(--space-md)' : displayTablet ? 'var(--space-sm) var(--space-lg)' : 'var(--space-xs) var(--space-lg)',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 253, 250, 0.9))',
              borderRadius: 'var(--radius-full)',
              boxShadow: '0 4px 20px rgba(14, 184, 166, 0.2)',
              width: 'fit-content',
              maxWidth: displayMobile ? 'calc(100% - var(--space-md))' : displayTablet ? 'calc(100% - var(--space-lg))' : 'none',
              border: '1px solid rgba(14, 184, 166, 0.3)',
              backdropFilter: 'blur(10px)',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              boxSizing: 'border-box',
              marginLeft: displayMobile ? 'auto' : displayTablet ? 'auto' : '0',
              marginRight: displayMobile ? 'auto' : displayTablet ? 'auto' : '0',
              marginTop: displayMobile ? '0' : displayTablet ? '0' : '0',
              marginBottom: '0'
            }}>
              <div style={{
                width: displayMobile ? '28px' : displayTablet ? '30px' : '32px',
                height: displayMobile ? '28px' : displayTablet ? '30px' : '32px',
                minWidth: displayMobile ? '28px' : displayTablet ? '30px' : '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent-500), var(--emerald-600))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: displayMobile ? '0.75rem' : displayTablet ? '0.8125rem' : '0.875rem',
                flexShrink: 0
              }}>
                <i className="fas fa-shield-check"></i>
              </div>
              <span style={{ 
                fontSize: displayMobile ? '0.75rem' : displayTablet ? '0.8125rem' : '0.875rem', 
                fontWeight: '600',
                background: 'linear-gradient(135deg, var(--accent-700), var(--accent-600))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                whiteSpace: 'nowrap',
                overflow: 'visible',
                display: 'block'
              }}>
                Terakreditasi BAN-PT (Baik)
              </span>
            </div>

            {/* Main Title dengan gradient lebih menarik */}
            <h1 className="hero-title-custom" style={{ 
              textAlign: displayMobile ? 'center' : 'left',
              marginBottom: 0,
              marginTop: displayMobile ? '0' : displayTablet ? '0' : '0',
              fontSize: displayMobile ? 'clamp(2rem, 8vw, 2.5rem)' : displayTablet ? 'clamp(2.5rem, 6vw, 3.5rem)' : 'clamp(2.25rem, 4.5vw, 3.5rem)',
              lineHeight: '1.1',
              background: 'linear-gradient(135deg, var(--accent-700) 0%, var(--accent-600) 40%, var(--accent-500) 70%, var(--teal-500) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: '800',
              letterSpacing: '-0.02em',
              width: '100%'
            }}>
              {displayMobile ? (
                'Hukum Ekonomi Syariah'
              ) : (
                <>
                  Hukum<br/>Ekonomi<br/>Syariah
                </>
              )}
            </h1>

            {/* Divider Line */}
            <div style={{
              width: displayMobile ? '60px' : '80px',
              height: '3px',
              background: 'linear-gradient(90deg, var(--accent-600), var(--accent-400), var(--teal-400))',
              borderRadius: 'var(--radius-full)',
              margin: displayMobile ? 'var(--space-xs) auto' : 'var(--space-xs) 0'
            }}></div>

            {/* Subtitle */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: displayMobile ? 'var(--space-xs)' : 'var(--space-sm)', textAlign: displayMobile ? 'center' : 'left' }}>
              <p style={{ 
                fontSize: displayMobile ? 'clamp(0.9375rem, 3.5vw, 1.0625rem)' : displayTablet ? 'clamp(1rem, 2.5vw, 1.125rem)' : 'clamp(1rem, 1.8vw, 1.125rem)',
                fontWeight: '500',
                color: 'var(--gray-700)',
                lineHeight: '1.6',
                maxWidth: displayMobile ? '100%' : '550px',
                margin: '0 auto'
              }}>
                Mencetak Sarjana yang Unggul dalam <strong style={{ color: 'var(--accent-700)' }}>Hukum Ekonomi Syariah</strong> dengan Integritas dan Kompetensi Global
              </p>
              <p style={{ 
                fontSize: displayMobile ? '0.8125rem' : displayTablet ? '0.9375rem' : '0.9375rem',
                color: 'var(--gray-600)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-xs)',
                justifyContent: displayMobile ? 'center' : 'flex-start',
                marginTop: displayMobile ? '0' : 'var(--space-xs)'
              }}>
                <i className="fas fa-building" style={{ color: 'var(--accent-600)', fontSize: '0.875rem' }}></i>
                Fakultas Syariah dan Hukum Islam IAIN Bone
              </p>
            </div>

            {/* CTA Buttons dengan style baru - Responsive */}
            <div style={{ 
              display: 'flex', 
              flexDirection: displayMobile ? 'column' : 'row', 
              gap: displayMobile ? 'var(--space-sm)' : 'var(--space-sm)', 
              flexWrap: 'wrap',
              marginTop: displayMobile ? 'var(--space-md)' : displayTablet ? 'var(--space-md)' : 'var(--space-sm)',
              justifyContent: displayMobile ? 'center' : 'flex-start',
              width: '100%'
            }}>
              <Link
                to="/about"
                className="btn btn-primary hero-btn-primary"
                onClick={scrollToTop}
                style={{
                  padding: displayMobile ? 'var(--space-sm) var(--space-lg)' : displayTablet ? 'var(--space-sm) var(--space-xl)' : 'var(--space-sm) var(--space-xl)',
                  fontSize: displayMobile ? '0.875rem' : displayTablet ? '0.9375rem' : '0.9375rem',
                  background: 'linear-gradient(135deg, var(--accent-600), var(--accent-500), var(--teal-500))',
                  border: 'none',
                  boxShadow: '0 8px 24px rgba(14, 184, 166, 0.35)',
                  width: displayMobile ? '100%' : 'auto',
                  textAlign: 'center',
                  justifyContent: 'center'
                }}
              >
                <i className="fas fa-book-open" style={{ marginRight: 'var(--space-xs)', fontSize: '0.875rem' }}></i>
                Pelajari Lebih Lanjut
              </Link>
              <Link
                to="/lecturers"
                className="btn btn-outline hero-btn-outline"
                onClick={scrollToTop}
                style={{
                  padding: displayMobile ? 'var(--space-sm) var(--space-lg)' : displayTablet ? 'var(--space-sm) var(--space-xl)' : 'var(--space-sm) var(--space-xl)',
                  fontSize: displayMobile ? '0.875rem' : displayTablet ? '0.9375rem' : '0.9375rem',
                  borderColor: 'var(--accent-600)',
                  color: 'var(--accent-700)',
                  fontWeight: '600',
                  width: displayMobile ? '100%' : 'auto',
                  textAlign: 'center',
                  justifyContent: 'center'
                }}
              >
                <i className="fas fa-chalkboard-teacher" style={{ marginRight: 'var(--space-xs)', fontSize: '0.875rem' }}></i>
                Dosen & Staf
              </Link>
            </div>

            {/* PMB Link dengan style baru - Responsive */}
            <a
              href="https://pmb.iain-bone.ac.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-pmb-link"
              style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-xs)',
                padding: displayMobile ? 'var(--space-sm) var(--space-lg)' : displayTablet ? 'var(--space-sm) var(--space-xl)' : 'var(--space-sm) var(--space-lg)',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 253, 250, 0.9))',
                color: 'var(--accent-700)',
                borderRadius: 'var(--radius-lg)',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: displayMobile ? '0.875rem' : displayTablet ? '0.875rem' : '0.875rem',
                boxShadow: '0 4px 16px rgba(14, 184, 166, 0.2)',
                border: '2px solid rgba(14, 184, 166, 0.3)',
                transition: 'all 0.3s ease',
                width: displayMobile ? '100%' : 'fit-content',
                backdropFilter: 'blur(10px)',
                marginTop: displayMobile ? 'var(--space-sm)' : displayTablet ? 'var(--space-sm)' : 'var(--space-xs)',
                marginLeft: displayMobile ? 'auto' : displayTablet ? 'auto' : '0',
                marginRight: displayMobile ? 'auto' : displayTablet ? 'auto' : '0'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(14, 184, 166, 0.3)';
                e.currentTarget.style.borderColor = 'var(--accent-500)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(14, 184, 166, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(14, 184, 166, 0.3)';
              }}
            >
              <i className="fas fa-user-graduate" style={{ fontSize: displayMobile ? '1rem' : '1.1rem' }}></i>
              {displayMobile ? 'PMB' : 'Pendaftaran Mahasiswa Baru'}
            </a>
          </div>

          {/* Right Side - Visual Elements */}
          <div className="hero-visual" style={{
            position: 'relative',
            display: displayMobile ? 'none' : 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: displayTablet ? '350px' : displayDesktop ? '400px' : '500px',
            maxHeight: displayDesktop ? '450px' : 'none',
            width: '100%'
          }}>
            {/* Main Icon/Image Container */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: displayTablet ? '350px' : displayDesktop ? '420px' : '500px',
              aspectRatio: '1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto'
            }}>
            {/* Decorative Circles - Responsive */}
            <div style={{
              position: 'absolute',
              width: displayTablet ? '280px' : displayDesktop ? '320px' : '400px',
              height: displayTablet ? '280px' : displayDesktop ? '320px' : '400px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(14, 184, 166, 0.1), rgba(5, 150, 105, 0.05))',
              border: displayTablet ? '2px solid' : displayDesktop ? '2px solid' : '3px solid',
              borderColor: 'rgba(14, 184, 166, 0.2)',
              animation: 'pulse 4s ease-in-out infinite'
            }}></div>
            <div style={{
              position: 'absolute',
              width: displayTablet ? '220px' : displayDesktop ? '260px' : '320px',
              height: displayTablet ? '220px' : displayDesktop ? '260px' : '320px',
              borderRadius: '50%',
              background: 'linear-gradient(225deg, rgba(45, 212, 191, 0.08), rgba(20, 184, 166, 0.05))',
              border: '2px solid rgba(45, 212, 191, 0.15)',
              animation: 'pulse 3s ease-in-out infinite reverse'
            }}></div>
              
              {/* Center Icon - Responsive */}
              <div style={{
                position: 'relative',
                zIndex: 2,
                width: displayTablet ? '180px' : displayDesktop ? '200px' : '240px',
                height: displayTablet ? '180px' : displayDesktop ? '200px' : '240px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent-600), var(--accent-500), var(--teal-500))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 20px 60px rgba(14, 184, 166, 0.4)',
                border: displayTablet ? '6px solid' : displayDesktop ? '6px solid' : '8px solid',
                borderColor: 'rgba(255, 255, 255, 0.9)'
              }}>
                <i className="fas fa-balance-scale" style={{
                  fontSize: displayTablet ? '4.5rem' : displayDesktop ? '5rem' : '6rem',
                  color: 'white',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                }}></i>
              </div>

              {/* Floating Icons - Hidden on tablet, shown on desktop */}
              <div style={{
                position: 'absolute',
                top: '10%',
                right: '10%',
                width: displayTablet ? '0' : '80px',
                height: displayTablet ? '0' : '80px',
                borderRadius: 'var(--radius-lg)',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 253, 250, 0.9))',
                display: displayTablet ? 'none' : 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(14, 184, 166, 0.25)',
                border: '2px solid rgba(14, 184, 166, 0.2)',
                animation: 'float 5s ease-in-out infinite'
              }}>
                <i className="fas fa-coins" style={{ fontSize: '2rem', color: 'var(--accent-600)' }}></i>
              </div>
              <div style={{
                position: 'absolute',
                bottom: '15%',
                left: '8%',
                width: displayTablet ? '0' : '70px',
                height: displayTablet ? '0' : '70px',
                borderRadius: 'var(--radius-lg)',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 253, 250, 0.9))',
                display: displayTablet ? 'none' : 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(14, 184, 166, 0.25)',
                border: '2px solid rgba(14, 184, 166, 0.2)',
                animation: 'float 6s ease-in-out infinite reverse'
              }}>
                <i className="fas fa-handshake" style={{ fontSize: '1.75rem', color: 'var(--accent-600)' }}></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Mobile - < 640px */
        @media (max-width: 639px) {
          .hero-section-custom {
            min-height: auto !important;
            padding-top: calc(80px + var(--space-xl)) !important;
            padding-bottom: var(--space-xl) !important;
          }
          .hero-container {
            grid-template-columns: 1fr !important;
            gap: var(--space-xl) !important;
          }
          .hero-visual {
            display: none !important;
          }
          .hero-badge {
            margin: 0 auto;
            width: fit-content;
            max-width: 90%;
          }
          .hero-title-custom {
            text-align: center !important;
          }
        }
        
        /* Tablet - 640px to 1023px */
        @media (min-width: 640px) and (max-width: 1023px) {
          .hero-section-custom {
            min-height: 100vh !important;
            padding-top: calc(90px + var(--space-lg)) !important;
            padding-bottom: var(--space-lg) !important;
          }
          .hero-container {
            grid-template-columns: 1fr !important;
            gap: var(--space-2xl) !important;
          }
          .hero-visual {
            display: flex !important;
            min-height: 350px !important;
            margin-top: var(--space-lg);
          }
          .hero-content-left {
            text-align: center;
          }
          .hero-badge {
            margin: 0 auto;
          }
          .hero-title-custom {
            text-align: center !important;
          }
        }
        
          /* Desktop - >= 1024px */
          @media (min-width: 1024px) {
            .hero-section-custom {
              min-height: 100vh !important;
              padding-top: calc(90px + var(--space-sm)) !important;
              padding-bottom: var(--space-sm) !important;
              padding-left: 0 !important;
              padding-right: 0 !important;
            }
          .hero-container-wrapper {
            padding: 0 var(--space-xl) !important;
            overflow: visible !important;
          }
          .hero-container {
            grid-template-columns: 1fr 1fr !important;
            gap: var(--space-2xl) !important;
            align-items: center !important;
            overflow: visible !important;
          }
          .hero-visual {
            display: flex !important;
            min-height: 400px !important;
            max-height: 500px !important;
          }
          .hero-content-left {
            text-align: left !important;
            overflow: visible !important;
            max-width: 100% !important;
            padding-right: var(--space-lg) !important;
            position: relative !important;
          }
          .hero-badge {
            max-width: none !important;
            width: fit-content !important;
            padding: var(--space-xs) var(--space-lg) !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
            overflow: visible !important;
            white-space: nowrap !important;
            flex-shrink: 0 !important;
            position: relative !important;
            z-index: 10 !important;
          }
          .hero-badge span {
            overflow: visible !important;
            text-overflow: clip !important;
            white-space: nowrap !important;
          }
        }
        
        /* Large Desktop - >= 1280px */
        @media (min-width: 1280px) {
          .hero-container-wrapper {
            max-width: 1200px !important;
            padding: 0 var(--space-2xl) !important;
          }
          .hero-content-left {
            padding-right: var(--space-xl) !important;
          }
        }
        
        /* Ensure proper initial render */
        .hero-section-custom {
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Hero;