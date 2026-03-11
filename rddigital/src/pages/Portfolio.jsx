import PortfolioHero from '../components/sections/PortfolioHero';
import PortfolioProjects from '../components/sections/PortfolioProjects';
import ProcessSteps from '../components/sections/ProcessSteps';
import PortfolioWhyRD from '../components/sections/PortfolioWhyRD';
import PortfolioFAQ from '../components/sections/PortfolioFAQ';
import PortfolioTestimonials from '../components/sections/PortfolioTestimonials';

export default function Portfolio() {
    return (
        <main className="w-full bg-white">
            <PortfolioHero />
            <PortfolioProjects />
            <ProcessSteps />
            <PortfolioWhyRD />
            <PortfolioFAQ />
            <PortfolioTestimonials />
        </main>
    );
}
