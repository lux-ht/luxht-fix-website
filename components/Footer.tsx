import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-[#584D94] to-[#453A75] text-slate-100 py-10 md:py-16 text-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#584D94] rounded-full blur-3xl -mr-40 -mt-40 opacity-50"></div>
            <div className="container mx-auto px-4 relative z-10">

                {/* Brand Row - Always full width */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
                    <div className="flex items-center gap-2">
                        <img src="/images/logo-wide-hammers.png" alt="LUXHT Fix" className="h-8 md:h-10 w-auto object-contain brightness-0 invert" />
                    </div>
                    <div className="flex gap-3">
                        <a href="#" className="w-9 h-9 rounded-full bg-slate-800/50 flex items-center justify-center hover:bg-[#64CEBB] hover:text-white transition-colors">
                            <Instagram size={16} />
                        </a>
                        <a href="#" className="w-9 h-9 rounded-full bg-slate-800/50 flex items-center justify-center hover:bg-[#64CEBB] hover:text-white transition-colors">
                            <Facebook size={16} />
                        </a>
                    </div>
                </div>

                {/* Links Grid - Services + Company side-by-side, Contact below */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
                    {/* Services Column - 1 col on mobile, 2 on desktop */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">Services</h3>
                        <ul className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs md:text-sm">
                            <li><Link href="/drywall-orlando/" className="hover:text-[#64CEBB] transition-colors">Drywall Repair</Link></li>
                            <li><Link href="/tv-mounting-orlando/" className="hover:text-[#64CEBB] transition-colors">TV Mounting</Link></li>
                            <li><Link href="/flooring-installation-orlando/" className="hover:text-[#64CEBB] transition-colors">Flooring</Link></li>
                            <li><Link href="/deck-building-orlando/" className="hover:text-[#64CEBB] transition-colors">Deck Building</Link></li>
                            <li><Link href="/bath-remodel-orlando/" className="hover:text-[#64CEBB] transition-colors">Bath Remodel</Link></li>
                            <li><Link href="/kitchen-refacing-orlando/" className="hover:text-[#64CEBB] transition-colors">Kitchen Refacing</Link></li>
                            <li><Link href="/door-lock-trim-orlando/" className="hover:text-[#64CEBB] transition-colors">Door, Lock & Trim</Link></li>
                            <li><Link href="/faucet-fixtures-orlando/" className="hover:text-[#64CEBB] transition-colors">Faucet & Fixtures</Link></li>
                            <li><Link href="/smart-home-installation-orlando/" className="hover:text-[#64CEBB] transition-colors">Smart Home</Link></li>
                            <li><Link href="/furniture-assembly-orlando/" className="hover:text-[#64CEBB] transition-colors">Furniture Assembly</Link></li>
                            <li className="col-span-2 mt-1"><Link href="/services/" className="font-bold text-[#64CEBB] hover:text-white transition-colors">All Services →</Link></li>
                        </ul>
                    </div>

                    {/* Company Column - 1 col, sits next to Services on mobile */}
                    <div className="col-span-1">
                        <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">Company</h3>
                        <ul className="space-y-2 text-xs md:text-sm">
                            <li><Link href="/about/" className="hover:text-[#64CEBB] transition-colors">About Us</Link></li>
                            <li><Link href="/portfolio/" className="hover:text-[#64CEBB] transition-colors">Portfolio</Link></li>
                            <li><Link href="/testimonials/" className="hover:text-[#64CEBB] transition-colors">Testimonials</Link></li>
                            <li><Link href="/faq/" className="hover:text-[#64CEBB] transition-colors">FAQ</Link></li>
                            <li><Link href="/costs/" className="hover:text-[#64CEBB] transition-colors">Costs</Link></li>
                        </ul>
                    </div>

                    {/* Contact — 2×2 grid on mobile, single col on desktop */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center border border-white/10 flex-shrink-0">
                                    <Phone size={12} className="text-[#64CEBB]" />
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase tracking-wider text-white/40 font-bold mb-0.5">Call</div>
                                    <a href="tel:4077207476" className="hover:text-[#64CEBB] text-xs font-medium">(407) 720-7476</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center border border-white/10 flex-shrink-0">
                                    <span className="text-[#64CEBB] text-xs">💬</span>
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase tracking-wider text-white/40 font-bold mb-0.5">Text</div>
                                    <a href="sms:4077207476" className="hover:text-[#64CEBB] text-xs font-medium">(407) 720-7476</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center border border-white/10 flex-shrink-0">
                                    <Mail size={12} className="text-[#64CEBB]" />
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase tracking-wider text-white/40 font-bold mb-0.5">Email</div>
                                    <a href="mailto:info@luxht.com" className="hover:text-[#64CEBB] text-xs font-medium">info@luxht.com</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center border border-white/10 flex-shrink-0">
                                    <MapPin size={12} className="text-[#64CEBB]" />
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase tracking-wider text-white/40 font-bold mb-0.5">Area</div>
                                    <span className="text-xs font-medium text-white/90">Orlando, FL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* From the Business - SEO Bio Section */}
                <div className="mt-8 pt-6 border-t border-white/10">
                    <h3 className="font-bold text-white mb-3 uppercase tracking-wider text-xs">From the Business</h3>
                    <div className="max-w-4xl text-slate-300/90 leading-relaxed text-xs md:text-sm">
                        {/* Mobile: show only the first short sentence */}
                        <p>
                            <span className="font-semibold text-white">LUXHT Fix</span>, a premier division of LUXURY HOME TRANSFORMATIONS LLC, is dedicated to providing high-end handyman and home improvement services across the greater Orlando area.
                        </p>
                        {/* Desktop: show the full second paragraph too */}
                        <p className="hidden md:block mt-3">
                            We specialize in professional TV mounting, expert furniture assembly, and high-quality interior painting for residents in Maitland, Winter Park, and Casselberry. With a focus on reliability and precision, LUXHT Fix ensures your home projects—from minor electrical work to complex home staging—are handled with the utmost care and attention to detail. Experience the difference of a professional team committed to excellence and sophisticated results in every Orlando home.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-4 pt-4 border-t border-white/10 text-center text-blue-200 text-xs relative z-10">
                <p className="mb-3">© {new Date().getFullYear()} LUXHT Fix. All rights reserved. Licensed & Insured.</p>
                <div className="flex flex-wrap justify-center gap-4 text-slate-400">
                    <Link href="/privacy-policy/" className="hover:text-[#64CEBB] transition-colors">Privacy Policy</Link>
                    <span className="text-white/20">|</span>
                    <Link href="/terms-of-service/" className="hover:text-[#64CEBB] transition-colors">Terms of Service</Link>
                    <span className="text-white/20">|</span>
                    <Link href="/cookie-policy/" className="hover:text-[#64CEBB] transition-colors">Cookie Policy</Link>
                    <span className="text-white/20">|</span>
                    <Link href="/accessibility/" className="hover:text-[#64CEBB] transition-colors">Accessibility</Link>
                </div>
            </div>
        </footer>
    );
}
