import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TV Mounting in Broward County | Pembroke Pines, Fort Lauderdale - LUXHT Fix",
  description: "Professional TV mounting in Broward County. Secure installation with concealed cables on any wall type. Serving Pembroke Pines, Fort Lauderdale, Hollywood & more. Call today!",
  alternates: { canonical: 'https://fix.luxht.com/tv-mounting-broward/' },
  openGraph: {
    title: "TV Mounting in Broward County | LUXHT Fix",
    description: "Professional TV mounting in Broward County. Wall mounting, cable concealment & soundbar installation.",
    url: 'https://fix.luxht.com/tv-mounting-broward/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function TVMountingMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="TV Mounting"
      slug="tv-mounting-broward"
      location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="TV Mounting"
      parentSlug="tv-mounting-broward"
      heroSubtitle="Secure installation with concealed cables and optimized viewing angles."
      heroDescription="Same-week service available throughout Broward County."
      introParagraph="From luxury condos in Hollywood to family homes in Pembroke Pines, LUXHT Fix delivers professional TV mounting across Broward County. We handle all wall types — including the concrete walls common in Fort Lauderdale high-rises — with proper anchoring and concealed cable solutions. Whether you need a single bedroom TV or a multi-room entertainment system, our specialists ensure secure, level, and clean installations every time."
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
        "Outdoor TV mounting for Broward County's year-round patio lifestyle",
        "Same-week service across Broward County",
        'Fully insured and background-checked'
      ]}
      faqs={[
        { q: 'Can you mount a TV on a concrete condo wall?', a: "Yes. Many Broward County condos have concrete walls. We use commercial-grade concrete anchors and masonry drill bits for secure installations in high-rises throughout Miramar, Hollywood, and Fort Lauderdale." },
        { q: "How much does TV mounting cost in Broward County?", a: 'TV mounting starts at $120. Pricing varies based on TV size, wall type, and cable management needs. Concrete wall installations may cost more. Text us a photo for a fast quote.' },
        { q: 'Do you mount outdoor TVs?', a: "Yes. Broward County's outdoor living lifestyle makes patio TV mounting very popular. We install weather-resistant setups on covered patios, lanais, and pool areas throughout the region." },
        { q: 'How long does TV mounting take?', a: 'Most TV mounting jobs are completed in 1-2 hours, including cable management.' },
        { q: 'Do you hide the cables?', a: 'Yes. Cable concealment is included in every installation. We route cables behind walls or use professional cable covers — especially important for clean condo installations.' },
        { q: 'Can you mount TVs above fireplaces?', a: 'Yes. We specialize in fireplace TV mounting with proper heat considerations and adjustable mounts for optimal viewing.' }
      ]}
      relatedServices={[
        { title: 'TV Cable Concealment', href: '/tv-cable-concealment-broward/' },
        { title: 'Fireplace TV Mounting', href: '/fireplace-tv-mounting-broward/' },
        { title: 'Soundbar Mounting', href: '/soundbar-mounting-broward/' },
        { title: 'Outdoor TV Mounting', href: '/outdoor-tv-mounting-broward/' },
        { title: 'Smart Home Installation', href: '/smart-home-installation-broward/' }
      ]}
      startingPrice="TV mounting starts at $120"
      statsText="Fully Insured • Condo & Home Specialists"
      galleryImages={[
        { src: "/images/services/tv-mounting/flat-screen-tvs.jpg", title: "Flat Screen Mount", subtitle: "Clean & Level" },
        { src: "/images/services/tv-mounting/cable-management.jpg", title: "Cable Management", subtitle: "Hidden Wires" },
        { src: "/images/services/tv-mounting/soundbar-installation.jpg", title: "Soundbar Setup", subtitle: "Immersive Audio" },
        { src: "/images/services/tv-mounting/mount-types.jpg", title: "Mount Types", subtitle: "Full Motion or Fixed" },
        { src: "/images/services/tv-mounting/any-wall-type.jpg", title: "Any Wall Surface", subtitle: "Secure Installation" },
        { src: "/images/services/tv-mounting/outdoor-tv.jpg", title: "Outdoor TV", subtitle: "Weather-Safe Setup" },
      ]}
    />
  );
}
