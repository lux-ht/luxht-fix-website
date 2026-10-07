import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Fence & Gate Repair in Broward County | LUXHT Fix",
  description: "Professional fence & gate repair in Broward County. Fix sagging gates, replace posts, and repair storm-damaged fencing. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar. Fully Insured. Call today!",
  alternates: { canonical: 'https://fix.luxht.com/fence-gate-repair-broward/' },
  openGraph: {
    title: "Fence & Gate Repair in Broward County | LUXHT Fix",
    description: "Professional fence & gate repair in Broward County. Serving all of Broward County.",
    url: 'https://fix.luxht.com/fence-gate-repair-broward/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function FenceGateRepairMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Fence & Gate Repair"
      slug="fence-gate-repair-broward"
      location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="Property Maintenance"
      parentSlug="services"
      heroSubtitle="Professional repair of wood, vinyl, and metal fences and gates."
      heroDescription="Fix sagging gates, replace posts, and repair storm-damaged fencing."
      introParagraph={"From hurricane wind damage to everyday wear and tear, we keep your Broward County property secure. LUXHT Fix offers professional fence and gate repairs across Pembroke Pines, Fort Lauderdale, Pembroke Pines, and Cooper City. We use heavy-duty, corrosion-resistant hardware built to withstand Broward County's humid climate."}
      serviceDetails={["Fence post reinforcement & replacement","Gate alignment & sag repair","Hinge & latch replacement","Picket & rail replacement","Vinyl fence panel repair","Wood fence sealing & staining"]}
      processSteps={["Inspect fence structure and gate operation","Confirm property lines and utility markings if digging","Reinforce sagging posts or replace damaged rails","Adjust and level gate for smooth latching","Install commercial-grade heavy-duty hardware","Clean and restore the work area"]}
      whyChooseUs={["Gate alignment specialists","Heavy-duty rust-resistant hardware","Paired with storm prep/repairs","Family-owned & personally responsible","Fully insured for your complete protection","Same-week service available"]}
      faqs={[{"q":"Can you fix a gate that drags on the ground?","a":"Yes. Dragging gates are usually caused by sinking posts or loose hinges. We adjust the hinges, reinforce the posts, and install support wheels or tension cables to make it swing freely."},{"q":"Do you repair vinyl fences?","a":"Yes. We can replace individual vinyl pickets, rails, or panels to match your existing fence style."},{"q":"Do you build new fences?","a":"We focus primarily on repairs, post replacements, and gate rebuilds rather than installing complete new fence lines."}]}
      relatedServices={[{"title":"Property Maintenance","href":"/property-maintenance-broward/"},{"title":"Commercial Maintenance","href":"/commercial-property-maintenance-broward/"},{"title":"Rental Turn Repairs","href":"/rental-turnover-repairs-broward/"},{"title":"Drywall Repair","href":"/drywall-broward/"},{"title":"TV Mounting","href":"/tv-mounting-broward/"}]}
      startingPrice="Fence & Gate Repair starts at $120"
      statsText="Fully Insured • Serving Broward County"
    />
  );
}
