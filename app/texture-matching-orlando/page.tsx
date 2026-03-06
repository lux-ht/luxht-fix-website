import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Texture Matching in Orlando, FL | LUXHT Fix',
    description: 'Expert drywall texture matching in Orlando. We match orange peel, knockdown, smooth, and skip trowel finishes for invisible repairs. Serving Winter Park, Maitland, Baldwin Park & Thornton Park.',
    alternates: { canonical: 'https://fix.luxht.com/texture-matching-orlando/' },
    openGraph: {
        title: 'Texture Matching in Orlando, FL | LUXHT Fix',
        description: 'Expert drywall texture matching in Orlando. Orange peel, knockdown, smooth & skip trowel finishes matched perfectly.',
        url: 'https://fix.luxht.com/texture-matching-orlando/',
        type: 'website',
        siteName: 'LUXHT Fix',
    },
};

export default function TextureMatchingPage() {
    return (
        <ServicePageTemplate
            serviceName="Texture Matching"
            slug="texture-matching-orlando"
            neighborhoods={["Winter Park", "Maitland", "Baldwin Park", "Thornton Park"]}
            parentCategory="Drywall Services"
            parentSlug="drywall-orlando"
            heroSubtitle="Orange peel, knockdown, smooth, and skip trowel — matched perfectly."
            heroDescription="The finishing touch that makes drywall repairs invisible."
            introParagraph="Texture matching is the difference between a visible patch and an invisible repair. LUXHT Fix specializes in replicating your existing wall texture so that repaired areas blend seamlessly with the rest of the wall. Orlando homes feature a wide variety of textures — from the orange peel common in newer builds to the knockdown and hand-troweled finishes found in Winter Park and Thornton Park homes. Our technicians are trained to identify and replicate each style using professional-grade tools and techniques."
            serviceDetails={[
                "Orange peel texture matching",
                "Knockdown texture replication",
                "Smooth wall finish restoration",
                "Skip trowel and hand-applied textures",
                "Ceiling texture matching",
                "Full-wall retexturing when needed"
            ]}
            processSteps={[
                "Identify existing texture type and pattern",
                "Prepare surface with proper compound application",
                "Apply texture using matching technique and tools",
                "Allow proper drying time for consistent finish",
                "Sand and refine to match surrounding wall precisely",
                "Leave surface paint-ready with invisible transition"
            ]}
            whyChooseUs={[
                "Texture matching is our specialty — not an afterthought",
                "Experience with all Orlando home texture styles",
                "Professional-grade spray and hand-application tools",
                "We match even difficult vintage textures",
                "Satisfaction guaranteed on every texture match",
                "Licensed, insured, and background-checked"
            ]}
            faqs={[
                { q: "Can you match my wall's exact texture?", a: "Yes. LUXHT Fix matches all common textures including orange peel, knockdown, smooth, skip trowel, and custom patterns. We use professional-grade equipment and techniques to replicate your existing texture precisely." },
                { q: "Why does texture matching matter for drywall repairs?", a: "Without proper texture matching, even a perfectly patched hole or crack will be visible as a smooth spot on a textured wall. Texture matching is what makes a repair truly invisible and maintains your home's value." },
                { q: "How much does drywall texture matching cost?", a: "Texture matching is typically included in our drywall repair pricing. Standalone retexturing projects start at $150 for small areas. Contact us for a specific quote based on your needs." },
                { q: "Can you retexture an entire wall or ceiling?", a: "Yes. For rooms where repairs are extensive or you want a fresh, uniform texture, we can retexture entire walls or ceilings. This is common after water damage repairs or when updating older homes." }
            ]}
            relatedServices={[
                { title: "Drywall Repair", href: "/drywall-orlando/" },
                { title: "Drywall Crack Repair", href: "/drywall-crack-repair-orlando/" },
                { title: "Drywall Hole Repair", href: "/drywall-hole-repair-orlando/" },
                { title: "Water Damage Drywall", href: "/water-damage-drywall-repair-orlando/" },
                { title: "Bath Remodel", href: "/bath-remodel-orlando/" }
            ]}
            startingPrice="Texture matching starts at $150"
            statsText="Licensed • Insured • Texture Specialists"
        />
    );
}
