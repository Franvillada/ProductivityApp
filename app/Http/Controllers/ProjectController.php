<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Project;

class ProjectController extends Controller
{
    public function indexActive(){
        $projects = Project::where('standby', '=' ,0)
        ->where('is_completed', '=' ,0)
        ->get();

        return response()->json($projects,200);
    }

    public function indexStandBy(){
        $projects = Project::where('standby', '=' ,1)
        ->where('is_completed', '=' ,0)
        ->get();

        return response()->json($projects,200);
    }

    public function indexFinished(){
        $projects = Project::where('is_completed','=',1)->get();

        return response()->json($projects,200);
    }
}
