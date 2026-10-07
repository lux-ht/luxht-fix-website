import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Door Handle Replacement in Broward County | Pembroke Pines, Fort Lauderdale - LUXHT Fix",
  description: "Professional door handle replacement in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar. Fully Insured. Call today!",
  alternates: { canonical: 'https://fix.luxht.com/door-handle-replacement-broward/' },
  openGraph: {
    title: "Door Handle Replacement in Broward County | LUXHT Fix",
    description: "Professional door handle replacement in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar.",
    url: 'https://fix.luxht.com/door-handle-replacement-broward/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function DoorHandleReplacementMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Door Handle Replacement"
      slug="door-handle-replacement-broward"
      location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="Door, Lock & Trim"
      parentSlug="door-lock-trim-broward"
      heroSubtitle="Modern handle and knob upgrades for interior and exterior doors."
      heroDescription="Same-week service available throughout Broward County."
      introParagraph={"Update your Broward County home's door hardware with modern handles, knobs, and lever sets. LUXHT Fix provides fast, professional replacement throughout our Broward service area."}
      serviceDetails={["Professional door handle replacement service","Expert craftsmanship and quality materials","Clean execution with area protection","Same-week scheduling available","Serving all of Broward County","Fully insured professionals"]}
      processSteps={["Assess the project scope and requirements","Provide detailed quote with transparent pricing","Schedule service at your convenience","Complete work with professional-grade materials","Clean workspace and inspect results","Ensure your complete satisfaction"]}
      whyChooseUs={["Door Handle Replacement specialists serving Broward County","Professional-grade materials and tools","Clean, respectful execution in your home","Transparent pricing with no hidden fees","Same-week service across Broward County","Fully insured and background-checked"]}
      faqs={[{"q":"How much does door handle replacement cost in Broward County?","a":"Pricing varies by project scope. Door Handle Replacement starts at $75. Contact us with photos for a fast, personalized quote."},{"q":"Do you serve my area in Broward County?","a":"Yes! LUXHT Fix currently serves only Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, and Miramar."},{"q":"How quickly can you schedule door handle replacement?","a":"We offer same-week service for most projects. Contact us to check current availability in your area."},{"q":"Are you fully insured?","a":"Yes. LUXHT Fix is fully insured for all work we perform throughout Broward County."}]}
      relatedServices={[{"title":"All Services","href":"/south-florida/"},{"title":"Drywall Repair","href":"/drywall-broward/"},{"title":"TV Mounting","href":"/tv-mounting-broward/"},{"title":"Flooring","href":"/flooring-installation-broward/"},{"title":"Bath Remodel","href":"/bath-remodel-broward/"}]}
      startingPrice="Door Handle Replacement starts at $75"
      statsText="Fully Insured • Serving Broward County"
    />
  );
}
