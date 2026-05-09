import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impact Window Installation Prep in South Florida | Miami, Fort Lauderdale - LUXHT Fix',
  description: 'Professional impact window installation prep in South Florida. Serving Miami, Fort Lauderdale, Hollywood, Pembroke Pines & more. Licensed & Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/impact-window-prep-miami/' },
  openGraph: {
    title: 'Impact Window Installation Prep in South Florida | LUXHT Fix',
    description: 'Professional impact window installation prep in South Florida. Serving Miami, Fort Lauderdale & surrounding areas.',
    url: 'https://fix.luxht.com/impact-window-prep-miami/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function ImpactWindowPrepMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Impact Window Installation Prep"
      slug="impact-window-prep-miami"
      location="miami"
      neighborhoods={["Miami","Pembroke Pines","Cooper City","Aventura","Hallandale Beach","Miramar","Davie","Hollywood","Sunny Isles Beach","Fort Lauderdale","North Miami","Coral Gables","Doral","Miami Beach"]}
      parentCategory="Impact Window Prep"
      parentSlug="impact-window-prep-miami"
      heroSubtitle="Framing, trim, and finishing work for impact window installations."
      heroDescription="Same-week service available throughout South Florida."
      introParagraph={`Preparing your South Florida home for impact windows requires precise framing, trim work, and finishing. LUXHT Fix handles the carpentry and interior finishing around impact window installations throughout Miami, Fort Lauderdale, and surrounding areas.`}
      serviceDetails={["Professional impact window installation prep service","Expert craftsmanship and quality materials","Clean execution with area protection","Same-week scheduling available","Serving all of South Florida","Licensed and insured professionals"]}
      processSteps={["Assess the project scope and requirements","Provide detailed quote with transparent pricing","Schedule service at your convenience","Complete work with professional-grade materials","Clean workspace and inspect results","Ensure your complete satisfaction"]}
      whyChooseUs={["Impact Window Installation Prep specialists serving South Florida","Professional-grade materials and tools","Clean, respectful execution in your home","Transparent pricing with no hidden fees","Same-week service across Miami-Dade & Broward","Licensed, insured, and background-checked"]}
      faqs={[{"q":"How much does impact window installation prep cost in South Florida?","a":"Pricing varies by project scope. Impact Window Installation Prep starts at $250. Contact us with photos for a fast, personalized quote."},{"q":"Do you serve my area in South Florida?","a":"Yes! LUXHT Fix serves all of Miami-Dade and Broward counties including Miami, Fort Lauderdale, Hollywood, Pembroke Pines, and surrounding cities."},{"q":"How quickly can you schedule impact window installation prep?","a":"We offer same-week service for most projects. Contact us to check current availability in your area."},{"q":"Are you licensed and insured?","a":"Yes. LUXHT Fix is fully licensed and insured for all work we perform throughout South Florida."}]}
      relatedServices={[{"title":"All Services","href":"/south-florida/"},{"title":"Drywall Repair","href":"/drywall-miami/"},{"title":"TV Mounting","href":"/tv-mounting-miami/"},{"title":"Flooring","href":"/flooring-installation-miami/"},{"title":"Bath Remodel","href":"/bath-remodel-miami/"}]}
      startingPrice="Impact Window Installation Prep starts at $250"
      statsText="Licensed • Insured • Serving Miami-Dade & Broward"
    />
  );
}
