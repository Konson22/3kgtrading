<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'name',
        'client',
        'start_date',
        'end_date',
        'value',
        'description',
    ];
}
