<?php

namespace App\Enums;

enum StockMovementType: string
{
    case Sale = 'sale';
    case Return = 'return';
    case Adjustment = 'adjustment';
}
