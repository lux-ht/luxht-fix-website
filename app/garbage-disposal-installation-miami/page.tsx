import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Garbage Disposal Installation in South Florida | Miami, Fort Lauderdale - LUXHT Fix',
  description: 'Professional garbage disposal installation in South Florida. Serving Miami, Fort Lauderdale, Hollywood, Pembroke Pines & more. Fully Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/garbage-disposal-installation-miami/' },
  openGraph: {
    title: 'Garbage Disposal Installation in South Florida | LUXHT Fix',
    description: 'Professional garbage disposal installation in South Florida. Serving Miami, Fort Lauderdale & surrounding areas.',
    url: 'https://fix.luxht.com/garbage-disposal-installation-miami/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function GarbageDisposalInstallationMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Garbage Disposal Installation"
      slug="garbage-disposal-installation-miami"
      location="miami"
      neighborhoods={["Miami","Pembroke Pines","Cooper City","Aventura","Hallandale Beach","Miramar","Davie","Hollywood","Sunny Isles Beach","Fort Lauderdale","North Miami","Coral Gables","Doral","Miami Beach"]}
      parentCategory="Faucet & Fixtures"
      parentSlug="faucet-fixtures-miami"
      heroSubtitle="Professional garbage disposal installation and replacement."
      heroDescription="Same-week service available throughout South Florida."
      introParagraph={`Get a new garbage disposal installed properly in your South Florida kitchen. LUXHT Fix handles removal of old units and installation of new InSinkErator, Waste King, and other brands across Miami-Dade and Broward.`}
      serviceDetails={["Professional garbage disposal installation service","Expert craftsmanship and quality materials","Clean execution with area protection","Same-week scheduling available","Serving all of South Florida","Fully insured professionals"]}
      processSteps={["Assess the project scope and requirements","Provide detailed quote with transparent pricing","Schedule service at your convenience","Complete work with professional-grade materials","Clean workspace and inspect results","Ensure your complete satisfaction"]}
      whyChooseUs={["Garbage Disposal Installation specialists serving South Florida","Professional-grade materials and tools","Clean, respectful execution in your home","Transparent pricing with no hidden fees","Same-week service across Miami-Dade & Broward","Fully insured and background-checked"]}
      faqs={[{"q":"How much does garbage disposal installation cost in South Florida?","a":"Pricing varies by project scope. Garbage Disposal Installation starts at $150. Contact us with photos for a fast, personalized quote."},{"q":"Do you serve my area in South Florida?","a":"Yes! LUXHT Fix serves all of Miami-Dade and Broward counties including Miami, Fort Lauderdale, Hollywood, Pembroke Pines, and surrounding cities."},{"q":"How quickly can you schedule garbage disposal installation?","a":"We offer same-week service for most projects. Contact us to check current availability in your area."},{"q":"Are you fully insured?","a":"Yes. LUXHT Fix is fully fully insured for all work we perform throughout South Florida."}]}
      relatedServices={[{"title":"All Services","href":"/south-florida/"},{"title":"Drywall Repair","href":"/drywall-miami/"},{"title":"TV Mounting","href":"/tv-mounting-miami/"},{"title":"Flooring","href":"/flooring-installation-miami/"},{"title":"Bath Remodel","href":"/bath-remodel-miami/"}]}
      startingPrice="Garbage Disposal Installation starts at $150"
      statsText="Fully Insured • Serving Miami-Dade & Broward"
    />
  );
}
