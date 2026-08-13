<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Carbon\Carbon;

class Announcement extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'content',
        'file',
        'user_id',
    ];

    public function getCreatedAtFormattedAttribute()
    {
        return Carbon::parse($this->created_at)->translatedFormat('d F Y');
    }

    public function getUpdatedAtFormattedAttribute()
    {
        return Carbon::parse($this->updated_at)->translatedFormat('d F Y');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
