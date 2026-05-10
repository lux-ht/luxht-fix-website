import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Furniture Assembly South Florida | Miami, Fort Lauderdale - LUXHT Fix',
  description: 'Professional furniture assembly in South Florida. IKEA, Wayfair, Amazon & more. Serving Miami, Fort Lauderdale, Hollywood & surrounding areas.',
  alternates: { canonical: 'https://fix.luxht.com/furniture-assembly-miami/' },
  openGraph: { title: 'Furniture Assembly South Florida | LUXHT Fix', url: 'https://fix.luxht.com/furniture-assembly-miami/', type: 'website', siteName: 'LUXHT Fix' },
};

export default function FurnitureAssemblyMiamiPage() {
  return (
    <ServicePageTemplate serviceName="Furniture Assembly" slug="furniture-assembly-miami" location="miami"
      neighborhoods={['Miami','Pembroke Pines','Cooper City','Aventura','Hallandale Beach','Miramar','Davie','Hollywood','Sunny Isles Beach','Fort Lauderdale','North Miami','Coral Gables','Doral','Miami Beach']}
      parentCategory="Assembly" parentSlug="furniture-assembly-miami"
      heroSubtitle="Expert assembly of IKEA, Wayfair, Amazon, and all flat-pack furniture."
      heroDescription="Fast, stress-free assembly — we bring all the tools."
      introParagraph="Skip the frustration of flat-pack furniture assembly. LUXHT Fix provides fast, professional furniture assembly across South Florida — from IKEA desks in Doral to Wayfair bedroom sets in Pembroke Pines. We assemble everything correctly, securely, and quickly so you can enjoy your new furniture without the hassle."
      serviceDetails={['IKEA furniture assembly','Wayfair and Amazon furniture','Office desks and workstations','Bedroom sets and wardrobes','Shelving and storage units','Outdoor furniture assembly']}
      processSteps={['Confirm furniture items and inventory parts','Organize all hardware and components','Follow manufacturer specifications precisely','Assemble with professional tools for secure fit','Level and adjust for stability','Clean up all packaging and debris']}
      whyChooseUs={['All brands: IKEA, Wayfair, Amazon, and more','Fast assembly with professional tools','Furniture secured to wall when needed','Clean up of all packaging included','Same-day service available in most areas','Licensed, insured, and background-checked']}
      faqs={[
        {q:'How much does furniture assembly cost?',a:'Assembly starts at $75 per item. Multi-item discounts available. Pricing depends on furniture complexity.'},
        {q:'Do you assemble IKEA furniture?',a:'Yes. IKEA assembly is one of our most popular services. We handle PAX wardrobes, KALLAX shelving, MALM dressers, and all other IKEA products.'},
        {q:'How long does assembly take?',a:'Most single items take 30-90 minutes. Complex items like PAX wardrobes may take 2-3 hours.'},
        {q:'Do you serve condos and apartments?',a:'Yes. We assemble furniture in condos, apartments, and homes throughout South Florida.'}
      ]}
      relatedServices={[{title:'TV Mounting',href:'/tv-mounting-miami/'},{title:'Smart Home Installation',href:'/smart-home-installation-miami/'},{title:'Door, Lock & Trim',href:'/door-lock-trim-miami/'},{title:'Baseboard Installation',href:'/baseboard-installation-miami/'}]}
      startingPrice="Assembly starts at $75 per item"
      statsText="Licensed • Insured • All Brands"
      galleryImages={[
        { src: "/images/services/furniture-assembly/ikea-furniture.jpg", title: "IKEA Furniture", subtitle: "Expert Assembly" },
        { src: "/images/services/furniture-assembly/office-furniture.jpg", title: "Office Setup", subtitle: "Productive Workspaces" },
        { src: "/images/services/furniture-assembly/bedroom-sets.jpg", title: "Bedroom Suites", subtitle: "Rest Easy" },
        { src: "/images/services/furniture-assembly/dining-sets.jpg", title: "Dining Sets", subtitle: "Ready for Gathering" },
        { src: "/images/services/furniture-assembly/bookcases.jpg", title: "Bookcases & Storage", subtitle: "Organized Living" },
        { src: "/images/services/furniture-assembly/outdoor-patio.jpg", title: "Outdoor Patio", subtitle: "Weather-Ready" },
        { src: "/images/services/furniture-assembly/amazon-and-wayfair.jpg", title: "Online Retailers", subtitle: "Amazon & Wayfair" },
      ]}
    />
  );
}
