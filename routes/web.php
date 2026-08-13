<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\NewsController;
use App\Http\Controllers\Api\AnnouncementController;
use App\Http\Controllers\Api\DosenController;

// API Routes
Route::prefix('api')->group(function () {
    Route::get('/news', [NewsController::class, 'index']);
    Route::get('/news/{slug}', [NewsController::class, 'show']);
    Route::get('/announcements', [AnnouncementController::class, 'index']);
    Route::get('/announcements/{slug}', [AnnouncementController::class, 'show']);
    Route::get('/dosens', [DosenController::class, 'index']);
    Route::get('/dosens/{id}', [DosenController::class, 'show']);
});

// SPA Route - semua route akan diarahkan ke app.blade.php
Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');