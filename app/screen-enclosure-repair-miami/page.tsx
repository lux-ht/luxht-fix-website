import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Screen Enclosure Repair in South Florida | Miami, Fort Lauderdale - LUXHT Fix',
  description: 'Professional screen enclosure repair in South Florida. Serving Miami, Fort Lauderdale, Hollywood, Pembroke Pines & more. Fully Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/screen-enclosure-repair-miami/' },
  openGraph: {
    title: 'Screen Enclosure Repair in South Florida | LUXHT Fix',
    description: 'Professional screen enclosure repair in South Florida. Serving Miami, Fort Lauderdale & surrounding areas.',
    url: 'https://fix.luxht.com/screen-enclosure-repair-miami/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function ScreenEnclosureRepairMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Screen Enclosure Repair"
      slug="screen-enclosure-repair-miami"
      location="miami"
      neighborhoods={["Miami","Pembroke Pines","Cooper City","Aventura","Hallandale Beach","Miramar","Davie","Hollywood","Sunny Isles Beach","Fort Lauderdale","North Miami","Coral Gables","Doral","Miami Beach"]}
      parentCategory="Screen Enclosure Repair"
      parentSlug="screen-enclosure-repair-miami"
      heroSubtitle="Screen repair and re-screening for pool cages, lanais, and patios."
      heroDescription="Same-week service available throughout South Florida."
      introParagraph={`South Florida's pool cages and lanai screen enclosures take a beating from storms, sun, and daily use. LUXHT Fix repairs torn screens, replaces damaged panels, and re-screens entire enclosures across Miami-Dade and Broward counties.`}
      serviceDetails={["Professional screen enclosure repair service","Expert craftsmanship and quality materials","Clean execution with area protection","Same-week scheduling available","Serving all of South Florida","Fully insured professionals"]}
      processSteps={["Assess the project scope and requirements","Provide detailed quote with transparent pricing","Schedule service at your convenience","Complete work with professional-grade materials","Clean workspace and inspect results","Ensure your complete satisfaction"]}
      whyChooseUs={["Screen Enclosure Repair specialists serving South Florida","Professional-grade materials and tools","Clean, respectful execution in your home","Transparent pricing with no hidden fees","Same-week service across Miami-Dade & Broward","Fully insured and background-checked"]}
      faqs={[{"q":"How much does screen enclosure repair cost in South Florida?","a":"Pricing varies by project scope. Screen Enclosure Repair starts at $150. Contact us with photos for a fast, personalized quote."},{"q":"Do you serve my area in South Florida?","a":"Yes! LUXHT Fix serves all of Miami-Dade and Broward counties including Miami, Fort Lauderdale, Hollywood, Pembroke Pines, and surrounding cities."},{"q":"How quickly can you schedule screen enclosure repair?","a":"We offer same-week service for most projects. Contact us to check current availability in your area."},{"q":"Are you fully insured?","a":"Yes. LUXHT Fix is fully fully insured for all work we perform throughout South Florida."}]}
      relatedServices={[{"title":"All Services","href":"/south-florida/"},{"title":"Drywall Repair","href":"/drywall-miami/"},{"title":"TV Mounting","href":"/tv-mounting-miami/"},{"title":"Flooring","href":"/flooring-installation-miami/"},{"title":"Bath Remodel","href":"/bath-remodel-miami/"}]}
      startingPrice="Screen Enclosure Repair starts at $150"
      statsText="Fully Insured • Serving Miami-Dade & Broward"
      galleryImages={[
        { src: "/images/services/screen-enclosure/tear-before.jpg", title: "Screen Repair", subtitle: "Before: Torn Mesh" },
        { src: "/images/services/screen-enclosure/tear-after.jpg", title: "Screen Repair", subtitle: "After: Tight Replacement" },
        { src: "/images/services/screen-enclosure/frame-before.jpg", title: "Frame Alignment", subtitle: "Before: Bent Framing" },
        { src: "/images/services/screen-enclosure/frame-after.jpg", title: "Frame Alignment", subtitle: "After: Secure & Level" }
      ]}
    />
  );
}
