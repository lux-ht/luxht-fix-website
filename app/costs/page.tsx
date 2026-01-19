"use client";

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import {
    ArrowRight, DollarSign, Hammer, Tv, Home, Utensils,
    Fence, Lightbulb, Sofa, Droplets, DoorOpen, CheckCircle,
    TrendingUp, Users, Clock, Phone, Eye
} from 'lucide-react';
import { useModal } from '@/context/ModalContext';

const costCategories = [
    {
        title: "Drywall Repair",
        slug: "drywall-repair",
        description: "Patch holes, fix cracks, and repair water damage",
        priceRange: "$75 - $1,200",
        icon: Hammer,
        popular: true
    },
    {
        title: "TV Mounting",
        slug: "tv-mounting",
        description: "Wall mount installation and cable concealment",
        priceRange: "$100 - $400",
        icon: Tv,
        popular: true
    },
    {
        title: "Flooring Installation",
        slug: "flooring-installation",
        description: "Hardwood, laminate, vinyl, and tile flooring",
        priceRange: "$3 - $20/sq ft",
        icon: Home,
        popular: true
    },
    {
        title: "Bathroom Remodel",
        slug: "bathroom-remodel",
        description: "Complete bathroom renovations and updates",
        priceRange: "$3,000 - $50,000+",
        icon: Droplets,
        popular: false
    },
    {
        title: "Kitchen Refacing",
        slug: "kitchen-refacing",
        description: "Cabinet refacing and kitchen updates",
        priceRange: "$4,000 - $20,000",
        icon: Utensils,
        popular: false
    },
    {
        title: "Deck Building",
        slug: "deck-building",
        description: "Custom deck construction and repairs",
        priceRange: "$15 - $60/sq ft",
        icon: Fence,
        popular: false
    },
    {
        title: "Smart Home Installation",
        slug: "smart-home-installation",
        description: "Smart thermostats, doorbells, and automation",
        priceRange: "$150 - $5,000+",
        icon: Lightbulb,
        popular: false
    },
    {
        title: "Furniture Assembly",
        slug: "furniture-assembly",
        description: "IKEA and other furniture assembly services",
        priceRange: "$40 - $400",
        icon: Sofa,
        popular: false
    },
    {
        title: "Faucet & Fixtures",
        slug: "faucet-fixtures",
        description: "Faucet, toilet, and fixture installation",
        priceRange: "$75 - $400",
        icon: Droplets,
        popular: false
    },
    {
        title: "Door, Lock & Trim",
        slug: "door-lock-trim",
        description: "Door installation, lock replacement, and trim work",
        priceRange: "$100 - $1,500",
        icon: DoorOpen,
        popular: false
    }
];

