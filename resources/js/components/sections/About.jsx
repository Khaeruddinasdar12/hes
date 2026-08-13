import React, { useState } from 'react';

const KAPRODI_PHOTO = 'kaprodihes.jpg';
const KAPRODI_NAME = 'Muspita Sari, M.H.';

const About = () => {
  const [hasPhoto, setHasPhoto] = useState(true);

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Sambutan Ketua Program Studi</h2>
          <p className="section-subtitle">Pesan dari pemimpin kami</p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: 'var(--space-2xl)', 
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
              opacity: 0.15,
              filter: 'blur(20px)'
            }}></div>
            {hasPhoto ? (
              <img 
                src={KAPRODI_PHOTO}
                alt={KAPRODI_NAME}
                onError={() => setHasPhoto(false)}
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: 'var(--shadow-lg)',
                  width: '100%',
                  height: 'auto'
                }}
              />
            ) : (
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--space-md)',
                  width: '100%',
                  aspectRatio: '3 / 4',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: 'var(--shadow-lg)',
                  background: 'linear-gradient(180deg, var(--accent-50), var(--accent-100))',
                  border: '1px solid var(--accent-200)',
                  color: 'var(--accent-600)'
                }}
                aria-label={KAPRODI_NAME}
              >
                <div
                  style={{
                    width: '7.5rem',
                    height: '7.5rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.75)',
                    boxShadow: '0 8px 24px rgba(13, 148, 136, 0.12)'
                  }}
                >
                  <i className="fas fa-user" style={{ fontSize: '3rem', opacity: 0.7 }}></i>
                </div>
                <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--accent-700)', opacity: 0.8 }}>
                  Ketua Program Studi
                </span>
              </div>
            )}
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: 'var(--space-md)', color: 'var(--gray-900)' }}>
              {KAPRODI_NAME}
            </h3>
            <p style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-md)', fontStyle: 'italic' }}>
              Assalamualaikum Wr. Wb.
            </p>
            <p style={{ color: 'var(--gray-700)', marginBottom: 'var(--space-md)', lineHeight: '1.6' }}>
              Selamat datang di Program Studi Hukum Ekonomi Syariah (Muamalah), Fakultas Syariah dan Hukum Islam IAIN Bone.
            </p>
            <p style={{ color: 'var(--gray-700)', marginBottom: 'var(--space-md)', lineHeight: '1.6' }}>
              Program studi ini hadir sebagai respon terhadap kebutuhan zaman akan sumber daya manusia yang memiliki kompetensi di bidang hukum dan ekonomi berbasis prinsip-prinsip syariah. Di tengah dinamika ekonomi global yang terus berkembang, kami berkomitmen melahirkan lulusan yang tidak hanya unggul secara intelektual, tetapi juga memiliki karakter islami dan integritas moral yang tinggi.
            </p>
            <p style={{ color: 'var(--gray-700)', marginBottom: 'var(--space-md)', lineHeight: '1.6' }}>
              Melalui penerapan kurikulum berbasis Kerangka Kualifikasi Nasional Indonesia (KKNI) dan Merdeka Belajar Kampus Merdeka (MBKM), kami memberikan ruang bagi mahasiswa untuk mengasah kemampuan akademik, praktik, dan kepemimpinan secara seimbang. Mahasiswa dibimbing untuk memahami hukum ekonomi syariah secara komprehensif—mulai dari konsep, implementasi, hingga tantangan penerapannya dalam kehidupan modern.
            </p>
            <p style={{ color: 'var(--gray-700)', marginBottom: 'var(--space-md)', lineHeight: '1.6' }}>
              Kami percaya bahwa Hukum Ekonomi Syariah bukan sekadar bidang keilmuan, tetapi juga jalan untuk menghadirkan keadilan, keberkahan, dan keseimbangan dalam sistem ekonomi umat. Bersama kami, mari wujudkan generasi yang profesional, kompetitif, dan berperan aktif dalam membangun peradaban ekonomi yang beretika dan berlandaskan nilai-nilai Islam.
            </p>
            <p style={{ color: 'var(--gray-700)', lineHeight: '1.6' }}>
              Wassalamualaikum Wr. Wb.
            </p>
          </div>
        </div>
        
        {/* Statistics Section */}
        <div style={{
          marginTop: 'var(--space-3xl)',
          background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.1), rgba(52, 211, 153, 0.1))',
          borderRadius: 'var(--radius-xl)',
          padding: 'var(--space-2xl)',
          border: '1px solid rgba(5, 150, 105, 0.2)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-lg)',
            textAlign: 'center'
          }}>
            <div>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: 'var(--accent-600)',
                marginBottom: 'var(--space-sm)',
                lineHeight: '1'
              }}>
                10+
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: 'var(--gray-700)',
                fontWeight: '500'
              }}>
                JUMLAH DOSEN
              </div>
            </div>
            
            <div>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: 'var(--accent-600)',
                marginBottom: 'var(--space-sm)',
                lineHeight: '1'
              }}>
                80+
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: 'var(--gray-700)',
                fontWeight: '500'
              }}>
                ALUMNI
              </div>
            </div>
            
            <div>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: 'var(--accent-600)',
                marginBottom: 'var(--space-sm)',
                lineHeight: '1'
              }}>
                291
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: 'var(--gray-700)',
                fontWeight: '500'
              }}>
                JUMLAH MAHASISWA
              </div>
            </div>
            
            <div>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: 'var(--accent-600)',
                marginBottom: 'var(--space-sm)',
                lineHeight: '1'
              }}>
                5+
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: 'var(--gray-700)',
                fontWeight: '500'
              }}>
                TAHUN PENGALAMAN
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;