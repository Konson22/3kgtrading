<?php

namespace App\Http\Controllers;

use App\Models\ServiceRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactRequestController extends Controller
{
    public function __invoke(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['required', 'string', 'max:50'],
            'company' => ['nullable', 'string', 'max:255'],
            'service' => ['required', 'string', 'max:255'],
            'message' => ['nullable', 'string'],
            'source' => ['nullable', 'string', 'max:50'],
        ]);

        // Save to database
        ServiceRequest::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'],
            'company' => $validated['company'] ?? null,
            'service' => $validated['service'],
            'message' => $validated['message'] ?? null,
        ]);

        // Send notification email to admin
        $adminEmail = 'info@3kgtrading.com';

        Mail::html($this->buildHtmlBody($validated), function ($mail) use ($adminEmail, $validated) {
            $mail->to($adminEmail)
                ->subject('New service request from '.$validated['name']);
        });

        // Send confirmation email to user
        Mail::html($this->buildUserConfirmationBody($validated), function ($mail) use ($validated) {
            $mail->to($validated['email'])
                ->subject('We have received your service request');
        });

        return response()->json(['success' => true]);
    }

    protected function buildHtmlBody(array $data): string
    {
        $safe = static fn (?string $value): string => htmlspecialchars((string) ($value ?? ''), ENT_QUOTES, 'UTF-8');

        $html = '<div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif; color:#111827; line-height:1.5;">';
        $html .= '<h2 style="font-size:20px; margin:0 0 12px; color:#111827;">New service request</h2>';
        $html .= '<p style="margin:0 0 16px; color:#4b5563;">You have received a new service request from the website.</p>';

        $html .= '<table cellspacing="0" cellpadding="6" style="border-collapse:collapse; width:100%; max-width:600px; margin:0 0 20px; font-size:14px;">';
        $html .= '<tbody>';
        $html .= '<tr>'
            .'<th align="left" style="padding:6px 8px; background:#f3f4f6; border-bottom:1px solid #e5e7eb; width:140px;">Name</th>'
            .'<td style="padding:6px 8px; border-bottom:1px solid #e5e7eb;">'.$safe($data['name'] ?? '').'</td>'
            .'</tr>';
        $html .= '<tr>'
            .'<th align="left" style="padding:6px 8px; background:#f9fafb; border-bottom:1px solid #e5e7eb;">Email</th>'
            .'<td style="padding:6px 8px; border-bottom:1px solid #e5e7eb;">'.$safe($data['email'] ?? '').'</td>'
            .'</tr>';
        $html .= '<tr>'
            .'<th align="left" style="padding:6px 8px; background:#f3f4f6; border-bottom:1px solid #e5e7eb;">Phone</th>'
            .'<td style="padding:6px 8px; border-bottom:1px solid #e5e7eb;">'.$safe($data['phone'] ?? '').'</td>'
            .'</tr>';
        $html .= '<tr>'
            .'<th align="left" style="padding:6px 8px; background:#f9fafb; border-bottom:1px solid #e5e7eb;">Company</th>'
            .'<td style="padding:6px 8px; border-bottom:1px solid #e5e7eb;">'.$safe($data['company'] ?: '-').'</td>'
            .'</tr>';
        $html .= '<tr>'
            .'<th align="left" style="padding:6px 8px; background:#f3f4f6; border-bottom:1px solid #e5e7eb;">Service</th>'
            .'<td style="padding:6px 8px; border-bottom:1px solid #e5e7eb;">'.$safe($data['service'] ?? '').'</td>'
            .'</tr>';
        $html .= '<tr>'
            .'<th align="left" style="padding:6px 8px; background:#f9fafb; border-bottom:1px solid #e5e7eb;">Source</th>'
            .'<td style="padding:6px 8px; border-bottom:1px solid #e5e7eb;">'.$safe($data['source'] ?? 'contact-section').'</td>'
            .'</tr>';
        $html .= '</tbody>';
        $html .= '</table>';

        $message = trim($data['message'] ?? '') !== '' ? $data['message'] : '-';
        $html .= '<p style="margin:0 0 6px; font-weight:600; color:#111827;">Message</p>';
        $html .= '<p style="margin:0; padding:8px 10px; background:#f9fafb; border-radius:4px; border:1px solid #e5e7eb; white-space:pre-wrap;">'
            .nl2br($safe($message))
            .'</p>';

        $html .= '</div>';

        return $html;
    }

    protected function buildUserConfirmationBody(array $data): string
    {
        $safe = static fn (?string $value): string => htmlspecialchars((string) ($value ?? ''), ENT_QUOTES, 'UTF-8');

        $html = '<div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif; color:#111827; line-height:1.5;">';
        $html .= '<h2 style="font-size:20px; margin:0 0 12px; color:#111827;">Thank you for your request</h2>';
        $html .= '<p style="margin:0 0 16px; color:#4b5563;">Dear '.$safe($data['name'] ?? '').',</p>';
        $html .= '<p style="margin:0 0 12px; color:#4b5563;">We have received your service request and our team will review it and get back to you as soon as possible.</p>';

        $html .= '<p style="margin:0 0 8px; font-weight:600; color:#111827;">Summary of your request</p>';
        $html .= '<ul style="margin:0 0 16px 18px; padding:0; color:#4b5563; font-size:14px;">';
        $html .= '<li><strong>Service:</strong> '.$safe($data['service'] ?? '').'</li>';
        $html .= '<li><strong>Phone:</strong> '.$safe($data['phone'] ?? '').'</li>';
        $html .= '<li><strong>Company:</strong> '.$safe($data['company'] ?? '-').'</li>';
        $html .= '</ul>';

        $html .= '<p style="margin:0 0 4px; color:#4b5563;">If you did not submit this request, please ignore this email.</p>';
        $html .= '<p style="margin:12px 0 0; color:#4b5563;">Best regards,<br />3K General Trading Ltd</p>';
        $html .= '</div>';

        return $html;
    }
}

