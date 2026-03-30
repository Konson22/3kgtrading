<?php

namespace App\Enums;

/** Retail / general store POS — single supported business type. */
enum BusinessCategory: string
{
    case Retail = 'retail';

    public function label(): string
    {
        return 'Retail';
    }

    /**
     * @return list<array{value: string, label: string}>
     */
    public static function options(): array
    {
        return [['value' => self::Retail->value, 'label' => self::Retail->label()]];
    }
}
