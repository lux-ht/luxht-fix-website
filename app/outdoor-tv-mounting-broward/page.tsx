import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Outdoor TV Mounting in Broward County | Pembroke Pines, Fort Lauderdale - LUXHT Fix",
  description: "Professional outdoor tv mounting in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar. Fully Insured. Call today!",
  alternates: { canonical: 'https://fix.luxht.com/outdoor-tv-mounting-broward/' },
  openGraph: {
    title: "Outdoor TV Mounting in Broward County | LUXHT Fix",
    description: "Professional outdoor tv mounting in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar.",
    url: 'https://fix.luxht.com/outdoor-tv-mounting-broward/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function OutdoorTvMountingMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Outdoor TV Mounting"
      slug="outdoor-tv-mounting-broward"
      location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="TV Mounting"
      parentSlug="tv-mounting-broward"
      heroSubtitle="Weather-resistant outdoor TV installation for patios, lanais, and pool areas."
      heroDescription="Same-week service available throughout Broward County."
      introParagraph={"Broward County's year-round outdoor lifestyle demands professional outdoor TV installations. LUXHT Fix installs weather-resistant TVs on patios, lanais, pool decks, and outdoor kitchens across Pembroke Pines, Fort Lauderdale, and Hollywood with proper waterproofing and UV protection."}
      serviceDetails={["Professional outdoor tv mounting service","Expert craftsmanship and quality materials","Clean execution with area protection","Same-week scheduling available","Serving all of Broward County","Fully insured professionals"]}
      processSteps={["Assess the project scope and requirements","Provide detailed quote with transparent pricing","Schedule service at your convenience","Complete work with professional-grade materials","Clean workspace and inspect results","Ensure your complete satisfaction"]}
      whyChooseUs={["Outdoor TV Mounting specialists serving Broward County","Professional-grade materials and tools","Clean, respectful execution in your home","Transparent pricing with no hidden fees","Same-week service across Broward County","Fully insured and background-checked"]}
      faqs={[{"q":"How much does outdoor tv mounting cost in Broward County?","a":"Pricing varies by project scope. Outdoor TV Mounting starts at $200. Contact us with photos for a fast, personalized quote."},{"q":"Do you serve my area in Broward County?","a":"Yes! LUXHT Fix currently serves only Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, and Miramar."},{"q":"How quickly can you schedule outdoor tv mounting?","a":"We offer same-week service for most projects. Contact us to check current availability in your area."},{"q":"Are you fully insured?","a":"Yes. LUXHT Fix is fully insured for all work we perform throughout Broward County."}]}
      relatedServices={[{"title":"All Services","href":"/south-florida/"},{"title":"Drywall Repair","href":"/drywall-broward/"},{"title":"TV Mounting","href":"/tv-mounting-broward/"},{"title":"Flooring","href":"/flooring-installation-broward/"},{"title":"Bath Remodel","href":"/bath-remodel-broward/"}]}
      startingPrice="Outdoor TV Mounting starts at $200"
      statsText="Fully Insured • Serving Broward County"
    />
  );
}
