<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\JsonResponse;

class TestimonialController extends Controller
{
    public function index(): JsonResponse
    {
        $testimonials = Testimonial::query()
            ->where('is_active', true)
            ->orderBy('urut')
            ->get()
            ->map(function (Testimonial $item) {
                return [
                    'id' => $item->id,
                    'urut' => $item->urut,
                    'nama' => $item->nama,
                    'posisi' => $item->posisi,
                    'isi' => $item->isi,
                    'gambar' => $item->gambar ? asset('storage/'.$item->gambar) : null,
                ];
            });

        return response()->json([
            'success' => true,
            'data' => $testimonials,
        ]);
    }
}
