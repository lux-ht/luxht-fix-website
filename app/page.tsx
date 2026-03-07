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

                {/* Mobile mini mascot — bottom-right */}
                <img
                    src="/images/assets/mascots-real.png"
                    alt=""
                    aria-hidden="true"
                    className="block md:hidden absolute bottom-0 right-0 h-[130px] w-auto z-[1] pointer-events-none opacity-90 mascots-img-mobile"
                />

                <div className="container mx-auto px-4 relative z-10">

                    {/* Two-column layout: mascots left, text right */}
                    <div className="hidden md:flex items-center gap-8 max-w-7xl mx-auto">
                        {/* Left column — mascots */}
                        <div className="flex-shrink-0 w-[38%] flex items-end justify-center">
                            <img
                                src="/images/assets/mascots-real.png"
                                alt="LUXHT Fix handyman team"
                                className="mascots-img w-full max-w-[420px] h-auto"
                                style={{ filter: 'drop-shadow(4px 4px 16px rgba(0,0,0,0.2))' }}
                            />
                        </div>

                        {/* Right column — text content (desktop) */}
                        <div className="flex-1 text-center md:text-left">
                            {/* Stats strip — replaces the badge */}
                            <div className="flex items-center gap-7 mb-8 justify-center md:justify-start">
                                <div>
                                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#584D94] to-[#7B6FCC] leading-none">500+</div>
                                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mt-1">Projects Done</div>
                                </div>
                                <div className="w-px h-11 bg-gradient-to-b from-[#64CEBB]/30 to-[#584D94]/30 rounded-full"></div>
                                <div>
                                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#584D94] to-[#7B6FCC] leading-none">40+</div>
                                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mt-1">Years Exp.</div>
                                </div>
                                <div className="w-px h-11 bg-gradient-to-b from-[#64CEBB]/30 to-[#584D94]/30 rounded-full"></div>
                                <div>
                                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#64CEBB] to-[#4BC0AD] leading-none">100%</div>
                                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mt-1">Satisfaction</div>
                                </div>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                                Handyman Services<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#584D94] to-[#7B6FCC]">in Orlando, FL</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl font-light leading-relaxed">
                                Expert craftsmanship with transparent pricing for Orlando's discerning homeowners. Specializing in <Link href="/drywall-orlando/" className="text-[#584D94] font-medium hover:underline">drywall repair</Link>, <Link href="/tv-mounting-orlando/" className="text-[#584D94] font-medium hover:underline">TV mounting</Link>, <Link href="/flooring-installation-orlando/" className="text-[#584D94] font-medium hover:underline">flooring</Link>, <Link href="/deck-building-orlando/" className="text-[#584D94] font-medium hover:underline">decks</Link>, <Link href="/bath-remodel-orlando/" className="text-[#584D94] font-medium hover:underline">bath remodels</Link>, <Link href="/kitchen-refacing-orlando/" className="text-[#584D94] font-medium hover:underline">kitchen refacing</Link>, and <Link href="/services/" className="text-[#584D94] font-medium hover:underline">more</Link>.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 items-start">
                                <a href="tel:4077207476" className="btn-gradient-primary btn-gradient-shimmer">
                                    <Phone size={20} /> (407) 720-7476
                                </a>
                                <Link href="/services/" className="btn-gradient-secondary">
                                    Browse All Services <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Mobile text content — single column, centered */}
                    <div className="md:hidden text-center">
                        {/* Stats strip — replaces badge */}
                        <div className="flex items-center justify-center gap-6 border-b border-slate-100 pb-5 mb-6">
                            <div className="flex flex-col items-center">
                                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#584D94] to-[#7B6FCC] leading-none">500+</span>
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Projects</span>
                            </div>
                            <div className="w-px h-10 bg-gradient-to-b from-[#64CEBB]/30 to-[#584D94]/30 rounded-full"></div>
                            <div className="flex flex-col items-center">
                                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#584D94] to-[#7B6FCC] leading-none">40+</span>
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Yrs Exp.</span>
                            </div>
                            <div className="w-px h-10 bg-gradient-to-b from-[#64CEBB]/30 to-[#584D94]/30 rounded-full"></div>
                            <div className="flex flex-col items-center">
                                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#64CEBB] to-[#4BC0AD] leading-none">100%</span>
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Sat.</span>
                            </div>
                        </div>

                        <h1 className="text-[2.75rem] font-bold text-slate-900 mb-5 tracking-tight leading-tight">
                            Handyman Services<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#584D94] to-[#7B6FCC]">in Orlando, FL</span>
                        </h1>

                        <p className="text-lg text-slate-600 mb-6 font-light leading-relaxed">
                            Professional handyman services in Orlando — fast, clean, and guaranteed.
                        </p>

                        <div className="flex flex-col gap-3 justify-center items-stretch px-4 pb-4">
                            <a href="tel:4077207476" className="btn-gradient-primary btn-gradient-shimmer justify-center py-4 text-base">
                                <Phone size={20} /> (407) 720-7476
                            </a>
                            <a href="sms:4077207476" className="flex items-center justify-center gap-2 py-4 rounded-full font-bold text-sm border-2 border-[#584D94] text-[#584D94] bg-white">
                                <span>💬</span> Text Us for a Quick Quote
                            </a>
                            <Link href="/services/" className="flex items-center justify-center gap-1 text-sm text-slate-500 font-medium pt-1">
                                Browse All Services <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>

                </div>
            </header>

            {/* FEATURED SPECIALTY: DRYWALL */}
            <section className="pt-8 md:pt-48 pb-20 px-4 container mx-auto">
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

            {/* SERVICE CATEGORIES — 9 H2 SECTIONS */}
            <section className="py-20 bg-slate-50 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <p className="text-sm font-bold tracking-widest text-[#64CEBB] uppercase mb-2">Our Service Categories</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Expert Home Services in Orlando</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* 1. Drywall */}
                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-[#584D94]/10 rounded-xl flex items-center justify-center text-[#584D94] mb-4"><Hammer size={24} /></div>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">
                                <Link href="/drywall-orlando/" className="hover:text-[#584D94] transition-colors">Drywall Services in Orlando</Link>
                            </h2>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/drywall-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> Drywall Repair</Link></li>
                                <li><Link href="/drywall-crack-repair-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> Drywall Crack Repair</Link></li>
                                <li><Link href="/drywall-hole-repair-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> Drywall Hole Repair</Link></li>
                                <li><Link href="/water-damage-drywall-repair-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> Water Damage Drywall Repair</Link></li>
                                <li><Link href="/texture-matching-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> Texture Matching</Link></li>
                            </ul>
                        </div>

                        {/* 2. TV Mounting */}
                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-[#584D94]/10 rounded-xl flex items-center justify-center text-[#584D94] mb-4"><Tv size={24} /></div>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">
                                <Link href="/tv-mounting-orlando/" className="hover:text-[#584D94] transition-colors">TV Mounting in Orlando</Link>
                            </h2>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/tv-mounting-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> TV Mounting</Link></li>
                                <li><Link href="/tv-cable-concealment-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> TV Cable Concealment</Link></li>
                                <li><Link href="/fireplace-tv-mounting-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> Fireplace TV Mounting</Link></li>
                                <li><Link href="/soundbar-mounting-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> Soundbar Mounting</Link></li>
                                <li><Link href="/outdoor-tv-mounting-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> Outdoor TV Mounting</Link></li>
                            </ul>
                        </div>

                        {/* 3. Door & Lock */}
                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-[#584D94]/10 rounded-xl flex items-center justify-center text-[#584D94] mb-4"><DoorOpen size={24} /></div>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">
                                <Link href="/door-lock-trim-orlando/" className="hover:text-[#584D94] transition-colors">Door and Lock Services in Orlando</Link>
                            </h2>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/door-lock-trim-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> Door, Lock & Trim</Link></li>
                                <li><Link href="/door-alignment-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> Door Alignment</Link></li>
                                <li><Link href="/deadbolt-installation-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> Deadbolt Installation</Link></li>
                                <li><Link href="/smart-lock-installation-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> Smart Lock Installation</Link></li>
                                <li><Link href="/door-handle-replacement-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> Door Handle Replacement</Link></li>
                            </ul>
                        </div>

                        {/* 4. Trim & Molding */}
                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-[#584D94]/10 rounded-xl flex items-center justify-center text-[#584D94] mb-4"><Ruler size={24} /></div>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">
                                <Link href="/baseboard-installation-orlando/" className="hover:text-[#584D94] transition-colors">Trim and Molding in Orlando</Link>
                            </h2>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/baseboard-installation-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> Baseboard Installation</Link></li>
                                <li><Link href="/crown-molding-installation-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> Crown Molding Installation</Link></li>
                            </ul>
                        </div>

                        {/* 5. Faucets & Fixtures */}
                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-[#584D94]/10 rounded-xl flex items-center justify-center text-[#584D94] mb-4"><Wrench size={24} /></div>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">
                                <Link href="/faucet-fixtures-orlando/" className="hover:text-[#584D94] transition-colors">Faucets and Fixtures in Orlando</Link>
                            </h2>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/faucet-fixtures-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> Faucets & Fixtures</Link></li>
                                <li><Link href="/faucet-replacement-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> Faucet Replacement</Link></li>
                                <li><Link href="/shower-head-replacement-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> Shower Head Replacement</Link></li>
                                <li><Link href="/garbage-disposal-installation-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> Garbage Disposal Installation</Link></li>
                                <li><Link href="/toilet-repair-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> Toilet Repair</Link></li>
                            </ul>
                        </div>

                        {/* 6. Smart Home */}
                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-[#584D94]/10 rounded-xl flex items-center justify-center text-[#584D94] mb-4"><Zap size={24} /></div>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">
                                <Link href="/smart-home-installation-orlando/" className="hover:text-[#584D94] transition-colors">Smart Home Installation in Orlando</Link>
                            </h2>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/smart-home-installation-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> Smart Home Installation</Link></li>
                                <li><Link href="/smart-lock-installation-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> Smart Lock Installation</Link></li>
                                <li><Link href="/smart-doorbell-installation-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> Smart Doorbell Installation</Link></li>
                            </ul>
                        </div>

                        {/* 7. Flooring */}
                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-[#584D94]/10 rounded-xl flex items-center justify-center text-[#584D94] mb-4"><Grid size={24} /></div>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">
                                <Link href="/flooring-installation-orlando/" className="hover:text-[#584D94] transition-colors">Flooring Installation in Orlando</Link>
                            </h2>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/flooring-installation-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> Hardwood, LVP & Tile</Link></li>
                            </ul>
                        </div>

                        {/* 8. Kitchen & Bath */}
                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-[#584D94]/10 rounded-xl flex items-center justify-center text-[#584D94] mb-4"><Paintbrush size={24} /></div>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">
                                <Link href="/bath-remodel-orlando/" className="hover:text-[#584D94] transition-colors">Kitchen and Bath in Orlando</Link>
                            </h2>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/bath-remodel-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> Bath Remodel</Link></li>
                                <li><Link href="/kitchen-refacing-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> Kitchen Cabinet Refacing</Link></li>
                            </ul>
                        </div>

                        {/* 9. Deck & Outdoor */}
                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-[#584D94]/10 rounded-xl flex items-center justify-center text-[#584D94] mb-4"><PaintRoller size={24} /></div>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">
                                <Link href="/deck-building-orlando/" className="hover:text-[#584D94] transition-colors">Deck Building and Outdoor in Orlando</Link>
                            </h2>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/deck-building-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> Custom Deck Building</Link></li>
                                <li><Link href="/furniture-assembly-orlando/" className="text-slate-600 hover:text-[#584D94] flex items-center gap-2"><ArrowRight size={12} className="text-[#64CEBB]" /> Furniture Assembly</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/services/" className="text-[#584D94] font-bold border-b-2 border-[#584D94]/20 hover:border-[#584D94] transition-all pb-1">
                            View All Services
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
