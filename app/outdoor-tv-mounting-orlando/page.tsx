import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Outdoor TV Mounting in Orlando, FL | LUXHT Fix',
    description: 'Professional outdoor TV mounting in Orlando. Weather-safe patio and lanai installations with weatherproof hardware. Serving Windermere, Dr. Phillips, Winter Park & Ocoee.',
    alternates: { canonical: 'https://fix.luxht.com/outdoor-tv-mounting-orlando/' },
    openGraph: {
        title: 'Outdoor TV Mounting in Orlando, FL | LUXHT Fix',
        description: 'Outdoor TV mounting in Orlando. Weather-safe patio installations with durable hardware.',
        url: 'https://fix.luxht.com/outdoor-tv-mounting-orlando/',
        type: 'website',
        siteName: 'LUXHT Fix',
    },
};

export default function OutdoorTVMountingPage() {
    return (
        <ServicePageTemplate
            serviceName="Outdoor TV Mounting"
            slug="outdoor-tv-mounting-orlando"
            neighborhoods={["Windermere", "Dr. Phillips", "Winter Park", "Ocoee"]}
            parentCategory="TV Mounting"
            parentSlug="tv-mounting-orlando"
            heroSubtitle="Weather-safe TV installation for your patio, lanai, or outdoor living space."
            heroDescription="Built for Orlando's climate with durable, rust-resistant hardware."
            introParagraph="Orlando's year-round outdoor living makes patio and lanai TV setups incredibly popular. LUXHT Fix installs outdoor TVs with weather-resistant hardware, proper GFCI-protected power sources, and cable management designed to withstand Florida's humidity, rain, and heat. Whether you're creating a poolside entertainment area in Windermere, a covered lanai setup in Dr. Phillips, or a backyard sports viewing station in Ocoee, we ensure your outdoor TV is secure and built to last."
            serviceDetails={[
                "Covered patio and lanai TV mounting",
                "Weather-resistant mounting brackets and hardware",
                "GFCI-protected outdoor power solutions",
                "Weatherproof cable management",
                "Outdoor-rated TV enclosures when needed",
                "Pergola and post-mounted installations"
            ]}
            processSteps={[
                "Assess outdoor location for weather exposure and viewing angles",
                "Select appropriate weather-resistant hardware",
                "Install mount on stucco, brick, concrete, or post structure",
                "Route cables with weatherproof conduit or covers",
                "Ensure GFCI power protection for outdoor safety",
                "Test installation and verify stability in wind conditions"
            ]}
            whyChooseUs={[
                "Outdoor TV specialists for Orlando's climate",
                "Rust-resistant, weather-rated hardware",
                "GFCI safety compliance for outdoor installations",
                "Experience with patio, lanai, poolside, and pergola setups",
                "Same-week service in most Orlando areas",
                "Licensed, insured, and background-checked"
            ]}
            faqs={[
                { q: "Can a regular TV be mounted outdoors?", a: "A regular TV can be used in a fully covered and screened area like a lanai. For exposed patios, we recommend an outdoor-rated TV or a weatherproof TV enclosure. LUXHT Fix can advise on the best option for your specific setup." },
                { q: "What about Florida's humidity and rain?", a: "We use rust-resistant stainless steel and galvanized hardware designed for Florida's conditions. Cable runs use weatherproof conduit, and we ensure all power connections are GFCI-protected for safety." },
                { q: "Can you mount a TV on a patio post or pergola?", a: "Yes. We mount TVs on posts, pergola beams, and other outdoor structures using specialized brackets that provide secure attachment without compromising the structure's integrity." },
                { q: "How much does outdoor TV mounting cost in Orlando?", a: "Outdoor TV mounting starts at $175 and varies based on mounting surface, cable concealment, and power requirements. Text us a photo of your outdoor space at (407) 720-7476 for a specific quote." }
            ]}
            relatedServices={[
                { title: "TV Mounting", href: "/tv-mounting-orlando/" },
                { title: "TV Cable Concealment", href: "/tv-cable-concealment-orlando/" },
                { title: "Fireplace TV Mounting", href: "/fireplace-tv-mounting-orlando/" },
                { title: "Soundbar Mounting", href: "/soundbar-mounting-orlando/" },
                { title: "Deck Building", href: "/deck-building-orlando/" }
            ]}
            startingPrice="Outdoor mounting starts at $175"
            statsText="Licensed • Insured • Weather-Safe Installation"
        />
    );
}
