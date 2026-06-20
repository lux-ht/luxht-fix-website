import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stucco Repair in South Florida | Miami, Fort Lauderdale - LUXHT Fix',
  description: 'Professional stucco repair in South Florida. Serving Miami, Fort Lauderdale, Hollywood, Pembroke Pines & more. Fully Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/stucco-repair-miami/' },
  openGraph: {
    title: 'Stucco Repair in South Florida | LUXHT Fix',
    description: 'Professional stucco repair in South Florida. Serving Miami, Fort Lauderdale & surrounding areas.',
    url: 'https://fix.luxht.com/stucco-repair-miami/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function StuccoRepairMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Stucco Repair"
      slug="stucco-repair-miami"
      location="miami"
      neighborhoods={["Miami","Pembroke Pines","Cooper City","Aventura","Hallandale Beach","Miramar","Davie","Hollywood","Sunny Isles Beach","Fort Lauderdale","North Miami","Coral Gables","Doral","Miami Beach"]}
      parentCategory="Stucco Repair"
      parentSlug="stucco-repair-miami"
      heroSubtitle="Professional stucco crack repair, patching, and color matching."
      heroDescription="Same-week service available throughout South Florida."
      introParagraph={`Stucco is the dominant exterior finish on South Florida homes, and cracks, chips, and water intrusion are common issues in our tropical climate. LUXHT Fix provides expert stucco repair throughout Miami, Coral Gables, Doral, and Pembroke Pines with professional color matching.`}
      serviceDetails={["Professional stucco repair service","Expert craftsmanship and quality materials","Clean execution with area protection","Same-week scheduling available","Serving all of South Florida","Fully insured professionals"]}
      processSteps={["Assess the project scope and requirements","Provide detailed quote with transparent pricing","Schedule service at your convenience","Complete work with professional-grade materials","Clean workspace and inspect results","Ensure your complete satisfaction"]}
      whyChooseUs={["Stucco Repair specialists serving South Florida","Professional-grade materials and tools","Clean, respectful execution in your home","Transparent pricing with no hidden fees","Same-week service across Miami-Dade & Broward","Fully insured and background-checked"]}
      faqs={[{"q":"How much does stucco repair cost in South Florida?","a":"Pricing varies by project scope. Stucco Repair starts at $175. Contact us with photos for a fast, personalized quote."},{"q":"Do you serve my area in South Florida?","a":"Yes! LUXHT Fix serves all of Miami-Dade and Broward counties including Miami, Fort Lauderdale, Hollywood, Pembroke Pines, and surrounding cities."},{"q":"How quickly can you schedule stucco repair?","a":"We offer same-week service for most projects. Contact us to check current availability in your area."},{"q":"Are you fully insured?","a":"Yes. LUXHT Fix is fully fully insured for all work we perform throughout South Florida."}]}
      relatedServices={[{"title":"All Services","href":"/south-florida/"},{"title":"Drywall Repair","href":"/drywall-miami/"},{"title":"TV Mounting","href":"/tv-mounting-miami/"},{"title":"Flooring","href":"/flooring-installation-miami/"},{"title":"Bath Remodel","href":"/bath-remodel-miami/"}]}
      startingPrice="Stucco Repair starts at $175"
      statsText="Fully Insured • Serving Miami-Dade & Broward"
      galleryImages={[
        { src: "/images/services/stucco/crack-before.jpg", title: "Crack Repair", subtitle: "Before: Settlement Cracks" },
        { src: "/images/services/stucco/crack-after.jpg", title: "Crack Repair", subtitle: "After: Seamless Patch" },
        { src: "/images/services/stucco/water-before.jpg", title: "Water Damage", subtitle: "Before: Blistering Stucco" },
        { src: "/images/services/stucco/water-after.jpg", title: "Water Damage", subtitle: "After: Restored Surface" }
      ]}
    />
  );
}
