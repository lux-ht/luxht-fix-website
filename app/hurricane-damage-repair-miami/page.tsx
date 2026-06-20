import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hurricane Damage Repair in South Florida | Miami, Fort Lauderdale - LUXHT Fix',
  description: 'Professional hurricane damage repair in South Florida. Serving Miami, Fort Lauderdale, Hollywood, Pembroke Pines & more. Fully Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/hurricane-damage-repair-miami/' },
  openGraph: {
    title: 'Hurricane Damage Repair in South Florida | LUXHT Fix',
    description: 'Professional hurricane damage repair in South Florida. Serving Miami, Fort Lauderdale & surrounding areas.',
    url: 'https://fix.luxht.com/hurricane-damage-repair-miami/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function HurricaneDamageRepairMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Hurricane Damage Repair"
      slug="hurricane-damage-repair-miami"
      location="miami"
      neighborhoods={["Miami","Pembroke Pines","Cooper City","Aventura","Hallandale Beach","Miramar","Davie","Hollywood","Sunny Isles Beach","Fort Lauderdale","North Miami","Coral Gables","Doral","Miami Beach"]}
      parentCategory="Hurricane Damage Repair"
      parentSlug="hurricane-damage-repair-miami"
      heroSubtitle="Fast storm damage repair for walls, ceilings, doors, and exteriors."
      heroDescription="Same-week service available throughout South Florida."
      introParagraph={`When hurricanes and tropical storms hit South Florida, LUXHT Fix is ready to help restore your home. We repair storm-damaged drywall, doors, trim, and interior finishes across Miami, Fort Lauderdale, Hollywood, Pembroke Pines, and all surrounding areas. Our team responds quickly after storms to secure and repair your home.`}
      serviceDetails={["Professional hurricane damage repair service","Expert craftsmanship and quality materials","Clean execution with area protection","Same-week scheduling available","Serving all of South Florida","Fully insured professionals"]}
      processSteps={["Assess the project scope and requirements","Provide detailed quote with transparent pricing","Schedule service at your convenience","Complete work with professional-grade materials","Clean workspace and inspect results","Ensure your complete satisfaction"]}
      whyChooseUs={["Hurricane Damage Repair specialists serving South Florida","Professional-grade materials and tools","Clean, respectful execution in your home","Transparent pricing with no hidden fees","Same-week service across Miami-Dade & Broward","Fully insured and background-checked"]}
      faqs={[{"q":"How much does hurricane damage repair cost in South Florida?","a":"Pricing varies by project scope. Hurricane Damage Repair starts at $200. Contact us with photos for a fast, personalized quote."},{"q":"Do you serve my area in South Florida?","a":"Yes! LUXHT Fix serves all of Miami-Dade and Broward counties including Miami, Fort Lauderdale, Hollywood, Pembroke Pines, and surrounding cities."},{"q":"How quickly can you schedule hurricane damage repair?","a":"We offer same-week service for most projects. Contact us to check current availability in your area."},{"q":"Are you fully insured?","a":"Yes. LUXHT Fix is fully fully insured for all work we perform throughout South Florida."}]}
      relatedServices={[{"title":"All Services","href":"/south-florida/"},{"title":"Drywall Repair","href":"/drywall-miami/"},{"title":"TV Mounting","href":"/tv-mounting-miami/"},{"title":"Flooring","href":"/flooring-installation-miami/"},{"title":"Bath Remodel","href":"/bath-remodel-miami/"}]}
      startingPrice="Hurricane Damage Repair starts at $200"
      statsText="Fully Insured • Serving Miami-Dade & Broward"
      galleryImages={[
        { src: "/images/services/hurricane-damage/repair-before.jpg", title: "Exterior Repair", subtitle: "Before: Damaged Siding" },
        { src: "/images/services/hurricane-damage/repair-after.jpg", title: "Exterior Repair", subtitle: "After: Pristine Condition" },
        { src: "/images/services/hurricane-damage/water-before.jpg", title: "Interior Water Damage", subtitle: "Before: Storm Leaks" },
        { src: "/images/services/hurricane-damage/water-after.jpg", title: "Interior Water Damage", subtitle: "After: Restored Drywall" }
      ]}
    />
  );
}
