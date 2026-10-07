import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Drywall Hole Repair in Broward County | Pembroke Pines, Fort Lauderdale - LUXHT Fix",
  description: "Professional drywall hole repair in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar. Fully Insured. Call today!",
  alternates: { canonical: 'https://fix.luxht.com/drywall-hole-repair-broward/' },
  openGraph: {
    title: "Drywall Hole Repair in Broward County | LUXHT Fix",
    description: "Professional drywall hole repair in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar.",
    url: 'https://fix.luxht.com/drywall-hole-repair-broward/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function DrywallHoleRepairMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Drywall Hole Repair"
      slug="drywall-hole-repair-broward"
      location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="Drywall Repair"
      parentSlug="drywall-broward"
      heroSubtitle="Fast, seamless hole repair for any size — from nail pops to large access cuts."
      heroDescription="Same-week service throughout Broward County."
      introParagraph={"Whether it's a doorknob punch-through in your Miramar condo or a plumbing access cut in your Pembroke Pines home, LUXHT Fix delivers invisible drywall hole repairs across Broward County. We handle everything from small nail holes to large openings with professional-grade materials and expert texture matching."}
      serviceDetails={["Small hole patching (nail pops, anchors)","Medium hole repair (fist/doorknob size)","Large hole repair (access cuts, damage)","Multi-hole repair projects","Ceiling hole repair","Texture matching after repair"]}
      processSteps={["Assess hole size and surrounding wall condition","Cut clean edges and install backing support","Apply patch and build up compound layers","Match existing texture precisely","Sand smooth and prepare for painting","Clean workspace completely"]}
      whyChooseUs={["Hole repair specialists across Broward County","All sizes: nail holes to large access cuts","Seamless texture matching guaranteed","Same-week service in Broward County","Clean execution with floor protection","Fully insured and background-checked"]}
      faqs={[{"q":"How much does drywall hole repair cost in Broward County?","a":"Pricing depends on hole size and quantity. Small holes start at $150, large access cuts from $250. Send us a photo for an instant quote."},{"q":"How long does hole repair take?","a":"Most single-hole repairs take 2-3 hours including texture matching and drying time."},{"q":"Can you match my existing wall texture?","a":"Yes. Texture matching is our specialty — orange peel, knockdown, smooth, and popcorn ceiling textures."},{"q":"Do you repair holes in condo walls?","a":"Yes. We serve condos throughout Miramar, Hollywood, Fort Lauderdale, and all of Broward County."}]}
      relatedServices={[{"title":"Drywall Repair","href":"/drywall-broward/"},{"title":"Drywall Crack Repair","href":"/drywall-crack-repair-broward/"},{"title":"Water Damage Drywall","href":"/water-damage-drywall-repair-broward/"},{"title":"Texture Matching","href":"/texture-matching-broward/"}]}
      startingPrice="Drywall Hole Repair starts at Hole repair starts at $150"
      statsText="Fully Insured • Serving Broward County"
    />
  );
}
