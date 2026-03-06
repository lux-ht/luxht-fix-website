import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Smart Lock Installation in Orlando, FL | LUXHT Fix',
    description: 'Professional smart lock installation in Orlando. Schlage, August, Yale, and Kwikset smart locks installed with smartphone integration. Serving Lake Nona, Windermere, Winter Park & Baldwin Park.',
    alternates: { canonical: 'https://fix.luxht.com/smart-lock-installation-orlando/' },
    openGraph: {
        title: 'Smart Lock Installation in Orlando, FL | LUXHT Fix',
        description: 'Smart lock installation in Orlando. Keypad, fingerprint, and smartphone-controlled locks.',
        url: 'https://fix.luxht.com/smart-lock-installation-orlando/',
        type: 'website',
        siteName: 'LUXHT Fix',
    },
};

export default function SmartLockInstallationPage() {
    return (
        <ServicePageTemplate
            serviceName="Smart Lock Installation"
            slug="smart-lock-installation-orlando"
            neighborhoods={["Lake Nona", "Windermere", "Winter Park", "Baldwin Park"]}
            parentCategory="Smart Home Installation"
            parentSlug="smart-home-installation-orlando"
            heroSubtitle="Keyless entry with keypad, fingerprint, or smartphone control."
            heroDescription="All major brands installed and configured."
            introParagraph="Smart locks give you keyless convenience, remote access, and enhanced security for your Orlando home. LUXHT Fix installs all major smart lock brands — Schlage Encode, August, Yale, and Kwikset — with full smartphone app setup and integration. Whether you want keypad access for your family, temporary codes for guests and service workers, or fingerprint entry for maximum convenience, we handle the hardware installation and digital configuration in a single visit."
            serviceDetails={[
                "Schlage Encode installation and setup",
                "August smart lock with Wi-Fi bridge",
                "Yale Assure keypad lock installation",
                "Kwikset Halo smart lock setup",
                "Fingerprint lock installation",
                "Integration with Alexa, Google Home, or Apple HomeKit"
            ]}
            processSteps={[
                "Assess door compatibility and existing hardware",
                "Remove existing deadbolt or lock",
                "Install smart lock hardware with precise alignment",
                "Download and configure smartphone app",
                "Set up user codes, fingerprints, or access schedules",
                "Test physical and digital operation thoroughly"
            ]}
            whyChooseUs={[
                "Smart lock specialists — not just handymen",
                "All major brands: Schlage, August, Yale, Kwikset",
                "Full smartphone app setup and training",
                "Voice assistant integration (Alexa, Google, Siri)",
                "Same-week service in most Orlando areas",
                "Licensed, insured, and background-checked"
            ]}
            faqs={[
                { q: "Which smart lock is best for my home?", a: "It depends on your needs. Schlage Encode is our top pick for reliability and built-in Wi-Fi. August is great if you want to keep your existing key. Yale Assure integrates well with smart home systems. We can recommend the best option during your consultation." },
                { q: "Will a smart lock work with my existing door?", a: "Most smart locks fit standard door preparations. LUXHT Fix checks your door's thickness, bore hole size, and backset measurement before installation. In rare cases where modifications are needed, we handle that too." },
                { q: "How much does smart lock installation cost in Orlando?", a: "Installation labor starts at $95 for a straightforward swap. More complex installations requiring door modifications or multi-lock setups may range up to $175. The smart lock hardware is not included." },
                { q: "Can I still use a physical key with a smart lock?", a: "Most smart locks include a key override for emergencies. The August smart lock even converts your existing deadbolt, so you keep your current keys. We'll explain all the options available with your chosen lock." }
            ]}
            relatedServices={[
                { title: "Smart Home Installation", href: "/smart-home-installation-orlando/" },
                { title: "Smart Doorbell Installation", href: "/smart-doorbell-installation-orlando/" },
                { title: "Deadbolt Installation", href: "/deadbolt-installation-orlando/" },
                { title: "Door, Lock & Trim", href: "/door-lock-trim-orlando/" },
                { title: "Door Handle Replacement", href: "/door-handle-replacement-orlando/" }
            ]}
            startingPrice="Smart lock installation starts at $95"
            statsText="Licensed • Insured • 250+ Devices Installed"
        />
    );
}
