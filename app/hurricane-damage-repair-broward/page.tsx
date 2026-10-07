import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hurricane Damage Repair in Broward County | Pembroke Pines, Fort Lauderdale - LUXHT Fix",
  description: "Professional hurricane damage repair in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar. Fully Insured. Call today!",
  alternates: { canonical: 'https://fix.luxht.com/hurricane-damage-repair-broward/' },
  openGraph: {
    title: "Hurricane Damage Repair in Broward County | LUXHT Fix",
    description: "Professional hurricane damage repair in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar.",
    url: 'https://fix.luxht.com/hurricane-damage-repair-broward/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function HurricaneDamageRepairMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Hurricane Damage Repair"
      slug="hurricane-damage-repair-broward"
      location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="Hurricane Damage Repair"
      parentSlug="hurricane-damage-repair-broward"
      heroSubtitle="Fast storm damage repair for walls, ceilings, doors, and exteriors."
      heroDescription="Same-week service available throughout Broward County."
      introParagraph={"When hurricanes and tropical storms hit Broward County, LUXHT Fix is ready to help restore your home. We repair storm-damaged drywall, doors, trim, and interior finishes across Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, and Miramar. Our team responds quickly after storms to secure and repair your home."}
      serviceDetails={["Professional hurricane damage repair service","Expert craftsmanship and quality materials","Clean execution with area protection","Same-week scheduling available","Serving all of Broward County","Fully insured professionals"]}
      processSteps={["Assess the project scope and requirements","Provide detailed quote with transparent pricing","Schedule service at your convenience","Complete work with professional-grade materials","Clean workspace and inspect results","Ensure your complete satisfaction"]}
      whyChooseUs={["Hurricane Damage Repair specialists serving Broward County","Professional-grade materials and tools","Clean, respectful execution in your home","Transparent pricing with no hidden fees","Same-week service across Broward County","Fully insured and background-checked"]}
      faqs={[{"q":"How much does hurricane damage repair cost in Broward County?","a":"Pricing varies by project scope. Hurricane Damage Repair starts at $200. Contact us with photos for a fast, personalized quote."},{"q":"Do you serve my area in Broward County?","a":"Yes! LUXHT Fix currently serves only Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, and Miramar."},{"q":"How quickly can you schedule hurricane damage repair?","a":"We offer same-week service for most projects. Contact us to check current availability in your area."},{"q":"Are you fully insured?","a":"Yes. LUXHT Fix is fully insured for all work we perform throughout Broward County."}]}
      relatedServices={[{"title":"All Services","href":"/south-florida/"},{"title":"Drywall Repair","href":"/drywall-broward/"},{"title":"TV Mounting","href":"/tv-mounting-broward/"},{"title":"Flooring","href":"/flooring-installation-broward/"},{"title":"Bath Remodel","href":"/bath-remodel-broward/"}]}
      startingPrice="Hurricane Damage Repair starts at $200"
      statsText="Fully Insured • Serving Broward County"
      galleryImages={[
        { src: "/images/services/hurricane-damage/repair-before.jpg", title: "Exterior Repair", subtitle: "Before: Damaged Siding" },
        { src: "/images/services/hurricane-damage/repair-after.jpg", title: "Exterior Repair", subtitle: "After: Pristine Condition" },
        { src: "/images/services/hurricane-damage/water-before.jpg", title: "Interior Water Damage", subtitle: "Before: Storm Leaks" },
        { src: "/images/services/hurricane-damage/water-after.jpg", title: "Interior Water Damage", subtitle: "After: Restored Drywall" }
      ]}
    />
  );
}
