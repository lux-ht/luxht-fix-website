import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bathroom Remodel South Florida | Miami, Fort Lauderdale - LUXHT Fix',
  description: 'Professional bathroom remodeling in South Florida. Complete renovations including vanities, showers, tubs, tile, and fixtures. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/bath-remodel-miami/' },
  openGraph: { title: 'Bathroom Remodel South Florida | LUXHT Fix', description: 'Full bathroom renovations in South Florida.', url: 'https://fix.luxht.com/bath-remodel-miami/', type: 'website', siteName: 'LUXHT Fix' },
};

export default function BathRemodelMiamiPage() {
  return (
    <ServicePageTemplate serviceName="Bathroom Remodel" slug="bath-remodel-miami" location="miami"
      neighborhoods={['Miami','Pembroke Pines','Cooper City','Aventura','Hallandale Beach','Miramar','Davie','Hollywood','Sunny Isles Beach','Fort Lauderdale','North Miami','Coral Gables','Doral','Miami Beach']}
      parentCategory="Kitchen & Bath" parentSlug="bath-remodel-miami"
      heroSubtitle="Complete bathroom renovations including vanities, showers, tubs, tile, and fixtures."
      heroDescription="Create a clean, modern, and functional space you'll love."
      introParagraph="Transform your South Florida bathroom into a modern retreat. LUXHT Fix provides full-service bathroom remodeling across Miami-Dade and Broward counties — from spa-like master bath renovations in Coral Gables to efficient guest bath updates in Pembroke Pines condos. We handle design, demolition, plumbing, tile work, vanity installation, and finishing touches with expert craftsmanship and attention to detail."
      serviceDetails={['Custom design and space planning','Vanity and countertop installation','Shower and tub replacement or conversion','Floor and wall tile work','Modern fixture upgrades','LED mirrors and lighting','Storage solutions','Accessibility features (grab bars, walk-in showers)']}
      processSteps={['Free in-home consultation to discuss vision and budget','Create detailed design plan with material selections','Provide comprehensive written estimate','Schedule project timeline (typically 2-3 weeks)','Demo existing bathroom with careful protection','Complete plumbing and electrical updates','Install new shower/tub, tile, and waterproofing','Install vanity, countertop, and fixtures','Add finishing touches (lighting, mirrors, hardware)','Final walkthrough and quality inspection']}
      whyChooseUs={['Complete bathroom renovation specialists','Custom designs for South Florida homes and condos','Quality materials suited for tropical humidity','Transparent pricing with detailed estimates','On-time project completion (2-3 weeks typical)','Licensed, insured, and background-checked']}
      faqs={[
        {q:'How much does a bathroom remodel cost in South Florida?',a:'Bathroom remodels start at $8,500 depending on size, scope, and finishes. We provide a detailed written estimate after a free consultation.'},
        {q:'How long does a bathroom remodel take?',a:'Most projects take 2-3 weeks. Complex renovations with custom tile or luxury features may take 3-4 weeks.'},
        {q:'Can you remodel a condo bathroom?',a:'Yes. We work with HOA requirements and building management to ensure compliant, professional renovations in condos throughout South Florida.'},
        {q:'Do you handle permits?',a:'Yes. We obtain all necessary permits for plumbing, electrical, and structural work to ensure your remodel meets local building codes.'}
      ]}
      relatedServices={[{title:'Kitchen Refacing',href:'/kitchen-refacing-miami/'},{title:'Flooring Installation',href:'/flooring-installation-miami/'},{title:'Faucet & Fixtures',href:'/faucet-fixtures-miami/'},{title:'Toilet Repair',href:'/toilet-repair-miami/'},{title:'Shower Head Replacement',href:'/shower-head-replacement-miami/'}]}
      startingPrice="Bathroom remodels start at $8,500"
      statsText="Licensed • Insured • Full Renovations"
    />
  );
}
