import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Get a Free Estimate | LUXHT Fix – South Florida Handyman',
    description:
        'Tap a service, describe your project, and get a free estimate from LUXHT Fix. Serving Miami-Dade, Broward & Palm Beach County.',
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
