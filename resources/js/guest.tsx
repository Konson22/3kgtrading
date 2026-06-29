import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ProjectsProvider } from './context/ProjectsContext';
import { ServicesProvider } from './context/ServicesContext';
import GuestLayout from './layouts/GuestLayout';
import '../css/app.css';

const Main = lazy(() => import('./pages/main'));
const AboutPage = lazy(() => import('./pages/about'));
const CareersPage = lazy(() => import('./pages/careers'));
const ContactPage = lazy(() => import('./pages/contacts'));
const PrivacyPage = lazy(() => import('./pages/privacy'));
const ProjectsPage = lazy(() => import('./pages/projects'));
const ProjectDetailsPage = lazy(() => import('./pages/projects/details'));
const RequestServicePage = lazy(() => import('./pages/request-service'));
const ServicesPage = lazy(() => import('./pages/services'));
const ServiceDetailsPage = lazy(() => import('./pages/services/details'));
const TermsPage = lazy(() => import('./pages/terms'));
const JubaLocationPage = lazy(() => import('./pages/locations/juba'));
const SouthSudanLocationPage = lazy(() => import('./pages/locations/south-sudan'));
const EastAfricaLocationPage = lazy(() => import('./pages/locations/east-africa'));

function PageLoader() {
    return (
        <div className="flex min-h-[40vh] items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" role="status" aria-label="Loading page" />
        </div>
    );
}

const root = document.getElementById('guest-app');
if (!root) throw new Error('Root element #guest-app not found');

createRoot(root).render(
    <StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <ProjectsProvider>
                    <ServicesProvider>
                        <Suspense fallback={<PageLoader />}>
                            <Routes>
                                <Route element={<GuestLayout />}>
                                    <Route path="/" element={<Main />} />
                                    <Route path="/about" element={<AboutPage />} />
                                    <Route path="/services" element={<ServicesPage />} />
                                    <Route path="/services/:slug" element={<ServiceDetailsPage />} />
                                    <Route path="/projects" element={<ProjectsPage />} />
                                    <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
                                    <Route path="/contact" element={<ContactPage />} />
                                    <Route path="/quote" element={<RequestServicePage />} />
                                    <Route path="/request-service" element={<RequestServicePage />} />
                                    <Route path="/privacy" element={<PrivacyPage />} />
                                    <Route path="/terms" element={<TermsPage />} />
                                    <Route path="/careers" element={<CareersPage />} />
                                    <Route path="/locations/juba" element={<JubaLocationPage />} />
                                    <Route path="/locations/south-sudan" element={<SouthSudanLocationPage />} />
                                    <Route path="/locations/east-africa" element={<EastAfricaLocationPage />} />
                                </Route>
                            </Routes>
                        </Suspense>
                    </ServicesProvider>
                </ProjectsProvider>
            </BrowserRouter>
        </HelmetProvider>
    </StrictMode>,
);
