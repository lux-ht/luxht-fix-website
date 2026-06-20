import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gutter Guard & Cleaning in South Florida | LUXHT Fix',
  description: 'Professional gutter guard & cleaning in South Florida. Complete gutter cleaning, flushing, and guard installation. Serving Miami, Fort Lauderdale, Hollywood, Pembroke Pines & surrounding areas. Fully Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/gutter-maintenance-miami/' },
  openGraph: {
    title: 'Gutter Guard & Cleaning in South Florida | LUXHT Fix',
    description: 'Professional gutter guard & cleaning in South Florida. Serving all of South Florida.',
    url: 'https://fix.luxht.com/gutter-maintenance-miami/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function GutterMaintenanceMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Gutter Guard & Cleaning"
      slug="gutter-maintenance-miami"
      location="miami"
      neighborhoods={["Miami","Pembroke Pines","Cooper City","Aventura","Hallandale Beach","Miramar","Davie","Hollywood","Sunny Isles Beach","Fort Lauderdale","North Miami","Coral Gables","Doral","Miami Beach"]}
      parentCategory="Property Maintenance"
      parentSlug="services"
      heroSubtitle="Clear gutter clogs and install premium leaf guards to prevent water damage."
      heroDescription="Complete gutter cleaning, flushing, and guard installation."
      introParagraph={`Protect your South Florida home or condo from heavy tropical rains. LUXHT Fix provides professional gutter clearing, downspout flushing, and gutter guard installation throughout Miami, Fort Lauderdale, and Hollywood. We install rust-proof guards designed to handle high-volume rainfall and keep debris out.`}
      serviceDetails={["Complete gutter debris clearing","Downspout flushing & flow testing","Seamless gutter guard installation","Minor gutter leak & bracket repair","Eave & fascia visual inspection","Debris haul-away included"]}
      processSteps={["Clear all leaves, dirt, and debris from gutters","Flush downspouts to ensure free water flow","Inspect gutter slope and secure loose brackets","Install premium rust-proof gutter guards","Water-test the entire system","Clean up all fallen debris from ground"]}
      whyChooseUs={["Prevents foundation water damage","Premium rust-free aluminum guards","Includes safety inspections of fascia","Family-owned & run","Fully insured for safe execution","Saves you from climbing ladders"]}
      faqs={[{"q":"Do gutter guards really work?","a":"Yes, quality gutter guards block leaves, pine needles, and pests while letting water flow freely. They significantly reduce how often your gutters need cleaning."},{"q":"How much does gutter guard installation cost?","a":"Cleaning starts at $150. Guard installations depend on linear footage and guard style. Text us your roofline photos for a quick estimate."},{"q":"Do you repair leaking gutters?","a":"Yes. We seal seams, repair joints, and replace broken brackets during the cleaning process."}]}
      relatedServices={[{"title":"Property Maintenance","href":"/property-maintenance-miami/"},{"title":"Commercial Maintenance","href":"/commercial-property-maintenance-miami/"},{"title":"Rental Turn Repairs","href":"/rental-turnover-repairs-miami/"},{"title":"Drywall Repair","href":"/drywall-miami/"},{"title":"TV Mounting","href":"/tv-mounting-miami/"}]}
      startingPrice="Gutter Guard & Cleaning starts at $150"
      statsText="Fully Insured • Serving Miami-Dade & Broward"
    />
  );
}
