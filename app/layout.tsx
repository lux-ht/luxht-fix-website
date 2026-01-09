import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
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
          {children}
          <QuoteModal />
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
