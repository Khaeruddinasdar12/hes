<?php

namespace App\Filament\Resources\Testimonials\Schemas;

use Filament\Infolists\Components\ImageEntry;
use Filament\Infolists\Components\IconEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class TestimonialInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('urut')
                    ->label('Urutan'),
                TextEntry::make('nama')
                    ->label('Nama alumni'),
                TextEntry::make('posisi')
                    ->label('Posisi / keterangan'),
                TextEntry::make('isi')
                    ->label('Isi testimoni')
                    ->columnSpanFull(),
                ImageEntry::make('gambar')
                    ->label('Foto alumni')
                    ->getStateUsing(fn ($record) => $record->gambar
                        ? asset('storage/'.$record->gambar)
                        : null),
                IconEntry::make('is_active')
                    ->label('Tampil di beranda')
                    ->boolean(),
                TextEntry::make('created_at')
                    ->label('Dibuat pada')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('updated_at')
                    ->label('Diperbarui pada')
                    ->dateTime()
                    ->placeholder('-'),
            ]);
    }
}
