import React, { useState } from 'react';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photo');
  
  const galleryItems = [
    {
      id: 1,
      title: "Kegiatan KTI",
      subtitle: "Kegiatan karya tulis ilmiah",
      image: "asset/galeri/kegiatankti.jpg"
    },
    {
      id: 2,
      title: "Kegiatan Pengenalan Hukum",
      subtitle: "Penyuluhan hukum awal",
      image: "asset/galeri/pengenalanhukum1.jpg"
    },
    {
      id: 3,
      title: "Kegiatan Pengenalan Hukum",
      subtitle: "Penyuluhan hukum awal",
      image: "asset/galeri/pengenalanhukum2.jpg"
    },
    {
      id: 4,
      title: "Kegiatan Pengenalan Hukum",
      subtitle: "Penyuluhan hukum awal",
      image: "asset/galeri/pengenalanhukum3.jpg"
    },
    {
      id: 5,
      title: "Kegiatan Pengenalan Hukum",
      subtitle: "Penyuluhan hukum awal",
      image: "asset/galeri/pengenalanhukum4.jpg"
    },
    {
      id: 6,
      title: "Kegiatan Bina Desa",
      subtitle: "Menunjukkan peran pengabdian dan counseling",
      image: "asset/galeri/binadesa1.jpg"
    },
    {
      id: 7,
      title: "Kegiatan Bina Desa",
      subtitle: "Menunjukkan peran pengabdian dan counseling",
      image: "asset/galeri/binadesa2.jpg"
    },
    {
      id: 8,
      title: "Kegiatan Bina Desa",
      subtitle: "Menunjukkan peran pengabdian dan counseling",
      image: "asset/galeri/binadesa3.jpg"
    },
  ];
  
  const videoItems = [
    {
      id: 1,
      title: "Kegiatan Bina Desa",
      description: "Menunjukkan peran pengabdian dan counseling",
      embedUrl: "asset/galeri/video1.mp4"
    },
    {
      id: 2,
      title: "Kegiatan Bina Desa",
      description: "Menunjukkan peran pengabdian dan counseling",
      embedUrl: "asset/galeri/video2.mp4"
    },
    {
      id: 3,
      title: "Kegiatan Bina Desa",
      description: "Menunjukkan peran pengabdian dan counseling",
      embedUrl: "asset/galeri/video3.mp4"
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Galeri</h2>
          <p className="section-subtitle">Momen berharga bersama kami</p>
        </div>
        
        {/* Tab Navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--space-2xl)' }}>
          <div style={{ 
            display: 'inline-flex', 
            borderRadius: 'var(--radius-lg)', 
            padding: 'var(--space-xs)', 
            backgroundColor: 'var(--white)', 
            boxShadow: 'var(--shadow-sm)' 
          }}>
          <button 
            className={`btn ${activeTab === 'photo' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('photo')}
            style={{ margin: 0, borderRadius: 'var(--radius-md)' }}
          >
            Foto
          </button>
          <button 
            className={`btn ${activeTab === 'video' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('video')}
            style={{ margin: 0, borderRadius: 'var(--radius-md)' }}
          >
            Video
          </button>
        </div>
      </div>

        {/* Photo Gallery */}
      {activeTab === 'photo' && (
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <div style={{ color: 'var(--white)' }}>
                  <h4 style={{ fontWeight: '600', fontSize: '0.875rem', marginBottom: 'var(--space-xs)', color: '#ffffff', }}>{item.title}</h4>
                  <p style={{ fontSize: '0.75rem', opacity: 0.9, color: '#ffffff' }}>{item.subtitle}</p>
                </div>
              </div>
            </div>
            ))}
        </div>
        )}

        {/* Video Gallery */}
      {activeTab === 'video' && (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: 'var(--space-lg)' 
        }}>
        {videoItems.map((video) => (
          <div key={video.id} className="card">
            <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
              {video.embedUrl.includes('youtube.com') ? (
                <iframe
                  src={`${video.embedUrl}?autoplay=0`}
                  title={video.title}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: 'var(--radius-lg)',
                  }}
                  ></iframe>
                  ) : (
                  <video
                    src={video.embedUrl}
                    controls
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      borderRadius: 'var(--radius-lg)',
                    }}
                    />
                    )}
                </div>
                <div className="card-content">
                  <h3 className="card-title">{video.title}</h3>
                  <p className="card-description">{video.description}</p>
                </div>
              </div>
              ))}

      </div>
      )}
    </div>
  </section>
  );
};

export default Gallery;