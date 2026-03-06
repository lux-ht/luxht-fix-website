import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Smart Doorbell Installation in Orlando, FL | LUXHT Fix',
    description: 'Professional smart doorbell installation in Orlando. Ring, Nest, and Arlo doorbells installed with app setup and Wi-Fi configuration. Serving Lake Nona, Windermere, Winter Park & Maitland.',
    alternates: { canonical: 'https://fix.luxht.com/smart-doorbell-installation-orlando/' },
    openGraph: {
        title: 'Smart Doorbell Installation in Orlando, FL | LUXHT Fix',
        description: 'Smart doorbell installation in Orlando. Ring, Nest, and Arlo installed and configured.',
        url: 'https://fix.luxht.com/smart-doorbell-installation-orlando/',
        type: 'website',
        siteName: 'LUXHT Fix',
    },
};

export default function SmartDoorbellPage() {
    return (
        <ServicePageTemplate
            serviceName="Smart Doorbell Installation"
            slug="smart-doorbell-installation-orlando"
            neighborhoods={["Lake Nona", "Windermere", "Winter Park", "Maitland"]}
            parentCategory="Smart Home Installation"
            parentSlug="smart-home-installation-orlando"
            heroSubtitle="See who's at your door from anywhere with a professional doorbell installation."
            heroDescription="Ring, Nest, and Arlo doorbells installed and configured."
            introParagraph="Smart doorbells are one of the most popular home security upgrades in Orlando, and LUXHT Fix installs them properly so they work reliably from day one. Whether you've purchased a Ring Video Doorbell, Google Nest Doorbell, or Arlo system, we handle the physical installation and complete digital setup — including app configuration, motion zone settings, notification preferences, and Wi-Fi connectivity. We work with both battery-powered and hardwired models."
            serviceDetails={[
                "Ring Video Doorbell installation (all models)",
                "Google Nest Doorbell setup",
                "Arlo Video Doorbell installation",
                "Battery-powered and hardwired models",
                "Existing doorbell wiring assessment",
                "Transformer upgrade when needed for hardwired models"
            ]}
            processSteps={[
                "Assess existing doorbell wiring and power supply",
                "Remove old doorbell or prepare mounting surface",
                "Install mounting bracket at optimal height and angle",
                "Connect wiring or install battery-powered unit",
                "Download app and configure on your smartphone",
                "Set up motion zones, notifications, and recording preferences"
            ]}
            whyChooseUs={[
                "Smart doorbell specialists with 250+ installations",
                "Ring, Nest, and Arlo certified installation techniques",
                "Full app setup and personalized training",
                "Hardwired and battery-powered expertise",
                "Same-week service in most Orlando areas",
                "Licensed, insured, and background-checked"
            ]}
            faqs={[
                { q: "Can I install a smart doorbell myself?", a: "Battery-powered models are simple DIY installs, but hardwired models require working with doorbell wiring and potentially upgrading your transformer. LUXHT Fix handles both types and ensures everything is configured correctly for reliable operation." },
                { q: "How much does smart doorbell installation cost in Orlando?", a: "Installation starts at $75 for battery-powered models and $95 to $150 for hardwired models (depending on wiring condition). If a transformer upgrade is needed, that adds $50 to $100. Doorbell hardware is not included." },
                { q: "Do I need existing doorbell wiring for a smart doorbell?", a: "No. Battery-powered models like the Ring Video Doorbell (battery) work without any wiring. If you want a hardwired model but don't have existing wiring, we can install new low-voltage wiring." },
                { q: "Will my smart doorbell work with my phone?", a: "Yes. All modern smart doorbells work with iOS and Android smartphones via their dedicated apps. LUXHT Fix sets up the app on your phone, configures all settings, and trains you on how to use every feature before we leave." }
            ]}
            relatedServices={[
                { title: "Smart Home Installation", href: "/smart-home-installation-orlando/" },
                { title: "Smart Lock Installation", href: "/smart-lock-installation-orlando/" },
                { title: "Deadbolt Installation", href: "/deadbolt-installation-orlando/" },
                { title: "Door, Lock & Trim", href: "/door-lock-trim-orlando/" },
                { title: "TV Mounting", href: "/tv-mounting-orlando/" }
            ]}
            startingPrice="Doorbell installation starts at $75"
            statsText="Licensed • Insured • 250+ Devices Installed"
        />
    );
}
