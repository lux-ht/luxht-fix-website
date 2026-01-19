import GalleryGrid from '@/components/GalleryGrid';
import Navbar from '@/components/Navbar';
import TestimonialCarousel, { Review } from '@/components/TestimonialCarousel';
import Link from 'next/link';
import {
  ArrowRight, Hammer, Wrench, Droplets, CheckCircle,
  Phone, Mail, Star, MapPin,
  Ruler, Tv, Grid, Paintbrush, Calendar,
  Bath, Utensils, DoorOpen, Monitor, Shield, Zap
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart Home Installation Orlando | Ring, Nest, Camera & Smart Lock Setup - LUXHT Fix',
  description: 'Professional smart home installation in Orlando. Ring doorbells, Nest thermostats, cameras, and smart locks integrated with your smartphone. Call today!',
};

export default function SmartHomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "LUXHT Fix - Smart Home Installation Orlando",
    "image": "https://luxhtfix.com/images/smart-home-installation.jpg",
    "url": "https://luxhtfix.com/smart-home-installation-orlando",
    "telephone": "+1-407-720-7476",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street",
      "addressLocality": "Orlando",
      "addressRegion": "FL",
      "postalCode": "32801",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.5383,
      "longitude": -81.3792
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.instagram.com/luxhtfix"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Who installs Ring doorbells and smart home devices in Orlando?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LUXHT Fix specializes in smart home installation with 250+ devices installed in Orlando, handling Ring, Nest, August, Schlage, and all major brands."
      }
    }, {
      "@type": "Question",
      "name": "How much does smart home installation cost in Orlando?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Video doorbells and smart locks start at $95. Smart thermostats start at $125. Security cameras start at $85 each."
      }
    }, {
      "@type": "Question",
      "name": "Do you provide training on how to use smart devices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, every installation includes complete smartphone app setup and hands-on training for confident device operation."
      }
    }]
  };

  const smartReviews: Review[] = [
    { text: "They installed our Ring doorbell and two cameras in under 2 hours. Everything works perfectly and they showed us how to use all the features. Great service!", name: "Jason & Nicole B.", loc: "Windermere", rating: 5 },
    { text: "Upgraded our home with Nest thermostats and smoke detectors. The team made sure everything was connected to our Wi-Fi properly.", name: "David L.", loc: "Lake Nona", rating: 5 },
    { text: "Love our new smart lock. It's so convenient to open the door with my phone, and the installation looks clean.", name: "Emily R.", loc: "Winter Park", rating: 5 },
    { text: "Installed 4 outdoor security cameras. The technician helped me position them perfectly for the best view.", name: "Michael S.", loc: "Baldwin Park", rating: 5 },
    { text: "Very knowledgeable about home automation. Helped me set up a hub that controls my lights and locks together.", name: "Robert K.", loc: "Dr. Phillips", rating: 5 }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      {/* HERO SECTION */}
      {/* HERO SECTION */}
      <header className="relative bg-gradient-to-br from-[#584D94] via-[#7B6FCC] to-[#453A75] text-white pt-32 pb-24 px-4 text-center overflow-hidden">
        <div className="relative z-10 container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Smart Home Installation in Orlando
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-2 font-medium">
            Ring doorbells, Nest thermostats, cameras, and smart locks installed and integrated.
          </p>
          <p className="text-lg text-blue-200 mb-8">
            Control your home seamlessly from your smartphone.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold text-[#64CEBB] mb-8 bg-white/10 backdrop-blur-md inline-flex py-2 px-6 rounded-full border border-white/20">
            <CheckCircle size={16} /> Licensed • Insured • 250+ Devices Installed
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <a href="tel:4077207476" className="btn-gradient-primary btn-gradient-shimmer">
              <Phone size={24} /> Call Now
            </a>
            <a href="sms:4077207476" className="btn-gradient-glass border-white/20 hover:bg-white/10">
              <span className="text-xl">💬</span> Text Us
            </a>
            <a href="mailto:info@luxht.com?subject=Smart%20Home%20Installation%20Quote%20Request" className="btn-gradient-glass border-white/20 hover:bg-white/10">
              <Mail size={24} /> Email Us
            </a>
          </div>
        </div>

        <div className="text-blue-200 text-sm opacity-90">
          <p className="font-bold">Device installation starts at $95</p>
          <a href="sms:4077207476" className="hover:text-white underline underline-offset-2">📸 Send a photo for instant estimate</a>
        </div>
      </header>

      {/* SECTION 1: Services */}
      <section className="py-20 px-4 container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#584D94] mb-6">Professional Smart Home Installation Services</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            LUXHT Fix provides expert smart home device installation for Orlando homeowners. We install and configure:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Video Doorbells", desc: "Ring, Nest, Arlo setups.", icon: Monitor },
            { title: "Smart Thermostats", desc: "Eco-friendly climate control.", icon: Zap },
            { title: "Security Cameras", desc: "Indoor & outdoor monitoring.", icon: Tv },
            { title: "Smart Locks", desc: "Keyless entry systems.", icon: Shield },
            { title: "Smart Lighting", desc: "Automated ambiance.", icon: Zap },
            { title: "Garage Controllers", desc: "Remote access & alerts.", icon: DoorOpen },
            { title: "Safety Detectors", desc: "Smart smoke & CO alerts.", icon: Shield },
            { title: "Automation Hubs", desc: "Centralized home control.", icon: Grid },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all flex flex-col items-center text-center group hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#584D94]/10 rounded-full flex items-center justify-center text-[#584D94] mb-4 group-hover:bg-[#584D94] group-hover:text-white transition-colors">
                <item.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-500 mt-8 italic">Every installation includes device setup, smartphone integration, and training so you can control your home with confidence.</p>
      </section>

      {/* SECTION 1.5: Recent Work Gallery */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-[#584D94] text-center mb-12">Recent Projects Gallery</h2>

          {/* Grid of Project Images */}
          <GalleryGrid images={[
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

          <div className="text-center mt-12">
            <p className="text-slate-500 italic">Real photos of LUXHT Fix smart home installation projects in Orlando.</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Our Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#584D94] text-center mb-12">How We Install Your Smart Home Devices</h2>

          <div className="space-y-6 max-w-3xl mx-auto relative pl-8 border-l-2 border-[#584D94]/20">
            {[
              "Assess installation location and power requirements",
              "Install mounting hardware or replace existing devices",
              "Connect devices to power and Wi-Fi network",
              "Download and configure smartphone apps",
              "Connect devices to your home network securely",
              "Test all functions (video, notifications, remote access)",
              "Train you on device features and app controls",
              "Provide troubleshooting guidance"
            ].map((step, i) => (
              <div key={i} className="relative pl-8">
                <span className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-[#64CEBB] text-white flex items-center justify-center font-bold text-sm border-4 border-white">
                  {i + 1}
                </span>
                <p className="text-lg text-slate-700 font-medium">{step}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-8 font-medium">We ensure every device works perfectly before we leave, with full smartphone control and secure connections.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="btn-gradient-primary btn-gradient-shimmer">
                Get Free Estimate
              </a>
              <a href="sms:4077207476" className="btn-gradient-secondary">
                <span>💬</span> Text Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Why LUXHT Fix */}
      <section className="py-20 px-4 container mx-auto bg-[#584D94]/5 rounded-3xl my-8 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-xl md:text-3xl font-bold text-[#584D94] mb-8">Why Orlando Homeowners Choose Us</h2>
            <ul className="space-y-4">
              {[
                "Smart home installation specialists with 250+ devices installed",
                "All major brands: Ring, Nest, August, Schlage, Arlo",
                "Secure Wi-Fi network configuration",
                "Complete smartphone app setup and training",
                "Same-week service in most Orlando areas",
                "Licensed, insured, and background-checked"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 text-sm md:text-base">
                  <span className="text-[#64CEBB] mt-1 flex-shrink-0"><CheckCircle size={20} /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full overflow-hidden">
            <TestimonialCarousel customReviews={smartReviews} />
            <div className="text-center mt-4">
              <div className="flex justify-center text-[#64CEBB] mb-2">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
              </div>
              <p className="text-sm text-slate-500 font-medium">Rated 4.9/5 from 127 Orlando customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: What Affects Your Cost */}
      <section className="py-20 px-4 container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-[#584D94] mb-4">What Affects Your Smart Home Installation Cost?</h2>
        <p className="text-slate-600 mb-12 max-w-2xl mx-auto">Every setup is unique. Here are the key factors we consider when providing your personalized quote.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: "Device Type", desc: "Video doorbells vs. smart locks vs. thermostats — each has different installation requirements.", icon: Monitor },
            { title: "Quantity", desc: "Single device vs. whole-home setup — multi-device packages receive discounted rates.", icon: Grid },
            { title: "Power Requirements", desc: "Battery-powered vs. hardwired — some devices need electrical work.", icon: Zap },
            { title: "Network Setup", desc: "Simple Wi-Fi connection vs. hub integration — we ensure secure connectivity.", icon: Shield },
          ].map((factor, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-[#64CEBB]/50 transition-all group">
              <div className="w-12 h-12 bg-[#584D94]/10 rounded-xl flex items-center justify-center text-[#584D94] mb-4 mx-auto group-hover:bg-[#584D94] group-hover:text-white transition-colors">
                <factor.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{factor.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{factor.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#584D94]/5 p-6 rounded-2xl max-w-3xl mx-auto mb-12 border border-[#584D94]/10">
          <h3 className="font-bold text-[#584D94] mb-3">Popular Devices We Install</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Ring Doorbell", "Nest Thermostat", "Smart Locks", "Security Cameras", "Smart Lighting", "Garage Controllers"].map((device, i) => (
              <span key={i} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-slate-700 border border-slate-200">
                {device}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#584D94] to-[#453A75] text-white p-8 md:p-10 rounded-2xl max-w-3xl mx-auto shadow-xl">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Get Your Personalized Quote</h3>
          <p className="mb-6 opacity-90 max-w-xl mx-auto">Tell us what devices you want installed — or explore our detailed pricing guide.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/costs/smart-home-installation" className="btn-gradient-glass">
              <ArrowRight size={18} /> View Full Pricing Guide
            </Link>
            <button className="btn-gradient-primary btn-gradient-shimmer">
              <Phone size={18} /> Send Device List
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-[#584D94] text-center mb-12">Smart Home Installation FAQs - Orlando</h2>
          <div className="space-y-4">
            {[
              { q: "Who installs Ring doorbells and smart home devices in Orlando?", a: "LUXHT Fix specializes in smart home installation with 250+ devices installed in Orlando. We handle Ring, Nest, August, Schlage, Arlo, and all major smart home brands." },
              { q: "How much does smart home installation cost in Orlando?", a: "Pricing varies based on device type and quantity. Visit our detailed pricing guide for typical costs, or contact us for a personalized quote." },
              { q: "How long does smart home installation take?", a: "Most single device installations take 30-60 minutes including smartphone setup. Multi-device installations typically take 2-3 hours depending on complexity." },
              { q: "Do I need special Wi-Fi for smart home devices?", a: "Most modern Wi-Fi routers work well with smart devices. We can assess your network during installation and recommend upgrades if needed for optimal performance." },
              { q: "Can you install devices I purchased online?", a: "Yes. We install smart home devices from any retailer including Amazon, Best Buy, Home Depot, and manufacturer websites." },
              { q: "Do you provide training on how to use the devices?", a: "Absolutely. Every installation includes complete smartphone app setup and hands-on training so you're confident using all device features." }
            ].map((faq, i) => (
              <details key={i} className="group bg-white border border-slate-200 rounded-lg p-6 cursor-pointer open:ring-1 open:ring-[#584D94]/20">
                <summary className="font-bold text-slate-800 flex justify-between items-center list-none select-none">
                  {faq.q}
                  <span className="transform transition-transform group-open:rotate-180 text-[#584D94]">▼</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Service Area */}
      <section className="py-20 px-4 container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-[#584D94] mb-8">Smart Home Installation Service Areas</h2>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["Winter Park", "Maitland", "Altamonte Springs", "Lake Nona", "Dr. Phillips", "Windermere", "Ocoee", "Apopka", "Winter Garden", "College Park", "Baldwin Park"].map((area, i) => (
            <span key={i} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium border border-slate-200 inline-flex items-center gap-1">
              <MapPin size={14} className="text-[#64CEBB]" /> {area}
            </span>
          ))}
        </div>
        <p className="text-slate-500">Not sure if we serve your area? Call or message - we'll confirm quickly.</p>
      </section>

      {/* SECTION 7: Other Services */}
      <section className="py-20 bg-white px-4 border-t border-slate-100">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-[#584D94] text-center mb-12">Additional Home Services Available</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {[
              { title: "Drywall Repair", icon: Hammer },
              { title: "TV Mounting", icon: Tv },
              { title: "Flooring", icon: Grid },
              { title: "Deck Building", icon: Calendar },
              { title: "Door, Lock & Trim", icon: DoorOpen },
              { title: "Bath Remodel", icon: Bath }
            ].map((service, i) => (
              <div key={i} className="p-4 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 mx-auto mb-3 group-hover:bg-[#584D94]/10 group-hover:text-[#584D94] transition-colors">
                  <service.icon size={24} />
                </div>
                <h3 className="font-semibold text-slate-700 text-sm">{service.title}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/" className="text-[#64CEBB] font-bold underline hover:text-[#53b0a0]">View All Services</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-br from-[#584D94] via-[#7B6FCC] to-[#453A75] text-white text-center px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Smart Home Installation This Week?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Professional installation with complete smartphone setup.<br />Orlando's trusted smart home experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:4077207476" className="btn-gradient-primary btn-gradient-shimmer">
              <Phone size={20} /> Call Now: (407) 720-7476
            </a>
            <a href="sms:4077207476" className="btn-gradient-glass">
              <span>💬</span> Text Us
            </a>
            <a href="mailto:info@luxht.com" className="btn-gradient-glass">
              <Mail size={20} /> Email Us
            </a>
          </div>
          <p className="text-sm opacity-75">Licensed • Insured • Same-Week Service • Full Training Included</p>
        </div>
      </section>

    </main >
  );
}
