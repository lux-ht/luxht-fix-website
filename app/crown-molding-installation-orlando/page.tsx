import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Crown Molding Installation in Orlando, FL | LUXHT Fix',
    description: 'Professional crown molding installation in Orlando. Elegant ceiling trim for living rooms, bedrooms, and kitchens. Serving Windermere, Dr. Phillips, Winter Park & Celebration.',
    alternates: { canonical: 'https://fix.luxht.com/crown-molding-installation-orlando/' },
    openGraph: {
        title: 'Crown Molding Installation in Orlando, FL | LUXHT Fix',
        description: 'Crown molding installation in Orlando. Elegant ceiling trim with precise cuts.',
        url: 'https://fix.luxht.com/crown-molding-installation-orlando/',
        type: 'website',
        siteName: 'LUXHT Fix',
    },
};

export default function CrownMoldingPage() {
    return (
        <ServicePageTemplate
            serviceName="Crown Molding Installation"
            slug="crown-molding-installation-orlando"
            neighborhoods={["Windermere", "Dr. Phillips", "Winter Park", "Celebration"]}
            parentCategory="Door and Lock Services"
            parentSlug="door-lock-trim-orlando"
            heroSubtitle="Elegant ceiling trim that adds character and value to your home."
            heroDescription="Precise miter cuts and seamless joints for a polished finish."
            introParagraph="Crown molding transforms an ordinary room into an elegant space. LUXHT Fix installs crown molding throughout Orlando homes with the precision and attention to detail that this finishing touch demands. From traditional profiles in Winter Park Victorians to modern, clean-lined trim in new Celebration builds, we cut and fit crown molding with tight joints, smooth transitions, and paint-ready finishes. It's one of the highest-ROI cosmetic upgrades you can make."
            serviceDetails={[
                "Full-room crown molding installation",
                "Whole-house crown molding packages",
                "Traditional and modern profile options",
                "Inside and outside corner precision",
                "Caulking and paint-ready finishing",
                "Crown molding repair and replacement"
            ]}
            processSteps={[
                "Measure room perimeter and plan cut sequence",
                "Cut crown molding at precise compound angles",
                "Dry-fit pieces to verify tight joints at every corner",
                "Nail molding securely to wall studs and ceiling joists",
                "Fill nail holes and seams with professional-grade filler",
                "Caulk edges for seamless transition to wall and ceiling"
            ]}
            whyChooseUs={[
                "Crown molding specialists with compound angle expertise",
                "Tight joints and invisible seams",
                "Traditional and modern profiles available",
                "Clean caulking and paint-ready finish",
                "Whole-house packages for consistent look",
                "Licensed, insured, and background-checked"
            ]}
            faqs={[
                { q: "How much does crown molding installation cost in Orlando?", a: "Crown molding installation typically costs $5 to $10 per linear foot for labor, depending on profile size and room complexity. A standard living room runs $400 to $700. Whole-house packages receive volume discounts. Text us your room dimensions at (407) 720-7476." },
                { q: "What style of crown molding should I choose?", a: "For traditional Orlando homes, wider profiles (3.5\" to 5.25\") add classic elegance. For modern or contemporary homes, a simpler 2.5\" to 3.5\" profile provides clean lines. We can bring samples to help you decide." },
                { q: "Can you install crown molding on vaulted or angled ceilings?", a: "Yes. Vaulted and cathedral ceilings require specialized compound angle cutting that not all contractors can handle. LUXHT Fix has the experience and tools for these challenging installations." },
                { q: "Is crown molding worth the investment?", a: "Yes. Crown molding consistently ranks as one of the highest-ROI home improvements. It adds perceived value and elegance to every room, and buyers notice the difference." }
            ]}
            relatedServices={[
                { title: "Baseboard Installation", href: "/baseboard-installation-orlando/" },
                { title: "Door, Lock & Trim", href: "/door-lock-trim-orlando/" },
                { title: "Kitchen Refacing", href: "/kitchen-refacing-orlando/" },
                { title: "Bath Remodel", href: "/bath-remodel-orlando/" },
                { title: "Drywall Repair", href: "/drywall-orlando/" }
            ]}
            startingPrice="Crown molding from $5/linear foot"
            statsText="Licensed • Insured • Precision Craftsmanship"
        />
    );
}
