<?php

namespace App\Http\Responses;

use App\Models\Business;
use Illuminate\Http\JsonResponse;
use Laravel\Fortify\Contracts\TwoFactorLoginResponse as TwoFactorLoginResponseContract;
use Laravel\Fortify\Fortify;

class TwoFactorLoginResponse implements TwoFactorLoginResponseContract
{
    public function toResponse($request)
    {
        if ($request->wantsJson()) {
            return new JsonResponse('', 204);
        }

        if (! Business::query()->exists()) {
            return redirect()->route('onboarding.business');
        }

        return redirect()->intended(Fortify::redirects('login'));
    }
}
