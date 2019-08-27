<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

class TaskController extends Controller
{
    public function index($project_id){
        $tasks = Task::where('project_id', '=',$project_id)->get();

        return response()->json($tasks, 200);
    }
}
