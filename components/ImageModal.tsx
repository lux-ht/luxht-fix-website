'use client';

import { X } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';

interface ImageModalProps {
    src: string;
    alt: string;
    isOpen: boolean;
    onClose: () => void;
}

export default function ImageModal({ src, alt, isOpen, onClose }: ImageModalProps) {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 transition-all duration-300"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors bg-white/10 rounded-full p-2"
                aria-label="Close modal"
            >
                <X size={32} />
            </button>

            <div
                className="relative w-full max-w-6xl h-full max-h-[90vh] flex items-center justify-center p-4"
                onClick={(e) => e.stopPropagation()} // Prevent close when clicking image area
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-contain"
                    quality={90}
                    priority
                />
            </div>
        </div>
    );
}
