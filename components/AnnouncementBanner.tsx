"use client";

import { useState, useEffect } from 'react';
import { X, MapPin } from 'lucide-react';
import Link from 'next/link';

const STORAGE_KEY = 'luxht-miami-banner-dismissed';

export default function AnnouncementBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user previously dismissed the banner
        const dismissed = localStorage.getItem(STORAGE_KEY);
        if (!dismissed) {
            setIsVisible(true);
        }
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        localStorage.setItem(STORAGE_KEY, 'true');
    };

    if (!isVisible) return null;

    return (
        <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[#584D94] to-[#7B6FCC] text-white shadow-lg announcement-banner">
            <div className="container mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 flex-1 justify-center text-sm md:text-base">
                    <span className="text-lg hidden sm:inline">🌴</span>
                    <MapPin size={14} className="text-[#64CEBB] sm:hidden" />
                    <span className="font-bold">Now Available in Miami & South Florida!</span>
                    <span className="hidden md:inline text-blue-200">— Serving Miami, Fort Lauderdale, Hollywood, Pembroke Pines & more</span>
                    <Link
                        href="/south-florida/"
                        className="hidden sm:inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white text-xs font-bold px-3 py-1 rounded-full ml-2 transition-colors"
                    >
                        Learn More →
                    </Link>
                </div>
                <button
                    onClick={handleDismiss}
                    className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors flex-shrink-0"
                    aria-label="Dismiss announcement"
                >
                    <X size={16} />
                </button>
            </div>
        </div>
    );
}
