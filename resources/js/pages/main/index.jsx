import { Suspense, lazy } from 'react';
import HeroSection from './HeroSection2';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import ProjectsSection from './ProjectsSection';
import CtaSection from './CtaSection';
import OurUniquenessSection from './OurUniquenessSection';
import TrustSection from '@/components/TrustSection';
import { homeFaqs } from '@/data/faqs';

const FaqSection = lazy(() => import('@/components/FaqSection'));
const ContactSection = lazy(() => import('./ContactSection'));

function SectionLoader() {
    return (
        <div className="flex min-h-[12rem] items-center justify-center">
            <div
                className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent"
                role="status"
                aria-label="Loading section"
            />
        </div>
    );
}

export default function Main() {
    return (
        <div className="bg-white">
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <TrustSection />
            <OurUniquenessSection />
            <ProjectsSection />
            <CtaSection />
            <Suspense fallback={<SectionLoader />}>
                <FaqSection faqs={homeFaqs} />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <ContactSection />
            </Suspense>
        </div>
    );
}
