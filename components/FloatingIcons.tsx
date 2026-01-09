'use client';

import { motion } from 'framer-motion';
import { Paintbrush, Ruler, Pencil, Eraser } from 'lucide-react';

export default function FloatingIcons() {
    // Extensive list of icons to create a "ring" effect
    const icons = [
        { Icon: Paintbrush, color: "text-blue-500", size: 28 },
        { Icon: Eraser, color: "text-violet-500", size: 32 },
        { Icon: Pencil, color: "text-cyan-500", size: 24 },
        { Icon: Ruler, color: "text-indigo-500", size: 30 },
        { Icon: Paintbrush, color: "text-sky-400", size: 20 },
        { Icon: Eraser, color: "text-purple-400", size: 26 },
        { Icon: Pencil, color: "text-blue-400", size: 28 },
        { Icon: Ruler, color: "text-violet-400", size: 22 },
        { Icon: Paintbrush, color: "text-cyan-600", size: 34 },
        { Icon: Eraser, color: "text-indigo-600", size: 24 },
        { Icon: Pencil, color: "text-sky-500", size: 30 },
        { Icon: Ruler, color: "text-purple-500", size: 28 },
        { Icon: Paintbrush, color: "text-blue-600", size: 22 },
        { Icon: Eraser, color: "text-violet-600", size: 36 },
        { Icon: Pencil, color: "text-cyan-400", size: 26 },
        { Icon: Ruler, color: "text-indigo-400", size: 24 },
        { Icon: Paintbrush, color: "text-sky-300", size: 32 },
        { Icon: Eraser, color: "text-purple-300", size: 20 },
    ];

    return (
        <div className="w-full h-full flex items-center justify-center overflow-visible" style={{ perspective: "1200px" }}>
            {/* Tilted Plane Container */}
            <div
                className="relative w-[800px] h-[300px]"
                style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateX(15deg) rotateY(-5deg)"
                }}
            >
                {icons.map((item, i) => {
                    const total = icons.length;
                    const duration = 25;
                    const delay = -(duration / total) * i;

                    return (
                        <motion.div
                            key={i}
                            className={`absolute top-1/2 left-1/2 -ml-4 -mt-4 ${item.color}`}
                            style={{ transformOrigin: "0 0" }}
                            animate={{ rotate: [0, 360] }} // Orbit rotation of the ARM
                            transition={{
                                duration: duration,
                                repeat: Infinity,
                                ease: "linear",
                                delay: delay,
                            }}
                        >
                            {/* 
                                1. Push out 550px (Radius) using 'x' prop
                                2. Counter-rotate to keep icon upright 
                            */}
                            <motion.div
                                initial={{ x: 550 }}
                                animate={{ rotate: [0, -360] }} // Counter-rotation
                                transition={{
                                    duration: duration,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: delay,
                                }}
                            >
                                <div className="hover:scale-150 transition-transform cursor-pointer filter drop-shadow-md">
                                    <item.Icon size={item.size} strokeWidth={2.5} />
                                </div>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
