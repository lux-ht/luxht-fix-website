import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soundbar Mounting in South Florida | Miami, Fort Lauderdale - LUXHT Fix',
  description: 'Professional soundbar mounting in South Florida. Serving Miami, Fort Lauderdale, Hollywood, Pembroke Pines & more. Licensed & Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/soundbar-mounting-miami/' },
  openGraph: {
    title: 'Soundbar Mounting in South Florida | LUXHT Fix',
    description: 'Professional soundbar mounting in South Florida. Serving Miami, Fort Lauderdale & surrounding areas.',
    url: 'https://fix.luxht.com/soundbar-mounting-miami/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function SoundbarMountingMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Soundbar Mounting"
      slug="soundbar-mounting-miami"
      location="miami"
      neighborhoods={["Miami","Pembroke Pines","Cooper City","Aventura","Hallandale Beach","Miramar","Davie","Hollywood","Sunny Isles Beach","Fort Lauderdale","North Miami","Coral Gables","Doral","Miami Beach"]}
      parentCategory="TV Mounting"
      parentSlug="tv-mounting-miami"
      heroSubtitle="Professional soundbar installation paired with your wall-mounted TV."
      heroDescription="Same-week service available throughout South Florida."
      introParagraph={`Complete your entertainment setup with a professionally mounted soundbar. LUXHT Fix securely installs soundbars below or alongside your TV with clean cable management throughout South Florida homes.`}
      serviceDetails={["Professional soundbar mounting service","Expert craftsmanship and quality materials","Clean execution with area protection","Same-week scheduling available","Serving all of South Florida","Licensed and insured professionals"]}
      processSteps={["Assess the project scope and requirements","Provide detailed quote with transparent pricing","Schedule service at your convenience","Complete work with professional-grade materials","Clean workspace and inspect results","Ensure your complete satisfaction"]}
      whyChooseUs={["Soundbar Mounting specialists serving South Florida","Professional-grade materials and tools","Clean, respectful execution in your home","Transparent pricing with no hidden fees","Same-week service across Miami-Dade & Broward","Licensed, insured, and background-checked"]}
      faqs={[{"q":"How much does soundbar mounting cost in South Florida?","a":"Pricing varies by project scope. Soundbar Mounting starts at $75. Contact us with photos for a fast, personalized quote."},{"q":"Do you serve my area in South Florida?","a":"Yes! LUXHT Fix serves all of Miami-Dade and Broward counties including Miami, Fort Lauderdale, Hollywood, Pembroke Pines, and surrounding cities."},{"q":"How quickly can you schedule soundbar mounting?","a":"We offer same-week service for most projects. Contact us to check current availability in your area."},{"q":"Are you licensed and insured?","a":"Yes. LUXHT Fix is fully licensed and insured for all work we perform throughout South Florida."}]}
      relatedServices={[{"title":"All Services","href":"/south-florida/"},{"title":"Drywall Repair","href":"/drywall-miami/"},{"title":"TV Mounting","href":"/tv-mounting-miami/"},{"title":"Flooring","href":"/flooring-installation-miami/"},{"title":"Bath Remodel","href":"/bath-remodel-miami/"}]}
      startingPrice="Soundbar Mounting starts at $75"
      statsText="Licensed • Insured • Serving Miami-Dade & Broward"
    />
  );
}
