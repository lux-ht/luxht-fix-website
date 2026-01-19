"use client";

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft, DollarSign, CheckCircle, Lightbulb, Phone, Clock, Shield, ChevronDown, ChevronUp, Sofa } from 'lucide-react';
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

export default function FurnitureAssemblyCostPage() {
    const { openModal } = useModal();

    const faqData = [
        { question: "How much does furniture assembly cost?", answer: "Small items like nightstands cost $40-$80. Medium items like desks and dressers run $80-$150. Large items like bed frames and wardrobes cost $150-$250. Complex items with many parts can exceed $300." },
        { question: "Is IKEA furniture assembly expensive?", answer: "IKEA assembly costs are based on item complexity. A MALM dresser typically costs $100-$150 to assemble. A PAX wardrobe runs $200-$350. We often charge less than IKEA's in-house assembly service." },
        { question: "How long does furniture assembly take?", answer: "A simple nightstand takes 30-45 minutes. A desk or dresser takes 1-2 hours. A bed frame takes 1-2 hours. A large wardrobe system can take 3-5 hours." },
        { question: "What's included in furniture assembly?", answer: "We assemble the furniture, secure it to the wall if needed for safety, and clean up all packaging materials. We also verify all parts work correctly (drawers slide, doors close, etc.)." }
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
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">How Much Does Furniture Assembly Cost?</h1>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">Get pricing for IKEA, Wayfair, and other furniture assembly in Orlando. Skip the frustration.</p>

                        {/* Starting At Price Highlight */}
                        <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-[#64CEBB] rounded-xl flex items-center justify-center"><DollarSign className="w-8 h-8 text-white" /></div>
                                <div className="text-center sm:text-left">
                                    <div className="text-white/70 text-sm">Starting at</div>
                                    <div className="text-4xl font-bold text-white">$40</div>
                                </div>
                            </div>
                            <div className="hidden sm:block w-px h-12 bg-white/20"></div>
                            <div className="text-white/90 text-sm max-w-xs text-center sm:text-left">
                                <strong className="text-white">Typical Project:</strong><br />
                                $180-$250 (Bedroom set: bed + dresser + nightstand)
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-8 px-4 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto max-w-4xl">
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-2xl font-bold text-[#64CEBB]">$40-$80</div><div className="text-slate-500 text-sm">Small Items</div></div>
                        <div><div className="text-2xl font-bold text-[#64CEBB]">$80-$150</div><div className="text-slate-500 text-sm">Medium Items</div></div>
                        <div><div className="text-2xl font-bold text-[#64CEBB]">$150-$250</div><div className="text-slate-500 text-sm">Large Items</div></div>
                        <div><div className="text-2xl font-bold text-[#64CEBB]">$200-$400</div><div className="text-slate-500 text-sm">Complex Items</div></div>
                    </div>
                </div>
            </section>

            <article className="py-16 px-4">
                <div className="container mx-auto max-w-4xl">

                    {/* Typical Project Example - NEW */}
                    <section className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-4 flex items-center gap-2">
                            <Sofa className="w-6 h-6" /> Typical Assembly Project
                        </h2>
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <h3 className="font-bold text-lg mb-4">3-Piece Bedroom Set Assembly</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                    <span className="text-slate-600">Queen bed frame assembly</span>
                                    <span className="font-semibold">$120</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                    <span className="text-slate-600">6-drawer dresser assembly</span>
                                    <span className="font-semibold">$100</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                    <span className="text-slate-600">Nightstand assembly</span>
                                    <span className="font-semibold">$50</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                    <span className="text-slate-600">Packaging removal</span>
                                    <span className="font-semibold">Included</span>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="font-bold text-lg">Total Project Cost</span>
                                    <span className="font-bold text-2xl text-[#64CEBB]">$270</span>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-4 italic">💡 Bundle discount: Save 10% when assembling 3+ items in one visit</p>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6 flex items-center gap-3"><Sofa className="w-6 h-6" /> Furniture Assembly Pricing Guide</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                                <thead><tr className="bg-[#584D94] text-white"><th className="text-left p-4 font-semibold">Furniture Type</th><th className="text-left p-4 font-semibold">Time Estimate</th><th className="text-left p-4 font-semibold">Assembly Cost</th></tr></thead>
                                <tbody>
                                    <tr className="border-b border-slate-100"><td className="p-4 font-medium">Nightstand / Side Table</td><td className="p-4 text-slate-600">30-45 min</td><td className="p-4 font-semibold text-[#64CEBB]">$40 - $60</td></tr>
                                    <tr className="border-b border-slate-100 bg-slate-50"><td className="p-4 font-medium">Office Chair</td><td className="p-4 text-slate-600">20-40 min</td><td className="p-4 font-semibold text-[#64CEBB]">$35 - $60</td></tr>
                                    <tr className="border-b border-slate-100"><td className="p-4 font-medium">Desk</td><td className="p-4 text-slate-600">1-2 hrs</td><td className="p-4 font-semibold text-[#64CEBB]">$80 - $150</td></tr>
                                    <tr className="border-b border-slate-100 bg-slate-50"><td className="p-4 font-medium">Dresser / Chest</td><td className="p-4 text-slate-600">1-2 hrs</td><td className="p-4 font-semibold text-[#64CEBB]">$100 - $150</td></tr>
                                    <tr className="border-b border-slate-100"><td className="p-4 font-medium">Bed Frame (Queen/King)</td><td className="p-4 text-slate-600">1-2 hrs</td><td className="p-4 font-semibold text-[#64CEBB]">$100 - $180</td></tr>
                                    <tr className="border-b border-slate-100 bg-slate-50"><td className="p-4 font-medium">Bookshelf / Storage Unit</td><td className="p-4 text-slate-600">1-2 hrs</td><td className="p-4 font-semibold text-[#64CEBB]">$80 - $150</td></tr>
                                    <tr className="border-b border-slate-100"><td className="p-4 font-medium">Dining Table & Chairs</td><td className="p-4 text-slate-600">2-3 hrs</td><td className="p-4 font-semibold text-[#64CEBB]">$150 - $250</td></tr>
                                    <tr className="border-b border-slate-100 bg-slate-50"><td className="p-4 font-medium">Wardrobe / Closet System</td><td className="p-4 text-slate-600">3-5 hrs</td><td className="p-4 font-semibold text-[#64CEBB]">$200 - $350</td></tr>
                                    <tr><td className="p-4 font-medium">Entertainment Center</td><td className="p-4 text-slate-600">2-4 hrs</td><td className="p-4 font-semibold text-[#64CEBB]">$150 - $300</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-16 bg-amber-50 rounded-2xl p-8 border border-amber-100">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-amber-500" /> Tips to Save on Assembly</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">1</div><div><h4 className="font-semibold mb-1">Bundle Multiple Items</h4><p className="text-sm text-slate-600">Assemble everything from one order at once.</p></div></div>
                            <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">2</div><div><h4 className="font-semibold mb-1">Unbox in Advance</h4><p className="text-sm text-slate-600">Have items unpacked and ready when we arrive.</p></div></div>
                            <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">3</div><div><h4 className="font-semibold mb-1">Clear the Space</h4><p className="text-sm text-slate-600">Have room cleared for assembly work.</p></div></div>
                            <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">4</div><div><h4 className="font-semibold mb-1">Handle Easy Items</h4><p className="text-sm text-slate-600">Assemble simple chairs yourself.</p></div></div>
                        </div>
                    </section>

                    <section className="mb-16 bg-gradient-to-br from-[#584D94] to-[#7B6FCC] rounded-2xl p-8 text-white">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><Shield className="w-6 h-6" /> Why Choose LUXHT Fix for Assembly?</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" /><div><h4 className="font-semibold">All Brands & Stores</h4><p className="text-white/70 text-sm">IKEA, Wayfair, Amazon, Target & more.</p></div></div>
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" /><div><h4 className="font-semibold">Wall Anchoring Included</h4><p className="text-white/70 text-sm">We secure tall furniture for safety.</p></div></div>
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" /><div><h4 className="font-semibold">Packaging Cleanup</h4><p className="text-white/70 text-sm">We take all boxes and materials.</p></div></div>
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" /><div><h4 className="font-semibold">Same-Day Service</h4><p className="text-white/70 text-sm">Often available for quick turnaround.</p></div></div>
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
                            <Link href="/costs/tv-mounting" className="group border border-slate-200 rounded-xl p-4 hover:border-[#64CEBB] transition-colors"><h3 className="font-semibold group-hover:text-[#584D94] transition-colors">TV Mounting</h3><p className="text-sm text-slate-500">$100 - $400</p></Link>
                            <Link href="/costs/smart-home-installation" className="group border border-slate-200 rounded-xl p-4 hover:border-[#64CEBB] transition-colors"><h3 className="font-semibold group-hover:text-[#584D94] transition-colors">Smart Home Installation</h3><p className="text-sm text-slate-500">$150 - $5,000+</p></Link>
                            <Link href="/costs/drywall-repair" className="group border border-slate-200 rounded-xl p-4 hover:border-[#64CEBB] transition-colors"><h3 className="font-semibold group-hover:text-[#584D94] transition-colors">Drywall Repair</h3><p className="text-sm text-slate-500">$75 - $1,200</p></Link>
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
