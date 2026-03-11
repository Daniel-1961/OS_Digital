import { NavLink } from 'react-router-dom';
import Button from '../../common/Button';
import { navLinks } from './NavLinks';

export default function MobileMenu({ mobileOpen, setMobileOpen }) {
    return (
        <div
            className={`
                lg:hidden mt-2 mx-auto max-w-7xl
                bg-white rounded-card shadow-xl border border-border
                overflow-hidden transition-all duration-300 absolute left-4 right-4
                ${mobileOpen ? 'max-h-[80vh] opacity-100 p-4 overflow-y-auto' : 'max-h-0 opacity-0 p-0 pointer-events-none'}
            `}
        >
            {navLinks.map((link) =>
                link.children ? (
                    <div key={link.label} className="mb-2">
                        <NavLink
                            to={link.to}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 text-sm font-semibold text-heading-dark"
                        >
                            {link.label}
                        </NavLink>
                        <div className="pl-4 border-l-2 border-accent-blue/20">
                            {link.children.map((child) => (
                                <NavLink
                                    key={child.label}
                                    to={child.to}
                                    onClick={() => setMobileOpen(false)}
                                    className="block py-1.5 text-sm text-body-text hover:text-accent-blue"
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
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-sm font-medium text-heading-dark hover:text-accent-blue"
                    >
                        {link.label}
                    </NavLink>
                )
            )}
            <div className="pt-3 mt-3 border-t border-border flex justify-center">
                <Button to="/contact" size="sm" className="w-full justify-center">
                    Book a Call
                </Button>
            </div>
        </div>
    );
}
