import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Toilet Repair in Orlando, FL | LUXHT Fix',
    description: 'Professional toilet repair in Orlando. Fix running toilets, leaks, clogs, and replace fill valves and flappers. Serving Winter Park, Maitland, Casselberry & Longwood.',
    alternates: { canonical: 'https://fix.luxht.com/toilet-repair-orlando/' },
    openGraph: {
        title: 'Toilet Repair in Orlando, FL | LUXHT Fix',
        description: 'Toilet repair in Orlando. Running toilets, leaks, and clogs fixed same-week.',
        url: 'https://fix.luxht.com/toilet-repair-orlando/',
        type: 'website',
        siteName: 'LUXHT Fix',
    },
};

export default function ToiletRepairPage() {
    return (
        <ServicePageTemplate
            serviceName="Toilet Repair"
            slug="toilet-repair-orlando"
            neighborhoods={["Winter Park", "Maitland", "Casselberry", "Longwood"]}
            parentCategory="Fixtures and Faucets"
            parentSlug="faucet-fixtures-orlando"
            heroSubtitle="Fix running toilets, leaks, weak flushes, and clogs fast."
            heroDescription="Most repairs completed in under an hour."
            introParagraph="A running toilet can waste thousands of gallons of water per month, and a clogged or leaking toilet is an urgent problem nobody wants to deal with. LUXHT Fix handles all common toilet repairs for Orlando homeowners — from replacing worn flappers and fill valves to fixing wax ring leaks and upgrading flush mechanisms. We carry common parts on our truck so most repairs are completed in a single visit."
            serviceDetails={[
                "Running toilet repair (flapper and fill valve)",
                "Wax ring replacement for base leaks",
                "Flush mechanism repair and upgrade",
                "Handle and lever replacement",
                "Toilet seat replacement",
                "New toilet installation"
            ]}
            processSteps={[
                "Diagnose the issue (running, leaking, weak flush, clog)",
                "Shut off water supply and drain tank if needed",
                "Replace worn flapper, fill valve, or flush valve",
                "Replace wax ring if leaking at the base",
                "Reassemble and test flush performance",
                "Check for leaks and confirm proper operation"
            ]}
            whyChooseUs={[
                "Common toilet parts carried on our truck",
                "Most repairs completed in under 1 hour",
                "Wax ring replacements — no mess, no odor",
                "New toilet installation available",
                "Same-week service in most Orlando areas",
                "Licensed, insured, and background-checked"
            ]}
            faqs={[
                { q: "Why does my toilet keep running?", a: "A running toilet is usually caused by a worn flapper that no longer seals properly, or a faulty fill valve that doesn't shut off. Both are inexpensive parts that LUXHT Fix can replace in under 30 minutes." },
                { q: "How much does toilet repair cost in Orlando?", a: "Most toilet repairs range from $75 to $175 including parts. Simple flapper replacements are at the lower end, while wax ring replacements or fill valve work is at the higher end. Text us at (407) 720-7476 for a quick quote." },
                { q: "My toilet is leaking at the base. Is that serious?", a: "Yes. A base leak usually means the wax ring seal has failed. This allows sewer gas and water to seep out, which can damage your subfloor and create health concerns. It should be repaired promptly." },
                { q: "Can you install a new toilet?", a: "Yes. We remove old toilets and install new ones including all connections, wax ring, supply line, and caulking. We also haul away the old toilet if needed." }
            ]}
            relatedServices={[
                { title: "Faucets & Fixtures", href: "/faucet-fixtures-orlando/" },
                { title: "Faucet Replacement", href: "/faucet-replacement-orlando/" },
                { title: "Shower Head Replacement", href: "/shower-head-replacement-orlando/" },
                { title: "Garbage Disposal", href: "/garbage-disposal-installation-orlando/" },
                { title: "Bath Remodel", href: "/bath-remodel-orlando/" }
            ]}
            startingPrice="Toilet repairs start at $75"
            statsText="Licensed • Insured • Parts On Truck"
        />
    );
}
