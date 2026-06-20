import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Property Maintenance in South Florida | LUXHT Fix',
  description: 'Professional commercial property maintenance in South Florida. HOA and building management compliant maintenance. Serving Miami, Fort Lauderdale, Hollywood, Pembroke Pines & surrounding areas. Fully Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/commercial-property-maintenance-miami/' },
  openGraph: {
    title: 'Commercial Property Maintenance in South Florida | LUXHT Fix',
    description: 'Professional commercial property maintenance in South Florida. Serving all of South Florida.',
    url: 'https://fix.luxht.com/commercial-property-maintenance-miami/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function CommercialPropertyMaintenanceMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Commercial Property Maintenance"
      slug="commercial-property-maintenance-miami"
      location="miami"
      neighborhoods={["Miami","Pembroke Pines","Cooper City","Aventura","Hallandale Beach","Miramar","Davie","Hollywood","Sunny Isles Beach","Fort Lauderdale","North Miami","Coral Gables","Doral","Miami Beach"]}
      parentCategory="Property Maintenance"
      parentSlug="services"
      heroSubtitle="Reliable facility maintenance and general repairs for offices, retail, and commercial spaces."
      heroDescription="HOA and building management compliant maintenance."
      introParagraph={`Running a business in South Florida requires a well-maintained facility that remains safe and welcoming. LUXHT Fix provides professional commercial property maintenance and repair services across Miami, Fort Lauderdale, Doral, and Aventura. We carry the commercial liability insurance required by building managers and HOAs to ensure hassle-free execution.`}
      serviceDetails={["Office repairs & drywall patching","Door closures & lock adjustments","Light fixture & bulb replacement","Cabinet hardware & trim repairs","Tenant turnover preparations","Scheduled facility walkthroughs"]}
      processSteps={["Assess facility needs and schedule work outside busy hours","Coordinate with building management and HOAs","Execute repairs with minimal disruption","Verify building code and safety compliance","Clean workspace completely","Provide itemized invoicing for accounting"]}
      whyChooseUs={["HOA and building management compliant","Fully insured for commercial properties","Family-owned — directly responsible","Scheduled or on-call repairs","Minimal business disruption","Professional, clean technicians"]}
      faqs={[{"q":"Do you work after business hours?","a":"Yes. We can schedule commercial maintenance and repairs during off-hours (evenings or weekends) to minimize disruption to your staff and clients."},{"q":"Are you insured for commercial work?","a":"Yes. LUXHT Fix carries comprehensive liability insurance and meets building/HOA requirements for commercial and condo work."},{"q":"What commercial spaces do you serve?","a":"We serve offices, retail stores, gyms, medical clinics, and rental properties throughout the metro area."}]}
      relatedServices={[{"title":"Property Maintenance","href":"/property-maintenance-miami/"},{"title":"Rental Turn Repairs","href":"/rental-turnover-repairs-miami/"},{"title":"Drywall Repair","href":"/drywall-miami/"},{"title":"TV Mounting","href":"/tv-mounting-miami/"}]}
      startingPrice="Commercial Property Maintenance starts at $150"
      statsText="Fully Insured • Serving Miami-Dade & Broward"
    />
  );
}
