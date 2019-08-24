<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/activeprojects','ProjectController@indexActive');
Route::get('/standbyprojects','ProjectController@indexStandBy');
Route::get('/finishedprojects','ProjectController@indexFinished');
Route::get('/ideas','IdeaController@index');