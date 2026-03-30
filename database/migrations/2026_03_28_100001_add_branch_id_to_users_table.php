<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasTable('users') || ! Schema::hasTable('branches')) {
            return;
        }

        if ($this->usersBranchForeignKeyExists()) {
            return;
        }

        Schema::table('users', function (Blueprint $table) {
            $table->foreign('branch_id')
                ->references('id')
                ->on('branches')
                ->nullOnDelete();
        });
    }

    public function down(): void
    {
        if (! Schema::hasTable('users') || ! Schema::hasColumn('users', 'branch_id')) {
            return;
        }

        if (! $this->usersBranchForeignKeyExists()) {
            return;
        }

        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['branch_id']);
        });
    }

    private function usersBranchForeignKeyExists(): bool
    {
        foreach (Schema::getForeignKeys('users') as $foreignKey) {
            if (($foreignKey['columns'] ?? []) === ['branch_id']) {
                return true;
            }
        }

        return false;
    }
};
