import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Faucet Replacement in Broward County | Pembroke Pines, Fort Lauderdale - LUXHT Fix",
  description: "Professional faucet replacement in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar. Fully Insured. Call today!",
  alternates: { canonical: 'https://fix.luxht.com/faucet-replacement-broward/' },
  openGraph: {
    title: "Faucet Replacement in Broward County | LUXHT Fix",
    description: "Professional faucet replacement in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar.",
    url: 'https://fix.luxht.com/faucet-replacement-broward/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function FaucetReplacementMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Faucet Replacement"
      slug="faucet-replacement-broward"
      location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="Faucet & Fixtures"
      parentSlug="faucet-fixtures-broward"
      heroSubtitle="Leak-free faucet installation for kitchens and bathrooms."
      heroDescription="Same-week service available throughout Broward County."
      introParagraph={"Upgrade or replace your kitchen and bathroom faucets with professional installation from LUXHT Fix. We serve homeowners throughout Broward County with fast, clean faucet replacements."}
      serviceDetails={["Professional faucet replacement service","Expert craftsmanship and quality materials","Clean execution with area protection","Same-week scheduling available","Serving all of Broward County","Fully insured professionals"]}
      processSteps={["Assess the project scope and requirements","Provide detailed quote with transparent pricing","Schedule service at your convenience","Complete work with professional-grade materials","Clean workspace and inspect results","Ensure your complete satisfaction"]}
      whyChooseUs={["Faucet Replacement specialists serving Broward County","Professional-grade materials and tools","Clean, respectful execution in your home","Transparent pricing with no hidden fees","Same-week service across Broward County","Fully insured and background-checked"]}
      faqs={[{"q":"How much does faucet replacement cost in Broward County?","a":"Pricing varies by project scope. Faucet Replacement starts at $95. Contact us with photos for a fast, personalized quote."},{"q":"Do you serve my area in Broward County?","a":"Yes! LUXHT Fix currently serves only Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, and Miramar."},{"q":"How quickly can you schedule faucet replacement?","a":"We offer same-week service for most projects. Contact us to check current availability in your area."},{"q":"Are you fully insured?","a":"Yes. LUXHT Fix is fully insured for all work we perform throughout Broward County."}]}
      relatedServices={[{"title":"All Services","href":"/south-florida/"},{"title":"Drywall Repair","href":"/drywall-broward/"},{"title":"TV Mounting","href":"/tv-mounting-broward/"},{"title":"Flooring","href":"/flooring-installation-broward/"},{"title":"Bath Remodel","href":"/bath-remodel-broward/"}]}
      startingPrice="Faucet Replacement starts at $95"
      statsText="Fully Insured • Serving Broward County"
    />
  );
}
