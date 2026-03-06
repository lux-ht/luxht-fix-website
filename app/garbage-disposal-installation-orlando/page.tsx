import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Garbage Disposal Installation in Orlando, FL | LUXHT Fix',
    description: 'Professional garbage disposal installation in Orlando. New installs, replacements, and upgrades for InSinkErator, Moen, and more. Serving Winter Park, Maitland, College Park & Oviedo.',
    alternates: { canonical: 'https://fix.luxht.com/garbage-disposal-installation-orlando/' },
    openGraph: {
        title: 'Garbage Disposal Installation in Orlando, FL | LUXHT Fix',
        description: 'Garbage disposal installation in Orlando. Quick replacements and new installs.',
        url: 'https://fix.luxht.com/garbage-disposal-installation-orlando/',
        type: 'website',
        siteName: 'LUXHT Fix',
    },
};

export default function GarbageDisposalPage() {
    return (
        <ServicePageTemplate
            serviceName="Garbage Disposal Installation"
            slug="garbage-disposal-installation-orlando"
            neighborhoods={["Winter Park", "Maitland", "College Park", "Oviedo"]}
            parentCategory="Fixtures and Faucets"
            parentSlug="faucet-fixtures-orlando"
            heroSubtitle="New garbage disposal installed quickly with leak-free connections."
            heroDescription="Replacements and first-time installations for any kitchen."
            introParagraph="Whether your garbage disposal has stopped working, is leaking from the bottom, or you're installing one for the first time, LUXHT Fix handles it. We install all major brands including InSinkErator, Moen, and GE — from basic 1/3 HP models to powerful 1 HP continuous-feed units for busy kitchens. Our installations include proper electrical connections, leak-free plumbing, and testing before we leave."
            serviceDetails={[
                "Garbage disposal replacement (all brands)",
                "First-time garbage disposal installation",
                "Continuous-feed and batch-feed models",
                "Electrical connection and switch installation",
                "Dishwasher drain connection",
                "Old disposal removal and cleanup"
            ]}
            processSteps={[
                "Disconnect power and remove old disposal (if replacing)",
                "Install new mounting assembly on sink drain",
                "Connect disposal unit to mounting ring",
                "Attach drain lines and dishwasher connection",
                "Wire electrical connection or plug-in cord",
                "Test operation, check for leaks, and verify drainage"
            ]}
            whyChooseUs={[
                "Garbage disposal specialists — quick swap-outs",
                "All major brands: InSinkErator, Moen, GE, Waste King",
                "Proper electrical and plumbing connections",
                "First-time installations welcome",
                "Same-week service in most Orlando areas",
                "Licensed, insured, and background-checked"
            ]}
            faqs={[
                { q: "How much does garbage disposal installation cost in Orlando?", a: "Replacement installation labor starts at $95 when swapping like-for-like. First-time installations requiring new plumbing and electrical connections typically range from $150 to $250. Disposal unit is not included." },
                { q: "How do I know if my disposal needs replacing?", a: "Signs include: it won't turn on, hums but doesn't spin, leaks from the bottom (seal failure), or makes loud grinding noises. If yours is over 8 years old and having issues, replacement is usually more cost-effective than repair." },
                { q: "Can you install a more powerful disposal?", a: "Yes. We frequently upgrade clients from 1/3 HP to 3/4 HP or 1 HP models. More powerful disposals handle food waste better and jam less frequently. The mounting system is usually compatible." },
                { q: "Do you connect it to the dishwasher drain?", a: "Yes. If your dishwasher drains through the disposal (common setup), we ensure the connection is made correctly with proper hose clamps and knockout removal." }
            ]}
            relatedServices={[
                { title: "Faucets & Fixtures", href: "/faucet-fixtures-orlando/" },
                { title: "Faucet Replacement", href: "/faucet-replacement-orlando/" },
                { title: "Toilet Repair", href: "/toilet-repair-orlando/" },
                { title: "Shower Head Replacement", href: "/shower-head-replacement-orlando/" },
                { title: "Kitchen Refacing", href: "/kitchen-refacing-orlando/" }
            ]}
            startingPrice="Disposal replacement starts at $95"
            statsText="Licensed • Insured • All Brands Supported"
        />
    );
}
