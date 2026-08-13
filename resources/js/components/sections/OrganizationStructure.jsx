import React from 'react';

const OrganizationStructure = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="unique-header">
          <h2>Struktur Organisasi</h2>
          <p>Tim yang memimpin program studi</p>
        </div>
        
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          {/* Full width image */}
          <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
            <img 
              src="strukturorganisasi.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
              alt="Struktur Organisasi" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
            {/* Overlay gradient */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '50%',
              background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)'
            }}></div>
            
            {/* Organization title on image */}
            <div style={{
              position: 'absolute',
              bottom: 'var(--space-lg)',
              left: 'var(--space-lg)',
              color: 'white'
            }}>
            <h3 style={{ 
              fontSize: '1.75rem', 
              fontWeight: 'bold', 
              marginBottom: 'var(--space-xs)',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
              color: '#fff' /* Penambahan: Warna font putih */
            }}>
            Struktur Organisasi Program Studi
          </h3>
          <p style={{ 
            fontSize: '1rem',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
            color: '#fff' /* Penambahan: Warna font putih */
          }}>
          Tim Kepemimpinan yang Kompeten dan Dedikatif
        </p>
      </div>
    </div>          
  </div>
</div>
</section>
);
};

export default OrganizationStructure;