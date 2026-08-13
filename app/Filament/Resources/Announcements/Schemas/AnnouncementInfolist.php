<?php

namespace App\Filament\Resources\Announcements\Schemas;

use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;
use Illuminate\Support\Facades\Storage; // Import untuk membuat URL file

class AnnouncementInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('title')
                    ->label('Judul'),

                TextEntry::make('slug'),

                TextEntry::make('content')
                    ->label('Isi Pengumuman'),

                TextEntry::make('file')
                    ->label('Lampiran')
                    ->placeholder('Kosong') 
                    ->formatStateUsing(function ($state) {
                        if (empty($state)) {
                            return '<span class="text-gray-500 italic">Kosong</span>';
                        }

                        $url = Storage::disk('public')->url($state);

                        return "<a href='{$url}' target='_blank' class='text-primary-600 hover:underline'>Lihat File</a>";
                    })
                    ->html(),
               
                TextEntry::make('user.name')
                    ->label('Dibuat oleh'),

                TextEntry::make('created_at')
                    ->label('Dibuat pada')
                    ->dateTime('d M Y, H:i'),

                // TextEntry::make('updated_at')
                //     ->label('Terakhir Diperbarui')
                //     ->dateTime('d M Y, H:i')
                //     ->placeholder('-'),
            ]);
    }
}
