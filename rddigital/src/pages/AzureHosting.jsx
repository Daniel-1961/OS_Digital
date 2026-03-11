import AzureHero from "../components/sections/AzureHero";
import AzureWhatWeBuild from "../components/sections/AzureWhatWeBuild";
import ServiceOurProcess from "../components/sections/ServiceOurProcess";
import OurWorkInAction from "../components/sections/OurWorkInAction";
import PortfolioWhyRD from "../components/sections/PortfolioWhyRD";
import OtherServices from "../components/sections/OtherServices";
import AzureFAQ from "../components/sections/AzureFAQ";
import PortfolioTestimonials from "../components/sections/PortfolioTestimonials";
import { useEffect } from "react";

export default function AzureHosting() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <AzureHero />
            <AzureWhatWeBuild />
            <ServiceOurProcess />
            <OurWorkInAction />
            <PortfolioWhyRD />
            <OtherServices />
            <AzureFAQ />
            <PortfolioTestimonials />
        </div>
    );
}
