<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SettingsController extends Controller
{
    public function edit(): Response
    {
        return Inertia::render('admin/settings/Index', [
            'settings' => [
                'site_name' => config('app.name'),
            ],
        ]);
    }

    public function update(Request $request): RedirectResponse
    {
        // Placeholder for future site settings (e.g. stored in DB or config)
        return redirect()->route('admin.settings.edit')
            ->with('success', 'Settings updated.');
    }
}
