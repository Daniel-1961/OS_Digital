export default function SectionHeading({
    label,
    title,
    subtitle,
    gradient = false,
    center = true,
    light = false,
    className = '',
}) {
    return (
        <div className={`${center ? 'text-center' : 'text-left'} mb-12 ${className}`}>
            {label && (
                <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent-blue mb-3">
                    {label}
                </span>
            )}

            <h2
                className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${gradient
                        ? 'gradient-text'
                        : light
                            ? 'text-white'
                            : 'text-heading-dark'
                    }`}
            >
                {title}
            </h2>

            {subtitle && (
                <p
                    className={`text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-body-text'
                        }`}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}
