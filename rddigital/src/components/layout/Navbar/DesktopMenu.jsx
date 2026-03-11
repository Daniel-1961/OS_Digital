import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from './NavLinks';

export default function DesktopMenu() {
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
                link.children ? (
                    <div
                        key={link.label}
                        className="relative group py-2"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <NavLink
                            to={link.to}
                            className={({ isActive }) =>
                                `text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${isActive
                                    ? 'text-accent-blue'
                                    : 'text-heading-dark hover:text-accent-blue'
                                }`
                            }
                        >
                            {link.label}
                            <svg
                                className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''
                                    }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </NavLink>

                        {/* Dropdown */}
                        <div
                            className={`
                                absolute top-full left-0 mt-0 w-64 py-2
                                bg-white rounded-card shadow-xl border border-border
                                transition-all duration-200 origin-top
                                ${servicesOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                            `}
                        >
                            {link.children.map((child) => (
                                <NavLink
                                    key={child.label}
                                    to={child.to}
                                    className={({ isActive }) =>
                                        `block px-4 py-2.5 text-sm transition-colors duration-150 ${isActive
                                            ? 'text-accent-blue bg-accent-blue/5'
                                            : 'text-heading-dark hover:text-accent-blue hover:bg-accent-blue/5'
                                        }`
                                    }
                                >
                                    {child.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                ) : (
                    <NavLink
                        key={link.label}
                        to={link.to}
                        className={({ isActive }) =>
                            `text-sm font-medium transition-colors duration-200 ${isActive
                                ? 'text-accent-blue'
                                : 'text-heading-dark hover:text-accent-blue'
                            }`
                        }
                    >
                        {link.label}
                    </NavLink>
                )
            )}
        </div>
    );
}
