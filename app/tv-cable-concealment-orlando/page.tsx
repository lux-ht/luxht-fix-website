import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'TV Cable Concealment in Orlando, FL | LUXHT Fix',
    description: 'Professional TV cable concealment in Orlando. In-wall cable routing and surface covers for a clean, wire-free look. Serving Winter Park, Dr. Phillips, Lake Nona & Windermere.',
    alternates: { canonical: 'https://fix.luxht.com/tv-cable-concealment-orlando/' },
    openGraph: {
        title: 'TV Cable Concealment in Orlando, FL | LUXHT Fix',
        description: 'Professional TV cable concealment in Orlando. In-wall routing and surface covers for a clean setup.',
        url: 'https://fix.luxht.com/tv-cable-concealment-orlando/',
        type: 'website',
        siteName: 'LUXHT Fix',
    },
};

export default function TVCableConcealmentPage() {
    return (
        <ServicePageTemplate
            serviceName="TV Cable Concealment"
            slug="tv-cable-concealment-orlando"
            neighborhoods={["Winter Park", "Dr. Phillips", "Lake Nona", "Windermere"]}
            parentCategory="TV Mounting"
            parentSlug="tv-mounting-orlando"
            heroSubtitle="Hidden wires for a clean, professional look behind your mounted TV."
            heroDescription="In-wall routing and premium surface covers available."
            introParagraph="Nothing ruins a sleek mounted TV like a tangle of visible cables hanging down the wall. LUXHT Fix provides professional cable concealment solutions for Orlando homeowners who want a clean, polished look. We offer both in-wall cable routing (the gold standard) and premium surface cable covers, depending on your wall type and preferences. Every installation is done to code with proper low-voltage wiring techniques."
            serviceDetails={[
                "In-wall HDMI and cable routing",
                "Recessed outlet installation behind TV",
                "Premium surface cable cover systems",
                "Power bridge solutions for code compliance",
                "Multi-cable organization for complex setups",
                "Cable concealment for existing TV mounts"
            ]}
            processSteps={[
                "Assess wall type and determine best concealment method",
                "Plan cable routing path for shortest, cleanest run",
                "Cut access points and install low-voltage brackets",
                "Route cables through wall cavity or install surface covers",
                "Install recessed power outlet if needed (via licensed electrician)",
                "Test all connections and organize remaining cables"
            ]}
            whyChooseUs={[
                "Cable concealment specialists — not an afterthought",
                "In-wall routing and surface cover options",
                "Code-compliant power solutions",
                "Clean cuts with drywall repair included",
                "Same-week service in most Orlando areas",
                "Licensed, insured, and background-checked"
            ]}
            faqs={[
                { q: "Can you hide TV cables inside the wall?", a: "Yes. In-wall cable routing is our most popular service. We route HDMI, audio, and other low-voltage cables through the wall cavity for a completely wire-free look. Power cables require a code-compliant power bridge or recessed outlet solution." },
                { q: "How much does TV cable concealment cost in Orlando?", a: "Surface cable covers start at $75, while in-wall cable routing typically ranges from $150 to $300 depending on wall type and number of cables. Text us a photo of your setup at (407) 720-7476 for an exact quote." },
                { q: "Can you conceal cables on a brick or concrete wall?", a: "Yes. For brick and concrete walls, we use premium surface cable covers that mount securely and can be painted to match your wall color. These provide a clean look without drilling through masonry." },
                { q: "Can you add cable concealment to an already-mounted TV?", a: "Absolutely. We frequently add cable concealment to existing TV installations. We can work around your current mount without needing to remove the TV in most cases." }
            ]}
            relatedServices={[
                { title: "TV Mounting", href: "/tv-mounting-orlando/" },
                { title: "Fireplace TV Mounting", href: "/fireplace-tv-mounting-orlando/" },
                { title: "Soundbar Mounting", href: "/soundbar-mounting-orlando/" },
                { title: "Outdoor TV Mounting", href: "/outdoor-tv-mounting-orlando/" },
                { title: "Smart Home Installation", href: "/smart-home-installation-orlando/" }
            ]}
            startingPrice="Cable concealment starts at $75"
            statsText="Licensed • Insured • 300+ Installs in Orlando"
        />
    );
}
