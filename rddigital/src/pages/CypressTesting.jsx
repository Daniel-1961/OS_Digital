import CypressHero from "../components/sections/CypressHero";
import CypressWhatWeBuild from "../components/sections/CypressWhatWeBuild";
import ServiceOurProcess from "../components/sections/ServiceOurProcess";
import OurWorkInAction from "../components/sections/OurWorkInAction";
import PortfolioWhyRD from "../components/sections/PortfolioWhyRD";
import OtherServices from "../components/sections/OtherServices";
import PortfolioFAQ from "../components/sections/PortfolioFAQ";
import PortfolioTestimonials from "../components/sections/PortfolioTestimonials";
import { useEffect } from "react";

export default function CypressTesting() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <CypressHero />
            <CypressWhatWeBuild />
            <ServiceOurProcess />
            <OurWorkInAction />
            <PortfolioWhyRD />
            <OtherServices />
            <PortfolioFAQ />
            <PortfolioTestimonials />
        </div>
    );
}
