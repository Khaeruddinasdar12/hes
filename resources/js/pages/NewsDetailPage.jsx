import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const NewsDetailPage = () => {
  const { slug } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetchNews();
  }, [slug]);
  
  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/news/${slug}`);
      const result = await response.json();
      
      if (result.success) {
        setNews(result.data);
      } else {
        setError('Berita tidak ditemukan');
      }
    } catch (err) {
      console.error('Error fetching news:', err);
      setError('Terjadi kesalahan saat memuat berita');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="section" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '50vh' }}>
        <div className="container">
          <div style={{ textAlign: 'center', padding: 'var(--space-3xl)' }}>
            <p>Memuat berita...</p>
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
            <Link to="/news" className="btn btn-primary" style={{ marginTop: 'var(--space-lg)' }}>
              Kembali ke Berita
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
        {/* Back Button */}
        <div style={{ marginBottom: 'var(--space-xl)' }}>
          <Link 
            to="/news" 
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
            Kembali ke Berita
          </Link>
        </div>

        {/* News Content */}
        {news && (
          <>
            {/* Title */}
            <h1 className="section-title" style={{ 
              fontSize: '1.5rem', 
              marginBottom: 'var(--space-lg)',
              textAlign: 'left'
            }}>
              {news.title}
            </h1>

            {/* Meta Info */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 'var(--space-lg)',
              marginBottom: 'var(--space-xl)',
              paddingBottom: 'var(--space-lg)',
              borderBottom: '1px solid var(--gray-200)',
              fontSize: '0.875rem',
              color: 'var(--gray-600)'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                <i className="fas fa-calendar-alt" style={{ marginRight: 'var(--space-xs)' }}></i>
                {news.date}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                <i className="fas fa-user" style={{ marginRight: 'var(--space-xs)' }}></i>
                {news.author}
              </span>
            </div>

            {/* Image */}
            {news.image && (
              <div style={{ 
                borderRadius: 'var(--radius-xl)', 
                overflow: 'hidden',
                marginBottom: 'var(--space-2xl)'
              }}>
                <img 
                  src={news.image || defaultImage} 
                  alt={news.title}
                  style={{ 
                    width: '100%', 
                    height: '400px',
                    objectFit: 'cover'
                  }}
                />
              </div>
            )}

            {/* Content */}
            <div 
              className="news-content"
              style={{
                fontSize: '0.875rem',
                lineHeight: '1.8',
                color: 'var(--gray-700)'
              }}
              dangerouslySetInnerHTML={{ __html: news.content }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default NewsDetailPage;

