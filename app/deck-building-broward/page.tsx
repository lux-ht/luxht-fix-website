import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Deck Building Broward County | Pembroke Pines, Fort Lauderdale - LUXHT Fix",
  description: "Professional deck building in Broward County. Custom decks, patios, and outdoor living spaces. Serving Pembroke Pines, Fort Lauderdale and our other service cities.",
  alternates: { canonical: 'https://fix.luxht.com/deck-building-broward/' },
  openGraph: { title: "Deck Building Broward County | LUXHT Fix", url: 'https://fix.luxht.com/deck-building-broward/', type: 'website', siteName: 'LUXHT Fix' },
};

export default function DeckBuildingMiamiPage() {
  return (
    <ServicePageTemplate serviceName="Deck Building" slug="deck-building-broward" location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="Deck & Outdoor" parentSlug="deck-building-broward"
      heroSubtitle="Custom decks and outdoor living spaces designed for Broward County's tropical lifestyle."
      heroDescription="Weather-resistant materials built to withstand sun, rain, and humidity."
      introParagraph="Broward County's year-round outdoor lifestyle makes a quality deck essential. LUXHT Fix builds custom decks across our Broward service area using weather-resistant composite and tropical hardwood materials designed to withstand the region's intense sun, rain, and humidity. From elevated pool decks in Pembroke Pines to rooftop terraces in Fort Lauderdale, we design and build outdoor spaces that last."
      serviceDetails={['Custom deck design and construction','Composite decking (Trex, TimberTech)','Tropical hardwood options','Pool deck construction','Elevated and multi-level decks','Railing and stair installation']}
      processSteps={['Free consultation and design discussion','Create detailed plans with material selections','Obtain necessary permits','Prepare site and install foundation','Build deck structure and framing','Install decking, rails, and stairs','Final inspection and walkthrough']}
      whyChooseUs={["Deck specialists for Broward County climate",'Hurricane-rated construction methods','Weather-resistant composite materials','Custom designs for your outdoor vision','Permit handling included','Fully insured and background-checked']}
      faqs={[
        {q:"What deck material is best for Broward County?",a:'Composite decking (Trex, TimberTech) is our top recommendation — it resists moisture, UV damage, and termites. Tropical hardwoods like Ipe are also excellent choices.'},
        {q:"How much does a deck cost in Broward County?",a:'Custom decks start at $8,000 depending on size, material, and complexity. We provide detailed estimates after a free consultation.'},
        {q:'Do you need permits for deck building?',a:"Yes. Broward County requires permits for deck construction. We handle all permit applications and inspections."},
        {q:'How long does deck construction take?',a:'Most standard decks are completed in 1-2 weeks. Larger or multi-level projects may take longer.'}
      ]}
      relatedServices={[{title:'Patio & Lanai Repair',href:'/patio-lanai-repair-broward/'},{title:'Screen Enclosure Repair',href:'/screen-enclosure-repair-broward/'},{title:'Outdoor TV Mounting',href:'/outdoor-tv-mounting-broward/'},{title:'Flooring Installation',href:'/flooring-installation-broward/'}]}
      startingPrice="Custom decks start at $8,000"
      statsText="Fully Insured • Hurricane-Rated Construction"
      galleryImages={[
        { src: "/images/services/deck/custom-deck-design.jpg", title: "Custom Deck Design", subtitle: "Tailored to Your Home" },
        { src: "/images/services/deck/composite-and-wood.jpg", title: "Material Options", subtitle: "Composite & Wood" },
        { src: "/images/services/deck/multi-level-decks.jpg", title: "Multi-Level Decks", subtitle: "Maximize Space" },
        { src: "/images/services/deck/pergolas-and-shade.jpg", title: "Pergolas & Shade", subtitle: "Cool Comfort" },
        { src: "/images/services/deck/stairs-and-railings.jpg", title: "Stairs & Railings", subtitle: "Safe & Stylish" },
        { src: "/images/services/deck/ground-level-decks.jpg", title: "Ground Level", subtitle: "Seamless Transition" },
      ]}
    />
  );
}
