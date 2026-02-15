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

export default function FaucetFixturesCostPage() {
    const { openModal } = useModal();
    const faqData = [
        { question: "How much does faucet installation cost?", answer: "Basic faucet installation costs $150-$300 in Orlando." },
        { question: "Can I install a faucet myself?", answer: "Simple replacements are DIY-friendly. Complex jobs benefit from professional help." },
        { question: "How much does toilet installation cost?", answer: "Toilet installation costs $200-$400 including old toilet removal." }
    ];

    return (
        <main className="min-h-screen bg-white text-slate-800 font-sans">
            <Navbar />
            <header className="relative bg-gradient-to-br from-[#584D94] to-[#7B6FCC] pt-32 pb-16 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <Link href="/costs/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6"><ArrowLeft size={18} /> Back to Cost Guides</Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 py-2 px-4 rounded-full text-sm text-white/90 mb-4"><Clock size={16} /> Updated January 2026</div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How Much Does Faucet & Fixture Installation Cost?</h1>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl">Get pricing for faucet replacement, toilet installation, and plumbing fixtures in Orlando.</p>

                        {/* Starting At Price Highlight */}
                        <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-[#64CEBB] rounded-xl flex items-center justify-center"><DollarSign className="w-8 h-8 text-white" /></div>
                                <div className="text-center sm:text-left">
                                    <div className="text-white/70 text-sm">Starting at</div>
                                    <div className="text-4xl font-bold text-white">$75</div>
                                </div>
                            </div>
                            <div className="hidden sm:block w-px h-12 bg-white/20"></div>
                            <div className="text-white/90 text-sm max-w-xs text-center sm:text-left">
                                <strong className="text-white">Most Common:</strong><br />
                                $200-$300 (Kitchen faucet replacement)
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="py-8 px-4 bg-slate-50 border-b">
                <div className="container mx-auto max-w-4xl grid md:grid-cols-4 gap-6 text-center">
                    <div><div className="text-2xl font-bold text-[#64CEBB]">$75-$150</div><div className="text-slate-500 text-sm">Showerhead</div></div>
                    <div><div className="text-2xl font-bold text-[#64CEBB]">$150-$300</div><div className="text-slate-500 text-sm">Faucet</div></div>
                    <div><div className="text-2xl font-bold text-[#64CEBB]">$200-$400</div><div className="text-slate-500 text-sm">Toilet</div></div>
                    <div><div className="text-2xl font-bold text-[#64CEBB]">$150-$300</div><div className="text-slate-500 text-sm">Garbage Disposal</div></div>
                </div>
            </section>
            <article className="py-16 px-4">
                <div className="container mx-auto max-w-4xl">

                    {/* Typical Project Example - NEW */}
                    <section className="mb-16 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-4 flex items-center gap-2">
                            <Droplets className="w-6 h-6" /> Typical Fixture Installation
                        </h2>
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <h3 className="font-bold text-lg mb-4">Kitchen Fixture Upgrade</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                    <span className="text-slate-600">Remove old kitchen faucet</span>
                                    <span className="font-semibold">Included</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                    <span className="text-slate-600">Install new pull-down faucet</span>
                                    <span className="font-semibold">$200</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                    <span className="text-slate-600">Install garbage disposal</span>
                                    <span className="font-semibold">$180</span>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="font-bold text-lg">Total Project Cost</span>
                                    <span className="font-bold text-2xl text-[#64CEBB]">$380</span>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-4 italic">💡 Includes leak testing and cleanup</p>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6 flex items-center gap-3"><Droplets className="w-6 h-6" /> Fixture Installation Pricing</h2>
                        <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border">
                            <thead><tr className="bg-[#584D94] text-white"><th className="text-left p-4">Fixture</th><th className="text-left p-4">Cost</th></tr></thead>
                            <tbody>
                                <tr className="border-b"><td className="p-4">Showerhead</td><td className="p-4 text-[#64CEBB] font-semibold">$75 - $150</td></tr>
                                <tr className="border-b bg-slate-50"><td className="p-4">Kitchen Faucet</td><td className="p-4 text-[#64CEBB] font-semibold">$150 - $300</td></tr>
                                <tr className="border-b"><td className="p-4">Bathroom Faucet</td><td className="p-4 text-[#64CEBB] font-semibold">$150 - $250</td></tr>
                                <tr className="border-b bg-slate-50"><td className="p-4">Toilet</td><td className="p-4 text-[#64CEBB] font-semibold">$200 - $400</td></tr>
                                <tr><td className="p-4">Garbage Disposal</td><td className="p-4 text-[#64CEBB] font-semibold">$150 - $300</td></tr>
                            </tbody>
                        </table>
                    </section>
                    <section className="mb-16 bg-amber-50 rounded-2xl p-8 border border-amber-100">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-amber-500" /> Tips to Save</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center text-white font-bold text-sm">1</div><div><h4 className="font-semibold">Bundle Fixtures</h4><p className="text-sm text-slate-600">Install multiple in one visit.</p></div></div>
                            <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center text-white font-bold text-sm">2</div><div><h4 className="font-semibold">Standard Sizes</h4><p className="text-sm text-slate-600">Non-standard needs custom work.</p></div></div>
                        </div>
                    </section>
                    <section className="mb-16 bg-gradient-to-br from-[#584D94] to-[#7B6FCC] rounded-2xl p-8 text-white">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><Shield className="w-6 h-6" /> Why LUXHT Fix?</h2>
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-[#64CEBB] flex-shrink-0" /><span className="font-semibold">Leak-Free Guarantee</span></div>
                            <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-[#64CEBB] flex-shrink-0" /><span className="font-semibold">Same-Day Service</span></div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center sm:justify-start">
                            <button onClick={() => openModal('quote')} className="bg-white text-[#584D94] font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 w-full sm:w-auto"><CheckCircle size={18} /> Get Free Quote</button>
                            <a href="tel:4077207476" className="border-2 border-white text-white font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 w-full sm:w-auto"><Phone size={18} /> (407) 720-7476</a>
                        </div>
                    </section>
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6">FAQ</h2>
                        <div className="bg-white border rounded-xl divide-y">{faqData.map((faq, i) => <FAQItem key={i} question={faq.question} answer={faq.answer} />)}</div>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6">Related Guides</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <Link href="/costs/bathroom-remodel/" className="border rounded-xl p-4 hover:border-[#64CEBB]"><h3 className="font-semibold">Bathroom Remodel</h3><p className="text-sm text-slate-500">$3,000 - $50,000+</p></Link>
                            <Link href="/costs/drywall-repair/" className="border rounded-xl p-4 hover:border-[#64CEBB]"><h3 className="font-semibold">Drywall Repair</h3><p className="text-sm text-slate-500">$75 - $1,200</p></Link>
                            <Link href="/costs/door-lock-trim/" className="border rounded-xl p-4 hover:border-[#64CEBB]"><h3 className="font-semibold">Door & Lock</h3><p className="text-sm text-slate-500">$100 - $1,500</p></Link>
                        </div>
                    </section>
                </div>
            </article>
            <Footer />
        </main>
    );
}
