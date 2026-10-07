import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bathroom Remodel Broward County | Pembroke Pines, Fort Lauderdale - LUXHT Fix",
  description: "Professional bathroom remodeling in Broward County. Complete renovations including vanities, showers, tubs, tile, and fixtures. Call today!",
  alternates: { canonical: 'https://fix.luxht.com/bath-remodel-broward/' },
  openGraph: { title: "Bathroom Remodel Broward County | LUXHT Fix", description: "Full bathroom renovations in Broward County.", url: 'https://fix.luxht.com/bath-remodel-broward/', type: 'website', siteName: 'LUXHT Fix' },
};

export default function BathRemodelMiamiPage() {
  return (
    <ServicePageTemplate serviceName="Bathroom Remodel" slug="bath-remodel-broward" location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="Kitchen & Bath" parentSlug="bath-remodel-broward"
      heroSubtitle="Complete bathroom renovations including vanities, showers, tubs, tile, and fixtures."
      heroDescription="Create a clean, modern, and functional space you'll love."
      introParagraph="Transform your Broward County bathroom into a modern retreat. LUXHT Fix provides full-service bathroom remodeling across our Broward service area — from spa-like master bath renovations in Wilton Manors to efficient guest bath updates in Pembroke Pines condos. We handle design, demolition, plumbing, tile work, vanity installation, and finishing touches with expert craftsmanship and attention to detail."
      serviceDetails={['Custom design and space planning','Vanity and countertop installation','Shower and tub replacement or conversion','Floor and wall tile work','Modern fixture upgrades','LED mirrors and lighting','Storage solutions','Accessibility features (grab bars, walk-in showers)']}
      processSteps={['Free in-home consultation to discuss vision and budget','Create detailed design plan with material selections','Provide comprehensive written estimate','Schedule project timeline (typically 2-3 weeks)','Demo existing bathroom with careful protection','Complete plumbing and electrical updates','Install new shower/tub, tile, and waterproofing','Install vanity, countertop, and fixtures','Add finishing touches (lighting, mirrors, hardware)','Final walkthrough and quality inspection']}
      whyChooseUs={['Complete bathroom renovation specialists',"Custom designs for Broward County homes and condos",'Quality materials suited for tropical humidity','Transparent pricing with detailed estimates','On-time project completion (2-3 weeks typical)','Fully insured and background-checked']}
      faqs={[
        {q:"How much does a bathroom remodel cost in Broward County?",a:'Bathroom remodels start at $8,500 depending on size, scope, and finishes. We provide a detailed written estimate after a free consultation.'},
        {q:'How long does a bathroom remodel take?',a:'Most projects take 2-3 weeks. Complex renovations with custom tile or luxury features may take 3-4 weeks.'},
        {q:'Can you remodel a condo bathroom?',a:"Yes. We work with HOA requirements and building management to ensure compliant, professional renovations in condos throughout Broward County."},
        {q:'Do you handle permits?',a:'Yes. We obtain all necessary permits for plumbing, electrical, and structural work to ensure your remodel meets local building codes.'}
      ]}
      relatedServices={[{title:'Kitchen Refacing',href:'/kitchen-refacing-broward/'},{title:'Flooring Installation',href:'/flooring-installation-broward/'},{title:'Faucet & Fixtures',href:'/faucet-fixtures-broward/'},{title:'Toilet Repair',href:'/toilet-repair-broward/'},{title:'Shower Head Replacement',href:'/shower-head-replacement-broward/'}]}
      startingPrice="Bathroom remodels start at $8,500"
      statsText="Fully Insured • Full Renovations"
      galleryImages={[
        { src: "/images/services/bathroom-remodel/shower-and-tub-before.jpg", title: "Shower & Tub", subtitle: "Before: Dated Tile" },
        { src: "/images/services/bathroom-remodel/shower-and-tub-after.jpg", title: "Shower & Tub", subtitle: "After: Modern Spa" },
        { src: "/images/services/bathroom-remodel/vanity-install-before.jpg", title: "Vanity Install", subtitle: "Before: Old Cabinet" },
        { src: "/images/services/bathroom-remodel/vanity-install-after.jpg", title: "Vanity Install", subtitle: "After: Floating Vanity" },
        { src: "/images/services/bathroom-remodel/tile-work-before.jpg", title: "Tile Work", subtitle: "Before: Worn Floors" },
        { src: "/images/services/bathroom-remodel/tile-work-after.jpg", title: "Tile Work", subtitle: "After: Premium Porcelain" },
        { src: "/images/services/bathroom-remodel/design-and-planning-before.jpg", title: "Design Process", subtitle: "Before: Small Layout" },
        { src: "/images/services/bathroom-remodel/design-and-planning-after.jpg", title: "Design Process", subtitle: "After: Optimized Space" },
        { src: "/images/services/bathroom-remodel/bath-remodel-gallery-1.jpg", title: "Modern Contrast", subtitle: "Black Hex Shower & Geometric Floors" },
        { src: "/images/services/bathroom-remodel/bath-remodel-gallery-2.jpg", title: "Minimalist Spa", subtitle: "Floating Wood Vanity & Glass Shower" },
        { src: "/images/services/bathroom-remodel/bath-remodel-gallery-3.jpg", title: "Luxury Marble", subtitle: "Double Vanity & Bookmatched Stone" },
        { src: "/images/services/bathroom-remodel/bath-remodel-gallery-4.jpg", title: "Warm Transitional", subtitle: "Freestanding Tub & Arched Mirrors" },
        { src: "/images/services/bathroom-remodel/bath-remodel-gallery-5.jpg", title: "Earthy Modern", subtitle: "Travertine Vessel Sinks & Backlit Mirrors" },
        { src: "/images/services/bathroom-remodel/bath-remodel-gallery-6.jpg", title: "Olive & Terrazzo", subtitle: "Green vertical tile, gold fixtures, terrazzo floor" },
        { src: "/images/services/bathroom-remodel/bath-remodel-gallery-7.jpg", title: "Beige & Black Accent", subtitle: "Single oak vanity, oval mirror, black fixtures" },
        { src: "/images/services/bathroom-remodel/bath-remodel-gallery-8.jpg", title: "Before & After", subtitle: "Full cosmetic and layout renovation" },
        { src: "/images/services/bathroom-remodel/bath-remodel-gallery-9.jpg", title: "Luxury Spa Retreat", subtitle: "Double wood vanity, freestanding tub, walk-in shower" },
      ]}
    />
  );
}
