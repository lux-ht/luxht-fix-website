import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Drywall Crack Repair in Orlando, FL | LUXHT Fix',
    description: 'Expert drywall crack repair in Orlando. We fix settlement cracks, stress cracks, and hairline fractures with seamless texture matching. Serving Winter Park, Maitland, Oviedo & Lake Nona.',
    alternates: { canonical: 'https://fix.luxht.com/drywall-crack-repair-orlando/' },
    openGraph: {
        title: 'Drywall Crack Repair in Orlando, FL | LUXHT Fix',
        description: 'Expert drywall crack repair in Orlando. Settlement cracks, stress fractures & hairline cracks fixed with seamless texture matching.',
        url: 'https://fix.luxht.com/drywall-crack-repair-orlando/',
        type: 'website',
        siteName: 'LUXHT Fix',
    },
};

export default function DrywallCrackRepairPage() {
    return (
        <ServicePageTemplate
            serviceName="Drywall Crack Repair"
            slug="drywall-crack-repair-orlando"
            neighborhoods={["Winter Park", "Maitland", "Oviedo", "Lake Nona"]}
            parentCategory="Drywall Services"
            parentSlug="drywall-orlando"
            heroSubtitle="Settlement cracks, stress fractures, and hairline cracks repaired seamlessly."
            heroDescription="Same-week service available throughout Central Florida."
            introParagraph="Cracks in drywall are one of the most common issues Orlando homeowners face. Whether caused by foundation settling, temperature changes, or natural building movement, LUXHT Fix specializes in identifying the root cause and delivering permanent repairs. We don't just patch over the problem — we address the underlying cause, reinforce the area, and apply professional-grade compound to create an invisible repair."
            serviceDetails={[
                "Settlement crack repair from foundation movement",
                "Stress cracks around doors and windows",
                "Hairline crack filling and refinishing",
                "Corner bead repair and replacement",
                "Tape joint failure repair",
                "Ceiling crack repair"
            ]}
            processSteps={[
                "Inspect cracks to determine root cause (settling, moisture, structural)",
                "Clean and prepare crack edges for maximum adhesion",
                "Apply mesh tape or paper tape depending on crack type",
                "Build up compound in thin layers for a seamless finish",
                "Match existing wall texture (orange peel, knockdown, or smooth)",
                "Sand smooth and leave surface paint-ready"
            ]}
            whyChooseUs={[
                "Drywall crack specialists — not general contractors",
                "We diagnose root cause before repairing",
                "Seamless texture matching guaranteed",
                "Same-week service in most Orlando areas",
                "Upfront pricing with photo estimates",
                "Licensed, insured, and background-checked"
            ]}
            faqs={[
                { q: "Why do cracks keep appearing in my drywall?", a: "Recurring drywall cracks are usually caused by foundation settling, seasonal temperature changes, or improper original installation. LUXHT Fix inspects for the root cause before repairing so the fix lasts. In older Orlando homes, settling is the most common cause." },
                { q: "Can you fix cracks without repainting the whole wall?", a: "Yes. Our texture-matching techniques allow us to blend the repair area with the surrounding wall so only a small section needs touch-up paint, not the entire wall." },
                { q: "How much does drywall crack repair cost in Orlando?", a: "Most crack repairs range from $150 to $400 depending on length, severity, and texture matching needs. We provide exact quotes after seeing photos of your cracks — just text us at (407) 720-7476." },
                { q: "How long does drywall crack repair take?", a: "Most crack repairs are completed in 2-3 hours including drying and texture matching. Extensive cracking across multiple walls may take a full day." }
            ]}
            relatedServices={[
                { title: "Drywall Repair", href: "/drywall-orlando/" },
                { title: "Drywall Hole Repair", href: "/drywall-hole-repair-orlando/" },
                { title: "Water Damage Drywall", href: "/water-damage-drywall-repair-orlando/" },
                { title: "Texture Matching", href: "/texture-matching-orlando/" },
                { title: "Door Alignment", href: "/door-alignment-orlando/" }
            ]}
            startingPrice="Most crack repairs start at $150"
            statsText="Licensed • Insured • 500+ Orlando Homes Served"
        />
    );
}
