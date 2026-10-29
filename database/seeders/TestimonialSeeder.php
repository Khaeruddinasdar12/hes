<?php

namespace Database\Seeders;

use App\Models\Testimonial;
use Illuminate\Database\Seeder;

class TestimonialSeeder extends Seeder
{
    public function run(): void
    {
        $items = [
            [
                'urut' => 1,
                'nama' => 'Dedi Setiawan, S.H.',
                'posisi' => 'Alumni 2024 | Financial Advisor',
                'isi' => 'Terkait dengan Program Studi yang saya tempuh, pekerjaan saya saat ini memang tidak sepenuhnya sejalur, karena perusahaan tempat saya bekerja merupakan lembaga keuangan konvensional. Namun, sebagai seorang Financial Advisor, latar belakang pendidikan saya di bidang Hukum Ekonomi Syariah sangat membantu, terutama dalam memberikan penjelasan kepada nasabah Bank Mandiri mengenai dasar-dasar hukum dan prinsip keuangan yang saya pahami selama perkuliahan. Saya merasa bangga menjadi bagian dari alumni Hukum Ekonomi Syariah IAIN Bone. Program studi ini telah membentuk saya menjadi pribadi profesional yang religius, adaptif, dan siap bersaing di dunia industri keuangan modern tanpa meninggalkan nilai-nilai Islam.',
            ],
            [
                'urut' => 2,
                'nama' => 'Wiwi Liapriana, S.H.',
                'posisi' => 'Alumni 2024 | Penyuluh Agama Islam',
                'isi' => 'Sebagai lulusan Hukum Ekonomi Syariah, saya merasa pekerjaan saya sebagai Penyuluh Agama Islam sangat sesuai dengan bidang ilmu yang saya pelajari pada saat masa perkuliahan. Pengetahuan tentang hukum Islam dan ekonomi syariah sangat membantu saya dalam memberikan bimbingan kepada masyarakat, terutama dalam mengajak mereka menerapkan nilai-nilai kejujuran, keadilan, dan keberkahan dalam kehidupan sehari-hari.',
            ],
        ];

        foreach ($items as $item) {
            Testimonial::query()->updateOrCreate(
                ['urut' => $item['urut']],
                $item + ['is_active' => true]
            );
        }
    }
}
