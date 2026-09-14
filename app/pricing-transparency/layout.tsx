import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Transparent Property Maintenance Pricing in South Florida | LUXHT Fix',
    description: 'See upfront pricing for property maintenance and repairs in South Florida. Drywall repair, TV mounting, bathroom remodels, and more. No hidden fees or surprise charges.',
    keywords: [
        'property maintenance prices South Florida',
        'home repair costs South Florida',
        'transparent pricing property maintenance',
        'drywall repair cost Miami',
        'TV mounting price South Florida',
        'bathroom remodel cost South Florida',
        'honest property maintenance pricing',
        'upfront pricing home services',
        'Miami home improvement costs',
        'South Florida property maintenance rates'
    ],
    openGraph: {
        title: 'Transparent Property Maintenance Pricing | LUXHT Fix South Florida',
        description: 'No hidden fees or surprises. See upfront pricing for drywall repair, TV mounting, bathroom remodels, and more in South Florida.',
        type: 'website',
        locale: 'en_US',
        siteName: 'LUXHT Fix'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Transparent Property Maintenance Pricing | LUXHT Fix South Florida',
        description: 'No hidden fees or surprises. See upfront property maintenance pricing in South Florida.'
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
