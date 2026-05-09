import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TV Cable Concealment in South Florida | Miami, Fort Lauderdale - LUXHT Fix',
  description: 'Professional tv cable concealment in South Florida. Serving Miami, Fort Lauderdale, Hollywood, Pembroke Pines & more. Licensed & Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/tv-cable-concealment-miami/' },
  openGraph: {
    title: 'TV Cable Concealment in South Florida | LUXHT Fix',
    description: 'Professional tv cable concealment in South Florida. Serving Miami, Fort Lauderdale & surrounding areas.',
    url: 'https://fix.luxht.com/tv-cable-concealment-miami/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function TvCableConcealmentMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="TV Cable Concealment"
      slug="tv-cable-concealment-miami"
      location="miami"
      neighborhoods={["Miami","Pembroke Pines","Cooper City","Aventura","Hallandale Beach","Miramar","Davie","Hollywood","Sunny Isles Beach","Fort Lauderdale","North Miami","Coral Gables","Doral","Miami Beach"]}
      parentCategory="TV Mounting"
      parentSlug="tv-mounting-miami"
      heroSubtitle="Clean, hidden cable routing for a sleek wall-mounted TV setup."
      heroDescription="In-wall and surface solutions available."
      introParagraph={`Nothing ruins a beautiful TV mounting job like visible cables. LUXHT Fix provides professional cable concealment for South Florida homeowners — routing HDMI, power, and audio cables behind walls or through premium cable covers. Whether you're in a Miami Beach high-rise or a Davie single-family home, we deliver clean, organized setups.`}
      serviceDetails={["In-wall cable routing (HDMI, power, audio)","Surface cable cover installation","Power outlet relocation behind TV","Cable management for soundbars","Multi-device cable organization","Conduit installation for concrete walls"]}
      processSteps={["Assess wall type and cable routing options","Plan optimal cable path from TV to devices","Cut access points or install surface tracks","Route cables through wall or covers","Install any needed power outlets","Test all connections and organize cables"]}
      whyChooseUs={["Cable concealment specialists in South Florida","In-wall and surface solutions for any wall type","Condo-friendly installations (no structural changes)","Clean, organized results every time","Same-week service across Miami-Dade & Broward","Licensed, insured, and background-checked"]}
      faqs={[{"q":"Can you hide cables in a condo wall?","a":"Yes. We offer both in-wall routing and surface cable covers that work perfectly in condos throughout Aventura, Sunny Isles Beach, and Miami Beach without structural modifications."},{"q":"How much does cable concealment cost in Miami?","a":"Basic cable cover installation starts at $100. In-wall cable routing starts at $175. Pricing depends on wall type and number of cables."},{"q":"Do you relocate power outlets?","a":"Yes. We can install a power outlet behind your TV for the cleanest possible look — no visible cords at all."},{"q":"Can you conceal cables on concrete walls?","a":"Yes. Many South Florida condos have concrete walls. We use surface-mount solutions and conduit that look professional and clean."}]}
      relatedServices={[{"title":"TV Mounting","href":"/tv-mounting-miami/"},{"title":"Fireplace TV Mounting","href":"/fireplace-tv-mounting-miami/"},{"title":"Soundbar Mounting","href":"/soundbar-mounting-miami/"},{"title":"Outdoor TV Mounting","href":"/outdoor-tv-mounting-miami/"}]}
      startingPrice="TV Cable Concealment starts at Cable concealment starts at $100"
      statsText="Licensed • Insured • Serving Miami-Dade & Broward"
    />
  );
}
