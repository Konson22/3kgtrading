<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Http;

class FacebookNewsController extends Controller
{
    /**
     * Fetch recent posts from SSUWC Facebook page (https://www.facebook.com/SSUWCHQ/).
     * Requires FACEBOOK_APP_ID and FACEBOOK_APP_SECRET in .env for Graph API access.
     */
    public function __invoke(): JsonResponse
    {
        $appId = config('services.facebook.client_id');
        $appSecret = config('services.facebook.client_secret');

        if (! $appId || ! $appSecret) {
            return response()->json(['posts' => [], 'message' => 'Facebook credentials not configured']);
        }

        $accessToken = "{$appId}|{$appSecret}";
        $url = 'https://graph.facebook.com/v18.0/SSUWCHQ/posts';
        $params = [
            'fields' => 'id,message,created_time,full_picture,permalink_url',
            'limit' => 15,
            'access_token' => $accessToken,
        ];

        try {
            $response = Http::timeout(10)->get($url, $params);

            if (! $response->successful()) {
                return response()->json([
                    'posts' => [],
                    'error' => 'Unable to fetch posts',
                    'debug' => $response->json(),
                ], 200);
            }

            $data = $response->json();
            $posts = $data['data'] ?? [];

            $normalized = array_map(function ($post) {
                return [
                    'id' => $post['id'] ?? null,
                    'message' => $post['message'] ?? '',
                    'created_time' => $post['created_time'] ?? null,
                    'full_picture' => $post['full_picture'] ?? null,
                    'permalink_url' => $post['permalink_url'] ?? null,
                ];
            }, $posts);

            return response()->json(['posts' => $normalized]);
        } catch (\Throwable $e) {
            return response()->json([
                'posts' => [],
                'error' => 'Request failed',
            ], 200);
        }
    }
}
