import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Faucet & Fixture Installation Broward County | Pembroke Pines & Fort Lauderdale - LUXHT Fix",
  description: "Professional faucet and fixture installation in Broward County. Kitchen and bathroom faucets, toilets, garbage disposals. Call today!",
  alternates: { canonical: 'https://fix.luxht.com/faucet-fixtures-broward/' },
  openGraph: { title: "Faucet & Fixtures Broward County | LUXHT Fix", url: 'https://fix.luxht.com/faucet-fixtures-broward/', type: 'website', siteName: 'LUXHT Fix' },
};

export default function FaucetFixturesMiamiPage() {
  return (
    <ServicePageTemplate serviceName="Faucet & Fixture Installation" slug="faucet-fixtures-broward" location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="Faucets & Fixtures" parentSlug="faucet-fixtures-broward"
      heroSubtitle="Professional installation of faucets, toilets, garbage disposals, and shower heads."
      heroDescription="Leak-free installation with proper sealing and testing."
      introParagraph="Upgrade your Broward County kitchen and bathroom fixtures with professional installation from LUXHT Fix. We install faucets, toilets, garbage disposals, and shower heads across our Broward service area with leak-free precision. Broward County's hard water and humidity make professional installation essential for long-lasting performance."
      serviceDetails={['Kitchen and bathroom faucet replacement','Toilet repair and replacement','Garbage disposal installation','Shower head and hand shower upgrades','Supply line and valve replacement','Fixture leak repair']}
      processSteps={['Assess existing fixtures and plumbing connections','Turn off water supply safely','Remove old fixture carefully','Install new fixture with proper sealing','Test for leaks and proper operation','Clean workspace and verify satisfaction']}
      whyChooseUs={["Fixture installation specialists in Broward County",'All major brands installed','Leak-free installation guaranteed',"Hard water considerations for Broward County","Same-week service across Broward County",'Fully insured and background-checked']}
      faqs={[
        {q:"How much does faucet installation cost in Broward County?",a:'Faucet replacement starts at $95 for labor. Fixture hardware is not included. Complex installations may cost more.'},
        {q:'Do you install toilets?',a:'Yes. We handle toilet repair, replacement, and new installation with proper sealing and leak testing.'},
        {q:'Can you install a garbage disposal?',a:'Yes. We install new garbage disposals and replace old units — InSinkErator, Waste King, and other brands.'},
        {q:'Do you work in condos?',a:"Yes. We serve condos throughout Broward County with building-compliant fixture installations."}
      ]}
      relatedServices={[{title:'Faucet Replacement',href:'/faucet-replacement-broward/'},{title:'Shower Head Replacement',href:'/shower-head-replacement-broward/'},{title:'Garbage Disposal',href:'/garbage-disposal-installation-broward/'},{title:'Toilet Repair',href:'/toilet-repair-broward/'},{title:'Bath Remodel',href:'/bath-remodel-broward/'}]}
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
