import React from 'react';
import { Star } from 'lucide-react';

export interface Review {
    text: string;
    name: string;
    loc: string;
    rating: number;
}

const defaultReviews: Review[] = [
    { text: "They fixed a huge hole in our living room - you can't even tell it was there. Perfect texture match!", name: "Sarah M.", loc: "Winter Park", rating: 5 },
    { text: "Incredible service. Arrived on time, super clean, and the wall looks brand new.", name: "Jason K.", loc: "Lake Nona", rating: 5 },
    { text: "Fast and professional. The texture matching is wizardry.", name: "Emily R.", loc: "Dr. Phillips", rating: 5 },
    { text: "Saved me from my DIY disaster. Worth every penny.", name: "Mike T.", loc: "Orlando", rating: 5 },
    { text: "Best handyman experience I've had. Highly recommend.", name: "Lisa B.", loc: "Altamonte", rating: 5 },
    { text: "Professional, polite, and quick. The finish is flawless.", name: "David W.", loc: "Winter Garden", rating: 5 },
    { text: "I was worried about the dust, but they left it cleaner than they found it.", name: "Jessica P.", loc: "Maitland", rating: 5 }
];

export default function TestimonialCarousel({ customReviews }: { customReviews?: Review[] }) {
    const reviewsToDisplay = customReviews || defaultReviews;
    return (
        <div className="mask-gradient-x w-full overflow-hidden py-10 relative">
            <div className="flex gap-6 animate-scroll w-max hover:pause">
                {/* original list */}
                {reviewsToDisplay.map((review, i) => (
                    <ReviewCard key={`orig-${i}`} review={review} />
                ))}
                {/* duplicate list for seamless loop */}
                {reviewsToDisplay.map((review, i) => (
                    <ReviewCard key={`dup-${i}`} review={review} />
                ))}
            </div>
        </div>
    );
}

function ReviewCard({ review }: { review: Review }) {
    return (
        <div className="w-[350px] bg-gradient-to-br from-[#584D94]/80 to-[#7B6FCC]/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl flex-shrink-0 border border-white/20 hover:scale-[1.02] transition-transform duration-300">
            <div className="flex text-[#64CEBB] mb-2">
                {[...Array(review.rating)].map((_, s) => (
                    <Star key={s} size={16} fill="currentColor" />
                ))}
            </div>
            <p className="text-white/90 italic mb-4 text-sm line-clamp-3">"{review.text}"</p>
            <div className="flex justify-between items-center text-xs text-blue-100/70">
                <span className="font-bold text-white">— {review.name}</span>
                <span>{review.loc}</span>
            </div>
        </div>
    );
}
