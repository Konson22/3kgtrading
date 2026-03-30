<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DocumentSequence extends Model
{
    protected $fillable = [
        'business_id',
        'doc_type',
        'prefix',
        'next_number',
    ];

    public function business(): BelongsTo
    {
        return $this->belongsTo(Business::class);
    }
}
