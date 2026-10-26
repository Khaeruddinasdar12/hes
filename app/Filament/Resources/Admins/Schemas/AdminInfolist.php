<?php

namespace App\Filament\Resources\Admins\Schemas;

use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class AdminInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('name')
                    ->label('Nama'),
                TextEntry::make('email')
                    ->label('Email'),
                TextEntry::make('role')
                    ->label('Role')
                    ->badge(),
                TextEntry::make('news_count')
                    ->label('Jumlah berita')
                    ->numeric()
                    ->placeholder('0'),
                TextEntry::make('announcements_count')
                    ->label('Jumlah pengumuman')
                    ->numeric()
                    ->placeholder('0'),
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
