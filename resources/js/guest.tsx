import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProjectsProvider } from "./context/ProjectsContext";
import { ServicesProvider } from "./context/ServicesContext";
import GuestLayout from "./layouts/GuestLayout";
import "../css/app.css";

import AboutPage from "./pages/guest/about/index";
import ContactPage from "./pages/guest/contact/index";
import MainPage from "./pages/guest/main/index";
import PrivacyPage from "./pages/guest/privacy/index";
import ProjectsPage from "./pages/guest/projects/index";
import ProjectDetailsPage from "./pages/guest/projects/details";
import ServicesPage from "./pages/guest/services/index";
import ServiceDetailsPage from "./pages/guest/services/details";
import TermsPage from "./pages/guest/terms/index";

const root = document.getElementById("guest-app");
if (!root) throw new Error("Root element #guest-app not found");

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <ProjectsProvider>
        <ServicesProvider>
          <Routes>
            <Route element={<GuestLayout />}>
              <Route path="/" element={<MainPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceDetailsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
            </Route>
          </Routes>
        </ServicesProvider>
      </ProjectsProvider>
    </BrowserRouter>
  </StrictMode>
);
