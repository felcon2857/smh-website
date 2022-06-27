<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Review extends Model
{
    //
    use Notifiable;
    protected $fillable = [
        'name',
        'review',
        'consent',
        'post_date',
        'post_status',
    ];
}
