<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StockLot extends Model
{
    protected $fillable = [
        'branch_id',
        'product_id',
        'batch_number',
        'expiry_date',
        'quantity',
    ];

    protected function casts(): array
    {
        return [
            'expiry_date' => 'date',
            'quantity' => 'decimal:3',
        ];
    }

    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class);
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}
