"use client";

import { useRef, useEffect } from 'react';

const images = [
    "/drywall-project-1.jpg",
    "/drywall-project-2.jpg",
    "/drywall-project-3.jpg",
    "/drywall-project-4.jpg",
    "/drywall-project-5.jpg",
    "/drywall-before-after.jpg"
];

export default function DrywallGallery() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        let animationFrameId: number;
        let lastTimestamp = 0;
        const speed = 0.5; // Pixels per frame

        const scroll = (timestamp: number) => {
            if (!lastTimestamp) lastTimestamp = timestamp;
            const deltaTime = timestamp - lastTimestamp;
            lastTimestamp = timestamp;

            if (el) {
                if (el.scrollLeft >= el.scrollWidth / 2) {
                    el.scrollLeft = 0;
                } else {
                    el.scrollLeft += speed;
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div className="relative w-full h-48 rounded-xl border-2 border-white/20 overflow-hidden shadow-lg mb-6 group">
            {/* Scroller Container */}
            <div
                ref={scrollRef}
                className="flex w-full h-full overflow-hidden whitespace-nowrap"
                style={{ scrollBehavior: 'auto' }} // Disable smooth scroll for JS control
            >
                {/* Double the images for seamless loop */}
                {[...images, ...images].map((src, i) => (
                    <div key={i} className="inline-block w-64 h-full flex-shrink-0 relative mr-1">
                        <img
                            src={src}
                            alt={`Drywall Project ${i + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-2 text-white text-[10px] font-bold text-center pointer-events-none">
                Recent Projects Gallery
            </div>
        </div>
    );
}
