import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Drywall Crack Repair in Broward County | Pembroke Pines, Fort Lauderdale - LUXHT Fix",
  description: "Professional drywall crack repair in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar. Fully Insured. Call today!",
  alternates: { canonical: 'https://fix.luxht.com/drywall-crack-repair-broward/' },
  openGraph: {
    title: "Drywall Crack Repair in Broward County | LUXHT Fix",
    description: "Professional drywall crack repair in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar.",
    url: 'https://fix.luxht.com/drywall-crack-repair-broward/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function DrywallCrackRepairMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Drywall Crack Repair"
      slug="drywall-crack-repair-broward"
      location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="Drywall Repair"
      parentSlug="drywall-broward"
      heroSubtitle="Professional crack repair for settling, foundation movement, and stress fractures."
      heroDescription="Same-week service available."
      introParagraph={"Cracks in your Broward County home's walls are more than cosmetic — they can signal settling, moisture intrusion, or structural stress common in the region's sandy soil and tropical climate. LUXHT Fix specializes in identifying the root cause of drywall cracks and delivering permanent, invisible repairs for homeowners across Pembroke Pines, Fort Lauderdale, Hollywood, and surrounding communities."}
      serviceDetails={["Hairline crack repair","Settlement crack repair","Corner bead crack repair","Stress crack repair around doors/windows","Ceiling crack repair","Joint tape failure repair"]}
      processSteps={["Inspect crack pattern to determine root cause","Clean and prepare crack area","Apply fiberglass mesh tape for reinforcement","Build up compound in thin, precise layers","Match existing wall texture seamlessly","Sand smooth and prepare for painting"]}
      whyChooseUs={["Crack repair specialists serving Broward County","Root cause analysis before repair","Fiberglass mesh reinforcement for permanence","Seamless texture matching guaranteed","Same-week service across Broward County","Fully insured and background-checked"]}
      faqs={[{"q":"Why do I have cracks in my Broward County home?","a":"Broward County's sandy soil, humidity, and occasional storm activity can cause settling and expansion that leads to drywall cracks. Older homes in Wilton Manors, Hollywood, and Fort Lauderdale are especially prone."},{"q":"How much does drywall crack repair cost in Broward County?","a":"Most crack repairs range from $120-$300 depending on length, location, and texture matching needs. Contact us for a photo-based quote."},{"q":"Can you prevent cracks from coming back?","a":"Yes. We use fiberglass mesh tape and flexible compound to create crack-resistant repairs that move with your home."},{"q":"Do you repair ceiling cracks too?","a":"Absolutely. Ceiling cracks are common in Broward County homes and we repair them with the same precision as wall cracks."}]}
      relatedServices={[{"title":"Drywall Repair","href":"/drywall-broward/"},{"title":"Drywall Hole Repair","href":"/drywall-hole-repair-broward/"},{"title":"Water Damage Drywall","href":"/water-damage-drywall-repair-broward/"},{"title":"Texture Matching","href":"/texture-matching-broward/"}]}
      startingPrice="Drywall Crack Repair starts at Crack repair starts at $120"
      statsText="Fully Insured • Serving Broward County"
    />
  );
}
