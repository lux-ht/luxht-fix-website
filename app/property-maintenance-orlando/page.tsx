import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Property Maintenance in Central Florida | LUXHT Fix',
  description: 'Professional property maintenance in Central Florida. Scheduled preventative care and visual property walkthroughs. Serving Orlando, Winter Park, Lake Nona, Windermere & surrounding areas. Fully Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/property-maintenance-orlando/' },
  openGraph: {
    title: 'Property Maintenance in Central Florida | LUXHT Fix',
    description: 'Professional property maintenance in Central Florida. Serving all of Central Florida.',
    url: 'https://fix.luxht.com/property-maintenance-orlando/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function PropertyMaintenanceOrlandoPage() {
  return (
    <ServicePageTemplate
      serviceName="Property Maintenance"
      slug="property-maintenance-orlando"
      location="orlando"
      neighborhoods={["Winter Park","Maitland","Altamonte Springs","Lake Nona","Dr. Phillips","Windermere","Ocoee","Apopka","Winter Garden","Lake Mary","Baldwin Park"]}
      parentCategory="Property Maintenance"
      parentSlug="services"
      heroSubtitle="Preventative and seasonal maintenance to keep your property in peak condition."
      heroDescription="Scheduled preventative care and visual property walkthroughs."
      introParagraph={`Maintaining a property in Central Florida requires consistent upkeep to combat intense sun, summer storms, and high humidity. LUXHT Fix provides professional property maintenance services for homeowners, landlords, and property managers in Orlando, Winter Park, Lake Nona, Windermere, and surrounding areas. Our preventative care catches minor issues before they become expensive structural repairs.`}
      serviceDetails={["Seasonal inspections & maintenance","Gutter cleaning & clearing","Weatherproofing & door/window sealing","Pressure washing & exterior cleaning","Home safety checks (smoke detectors, filters)","Visual leak & roof inspections"]}
      processSteps={["Perform comprehensive property walkthrough","Document issues and maintenance recommendations","Execute scheduled maintenance tasks","Seal gaps, clean gutters, and replace filters","Clean workspace completely","Provide detailed property health report"]}
      whyChooseUs={["Scheduled preventative care","Detailed inspection checklist included","Family-owned & personally responsible","Fully insured for your complete protection","Prevents costly future repairs","Same-week scheduling available"]}
      faqs={[{"q":"What is included in a property maintenance visit?","a":"Our standard visit includes seasonal checks, gutter clearing, weatherstripping inspection, filter replacements, smoke detector testing, and a visual walkthrough of seals, caulk, and roof lines to catch issues early."},{"q":"How often should I schedule property maintenance?","a":"We recommend scheduling preventative maintenance twice a year (spring and fall) or quarterly to protect your property from Florida's harsh sun, heat, and rain."},{"q":"Do you offer commercial property maintenance?","a":"Yes. We provide scheduled maintenance and general repairs for offices, retail spaces, and rental units."}]}
      relatedServices={[{"title":"Rental Turn Repairs","href":"/rental-turnover-repairs-orlando/"},{"title":"Drywall Repair","href":"/drywall-orlando/"},{"title":"TV Mounting","href":"/tv-mounting-orlando/"}]}
      startingPrice="Property Maintenance starts at $150"
      statsText="Fully Insured • Serving Orlando & Central Florida"
    />
  );
}
