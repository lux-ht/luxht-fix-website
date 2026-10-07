import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Transparent Property Maintenance Pricing in Broward County | LUXHT Fix",
    description: "See upfront pricing for property maintenance and repairs in Broward County. Drywall repair, TV mounting, bathroom remodels, and more. No hidden fees or surprise charges.",
    keywords: [
        "property maintenance prices Broward County",
        "home repair costs Broward County",
        'transparent pricing property maintenance',
        'drywall repair cost Broward',
        "TV mounting price Broward County",
        "bathroom remodel cost Broward County",
        'honest property maintenance pricing',
        'upfront pricing home services',
        'Broward home improvement costs',
        "Broward County property maintenance rates"
    ],
    openGraph: {
        title: "Transparent Property Maintenance Pricing | LUXHT Fix Broward County",
        description: "No hidden fees or surprises. See upfront pricing for drywall repair, TV mounting, bathroom remodels, and more in Broward County.",
        type: 'website',
        locale: 'en_US',
        siteName: 'LUXHT Fix'
    },
    twitter: {
        card: 'summary_large_image',
        title: "Transparent Property Maintenance Pricing | LUXHT Fix Broward County",
        description: "No hidden fees or surprises. See upfront property maintenance pricing in Broward County."
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
