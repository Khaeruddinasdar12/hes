import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "PMB Online",
      description: "Pendaftaran Mahasiswa Baru secara online dengan proses yang cepat dan mudah",
      category: "Katalog Online",
      url: "https://pmb.iain-bone.ac.id/",
      icon: "fas fa-file-alt"
    },
    {
      id: 1,
      title: "TUSITA",
      description: "Sistem Informasi Akademik untuk mengelola kegiatan akademik mahasiswa",
      category: "Sistem Akademik",
      url: "https://tusita.iain-bone.ac.id/gate/login",
      icon: "fas fa-graduation-cap"
    },
    {
      id: 3,
      title: "Layanan Publik",
      description: "Pelayanan administrasi dan kemahasiswaan secara online",
      category: "Administrasi",
      url: "https://layanan.iain-bone.ac.id/",
      icon: "fas fa-concierge-bell"
    },
    {
      id: 4,
      title: "E-Learning",
      description: "Platform pembelajaran daring untuk mendukung proses belajar mengajar",
      category: "Pembelajaran Daring",
      url: "https://edlink.id/login",
      icon: "fas fa-laptop-code"
    },
    {
      id: 5,
      title: "Digilib Repository",
      description: "Repository digital untuk menyimpan karya ilmiah dan publikasi",
      category: "Repository Digital",
      url: "https://kbk2300046.perpustakaandigital.com/index",
      icon: "fas fa-database"
    },
    {
      id: 6,
      title: "Perpusnas",
      description: "Akses koleksi Perpustakaan Nasional Republik Indonesia",
      category: "Perpustakaan Nasional",
      url: "https://www.perpusnas.go.id/",
      icon: "fas fa-landmark"
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Layanan Online</h2>
          <p className="section-subtitle">Akses layanan digital kami kapan saja, di mana saja</p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                marginTop: 'var(--space-md)'
              }}>
                <span style={{ 
                  fontSize: '0.75rem', 
                  color: 'var(--gray-500)', 
                  fontWeight: '500' 
                }}>
                  {service.category}
                </span>
                <a 
                  href={service.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="service-link"
                >
                  Akses
                  <i className="fas fa-external-link-alt" style={{ marginLeft: 'var(--space-xs)' }}></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Info Tambahan */}
        <div style={{ 
          marginTop: 'var(--space-3xl)', 
          background: 'var(--white)', 
          borderRadius: 'var(--radius-xl)', 
          padding: 'var(--space-2xl)', 
          boxShadow: 'var(--shadow-lg)',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '500', 
              marginBottom: 'var(--space-md)', 
              color: 'var(--gray-800)' 
            }}>
              Butuh Bantuan?
            </h3>
            <p style={{ 
              color: 'var(--gray-600)', 
              marginBottom: 'var(--space-xl)', 
              lineHeight: '1.6' 
            }}>
              Jika Anda mengalami kesulitan dalam mengakses layanan online kami, jangan ragu untuk menghubungi tim support kami.
            </p>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'row', 
              gap: 'var(--space-md)', 
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a href="mailto:hki@iainbone.ac.id " className="btn btn-primary">
                <i className="fas fa-envelope"></i>
                Email Support
              </a>
              <a href="tel:(0481) 21395" className="btn btn-outline">
                <i className="fas fa-phone-alt"></i>
                Call Center
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;