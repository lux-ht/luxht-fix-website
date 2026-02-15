"use client";

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { Star, Quote, MapPin, CheckCircle, Phone, Eye } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

const testimonials = [
    {
        name: "Sarah Mitchell",
        location: "Winter Park, FL",
        service: "Drywall Repair",
        rating: 5,
        date: "December 2025",
        text: "LUXHT Fix transformed our living room after water damage. The drywall repair was seamless—you can't even tell there was damage. They matched the texture perfectly and the price was exactly what they quoted online. No surprises!",
        image: "/testimonials/sarah-m.jpg"
    },
    {
        name: "Michael Rodriguez",
        location: "Orlando, FL",
        service: "TV Mounting",
        rating: 5,
        date: "January 2026",
        text: "Professional TV mounting service! They concealed all the cables in the wall and mounted our 75\" TV perfectly level. The technician was knowledgeable and cleaned up everything. Worth every penny of the $250 package.",
        image: "/testimonials/michael-r.jpg"
    },
    {
        name: "Jennifer Park",
        location: "Lake Nona, FL",
        service: "Bathroom Remodel",
        rating: 5,
        date: "November 2025",
        text: "Our bathroom remodel came out stunning! LUXHT Fix handled everything from design to installation. The project stayed on budget ($18,500) and was completed in 3 weeks as promised. Their transparency made the whole process stress-free.",
        image: "/testimonials/jennifer-p.jpg"
    },
    {
        name: "David Thompson",
        location: "Windermere, FL",
        service: "Deck Building",
        rating: 5,
        date: "October 2025",
        text: "Built a 300 sq ft composite deck in our backyard. The craftsmanship is excellent and they handled all the permits. Having upfront pricing on their website helped us budget properly. Highly recommend!",
        image: "/testimonials/david-t.jpg"
    },
    {
        name: "Lisa Chen",
        location: "Dr. Phillips, FL",
        service: "Flooring Installation",
        rating: 5,
        date: "December 2025",
        text: "Replaced carpet with vinyl plank in 3 bedrooms. The installation was flawless and the crew was respectful of our home. Project cost exactly $2,400 as estimated. Love the transparent pricing model!",
        image: "/testimonials/lisa-c.jpg"
    },
    {
        name: "Robert Williams",
        location: "Oviedo, FL",
        service: "Kitchen Refacing",
        rating: 5,
        date: "September 2025",
        text: "Kitchen cabinet refacing completely transformed our outdated kitchen. The quality is amazing and it cost half of what full replacement would have been. Took only 4 days and our kitchen was usable the whole time!",
        image: "/testimonials/robert-w.jpg"
    },
    {
        name: "Amanda Foster",
        location: "Celebration, FL",
        service: "Smart Home Installation",
        rating: 5,
        date: "January 2026",
        text: "They set up our entire smart home system—thermostat, doorbell, locks, and cameras. Everything works perfectly and they taught us how to use it all. Great value at $1,200 for the security package.",
        image: "/testimonials/amanda-f.jpg"
    },
    {
        name: "Kevin Martinez",
        location: "Altamonte Springs, FL",
        service: "Furniture Assembly",
        rating: 5,
        date: "November 2025",
        text: "Assembled our entire IKEA bedroom set in 2 hours. Fast, professional, and they took away all the packaging. The $270 was well worth not spending my weekend struggling with instructions!",
        image: "/testimonials/kevin-m.jpg"
    }
];

export default function TestimonialsPage() {
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
                            <Star size={16} /> 4.9 Stars on Google
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            What Our Customers<br />
                            <span className="text-[#64CEBB]">Are Saying</span>
                        </h1>

                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Real reviews from real Orlando homeowners who experienced our transparent pricing
                            and quality craftsmanship firsthand.
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-8 mb-10">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#64CEBB]">500+</div>
                                <div className="text-white/70 text-sm">Happy Customers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#64CEBB]">4.9★</div>
                                <div className="text-white/70 text-sm">Average Rating</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#64CEBB]">100%</div>
                                <div className="text-white/70 text-sm">Satisfaction Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Testimonials Grid */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                                {/* Rating */}
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <Quote className="w-8 h-8 text-[#64CEBB] mb-3 opacity-50" />

                                {/* Testimonial Text */}
                                <p className="text-slate-700 mb-6 leading-relaxed">
                                    {testimonial.text}
                                </p>

                                {/* Service Badge */}
                                <div className="inline-block bg-[#64CEBB]/10 text-[#64CEBB] text-xs font-bold px-3 py-1 rounded-full mb-4">
                                    {testimonial.service}
                                </div>

                                {/* Author Info */}
                                <div className="pt-4 border-t border-slate-100">
                                    <div className="font-bold text-slate-800">{testimonial.name}</div>
                                    <div className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                                        <MapPin size={14} />
                                        {testimonial.location}
                                    </div>
                                    <div className="text-xs text-slate-400 mt-1">{testimonial.date}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-16 px-4 bg-slate-50">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl font-bold text-[#584D94] text-center mb-12">
                        Why Customers Trust LUXHT Fix
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#64CEBB]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-8 h-8 text-[#64CEBB]" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Transparent Pricing</h3>
                            <p className="text-slate-600 text-sm">
                                We show our prices upfront—no hidden fees, no surprises. What you see is what you pay.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#64CEBB]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Star className="w-8 h-8 text-[#64CEBB]" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Quality Craftsmanship</h3>
                            <p className="text-slate-600 text-sm">
                                40+ years of combined experience. Licensed, insured, and dedicated to doing it right.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#64CEBB]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-8 h-8 text-[#64CEBB]" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Same-Day Service</h3>
                            <p className="text-slate-600 text-sm">
                                Many projects can start the same day you call. Fast, professional, and reliable.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-[#584D94] to-[#7B6FCC]">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Become Our Next Success Story
                    </h2>
                    <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                        Join hundreds of satisfied Orlando homeowners. Get transparent pricing and quality craftsmanship.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/portfolio/" className="bg-white text-[#584D94] font-bold py-4 px-8 rounded-full hover:shadow-xl transition-all inline-flex items-center justify-center gap-2">
                            <Eye size={20} /> View Our Portfolio
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
