import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Texture Matching in Broward County | Pembroke Pines, Fort Lauderdale - LUXHT Fix",
  description: "Professional texture matching in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar. Fully Insured. Call today!",
  alternates: { canonical: 'https://fix.luxht.com/texture-matching-broward/' },
  openGraph: {
    title: "Texture Matching in Broward County | LUXHT Fix",
    description: "Professional texture matching in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar.",
    url: 'https://fix.luxht.com/texture-matching-broward/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function TextureMatchingMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Texture Matching"
      slug="texture-matching-broward"
      location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="Drywall Repair"
      parentSlug="drywall-broward"
      heroSubtitle="Invisible texture blending for repaired walls — orange peel, knockdown, and smooth."
      heroDescription="Perfect matching guaranteed."
      introParagraph={"A repair is only as good as its finish. LUXHT Fix provides expert texture matching for Broward County homeowners, ensuring every patch and repair blends invisibly with your existing walls. Whether your home in Wilton Manors has a smooth finish, your Pembroke Pines house has orange peel, or your Hollywood condo features knockdown texture, we match it perfectly."}
      serviceDetails={["Orange peel texture matching","Knockdown texture matching","Smooth finish blending","Skip trowel texture","Popcorn ceiling matching","Custom texture replication"]}
      processSteps={["Analyze existing wall texture pattern and depth","Prepare repair area with proper compound","Apply matching texture using specialized tools","Allow proper drying time","Fine-tune texture blend with surrounding area","Sand and prepare for painting"]}
      whyChooseUs={["Texture matching specialists in Broward County","All texture types: orange peel, knockdown, smooth","Professional-grade tools and materials","Invisible blending guaranteed","Serving our Broward service area","Fully insured and background-checked"]}
      faqs={[{"q":"Can you match any wall texture?","a":"Yes. We match orange peel, knockdown, smooth, skip trowel, and custom textures found in Broward County homes of all ages."},{"q":"How do you ensure a perfect match?","a":"We analyze your existing texture's pattern, depth, and spacing, then replicate it using the same tools and techniques. The result is an invisible blend."},{"q":"How much does texture matching cost?","a":"Texture matching is typically included in our drywall repair pricing. Standalone texture work starts at $150 per area."},{"q":"Do older Broward County homes have different textures?","a":"Yes. Homes in areas like Wilton Manors and Miramar often have unique textures from different decades. We have experience matching them all."}]}
      relatedServices={[{"title":"Drywall Repair","href":"/drywall-broward/"},{"title":"Drywall Hole Repair","href":"/drywall-hole-repair-broward/"},{"title":"Drywall Crack Repair","href":"/drywall-crack-repair-broward/"},{"title":"Water Damage Repair","href":"/water-damage-drywall-repair-broward/"}]}
      startingPrice="Texture Matching starts at Texture matching starts at $150"
      statsText="Fully Insured • Serving Broward County"
    />
  );
}
