"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import {
    ArrowLeft, DollarSign, CheckCircle, AlertTriangle, Lightbulb,
    Phone, Clock, Shield, ChevronDown, ChevronUp, Tv,
    Monitor, Cable, Layers, Users
} from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { useState } from 'react';

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-slate-200 last:border-0">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full py-4 flex items-center justify-between text-left hover:text-[#584D94] transition-colors">
                <span className="font-semibold text-slate-800">{question}</span>
                {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
            </button>
            {isOpen && <div className="pb-4 text-slate-600 leading-relaxed">{answer}</div>}
        </div>
    );
}

export default function TVMountingCostPage() {
    const { openModal } = useModal();

    const faqData = [
        { question: "How much does it cost to mount a TV on the wall?", answer: "Basic TV wall mounting in Orlando costs $100-$200 for a fixed mount. Tilting mounts run $150-$250, and full-motion articulating mounts cost $200-$350. Prices include mounting hardware installation but not the mount itself." },
        { question: "Does TV mounting include hiding cables?", answer: "Basic mounting typically doesn't include cable concealment. In-wall cable concealment adds $100-$200 to the total cost. Surface-mounted cord covers are a cheaper alternative at $30-$50." },
        { question: "Can any TV be mounted on the wall?", answer: "Most flat-screen TVs from 32\" to 85\" can be wall-mounted if they have VESA mounting holes. Very heavy TVs (over 100 lbs) may require special mounts and reinforced wall attachments." },
        { question: "How long does TV mounting take?", answer: "Standard TV mounting takes 1-2 hours. Add an hour for cable concealment. Above-fireplace installations or complex setups may take 2-3 hours total." }
    ];

    return (
        <main className="min-h-screen bg-white text-slate-800 font-sans">
            <Navbar />
            <header className="relative bg-gradient-to-br from-[#584D94] to-[#7B6FCC] pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#64CEBB] rounded-full blur-3xl"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <Link href="/costs/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
                        <ArrowLeft size={18} /> Back to Cost Guides
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 py-2 px-4 rounded-full text-sm font-semibold text-white/90 mb-4">
                            <Clock size={16} /> Updated January 2026
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">How Much Does TV Mounting Cost in Orlando?</h1>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">Professional TV mounting prices for all sizes and mount types. Get your TV installed safely and securely.</p>

                        {/* Starting At Price Highlight */}
                        <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-[#64CEBB] rounded-xl flex items-center justify-center">
                                    <DollarSign className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-center sm:text-left">
                                    <div className="text-white/70 text-sm">Starting at</div>
                                    <div className="text-4xl font-bold text-white">$100</div>
                                </div>
                            </div>
                            <div className="hidden sm:block w-px h-12 bg-white/20"></div>
                            <div className="text-white/90 text-sm max-w-xs text-center sm:text-left">
                                Most Popular Package: <strong className="text-white">$250</strong><br />
                                (65" TV + concealed cables + soundbar)
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Popular Packages - NEW SECTION */}
            <section className="py-12 px-4 bg-gradient-to-br from-slate-50 to-white border-b border-slate-200">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-2xl font-bold text-center text-[#584D94] mb-3">TV Mounting Packages</h2>
                    <p className="text-center text-slate-600 mb-8">Choose the package that fits your needs</p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Basic Package */}
                        <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-[#64CEBB] transition-all">
                            <div className="text-sm font-bold text-slate-600 uppercase tracking-wide mb-2">Basic Mount</div>
                            <div className="text-3xl font-bold text-[#584D94] mb-1">$100</div>
                            <div className="text-slate-500 text-sm mb-6">Starting at</div>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle className="w-5 h-5 text-[#64CEBB] flex-shrink-0 mt-0.5" />
                                    <span>Up to 55" TV</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle className="w-5 h-5 text-[#64CEBB] flex-shrink-0 mt-0.5" />
                                    <span>Fixed mount installation</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle className="w-5 h-5 text-[#64CEBB] flex-shrink-0 mt-0.5" />
                                    <span>Basic cable management</span>
                                </li>
                            </ul>
                        </div>

                        {/* Popular Package */}
                        <div className="bg-gradient-to-br from-[#584D94] to-[#7B6FCC] border-2 border-[#584D94] rounded-2xl p-6 text-white relative transform hover:scale-105 transition-all shadow-xl">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#64CEBB] text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
                            <div className="text-sm font-bold text-white/80 uppercase tracking-wide mb-2">Complete Setup</div>
                            <div className="text-3xl font-bold text-white mb-1">$250</div>
                            <div className="text-white/70 text-sm mb-6">Typical project cost</div>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle className="w-5 h-5 text-[#64CEBB] flex-shrink-0 mt-0.5" />
                                    <span>Up to 65" TV</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle className="w-5 h-5 text-[#64CEBB] flex-shrink-0 mt-0.5" />
                                    <span>Tilt or full-motion mount</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle className="w-5 h-5 text-[#64CEBB] flex-shrink-0 mt-0.5" />
                                    <span>In-wall cable concealment</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle className="w-5 h-5 text-[#64CEBB] flex-shrink-0 mt-0.5" />
                                    <span>Soundbar mounting</span>
                                </li>
                            </ul>
                        </div>

                        {/* Premium Package */}
                        <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-[#64CEBB] transition-all">
                            <div className="text-sm font-bold text-slate-600 uppercase tracking-wide mb-2">Premium Install</div>
                            <div className="text-3xl font-bold text-[#584D94] mb-1">$400+</div>
                            <div className="text-slate-500 text-sm mb-6">Custom projects</div>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle className="w-5 h-5 text-[#64CEBB] flex-shrink-0 mt-0.5" />
                                    <span>75"+ TV or multiple TVs</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle className="w-5 h-5 text-[#64CEBB] flex-shrink-0 mt-0.5" />
                                    <span>Above fireplace mounting</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle className="w-5 h-5 text-[#64CEBB] flex-shrink-0 mt-0.5" />
                                    <span>Full cable concealment</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm">
                                    <CheckCircle className="w-5 h-5 text-[#64CEBB] flex-shrink-0 mt-0.5" />
                                    <span>Component shelf + soundbar</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <button onClick={() => openModal('quote')} className="btn-gradient-primary btn-gradient-shimmer">
                            <CheckCircle size={20} /> Get Your Exact Quote
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-8 px-4 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto max-w-4xl">
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-2xl font-bold text-[#64CEBB]">$100-$200</div><div className="text-slate-500 text-sm">Fixed Mount</div></div>
                        <div><div className="text-2xl font-bold text-[#64CEBB]">$150-$250</div><div className="text-slate-500 text-sm">Tilt Mount</div></div>
                        <div><div className="text-2xl font-bold text-[#64CEBB]">$200-$350</div><div className="text-slate-500 text-sm">Full Motion</div></div>
                        <div><div className="text-2xl font-bold text-[#64CEBB]">$250-$400</div><div className="text-slate-500 text-sm">Above Fireplace</div></div>
                    </div>
                </div>
            </section>

            <article className="py-16 px-4">
                <div className="container mx-auto max-w-4xl">

                    {/* Typical Project Example - NEW */}
                    <section className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-4 flex items-center gap-2">
                            <Tv className="w-6 h-6" /> Typical Project Cost
                        </h2>
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <h3 className="font-bold text-lg mb-4">65" Living Room TV Installation</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                    <span className="text-slate-600">Full-motion wall mount installation</span>
                                    <span className="font-semibold">$200</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                    <span className="text-slate-600">In-wall cable concealment</span>
                                    <span className="font-semibold">$150</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                    <span className="text-slate-600">Soundbar mounting</span>
                                    <span className="font-semibold">$75</span>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="font-bold text-lg">Total Project Cost</span>
                                    <span className="font-bold text-2xl text-[#64CEBB]">$425</span>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-4 italic">* Actual costs may vary based on wall type, TV size, and accessibility</p>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6 flex items-center gap-3"><Monitor className="w-6 h-6" /> TV Mounting Cost by Mount Type</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                                <thead><tr className="bg-[#584D94] text-white"><th className="text-left p-4 font-semibold">Mount Type</th><th className="text-left p-4 font-semibold">Best For</th><th className="text-left p-4 font-semibold">Installation Cost</th></tr></thead>
                                <tbody>
                                    <tr className="border-b border-slate-100"><td className="p-4 font-medium">Fixed/Flat Mount</td><td className="p-4 text-slate-600">TVs at eye level, minimal movement needed</td><td className="p-4 font-semibold text-[#64CEBB]">$100 - $200</td></tr>
                                    <tr className="border-b border-slate-100 bg-slate-50"><td className="p-4 font-medium">Tilting Mount</td><td className="p-4 text-slate-600">Mounted above eye level, reduces glare</td><td className="p-4 font-semibold text-[#64CEBB]">$150 - $250</td></tr>
                                    <tr className="border-b border-slate-100"><td className="p-4 font-medium">Full-Motion/Articulating</td><td className="p-4 text-slate-600">Corner mounting, multiple viewing angles</td><td className="p-4 font-semibold text-[#64CEBB]">$200 - $350</td></tr>
                                    <tr className="border-b border-slate-100 bg-slate-50"><td className="p-4 font-medium">Above Fireplace</td><td className="p-4 text-slate-600">Special brackets, pull-down mounts</td><td className="p-4 font-semibold text-[#64CEBB]">$250 - $400</td></tr>
                                    <tr><td className="p-4 font-medium">Ceiling Mount</td><td className="p-4 text-slate-600">Bonus rooms, commercial spaces</td><td className="p-4 font-semibold text-[#64CEBB]">$300 - $500</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-slate-500 text-sm mt-4 italic">* Prices are for installation labor. Mount hardware is additional ($30-$300 depending on type and quality).</p>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6 flex items-center gap-3"><Cable className="w-6 h-6" /> Add-On Services</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                                <thead><tr className="bg-[#584D94] text-white"><th className="text-left p-4 font-semibold">Service</th><th className="text-left p-4 font-semibold">Price Range</th></tr></thead>
                                <tbody>
                                    <tr className="border-b border-slate-100"><td className="p-4 font-medium">In-Wall Cable Concealment</td><td className="p-4 font-semibold text-[#64CEBB]">$100 - $200</td></tr>
                                    <tr className="border-b border-slate-100 bg-slate-50"><td className="p-4 font-medium">Surface Cord Cover</td><td className="p-4 font-semibold text-[#64CEBB]">$30 - $50</td></tr>
                                    <tr className="border-b border-slate-100"><td className="p-4 font-medium">Soundbar Mounting</td><td className="p-4 font-semibold text-[#64CEBB]">$50 - $100</td></tr>
                                    <tr className="bg-slate-50"><td className="p-4 font-medium">Component Shelf Install</td><td className="p-4 font-semibold text-[#64CEBB]">$75 - $150</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-16 bg-amber-50 rounded-2xl p-8 border border-amber-100">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-amber-500" /> Tips to Save on TV Mounting</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">1</div>
                                <div><h4 className="font-semibold mb-1">Buy Your Own Mount</h4><p className="text-sm text-slate-600">Purchase the mount yourself to avoid markup.</p></div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">2</div>
                                <div><h4 className="font-semibold mb-1">Choose a Fixed Mount</h4><p className="text-sm text-slate-600">Simple fixed mounts cost less to install.</p></div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">3</div>
                                <div><h4 className="font-semibold mb-1">Skip In-Wall Cables</h4><p className="text-sm text-slate-600">Use cord covers instead of in-wall concealment.</p></div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">4</div>
                                <div><h4 className="font-semibold mb-1">Bundle Services</h4><p className="text-sm text-slate-600">Mount multiple TVs in one visit for savings.</p></div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16 bg-gradient-to-br from-[#584D94] to-[#7B6FCC] rounded-2xl p-8 text-white">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><Shield className="w-6 h-6" /> Why Choose LUXHT Fix for TV Mounting?</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" /><div><h4 className="font-semibold">Stud-Secure Mounting</h4><p className="text-white/70 text-sm">We always mount into studs for maximum safety.</p></div></div>
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" /><div><h4 className="font-semibold">All TV Sizes</h4><p className="text-white/70 text-sm">From 32" to 85"+ TVs, we handle them all.</p></div></div>
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" /><div><h4 className="font-semibold">Clean Cable Management</h4><p className="text-white/70 text-sm">Professional concealment options available.</p></div></div>
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" /><div><h4 className="font-semibold">Same-Day Available</h4><p className="text-white/70 text-sm">Quick turnaround for most installations.</p></div></div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button onClick={() => openModal('quote')} className="bg-white text-[#584D94] font-bold py-3 px-6 rounded-full hover:shadow-lg transition-all inline-flex items-center justify-center gap-2"><CheckCircle size={20} /> Get Free Quote</button>
                            <a href="tel:4077207476" className="border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"><Phone size={20} /> (407) 720-7476</a>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6">Frequently Asked Questions</h2>
                        <div className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-200">
                            {faqData.map((faq, index) => <FAQItem key={index} question={faq.question} answer={faq.answer} />)}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6">Related Cost Guides</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <Link href="/costs/smart-home-installation/" className="group border border-slate-200 rounded-xl p-4 hover:border-[#64CEBB] transition-colors"><h3 className="font-semibold group-hover:text-[#584D94] transition-colors">Smart Home Installation</h3><p className="text-sm text-slate-500">$150 - $5,000+</p></Link>
                            <Link href="/costs/furniture-assembly/" className="group border border-slate-200 rounded-xl p-4 hover:border-[#64CEBB] transition-colors"><h3 className="font-semibold group-hover:text-[#584D94] transition-colors">Furniture Assembly</h3><p className="text-sm text-slate-500">$40 - $400</p></Link>
                            <Link href="/costs/drywall-repair/" className="group border border-slate-200 rounded-xl p-4 hover:border-[#64CEBB] transition-colors"><h3 className="font-semibold group-hover:text-[#584D94] transition-colors">Drywall Repair</h3><p className="text-sm text-slate-500">$75 - $1,200</p></Link>
                        </div>
                    </section>
                </div>
            </article>


            <Footer />
        </main>
    );
}
