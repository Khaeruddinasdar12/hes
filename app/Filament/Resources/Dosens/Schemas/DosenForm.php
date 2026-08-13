<?php

namespace App\Filament\Resources\Dosens\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;
use Filament\Forms\Components\FileUpload;

class DosenForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('urut')
                    ->required()
                    ->unique(ignoreRecord: true, table: 'dosens', column: 'urut'),
                TextInput::make('nama')
                    ->required(),
                TextInput::make('jabatan')
                    ->required(),
                TextInput::make('pendidikan')
                    ->required(),
                TextInput::make('keahlian')
                    ->required(),
                FileUpload::make('gambar')
                    ->label('Lampiran File (PDF)')
                    ->disk('public') // Ganti dengan disk yang Anda gunakan
                    ->directory('dosens/files')
                    ->acceptedFileTypes(['image/jpeg', 'image/jpg', 'image/png'])
                    ->maxSize(5000) // Contoh batas ukuran 5MB
                    ->columnSpanFull(), // Mengambil seluruh lebar formulir

            ]);
    }
}
