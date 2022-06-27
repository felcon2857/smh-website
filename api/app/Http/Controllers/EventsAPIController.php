<?php

namespace App\Http\Controllers;

use App\Event;
use Illuminate\Http\Request;

class EventsAPIController extends Controller
{
    //
    public function index()
    {
        return "Event API";
    }
    // add events
    public function addEvents(Request $request)
    {
        validator($request->all(), [
            'title' => 'required',
            'content' => 'required',
            'publish_date' => 'required|date',
        ])->validate();

        $events = new Event();
        $events->title = $request->title;
        $events->author = $request->author;
        $events->content = $request->content;
        $events->publish_date = $request->publish_date;
        $events->save();
        return response()->json(['success' => true, 'message' => 'Event added successfully']);
    }
    // update events
    public function updateEvents(Request $request)
    {
        validator($request->all(), [
            'id' => 'required',
            'title' => 'required',
            'content' => 'required',
            'publish_status' => 'required',
        ])->validate();

        $events = Event::find($request->id);
        $events->title = $request->title;
        $events->author = $request->author;
        $events->content = $request->content;
        $events->publish_status = $request->publish_status;
        $events->save();
        return response()->json(['success' => true, 'message' => 'Event updated successfully']);
    }
    // delete events
    public function deleteEvents(Request $request)
    {
        validator($request->all(), [
            'id' => 'required',
        ])->validate();

        $events = Event::find($request->id);
        $events->delete();
        return response()->json(['success' => true, 'message' => 'Event deleted successfully']);
    }
    // get single events
    public function getSingleEvents(Request $request)
    {
        validator($request->all(), [
            'id' => 'required',
        ])->validate();

        $events = Event::find($request->id);
        return response()->json(['success' => true, 'data' => $events]);
    }
    // get all events
    public function getAllEvents()
    {
        $events = Event::all()->orderBy('created_at', 'desc');
        return response()->json(['success' => true, 'data' => $events]);
    }
    // get all published events
    public function getAllPublishedEvents()
    {
        $events = Event::where('publish_status', 'published')->orderBy('created_at', 'desc')->get();
        return response()->json(['success' => true, 'data' => $events]);
    }
}
