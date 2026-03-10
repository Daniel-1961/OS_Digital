import Button from '../components/common/Button';

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-primary-dark min-h-screen flex items-center overflow-hidden">
                {/* Background decorative blobs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-accent-blue/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                        High-Performance Web Platforms
                        <br />
                        <span className="gradient-text">for Regulated Businesses</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
                        We build secure digital products for companies where compliance, speed, and results matter.
                        Our clients include leading insurance providers, medical brands, and technical teams across
                        the UK and Europe.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button to="/contact" size="lg">
                            Book a Call
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Button>
                        <Button to="/portfolio" variant="outline" size="lg">
                            Case Studies
                        </Button>
                    </div>
                </div>
            </section>

            {/* Placeholder for remaining sections — will be built as individual section components */}
            <section className="py-20 bg-primary-light">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-body-text text-lg">
                        🚧 More homepage sections coming soon — Services, Portfolio, Products, FAQ, Testimonials
                    </p>
                </div>
            </section>
        </>
    );
}
