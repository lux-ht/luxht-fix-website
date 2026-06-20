import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rental Turnover Repairs in Central Florida | LUXHT Fix',
  description: 'Professional rental turnover repairs in Central Florida. Reduce vacancy times with fast, single-visit turnover repairs. Serving Orlando, Winter Park, Lake Nona, Windermere & surrounding areas. Fully Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/rental-turnover-repairs-orlando/' },
  openGraph: {
    title: 'Rental Turnover Repairs in Central Florida | LUXHT Fix',
    description: 'Professional rental turnover repairs in Central Florida. Serving all of Central Florida.',
    url: 'https://fix.luxht.com/rental-turnover-repairs-orlando/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function RentalTurnoverRepairsOrlandoPage() {
  return (
    <ServicePageTemplate
      serviceName="Rental Turnover Repairs"
      slug="rental-turnover-repairs-orlando"
      location="orlando"
      neighborhoods={["Winter Park","Maitland","Altamonte Springs","Lake Nona","Dr. Phillips","Windermere","Ocoee","Apopka","Winter Garden","Lake Mary","Baldwin Park"]}
      parentCategory="Property Maintenance"
      parentSlug="services"
      heroSubtitle="Fast turn repairs for landlords and property managers to prepare rentals for new tenants."
      heroDescription="Reduce vacancy times with fast, single-visit turnover repairs."
      introParagraph={`Every day a rental property sits vacant costs you money. LUXHT Fix provides rapid, comprehensive rental turnover repair services for landlords, property managers, and Realtors in Orlando, Winter Park, Lake Nona, and surrounding areas. We address drywall damage, paint touch-ups, locks, and hardware adjustments in a single visit.`}
      serviceDetails={["Drywall patch & texture matching","Interior paint touch-ups","Lock rekeying & hardware replacement","Cabinet drawer slide & door adjustment","Blinds & window treatment installation","Trash removal & final cleanup"]}
      processSteps={["Conduct move-out damage assessment","Provide detailed itemized estimate of repairs","Perform rapid repairs in a single visit","Address safety items (smoke alarms, railings)","Clean property completely","Provide digital before & after photos"]}
      whyChooseUs={["Fast turnaround times","Comprehensive single-visit service","Direct communication — family-owned","Detailed photo documentation","Fully insured for your protection","Reduces vacancy time"]}
      faqs={[{"q":"How fast can you complete a rental turn?","a":"Most standard rental turnover repairs are completed in 1-2 days, helping you reduce vacancy time between tenants."},{"q":"Do you work directly with property managers?","a":"Yes. We work closely with property managers, landlords, and real estate agents, providing detailed invoicing and photo updates."},{"q":"Do you handle trash removal?","a":"We can haul away minor debris and left-behind items as part of the turnover repair service."}]}
      relatedServices={[{"title":"Property Maintenance","href":"/property-maintenance-orlando/"},{"title":"Commercial Maintenance","href":"/commercial-property-maintenance-orlando/"},{"title":"Drywall Repair","href":"/drywall-orlando/"},{"title":"TV Mounting","href":"/tv-mounting-orlando/"}]}
      startingPrice="Rental Turnover Repairs starts at $200"
      statsText="Fully Insured • Serving Orlando & Central Florida"
    />
  );
}
