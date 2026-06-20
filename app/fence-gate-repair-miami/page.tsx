import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fence & Gate Repair in South Florida | LUXHT Fix',
  description: 'Professional fence & gate repair in South Florida. Fix sagging gates, replace posts, and repair storm-damaged fencing. Serving Miami, Fort Lauderdale, Hollywood, Pembroke Pines & surrounding areas. Fully Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/fence-gate-repair-miami/' },
  openGraph: {
    title: 'Fence & Gate Repair in South Florida | LUXHT Fix',
    description: 'Professional fence & gate repair in South Florida. Serving all of South Florida.',
    url: 'https://fix.luxht.com/fence-gate-repair-miami/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function FenceGateRepairMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Fence & Gate Repair"
      slug="fence-gate-repair-miami"
      location="miami"
      neighborhoods={["Miami","Pembroke Pines","Cooper City","Aventura","Hallandale Beach","Miramar","Davie","Hollywood","Sunny Isles Beach","Fort Lauderdale","North Miami","Coral Gables","Doral","Miami Beach"]}
      parentCategory="Property Maintenance"
      parentSlug="services"
      heroSubtitle="Professional repair of wood, vinyl, and metal fences and gates."
      heroDescription="Fix sagging gates, replace posts, and repair storm-damaged fencing."
      introParagraph={`From hurricane wind damage to everyday wear and tear, we keep your South Florida property secure. LUXHT Fix offers professional fence and gate repairs across Miami, Fort Lauderdale, Pembroke Pines, and Cooper City. We use heavy-duty, corrosion-resistant hardware built to withstand South Florida's humid climate.`}
      serviceDetails={["Fence post reinforcement & replacement","Gate alignment & sag repair","Hinge & latch replacement","Picket & rail replacement","Vinyl fence panel repair","Wood fence sealing & staining"]}
      processSteps={["Inspect fence structure and gate operation","Confirm property lines and utility markings if digging","Reinforce sagging posts or replace damaged rails","Adjust and level gate for smooth latching","Install commercial-grade heavy-duty hardware","Clean and restore the work area"]}
      whyChooseUs={["Gate alignment specialists","Heavy-duty rust-resistant hardware","Paired with storm prep/repairs","Family-owned & personally responsible","Fully insured for your complete protection","Same-week service available"]}
      faqs={[{"q":"Can you fix a gate that drags on the ground?","a":"Yes. Dragging gates are usually caused by sinking posts or loose hinges. We adjust the hinges, reinforce the posts, and install support wheels or tension cables to make it swing freely."},{"q":"Do you repair vinyl fences?","a":"Yes. We can replace individual vinyl pickets, rails, or panels to match your existing fence style."},{"q":"Do you build new fences?","a":"We focus primarily on repairs, post replacements, and gate rebuilds rather than installing complete new fence lines."}]}
      relatedServices={[{"title":"Property Maintenance","href":"/property-maintenance-miami/"},{"title":"Commercial Maintenance","href":"/commercial-property-maintenance-miami/"},{"title":"Rental Turn Repairs","href":"/rental-turnover-repairs-miami/"},{"title":"Drywall Repair","href":"/drywall-miami/"},{"title":"TV Mounting","href":"/tv-mounting-miami/"}]}
      startingPrice="Fence & Gate Repair starts at $120"
      statsText="Fully Insured • Serving Miami-Dade & Broward"
    />
  );
}
