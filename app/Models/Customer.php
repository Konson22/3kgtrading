<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Customer extends Model
{
    protected $fillable = [
        'business_id',
        'name',
        'email',
        'phone',
        'address',
        'balance_due',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'balance_due' => 'decimal:2',
            'is_active' => 'boolean',
        ];
    }

    public function business(): BelongsTo
    {
        return $this->belongsTo(Business::class);
    }
}
