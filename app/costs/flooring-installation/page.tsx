"use client";

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft, DollarSign, CheckCircle, Lightbulb, Phone, Clock, Shield, ChevronDown, ChevronUp, Home, Layers } from 'lucide-react';
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

export default function FlooringCostPage() {
    const { openModal } = useModal();

    const faqData = [
        { question: "How much does it cost to install flooring per square foot?", answer: "In Orlando, flooring installation costs $3-$8/sq ft for laminate, $4-$10/sq ft for vinyl plank, $8-$15/sq ft for hardwood, and $10-$20/sq ft for tile. These prices include materials and labor." },
        { question: "What is the cheapest flooring to install?", answer: "Laminate flooring is typically the most affordable option at $3-$8 per square foot installed. Vinyl plank is slightly more at $4-$10/sq ft but offers better water resistance." },
        { question: "How long does flooring installation take?", answer: "A single room (200 sq ft) typically takes 1 day. A whole-home installation (1,500+ sq ft) takes 3-5 days depending on the flooring type and complexity." },
        { question: "Should I remove old flooring myself?", answer: "DIY removal can save $1-$3 per square foot on labor. However, professional removal ensures proper subfloor preparation and may be required for warranty coverage." }
    ];

    return (
        <main className="min-h-screen bg-white text-slate-800 font-sans">
            <Navbar />
            <header className="relative bg-gradient-to-br from-[#584D94] to-[#7B6FCC] pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 opacity-10"><div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div><div className="absolute bottom-10 right-10 w-96 h-96 bg-[#64CEBB] rounded-full blur-3xl"></div></div>
                <div className="container mx-auto px-4 relative z-10">
                    <Link href="/costs" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"><ArrowLeft size={18} /> Back to Cost Guides</Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 py-2 px-4 rounded-full text-sm font-semibold text-white/90 mb-4"><Clock size={16} /> Updated January 2026</div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">How Much Does Flooring Installation Cost in Orlando?</h1>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">Compare prices for hardwood, laminate, vinyl, and tile flooring installation in Central Florida.</p>

                        {/* Per Sq Ft Pricing */}
                        <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-[#64CEBB] rounded-xl flex items-center justify-center"><DollarSign className="w-8 h-8 text-white" /></div>
                                <div className="text-center sm:text-left">
                                    <div className="text-white/70 text-sm">Typical Range</div>
                                    <div className="text-4xl font-bold text-white">$3 – $20/sq ft</div>
                                </div>
                            </div>
                            <div className="hidden sm:block w-px h-12 bg-white/20"></div>
                            <div className="text-white/90 text-sm max-w-xs text-center sm:text-left">
                                <strong className="text-white">Most Popular:</strong><br />
                                $6-$10/sq ft (Vinyl Plank + Installation)
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-8 px-4 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto max-w-4xl">
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-2xl font-bold text-[#64CEBB]">$3-$8/ft²</div><div className="text-slate-500 text-sm">Laminate</div></div>
                        <div><div className="text-2xl font-bold text-[#64CEBB]">$4-$10/ft²</div><div className="text-slate-500 text-sm">Vinyl Plank</div></div>
                        <div><div className="text-2xl font-bold text-[#64CEBB]">$8-$15/ft²</div><div className="text-slate-500 text-sm">Hardwood</div></div>
                        <div><div className="text-2xl font-bold text-[#64CEBB]">$10-$20/ft²</div><div className="text-slate-500 text-sm">Tile</div></div>
                    </div>
                </div>
            </section>

            <article className="py-16 px-4">
                <div className="container mx-auto max-w-4xl">

                    {/* Typical Project Example - NEW */}
                    <section className="mb-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-4 flex items-center gap-2">
                            <Home className="w-6 h-6" /> Typical Room Installation
                        </h2>
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <h3 className="font-bold text-lg mb-4">Bedroom Flooring Project (300 sq ft)</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                    <span className="text-slate-600">Vinyl plank flooring material (300 sq ft @ $5/sq ft)</span>
                                    <span className="font-semibold">$1,500</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                    <span className="text-slate-600">Old carpet removal & subfloor prep</span>
                                    <span className="font-semibold">$300</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                    <span className="text-slate-600">Professional installation labor</span>
                                    <span className="font-semibold">$600</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                    <span className="text-slate-600">Baseboards (40 ft @ $4/ft)</span>
                                    <span className="font-semibold">$160</span>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="font-bold text-lg">Total Project Cost</span>
                                    <span className="font-bold text-2xl text-[#64CEBB]">$2,560</span>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-4 italic">💡 Cost per sq ft installed: $7 (vinyl plank) + $2 (removal/prep) = $8.53/sq ft total</p>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6 flex items-center gap-3"><Layers className="w-6 h-6" /> Flooring Cost by Material</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                                <thead><tr className="bg-[#584D94] text-white"><th className="text-left p-4 font-semibold">Flooring Type</th><th className="text-left p-4 font-semibold">Material Cost</th><th className="text-left p-4 font-semibold">Installed Cost</th></tr></thead>
                                <tbody>
                                    <tr className="border-b border-slate-100"><td className="p-4 font-medium">Laminate</td><td className="p-4 text-slate-600">$1 - $5/sq ft</td><td className="p-4 font-semibold text-[#64CEBB]">$3 - $8/sq ft</td></tr>
                                    <tr className="border-b border-slate-100 bg-slate-50"><td className="p-4 font-medium">Vinyl Plank (LVP)</td><td className="p-4 text-slate-600">$2 - $7/sq ft</td><td className="p-4 font-semibold text-[#64CEBB]">$4 - $10/sq ft</td></tr>
                                    <tr className="border-b border-slate-100"><td className="p-4 font-medium">Engineered Hardwood</td><td className="p-4 text-slate-600">$4 - $10/sq ft</td><td className="p-4 font-semibold text-[#64CEBB]">$8 - $15/sq ft</td></tr>
                                    <tr className="border-b border-slate-100 bg-slate-50"><td className="p-4 font-medium">Solid Hardwood</td><td className="p-4 text-slate-600">$5 - $12/sq ft</td><td className="p-4 font-semibold text-[#64CEBB]">$10 - $18/sq ft</td></tr>
                                    <tr className="border-b border-slate-100"><td className="p-4 font-medium">Ceramic Tile</td><td className="p-4 text-slate-600">$1 - $10/sq ft</td><td className="p-4 font-semibold text-[#64CEBB]">$10 - $18/sq ft</td></tr>
                                    <tr className="bg-slate-50"><td className="p-4 font-medium">Porcelain Tile</td><td className="p-4 text-slate-600">$3 - $15/sq ft</td><td className="p-4 font-semibold text-[#64CEBB]">$12 - $20/sq ft</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6 flex items-center gap-3"><Home className="w-6 h-6" /> Whole-Home Installation Estimates</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                                <thead><tr className="bg-[#584D94] text-white"><th className="text-left p-4 font-semibold">Home Size</th><th className="text-left p-4 font-semibold">Laminate</th><th className="text-left p-4 font-semibold">Vinyl Plank</th><th className="text-left p-4 font-semibold">Hardwood</th></tr></thead>
                                <tbody>
                                    <tr className="border-b border-slate-100"><td className="p-4 font-medium">1,000 sq ft</td><td className="p-4 text-[#64CEBB]">$3,000-$8,000</td><td className="p-4 text-[#64CEBB]">$4,000-$10,000</td><td className="p-4 text-[#64CEBB]">$8,000-$15,000</td></tr>
                                    <tr className="border-b border-slate-100 bg-slate-50"><td className="p-4 font-medium">1,500 sq ft</td><td className="p-4 text-[#64CEBB]">$4,500-$12,000</td><td className="p-4 text-[#64CEBB]">$6,000-$15,000</td><td className="p-4 text-[#64CEBB]">$12,000-$22,500</td></tr>
                                    <tr><td className="p-4 font-medium">2,000 sq ft</td><td className="p-4 text-[#64CEBB]">$6,000-$16,000</td><td className="p-4 text-[#64CEBB]">$8,000-$20,000</td><td className="p-4 text-[#64CEBB]">$16,000-$30,000</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-16 bg-amber-50 rounded-2xl p-8 border border-amber-100">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-amber-500" /> Tips to Save on Flooring</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">1</div><div><h4 className="font-semibold mb-1">Remove Old Flooring Yourself</h4><p className="text-sm text-slate-600">Save $1-$3/sq ft on demolition costs.</p></div></div>
                            <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">2</div><div><h4 className="font-semibold mb-1">Choose LVP Over Hardwood</h4><p className="text-sm text-slate-600">Modern vinyl looks like wood at half the cost.</p></div></div>
                            <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">3</div><div><h4 className="font-semibold mb-1">Buy During Sales</h4><p className="text-sm text-slate-600">Holiday sales offer significant material discounts.</p></div></div>
                            <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">4</div><div><h4 className="font-semibold mb-1">Install Whole Home at Once</h4><p className="text-sm text-slate-600">Per-room installations cost more per sq ft.</p></div></div>
                        </div>
                    </section>

                    <section className="mb-16 bg-gradient-to-br from-[#584D94] to-[#7B6FCC] rounded-2xl p-8 text-white">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><Shield className="w-6 h-6" /> Why Choose LUXHT Fix?</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" /><div><h4 className="font-semibold">200+ Projects Completed</h4><p className="text-white/70 text-sm">Experienced with all flooring types.</p></div></div>
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" /><div><h4 className="font-semibold">Warranty-Compliant Install</h4><p className="text-white/70 text-sm">We follow manufacturer standards.</p></div></div>
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" /><div><h4 className="font-semibold">Subfloor Prep Included</h4><p className="text-white/70 text-sm">Proper leveling and prep work.</p></div></div>
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" /><div><h4 className="font-semibold">Free In-Home Estimates</h4><p className="text-white/70 text-sm">Accurate quotes before you commit.</p></div></div>
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
                            <Link href="/costs/drywall-repair" className="group border border-slate-200 rounded-xl p-4 hover:border-[#64CEBB] transition-colors"><h3 className="font-semibold group-hover:text-[#584D94] transition-colors">Drywall Repair</h3><p className="text-sm text-slate-500">$75 - $1,200</p></Link>
                            <Link href="/costs/bathroom-remodel" className="group border border-slate-200 rounded-xl p-4 hover:border-[#64CEBB] transition-colors"><h3 className="font-semibold group-hover:text-[#584D94] transition-colors">Bathroom Remodel</h3><p className="text-sm text-slate-500">$3,000 - $50,000+</p></Link>
                            <Link href="/costs/kitchen-refacing" className="group border border-slate-200 rounded-xl p-4 hover:border-[#64CEBB] transition-colors"><h3 className="font-semibold group-hover:text-[#584D94] transition-colors">Kitchen Refacing</h3><p className="text-sm text-slate-500">$4,000 - $20,000</p></Link>
                        </div>
                    </section>
                </div>
            </article>

            <footer className="bg-slate-900 text-white py-12 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-center md:text-left"><div className="font-bold text-xl mb-2"><span className="text-[#64CEBB]">LUXHT</span> Fix</div><p className="text-slate-400 text-sm">Professional Home Services in Orlando</p></div>
                        <div className="flex gap-6 text-slate-400 text-sm"><Link href="/" className="hover:text-white transition-colors">Home</Link><Link href="/services" className="hover:text-white transition-colors">Services</Link><Link href="/costs" className="hover:text-white transition-colors">Costs</Link><Link href="/about" className="hover:text-white transition-colors">About</Link></div>
                    </div>
                    <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500 text-sm">© 2026 LUXHT Fix. All rights reserved.</div>
                </div>
            </footer>
        </main>
    );
}
