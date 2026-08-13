import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dedi Setiawan, S.H. ",
      position: "Alumni 2024 | Financial Advisor",
      content: "Terkait dengan Program Studi yang saya tempuh, pekerjaan saya saat ini memang tidak sepenuhnya sejalur, karena perusahaan tempat saya bekerja merupakan lembaga keuangan konvensional. Namun, sebagai seorang Financial Advisor, latar belakang pendidikan saya di bidang Hukum Ekonomi Syariah sangat membantu, terutama dalam memberikan penjelasan kepada nasabah Bank Mandiri mengenai dasar-dasar hukum dan prinsip keuangan yang saya pahami selama perkuliahan.Saya merasa bangga menjadi bagian dari alumni Hukum Ekonomi Syariah IAIN Bone. Program studi ini telah membentuk saya menjadi pribadi profesional yang religius, adaptif, dan siap bersaing di dunia industri keuangan modern tanpa meninggalkan nilai-nilai Islam",
      image: "asset/testimoni/alumni.png"
    },
    {
      id: 2,
      name: "Wiwi Liapriana, S.H",
      position: "Alumni 2024 | Penyuluh Agama Islam",
      content: "Sebagai lulusan Hukum Ekonomi Syariah, saya merasa pekerjaan saya sebagai Penyuluh Agama Islam sangat sesuai dengan bidang ilmu yang saya pelajari pada saat masa perkuliahan. Pengetahuan tentang hukum Islam dan ekonomi syariah sangat membantu saya dalam memberikan bimbingan kepada masyarakat, terutama dalam mengajak mereka menerapkan nilai-nilai kejujuran, keadilan, dan keberkahan dalam kehidupan sehari-hari.",
      image: "asset/testimoni/alumni.png"
    },
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-primary)', padding: '4rem 0' }}>
      <div className="container text-center">
        <div className="section-header">
          <h2 className="section-title">Testimoni Alumni</h2>
          <p className="section-subtitle">Pengalaman mereka setelah lulus</p>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          modules={[Pagination, Autoplay]}
          style={{ paddingBottom: '3rem' }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div
                style={{
                  background: 'white',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  minHeight: '420px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textAlign: 'left'
                }}
              >
                <div>
                  <p
                    style={{
                      color: 'var(--gray-700)',
                      fontSize: '0.9rem',
                      lineHeight: '1.6',
                      fontStyle: 'italic',
                      marginBottom: '1rem'
                    }}
                  >
                    {t.content}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderTop: '1px solid #eee',
                    paddingTop: '1rem'
                  }}
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      marginRight: '1rem'
                    }}
                  />
                  <div>
                    <h4
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        marginBottom: '0.25rem',
                        color: 'var(--gray-800)'
                      }}
                    >
                      {t.name}
                    </h4>
                    <p
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--gray-600)',
                        margin: 0
                      }}
                    >
                      {t.position}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
