import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pressure Washing in Central Florida | LUXHT Fix',
  description: 'Professional pressure washing in Central Florida. Exterior high-pressure and soft washing services. Serving Orlando, Winter Park, Lake Nona, Windermere & surrounding areas. Fully Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/pressure-washing-orlando/' },
  openGraph: {
    title: 'Pressure Washing in Central Florida | LUXHT Fix',
    description: 'Professional pressure washing in Central Florida. Serving all of Central Florida.',
    url: 'https://fix.luxht.com/pressure-washing-orlando/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function PressureWashingOrlandoPage() {
  return (
    <ServicePageTemplate
      serviceName="Pressure Washing"
      slug="pressure-washing-orlando"
      location="orlando"
      neighborhoods={["Winter Park","Maitland","Altamonte Springs","Lake Nona","Dr. Phillips","Windermere","Ocoee","Apopka","Winter Garden","Lake Mary","Baldwin Park"]}
      parentCategory="Property Maintenance"
      parentSlug="services"
      heroSubtitle="Remove mold, algae, and grime from driveways, patios, siding, and lanais."
      heroDescription="Exterior high-pressure and soft washing services."
      introParagraph={`Central Florida's heat and humidity create the perfect breeding ground for mold and algae on driveways, sidewalks, and pool enclosures. LUXHT Fix provides professional pressure washing and exterior soft washing in Orlando, Windermere, Maitland, and Winter Park to refresh your property's exterior surfaces safely and effectively.`}
      serviceDetails={["Driveway & sidewalk cleaning","Patio, deck & lanai pressure washing","Soft washing for exterior walls & stucco","Fencing & screen enclosure cleaning","Pool deck grime removal","Eco-friendly cleaning solutions"]}
      processSteps={["Assess surface materials and determine safe pressure levels","Apply pre-treatment solutions to break down mold/grime","Perform high-pressure or soft-wash cleaning","Rinse surrounding landscape to protect plants","Apply post-treatment to prevent future mold growth","Perform final walkthrough and inspection"]}
      whyChooseUs={["Soft-wash technique for delicate stucco","Protects plants and landscape","High-power commercial equipment","Family-owned & personally responsible","Fully insured for your peace of mind","Same-week scheduling"]}
      faqs={[{"q":"What is soft washing?","a":"Soft washing uses low pressure and specialized eco-friendly solutions to clean delicate surfaces like stucco, siding, and roofs without causing water intrusion or paint damage."},{"q":"Will pressure washing damage my plants?","a":"No. We pre-wet and rinse all nearby plants and landscaping before, during, and after cleaning to ensure they are protected."},{"q":"How often should I pressure wash my driveway in Florida?","a":"Due to Florida's heat and humidity, mold and algae build up quickly. We recommend pressure washing driveways and patios once or twice a year."}]}
      relatedServices={[{"title":"Property Maintenance","href":"/property-maintenance-orlando/"},{"title":"Commercial Maintenance","href":"/commercial-property-maintenance-orlando/"},{"title":"Rental Turn Repairs","href":"/rental-turnover-repairs-orlando/"},{"title":"Drywall Repair","href":"/drywall-orlando/"},{"title":"TV Mounting","href":"/tv-mounting-orlando/"}]}
      startingPrice="Pressure Washing starts at $150"
      statsText="Fully Insured • Serving Orlando & Central Florida"
    />
  );
}
