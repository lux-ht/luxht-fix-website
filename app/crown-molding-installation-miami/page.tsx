import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crown Molding Installation in South Florida | Miami, Fort Lauderdale - LUXHT Fix',
  description: 'Professional crown molding installation in South Florida. Serving Miami, Fort Lauderdale, Hollywood, Pembroke Pines & more. Licensed & Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/crown-molding-installation-miami/' },
  openGraph: {
    title: 'Crown Molding Installation in South Florida | LUXHT Fix',
    description: 'Professional crown molding installation in South Florida. Serving Miami, Fort Lauderdale & surrounding areas.',
    url: 'https://fix.luxht.com/crown-molding-installation-miami/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function CrownMoldingInstallationMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Crown Molding Installation"
      slug="crown-molding-installation-miami"
      location="miami"
      neighborhoods={["Miami","Pembroke Pines","Cooper City","Aventura","Hallandale Beach","Miramar","Davie","Hollywood","Sunny Isles Beach","Fort Lauderdale","North Miami","Coral Gables","Doral","Miami Beach"]}
      parentCategory="Crown Molding Installation"
      parentSlug="crown-molding-installation-miami"
      heroSubtitle="Elegant crown molding that adds architectural detail and value."
      heroDescription="Same-week service available throughout South Florida."
      introParagraph={`Add sophistication to your South Florida home with professional crown molding. LUXHT Fix installs traditional and modern crown molding styles throughout Coral Gables, Aventura, Miami Beach, and all surrounding areas.`}
      serviceDetails={["Professional crown molding installation service","Expert craftsmanship and quality materials","Clean execution with area protection","Same-week scheduling available","Serving all of South Florida","Licensed and insured professionals"]}
      processSteps={["Assess the project scope and requirements","Provide detailed quote with transparent pricing","Schedule service at your convenience","Complete work with professional-grade materials","Clean workspace and inspect results","Ensure your complete satisfaction"]}
      whyChooseUs={["Crown Molding Installation specialists serving South Florida","Professional-grade materials and tools","Clean, respectful execution in your home","Transparent pricing with no hidden fees","Same-week service across Miami-Dade & Broward","Licensed, insured, and background-checked"]}
      faqs={[{"q":"How much does crown molding installation cost in South Florida?","a":"Pricing varies by project scope. Crown Molding Installation starts at $5/ft. Contact us with photos for a fast, personalized quote."},{"q":"Do you serve my area in South Florida?","a":"Yes! LUXHT Fix serves all of Miami-Dade and Broward counties including Miami, Fort Lauderdale, Hollywood, Pembroke Pines, and surrounding cities."},{"q":"How quickly can you schedule crown molding installation?","a":"We offer same-week service for most projects. Contact us to check current availability in your area."},{"q":"Are you licensed and insured?","a":"Yes. LUXHT Fix is fully licensed and insured for all work we perform throughout South Florida."}]}
      relatedServices={[{"title":"All Services","href":"/south-florida/"},{"title":"Drywall Repair","href":"/drywall-miami/"},{"title":"TV Mounting","href":"/tv-mounting-miami/"},{"title":"Flooring","href":"/flooring-installation-miami/"},{"title":"Bath Remodel","href":"/bath-remodel-miami/"}]}
      startingPrice="Crown Molding Installation starts at $5/ft"
      statsText="Licensed • Insured • Serving Miami-Dade & Broward"
    />
  );
}
