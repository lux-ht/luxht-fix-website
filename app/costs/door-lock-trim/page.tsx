"use client";
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft, DollarSign, CheckCircle, Lightbulb, Phone, Clock, Shield, ChevronDown, ChevronUp, DoorOpen } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { useState } from 'react';

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-slate-200 last:border-0">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full py-4 flex items-center justify-between text-left hover:text-[#584D94]">
                <span className="font-semibold text-slate-800">{question}</span>
                {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
            </button>
            {isOpen && <div className="pb-4 text-slate-600">{answer}</div>}
        </div>
    );
}

export default function DoorLockTrimCostPage() {
    const { openModal } = useModal();
    const faqData = [
        { question: "How much does interior door installation cost?", answer: "Interior door installation costs $200-$500 including the door. Pre-hung doors are easier to install than slab doors." },
        { question: "How much does lock replacement cost?", answer: "Lock replacement costs $100-$250 for standard locks. Smart locks cost $200-$400 installed." },
        { question: "How much does trim work cost?", answer: "Trim and molding installation costs $3-$8 per linear foot including materials and labor." }
    ];

    return (
        <main className="min-h-screen bg-white text-slate-800 font-sans">
            <Navbar />
            <header className="relative bg-gradient-to-br from-[#584D94] to-[#7B6FCC] pt-32 pb-16 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <Link href="/costs" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6"><ArrowLeft size={18} /> Back to Cost Guides</Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 py-2 px-4 rounded-full text-sm text-white/90 mb-4"><Clock size={16} /> Updated January 2026</div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How Much Does Door, Lock & Trim Work Cost?</h1>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl">Get pricing for door installation, lock replacement, and trim work in Orlando.</p>

                        <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-[#64CEBB] rounded-xl flex items-center justify-center"><DollarSign className="w-8 h-8 text-white" /></div>
                                <div className="text-center sm:text-left">
                                    <div className="text-white/70 text-sm">Typical Range</div>
                                    <div className="text-4xl font-bold text-white">$100 – $1,500</div>
                                </div>
                            </div>
                            <div className="hidden sm:block w-px h-12 bg-white/20"></div>
                            <div className="text-white/90 text-sm max-w-xs text-center sm:text-left">
                                <strong className="text-white">Most Common:</strong><br />
                                $350-$700 (Door + lock upgrades)
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="py-8 px-4 bg-slate-50 border-b">
                <div className="container mx-auto max-w-4xl grid md:grid-cols-4 gap-6 text-center">
                    <div><div className="text-2xl font-bold text-[#64CEBB]">$100-$250</div><div className="text-slate-500 text-sm">Lock Replace</div></div>
                    <div><div className="text-2xl font-bold text-[#64CEBB]">$200-$500</div><div className="text-slate-500 text-sm">Interior Door</div></div>
                    <div><div className="text-2xl font-bold text-[#64CEBB]">$500-$1,500</div><div className="text-slate-500 text-sm">Exterior Door</div></div>
                    <div><div className="text-2xl font-bold text-[#64CEBB]">$3-$8/ft</div><div className="text-slate-500 text-sm">Trim Work</div></div>
                </div>
            </section>
            <article className="py-16 px-4">
                <div className="container mx-auto max-w-4xl">

                    {/* Typical Project Example - NEW */}
                    <section className="mb-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-4 flex items-center gap-2">
                            <DoorOpen className="w-6 h-6" /> Typical Home Security Upgrade
                        </h2>
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <h3 className="font-bold text-lg mb-4">Front Entry Upgrade Package</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                    <span className="text-slate-600">Remove old exterior door & install new steel door</span>
                                    <span className="font-semibold">$850</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                    <span className="text-slate-600">Smart lock installation (deadbolt + handle)</span>
                                    <span className="font-semibold">$280</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                    <span className="text-slate-600">Weather stripping & threshold</span>
                                    <span className="font-semibold">$120</span>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="font-bold text-lg">Total Project Cost</span>
                                    <span className="font-bold text-2xl text-[#64CEBB]">$1,250</span>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-4 italic">💡 Upgrade your home security and curb appeal in one project</p>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6 flex items-center gap-3"><DoorOpen className="w-6 h-6" /> Door & Lock Pricing</h2>
                        <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border">
                            <thead><tr className="bg-[#584D94] text-white"><th className="text-left p-4">Service</th><th className="text-left p-4">Cost</th></tr></thead>
                            <tbody>
                                <tr className="border-b"><td className="p-4">Lock Replacement</td><td className="p-4 text-[#64CEBB] font-semibold">$100 - $250</td></tr>
                                <tr className="border-b bg-slate-50"><td className="p-4">Smart Lock Install</td><td className="p-4 text-[#64CEBB] font-semibold">$200 - $400</td></tr>
                                <tr className="border-b"><td className="p-4">Interior Door (pre-hung)</td><td className="p-4 text-[#64CEBB] font-semibold">$200 - $500</td></tr>
                                <tr className="border-b bg-slate-50"><td className="p-4">Exterior Door</td><td className="p-4 text-[#64CEBB] font-semibold">$500 - $1,500</td></tr>
                                <tr className="border-b"><td className="p-4">Baseboard Trim (per ft)</td><td className="p-4 text-[#64CEBB] font-semibold">$3 - $8</td></tr>
                                <tr className="bg-slate-50"><td className="p-4">Crown Molding (per ft)</td><td className="p-4 text-[#64CEBB] font-semibold">$5 - $12</td></tr>
                            </tbody>
                        </table>
                    </section>
                    <section className="mb-16 bg-amber-50 rounded-2xl p-8 border border-amber-100">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-amber-500" /> Tips to Save</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center text-white font-bold text-sm">1</div><div><h4 className="font-semibold">Pre-Hung Doors</h4><p className="text-sm text-slate-600">Easier install than slab doors.</p></div></div>
                            <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center text-white font-bold text-sm">2</div><div><h4 className="font-semibold">Bundle Trim Work</h4><p className="text-sm text-slate-600">Do entire room or floor at once.</p></div></div>
                        </div>
                    </section>
                    <section className="mb-16 bg-gradient-to-br from-[#584D94] to-[#7B6FCC] rounded-2xl p-8 text-white">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><Shield className="w-6 h-6" /> Why LUXHT Fix?</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB]" /><div><h4 className="font-semibold">Precise Fitting</h4></div></div>
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB]" /><div><h4 className="font-semibold">Clean Finish</h4></div></div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button onClick={() => openModal('quote')} className="bg-white text-[#584D94] font-bold py-3 px-6 rounded-full"><CheckCircle size={20} /> Get Free Quote</button>
                            <a href="tel:4072880832" className="border-2 border-white text-white font-bold py-3 px-6 rounded-full"><Phone size={20} /> (407) 288-0832</a>
                        </div>
                    </section>
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6">FAQ</h2>
                        <div className="bg-white border rounded-xl divide-y">{faqData.map((faq, i) => <FAQItem key={i} question={faq.question} answer={faq.answer} />)}</div>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6">Related Guides</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <Link href="/costs/smart-home-installation" className="border rounded-xl p-4 hover:border-[#64CEBB]"><h3 className="font-semibold">Smart Home</h3><p className="text-sm text-slate-500">$150 - $5,000+</p></Link>
                            <Link href="/costs/drywall-repair" className="border rounded-xl p-4 hover:border-[#64CEBB]"><h3 className="font-semibold">Drywall Repair</h3><p className="text-sm text-slate-500">$75 - $1,200</p></Link>
                            <Link href="/costs/flooring-installation" className="border rounded-xl p-4 hover:border-[#64CEBB]"><h3 className="font-semibold">Flooring</h3><p className="text-sm text-slate-500">$3 - $20/sq ft</p></Link>
                        </div>
                    </section>
                </div>
            </article>
            <footer className="bg-slate-900 text-white py-12 px-4">
                <div className="container mx-auto max-w-6xl text-center">
                    <div className="font-bold text-xl mb-2"><span className="text-[#64CEBB]">LUXHT</span> Fix</div>
                    <p className="text-slate-400 text-sm">© 2026 LUXHT Fix. All rights reserved.</p>
                </div>
            </footer>
        </main>
    );
}
