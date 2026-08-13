<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): JsonResponse
    {
        $query = News::query()->orderBy('created_at', 'desc');
        
        // Apply search filter if provided
        if ($request->has('search') && $request->search) {
            $searchTerm = $request->search;
            $query->where(function($q) use ($searchTerm) {
                $q->where('title', 'like', "%{$searchTerm}%")
                  ->orWhere('content', 'like', "%{$searchTerm}%");
            });
        }
        
        // Apply limit if provided (for homepage)
        if ($request->has('limit')) {
            $news = $query->limit($request->limit)->get();
        } else {
            $news = $query->get();
        }
        
        // Format the response
        $formattedNews = $news->map(function($item) {
            return [
                'id' => $item->id,
                'title' => $item->title,
                'slug' => $item->slug,
                'excerpt' => $this->getExcerpt($item->content),
                'content' => $item->content,
                'image' => $item->image ? asset('storage/' . $item->image) : null,
                'date' => $item->created_at_formatted,
                'author' => $item->user->name ?? 'Admin',
                'created_at' => $item->created_at->toISOString(),
            ];
        });
        
        return response()->json([
            'success' => true,
            'data' => $formattedNews
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($slug): JsonResponse
    {
        $news = News::where('slug', $slug)->firstOrFail();
        
        $formattedNews = [
            'id' => $news->id,
            'title' => $news->title,
            'slug' => $news->slug,
            'content' => $news->content,
            'image' => $news->image ? asset('storage/' . $news->image) : null,
            'date' => $news->created_at_formatted,
            'author' => $news->user->name ?? 'Admin',
            'created_at' => $news->created_at->toISOString(),
        ];
        
        return response()->json([
            'success' => true,
            'data' => $formattedNews
        ]);
    }
    
    /**
     * Get excerpt from content
     */
    private function getExcerpt($content, $length = 150)
    {
        $text = strip_tags($content);
        if (strlen($text) <= $length) {
            return $text;
        }
        return substr($text, 0, $length) . '...';
    }
}

