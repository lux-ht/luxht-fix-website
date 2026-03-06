import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Baseboard Installation in Orlando, FL | LUXHT Fix',
    description: 'Professional baseboard installation in Orlando. New baseboards, replacements, and repairs with precise cuts and clean caulking. Serving Winter Park, Maitland, Baldwin Park & Oviedo.',
    alternates: { canonical: 'https://fix.luxht.com/baseboard-installation-orlando/' },
    openGraph: {
        title: 'Baseboard Installation in Orlando, FL | LUXHT Fix',
        description: 'Baseboard installation in Orlando. Precise cuts, clean caulking, and professional finishing.',
        url: 'https://fix.luxht.com/baseboard-installation-orlando/',
        type: 'website',
        siteName: 'LUXHT Fix',
    },
};

export default function BaseboardInstallationPage() {
    return (
        <ServicePageTemplate
            serviceName="Baseboard Installation"
            slug="baseboard-installation-orlando"
            neighborhoods={["Winter Park", "Maitland", "Baldwin Park", "Oviedo"]}
            parentCategory="Door and Lock Services"
            parentSlug="door-lock-trim-orlando"
            heroSubtitle="Clean, precise baseboard installation that finishes your floors perfectly."
            heroDescription="New installations, replacements, and repairs."
            introParagraph="New baseboards are essential after flooring installation, renovation work, or when updating your home's look. LUXHT Fix provides precise baseboard installation with tight miter cuts, clean caulking, and paint-ready finishing. We match existing profiles or install new styles to complement your floors. Whether you need baseboards after a full floor replacement in Baldwin Park or are refreshing trim in a Maitland home, our cuts are exact and our finish is clean."
            serviceDetails={[
                "New baseboard installation throughout the home",
                "Post-flooring baseboard replacement",
                "Baseboard profile matching for partial replacements",
                "Quarter round and shoe molding installation",
                "Caulking and paint preparation",
                "Damaged baseboard repair and touch-up"
            ]}
            processSteps={[
                "Measure all wall lengths and inside/outside corners",
                "Cut baseboards with precision miter saw",
                "Dry-fit pieces to verify perfect alignment",
                "Nail baseboards securely to wall studs",
                "Fill nail holes and gaps with wood filler",
                "Caulk top edge for a seamless finish against the wall"
            ]}
            whyChooseUs={[
                "Precision miter cuts for tight corners",
                "Profile matching for existing baseboard styles",
                "Clean caulking and paint-ready finishing",
                "Paired with flooring installation for one-stop service",
                "Same-week service in most Orlando areas",
                "Licensed, insured, and background-checked"
            ]}
            faqs={[
                { q: "How much does baseboard installation cost in Orlando?", a: "Baseboard installation typically costs $3 to $6 per linear foot for labor, depending on profile complexity and corner count. A typical 1,500 sq ft home runs $600 to $1,200 for full baseboard installation. Text us your room measurements at (407) 720-7476 for an exact quote." },
                { q: "Do I need new baseboards after new flooring?", a: "In most cases, yes. Removing old flooring often damages existing baseboards, and new flooring may sit at a different height. New baseboards ensure a clean transition between your floor and wall." },
                { q: "Can you match my existing baseboard profile?", a: "Yes. We carry common profiles and can source specialty profiles from local suppliers. For partial replacements, matching the existing style is essential for a seamless look." },
                { q: "Do you paint the baseboards after installation?", a: "We install baseboards paint-ready — nail holes filled, caulked, and sanded smooth. We can paint them as an add-on service, or leave them ready for your painter." }
            ]}
            relatedServices={[
                { title: "Crown Molding Installation", href: "/crown-molding-installation-orlando/" },
                { title: "Flooring Installation", href: "/flooring-installation-orlando/" },
                { title: "Door, Lock & Trim", href: "/door-lock-trim-orlando/" },
                { title: "Door Handle Replacement", href: "/door-handle-replacement-orlando/" },
                { title: "Door Alignment", href: "/door-alignment-orlando/" }
            ]}
            startingPrice="Baseboard installation from $3/linear foot"
            statsText="Licensed • Insured • Precision Cuts"
        />
    );
}
