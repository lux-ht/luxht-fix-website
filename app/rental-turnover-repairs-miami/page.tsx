import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rental Turnover Repairs in South Florida | LUXHT Fix',
  description: 'Professional rental turnover repairs in South Florida. Reduce vacancy times with fast, single-visit turnover repairs. Serving Miami, Fort Lauderdale, Hollywood, Pembroke Pines & surrounding areas. Fully Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/rental-turnover-repairs-miami/' },
  openGraph: {
    title: 'Rental Turnover Repairs in South Florida | LUXHT Fix',
    description: 'Professional rental turnover repairs in South Florida. Serving all of South Florida.',
    url: 'https://fix.luxht.com/rental-turnover-repairs-miami/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function RentalTurnoverRepairsMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Rental Turnover Repairs"
      slug="rental-turnover-repairs-miami"
      location="miami"
      neighborhoods={["Miami","Pembroke Pines","Cooper City","Aventura","Hallandale Beach","Miramar","Davie","Hollywood","Sunny Isles Beach","Fort Lauderdale","North Miami","Coral Gables","Doral","Miami Beach"]}
      parentCategory="Property Maintenance"
      parentSlug="services"
      heroSubtitle="Fast turn repairs for landlords and property managers to prepare rentals for new tenants."
      heroDescription="Reduce vacancy times with fast, single-visit turnover repairs."
      introParagraph={`Minimize vacancy periods for your South Florida rental properties. LUXHT Fix offers fast, reliable tenant turn and move-out repair services across Miami-Dade and Broward counties. We handle everything from repairing drywall holes in Sunny Isles Beach condos to replacing door hardware in Pembroke Pines houses.`}
      serviceDetails={["Drywall patch & texture matching","Interior paint touch-ups","Lock rekeying & hardware replacement","Cabinet drawer slide & door adjustment","Blinds & window treatment installation","Trash removal & final cleanup"]}
      processSteps={["Conduct move-out damage assessment","Provide detailed itemized estimate of repairs","Perform rapid repairs in a single visit","Address safety items (smoke alarms, railings)","Clean property completely","Provide digital before & after photos"]}
      whyChooseUs={["Fast turnaround times","Comprehensive single-visit service","Direct communication — family-owned","Detailed photo documentation","Fully insured for your protection","Reduces vacancy time"]}
      faqs={[{"q":"How fast can you complete a rental turn?","a":"Most standard rental turnover repairs are completed in 1-2 days, helping you reduce vacancy time between tenants."},{"q":"Do you work directly with property managers?","a":"Yes. We work closely with property managers, landlords, and real estate agents, providing detailed invoicing and photo updates."},{"q":"Do you handle trash removal?","a":"We can haul away minor debris and left-behind items as part of the turnover repair service."}]}
      relatedServices={[{"title":"Property Maintenance","href":"/property-maintenance-miami/"},{"title":"Commercial Maintenance","href":"/commercial-property-maintenance-miami/"},{"title":"Drywall Repair","href":"/drywall-miami/"},{"title":"TV Mounting","href":"/tv-mounting-miami/"}]}
      startingPrice="Rental Turnover Repairs starts at $200"
      statsText="Fully Insured • Serving Miami-Dade & Broward"
    />
  );
}
