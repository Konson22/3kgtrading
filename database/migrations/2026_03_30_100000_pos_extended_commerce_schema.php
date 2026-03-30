<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Add catalog columns when `categories` already existed from an older migration run.
     */
    private function ensureCategoryColumns(): void
    {
        if (! Schema::hasTable('categories')) {
            return;
        }

        Schema::table('categories', function (Blueprint $table) {
            if (! Schema::hasColumn('categories', 'business_category')) {
                $table->string('business_category', 32)->nullable()->after('business_id');
            }
            if (! Schema::hasColumn('categories', 'slug')) {
                $table->string('slug', 64)->nullable()->after('code');
            }
            if (! Schema::hasColumn('categories', 'description')) {
                $table->text('description')->nullable()->after('slug');
            }
            if (! Schema::hasColumn('categories', 'sort_order')) {
                $table->unsignedInteger('sort_order')->default(0)->after('description');
            }
        });
    }

    private function ensureCategoryIndexes(): void
    {
        if (! Schema::hasTable('categories')) {
            return;
        }

        if (! Schema::hasColumn('categories', 'slug')) {
            return;
        }

        if (! Schema::hasIndex('categories', ['business_id', 'slug'], 'unique')) {
            Schema::table('categories', function (Blueprint $table) {
                $table->unique(['business_id', 'slug'], 'categories_business_slug_unique');
            });
        }

        if (
            Schema::hasColumn('categories', 'business_category')
            && ! Schema::hasIndex('categories', ['business_id', 'business_category'])
        ) {
            Schema::table('categories', function (Blueprint $table) {
                $table->index(['business_id', 'business_category'], 'categories_business_type_idx');
            });
        }
    }

    public function up(): void
    {
        if (! Schema::hasTable('categories')) {
            Schema::create('categories', function (Blueprint $table) {
                $table->id();
                $table->foreignId('business_id')->constrained()->cascadeOnDelete();
                $table->string('business_category', 32)->nullable()->comment('Legacy column; unused in retail-only app (null = all)');
                $table->string('name');
                $table->string('code', 64)->nullable();
                $table->string('slug', 64)->nullable();
                $table->text('description')->nullable();
                $table->unsignedInteger('sort_order')->default(0);
                $table->foreignId('parent_id')->nullable()->constrained('categories')->nullOnDelete();
                $table->boolean('is_active')->default(true);
                $table->timestamps();

                $table->unique(['business_id', 'slug'], 'categories_business_slug_unique');
                $table->index(['business_id', 'business_category'], 'categories_business_type_idx');
            });
        }

        $this->ensureCategoryColumns();
        $this->ensureCategoryIndexes();

        Schema::table('products', function (Blueprint $table) {
            if (! Schema::hasColumn('products', 'category_id')) {
                $table->foreignId('category_id')->nullable()->after('id')->constrained()->nullOnDelete();
            }
            if (! Schema::hasColumn('products', 'track_batches')) {
                $table->boolean('track_batches')->default(false)->after('track_inventory');
            }
        });

        if (! Schema::hasTable('stock_lots')) {
            Schema::create('stock_lots', function (Blueprint $table) {
                $table->id();
                $table->foreignId('branch_id')->constrained()->cascadeOnDelete();
                $table->foreignId('product_id')->constrained()->cascadeOnDelete();
                $table->string('batch_number')->default('');
                $table->date('expiry_date')->nullable();
                $table->decimal('quantity', 14, 3)->default(0);
                $table->timestamps();
                $table->unique(['branch_id', 'product_id', 'batch_number']);
            });
        }

        if (! Schema::hasTable('customers')) {
            Schema::create('customers', function (Blueprint $table) {
                $table->id();
                $table->foreignId('business_id')->constrained()->cascadeOnDelete();
                $table->string('name');
                $table->string('email')->nullable();
                $table->string('phone')->nullable();
                $table->text('address')->nullable();
                $table->decimal('balance_due', 14, 2)->default(0);
                $table->boolean('is_active')->default(true);
                $table->timestamps();
            });
        }

        if (! Schema::hasTable('suppliers')) {
            Schema::create('suppliers', function (Blueprint $table) {
                $table->id();
                $table->foreignId('business_id')->constrained()->cascadeOnDelete();
                $table->string('name');
                $table->string('email')->nullable();
                $table->string('phone')->nullable();
                $table->text('address')->nullable();
                $table->boolean('is_active')->default(true);
                $table->timestamps();
            });
        }

        if (! Schema::hasTable('quotations')) {
            Schema::create('quotations', function (Blueprint $table) {
                $table->id();
                $table->foreignId('branch_id')->constrained()->cascadeOnDelete();
                $table->foreignId('customer_id')->nullable()->constrained()->nullOnDelete();
                $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
                $table->string('number')->index();
                $table->string('status', 32)->default('draft');
                $table->date('valid_until')->nullable();
                $table->decimal('subtotal', 14, 2)->default(0);
                $table->decimal('tax_total', 14, 2)->default(0);
                $table->decimal('discount_total', 14, 2)->default(0);
                $table->decimal('total', 14, 2)->default(0);
                $table->text('notes')->nullable();
                $table->timestamps();
                $table->unique(['branch_id', 'number']);
            });
        }

        if (! Schema::hasTable('quotation_items')) {
            Schema::create('quotation_items', function (Blueprint $table) {
                $table->id();
                $table->foreignId('quotation_id')->constrained()->cascadeOnDelete();
                $table->foreignId('product_id')->nullable()->constrained()->nullOnDelete();
                $table->string('description')->nullable();
                $table->decimal('quantity', 14, 3);
                $table->decimal('unit_price', 12, 2);
                $table->decimal('tax_amount', 12, 2)->default(0);
                $table->decimal('line_total', 14, 2);
                $table->timestamps();
            });
        }

        if (! Schema::hasTable('invoices')) {
            Schema::create('invoices', function (Blueprint $table) {
                $table->id();
                $table->foreignId('branch_id')->constrained()->cascadeOnDelete();
                $table->foreignId('customer_id')->nullable()->constrained()->nullOnDelete();
                $table->foreignId('quotation_id')->nullable()->constrained()->nullOnDelete();
                $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
                $table->string('number')->index();
                $table->string('status', 32)->default('draft');
                $table->date('issue_date')->nullable();
                $table->date('due_date')->nullable();
                $table->decimal('subtotal', 14, 2)->default(0);
                $table->decimal('tax_total', 14, 2)->default(0);
                $table->decimal('discount_total', 14, 2)->default(0);
                $table->decimal('total', 14, 2)->default(0);
                $table->decimal('paid_amount', 14, 2)->default(0);
                $table->text('notes')->nullable();
                $table->timestamps();
                $table->unique(['branch_id', 'number']);
            });
        }

        if (! Schema::hasTable('invoice_items')) {
            Schema::create('invoice_items', function (Blueprint $table) {
                $table->id();
                $table->foreignId('invoice_id')->constrained()->cascadeOnDelete();
                $table->foreignId('product_id')->nullable()->constrained()->nullOnDelete();
                $table->string('description')->nullable();
                $table->decimal('quantity', 14, 3);
                $table->decimal('unit_price', 12, 2);
                $table->decimal('tax_amount', 12, 2)->default(0);
                $table->decimal('line_total', 14, 2);
                $table->timestamps();
            });
        }

        if (! Schema::hasTable('payments')) {
            Schema::create('payments', function (Blueprint $table) {
                $table->id();
                $table->foreignId('branch_id')->constrained()->cascadeOnDelete();
                $table->foreignId('invoice_id')->constrained()->cascadeOnDelete();
                $table->decimal('amount', 14, 2);
                $table->string('method', 32);
                $table->string('reference')->nullable();
                $table->timestamp('paid_at')->useCurrent();
                $table->timestamps();
            });
        }

        if (! Schema::hasTable('receipts')) {
            Schema::create('receipts', function (Blueprint $table) {
                $table->id();
                $table->foreignId('branch_id')->constrained()->cascadeOnDelete();
                $table->foreignId('payment_id')->constrained()->cascadeOnDelete();
                $table->string('receipt_number')->unique();
                $table->timestamp('printed_at')->nullable();
                $table->timestamps();
            });
        }

        if (! Schema::hasTable('document_sequences')) {
            Schema::create('document_sequences', function (Blueprint $table) {
                $table->id();
                $table->foreignId('business_id')->constrained()->cascadeOnDelete();
                $table->string('doc_type', 32);
                $table->string('prefix', 16)->default('');
                $table->unsignedBigInteger('next_number')->default(1);
                $table->timestamps();
                $table->unique(['business_id', 'doc_type']);
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('document_sequences');
        Schema::dropIfExists('receipts');
        Schema::dropIfExists('payments');
        Schema::dropIfExists('invoice_items');
        Schema::dropIfExists('invoices');
        Schema::dropIfExists('quotation_items');
        Schema::dropIfExists('quotations');
        Schema::dropIfExists('suppliers');
        Schema::dropIfExists('customers');
        Schema::dropIfExists('stock_lots');

        Schema::table('products', function (Blueprint $table) {
            if (Schema::hasColumn('products', 'category_id')) {
                $table->dropConstrainedForeignId('category_id');
            }
            if (Schema::hasColumn('products', 'track_batches')) {
                $table->dropColumn('track_batches');
            }
        });

        Schema::dropIfExists('categories');
    }
};
