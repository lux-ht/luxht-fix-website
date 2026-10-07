import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Accent Walls & Custom Trim in Broward County | LUXHT Fix",
  description: "Professional accent walls & custom trim in Broward County. Shiplap, board & batten, wainscoting, and trim carpentry. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar. Fully Insured. Call today!",
  alternates: { canonical: 'https://fix.luxht.com/accent-walls-broward/' },
  openGraph: {
    title: "Accent Walls & Custom Trim in Broward County | LUXHT Fix",
    description: "Professional accent walls & custom trim in Broward County. Serving all of Broward County.",
    url: 'https://fix.luxht.com/accent-walls-broward/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function AccentWallsMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Accent Walls & Custom Trim"
      slug="accent-walls-broward"
      location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="Property Maintenance"
      parentSlug="services"
      heroSubtitle="Elegant accent walls and custom finish trim that add value and style."
      heroDescription="Shiplap, board & batten, wainscoting, and trim carpentry."
      introParagraph={"Add premium custom features to your Broward County home or condo. LUXHT Fix installs accent walls, shiplap, beadboard, and baseboard moulding across Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar. Our construction background ensures seamless joints, flush corners, and durable stud-mounted installations."}
      serviceDetails={["Shiplap wall installation","Board & batten accent walls","Wainscoting & beadboard paneling","Crown molding & baseboard upgrades","Custom closet & pantry shelving","Professional painting and finishing"]}
      processSteps={["Discuss style preferences and take exact measurements","Procure premium wood and moulding materials","Install panels/trim securely to studs","Caulk, patch nail holes, and sand smooth","Apply premium primer and double-coat paint","Clean up all sawdust and debris"]}
      whyChooseUs={["Custom precision craftsmanship","Durable stud-mounted installations","Complete setup — prep, paint, clean","Family-owned and operated","Fully insured for your protection","Boosts home resale value"]}
      faqs={[{"q":"How long does it take to install an accent wall?","a":"Most standard accent walls (shiplap or board & batten) are installed, caulked, painted, and finished in 1 to 2 days."},{"q":"Do you supply the paint and wood?","a":"Yes. We can handle all material procurement, including selecting the right wood, trim, and matching your paint colors."},{"q":"Can you install shelving inside closets?","a":"Absolutely. We build custom wood shelving and storage racks for closets, pantries, and garages."}]}
      relatedServices={[{"title":"Property Maintenance","href":"/property-maintenance-broward/"},{"title":"Commercial Maintenance","href":"/commercial-property-maintenance-broward/"},{"title":"Rental Turn Repairs","href":"/rental-turnover-repairs-broward/"},{"title":"Drywall Repair","href":"/drywall-broward/"},{"title":"TV Mounting","href":"/tv-mounting-broward/"}]}
      startingPrice="Accent Walls & Custom Trim starts at $250"
      statsText="Fully Insured • Serving Broward County"
    />
  );
}
