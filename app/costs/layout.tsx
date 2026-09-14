import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'South Florida Home Repair Cost Guides',
  description: 'Transparent pricing guides for home repairs, installations, and property improvements across South Florida.',
  alternates: { canonical: 'https://fix.luxht.com/costs/' },
};

export default function CostsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
