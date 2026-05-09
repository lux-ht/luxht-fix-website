import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flooring Installation South Florida | Miami, Fort Lauderdale - LUXHT Fix',
  description: 'Expert flooring installation in South Florida. Hardwood, laminate, vinyl, and tile. Serving Miami, Fort Lauderdale, Hollywood & more. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/flooring-installation-miami/' },
  openGraph: { title: 'Flooring Installation South Florida | LUXHT Fix', description: 'Professional flooring in South Florida. Hardwood, laminate, vinyl & tile.', url: 'https://fix.luxht.com/flooring-installation-miami/', type: 'website', siteName: 'LUXHT Fix' },
};

export default function FlooringMiamiPage() {
  return (
    <ServicePageTemplate serviceName="Flooring Installation" slug="flooring-installation-miami" location="miami"
      neighborhoods={['Miami','Pembroke Pines','Cooper City','Aventura','Hallandale Beach','Miramar','Davie','Hollywood','Sunny Isles Beach','Fort Lauderdale','North Miami','Coral Gables','Doral','Miami Beach']}
      parentCategory="Flooring" parentSlug="flooring-installation-miami"
      heroSubtitle="Hardwood, laminate, vinyl, and tile flooring installed with precision."
      heroDescription="Transform your South Florida home's foundation with professional results."
      introParagraph="South Florida's climate demands flooring that can handle humidity, moisture, and heavy foot traffic. LUXHT Fix installs hardwood, luxury vinyl plank, laminate, and tile flooring across Miami-Dade and Broward counties — from waterfront condos in Miami Beach to sprawling homes in Cooper City. We recommend moisture-resistant materials ideal for the tropical climate and ensure every installation includes proper subfloor preparation and acclimation."
      serviceDetails={['Hardwood flooring (solid and engineered)','Luxury Vinyl Plank (LVP) — ideal for South Florida humidity','Laminate flooring installation','Ceramic and porcelain tile','Wood-look tile for tropical durability','Floating floor systems']}
      processSteps={['Measure room dimensions and assess subfloor condition','Remove existing flooring if needed','Prepare and level subfloor for proper installation','Acclimate materials to South Florida temperature and humidity','Install flooring with proper spacing and alignment','Install trim, transitions, and finishing touches','Clean workspace and protect new floor']}
      whyChooseUs={['Flooring specialists with humidity-resistant expertise','All materials: hardwood, LVP, laminate, tile','Proper subfloor preparation for South Florida conditions','Warranty-compliant installation methods','Clean execution with minimal disruption','Licensed, insured, and background-checked']}
      faqs={[
        {q:'Which flooring is best for South Florida humidity?',a:'Luxury vinyl plank (LVP) and porcelain tile are our top recommendations for South Florida. Engineered hardwood also performs well. We\'ll recommend the best material for your specific space and lifestyle.'},
        {q:'How much does flooring installation cost in Miami?',a:'Professional installation starts at $3 per square foot for labor. Total cost depends on material type and square footage. Contact us for a personalized quote.'},
        {q:'Can you install flooring in a condo?',a:'Yes. We serve condos throughout South Florida with building-compliant installations. We handle HOA requirements and maintain clean, quiet work practices.'},
        {q:'How long does flooring installation take?',a:'Most single-room installations take 1-2 days. Whole-home projects typically require 3-5 days depending on square footage and material type.'}
      ]}
      relatedServices={[{title:'Bath Remodel',href:'/bath-remodel-miami/'},{title:'Kitchen Refacing',href:'/kitchen-refacing-miami/'},{title:'Drywall Repair',href:'/drywall-miami/'},{title:'Baseboard Installation',href:'/baseboard-installation-miami/'},{title:'Patio & Lanai Repair',href:'/patio-lanai-repair-miami/'}]}
      startingPrice="Professional installation starts at $3 per sq ft"
      statsText="Licensed • Insured • Humidity-Resistant Expertise"
    />
  );
}
