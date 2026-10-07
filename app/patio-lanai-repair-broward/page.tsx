import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Patio & Lanai Repair in Broward County | Pembroke Pines, Fort Lauderdale - LUXHT Fix",
  description: "Professional patio & lanai repair in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar. Fully Insured. Call today!",
  alternates: { canonical: 'https://fix.luxht.com/patio-lanai-repair-broward/' },
  openGraph: {
    title: "Patio & Lanai Repair in Broward County | LUXHT Fix",
    description: "Professional patio & lanai repair in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar.",
    url: 'https://fix.luxht.com/patio-lanai-repair-broward/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function PatioLanaiRepairMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Patio & Lanai Repair"
      slug="patio-lanai-repair-broward"
      location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="Patio & Lanai Repair"
      parentSlug="patio-lanai-repair-broward"
      heroSubtitle="Repair and refresh your outdoor living spaces — tiles, railings, and structures."
      heroDescription="Same-week service available throughout Broward County."
      introParagraph={"Broward County's outdoor living spaces are essential to the lifestyle. LUXHT Fix repairs patios, lanais, outdoor tile, railings, and structures across Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar to keep your outdoor areas safe and beautiful."}
      serviceDetails={["Professional patio & lanai repair service","Expert craftsmanship and quality materials","Clean execution with area protection","Same-week scheduling available","Serving all of Broward County","Fully insured professionals"]}
      processSteps={["Assess the project scope and requirements","Provide detailed quote with transparent pricing","Schedule service at your convenience","Complete work with professional-grade materials","Clean workspace and inspect results","Ensure your complete satisfaction"]}
      whyChooseUs={["Patio & Lanai Repair specialists serving Broward County","Professional-grade materials and tools","Clean, respectful execution in your home","Transparent pricing with no hidden fees","Same-week service across Broward County","Fully insured and background-checked"]}
      faqs={[{"q":"How much does patio & lanai repair cost in Broward County?","a":"Pricing varies by project scope. Patio & Lanai Repair starts at $200. Contact us with photos for a fast, personalized quote."},{"q":"Do you serve my area in Broward County?","a":"Yes! LUXHT Fix currently serves only Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, and Miramar."},{"q":"How quickly can you schedule patio & lanai repair?","a":"We offer same-week service for most projects. Contact us to check current availability in your area."},{"q":"Are you fully insured?","a":"Yes. LUXHT Fix is fully insured for all work we perform throughout Broward County."}]}
      relatedServices={[{"title":"All Services","href":"/south-florida/"},{"title":"Drywall Repair","href":"/drywall-broward/"},{"title":"TV Mounting","href":"/tv-mounting-broward/"},{"title":"Flooring","href":"/flooring-installation-broward/"},{"title":"Bath Remodel","href":"/bath-remodel-broward/"}]}
      startingPrice="Patio & Lanai Repair starts at $200"
      statsText="Fully Insured • Serving Broward County"
      galleryImages={[
        { src: "/images/services/patio-lanai/pavers-before.jpg", title: "Patio Repair", subtitle: "Before: Sunken Pavers" },
        { src: "/images/services/patio-lanai/pavers-after.jpg", title: "Patio Repair", subtitle: "After: Level Surface" },
        { src: "/images/services/patio-lanai/roof-before.jpg", title: "Lanai Roof", subtitle: "Before: Structural Wear" },
        { src: "/images/services/patio-lanai/roof-after.jpg", title: "Lanai Roof", subtitle: "After: Reinforced Structure" }
      ]}
    />
  );
}
