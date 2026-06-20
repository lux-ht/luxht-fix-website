import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accent Walls & Custom Trim in Central Florida | LUXHT Fix',
  description: 'Professional accent walls & custom trim in Central Florida. Shiplap, board & batten, wainscoting, and trim carpentry. Serving Orlando, Winter Park, Lake Nona, Windermere & surrounding areas. Fully Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/accent-walls-orlando/' },
  openGraph: {
    title: 'Accent Walls & Custom Trim in Central Florida | LUXHT Fix',
    description: 'Professional accent walls & custom trim in Central Florida. Serving all of Central Florida.',
    url: 'https://fix.luxht.com/accent-walls-orlando/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function AccentWallsOrlandoPage() {
  return (
    <ServicePageTemplate
      serviceName="Accent Walls & Custom Trim"
      slug="accent-walls-orlando"
      location="orlando"
      neighborhoods={["Winter Park","Maitland","Altamonte Springs","Lake Nona","Dr. Phillips","Windermere","Ocoee","Apopka","Winter Garden","Lake Mary","Baldwin Park"]}
      parentCategory="Property Maintenance"
      parentSlug="services"
      heroSubtitle="Elegant accent walls and custom finish trim that add value and style."
      heroDescription="Shiplap, board & batten, wainscoting, and trim carpentry."
      introParagraph={`Enhance your Central Florida home's character with custom wood carpentry. LUXHT Fix designs and installs board and batten, shiplap, wainscoting, and decorative moulding for homeowners in Orlando, Winter Park, Lake Nona, and Baldwin Park. We handle everything from precision stud-mounting to professional paint finishing.`}
      serviceDetails={["Shiplap wall installation","Board & batten accent walls","Wainscoting & beadboard paneling","Crown molding & baseboard upgrades","Custom closet & pantry shelving","Professional painting and finishing"]}
      processSteps={["Discuss style preferences and take exact measurements","Procure premium wood and moulding materials","Install panels/trim securely to studs","Caulk, patch nail holes, and sand smooth","Apply premium primer and double-coat paint","Clean up all sawdust and debris"]}
      whyChooseUs={["Custom precision craftsmanship","Durable stud-mounted installations","Complete setup — prep, paint, clean","Family-owned and operated","Fully insured for your protection","Boosts home resale value"]}
      faqs={[{"q":"How long does it take to install an accent wall?","a":"Most standard accent walls (shiplap or board & batten) are installed, caulked, painted, and finished in 1 to 2 days."},{"q":"Do you supply the paint and wood?","a":"Yes. We can handle all material procurement, including selecting the right wood, trim, and matching your paint colors."},{"q":"Can you install shelving inside closets?","a":"Absolutely. We build custom wood shelving and storage racks for closets, pantries, and garages."}]}
      relatedServices={[{"title":"Property Maintenance","href":"/property-maintenance-orlando/"},{"title":"Commercial Maintenance","href":"/commercial-property-maintenance-orlando/"},{"title":"Rental Turn Repairs","href":"/rental-turnover-repairs-orlando/"},{"title":"Drywall Repair","href":"/drywall-orlando/"},{"title":"TV Mounting","href":"/tv-mounting-orlando/"}]}
      startingPrice="Accent Walls & Custom Trim starts at $250"
      statsText="Fully Insured • Serving Orlando & Central Florida"
    />
  );
}
