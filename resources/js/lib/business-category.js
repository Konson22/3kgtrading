/**
 * Retail POS — single business type. Kept for a stable import surface (`resolveCategory`, `getCategoryUi`).
 * @typedef {'retail'} BusinessCategory
 */

const RETAIL = 'retail';

/** @param {Record<string, unknown>|undefined} props */
export function resolveCategory(props) {
    const ctx = props?.businessContext;
    if (ctx && typeof ctx.category === 'string') {
        return /** @type {BusinessCategory} */ (RETAIL);
    }
    return /** @type {BusinessCategory} */ (RETAIL);
}

/** @returns {ReturnType<typeof retailUi>} */
export function getCategoryUi(_category = RETAIL) {
    return retailUi();
}

function retailUi() {
    return {
        category: RETAIL,
        isPharmacy: false,
        isRestaurant: false,
        isWholesale: false,

        typeBadgeLabel: 'Retail',
        typeBadgeClass: 'bg-neutral-700 text-white',

        pharmacyNavLabel: 'Batches & expiry',
        pharmacyNavBadge: null,
        pharmacyNavBadgeClass: 'bg-neutral-100 text-neutral-600',

        posNavLabel: 'Point of sale',
        inventoryNavLabel: 'Inventory',

        adminDashboardDescription:
            'All branches — switch location from the header. Track sales, stock, and daily operations.',
        branchDashboardDescription:
            'You are scoped to your assigned branch. Admins use the admin portal for all locations.',

        alertsCardTitle: 'Alerts',
        /** @param {{ lowStockCount?: number, expiringLotsCount?: number }} stats */
        alertsCardHint(stats, portal) {
            const low = stats?.lowStockCount ?? 0;
            const exp = stats?.expiringLotsCount ?? 0;
            const scope =
                portal === 'admin' ? 'active branch' : 'this branch';
            return `${exp} lots expiring in 30d · ${low} low-stock SKUs (${scope})`;
        },

        openPosLabel: 'Open POS',

        gettingStartedTitle: 'Getting started',
        gettingStartedDescription:
            'Customers, quotations, invoices, payments, and receipts are ready in the schema. Connect POS and inventory screens when you are ready.',

        quickLinkInvoiceLabel: 'Invoices',
        quickLinkInventoryLabel: 'Inventory',
        quickLinkReportsLabel: 'Reports',

        showPharmacyQuickLink: false,
    };
}

/**
 * @param {'admin'|'branch'} portal
 * @param {string} moduleKey
 * @param {BusinessCategory} [_category]
 */
export function getModuleBlurb(portal, moduleKey, _category = RETAIL) {
    const branch = portal === 'branch';

    const admin = {
        pos: 'Fast checkout, barcode search, and split payments — connect your sales flow.',
        inventory: 'Products, categories, stock levels, transfers, and adjustments.',
        customers: 'Customer directory, balances, and purchase history.',
        suppliers: 'Supplier master data for purchasing.',
        quotations: 'Quotes with validity and convert-to-invoice workflow.',
        invoices: 'Draft, send, partial and overdue tracking.',
        payments: 'Cash, bank, and mobile money allocation to invoices.',
        receipts: 'Auto receipts linked to payments; print-ready layout.',
        reports: 'Sales, inventory, and financial summaries by branch.',
        branches: 'Create branches and assign staff.',
        users: 'Users with Admin / Manager / Cashier roles.',
        settings:
            'Business profile, document prefixes, and numbering — tune defaults below.',
    };

    const branchMap = {
        pos: 'Checkout for this branch — cart and payments.',
        inventory: 'Stock and products for your assigned branch.',
        customers: 'Customers at business level; day-to-day work is branch scoped.',
        suppliers: 'Supplier directory for purchasing.',
        quotations: 'Branch-scoped quotations.',
        invoices: 'Invoices for this branch.',
        payments: 'Record payments against branch invoices.',
        receipts: 'Receipts issued from this branch.',
        reports: 'Reports filtered to your branch.',
        settings: 'Profile, password, and preferences.',
    };

    const map = branch ? branchMap : admin;
    return (
        map[/** @type {keyof typeof admin} */ (moduleKey)] ??
        'Module UI and API wiring coming next.'
    );
}
