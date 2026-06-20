import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Property Maintenance in Central Florida | LUXHT Fix',
  description: 'Professional commercial property maintenance in Central Florida. HOA and building management compliant maintenance. Serving Orlando, Winter Park, Lake Nona, Windermere & surrounding areas. Fully Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/commercial-property-maintenance-orlando/' },
  openGraph: {
    title: 'Commercial Property Maintenance in Central Florida | LUXHT Fix',
    description: 'Professional commercial property maintenance in Central Florida. Serving all of Central Florida.',
    url: 'https://fix.luxht.com/commercial-property-maintenance-orlando/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function CommercialPropertyMaintenanceOrlandoPage() {
  return (
    <ServicePageTemplate
      serviceName="Commercial Property Maintenance"
      slug="commercial-property-maintenance-orlando"
      location="orlando"
      neighborhoods={["Winter Park","Maitland","Altamonte Springs","Lake Nona","Dr. Phillips","Windermere","Ocoee","Apopka","Winter Garden","Lake Mary","Baldwin Park"]}
      parentCategory="Property Maintenance"
      parentSlug="services"
      heroSubtitle="Reliable facility maintenance and general repairs for offices, retail, and commercial spaces."
      heroDescription="HOA and building management compliant maintenance."
      introParagraph={`LUXHT Fix delivers high-quality commercial property maintenance and facility repairs for businesses, offices, retail spaces, and clinics throughout Orlando and Central Florida. We understand that your facility represents your brand, which is why we handle drywall repairs, carpentry, door alignments, and light installations with speed, precision, and complete professionalism.`}
      serviceDetails={["Office repairs & drywall patching","Door closures & lock adjustments","Light fixture & bulb replacement","Cabinet hardware & trim repairs","Tenant turnover preparations","Scheduled facility walkthroughs"]}
      processSteps={["Assess facility needs and schedule work outside busy hours","Coordinate with building management and HOAs","Execute repairs with minimal disruption","Verify building code and safety compliance","Clean workspace completely","Provide itemized invoicing for accounting"]}
      whyChooseUs={["HOA and building management compliant","Fully insured for commercial properties","Family-owned — directly responsible","Scheduled or on-call repairs","Minimal business disruption","Professional, clean technicians"]}
      faqs={[{"q":"Do you work after business hours?","a":"Yes. We can schedule commercial maintenance and repairs during off-hours (evenings or weekends) to minimize disruption to your staff and clients."},{"q":"Are you insured for commercial work?","a":"Yes. LUXHT Fix carries comprehensive liability insurance and meets building/HOA requirements for commercial and condo work."},{"q":"What commercial spaces do you serve?","a":"We serve offices, retail stores, gyms, medical clinics, and rental properties throughout the metro area."}]}
      relatedServices={[{"title":"Property Maintenance","href":"/property-maintenance-orlando/"},{"title":"Rental Turn Repairs","href":"/rental-turnover-repairs-orlando/"},{"title":"Drywall Repair","href":"/drywall-orlando/"},{"title":"TV Mounting","href":"/tv-mounting-orlando/"}]}
      startingPrice="Commercial Property Maintenance starts at $150"
      statsText="Fully Insured • Serving Orlando & Central Florida"
    />
  );
}
