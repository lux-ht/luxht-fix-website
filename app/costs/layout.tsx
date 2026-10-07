import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Broward County Home Repair Cost Guides",
  description: "Transparent pricing guides for home repairs, installations, and property improvements across Broward County.",
  alternates: { canonical: 'https://fix.luxht.com/costs/' },
};

export default function CostsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
