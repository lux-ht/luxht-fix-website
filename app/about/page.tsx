import Navbar from '@/components/Navbar';
import Link from 'next/link';
import {
    CheckCircle, Users, Shield, Clock, Heart, Wrench, Phone, Hammer, HardHat, MapPin, Star, Mail
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About LUXHT Fix | Property Maintenance & Improvement — South Florida & Central Florida',
    description: 'LUXHT Fix provides professional property maintenance, repairs, installations, and improvements for residential and commercial properties. Family-owned. Founded in Orlando, now serving South Florida.',
    alternates: { canonical: 'https://fix.luxht.com/about/' },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white text-slate-800 font-sans">
            <Navbar />

            {/* HERO SECTION */}
            <header className="pt-32 pb-20 bg-gradient-to-br from-[#584D94] via-[#7B6FCC] to-[#453A75] text-white text-center px-4">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">About LUXHT Fix</h1>
                    <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto font-light leading-relaxed mb-6">
                        LUXHT Fix is a professional property maintenance and improvement company serving South Florida and Central Florida — specializing in drywall repair, TV mounting, flooring, and more. <strong className="text-white">Founded in Orlando, now expanding across Miami-Dade & Broward counties.</strong>
                    </p>
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 py-2 px-5 rounded-full text-sm font-bold text-white/90 mb-6">
                        <Shield size={16} className="text-[#64CEBB]" /> Family-Owned. Not a Lead App.
                    </div>

                    {/* Character Team Portrait */}
                    {/* Character Team Portrait Removed */}
                </div>
            </header>

            {/* SECTION 1 & 2: Who We Are & Heritage */}
            <section className="py-20 px-4 container mx-auto">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2 space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-[#584D94] mb-4">Built From Luxury Construction.<br />Designed for Ongoing Home Care.</h2>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                <span className="inline-flex items-center gap-1 font-bold text-[#584D94] bg-[#584D94]/10 px-2 py-0.5 rounded-md">LUXHT<span className="text-[#64CEBB]">Fix</span></span> is the professional home services division of
                                <span className="inline-flex items-center gap-1 font-bold bg-gradient-to-r from-[#584D94] to-[#7B6FCC] bg-clip-text text-transparent">LUXHT</span> – <span className="italic text-[#64CEBB] font-medium">Luxury Home Transformations</span>, one of Florida's trusted names in high-end residential construction and renovation.
                            </p>
                            <p className="text-slate-600 leading-relaxed mt-4">
                                After years of completing full-scale kitchen remodels and custom home transformations, we recognized a consistent need: our clients wanted the same level of construction expertise for ongoing maintenance and smaller improvements.
                            </p>
                            <p className="text-slate-600 leading-relaxed mt-4 font-medium text-[#64CEBB]">
                                That's why we created <span className="font-bold text-[#584D94]">LUXHT</span><span className="font-bold text-[#64CEBB]">Fix</span> — to bring builder-level craftsmanship to everyday home services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">From Major Renovations to Everyday Care</h2>
                            <p className="text-slate-600 leading-relaxed">
                                LUXHT Fix serves homeowners across Florida before, during, and after major projects with routine maintenance, small projects, and ongoing care. We allow you to work with one trusted brand for both transformation and long-term home care.
                            </p>
                        </div>
                    </div>

                    {/* Team Photo Container */}
                    <div className="md:w-1/2 rounded-3xl relative overflow-hidden shadow-xl group">
                        <img
                            src="/luxht-team-vertical.jpg"
                            alt="The LUXHT Fix Team"
                            width={600}
                            height={800}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 block"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION 3: Not Typical Handymen */}
            <section className="py-20 bg-slate-50 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <div className="inline-block bg-[#584D94] text-white text-xs font-bold py-1 px-3 rounded-full mb-6 uppercase tracking-wider">
                        Construction Professionals
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">More Than Maintenance. Professional Property Care.</h2>
                    <p className="text-xl text-slate-600 mb-4 leading-relaxed">
                        Our team consists of experienced construction professionals with extensive experience in structural framing, plumbing, electrical, and finish carpentry. Because we come from real construction backgrounds, we understand the structure and safety behind every repair.
                    </p>
                    <p className="text-base text-slate-500 mb-12 leading-relaxed italic">
                        Many clients find us while searching for a handyman, but LUXHT Fix is built as a professional property maintenance and improvement company.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
                        {['Residential Construction', 'Structural Systems', 'Kitchen Installations', 'Finish Carpentry'].map((skill, i) => (
                            <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3">
                                <HardHat className="text-[#64CEBB]" size={20} />
                                <span className="font-bold text-slate-700 text-sm">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OUR GROWTH STORY */}
            <section className="py-20 px-4 bg-gradient-to-br from-[#584D94]/5 to-[#64CEBB]/5">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-[#64CEBB]/10 text-[#64CEBB] px-4 py-2 rounded-full text-sm font-bold mb-4 border border-[#64CEBB]/20">
                            <MapPin size={16} /> Our Journey
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">From Orlando to South Florida</h2>
                        <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
                            After establishing LUXHT Fix as the trusted property maintenance company in Central Florida, we recognized the same gap in South Florida — property owners who demand construction-quality expertise for everyday repairs.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        {[
                            { year: '2024', text: 'Founded in Orlando as the home services division of LUXHT', color: 'bg-slate-100 border-slate-200' },
                            { year: '2025', text: 'Completed 500+ projects across Central Florida', color: 'bg-slate-100 border-slate-200' },
                            { year: '2025', text: 'Launched South Florida branch serving Miami-Dade & Broward', color: 'bg-[#64CEBB]/10 border-[#64CEBB]/30' },
                            { year: '2026', text: 'Investing in dedicated South Florida operations, team & fleet', color: 'bg-[#584D94]/10 border-[#584D94]/30' },
                        ].map((step, i) => (
                            <div key={i} className={`${step.color} border rounded-2xl p-6 text-center`}>
                                <div className="text-2xl font-black text-[#584D94] mb-2">{step.year}</div>
                                <p className="text-slate-600 text-sm leading-relaxed">{step.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                        <p className="text-slate-600 leading-relaxed text-lg">
                            In 2025, we made the commitment to expand into Miami-Dade and Broward counties. Today, we're <strong className="text-[#584D94]">investing heavily in our South Florida operations</strong> — building a dedicated local team, expanding our service fleet, and creating partnerships with the best material suppliers in the region. Our goal: bring the same construction-grade quality that Central Florida trusts to every home in South Florida.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHY WE EXIST & APPROACH */}
            <section className="py-20 px-4 container mx-auto">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-bold text-[#584D94] mb-6">Why LUXHT Fix Exists</h2>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Luxury and well-maintained homes require consistent, professional care. Our clients asked us: "Can you handle our smaller repairs too?"
                        </p>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            They wanted a reliable team for one-time fixes and recurring service without sacrificing quality. LUXHT Fix provides:
                        </p>
                        <ul className="space-y-3">
                            {[
                                'On-demand repair services',
                                'Scheduled maintenance programs',
                                'Long-term service partnerships',
                                'Construction-grade solutions'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                                    <CheckCircle size={18} className="text-[#64CEBB]" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-[#584D94]/5 p-8 rounded-3xl border border-[#584D94]/10">
                        <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Approach</h2>
                        <p className="text-slate-600 mb-8">
                            Every Florida home deserves professional care. Whether repairing a small drywall hole or installing flooring, we approach every project with:
                        </p>
                        <ul className="space-y-4">
                            {[
                                'Builder-level thinking & problem solving',
                                'Attention to structural integrity & safety',
                                'Clean, precise execution',
                                'Respect for your home, time, & investment',
                                'Transparent communication & pricing'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Star className="text-[#584D94] mt-1 shrink-0" size={18} fill="currentColor" />
                                    <span className="text-slate-800 font-semibold">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* SERVICE AREAS — DUAL COLUMN */}
            <section className="py-16 bg-[#584D94] text-white px-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto relative z-10 max-w-5xl">
                    <div className="text-center mb-10">
                        <MapPin className="mx-auto mb-4 text-[#64CEBB]" size={40} />
                        <h2 className="text-3xl font-bold mb-3">Serving South Florida & Central Florida</h2>
                        <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                            Two regions. One standard of excellence.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-[#64CEBB] text-white text-xs font-bold px-3 py-1 rounded-full">🌴 Primary Focus</span>
                                <h3 className="font-bold text-lg">South Florida</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {['Miami', 'Fort Lauderdale', 'Pembroke Pines', 'Cooper City', 'Aventura', 'Hallandale Beach', 'Miramar', 'Davie', 'Hollywood', 'Sunny Isles Beach', 'North Miami', 'Coral Gables', 'Doral', 'Miami Beach'].map((city, i) => (
                                    <span key={i} className="bg-[#64CEBB]/20 backdrop-blur-sm border border-[#64CEBB]/30 px-3 py-1.5 rounded-full text-sm font-medium">
                                        {city}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">Est. 2024</span>
                                <h3 className="font-bold text-lg">Central Florida</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {['Orlando', 'Winter Park', 'Maitland', 'Altamonte Springs', 'Lake Nona', 'Dr. Phillips', 'Windermere', 'Ocoee', 'Apopka', 'Winter Garden', 'College Park', 'Baldwin Park'].map((city, i) => (
                                    <span key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full text-sm font-medium">
                                        {city}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: Comparison Table */}
            <section className="py-20 px-4 container mx-auto bg-slate-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">The LUXHT Fix Difference</h2>
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                        <div className="grid grid-cols-2 bg-slate-900 text-white font-bold p-4 text-sm md:text-base">
                            <div className="pl-4">Typical Service Provider</div>
                            <div className="text-[#64CEBB]">LUXHT Fix</div>
                        </div>
                        {[
                            ['General repair experience', 'Experienced construction professionals'],
                            ['One-person operations', 'Backed by full renovation company'],
                            ['Volume-based business model', 'Quality and relationship focused'],
                            ['Limited structural knowledge', 'Deep construction expertise'],
                            ['Inconsistent availability', 'Reliable, professional scheduling'],
                            ['Basic tool kits', 'Professional-grade equipment'],
                            ['Price-driven decisions', 'Value and longevity focused']
                        ].map((row, i) => (
                            <div key={i} className={`grid grid-cols-2 p-4 md:p-6 border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} text-sm md:text-base`}>
                                <div className="text-slate-500 pl-4">{row[0]}</div>
                                <div className="font-bold text-[#584D94] flex items-center gap-2">
                                    <CheckCircle size={16} className="shrink-0" /> {row[1]}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 8: Services List */}
            <section className="py-20 px-4 container mx-auto">
                <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Comprehensive Property Services</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[
                        { name: 'Drywall Repair', desc: 'Seamless patching & texture matching', href: '/drywall-miami/' },
                        { name: 'Flooring Installation', desc: 'Hardwood, LVP, Tile', href: '/flooring-installation-miami/' },
                        { name: 'Bath Remodel', desc: 'Complete bathroom renovations', href: '/bath-remodel-miami/' },
                        { name: 'Kitchen Refacing', desc: 'Cabinet upgrades & modernization', href: '/kitchen-refacing-miami/' },
                        { name: 'TV Mounting', desc: 'Secure, clean entertainment setups', href: '/tv-mounting-miami/' },
                        { name: 'Door, Lock & Trim', desc: 'Security & aesthetic improvements', href: '/door-lock-trim-miami/' },
                        { name: 'Faucet & Fixtures', desc: 'Leak-free installations', href: '/faucet-fixtures-miami/' },
                        { name: 'Smart Home', desc: 'Automation & device integration', href: '/smart-home-installation-miami/' },
                        { name: 'Hurricane Damage Repair', desc: 'Fast storm damage restoration', href: '/hurricane-damage-repair-miami/' },
                        { name: 'Stucco Repair', desc: 'Crack repair & color matching', href: '/stucco-repair-miami/' },
                    ].map((service, i) => (
                        <Link key={i} href={service.href} className="bg-white p-6 rounded-xl border border-slate-100 hover:shadow-lg hover:border-[#64CEBB] transition-all group">
                            <h3 className="font-bold text-lg text-slate-800 group-hover:text-[#584D94] transition-colors mb-2 ">{service.name}</h3>
                            <p className="text-slate-500 text-sm">{service.desc}</p>
                        </Link>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link href="/services/" className="text-[#584D94] font-bold text-lg hover:text-[#64CEBB] transition-colors inline-flex items-center gap-2">
                        View All Services <span className="text-2xl">→</span>
                    </Link>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-24 bg-[#584D94] text-white text-center px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -mr-40 -mt-40"></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold mb-6">Experience the LUXHT Fix Difference</h2>
                    <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                        Looking for a property maintenance company that treats your home with care? From South Florida to Central Florida — work with construction professionals who are personally responsible for every project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        <a href="tel:9543003043" className="bg-[#64CEBB] text-white font-bold py-4 px-10 rounded-full hover:shadow-lg hover:bg-[#52bdbc] transition-all flex items-center gap-2">
                            <Phone size={20} /> Call Now
                        </a>
                        <a href="sms:9543003043" className="bg-transparent border-2 border-white/20 text-white font-bold py-4 px-10 rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                            <span>💬</span> Text Us
                        </a>
                        <a href="mailto:info@luxht.com" className="bg-transparent border-2 border-white/20 text-white font-bold py-4 px-10 rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                            <Mail size={20} /> Email Us
                        </a>
                    </div>
                    <p className="text-sm text-white/60 font-medium tracking-widest uppercase">
                        Fully Insured • Construction-Grade Expertise
                    </p>
                </div>
            </section>

        </main>
    );
}
