import React, { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';

const Announcements = ({ limit = null }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialSearch = searchParams.get('search') || '';

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMounted, setHasMounted] = useState(false);
  const searchInputRef = useRef(null);

  const fetchAnnouncements = async () => {
    try {
      setLoading(true);
      let url = '/api/announcements';
      const params = [];

      if (limit) params.push(`limit=${limit}`);
      if (!limit && searchTerm) params.push(`search=${encodeURIComponent(searchTerm)}`);
      if (params.length > 0) url += `?${params.join('&')}`;

      const response = await fetch(url);
      const result = await response.json();

      if (result.success) {
        setAnnouncements(result.data);
      } else {
        setError('Gagal memuat pengumuman');
      }
    } catch (err) {
      console.error('Error fetching announcements:', err);
      setError('Terjadi kesalahan saat memuat pengumuman');
    } finally {
      setLoading(false);
    }
  };

  const handleAnnouncementClick = (announcement) => {
    navigate(`/announcements/${announcement.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    fetchAnnouncements();
    setHasMounted(true);
  }, [limit]);

  useEffect(() => {
    if (!hasMounted || limit) return;
    const timeoutId = setTimeout(() => fetchAnnouncements(), 300);
    return () => clearTimeout(timeoutId);
  }, [searchTerm, hasMounted, limit]);

  useEffect(() => {
    if (!hasMounted || limit) return;

    const params = new URLSearchParams();
    if (searchTerm) params.set('search', searchTerm);

    const newSearchString = params.toString();
    const currentSearchString = window.location.search.substring(1);

    if (newSearchString !== currentSearchString) {
      setSearchParams(params, { replace: true });
    }
  }, [searchTerm, setSearchParams, hasMounted, limit]);

  if (loading) {
    return (
      <section className="section" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', padding: 'var(--space-3xl)' }}>
            <i className="fas fa-spinner fa-spin" style={{ fontSize: '2rem', color: 'var(--accent-600)' }}></i>
            <p style={{ marginTop: 'var(--space-md)' }}>Memuat data pengumuman...</p>
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

  const displayedAnnouncements = limit ? announcements.slice(0, limit) : announcements;

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Pengumuman</h2>
          <p className="section-subtitle">Informasi penting untuk mahasiswa</p>
        </div>

        {/* Search Form */}
        {!limit && (
          <div style={{ maxWidth: '500px', margin: '0 auto var(--space-2xl)', position: 'relative' }}>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Cari pengumuman..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus={!limit}
              style={{
                width: '100%',
                padding: 'var(--space-md) var(--space-lg)',
                paddingRight: '50px',
                border: '1px solid var(--gray-300)',
                borderRadius: 'var(--radius-lg)',
                fontSize: '0.875rem',
                backgroundColor: 'var(--white)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all var(--transition-fast)',
              }}
            />
            <i
              className="fas fa-search"
              style={{
                position: 'absolute',
                right: 'var(--space-md)',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--gray-400)',
                fontSize: '0.875rem',
              }}
            ></i>
          </div>
        )}

        {displayedAnnouncements.length > 0 ? (
          <div className="announcement-grid">
            {displayedAnnouncements.map((announcement) => (
              <div
                key={announcement.id}
                className="announcement-item"
                onClick={() => handleAnnouncementClick(announcement)}
                style={{
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div className="announcement-icon">
                  <i className="fas fa-bullhorn"></i>
                </div>
                <div className="announcement-content">
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: 'var(--space-xs)',
                      gap: 'var(--space-sm)',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--gray-500)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-xs)',
                      }}
                    >
                      <i className="fas fa-calendar-alt"></i>
                      {announcement.date}
                    </span>
                  </div>
                  <h4>{announcement.title}</h4>
                  <p>{announcement.excerpt}</p>

                  {announcement.file && (
                    <a
                      href={announcement.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 'var(--space-xs)',
                        marginTop: 'var(--space-sm)',
                        padding: 'var(--space-xs) var(--space-md)',
                        backgroundColor: 'var(--accent-50)',
                        color: 'var(--accent-700)',
                        borderRadius: 'var(--radius-md)',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        transition: 'all var(--transition-fast)',
                        border: '1px solid var(--accent-200)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--accent-100)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--accent-50)';
                      }}
                    >
                      <i className="fas fa-file-pdf"></i>
                      <span>Download PDF</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: 'var(--space-3xl)' }}>
            <p>Tidak ada pengumuman ditemukan</p>
            {!limit && searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                style={{
                  marginTop: 'var(--space-md)',
                  padding: 'var(--space-sm) var(--space-lg)',
                  backgroundColor: 'var(--accent-600)',
                  color: 'var(--white)',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                }}
              >
                Reset Pencarian
              </button>
            )}
          </div>
        )}

        {limit && (
          <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
            <Link to="/announcements" className="btn btn-outline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Lihat Semua Pengumuman
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Announcements;
