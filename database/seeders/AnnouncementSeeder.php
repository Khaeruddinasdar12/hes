<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\Announcement;
use App\Models\User;

class AnnouncementSeeder extends Seeder
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

        $announcementsData = [
            [
                'title' => 'Pendaftaran Ujian Tengah Semester Genap 2023/2024',
                'content' => 'Diumumkan kepada seluruh mahasiswa Program Studi Hukum Keluarga Islam (HKI) bahwa pendaftaran Ujian Tengah Semester (UTS) Semester Genap Tahun Akademik 2023/2024 akan dibuka mulai tanggal 1 Maret 2024. Mahasiswa diharapkan melakukan pendaftaran melalui sistem akademik online sebelum batas waktu yang ditentukan.',
                'file' => null,
                'user_id' => $user->id
            ],
            [
                'title' => 'Jadwal Kuliah Tambahan Semester Genap',
                'content' => 'Diumumkan jadwal kuliah tambahan untuk mata kuliah yang memerlukan jam tambahan. Silakan mahasiswa mengecek jadwal kuliah tambahan di website resmi Program Studi HKI. Jadwal dapat berubah sewaktu-waktu sesuai dengan situasi dan kondisi yang ada.',
                'file' => null,
                'user_id' => $user->id
            ],
            [
                'title' => 'Pengumuman Hasil Seleksi Beasiswa Prestasi',
                'content' => 'Kepada mahasiswa Program Studi HKI, diumumkan bahwa hasil seleksi beasiswa prestasi untuk periode semester genap telah diumumkan. Mahasiswa yang dinyatakan lolos seleksi dapat melihat daftar penerima beasiswa dan melakukan verifikasi data di portal akademik.',
                'file' => null,
                'user_id' => $user->id
            ],
            [
                'title' => 'Libur Hari Raya Idul Fitri 1445 H',
                'content' => 'Diumumkan kepada seluruh civitas akademika Program Studi HKI bahwa libur hari raya Idul Fitri 1445 H akan dilaksanakan Frekuensi tanggal 10-15 April 2024. Perkuliahan akan dimulai kembali pada tanggal 16 April 2024. Selamat hari raya Idul Fitri, mohon maaf lahir dan batin.',
                'file' => null,
                'user_id' => $user->id
            ],
            [
                'title' => 'Pendaftaran Magang Semester Genap',
                'content' => 'Kepada mahasiswa semester 6 Program Studi HKI, diinformasikan bahwa pendaftaran program magang semester genap telah dibuka. Mahasiswa yang memenuhi syarat dapat melakukan pendaftaran magang melalui koordinator magang Program Studi HKI dengan membawa berkas yang telah ditentukan.',
                'file' => null,
                'user_id' => $user->id
            ],
            [
                'title' => 'Pengumuman Hasil Ujian Akhir Semester',
                'content' => 'Berikut ini adalah pengumuman hasil ujian akhir semester ganjil Tahun Akademik 2023/2024 Program Studi HKI. Mahasiswa dapat melihat hasil ujian dan nilai melalui portal akademik online. Jika terdapat ketidaksesuaian, silakan hubungi bagian akademik segera.',
                'file' => null,
                'user_id' => $user->id
            ],
            [
                'title' => 'Workshop Penulisan Proposal Skripsi',
                'content' => 'Program Studi HKI akan mengadakan workshop penulisan proposal skripsi untuk mahasiswa semester 7. Workshop ini bertujuan untuk memberikan pemahaman dan panduan dalam menyusun proposal skripsi yang baik dan benar. Pendaftaran dibuka mulai tanggal 1 Juli 2023.',
                'file' => null,
                'user_id' => $user->id
            ],
            [
                'title' => 'Pengumuman Jadwal Wisuda Periode Juni 2023',
                'content' => 'Kepada mahasiswa Program Studi HKI yang akan diwisuda pada periode Juni 2023, diumumkan jadwal wisuda telah ditentukan. Mahasiswa diharapkan untuk mempersiapkan dokumen yang diperlukan seperti kelengkapan administrasi, surat keterangan bebas perpustakaan, dan berkas lainnya.',
                'file' => null,
                'user_id' => $user->id
            ]
        ];

        foreach ($announcementsData as $data) {
            $data['slug'] = Str::slug($data['title']);
            Announcement::create($data);
        }
    }
}

