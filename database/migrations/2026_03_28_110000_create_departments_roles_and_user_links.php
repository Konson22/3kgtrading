<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Departments own roles; users optionally belong to a department and a role within it.
     */
    public function up(): void
    {
        Schema::create('departments', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('code', 32)->unique();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('department_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('slug', 64);
            $table->text('description')->nullable();
            $table->timestamps();

            $table->unique(['department_id', 'slug']);
        });

        Schema::table('users', function (Blueprint $table) {
            $table->foreignId('department_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('role_id')->nullable()->constrained()->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropConstrainedForeignId('role_id');
            $table->dropConstrainedForeignId('department_id');
        });

        Schema::dropIfExists('roles');
        Schema::dropIfExists('departments');
    }
};
