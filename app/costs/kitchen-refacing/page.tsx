"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, DollarSign, CheckCircle, Lightbulb, Phone, Clock, Shield, ChevronDown, ChevronUp, Utensils } from 'lucide-react';
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

export default function KitchenRefacingCostPage() {
    const { openModal } = useModal();

    const faqData = [
        { question: "How much does kitchen cabinet refacing cost?", answer: "Kitchen cabinet refacing in Orlando costs $4,000-$8,000 for small kitchens (10-15 cabinets), $8,000-$12,000 for medium kitchens, and $12,000-$20,000 for large kitchens with premium materials." },
        { question: "Is cabinet refacing worth it vs replacement?", answer: "Refacing costs 30-50% less than full replacement and takes just 3-5 days vs 2-4 weeks. If your cabinet boxes are solid, refacing provides a like-new look at half the cost." },
        { question: "What does cabinet refacing include?", answer: "Refacing includes new door and drawer fronts, new hinges and hardware, and veneer covering on visible cabinet frames. The existing cabinet boxes remain in place." },
        { question: "How long does kitchen refacing take?", answer: "Most kitchen refacing projects take 3-5 days. Your kitchen remains functional throughout with minimal disruption to daily cooking." }
    ];

    return (
        <main className="min-h-screen bg-white text-slate-800 font-sans">
            <Navbar />
            <header className="relative bg-gradient-to-br from-[#584D94] to-[#7B6FCC] pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 opacity-10"><div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div><div className="absolute bottom-10 right-10 w-96 h-96 bg-[#64CEBB] rounded-full blur-3xl"></div></div>
                <div className="container mx-auto px-4 relative z-10">
                    <Link href="/costs/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"><ArrowLeft size={18} /> Back to Cost Guides</Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 py-2 px-4 rounded-full text-sm font-semibold text-white/90 mb-4"><Clock size={16} /> Updated January 2026</div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">How Much Does Kitchen Cabinet Refacing Cost?</h1>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">Transform your kitchen for a fraction of replacement cost. Get pricing for cabinet refacing in Orlando.</p>
                        <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                            <div className="w-14 h-14 bg-[#64CEBB] rounded-xl flex items-center justify-center"><DollarSign className="w-8 h-8 text-white" /></div>
                            <div><div className="text-white/70 text-sm">Average Cost Range</div><div className="text-3xl font-bold text-white">$4,000 - $20,000</div></div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-8 px-4 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto max-w-4xl">
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div><div className="text-2xl font-bold text-[#64CEBB]">$4K-$8K</div><div className="text-slate-500 text-sm">Small Kitchen</div></div>
                        <div><div className="text-2xl font-bold text-[#64CEBB]">$8K-$12K</div><div className="text-slate-500 text-sm">Medium Kitchen</div></div>
                        <div><div className="text-2xl font-bold text-[#64CEBB]">$12K-$20K</div><div className="text-slate-500 text-sm">Large Kitchen</div></div>
                    </div>
                </div>
            </section>

            <article className="py-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6 flex items-center gap-3"><Utensils className="w-6 h-6" /> Cabinet Refacing Cost Breakdown</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                                <thead><tr className="bg-[#584D94] text-white"><th className="text-left p-4 font-semibold">Material</th><th className="text-left p-4 font-semibold">Cost per Linear Foot</th><th className="text-left p-4 font-semibold">10-ft Kitchen</th></tr></thead>
                                <tbody>
                                    <tr className="border-b border-slate-100"><td className="p-4 font-medium">Laminate</td><td className="p-4 text-slate-600">$80 - $150</td><td className="p-4 font-semibold text-[#64CEBB]">$4,000 - $7,500</td></tr>
                                    <tr className="border-b border-slate-100 bg-slate-50"><td className="p-4 font-medium">Wood Veneer</td><td className="p-4 text-slate-600">$100 - $200</td><td className="p-4 font-semibold text-[#64CEBB]">$5,000 - $10,000</td></tr>
                                    <tr className="border-b border-slate-100"><td className="p-4 font-medium">Rigid Thermofoil (RTF)</td><td className="p-4 text-slate-600">$120 - $180</td><td className="p-4 font-semibold text-[#64CEBB]">$6,000 - $9,000</td></tr>
                                    <tr className="bg-slate-50"><td className="p-4 font-medium">Solid Wood</td><td className="p-4 text-slate-600">$150 - $300</td><td className="p-4 font-semibold text-[#64CEBB]">$7,500 - $15,000</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6">Refacing vs. Replacement</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="border-2 border-[#64CEBB] rounded-xl p-6 bg-[#64CEBB]/5">
                                <h3 className="font-bold text-lg mb-4">✅ Cabinet Refacing</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>Cost: $4,000 - $20,000</li>
                                    <li>Timeline: 3-5 days</li>
                                    <li>Kitchen usable during work</li>
                                    <li>Less waste, eco-friendly</li>
                                </ul>
                            </div>
                            <div className="border border-slate-200 rounded-xl p-6">
                                <h3 className="font-bold text-lg mb-4">🔄 Full Replacement</h3>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    <li>Cost: $10,000 - $50,000+</li>
                                    <li>Timeline: 2-4 weeks</li>
                                    <li>Kitchen unusable during demo</li>
                                    <li>Can change layout</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16 bg-amber-50 rounded-2xl p-8 border border-amber-100">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-amber-500" /> Tips to Save on Kitchen Refacing</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">1</div><div><h4 className="font-semibold mb-1">Choose Laminate</h4><p className="text-sm text-slate-600">Laminate costs 40% less than solid wood.</p></div></div>
                            <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">2</div><div><h4 className="font-semibold mb-1">Keep Existing Hardware</h4><p className="text-sm text-slate-600">New handles add $200-$500 to the project.</p></div></div>
                            <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">3</div><div><h4 className="font-semibold mb-1">Slab-Style Doors</h4><p className="text-sm text-slate-600">Simple designs cost less than raised-panel.</p></div></div>
                            <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">4</div><div><h4 className="font-semibold mb-1">Paint Upper Cabinets</h4><p className="text-sm text-slate-600">Combining paint and refacing saves money.</p></div></div>
                        </div>
                    </section>

                    <section className="mb-16 bg-gradient-to-br from-[#584D94] to-[#7B6FCC] rounded-2xl p-8 text-white">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><Shield className="w-6 h-6" /> Why Choose LUXHT Fix?</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" /><div><h4 className="font-semibold">3-5 Day Completion</h4><p className="text-white/70 text-sm">Quick turnaround, minimal disruption.</p></div></div>
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" /><div><h4 className="font-semibold">Custom Color Matching</h4><p className="text-white/70 text-sm">Match any style or trend.</p></div></div>
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" /><div><h4 className="font-semibold">Soft-Close Upgrades</h4><p className="text-white/70 text-sm">Modern hinges included.</p></div></div>
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" /><div><h4 className="font-semibold">Free In-Home Consult</h4><p className="text-white/70 text-sm">Accurate quotes before you commit.</p></div></div>
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
                            <Link href="/costs/bathroom-remodel/" className="group border border-slate-200 rounded-xl p-4 hover:border-[#64CEBB] transition-colors"><h3 className="font-semibold group-hover:text-[#584D94] transition-colors">Bathroom Remodel</h3><p className="text-sm text-slate-500">$3,000 - $50,000+</p></Link>
                            <Link href="/costs/flooring-installation/" className="group border border-slate-200 rounded-xl p-4 hover:border-[#64CEBB] transition-colors"><h3 className="font-semibold group-hover:text-[#584D94] transition-colors">Flooring Installation</h3><p className="text-sm text-slate-500">$3 - $20/sq ft</p></Link>
                            <Link href="/costs/faucet-fixtures/" className="group border border-slate-200 rounded-xl p-4 hover:border-[#64CEBB] transition-colors"><h3 className="font-semibold group-hover:text-[#584D94] transition-colors">Faucet & Fixtures</h3><p className="text-sm text-slate-500">$75 - $400</p></Link>
                        </div>
                    </section>
                </div>
            </article>


            <Footer />
        </main>
    );
}
