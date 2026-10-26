<?php

namespace App\Policies;

use App\Enums\Role;
use App\Models\User;

class UserPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->isAdmin();
    }

    public function view(User $user, User $model): bool
    {
        return $user->isAdmin();
    }

    public function create(User $user): bool
    {
        return $user->isAdmin();
    }

    public function update(User $user, User $model): bool
    {
        return $user->isAdmin();
    }

    public function delete(User $user, User $model): bool
    {
        if (! $user->isAdmin()) {
            return false;
        }

        if ($user->is($model)) {
            return false;
        }

        if ($model->isAdmin() && User::query()->where('role', Role::Admin)->count() <= 1) {
            return false;
        }

        return true;
    }

    public function deleteAny(User $user): bool
    {
        return $user->isAdmin();
    }
}
