'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Paintbrush, Ruler, Pencil, Eraser } from 'lucide-react';

interface Particle {
    id: number;
    x: number;
    y: number;
    Icon: any;
    color: string;
    rotation: number;
}

const icons = [
    { Icon: Paintbrush, color: "text-blue-500" },
    { Icon: Eraser, color: "text-violet-500" },
    { Icon: Pencil, color: "text-cyan-500" },
    { Icon: Ruler, color: "text-indigo-500" },
];

export default function ClickFirework() {
    const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>([]);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const newClick = { id: Date.now(), x: e.clientX, y: e.clientY };
            setClicks((prev) => [...prev, newClick]);

            // Cleanup click after animation
            setTimeout(() => {
                setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
            }, 1000);
        };

        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[100]">
            <AnimatePresence>
                {clicks.map((click) => (
                    <FireworkBurst key={click.id} x={click.x} y={click.y} />
                ))}
            </AnimatePresence>
        </div>
    );
}

function FireworkBurst({ x, y }: { x: number; y: number }) {
    // Generate particles for this burst
    const particles: Particle[] = Array.from({ length: 8 }).map((_, i) => {
        const iconData = icons[Math.floor(Math.random() * icons.length)];
        return {
            id: i,
            x: (Math.random() - 0.5) * 100, // Random spread X
            y: (Math.random() - 0.5) * 100 - 50, // Random spread Y (biased up)
            Icon: iconData.Icon,
            color: iconData.color,
            rotation: Math.random() * 360,
        };
    });

    return (
        <div style={{ position: 'absolute', left: x, top: y }}>
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                    animate={{
                        x: p.x,
                        y: p.y,
                        scale: 1,
                        opacity: 0,
                        rotate: p.rotation
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`absolute ${p.color}`}
                >
                    <p.Icon size={20} />
                </motion.div>
            ))}
        </div>
    );
}
