import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Fireplace TV Mounting in Orlando, FL | LUXHT Fix',
    description: 'Professional fireplace TV mounting in Orlando. Heat-safe installation with concealed cables and adjustable mounts. Serving Windermere, Dr. Phillips, Winter Park & Celebration.',
    alternates: { canonical: 'https://fix.luxht.com/fireplace-tv-mounting-orlando/' },
    openGraph: {
        title: 'Fireplace TV Mounting in Orlando, FL | LUXHT Fix',
        description: 'Fireplace TV mounting in Orlando. Heat-safe installation with adjustable mounts and hidden cables.',
        url: 'https://fix.luxht.com/fireplace-tv-mounting-orlando/',
        type: 'website',
        siteName: 'LUXHT Fix',
    },
};

export default function FireplaceTVMountingPage() {
    return (
        <ServicePageTemplate
            serviceName="Fireplace TV Mounting"
            slug="fireplace-tv-mounting-orlando"
            neighborhoods={["Windermere", "Dr. Phillips", "Winter Park", "Celebration"]}
            parentCategory="TV Mounting"
            parentSlug="tv-mounting-orlando"
            heroSubtitle="Heat-safe TV installation above your fireplace with optimal viewing angles."
            heroDescription="Adjustable mounts and concealed cables included."
            introParagraph="Mounting a TV above a fireplace requires specialized knowledge that general handymen often lack. Heat management, viewing angles, and cable routing are all more complex above a mantel. LUXHT Fix uses heat-rated mounting hardware, adjustable tilting mounts for comfortable viewing, and professional cable concealment through the mantel area. We work with gas, electric, and decorative fireplaces in homes throughout Orlando, from Windermere estates to Celebration townhomes."
            serviceDetails={[
                "Heat-rated mounting hardware and brackets",
                "Tilting and full-motion mounts for optimal viewing",
                "Cable concealment through mantel and wall",
                "Stone, brick, and drywall fireplace surrounds",
                "Soundbar integration above or below TV",
                "Mantel-mounted cable management solutions"
            ]}
            processSteps={[
                "Assess fireplace type, wall material, and heat output",
                "Recommend mount type (tilting preferred for viewing comfort)",
                "Locate studs or install appropriate masonry anchors",
                "Mount bracket with heat-rated, heavy-duty hardware",
                "Route cables through wall or behind mantel",
                "Level TV, adjust tilt angle, and test stability"
            ]}
            whyChooseUs={[
                "Specialized fireplace TV mounting experience",
                "Heat-safe hardware and proper clearance assessment",
                "Adjustable mounts for comfortable neck-level viewing",
                "All fireplace types: gas, electric, decorative",
                "Cable concealment through masonry included",
                "Licensed, insured, and background-checked"
            ]}
            faqs={[
                { q: "Is it safe to mount a TV above a fireplace?", a: "Yes, when done properly. LUXHT Fix assesses heat output and ensures proper clearance between the fireplace and TV. We use heat-rated mounting hardware and recommend adjustable mounts that angle the TV downward for comfortable viewing." },
                { q: "What type of mount is best above a fireplace?", a: "We recommend tilting or full-motion mounts for fireplace installations. These allow you to angle the TV downward, which reduces neck strain and glare. Fixed mounts result in an uncomfortable viewing angle from most seating positions." },
                { q: "How do you hide cables above a fireplace?", a: "We route cables behind the wall, through the mantel, or use premium cable covers depending on the wall material. For brick or stone surrounds, we use paintable surface covers that blend with the masonry." },
                { q: "How much does fireplace TV mounting cost?", a: "Fireplace TV mounting typically ranges from $200 to $450 depending on wall material, mount type, and cable concealment method. Text us a photo of your fireplace at (407) 720-7476 for a personalized quote." }
            ]}
            relatedServices={[
                { title: "TV Mounting", href: "/tv-mounting-orlando/" },
                { title: "TV Cable Concealment", href: "/tv-cable-concealment-orlando/" },
                { title: "Soundbar Mounting", href: "/soundbar-mounting-orlando/" },
                { title: "Outdoor TV Mounting", href: "/outdoor-tv-mounting-orlando/" },
                { title: "Drywall Repair", href: "/drywall-orlando/" }
            ]}
            startingPrice="Fireplace mounting starts at $200"
            statsText="Licensed • Insured • Heat-Safe Installation"
        />
    );
}
