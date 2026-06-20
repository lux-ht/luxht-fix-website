import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accent Walls & Custom Trim in South Florida | LUXHT Fix',
  description: 'Professional accent walls & custom trim in South Florida. Shiplap, board & batten, wainscoting, and trim carpentry. Serving Miami, Fort Lauderdale, Hollywood, Pembroke Pines & surrounding areas. Fully Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/accent-walls-miami/' },
  openGraph: {
    title: 'Accent Walls & Custom Trim in South Florida | LUXHT Fix',
    description: 'Professional accent walls & custom trim in South Florida. Serving all of South Florida.',
    url: 'https://fix.luxht.com/accent-walls-miami/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function AccentWallsMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Accent Walls & Custom Trim"
      slug="accent-walls-miami"
      location="miami"
      neighborhoods={["Miami","Pembroke Pines","Cooper City","Aventura","Hallandale Beach","Miramar","Davie","Hollywood","Sunny Isles Beach","Fort Lauderdale","North Miami","Coral Gables","Doral","Miami Beach"]}
      parentCategory="Property Maintenance"
      parentSlug="services"
      heroSubtitle="Elegant accent walls and custom finish trim that add value and style."
      heroDescription="Shiplap, board & batten, wainscoting, and trim carpentry."
      introParagraph={`Add premium custom features to your South Florida home or condo. LUXHT Fix installs accent walls, shiplap, beadboard, and baseboard moulding across Miami, Aventura, Fort Lauderdale, and Coral Gables. Our construction background ensures seamless joints, flush corners, and durable stud-mounted installations.`}
      serviceDetails={["Shiplap wall installation","Board & batten accent walls","Wainscoting & beadboard paneling","Crown molding & baseboard upgrades","Custom closet & pantry shelving","Professional painting and finishing"]}
      processSteps={["Discuss style preferences and take exact measurements","Procure premium wood and moulding materials","Install panels/trim securely to studs","Caulk, patch nail holes, and sand smooth","Apply premium primer and double-coat paint","Clean up all sawdust and debris"]}
      whyChooseUs={["Custom precision craftsmanship","Durable stud-mounted installations","Complete setup — prep, paint, clean","Family-owned and operated","Fully insured for your protection","Boosts home resale value"]}
      faqs={[{"q":"How long does it take to install an accent wall?","a":"Most standard accent walls (shiplap or board & batten) are installed, caulked, painted, and finished in 1 to 2 days."},{"q":"Do you supply the paint and wood?","a":"Yes. We can handle all material procurement, including selecting the right wood, trim, and matching your paint colors."},{"q":"Can you install shelving inside closets?","a":"Absolutely. We build custom wood shelving and storage racks for closets, pantries, and garages."}]}
      relatedServices={[{"title":"Property Maintenance","href":"/property-maintenance-miami/"},{"title":"Commercial Maintenance","href":"/commercial-property-maintenance-miami/"},{"title":"Rental Turn Repairs","href":"/rental-turnover-repairs-miami/"},{"title":"Drywall Repair","href":"/drywall-miami/"},{"title":"TV Mounting","href":"/tv-mounting-miami/"}]}
      startingPrice="Accent Walls & Custom Trim starts at $250"
      statsText="Fully Insured • Serving Miami-Dade & Broward"
    />
  );
}
