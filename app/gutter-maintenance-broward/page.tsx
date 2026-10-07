import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Gutter Guard & Cleaning in Broward County | LUXHT Fix",
  description: "Professional gutter guard & cleaning in Broward County. Complete gutter cleaning, flushing, and guard installation. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar. Fully Insured. Call today!",
  alternates: { canonical: 'https://fix.luxht.com/gutter-maintenance-broward/' },
  openGraph: {
    title: "Gutter Guard & Cleaning in Broward County | LUXHT Fix",
    description: "Professional gutter guard & cleaning in Broward County. Serving all of Broward County.",
    url: 'https://fix.luxht.com/gutter-maintenance-broward/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function GutterMaintenanceMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Gutter Guard & Cleaning"
      slug="gutter-maintenance-broward"
      location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="Property Maintenance"
      parentSlug="services"
      heroSubtitle="Clear gutter clogs and install premium leaf guards to prevent water damage."
      heroDescription="Complete gutter cleaning, flushing, and guard installation."
      introParagraph={"Protect your Broward County home or condo from heavy tropical rains. LUXHT Fix provides professional gutter clearing, downspout flushing, and gutter guard installation throughout Pembroke Pines, Fort Lauderdale, and Hollywood. We install rust-proof guards designed to handle high-volume rainfall and keep debris out."}
      serviceDetails={["Complete gutter debris clearing","Downspout flushing & flow testing","Seamless gutter guard installation","Minor gutter leak & bracket repair","Eave & fascia visual inspection","Debris haul-away included"]}
      processSteps={["Clear all leaves, dirt, and debris from gutters","Flush downspouts to ensure free water flow","Inspect gutter slope and secure loose brackets","Install premium rust-proof gutter guards","Water-test the entire system","Clean up all fallen debris from ground"]}
      whyChooseUs={["Prevents foundation water damage","Premium rust-free aluminum guards","Includes safety inspections of fascia","Family-owned & run","Fully insured for safe execution","Saves you from climbing ladders"]}
      faqs={[{"q":"Do gutter guards really work?","a":"Yes, quality gutter guards block leaves, pine needles, and pests while letting water flow freely. They significantly reduce how often your gutters need cleaning."},{"q":"How much does gutter guard installation cost?","a":"Cleaning starts at $150. Guard installations depend on linear footage and guard style. Text us your roofline photos for a quick estimate."},{"q":"Do you repair leaking gutters?","a":"Yes. We seal seams, repair joints, and replace broken brackets during the cleaning process."}]}
      relatedServices={[{"title":"Property Maintenance","href":"/property-maintenance-broward/"},{"title":"Commercial Maintenance","href":"/commercial-property-maintenance-broward/"},{"title":"Rental Turn Repairs","href":"/rental-turnover-repairs-broward/"},{"title":"Drywall Repair","href":"/drywall-broward/"},{"title":"TV Mounting","href":"/tv-mounting-broward/"}]}
      startingPrice="Gutter Guard & Cleaning starts at $150"
      statsText="Fully Insured • Serving Broward County"
    />
  );
}
