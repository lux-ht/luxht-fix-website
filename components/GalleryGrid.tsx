'use client';

import { useState } from 'react';
import ImageModal from './ImageModal';

interface GalleryItem {
    src: string;
    title: string;
    subtitle: string;
}

interface GalleryGridProps {
    images: GalleryItem[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((project, i) => (
                    <div
                        key={i}
                        className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer bg-slate-900"
                        onClick={() => setSelectedImage(project)}
                    >
                        <img
                            src={project.src}
                            alt={`${project.title} - ${project.subtitle}`}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#584D94]/95 via-[#584D94]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                            <h3 className="text-white font-bold text-xl mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.title}</h3>
                            <p className="text-[#64CEBB] font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{project.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>

            <ImageModal
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                src={selectedImage?.src || ''}
                alt={selectedImage ? `${selectedImage.title} - ${selectedImage.subtitle}` : ''}
            />
        </>
    );
}
