"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

// Inline Google "G" logo SVG
function GoogleGIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-label="Google">
            <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
            <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.32-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
            <path fill="#FBBC05" d="M11.68 28.18A13.4 13.4 0 0 1 10.8 24c0-1.45.25-2.86.68-4.18v-5.7H4.34A23.93 23.93 0 0 0 .08 24c0 3.88.93 7.55 2.57 10.79l7.03-5.52-.23-.09z" />
            <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.34 5.7C13.42 14.62 18.27 10.75 24 10.75z" />
        </svg>
    );
}

const testimonials = [
    {
        name: "David R.",
        loc: "Winter Park, FL",
        text: "Had a long list of 'small fixes' - wardrobe assembly and several floating shelves. They were fast, precise, and cleaned up everything. Best value in Orlando!",
        rating: 5,
        date: "Jan 2025"
    },
    {
        name: "Amanda L.",
        loc: "Lake Nona, FL",
        text: "Finally fixed my squeaky doors and a few drywall patches that I'd been putting off. The attention to detail even on small jobs is impressive.",
        rating: 5,
        date: "Feb 2025"
    },
    {
        name: "Robert K.",
        loc: "Windermere, FL",
        text: "Professional TV mounting and smart lock installation. Reliable service that actually shows up on time. Highly recommend for any home tech help.",
        rating: 5,
        date: "Dec 2024"
    },
    {
        name: "Jennifer S.",
        loc: "Dr. Phillips, FL",
        text: "Helped me with move-in furniture assembly and mirror hanging. Everything is perfectly level and secure. So glad I found LUXHT Fix!",
        rating: 5,
        date: "Nov 2024"
    },
    {
        name: "Sarah & Mike T.",
        loc: "Winter Park, FL",
        text: "They transformed our living room with a custom TV wall and finished the drywall perfectly. Builder-level results for our home repairs.",
        rating: 5,
        date: "Mar 2025"
    }
];

export default function HomePageTestimonials() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const cur = testimonials[index];

    return (
        <div className="bg-gradient-to-br from-[#584D94] to-[#7B6FCC] rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl min-h-[400px] flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#64CEBB] rounded-full blur-3xl opacity-20"></div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="relative z-10 text-center"
                >
                    <div className="flex justify-center gap-1 text-[#FCD34D] mb-4">
                        {[...Array(cur.rating)].map((_, i) => (
                            <Star key={i} fill="currentColor" size={24} />
                        ))}
                    </div>

                    <blockquote className="text-xl md:text-2xl font-medium italic mb-6 leading-relaxed">
                        "{cur.text}"
                    </blockquote>

                    <div className="font-bold text-[#64CEBB] mb-1">{cur.name}</div>
                    <div className="text-sm text-slate-400 mb-3">{cur.loc}</div>
                    {/* Google attribution */}
                    <div className="flex items-center justify-center gap-1.5 mb-6">
                        <GoogleGIcon />
                        <span className="text-[11px] text-white/40 font-medium">Google Review</span>
                        {cur.date && <span className="text-[11px] text-white/30">· {cur.date}</span>}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-auto relative z-10">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === i ? "bg-[#64CEBB] w-6" : "bg-white/20"
                            }`}
                        aria-label={`Go to testimonial ${i + 1}`}
                    />
                ))}
            </div>

            <div className="mt-8 pt-8 border-t border-slate-800 text-center relative z-10">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-slate-400 text-sm tracking-wide uppercase font-semibold">Happy Customers in Orlando</div>
            </div>
        </div>
    );
}
