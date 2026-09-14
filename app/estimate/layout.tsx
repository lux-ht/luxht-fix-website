import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Get a South Florida Property Service Estimate',
    description:
        'Request an estimate for property maintenance, repairs, installations, and improvements across South Florida.',
    alternates: { canonical: 'https://fix.luxht.com/estimate/' },
    robots: { index: false, follow: false },
};

export default function EstimateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* Hide global layout components that come from root layout */}
            <style>{`
                footer,
                [data-component="mobile-bottom-bar"],
                [data-component="quote-modal"],
                nav {
                    display: none !important;
                }
                body {
                    background: #f8f7ff !important;
                    padding-bottom: 0 !important;
                }
                #main-content {
                    padding-bottom: 0 !important;
                }
            `}</style>
            {children}
        </>
    );
}
