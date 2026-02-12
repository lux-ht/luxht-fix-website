import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Transparent Pricing for Handyman Services Orlando | LUXHT Fix',
    description: 'See upfront pricing for home repairs in Orlando. Drywall repair, TV mounting, bathroom remodels, and more. No hidden fees, no surprise charges. Get honest quotes from LUXHT Fix.',
    keywords: [
        'handyman prices Orlando',
        'home repair costs Orlando FL',
        'transparent pricing handyman',
        'drywall repair cost Orlando',
        'TV mounting price Orlando',
        'bathroom remodel cost Orlando',
        'honest handyman pricing',
        'upfront pricing home services',
        'Orlando home improvement costs',
        'Central Florida handyman rates'
    ],
    openGraph: {
        title: 'Transparent Pricing for Home Repairs | LUXHT Fix Orlando',
        description: 'No hidden fees, no surprises. See our upfront pricing for drywall repair, TV mounting, bathroom remodels, and more in Orlando.',
        type: 'website',
        locale: 'en_US',
        siteName: 'LUXHT Fix'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Transparent Pricing for Home Repairs | LUXHT Fix Orlando',
        description: 'No hidden fees, no surprises. See our upfront pricing for home services in Orlando.'
    },
    alternates: {
        canonical: 'https://fix.luxht.com/pricing-transparency'
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
