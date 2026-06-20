import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pressure Washing in South Florida | LUXHT Fix',
  description: 'Professional pressure washing in South Florida. Exterior high-pressure and soft washing services. Serving Miami, Fort Lauderdale, Hollywood, Pembroke Pines & surrounding areas. Fully Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/pressure-washing-miami/' },
  openGraph: {
    title: 'Pressure Washing in South Florida | LUXHT Fix',
    description: 'Professional pressure washing in South Florida. Serving all of South Florida.',
    url: 'https://fix.luxht.com/pressure-washing-miami/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function PressureWashingMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Pressure Washing"
      slug="pressure-washing-miami"
      location="miami"
      neighborhoods={["Miami","Pembroke Pines","Cooper City","Aventura","Hallandale Beach","Miramar","Davie","Hollywood","Sunny Isles Beach","Fort Lauderdale","North Miami","Coral Gables","Doral","Miami Beach"]}
      parentCategory="Property Maintenance"
      parentSlug="services"
      heroSubtitle="Remove mold, algae, and grime from driveways, patios, siding, and lanais."
      heroDescription="Exterior high-pressure and soft washing services."
      introParagraph={`Keep your South Florida property clean and mold-free. LUXHT Fix offers complete pressure washing and exterior soft-wash cleaning across Miami, Fort Lauderdale, Pembroke Pines, and Hollywood. We use low-pressure soft washing for delicate stucco and siding, and high-pressure cleaning for concrete driveways.`}
      serviceDetails={["Driveway & sidewalk cleaning","Patio, deck & lanai pressure washing","Soft washing for exterior walls & stucco","Fencing & screen enclosure cleaning","Pool deck grime removal","Eco-friendly cleaning solutions"]}
      processSteps={["Assess surface materials and determine safe pressure levels","Apply pre-treatment solutions to break down mold/grime","Perform high-pressure or soft-wash cleaning","Rinse surrounding landscape to protect plants","Apply post-treatment to prevent future mold growth","Perform final walkthrough and inspection"]}
      whyChooseUs={["Soft-wash technique for delicate stucco","Protects plants and landscape","High-power commercial equipment","Family-owned & personally responsible","Fully insured for your peace of mind","Same-week scheduling"]}
      faqs={[{"q":"What is soft washing?","a":"Soft washing uses low pressure and specialized eco-friendly solutions to clean delicate surfaces like stucco, siding, and roofs without causing water intrusion or paint damage."},{"q":"Will pressure washing damage my plants?","a":"No. We pre-wet and rinse all nearby plants and landscaping before, during, and after cleaning to ensure they are protected."},{"q":"How often should I pressure wash my driveway in Florida?","a":"Due to Florida's heat and humidity, mold and algae build up quickly. We recommend pressure washing driveways and patios once or twice a year."}]}
      relatedServices={[{"title":"Property Maintenance","href":"/property-maintenance-miami/"},{"title":"Commercial Maintenance","href":"/commercial-property-maintenance-miami/"},{"title":"Rental Turn Repairs","href":"/rental-turnover-repairs-miami/"},{"title":"Drywall Repair","href":"/drywall-miami/"},{"title":"TV Mounting","href":"/tv-mounting-miami/"}]}
      startingPrice="Pressure Washing starts at $150"
      statsText="Fully Insured • Serving Miami-Dade & Broward"
    />
  );
}
