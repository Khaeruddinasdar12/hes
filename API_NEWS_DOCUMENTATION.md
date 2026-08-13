# API News Documentation

## Endpoints

### 1. Get All News
**GET** `/api/news`

**Query Parameters:**
- `limit` (optional): Jumlah data yang diinginkan
  - Example: `/api/news?limit=3` untuk mendapatkan 3 berita terbaru
- `search` (optional): Kata kunci pencarian
  - Example: `/api/news?search=workshop`

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Workshop Hukum Keluarga Islam Kontemporer",
      "slug": "workshop-hukum-keluarga-islam-kontemporer",
      "excerpt": "Program Studi Hukum Keluarga Islam (HKI) mengadakan workshop dengan tema...",
      "content": "Full content here...",
      "image": "http://localhost:8000/storage/image.jpg",
      "date": "15 Juni 2023",
      "author": "Admin",
      "created_at": "2023-06-15T10:00:00.000000Z"
    }
  ]
}
```

### 2. Get Single News
**GET** `/api/news/{slug}`

**Example:** `/api/news/workshop-hukum-keluarga-islam-kontemporer`

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Workshop Hukum Keluarga Islam Kontemporer",
    "slug": "workshop-hukum-keluarga-islam-kontemporer",
    "content": "Full content here...",
    "image": "http://localhost:8000/storage/image.jpg",
    "date": "15 Juni 2023",
    "author": "Admin",
    "created_at": "2023-06-15T10:00:00.000000Z"
  }
}
```

## Frontend Integration

### React Component Usage

#### 1. Display News on Homepage (with limit)
```jsx
well<News limit={6} />
```

#### 2. Display All News on News Page
```jsx
<News />
```

### Component Features

1. **Automatic API Fetching**: Komponen News otomatis fetch data dari API saat mount
2. **Loading State**: Menampilkan "Memuat berita..." saat loading
3. **Error Handling**: Menampilkan error message jika terjadi kesalahan
4. **Search Functionality**: Search input hanya muncul di halaman full news (tanpa limit)
5. **Default Image**: Menggunakan gambar default jika news tidak memiliki gambar

## Seeder

Untuk menambahkan data dummy news, jalankan:
```bash
php artisan db:seed --class=NewsSeeder
```

## Database Structure

Table: `news`
- id (bigint)
- title (varchar)
- slug (varchar, unique)
- content (text)
- image (varchar, nullable)
- user_id (foreign key)
- created_at (timestamp)
- updated_at (timestamp)

## Notes

- API sudah terintegrasi dengan SPA React
- Penggunaan sudah otomatis di:
  - **Homepage**: Menampilkan 6 berita terbaru dengan link "Lihat Semua Berita"
  - **News Page**: Menampilkan semua berita dengan fitur search
- Transisi antar halaman menggunakan SPA (tanpa reload browser)


