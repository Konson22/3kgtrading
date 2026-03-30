import AdminSidebar from '@/components/sidebar/admin-sidebar';
import Navbar from '@/components/navbar';

export default function AdminLayout({ children }) {
    return (
        <div className="flex min-h-screen bg-neutral-50">
            <AdminSidebar />
            <div className="flex min-h-0 min-w-0 flex-1 flex-col">
                <Navbar />
                <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
            </div>
        </div>
    );
}
