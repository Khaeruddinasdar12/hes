<?php

namespace App\Enums;

use Filament\Support\Contracts\HasLabel;

enum Role: string implements HasLabel
{
    case Admin = 'admin';
    case Hmps = 'hmps';

    public function getLabel(): ?string
    {
        return match ($this) {
            self::Admin => 'Admin',
            self::Hmps => 'HMPS',
        };
    }
}
