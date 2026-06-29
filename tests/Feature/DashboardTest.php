<?php

use App\Models\User;

test('guests are redirected to the login page when visiting settings', function () {
    $this->get(route('profile.edit'))
        ->assertRedirect(route('login'));
});

test('authenticated users can access profile settings', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->get(route('profile.edit'))
        ->assertOk();
});
