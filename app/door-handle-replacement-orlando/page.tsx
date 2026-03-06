import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Door Handle Replacement in Orlando, FL | LUXHT Fix',
    description: 'Professional door handle replacement in Orlando. Upgrade knobs, levers, and hardware for modern style and function. Serving Winter Park, Maitland, College Park & Thornton Park.',
    alternates: { canonical: 'https://fix.luxht.com/door-handle-replacement-orlando/' },
    openGraph: {
        title: 'Door Handle Replacement in Orlando, FL | LUXHT Fix',
        description: 'Door handle replacement in Orlando. Modern knobs, levers, and hardware upgrades.',
        url: 'https://fix.luxht.com/door-handle-replacement-orlando/',
        type: 'website',
        siteName: 'LUXHT Fix',
    },
};

export default function DoorHandleReplacementPage() {
    return (
        <ServicePageTemplate
            serviceName="Door Handle Replacement"
            slug="door-handle-replacement-orlando"
            neighborhoods={["Winter Park", "Maitland", "College Park", "Thornton Park"]}
            parentCategory="Door and Lock Services"
            parentSlug="door-lock-trim-orlando"
            heroSubtitle="Upgrade your door hardware for modern style and smooth function."
            heroDescription="Knobs, levers, and handlesets in any finish."
            introParagraph="Replacing door handles is one of the most impactful yet affordable upgrades you can make to your home. LUXHT Fix replaces outdated brass doorknobs with modern matte black, brushed nickel, or satin chrome hardware that transforms the look of every room. We handle interior and exterior handles, lever sets, entry handlesets, and privacy locks. Popular with Thornton Park and College Park homeowners refreshing their homes."
            serviceDetails={[
                "Interior knob and lever replacement",
                "Entry handleset installation",
                "Privacy lock replacement for bathrooms and bedrooms",
                "Passage knob replacement for closets and hallways",
                "Matching hardware finishes throughout the home",
                "Broken or loose handle repair"
            ]}
            processSteps={[
                "Remove existing hardware carefully",
                "Check door bore and latch alignment",
                "Install new handle with proper orientation",
                "Adjust strike plate for smooth latching",
                "Test lock function and key operation",
                "Repeat for all doors in the project"
            ]}
            whyChooseUs={[
                "Whole-house hardware upgrades in a single visit",
                "All finishes: matte black, brushed nickel, chrome, brass",
                "Interior and exterior handle expertise",
                "Precise alignment for smooth, quiet operation",
                "Bulk pricing for multi-door projects",
                "Licensed, insured, and background-checked"
            ]}
            faqs={[
                { q: "How much does door handle replacement cost?", a: "Labor for door handle replacement starts at $45 per door, with discounts for multi-door projects. Hardware costs vary based on brand and style — we can recommend options that fit your budget and aesthetic." },
                { q: "Can you replace all the door handles in my house?", a: "Yes. Whole-house hardware upgrades are one of our most popular services. We replace every knob and lever in a single visit, ensuring consistent finishes throughout. Most homes take 2-3 hours." },
                { q: "What finish should I choose for my door handles?", a: "Matte black and brushed nickel are the most popular choices in Orlando right now. Matte black gives a modern, bold look, while brushed nickel is versatile and hides fingerprints well. We can bring samples to help you decide." },
                { q: "Do you handle entry door handlesets?", a: "Yes. We install full entry handlesets including handle, deadbolt, and matching hardware. Popular brands include Schlage, Kwikset, and Baldwin." }
            ]}
            relatedServices={[
                { title: "Door, Lock & Trim", href: "/door-lock-trim-orlando/" },
                { title: "Deadbolt Installation", href: "/deadbolt-installation-orlando/" },
                { title: "Door Alignment", href: "/door-alignment-orlando/" },
                { title: "Smart Lock Installation", href: "/smart-lock-installation-orlando/" },
                { title: "Baseboard Installation", href: "/baseboard-installation-orlando/" }
            ]}
            startingPrice="Handle replacement starts at $45/door"
            statsText="Licensed • Insured • All Finishes Available"
        />
    );
}
