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
                        <div className="w-10 h-10 rounded-full border-2 border-white/20 bg-white flex items-center justify-center overflow-hidden">
                            <img src="/luxht-logo.jpg" alt="LUXHT Fix" className="w-full h-full object-cover" />
                        </div>
                        <div className="font-bold text-xl tracking-tight text-white">
                            LUXHT<span className="text-[#64CEBB]">Fix</span>
                        </div>
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

                {/* Links Grid - 2 cols on mobile, 4 cols on desktop */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">

                    {/* Services Column */}
                    <div>
                        <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">Services</h3>
                        <ul className="space-y-2 text-xs md:text-sm">
                            <li><Link href="/drywall-orlando" className="hover:text-[#64CEBB] transition-colors">Drywall Repair</Link></li>
                            <li><Link href="/tv-mounting-orlando" className="hover:text-[#64CEBB] transition-colors">TV Mounting</Link></li>
                            <li><Link href="/flooring-installation-orlando" className="hover:text-[#64CEBB] transition-colors">Flooring</Link></li>
                            <li><Link href="/deck-building-orlando" className="hover:text-[#64CEBB] transition-colors">Deck Building</Link></li>
                            <li><Link href="/services" className="font-bold text-[#64CEBB] hover:text-white transition-colors">All Services →</Link></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">Company</h3>
                        <ul className="space-y-2 text-xs md:text-sm">
                            <li><Link href="/about" className="hover:text-[#64CEBB] transition-colors">About Us</Link></li>
                            <li><Link href="/portfolio" className="hover:text-[#64CEBB] transition-colors">Portfolio</Link></li>
                            <li><Link href="/testimonials" className="hover:text-[#64CEBB] transition-colors">Testimonials</Link></li>
                            <li><Link href="/faq" className="hover:text-[#64CEBB] transition-colors">FAQ</Link></li>
                            <li><Link href="/costs" className="hover:text-[#64CEBB] transition-colors">Costs</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column - spans 2 cols on mobile */}
                    <div className="col-span-2 md:col-span-2 grid grid-cols-2 gap-4 mt-4 md:mt-0">
                        <div className="flex items-center gap-2">
                            <Phone size={16} className="text-[#64CEBB]" />
                            <div>
                                <div className="text-xs text-white/60">Call</div>
                                <a href="tel:4077207476" className="hover:text-[#64CEBB] text-xs md:text-sm font-medium">(407) 720-7476</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[#64CEBB]">💬</span>
                            <div>
                                <div className="text-xs text-white/60">Text</div>
                                <a href="sms:4077207476" className="hover:text-[#64CEBB] text-xs md:text-sm font-medium">(407) 720-7476</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={16} className="text-[#64CEBB]" />
                            <div>
                                <div className="text-xs text-white/60">Email</div>
                                <a href="mailto:info@luxht.com" className="hover:text-[#64CEBB] text-xs md:text-sm font-medium">info@luxht.com</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-[#64CEBB]" />
                            <div>
                                <div className="text-xs text-white/60">Area</div>
                                <span className="text-xs md:text-sm">Orlando, FL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-center text-blue-200 text-xs relative z-10">
                <p className="mb-3">© {new Date().getFullYear()} LUXHT Fix. All rights reserved. Licensed & Insured.</p>
                <div className="flex flex-wrap justify-center gap-4 text-slate-400">
                    <Link href="/privacy-policy" className="hover:text-[#64CEBB] transition-colors">Privacy Policy</Link>
                    <span className="text-white/20">|</span>
                    <Link href="/terms-of-service" className="hover:text-[#64CEBB] transition-colors">Terms of Service</Link>
                    <span className="text-white/20">|</span>
                    <Link href="/cookie-policy" className="hover:text-[#64CEBB] transition-colors">Cookie Policy</Link>
                    <span className="text-white/20">|</span>
                    <Link href="/accessibility" className="hover:text-[#64CEBB] transition-colors">Accessibility</Link>
                </div>
            </div>
        </footer>
    );
}
