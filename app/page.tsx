import Navbar from '@/components/Navbar';
import Link from 'next/link';
import {
    Hammer, ArrowRight, Paintbrush, Wrench, Grid, Ruler, Tv,
    DoorOpen, CheckCircle, Zap, Star, Phone, Mail, PaintRoller
} from 'lucide-react';
import HomePageTestimonials from '@/components/HomePageTestimonials';
import DrywallGallery from '@/components/DrywallGallery';
import Image from 'next/image';
import SEOStruct from '@/components/SEOStruct';

export default function Home() {
    return (
        <main className="min-h-screen bg-white text-slate-800 font-sans">
            <SEOStruct />
            <Navbar />

            {/* HERO SECTION */}
            <header className="relative bg-white pt-32 pb-16 overflow-hidden">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#584D94]/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#64CEBB]/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

                <div className="container mx-auto px-4 relative z-10">
                    {/* Round Logo with Speech Bubbles - Positioned on the left */}
                    <div className="hidden lg:block absolute left-8 xl:left-16 top-1/2 -translate-y-1/2 z-20">
                        <div className="relative">
                            {/* Speech Bubble - Hello! - positioned above left */}
                            <div className="absolute -top-4 -left-12 z-20 animate-speech-bubble-1">
                                <div className="bg-white rounded-2xl shadow-lg px-3 py-2 relative border border-slate-100">
                                    <p className="text-sm font-bold text-[#584D94]">Hello! 👋</p>
                                    <div className="absolute -bottom-2 right-4 w-3 h-3 bg-white border-b border-r border-slate-100 transform rotate-45"></div>
                                </div>
                            </div>

                            {/* Speech Bubble - How can we help? - positioned above right */}
                            <div className="absolute -top-4 -right-20 z-20 animate-speech-bubble-2">
                                <div className="bg-gradient-to-r from-[#64CEBB] to-[#4BC0AD] rounded-2xl shadow-lg px-3 py-2 relative">
                                    <p className="text-sm font-bold text-white">How can we help?</p>
                                    <div className="absolute -bottom-2 left-4 w-3 h-3 bg-[#64CEBB] transform rotate-45"></div>
                                </div>
                            </div>

                            {/* Round Logo with Breathing Animation */}
                            <div className="relative mt-10 animate-breathe">
                                <div className="w-36 h-36 xl:w-44 xl:h-44 rounded-full overflow-hidden shadow-2xl border-4 border-white/50 relative">
                                    <img
                                        src="/luxht-logo.jpg"
                                        alt="LUXHT Fix Logo - Professional Home Repair Team"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-[#64CEBB]/30 to-[#584D94]/30 rounded-full blur-3xl -z-10 scale-110"></div>
                                <div className="absolute inset-0 rounded-full border-2 border-[#64CEBB]/20 animate-pulse scale-110"></div>
                            </div>
                        </div>
                    </div>

                    {/* Centered Text Content */}
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 py-2 px-4 rounded-full text-sm font-semibold text-slate-500 mb-8 animate-fade-in-up">
                            <span className="w-2 h-2 rounded-full bg-[#64CEBB] animate-pulse"></span> Proudly Serving Orlando & Central Florida
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Premium Home Services.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#584D94] to-[#7B6FCC]">Done Right. Priced Fairly.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 mb-6 max-w-2xl mx-auto font-light leading-relaxed">
                            Expert craftsmanship with transparent pricing for Orlando's discerning homeowners. Specializing in <Link href="/drywall-orlando/" className="text-[#584D94] font-medium hover:underline">drywall repair</Link>, <Link href="/tv-mounting-orlando/" className="text-[#584D94] font-medium hover:underline">TV mounting</Link>, <Link href="/flooring-installation-orlando/" className="text-[#584D94] font-medium hover:underline">flooring</Link>, <Link href="/deck-building-orlando/" className="text-[#584D94] font-medium hover:underline">decks</Link>, and <Link href="/services/" className="text-[#584D94] font-medium hover:underline">more</Link>.
                        </p>

                        {/* Trust Stats */}
                        {/* Trust Stats */}
                        {/* Mobile Stats (UI 2026) */}
                        <div className="grid grid-cols-3 gap-2 border-y border-slate-100 py-4 mb-8 bg-white/50 backdrop-blur-sm md:hidden">
                            <div className="flex flex-col items-center justify-center p-2">
                                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#584D94] to-[#7B6FCC]">500+</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Projects</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-2 border-x border-slate-100">
                                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#584D94] to-[#7B6FCC]">40yr</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Exp.</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-2">
                                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#584D94] to-[#7B6FCC]">100%</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Sat.</span>
                            </div>
                        </div>

                        {/* Desktop Stats (Original) */}
                        <div className="hidden md:flex flex-wrap justify-center gap-6 mb-8 text-sm">
                            <div className="flex items-center gap-2 text-slate-600">
                                <CheckCircle size={18} className="text-[#64CEBB]" />
                                <span><strong className="text-slate-800">500+</strong> Projects Completed</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-600">
                                <CheckCircle size={18} className="text-[#64CEBB]" />
                                <span><strong className="text-slate-800">40+ Years</strong> Construction Experience</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-600">
                                <CheckCircle size={18} className="text-[#64CEBB]" />
                                <span><strong className="text-slate-800">100%</strong> Satisfaction Guarantee</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="tel:4077207476" className="btn-gradient-primary btn-gradient-shimmer">
                                <Phone size={20} /> (407) 720-7476
                            </a>
                            <Link href="/services/" className="btn-gradient-secondary">
                                Browse All Services <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* FEATURED SPECIALTY: DRYWALL */}
            <section className="pt-48 pb-20 px-4 container mx-auto">
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

                        <Link href="/drywall-orlando/" className="btn-gradient-glass btn-gradient-shimmer w-full justify-center text-sm">
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
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Expert Drywall Repair in Orlando</h2>
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
                            <Link href="/drywall-orlando/" className="btn-gradient-glass btn-gradient-shimmer">
                                Fix My Drywall <ArrowRight size={18} />
                            </Link>
                        </div>
                        {/* Visual for Drywall Image */}
                        <div className="md:w-1/2 h-64 md:h-full min-h-[300px] w-full rounded-2xl border border-white/30 overflow-hidden relative shadow-lg group">
                            <img
                                src="/drywall-before-after.jpg"
                                alt="Drywall Repair Before and After"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* QUICK SERVICES GRID */}
            <section className="py-20 bg-slate-50 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold tracking-widest text-[#64CEBB] uppercase mb-2">Comprehensive Care</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-800">Popular Home Services</h3>
                    </div>

                    {/* Mobile Grid (Square Glass Cards) */}
                    <div className="grid grid-cols-2 gap-3 md:hidden">
                        {[
                            { title: "TV Mounting", icon: Tv, link: "/tv-mounting-orlando/" },
                            { title: "Flooring", icon: Grid, link: "/flooring-installation-orlando/" },
                            { title: "Deck Build", icon: Ruler, link: "/deck-building-orlando/" },
                            { title: "Door & Lock", icon: DoorOpen, link: "/door-lock-trim-orlando/" },
                            { title: "Faucets", icon: Wrench, link: "/faucet-fixtures-orlando/" },
                            { title: "Smart Home", icon: Zap, link: "/smart-home-installation-orlando/" },
                        ].map((s, i) => (
                            <Link key={i} href={s.link} className="group bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center justify-center aspect-square active:scale-95 transition-transform">
                                <div className="w-10 h-10 bg-[#584D94]/5 rounded-full flex items-center justify-center text-[#584D94] mb-2">
                                    <s.icon size={20} />
                                </div>
                                <h4 className="font-bold text-slate-800 text-xs leading-tight">{s.title}</h4>
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Grid (Original) */}
                    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "TV Mounting", desc: "Secure mounting on any wall type.", icon: Tv, link: "/tv-mounting-orlando/" },
                            { title: "Flooring", desc: "Hardwood, LVP, and tile install.", icon: Grid, link: "/flooring-installation-orlando/" },
                            { title: "Deck Building", desc: "Custom outdoor living spaces.", icon: Ruler, link: "/deck-building-orlando/" },
                            { title: "Door & Lock", desc: "Security upgrades and repairs.", icon: DoorOpen, link: "/door-lock-trim-orlando/" },
                            { title: "Faucets", desc: "Kitchen and bath upgrades.", icon: Wrench, link: "/faucet-fixtures-orlando/" },
                            { title: "Smart Home", desc: "Automation and cameras.", icon: Zap, link: "/smart-home-installation-orlando/" },
                        ].map((s, i) => (
                            <Link key={i} href={s.link} className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#584D94]/20 transition-all flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#584D94]/5 rounded-xl flex items-center justify-center text-[#584D94] group-hover:bg-[#584D94] group-hover:text-white transition-colors flex-shrink-0">
                                    <s.icon size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-1 group-hover:text-[#584D94] transition-colors">{s.title}</h4>
                                    <p className="text-sm text-slate-500 mb-2">{s.desc}</p>
                                    <span className="text-xs font-bold text-[#64CEBB] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                                        Learn More <ArrowRight size={12} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/services/" className="text-[#584D94] font-bold border-b-2 border-[#584D94]/20 hover:border-[#584D94] transition-all pb-1">
                            View All 10 Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-24 px-4 container mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Orlando Homeowners Trust LUXHT Fix</h2>
                        <div className="space-y-8">
                            {[
                                { title: "Licensed & Insured", desc: "Fully licensed, bonded, and insured for your complete protection." },
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

                    <HomePageTestimonials />
                </div>
            </section>



            {/* FINAL CTA */}
            <section id="contact" className="py-24 bg-gradient-to-br from-[#64CEBB] via-[#4BC0AD] to-[#584D94] text-white text-center px-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-50"></div>
                <div className="container mx-auto max-w-2xl relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Need Repairs or Renovations?</h2>
                    <p className="text-xl text-teal-50 mb-10 leading-relaxed">
                        From small fixes to major upgrades, let's make your home better together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:4077207476" className="btn-gradient-glass btn-gradient-shimmer">
                            <Phone size={20} /> Call Now: (407) 720-7476
                        </a>
                        <a href="sms:4077207476" className="btn-gradient-glass">
                            <span>💬</span> Text Us
                        </a>
                        <a href="mailto:info@luxht.com" className="btn-gradient-glass">
                            <Mail size={20} /> Email Us
                        </a>
                    </div>
                </div>
            </section>


        </main>
    );
}
