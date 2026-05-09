import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drywall Repair in South Florida | Miami, Fort Lauderdale - LUXHT Fix',
  description: 'Expert drywall repair in South Florida. Fix holes, cracks & water damage with seamless texture matching. Serving Miami, Fort Lauderdale, Hollywood & more. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/drywall-miami/' },
  openGraph: {
    title: 'Drywall Repair in South Florida | LUXHT Fix',
    description: 'Expert drywall repair in South Florida. Fix holes, cracks & water damage with seamless texture matching.',
    url: 'https://fix.luxht.com/drywall-miami/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function DrywallMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Drywall Repair"
      slug="drywall-miami"
      location="miami"
      neighborhoods={['Miami', 'Pembroke Pines', 'Cooper City', 'Aventura', 'Hallandale Beach', 'Miramar', 'Davie', 'Hollywood', 'Sunny Isles Beach', 'Fort Lauderdale', 'North Miami', 'Coral Gables', 'Doral', 'Miami Beach']}
      parentCategory="Drywall Services"
      parentSlug="drywall-miami"
      heroSubtitle="Holes, cracks, and wall damage repaired cleanly and fast."
      heroDescription="Same-week service available throughout South Florida."
      introParagraph="South Florida's humidity, tropical storms, and sandy soil create unique challenges for drywall. From water damage after summer storms in Hollywood to settlement cracks in Coral Gables' historic homes, LUXHT Fix delivers expert drywall repair across Miami-Dade and Broward counties. We specialize in seamless texture matching, water damage restoration, and invisible patching — making your walls look brand new. Whether you're in a Sunny Isles Beach condo or a Pembroke Pines family home, our construction-grade expertise ensures permanent, professional results."
      serviceDetails={[
        'Hole repair (doorknob, furniture, accidents)',
        'Crack repair from settling and foundation movement',
        'Water damage restoration with mold prevention',
        'Texture matching (orange peel, knockdown, smooth)',
        'Ceiling repair and patching',
        'Plumbing/electrical access cut repair'
      ]}
      processSteps={[
        'Inspect damage and surrounding wall structure',
        'Remove compromised drywall and secure backing',
        'Apply professional-grade compound in precise layers',
        'Match existing texture using specialized techniques',
        'Sand smooth and prepare surface for painting',
        'Clean workspace completely before leaving'
      ]}
      whyChooseUs={[
        'Drywall repair specialists — not general contractors',
        'Hurricane and storm damage repair experience',
        'Seamless texture matching guaranteed',
        'Condo-friendly services throughout South Florida',
        'Same-week service across Miami-Dade & Broward',
        'Licensed, insured, and background-checked'
      ]}
      faqs={[
        { q: "What's the best drywall repair service in South Florida?", a: 'LUXHT Fix is one of South Florida\'s top-rated drywall specialists. We focus exclusively on quality drywall work with seamless texture matching across Miami, Fort Lauderdale, Hollywood, and all surrounding cities.' },
        { q: 'Can you match my wall texture perfectly?', a: 'Yes. Texture matching is our specialty. We match orange peel, knockdown, smooth, and custom textures found in South Florida homes of all ages — from Art Deco in Miami Beach to modern builds in Doral.' },
        { q: 'How much does drywall repair cost in Miami?', a: 'Pricing varies based on hole size, complexity, and texture matching needs. Most small repairs start at $150. Send us a photo for a fast, personalized quote.' },
        { q: 'Do you repair water-damaged drywall from storms?', a: 'Yes. We have extensive experience with hurricane and storm-related water damage. We assess moisture levels, treat for mold prevention, and restore walls completely.' },
        { q: 'Do you work in condos and high-rises?', a: 'Absolutely. We serve condos throughout Aventura, Sunny Isles Beach, Miami Beach, Hallandale Beach, and Fort Lauderdale with building-compliant repair services.' },
        { q: 'Do you offer same-day drywall repair?', a: 'In many cases, yes. We prioritize urgent repairs and offer same-week service throughout South Florida.' }
      ]}
      relatedServices={[
        { title: 'Drywall Crack Repair', href: '/drywall-crack-repair-miami/' },
        { title: 'Drywall Hole Repair', href: '/drywall-hole-repair-miami/' },
        { title: 'Water Damage Drywall', href: '/water-damage-drywall-repair-miami/' },
        { title: 'Texture Matching', href: '/texture-matching-miami/' },
        { title: 'Hurricane Damage Repair', href: '/hurricane-damage-repair-miami/' }
      ]}
      startingPrice="Most small repairs start at $150"
      statsText="Licensed • Insured • Serving Miami-Dade & Broward"
    />
  );
}
