<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductFactory> */
    use HasFactory;

    protected $fillable = [
        'category_id',
        'sku',
        'barcode',
        'name',
        'description',
        'unit_price',
        'cost_price',
        'is_active',
        'track_inventory',
        'track_batches',
    ];

    protected function casts(): array
    {
        return [
            'unit_price' => 'decimal:2',
            'cost_price' => 'decimal:2',
            'is_active' => 'boolean',
            'track_inventory' => 'boolean',
            'track_batches' => 'boolean',
        ];
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function stockLevels(): HasMany
    {
        return $this->hasMany(StockLevel::class);
    }

    public function stockAtBranch(int $branchId): ?StockLevel
    {
        return $this->stockLevels()->where('branch_id', $branchId)->first();
    }

    public function saleLines(): HasMany
    {
        return $this->hasMany(SaleLine::class);
    }

    public function stockLots(): HasMany
    {
        return $this->hasMany(StockLot::class);
    }
}
