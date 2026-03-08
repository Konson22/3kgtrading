<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactSubmission;
use App\Models\Project;
use App\Models\Service;
use App\Models\ServiceRequest;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/Dashboard', [
            'stats' => [
                'services' => Service::count(),
                'projects' => Project::count(),
                'contact_submissions' => ContactSubmission::count(),
                'service_requests' => ServiceRequest::count(),
            ],
        ]);
    }
}
