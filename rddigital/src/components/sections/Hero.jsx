import Button from '../common/Button';

const partnerLogos = [
    { name: 'Columbus Direct', src: '/assets/images/columbus_direct_a5b453083d.webp' },
    { name: 'Berkeley Square Medical', src: '/assets/images/Berkeley_Square_Medical_1_5a5e4d48e5.webp' },
    { name: 'Electric Car Chargers', src: '/assets/images/image_52_1_cea5ad58f1.webp' }, // Approximated
    { name: 'Staysure', src: '/assets/images/f35e45d85c685a4d844acc27b62003e8c35e06b6_1_a82fcc2c81.webp' },
    { name: 'Avanti Travel', src: '/assets/images/image_53_8e9ee46437.webp' },
];

export default function Hero() {
    return (
        <section className="relative bg-primary-dark min-h-screen flex flex-col justify-center overflow-hidden">
            {/* Background decorative blobs */}
            <div className="absolute top-10 left-[-5%] w-[500px] h-[500px] bg-accent-blue/8 rounded-full blur-[120px]" />
            <div className="absolute bottom-10 right-[-5%] w-[600px] h-[600px] bg-accent-purple/6 rounded-full blur-[150px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/4 rounded-full blur-[200px]" />

            {/* Announcement pill */}
            <div className="relative max-w-7xl mx-auto px-6 pt-28 w-full">
                <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
                        <span className="text-sm text-white/80 font-medium">
                            We Have Uplifted Revenue By 10%. Your Business Is Next!
                        </span>
                        <img src="/assets/images/rocket-launch 2.svg" alt="Rocket" className="w-5 h-5 ml-1" />
                    </div>
                </div>
            </div>

            {/* Main Hero Content */}
            <div className="relative max-w-7xl mx-auto px-6 pb-12 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                            High-Performance Web Platforms{' '}
                            <span className="gradient-text">for Regulated Businesses</span>
                        </h1>

                        <p className="text-base md:text-lg text-white/60 max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
                            We build secure digital products for companies where compliance, speed, and results matter.
                            Our clients include leading insurance providers, medical brands, and technical teams across
                            the UK and Europe.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Button to="/contact" size="lg">
                                Book a Call
                                <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Button>
                            <Button to="/portfolio" variant="outline" size="lg">
                                Case Studies
                            </Button>
                        </div>
                    </div>

                    {/* Right — Original Side Visual SVG */}
                    <div className="hidden lg:flex relative justify-center items-center min-h-[400px]">
                        <img
                            src="/assets/images/side visual for hero.svg"
                            alt="High Performance Web Platforms Visual"
                            className="w-full max-w-[650px] object-contain drop-shadow-2xl translate-x-12"
                        />
                    </div>
                </div>
            </div>

            {/* Partner Logos Bar */}
            <div className="relative max-w-5xl mx-auto px-6 pb-16 mt-8 w-full">
                <div className="bg-white/8 backdrop-blur-md border border-white/10 rounded-full py-5 px-8">
                    <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
                        {partnerLogos.map((logo) => (
                            <div
                                key={logo.name}
                                className="flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                            >
                                <img src={logo.src} alt={logo.name} className="h-8 max-w-[120px] object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
