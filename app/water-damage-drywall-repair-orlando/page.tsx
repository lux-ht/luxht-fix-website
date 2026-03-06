import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Water Damage Drywall Repair in Orlando, FL | LUXHT Fix',
    description: 'Professional water damage drywall repair in Orlando. We assess moisture, remove damaged sections, prevent mold, and restore walls. Serving Maitland, Altamonte Springs, Winter Park & Casselberry.',
    alternates: { canonical: 'https://fix.luxht.com/water-damage-drywall-repair-orlando/' },
    openGraph: {
        title: 'Water Damage Drywall Repair in Orlando, FL | LUXHT Fix',
        description: 'Water-damaged drywall repaired professionally in Orlando. Moisture assessment, mold prevention & seamless restoration.',
        url: 'https://fix.luxht.com/water-damage-drywall-repair-orlando/',
        type: 'website',
        siteName: 'LUXHT Fix',
    },
};

export default function WaterDamageDrywallPage() {
    return (
        <ServicePageTemplate
            serviceName="Water Damage Drywall Repair"
            slug="water-damage-drywall-repair-orlando"
            neighborhoods={["Maitland", "Altamonte Springs", "Winter Park", "Casselberry"]}
            parentCategory="Drywall Services"
            parentSlug="drywall-orlando"
            heroSubtitle="Water-stained, bubbling, or crumbling drywall restored to like-new condition."
            heroDescription="Moisture assessment and mold prevention included."
            introParagraph="Orlando's humid climate and frequent storms make water damage drywall repair one of our most requested services. Whether from a roof leak, burst pipe, or AC condensation, water-damaged drywall must be handled quickly and correctly to prevent mold growth and structural deterioration. LUXHT Fix assesses moisture levels, removes compromised sections, ensures complete drying, and rebuilds your wall with professional-grade materials."
            serviceDetails={[
                "Moisture level assessment before repair",
                "Removal of water-damaged drywall sections",
                "Mold inspection and prevention treatment",
                "New drywall installation and taping",
                "Complete texture matching to surrounding walls",
                "Ceiling water damage repair"
            ]}
            processSteps={[
                "Assess extent of water damage and check moisture levels",
                "Identify and confirm water source has been addressed",
                "Remove all compromised drywall — we don't patch over moisture",
                "Inspect for mold and treat affected areas",
                "Install new drywall sections with proper backing",
                "Tape, mud, and texture match for invisible repair",
                "Final moisture check to ensure complete drying"
            ]}
            whyChooseUs={[
                "Water damage drywall specialists in Orlando's humid climate",
                "Moisture assessment before every repair",
                "Mold prevention included at no extra cost",
                "We don't patch over wet drywall — we replace it properly",
                "Same-week emergency service available",
                "Licensed, insured, and background-checked"
            ]}
            faqs={[
                { q: "Should I repair or replace water-damaged drywall?", a: "It depends on the extent of the damage. Small stains may only need surface treatment, but drywall that's soft, bubbling, or crumbling must be cut out and replaced. LUXHT Fix assesses every situation and recommends the right approach — we never patch over hidden moisture." },
                { q: "How quickly should water-damaged drywall be repaired?", a: "As soon as possible. In Orlando's humidity, mold can begin growing within 24-48 hours of water exposure. We offer same-week emergency service for water damage situations." },
                { q: "How much does water damage drywall repair cost in Orlando?", a: "Costs vary based on the area affected, whether mold treatment is needed, and texture matching requirements. Small areas typically start at $250. Text us photos at (407) 720-7476 for an accurate quote." },
                { q: "Do you handle the mold too?", a: "We provide mold inspection and surface treatment as part of our drywall repair. For extensive mold remediation, we can refer you to a certified mold specialist and complete the drywall work once the area is clear." }
            ]}
            relatedServices={[
                { title: "Drywall Repair", href: "/drywall-orlando/" },
                { title: "Drywall Crack Repair", href: "/drywall-crack-repair-orlando/" },
                { title: "Drywall Hole Repair", href: "/drywall-hole-repair-orlando/" },
                { title: "Texture Matching", href: "/texture-matching-orlando/" },
                { title: "Toilet Repair", href: "/toilet-repair-orlando/" }
            ]}
            startingPrice="Water damage repairs start at $250"
            statsText="Licensed • Insured • Emergency Service Available"
        />
    );
}
