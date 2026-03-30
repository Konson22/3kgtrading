<?php

namespace Database\Seeders;

use App\Models\Branch;
use App\Models\Business;
use Illuminate\Database\Seeder;

class BranchSeeder extends Seeder
{
    public function run(): void
    {
        $business = Business::query()->first()
            ?? Business::query()->create([
                'name' => 'My business',
                'category' => 'retail',
                'slogan' => null,
            ]);

        Branch::query()->firstOrCreate(
            ['code' => 'MAIN'],
            [
                'business_id' => $business->id,
                'name' => 'Main store',
                'is_active' => true,
            ],
        );
    }
}
