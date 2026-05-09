import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drywall Hole Repair in South Florida | Miami, Fort Lauderdale - LUXHT Fix',
  description: 'Professional drywall hole repair in South Florida. Serving Miami, Fort Lauderdale, Hollywood, Pembroke Pines & more. Licensed & Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/drywall-hole-repair-miami/' },
  openGraph: {
    title: 'Drywall Hole Repair in South Florida | LUXHT Fix',
    description: 'Professional drywall hole repair in South Florida. Serving Miami, Fort Lauderdale & surrounding areas.',
    url: 'https://fix.luxht.com/drywall-hole-repair-miami/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function DrywallHoleRepairMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Drywall Hole Repair"
      slug="drywall-hole-repair-miami"
      location="miami"
      neighborhoods={["Miami","Pembroke Pines","Cooper City","Aventura","Hallandale Beach","Miramar","Davie","Hollywood","Sunny Isles Beach","Fort Lauderdale","North Miami","Coral Gables","Doral","Miami Beach"]}
      parentCategory="Drywall Repair"
      parentSlug="drywall-miami"
      heroSubtitle="Fast, seamless hole repair for any size — from nail pops to large access cuts."
      heroDescription="Same-week service throughout South Florida."
      introParagraph={`Whether it's a doorknob punch-through in your Aventura condo or a plumbing access cut in your Pembroke Pines home, LUXHT Fix delivers invisible drywall hole repairs across South Florida. We handle everything from small nail holes to large openings with professional-grade materials and expert texture matching.`}
      serviceDetails={["Small hole patching (nail pops, anchors)","Medium hole repair (fist/doorknob size)","Large hole repair (access cuts, damage)","Multi-hole repair projects","Ceiling hole repair","Texture matching after repair"]}
      processSteps={["Assess hole size and surrounding wall condition","Cut clean edges and install backing support","Apply patch and build up compound layers","Match existing texture precisely","Sand smooth and prepare for painting","Clean workspace completely"]}
      whyChooseUs={["Hole repair specialists across South Florida","All sizes: nail holes to large access cuts","Seamless texture matching guaranteed","Same-week service in Miami-Dade & Broward","Clean execution with floor protection","Licensed, insured, and background-checked"]}
      faqs={[{"q":"How much does drywall hole repair cost in Miami?","a":"Pricing depends on hole size and quantity. Small holes start at $150, large access cuts from $250. Send us a photo for an instant quote."},{"q":"How long does hole repair take?","a":"Most single-hole repairs take 2-3 hours including texture matching and drying time."},{"q":"Can you match my existing wall texture?","a":"Yes. Texture matching is our specialty — orange peel, knockdown, smooth, and popcorn ceiling textures."},{"q":"Do you repair holes in condo walls?","a":"Yes. We serve condos throughout Aventura, Sunny Isles Beach, Miami Beach, and all of South Florida."}]}
      relatedServices={[{"title":"Drywall Repair","href":"/drywall-miami/"},{"title":"Drywall Crack Repair","href":"/drywall-crack-repair-miami/"},{"title":"Water Damage Drywall","href":"/water-damage-drywall-repair-miami/"},{"title":"Texture Matching","href":"/texture-matching-miami/"}]}
      startingPrice="Drywall Hole Repair starts at Hole repair starts at $150"
      statsText="Licensed • Insured • Serving Miami-Dade & Broward"
    />
  );
}
