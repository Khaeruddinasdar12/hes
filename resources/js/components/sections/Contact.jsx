import React from 'react';

const Contact = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Kontak Kami</h2>
          <p className="section-subtitle">Hubungi kami untuk informasi lebih lanjut</p>
        </div>

        {/* Section Lokasi (Google Maps) */}
        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
            <div className="feature-icon" style={{ margin: 0, marginRight: 'var(--space-md)' }}>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '200', color: 'var(--gray-800)', margin: 0 }}>
              Lokasi Kampus
            </h3>
          </div>

          <div className="card">
            <div style={{ height: '320px' }}>
              {/*<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4096.400018682803!2d120.30548327497844!3d-4.541998395432498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbde56c3903fa41%3A0xa33324c3f4e97431!2sInstitut%20Agama%20Islam%20Negeri%20Bone!5e1!3m2!1sid!2sid!4v1761632028709!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>*/}
              <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4096.400018682803!2d120.30548327497844!3d-4.541998395432498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbde56c3903fa41%3A0xa33324c3f4e97431!2sInstitut%20Agama%20Islam%20Negeri%20Bone!5e1!3m2!1sid!2sid!4v1761632028709!5m2!1sid!2sid"
  width="100%"
  height="450"
  style={{ border: 0, borderRadius: '12px' }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Lokasi Kampus IAIN Bone"
/>

            </div>
          </div>
        </div>
        
        {/* Sub-section Kontak */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
            <div className="feature-icon" style={{ margin: 0, marginRight: 'var(--space-md)' }}>
              <i className="fas fa-address-book"></i>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '200', color: 'var(--gray-800)', margin: 0 }}>
              Informasi Kontak
            </h3>
          </div>
          
          <div className="card">
            <div className="card-content">
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: 'var(--space-lg)' 
              }}>
                <div style={{ textAlign: 'center', padding: 'var(--space-lg)', background: 'var(--bg-primary)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)' }}>
                  <div className="feature-icon" style={{ margin: '0 auto var(--space-md)' }}>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '200', marginBottom: 'var(--space-sm)', color: 'var(--gray-800)' }}>Alamat</h4>
                  <p style={{ color: 'var(--gray-700)', fontSize: '0.875rem', lineHeight: '1.5', margin: 0 }}>
                    Jalan HOS. Cokroaminoto<br/>Watampone, Bone,<br/>Sulawesi Selatan 92711
                  </p>
                </div>
                
                <div style={{ textAlign: 'center', padding: 'var(--space-lg)', background: 'var(--bg-primary)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)' }}>
                  <div className="feature-icon" style={{ margin: '0 auto var(--space-md)' }}>
                    <i className="fas fa-phone"></i>
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '200', marginBottom: 'var(--space-sm)', color: 'var(--gray-800)' }}>Telepon</h4>
                  <p style={{ color: 'var(--gray-700)', fontSize: '0.875rem', margin: 0 }}>+62 853-4275-7456 (Staff: Resmiati)</p>
                </div>
                
                <div style={{ textAlign: 'center', padding: 'var(--space-lg)', background: 'var(--bg-primary)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)' }}>
                  <div className="feature-icon" style={{ margin: '0 auto var(--space-md)' }}>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '200', marginBottom: 'var(--space-sm)', color: 'var(--gray-800)' }}>Email</h4>
                  <p style={{ color: 'var(--gray-700)', fontSize: '0.875rem', margin: 0 }}>
                     prodihes.iainbone<br/>@gmail.com
                  </p>
                </div>
                
                <div style={{ textAlign: 'center', padding: 'var(--space-lg)', background: 'var(--bg-primary)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)' }}>
                  <div className="feature-icon" style={{ margin: '0 auto var(--space-md)' }}>
                    <i className="fas fa-clock"></i>
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '200', marginBottom: 'var(--space-sm)', color: 'var(--gray-800)' }}>Jam Operasional</h4>
                  <p style={{ color: 'var(--gray-700)', fontSize: '0.875rem', lineHeight: '1.5', margin: 0 }}>
                    Senin-Jumat: 08.00-16.00
                  </p>
                </div>
              </div>
              
              <div style={{ 
                marginTop: 'var(--space-2xl)', 
                paddingTop: 'var(--space-lg)', 
                borderTop: '1px solid var(--gray-200)',
                textAlign: 'center'
              }}>
                <h4 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: 'var(--space-md)', color: 'var(--gray-800)' }}>
                  Ikuti Kami
                </h4>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  gap: 'var(--space-md)',
                  flexWrap: 'wrap'
                }}>
                  {[
                    // { icon: 'fab fa-facebook-f', color: 'var(--accent-600)', href: '#' },
                    // { icon: 'fab fa-twitter', color: 'var(--accent-500)', href: '#' },
                    { icon: 'fab fa-instagram', color: 'var(--accent-600)', href: 'https://www.instagram.com/prodihes.iainbone/' },
                    { icon: 'fab fa-youtube', color: 'var(--error)', href: 'https://www.youtube.com/@iainbone.official' }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href={social.href} 
                      style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: social.color,
                        color: 'var(--white)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        transition: 'transform var(--transition-fast)',
                        boxShadow: 'var(--shadow-sm)'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;