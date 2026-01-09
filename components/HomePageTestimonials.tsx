"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "David R.",
        loc: "Winter Park, FL",
        text: "Had a long list of 'small fixes' - wardrobe assembly and several floating shelves. They were fast, precise, and cleaned up everything. Best value in Orlando!",
        rating: 5
    },
    {
        name: "Amanda L.",
        loc: "Lake Nona, FL",
        text: "Finally fixed my squeaky doors and a few drywall patches that I'd been putting off. The attention to detail even on small jobs is impressive.",
        rating: 5
    },
    {
        name: "Robert K.",
        loc: "Windermere, FL",
        text: "Professional TV mounting and smart lock installation. Reliable service that actually shows up on time. Highly recommend for any home tech help.",
        rating: 5
    },
    {
        name: "Jennifer S.",
        loc: "Dr. Phillips, FL",
        text: "Helped me with move-in furniture assembly and mirror hanging. Everything is perfectly level and secure. So glad I found LUXHT Fix!",
        rating: 5
    },
    {
        name: "Sarah & Mike T.",
        loc: "Winter Park, FL",
        text: "They transformed our living room with a custom TV wall and finished the drywall perfectly. Builder-level results for our home repairs.",
        rating: 5
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
                    <div className="text-sm text-slate-400 mb-8">{cur.loc}</div>
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
