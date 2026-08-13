import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

const LecturersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const initialPage = parseInt(searchParams.get('page') || '1', 10);
  const initialSearch = searchParams.get('search') || '';

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [lecturers, setLecturers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [pagination, setPagination] = useState(null);
  const [hasMounted, setHasMounted] = useState(false);
  const searchChangedRef = useRef(false);
  const searchInputRef = useRef(null);

  // --- modal states ---
  const [selectedLecturer, setSelectedLecturer] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const defaultImage = "https://i.imgur.com/6qFkMY9.png";

  // --- fetch lecturers ---
  const fetchLecturers = async (page = 1) => {
    try {
      setLoading(true);
      let url = `/api/dosens?limit=12&page=${page}`;
      if (searchTerm) url += `&search=${encodeURIComponent(searchTerm)}`;
      const response = await fetch(url);
      const result = await response.json();

      if (result.success) {
        setLecturers(result.data);
        setPagination(result.pagination);
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

  useEffect(() => {
    fetchLecturers(initialPage);
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    // When search term changes, reset to page 1 and fetch
    searchChangedRef.current = true;
    setCurrentPage(1);
    const timeoutId = setTimeout(() => {
      fetchLecturers(1);
      searchChangedRef.current = false;
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [searchTerm, hasMounted]);

  useEffect(() => {
    if (!hasMounted) return;
    // When page changes, fetch that page (but skip if search just changed)
    if (searchChangedRef.current) return;
    const timeoutId = setTimeout(() => fetchLecturers(currentPage), 100);
    return () => clearTimeout(timeoutId);
  }, [currentPage, hasMounted]);

  useEffect(() => {
    if (!hasMounted) return;

    const params = new URLSearchParams();
    if (searchTerm) params.set('search', searchTerm);
    if (currentPage > 1) params.set('page', currentPage.toString());

    const newSearchString = params.toString();
    const currentSearchString = window.location.search.substring(1);

    if (newSearchString !== currentSearchString) {
      setSearchParams(params, { replace: true });
    }
  }, [searchTerm, currentPage, setSearchParams, hasMounted]);


  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- modal handlers ---
  const handleCardClick = (lecturer) => {
    console.log('Card clicked for lecturer:', lecturer.nama);
    setSelectedLecturer(lecturer);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedLecturer(null);
  };

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showModal) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [showModal]);

  // --- loading ---
  if (loading) {
    return (
      <section className="section" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', padding: 'var(--space-3xl)' }}>
            <i className="fas fa-spinner fa-spin" style={{ fontSize: '2rem', color: 'var(--accent-600)' }}></i>
            <p style={{ marginTop: 'var(--space-md)' }}>Memuat data dosen...</p>
          </div>
        </div>
      </section>
    );
  }

  // --- error ---
  if (error) {
    return (
      <section className="section" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', padding: 'var(--space-3xl)' }}>
            <p style={{ color: 'var(--error)' }}>{error}</p>
            <button
              onClick={fetchLecturers}
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
              Coba Lagi
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Tim Dosen</h2>
          <p className="section-subtitle">Profesional yang mendidik generasi masa depan</p>
        </div>

        {/* Search */}
        <div style={{ maxWidth: '500px', margin: '0 auto var(--space-2xl)', position: 'relative' }}>
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Cari dosen..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              // Keep focus on input while typing
              if (document.activeElement !== e.target) {
                e.target.focus();
              }
            }}
            onKeyDown={(e) => {
              // Keep focus during keyboard navigation
              e.target.focus();
            }}
            autoFocus
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

                {/* Cards */}
        {lecturers.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--space-lg)',
            padding: '0 var(--space-md)'
          }}
          className="lecturers-grid"
          >
            <style>{`
              @media (min-width: 640px) {
                .lecturers-grid {
                  grid-template-columns: repeat(2, 1fr) !important;
                }
              }
              @media (min-width: 1024px) {
                .lecturers-grid {
                  grid-template-columns: repeat(3, 1fr) !important;
                }
              }
            `}</style>
            {lecturers.map((lecturer) => (
              <div
                key={lecturer.id}
                className="card"
                onClick={() => handleCardClick(lecturer)}
                style={{
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  width: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div className="card-image" style={{ position: 'relative' }}>
                  <img
                    src={lecturer.gambar || defaultImage}
                    alt={lecturer.nama}
                    style={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      display: 'block'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)',
                    pointerEvents: 'none'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    bottom: 'var(--space-md)',
                    left: 'var(--space-md)',
                    color: '#ffffff',
                    pointerEvents: 'none'
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
                  <p className="card-description" style={{ margin: '0 0 var(--space-xs) 0' }}>
                    <strong>Pendidikan:</strong> {lecturer.pendidikan}
                  </p>
                  <p className="card-description" style={{ margin: 0 }}>
                    <strong>Keahlian:</strong> {lecturer.keahlian}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: 'var(--space-3xl)' }}>
            <p>Tidak ada dosen ditemukan</p>
            {searchTerm && (
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

        {/* Pagination */}
        {pagination && pagination.last_page > 1 && lecturers.length > 0 && (
          <>
            <style>{`
              @media (max-width: 639px) {
                .pagination-text-mobile {
                  display: none !important;
                }
              }
            `}</style>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 'var(--space-xs)',
              marginTop: 'var(--space-3xl)',
              padding: '0 var(--space-md)',
              flexWrap: 'wrap'
            }}>
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              style={{
                padding: 'var(--space-sm) var(--space-md)',
                backgroundColor: currentPage === 1 ? 'var(--gray-300)' : 'var(--accent-600)',
                color: currentPage === 1 ? 'var(--gray-500)' : 'var(--white)',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                fontSize: '0.875rem',
                fontWeight: '500',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-xs)'
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 1) {
                  e.target.style.backgroundColor = 'var(--accent-700)';
                  e.target.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== 1) {
                  e.target.style.backgroundColor = 'var(--accent-600)';
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              <i className="fas fa-chevron-left"></i>
              <span className="pagination-text-mobile">Sebelumnya</span>
            </button>

            {/* Page Numbers */}
            {Array.from({ length: pagination.last_page }, (_, i) => i + 1).map((page) => {
              // Show first page, last page, current page, and pages around current
              const showPage = 
                page === 1 ||
                page === pagination.last_page ||
                (page >= currentPage - 1 && page <= currentPage + 1);

              if (!showPage) {
                // Show ellipsis
                if (page === currentPage - 2 || page === currentPage + 2) {
                  return (
                    <span
                      key={page}
                      style={{
                        padding: 'var(--space-sm) var(--space-md)',
                        color: 'var(--gray-500)',
                        fontSize: '0.875rem'
                      }}
                    >
                      ...
                    </span>
                  );
                }
                return null;
              }

              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  style={{
                    padding: 'var(--space-sm) var(--space-md)',
                    minWidth: '40px',
                    backgroundColor: currentPage === page ? 'var(--accent-600)' : 'var(--white)',
                    color: currentPage === page ? 'var(--white)' : 'var(--gray-700)',
                    border: `1px solid ${currentPage === page ? 'var(--accent-600)' : 'var(--gray-300)'}`,
                    borderRadius: 'var(--radius-md)',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: currentPage === page ? '600' : '500',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (currentPage !== page) {
                      e.target.style.backgroundColor = 'var(--gray-100)';
                      e.target.style.borderColor = 'var(--accent-400)';
                      e.target.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentPage !== page) {
                      e.target.style.backgroundColor = 'var(--white)';
                      e.target.style.borderColor = 'var(--gray-300)';
                      e.target.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {page}
                </button>
              );
            })}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === pagination.last_page}
              style={{
                padding: 'var(--space-sm) var(--space-md)',
                backgroundColor: currentPage === pagination.last_page ? 'var(--gray-300)' : 'var(--accent-600)',
                color: currentPage === pagination.last_page ? 'var(--gray-500)' : 'var(--white)',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                cursor: currentPage === pagination.last_page ? 'not-allowed' : 'pointer',
                fontSize: '0.875rem',
                fontWeight: '500',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-xs)'
              }}
              onMouseEnter={(e) => {
                if (currentPage !== pagination.last_page) {
                  e.target.style.backgroundColor = 'var(--accent-700)';
                  e.target.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== pagination.last_page) {
                  e.target.style.backgroundColor = 'var(--accent-600)';
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              <span className="pagination-text-mobile">Selanjutnya</span>
              <i className="fas fa-chevron-right"></i>
                          </button>
            </div>
          </>
        )}

        {/* Pagination Info */}
        {pagination && lecturers.length > 0 && (
          <div style={{
            textAlign: 'center',
            marginTop: 'var(--space-lg)',
            padding: '0 var(--space-md)',
            color: 'var(--gray-600)',
            fontSize: '0.875rem'
          }}>
            Menampilkan {pagination.from} - {pagination.to} dari {pagination.total} dosen
          </div>
        )}

        {/* --- Modal untuk Foto Full Size --- */}
        {showModal && selectedLecturer && (
          <div
            onClick={closeModal}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              padding: 'var(--space-lg)',
              cursor: 'pointer',
              animation: 'fadeIn 0.3s ease-in-out'
            }}
          >
            <style>{`
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
            `}</style>
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: '90vw',
                maxHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent'
              }}
            >
              <button
                onClick={closeModal}
                style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '0',
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: '32px',
                  fontWeight: 'bold',
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  lineHeight: '1',
                  zIndex: 10000
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.4)';
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.transform = 'scale(1)';
                }}
                aria-label="Tutup modal"
              >
                &times;
              </button>
              <img
                src={selectedLecturer.gambar || defaultImage}
                alt={selectedLecturer.nama}
                onError={(e) => {
                  console.error('Error loading image:', selectedLecturer.gambar);
                  e.target.src = defaultImage;
                }}
                style={{
                  maxWidth: '100%',
                  maxHeight: '90vh',
                  objectFit: 'contain',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
                }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LecturersPage;
