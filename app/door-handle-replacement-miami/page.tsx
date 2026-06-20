import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Door Handle Replacement in South Florida | Miami, Fort Lauderdale - LUXHT Fix',
  description: 'Professional door handle replacement in South Florida. Serving Miami, Fort Lauderdale, Hollywood, Pembroke Pines & more. Fully Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/door-handle-replacement-miami/' },
  openGraph: {
    title: 'Door Handle Replacement in South Florida | LUXHT Fix',
    description: 'Professional door handle replacement in South Florida. Serving Miami, Fort Lauderdale & surrounding areas.',
    url: 'https://fix.luxht.com/door-handle-replacement-miami/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function DoorHandleReplacementMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Door Handle Replacement"
      slug="door-handle-replacement-miami"
      location="miami"
      neighborhoods={["Miami","Pembroke Pines","Cooper City","Aventura","Hallandale Beach","Miramar","Davie","Hollywood","Sunny Isles Beach","Fort Lauderdale","North Miami","Coral Gables","Doral","Miami Beach"]}
      parentCategory="Door, Lock & Trim"
      parentSlug="door-lock-trim-miami"
      heroSubtitle="Modern handle and knob upgrades for interior and exterior doors."
      heroDescription="Same-week service available throughout South Florida."
      introParagraph={`Update your South Florida home's door hardware with modern handles, knobs, and lever sets. LUXHT Fix provides fast, professional replacement throughout Miami-Dade and Broward counties.`}
      serviceDetails={["Professional door handle replacement service","Expert craftsmanship and quality materials","Clean execution with area protection","Same-week scheduling available","Serving all of South Florida","Fully insured professionals"]}
      processSteps={["Assess the project scope and requirements","Provide detailed quote with transparent pricing","Schedule service at your convenience","Complete work with professional-grade materials","Clean workspace and inspect results","Ensure your complete satisfaction"]}
      whyChooseUs={["Door Handle Replacement specialists serving South Florida","Professional-grade materials and tools","Clean, respectful execution in your home","Transparent pricing with no hidden fees","Same-week service across Miami-Dade & Broward","Fully insured and background-checked"]}
      faqs={[{"q":"How much does door handle replacement cost in South Florida?","a":"Pricing varies by project scope. Door Handle Replacement starts at $75. Contact us with photos for a fast, personalized quote."},{"q":"Do you serve my area in South Florida?","a":"Yes! LUXHT Fix serves all of Miami-Dade and Broward counties including Miami, Fort Lauderdale, Hollywood, Pembroke Pines, and surrounding cities."},{"q":"How quickly can you schedule door handle replacement?","a":"We offer same-week service for most projects. Contact us to check current availability in your area."},{"q":"Are you fully insured?","a":"Yes. LUXHT Fix is fully fully insured for all work we perform throughout South Florida."}]}
      relatedServices={[{"title":"All Services","href":"/south-florida/"},{"title":"Drywall Repair","href":"/drywall-miami/"},{"title":"TV Mounting","href":"/tv-mounting-miami/"},{"title":"Flooring","href":"/flooring-installation-miami/"},{"title":"Bath Remodel","href":"/bath-remodel-miami/"}]}
      startingPrice="Door Handle Replacement starts at $75"
      statsText="Fully Insured • Serving Miami-Dade & Broward"
    />
  );
}
