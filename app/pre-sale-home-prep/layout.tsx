import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pre-Sale Home Prep in South Florida | LUXHT Fix',
  description:
    'Selling your home? LUXHT Fix helps you repair, refresh, and prepare your property before listing photos, showings, and inspections. Pre-Sale Home Prep Walkthrough starting at $295. South Florida.',
  alternates: {
    canonical: 'https://fix.luxht.com/pre-sale-home-prep/',
  },
  openGraph: {
    title: 'Pre-Sale Home Prep — Get Your Home Listing-Ready | LUXHT Fix',
    description:
      'Focused repairs, smart refreshes, and photo-ready improvements before your home hits the market. Starting at $295 for a Pre-Sale Walkthrough. Family-owned, fully insured.',
    url: 'https://fix.luxht.com/pre-sale-home-prep/',
    siteName: 'LUXHT Fix',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/logo-wide-hammers.png',
        width: 800,
        height: 800,
        alt: 'LUXHT Fix Pre-Sale Home Prep — Property Maintenance & Improvement',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pre-Sale Home Prep — Get Your Home Listing-Ready | LUXHT Fix',
    description:
      'Repairs, refreshes, and smart improvements before your home hits the market. Starting at $295. South Florida.',
    images: ['/images/logo-wide-hammers.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PreSaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
