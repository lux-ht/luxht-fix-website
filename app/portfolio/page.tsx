import type { Metadata } from 'next';
import PortfolioContent from './PortfolioContent';

export const metadata: Metadata = {
    title: 'Project Portfolio | See Our Quality Work - LUXHT Fix',
    description: 'Browse real home repair and renovation projects completed by LUXHT Fix in Orlando. Before & after photos, costs, and timelines for drywall, flooring, decks & more.',
    alternates: { canonical: 'https://fix.luxht.com/portfolio/' },
};

export default function PortfolioPage() {
    return <PortfolioContent />;
}
