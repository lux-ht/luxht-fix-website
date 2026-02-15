"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, DollarSign, CheckCircle, Lightbulb, Phone, Clock, Shield, ChevronDown, ChevronUp, Droplets } from 'lucide-react';
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

export default function BathroomRemodelCostPage() {
    const { openModal } = useModal();

    const faqData = [
        { question: "How much does a bathroom remodel cost in Orlando?", answer: "A basic bathroom refresh costs $3,000-$7,000, a mid-range remodel runs $10,000-$25,000, and a full luxury renovation can cost $25,000-$50,000+ depending on size and finishes." },
        { question: "What is included in a bathroom remodel?", answer: "A full remodel typically includes new flooring, vanity, toilet, shower/tub, tile work, lighting, and fixtures. Plumbing and electrical updates are often included." },
        { question: "How long does a bathroom remodel take?", answer: "A basic refresh takes 1-2 weeks, a mid-range remodel takes 2-3 weeks, and complex renovations may take 4-6 weeks including permits and inspections." },
        { question: "Is a bathroom remodel worth it?", answer: "Bathroom remodels typically return 60-70% of the investment at resale. Updated bathrooms also improve daily comfort and can reduce maintenance costs." }
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
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">How Much Does a Bathroom Remodel Cost in Orlando?</h1>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">Compare bathroom renovation prices from basic refreshes to luxury transformations.</p>

                        <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-[#64CEBB] rounded-xl flex items-center justify-center"><DollarSign className="w-8 h-8 text-white" /></div>
                                <div className="text-center sm:text-left">
                                    <div className="text-white/70 text-sm">Typical Range</div>
                                    <div className="text-4xl font-bold text-white">$3K – $50K+</div>
                                </div>
                            </div>
                            <div className="hidden sm:block w-px h-12 bg-white/20"></div>
                            <div className="text-white/90 text-sm max-w-xs text-center sm:text-left">
                                <strong className="text-white">Most Popular:</strong><br />
                                $10K-$25K (Mid-range full remodel)
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-8 px-4 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto max-w-4xl">
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div><div className="text-2xl font-bold text-[#64CEBB]">$3K-$7K</div><div className="text-slate-500 text-sm">Basic Refresh</div></div>
                        <div><div className="text-2xl font-bold text-[#64CEBB]">$10K-$25K</div><div className="text-slate-500 text-sm">Mid-Range</div></div>
                        <div><div className="text-2xl font-bold text-[#64CEBB]">$25K-$50K+</div><div className="text-slate-500 text-sm">Full Renovation</div></div>
                    </div>
                </div>
            </section>

            <article className="py-16 px-4">
                <div className="container mx-auto max-w-4xl">

                    {/* Typical Project Example - NEW */}
                    <section className="mb-16 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-4 flex items-center gap-2">
                            <Droplets className="w-6 h-6" /> Typical Bathroom Remodel
                        </h2>
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <h3 className="font-bold text-lg mb-4">Full 5'x8' Bathroom - Mid-Range Finishes</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                    <span className="text-slate-600">New tiled shower w/ glass door & fixtures</span>
                                    <span className="font-semibold">$4,200</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                    <span className="text-slate-600">Vanity, sink, faucet & mirror (48")</span>
                                    <span className="font-semibold">$1,800</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                    <span className="text-slate-600">New toilet & installation</span>
                                    <span className="font-semibold">$650</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                    <span className="text-slate-600">Tile flooring (40 sq ft @ $75/sq ft installed)</span>
                                    <span className="font-semibold">$3,000</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                    <span className="text-slate-600">Lighting, exhaust fan, electrical updates</span>
                                    <span className="font-semibold">$1,200</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                    <span className="text-slate-600">Paint, trim, accessories</span>
                                    <span className="font-semibold">$800</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                    <span className="text-slate-600">Labor & project management</span>
                                    <span className="font-semibold">$6,350</span>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="font-bold text-lg">Total Project Cost</span>
                                    <span className="font-bold text-2xl text-[#64CEBB]">$18,000</span>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-4 italic">💡 Typical timeline: 2-3 weeks from start to finish</p>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6 flex items-center gap-3"><Droplets className="w-6 h-6" /> Bathroom Remodel Cost Breakdown</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                                <thead><tr className="bg-[#584D94] text-white"><th className="text-left p-4 font-semibold">Component</th><th className="text-left p-4 font-semibold">Budget</th><th className="text-left p-4 font-semibold">Mid-Range</th><th className="text-left p-4 font-semibold">High-End</th></tr></thead>
                                <tbody>
                                    <tr className="border-b border-slate-100"><td className="p-4 font-medium">Vanity & Sink</td><td className="p-4 text-slate-600">$200-$500</td><td className="p-4 text-slate-600">$500-$1,500</td><td className="p-4 text-[#64CEBB]">$1,500-$5,000</td></tr>
                                    <tr className="border-b border-slate-100 bg-slate-50"><td className="p-4 font-medium">Toilet</td><td className="p-4 text-slate-600">$150-$300</td><td className="p-4 text-slate-600">$300-$600</td><td className="p-4 text-[#64CEBB]">$600-$2,000</td></tr>
                                    <tr className="border-b border-slate-100"><td className="p-4 font-medium">Shower/Tub</td><td className="p-4 text-slate-600">$400-$1,000</td><td className="p-4 text-slate-600">$1,000-$3,000</td><td className="p-4 text-[#64CEBB]">$3,000-$10,000</td></tr>
                                    <tr className="border-b border-slate-100 bg-slate-50"><td className="p-4 font-medium">Tile Work</td><td className="p-4 text-slate-600">$500-$1,500</td><td className="p-4 text-slate-600">$1,500-$5,000</td><td className="p-4 text-[#64CEBB]">$5,000-$15,000</td></tr>
                                    <tr className="border-b border-slate-100"><td className="p-4 font-medium">Flooring</td><td className="p-4 text-slate-600">$300-$800</td><td className="p-4 text-slate-600">$800-$2,000</td><td className="p-4 text-[#64CEBB]">$2,000-$5,000</td></tr>
                                    <tr className="bg-slate-50"><td className="p-4 font-medium">Labor</td><td className="p-4 text-slate-600">$1,000-$2,500</td><td className="p-4 text-slate-600">$3,000-$8,000</td><td className="p-4 text-[#64CEBB]">$8,000-$15,000</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-16 bg-amber-50 rounded-2xl p-8 border border-amber-100">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-amber-500" /> Tips to Save on Bathroom Remodel</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">1</div><div><h4 className="font-semibold mb-1">Keep Plumbing in Place</h4><p className="text-sm text-slate-600">Moving fixtures adds $1,000-$3,000 in labor.</p></div></div>
                            <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">2</div><div><h4 className="font-semibold mb-1">Reface Instead of Replace</h4><p className="text-sm text-slate-600">Reglazing tubs costs 80% less than replacement.</p></div></div>
                            <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">3</div><div><h4 className="font-semibold mb-1">Large-Format Tiles</h4><p className="text-sm text-slate-600">Fewer tiles means less labor and grout.</p></div></div>
                            <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">4</div><div><h4 className="font-semibold mb-1">Stock Vanities</h4><p className="text-sm text-slate-600">Pre-made vanities cost 50% less than custom.</p></div></div>
                        </div>
                    </section>

                    <section className="mb-16 bg-gradient-to-br from-[#584D94] to-[#7B6FCC] rounded-2xl p-8 text-white">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><Shield className="w-6 h-6" /> Why Choose LUXHT Fix?</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" /><div><h4 className="font-semibold">35+ Bathrooms Completed</h4><p className="text-white/70 text-sm">Extensive experience in Orlando.</p></div></div>
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" /><div><h4 className="font-semibold">Design to Installation</h4><p className="text-white/70 text-sm">One team handles everything.</p></div></div>
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" /><div><h4 className="font-semibold">On-Time Completion</h4><p className="text-white/70 text-sm">We meet our timeline commitments.</p></div></div>
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" /><div><h4 className="font-semibold">Detailed Written Quotes</h4><p className="text-white/70 text-sm">No surprise costs mid-project.</p></div></div>
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
                            <Link href="/costs/kitchen-refacing/" className="group border border-slate-200 rounded-xl p-4 hover:border-[#64CEBB] transition-colors"><h3 className="font-semibold group-hover:text-[#584D94] transition-colors">Kitchen Refacing</h3><p className="text-sm text-slate-500">$4,000 - $20,000</p></Link>
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
