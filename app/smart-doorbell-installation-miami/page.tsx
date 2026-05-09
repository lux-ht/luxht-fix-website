import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart Doorbell Installation in South Florida | Miami, Fort Lauderdale - LUXHT Fix',
  description: 'Professional smart doorbell installation in South Florida. Serving Miami, Fort Lauderdale, Hollywood, Pembroke Pines & more. Licensed & Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/smart-doorbell-installation-miami/' },
  openGraph: {
    title: 'Smart Doorbell Installation in South Florida | LUXHT Fix',
    description: 'Professional smart doorbell installation in South Florida. Serving Miami, Fort Lauderdale & surrounding areas.',
    url: 'https://fix.luxht.com/smart-doorbell-installation-miami/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function SmartDoorbellInstallationMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Smart Doorbell Installation"
      slug="smart-doorbell-installation-miami"
      location="miami"
      neighborhoods={["Miami","Pembroke Pines","Cooper City","Aventura","Hallandale Beach","Miramar","Davie","Hollywood","Sunny Isles Beach","Fort Lauderdale","North Miami","Coral Gables","Doral","Miami Beach"]}
      parentCategory="Smart Home Installation"
      parentSlug="smart-home-installation-miami"
      heroSubtitle="Ring, Nest, and other smart doorbell installation with Wi-Fi setup."
      heroDescription="Same-week service available throughout South Florida."
      introParagraph={`Enhance your South Florida home's security with a professionally installed smart doorbell. LUXHT Fix installs Ring, Nest, Arlo, and other brands with proper wiring and Wi-Fi configuration across Miami-Dade and Broward counties.`}
      serviceDetails={["Professional smart doorbell installation service","Expert craftsmanship and quality materials","Clean execution with area protection","Same-week scheduling available","Serving all of South Florida","Licensed and insured professionals"]}
      processSteps={["Assess the project scope and requirements","Provide detailed quote with transparent pricing","Schedule service at your convenience","Complete work with professional-grade materials","Clean workspace and inspect results","Ensure your complete satisfaction"]}
      whyChooseUs={["Smart Doorbell Installation specialists serving South Florida","Professional-grade materials and tools","Clean, respectful execution in your home","Transparent pricing with no hidden fees","Same-week service across Miami-Dade & Broward","Licensed, insured, and background-checked"]}
      faqs={[{"q":"How much does smart doorbell installation cost in South Florida?","a":"Pricing varies by project scope. Smart Doorbell Installation starts at $85. Contact us with photos for a fast, personalized quote."},{"q":"Do you serve my area in South Florida?","a":"Yes! LUXHT Fix serves all of Miami-Dade and Broward counties including Miami, Fort Lauderdale, Hollywood, Pembroke Pines, and surrounding cities."},{"q":"How quickly can you schedule smart doorbell installation?","a":"We offer same-week service for most projects. Contact us to check current availability in your area."},{"q":"Are you licensed and insured?","a":"Yes. LUXHT Fix is fully licensed and insured for all work we perform throughout South Florida."}]}
      relatedServices={[{"title":"All Services","href":"/south-florida/"},{"title":"Drywall Repair","href":"/drywall-miami/"},{"title":"TV Mounting","href":"/tv-mounting-miami/"},{"title":"Flooring","href":"/flooring-installation-miami/"},{"title":"Bath Remodel","href":"/bath-remodel-miami/"}]}
      startingPrice="Smart Doorbell Installation starts at $85"
      statsText="Licensed • Insured • Serving Miami-Dade & Broward"
    />
  );
}
