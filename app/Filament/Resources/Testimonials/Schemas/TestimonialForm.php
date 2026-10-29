<?php

namespace App\Filament\Resources\Testimonials\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class TestimonialForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(2)
            ->components([
                TextInput::make('urut')
                    ->label('Urutan')
                    ->numeric()
                    ->required()
                    ->unique(ignoreRecord: true, table: 'testimonials', column: 'urut')
                    ->helperText('Angka lebih kecil tampil lebih dulu.'),
                TextInput::make('nama')
                    ->label('Nama alumni')
                    ->required()
                    ->maxLength(255),
                TextInput::make('posisi')
                    ->label('Posisi / keterangan')
                    ->required()
                    ->maxLength(255)
                    ->placeholder('Alumni 2024 | Financial Advisor')
                    ->columnSpanFull(),
                Textarea::make('isi')
                    ->label('Isi testimoni')
                    ->required()
                    ->rows(6)
                    ->columnSpanFull(),
                FileUpload::make('gambar')
                    ->label('Foto alumni')
                    ->disk('public')
                    ->directory('testimonials/files')
                    ->image()
                    ->acceptedFileTypes(['image/jpeg', 'image/jpg', 'image/png'])
                    ->maxSize(5000)
                    ->columnSpanFull(),
                Toggle::make('is_active')
                    ->label('Tampilkan di beranda')
                    ->default(true),
            ]);
    }
}
