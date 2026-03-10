import Button from '../components/common/Button';

export default function Contact() {
    return (
        <div className="pt-28 pb-20 min-h-screen bg-primary-light">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h1 className="text-4xl font-bold text-heading-dark mb-4">Book a Call</h1>
                <p className="text-body-text text-lg mb-8">
                    Ready to scale faster? Get in touch with our team.
                </p>
                <Button href="mailto:hello@rddigital.co.uk" size="lg">
                    Contact Us
                </Button>
            </div>
        </div>
    );
}
