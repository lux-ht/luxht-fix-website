import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-[#584D94] to-[#453A75] text-slate-100 py-16 text-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#584D94] rounded-full blur-3xl -mr-40 -mt-40 opacity-50"></div>
            <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12 relative z-10">

                {/* Brand Column */}
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-10 h-10 rounded-full border-2 border-white/20 bg-white flex items-center justify-center overflow-hidden">
                            <img src="/luxht-logo.jpg" alt="LUXHT Fix" className="w-full h-full object-cover" />
                        </div>
                        <div className="font-bold text-xl tracking-tight text-white">
                            LUXHT<span className="text-[#64CEBB]">Fix</span>
                        </div>
                    </div>
                    <p className="mb-6 leading-relaxed text-slate-400">
                        Professional home repairs and renovations in Orlando. Licensed, insured, and dedicated to craftsmanship.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center hover:bg-[#64CEBB] hover:text-white transition-colors">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center hover:bg-[#64CEBB] hover:text-white transition-colors">
                            <Facebook size={18} />
                        </a>
                    </div>
                </div>

                {/* Services Column */}
                <div>
                    <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Services</h3>
                    <ul className="space-y-3">
                        <li><Link href="/drywall-orlando" className="hover:text-[#64CEBB] transition-colors">Drywall Repair</Link></li>
                        <li><Link href="/tv-mounting-orlando" className="hover:text-[#64CEBB] transition-colors">TV Mounting</Link></li>
                        <li><Link href="/flooring-installation-orlando" className="hover:text-[#64CEBB] transition-colors">Flooring Installation</Link></li>
                        <li><Link href="/deck-building-orlando" className="hover:text-[#64CEBB] transition-colors">Deck Building</Link></li>
                        <li><Link href="/kitchen-refacing-orlando" className="hover:text-[#64CEBB] transition-colors">Kitchen Refacing</Link></li>
                        <li><Link href="/bath-remodel-orlando" className="hover:text-[#64CEBB] transition-colors">Bath Remodel</Link></li>
                        <li><Link href="/services" className="font-bold text-[#64CEBB] hover:text-white transition-colors mt-2 inline-block">View All Services →</Link></li>
                    </ul>
                </div>

                {/* Company Column */}
                <div>
                    <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Company</h3>
                    <ul className="space-y-3">
                        <li><Link href="/about" className="hover:text-[#64CEBB] transition-colors">About Us</Link></li>
                        <li><Link href="/portfolio" className="hover:text-[#64CEBB] transition-colors">Portfolio</Link></li>
                        <li><Link href="/testimonials" className="hover:text-[#64CEBB] transition-colors">Testimonials</Link></li>
                        <li><Link href="/faq" className="hover:text-[#64CEBB] transition-colors">FAQ</Link></li>
                        <li><Link href="/pricing-transparency" className="hover:text-[#64CEBB] transition-colors">Why Transparent Pricing?</Link></li>
                        <li><Link href="/services" className="hover:text-[#64CEBB] transition-colors">Process</Link></li>
                        <li><Link href="/#contact" className="hover:text-[#64CEBB] transition-colors">Contact</Link></li>
                        <li><Link href="/privacy" className="hover:text-[#64CEBB] transition-colors">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Contact Column */}
                <div>
                    <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Contact Us</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <Phone size={18} className="text-[#64CEBB] mt-1" />
                            <div>
                                <div className="font-bold text-white">Call Us</div>
                                <a href="tel:4072880832" className="hover:text-[#64CEBB]">(407) 288-0832</a>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Mail size={18} className="text-[#64CEBB] mt-1" />
                            <div>
                                <div className="font-bold text-white">Email</div>
                                <a href="mailto:info@luxht.com" className="hover:text-[#64CEBB]">info@luxht.com</a>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="text-[#64CEBB] mt-1" />
                            <div>
                                <div className="font-bold text-white">Service Area</div>
                                <span>Orlando, Winter Park, & Surrounding FL Areas</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-center text-blue-200 text-xs relative z-10">
                <p>© {new Date().getFullYear()} LUXHT Fix. All rights reserved. Licensed & Insured.</p>
            </div>
        </footer>
    );
}
