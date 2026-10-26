<?php

namespace App\Filament\Resources\Admins\Pages;

use App\Enums\Role;
use App\Filament\Resources\Admins\AdminResource;
use App\Models\User;
use Filament\Actions\DeleteAction;
use Filament\Actions\ViewAction;
use Filament\Resources\Pages\EditRecord;

class EditAdmin extends EditRecord
{
    protected static string $resource = AdminResource::class;

    protected function getHeaderActions(): array
    {
        return [
            ViewAction::make(),
            DeleteAction::make()
                ->modalDescription('Menghapus admin ini juga akan menghapus berita dan pengumuman yang dibuatnya. Tindakan ini tidak dapat dibatalkan.'),
        ];
    }

    protected function getSavedNotificationTitle(): ?string
    {
        return 'Data admin berhasil diperbarui';
    }

    protected function mutateFormDataBeforeSave(array $data): array
    {
        $record = $this->getRecord();

        if (
            $record->isAdmin()
            && User::query()->where('role', Role::Admin)->count() <= 1
        ) {
            $data['role'] = Role::Admin;
        }

        return $data;
    }
}
