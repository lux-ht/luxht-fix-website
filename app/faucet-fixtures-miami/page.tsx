import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Faucet & Fixture Installation South Florida | Miami - LUXHT Fix',
  description: 'Professional faucet and fixture installation in South Florida. Kitchen and bathroom faucets, toilets, garbage disposals. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/faucet-fixtures-miami/' },
  openGraph: { title: 'Faucet & Fixtures South Florida | LUXHT Fix', url: 'https://fix.luxht.com/faucet-fixtures-miami/', type: 'website', siteName: 'LUXHT Fix' },
};

export default function FaucetFixturesMiamiPage() {
  return (
    <ServicePageTemplate serviceName="Faucet & Fixture Installation" slug="faucet-fixtures-miami" location="miami"
      neighborhoods={['Miami','Pembroke Pines','Cooper City','Aventura','Hallandale Beach','Miramar','Davie','Hollywood','Sunny Isles Beach','Fort Lauderdale','North Miami','Coral Gables','Doral','Miami Beach']}
      parentCategory="Faucets & Fixtures" parentSlug="faucet-fixtures-miami"
      heroSubtitle="Professional installation of faucets, toilets, garbage disposals, and shower heads."
      heroDescription="Leak-free installation with proper sealing and testing."
      introParagraph="Upgrade your South Florida kitchen and bathroom fixtures with professional installation from LUXHT Fix. We install faucets, toilets, garbage disposals, and shower heads across Miami-Dade and Broward counties with leak-free precision. South Florida's hard water and humidity make professional installation essential for long-lasting performance."
      serviceDetails={['Kitchen and bathroom faucet replacement','Toilet repair and replacement','Garbage disposal installation','Shower head and hand shower upgrades','Supply line and valve replacement','Fixture leak repair']}
      processSteps={['Assess existing fixtures and plumbing connections','Turn off water supply safely','Remove old fixture carefully','Install new fixture with proper sealing','Test for leaks and proper operation','Clean workspace and verify satisfaction']}
      whyChooseUs={['Fixture installation specialists in South Florida','All major brands installed','Leak-free installation guaranteed','Hard water considerations for South Florida','Same-week service across Miami-Dade & Broward','Fully insured and background-checked']}
      faqs={[
        {q:'How much does faucet installation cost in South Florida?',a:'Faucet replacement starts at $95 for labor. Fixture hardware is not included. Complex installations may cost more.'},
        {q:'Do you install toilets?',a:'Yes. We handle toilet repair, replacement, and new installation with proper sealing and leak testing.'},
        {q:'Can you install a garbage disposal?',a:'Yes. We install new garbage disposals and replace old units — InSinkErator, Waste King, and other brands.'},
        {q:'Do you work in condos?',a:'Yes. We serve condos throughout South Florida with building-compliant fixture installations.'}
      ]}
      relatedServices={[{title:'Faucet Replacement',href:'/faucet-replacement-miami/'},{title:'Shower Head Replacement',href:'/shower-head-replacement-miami/'},{title:'Garbage Disposal',href:'/garbage-disposal-installation-miami/'},{title:'Toilet Repair',href:'/toilet-repair-miami/'},{title:'Bath Remodel',href:'/bath-remodel-miami/'}]}
      startingPrice="Fixture installation starts at $95"
      statsText="Fully Insured • Leak-Free Guarantee"
      galleryImages={[
        { src: "/images/services/faucet-fixtures/vanity-upgrades-before.jpg", title: "Vanity Upgrade", subtitle: "Before: Outdated" },
        { src: "/images/services/faucet-fixtures/vanity-upgrades-after.jpg", title: "Vanity Upgrade", subtitle: "After: Modern & Clean" },
        { src: "/images/services/faucet-fixtures/bathroom-faucet-before.jpg", title: "Bathroom Faucet", subtitle: "Before: Old Fixture" },
        { src: "/images/services/faucet-fixtures/bathroom-faucet-after.jpg", title: "Bathroom Faucet", subtitle: "After: Sleek Upgrade" },
        { src: "/images/services/faucet-fixtures/kitchen-faucet-before.jpg", title: "Kitchen Faucet", subtitle: "Before: Standard" },
        { src: "/images/services/faucet-fixtures/kitchen-faucet-after.jpg", title: "Kitchen Faucet", subtitle: "After: Pull-Down Spray" },
        { src: "/images/services/faucet-fixtures/garbage-disposal-before.jpg", title: "Disposal", subtitle: "Before: Broken Unit" },
        { src: "/images/services/faucet-fixtures/garbage-disposal-after.jpg", title: "Disposal", subtitle: "After: Powerful & Quiet" },
        { src: "/images/services/faucet-fixtures/shower-head-before.jpg", title: "Shower Head", subtitle: "Before: Low Pressure" },
        { src: "/images/services/faucet-fixtures/shower-head-after.jpg", title: "Shower Head", subtitle: "After: Spa-Like Flow" },
      ]}
    />
  );
}
