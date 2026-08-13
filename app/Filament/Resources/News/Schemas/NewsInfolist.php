<?php

namespace App\Filament\Resources\News\Schemas;

use Filament\Infolists\Components\ImageEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class NewsInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('title')
                    ->label('Judul berita'),

                TextEntry::make('slug'),

                ImageEntry::make('image')
                    ->label('Thumbnail')
                    ->height(80)
                    ->getStateUsing(fn ($record) => 
                        $record->image
                            ? asset('storage/' . $record->image)
                            : asset('images/no-image.png')
                    ),

                TextEntry::make('content')
                    ->label('Isi berita')
                    ->html()
                    ->columnSpanFull(),
                
                TextEntry::make('user.name'),

                TextEntry::make('created_at_formatted')
                    ->label('Waktu dibuat')
                    ->placeholder('-'),
            ]);
    }
}
