import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const News = ({ limit = null }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetchNews();
  }, [limit]);
  
  const fetchNews = async () => {
    try {
      setLoading(true);
      let url = '/api/news';
      if (limit) {
        url += `?limit=${limit}`;
      }
      
      const response = await fetch(url);
      const result = await response.json();
      
      if (result.success) {
        setNewsItems(result.data);
      } else {
        setError('Gagal memuat berita');
      }
    } catch (err) {
      console.error('Error fetching news:', err);
      setError('Terjadi kesalahan saat memuat berita');
    } finally {
      setLoading(false);
    }
  };

  const filteredNews = newsItems.filter(news => 
    news.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (news.excerpt && news.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const displayedNews = limit ? filteredNews.slice(0, limit) : filteredNews;

  if (loading) {
    return (
      <section className="section" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', padding: 'var(--space-3xl)' }}>
            <i className="fas fa-spinner fa-spin" style={{ fontSize: '2rem', color: 'var(--accent-600)' }}></i>
            <p style={{ marginTop: 'var(--space-md)' }}>Memuat data berita...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', padding: 'var(--space-3xl)' }}>
            <p style={{ color: 'var(--error)' }}>{error}</p>
          </div>
        </div>
      </section>
    );
  }

  // Default image jika tidak ada gambar
  const defaultImage = "https://images.unsplash.com/photo-1581091226835-a8a1ac5b8c7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80";

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Berita Terkini</h2>
          <p className="section-subtitle">Informasi terbaru dari Program Studi Hukum Ekonomi Syariah</p>
        </div>

        {/* Search Form - hanya tampil jika tidak ada limit */}
        {!limit && (
          <div style={{ 
            maxWidth: '500px', 
            margin: '0 auto var(--space-2xl)', 
            position: 'relative' 
          }}>
            <input
              type="text"
              placeholder="Cari berita..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: 'var(--space-md) var(--space-lg)',
                paddingRight: '50px',
                border: '1px solid var(--gray-300)',
                borderRadius: 'var(--radius-lg)',
                fontSize: '0.875rem',
                backgroundColor: 'var(--white)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all var(--transition-fast)'
              }}
            />
            <i className="fas fa-search" style={{
              position: 'absolute',
              right: 'var(--space-md)',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--gray-400)',
              fontSize: '0.875rem'
            }}></i>
          </div>
        )}

        {displayedNews.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-lg)'
          }}>
            {displayedNews.map((news) => (
              <div key={news.id} className="card">
                <div className="card-image">
                  <img src={news.image || defaultImage} alt={news.title} />
                </div>
                <div className="card-content">
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: 'var(--space-sm)',
                    fontSize: '0.75rem',
                    color: 'var(--gray-500)'
                  }}>
                    <i className="fas fa-calendar-alt" style={{ marginRight: 'var(--space-xs)' }}></i>
                    {news.date}
                  </div>
                  <h3 className="card-title">{news.title}</h3>
                  <p className="card-description">{news.excerpt}</p>
                  <Link to={`/news/${news.slug}`} style={{
                    color: 'var(--accent-600)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--space-xs)',
                    transition: 'color var(--transition-fast)'
                  }}>
                    Baca Selengkapnya
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: 'var(--space-3xl)' }}>
            <p>Tidak ada berita ditemukan</p>
          </div>
        )}

        {/* Show more button untuk beranda */}
        {limit && (
          <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
            <Link to="/news" className="btn btn-outline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Lihat Semua Berita
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default News;
