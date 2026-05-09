import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart Home Installation South Florida | Miami - LUXHT Fix',
  description: 'Professional smart home device installation in South Florida. Ring doorbells, smart locks, cameras & more. Serving Miami, Fort Lauderdale & surrounding areas.',
  alternates: { canonical: 'https://fix.luxht.com/smart-home-installation-miami/' },
  openGraph: { title: 'Smart Home Installation South Florida | LUXHT Fix', url: 'https://fix.luxht.com/smart-home-installation-miami/', type: 'website', siteName: 'LUXHT Fix' },
};

export default function SmartHomeMiamiPage() {
  return (
    <ServicePageTemplate serviceName="Smart Home Installation" slug="smart-home-installation-miami" location="miami"
      neighborhoods={['Miami','Pembroke Pines','Cooper City','Aventura','Hallandale Beach','Miramar','Davie','Hollywood','Sunny Isles Beach','Fort Lauderdale','North Miami','Coral Gables','Doral','Miami Beach']}
      parentCategory="Smart Home" parentSlug="smart-home-installation-miami"
      heroSubtitle="Professional installation of smart locks, doorbells, cameras, and home automation."
      heroDescription="Expert device setup with full app configuration included."
      introParagraph="Upgrade your South Florida home with professionally installed smart devices. LUXHT Fix handles everything from Ring and Nest doorbell installations to smart lock setups and security camera mounting across Miami-Dade and Broward counties. We ensure proper wiring, Wi-Fi connectivity, and full app configuration so your smart home works perfectly from day one."
      serviceDetails={['Smart doorbell installation (Ring, Nest, Arlo)','Smart lock installation and programming','Security camera mounting and setup','Smart thermostat installation','Smart lighting setup','Voice assistant device mounting']}
      processSteps={['Assess your home setup and device compatibility','Check Wi-Fi signal strength and placement','Install hardware with proper wiring and mounting','Configure apps and connect to your network','Set up automations and user profiles','Test all features and provide walkthrough']}
      whyChooseUs={['Smart home specialists in South Florida','All major brands: Ring, Nest, Schlage, August, Yale','Full app setup and training included','Wi-Fi optimization for reliable performance','Same-week service across Miami-Dade & Broward','Licensed, insured, and background-checked']}
      faqs={[
        {q:'Can you install smart devices in a condo?',a:'Yes. We install smart doorbells, locks, and cameras in condos throughout South Florida with building-friendly methods.'},
        {q:'How much does smart home installation cost?',a:'Device installation starts at $85 per device. Multi-device packages available. Hardware is not included in our labor pricing.'},
        {q:'Do you set up the apps?',a:'Yes. Full app configuration, user setup, and a walkthrough of features are included with every installation.'},
        {q:'Which smart lock do you recommend?',a:'Schlage Encode is our top pick for reliability and built-in Wi-Fi. August is great for keeping existing keys. We\'ll recommend based on your needs.'}
      ]}
      relatedServices={[{title:'Smart Lock Installation',href:'/smart-lock-installation-miami/'},{title:'Smart Doorbell Installation',href:'/smart-doorbell-installation-miami/'},{title:'TV Mounting',href:'/tv-mounting-miami/'},{title:'Door, Lock & Trim',href:'/door-lock-trim-miami/'}]}
      startingPrice="Smart device installation starts at $85"
      statsText="Licensed • Insured • 250+ Devices Installed"
    />
  );
}
