import { useState } from 'react';
import AppSidebar from '@/components/sidebar';
import Navbar from '@/components/navbar';

export default function AppLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-neutral-50">
            <AppSidebar
                open={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />
            <div className="flex min-w-0 flex-1 flex-col">
                <Navbar onMenuOpen={() => setSidebarOpen(true)} />
                <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
            </div>
        </div>
    );
}
