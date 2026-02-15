"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import {
    ArrowLeft, DollarSign, CheckCircle, AlertTriangle, Lightbulb,
    Phone, Clock, Shield, ChevronDown, ChevronUp, Hammer,
    Ruler, Droplets, Layers, Users
} from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { useState } from 'react';

// FAQ Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-200 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 flex items-center justify-between text-left hover:text-[#584D94] transition-colors"
            >
                <span className="font-semibold text-slate-800">{question}</span>
                {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
            </button>
            {isOpen && (
                <div className="pb-4 text-slate-600 leading-relaxed">
                    {answer}
                </div>
            )}
        </div>
    );
}

export default function DrywallRepairCostPage() {
    const { openModal } = useModal();

    const faqData = [
        {
            question: "How much does it cost to fix a small hole in drywall?",
            answer: "Small drywall holes (under 4 inches) typically cost $75 to $150 to repair professionally in Orlando. This includes patching, sanding, and preparing for paint. DIY repairs can cost $10-30 in materials, but professional results require skill and proper tools."
        },
        {
            question: "Is it worth hiring a professional for drywall repair?",
            answer: "For holes larger than a fist or any water damage, hiring a professional is recommended. Professionals ensure proper texture matching, structural integrity, and a paint-ready finish. The investment pays off in quality and durability."
        },
        {
            question: "How long does drywall repair take?",
            answer: "Most small to medium drywall repairs take 2-4 hours in a single visit. Larger repairs or water damage restoration may require 1-2 days including drying time between coats."
        },
        {
            question: "Does drywall repair include painting?",
            answer: "Standard drywall repair includes patching, mudding, sanding, and priming. Painting is typically quoted separately or as an add-on. LUXHT Fix provides paint-ready finishes with texture matching included."
        },
        {
            question: "What factors affect drywall repair costs the most?",
            answer: "The biggest cost factors are: size of damage, accessibility (ceiling vs wall), texture matching complexity, and whether water damage is involved. Water damage repairs cost more due to mold inspection and additional prep work."
        }
    ];

    return (
        <main className="min-h-screen bg-white text-slate-800 font-sans">
            <Navbar />

            {/* Hero Section */}
            <header className="relative bg-gradient-to-br from-[#584D94] to-[#7B6FCC] pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#64CEBB] rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    {/* Breadcrumb */}
                    <Link href="/costs/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
                        <ArrowLeft size={18} /> Back to Cost Guides
                    </Link>

                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 py-2 px-4 rounded-full text-sm font-semibold text-white/90 mb-4">
                            <Clock size={16} /> Updated January 2026
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            How Much Does Drywall Repair Cost in Orlando?
                        </h1>

                        <p className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
                            Get accurate pricing for drywall repair services in Orlando.
                            From small hole patches to full wall restoration.
                        </p>

                        {/* Price Highlight Box */}
                        <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-[#64CEBB] rounded-xl flex items-center justify-center">
                                    <DollarSign className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-center sm:text-left">
                                    <div className="text-white/70 text-sm">Typical Range</div>
                                    <div className="text-4xl font-bold text-white">$75 – $1,200</div>
                                </div>
                            </div>
                            <div className="hidden sm:block w-px h-12 bg-white/20"></div>
                            <div className="text-white/90 text-sm max-w-xs text-center sm:text-left">
                                <strong className="text-white">Most Common Projects:</strong><br />
                                $150 – $400 (2-3 small-to-medium repairs)
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Key Points */}
            <section className="py-8 px-4 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto max-w-4xl">
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-2xl font-bold text-[#64CEBB]">$75-$150</div>
                            <div className="text-slate-500 text-sm">Small Holes</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-[#64CEBB]">$150-$300</div>
                            <div className="text-slate-500 text-sm">Medium Repairs</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-[#64CEBB]">$300-$500</div>
                            <div className="text-slate-500 text-sm">Large Repairs</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-[#64CEBB]">$400-$800</div>
                            <div className="text-slate-500 text-sm">Water Damage</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <article className="py-16 px-4">
                <div className="container mx-auto max-w-4xl">

                    {/* Typical Project Example - NEW */}
                    <section className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-4 flex items-center gap-2">
                            <Hammer className="w-6 h-6" /> Typical Drywall Project Cost
                        </h2>
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <h3 className="font-bold text-lg mb-4">Standard Home Repair (3 locations)</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                    <span className="text-slate-600">2 small hole patches (nail holes, picture hooks)</span>
                                    <span className="font-semibold">$120</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                    <span className="text-slate-600">1 medium repair w/ texture matching (8" hole)</span>
                                    <span className="font-semibold">$180</span>
                                </div>
                                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                                    <span className="text-slate-600">Paint-ready finish (primer applied)</span>
                                    <span className="font-semibold">Included</span>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="font-bold text-lg">Total Project Cost</span>
                                    <span className="font-bold text-2xl text-[#64CEBB]">$300</span>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-4 italic">💡 Average LUXHT Fix project: $275 for 2-3 repairs with texture matching</p>
                        </div>
                    </section>

                    {/* Quick Cost Overview */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6 flex items-center gap-3">
                            <Ruler className="w-6 h-6" /> Drywall Repair Cost by Project Size
                        </h2>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                                <thead>
                                    <tr className="bg-[#584D94] text-white">
                                        <th className="text-left p-4 font-semibold">Repair Type</th>
                                        <th className="text-left p-4 font-semibold">Size</th>
                                        <th className="text-left p-4 font-semibold">Price Range</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-slate-100">
                                        <td className="p-4 font-medium">Small Hole Patch</td>
                                        <td className="p-4 text-slate-600">Under 4 inches</td>
                                        <td className="p-4 font-semibold text-[#64CEBB]">$75 - $150</td>
                                    </tr>
                                    <tr className="border-b border-slate-100 bg-slate-50">
                                        <td className="p-4 font-medium">Medium Repair</td>
                                        <td className="p-4 text-slate-600">4-12 inches</td>
                                        <td className="p-4 font-semibold text-[#64CEBB]">$150 - $300</td>
                                    </tr>
                                    <tr className="border-b border-slate-100">
                                        <td className="p-4 font-medium">Large Repair</td>
                                        <td className="p-4 text-slate-600">12+ inches</td>
                                        <td className="p-4 font-semibold text-[#64CEBB]">$300 - $500</td>
                                    </tr>
                                    <tr className="border-b border-slate-100 bg-slate-50">
                                        <td className="p-4 font-medium">Full Sheet Replacement</td>
                                        <td className="p-4 text-slate-600">4x8 ft sheet</td>
                                        <td className="p-4 font-semibold text-[#64CEBB]">$200 - $400</td>
                                    </tr>
                                    <tr className="border-b border-slate-100">
                                        <td className="p-4 font-medium">Water Damage Repair</td>
                                        <td className="p-4 text-slate-600">Varies</td>
                                        <td className="p-4 font-semibold text-[#64CEBB]">$400 - $800</td>
                                    </tr>
                                    <tr className="bg-slate-50">
                                        <td className="p-4 font-medium">Full Room</td>
                                        <td className="p-4 text-slate-600">10x12 ft room</td>
                                        <td className="p-4 font-semibold text-[#64CEBB]">$500 - $1,200</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-slate-500 text-sm mt-4 italic">
                            * Prices are estimates for the Orlando area. Actual costs may vary based on specific project requirements.
                        </p>
                    </section>

                    {/* Cost Factors */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6 flex items-center gap-3">
                            <Layers className="w-6 h-6" /> What Affects Drywall Repair Costs?
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-50 rounded-xl p-6">
                                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                    <Ruler className="w-5 h-5 text-[#64CEBB]" /> Size of Damage
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Larger holes require more materials and labor. A small nail hole
                                    costs far less than a fist-sized hole that needs backing and mesh.
                                </p>
                            </div>

                            <div className="bg-slate-50 rounded-xl p-6">
                                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                    <Hammer className="w-5 h-5 text-[#64CEBB]" /> Texture Matching
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Orange peel, knockdown, and popcorn textures require specialized
                                    skills to match. Smooth walls are easier and cheaper to repair.
                                </p>
                            </div>

                            <div className="bg-slate-50 rounded-xl p-6">
                                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                    <Droplets className="w-5 h-5 text-[#64CEBB]" /> Water Damage
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Water-damaged drywall often needs complete replacement, mold inspection,
                                    and may require addressing the source of moisture.
                                </p>
                            </div>

                            <div className="bg-slate-50 rounded-xl p-6">
                                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                    <Users className="w-5 h-5 text-[#64CEBB]" /> Accessibility
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Ceiling repairs, high walls, and hard-to-reach areas require
                                    ladders or scaffolding, adding to labor costs.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* DIY vs Pro */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6">
                            DIY vs. Hiring a Professional
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="border border-slate-200 rounded-xl p-6">
                                <h3 className="font-bold text-lg mb-4 text-slate-800">🔧 DIY Approach</h3>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Materials cost $10-50 for small repairs</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Good for very small nail holes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                        <span>Texture matching is difficult</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                        <span>Poor finish reduces home value</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="border-2 border-[#64CEBB] rounded-xl p-6 bg-[#64CEBB]/5">
                                <h3 className="font-bold text-lg mb-4 text-slate-800">👷 Hire a Professional</h3>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Perfect texture matching guaranteed</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Proper structural repair for larger holes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Paint-ready finish in one visit</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Warranty on workmanship</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Money Saving Tips */}
                    <section className="mb-16 bg-amber-50 rounded-2xl p-8 border border-amber-100">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6 flex items-center gap-3">
                            <Lightbulb className="w-6 h-6 text-amber-500" /> Tips to Save Money on Drywall Repair
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">1</div>
                                <div>
                                    <h4 className="font-semibold mb-1">Bundle Multiple Repairs</h4>
                                    <p className="text-sm text-slate-600">Fix all holes at once to save on trip charges and labor.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">2</div>
                                <div>
                                    <h4 className="font-semibold mb-1">Clear the Work Area</h4>
                                    <p className="text-sm text-slate-600">Move furniture yourself to reduce labor time.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">3</div>
                                <div>
                                    <h4 className="font-semibold mb-1">Skip the Painting</h4>
                                    <p className="text-sm text-slate-600">Get a paint-ready finish and handle painting yourself.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-[#64CEBB] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">4</div>
                                <div>
                                    <h4 className="font-semibold mb-1">Fix Issues Early</h4>
                                    <p className="text-sm text-slate-600">Small cracks are cheaper to fix before they spread.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Why Choose LUXHT Fix */}
                    <section className="mb-16 bg-gradient-to-br from-[#584D94] to-[#7B6FCC] rounded-2xl p-8 text-white">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Shield className="w-6 h-6" /> Why Choose LUXHT Fix for Drywall Repair?
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold">Expert Texture Matching</h4>
                                    <p className="text-white/70 text-sm">We match any texture—orange peel, knockdown, smooth, and more.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold">Same-Week Service</h4>
                                    <p className="text-white/70 text-sm">Most repairs completed within the week you call.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold">Clean Worksite</h4>
                                    <p className="text-white/70 text-sm">We protect your floors and clean up every mess.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-[#64CEBB] flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold">Upfront Pricing</h4>
                                    <p className="text-white/70 text-sm">No surprises—you know the cost before we start.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => openModal('quote')}
                                className="bg-white text-[#584D94] font-bold py-3 px-6 rounded-full hover:shadow-lg transition-all inline-flex items-center justify-center gap-2"
                            >
                                <CheckCircle size={20} /> Get Free Quote
                            </button>
                            <a
                                href="tel:4077207476"
                                className="border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
                            >
                                <Phone size={20} /> (407) 720-7476
                            </a>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6">
                            Frequently Asked Questions
                        </h2>

                        <div className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-200">
                            {faqData.map((faq, index) => (
                                <FAQItem key={index} question={faq.question} answer={faq.answer} />
                            ))}
                        </div>
                    </section>

                    {/* Related Guides */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#584D94] mb-6">
                            Related Cost Guides
                        </h2>

                        <div className="grid md:grid-cols-3 gap-4">
                            <Link href="/costs/flooring-installation/" className="group border border-slate-200 rounded-xl p-4 hover:border-[#64CEBB] transition-colors">
                                <h3 className="font-semibold group-hover:text-[#584D94] transition-colors">Flooring Installation</h3>
                                <p className="text-sm text-slate-500">$3 - $20/sq ft</p>
                            </Link>
                            <Link href="/costs/bathroom-remodel/" className="group border border-slate-200 rounded-xl p-4 hover:border-[#64CEBB] transition-colors">
                                <h3 className="font-semibold group-hover:text-[#584D94] transition-colors">Bathroom Remodel</h3>
                                <p className="text-sm text-slate-500">$3,000 - $50,000+</p>
                            </Link>
                            <Link href="/costs/faucet-fixtures/" className="group border border-slate-200 rounded-xl p-4 hover:border-[#64CEBB] transition-colors">
                                <h3 className="font-semibold group-hover:text-[#584D94] transition-colors">Faucet & Fixtures</h3>
                                <p className="text-sm text-slate-500">$75 - $400</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>
        </main>
    );
}
