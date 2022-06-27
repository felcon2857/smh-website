<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Appointment extends Model
{
    //
    use Notifiable;
    
    protected $fillable = [
        'first_name',
        'middle_name',
        'last_name',
        'doctor_name',
        'email',
        'phone',
        'address',
        'date',
        'time',
        'message',
        'priority',
    ];
}
