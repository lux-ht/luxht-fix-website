import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kitchen Cabinet Refacing South Florida | Miami - LUXHT Fix',
  description: 'Professional kitchen cabinet refacing in South Florida. Modern door upgrades without full renovation. Serving Miami, Fort Lauderdale & more.',
  alternates: { canonical: 'https://fix.luxht.com/kitchen-refacing-miami/' },
  openGraph: { title: 'Kitchen Cabinet Refacing South Florida | LUXHT Fix', url: 'https://fix.luxht.com/kitchen-refacing-miami/', type: 'website', siteName: 'LUXHT Fix' },
};

export default function KitchenRefacingMiamiPage() {
  return (
    <ServicePageTemplate serviceName="Kitchen Cabinet Refacing" slug="kitchen-refacing-miami" location="miami"
      neighborhoods={['Miami','Pembroke Pines','Cooper City','Aventura','Hallandale Beach','Miramar','Davie','Hollywood','Sunny Isles Beach','Fort Lauderdale','North Miami','Coral Gables','Doral','Miami Beach']}
      parentCategory="Kitchen & Bath" parentSlug="kitchen-refacing-miami"
      heroSubtitle="Transform your kitchen's look without a full renovation — new doors, hardware, and finishes."
      heroDescription="Save 50-70% compared to a full kitchen remodel."
      introParagraph="Give your South Florida kitchen a modern facelift without the cost and disruption of a full renovation. LUXHT Fix provides kitchen cabinet refacing across Miami-Dade and Broward counties — replacing cabinet doors, drawer fronts, and hardware while keeping your existing cabinet boxes. From contemporary styles in Doral to classic looks in Coral Gables, we transform kitchens in days, not weeks."
      serviceDetails={['Cabinet door replacement','Drawer front upgrades','New hardware installation','Veneer and laminate application','Soft-close hinge upgrades','Color and style consultation']}
      processSteps={['In-home consultation and style selection','Measure all cabinets precisely','Order custom doors and materials','Remove old doors and hardware','Apply new veneer to cabinet boxes','Install new doors, drawer fronts, and hardware','Final adjustment and quality inspection']}
      whyChooseUs={['Kitchen refacing specialists in South Florida','50-70% savings vs. full remodel','Minimal disruption — kitchen usable during work','Modern styles suited for South Florida homes','Quality materials and professional installation','Licensed, insured, and background-checked']}
      faqs={[
        {q:'How much does kitchen refacing cost in South Florida?',a:'Kitchen refacing starts at $4,500 depending on kitchen size and material selections. This saves 50-70% compared to a full kitchen renovation.'},
        {q:'How long does kitchen refacing take?',a:'Most kitchen refacing projects are completed in 3-5 days with minimal disruption to your daily routine.'},
        {q:'What styles are popular in South Florida?',a:'Modern flat-panel (slab) doors in white, gray, and two-tone designs are very popular. We also offer shaker-style and raised panel options.'},
        {q:'Can you reface condo kitchen cabinets?',a:'Yes. Cabinet refacing is ideal for condos since it\'s less invasive than a full remodel — no structural changes required.'}
      ]}
      relatedServices={[{title:'Bath Remodel',href:'/bath-remodel-miami/'},{title:'Flooring Installation',href:'/flooring-installation-miami/'},{title:'Faucet & Fixtures',href:'/faucet-fixtures-miami/'},{title:'Garbage Disposal',href:'/garbage-disposal-installation-miami/'}]}
      startingPrice="Kitchen refacing starts at $4,500"
      statsText="Licensed • Insured • 50-70% Savings vs Full Remodel"
    />
  );
}
