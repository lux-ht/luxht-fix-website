import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Drywall Hole Repair in Orlando, FL | LUXHT Fix',
    description: 'Professional drywall hole repair in Orlando. Small nail holes to large access cuts fixed with seamless texture matching. Serving Winter Park, Windermere, Dr. Phillips & College Park.',
    alternates: { canonical: 'https://fix.luxht.com/drywall-hole-repair-orlando/' },
    openGraph: {
        title: 'Drywall Hole Repair in Orlando, FL | LUXHT Fix',
        description: 'Professional drywall hole repair in Orlando. From small nail holes to large access cuts — seamless results.',
        url: 'https://fix.luxht.com/drywall-hole-repair-orlando/',
        type: 'website',
        siteName: 'LUXHT Fix',
    },
};

export default function DrywallHoleRepairPage() {
    return (
        <ServicePageTemplate
            serviceName="Drywall Hole Repair"
            slug="drywall-hole-repair-orlando"
            neighborhoods={["Winter Park", "Windermere", "Dr. Phillips", "College Park"]}
            parentCategory="Drywall Services"
            parentSlug="drywall-orlando"
            heroSubtitle="From small nail holes to large cutouts — repaired clean and fast."
            heroDescription="Seamless texture matching on every repair."
            introParagraph="Holes in your drywall happen — doorknobs, accidental impacts, plumbing access cuts, and furniture scrapes all leave their mark. LUXHT Fix handles drywall hole repairs of every size in Orlando homes. We use California patches, backing boards, and precision compound work to restore your wall to its original condition. Every repair is finished with texture matching so the fix is invisible."
            serviceDetails={[
                "Small nail and screw hole filling",
                "Medium holes from doorknobs and furniture",
                "Large holes from plumbing or electrical access",
                "California patch technique for clean repairs",
                "Backing board installation for structural integrity",
                "Texture matching to blend with surrounding wall"
            ]}
            processSteps={[
                "Assess hole size and surrounding wall condition",
                "Cut clean edges and install backing support if needed",
                "Apply patch and build compound in precise layers",
                "Match existing wall texture perfectly",
                "Sand smooth for a paint-ready finish",
                "Clean workspace and protect your floors"
            ]}
            whyChooseUs={[
                "Drywall hole repair specialists with 500+ repairs completed",
                "All hole sizes: nail holes to large cutouts",
                "Seamless texture matching guaranteed",
                "Same-week service in most Orlando areas",
                "No mess left behind — we protect and clean",
                "Licensed, insured, and background-checked"
            ]}
            faqs={[
                { q: "How much does it cost to fix a hole in drywall in Orlando?", a: "Small nail holes can be repaired for as little as $75, while larger holes from doorknobs or access cuts typically range from $150 to $350. Text us a photo at (407) 720-7476 for an exact quote." },
                { q: "Can you repair large holes in drywall?", a: "Yes. We repair holes of any size using professional techniques including California patches and backing board installations. Even large plumbing or electrical access cuts can be repaired to look like new." },
                { q: "How long does a drywall hole repair take?", a: "Most small to medium hole repairs are completed in 1-2 hours. Large holes requiring backing board installation may take 2-4 hours including drying time." },
                { q: "Will the repair be visible after it's done?", a: "No. Our texture-matching techniques ensure the repaired area blends seamlessly with the surrounding wall. Most homeowners can't find the repair once it's finished and painted." }
            ]}
            relatedServices={[
                { title: "Drywall Repair", href: "/drywall-orlando/" },
                { title: "Drywall Crack Repair", href: "/drywall-crack-repair-orlando/" },
                { title: "Water Damage Drywall", href: "/water-damage-drywall-repair-orlando/" },
                { title: "Texture Matching", href: "/texture-matching-orlando/" },
                { title: "Door Handle Replacement", href: "/door-handle-replacement-orlando/" }
            ]}
            startingPrice="Hole repairs start at $75"
            statsText="Licensed • Insured • 500+ Holes Repaired in Orlando"
        />
    );
}
