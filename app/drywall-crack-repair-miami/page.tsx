import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drywall Crack Repair in South Florida | Miami, Fort Lauderdale - LUXHT Fix',
  description: 'Professional drywall crack repair in South Florida. Serving Miami, Fort Lauderdale, Hollywood, Pembroke Pines & more. Fully Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/drywall-crack-repair-miami/' },
  openGraph: {
    title: 'Drywall Crack Repair in South Florida | LUXHT Fix',
    description: 'Professional drywall crack repair in South Florida. Serving Miami, Fort Lauderdale & surrounding areas.',
    url: 'https://fix.luxht.com/drywall-crack-repair-miami/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function DrywallCrackRepairMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Drywall Crack Repair"
      slug="drywall-crack-repair-miami"
      location="miami"
      neighborhoods={["Miami","Pembroke Pines","Cooper City","Aventura","Hallandale Beach","Miramar","Davie","Hollywood","Sunny Isles Beach","Fort Lauderdale","North Miami","Coral Gables","Doral","Miami Beach"]}
      parentCategory="Drywall Repair"
      parentSlug="drywall-miami"
      heroSubtitle="Professional crack repair for settling, foundation movement, and stress fractures."
      heroDescription="Same-week service available."
      introParagraph={`Cracks in your South Florida home's walls are more than cosmetic — they can signal settling, moisture intrusion, or structural stress common in the region's sandy soil and tropical climate. LUXHT Fix specializes in identifying the root cause of drywall cracks and delivering permanent, invisible repairs for homeowners across Miami, Fort Lauderdale, Hollywood, and surrounding communities.`}
      serviceDetails={["Hairline crack repair","Settlement crack repair","Corner bead crack repair","Stress crack repair around doors/windows","Ceiling crack repair","Joint tape failure repair"]}
      processSteps={["Inspect crack pattern to determine root cause","Clean and prepare crack area","Apply fiberglass mesh tape for reinforcement","Build up compound in thin, precise layers","Match existing wall texture seamlessly","Sand smooth and prepare for painting"]}
      whyChooseUs={["Crack repair specialists serving South Florida","Root cause analysis before repair","Fiberglass mesh reinforcement for permanence","Seamless texture matching guaranteed","Same-week service across Miami-Dade & Broward","Fully insured and background-checked"]}
      faqs={[{"q":"Why do I have cracks in my South Florida home?","a":"South Florida's sandy soil, humidity, and occasional storm activity can cause settling and expansion that leads to drywall cracks. Older homes in Coral Gables, Hollywood, and Miami are especially prone."},{"q":"How much does drywall crack repair cost in Miami?","a":"Most crack repairs range from $120-$300 depending on length, location, and texture matching needs. Contact us for a photo-based quote."},{"q":"Can you prevent cracks from coming back?","a":"Yes. We use fiberglass mesh tape and flexible compound to create crack-resistant repairs that move with your home."},{"q":"Do you repair ceiling cracks too?","a":"Absolutely. Ceiling cracks are common in South Florida homes and we repair them with the same precision as wall cracks."}]}
      relatedServices={[{"title":"Drywall Repair","href":"/drywall-miami/"},{"title":"Drywall Hole Repair","href":"/drywall-hole-repair-miami/"},{"title":"Water Damage Drywall","href":"/water-damage-drywall-repair-miami/"},{"title":"Texture Matching","href":"/texture-matching-miami/"}]}
      startingPrice="Drywall Crack Repair starts at Crack repair starts at $120"
      statsText="Fully Insured • Serving Miami-Dade & Broward"
    />
  );
}
