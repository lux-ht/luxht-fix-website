"use client";

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Head from 'next/head';
import { Shield, DollarSign, CheckCircle, Eye, TrendingUp, Users, FileText, Phone, AlertCircle, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { useState } from 'react';

// SEO-optimized FAQ data for schema markup and user interaction
const faqData = [
    {
        question: "How much does handyman work cost in Orlando?",
        answer: "Handyman costs in Orlando range from $75 for small repairs like drywall patches to $50,000+ for major renovations like bathroom remodels. Most common services like TV mounting ($100-$400), faucet installation ($75-$400), and furniture assembly ($40-$400) have predictable pricing. LUXHT Fix publishes all pricing online so you can budget before calling."
    },
    {
        question: "Why don't most handyman companies show their prices?",
        answer: "Many companies use a 'lead-first' model where they want to speak with you before revealing pricing. This allows them to adjust quotes based on perceived budget and urgency. We believe transparent pricing builds trust and helps you make informed decisions."
    },
    {
        question: "Is LUXHT Fix the cheapest handyman service in Orlando?",
        answer: "We're not the cheapest—we focus on quality and transparency. Our prices reflect experienced craftsmen, quality materials, proper insurance, and warranties. You won't find surprise charges or 'estimate-then-upsell' tactics with us."
    },
    {
        question: "What's included in a LUXHT Fix quote?",
        answer: "Every quote includes materials, labor, cleanup, and warranty. We provide itemized written estimates so you know exactly what you're paying for. No hidden fees, trip charges, or surprise add-ons."
    },
    {
        question: "How accurate are your online pricing guides?",
        answer: "Our pricing guides are based on real projects completed in Orlando. Most customers find their final quote falls within our published ranges. Complex or unique projects may vary, which is why we always provide a personalized estimate."
    }
];

// FAQ Schema for Google
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
};

// Organization Schema
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "LUXHT Fix",
    "description": "Professional handyman and home repair services in Orlando with transparent pricing. Drywall repair, TV mounting, bathroom remodels, and more.",
    "url": "https://luxhtfix.com",
    "telephone": "+1-407-288-0832",
    "priceRange": "$$",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Orlando",
        "addressRegion": "FL",
        "addressCountry": "US"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.5383,
        "longitude": -81.3792
    },
    "areaServed": ["Orlando", "Winter Park", "Windermere", "Dr. Phillips", "Lake Nona", "Celebration", "Oviedo", "Altamonte Springs"],
    "sameAs": ["https://www.instagram.com/luxhtfix"]
};

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-200 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 px-2 flex items-center justify-between text-left hover:text-[#584D94] transition-colors"
            >
                <span className="font-semibold text-slate-800 pr-4">{question}</span>
                {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
            </button>
            {isOpen && (
                <div className="pb-4 px-2 text-slate-600 leading-relaxed">
                    {answer}
                </div>
            )}
        </div>
    );
}

