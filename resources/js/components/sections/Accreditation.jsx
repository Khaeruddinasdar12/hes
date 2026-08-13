import React, { useState, useEffect } from 'react';

const Accreditation = () => {
  const [windowWidth, setWindowWidth] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
    return 1024;
  });
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    const checkMobile = () => {
      setWindowWidth(window.innerWidth);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  const displayTimeline = isHydrated ? !isMobile : true;
  // Data contoh periode akreditasi - bisa diganti dengan data dari API
  const accreditationData = [
    {
      periode: '2023-2028',
      deskripsi: 'Akreditasi S1 Hukum Ekonomi Syariah IAIN Bone (Baik) periode 2023-2028',
      file: '/asset/akreditasi/S1-HES-IAIN-2023-2028.pdf'
    },
  ];

  const handlePreview = (file) => {
    // Buka file di tab baru untuk preview
    window.open(file, '_blank');
  };

  const handleDownload = (file, periode) => {
    // Download file
    const link = document.createElement('a');
    link.href = file;
    link.download = `akreditasi-${periode}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Akreditasi Program Studi</h2>
          <p className="section-subtitle">Dokumen akreditasi Program Studi S1 Hukum Ekonomi Syariah</p>
        </div>
        
        {/* Timeline-style Accreditation List */}
        <div className="accreditation-timeline" style={{
          position: 'relative',
          marginTop: 'var(--space-2xl)',
          paddingLeft: isMobile ? '0' : isTablet ? 'var(--space-lg)' : 'var(--space-xl)'
        }}>
          {/* Timeline Line - Hidden on mobile */}
          <div className="timeline-line" style={{
            position: 'absolute',
            left: isMobile ? '0' : '16px',
            top: '0',
            bottom: '0',
            width: '2px',
            background: 'linear-gradient(180deg, var(--accent-600), var(--accent-500), var(--teal-500), var(--accent-400))',
            borderRadius: 'var(--radius-full)',
            display: displayTimeline ? 'block' : 'none'
          }}></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 'var(--space-lg)' : 'var(--space-xl)' }}>
            {accreditationData.map((item, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  display: 'flex',
                  gap: 'var(--space-xl)',
                  alignItems: 'flex-start'
                }}
              >
                {/* Timeline Dot - Hidden on mobile */}
                <div className="timeline-dot" style={{
                  position: 'absolute',
                  left: isMobile ? '0' : '-24px',
                  top: '12px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--accent-600), var(--accent-500))',
                  border: '3px solid white',
                  boxShadow: '0 2px 8px rgba(14, 184, 166, 0.3)',
                  zIndex: 2,
                  display: displayTimeline ? 'block' : 'none'
                }}></div>

                {/* Card dengan desain baru */}
                <div
                  style={{
                    flex: 1,
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(240, 253, 250, 0.5))',
                    borderRadius: 'var(--radius-lg)',
                    padding: isMobile ? 'var(--space-md)' : 'var(--space-lg)',
                    boxShadow: '0 2px 12px rgba(14, 184, 166, 0.12)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '1px solid rgba(14, 184, 166, 0.15)',
                    borderLeft: '3px solid',
                    borderLeftColor: index === 0 
                      ? 'var(--accent-600)' 
                      : index === 1 
                      ? 'var(--accent-500)' 
                      : index === 2 
                      ? 'var(--teal-500)' 
                      : 'var(--accent-400)',
                    position: 'relative',
                    overflow: 'hidden',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(4px) translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(14, 184, 166, 0.2)';
                    e.currentTarget.style.borderColor = 'rgba(14, 184, 166, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0) translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 12px rgba(14, 184, 166, 0.12)';
                    e.currentTarget.style.borderColor = 'rgba(14, 184, 166, 0.15)';
                  }}
                >
                  {/* Gradient overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '120px',
                    height: '120px',
                    background: index === 0 
                      ? 'linear-gradient(135deg, rgba(13, 148, 136, 0.06), transparent)' 
                      : index === 1 
                      ? 'linear-gradient(135deg, rgba(20, 184, 166, 0.06), transparent)' 
                      : index === 2 
                      ? 'linear-gradient(135deg, rgba(45, 212, 191, 0.06), transparent)' 
                      : 'linear-gradient(135deg, rgba(52, 211, 153, 0.06), transparent)',
                    borderRadius: '0 0 0 100%',
                    zIndex: 0
                  }}></div>

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    {/* Header dengan icon dan periode */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      marginBottom: 'var(--space-md)',
                      flexWrap: 'wrap',
                      gap: 'var(--space-sm)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', flex: 1 }}>
                        <div style={{
                          width: isMobile ? '40px' : '44px',
                          height: isMobile ? '40px' : '44px',
                          borderRadius: 'var(--radius-md)',
                          background: index === 0 
                            ? 'linear-gradient(135deg, var(--accent-600), var(--accent-500))' 
                            : index === 1 
                            ? 'linear-gradient(135deg, var(--accent-500), var(--teal-500))' 
                            : index === 2 
                            ? 'linear-gradient(135deg, var(--teal-500), var(--accent-400))' 
                            : 'linear-gradient(135deg, var(--accent-400), var(--teal-300))',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: isMobile ? '1rem' : '1.125rem',
                          boxShadow: '0 2px 8px rgba(14, 184, 166, 0.25)',
                          flexShrink: 0
                        }}>
                          <i className="fas fa-certificate"></i>
                        </div>
                        <div>
                          <div style={{
                            display: 'inline-block',
                            padding: '2px var(--space-sm)',
                            background: index === 0 
                              ? 'rgba(13, 148, 136, 0.1)' 
                              : index === 1 
                              ? 'rgba(20, 184, 166, 0.1)' 
                              : index === 2 
                              ? 'rgba(45, 212, 191, 0.1)' 
                              : 'rgba(52, 211, 153, 0.1)',
                            borderRadius: 'var(--radius-full)',
                            marginBottom: '4px'
                          }}>
                            <span style={{
                              fontSize: '0.6875rem',
                              fontWeight: '700',
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em',
                              background: index === 0 
                                ? 'linear-gradient(135deg, var(--accent-700), var(--accent-600))' 
                                : index === 1 
                                ? 'linear-gradient(135deg, var(--accent-600), var(--accent-500))' 
                                : index === 2 
                                ? 'linear-gradient(135deg, var(--accent-500), var(--teal-500))' 
                                : 'linear-gradient(135deg, var(--accent-400), var(--teal-400))',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text'
                            }}>
                              Periode {item.periode}
                            </span>
                          </div>
                          <h3 style={{
                            fontSize: isMobile ? '0.9375rem' : '1rem',
                            fontWeight: '600',
                            color: 'var(--gray-900)',
                            margin: 0,
                            lineHeight: '1.4'
                          }}>
                            Akreditasi Program Studi
                          </h3>
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p style={{
                      color: 'var(--gray-700)',
                      marginBottom: 'var(--space-md)',
                      lineHeight: '1.6',
                      fontSize: isMobile ? '0.8125rem' : '0.875rem',
                      paddingLeft: 'var(--space-sm)',
                      borderLeft: '2px solid',
                      borderLeftColor: index === 0 
                        ? 'var(--accent-300)' 
                        : index === 1 
                        ? 'var(--accent-400)' 
                        : index === 2 
                        ? 'var(--teal-400)' 
                        : 'var(--accent-300)'
                    }}>
                      {item.deskripsi}
                    </p>
                    
                    {/* Action Buttons */}
                    {/* Item Row */}
<div
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 'var(--space-sm) var(--space-md)',
    borderBottom: '1px solid rgba(0,0,0,0.05)',
  }}
>
  {/* === TEKS KIRI === */}
  <div
    style={{
      flex: '1 1 auto',
      textAlign: 'left',
      fontSize: '0.95rem',
      color: 'var(--text-800)',
      fontWeight: 500,
      minWidth: '200px',
    }}
  >
    {item.title}
  </div>

  {/* === TOMBOL KANAN === */}
  <div
    style={{
      display: 'flex',
      gap: 'var(--space-sm)',
      justifyContent: 'flex-end',
      flexShrink: 0,
    }}
  >
    {/* Tombol Preview */}
    <button
      onClick={() => handlePreview(item.file)}
      style={{
        padding: 'var(--space-sm) var(--space-md)',
        background:
          index === 0
            ? 'linear-gradient(135deg, var(--accent-600), var(--accent-500))'
            : index === 1
            ? 'linear-gradient(135deg, var(--accent-500), var(--teal-500))'
            : index === 2
            ? 'linear-gradient(135deg, var(--teal-500), var(--accent-400))'
            : 'linear-gradient(135deg, var(--accent-400), var(--teal-300))',
        color: 'white',
        border: 'none',
        borderRadius: 'var(--radius-md)',
        fontWeight: '600',
        fontSize: '0.875rem',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-xs)',
        boxShadow: '0 2px 8px rgba(14, 184, 166, 0.25)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-1px)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(14, 184, 166, 0.35)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(14, 184, 166, 0.25)';
      }}
    >
      <i className="fas fa-eye" style={{ fontSize: '0.75rem' }}></i>
      Preview
    </button>

    {/* Tombol Download */}
    <button
      onClick={() => handleDownload(item.file, item.periode)}
      style={{
        padding: 'var(--space-sm) var(--space-md)',
        background: 'rgba(255, 255, 255, 0.9)',
        color:
          index === 0
            ? 'var(--accent-600)'
            : index === 1
            ? 'var(--accent-500)'
            : index === 2
            ? 'var(--teal-500)'
            : 'var(--accent-400)',
        border: '1.5px solid',
        borderColor:
          index === 0
            ? 'var(--accent-600)'
            : index === 1
            ? 'var(--accent-500)'
            : index === 2
            ? 'var(--teal-500)'
            : 'var(--accent-400)',
        borderRadius: 'var(--radius-md)',
        fontWeight: '600',
        fontSize: '0.875rem',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-xs)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background =
          index === 0
            ? 'var(--accent-600)'
            : index === 1
            ? 'var(--accent-500)'
            : index === 2
            ? 'var(--teal-500)'
            : 'var(--accent-400)';
        e.currentTarget.style.color = 'white';
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
        e.currentTarget.style.color =
          index === 0
            ? 'var(--accent-600)'
            : index === 1
            ? 'var(--accent-500)'
            : index === 2
            ? 'var(--teal-500)'
            : 'var(--accent-400)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <i className="fas fa-download" style={{ fontSize: '0.75rem' }}></i>
      Download
    </button>
  </div>
</div>



                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info section dengan gradasi smooth */}
        <div style={{
          marginTop: 'var(--space-2xl)',
          background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.08) 0%, rgba(20, 184, 166, 0.1) 50%, rgba(45, 212, 191, 0.08) 100%)',
          borderRadius: 'var(--radius-lg)',
          padding: isMobile ? 'var(--space-lg)' : 'var(--space-xl)',
          border: '1px solid rgba(20, 184, 166, 0.2)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 2px 12px rgba(14, 184, 166, 0.12)'
        }}>
          {/* Decorative gradient overlay */}
          <div style={{
            position: 'absolute',
            top: '-40%',
            right: '-15%',
            width: isMobile ? '200px' : '300px',
            height: isMobile ? '200px' : '300px',
            background: 'radial-gradient(circle, rgba(20, 184, 166, 0.12) 0%, transparent 70%)',
            borderRadius: '50%',
            zIndex: 0
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-25%',
            left: '-12%',
            width: isMobile ? '150px' : '250px',
            height: isMobile ? '150px' : '250px',
            background: 'radial-gradient(circle, rgba(45, 212, 191, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            zIndex: 0
          }}></div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              fontSize: isMobile ? '2.5rem' : '3rem',
              background: 'linear-gradient(135deg, var(--accent-600), var(--accent-500), var(--teal-500))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: 'var(--space-sm)',
              filter: 'drop-shadow(0 2px 4px rgba(14, 184, 166, 0.2))'
            }}>
              <i className="fas fa-award"></i>
            </div>
            <h3 style={{
              fontSize: isMobile ? '1.125rem' : '1.25rem',
              fontWeight: '600',
              background: 'linear-gradient(135deg, var(--accent-700), var(--accent-600))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: 'var(--space-sm)'
            }}>
              Program Studi Terakreditasi
            </h3>
            <p style={{
              color: 'var(--gray-700)',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto',
              fontSize: isMobile ? '0.875rem' : '0.9375rem'
            }}>
              Program Studi Hukum Ekonomi Syariah telah memperoleh akreditasi dari Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT), 
              yang menunjukkan komitmen kami dalam menyelenggarakan pendidikan berkualitas tinggi.
            </p>
          </div>
        </div>

        <style>{`
          /* Mobile adjustments */
          @media (max-width: 639px) {
            .accreditation-timeline {
              padding-left: 0 !important;
            }
            .timeline-line,
            .timeline-dot {
              display: none !important;
            }
          }
          
          /* Tablet adjustments */
          @media (min-width: 640px) and (max-width: 1023px) {
            .accreditation-timeline {
              padding-left: var(--space-lg) !important;
            }
          }
          
          /* Desktop */
          @media (min-width: 1024px) {
            .accreditation-timeline {
              padding-left: var(--space-xl) !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Accreditation;
