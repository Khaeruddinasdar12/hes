<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\News;
use App\Models\User;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::first();
        
        if (!$user) {
            $user = User::factory()->create([
                'name' => 'Admin',
                'email' => 'admin@iainbone.ac.id'
            ]);
        }

        $newsData = [
            [
                'title' => 'Workshop Hukum Keluarga Islam Kontemporer',
                'content' => 'Program Studi Hukum Keluarga Islam (HKI) mengadakan workshop dengan tema "Hukum Keluarga Islam dalam Perspektif Kontemporer" yang menghadirkan pakar hukum keluarga nasional. Workshop ini bertujuan untuk memberikan pemahaman yang lebih mendalam tentang dinamika hukum keluarga Islam di era modern.',
                'image' => null,
                'user_id' => $user->id
            ],
            [
                'title' => 'Juara 1 Lomba Debat Hukum Nasional',
                'content' => 'Tim debat mahasiswa Program Studi HKI berhasil meraih juara 1 dalam Lomba Debat Hukum Nasional yang diselenggarakan di Jakarta. Prestasi ini membuktikan bahwa mahasiswa HKI memiliki kemampuan argumentasi hukum yang mumpuni dan kompetitif di tingkat nasional.',
                'image' => null,
                'user_id' => $user->id
            ],
            [
                'title' => 'Kerjasama Magang dengan Pengadilan Agama',
                'content' => 'Program Studi HKI menjalin kerjasama dengan Pengadilan Agama Watampone untuk program magang mahasiswa semester akhir. Program magang ini memberikan kesempatan bagi mahasiswa untuk belajar secara langsung tentang praktik hukum keluarga di pengadilan agama.',
                'image' => null,
                'user_id' => $user->id
            ],
            [
                'title' => 'Seminar Nasional Hukum Islam',
                'content' => 'Program Studi HKI menyelenggarakan Seminar Nasional Hukum Islam dengan pembicara dari berbagai universitas terkemuka. Seminar ini mengangkat tema "Peran Hukum Keluarga Islam dalam Membangun Keluarga Harmonis" dan diikuti oleh ratusan peserta dari berbagai daerah.',
                'image' => null,
                'user_id' => $user->id
            ],
            [
                'title' => 'Kuliah Tamu Pakar Hukum Keluarga',
                'content' => 'Menghadirkan pakar hukum keluarga nasional untuk memberikan kuliah tamu kepada mahasiswa Program Studi HKI. Kuliah tamu ini membahas tentang perkembangan terbaru dalam kajian hukum keluarga Islam dan tantangannya di era digital.',
                'image' => null,
                'user_id' => $user->id
            ],
            [
                'title' => 'Pengabdian Masyarakat di Desa',
                'content' => 'Mahasiswa Program Studi HKI melaksanakan pengabdian masyarakat di desa Kabupaten Bone dengan tema penyuluhan hukum keluarga. Kegiatan ini bertujuan untuk memberikan edukasi kepada masyarakat tentang hak dan kewajiban dalam keluarga menurut hukum Islam.',
                'image' => null,
                'user_id' => $user->id
            ],
            [
                'title' => 'Workshop Penulisan Skripsi',
                'content' => 'Program Studi HKI mengadakan workshop penulisan skripsi untuk mahasiswa semester akhir dengan menghadirkan dosen pembimbing. Workshop ini memberikan panduan tentang metodologi penelitian dan teknik penulisan skripsi yang baik dan benar.',
                'image' => null,
                'user_id' => $user->id
            ],
            [
                'title' => 'Kunjungan Studi ke Pengadilan Agama',
                'content' => 'Mahasiswa Program Studi HKI melakukan kunjungan studi ke Pengadilan Agama Makassar untuk melihat proses persidangan. Kunjungan ini memberikan pengalaman langsung kepada mahasiswa tentang praktik hukum di pengadilan agama.',
                'image' => null,
                'user_id' => $user->id
            ]
        ];

        foreach ($newsData as $data) {
            $data['slug'] = Str::slug($data['title']);
            News::create($data);
        }
    }
}

