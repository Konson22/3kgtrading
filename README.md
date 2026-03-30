You are a senior full-stack engineer. Build a production-ready web-based POS and business management system for retail shops and pharmacies with multi-branch support.

## Tech Stack

- Backend: Node.js (Express)
- Frontend: React + Tailwind CSS
- Database: PostgreSQL
- API: RESTful

---

## Core Requirements

The system must support:

- Multi-branch operations
- Role-based access (Admin, Manager, Cashier)
- POS sales
- Inventory management
- Quotations, invoices, payments, receipts
- Reports and analytics

---

## Modules & Pages

### 1. Dashboard

- Show KPIs: total sales, revenue per branch, low stock alerts, expiring products
- Charts for sales trends

---

### 2. POS (Point of Sale)

- Fast checkout interface
- Add products via search or barcode
- Cart system
- Select customer
- Accept multiple payment methods (cash, mobile money, bank)
- Generate receipt after payment

---

### 3. Inventory Management

#### Products

- CRUD products
- Categories
- Barcode support

#### Stock

- Track stock per branch
- Stock adjustments

#### Transfers

- Transfer stock between branches

#### Pharmacy Features

- Batch numbers
- Expiry date tracking
- Expiring soon alerts

---

### 4. Customers & Suppliers

#### Customers

- CRUD customers
- View purchase history
- Track outstanding balances

#### Suppliers

- CRUD suppliers

---

### 5. Quotations

- Create quotation with items
- Set expiry date
- Status tracking
- Convert quotation to invoice

---

### 6. Invoices

- Create invoice (manual or from quotation)
- Track status (draft, paid, partial, overdue)
- Track total and paid amounts
- Due dates

---

### 7. Payments

- Record payments against invoices
- Support partial payments
- Payment methods: cash, bank, mobile money

---

### 8. Receipts

- Auto-generate after payment
- Printable format

---

### 9. Reports

- Sales reports (daily, monthly, per branch)
- Inventory reports
- Financial reports (payments, outstanding invoices)

---

### 10. Multi-Branch Management

- CRUD branches
- Assign users to branches
- Track branch-level data

---

### 11. User & Role Management

- Users: Admin, Manager, Cashier
- Role-based permissions

---

### 12. Settings

- Business info
- Document formats (invoice, receipt)
- Payment methods
- Numbering system (e.g., INV-JUB-0001)

---

## Database Design Requirements

Include tables for:

- branches
- users
- roles
- products
- stock (per branch)
- customers
- suppliers
- quotations & quotation_items
- invoices & invoice_items
- payments
- receipts

Rules:

- Every transactional record must include branch_id
- Stock reduces only when invoice is confirmed, not quotation
- Payments update invoice paid_amount and status

---

## API Requirements

Create REST endpoints for all modules:

- Auth (login/register)
- Products, stock, transfers
- Customers, suppliers
- Quotations → convert to invoice
- Invoices → payments
- Reports

---

## Frontend Requirements

- Clean dashboard UI

- Dedicated POS screen (fast and minimal)

- Sidebar navigation:
  Dashboard, POS, Inventory, Customers, Suppliers, Quotations, Invoices, Payments, Receipts, Reports, Branches, Users, Settings

- Use reusable components

- Use forms with validation

- Use tables with filters/search

---

## Additional Requirements

- Use JWT authentication
- Implement role-based authorization
- Ensure responsive design
- Add error handling and validation
- Structure code for scalability

---

## Deliverables

1. Backend folder structure
2. Frontend folder structure
3. Database schema (SQL)
4. API routes
5. Sample UI pages (React components)
6. Instructions to run locally

---

Focus on clean architecture, scalability, and real-world usability for retail and pharmacy businesses.
