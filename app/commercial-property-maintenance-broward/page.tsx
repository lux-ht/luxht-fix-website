import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Commercial Property Maintenance in Broward County | LUXHT Fix",
  description: "Professional commercial property maintenance in Broward County. HOA and building management compliant maintenance. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar. Fully Insured. Call today!",
  alternates: { canonical: 'https://fix.luxht.com/commercial-property-maintenance-broward/' },
  openGraph: {
    title: "Commercial Property Maintenance in Broward County | LUXHT Fix",
    description: "Professional commercial property maintenance in Broward County. Serving all of Broward County.",
    url: 'https://fix.luxht.com/commercial-property-maintenance-broward/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function CommercialPropertyMaintenanceMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Commercial Property Maintenance"
      slug="commercial-property-maintenance-broward"
      location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="Property Maintenance"
      parentSlug="services"
      heroSubtitle="Reliable facility maintenance and general repairs for offices, retail, and commercial spaces."
      heroDescription="HOA and building management compliant maintenance."
      introParagraph={"Running a business in Broward County requires a well-maintained facility that remains safe and welcoming. LUXHT Fix provides professional commercial property maintenance and repair services across Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar. We carry the commercial liability insurance required by building managers and HOAs to ensure hassle-free execution."}
      serviceDetails={["Office repairs & drywall patching","Door closures & lock adjustments","Light fixture & bulb replacement","Cabinet hardware & trim repairs","Tenant turnover preparations","Scheduled facility walkthroughs"]}
      processSteps={["Assess facility needs and schedule work outside busy hours","Coordinate with building management and HOAs","Execute repairs with minimal disruption","Verify building code and safety compliance","Clean workspace completely","Provide itemized invoicing for accounting"]}
      whyChooseUs={["HOA and building management compliant","Fully insured for commercial properties","Family-owned — directly responsible","Scheduled or on-call repairs","Minimal business disruption","Professional, clean technicians"]}
      faqs={[{"q":"Do you work after business hours?","a":"Yes. We can schedule commercial maintenance and repairs during off-hours (evenings or weekends) to minimize disruption to your staff and clients."},{"q":"Are you insured for commercial work?","a":"Yes. LUXHT Fix carries comprehensive liability insurance and meets building/HOA requirements for commercial and condo work."},{"q":"What commercial spaces do you serve?","a":"We serve offices, retail stores, gyms, medical clinics, and rental properties throughout the metro area."}]}
      relatedServices={[{"title":"Property Maintenance","href":"/property-maintenance-broward/"},{"title":"Rental Turn Repairs","href":"/rental-turnover-repairs-broward/"},{"title":"Drywall Repair","href":"/drywall-broward/"},{"title":"TV Mounting","href":"/tv-mounting-broward/"}]}
      startingPrice="Commercial Property Maintenance starts at $150"
      statsText="Fully Insured • Serving Broward County"
    />
  );
}
