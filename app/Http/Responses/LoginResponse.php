<?php

namespace App\Http\Responses;

use App\Models\Business;
use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;
use Laravel\Fortify\Fortify;

class LoginResponse implements LoginResponseContract
{
    public function toResponse($request)
    {
        if ($request->wantsJson()) {
            return response()->json(['two_factor' => false]);
        }

        if (! Business::query()->exists()) {
            return redirect()->route('onboarding.business');
        }

        return redirect()->intended(Fortify::redirects('login'));
    }
}
