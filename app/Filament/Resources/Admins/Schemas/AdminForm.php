<?php

namespace App\Filament\Resources\Admins\Schemas;

use App\Enums\Role;
use App\Models\User;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class AdminForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(2)
            ->components([
                TextInput::make('name')
                    ->label('Nama')
                    ->required()
                    ->maxLength(255),
                TextInput::make('email')
                    ->label('Email')
                    ->email()
                    ->required()
                    ->unique(ignoreRecord: true)
                    ->maxLength(255),
                Select::make('role')
                    ->label('Role')
                    ->options(Role::class)
                    ->required()
                    ->default(Role::Admin)
                    ->disabled(function (?User $record): bool {
                        if (! $record?->isAdmin()) {
                            return false;
                        }

                        return User::query()->where('role', Role::Admin)->count() <= 1;
                    })
                    ->dehydrated()
                    ->helperText('Admin dapat mengakses semua menu. HMPS hanya dapat mengelola berita miliknya sendiri.'),
                TextInput::make('password')
                    ->label('Password')
                    ->password()
                    ->revealable()
                    ->minLength(8)
                    ->required(fn (string $operation): bool => $operation === 'create')
                    ->dehydrated(fn (?string $state): bool => filled($state))
                    ->confirmed()
                    ->helperText(fn (string $operation): ?string => $operation === 'edit'
                        ? 'Kosongkan jika tidak ingin mengubah password.'
                        : null),
                TextInput::make('password_confirmation')
                    ->label('Konfirmasi Password')
                    ->password()
                    ->revealable()
                    ->required(fn (string $operation): bool => $operation === 'create')
                    ->dehydrated(false),
            ]);
    }
}
