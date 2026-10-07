import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Baseboard Installation in Broward County | Pembroke Pines, Fort Lauderdale - LUXHT Fix",
  description: "Professional baseboard installation in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar. Fully Insured. Call today!",
  alternates: { canonical: 'https://fix.luxht.com/baseboard-installation-broward/' },
  openGraph: {
    title: "Baseboard Installation in Broward County | LUXHT Fix",
    description: "Professional baseboard installation in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar.",
    url: 'https://fix.luxht.com/baseboard-installation-broward/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function BaseboardInstallationMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Baseboard Installation"
      slug="baseboard-installation-broward"
      location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="Baseboard Installation"
      parentSlug="baseboard-installation-broward"
      heroSubtitle="Clean baseboard installation, replacement, and repair."
      heroDescription="Same-week service available throughout Broward County."
      introParagraph={"Give your Broward County home a polished finish with professional baseboard installation. LUXHT Fix installs, replaces, and repairs baseboards throughout Hollywood, Davie, Miramar, and surrounding communities."}
      serviceDetails={["Professional baseboard installation service","Expert craftsmanship and quality materials","Clean execution with area protection","Same-week scheduling available","Serving all of Broward County","Fully insured professionals"]}
      processSteps={["Assess the project scope and requirements","Provide detailed quote with transparent pricing","Schedule service at your convenience","Complete work with professional-grade materials","Clean workspace and inspect results","Ensure your complete satisfaction"]}
      whyChooseUs={["Baseboard Installation specialists serving Broward County","Professional-grade materials and tools","Clean, respectful execution in your home","Transparent pricing with no hidden fees","Same-week service across Broward County","Fully insured and background-checked"]}
      faqs={[{"q":"How much does baseboard installation cost in Broward County?","a":"Pricing varies by project scope. Baseboard Installation starts at $3/ft. Contact us with photos for a fast, personalized quote."},{"q":"Do you serve my area in Broward County?","a":"Yes! LUXHT Fix currently serves only Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, and Miramar."},{"q":"How quickly can you schedule baseboard installation?","a":"We offer same-week service for most projects. Contact us to check current availability in your area."},{"q":"Are you fully insured?","a":"Yes. LUXHT Fix is fully insured for all work we perform throughout Broward County."}]}
      relatedServices={[{"title":"All Services","href":"/south-florida/"},{"title":"Drywall Repair","href":"/drywall-broward/"},{"title":"TV Mounting","href":"/tv-mounting-broward/"},{"title":"Flooring","href":"/flooring-installation-broward/"},{"title":"Bath Remodel","href":"/bath-remodel-broward/"}]}
      startingPrice="Baseboard Installation starts at $3/ft"
      statsText="Fully Insured • Serving Broward County"
    />
  );
}
