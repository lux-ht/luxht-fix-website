import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Screen Enclosure Repair in Broward County | Pembroke Pines, Fort Lauderdale - LUXHT Fix",
  description: "Professional screen enclosure repair in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar. Fully Insured. Call today!",
  alternates: { canonical: 'https://fix.luxht.com/screen-enclosure-repair-broward/' },
  openGraph: {
    title: "Screen Enclosure Repair in Broward County | LUXHT Fix",
    description: "Professional screen enclosure repair in Broward County. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar.",
    url: 'https://fix.luxht.com/screen-enclosure-repair-broward/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function ScreenEnclosureRepairMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Screen Enclosure Repair"
      slug="screen-enclosure-repair-broward"
      location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="Screen Enclosure Repair"
      parentSlug="screen-enclosure-repair-broward"
      heroSubtitle="Screen repair and re-screening for pool cages, lanais, and patios."
      heroDescription="Same-week service available throughout Broward County."
      introParagraph={"Broward County's pool cages and lanai screen enclosures take a beating from storms, sun, and daily use. LUXHT Fix repairs torn screens, replaces damaged panels, and re-screens entire enclosures across our Broward service area."}
      serviceDetails={["Professional screen enclosure repair service","Expert craftsmanship and quality materials","Clean execution with area protection","Same-week scheduling available","Serving all of Broward County","Fully insured professionals"]}
      processSteps={["Assess the project scope and requirements","Provide detailed quote with transparent pricing","Schedule service at your convenience","Complete work with professional-grade materials","Clean workspace and inspect results","Ensure your complete satisfaction"]}
      whyChooseUs={["Screen Enclosure Repair specialists serving Broward County","Professional-grade materials and tools","Clean, respectful execution in your home","Transparent pricing with no hidden fees","Same-week service across Broward County","Fully insured and background-checked"]}
      faqs={[{"q":"How much does screen enclosure repair cost in Broward County?","a":"Pricing varies by project scope. Screen Enclosure Repair starts at $150. Contact us with photos for a fast, personalized quote."},{"q":"Do you serve my area in Broward County?","a":"Yes! LUXHT Fix currently serves only Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, and Miramar."},{"q":"How quickly can you schedule screen enclosure repair?","a":"We offer same-week service for most projects. Contact us to check current availability in your area."},{"q":"Are you fully insured?","a":"Yes. LUXHT Fix is fully insured for all work we perform throughout Broward County."}]}
      relatedServices={[{"title":"All Services","href":"/south-florida/"},{"title":"Drywall Repair","href":"/drywall-broward/"},{"title":"TV Mounting","href":"/tv-mounting-broward/"},{"title":"Flooring","href":"/flooring-installation-broward/"},{"title":"Bath Remodel","href":"/bath-remodel-broward/"}]}
      startingPrice="Screen Enclosure Repair starts at $150"
      statsText="Fully Insured • Serving Broward County"
      galleryImages={[
        { src: "/images/services/screen-enclosure/tear-before.jpg", title: "Screen Repair", subtitle: "Before: Torn Mesh" },
        { src: "/images/services/screen-enclosure/tear-after.jpg", title: "Screen Repair", subtitle: "After: Tight Replacement" },
        { src: "/images/services/screen-enclosure/frame-before.jpg", title: "Frame Alignment", subtitle: "Before: Bent Framing" },
        { src: "/images/services/screen-enclosure/frame-after.jpg", title: "Frame Alignment", subtitle: "After: Secure & Level" }
      ]}
    />
  );
}
