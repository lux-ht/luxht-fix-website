import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Property Maintenance in Broward County | LUXHT Fix",
  description: "Professional property maintenance in Broward County. Scheduled preventative care and visual property walkthroughs. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar. Fully Insured. Call today!",
  alternates: { canonical: 'https://fix.luxht.com/property-maintenance-broward/' },
  openGraph: {
    title: "Property Maintenance in Broward County | LUXHT Fix",
    description: "Professional property maintenance in Broward County. Serving all of Broward County.",
    url: 'https://fix.luxht.com/property-maintenance-broward/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function PropertyMaintenanceMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Property Maintenance"
      slug="property-maintenance-broward"
      location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="Property Maintenance"
      parentSlug="services"
      heroSubtitle="Preventative and seasonal maintenance to keep your property in peak condition."
      heroDescription="Scheduled preventative care and visual property walkthroughs."
      introParagraph={"From ocean breezes in Fort Lauderdale to tropical storms in Pembroke Pines, Broward County properties face a demanding climate that makes preventative maintenance essential. LUXHT Fix offers complete property maintenance and inspection services across our Broward service area, helping you maintain property value and ensure peace of mind."}
      serviceDetails={["Seasonal inspections & maintenance","Gutter cleaning & clearing","Weatherproofing & door/window sealing","Pressure washing & exterior cleaning","Home safety checks (smoke detectors, filters)","Visual leak & roof inspections"]}
      processSteps={["Perform comprehensive property walkthrough","Document issues and maintenance recommendations","Execute scheduled maintenance tasks","Seal gaps, clean gutters, and replace filters","Clean workspace completely","Provide detailed property health report"]}
      whyChooseUs={["Scheduled preventative care","Detailed inspection checklist included","Family-owned & personally responsible","Fully insured for your complete protection","Prevents costly future repairs","Same-week scheduling available"]}
      faqs={[{"q":"What is included in a property maintenance visit?","a":"Our standard visit includes seasonal checks, gutter clearing, weatherstripping inspection, filter replacements, smoke detector testing, and a visual walkthrough of seals, caulk, and roof lines to catch issues early."},{"q":"How often should I schedule property maintenance?","a":"We recommend scheduling preventative maintenance twice a year (spring and fall) or quarterly to protect your property from Florida's harsh sun, heat, and rain."},{"q":"Do you offer commercial property maintenance?","a":"Yes. We provide scheduled maintenance and general repairs for offices, retail spaces, and rental units."}]}
      relatedServices={[{"title":"Rental Turn Repairs","href":"/rental-turnover-repairs-broward/"},{"title":"Drywall Repair","href":"/drywall-broward/"},{"title":"TV Mounting","href":"/tv-mounting-broward/"}]}
      startingPrice="Property Maintenance starts at $150"
      statsText="Fully Insured • Serving Broward County"
    />
  );
}
