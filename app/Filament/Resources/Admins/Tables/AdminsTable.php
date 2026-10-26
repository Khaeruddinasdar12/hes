<?php

namespace App\Filament\Resources\Admins\Tables;

use App\Enums\Role;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Collection as EloquentCollection;

class AdminsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->label('Nama')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('email')
                    ->label('Email')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('role')
                    ->label('Role')
                    ->badge()
                    ->sortable(),
                TextColumn::make('news_count')
                    ->label('Berita')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('announcements_count')
                    ->label('Pengumuman')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('created_at')
                    ->label('Dibuat pada')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->label('Diperbarui pada')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                SelectFilter::make('role')
                    ->label('Role')
                    ->options(Role::class),
            ])
            ->recordActions([
                ViewAction::make(),
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make()
                        ->modalDescription('Admin yang dipilih akan dihapus. Berita dan pengumuman yang dibuat admin tersebut juga akan terhapus. Akun yang sedang digunakan tidak akan dihapus.')
                        ->using(function (EloquentCollection $records): void {
                            $records
                                ->reject(fn ($record) => $record->getKey() === auth()->id())
                                ->each(fn ($record) => $record->delete());
                        }),
                ]),
            ]);
    }
}
