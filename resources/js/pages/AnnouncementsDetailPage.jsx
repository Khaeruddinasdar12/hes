import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const AnnouncementsDetailPage = () => {
  const { slug } = useParams();
  const [announcement, setAnnouncement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAnnouncement();
  }, [slug]);

  const fetchAnnouncement = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/announcements/${slug}`);
      const result = await response.json();

      if (result.success) {
        setAnnouncement(result.data);
      } else {
        setError('Pengumuman tidak ditemukan');
      }
    } catch (err) {
      console.error('Error fetching announcement:', err);
      setError('Terjadi kesalahan saat memuat pengumuman');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="section" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '50vh' }}>
        <div className="container">
          <div style={{ textAlign: 'center', padding: 'var(--space-3xl)' }}>
            <p>Memuat pengumuman...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="section" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '50vh' }}>
        <div className="container">
          <div style={{ textAlign: 'center', padding: 'var(--space-3xl)' }}>
            <p style={{ color: 'var(--error)' }}>{error}</p>
            <Link to="/announcements" className="btn btn-primary" style={{ marginTop: 'var(--space-lg)' }}>
              Kembali ke Pengumuman
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const defaultImage = "https://images.unsplash.com/photo-1581091226835-a8a1ac5b8c7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80";

  return (
    <div className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        {/* Tombol Kembali */}
        <div style={{ marginBottom: 'var(--space-xl)' }}>
          <Link
            to="/announcements"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-sm)',
              color: 'var(--accent-600)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}
          >
            <i className="fas fa-arrow-left"></i>
            Kembali ke Pengumuman
          </Link>
        </div>

        {/* Konten Pengumuman */}
        {announcement && (
          <>
            {/* Judul */}
            <h1
              className="section-title"
              style={{
                fontSize: '1.5rem',
                marginBottom: 'var(--space-lg)',
                textAlign: 'left'
              }}
            >
              {announcement.title}
            </h1>

            {/* Info Meta */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-lg)',
                marginBottom: 'var(--space-xl)',
                paddingBottom: 'var(--space-lg)',
                borderBottom: '1px solid var(--gray-200)',
                fontSize: '0.875rem',
                color: 'var(--gray-600)'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                <i className="fas fa-calendar-alt" style={{ marginRight: 'var(--space-xs)' }}></i>
                {announcement.date}
              </span>
              {announcement.author && (
                <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                  <i className="fas fa-user" style={{ marginRight: 'var(--space-xs)' }}></i>
                  {announcement.author}
                </span>
              )}
            </div>

            {/* Gambar */}
            {announcement.image && (
              <div
                style={{
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  marginBottom: 'var(--space-2xl)'
                }}
              >
                <img
                  src={announcement.image || defaultImage}
                  alt={announcement.title}
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover'
                  }}
                />
              </div>
            )}

            {/* Isi Pengumuman */}
            <div
              className="announcement-content"
              style={{
                fontSize: '0.875rem',
                lineHeight: '1.8',
                color: 'var(--gray-700)'
              }}
              dangerouslySetInnerHTML={{ __html: announcement.content }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AnnouncementsDetailPage;
