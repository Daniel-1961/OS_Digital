import Hero from '../components/sections/Hero';
import ServicesSection from '../components/sections/Services';
import PortfolioSection from '../components/sections/Portfolio';
import WhyRD from '../components/sections/WhyRD';
import Products from '../components/sections/Products';
import FAQ from '../components/sections/FAQ';
import Testimonials from '../components/sections/Testimonials';

export default function Home() {
    return (
        <>
            <Hero />
            <ServicesSection />
            <PortfolioSection />
            <WhyRD />
            <Products />
            <FAQ />
            <Testimonials />
        </>
    );
}
