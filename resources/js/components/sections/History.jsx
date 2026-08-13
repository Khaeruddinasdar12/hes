import React from 'react';

const History = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Sejarah Singkat</h2>
          <p className="section-subtitle">Perjalanan Program Studi Hukum Ekonomi Syariah</p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: 'var(--space-xl)',
          alignItems: 'center'
        }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              top: '-var(--space-md)',
              left: '-var(--space-md)',
              right: '-var(--space-md)',
              bottom: '-var(--space-md)',
              background: 'linear-gradient(135deg, var(--accent-600), var(--accent-500))',
              borderRadius: 'var(--radius-2xl)',
              opacity: 0.1,
              filter: 'blur(20px)'
            }}></div>
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
              alt="Sejarah Program Studi Hukum Ekonomi Syariah" 
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-lg)',
                width: '100%',
                height: 'auto'
              }}
            />
          </div>
          
          <div>
            <div style={{ marginBottom: 'var(--space-lg)' }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '200', 
                marginBottom: 'var(--space-md)', 
                color: 'var(--gray-900)' 
              }}>
                Perjalanan Program Studi Hukum Ekonomi Syariah
              </h3>
              <p style={{ 
                color: 'var(--gray-700)', 
                marginBottom: 'var(--space-md)', 
                lineHeight: '1.6',
                fontSize: '0.875rem'
              }}>
                Program Studi Hukum Ekonomi Syariah didirikan sebagai respons terhadap kebutuhan masyarakat akan ahli hukum yang memahami sistem ekonomi syariah, hukum ekonomi Islam, dan mekanisme transaksi ekonomi yang sesuai dengan prinsip syariah. Program ini berkembang pesat dan telah menghasilkan banyak lulusan yang berkontribusi di berbagai bidang hukum ekonomi syariah dan keuangan syariah.
              </p>
              <p style={{ 
                color: 'var(--gray-700)', 
                marginBottom: 'var(--space-md)', 
                lineHeight: '1.6',
                fontSize: '0.875rem'
              }}>
                Dengan visi menjadi program studi unggulan dalam pengkajian dan pengembangan hukum ekonomi syariah di tingkat nasional pada tahun 2035, kami terus berupaya meningkatkan kualitas pendidikan dan layanan kepada mahasiswa.
              </p>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: 'var(--space-md)' 
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '200',
                  color: 'var(--accent-600)',
                  marginBottom: 'var(--space-xs)'
                }}>
                  500+
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--gray-600)',
                  fontWeight: '500'
                }}>
                  Mahasiswa Aktif
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '200',
                  color: 'var(--accent-600)',
                  marginBottom: 'var(--space-xs)'
                }}>
                  200+
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--gray-600)',
                  fontWeight: '500'
                }}>
                  Alumni
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
