<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactSubmission;
use App\Models\ServiceRequest;
use Inertia\Inertia;
use Inertia\Response;

class MessageController extends Controller
{
    public function index(): Response
    {
        $contactSubmissions = ContactSubmission::orderBy('created_at', 'desc')->get();
        $serviceRequests = ServiceRequest::orderBy('created_at', 'desc')->get();

        return Inertia::render('admin/messages/Index', [
            'contactSubmissions' => $contactSubmissions,
            'serviceRequests' => $serviceRequests,
        ]);
    }
}
