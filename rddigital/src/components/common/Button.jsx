import { Link } from 'react-router-dom';

const variants = {
  primary:
    'gradient-bg text-white hover:opacity-90 shadow-lg shadow-accent-blue/25',
  outline:
    'bg-transparent border-2 border-white text-white hover:bg-white/10',
  ghost:
    'bg-transparent text-accent-blue hover:bg-accent-blue/10',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  ...props
}) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-semibold rounded-btn
    transition-all duration-300 cursor-pointer
    ${variants[variant] || variants.primary}
    ${sizes[size] || sizes.md}
    ${className}
  `.trim();

  if (to) {
    return (
      <Link to={to} className={baseClasses} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
}
