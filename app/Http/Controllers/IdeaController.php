<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Idea;

class IdeaController extends Controller
{
    public function index(){
        $ideas = Idea::all();

        return response()->json($ideas,200);
    }
}
