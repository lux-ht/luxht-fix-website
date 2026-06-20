import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deck Building South Florida | Miami, Fort Lauderdale - LUXHT Fix',
  description: 'Professional deck building in South Florida. Custom decks, patios, and outdoor living spaces. Serving Miami, Fort Lauderdale & more.',
  alternates: { canonical: 'https://fix.luxht.com/deck-building-miami/' },
  openGraph: { title: 'Deck Building South Florida | LUXHT Fix', url: 'https://fix.luxht.com/deck-building-miami/', type: 'website', siteName: 'LUXHT Fix' },
};

export default function DeckBuildingMiamiPage() {
  return (
    <ServicePageTemplate serviceName="Deck Building" slug="deck-building-miami" location="miami"
      neighborhoods={['Miami','Pembroke Pines','Cooper City','Aventura','Hallandale Beach','Miramar','Davie','Hollywood','Sunny Isles Beach','Fort Lauderdale','North Miami','Coral Gables','Doral','Miami Beach']}
      parentCategory="Deck & Outdoor" parentSlug="deck-building-miami"
      heroSubtitle="Custom decks and outdoor living spaces designed for South Florida's tropical lifestyle."
      heroDescription="Weather-resistant materials built to withstand sun, rain, and humidity."
      introParagraph="South Florida's year-round outdoor lifestyle makes a quality deck essential. LUXHT Fix builds custom decks across Miami-Dade and Broward counties using weather-resistant composite and tropical hardwood materials designed to withstand the region's intense sun, rain, and humidity. From elevated pool decks in Pembroke Pines to rooftop terraces in Fort Lauderdale, we design and build outdoor spaces that last."
      serviceDetails={['Custom deck design and construction','Composite decking (Trex, TimberTech)','Tropical hardwood options','Pool deck construction','Elevated and multi-level decks','Railing and stair installation']}
      processSteps={['Free consultation and design discussion','Create detailed plans with material selections','Obtain necessary permits','Prepare site and install foundation','Build deck structure and framing','Install decking, rails, and stairs','Final inspection and walkthrough']}
      whyChooseUs={['Deck specialists for South Florida climate','Hurricane-rated construction methods','Weather-resistant composite materials','Custom designs for your outdoor vision','Permit handling included','Fully insured and background-checked']}
      faqs={[
        {q:'What deck material is best for South Florida?',a:'Composite decking (Trex, TimberTech) is our top recommendation — it resists moisture, UV damage, and termites. Tropical hardwoods like Ipe are also excellent choices.'},
        {q:'How much does a deck cost in South Florida?',a:'Custom decks start at $8,000 depending on size, material, and complexity. We provide detailed estimates after a free consultation.'},
        {q:'Do you need permits for deck building?',a:'Yes. South Florida requires permits for deck construction. We handle all permit applications and inspections.'},
        {q:'How long does deck construction take?',a:'Most standard decks are completed in 1-2 weeks. Larger or multi-level projects may take longer.'}
      ]}
      relatedServices={[{title:'Patio & Lanai Repair',href:'/patio-lanai-repair-miami/'},{title:'Screen Enclosure Repair',href:'/screen-enclosure-repair-miami/'},{title:'Outdoor TV Mounting',href:'/outdoor-tv-mounting-miami/'},{title:'Flooring Installation',href:'/flooring-installation-miami/'}]}
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
