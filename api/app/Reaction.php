<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Reaction extends Model
{
    //
    use Notifiable;
    protected $fillable = [
        'review_id',
        'reaction',
        'token_sniffer',
    ];
}
