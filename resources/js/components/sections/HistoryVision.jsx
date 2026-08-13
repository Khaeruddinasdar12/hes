import React from 'react';

const HistoryVision = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="vision-mission-header">
          <h2 className="vision-mission-title">Tentang Kami</h2>
          <p className="vision-mission-subtitle">Sejarah, Visi, dan Misi Program Studi</p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: 'var(--space-xl)' 
        }}>
          {/* Sejarah */}
          <div className="card">
            <div className="card-content">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
                <div className="feature-icon" style={{ margin: 0, marginRight: 'var(--space-md)' }}>
                  <i className="fas fa-history"></i>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '500', color: 'var(--gray-800)', margin: 0 }}>
                  Sejarah
                </h3>
              </div>
              <div style={{ color: 'var(--gray-700)', fontSize: '0.875rem', lineHeight: '1.6' }}>
                <p style={{ marginBottom: 'var(--space-md)' }}>
                  Program Studi Hukum Ekonomi Syariah (Muamalah) merupakan salah satu program studi yang berada di bawah naungan Fakultas Syariah dan Hukum Islam Institut Agama Islam Negeri (IAIN) Bone. Pembentukan program studi ini dilatarbelakangi oleh tuntutan perkembangan zaman, terutama meningkatnya kebutuhan akan sumber daya manusia yang memiliki kompetensi di bidang hukum dan ekonomi berbasis prinsip-prinsip syariah. Setelah melalui proses kajian akademik, evaluasi kelayakan, serta pemenuhan standar kurikulum berbasis Kerangka Kualifikasi Nasional Indonesia (KKNI) dan Merdeka Belajar Kampus Merdeka (MBKM), maka Program Studi Hukum Ekonomi Syariah resmi berdiri berdasarkan Keputusan Direktur Jenderal Pendidikan Islam Nomor 207 Tahun 2020 tentang Izin Penyelenggaraan Program Studi Hukum Ekonomi Syariah pada Institut Agama Islam Negeri Bone tertanggal 9 Maret 2019.
                </p>
                <p>
                  Sejak berdirinya, Program Studi Hukum Ekonomi Syariah berkomitmen untuk menghasilkan lulusan yang Unggul dan Humanis dalam menghasilkan sumber daya Manusia Professional, Kompetitif di bidang Hukum Ekonomi Syariah. Serta berperan aktif dalam pengembangan ilmu pengetahuan dan penerapan nilai-nilai keislaman di masyarakat.
                </p>
              </div>
            </div>
          </div>
          
          {/* Visi Misi */}
          <div style={{
            background: 'linear-gradient(135deg, var(--accent-600), var(--accent-700))',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-xl)',
            color: 'var(--white)',
            boxShadow: '0 8px 24px rgba(5, 150, 105, 0.25)',
            position: 'relative',
            border: '2px solid var(--accent-400)'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.1)',
              borderRadius: 'var(--radius-xl)',
              zIndex: 1
            }}></div>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 'var(--space-md)',
                  fontSize: '1.25rem'
                }}>
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '200', margin: 0, color: 'var(--white)' }}>
                  Visi & Misi
                </h3>
              </div>
              
              <div style={{ marginBottom: 'var(--space-xl)' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: '200', marginBottom: 'var(--space-sm)', color: 'var(--white)' }}>Visi</h4>
                <p style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  padding: 'var(--space-md)',
                  borderRadius: 'var(--radius-lg)',
                  fontStyle: 'italic',
                  fontSize: '0.875rem',
                  lineHeight: '1.6',
                  margin: 0,
                  color: 'var(--white)',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  "Menjadi Program Studi yang Unggul dan Humanis dalam menghasilkan sumber daya Manusia Professional, Kompetitif di bidang Hukum Ekonomi Syariah di Kawasan Indonesia Timur Tahun 2030".
                </p>
              </div>
              
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '200', marginBottom: 'var(--space-md)', color: 'var(--white)' }}>Misi</h4>
                <ol style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                  {[
                    'Menyelenggarakan Pendidikan dan pengajaran yang berbasis hukum ekonomi syariah yang terintegrasi teknologi digital',
                    'Melaksanakan penelitian dan publikasi ilmiah dalam bidang hukum ekonomi syariah yang bereputasi Nasional dan Internasional.',
                    'Melaksanakan Pengabdian kepada Masyarakat dan Kerjasama di bidang hukum ekonomi syariah dengan berbagai stakeholder; dan',
                    'Menjalankan tata Kelola program studi hukum ekonomi Syariah secara Professional dan akuntabel'
                  ].map((mission, index) => (
                    <li key={index} style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      marginBottom: 'var(--space-sm)',
                      fontSize: '0.875rem',
                      lineHeight: '1.5',
                      color: 'var(--white)',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                    }}>
                      <span style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '50%',
                        width: '20px',
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 'var(--space-sm)',
                        flexShrink: 0,
                        fontSize: '0.75rem',
                        fontWeight: '500'
                      }}>
                        {index + 1}
                      </span>
                      <span>{mission}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryVision;