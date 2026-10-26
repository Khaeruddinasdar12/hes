import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useParams, Link } from 'react-router-dom';

const NewsDetailPage = () => {
  const { slug } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  
  useEffect(() => {
    fetchNews();
  }, [slug]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && modalImage) {
        setModalImage(null);
      }
    };
    window.addEventListener('keydown', handleEscape);
    document.body.style.overflow = modalImage ? 'hidden' : '';
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [modalImage]);
  
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

  const openImageModal = (src) => {
    if (src) {
      setModalImage(src);
    }
  };

  const closeImageModal = () => setModalImage(null);

  const handleContentClick = (e) => {
    const image = e.target.closest('img');
    if (image?.src) {
      e.preventDefault();
      openImageModal(image.src);
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
  const coverImage = news?.image || null;

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
            {coverImage && (
              <div
                onClick={() => openImageModal(coverImage)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openImageModal(coverImage);
                  }
                }}
                style={{ 
                  borderRadius: 'var(--radius-xl)', 
                  overflow: 'hidden',
                  marginBottom: 'var(--space-2xl)',
                  cursor: 'zoom-in',
                  position: 'relative'
                }}
              >
                <img 
                  src={coverImage || defaultImage} 
                  alt={news.title}
                  style={{ 
                    width: '100%', 
                    height: '400px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    right: 'var(--space-md)',
                    bottom: 'var(--space-md)',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(0, 0, 0, 0.55)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pointerEvents: 'none'
                  }}
                >
                  <i className="fas fa-search-plus" style={{ fontSize: '0.9rem' }}></i>
                </div>
              </div>
            )}

            {/* Content */}
            <div 
              className="news-content"
              onClick={handleContentClick}
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

      {modalImage && createPortal(
        <div
          onClick={closeImageModal}
          role="dialog"
          aria-modal="true"
          aria-label={news?.title || 'Foto berita'}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10050,
            padding: 'var(--space-lg)',
            cursor: 'zoom-out'
          }}
        >
          <button
            type="button"
            onClick={closeImageModal}
            aria-label="Tutup foto"
            style={{
              position: 'absolute',
              top: 'var(--space-lg)',
              right: 'var(--space-lg)',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              color: '#ffffff',
              fontSize: '2rem',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              lineHeight: 1,
              zIndex: 10051
            }}
          >
            &times;
          </button>
          <img
            src={modalImage}
            alt={news?.title || 'Foto berita'}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '100%',
              maxHeight: '92vh',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: 'var(--radius-lg)',
              cursor: 'default',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.45)'
            }}
          />
        </div>,
        document.body
      )}
    </div>
  );
};

export default NewsDetailPage;
