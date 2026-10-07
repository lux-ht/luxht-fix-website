import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Drywall Repair in Broward County | Pembroke Pines, Fort Lauderdale - LUXHT Fix",
  description: "Expert drywall repair in Broward County. Fix holes, cracks & water damage with seamless texture matching. Serving Pembroke Pines, Fort Lauderdale, Hollywood & more. Call today!",
  alternates: { canonical: 'https://fix.luxht.com/drywall-broward/' },
  openGraph: {
    title: "Drywall Repair in Broward County | LUXHT Fix",
    description: "Expert drywall repair in Broward County. Fix holes, cracks & water damage with seamless texture matching.",
    url: 'https://fix.luxht.com/drywall-broward/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function DrywallMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Drywall Repair"
      slug="drywall-broward"
      location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="Drywall Services"
      parentSlug="drywall-broward"
      heroSubtitle="Holes, cracks, and wall damage repaired cleanly and fast."
      heroDescription="Same-week service available throughout Broward County."
      introParagraph="Broward County's humidity, tropical storms, and sandy soil create unique challenges for drywall. From water damage after summer storms in Hollywood to settlement cracks in Wilton Manors' historic homes, LUXHT Fix delivers expert drywall repair across our Broward service area. We specialize in seamless texture matching, water damage restoration, and invisible patching — making your walls look brand new. Whether you're in a Hollywood condo or a Pembroke Pines family home, our construction-grade expertise ensures permanent, professional results."
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
        "Condo-friendly services throughout Broward County",
        "Same-week service across Broward County",
        'Fully insured and background-checked'
      ]}
      faqs={[
        { q: "What's the best drywall repair service in Broward County?", a: "LUXHT Fix is one of Broward County's top-rated drywall specialists. We focus exclusively on quality drywall work with seamless texture matching across Pembroke Pines, Fort Lauderdale, Hollywood, and all surrounding cities." },
        { q: 'Can you match my wall texture perfectly?', a: "Yes. Texture matching is our specialty. We match orange peel, knockdown, smooth, and custom textures found in Broward County homes of all ages — from Art Deco in Fort Lauderdale to modern builds in Davie." },
        { q: 'How much does drywall repair cost in Broward County?', a: 'Pricing varies based on hole size, complexity, and texture matching needs. Most small repairs start at $150. Send us a photo for a fast, personalized quote.' },
        { q: 'Do you repair water-damaged drywall from storms?', a: 'Yes. We have extensive experience with hurricane and storm-related water damage. We assess moisture levels, treat for mold prevention, and restore walls completely.' },
        { q: 'Do you work in condos and high-rises?', a: 'Absolutely. We serve condos throughout Miramar, Hollywood, Fort Lauderdale, Hollywood, and Fort Lauderdale with building-compliant repair services.' },
        { q: 'Do you offer same-day drywall repair?', a: "In many cases, yes. We prioritize urgent repairs and offer same-week service throughout Broward County." }
      ]}
      relatedServices={[
        { title: 'Drywall Crack Repair', href: '/drywall-crack-repair-broward/' },
        { title: 'Drywall Hole Repair', href: '/drywall-hole-repair-broward/' },
        { title: 'Water Damage Drywall', href: '/water-damage-drywall-repair-broward/' },
        { title: 'Texture Matching', href: '/texture-matching-broward/' },
        { title: 'Hurricane Damage Repair', href: '/hurricane-damage-repair-broward/' }
      ]}
      startingPrice="Most small repairs start at $150"
      statsText="Fully Insured • Serving Broward County"
      galleryImages={[
        { src: "/drywall-project-1.jpg", title: "Wall Repair", subtitle: "Seamless Patch" },
        { src: "/drywall-project-2.jpg", title: "Hole Repair", subtitle: "Invisible Fix" },
        { src: "/drywall-project-3.jpg", title: "Water Damage", subtitle: "Full Restoration" },
        { src: "/drywall-project-4.jpg", title: "Texture Match", subtitle: "Perfect Blend" },
        { src: "/drywall-project-5.jpg", title: "Ceiling Repair", subtitle: "Expert Finish" },
        { src: "/drywall-project-6.jpg", title: "Large Area", subtitle: "Complete Resurface" },
      ]}
    />
  );
}
