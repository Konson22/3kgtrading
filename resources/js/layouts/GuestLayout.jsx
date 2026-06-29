import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SeoHead from '../components/SeoHead';
import GuestBreadcrumbs, { breadcrumbsFromSeo } from '../components/GuestBreadcrumbs';
import FloatingContact from '../components/FloatingContact';

export default function GuestLayout() {
    const location = useLocation();
    const breadcrumbs = breadcrumbsFromSeo();
    const showBreadcrumbs = location.pathname !== '/';

    return (
        <div className="min-h-screen flex flex-col">
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
            >
                Skip to main content
            </a>
            <SeoHead />
            <Navbar />
            <ScrollToTop />
            {showBreadcrumbs && <GuestBreadcrumbs items={breadcrumbs} />}
            <main id="main-content" className="flex-1" tabIndex={-1}>
                <Outlet />
            </main>
            <Footer />
            <FloatingContact />
        </div>
    );
}
