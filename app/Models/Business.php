<?php

namespace App\Models;

use App\Enums\BusinessCategory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Business extends Model
{
    protected $fillable = [
        'name',
        'category',
        'slogan',
    ];

    protected function casts(): array
    {
        return [
            'category' => BusinessCategory::class,
        ];
    }

    public function branches(): HasMany
    {
        return $this->hasMany(Branch::class);
    }

    public function categories(): HasMany
    {
        return $this->hasMany(Category::class);
    }

    public function customers(): HasMany
    {
        return $this->hasMany(Customer::class);
    }

    public function suppliers(): HasMany
    {
        return $this->hasMany(Supplier::class);
    }

    public function documentSequences(): HasMany
    {
        return $this->hasMany(DocumentSequence::class);
    }
}
