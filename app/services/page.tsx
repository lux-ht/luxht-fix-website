import Navbar from '@/components/Navbar';
import Link from 'next/link';
import ProjectSlideshow from '@/components/ProjectSlideshow';
import {
    Hammer, Tv, Grid, Ruler, DoorOpen, Wrench, Paintbrush,
    Bath, Zap, Monitor, CheckCircle, MapPin, ArrowRight, Star,
    Shield, Briefcase, Key, Droplets, Wind, Layers
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Property Maintenance & Improvement Services | LUXHT Fix — South Florida & Central Florida',
    description: 'Professional property maintenance, repairs, installations, and improvement services across South Florida & Central Florida. Drywall, flooring, decks, kitchens, baths, TV mounting & more. Family-Owned. Fully Insured.',
    alternates: { canonical: 'https://fix.luxht.com/services/' },
};

export default function ServicesPage() {
    const allServices = [
        { title: "Drywall Repair", desc: "Seamless patches and water damage repair.", price: "$150", icon: Hammer, link: "/drywall-miami/" },
        { title: "Property Maintenance", desc: "Scheduled preventative & seasonal property maintenance.", price: "$195", icon: Shield, link: "/property-maintenance-miami/" },
        { title: "Commercial Maintenance", desc: "General facility maintenance and repairs for commercial spaces.", price: "$95/hr", icon: Briefcase, link: "/commercial-property-maintenance-miami/" },
        { title: "Rental Turnover Repairs", desc: "Tenant prep, rapid wall repair, paint touch-ups, hardware.", price: "$250", icon: Key, link: "/rental-turnover-repairs-miami/" },
        { title: "Door, Lock & Trim", desc: "Fix squeaky doors, install locks, replace trim.", price: "$85", icon: DoorOpen, link: "/door-lock-trim-miami/" },
        { title: "Faucet & Fixtures", desc: "Leak-free installations for kitchens and baths.", price: "$95", icon: Wrench, link: "/faucet-fixtures-miami/" },
        { title: "TV Mounting", desc: "Secure setups with hidden cables.", price: "$120", icon: Tv, link: "/tv-mounting-miami/" },
        { title: "Smart Home", desc: "Ring, Nest, cameras, and smart locks.", price: "$95", icon: Zap, link: "/smart-home-installation-miami/" },
        { title: "Furniture Assembly", desc: "Fast assembly from any retailer.", price: "$75", icon: Monitor, link: "/furniture-assembly-miami/" },
        { title: "Flooring Installation", desc: "Hardwood, laminate, vinyl, and tile.", price: "$3/sf", icon: Grid, link: "/flooring-installation-miami/" },
        { title: "Fence & Gate Repair", desc: "Fixing sagging gates, broken posts, and damaged panels.", price: "$175", icon: Hammer, link: "/fence-gate-repair-miami/" },
        { title: "Gutter Guard & Cleaning", desc: "Keep gutters clear and install professional leaf guards.", price: "$150", icon: Droplets, link: "/gutter-maintenance-miami/" },
        { title: "Pressure Washing", desc: "Remove mold, algae, and grime from siding, driveways, patios.", price: "$199", icon: Wind, link: "/pressure-washing-miami/" },
        { title: "Accent Walls & Custom Trim", desc: "Custom woodwork, shiplap, wainscoting, and trim updates.", price: "$450", icon: Layers, link: "/accent-walls-miami/" },
        { title: "Deck Building", desc: "Custom outdoor deck design and repair.", price: "$8,000", icon: Ruler, link: "/deck-building-miami/" },
        { title: "Kitchen Refacing", desc: "Cabinet door upgrades and modernizing.", price: "$4,500", icon: Paintbrush, link: "/kitchen-refacing-miami/" },
        { title: "Bath Remodel", desc: "Complete bathroom renovations and tile.", price: "$8,500", icon: Bath, link: "/bath-remodel-miami/" },
    ];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "LUXHT Fix",
        "image": "https://fix.luxht.com/images/logo-wide-hammers.png",
        "url": "https://fix.luxht.com/services/",
        "telephone": "+1-954-300-3043",
        "priceRange": "$$-$$$",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Miami",
            "addressRegion": "FL",
            "addressCountry": "US"
        },
        "areaServed": [
            { "@type": "State", "name": "Florida" },
            { "@type": "City", "name": "Miami" },
            { "@type": "City", "name": "Fort Lauderdale" },
            { "@type": "City", "name": "Orlando" }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Home Services",
            "itemListElement": allServices.map(s => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": s.title,
                    "url": `https://fix.luxht.com${s.link}`
                }
            }))
        }
    };

    return (
        <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Navbar />

            {/* Hero Section */}
            <header className="pt-32 pb-20 bg-gradient-to-br from-[#584D94] via-[#7B6FCC] to-[#453A75] text-white text-center px-4">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Property Maintenance & Improvement Services</h1>
                    <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-2xl mx-auto font-light">
                        Professional repairs, maintenance, installations, and property improvements for residential and commercial properties — now serving Miami, Fort Lauderdale, Orlando & beyond.
                    </p>
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md py-2 px-6 rounded-full border border-white/20 text-white/90 font-bold text-sm mb-4">
                        Family-Owned. Not a Lead App.
                    </div>
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md py-2 px-6 rounded-full border border-white/20 text-[#64CEBB] font-bold mb-8">
                        <CheckCircle size={18} /> Fully Insured • 500+ Florida Properties Served
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:9543003043" className="bg-[#64CEBB] text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-teal-500/20 transition-all flex items-center justify-center gap-2">
                            Call Now
                        </a>
                        <a href="sms:9543003043" className="bg-white/10 border border-white/20 text-white font-bold py-3 px-8 rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                            <span>💬</span> Text Us
                        </a>
                        <a href="#all-services" className="bg-white/10 border border-white/20 text-white font-bold py-3 px-8 rounded-full hover:bg-white/20 transition-all flex items-center justify-center">
                            View All Services
                        </a>
                    </div>

                    {/* Character Scene Removed */}
                </div>
            </header>

            {/* Featured Service: Drywall */}
            <section className="py-20 px-4 container mx-auto">
                <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row">
                    <div className="md:w-1/2 bg-slate-200 min-h-[400px] relative">
                        <ProjectSlideshow
                            slides={[
                                { src: "/drywall-before.jpg", label: "Before Repair", alt: "Damaged drywall before repair" },
                                { src: "/drywall-after.jpg", label: "After Result", alt: "Seamlessly repaired drywall" }
                            ]}
                        />
                    </div>
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <span className="text-[#64CEBB] font-bold tracking-wider uppercase mb-2 text-sm">Our Primary Specialty</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#584D94] mb-4">Expert Drywall Repair</h2>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Professional repair of holes, cracks, and water damage with seamless texture matching. Whether it's a doorknob hole or a ceiling leak, we make it look like it never happened.
                        </p>
                        <div className="flex items-center gap-4">
                            <span className="text-2xl font-bold text-slate-800">Starting at $150</span>
                            <Link href="/drywall-miami/" className="bg-[#584D94] text-white font-bold py-3 px-6 rounded-full hover:bg-[#483d7a] transition-colors inline-flex items-center gap-2">
                                Learn More <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* All Services Grid */}
            <section id="all-services" className="py-20 bg-white px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#584D94] mb-4">All Property Services</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">LUXHT Fix provides professional property maintenance, repairs, installations, and improvement services throughout South Florida and Central Florida. Every project is completed with attention to detail.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allServices.map((service, i) => (
                            <div key={i} className="group p-8 rounded-2xl border border-slate-100 hover:border-[#584D94]/20 hover:shadow-xl transition-all bg-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#584D94]/5 rounded-bl-[100px] -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>

                                <div className="w-14 h-14 bg-[#584D94]/10 rounded-xl flex items-center justify-center text-[#584D94] mb-6 group-hover:bg-[#584D94] group-hover:text-white transition-colors relative z-10">
                                    <service.icon size={28} />
                                </div>

                                <h3 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
                                <p className="text-slate-500 mb-6 min-h-[48px]">{service.desc}</p>

                                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                                    <span className="text-sm font-bold text-slate-400">From {service.price}</span>
                                    <Link href={service.link} className="text-[#64CEBB] font-bold text-sm flex items-center gap-1 hover:text-[#4cada0]">
                                        Learn More <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-4 container mx-auto bg-slate-50">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-[#584D94] mb-12">Why Florida Property Owners Trust LUXHT Fix</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {[
                            { text: "Fully Insured", icon: CheckCircle },
                            { text: "500+ Jobs Done", icon: Star },
                            { text: "Same-Week Service", icon: CalendarImage },
                            { text: "Quality Materials", icon: Hammer },
                            { text: "Clean Execution", icon: Paintbrush },
                            { text: "Fair Pricing", icon: Wrench },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#64CEBB] border border-slate-100">
                                    <item.icon size={24} />
                                </div>
                                <span className="font-bold text-slate-700 text-sm">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-20 bg-white px-4 border-t border-slate-100">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-[#584D94] mb-8">Serving South Florida & Central Florida</h2>
                    <div className="flex flex-wrap justify-center gap-3 mb-4">
                        <span className="px-4 py-2 bg-[#64CEBB]/10 rounded-full text-[#64CEBB] text-sm font-bold border border-[#64CEBB]/20">🌴 South Florida</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {["Miami", "Fort Lauderdale", "Pembroke Pines", "Hollywood", "Cooper City", "Aventura", "Miramar", "Davie", "Coral Gables", "Doral", "Sunny Isles Beach", "North Miami"].map((area, i) => (
                            <span key={`sf-${i}`} className="px-4 py-2 bg-slate-50 rounded-full text-slate-600 text-sm font-medium border border-slate-200 flex items-center gap-2">
                                <MapPin size={14} className="text-[#64CEBB]" /> {area}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 mb-4">
                        <span className="px-4 py-2 bg-[#584D94]/10 rounded-full text-[#584D94] text-sm font-bold border border-[#584D94]/20">🏠 Central Florida</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {["Orlando", "Winter Park", "Maitland", "Altamonte Springs", "Lake Nona", "Dr. Phillips", "Windermere", "Ocoee", "Apopka", "Winter Garden", "College Park", "Baldwin Park"].map((area, i) => (
                            <span key={`cf-${i}`} className="px-4 py-2 bg-slate-50 rounded-full text-slate-600 text-sm font-medium border border-slate-200 flex items-center gap-2">
                                <MapPin size={14} className="text-[#584D94]" /> {area}
                            </span>
                        ))}
                    </div>
                    <p className="text-slate-500">Not listed? Call us - we likely serve your area!</p>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-[#584D94] text-white text-center px-4">
                <div className="container mx-auto max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-xl text-blue-100 mb-8">
                        From small repairs to complete renovations, LUXHT Fix delivers professional results you can trust.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:9543003043" className="bg-[#64CEBB] text-white font-bold py-4 px-10 rounded-full hover:shadow-lg hover:shadow-teal-500/20 transition-all flex items-center justify-center gap-2">
                            Call Now
                        </a>
                        <a href="sms:9543003043" className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold py-4 px-10 rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                            <span>💬</span> Text Us
                        </a>
                        <a href="mailto:info@luxht.com" className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold py-4 px-10 rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                            <span className="text-xl">✉️</span> Email Us
                        </a>
                    </div>
                </div>
            </section>

        </main>
    );
}

// Helper for icon (since Calendar isn't imported from lucide directly in the map due to variable name conflict)
import { Calendar as CalendarImage } from 'lucide-react';
