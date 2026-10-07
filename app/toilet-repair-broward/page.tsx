import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Toilet Repair in Broward County | Pembroke Pines, Fort Lauderdale - LUXHT Fix",
  description: "Professional toilet repair in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar. Fully Insured. Call today!",
  alternates: { canonical: 'https://fix.luxht.com/toilet-repair-broward/' },
  openGraph: {
    title: "Toilet Repair in Broward County | LUXHT Fix",
    description: "Professional toilet repair in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar.",
    url: 'https://fix.luxht.com/toilet-repair-broward/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function ToiletRepairMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Toilet Repair"
      slug="toilet-repair-broward"
      location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="Faucet & Fixtures"
      parentSlug="faucet-fixtures-broward"
      heroSubtitle="Fix running, leaking, or malfunctioning toilets quickly."
      heroDescription="Same-week service available throughout Broward County."
      introParagraph={"Stop wasting water and money on a faulty toilet. LUXHT Fix provides fast toilet repair and replacement services across Broward County — from running toilets in Miramar condos to complete replacements in Pembroke Pines homes."}
      serviceDetails={["Professional toilet repair service","Expert craftsmanship and quality materials","Clean execution with area protection","Same-week scheduling available","Serving all of Broward County","Fully insured professionals"]}
      processSteps={["Assess the project scope and requirements","Provide detailed quote with transparent pricing","Schedule service at your convenience","Complete work with professional-grade materials","Clean workspace and inspect results","Ensure your complete satisfaction"]}
      whyChooseUs={["Toilet Repair specialists serving Broward County","Professional-grade materials and tools","Clean, respectful execution in your home","Transparent pricing with no hidden fees","Same-week service across Broward County","Fully insured and background-checked"]}
      faqs={[{"q":"How much does toilet repair cost in Broward County?","a":"Pricing varies by project scope. Toilet Repair starts at $95. Contact us with photos for a fast, personalized quote."},{"q":"Do you serve my area in Broward County?","a":"Yes! LUXHT Fix currently serves only Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, and Miramar."},{"q":"How quickly can you schedule toilet repair?","a":"We offer same-week service for most projects. Contact us to check current availability in your area."},{"q":"Are you fully insured?","a":"Yes. LUXHT Fix is fully insured for all work we perform throughout Broward County."}]}
      relatedServices={[{"title":"All Services","href":"/south-florida/"},{"title":"Drywall Repair","href":"/drywall-broward/"},{"title":"TV Mounting","href":"/tv-mounting-broward/"},{"title":"Flooring","href":"/flooring-installation-broward/"},{"title":"Bath Remodel","href":"/bath-remodel-broward/"}]}
      startingPrice="Toilet Repair starts at $95"
      statsText="Fully Insured • Serving Broward County"
    />
  );
}
