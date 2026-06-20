import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart Lock Installation in South Florida | Miami, Fort Lauderdale - LUXHT Fix',
  description: 'Professional smart lock installation in South Florida. Serving Miami, Fort Lauderdale, Hollywood, Pembroke Pines & more. Fully Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/smart-lock-installation-miami/' },
  openGraph: {
    title: 'Smart Lock Installation in South Florida | LUXHT Fix',
    description: 'Professional smart lock installation in South Florida. Serving Miami, Fort Lauderdale & surrounding areas.',
    url: 'https://fix.luxht.com/smart-lock-installation-miami/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function SmartLockInstallationMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Smart Lock Installation"
      slug="smart-lock-installation-miami"
      location="miami"
      neighborhoods={["Miami","Pembroke Pines","Cooper City","Aventura","Hallandale Beach","Miramar","Davie","Hollywood","Sunny Isles Beach","Fort Lauderdale","North Miami","Coral Gables","Doral","Miami Beach"]}
      parentCategory="Smart Home Installation"
      parentSlug="smart-home-installation-miami"
      heroSubtitle="Keyless entry with keypad, fingerprint, or smartphone control."
      heroDescription="Same-week service available throughout South Florida."
      introParagraph={`Upgrade your South Florida home with smart lock technology. LUXHT Fix installs Schlage, August, Yale, and Kwikset smart locks with full app setup for homeowners across Miami, Fort Lauderdale, Cooper City, and surrounding areas.`}
      serviceDetails={["Professional smart lock installation service","Expert craftsmanship and quality materials","Clean execution with area protection","Same-week scheduling available","Serving all of South Florida","Fully insured professionals"]}
      processSteps={["Assess the project scope and requirements","Provide detailed quote with transparent pricing","Schedule service at your convenience","Complete work with professional-grade materials","Clean workspace and inspect results","Ensure your complete satisfaction"]}
      whyChooseUs={["Smart Lock Installation specialists serving South Florida","Professional-grade materials and tools","Clean, respectful execution in your home","Transparent pricing with no hidden fees","Same-week service across Miami-Dade & Broward","Fully insured and background-checked"]}
      faqs={[{"q":"How much does smart lock installation cost in South Florida?","a":"Pricing varies by project scope. Smart Lock Installation starts at $95. Contact us with photos for a fast, personalized quote."},{"q":"Do you serve my area in South Florida?","a":"Yes! LUXHT Fix serves all of Miami-Dade and Broward counties including Miami, Fort Lauderdale, Hollywood, Pembroke Pines, and surrounding cities."},{"q":"How quickly can you schedule smart lock installation?","a":"We offer same-week service for most projects. Contact us to check current availability in your area."},{"q":"Are you fully insured?","a":"Yes. LUXHT Fix is fully fully insured for all work we perform throughout South Florida."}]}
      relatedServices={[{"title":"All Services","href":"/south-florida/"},{"title":"Drywall Repair","href":"/drywall-miami/"},{"title":"TV Mounting","href":"/tv-mounting-miami/"},{"title":"Flooring","href":"/flooring-installation-miami/"},{"title":"Bath Remodel","href":"/bath-remodel-miami/"}]}
      startingPrice="Smart Lock Installation starts at $95"
      statsText="Fully Insured • Serving Miami-Dade & Broward"
    />
  );
}
