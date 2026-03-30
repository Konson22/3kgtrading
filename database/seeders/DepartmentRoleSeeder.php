<?php

namespace Database\Seeders;

use App\Models\Department;
use App\Models\Role;
use Illuminate\Database\Seeder;

class DepartmentRoleSeeder extends Seeder
{
    public function run(): void
    {
        $administration = Department::query()->firstOrCreate(
            ['code' => 'ADMIN'],
            [
                'name' => 'Administration',
                'is_active' => true,
            ],
        );

        Role::query()->firstOrCreate(
            [
                'department_id' => $administration->id,
                'slug' => 'admin',
            ],
            [
                'name' => 'Administrator',
                'description' => 'Full system access',
            ],
        );

        Role::query()->firstOrCreate(
            [
                'department_id' => $administration->id,
                'slug' => 'staff',
            ],
            [
                'name' => 'Staff',
                'description' => 'Standard operational access',
            ],
        );

        Role::query()->firstOrCreate(
            [
                'department_id' => $administration->id,
                'slug' => 'manager',
            ],
            [
                'name' => 'Manager',
                'description' => 'Branch and sales management',
            ],
        );

        Role::query()->firstOrCreate(
            [
                'department_id' => $administration->id,
                'slug' => 'cashier',
            ],
            [
                'name' => 'Cashier',
                'description' => 'POS and daily transactions',
            ],
        );
    }
}
