<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $user = User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        // Create news items directly using model which has booted event
        $newsItems = [
            ['title' => 'Workshop Hukum Keluarga Islam Kontemporer', 'content' => 'Program Studi HKI mengadakan workshop dengan tema "Hukum Keluarga Islam dalam Perspektif Kontemporer" yang menghadirkan pakar hukum keluarga nasional.'],
            ['title' => 'Juara 1 Lomba Debat Hukum Nasional', 'content' => 'Tim debat mahasiswa Program Studi HKI berhasil meraih juara 1 dalam Lomba Debat Hukum Nasional yang diselenggarakan di Jakarta.'],
            ['title' => 'Kerjasama Magang dengan Pengadilan Agama', 'content' => 'Program Studi HKI menjalin kerjasama dengan Pengadilan Agama Watampone untuk program magang mahasiswa semester akhir.'],
            ['title' => 'Seminar Nasional Hukum Islam', 'content' => 'Program Studi HKI menyelenggarakan Seminar Nasional Hukum Islam dengan pembicara dari berbagai universitas terkemuka.'],
            ['title' => 'Kuliah Tamu Pakar Hukum Keluarga', 'content' => 'Menghadirkan pakar hukum keluarga nasional untuk memberikan kuliah tamu kepada mahasiswa Program Studi HKI.'],
            ['title' => 'Pengabdian Masyarakat di Desa', 'content' => 'Mahasiswa Program Studi HKI melaksanakan pengabdian masyarakat di desa dengan tema penyuluhan hukum keluarga.']
        ];

        foreach ($newsItems as $item) {
            \App\Models\News::create([
                'title' => $item['title'],
                'slug' => \Illuminate\Support\Str::slug($item['title']),
                'content' => $item['content'],
                'user_id' => $user->id,
                'image' => null
            ]);
        }

        // Create announcements
        $announcementItems = [
            ['title' => 'Pendaftaran Ujian Tengah Semester', 'content' => 'Diumumkan pendaftaran UTS semester genap untuk semua mahasiswa Program Studi HKI.'],
            ['title' => 'Jadwal Kuliah Tambahan', 'content' => 'Diumumkan jadwal kuliah tambahan untuk beberapa mata kuliah yang memerlukan jam tambahan.'],
            ['title' => 'Hasil Seleksi Beasiswa', 'content' => 'Pengumuman hasil seleksi beasiswa prestasi telah tersedia di portal akademik.']
        ];

        foreach ($announcementItems as $item) {
            \App\Models\Announcement::create([
                'title' => $item['title'],
                'slug' => \Illuminate\Support\Str::slug($item['title']),
                'content' => $item['content'],
                'user_id' => $user->id,
                'file' => null
            ]);
        }
    }
}
