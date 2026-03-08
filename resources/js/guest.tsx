import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProjectsProvider } from './context/ProjectsContext';
import { ServicesProvider } from './context/ServicesContext';
import GuestLayout from './layouts/GuestLayout';
import '../css/app.css';

import AboutPage from './pages/guest/about';
import ContactPage from './pages/guest/contacts';
import Main from './pages/guest/main';
import PrivacyPage from './pages/guest/privacy';
import ProjectsPage from './pages/guest/projects';
import ProjectDetailsPage from './pages/guest/projects/details';
import RequestServicePage from './pages/guest/request-service';
import ServicesPage from './pages/guest/services';
import ServiceDetailsPage from './pages/guest/services/details';
import TermsPage from './pages/guest/terms';

const root = document.getElementById('guest-app');
if (!root) throw new Error('Root element #guest-app not found');

createRoot(root).render(
    <StrictMode>
        <BrowserRouter>
            <ProjectsProvider>
                <ServicesProvider>
                    <Routes>
                        <Route element={<GuestLayout />}>
                            <Route path="/" element={<Main />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route
                                path="/services"
                                element={<ServicesPage />}
                            />
                            <Route
                                path="/services/:slug"
                                element={<ServiceDetailsPage />}
                            />
                            <Route
                                path="/projects"
                                element={<ProjectsPage />}
                            />
                            <Route
                                path="/projects/:slug"
                                element={<ProjectDetailsPage />}
                            />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route
                                path="/quote"
                                element={<RequestServicePage />}
                            />
                            <Route
                                path="/request-service"
                                element={<RequestServicePage />}
                            />
                            <Route path="/privacy" element={<PrivacyPage />} />
                            <Route path="/terms" element={<TermsPage />} />
                        </Route>
                    </Routes>
                </ServicesProvider>
            </ProjectsProvider>
        </BrowserRouter>
    </StrictMode>,
);
