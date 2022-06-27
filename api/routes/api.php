<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::get('/', function () {
    return response()->json([
        "API" => "stam_api",
        "Version" => 1.0,
        "Author" => "",
    ]);
});
// route api for events
Route::get('/events', "EventsAPIController@index");
Route::post('/events/get', "EventsAPIController@getAllEvents");
Route::post('/events/published', "EventsAPIController@getAllPublishedEvents");
Route::post('/events/add', "EventsAPIController@addEvents");
Route::post('/events/edit', "EventsAPIController@getSingleEvents");
Route::post('/events/update', "EventsAPIController@updateEvents");
Route::post('/events/delete', "EventsAPIController@deleteEvents");

// route api for reviews
Route::get('/reviews', "ReviewAPIController@index");
Route::post('/reviews/get', "ReviewAPIController@getReview");
Route::post('/reviews/status', "ReviewAPIController@getReviewByStatus");
Route::post('/reviews/add', "ReviewAPIController@addReview");
Route::post('/reviews/edit', "ReviewAPIController@getSingleReview");
Route::post('/reviews/update', "ReviewAPIController@updateReview");
Route::post('/reviews/delete', "ReviewAPIController@deleteReview");

// route api for review reactions
Route::post('/reviews/reactions', "ReviewAPIController@reviewReactions");
Route::post('/reviews/reactions/get', "ReviewAPIController@getReviewReactions");
Route::post('/reviews/reactions/count', "ReviewAPIController@countReactions");

// route api for appointments
Route::get('/appointments', "AppointmentAPIController@index");
Route::post('/appointments/get', "AppointmentAPIController@getAllAppointments");
Route::post('/appointments/add', "AppointmentAPIController@addAppointments");
Route::post('/appointments/edit', "AppointmentAPIController@getSingleAppointments");
Route::post('/appointments/update', "AppointmentAPIController@updateAppointments");
Route::post('/appointments/delete', "AppointmentAPIController@deleteAppointments");

// token generator
Route::post('/token/generate', "ReviewAPIController@tokenGenerator");
