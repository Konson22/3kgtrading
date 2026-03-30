<?php

use App\Models\User;
use Database\Seeders\DepartmentRoleSeeder;

test('guests are redirected to the login page', function () {
    $response = $this->get(route('dashboard'));
    $response->assertRedirect(route('login'));
});

test('authenticated staff user is redirected to branch dashboard', function () {
    $branch = createBusinessWithBranch();
    $this->seed(DepartmentRoleSeeder::class);
    $user = User::factory()->create(['branch_id' => $branch->id]);
    $this->actingAs($user)
        ->get(route('dashboard'))
        ->assertRedirect(route('branch.portal', ['module' => 'dashboard'], absolute: false));

    $this->actingAs($user)
        ->get(route('branch.portal', ['module' => 'dashboard']))
        ->assertOk();
});

test('authenticated admin user is redirected to admin dashboard', function () {
    $branch = createBusinessWithBranch();
    $this->seed(DepartmentRoleSeeder::class);
    $user = User::factory()->admin()->create(['branch_id' => $branch->id]);
    $this->actingAs($user)
        ->get(route('dashboard'))
        ->assertRedirect(route('admin.portal', ['module' => 'dashboard'], absolute: false));

    $this->actingAs($user)
        ->get(route('admin.portal', ['module' => 'dashboard']))
        ->assertOk();
});
