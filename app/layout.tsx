import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://fix.luxht.com'),
  title: {
    default: 'LUXHT Fix | Premium Home Repairs & Handyman Services in Orlando, FL',
    template: '%s | LUXHT Fix Orlando',
  },
  description:
    'Professional handyman and home repair services in Orlando, FL. Specializing in drywall repair, TV mounting, flooring, deck building, and more. Licensed & Insured. Call (407) 720-7476.',
  alternates: {
    canonical: 'https://fix.luxht.com',
  },
  openGraph: {
    title: 'LUXHT Fix | Premium Home Repairs in Orlando',
    description:
      'Expert home repair and handyman services in Orlando, FL. Drywall, flooring, TV mounting, decks & more. Licensed & Insured.',
    url: 'https://fix.luxht.com',
    siteName: 'LUXHT Fix',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/luxht-logo.jpg',
        width: 800,
        height: 800,
        alt: 'LUXHT Fix - Premium Home Repair Services in Orlando',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LUXHT Fix | Premium Home Repairs in Orlando',
    description:
      'Expert home repair and handyman services in Orlando, FL. Licensed & Insured. Call (407) 720-7476.',
    images: ['/luxht-logo.jpg'],
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
  icons: {
    icon: '/luxht-logo.jpg',
    apple: '/luxht-logo.jpg',
  },
};

import Footer from '@/components/Footer';
import { ModalProvider } from '@/context/ModalContext';
import QuoteModal from '@/components/QuoteModal';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
        </ModalProvider>
      </body>
    </html>
  );
}
