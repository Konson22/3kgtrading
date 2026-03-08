import HeroSection from './HeroSection2';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import ProjectsSection from './ProjectsSection';
import CtaSection from './CtaSection';
import OurUniquenessSection from './OurUniquenessSection';
import ContactSection from './ContactSection';
import ServicesSection2 from './ServicesSection2';

export default function Main() {
    return (
        <div className="bg-white">
            <HeroSection />
            <ServicesSection />
            <ServicesSection2 />
            <AboutSection />
            <OurUniquenessSection />
            <ProjectsSection />
            <CtaSection />
            <ContactSection />
        </div>
    );
}
