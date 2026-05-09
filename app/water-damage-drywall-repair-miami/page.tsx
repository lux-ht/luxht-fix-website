import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Water Damage Drywall Repair in South Florida | Miami, Fort Lauderdale - LUXHT Fix',
  description: 'Professional water damage drywall repair in South Florida. Serving Miami, Fort Lauderdale, Hollywood, Pembroke Pines & more. Licensed & Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/water-damage-drywall-repair-miami/' },
  openGraph: {
    title: 'Water Damage Drywall Repair in South Florida | LUXHT Fix',
    description: 'Professional water damage drywall repair in South Florida. Serving Miami, Fort Lauderdale & surrounding areas.',
    url: 'https://fix.luxht.com/water-damage-drywall-repair-miami/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function WaterDamageDrywallRepairMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Water Damage Drywall Repair"
      slug="water-damage-drywall-repair-miami"
      location="miami"
      neighborhoods={["Miami","Pembroke Pines","Cooper City","Aventura","Hallandale Beach","Miramar","Davie","Hollywood","Sunny Isles Beach","Fort Lauderdale","North Miami","Coral Gables","Doral","Miami Beach"]}
      parentCategory="Drywall Repair"
      parentSlug="drywall-miami"
      heroSubtitle="Expert repair of water-damaged walls and ceilings from leaks, floods, and storms."
      heroDescription="Moisture assessment and mold prevention included."
      introParagraph={`South Florida's tropical storms, heavy rainfall, and high humidity make water damage a common issue for homeowners in Miami, Fort Lauderdale, Hollywood, and surrounding areas. LUXHT Fix provides comprehensive water damage drywall repair — from moisture assessment and mold prevention to seamless texture matching — ensuring your walls are restored safely and completely.`}
      serviceDetails={["Water damage assessment and moisture testing","Removal of compromised drywall sections","Mold prevention treatment","New drywall installation","Seamless texture matching","Ceiling water damage repair"]}
      processSteps={["Test moisture levels with professional equipment","Identify and confirm water source is resolved","Remove all water-damaged drywall safely","Treat area for mold prevention","Install new drywall with proper backing","Match texture and prepare for painting"]}
      whyChooseUs={["Water damage repair experts in South Florida","Professional moisture testing equipment","Mold prevention protocols included","Hurricane and storm damage experience","Same-week emergency service available","Licensed, insured, and background-checked"]}
      faqs={[{"q":"How do I know if my drywall has water damage?","a":"Signs include bubbling, soft spots, discoloration, peeling paint, and musty odors. South Florida humidity can make damage worse if not addressed quickly."},{"q":"Do you handle mold from water damage?","a":"We treat affected areas with mold prevention solutions and ensure proper drying before repair. For extensive mold, we recommend a certified mold remediation specialist first."},{"q":"How much does water damage drywall repair cost in Miami?","a":"Costs depend on the extent of damage. Small areas start at $200, larger sections requiring full replacement from $400+. Send photos for a fast estimate."},{"q":"Can you repair hurricane water damage?","a":"Yes. We have extensive experience with storm-related water damage repair throughout Miami-Dade and Broward counties."}]}
      relatedServices={[{"title":"Drywall Repair","href":"/drywall-miami/"},{"title":"Hurricane Damage Repair","href":"/hurricane-damage-repair-miami/"},{"title":"Drywall Crack Repair","href":"/drywall-crack-repair-miami/"},{"title":"Texture Matching","href":"/texture-matching-miami/"}]}
      startingPrice="Water Damage Drywall Repair starts at Water damage repair starts at $200"
      statsText="Licensed • Insured • Serving Miami-Dade & Broward"
    />
  );
}
