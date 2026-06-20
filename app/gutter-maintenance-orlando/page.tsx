import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gutter Guard & Cleaning in Central Florida | LUXHT Fix',
  description: 'Professional gutter guard & cleaning in Central Florida. Complete gutter cleaning, flushing, and guard installation. Serving Orlando, Winter Park, Lake Nona, Windermere & surrounding areas. Fully Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/gutter-maintenance-orlando/' },
  openGraph: {
    title: 'Gutter Guard & Cleaning in Central Florida | LUXHT Fix',
    description: 'Professional gutter guard & cleaning in Central Florida. Serving all of Central Florida.',
    url: 'https://fix.luxht.com/gutter-maintenance-orlando/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function GutterMaintenanceOrlandoPage() {
  return (
    <ServicePageTemplate
      serviceName="Gutter Guard & Cleaning"
      slug="gutter-maintenance-orlando"
      location="orlando"
      neighborhoods={["Winter Park","Maitland","Altamonte Springs","Lake Nona","Dr. Phillips","Windermere","Ocoee","Apopka","Winter Garden","Lake Mary","Baldwin Park"]}
      parentCategory="Property Maintenance"
      parentSlug="services"
      heroSubtitle="Clear gutter clogs and install premium leaf guards to prevent water damage."
      heroDescription="Complete gutter cleaning, flushing, and guard installation."
      introParagraph={`Heavy summer downpours in Orlando can overwhelm clogged gutters, leading to water backing up under your roof shingles or pooling at your foundation. LUXHT Fix offers gutter cleaning and premium gutter guard installation in Orlando, Lake Nona, Winter Park, and surrounding areas, keeping your home safe from water damage.`}
      serviceDetails={["Complete gutter debris clearing","Downspout flushing & flow testing","Seamless gutter guard installation","Minor gutter leak & bracket repair","Eave & fascia visual inspection","Debris haul-away included"]}
      processSteps={["Clear all leaves, dirt, and debris from gutters","Flush downspouts to ensure free water flow","Inspect gutter slope and secure loose brackets","Install premium rust-proof gutter guards","Water-test the entire system","Clean up all fallen debris from ground"]}
      whyChooseUs={["Prevents foundation water damage","Premium rust-free aluminum guards","Includes safety inspections of fascia","Family-owned & run","Fully insured for safe execution","Saves you from climbing ladders"]}
      faqs={[{"q":"Do gutter guards really work?","a":"Yes, quality gutter guards block leaves, pine needles, and pests while letting water flow freely. They significantly reduce how often your gutters need cleaning."},{"q":"How much does gutter guard installation cost?","a":"Cleaning starts at $150. Guard installations depend on linear footage and guard style. Text us your roofline photos for a quick estimate."},{"q":"Do you repair leaking gutters?","a":"Yes. We seal seams, repair joints, and replace broken brackets during the cleaning process."}]}
      relatedServices={[{"title":"Property Maintenance","href":"/property-maintenance-orlando/"},{"title":"Commercial Maintenance","href":"/commercial-property-maintenance-orlando/"},{"title":"Rental Turn Repairs","href":"/rental-turnover-repairs-orlando/"},{"title":"Drywall Repair","href":"/drywall-orlando/"},{"title":"TV Mounting","href":"/tv-mounting-orlando/"}]}
      startingPrice="Gutter Guard & Cleaning starts at $150"
      statsText="Fully Insured • Serving Orlando & Central Florida"
    />
  );
}
