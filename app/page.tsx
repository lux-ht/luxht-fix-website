import Navbar from '@/components/Navbar';
import Link from 'next/link';
import {
    Hammer, ArrowRight, Paintbrush, Wrench, Grid, Ruler, Tv,
    DoorOpen, CheckCircle, Zap, Star, Phone, Mail, PaintRoller, MapPin, Shield
} from 'lucide-react';
import HomePageTestimonials from '@/components/HomePageTestimonials';
import DrywallGallery from '@/components/DrywallGallery';
import SmartSearch from '@/components/SmartSearch';
import FloatingIcons from '@/components/FloatingIcons';
import AnimatedCounter from '@/components/AnimatedCounter';
import ScrollReveal from '@/components/ScrollReveal';

const sfServices = [
    { name: 'Drywall Repair', href: '/estimate?service=drywall' },
    { name: 'Property Maintenance', href: '/estimate?service=maintenance' },
    { name: 'Commercial Maintenance', href: '/estimate?service=commercial' },
    { name: 'Rental Turnover Repairs', href: '/estimate?service=turnover' },
    { name: 'TV Mounting', href: '/estimate?service=tv' },
    { name: 'Flooring Installation', href: '/estimate?service=flooring' },
    { name: 'Bath Remodel', href: '/estimate?service=kitchen' },
    { name: 'Kitchen Refacing', href: '/estimate?service=kitchen' },
    { name: 'Door, Lock & Trim', href: '/estimate?service=doors' },
    { name: 'Smart Home', href: '/estimate?service=smart' },
    { name: 'Faucet & Fixtures', href: '/estimate?service=plumbing' },
    { name: 'Fence & Gate Repair', href: '/estimate?service=fence' },
    { name: 'Gutter Guard & Cleaning', href: '/estimate?service=gutter' },
    { name: 'Pressure Washing', href: '/estimate?service=pressure' },
    { name: 'Accent Walls & Trim', href: '/estimate?service=accent-walls' },
    { name: 'Deck Building', href: '/estimate?service=outdoor' },
    { name: 'Furniture Assembly', href: '/estimate?service=outdoor' },
    { name: 'Hurricane Damage Repair', href: '/estimate?service=drywall' },
    { name: 'Stucco Repair', href: '/estimate?service=drywall' },
    { name: 'Screen Enclosure Repair', href: '/estimate?service=outdoor' },
    { name: 'Patio & Lanai Repair', href: '/estimate?service=outdoor' },
    { name: 'Impact Window Prep', href: '/estimate?service=doors' }
];

