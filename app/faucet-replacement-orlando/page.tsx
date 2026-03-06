import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Faucet Replacement in Orlando, FL | LUXHT Fix',
    description: 'Professional faucet replacement in Orlando. Kitchen and bathroom faucets installed with leak-free connections. Serving Winter Park, Maitland, Altamonte Springs & Lake Mary.',
    alternates: { canonical: 'https://fix.luxht.com/faucet-replacement-orlando/' },
    openGraph: {
        title: 'Faucet Replacement in Orlando, FL | LUXHT Fix',
        description: 'Faucet replacement in Orlando. Kitchen and bathroom faucets installed leak-free.',
        url: 'https://fix.luxht.com/faucet-replacement-orlando/',
        type: 'website',
        siteName: 'LUXHT Fix',
    },
};

export default function FaucetReplacementPage() {
    return (
        <ServicePageTemplate
            serviceName="Faucet Replacement"
            slug="faucet-replacement-orlando"
            neighborhoods={["Winter Park", "Maitland", "Altamonte Springs", "Lake Mary"]}
            parentCategory="Fixtures and Faucets"
            parentSlug="faucet-fixtures-orlando"
            heroSubtitle="Upgrade your kitchen or bathroom with a new faucet installed right."
            heroDescription="Leak-free connections and clean finish every time."
            introParagraph="A dripping or outdated faucet wastes water, looks dated, and can be a daily frustration. LUXHT Fix replaces kitchen and bathroom faucets with precision, ensuring leak-free connections and proper operation from day one. We work with all major faucet brands and styles — from pull-down kitchen sprayers to single-hole bathroom faucets. We also handle the common surprises like corroded supply lines and stuck mounting hardware that make faucet jobs harder than they look."
            serviceDetails={[
                "Kitchen faucet replacement (all styles)",
                "Bathroom sink faucet replacement",
                "Pull-down and pull-out sprayer installation",
                "Supply line replacement when corroded",
                "Shut-off valve repair or replacement",
                "Touchless faucet installation"
            ]}
            processSteps={[
                "Shut off water supply and disconnect old faucet",
                "Remove old mounting hardware (dealing with corrosion if needed)",
                "Clean sink surface and inspect mounting holes",
                "Install new faucet with manufacturer gaskets and hardware",
                "Connect supply lines with proper thread sealant",
                "Test for leaks and verify hot/cold operation"
            ]}
            whyChooseUs={[
                "Faucet replacement specialists — quick and clean",
                "All brands: Moen, Delta, Kohler, Pfister, and more",
                "We handle corroded and stuck connections",
                "Leak-free guarantee on every installation",
                "Same-week service in most Orlando areas",
                "Licensed, insured, and background-checked"
            ]}
            faqs={[
                { q: "How much does faucet replacement cost in Orlando?", a: "Labor for faucet replacement typically ranges from $95 to $175, depending on faucet type and any complications like corroded connections. Faucet hardware is not included. Text us at (407) 720-7476 for a quick quote." },
                { q: "Can I buy my own faucet and have you install it?", a: "Absolutely. Most of our clients purchase their faucet from Home Depot, Lowe's, or Amazon and have us install it. We install any brand and style." },
                { q: "How long does a faucet replacement take?", a: "A straightforward faucet replacement takes 30-60 minutes. If we encounter corroded supply lines or stuck mounting hardware, it may take up to 90 minutes." },
                { q: "Do you replace the supply lines too?", a: "We inspect supply lines during every faucet replacement. If they're corroded, kinked, or showing age, we recommend replacing them at the same time to prevent future leaks. Supply line replacement adds minimal cost." }
            ]}
            relatedServices={[
                { title: "Faucets & Fixtures", href: "/faucet-fixtures-orlando/" },
                { title: "Shower Head Replacement", href: "/shower-head-replacement-orlando/" },
                { title: "Garbage Disposal Installation", href: "/garbage-disposal-installation-orlando/" },
                { title: "Toilet Repair", href: "/toilet-repair-orlando/" },
                { title: "Bath Remodel", href: "/bath-remodel-orlando/" }
            ]}
            startingPrice="Faucet replacement starts at $95"
            statsText="Licensed • Insured • Leak-Free Guarantee"
        />
    );
}
