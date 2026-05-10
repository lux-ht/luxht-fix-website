"use client";

import { Hammer, Wrench, Paintbrush, Ruler, Tv } from 'lucide-react';

const icons = [
    { Icon: Hammer, style: { top: '15%', left: '5%', animationDuration: '18s', animationDelay: '0s' } },
    { Icon: Wrench, style: { top: '60%', left: '8%', animationDuration: '22s', animationDelay: '3s' } },
    { Icon: Paintbrush, style: { top: '25%', right: '6%', animationDuration: '20s', animationDelay: '1s' } },
    { Icon: Ruler, style: { top: '70%', right: '10%', animationDuration: '24s', animationDelay: '5s' } },
    { Icon: Tv, style: { top: '45%', left: '3%', animationDuration: '19s', animationDelay: '7s' } },
    { Icon: Hammer, style: { top: '80%', right: '4%', animationDuration: '21s', animationDelay: '2s' } },
];

export default function FloatingIcons() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {icons.map((item, i) => (
                <div
                    key={i}
                    className="absolute animate-tool-float"
                    style={{
                        ...item.style,
                        opacity: 0.15,
                    }}
                >
                    <item.Icon
                        size={i % 2 === 0 ? 48 : 36}
                        className="text-[#584D94]"
                        strokeWidth={2}
                    />
                </div>
            ))}
        </div>
    );
}
