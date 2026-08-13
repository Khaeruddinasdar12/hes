<?php

namespace App\Filament\Resources\News\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\DateTimePicker;
use Illuminate\Support\Str;

class NewsForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(3) // Menggunakan 3 kolom untuk tata letak yang lebih baik
            ->components([
                // Kolom Judul: Live untuk menghasilkan slug
                TextInput::make('title')
                ->label('Judul Berita')
                ->required()
                ->maxLength(255)
                    // Membuat input "live" untuk memicu pembaruan pada field lain saat nilai berubah
                ->live(onBlur: true)
                    // Perbaikan TypeError: Menghapus type hint 'Set' dari $set
                    // dan menggunakan ?string untuk $state agar lebih aman.
                ->afterStateUpdated(function (string $operation, ?string $state, $set) {
                        // Hanya mengisi otomatis saat membuat (create) record baru
                    if ($operation === 'create') {
                        $set('slug', Str::slug($state ?? ''));
                    }
                })
                    ->columnSpan(2), // Judul mengambil 2 kolom

                // Kolom Slug: Otomatis terisi, dinonaktifkan, dan harus unik
                    TextInput::make('slug')
                    ->label('Slug (Alamat URL)')
                    ->required()
                    ->maxLength(255)
                    ->unique(ignoreRecord: true) // Pastikan slug unik (abaikan record saat edit)
                    ->disabled() // Nonaktifkan agar pengguna tidak bisa mengedit
                    ->dehydrated(fn (?string $state): bool => filled($state)) // Pastikan data tersimpan meskipun disabled
                    ->columnSpan(1), // Slug mengambil 1 kolom

                // Kolom File: File Upload untuk lampiran PDF
                    FileUpload::make('image')
                    ->label('Thumbnail')
                    ->disk('public') // Ganti dengan disk yang Anda gunakan
                    ->directory('news/files')
                    ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/jpg']) 
                    ->maxSize(10240) // Contoh batas ukuran 10MB
                    ->columnSpanFull(), // Mengambil seluruh lebar formulir

                // Kolom Konten: Menggunakan RichEditor untuk input teks panjang dan kaya
                    RichEditor::make('content')
                    ->label('Isi Berita')
                    ->required()
                    ->fileAttachmentsDisk('public') // Ganti dengan disk yang Anda gunakan
                    ->fileAttachmentsDirectory('news/attachments')
                    ->columnSpanFull()
                    ->extraInputAttributes([
                        'style' => 'min-height: 400px'
                    ]), // Mengambil seluruh lebar formulir (3 kolom)

                    DateTimePicker::make('created_at')
                    ->label('Waktu Dibuat')
                    ->required() 
                    ->placeholder(now()->format('Y-m-d H:i:s')),



                ]);
        }
    }
