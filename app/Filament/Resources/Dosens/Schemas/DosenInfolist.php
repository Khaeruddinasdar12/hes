<?php

namespace App\Filament\Resources\Dosens\Schemas;

use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class DosenInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('urut'),
                TextEntry::make('nama'),
                TextEntry::make('jabatan'),
                TextEntry::make('pendidikan'),
                TextEntry::make('keahlian'),
                TextEntry::make('gambar'),
                TextEntry::make('created_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('updated_at')
                    ->dateTime()
                    ->placeholder('-'),
            ]);
    }
}
