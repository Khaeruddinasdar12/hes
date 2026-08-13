<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Dosen;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class DosenController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        // Order by urut as numeric (not string) to ensure correct ordering
        $query = Dosen::query()->orderByRaw('CAST(urut AS UNSIGNED) ASC');

        // Pencarian (opsional)
        if ($request->filled('search')) {
            $searchTerm = $request->search;
            $query->where(function ($q) use ($searchTerm) {
                $q->where('nama', 'like', "%{$searchTerm}%")
                    ->orWhere('jabatan', 'like', "%{$searchTerm}%")
                    ->orWhere('pendidikan', 'like', "%{$searchTerm}%")
                    ->orWhere('keahlian', 'like', "%{$searchTerm}%");
            });
        }

        // Validasi pagination
        $perPage = (is_numeric($request->limit) && $request->limit > 0) ? (int) $request->limit : 12;
        $page = (is_numeric($request->page) && $request->page > 0) ? (int) $request->page : 1;

        // Ambil data dosen dengan pagination
        $dosens = $query->paginate($perPage, ['*'], 'page', $page);

        // Transform data agar tetap kompatibel dengan pagination
        $dosens->getCollection()->transform(function ($item) {
            return [
                'id' => $item->id,
                'urut' => $item->urut,
                'nama' => $item->nama,
                'jabatan' => $item->jabatan,
                'pendidikan' => $item->pendidikan,
                'keahlian' => $item->keahlian,
                'gambar' => $item->gambar ? asset('storage/' . $item->gambar) : null,
                'created_at' => $item->created_at?->toISOString(),
            ];
        });

        // Response JSON
        return response()->json([
            'success' => true,
            'data' => $dosens->items(),
            'pagination' => [
                'current_page' => $dosens->currentPage(),
                'last_page' => $dosens->lastPage(),
                'per_page' => $dosens->perPage(),
                'total' => $dosens->total(),
                'from' => $dosens->firstItem(),
                'to' => $dosens->lastItem(),
                'has_more_pages' => $dosens->hasMorePages(),
            ],
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id): JsonResponse
    {
        $dosen = Dosen::findOrFail($id);

        $formattedDosen = [
            'id' => $dosen->id,
            'urut' => $dosen->urut,
            'nama' => $dosen->nama,
            'jabatan' => $dosen->jabatan,
            'pendidikan' => $dosen->pendidikan,
            'keahlian' => $dosen->keahlian,
            'gambar' => $dosen->gambar ? asset('storage/' . $dosen->gambar) : null,
            'created_at' => $dosen->created_at?->toISOString(),
        ];

        return response()->json([
            'success' => true,
            'data' => $formattedDosen,
        ]);
    }
}

