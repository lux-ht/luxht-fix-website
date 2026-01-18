import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://fix.luxht.com'),
  title: 'LUXHT Fix | Premium Home Repairs in Orlando',
  description: 'Professional handyman services in Orlando. Drywall repair, painting, and home maintenance with a premium touch.',
  openGraph: {
    title: 'LUXHT Fix | Premium Home Repairs',
    description: 'Expert home repair services in Orlando.',
    locale: 'en_US',
    type: 'website',
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
