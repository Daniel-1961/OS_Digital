import { Link } from 'react-router-dom';

const serviceLinks = [
    { label: 'Web and App Development', to: '/services/web-app-development' },
    { label: 'Marketing Analytics', to: '/services/marketing-analytics' },
    { label: 'Hosting with Azure', to: '/services/azure' },
    { label: 'Automated Testing', to: '/services/automated-testing' },
    { label: 'AI-Powered Workflows', to: '/services/ai-powered-workflows' },
    { label: 'Customer Acquisition', to: '/services/customer-acquisition' },
    { label: 'Umbraco Development', to: '/services/umbraco-development' },
];

const companyLinks = [
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Our Work', to: '/portfolio' },
    { label: 'Insights', to: '/blog' },
];

export default function Footer() {
    return (
        <footer className="bg-primary text-white">
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Top Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="inline-block mb-4">
                            <span className="text-2xl font-bold">
                                RD <span className="gradient-text">Digital</span>
                            </span>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Your Tech Partner in Hertfordshire, UK. We build secure digital products for companies where compliance,
                            speed, and results matter.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/80">
                            Services
                        </h4>
                        <ul className="space-y-2">
                            {serviceLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.to}
                                        className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/80">
                            Company
                        </h4>
                        <ul className="space-y-2">
                            {companyLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.to}
                                        className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/80">
                            Contact
                        </h4>
                        <address className="not-italic text-sm text-white/60 leading-relaxed">
                            <a
                                href="https://www.google.com/maps/place/7+Peerglow+Centre"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors duration-200"
                            >
                                7 Peerglow Centre, Marsh Lane
                                <br />
                                Ware, Hertfordshire, SG12 9QL
                            </a>
                        </address>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-white/40">
                            © {new Date().getFullYear()} RD Digital is a trading name of Recognise Design Ltd. Registered in
                            England & Wales. Reg 08633423.
                        </p>
                        <div className="flex items-center gap-6">
                            <Link to="/sitemap" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                                Sitemap
                            </Link>
                            <Link to="/privacy" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                                Privacy
                            </Link>
                            <Link to="/gdpr" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                                GDPR
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
