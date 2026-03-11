import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#1b4e6b]/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-4'
            }`}>
            <nav className="max-w-[90rem] mx-auto px-6 sm:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo - Flex 1 for perfect centering of middle nav */}
                    <div className="flex-1 flex justify-start">
                        <Link to="/" className="flex items-center shrink-0">
                            {/* SVG Logo approximating the R design in the image */}
                            <svg className="w-10 h-10 mr-3 text-white" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 8h8.5c5.5 0 8.5 3 8.5 7.5s-3 7.5-8.5 7.5H16v9h-4V8zm4 11h4.5c3 0 4.5-1.5 4.5-3.5S23.5 12 20.5 12H16v7z" />
                                <path d="M22 23l4.5 9h-4.5L18.5 24H22z" />
                            </svg>
                            <span className="text-xl font-bold text-white tracking-widest uppercase">
                                RD DIGITAL
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation - Pill Shape */}
                    <div className="hidden lg:flex justify-center flex-1">
                        <div className="bg-white rounded-full px-8 py-1.5 shadow-sm border border-gray-100 relative">
                            <DesktopMenu />
                        </div>
                    </div>

                    {/* CTA - Flex 1 for perfect centering */}
                    <div className="flex-1 hidden lg:flex items-center justify-end">
                        <Link to="/contact" className="relative group inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 rounded-lg overflow-hidden border border-white/20 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#3b82f6] to-[#1e40af] group-hover:from-[#2563eb] group-hover:to-[#1d4ed8]"></span>
                            <span className="relative flex items-center gap-2">
                                Book a Call
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="flex-1 flex justify-end lg:hidden">
                        <button
                            className="p-2 text-white"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {mobileOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Component */}
            <MobileMenu mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        </header>
    );
}
