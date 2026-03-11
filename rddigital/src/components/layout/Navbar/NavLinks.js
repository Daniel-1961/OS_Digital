export const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    {
        label: 'Services',
        to: '/services',
        children: [
            { label: 'Web and App Development', to: '/services/web-app-development' },
            { label: 'Marketing Analytics', to: '/services/marketing-analytics' },
            { label: 'Hosting with Azure', to: '/services/azure' },
            { label: 'Automated Testing', to: '/services/automated-testing' },
            { label: 'AI-Powered Workflows', to: '/services/ai-powered-workflows' },
            { label: 'Umbraco Development', to: '/services/umbraco-development' },
            { label: 'Customer Acquisition', to: '/services/customer-acquisition' },
        ],
    },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Insights', to: '/blog' },
];
