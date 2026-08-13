<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class AnnouncementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): JsonResponse
    {
        $query = Announcement::query()->orderBy('created_at', 'desc');
        
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
            $announcements = $query->limit($request->limit)->get();
        } else {
            $announcements = $query->get();
        }
        
        // Format the response
        $formattedAnnouncements = $announcements->map(function($item) {
            return [
                'id' => $item->id,
                'title' => $item->title,
                'slug' => $item->slug,
                'content' => $item->content,
                'excerpt' => $this->getExcerpt($item->content),
                'file' => $item->file ? asset('storage/' . $item->file) : null,
                'date' => $item->created_at_formatted,
                'author' => $item->user->name ?? 'Admin',
                'created_at' => $item->created_at->toISOString(),
            ];
        });
        
        return response()->json([
            'success' => true,
            'data' => $formattedAnnouncements
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($slug): JsonResponse
    {
        $announcement = Announcement::where('slug', $slug)->firstOrFail();
        
        $formattedAnnouncement = [
            'id' => $announcement->id,
            'title' => $announcement->title,
            'slug' => $announcement->slug,
            'content' => $announcement->content,
            'file' => $announcement->file ? asset('storage/' . $announcement->file) : null,
            'date' => $announcement->created_at_formatted,
            'author' => $announcement->user->name ?? 'Admin',
            'created_at' => $announcement->created_at->toISOString(),
        ];
        
        return response()->json([
            'success' => true,
            'data' => $formattedAnnouncement
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

