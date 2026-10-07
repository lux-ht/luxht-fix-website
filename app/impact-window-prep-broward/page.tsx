import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Impact Window Installation Prep in Broward County | Pembroke Pines, Fort Lauderdale - LUXHT Fix",
  description: "Professional impact window installation prep in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar. Fully Insured. Call today!",
  alternates: { canonical: 'https://fix.luxht.com/impact-window-prep-broward/' },
  openGraph: {
    title: "Impact Window Installation Prep in Broward County | LUXHT Fix",
    description: "Professional impact window installation prep in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar.",
    url: 'https://fix.luxht.com/impact-window-prep-broward/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function ImpactWindowPrepMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Impact Window Installation Prep"
      slug="impact-window-prep-broward"
      location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="Impact Window Prep"
      parentSlug="impact-window-prep-broward"
      heroSubtitle="Framing, trim, and finishing work for impact window installations."
      heroDescription="Same-week service available throughout Broward County."
      introParagraph={"Preparing your Broward County home for impact windows requires precise framing, trim work, and finishing. LUXHT Fix handles the carpentry and interior finishing around impact window installations throughout Pembroke Pines, Fort Lauderdale, and surrounding areas."}
      serviceDetails={["Professional impact window installation prep service","Expert craftsmanship and quality materials","Clean execution with area protection","Same-week scheduling available","Serving all of Broward County","Fully insured professionals"]}
      processSteps={["Assess the project scope and requirements","Provide detailed quote with transparent pricing","Schedule service at your convenience","Complete work with professional-grade materials","Clean workspace and inspect results","Ensure your complete satisfaction"]}
      whyChooseUs={["Impact Window Installation Prep specialists serving Broward County","Professional-grade materials and tools","Clean, respectful execution in your home","Transparent pricing with no hidden fees","Same-week service across Broward County","Fully insured and background-checked"]}
      faqs={[{"q":"How much does impact window installation prep cost in Broward County?","a":"Pricing varies by project scope. Impact Window Installation Prep starts at $250. Contact us with photos for a fast, personalized quote."},{"q":"Do you serve my area in Broward County?","a":"Yes! LUXHT Fix currently serves only Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, and Miramar."},{"q":"How quickly can you schedule impact window installation prep?","a":"We offer same-week service for most projects. Contact us to check current availability in your area."},{"q":"Are you fully insured?","a":"Yes. LUXHT Fix is fully insured for all work we perform throughout Broward County."}]}
      relatedServices={[{"title":"All Services","href":"/south-florida/"},{"title":"Drywall Repair","href":"/drywall-broward/"},{"title":"TV Mounting","href":"/tv-mounting-broward/"},{"title":"Flooring","href":"/flooring-installation-broward/"},{"title":"Bath Remodel","href":"/bath-remodel-broward/"}]}
      startingPrice="Impact Window Installation Prep starts at $250"
      statsText="Fully Insured • Serving Broward County"
      galleryImages={[
        { src: "/images/services/impact-windows/prep-before.jpg", title: "Window Removal", subtitle: "Before: Old Aluminum" },
        { src: "/images/services/impact-windows/prep-after.jpg", title: "Opening Prep", subtitle: "After: Clean Concrete" },
        { src: "/images/services/impact-windows/frame-before.jpg", title: "Sill Repair", subtitle: "Before: Rotted Wood" },
        { src: "/images/services/impact-windows/frame-after.jpg", title: "Trim Finishing", subtitle: "After: Sealed Trim" }
      ]}
    />
  );
}
