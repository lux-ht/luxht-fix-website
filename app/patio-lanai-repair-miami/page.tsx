import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Patio & Lanai Repair in South Florida | Miami, Fort Lauderdale - LUXHT Fix',
  description: 'Professional patio & lanai repair in South Florida. Serving Miami, Fort Lauderdale, Hollywood, Pembroke Pines & more. Licensed & Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/patio-lanai-repair-miami/' },
  openGraph: {
    title: 'Patio & Lanai Repair in South Florida | LUXHT Fix',
    description: 'Professional patio & lanai repair in South Florida. Serving Miami, Fort Lauderdale & surrounding areas.',
    url: 'https://fix.luxht.com/patio-lanai-repair-miami/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function PatioLanaiRepairMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Patio & Lanai Repair"
      slug="patio-lanai-repair-miami"
      location="miami"
      neighborhoods={["Miami","Pembroke Pines","Cooper City","Aventura","Hallandale Beach","Miramar","Davie","Hollywood","Sunny Isles Beach","Fort Lauderdale","North Miami","Coral Gables","Doral","Miami Beach"]}
      parentCategory="Patio & Lanai Repair"
      parentSlug="patio-lanai-repair-miami"
      heroSubtitle="Repair and refresh your outdoor living spaces — tiles, railings, and structures."
      heroDescription="Same-week service available throughout South Florida."
      introParagraph={`South Florida's outdoor living spaces are essential to the lifestyle. LUXHT Fix repairs patios, lanais, outdoor tile, railings, and structures across Miami, Hollywood, Davie, and Miramar to keep your outdoor areas safe and beautiful.`}
      serviceDetails={["Professional patio & lanai repair service","Expert craftsmanship and quality materials","Clean execution with area protection","Same-week scheduling available","Serving all of South Florida","Licensed and insured professionals"]}
      processSteps={["Assess the project scope and requirements","Provide detailed quote with transparent pricing","Schedule service at your convenience","Complete work with professional-grade materials","Clean workspace and inspect results","Ensure your complete satisfaction"]}
      whyChooseUs={["Patio & Lanai Repair specialists serving South Florida","Professional-grade materials and tools","Clean, respectful execution in your home","Transparent pricing with no hidden fees","Same-week service across Miami-Dade & Broward","Licensed, insured, and background-checked"]}
      faqs={[{"q":"How much does patio & lanai repair cost in South Florida?","a":"Pricing varies by project scope. Patio & Lanai Repair starts at $200. Contact us with photos for a fast, personalized quote."},{"q":"Do you serve my area in South Florida?","a":"Yes! LUXHT Fix serves all of Miami-Dade and Broward counties including Miami, Fort Lauderdale, Hollywood, Pembroke Pines, and surrounding cities."},{"q":"How quickly can you schedule patio & lanai repair?","a":"We offer same-week service for most projects. Contact us to check current availability in your area."},{"q":"Are you licensed and insured?","a":"Yes. LUXHT Fix is fully licensed and insured for all work we perform throughout South Florida."}]}
      relatedServices={[{"title":"All Services","href":"/south-florida/"},{"title":"Drywall Repair","href":"/drywall-miami/"},{"title":"TV Mounting","href":"/tv-mounting-miami/"},{"title":"Flooring","href":"/flooring-installation-miami/"},{"title":"Bath Remodel","href":"/bath-remodel-miami/"}]}
      startingPrice="Patio & Lanai Repair starts at $200"
      statsText="Licensed • Insured • Serving Miami-Dade & Broward"
      galleryImages={[
        { src: "/images/services/patio-lanai/pavers-before.jpg", title: "Patio Repair", subtitle: "Before: Sunken Pavers" },
        { src: "/images/services/patio-lanai/pavers-after.jpg", title: "Patio Repair", subtitle: "After: Level Surface" },
        { src: "/images/services/patio-lanai/roof-before.jpg", title: "Lanai Roof", subtitle: "Before: Structural Wear" },
        { src: "/images/services/patio-lanai/roof-after.jpg", title: "Lanai Roof", subtitle: "After: Reinforced Structure" }
      ]}
    />
  );
}
