import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Septic & Sewer Repair in Broward County",
  description: "Septic and sewer pipe repair in Broward County, including spot repairs, underground line repair, and septic tank installation. Request a site-specific estimate.",
  alternates: { canonical: 'https://fix.luxht.com/septic-sewer-repair-broward/' },
  openGraph: {
    title: "Septic & Sewer Repair in Broward County | LUXHT Fix",
    description: "Professional sewer pipe repairs, underground line work, and septic tank installation across Broward County.",
    url: 'https://fix.luxht.com/septic-sewer-repair-broward/',
    type: 'website',
    siteName: 'LUXHT Fix',
    images: [
      {
        url: '/images/services/septic-sewer/septic-tank-installation.jpg',
        width: 600,
        height: 600,
        alt: 'Septic tanks installed in an excavated yard with connected piping',
      },
    ],
  },
};

export default function SepticSewerRepairMiamiPage() {
  return (
    <ServicePageTemplate
      serviceName="Septic & Sewer Repair"
      slug="septic-sewer-repair-broward"
      location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="Property Maintenance"
      parentSlug="property-maintenance-broward"
      heroSubtitle="Underground pipe repairs and septic system work completed with careful site coordination."
      heroDescription="Sewer pipe spot repairs, underground line repair, and septic tank installation across Broward County."
      introParagraph="Damaged underground lines and septic components require careful access, secure connections, and a clean restoration plan. LUXHT Fix provides septic and sewer repair services across Broward County, from targeted PVC pipe replacement to underground line work and septic tank installation. We review the site, explain the proposed scope, and provide a project-specific estimate before work begins."
      serviceDetails={[
        'Sewer pipe spot repair',
        'Underground sewer line repair',
        'Septic tank installation and connection',
        'Damaged PVC pipe and fitting replacement',
        'Excavation and access coordination',
        'Connection checks and jobsite cleanup',
      ]}
      processSteps={[
        'Review the symptoms, property access, and available photos',
        'Inspect the affected area and confirm the repair scope',
        'Expose the damaged line or prepare the septic installation area',
        'Repair or install piping and secure each connection',
        'Complete required checks before backfill and restoration',
        'Clean the work area and review the completed project',
      ]}
      whyChooseUs={[
        'Site-specific repair plans and clear estimates',
        'Careful excavation and organized jobsite practices',
        'Quality PVC fittings and secure connections',
        'Photo-based project review before scheduling',
        'Responsive communication from start to finish',
        "Fully insured Broward County service team",
      ]}
      faqs={[
        {
          q: 'Do you handle both sewer line repairs and septic projects?',
          a: 'Yes. We assess sewer pipe spot repairs, underground line repairs, and septic tank installation projects. The recommended scope depends on the system, access, and site conditions.',
        },
        {
          q: 'What are common signs of an underground sewer line problem?',
          a: 'Recurring backups, slow drainage, sewage odors, unusually wet ground, and settling near a buried line can indicate a problem. An onsite assessment is the best way to identify the cause.',
        },
        {
          q: 'Can I get an estimate from photos?',
          a: 'Photos help us understand visible damage and access. Because underground conditions can vary, a site visit may be required before we provide a final project estimate.',
        },
        {
          q: 'Will my project require permits or inspections?',
          a: 'Requirements vary by location and project scope. We identify applicable project requirements before work begins and coordinate required inspections where appropriate.',
        },
      ]}
      relatedServices={[
        { title: 'Property Maintenance', href: '/property-maintenance-broward/' },
        { title: 'Faucet & Fixtures', href: '/faucet-fixtures-broward/' },
        { title: 'Toilet Repair', href: '/toilet-repair-broward/' },
        { title: 'Hurricane Repair', href: '/hurricane-damage-repair-broward/' },
        { title: 'Pressure Washing', href: '/pressure-washing-broward/' },
      ]}
      startingPrice="Site-specific estimates based on access and project scope"
      statsText="Fully Insured • Serving Broward County"
      galleryImages={[
        {
          src: '/images/services/septic-sewer/sewer-pipe-spot-repair.jpg',
          webpSrc: '/images/services/septic-sewer/sewer-pipe-spot-repair.webp',
          alt: 'New PVC sewer pipe spot repair in an open trench',
          title: 'Sewer Pipe Spot Repair',
          subtitle: 'Damaged pipe sections were exposed, removed, and replaced with new PVC fittings to restore a clean, reliable connection.',
        },
        {
          src: '/images/services/septic-sewer/underground-sewer-line-repair.jpg',
          webpSrc: '/images/services/septic-sewer/underground-sewer-line-repair.webp',
          alt: 'Underground sewer line being connected in a trench',
          title: 'Underground Line Repair',
          subtitle: 'The sewer line was carefully opened, aligned, and secured so the system could drain properly before the trench was backfilled.',
        },
        {
          src: '/images/services/septic-sewer/septic-tank-installation.jpg',
          webpSrc: '/images/services/septic-sewer/septic-tank-installation.webp',
          alt: 'Septic tanks installed in an excavated yard with connected piping',
          title: 'Septic Tank Installation',
          subtitle: 'New septic tanks were set in place and connected to the main piping, preparing the system for inspection and final backfill.',
        },
      ]}
    />
  );
}