export default function CostsPage() {
    const { openModal } = useModal();

    return (
        <main className="min-h-screen bg-white text-slate-800 font-sans">
            <Navbar />

            {/* Hero Section */}
            <header className="relative bg-gradient-to-br from-[#584D94] to-[#7B6FCC] pt-32 pb-20 overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#64CEBB] rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 py-2 px-4 rounded-full text-sm font-semibold text-white/90 mb-6">
                            <DollarSign size={16} /> 2026 Orlando Pricing Guide
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            How Much Does Home Improvement<br />
                            <span className="text-[#64CEBB]">Really Cost?</span>
                        </h1>

                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Get transparent pricing for home repairs and renovations in Orlando.
                            We've analyzed hundreds of projects to help you budget accurately.
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-8 mb-10">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#64CEBB]">500+</div>
                                <div className="text-white/70 text-sm">Projects Completed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#64CEBB]">10+</div>
                                <div className="text-white/70 text-sm">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#64CEBB]">100%</div>
                                <div className="text-white/70 text-sm">Transparent Pricing</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => openModal('quote')}
                                className="btn-gradient-primary btn-gradient-shimmer"
                            >
                                <Phone size={20} /> Get a Free Quote
                            </button>
                            <a href="sms:4077207476" className="btn-glass text-white font-bold py-3 px-8 rounded-full hover:bg-white/20 transition-all flex items-center gap-2">
                                <span>💬</span> Text Us
                            </a>
                            <a href="mailto:info@luxht.com" className="btn-glass text-white font-bold py-3 px-8 rounded-full hover:bg-white/20 transition-all flex items-center gap-2">
                                <span className="text-xl">✉️</span> Email Us
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Cost Categories Grid */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#584D94] mb-4">
                            Explore Cost Guides by Service
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Click on any service below to see detailed pricing breakdowns,
                            cost factors, and money-saving tips.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {costCategories.map((category, index) => {
                            const Icon = category.icon;
                            return (
                                <Link
                                    key={index}
                                    href={`/costs/${category.slug}`}
                                    className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#64CEBB]/50 transition-all duration-300 hover:-translate-y-1"
                                >
                                    {category.popular && (
                                        <span className="absolute top-4 right-4 bg-[#64CEBB] text-white text-xs font-bold px-2 py-1 rounded-full">
                                            Popular
                                        </span>
                                    )}

                                    <div className="w-14 h-14 bg-gradient-to-br from-[#584D94] to-[#7B6FCC] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#584D94] transition-colors">
                                        {category.title}
                                    </h3>

                                    <p className="text-slate-500 text-sm mb-4">
                                        {category.description}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-[#64CEBB] font-bold text-lg">
                                            {category.priceRange}
                                        </span>
                                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#584D94] group-hover:translate-x-1 transition-all" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Pricing Philosophy Callout - NEW */}
            <section className="py-16 px-4 bg-gradient-to-r from-[#584D94] to-[#7B6FCC]">
                <div className="container mx-auto max-w-5xl">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 text-center">
                        <div className="inline-flex items-center gap-2 bg-[#64CEBB] text-white py-2 px-4 rounded-full text-sm font-bold mb-4">
                            <Eye size={16} /> Our Competitive Advantage
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Why We Show Our Prices (When Others Won't)
                        </h2>
                        <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
                            We researched every major handyman service in Orlando. They all hide their pricing behind
                            "request a quote" buttons and phone-first sales tactics. We believe you deserve better.
                        </p>
                        <Link
                            href="/pricing-transparency"
                            className="inline-flex items-center gap-2 bg-white text-[#584D94] font-bold py-3 px-8 rounded-full hover:shadow-xl transition-all"
                        >
                            <Eye size={20} /> Read Our Pricing Philosophy
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Trust Our Pricing */}
            <section className="py-20 px-4 bg-slate-50">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#584D94] mb-4">
                            Why Trust Our Cost Estimates?
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Our pricing data comes from real projects completed in the Orlando area.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-[#64CEBB]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="w-8 h-8 text-[#64CEBB]" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Real Orlando Data</h3>
                            <p className="text-slate-500 text-sm">
                                Prices based on actual projects completed in Orlando and Central Florida.
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-[#584D94]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-8 h-8 text-[#584D94]" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Updated for 2026</h3>
                            <p className="text-slate-500 text-sm">
                                All pricing reflects current material costs and labor rates.
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-[#64CEBB]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-[#64CEBB]" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Expert Reviewed</h3>
                            <p className="text-slate-500 text-sm">
                                Every guide is reviewed by our experienced contractors.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-[#584D94] to-[#7B6FCC]">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready for an Accurate Quote?
                    </h2>
                    <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                        These guides provide estimates, but every project is unique.
                        Get a personalized quote for your specific needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => openModal('quote')}
                            className="bg-white text-[#584D94] font-bold py-4 px-8 rounded-full hover:shadow-lg transition-all inline-flex items-center justify-center gap-2"
                        >
                            <CheckCircle size={20} /> Get Free Quote
                        </button>
                        <a
                            href="sms:4077207476"
                            className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
                        >
                            <span>💬</span> Text Us
                        </a>
                        <a
                            href="tel:4077207476"
                            className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
                        >
                            <Phone size={20} /> Call Now
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
