import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Property Maintenance in South Florida | LUXHT Fix',
  description: 'Professional property maintenance in South Florida. Scheduled preventative care and visual property walkthroughs. Serving Miami, Fort Lauderdale, Hollywood, Pembroke Pines & surrounding areas. Fully Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/property-maintenance-miami/' },
  openGraph: {
    title: 'Property Maintenance in South Florida | LUXHT Fix',
    description: 'Professional property maintenance in South Florida. Serving all of South Florida.',
    url: 'https://fix.luxht.com/property-maintenance-miami/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function PropertyMaintenanceMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Property Maintenance"
      slug="property-maintenance-miami"
      location="miami"
      neighborhoods={["Miami","Pembroke Pines","Cooper City","Aventura","Hallandale Beach","Miramar","Davie","Hollywood","Sunny Isles Beach","Fort Lauderdale","North Miami","Coral Gables","Doral","Miami Beach"]}
      parentCategory="Property Maintenance"
      parentSlug="services"
      heroSubtitle="Preventative and seasonal maintenance to keep your property in peak condition."
      heroDescription="Scheduled preventative care and visual property walkthroughs."
      introParagraph={`From ocean breezes in Miami Beach to tropical storms in Pembroke Pines, South Florida properties face a demanding climate that makes preventative maintenance essential. LUXHT Fix offers complete property maintenance and inspection services across Miami-Dade and Broward counties, helping you maintain property value and ensure peace of mind.`}
      serviceDetails={["Seasonal inspections & maintenance","Gutter cleaning & clearing","Weatherproofing & door/window sealing","Pressure washing & exterior cleaning","Home safety checks (smoke detectors, filters)","Visual leak & roof inspections"]}
      processSteps={["Perform comprehensive property walkthrough","Document issues and maintenance recommendations","Execute scheduled maintenance tasks","Seal gaps, clean gutters, and replace filters","Clean workspace completely","Provide detailed property health report"]}
      whyChooseUs={["Scheduled preventative care","Detailed inspection checklist included","Family-owned & personally responsible","Fully insured for your complete protection","Prevents costly future repairs","Same-week scheduling available"]}
      faqs={[{"q":"What is included in a property maintenance visit?","a":"Our standard visit includes seasonal checks, gutter clearing, weatherstripping inspection, filter replacements, smoke detector testing, and a visual walkthrough of seals, caulk, and roof lines to catch issues early."},{"q":"How often should I schedule property maintenance?","a":"We recommend scheduling preventative maintenance twice a year (spring and fall) or quarterly to protect your property from Florida's harsh sun, heat, and rain."},{"q":"Do you offer commercial property maintenance?","a":"Yes. We provide scheduled maintenance and general repairs for offices, retail spaces, and rental units."}]}
      relatedServices={[{"title":"Rental Turn Repairs","href":"/rental-turnover-repairs-miami/"},{"title":"Drywall Repair","href":"/drywall-miami/"},{"title":"TV Mounting","href":"/tv-mounting-miami/"}]}
      startingPrice="Property Maintenance starts at $150"
      statsText="Fully Insured • Serving Miami-Dade & Broward"
    />
  );
}
