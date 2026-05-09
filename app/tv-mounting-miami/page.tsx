import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TV Mounting in South Florida | Miami, Fort Lauderdale - LUXHT Fix',
  description: 'Professional TV mounting in South Florida. Secure installation with concealed cables on any wall type. Serving Miami, Fort Lauderdale, Hollywood & more. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/tv-mounting-miami/' },
  openGraph: {
    title: 'TV Mounting in South Florida | LUXHT Fix',
    description: 'Professional TV mounting in South Florida. Wall mounting, cable concealment & soundbar installation.',
    url: 'https://fix.luxht.com/tv-mounting-miami/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function TVMountingMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="TV Mounting"
      slug="tv-mounting-miami"
      location="miami"
      neighborhoods={['Miami', 'Pembroke Pines', 'Cooper City', 'Aventura', 'Hallandale Beach', 'Miramar', 'Davie', 'Hollywood', 'Sunny Isles Beach', 'Fort Lauderdale', 'North Miami', 'Coral Gables', 'Doral', 'Miami Beach']}
      parentCategory="TV Mounting"
      parentSlug="tv-mounting-miami"
      heroSubtitle="Secure installation with concealed cables and optimized viewing angles."
      heroDescription="Same-week service available throughout South Florida."
      introParagraph="From luxury condos in Sunny Isles Beach to family homes in Pembroke Pines, LUXHT Fix delivers professional TV mounting across South Florida. We handle all wall types — including the concrete walls common in Miami high-rises — with proper anchoring and concealed cable solutions. Whether you need a single bedroom TV or a multi-room entertainment system, our specialists ensure secure, level, and clean installations every time."
      serviceDetails={[
        'Flat screen TVs — all sizes: 32" to 85"+',
        'Soundbar installation mounted below TV',
        'Cable management and concealment solutions',
        'All wall types: drywall, concrete, brick (condo-friendly)',
        'Fixed, tilting, and full-motion mount options',
        'Outdoor TV mounting for patios and pool areas'
      ]}
      processSteps={[
        'Confirm TV size, wall type, and desired viewing height',
        'Locate studs or install proper wall anchors',
        'Mount bracket securely with professional-grade hardware',
        'Level and attach TV to bracket',
        'Conceal or organize all cables (HDMI, power, etc.)',
        'Test stability and optimize viewing angle'
      ]}
      whyChooseUs={[
        'TV mounting specialists — not general contractors',
        'Condo and high-rise experience (concrete walls)',
        'Concealed cable solutions included with every install',
        'Outdoor TV mounting for South Florida\'s year-round patio lifestyle',
        'Same-week service across Miami-Dade & Broward',
        'Licensed, insured, and background-checked'
      ]}
      faqs={[
        { q: 'Can you mount a TV on a concrete condo wall?', a: 'Yes. Many South Florida condos have concrete walls. We use commercial-grade concrete anchors and masonry drill bits for secure installations in high-rises throughout Aventura, Sunny Isles Beach, and Miami Beach.' },
        { q: 'How much does TV mounting cost in South Florida?', a: 'TV mounting starts at $120. Pricing varies based on TV size, wall type, and cable management needs. Concrete wall installations may cost more. Text us a photo for a fast quote.' },
        { q: 'Do you mount outdoor TVs?', a: 'Yes. South Florida\'s outdoor living lifestyle makes patio TV mounting very popular. We install weather-resistant setups on covered patios, lanais, and pool areas throughout the region.' },
        { q: 'How long does TV mounting take?', a: 'Most TV mounting jobs are completed in 1-2 hours, including cable management.' },
        { q: 'Do you hide the cables?', a: 'Yes. Cable concealment is included in every installation. We route cables behind walls or use professional cable covers — especially important for clean condo installations.' },
        { q: 'Can you mount TVs above fireplaces?', a: 'Yes. We specialize in fireplace TV mounting with proper heat considerations and adjustable mounts for optimal viewing.' }
      ]}
      relatedServices={[
        { title: 'TV Cable Concealment', href: '/tv-cable-concealment-miami/' },
        { title: 'Fireplace TV Mounting', href: '/fireplace-tv-mounting-miami/' },
        { title: 'Soundbar Mounting', href: '/soundbar-mounting-miami/' },
        { title: 'Outdoor TV Mounting', href: '/outdoor-tv-mounting-miami/' },
        { title: 'Smart Home Installation', href: '/smart-home-installation-miami/' }
      ]}
      startingPrice="TV mounting starts at $120"
      statsText="Licensed • Insured • Condo & Home Specialists"
    />
  );
}
