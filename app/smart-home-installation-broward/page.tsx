import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Smart Home Installation Broward County | Pembroke Pines & Fort Lauderdale - LUXHT Fix",
  description: "Professional smart home device installation in Broward County. Ring doorbells, smart locks, cameras & more. Serving Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, Miramar.",
  alternates: { canonical: 'https://fix.luxht.com/smart-home-installation-broward/' },
  openGraph: { title: "Smart Home Installation Broward County | LUXHT Fix", url: 'https://fix.luxht.com/smart-home-installation-broward/', type: 'website', siteName: 'LUXHT Fix' },
};

export default function SmartHomeMiamiPage() {
  return (
    <ServicePageTemplate serviceName="Smart Home Installation" slug="smart-home-installation-broward" location="miami"
      neighborhoods={["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"]}
      parentCategory="Smart Home" parentSlug="smart-home-installation-broward"
      heroSubtitle="Professional installation of smart locks, doorbells, cameras, and home automation."
      heroDescription="Expert device setup with full app configuration included."
      introParagraph="Upgrade your Broward County home with professionally installed smart devices. LUXHT Fix handles everything from Ring and Nest doorbell installations to smart lock setups and security camera mounting across our Broward service area. We ensure proper wiring, Wi-Fi connectivity, and full app configuration so your smart home works perfectly from day one."
      serviceDetails={['Smart doorbell installation (Ring, Nest, Arlo)','Smart lock installation and programming','Security camera mounting and setup','Smart thermostat installation','Smart lighting setup','Voice assistant device mounting']}
      processSteps={['Assess your home setup and device compatibility','Check Wi-Fi signal strength and placement','Install hardware with proper wiring and mounting','Configure apps and connect to your network','Set up automations and user profiles','Test all features and provide walkthrough']}
      whyChooseUs={["Smart home specialists in Broward County",'All major brands: Ring, Nest, Schlage, August, Yale','Full app setup and training included','Wi-Fi optimization for reliable performance',"Same-week service across Broward County",'Fully insured and background-checked']}
      faqs={[
        {q:'Can you install smart devices in a condo?',a:"Yes. We install smart doorbells, locks, and cameras in condos throughout Broward County with building-friendly methods."},
        {q:'How much does smart home installation cost?',a:'Device installation starts at $85 per device. Multi-device packages available. Hardware is not included in our labor pricing.'},
        {q:'Do you set up the apps?',a:'Yes. Full app configuration, user setup, and a walkthrough of features are included with every installation.'},
        {q:'Which smart lock do you recommend?',a:'Schlage Encode is our top pick for reliability and built-in Wi-Fi. August is great for keeping existing keys. We\'ll recommend based on your needs.'}
      ]}
      relatedServices={[{title:'Smart Lock Installation',href:'/smart-lock-installation-broward/'},{title:'Smart Doorbell Installation',href:'/smart-doorbell-installation-broward/'},{title:'TV Mounting',href:'/tv-mounting-broward/'},{title:'Door, Lock & Trim',href:'/door-lock-trim-broward/'}]}
      startingPrice="Smart device installation starts at $85"
      statsText="Fully Insured • 250+ Devices Installed"
      galleryImages={[
        { src: "/images/services/smart-home/video-doorbells.jpg", title: "Video Doorbell", subtitle: "Clear & Connected" },
        { src: "/images/services/smart-home/smart-locks.jpg", title: "Smart Lock Install", subtitle: "Keyless Security" },
        { src: "/images/services/smart-home/security-cameras.jpg", title: "Security Cameras", subtitle: "24/7 Monitoring" },
        { src: "/images/services/smart-home/smart-thermostats.jpg", title: "Smart Thermostat", subtitle: "Efficient Climate Control" },
        { src: "/images/services/smart-home/automation-hubs.jpg", title: "Automation Hub", subtitle: "Central Control" },
        { src: "/images/services/smart-home/smart-lighting.jpg", title: "Smart Lighting", subtitle: "Automated Ambiance" },
        { src: "/images/services/smart-home/safety-detectors.jpg", title: "Safety Detectors", subtitle: "Smoke & CO" },
        { src: "/images/services/smart-home/garage-controllers.jpg", title: "Garage Control", subtitle: "Remote Access" },
      ]}
    />
  );
}
