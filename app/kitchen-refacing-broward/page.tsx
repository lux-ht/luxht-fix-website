import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Kitchen Cabinet Refacing Broward County | Pembroke Pines & Fort Lauderdale - LUXHT Fix",
  description: "Professional kitchen cabinet refacing in Broward County. Modern door upgrades without full renovation. Serving Pembroke Pines, Fort Lauderdale and our other service cities.",
  alternates: { canonical: 'https://fix.luxht.com/kitchen-refacing-broward/' },
  openGraph: { title: "Kitchen Cabinet Refacing Broward County | LUXHT Fix", url: 'https://fix.luxht.com/kitchen-refacing-broward/', type: 'website', siteName: 'LUXHT Fix' },
};

export default function KitchenRefacingMiamiPage() {
  return (
    <ServicePageTemplate serviceName="Kitchen Cabinet Refacing" slug="kitchen-refacing-broward" location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="Kitchen & Bath" parentSlug="kitchen-refacing-broward"
      heroSubtitle="Transform your kitchen's look without a full renovation — new doors, hardware, and finishes."
      heroDescription="Save 50-70% compared to a full kitchen remodel."
      introParagraph="Give your Broward County kitchen a modern facelift without the cost and disruption of a full renovation. LUXHT Fix provides kitchen cabinet refacing across our Broward service area — replacing cabinet doors, drawer fronts, and hardware while keeping your existing cabinet boxes. From contemporary styles in Davie to classic looks in Wilton Manors, we transform kitchens in days, not weeks."
      serviceDetails={['Cabinet door replacement','Drawer front upgrades','New hardware installation','Veneer and laminate application','Soft-close hinge upgrades','Color and style consultation']}
      processSteps={['In-home consultation and style selection','Measure all cabinets precisely','Order custom doors and materials','Remove old doors and hardware','Apply new veneer to cabinet boxes','Install new doors, drawer fronts, and hardware','Final adjustment and quality inspection']}
      whyChooseUs={["Kitchen refacing specialists in Broward County",'50-70% savings vs. full remodel','Minimal disruption — kitchen usable during work',"Modern styles suited for Broward County homes",'Quality materials and professional installation','Fully insured and background-checked']}
      faqs={[
        {q:"How much does kitchen refacing cost in Broward County?",a:'Kitchen refacing starts at $4,500 depending on kitchen size and material selections. This saves 50-70% compared to a full kitchen renovation.'},
        {q:'How long does kitchen refacing take?',a:'Most kitchen refacing projects are completed in 3-5 days with minimal disruption to your daily routine.'},
        {q:"What styles are popular in Broward County?",a:'Modern flat-panel (slab) doors in white, gray, and two-tone designs are very popular. We also offer shaker-style and raised panel options.'},
        {q:'Can you reface condo kitchen cabinets?',a:'Yes. Cabinet refacing is ideal for condos since it\'s less invasive than a full remodel — no structural changes required.'}
      ]}
      relatedServices={[{title:'Bath Remodel',href:'/bath-remodel-broward/'},{title:'Flooring Installation',href:'/flooring-installation-broward/'},{title:'Faucet & Fixtures',href:'/faucet-fixtures-broward/'},{title:'Garbage Disposal',href:'/garbage-disposal-installation-broward/'}]}
      startingPrice="Kitchen refacing starts at $4,500"
      statsText="Fully Insured • 50-70% Savings vs Full Remodel"
      galleryImages={[
        { src: "/images/services/kitchen-refacing/box-refinishing-before.jpg", title: "Box Refinishing", subtitle: "Before: Worn Finish" },
        { src: "/images/services/kitchen-refacing/box-refinishing-after.jpg", title: "Box Refinishing", subtitle: "After: Fresh Look" },
        { src: "/images/services/kitchen-refacing/door-replacement-before.jpg", title: "Door Replacement", subtitle: "Before: Dated Style" },
        { src: "/images/services/kitchen-refacing/door-replacement-after.jpg", title: "Door Replacement", subtitle: "After: Modern Shaker" },
        { src: "/images/services/kitchen-refacing/soft-close-hinges-before.jpg", title: "Hinge Upgrade", subtitle: "Before: Standard Hinges" },
        { src: "/images/services/kitchen-refacing/soft-close-hinges-after.jpg", title: "Hinge Upgrade", subtitle: "After: Soft-Close" },
        { src: "/images/services/kitchen-refacing/drawer-fronts-before.jpg", title: "Drawer Fronts", subtitle: "Before: Worn Edges" },
        { src: "/images/services/kitchen-refacing/drawer-fronts-after.jpg", title: "Drawer Fronts", subtitle: "After: Clean Lines" },
        { src: "/images/services/kitchen-refacing/new-hardware-before.jpg", title: "Hardware", subtitle: "Before: Basic Knobs" },
        { src: "/images/services/kitchen-refacing/new-hardware-after.jpg", title: "Hardware", subtitle: "After: Premium Pulls" },
      ]}
    />
  );
}
