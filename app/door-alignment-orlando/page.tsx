import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Door Alignment and Adjustment in Orlando, FL | LUXHT Fix',
    description: 'Professional door alignment and adjustment in Orlando. Fix sticking, dragging, and misaligned doors. Serving Winter Park, Maitland, Altamonte Springs & Casselberry.',
    alternates: { canonical: 'https://fix.luxht.com/door-alignment-orlando/' },
    openGraph: {
        title: 'Door Alignment and Adjustment in Orlando, FL | LUXHT Fix',
        description: 'Fix sticking, dragging, and misaligned doors in Orlando. Same-week service available.',
        url: 'https://fix.luxht.com/door-alignment-orlando/',
        type: 'website',
        siteName: 'LUXHT Fix',
    },
};

export default function DoorAlignmentPage() {
    return (
        <ServicePageTemplate
            serviceName="Door Alignment and Adjustment"
            slug="door-alignment-orlando"
            neighborhoods={["Winter Park", "Maitland", "Altamonte Springs", "Casselberry"]}
            parentCategory="Door and Lock Services"
            parentSlug="door-lock-trim-orlando"
            heroSubtitle="Fix doors that stick, drag, or won't latch properly."
            heroDescription="Quick adjustments that restore smooth operation."
            introParagraph="Doors that stick, drag on the floor, or refuse to latch are more than an annoyance — they can be a security issue and cause further damage to your frame and flooring. LUXHT Fix quickly diagnoses whether your door issue is caused by loose hinges, swollen wood from Orlando's humidity, settling foundations, or worn hardware. We make precise adjustments that restore smooth, quiet operation without replacing the entire door."
            serviceDetails={[
                "Sticking and dragging door repair",
                "Hinge tightening and replacement",
                "Strike plate realignment for proper latching",
                "Door planing for humidity-swollen doors",
                "Frame shimming for settling-caused misalignment",
                "Squeaky hinge elimination"
            ]}
            processSteps={[
                "Inspect door operation and identify root cause",
                "Check hinge condition, screws, and frame alignment",
                "Tighten or replace hinges with longer screws if needed",
                "Adjust strike plate position for proper latch engagement",
                "Plane door edges if swollen from humidity",
                "Test smooth operation and confirm quiet, secure closing"
            ]}
            whyChooseUs={[
                "Door alignment specialists for Orlando's humid climate",
                "We diagnose root cause, not just symptoms",
                "Most fixes completed in under 1 hour",
                "Same-day service available for urgent issues",
                "Upfront pricing — no surprises",
                "Licensed, insured, and background-checked"
            ]}
            faqs={[
                { q: "Why does my door stick in summer?", a: "Orlando's high humidity causes wooden doors to absorb moisture and swell, making them stick against the frame. LUXHT Fix can plane the door edges to account for seasonal swelling, or we can address underlying issues like loose hinges that make the problem worse." },
                { q: "How much does door alignment cost in Orlando?", a: "Most door alignment and adjustment services range from $85 to $175 per door, depending on the issue. Simple hinge tightening is at the lower end, while planing and frame repair are at the higher end. Text us at (407) 720-7476 for a quick quote." },
                { q: "Can you fix a door that won't latch?", a: "Yes. Doors that won't latch usually have a misaligned strike plate or a shifted frame. We reposition the strike plate, shim the frame if needed, or make minor hinge adjustments to restore proper latching." },
                { q: "Do I need a new door or just an adjustment?", a: "In most cases, adjustment is all you need. LUXHT Fix assesses whether your door problem can be solved with alignment work before ever recommending a replacement. We save you money by fixing what's there." }
            ]}
            relatedServices={[
                { title: "Door, Lock & Trim", href: "/door-lock-trim-orlando/" },
                { title: "Deadbolt Installation", href: "/deadbolt-installation-orlando/" },
                { title: "Door Handle Replacement", href: "/door-handle-replacement-orlando/" },
                { title: "Baseboard Installation", href: "/baseboard-installation-orlando/" },
                { title: "Smart Lock Installation", href: "/smart-lock-installation-orlando/" }
            ]}
            startingPrice="Door adjustments start at $85"
            statsText="Licensed • Insured • 400+ Doors Fixed in Orlando"
        />
    );
}
