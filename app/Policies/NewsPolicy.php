<?php

namespace App\Policies;

use App\Models\News;
use App\Models\User;

class NewsPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->isAdmin() || $user->isHmps();
    }

    public function view(User $user, News $news): bool
    {
        return $user->isAdmin() || $this->owns($user, $news);
    }

    public function create(User $user): bool
    {
        return $user->isAdmin() || $user->isHmps();
    }

    public function update(User $user, News $news): bool
    {
        return $user->isAdmin() || $this->owns($user, $news);
    }

    public function delete(User $user, News $news): bool
    {
        return $user->isAdmin() || $this->owns($user, $news);
    }

    public function deleteAny(User $user): bool
    {
        return $user->isAdmin() || $user->isHmps();
    }

    private function owns(User $user, News $news): bool
    {
        return (int) $news->user_id === (int) $user->id;
    }
}
