import React from 'react';

const Facilities = () => {
  const facilities = [
    {
      id: 1,
      title: "Perpustakaan Modern",
      description: "Koleksi lengkap buku dan jurnal hukum ekonomi syariah dengan sistem digital",
      icon: "fas fa-book-open"
    },
    {
      id: 2,
      title: "Lab Komputer",
      description: "Fasilitas teknologi terkini dengan internet berkecepatan tinggi",
      icon: "fas fa-laptop-code"
    },
    {
      id: 3,
      title: "Ruang Sidang",
      description: "Simulasi peradilan dan diskusi kasus hukum ekonomi syariah",
      icon: "fas fa-balance-scale"
    },
    {
      id: 4,
      title: "Masjid Kampus",
      description: "Tempat ibadah yang nyaman dan representatif",
      icon: "fas fa-mosque"
    },
    {
      id: 5,
      title: "Olahraga",
      description: "Fasilitas olahraga lengkap untuk kesehatan mahasiswa",
      icon: "fas fa-dumbbell"
    },
    {
      id: 6,
      title: "Hotspot Area",
      description: "Akses internet gratis di seluruh area kampus",
      icon: "fas fa-wifi"
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Fasilitas Unggulan</h2>
          <p className="section-subtitle">Mendukung proses belajar mengajar yang optimal</p>
        </div>
        
        <div className="feature-grid">
          {facilities.map((facility) => (
            <div key={facility.id} className="feature-box">
              <div className="feature-icon">
                <i className={facility.icon}></i>
              </div>
              <h3 className="feature-title">{facility.title}</h3>
              <p className="feature-description">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;