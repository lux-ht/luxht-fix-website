import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Texture Matching in South Florida | Miami, Fort Lauderdale - LUXHT Fix',
  description: 'Professional texture matching in South Florida. Serving Miami, Fort Lauderdale, Hollywood, Pembroke Pines & more. Licensed & Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/texture-matching-miami/' },
  openGraph: {
    title: 'Texture Matching in South Florida | LUXHT Fix',
    description: 'Professional texture matching in South Florida. Serving Miami, Fort Lauderdale & surrounding areas.',
    url: 'https://fix.luxht.com/texture-matching-miami/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function TextureMatchingMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Texture Matching"
      slug="texture-matching-miami"
      location="miami"
      neighborhoods={["Miami","Pembroke Pines","Cooper City","Aventura","Hallandale Beach","Miramar","Davie","Hollywood","Sunny Isles Beach","Fort Lauderdale","North Miami","Coral Gables","Doral","Miami Beach"]}
      parentCategory="Drywall Repair"
      parentSlug="drywall-miami"
      heroSubtitle="Invisible texture blending for repaired walls — orange peel, knockdown, and smooth."
      heroDescription="Perfect matching guaranteed."
      introParagraph={`A repair is only as good as its finish. LUXHT Fix provides expert texture matching for South Florida homeowners, ensuring every patch and repair blends invisibly with your existing walls. Whether your home in Coral Gables has a smooth finish, your Pembroke Pines house has orange peel, or your Hollywood condo features knockdown texture, we match it perfectly.`}
      serviceDetails={["Orange peel texture matching","Knockdown texture matching","Smooth finish blending","Skip trowel texture","Popcorn ceiling matching","Custom texture replication"]}
      processSteps={["Analyze existing wall texture pattern and depth","Prepare repair area with proper compound","Apply matching texture using specialized tools","Allow proper drying time","Fine-tune texture blend with surrounding area","Sand and prepare for painting"]}
      whyChooseUs={["Texture matching specialists in South Florida","All texture types: orange peel, knockdown, smooth","Professional-grade tools and materials","Invisible blending guaranteed","Serving Miami-Dade and Broward counties","Licensed, insured, and background-checked"]}
      faqs={[{"q":"Can you match any wall texture?","a":"Yes. We match orange peel, knockdown, smooth, skip trowel, and custom textures found in South Florida homes of all ages."},{"q":"How do you ensure a perfect match?","a":"We analyze your existing texture's pattern, depth, and spacing, then replicate it using the same tools and techniques. The result is an invisible blend."},{"q":"How much does texture matching cost?","a":"Texture matching is typically included in our drywall repair pricing. Standalone texture work starts at $150 per area."},{"q":"Do older South Florida homes have different textures?","a":"Yes. Homes in areas like Coral Gables and North Miami often have unique textures from different decades. We have experience matching them all."}]}
      relatedServices={[{"title":"Drywall Repair","href":"/drywall-miami/"},{"title":"Drywall Hole Repair","href":"/drywall-hole-repair-miami/"},{"title":"Drywall Crack Repair","href":"/drywall-crack-repair-miami/"},{"title":"Water Damage Repair","href":"/water-damage-drywall-repair-miami/"}]}
      startingPrice="Texture Matching starts at Texture matching starts at $150"
      statsText="Licensed • Insured • Serving Miami-Dade & Broward"
    />
  );
}
