import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pressure Washing in Broward County | LUXHT Fix",
  description: "Professional pressure washing in Broward County. Exterior high-pressure and soft washing services. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar. Fully Insured. Call today!",
  alternates: { canonical: 'https://fix.luxht.com/pressure-washing-broward/' },
  openGraph: {
    title: "Pressure Washing in Broward County | LUXHT Fix",
    description: "Professional pressure washing in Broward County. Serving all of Broward County.",
    url: 'https://fix.luxht.com/pressure-washing-broward/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function PressureWashingMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Pressure Washing"
      slug="pressure-washing-broward"
      location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="Property Maintenance"
      parentSlug="services"
      heroSubtitle="Remove mold, algae, and grime from driveways, patios, siding, and lanais."
      heroDescription="Exterior high-pressure and soft washing services."
      introParagraph={"Keep your Broward County property clean and mold-free. LUXHT Fix offers complete pressure washing and exterior soft-wash cleaning across Pembroke Pines, Fort Lauderdale, Pembroke Pines, and Hollywood. We use low-pressure soft washing for delicate stucco and siding, and high-pressure cleaning for concrete driveways."}
      serviceDetails={["Driveway & sidewalk cleaning","Patio, deck & lanai pressure washing","Soft washing for exterior walls & stucco","Fencing & screen enclosure cleaning","Pool deck grime removal","Eco-friendly cleaning solutions"]}
      processSteps={["Assess surface materials and determine safe pressure levels","Apply pre-treatment solutions to break down mold/grime","Perform high-pressure or soft-wash cleaning","Rinse surrounding landscape to protect plants","Apply post-treatment to prevent future mold growth","Perform final walkthrough and inspection"]}
      whyChooseUs={["Soft-wash technique for delicate stucco","Protects plants and landscape","High-power commercial equipment","Family-owned & personally responsible","Fully insured for your peace of mind","Same-week scheduling"]}
      faqs={[{"q":"What is soft washing?","a":"Soft washing uses low pressure and specialized eco-friendly solutions to clean delicate surfaces like stucco, siding, and roofs without causing water intrusion or paint damage."},{"q":"Will pressure washing damage my plants?","a":"No. We pre-wet and rinse all nearby plants and landscaping before, during, and after cleaning to ensure they are protected."},{"q":"How often should I pressure wash my driveway in Florida?","a":"Due to Florida's heat and humidity, mold and algae build up quickly. We recommend pressure washing driveways and patios once or twice a year."}]}
      relatedServices={[{"title":"Property Maintenance","href":"/property-maintenance-broward/"},{"title":"Commercial Maintenance","href":"/commercial-property-maintenance-broward/"},{"title":"Rental Turn Repairs","href":"/rental-turnover-repairs-broward/"},{"title":"Drywall Repair","href":"/drywall-broward/"},{"title":"TV Mounting","href":"/tv-mounting-broward/"}]}
      startingPrice="Pressure Washing starts at $150"
      statsText="Fully Insured • Serving Broward County"
    />
  );
}
