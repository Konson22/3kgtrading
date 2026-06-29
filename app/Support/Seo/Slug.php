<?php

namespace App\Support\Seo;

class Slug
{
    public static function from(string $value): string
    {
        $slug = mb_strtolower($value);
        $slug = preg_replace('/[^\p{L}\p{N}\s-]/u', '', $slug) ?? $slug;
        $slug = preg_replace('/[\s-]+/', '-', trim($slug)) ?? $slug;

        return $slug;
    }
}
