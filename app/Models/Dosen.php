<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dosen extends Model
{
    protected $fillable = [
        'urut',
        'nama',
        'jabatan',
        'pendidikan',
        'keahlian',
        'gambar'
    ];
}
