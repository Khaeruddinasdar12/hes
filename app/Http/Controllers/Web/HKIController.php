<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HKIController extends Controller
{
    public function index()
    {
        return view('layouts.app');
    }
    
    public function about()
    {
        return view('layouts.app');
    }
    
    public function lecturers()
    {
        return view('layouts.app');
    }
    
    public function gallery()
    {
        return view('layouts.app');
    }
    
    public function news()
    {
        return view('layouts.app');
    }
    
    public function contact()
    {
        return view('layouts.app');
    }
    
    public function newsDetail($id)
    {
        return view('layouts.app');
    }
}