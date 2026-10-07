import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Fireplace TV Mounting in Broward County | Pembroke Pines, Fort Lauderdale - LUXHT Fix",
  description: "Professional fireplace tv mounting in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar. Fully Insured. Call today!",
  alternates: { canonical: 'https://fix.luxht.com/fireplace-tv-mounting-broward/' },
  openGraph: {
    title: "Fireplace TV Mounting in Broward County | LUXHT Fix",
    description: "Professional fireplace tv mounting in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar.",
    url: 'https://fix.luxht.com/fireplace-tv-mounting-broward/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function FireplaceTvMountingMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Fireplace TV Mounting"
      slug="fireplace-tv-mounting-broward"
      location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="TV Mounting"
      parentSlug="tv-mounting-broward"
      heroSubtitle="Secure TV mounting above fireplaces with heat-safe solutions."
      heroDescription="Same-week service available throughout Broward County."
      introParagraph={"Mount your TV above the fireplace safely in your Broward County home. LUXHT Fix uses heat-resistant hardware and tilting mounts to ensure optimal viewing angles and safe operation for homes in Pembroke Pines, Wilton Manors, Cooper City, and beyond."}
      serviceDetails={["Professional fireplace tv mounting service","Expert craftsmanship and quality materials","Clean execution with area protection","Same-week scheduling available","Serving all of Broward County","Fully insured professionals"]}
      processSteps={["Assess the project scope and requirements","Provide detailed quote with transparent pricing","Schedule service at your convenience","Complete work with professional-grade materials","Clean workspace and inspect results","Ensure your complete satisfaction"]}
      whyChooseUs={["Fireplace TV Mounting specialists serving Broward County","Professional-grade materials and tools","Clean, respectful execution in your home","Transparent pricing with no hidden fees","Same-week service across Broward County","Fully insured and background-checked"]}
      faqs={[{"q":"How much does fireplace tv mounting cost in Broward County?","a":"Pricing varies by project scope. Fireplace TV Mounting starts at $175. Contact us with photos for a fast, personalized quote."},{"q":"Do you serve my area in Broward County?","a":"Yes! LUXHT Fix currently serves only Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, and Miramar."},{"q":"How quickly can you schedule fireplace tv mounting?","a":"We offer same-week service for most projects. Contact us to check current availability in your area."},{"q":"Are you fully insured?","a":"Yes. LUXHT Fix is fully insured for all work we perform throughout Broward County."}]}
      relatedServices={[{"title":"All Services","href":"/south-florida/"},{"title":"Drywall Repair","href":"/drywall-broward/"},{"title":"TV Mounting","href":"/tv-mounting-broward/"},{"title":"Flooring","href":"/flooring-installation-broward/"},{"title":"Bath Remodel","href":"/bath-remodel-broward/"}]}
      startingPrice="Fireplace TV Mounting starts at $175"
      statsText="Fully Insured • Serving Broward County"
    />
  );
}
