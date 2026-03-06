import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Deadbolt Installation in Orlando, FL | LUXHT Fix',
    description: 'Professional deadbolt installation in Orlando. Single and double cylinder deadbolts installed for maximum security. Serving Winter Park, Maitland, Ocoee & Apopka.',
    alternates: { canonical: 'https://fix.luxht.com/deadbolt-installation-orlando/' },
    openGraph: {
        title: 'Deadbolt Installation in Orlando, FL | LUXHT Fix',
        description: 'Deadbolt installation in Orlando. Single and double cylinder deadbolts for maximum home security.',
        url: 'https://fix.luxht.com/deadbolt-installation-orlando/',
        type: 'website',
        siteName: 'LUXHT Fix',
    },
};

export default function DeadboltInstallationPage() {
    return (
        <ServicePageTemplate
            serviceName="Deadbolt Installation"
            slug="deadbolt-installation-orlando"
            neighborhoods={["Winter Park", "Maitland", "Ocoee", "Apopka"]}
            parentCategory="Door and Lock Services"
            parentSlug="door-lock-trim-orlando"
            heroSubtitle="High-security deadbolt installation for your Orlando home's protection."
            heroDescription="Single cylinder, double cylinder, and smart deadbolts available."
            introParagraph="A quality deadbolt is the most effective single upgrade you can make for your home's security. LUXHT Fix installs all types of deadbolts — from traditional single and double cylinder locks to modern smart deadbolts with keypad and smartphone access. We work with all major brands including Schlage, Kwikset, Yale, and August. Our technicians ensure proper alignment, smooth operation, and a clean installation that matches your existing hardware."
            serviceDetails={[
                "Single cylinder deadbolt installation",
                "Double cylinder deadbolt installation",
                "Smart keypad deadbolt setup",
                "Existing deadbolt replacement and upgrade",
                "Door prep and boring for new deadbolt locations",
                "Key matching with existing locks"
            ]}
            processSteps={[
                "Assess door type and existing hardware",
                "Mark and measure for precise deadbolt placement",
                "Bore holes if installing a new deadbolt location",
                "Install deadbolt with proper alignment to strike plate",
                "Install reinforced strike plate with 3-inch screws",
                "Test operation with key, thumb turn, or keypad"
            ]}
            whyChooseUs={[
                "Security-focused deadbolt installation",
                "All major brands: Schlage, Kwikset, Yale, August",
                "Reinforced strike plates included for maximum security",
                "Smart deadbolt setup with smartphone integration",
                "Same-week service in most Orlando areas",
                "Licensed, insured, and background-checked"
            ]}
            faqs={[
                { q: "What's the best deadbolt for home security?", a: "For maximum security, we recommend Grade 1 or Grade 2 deadbolts from brands like Schlage or Kwikset. Smart deadbolts from Schlage Encode or August offer keypad convenience with strong security. LUXHT Fix can recommend the best option for your specific door and security needs." },
                { q: "How much does deadbolt installation cost in Orlando?", a: "Basic deadbolt installation starts at $95 including labor. Smart deadbolt installation with smartphone setup starts at $125. Hardware is not included but we can recommend and purchase the right lock for your needs." },
                { q: "Can you install a deadbolt on a door that doesn't have one?", a: "Yes. We bore new holes in your door and frame to add a deadbolt where none exists. This is common for interior and exterior doors that only have a knob lock." },
                { q: "Do you install reinforced strike plates?", a: "Yes. Every deadbolt installation includes a reinforced strike plate with 3-inch screws that anchor into the door frame studs, not just the trim. This is critical for preventing kick-in break-ins." }
            ]}
            relatedServices={[
                { title: "Door, Lock & Trim", href: "/door-lock-trim-orlando/" },
                { title: "Smart Lock Installation", href: "/smart-lock-installation-orlando/" },
                { title: "Door Handle Replacement", href: "/door-handle-replacement-orlando/" },
                { title: "Door Alignment", href: "/door-alignment-orlando/" },
                { title: "Smart Home Installation", href: "/smart-home-installation-orlando/" }
            ]}
            startingPrice="Deadbolt installation starts at $95"
            statsText="Licensed • Insured • Security-Focused"
        />
    );
}
