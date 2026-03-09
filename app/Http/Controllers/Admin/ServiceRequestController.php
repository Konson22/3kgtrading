<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ServiceRequest;
use Inertia\Inertia;
use Inertia\Response;

class ServiceRequestController extends Controller
{
    public function index(): Response
    {
        $serviceRequests = ServiceRequest::orderByDesc('created_at')->get();

        return Inertia::render('admin/service-requests/Index', [
            'serviceRequests' => $serviceRequests,
        ]);
    }
}

