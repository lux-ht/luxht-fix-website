import type { Metadata } from 'next';
import TestimonialsContent from './TestimonialsContent';

export const metadata: Metadata = {
    title: 'Customer Testimonials | South Florida & Central Florida Home Repair Reviews - LUXHT Fix',
    description: 'Read real reviews from homeowners across South Florida & Central Florida. 4.9-star rating across 500+ projects. Drywall, flooring, TV mounting, deck building & more. See why customers trust LUXHT Fix.',
    alternates: { canonical: 'https://fix.luxht.com/testimonials/' },
};

export default function TestimonialsPage() {
    return <TestimonialsContent />;
}
