import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Door, Lock & Trim Services South Florida | Miami - LUXHT Fix',
  description: 'Professional door, lock, and trim services in South Florida. Fix squeaky doors, install locks, replace trim. Serving Miami, Fort Lauderdale & more.',
  alternates: { canonical: 'https://fix.luxht.com/door-lock-trim-miami/' },
  openGraph: { title: 'Door, Lock & Trim South Florida | LUXHT Fix', url: 'https://fix.luxht.com/door-lock-trim-miami/', type: 'website', siteName: 'LUXHT Fix' },
};

export default function DoorLockTrimMiamiPage() {
  return (
    <ServicePageTemplate serviceName="Door, Lock & Trim" slug="door-lock-trim-miami" location="miami"
      neighborhoods={['Miami','Pembroke Pines','Cooper City','Aventura','Hallandale Beach','Miramar','Davie','Hollywood','Sunny Isles Beach','Fort Lauderdale','North Miami','Coral Gables','Doral','Miami Beach']}
      parentCategory="Door & Lock" parentSlug="door-lock-trim-miami"
      heroSubtitle="Fix sticking doors, upgrade locks, and install beautiful trim work."
      heroDescription="Complete door and lock services for South Florida homes and condos."
      introParagraph="South Florida's humidity causes doors to swell, stick, and misalign more than in drier climates. LUXHT Fix provides comprehensive door, lock, and trim services across Miami-Dade and Broward counties — from fixing hurricane-damaged doors in Hollywood to installing smart locks in Aventura condos. We handle alignment, hardware upgrades, deadbolt installation, and decorative trim with precision craftsmanship."
      serviceDetails={['Door alignment and adjustment','Lock and deadbolt installation','Smart lock installation and setup','Door handle and knob replacement','Interior and exterior door repair','Trim and molding installation']}
      processSteps={['Assess door, lock, or trim issue','Provide transparent quote with options','Source professional-grade hardware','Complete installation or repair','Test operation and adjust fit','Clean workspace and verify satisfaction']}
      whyChooseUs={['Door and lock specialists in South Florida','Hurricane damage repair experience','Smart lock installation and setup included','Humidity-related door problems are our specialty','Same-week service across Miami-Dade & Broward','Licensed, insured, and background-checked']}
      faqs={[
        {q:'Why is my door sticking in South Florida?',a:'South Florida\'s high humidity causes wooden doors to swell and frames to shift. We adjust, plane, or rehang doors to restore smooth operation.'},
        {q:'Do you install smart locks in condos?',a:'Yes. We install Schlage, August, Yale, and Kwikset smart locks in condos and homes throughout South Florida with full app setup.'},
        {q:'How much does door repair cost in Miami?',a:'Door alignment and adjustment starts at $95. Lock installation starts at $85. Contact us for a quote specific to your needs.'},
        {q:'Can you fix hurricane-damaged doors?',a:'Yes. We repair and replace doors damaged by storms, including frame repair and weatherstripping replacement.'}
      ]}
      relatedServices={[{title:'Door Alignment',href:'/door-alignment-miami/'},{title:'Deadbolt Installation',href:'/deadbolt-installation-miami/'},{title:'Smart Lock Installation',href:'/smart-lock-installation-miami/'},{title:'Door Handle Replacement',href:'/door-handle-replacement-miami/'},{title:'Hurricane Damage Repair',href:'/hurricane-damage-repair-miami/'}]}
      startingPrice="Door services start at $85"
      statsText="Licensed • Insured • Hurricane Damage Experts"
    />
  );
}