export default function Home() {
    return (
        <main className="min-h-screen bg-white text-slate-800 font-sans">
            <Navbar />

            {/* HERO SECTION */}
            <header className="relative bg-white pt-32 pb-16 overflow-hidden">
                {/* Animated Gradient Orbs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#584D94]/5 rounded-full blur-3xl -mr-20 -mt-20 animate-orb-1"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#64CEBB]/10 rounded-full blur-3xl -ml-20 -mb-20 animate-orb-2"></div>

                {/* Floating Tool Icons */}
                <FloatingIcons />

                <div className="container mx-auto px-4 relative z-10 max-w-5xl text-left flex flex-col items-start">
                    
                    {/* Clear entry points for the two most common customer needs */}
                    <section className="w-full mb-10" aria-labelledby="service-path-heading">
                        <div className="mb-5">
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#584D94] mb-2">Start here</p>
                            <h2 id="service-path-heading" className="text-2xl md:text-3xl font-bold text-slate-900">What can we help you with?</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <article className="rounded-3xl border border-[#64CEBB]/35 bg-[#F1FBF9] p-6 md:p-8 flex flex-col shadow-sm">
                                <div className="w-11 h-11 rounded-2xl bg-[#64CEBB]/20 text-[#267E70] flex items-center justify-center mb-5">
                                    <CheckCircle size={23} />
                                </div>
                                <p className="text-sm font-semibold text-[#267E70] mb-2">Preparing to sell</p>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">Pre-Sale Home Prep</h3>
                                <p className="text-base text-slate-600 leading-relaxed mb-6">
                                    Get your home listing-ready with a focused walkthrough, priority repairs, and finishing touches buyers notice.
                                </p>
                                <ul className="space-y-3 text-sm text-slate-700 mb-7">
                                    <li className="flex items-start gap-2.5"><CheckCircle size={17} className="text-[#39A996] mt-0.5 shrink-0" /><span>Walkthrough and repair priorities</span></li>
                                    <li className="flex items-start gap-2.5"><CheckCircle size={17} className="text-[#39A996] mt-0.5 shrink-0" /><span>Drywall, paint, caulk, and hardware</span></li>
                                    <li className="flex items-start gap-2.5"><CheckCircle size={17} className="text-[#39A996] mt-0.5 shrink-0" /><span>Ready for photos and showings</span></li>
                                </ul>
                                <Link href="/pre-sale-home-prep/" className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#584D94] px-5 py-3.5 text-sm font-bold text-white hover:bg-[#493F7D] transition-colors">
                                    Explore Pre-Sale Home Prep <ArrowRight size={17} />
                                </Link>
                            </article>

                            <article className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 flex flex-col shadow-sm">
                                <div className="w-11 h-11 rounded-2xl bg-[#584D94]/10 text-[#584D94] flex items-center justify-center mb-5">
                                    <Hammer size={23} />
                                </div>
                                <p className="text-sm font-semibold text-[#584D94] mb-2">Repair or improve your property</p>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">Choose a Service</h3>
                                <p className="text-base text-slate-600 leading-relaxed mb-5">
                                    Start with one of our most requested services, browse the full directory, or tell us what you need.
                                </p>
                                <div className="grid grid-cols-2 gap-2.5 mb-7">
                                    {sfServices.slice(0, 6).map((svc) => (
                                        <Link key={svc.name} href={svc.href} className="flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm font-semibold text-slate-700 hover:border-[#64CEBB] hover:bg-[#F1FBF9] transition-colors">
                                            <span>{svc.name}</span><ArrowRight size={14} className="text-slate-400 shrink-0" />
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                                    <Link href="/services/" className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#584D94] px-5 py-3.5 text-sm font-bold text-white hover:bg-[#493F7D] transition-colors">
                                        Browse All Services <ArrowRight size={17} />
                                    </Link>
                                    <Link href="/estimate/" className="flex-1 inline-flex items-center justify-center rounded-full border-2 border-[#584D94] px-5 py-3 text-sm font-bold text-[#584D94] hover:bg-[#584D94]/5 transition-colors">
                                        Request an Estimate
                                    </Link>
                                </div>
                            </article>
                        </div>
                    </section>

                    {/* MAIN HERO CONTENT (Left aligned, stretching wide across the screen) */}
                    <div className="w-full text-left flex flex-col items-start">
                        {/* Smart Search Bar */}
                        <div className="w-full max-w-xl mb-6">
                            <SmartSearch />
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-slate-900 mb-4 tracking-tight leading-[1.05] text-left w-full">
                            Property Maintenance<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#584D94] to-[#7B6FCC]">& Improvement</span>
                        </h1>

                        <p className="text-xs md:text-sm font-semibold text-slate-500 tracking-wide mb-3 text-left">Residential | Commercial | Rentals | Offices</p>

                        <p className="text-base md:text-lg text-slate-600 mb-6 max-w-3xl font-light leading-relaxed text-left">
                            Professional repairs, maintenance, installations, and property improvements across South Florida. Specializing in <Link href="/drywall-miami/" className="text-[#584D94] font-medium hover:underline">drywall repair</Link>, <Link href="/tv-mounting-miami/" className="text-[#584D94] font-medium hover:underline">TV mounting</Link>, <Link href="/flooring-installation-miami/" className="text-[#584D94] font-medium hover:underline">flooring</Link>, <Link href="/bath-remodel-miami/" className="text-[#584D94] font-medium hover:underline">bath remodels</Link>, <Link href="/kitchen-refacing-miami/" className="text-[#584D94] font-medium hover:underline">kitchen refacing</Link>, and <Link href="/services/" className="text-[#584D94] font-medium hover:underline">more</Link>.
                        </p>

                        <div className="inline-flex items-center gap-2 bg-[#584D94]/10 border border-[#584D94]/20 py-2 px-5 rounded-full text-sm font-bold text-[#584D94] mb-6">
                            <Shield size={16} className="text-[#64CEBB]" /> Family-Owned. Not a Lead App.
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-start items-center w-full sm:w-auto">
                            <a href="tel:9543003043" className="btn-gradient-primary btn-gradient-shimmer w-full sm:w-auto text-center">
                                <Phone size={20} className="inline mr-2" /> (954) 300-3043
                            </a>
                            <a href="sms:9543003043" className="flex items-center justify-center gap-2 py-3 px-6 rounded-full font-bold text-sm border-2 border-[#584D94] text-[#584D94] bg-white hover:bg-[#584D94] hover:text-white transition-all w-full sm:w-auto">
                                <span>💬</span> Text Us
                            </a>
                            <Link href="/services/" className="btn-gradient-secondary w-full sm:w-auto text-center">
                                Browse All Services <ArrowRight size={18} className="inline ml-1" />
                            </Link>
                        </div>

                        {/* Animated Stats strip (Left Aligned) */}
                        <div className="flex items-center justify-start gap-6 md:gap-8 mt-10 w-full">
                            <div className="flex flex-col items-center lg:items-start">
                                <AnimatedCounter target={500} suffix="+" className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#584D94] to-[#7B6FCC] leading-none" />
                                <span className="text-[9px] md:text-[11px] font-semibold text-slate-400 uppercase tracking-widest mt-1">Projects Done</span>
                            </div>
                            <div className="w-px h-10 bg-gradient-to-b from-[#64CEBB]/30 to-[#584D94]/30 rounded-full"></div>
                            <div className="flex flex-col items-center lg:items-start">
                                <AnimatedCounter target={40} suffix="+" className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#584D94] to-[#7B6FCC] leading-none" />
                                <span className="text-[9px] md:text-[11px] font-semibold text-slate-400 uppercase tracking-widest mt-1">Years Exp.</span>
                            </div>
                            <div className="w-px h-10 bg-gradient-to-b from-[#64CEBB]/30 to-[#584D94]/30 rounded-full"></div>
                            <div className="flex flex-col items-center lg:items-start">
                                <AnimatedCounter target={100} suffix="%" className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#64CEBB] to-[#4BC0AD] leading-none" />
                                <span className="text-[9px] md:text-[11px] font-semibold text-slate-400 uppercase tracking-widest mt-1">Satisfaction</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* 🌴 NOW IN SOUTH FLORIDA BANNER */}
            <ScrollReveal>
            <section className="px-4 -mt-6 relative z-20 mb-8">
                <div className="container mx-auto max-w-5xl">
                    <div className="bg-gradient-to-r from-[#584D94] to-[#7B6FCC] btn-gradient-shimmer text-white rounded-2xl shadow-xl p-6 relative overflow-hidden border border-white/20">
                        {/* Shimmer overlay class does the work, but we can add an extra glow effect */}
                        <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 shadow-inner animate-badge-pulse backdrop-blur-sm">
                                    <MapPin size={24} className="text-white" />
                                </div>
                                <div>
                                    <p className="font-extrabold text-xl md:text-2xl drop-shadow-sm tracking-tight">🌴 Now Serving South Florida!</p>
                                    <p className="text-blue-100 font-medium mt-1">Miami • Fort Lauderdale • Hollywood • Pembroke Pines • Coral Gables</p>
                                </div>
                            </div>
                            <Link href="/south-florida/" className="bg-white text-[#584D94] px-8 py-3.5 rounded-full font-bold shadow-lg hover:shadow-[#64CEBB]/50 hover:-translate-y-1 hover:bg-[#64CEBB] hover:text-white transition-all flex items-center gap-2 flex-shrink-0 border-2 border-transparent">
                                Explore South Florida <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            </ScrollReveal>

            {/* FEATURED SPECIALTY: DRYWALL */}
            <section className="pt-8 md:pt-12 pb-20 px-4 container mx-auto">
                {/* Mobile Layout (UI 2026) */}
                <div className="md:hidden bg-[#584D94] rounded-3xl overflow-hidden relative shadow-2xl mb-4">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="p-6">
                        <div className="inline-block bg-[#64CEBB] text-white text-[10px] font-bold py-1 px-3 rounded-full mb-4 uppercase tracking-wider animate-pulse">
                            Most Popular
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-white">Expert Drywall Repair</h2>
                        <p className="text-blue-100 text-sm mb-6">
                            We make holes and water damage disappear. Perfect texture matching.
                        </p>

                        {/* Integrated Gallery */}
                        <DrywallGallery />

                        <Link href="/drywall-miami/" className="btn-gradient-glass btn-gradient-shimmer w-full justify-center text-sm">
                            Fix My Drywall <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>

                {/* Desktop Layout (Original) */}
                <div className="hidden md:block bg-[#584D94] rounded-3xl p-8 md:p-16 text-white overflow-hidden relative shadow-2xl">
                    <PaintRoller className="absolute bottom-0 left-0 w-48 h-48 text-white/10 -ml-12 -mb-12 animate-float -rotate-12" />
                    <Paintbrush className="absolute top-0 right-0 w-32 h-32 text-white/10 -mr-4 -mt-4 animate-float rotate-12" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <div className="inline-block bg-[#64CEBB] text-white text-xs font-bold py-1 px-3 rounded-full mb-4 uppercase tracking-wider">
                                Our Top Specialty
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Expert Drywall Repair</h2>
                            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                                From accidental holes to water damage, our texture-matching experts make walls look brand new. We protect your floors, work fast, and leave no mess behind.
                            </p>
                            <ul className="grid grid-cols-2 gap-4 mb-8">
                                {["Seamless Patching", "Texture Matching", "Water Damage", "Ceiling Repair"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm font-medium">
                                        <CheckCircle size={16} className="text-[#64CEBB]" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/drywall-miami/" className="btn-gradient-glass btn-gradient-shimmer">
                                Fix My Drywall <ArrowRight size={18} />
                            </Link>
                        </div>
                        {/* Visual for Drywall Image */}
                        <div className="md:w-1/2 h-64 md:h-full min-h-[300px] w-full rounded-2xl border border-white/30 overflow-hidden relative shadow-lg group">
                            <img
                                src="/drywall-before-after.jpg"
                                alt="Drywall Repair Before and After"
                                width={600}
                                height={400}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICE CATEGORIES */}
            <section className="py-20 bg-slate-50 px-4">
                <div className="container mx-auto max-w-6xl">
                    <ScrollReveal>
                    <div className="text-center mb-16">
                        <p className="text-sm font-bold tracking-widest text-[#64CEBB] uppercase mb-2">Our Services</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Professional Property Services Across South Florida</h2>
                        <p className="text-slate-500 mt-3">Serving Miami, Fort Lauderdale, Hollywood, Pembroke Pines & more</p>
                    </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: 'Drywall Services', icon: Hammer, href: '/drywall-miami/', links: [{t:'Drywall Repair',h:'/drywall-miami/'},{t:'Crack Repair',h:'/drywall-crack-repair-miami/'},{t:'Hole Repair',h:'/drywall-hole-repair-miami/'},{t:'Water Damage',h:'/water-damage-drywall-repair-miami/'},{t:'Texture Matching',h:'/texture-matching-miami/'}] },
                            { title: 'TV Mounting', icon: Tv, href: '/tv-mounting-miami/', links: [{t:'TV Mounting',h:'/tv-mounting-miami/'},{t:'Cable Concealment',h:'/tv-cable-concealment-miami/'},{t:'Fireplace Mounting',h:'/fireplace-tv-mounting-miami/'},{t:'Soundbar Mounting',h:'/soundbar-mounting-miami/'},{t:'Outdoor TV',h:'/outdoor-tv-mounting-miami/'}] },
                            { title: 'Door, Lock & Trim', icon: DoorOpen, href: '/door-lock-trim-miami/', links: [{t:'Door, Lock & Trim',h:'/door-lock-trim-miami/'},{t:'Door Alignment',h:'/door-alignment-miami/'},{t:'Deadbolt Installation',h:'/deadbolt-installation-miami/'},{t:'Smart Lock',h:'/smart-lock-installation-miami/'},{t:'Handle Replacement',h:'/door-handle-replacement-miami/'}] },
                            { title: 'Faucets & Fixtures', icon: Wrench, href: '/faucet-fixtures-miami/', links: [{t:'Faucets & Fixtures',h:'/faucet-fixtures-miami/'},{t:'Faucet Replacement',h:'/faucet-replacement-miami/'},{t:'Shower Head',h:'/shower-head-replacement-miami/'},{t:'Garbage Disposal',h:'/garbage-disposal-installation-miami/'},{t:'Toilet Repair',h:'/toilet-repair-miami/'}] },
                            { title: 'Smart Home', icon: Zap, href: '/smart-home-installation-miami/', links: [{t:'Smart Home Installation',h:'/smart-home-installation-miami/'},{t:'Smart Lock',h:'/smart-lock-installation-miami/'},{t:'Smart Doorbell',h:'/smart-doorbell-installation-miami/'}] },
                            { title: 'Trim & Molding', icon: Ruler, href: '/baseboard-installation-miami/', links: [{t:'Baseboard Installation',h:'/baseboard-installation-miami/'},{t:'Crown Molding',h:'/crown-molding-installation-miami/'}] },
                            { title: 'Flooring', icon: Grid, href: '/flooring-installation-miami/', links: [{t:'Hardwood, LVP & Tile',h:'/flooring-installation-miami/'}] },
                            { title: 'Kitchen & Bath', icon: Paintbrush, href: '/bath-remodel-miami/', links: [{t:'Bath Remodel',h:'/bath-remodel-miami/'},{t:'Kitchen Refacing',h:'/kitchen-refacing-miami/'}] },
                            { title: 'Deck & Outdoor', icon: PaintRoller, href: '/deck-building-miami/', links: [{t:'Deck Building',h:'/deck-building-miami/'},{t:'Furniture Assembly',h:'/furniture-assembly-miami/'},{t:'Patio & Lanai Repair',h:'/patio-lanai-repair-miami/'},{t:'Screen Enclosure',h:'/screen-enclosure-repair-miami/'}] },
                        ].map((cat, i) => (
                            <ScrollReveal key={i} delay={i * 80}>
                            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm card-hover-lift h-full">
                                <div className="w-12 h-12 bg-[#584D94]/10 rounded-xl flex items-center justify-center text-[#584D94] mb-4 service-icon-pulse"><cat.icon size={24} /></div>
                                <h2 className="text-xl font-bold text-slate-800 mb-3">
                                    <Link href={cat.href} className="hover:text-[#584D94] transition-colors">{cat.title}</Link>
                                </h2>
                                <ul className="space-y-2 text-sm">
                                    {cat.links.map((link, j) => (
                                        <li key={j}><Link href={link.h} className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> {link.t}</Link></li>
                                    ))}
                                </ul>
                            </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/services/" className="text-[#584D94] font-bold border-b-2 border-[#584D94]/20 hover:border-[#584D94] transition-all pb-1">
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-24 px-4 container mx-auto relative">
                {/* Floating badges */}
                <div className="hidden lg:block absolute -right-4 top-20 bg-white border border-slate-200 rounded-2xl px-4 py-3 shadow-lg animate-badge-pulse z-10" aria-hidden="true">
                    <div className="flex items-center gap-2">
                        <Shield size={18} className="text-[#64CEBB]" />
                        <span className="text-xs font-bold text-slate-700">Fully Insured</span>
                    </div>
                </div>
                <div className="hidden lg:block absolute -right-4 top-36 bg-white border border-slate-200 rounded-2xl px-4 py-3 shadow-lg animate-badge-pulse z-10" style={{ animationDelay: '1s' }} aria-hidden="true">
                    <div className="flex items-center gap-2">
                        <Star size={18} className="text-[#64CEBB] fill-[#64CEBB]" />
                        <span className="text-xs font-bold text-slate-700">Family-Owned</span>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    <ScrollReveal direction="left">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Florida Property Owners Trust LUXHT Fix</h2>
                        <div className="space-y-8">
                            {[
                                { title: "Fully Insured", desc: "Fully insured for your complete protection." },
                                { title: "Family-Owned & Personally Responsible", desc: "You call us. You get us. No lead apps, no random outsourcing." },
                                { title: "Same-Day Service Available", desc: "Fast scheduling—many projects can start the same day you call." },
                                { title: "Transparent Pricing", desc: "Clear, detailed quotes before we start. No surprises, no hidden fees." },
                                { title: "100% Satisfaction Guarantee", desc: "We'll work with you until you're completely satisfied with the results." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#64CEBB]/10 flex items-center justify-center text-[#64CEBB] flex-shrink-0 mt-1">
                                        <CheckCircle size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-lg">{item.title}</h4>
                                        <p className="text-slate-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    </ScrollReveal>

                    <ScrollReveal direction="right" delay={200}>
                    <HomePageTestimonials />
                    </ScrollReveal>
                </div>
            </section>



            {/* FINAL CTA */}
            <ScrollReveal direction="scale">
            <section id="contact" className="py-24 bg-gradient-to-br from-[#64CEBB] via-[#4BC0AD] to-[#584D94] text-white text-center px-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-50"></div>
                <div className="container mx-auto max-w-2xl relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Need Repairs or Renovations?</h2>
                    <p className="text-xl text-teal-50 mb-10 leading-relaxed">
                        From small fixes to major upgrades, let&apos;s make your home better together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:9543003043" className="btn-gradient-glass btn-gradient-shimmer">
                            <Phone size={20} /> Call Now: (954) 300-3043
                        </a>
                        <a href="sms:9543003043" className="btn-gradient-glass">
                            <span>💬</span> Text Us
                        </a>
                        <a href="mailto:info@luxht.com" className="btn-gradient-glass">
                            <Mail size={20} /> Email Us
                        </a>
                    </div>
                </div>
            </section>
            </ScrollReveal>


        </main>
    );
}
