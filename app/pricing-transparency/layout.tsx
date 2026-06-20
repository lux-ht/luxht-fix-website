import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Transparent Pricing for Property Maintenance Services Orlando | LUXHT Fix',
    description: 'See upfront pricing for property maintenance and repairs in Orlando. Drywall repair, TV mounting, bathroom remodels, and more. No hidden fees, no surprise charges. Get honest quotes from LUXHT Fix.',
    keywords: [
        'property maintenance prices Orlando',
        'home repair costs Orlando FL',
        'transparent pricing property maintenance',
        'drywall repair cost Orlando',
        'TV mounting price Orlando',
        'bathroom remodel cost Orlando',
        'honest property maintenance pricing',
        'upfront pricing home services',
        'Orlando home improvement costs',
        'Central Florida property maintenance rates'
    ],
    openGraph: {
        title: 'Transparent Pricing for Property Maintenance | LUXHT Fix Orlando',
        description: 'No hidden fees, no surprises. See our upfront pricing for drywall repair, TV mounting, bathroom remodels, and more in Orlando.',
        type: 'website',
        locale: 'en_US',
        siteName: 'LUXHT Fix'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Transparent Pricing for Property Maintenance | LUXHT Fix Orlando',
        description: 'No hidden fees, no surprises. See our upfront pricing for property maintenance in Orlando.'
    },
    alternates: {
        canonical: 'https://fix.luxht.com/pricing-transparency/'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    }
};

export default function PricingTransparencyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
