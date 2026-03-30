/**
 * Content aligned with POS & Inventory Management System module documentation.
 */
export const MODULES = {
    pos: {
        title: 'Point of Sale (POS)',
        shortTitle: 'POS',
        description:
            'Handles real-time sales transactions optimized for speed and offline use.',
        keyFeatures: [
            'Product search (name, SKU, barcode)',
            'Add items to cart',
            'Discounts and tax calculation',
            'Multiple payment methods',
            'Receipt generation',
            'Returns and refunds',
        ],
        outputs: ['Sales receipts', 'Daily sales records'],
        optional: false,
        icon: 'scan',
    },
    inventory: {
        title: 'Inventory Management',
        shortTitle: 'Inventory',
        description: 'Manages stock and inventory tracking.',
        keyFeatures: [
            'Product management',
            'Stock tracking',
            'Stock adjustments',
            'Low stock alerts',
            'Stock transfers',
        ],
        outputs: ['Stock reports', 'Inventory logs'],
        optional: false,
        icon: 'warehouse',
    },
    pharmacy: {
        title: 'Batch & expiry (optional)',
        shortTitle: 'Batches',
        description: 'Lot numbers and expiry for dated retail inventory when enabled.',
        keyFeatures: [
            'Batch tracking',
            'Expiry monitoring',
            'FEFO-friendly adjustments',
        ],
        outputs: ['Expiry reports', 'Batch logs'],
        optional: true,
        icon: 'pill',
    },
    documents: {
        title: 'Sales & Document Management',
        shortTitle: 'Documents',
        description:
            'Quotations, invoices, payments, receipts, and delivery documentation.',
        sections: [
            {
                name: 'Quotation management',
                items: [
                    'Create quotations',
                    'Set validity',
                    'Convert to invoice',
                ],
            },
            {
                name: 'Invoice management',
                items: [
                    'Generate invoices',
                    'Track payments',
                    'Attach customer details',
                ],
            },
            {
                name: 'Payment & receipt management',
                items: [
                    'Record payments',
                    'Support partial payments',
                    'Generate receipts',
                ],
            },
            {
                name: 'Delivery note management',
                items: [
                    'Create delivery notes',
                    'Track delivery status',
                    'Capture receiver details',
                ],
            },
        ],
        keyFeatures: [],
        outputs: [],
        optional: false,
        icon: 'file',
    },
    purchasing: {
        title: 'Purchase & Supplier Management',
        shortTitle: 'Purchasing',
        description: 'Handles suppliers and procurement.',
        keyFeatures: [
            'Supplier management',
            'Purchase orders',
            'Goods receiving',
            'Supplier balances',
        ],
        outputs: [],
        optional: false,
        icon: 'truck',
    },
    reports: {
        title: 'Reporting & Analytics',
        shortTitle: 'Reports',
        description: 'Business intelligence across sales, stock, and finance.',
        keyFeatures: [
            'Sales reports',
            'Inventory reports',
            'Profit and loss',
            'Expense tracking',
        ],
        outputs: [],
        optional: false,
        icon: 'chart',
    },
    users: {
        title: 'User & Role Management',
        shortTitle: 'Users',
        description: 'Accounts, access control, and accountability.',
        keyFeatures: [
            'User accounts',
            'Role assignment',
            'Permission control',
            'Audit logs',
        ],
        outputs: [],
        optional: false,
        icon: 'users',
    },
    branches: {
        title: 'Multi-Branch Management',
        shortTitle: 'Branches',
        description: 'Operate and monitor multiple locations.',
        keyFeatures: [
            'Multiple branches',
            'Central monitoring',
            'Stock transfers',
            'Branch reports',
        ],
        outputs: [],
        optional: false,
        icon: 'building',
    },
    offline: {
        title: 'Offline & Synchronization',
        shortTitle: 'Offline sync',
        description: 'Keep selling when connectivity drops.',
        keyFeatures: [
            'Offline sales',
            'Local storage',
            'Auto sync',
        ],
        outputs: [],
        optional: false,
        icon: 'cloud',
    },
    devices: {
        title: 'Device & Integration',
        shortTitle: 'Devices',
        description: 'Hardware and peripherals at the counter.',
        keyFeatures: [
            'Printer integration',
            'Barcode scanner',
            'Cash drawer',
            'Mobile support',
        ],
        outputs: [],
        optional: false,
        icon: 'usb',
    },
    notifications: {
        title: 'Notification & Alerts',
        shortTitle: 'Alerts',
        description: 'Proactive updates for operations and finance.',
        keyFeatures: [
            'Low stock alerts',
            'Expiry alerts',
            'Sales summaries',
            'Payment reminders',
        ],
        outputs: [],
        optional: false,
        icon: 'bell',
    },
    administration: {
        title: 'System Administration',
        shortTitle: 'Administration',
        description: 'Company profile and platform configuration.',
        keyFeatures: [
            'Company setup',
            'Tax configuration',
            'Currency settings',
            'Backup and restore',
            'System logs',
        ],
        outputs: [],
        optional: false,
        icon: 'settings',
    },
};

export const MODULE_SLUGS = Object.keys(MODULES);
