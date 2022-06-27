<?php

namespace App\Http\Controllers;

use App\Reaction;
use App\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReviewAPIController extends Controller
{
    //

    //
    public function index()
    {
        return "Review API";
    }
    // add review
    public function addReview(Request $request)
    {
        validator($request->all(), [
            'name' => 'required|string|max:255',
            'review' => 'required|string|max:255',
            'consent' => 'required|string|max:255',
        ])->validate();

        $review = new Review();
        $review->name = $request->name;
        $review->review = $request->review;
        $review->consent = $request->consent;
        $review->post_date = $request->post_date;
        $review->save();
        return response()->json(['success' => true, 'message' => 'Review added successfully.']);
    }

    // Update review
    public function updateReview(Request $request)
    {
        validator($request->all(), [
            'id' => 'required|integer',
            'post_status' => 'required|max:255',
        ])->validate();

        $review = Review::find($request->id);
        $review->post_status = $request->post_status;
        $review->save();
        return response()->json(['success' => true, 'message' => 'Review updated successfully.']);
    }

    // Delete review
    public function deleteReview(Request $request)
    {
        validator($request->all(), [
            'id' => 'required|integer',
        ])->validate();
        $review = Review::find($request->id);
        $review->delete();
        return response()->json(['success' => true, 'message' => 'Review deleted successfully.']);
    }

    // Get review
    public function getReview()
    {
        $review = Review::all();
        return response()->json(['success' => true, 'data' => $review]);
    }

    // Get single review
    public function getSingleReview(Request $request)
    {
        validator($request->all(), [
            'id' => 'required|integer',
        ])->validate();
        $review = Review::find($request->id);
        return response()->json(['success' => true, 'data' => $review]);
    }

    public function getReviewByStatus(Request $request)
    {
        $status = $request->input('status');
        $review_by_status = DB::table('reviews')->where('post_status', $status)->get();
        return response()->json(['success' => true, 'data' => $review_by_status]);
    }
    // Get reviews reaction events functions
    // review reactions
    public function reviewReactions(Request $request)
    {
        validator($request->all(), [
            'review_id' => 'required',
            'reaction' => 'required|string|max:255',
            'token_sniffer' => 'required',
        ])->validate();
        $reaction = new Reaction();
        $reaction->review_id = $request->review_id;
        $reaction->reaction = $request->reaction;
        $reaction->token_sniffer = $request->token_sniffer;
        $reaction->save();
        return response()->json(['success' => true, 'message' => 'Review reaction added successfully.']);
    }
    // get review reactions
    public function getReviewReactions(Request $request)
    {
        validator($request->all(), [
            'review_id' => 'required|integer',
        ])->validate();
        $reaction = Reaction::where('review_id', $request->review_id)->get();
        return response()->json(['success' => true, 'data' => $reaction]);
    }
    // count reactions
    public function countReactions(Request $request)
    {
        $reaction = $request->input('reaction');
        $count = DB::table('reactions')->where('reaction', $reaction)->get();
        return response()->json([
            "data" => $count
        ]);
    }
    // token generator
    public function tokenGenerator()
    {
        $token = bin2hex(openssl_random_pseudo_bytes(16));
        return response()->json(['success' => true, 'data' => $token]);
    }
}
