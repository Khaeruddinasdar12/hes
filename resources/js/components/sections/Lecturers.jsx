import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Lecturers = ({ limit = 6 }) => {
  const [lecturers, setLecturers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLecturers();
  }, []);

  const fetchLecturers = async () => {
    try {
      setLoading(true);
      const url = `/api/dosens?limit=${limit}`;
      
      const response = await fetch(url);
      const result = await response.json();
      
      if (result.success) {
        setLecturers(result.data);
      } else {
        setError('Gagal memuat data dosen');
      }
    } catch (err) {
      console.error('Error fetching lecturers:', err);
      setError('Terjadi kesalahan saat memuat data dosen');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="section" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', padding: 'var(--space-3xl)' }}>
            <p>Memuat data dosen...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', padding: 'var(--space-3xl)' }}>
            <p style={{ color: 'var(--error)' }}>{error}</p>
          </div>
        </div>
      </section>
    );
  }

  // Default image jika tidak ada gambar
  const defaultImage = "https://i.imgur.com/6qFkMY9.png";

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Tim Dosen</h2>
          <p className="section-subtitle">Profesional yang mendidik generasi masa depan</p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: 'var(--space-lg)' 
        }}>
          {lecturers.map((lecturer) => (
            <div key={lecturer.id} className="card">
              <div className="card-image" style={{ position: 'relative' }}>
                <img 
                  src={lecturer.gambar || defaultImage} 
                  alt={lecturer.nama}
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'top',
                    width: '100%',
                    height: '100%'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: 'var(--space-md)',
                  left: 'var(--space-md)',
                  color: '#ffffff'
                }}>
                  <h3 style={{ 
                    fontSize: '1rem', 
                    fontWeight: '600', 
                    marginBottom: 'var(--space-xs)',
                    color: '#ffffff',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.5)'
                  }}>
                    {lecturer.nama}
                  </h3>
                  <p style={{ 
                    fontSize: '0.75rem', 
                    opacity: 1,
                    margin: 0,
                    color: '#ffffff',
                    fontWeight: '500',
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.8), 0 0 6px rgba(0, 0, 0, 0.5)'
                  }}>
                    {lecturer.jabatan}
                  </p>
                </div>
              </div>
              <div className="card-content">
                <p className="card-description" style={{ margin: 0 }}>
                  {lecturer.keahlian}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Lecturers;