<?php

namespace App\Support;

class PortalModuleTitles
{
    /** @var array<string, string> */
    private const TITLES = [
        'dashboard' => 'Dashboard',
        'pos' => 'Point of sale',
        'inventory' => 'Inventory',
        'customers' => 'Customers',
        'suppliers' => 'Suppliers',
        'quotations' => 'Quotations',
        'invoices' => 'Invoices',
        'payments' => 'Payments',
        'receipts' => 'Receipts',
        'reports' => 'Reports',
        'branches' => 'Branches',
        'users' => 'Users & roles',
        'settings' => 'Settings',
    ];

    public static function forModule(string $module): string
    {
        return self::TITLES[$module] ?? ucfirst(str_replace('-', ' ', $module));
    }
}
