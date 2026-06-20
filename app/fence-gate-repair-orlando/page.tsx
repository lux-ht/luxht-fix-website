import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fence & Gate Repair in Central Florida | LUXHT Fix',
  description: 'Professional fence & gate repair in Central Florida. Fix sagging gates, replace posts, and repair storm-damaged fencing. Serving Orlando, Winter Park, Lake Nona, Windermere & surrounding areas. Fully Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/fence-gate-repair-orlando/' },
  openGraph: {
    title: 'Fence & Gate Repair in Central Florida | LUXHT Fix',
    description: 'Professional fence & gate repair in Central Florida. Serving all of Central Florida.',
    url: 'https://fix.luxht.com/fence-gate-repair-orlando/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function FenceGateRepairOrlandoPage() {
  return (
    <ServicePageTemplate
      serviceName="Fence & Gate Repair"
      slug="fence-gate-repair-orlando"
      location="orlando"
      neighborhoods={["Winter Park","Maitland","Altamonte Springs","Lake Nona","Dr. Phillips","Windermere","Ocoee","Apopka","Winter Garden","Lake Mary","Baldwin Park"]}
      parentCategory="Property Maintenance"
      parentSlug="services"
      heroSubtitle="Professional repair of wood, vinyl, and metal fences and gates."
      heroDescription="Fix sagging gates, replace posts, and repair storm-damaged fencing."
      introParagraph={`Florida's storms and humidity eventually take a toll on any fence. LUXHT Fix provides professional fence and gate repair services in Orlando, Winter Park, Winter Garden, and surrounding Central Florida cities. We reinforce loose posts, replace broken panels, and rebuild sagging gates to restore your property's security and curb appeal.`}
      serviceDetails={["Fence post reinforcement & replacement","Gate alignment & sag repair","Hinge & latch replacement","Picket & rail replacement","Vinyl fence panel repair","Wood fence sealing & staining"]}
      processSteps={["Inspect fence structure and gate operation","Confirm property lines and utility markings if digging","Reinforce sagging posts or replace damaged rails","Adjust and level gate for smooth latching","Install commercial-grade heavy-duty hardware","Clean and restore the work area"]}
      whyChooseUs={["Gate alignment specialists","Heavy-duty rust-resistant hardware","Paired with storm prep/repairs","Family-owned & personally responsible","Fully insured for your complete protection","Same-week service available"]}
      faqs={[{"q":"Can you fix a gate that drags on the ground?","a":"Yes. Dragging gates are usually caused by sinking posts or loose hinges. We adjust the hinges, reinforce the posts, and install support wheels or tension cables to make it swing freely."},{"q":"Do you repair vinyl fences?","a":"Yes. We can replace individual vinyl pickets, rails, or panels to match your existing fence style."},{"q":"Do you build new fences?","a":"We focus primarily on repairs, post replacements, and gate rebuilds rather than installing complete new fence lines."}]}
      relatedServices={[{"title":"Property Maintenance","href":"/property-maintenance-orlando/"},{"title":"Commercial Maintenance","href":"/commercial-property-maintenance-orlando/"},{"title":"Rental Turn Repairs","href":"/rental-turnover-repairs-orlando/"},{"title":"Drywall Repair","href":"/drywall-orlando/"},{"title":"TV Mounting","href":"/tv-mounting-orlando/"}]}
      startingPrice="Fence & Gate Repair starts at $120"
      statsText="Fully Insured • Serving Orlando & Central Florida"
    />
  );
}
