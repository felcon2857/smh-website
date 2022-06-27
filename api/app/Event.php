<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Event extends Model
{
    //
    use Notifiable;
    protected $fillable = [
        'title',
        'author',
        'content',
        'publish_date',
        'publish_status',
    ];
}
