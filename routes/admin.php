<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\MessageController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\ServiceRequestController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');

Route::resource('services', ServiceController::class)->names('admin.services')->except(['show']);
Route::resource('projects', ProjectController::class)->names('admin.projects')->except(['show']);

Route::get('messages', [MessageController::class, 'index'])->name('admin.messages.index');
Route::get('service-requests', [ServiceRequestController::class, 'index'])->name('admin.service-requests.index');

Route::resource('users', UserController::class)->names('admin.users')->except(['show']);

Route::get('settings', [SettingsController::class, 'edit'])->name('admin.settings.edit');
Route::put('settings', [SettingsController::class, 'update'])->name('admin.settings.update');
