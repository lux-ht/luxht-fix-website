"use client";

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    direction?: 'up' | 'left' | 'right' | 'scale';
}

export default function ScrollReveal({ children, delay = 0, className = '', direction = 'up' }: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const directionStyles = {
        up: { transform: isVisible ? 'translateY(0)' : 'translateY(30px)' },
        left: { transform: isVisible ? 'translateX(0)' : 'translateX(-30px)' },
        right: { transform: isVisible ? 'translateX(0)' : 'translateX(30px)' },
        scale: { transform: isVisible ? 'scale(1)' : 'scale(0.95)' },
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                ...directionStyles[direction],
                transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
                willChange: 'opacity, transform',
            }}
        >
            {children}
        </div>
    );
}
