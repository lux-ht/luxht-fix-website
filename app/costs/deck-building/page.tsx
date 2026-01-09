"use client";

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft, DollarSign, CheckCircle, Lightbulb, Phone, Clock, Shield, ChevronDown, ChevronUp, Fence } from 'lucide-react';
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

export default function DeckBuildingCostPage() {
    const { openModal } = useModal();

    const faqData = [
        { question: "How much does it cost to build a deck in Orlando?", answer: "A 200 sq ft deck costs $3,000-$5,000 for pressure-treated wood, $5,000-$9,000 for composite, and $7,000-$12,000 for hardwood/tropical wood. Larger decks with features like stairs and railings cost more." },
        { question: "Is composite decking worth the extra cost?", answer: "Composite costs 50-100% more upfront but lasts 25-30 years vs 10-15 for wood. No staining, sealing, or sanding required. Over 20 years, composite often costs less when factoring maintenance." },
        { question: "How long does deck construction take?", answer: "A basic deck takes 2-4 weeks including permit approval. Complex multi-level decks may take 4-6 weeks. The actual construction is typically 1-2 weeks once permits are approved." },
        { question: "Do I need a permit for a deck in Orlando?", answer: "Yes, most decks require a building permit in Orlando and surrounding areas. Permits cost $100-$500 depending on project size. LUXHT Fix handles permit applications for you." }
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
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">How Much Does Deck Building Cost in Orlando?</h1>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">Get pricing for custom deck construction in Central Florida, from pressure-treated wood to premium composite.</p>
                        <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                            <div className="w-14 h-14 bg-[#64CEBB] rounded-xl flex items-center justify-center"><DollarSign className="w-8 h-8 text-white" /></div>
                            <div><div className="text-white/70 text-sm">Average Cost Range</div><div className="text-3xl font-bold text-white">$15 - $60/sq ft</div></div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-8 px-4 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto max-w-4xl">
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div><div className="text-2xl font-bold text-[#64CEBB]">$15-$25/ft²</div><div className="text-slate-500 text-sm">Pressure-Treated</div></div>
                        <div><div className="text-2xl font-bold text-[#64CEBB]">$25-$45/ft²</div><div className="text-slate-500 text-sm">Composite</div></div>
                        <div><div className="text-2xl font-bold text-[#64CEBB]">$35-$60/ft²</div><div className="text-slate-500 text-sm">Hardwood</div></div>
                    </div>
                </div>
            </section>

            <article className="py-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6 flex items-center gap-3"><Fence className="w-6 h-6" /> Deck Cost by Size & Material</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                                <thead><tr className="bg-[#584D94] text-white"><th className="text-left p-4 font-semibold">Deck Size</th><th className="text-left p-4 font-semibold">Pressure-Treated</th><th className="text-left p-4 font-semibold">Composite</th><th className="text-left p-4 font-semibold">Hardwood</th></tr></thead>
                                <tbody>
                                    <tr className="border-b border-slate-100"><td className="p-4 font-medium">100 sq ft (10x10)</td><td className="p-4 text-[#64CEBB]">$1,500-$2,500</td><td className="p-4 text-[#64CEBB]">$2,500-$4,500</td><td className="p-4 text-[#64CEBB]">$3,500-$6,000</td></tr>
                                    <tr className="border-b border-slate-100 bg-slate-50"><td className="p-4 font-medium">200 sq ft (10x20)</td><td className="p-4 text-[#64CEBB]">$3,000-$5,000</td><td className="p-4 text-[#64CEBB]">$5,000-$9,000</td><td className="p-4 text-[#64CEBB]">$7,000-$12,000</td></tr>
                                    <tr className="border-b border-slate-100"><td className="p-4 font-medium">300 sq ft (12x25)</td><td className="p-4 text-[#64CEBB]">$4,500-$7,500</td><td className="p-4 text-[#64CEBB]">$7,500-$13,500</td><td className="p-4 text-[#64CEBB]">$10,500-$18,000</td></tr>
                                    <tr className="bg-slate-50"><td className="p-4 font-medium">400 sq ft (16x25)</td><td className="p-4 text-[#64CEBB]">$6,000-$10,000</td><td className="p-4 text-[#64CEBB]">$10,000-$18,000</td><td className="p-4 text-[#64CEBB]">$14,000-$24,000</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6">Add-On Features</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                                <thead><tr className="bg-[#584D94] text-white"><th className="text-left p-4 font-semibold">Feature</th><th className="text-left p-4 font-semibold">Cost Range</th></tr></thead>
                                <tbody>
                                    <tr className="border-b border-slate-100"><td className="p-4 font-medium">Stairs (per set)</td><td className="p-4 font-semibold text-[#64CEBB]">$500 - $1,500</td></tr>
                                    <tr className="border-b border-slate-100 bg-slate-50"><td className="p-4 font-medium">Railing (per linear ft)</td><td className="p-4 font-semibold text-[#64CEBB]">$20 - $75</td></tr>
                                    <tr className="border-b border-slate-100"><td className="p-4 font-medium">Built-in Benches</td><td className="p-4 font-semibold text-[#64CEBB]">$500 - $2,000</td></tr>
                                    <tr className="border-b border-slate-100 bg-slate-50"><td className="p-4 font-medium">Pergola</td><td className="p-4 font-semibold text-[#64CEBB]">$2,000 - $6,000</td></tr>
                                    <tr><td className="p-4 font-medium">Lighting Package</td><td className="p-4 font-semibold text-[#64CEBB]">$500 - $2,500</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-16 bg-amber-50 rounded-2xl p-8 border border-amber-100">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-amber-500" /> Tips to Save on Deck Building</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">1</div><div><h4 className="font-semibold mb-1">Choose Simple Shapes</h4><p className="text-sm text-slate-600">Rectangles cost less than angled or curved designs.</p></div></div>
                            <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">2</div><div><h4 className="font-semibold mb-1">Ground-Level Deck</h4><p className="text-sm text-slate-600">No railings required, saves $1,000+.</p></div></div>
                            <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">3</div><div><h4 className="font-semibold mb-1">Pressure-Treated Wood</h4><p className="text-sm text-slate-600">Half the cost of composite (maintain yearly).</p></div></div>
                            <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">4</div><div><h4 className="font-semibold mb-1">Off-Season Building</h4><p className="text-sm text-slate-600">Fall/winter may offer 10-15% discounts.</p></div></div>
                        </div>
                    </section>

                    <section className="mb-16 bg-gradient-to-br from-[#584D94] to-[#7B6FCC] rounded-2xl p-8 text-white">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><Shield className="w-6 h-6" /> Why Choose LUXHT Fix?</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" /><div><h4 className="font-semibold">Custom Deck Design</h4><p className="text-white/70 text-sm">Built to your exact specifications.</p></div></div>
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" /><div><h4 className="font-semibold">Permit Handling</h4><p className="text-white/70 text-sm">We manage all permit applications.</p></div></div>
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" /><div><h4 className="font-semibold">Licensed & Insured</h4><p className="text-white/70 text-sm">Full protection for your project.</p></div></div>
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" /><div><h4 className="font-semibold">Written Warranty</h4><p className="text-white/70 text-sm">Craftsmanship guaranteed.</p></div></div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button onClick={() => openModal('quote')} className="bg-white text-[#584D94] font-bold py-3 px-6 rounded-full hover:shadow-lg transition-all inline-flex items-center justify-center gap-2"><CheckCircle size={20} /> Get Free Quote</button>
                            <a href="tel:4072880832" className="border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"><Phone size={20} /> (407) 288-0832</a>
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
                            <Link href="/costs/flooring-installation" className="group border border-slate-200 rounded-xl p-4 hover:border-[#64CEBB] transition-colors"><h3 className="font-semibold group-hover:text-[#584D94] transition-colors">Flooring Installation</h3><p className="text-sm text-slate-500">$3 - $20/sq ft</p></Link>
                            <Link href="/costs/smart-home-installation" className="group border border-slate-200 rounded-xl p-4 hover:border-[#64CEBB] transition-colors"><h3 className="font-semibold group-hover:text-[#584D94] transition-colors">Smart Home Installation</h3><p className="text-sm text-slate-500">$150 - $5,000+</p></Link>
                            <Link href="/costs/door-lock-trim" className="group border border-slate-200 rounded-xl p-4 hover:border-[#64CEBB] transition-colors"><h3 className="font-semibold group-hover:text-[#584D94] transition-colors">Door & Lock</h3><p className="text-sm text-slate-500">$100 - $1,500</p></Link>
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
