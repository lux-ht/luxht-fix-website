import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Stucco Repair in Broward County | Pembroke Pines, Fort Lauderdale - LUXHT Fix",
  description: "Professional stucco repair in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar. Fully Insured. Call today!",
  alternates: { canonical: 'https://fix.luxht.com/stucco-repair-broward/' },
  openGraph: {
    title: "Stucco Repair in Broward County | LUXHT Fix",
    description: "Professional stucco repair in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar.",
    url: 'https://fix.luxht.com/stucco-repair-broward/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function StuccoRepairMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Stucco Repair"
      slug="stucco-repair-broward"
      location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="Stucco Repair"
      parentSlug="stucco-repair-broward"
      heroSubtitle="Professional stucco crack repair, patching, and color matching."
      heroDescription="Same-week service available throughout Broward County."
      introParagraph={"Stucco is the dominant exterior finish on Broward County homes, and cracks, chips, and water intrusion are common issues in our tropical climate. LUXHT Fix provides expert stucco repair throughout Pembroke Pines, Wilton Manors, Davie, and Pembroke Pines with professional color matching."}
      serviceDetails={["Professional stucco repair service","Expert craftsmanship and quality materials","Clean execution with area protection","Same-week scheduling available","Serving all of Broward County","Fully insured professionals"]}
      processSteps={["Assess the project scope and requirements","Provide detailed quote with transparent pricing","Schedule service at your convenience","Complete work with professional-grade materials","Clean workspace and inspect results","Ensure your complete satisfaction"]}
      whyChooseUs={["Stucco Repair specialists serving Broward County","Professional-grade materials and tools","Clean, respectful execution in your home","Transparent pricing with no hidden fees","Same-week service across Broward County","Fully insured and background-checked"]}
      faqs={[{"q":"How much does stucco repair cost in Broward County?","a":"Pricing varies by project scope. Stucco Repair starts at $175. Contact us with photos for a fast, personalized quote."},{"q":"Do you serve my area in Broward County?","a":"Yes! LUXHT Fix currently serves only Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, and Miramar."},{"q":"How quickly can you schedule stucco repair?","a":"We offer same-week service for most projects. Contact us to check current availability in your area."},{"q":"Are you fully insured?","a":"Yes. LUXHT Fix is fully insured for all work we perform throughout Broward County."}]}
      relatedServices={[{"title":"All Services","href":"/south-florida/"},{"title":"Drywall Repair","href":"/drywall-broward/"},{"title":"TV Mounting","href":"/tv-mounting-broward/"},{"title":"Flooring","href":"/flooring-installation-broward/"},{"title":"Bath Remodel","href":"/bath-remodel-broward/"}]}
      startingPrice="Stucco Repair starts at $175"
      statsText="Fully Insured • Serving Broward County"
      galleryImages={[
        { src: "/images/services/stucco/crack-before.jpg", title: "Crack Repair", subtitle: "Before: Settlement Cracks" },
        { src: "/images/services/stucco/crack-after.jpg", title: "Crack Repair", subtitle: "After: Seamless Patch" },
        { src: "/images/services/stucco/water-before.jpg", title: "Water Damage", subtitle: "Before: Blistering Stucco" },
        { src: "/images/services/stucco/water-after.jpg", title: "Water Damage", subtitle: "After: Restored Surface" }
      ]}
    />
  );
}
