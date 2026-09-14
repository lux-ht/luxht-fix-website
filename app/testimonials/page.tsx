import type { Metadata } from 'next';
import TestimonialsContent from './TestimonialsContent';

export const metadata: Metadata = {
    title: 'Customer Testimonials | South Florida Home Repair Reviews - LUXHT Fix',
    description: 'Read reviews from homeowners across South Florida. Explore customer experiences with drywall, flooring, TV mounting, deck building, and more.',
    alternates: { canonical: 'https://fix.luxht.com/testimonials/' },
};

export default function TestimonialsPage() {
    return <TestimonialsContent />;
}
