<?php

namespace Database\Seeders;

use App\Models\Branch;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        $adminRole = Role::query()->where('slug', 'admin')->first();

        if (! $adminRole) {
            return;
        }

        $branch = Branch::query()->where('code', 'MAIN')->first();

        User::query()->updateOrCreate(
            ['email' => 'admin@gmail.com'],
            [
                'name' => 'Administrator',
                'password' => Hash::make('123'),
                'status' => 'active',
                'email_verified_at' => now(),
                'department_id' => $adminRole->department_id,
                'role_id' => $adminRole->id,
                'branch_id' => $branch?->id,
            ],
        );
    }
}
