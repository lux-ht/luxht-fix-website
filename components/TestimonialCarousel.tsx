import React from 'react';
import { Star } from 'lucide-react';

export interface Review {
    text: string;
    name: string;
    loc: string;
    rating: number;
    date?: string;
}

const defaultReviews: Review[] = [
    { text: "They fixed a huge hole in our living room - you can't even tell it was there. Perfect texture match!", name: "Sarah M.", loc: "Winter Park", rating: 5, date: "Nov 2024" },
    { text: "Incredible service. Arrived on time, super clean, and the wall looks brand new.", name: "Jason K.", loc: "Lake Nona", rating: 5, date: "Dec 2024" },
    { text: "Fast and professional. The texture matching is wizardry.", name: "Emily R.", loc: "Dr. Phillips", rating: 5, date: "Oct 2024" },
    { text: "Saved me from my DIY disaster. Worth every penny.", name: "Mike T.", loc: "Orlando", rating: 5, date: "Jan 2025" },
    { text: "Best handyman experience I've had. Highly recommend.", name: "Lisa B.", loc: "Altamonte", rating: 5, date: "Feb 2025" },
    { text: "Professional, polite, and quick. The finish is flawless.", name: "David W.", loc: "Winter Garden", rating: 5, date: "Dec 2024" },
    { text: "I was worried about the dust, but they left it cleaner than they found it.", name: "Jessica P.", loc: "Maitland", rating: 5, date: "Mar 2025" }
];

// Inline Google "G" logo SVG
function GoogleGIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-label="Google">
            <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
            <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.32-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
            <path fill="#FBBC05" d="M11.68 28.18A13.4 13.4 0 0 1 10.8 24c0-1.45.25-2.86.68-4.18v-5.7H4.34A23.93 23.93 0 0 0 .08 24c0 3.88.93 7.55 2.57 10.79l7.03-5.52-.23-.09z" />
            <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.34 5.7C13.42 14.62 18.27 10.75 24 10.75z" />
        </svg>
    );
}

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
        <div className="w-[350px] bg-gradient-to-br from-[#584D94]/80 to-[#7B6FCC]/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl flex-shrink-0 border border-white/20 hover:scale-[1.02] transition-transform duration-300 flex flex-col">
            <div className="flex text-[#64CEBB] mb-2">
                {[...Array(review.rating)].map((_, s) => (
                    <Star key={s} size={16} fill="currentColor" />
                ))}
            </div>
            <p className="text-white/90 italic mb-4 text-sm line-clamp-3 flex-1">"{review.text}"</p>
            <div className="flex justify-between items-center text-xs text-blue-100/70">
                <span className="font-bold text-white">— {review.name}</span>
                <span>{review.loc}</span>
            </div>
            {/* Google attribution badge */}
            <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-white/10">
                <GoogleGIcon />
                <span className="text-[10px] text-white/40 font-medium tracking-wide">Google Review</span>
                {review.date && (
                    <span className="text-[10px] text-white/30 ml-auto">{review.date}</span>
                )}
            </div>
        </div>
    );
}
