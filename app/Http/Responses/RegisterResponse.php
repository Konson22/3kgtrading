<?php

namespace App\Http\Responses;

use App\Models\Business;
use Illuminate\Http\JsonResponse;
use Laravel\Fortify\Contracts\RegisterResponse as RegisterResponseContract;
use Laravel\Fortify\Fortify;

class RegisterResponse implements RegisterResponseContract
{
    public function toResponse($request)
    {
        if ($request->wantsJson()) {
            return new JsonResponse('', 201);
        }

        $user = $request->user();

        if ($user && ! $user->hasVerifiedEmail()) {
            return redirect()->intended(Fortify::redirects('register'));
        }

        if (! Business::query()->exists()) {
            return redirect()->route('onboarding.business');
        }

        return redirect()->intended(Fortify::redirects('register'));
    }
}
