"use client";

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft, DollarSign, CheckCircle, Lightbulb, Phone, Clock, Shield, ChevronDown, ChevronUp, Lightbulb as LightbulbIcon } from 'lucide-react';
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

export default function SmartHomeCostPage() {
    const { openModal } = useModal();

    const faqData = [
        { question: "How much does smart home installation cost?", answer: "A single smart device installation costs $150-$400. A basic smart home package (thermostat, doorbell, 2-3 smart locks) runs $800-$1,500. Full home automation can cost $3,000-$10,000+." },
        { question: "Can I install smart devices myself?", answer: "Most smart thermostats, doorbells, and plugs are DIY-friendly. However, smart locks, hardwired devices, and complex integrations benefit from professional installation to ensure proper setup and security." },
        { question: "What's included in a smart home installation?", answer: "Installation includes device mounting, wiring (if needed), Wi-Fi connection, app setup, and basic training on how to use your new smart devices." },
        { question: "Do smart devices work with each other?", answer: "Most modern devices work with Alexa, Google Home, or Apple HomeKit. We help you choose compatible devices and set up unified control through your preferred platform." }
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
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">How Much Does Smart Home Installation Cost?</h1>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">Get pricing for smart thermostats, doorbells, locks, and full home automation in Orlando.</p>
                        <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                            <div className="w-14 h-14 bg-[#64CEBB] rounded-xl flex items-center justify-center"><DollarSign className="w-8 h-8 text-white" /></div>
                            <div><div className="text-white/70 text-sm">Average Cost Range</div><div className="text-3xl font-bold text-white">$150 - $5,000+</div></div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-8 px-4 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto max-w-4xl">
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        <div><div className="text-2xl font-bold text-[#64CEBB]">$150-$300</div><div className="text-slate-500 text-sm">Thermostat</div></div>
                        <div><div className="text-2xl font-bold text-[#64CEBB]">$200-$350</div><div className="text-slate-500 text-sm">Doorbell</div></div>
                        <div><div className="text-2xl font-bold text-[#64CEBB]">$200-$400</div><div className="text-slate-500 text-sm">Smart Lock</div></div>
                        <div><div className="text-2xl font-bold text-[#64CEBB]">$1.5K-$5K+</div><div className="text-slate-500 text-sm">Full Automation</div></div>
                    </div>
                </div>
            </section>

            <article className="py-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6 flex items-center gap-3"><LightbulbIcon className="w-6 h-6" /> Smart Device Installation Costs</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                                <thead><tr className="bg-[#584D94] text-white"><th className="text-left p-4 font-semibold">Device</th><th className="text-left p-4 font-semibold">Device Cost</th><th className="text-left p-4 font-semibold">Installation</th><th className="text-left p-4 font-semibold">Total</th></tr></thead>
                                <tbody>
                                    <tr className="border-b border-slate-100"><td className="p-4 font-medium">Smart Thermostat</td><td className="p-4 text-slate-600">$100-$250</td><td className="p-4 text-slate-600">$50-$100</td><td className="p-4 font-semibold text-[#64CEBB]">$150-$350</td></tr>
                                    <tr className="border-b border-slate-100 bg-slate-50"><td className="p-4 font-medium">Video Doorbell</td><td className="p-4 text-slate-600">$100-$250</td><td className="p-4 text-slate-600">$75-$150</td><td className="p-4 font-semibold text-[#64CEBB]">$175-$400</td></tr>
                                    <tr className="border-b border-slate-100"><td className="p-4 font-medium">Smart Lock</td><td className="p-4 text-slate-600">$150-$300</td><td className="p-4 text-slate-600">$50-$100</td><td className="p-4 font-semibold text-[#64CEBB]">$200-$400</td></tr>
                                    <tr className="border-b border-slate-100 bg-slate-50"><td className="p-4 font-medium">Smart Lighting (per room)</td><td className="p-4 text-slate-600">$50-$200</td><td className="p-4 text-slate-600">$75-$150</td><td className="p-4 font-semibold text-[#64CEBB]">$125-$350</td></tr>
                                    <tr className="border-b border-slate-100"><td className="p-4 font-medium">Security Camera (each)</td><td className="p-4 text-slate-600">$100-$300</td><td className="p-4 text-slate-600">$75-$150</td><td className="p-4 font-semibold text-[#64CEBB]">$175-$450</td></tr>
                                    <tr className="bg-slate-50"><td className="p-4 font-medium">Smart Garage Door</td><td className="p-4 text-slate-600">$100-$200</td><td className="p-4 text-slate-600">$75-$125</td><td className="p-4 font-semibold text-[#64CEBB]">$175-$325</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6">Popular Smart Home Packages</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="border border-slate-200 rounded-xl p-6 text-center">
                                <h3 className="font-bold text-lg mb-2">Starter Package</h3>
                                <div className="text-3xl font-bold text-[#64CEBB] mb-4">$400-$800</div>
                                <ul className="text-sm text-slate-600 space-y-2 text-left">
                                    <li>✓ Smart Thermostat</li>
                                    <li>✓ 1 Smart Lock</li>
                                    <li>✓ Setup & Training</li>
                                </ul>
                            </div>
                            <div className="border-2 border-[#64CEBB] rounded-xl p-6 text-center bg-[#64CEBB]/5">
                                <h3 className="font-bold text-lg mb-2">Security Package</h3>
                                <div className="text-3xl font-bold text-[#64CEBB] mb-4">$1,000-$2,000</div>
                                <ul className="text-sm text-slate-600 space-y-2 text-left">
                                    <li>✓ Video Doorbell</li>
                                    <li>✓ 2 Smart Locks</li>
                                    <li>✓ 2 Security Cameras</li>
                                    <li>✓ Smart Garage</li>
                                </ul>
                            </div>
                            <div className="border border-slate-200 rounded-xl p-6 text-center">
                                <h3 className="font-bold text-lg mb-2">Full Home</h3>
                                <div className="text-3xl font-bold text-[#64CEBB] mb-4">$3,000-$8,000</div>
                                <ul className="text-sm text-slate-600 space-y-2 text-left">
                                    <li>✓ All Security devices</li>
                                    <li>✓ Smart Lighting</li>
                                    <li>✓ Smart Blinds</li>
                                    <li>✓ Voice Control Hub</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16 bg-amber-50 rounded-2xl p-8 border border-amber-100">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6 text-amber-500" /> Tips to Save on Smart Home</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">1</div><div><h4 className="font-semibold mb-1">Start with Essentials</h4><p className="text-sm text-slate-600">Thermostat and 1 lock make the biggest impact.</p></div></div>
                            <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">2</div><div><h4 className="font-semibold mb-1">Same-Brand Ecosystem</h4><p className="text-sm text-slate-600">Devices from one brand work better together.</p></div></div>
                            <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">3</div><div><h4 className="font-semibold mb-1">Bundle Installation</h4><p className="text-sm text-slate-600">Install multiple devices in one visit.</p></div></div>
                            <div className="flex items-start gap-3"><div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">4</div><div><h4 className="font-semibold mb-1">Buy Devices on Sale</h4><p className="text-sm text-slate-600">Black Friday/Prime Day offer big discounts.</p></div></div>
                        </div>
                    </section>

                    <section className="mb-16 bg-gradient-to-br from-[#584D94] to-[#7B6FCC] rounded-2xl p-8 text-white">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><Shield className="w-6 h-6" /> Why Choose LUXHT Fix?</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" /><div><h4 className="font-semibold">All Platforms Supported</h4><p className="text-white/70 text-sm">Alexa, Google, Apple HomeKit.</p></div></div>
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" /><div><h4 className="font-semibold">Training Included</h4><p className="text-white/70 text-sm">We teach you how to use everything.</p></div></div>
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" /><div><h4 className="font-semibold">Secure Setup</h4><p className="text-white/70 text-sm">Proper security settings configured.</p></div></div>
                            <div className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" /><div><h4 className="font-semibold">Clean Installation</h4><p className="text-white/70 text-sm">Hidden wires, professional finish.</p></div></div>
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
                            <Link href="/costs/tv-mounting" className="group border border-slate-200 rounded-xl p-4 hover:border-[#64CEBB] transition-colors"><h3 className="font-semibold group-hover:text-[#584D94] transition-colors">TV Mounting</h3><p className="text-sm text-slate-500">$100 - $400</p></Link>
                            <Link href="/costs/door-lock-trim" className="group border border-slate-200 rounded-xl p-4 hover:border-[#64CEBB] transition-colors"><h3 className="font-semibold group-hover:text-[#584D94] transition-colors">Door & Lock</h3><p className="text-sm text-slate-500">$100 - $1,500</p></Link>
                            <Link href="/costs/furniture-assembly" className="group border border-slate-200 rounded-xl p-4 hover:border-[#64CEBB] transition-colors"><h3 className="font-semibold group-hover:text-[#584D94] transition-colors">Furniture Assembly</h3><p className="text-sm text-slate-500">$40 - $400</p></Link>
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
