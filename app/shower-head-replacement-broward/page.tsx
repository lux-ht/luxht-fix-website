import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shower Head Replacement in Broward County | Pembroke Pines, Fort Lauderdale - LUXHT Fix",
  description: "Professional shower head replacement in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar. Fully Insured. Call today!",
  alternates: { canonical: 'https://fix.luxht.com/shower-head-replacement-broward/' },
  openGraph: {
    title: "Shower Head Replacement in Broward County | LUXHT Fix",
    description: "Professional shower head replacement in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar.",
    url: 'https://fix.luxht.com/shower-head-replacement-broward/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function ShowerHeadReplacementMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Shower Head Replacement"
      slug="shower-head-replacement-broward"
      location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="Faucet & Fixtures"
      parentSlug="faucet-fixtures-broward"
      heroSubtitle="Upgrade to modern rain, handheld, or multi-function shower heads."
      heroDescription="Same-week service available throughout Broward County."
      introParagraph={"Transform your daily shower experience with a professional shower head upgrade. LUXHT Fix installs rain heads, handheld units, and multi-function systems across Broward County homes and condos."}
      serviceDetails={["Professional shower head replacement service","Expert craftsmanship and quality materials","Clean execution with area protection","Same-week scheduling available","Serving all of Broward County","Fully insured professionals"]}
      processSteps={["Assess the project scope and requirements","Provide detailed quote with transparent pricing","Schedule service at your convenience","Complete work with professional-grade materials","Clean workspace and inspect results","Ensure your complete satisfaction"]}
      whyChooseUs={["Shower Head Replacement specialists serving Broward County","Professional-grade materials and tools","Clean, respectful execution in your home","Transparent pricing with no hidden fees","Same-week service across Broward County","Fully insured and background-checked"]}
      faqs={[{"q":"How much does shower head replacement cost in Broward County?","a":"Pricing varies by project scope. Shower Head Replacement starts at $75. Contact us with photos for a fast, personalized quote."},{"q":"Do you serve my area in Broward County?","a":"Yes! LUXHT Fix currently serves only Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, and Miramar."},{"q":"How quickly can you schedule shower head replacement?","a":"We offer same-week service for most projects. Contact us to check current availability in your area."},{"q":"Are you fully insured?","a":"Yes. LUXHT Fix is fully insured for all work we perform throughout Broward County."}]}
      relatedServices={[{"title":"All Services","href":"/south-florida/"},{"title":"Drywall Repair","href":"/drywall-broward/"},{"title":"TV Mounting","href":"/tv-mounting-broward/"},{"title":"Flooring","href":"/flooring-installation-broward/"},{"title":"Bath Remodel","href":"/bath-remodel-broward/"}]}
      startingPrice="Shower Head Replacement starts at $75"
      statsText="Fully Insured • Serving Broward County"
    />
  );
}
