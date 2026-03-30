<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('businesses', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('category', 32)->default('retail');
            $table->string('slogan')->nullable();
            $table->timestamps();
        });

        Schema::table('branches', function (Blueprint $table) {
            $table->foreignId('business_id')->nullable()->after('id')->constrained()->cascadeOnDelete();
        });

        if (Schema::hasTable('branches') && DB::table('branches')->exists()) {
            $now = now();
            $businessId = DB::table('businesses')->insertGetId([
                'name' => 'My business',
                'category' => 'retail',
                'slogan' => null,
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            DB::table('branches')->update(['business_id' => $businessId]);
        }
    }

    public function down(): void
    {
        Schema::table('branches', function (Blueprint $table) {
            $table->dropConstrainedForeignId('business_id');
        });

        Schema::dropIfExists('businesses');
    }
};
