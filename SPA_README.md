# Program Studi Hukum Keluarga Islam - SPA

Aplikasi Single Page Application (SPA) untuk Program Studi Hukum Keluarga Islam Fakultas Syariah dan Hukum Islam IAIN Bone.

## Fitur SPA

### Routing
Aplikasi menggunakan React Router untuk navigasi SPA dengan halaman-halaman berikut:

- **Beranda** (`/`) - Halaman utama dengan semua section
- **Tentang** (`/about`) - Informasi tentang program studi
- **Dosen** (`/lecturers`) - Profil tim pengajar
- **Galeri** (`/gallery`) - Dokumentasi kegiatan
- **Berita** (`/news`) - Berita dan pengumuman
- **Kontak** (`/contact`) - Informasi kontak

### Komponen Link
Semua navigasi menggunakan komponen `Link` dari React Router untuk navigasi SPA yang smooth tanpa reload halaman.

## Struktur File

```
resources/js/
├── Main.jsx                 # App utama dengan routing
├── app.jsx                  # Entry point React
├── components/
│   ├── layout/
│   │   ├── Layout.jsx       # Layout wrapper dengan Navbar & Footer
│   │   ├── Navbar.jsx       # Navigation dengan Link components
│   │   └── Footer.jsx      # Footer
│   ├── sections/            # Komponen section
│   └── shared/              # Komponen shared
└── pages/                   # Halaman-halaman SPA
    ├── HomePage.jsx
    ├── AboutPage.jsx
    ├── LecturersPage.jsx
    ├── GalleryPage.jsx
    ├── NewsPage.jsx
    └── ContactPage.jsx
```

## Cara Menjalankan

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build assets:**
   ```bash
   npm run build
   ```

3. **Jalankan server Laravel:**
   ```bash
   php artisan serve
   ```

4. **Akses aplikasi:**
   - Buka browser ke `http://localhost:8000`
   - Navigasi antar halaman menggunakan menu atau Link components

## Development Mode

Untuk development dengan hot reload:

```bash
npm run dev
```

## Fitur SPA

- ✅ **React Router** untuk client-side routing
- ✅ **Link Components** untuk navigasi tanpa reload
- ✅ **Layout Component** dengan Navbar dan Footer yang konsisten
- ✅ **Page Components** untuk setiap route
- ✅ **Active Link Highlighting** berdasarkan current route
- ✅ **Smooth Scrolling** ke top saat navigasi
- ✅ **Mobile Responsive** dengan mobile menu

## Teknologi

- **Frontend:** React 19, React Router DOM
- **Styling:** Tailwind CSS 4, Custom CSS
- **Build Tool:** Vite
- **Backend:** Laravel 11
- **Icons:** Font Awesome

## Catatan

- Semua route diarahkan ke `app.blade.php` untuk mendukung SPA
- CSS dan JavaScript dimuat melalui Vite
- Aplikasi menggunakan `id="root"` sebagai mount point
- Navigation menggunakan `useLocation` untuk active state