export default function PricingTransparencyPage() {
    const { openModal } = useModal();

    return (
        <>
            {/* SEO Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />

            <main className="min-h-screen bg-white text-slate-800 font-sans">
                <Navbar />

                {/* Hero Section */}
                <header className="relative bg-gradient-to-br from-[#584D94] to-[#7B6FCC] pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#64CEBB] rounded-full blur-3xl"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 py-2 px-4 rounded-full text-sm font-semibold text-white/90 mb-6">
                                <Eye size={16} /> Our Pricing Philosophy
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Transparent Pricing,<br />
                                <span className="text-[#64CEBB]">Honest Work</span>
                            </h1>

                            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                                We believe you deserve to know what you're paying before you commit to anything.
                                That's why we publish our pricing guides and provide detailed, itemized quotes.
                            </p>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <article className="py-16 px-4">
                    <div className="container mx-auto max-w-4xl">

                        {/* Common Frustrations */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-[#584D94] mb-6">We Understand Your Frustrations</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                If you've ever tried to get home repair pricing, you've probably experienced some of these common frustrations:
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                                    <div className="flex items-start gap-3">
                                        <Phone className="w-5 h-5 text-slate-400 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold mb-1">"Call for pricing"</h3>
                                            <p className="text-sm text-slate-600">You just want a ballpark number, but every website requires a phone call first.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                                    <div className="flex items-start gap-3">
                                        <FileText className="w-5 h-5 text-slate-400 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Vague estimates</h3>
                                            <p className="text-sm text-slate-600">Quotes that don't explain what's included, leaving you guessing about the final price.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                                    <div className="flex items-start gap-3">
                                        <AlertCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Surprise add-ons</h3>
                                            <p className="text-sm text-slate-600">The final bill ends up higher than the original quote due to "unexpected" costs.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                                    <div className="flex items-start gap-3">
                                        <Users className="w-5 h-5 text-slate-400 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Pressure to decide</h3>
                                            <p className="text-sm text-slate-600">Feeling rushed to make a decision during an in-home estimate.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-slate-600 leading-relaxed">
                                We built LUXHT Fix to be different. You should be able to budget and plan your home repairs
                                <em> before</em> ever talking to anyone. That's why we publish pricing guides for every service we offer.
                            </p>
                        </section>

                        {/* Our Philosophy */}
                        <section className="mb-16 bg-gradient-to-br from-[#584D94] to-[#7B6FCC] rounded-2xl p-8 text-white">
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <Shield className="w-8 h-8" /> Our Pricing Philosophy
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                    <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                                        <CheckCircle className="w-6 h-6 text-[#64CEBB]" />
                                        Premium Quality
                                    </h3>
                                    <p className="text-white/80">
                                        We use experienced craftsmen with 40+ years of combined construction experience.
                                        We don't compromise on quality or cut corners to hit a price point.
                                    </p>
                                </div>

                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                    <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                                        <DollarSign className="w-6 h-6 text-[#64CEBB]" />
                                        Fair Prices
                                    </h3>
                                    <p className="text-white/80">
                                        Our prices reflect the true cost of quality work—materials, skilled labor, insurance,
                                        and business overhead. No inflated "estimate first, negotiate later" tactics.
                                    </p>
                                </div>

                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                    <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                                        <Eye className="w-6 h-6 text-[#64CEBB]" />
                                        Complete Transparency
                                    </h3>
                                    <p className="text-white/80">
                                        We show pricing ranges and typical project costs on every service page.
                                        You can budget and plan before ever picking up the phone.
                                    </p>
                                </div>

                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                    <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                                        <FileText className="w-6 h-6 text-[#64CEBB]" />
                                        Detailed Quotes
                                    </h3>
                                    <p className="text-white/80">
                                        Every quote is itemized and written. You'll know exactly what you're paying for
                                        before we start work. No surprises, no hidden fees.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#64CEBB] text-white p-4 rounded-xl text-center">
                                <p className="font-semibold text-lg">
                                    Our Promise: Premium quality at transparent, fair prices
                                </p>
                            </div>
                        </section>

                        {/* How Our Pricing Works */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-[#584D94] mb-6">How Our Pricing Works</h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#64CEBB] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Browse Transparent Pricing</h3>
                                        <p className="text-slate-600">
                                            Every service page shows pricing ranges and typical project costs.
                                            For simple services like TV mounting or faucet installation, we show "starting at" prices.
                                            For variable services like drywall repair or bathroom remodels, we show ranges with real project examples.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#64CEBB] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Request a Free Quote</h3>
                                        <p className="text-slate-600">
                                            Once you have a ballpark budget in mind, request a detailed quote. We'll ask about your specific project,
                                            room dimensions, material preferences, and any special requirements.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#64CEBB] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Receive Itemized Estimate</h3>
                                        <p className="text-slate-600">
                                            We provide a written, itemized quote breaking down materials, labor, and any additional costs.
                                            You'll see exactly what you're paying for, with no hidden fees or surprise charges.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#64CEBB] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Approve & Schedule</h3>
                                        <p className="text-slate-600">
                                            Only when you're comfortable with the price and scope do we schedule the work.
                                            No pressure, no hard selling—just honest pricing and quality craftsmanship.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* What's Included */}
                        <section className="mb-16 bg-slate-50 rounded-2xl p-8 border border-slate-200">
                            <h2 className="text-2xl font-bold text-[#584D94] mb-6">What's Included in Our Quotes</h2>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#64CEBB] flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">All Materials</h4>
                                        <p className="text-sm text-slate-600">Quality materials specified in your quote</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#64CEBB] flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Skilled Labor</h4>
                                        <p className="text-sm text-slate-600">Experienced, licensed professionals</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#64CEBB] flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Cleanup</h4>
                                        <p className="text-sm text-slate-600">We leave your space clean and tidy</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#64CEBB] flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Warranty</h4>
                                        <p className="text-sm text-slate-600">100% satisfaction guarantee on all work</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#64CEBB] flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Insurance Coverage</h4>
                                        <p className="text-sm text-slate-600">Fully licensed, bonded, and insured</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#64CEBB] flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-1">No Hidden Fees</h4>
                                        <p className="text-sm text-slate-600">The price you see is the price you pay</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Why This Matters */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-[#584D94] mb-6">Why Transparent Pricing Matters to You</h2>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
                                    <TrendingUp className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold mb-1">Budget with Confidence</h3>
                                        <p className="text-slate-700">
                                            Know what to expect before you call. Compare our pricing to competitors (if they'll tell you theirs).
                                            Plan your home improvement budget accurately.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                                    <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold mb-1">No Pressure Sales</h3>
                                        <p className="text-slate-700">
                                            You already know the ballpark cost, so our conversations are about <em>how</em> to do the job right,
                                            not about negotiating price or justifying our value.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl border border-purple-200">
                                    <Shield className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold mb-1">Build Trust Before We Meet</h3>
                                        <p className="text-slate-700">
                                            Transparency builds trust. We're not hiding anything, which means we're confident in our pricing
                                            and the quality of our work.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* FAQ Section - SEO Optimized */}
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold text-[#584D94] mb-6 flex items-center gap-3">
                                <HelpCircle className="w-8 h-8" /> Frequently Asked Questions
                            </h2>
                            <p className="text-slate-600 mb-6">
                                Get answers to common questions about handyman pricing and costs in Orlando.
                            </p>
                            <div className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-200">
                                {faqData.map((faq, index) => (
                                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                                ))}
                            </div>
                        </section>

                        {/* CTA */}
                        <section className="bg-gradient-to-r from-[#584D94] to-[#7B6FCC] rounded-2xl p-8 text-white text-center">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Experience the Difference
                            </h2>
                            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                                Join hundreds of Orlando homeowners who appreciate honest pricing and quality work.
                                Browse our transparent cost guides or get a personalized quote today.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/costs" className="bg-white text-[#584D94] font-bold py-3 px-8 rounded-full hover:shadow-lg transition-all inline-flex items-center justify-center gap-2">
                                    <Eye size={20} /> View All Pricing
                                </Link>
                                <button onClick={() => openModal('quote')} className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2">
                                    <Phone size={20} /> Get Free Quote
                                </button>
                            </div>
                        </section>

                    </div>
                </article>
            </main>
        </>
    );
}
