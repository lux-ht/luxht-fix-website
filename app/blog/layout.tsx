import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'South Florida Home Repair Tips & Guides',
  description: 'Expert home repair, maintenance, remodeling, and hurricane-preparation guidance for South Florida property owners.',
  alternates: { canonical: 'https://fix.luxht.com/blog/' },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
