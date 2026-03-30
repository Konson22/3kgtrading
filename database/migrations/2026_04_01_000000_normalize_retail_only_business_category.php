<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('businesses')) {
            DB::table('businesses')->update(['category' => 'retail']);
        }

        if (Schema::hasTable('categories') && Schema::hasColumn('categories', 'business_category')) {
            DB::table('categories')->whereNotNull('business_category')->update(['business_category' => null]);
        }
    }

    public function down(): void
    {
        //
    }
};
