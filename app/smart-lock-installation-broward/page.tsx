import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Smart Lock Installation in Broward County | Pembroke Pines, Fort Lauderdale - LUXHT Fix",
  description: "Professional smart lock installation in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar. Fully Insured. Call today!",
  alternates: { canonical: 'https://fix.luxht.com/smart-lock-installation-broward/' },
  openGraph: {
    title: "Smart Lock Installation in Broward County | LUXHT Fix",
    description: "Professional smart lock installation in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar.",
    url: 'https://fix.luxht.com/smart-lock-installation-broward/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function SmartLockInstallationMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Smart Lock Installation"
      slug="smart-lock-installation-broward"
      location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="Smart Home Installation"
      parentSlug="smart-home-installation-broward"
      heroSubtitle="Keyless entry with keypad, fingerprint, or smartphone control."
      heroDescription="Same-week service available throughout Broward County."
      introParagraph={"Upgrade your Broward County home with smart lock technology. LUXHT Fix installs Schlage, August, Yale, and Kwikset smart locks with full app setup for homeowners across Pembroke Pines, Fort Lauderdale, Cooper City, and surrounding areas."}
      serviceDetails={["Professional smart lock installation service","Expert craftsmanship and quality materials","Clean execution with area protection","Same-week scheduling available","Serving all of Broward County","Fully insured professionals"]}
      processSteps={["Assess the project scope and requirements","Provide detailed quote with transparent pricing","Schedule service at your convenience","Complete work with professional-grade materials","Clean workspace and inspect results","Ensure your complete satisfaction"]}
      whyChooseUs={["Smart Lock Installation specialists serving Broward County","Professional-grade materials and tools","Clean, respectful execution in your home","Transparent pricing with no hidden fees","Same-week service across Broward County","Fully insured and background-checked"]}
      faqs={[{"q":"How much does smart lock installation cost in Broward County?","a":"Pricing varies by project scope. Smart Lock Installation starts at $95. Contact us with photos for a fast, personalized quote."},{"q":"Do you serve my area in Broward County?","a":"Yes! LUXHT Fix currently serves only Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, and Miramar."},{"q":"How quickly can you schedule smart lock installation?","a":"We offer same-week service for most projects. Contact us to check current availability in your area."},{"q":"Are you fully insured?","a":"Yes. LUXHT Fix is fully insured for all work we perform throughout Broward County."}]}
      relatedServices={[{"title":"All Services","href":"/south-florida/"},{"title":"Drywall Repair","href":"/drywall-broward/"},{"title":"TV Mounting","href":"/tv-mounting-broward/"},{"title":"Flooring","href":"/flooring-installation-broward/"},{"title":"Bath Remodel","href":"/bath-remodel-broward/"}]}
      startingPrice="Smart Lock Installation starts at $95"
      statsText="Fully Insured • Serving Broward County"
    />
  );
}
