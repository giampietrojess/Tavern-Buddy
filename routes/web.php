<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view ('welcome');
});

// Character JSON data view
// Route::get('/', function () {
//     $characterView = DB::table('characters')->get();
//     return $characterView;
// });
