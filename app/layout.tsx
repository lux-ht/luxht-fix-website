import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://fix.luxht.com'),
  title: {
    default: "LUXHT Fix | Property Maintenance & Improvement in Broward County",
    template: '%s | LUXHT Fix',
  },
  description:
    "Professional property maintenance, repairs, installations, and improvement services across Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar. Family-Owned. Fully Insured. Call (954) 300-3043.",
  alternates: {
    canonical: 'https://fix.luxht.com/',
  },
  openGraph: {
    title: "LUXHT Fix | Property Maintenance & Improvement — Broward County",
    description:
      "Professional property maintenance and improvement services across Broward County. Drywall, flooring, TV mounting, installations & more. Family-Owned. Fully Insured.",
    url: 'https://fix.luxht.com/',
    siteName: 'LUXHT Fix',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/logo-wide-hammers.png',
        width: 800,
        height: 800,
        alt: "LUXHT Fix - Property Maintenance & Improvement in Broward County",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "LUXHT Fix | Property Maintenance & Improvement — Broward County",
    description:
      "Professional property maintenance and improvement services across Broward County. Family-Owned. Fully Insured. Call (954) 300-3043.",
    images: ['/images/logo-wide-hammers.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '_9Wx-VP6u7fsxNALWxp3dJGsRxDmvpsdxPSPuPH22IA',
  },
  icons: {
    icon: '/favicon.ico?v=2',
    apple: '/images/favicon.png?v=2',
  },
};

import Footer from '@/components/Footer';
import MobileBottomBar from '@/components/MobileBottomBar';
import { ModalProvider } from '@/context/ModalContext';
import QuoteModal from '@/components/QuoteModal';
import SEOStruct from '@/components/SEOStruct';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SEOStruct />
        <ModalProvider>
          {/* Skip to main content link for accessibility */}
          <a
            href="#main-content"
            className="skip-to-content"
          >
            Skip to main content
          </a>
          <div id="main-content" tabIndex={-1}>
            {children}
          </div>
          <QuoteModal />
          <Footer />
          {/* Sticky mobile bottom CTA bar — always visible on phones */}
          <MobileBottomBar />
        </ModalProvider>
      </body>
    </html>
  );
}
