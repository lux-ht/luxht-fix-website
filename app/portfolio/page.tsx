"use client";

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Phone, Eye, Calendar, DollarSign } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

const projects = [
    {
        title: "Complete Bathroom Renovation",
        location: "Winter Park, FL",
        service: "Bathroom Remodel",
        before: "/portfolio/bathroom-before.jpg",
        after: "/portfolio/bathroom-after.jpg",
        cost: "$18,000",
        duration: "3 weeks",
        description: "Full 5'x8' bathroom transformation with tiled shower, new vanity, fixtures, and flooring. Modern finishes throughout.",
        highlights: ["Custom tile work", "Walk-in shower", "Dual sink vanity", "Heated floors"]
    },
    {
        title: "Living Room Drywall Repair",
        location: "Orlando, FL",
        service: "Drywall Repair",
        before: "/portfolio/drywall-before.jpg",
        after: "/portfolio/drywall-after.jpg",
        cost: "$450",
        duration: "1 day",
        description: "Water damage repair across living room ceiling and walls. Seamless texture matching and paint-ready finish.",
        highlights: ["Texture matched perfectly", "Paint-ready finish", "Same-day completion", "Clean workspace"]
    },
    {
        title: "Composite Deck Addition",
        location: "Windermere, FL",
        service: "Deck Building",
        before: "/portfolio/deck-before.jpg",
        after: "/portfolio/deck-after.jpg",
        cost: "$9,500",
        duration: "2 weeks",
        description: "300 sq ft composite deck with built-in benches, LED lighting, and cable railing system.",
        highlights: ["Composite decking", "LED lighting", "Cable rails", "Built-in seating"]
    },
    {
        title: "Kitchen Cabinet Refacing",
        location: "Dr. Phillips, FL",
        service: "Kitchen Refacing",
        before: "/portfolio/kitchen-before.jpg",
        after: "/portfolio/kitchen-after.jpg",
        cost: "$8,200",
        duration: "4 days",
        description: "Transformed outdated oak cabinets with modern shaker-style doors and soft-close hardware.",
        highlights: ["Shaker-style doors", "Soft-close hinges", "New hardware", "Kitchen stayed functional"]
    },
    {
        title: "Master Bedroom Flooring",
        location: "Lake Nona, FL",
        service: "Flooring Installation",
        before: "/portfolio/flooring-before.jpg",
        after: "/portfolio/flooring-after.jpg",
        cost: "$2,560",
        duration: "2 days",
        description: "Replaced old carpet with luxury vinyl plank flooring. Includes baseboard installation and cleanup.",
        highlights: ["LVP flooring", "Waterproof", "New baseboards", "Fast installation"]
    },
    {
        title: "Home Theater TV Setup",
        location: "Celebration, FL",
        service: "TV Mounting",
        before: "/portfolio/tv-before.jpg",
        after: "/portfolio/tv-after.jpg",
        cost: "$425",
        duration: "3 hours",
        description: "75\" TV wall mounted with in-wall cable concealment and soundbar installation.",
        highlights: ["In-wall cables", "Soundbar mounted", "Perfect level", "Full-motion mount"]
    },
    {
        title: "Smart Home Security Package",
        location: "Oviedo, FL",
        service: "Smart Home Installation",
        before: "/portfolio/smarthome-before.jpg",
        after: "/portfolio/smarthome-after.jpg",
        cost: "$1,450",
        duration: "1 day",
        description: "Complete security system with video doorbell, 3 cameras, smart locks, and garage door controller.",
        highlights: ["Video doorbell", "3 security cameras", "2 smart locks", "App integration"]
    },
    {
        title: "Front Entry Door Upgrade",
        location: "Altamonte Springs, FL",
        service: "Door Installation",
        before: "/portfolio/door-before.jpg",
        after: "/portfolio/door-after.jpg",
        cost: "$1,250",
        duration: "4 hours",
        description: "Replaced old wooden door with modern steel entry door, smart lock, and weather stripping.",
        highlights: ["Steel door", "Smart deadbolt", "Weather sealed", "Curb appeal boost"]
    }
];

export default function PortfolioPage() {
    const { openModal } = useModal();

    return (
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
                            <Eye size={16} /> Our Work
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Project Portfolio<br />
                            <span className="text-[#64CEBB]">See Our Quality Work</span>
                        </h1>

                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Browse real projects completed for Orlando homeowners. Every project shows our
                            commitment to quality, transparency, and customer satisfaction.
                        </p>

                        <div className="flex flex-wrap justify-center gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#64CEBB]">500+</div>
                                <div className="text-white/70 text-sm">Projects Completed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#64CEBB]">100%</div>
                                <div className="text-white/70 text-sm">Satisfaction Rate</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#64CEBB]">40+</div>
                                <div className="text-white/70 text-sm">Years Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Portfolio Grid */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="space-y-16">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all">
                                {/* Before/After Images */}
                                <div className="grid md:grid-cols-2">
                                    {/* Before */}
                                    <div className="relative bg-slate-100 aspect-[4/3] overflow-hidden group">
                                        <div className="absolute top-4 left-4 z-10 bg-red-500 text-white font-bold px-4 py-2 rounded-full text-sm">
                                            BEFORE
                                        </div>
                                        <img
                                            src={project.before}
                                            alt={`${project.title} - Before`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* After */}
                                    <div className="relative bg-slate-100 aspect-[4/3] overflow-hidden group">
                                        <div className="absolute top-4 left-4 z-10 bg-green-500 text-white font-bold px-4 py-2 rounded-full text-sm">
                                            AFTER
                                        </div>
                                        <img
                                            src={project.after}
                                            alt={`${project.title} - After`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Project Details */}
                                <div className="p-8">
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <span className="bg-[#64CEBB] text-white text-xs font-bold px-3 py-1 rounded-full">
                                            {project.service}
                                        </span>
                                        <span className="text-slate-500 text-sm">{project.location}</span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-[#584D94] mb-3">{project.title}</h2>
                                    <p className="text-slate-700 mb-6 leading-relaxed">{project.description}</p>

                                    {/* Highlights */}
                                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                                        {project.highlights.map((highlight, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <CheckCircle className="w-4 h-4 text-[#64CEBB] flex-shrink-0" />
                                                <span className="text-sm text-slate-600">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Cost & Duration */}
                                    <div className="flex flex-wrap gap-6 pt-6 border-t border-slate-200">
                                        <div className="flex items-center gap-2">
                                            <DollarSign className="w-5 h-5 text-[#64CEBB]" />
                                            <div>
                                                <div className="text-xs text-slate-500">Project Cost</div>
                                                <div className="font-bold text-[#584D94]">{project.cost}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-5 h-5 text-[#64CEBB]" />
                                            <div>
                                                <div className="text-xs text-slate-500">Duration</div>
                                                <div className="font-bold text-[#584D94]">{project.duration}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-[#584D94] to-[#7B6FCC]">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                        Get transparent pricing and quality craftsmanship. Browse our cost guides or request
                        a personalized quote today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/costs/" className="bg-white text-[#584D94] font-bold py-4 px-8 rounded-full hover:shadow-xl transition-all inline-flex items-center justify-center gap-2">
                            <Eye size={20} /> View Pricing
                        </Link>
                        <button onClick={() => openModal('quote')} className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2">
                            <Phone size={20} /> Get Free Quote
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
