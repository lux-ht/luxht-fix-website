"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone, PhoneCall, ExternalLink } from 'lucide-react';
import clsx from 'clsx';
import { useModal } from '@/context/ModalContext';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    // Use modal context
    const { openModal } = useModal();

    // Force dark text if scrolled OR if on homepage (white background)
    const useDarkText = isScrolled || isHomePage;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={clsx(
                "fixed w-full z-50 transition-all duration-300",
                isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
            )}
            aria-label="Main navigation"
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 shadow-lg relative bg-white group-hover:scale-105 transition-transform">
                            <img src="/luxht-logo.jpg" alt="LUXHT Fix Logo" className="w-full h-full object-cover" />
                        </div>
                        <div className="font-bold text-xl tracking-tight hidden sm:block">
                            <span className={clsx("transition-colors", useDarkText ? "text-[#584D94]" : "text-white")}>LUXHT</span>
                            <span className="text-[#64CEBB] ml-1">Fix</span>
                        </div>
                    </Link>

                    {/* Main Site Link */}
                    <a
                        href="https://www.luxht.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={clsx(
                            "hidden sm:flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full border transition-all hover:scale-105",
                            useDarkText
                                ? "text-slate-500 border-slate-300 hover:text-[#584D94] hover:border-[#584D94]"
                                : "text-white/70 border-white/30 hover:text-white hover:border-white"
                        )}
                    >
                        luxht.com <ExternalLink size={10} />
                    </a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        href="/"
                        className={clsx(
                            "font-medium transition-all relative group",
                            pathname === "/" ? "text-[#64CEBB]" : (useDarkText ? "text-[#584D94] hover:text-[#64CEBB]" : "text-white hover:text-white/80")
                        )}
                    >
                        Home
                        {pathname === "/" && (
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#64CEBB] rounded-full animate-in fade-in zoom-in duration-300"></span>
                        )}
                    </Link>

                    {/* Services Dropdown */}
                    <div className="relative group">
                        <button className={clsx(
                            "flex items-center gap-1 font-medium transition-colors",
                            pathname.includes("-orlando") || pathname === "/services" ? "text-[#64CEBB]" : (useDarkText ? "text-[#584D94] hover:text-[#64CEBB]" : "text-white hover:text-[#64CEBB]")
                        )}>
                            Services <ChevronDown size={14} />
                            {(pathname.includes("-orlando") || pathname === "/services") && (
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#64CEBB] rounded-full"></span>
                            )}
                        </button>

                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-6 grid grid-cols-2 gap-8 z-50">
                            {/* Arrow */}
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45 border-t border-l border-slate-100"></div>

                            <div>
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Home Repairs</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/drywall-orlando" className="block font-semibold text-[#584D94] hover:text-[#64CEBB] transition-colors">
                                            Drywall Repair <span className="text-xs font-normal text-slate-400 ml-1">★ Popular</span>
                                        </Link>
                                    </li>
                                    <li><Link href="/door-lock-trim-orlando" className="text-slate-600 hover:text-[#64CEBB] transition-colors block">Door, Lock & Trim</Link></li>
                                    <li><Link href="/faucet-fixtures-orlando" className="text-slate-600 hover:text-[#64CEBB] transition-colors block">Faucet & Fixtures</Link></li>
                                    <li><Link href="/tv-mounting-orlando" className="text-slate-600 hover:text-[#64CEBB] transition-colors block">TV Mounting</Link></li>
                                    <li><Link href="/furniture-assembly-orlando" className="text-slate-600 hover:text-[#64CEBB] transition-colors block">Furniture Assembly</Link></li>
                                    <li><Link href="/smart-home-installation-orlando" className="text-slate-600 hover:text-[#64CEBB] transition-colors block">Smart Home</Link></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Renovations</h3>
                                <ul className="space-y-3">
                                    <li><Link href="/flooring-installation-orlando" className="text-slate-600 hover:text-[#64CEBB] transition-colors block">Flooring Installation</Link></li>
                                    <li><Link href="/deck-building-orlando" className="text-slate-600 hover:text-[#64CEBB] transition-colors block">Deck Building</Link></li>
                                    <li><Link href="/kitchen-refacing-orlando" className="text-slate-600 hover:text-[#64CEBB] transition-colors block">Kitchen Refacing</Link></li>
                                    <li><Link href="/bath-remodel-orlando" className="text-slate-600 hover:text-[#64CEBB] transition-colors block">Bath Remodel</Link></li>
                                </ul>
                                <div className="mt-6 pt-4 border-t border-slate-100">
                                    <Link href="/services" className="text-sm font-bold text-[#64CEBB] hover:text-[#4daea0] flex items-center gap-1">
                                        View All Services →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/about"
                        className={clsx(
                            "font-medium transition-all relative",
                            pathname === "/about" ? "text-[#64CEBB]" : (useDarkText ? "text-[#584D94] hover:text-[#64CEBB]" : "text-white hover:text-white/80")
                        )}
                    >
                        About
                        {pathname === "/about" && (
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#64CEBB] rounded-full"></span>
                        )}
                    </Link>
                    <Link
                        href="/costs"
                        className={clsx(
                            "font-medium transition-all relative",
                            pathname.startsWith("/costs") ? "text-[#64CEBB]" : (useDarkText ? "text-[#584D94] hover:text-[#64CEBB]" : "text-white hover:text-white/80")
                        )}
                    >
                        Costs
                        {pathname.startsWith("/costs") && (
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#64CEBB] rounded-full"></span>
                        )}
                    </Link>
                    <Link
                        href="/faq"
                        className={clsx(
                            "font-medium transition-all relative",
                            pathname === "/faq" ? "text-[#64CEBB]" : (useDarkText ? "text-[#584D94] hover:text-[#64CEBB]" : "text-white hover:text-white/80")
                        )}
                    >
                        FAQ
                        {pathname === "/faq" && (
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#64CEBB] rounded-full"></span>
                        )}
                    </Link>
                </div>

                {/* CTA Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <a href="tel:4077207476" className={clsx("font-bold flex items-center gap-2 transition-colors", useDarkText ? "text-[#584D94]" : "text-white")}>
                        <Phone size={18} /> (407) 720-7476
                    </a>

                    {/* Schedule Now */}
                    <button
                        onClick={() => openModal('schedule')}
                        className="btn-gradient-secondary"
                    >
                        Schedule Now
                    </button>

                    {/* Get Quote */}
                    <button
                        onClick={() => openModal('quote')}
                        className="btn-gradient-primary btn-gradient-shimmer"
                    >
                        Get Quote
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={clsx("md:hidden p-2 rounded-lg transition-colors", useDarkText ? "text-[#584D94]" : "text-white")}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={clsx(
                    "md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl transition-all duration-300 overflow-hidden",
                    isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                )}
                aria-hidden={!isOpen}
            >
                <div className="p-6 space-y-4">
                    <Link href="/" className="block text-lg font-medium text-slate-800" onClick={() => setIsOpen(false)}>Home</Link>

                    <div>
                        <button
                            className="flex items-center justify-between w-full text-lg font-medium text-slate-800 mb-2"
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                        >
                            Services <ChevronDown size={16} className={clsx("transition-transform", isServicesOpen ? "rotate-180" : "")} />
                        </button>
                        <div className={clsx("space-y-3 pl-4 border-l-2 border-slate-100 ml-1 overflow-hidden transition-all", isServicesOpen ? "max-h-[500px] mt-2" : "max-h-0")}>
                            <Link href="/drywall-orlando" className="block text-[#584D94] font-medium" onClick={() => setIsOpen(false)}>Drywall Repair</Link>
                            <Link href="/door-lock-trim-orlando" className="block text-slate-600" onClick={() => setIsOpen(false)}>Door, Lock & Trim</Link>
                            <Link href="/faucet-fixtures-orlando" className="block text-slate-600" onClick={() => setIsOpen(false)}>Faucet & Fixtures</Link>
                            <Link href="/tv-mounting-orlando" className="block text-slate-600" onClick={() => setIsOpen(false)}>TV Mounting</Link>
                            <Link href="/furniture-assembly-orlando" className="block text-slate-600" onClick={() => setIsOpen(false)}>Furniture Assembly</Link>
                            <Link href="/smart-home-installation-orlando" className="block text-slate-600" onClick={() => setIsOpen(false)}>Smart Home</Link>
                            <Link href="/flooring-installation-orlando" className="block text-slate-600" onClick={() => setIsOpen(false)}>Flooring Installation</Link>
                            <Link href="/deck-building-orlando" className="block text-slate-600" onClick={() => setIsOpen(false)}>Deck Building</Link>
                            <Link href="/kitchen-refacing-orlando" className="block text-slate-600" onClick={() => setIsOpen(false)}>Kitchen Refacing</Link>
                            <Link href="/bath-remodel-orlando" className="block text-slate-600" onClick={() => setIsOpen(false)}>Bath Remodel</Link>
                            <Link href="/services" className="block text-[#64CEBB] font-bold mt-2" onClick={() => setIsOpen(false)}>View All Services</Link>
                        </div>
                    </div>

                    <Link href="/about" className="block text-lg font-medium text-slate-800" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/faq" className="block text-lg font-medium text-slate-800" onClick={() => setIsOpen(false)}>FAQ</Link>

                    <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                        <a href="tel:4077207476" className="bg-slate-100 text-slate-800 font-bold py-3 rounded-xl flex items-center justify-center gap-2">
                            <Phone size={20} /> Call Now
                        </a>
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                openModal('schedule');
                            }}
                            className="btn-gradient-mobile-secondary"
                        >
                            Schedule Now
                        </button>
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                openModal('quote');
                            }}
                            className="btn-gradient-mobile btn-gradient-shimmer"
                        >
                            Get Free Quote
                        </button>

                        {/* Main Site Link - Mobile */}
                        <a
                            href="https://www.luxht.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-center text-sm text-slate-500 py-2 flex items-center justify-center gap-1 hover:text-[#584D94] transition-colors"
                        >
                            Visit luxht.com <ExternalLink size={12} />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
