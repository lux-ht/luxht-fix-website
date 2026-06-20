import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Outdoor TV Mounting in South Florida | Miami, Fort Lauderdale - LUXHT Fix',
  description: 'Professional outdoor tv mounting in South Florida. Serving Miami, Fort Lauderdale, Hollywood, Pembroke Pines & more. Fully Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/outdoor-tv-mounting-miami/' },
  openGraph: {
    title: 'Outdoor TV Mounting in South Florida | LUXHT Fix',
    description: 'Professional outdoor tv mounting in South Florida. Serving Miami, Fort Lauderdale & surrounding areas.',
    url: 'https://fix.luxht.com/outdoor-tv-mounting-miami/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function OutdoorTvMountingMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Outdoor TV Mounting"
      slug="outdoor-tv-mounting-miami"
      location="miami"
      neighborhoods={["Miami","Pembroke Pines","Cooper City","Aventura","Hallandale Beach","Miramar","Davie","Hollywood","Sunny Isles Beach","Fort Lauderdale","North Miami","Coral Gables","Doral","Miami Beach"]}
      parentCategory="TV Mounting"
      parentSlug="tv-mounting-miami"
      heroSubtitle="Weather-resistant outdoor TV installation for patios, lanais, and pool areas."
      heroDescription="Same-week service available throughout South Florida."
      introParagraph={`South Florida's year-round outdoor lifestyle demands professional outdoor TV installations. LUXHT Fix installs weather-resistant TVs on patios, lanais, pool decks, and outdoor kitchens across Miami, Fort Lauderdale, and Hollywood with proper waterproofing and UV protection.`}
      serviceDetails={["Professional outdoor tv mounting service","Expert craftsmanship and quality materials","Clean execution with area protection","Same-week scheduling available","Serving all of South Florida","Fully insured professionals"]}
      processSteps={["Assess the project scope and requirements","Provide detailed quote with transparent pricing","Schedule service at your convenience","Complete work with professional-grade materials","Clean workspace and inspect results","Ensure your complete satisfaction"]}
      whyChooseUs={["Outdoor TV Mounting specialists serving South Florida","Professional-grade materials and tools","Clean, respectful execution in your home","Transparent pricing with no hidden fees","Same-week service across Miami-Dade & Broward","Fully insured and background-checked"]}
      faqs={[{"q":"How much does outdoor tv mounting cost in South Florida?","a":"Pricing varies by project scope. Outdoor TV Mounting starts at $200. Contact us with photos for a fast, personalized quote."},{"q":"Do you serve my area in South Florida?","a":"Yes! LUXHT Fix serves all of Miami-Dade and Broward counties including Miami, Fort Lauderdale, Hollywood, Pembroke Pines, and surrounding cities."},{"q":"How quickly can you schedule outdoor tv mounting?","a":"We offer same-week service for most projects. Contact us to check current availability in your area."},{"q":"Are you fully insured?","a":"Yes. LUXHT Fix is fully fully insured for all work we perform throughout South Florida."}]}
      relatedServices={[{"title":"All Services","href":"/south-florida/"},{"title":"Drywall Repair","href":"/drywall-miami/"},{"title":"TV Mounting","href":"/tv-mounting-miami/"},{"title":"Flooring","href":"/flooring-installation-miami/"},{"title":"Bath Remodel","href":"/bath-remodel-miami/"}]}
      startingPrice="Outdoor TV Mounting starts at $200"
      statsText="Fully Insured • Serving Miami-Dade & Broward"
    />
  );
}
