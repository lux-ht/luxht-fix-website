import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Shower Head Replacement in Orlando, FL | LUXHT Fix',
    description: 'Professional shower head replacement in Orlando. Rain heads, handheld, and multi-function shower heads installed. Serving Winter Park, Maitland, Lake Nona & Dr. Phillips.',
    alternates: { canonical: 'https://fix.luxht.com/shower-head-replacement-orlando/' },
    openGraph: {
        title: 'Shower Head Replacement in Orlando, FL | LUXHT Fix',
        description: 'Shower head replacement in Orlando. Rain heads, handheld, and multi-function options.',
        url: 'https://fix.luxht.com/shower-head-replacement-orlando/',
        type: 'website',
        siteName: 'LUXHT Fix',
    },
};

export default function ShowerHeadReplacementPage() {
    return (
        <ServicePageTemplate
            serviceName="Shower Head Replacement"
            slug="shower-head-replacement-orlando"
            neighborhoods={["Winter Park", "Maitland", "Lake Nona", "Dr. Phillips"]}
            parentCategory="Fixtures and Faucets"
            parentSlug="faucet-fixtures-orlando"
            heroSubtitle="Upgrade your shower experience with a new shower head installed right."
            heroDescription="Rain heads, handheld, and multi-function options available."
            introParagraph="A new shower head is one of the easiest bathroom upgrades with immediate impact. LUXHT Fix installs all types of shower heads — from luxurious rain heads and adjustable handheld models to dual-function systems with multiple spray patterns. We handle the thread sealing, arm replacement if needed, and ensure a drip-free connection. Orlando's hard water can corrode shower head connections over time, and we know how to deal with stuck fittings without damaging your tile or wall."
            serviceDetails={[
                "Standard shower head replacement",
                "Rain shower head installation",
                "Handheld shower head with slide bar",
                "Dual shower head systems",
                "Shower arm replacement",
                "Water-saving and high-pressure options"
            ]}
            processSteps={[
                "Remove old shower head (handling corroded connections)",
                "Inspect and clean shower arm threads",
                "Apply PTFE tape for leak-proof seal",
                "Install new shower head and hand-tighten",
                "Test water flow and check for leaks",
                "Adjust spray pattern and angle for comfort"
            ]}
            whyChooseUs={[
                "Quick, clean shower head installs",
                "Experience with corroded Orlando hard-water connections",
                "All types: rain, handheld, dual systems",
                "Shower arm replacement included if needed",
                "Same-week service — often same-day",
                "Licensed, insured, and background-checked"
            ]}
            faqs={[
                { q: "How much does shower head replacement cost in Orlando?", a: "Labor for a standard shower head replacement starts at $65. If the shower arm needs replacement due to corrosion, the total typically ranges from $95 to $150. Shower head hardware is not included." },
                { q: "Can you install a rain shower head on my existing shower?", a: "In most cases, yes. A rain shower head typically requires a different shower arm (often a ceiling or gooseneck arm). LUXHT Fix can replace the arm and install the rain head in a single visit." },
                { q: "My shower head is stuck and won't come off. Can you help?", a: "Yes. Orlando's hard water causes mineral buildup that seizes shower head connections. We have the tools and techniques to remove stuck fittings without damaging your tile, plumbing, or wall." },
                { q: "What shower head do you recommend?", a: "It depends on your preferences. For water pressure, we recommend Speakman or high-pressure Moen models. For luxury, a large rain head from Delta or Kohler is popular. We can install any brand you purchase." }
            ]}
            relatedServices={[
                { title: "Faucets & Fixtures", href: "/faucet-fixtures-orlando/" },
                { title: "Faucet Replacement", href: "/faucet-replacement-orlando/" },
                { title: "Toilet Repair", href: "/toilet-repair-orlando/" },
                { title: "Bath Remodel", href: "/bath-remodel-orlando/" },
                { title: "Garbage Disposal", href: "/garbage-disposal-installation-orlando/" }
            ]}
            startingPrice="Shower head replacement starts at $65"
            statsText="Licensed • Insured • Drip-Free Guarantee"
        />
    );
}
