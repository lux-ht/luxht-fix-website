import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Crown Molding Installation in Broward County | Pembroke Pines, Fort Lauderdale - LUXHT Fix",
  description: "Professional crown molding installation in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar. Fully Insured. Call today!",
  alternates: { canonical: 'https://fix.luxht.com/crown-molding-installation-broward/' },
  openGraph: {
    title: "Crown Molding Installation in Broward County | LUXHT Fix",
    description: "Professional crown molding installation in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar.",
    url: 'https://fix.luxht.com/crown-molding-installation-broward/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function CrownMoldingInstallationMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Crown Molding Installation"
      slug="crown-molding-installation-broward"
      location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="Crown Molding Installation"
      parentSlug="crown-molding-installation-broward"
      heroSubtitle="Elegant crown molding that adds architectural detail and value."
      heroDescription="Same-week service available throughout Broward County."
      introParagraph={"Add sophistication to your Broward County home with professional crown molding. LUXHT Fix installs traditional and modern crown molding styles throughout Wilton Manors, Miramar, Fort Lauderdale, and our other listed service cities."}
      serviceDetails={["Professional crown molding installation service","Expert craftsmanship and quality materials","Clean execution with area protection","Same-week scheduling available","Serving all of Broward County","Fully insured professionals"]}
      processSteps={["Assess the project scope and requirements","Provide detailed quote with transparent pricing","Schedule service at your convenience","Complete work with professional-grade materials","Clean workspace and inspect results","Ensure your complete satisfaction"]}
      whyChooseUs={["Crown Molding Installation specialists serving Broward County","Professional-grade materials and tools","Clean, respectful execution in your home","Transparent pricing with no hidden fees","Same-week service across Broward County","Fully insured and background-checked"]}
      faqs={[{"q":"How much does crown molding installation cost in Broward County?","a":"Pricing varies by project scope. Crown Molding Installation starts at $5/ft. Contact us with photos for a fast, personalized quote."},{"q":"Do you serve my area in Broward County?","a":"Yes! LUXHT Fix currently serves only Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, and Miramar."},{"q":"How quickly can you schedule crown molding installation?","a":"We offer same-week service for most projects. Contact us to check current availability in your area."},{"q":"Are you fully insured?","a":"Yes. LUXHT Fix is fully insured for all work we perform throughout Broward County."}]}
      relatedServices={[{"title":"All Services","href":"/south-florida/"},{"title":"Drywall Repair","href":"/drywall-broward/"},{"title":"TV Mounting","href":"/tv-mounting-broward/"},{"title":"Flooring","href":"/flooring-installation-broward/"},{"title":"Bath Remodel","href":"/bath-remodel-broward/"}]}
      startingPrice="Crown Molding Installation starts at $5/ft"
      statsText="Fully Insured • Serving Broward County"
    />
  );
}
