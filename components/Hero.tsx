'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import FloatingIcons from './FloatingIcons';

interface HeroProps {
    imageSrc?: string;
    imageAlt?: string;
    imageOpacity?: string;
    showFloatingParticles?: boolean;
}

export default function Hero({ imageSrc, imageAlt, imageOpacity = "opacity-10", showFloatingParticles = false }: HeroProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite_reverse]" />



            {imageSrc && (
                <div className="absolute inset-0 z-0">
                    <motion.img
                        src={imageSrc}
                        alt={imageAlt || "Hero Background"}
                        className={`w-full h-full object-cover ${imageOpacity}`}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white/30 to-white" />
                </div>
            )}

            {/* Floating Particles/Icons (z-5 to be above bg but below text) */}
            {showFloatingParticles && (
                <div className="absolute inset-0 z-5 pointer-events-none">
                    <FloatingIcons />
                </div>
            )}

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-600/10 border border-blue-600/20 text-sm mb-6 text-blue-700 backdrop-blur-md">
                        Serving Orlando & Surrounding Areas
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-slate-900">
                        Professional Drywall Repair <br />
                        <span className="text-gradient">Done Seamlessly</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                        We fix holes, cracks, and water damage with clean, invisible results.
                        Restoring your walls so it looks like nothing ever happened.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="tel:5555555555"
                            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold text-lg transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
                        >
                            Call Now
                        </a>
                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-8 py-4 glass-button rounded-full font-semibold text-lg flex items-center justify-center gap-2 group"
                        >
                            Contact Us
                            <Mail className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    <p className="mt-4 text-sm text-slate-500">
                        Same week service • Licensed & Insured
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
