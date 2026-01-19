import GalleryGrid from '@/components/GalleryGrid';
import Navbar from '@/components/Navbar';
import TestimonialCarousel, { Review } from '@/components/TestimonialCarousel';
import Link from 'next/link';
import {
  ArrowRight, Hammer, Wrench, Droplets, CheckCircle,
  Phone, Mail, Star, MapPin,
  Ruler, Tv, Grid, Paintbrush, Calendar,
  Bath, Utensils, DoorOpen, Monitor, Shield, Zap, Truck
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Furniture Assembly Orlando | Fast Professional Assembly Service - LUXHT Fix',
  description: 'Professional furniture assembly in Orlando. Fast, correct assembly from any retailer. Save your weekend! IKEA, Amazon, Wayfair & more. Call today!',
};

export default function FurnitureAssemblyPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "LUXHT Fix - Furniture Assembly Orlando",
    "image": "https://luxhtfix.com/images/furniture-assembly.jpg",
    "url": "https://luxhtfix.com/furniture-assembly-orlando",
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
      "name": "Who does furniture assembly in Orlando?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LUXHT Fix specializes in professional furniture assembly with 600+ items assembled in Orlando from all major retailers including IKEA, Amazon, and Wayfair."
      }
    }, {
      "@type": "Question",
      "name": "How much does furniture assembly cost in Orlando?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Small items start at $75, medium items like desks start at $100, and large items like beds start at $150."
      }
    }, {
      "@type": "Question",
      "name": "Do you assemble IKEA furniture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, IKEA furniture is one of our specialties with hundreds of IKEA items assembled. We're familiar with all their product lines."
      }
    }]
  };

  const assemblyReviews: Review[] = [
    { text: "Assembled our entire IKEA bedroom set in 3 hours! Everything is solid and perfect. So worth not spending my whole Saturday struggling with instructions.", name: "Brian K.", loc: "College Park", rating: 5 },
    { text: "Hired them to assemble 6 office desks for our new startup in downtown. Fast, professional, and cleaned up all the boxes.", name: "Sarah J.", loc: "Downtown Orlando", rating: 5 },
    { text: "Put together a huge Wayfair entertainment center. It looks amazing and feels much sturdier than if I had done it myself.", name: "Mike T.", loc: "Winter Garden", rating: 5 },
    { text: "Very polite and careful with our floors. They anchored the bookshelves to the wall for safety too.", name: "Amanda L.", loc: "Oviedo", rating: 5 },
    { text: "Saved my marriage! We tried to build the bed ourselves and gave up. LUXHT fixed our mistakes and finished it quickly.", name: "Chris & Jess", loc: "Baldwin Park", rating: 5 }
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
      <header className="relative bg-gradient-to-br from-[#584D94] via-[#7B6FCC] to-[#453A75] text-white pt-32 pb-24 px-4 text-center overflow-hidden">
        <div className="relative z-10 container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Furniture Assembly in Orlando
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-2 font-medium">
            Fast and correct assembly of furniture from any retailer.
          </p>
          <p className="text-lg text-blue-200 mb-8">
            Save time, avoid frustration, and enjoy sturdy, properly built results.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold text-[#64CEBB] mb-8 bg-white/10 backdrop-blur-md inline-flex py-2 px-6 rounded-full border border-white/20">
            <CheckCircle size={16} /> Licensed • Insured • 600+ Furniture Pieces Assembled in Orlando
          </div>

          <a href="tel:4077207476" className="btn-gradient-primary btn-gradient-shimmer">
            <Phone size={24} /> Call Now
          </a>
          <a href="sms:4077207476" className="btn-gradient-glass border-white/20 hover:bg-white/10">
            <span className="text-xl">💬</span> Text Us
          </a>
          <a href="mailto:info@luxht.com" className="btn-gradient-glass border-white/20 hover:bg-white/10">
            <Mail size={24} /> Email Us
          </a>
        </div>

        <div className="text-blue-200 text-sm opacity-90">
          <p className="font-bold">Furniture assembly starts at $75 per item</p>
          <p>Send product link or photo for instant estimate</p>
        </div>
      </div>
    </header>

      {/* SECTION 1: Services */ }
  <section className="py-20 px-4 container mx-auto">
    <div className="max-w-4xl mx-auto text-center mb-12">
      <h2 className="text-3xl font-bold text-[#584D94] mb-6">Expert Furniture Assembly Services</h2>
      <p className="text-lg text-slate-600 leading-relaxed mb-4">
        LUXHT Fix provides professional furniture assembly for Orlando homeowners. We assemble furniture from all major retailers:
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {[
        { title: "IKEA Furniture", desc: "All product lines & systems.", icon: Grid },
        { title: "Amazon & Wayfair", desc: "Online orders built right.", icon: Truck },
        { title: "Office Furniture", desc: "Desks, chairs & storage.", icon: Monitor },
        { title: "Bedroom Sets", desc: "Beds, dressers & nightstands.", icon: Grid },
        { title: "Dining Sets", desc: "Tables, chairs & stools.", icon: Utensils },
        { title: "Entertainment", desc: "TV stands & media centers.", icon: Tv },
        { title: "Bookcases", desc: "Shelving & wall units.", icon: Ruler },
        { title: "Outdoor Patio", desc: "Weather-ready assembly.", icon: Zap },
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
    <p className="text-center text-slate-500 mt-8 italic">Every assembly is completed correctly with attention to stability, alignment, and manufacturer specifications. No missing parts. No wobbly results.</p>
  </section>

  {/* SECTION 1.5: Recent Work Gallery */ }
  <section className="py-20 px-4 bg-slate-50">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-3xl font-bold text-[#584D94] text-center mb-12">Recent Projects Gallery</h2>

      {/* Grid of Project Images */}
      <GalleryGrid images={[
        { src: "/images/services/furniture-assembly/ikea-furniture.jpg", title: "IKEA Furniture", subtitle: "Expert Assembly" },
        { src: "/images/services/furniture-assembly/office-furniture.jpg", title: "Office Setup", subtitle: "Productive Workspaces" },
        { src: "/images/services/furniture-assembly/bedroom-sets.jpg", title: "Bedroom Suites", subtitle: "Rest Easy" },
        { src: "/images/services/furniture-assembly/dining-sets.jpg", title: "Dining Sets", subtitle: "Ready for Gathering" },
        { src: "/images/services/furniture-assembly/bookcases.jpg", title: "Bookcases & Storage", subtitle: "Organized Living" },
        { src: "/images/services/furniture-assembly/outdoor-patio.jpg", title: "Outdoor Patio", subtitle: "Weather-Ready" },
        { src: "/images/services/furniture-assembly/amazon-and-wayfair.jpg", title: "Online Retailers", subtitle: "Amazon & Wayfair" },
      ]}
      />

      <div className="text-center mt-12">
        <p className="text-slate-500 italic">Real photos of LUXHT Fix furniture assembly projects in Orlando.</p>
      </div>
    </div>
  </section>

  {/* SECTION 2: Our Process */ }
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl font-bold text-[#584D94] text-center mb-12">How We Assemble Your Furniture</h2>

      <div className="space-y-6 max-w-3xl mx-auto relative pl-8 border-l-2 border-[#584D94]/20">
        {[
          "Review assembly instructions and inventory all parts",
          "Organize hardware and components for efficient build",
          "Assemble furniture following manufacturer specifications",
          "Ensure proper alignment and structural stability",
          "Tighten all connections to manufacturer torque specs",
          "Test drawers, doors, and moving parts for smooth operation",
          "Position furniture in desired location",
          "Dispose of boxes and packing materials (optional)"
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
        <p className="text-slate-600 mb-8 font-medium">We bring all necessary tools and complete most assemblies in a single visit. Your furniture is built right the first time.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-gradient-primary btn-gradient-shimmer">
            Get Free Estimate
          </button>
          <a href="sms:4077207476" className="btn-gradient-secondary">
            <span>💬</span> Text Us
          </a>
        </div>
      </div>
    </div>
  </section>

  {/* SECTION 3: Why LUXHT Fix */ }
  <section className="py-20 px-4 container mx-auto bg-[#584D94]/5 rounded-3xl my-8 max-w-6xl">
    <div className="grid md:grid-cols-2 gap-12 items-start">
      <div>
        <h2 className="text-xl md:text-3xl font-bold text-[#584D94] mb-8">Why Orlando Homeowners Choose Us</h2>
        <ul className="space-y-4">
          {[
            "Professional assembly specialists with 600+ items built",
            "All retailers: IKEA, Amazon, Wayfair, Target, Home Depot",
            "Fast service - most items assembled same day",
            "Sturdy, stable results built to last",
            "No missing parts or assembly errors",
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
        <TestimonialCarousel customReviews={assemblyReviews} />
        <div className="text-center mt-4">
          <div className="flex justify-center text-[#64CEBB] mb-2">
            {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
          </div>
          <p className="text-sm text-slate-500 font-medium">Rated 4.9/5 from 127 Orlando customers</p>
        </div>
      </div>
    </div>
  </section>

  {/* SECTION 4: What Affects Your Cost */ }
  <section className="py-20 px-4 container mx-auto max-w-5xl text-center">
    <h2 className="text-3xl font-bold text-[#584D94] mb-4">What Affects Your Furniture Assembly Cost?</h2>
    <p className="text-slate-600 mb-12 max-w-2xl mx-auto">Every piece is different. Here are the key factors we consider when providing your personalized quote.</p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {[
        { title: "Item Size", desc: "Nightstand vs. king bed frame — larger items require more time and careful handling.", icon: Grid },
        { title: "Complexity", desc: "Simple shelf vs. modular wardrobe — the number of parts and steps matters.", icon: Hammer },
        { title: "Retailer", desc: "IKEA, Amazon, Wayfair — we're experienced with all instruction styles.", icon: Truck },
        { title: "Quantity", desc: "Single item vs. full room setup — multi-item discounts available.", icon: Ruler },
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
      <h3 className="font-bold text-[#584D94] mb-3">Popular Assembly Items</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {["IKEA Beds", "Office Desks", "Dining Sets", "Bookcases", "Entertainment Centers", "Patio Furniture"].map((item, i) => (
          <span key={i} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-slate-700 border border-slate-200">
            {item}
          </span>
        ))}
      </div>
    </div>

    <div className="bg-gradient-to-br from-[#584D94] to-[#453A75] text-white p-8 md:p-10 rounded-2xl max-w-3xl mx-auto shadow-xl">
      <h3 className="text-xl md:text-2xl font-bold mb-4">Get Your Personalized Quote</h3>
      <p className="mb-6 opacity-90 max-w-xl mx-auto">Send us the product link or photos for accurate pricing — or explore our detailed pricing guide.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/costs/furniture-assembly" className="btn-gradient-glass">
          <ArrowRight size={18} /> View Full Pricing Guide
        </Link>
        <button className="btn-gradient-primary btn-gradient-shimmer">
          <Phone size={18} /> Send Product Link
        </button>
      </div>
    </div>
  </section>

  {/* SECTION 5: FAQ */ }
  <section className="py-20 bg-slate-50 px-4">
    <div className="container mx-auto max-w-3xl">
      <h2 className="text-3xl font-bold text-[#584D94] text-center mb-12">Furniture Assembly FAQs - Orlando</h2>
      <div className="space-y-4">
        {[
          { q: "Who does furniture assembly in Orlando?", a: "LUXHT Fix specializes in professional furniture assembly with 600+ items assembled in Orlando. We handle all retailers including IKEA, Amazon, Wayfair, and more." },
          { q: "How much does furniture assembly cost in Orlando?", a: "Small items start at $75. Medium items like desks start at $100. Large items like beds start at $150. Exact pricing depends on complexity." },
          { q: "How long does furniture assembly take?", a: "Most single items take 30 minutes to 2 hours depending on complexity. IKEA beds typically take 1.5-2 hours. Office desks take 1-1.5 hours." },
          { q: "Do you assemble IKEA furniture?", a: "Yes. IKEA furniture is one of our specialties. We've assembled hundreds of IKEA items and are familiar with all their product lines and assembly systems." },
          { q: "What if parts are missing from my furniture?", a: "We inventory all parts before starting assembly. If parts are missing, we'll identify them and help you contact the retailer for replacements before completing the build." },
          { q: "Can you assemble furniture delivered by Amazon or Wayfair?", a: "Absolutely. We assemble furniture from all online retailers. Just send us the product link or take photos of the boxes for accurate estimates." }
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

  {/* SECTION 6: Service Area */ }
  <section className="py-20 px-4 container mx-auto max-w-4xl text-center">
    <h2 className="text-3xl font-bold text-[#584D94] mb-8">Furniture Assembly Service Areas</h2>
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {["Winter Park", "Maitland", "Altamonte Springs", "Lake Nona", "Dr. Phillips", "Windermere", "Ocoee", "Apopka", "Winter Garden", "College Park", "Baldwin Park"].map((area, i) => (
        <span key={i} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium border border-slate-200 inline-flex items-center gap-1">
          <MapPin size={14} className="text-[#64CEBB]" /> {area}
        </span>
      ))}
    </div>
    <p className="text-slate-500">Not sure if we serve your area? Call or message - we'll confirm quickly.</p>
  </section>

  {/* SECTION 7: Other Services */ }
  <section className="py-20 bg-white px-4 border-t border-slate-100">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-2xl font-bold text-[#584D94] text-center mb-12">Additional Home Services Available</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
        {[
          { title: "Drywall Repair", icon: Hammer },
          { title: "TV Mounting", icon: Tv },
          { title: "Flooring", icon: Grid },
          { title: "Deck Building", icon: Calendar },
          { title: "Smart Home", icon: Zap },
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

  {/* FINAL CTA */ }
  <section className="py-24 bg-gradient-to-br from-[#584D94] via-[#7B6FCC] to-[#453A75] text-white text-center px-4">
    <div className="container mx-auto max-w-2xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Furniture Assembled This Week?</h2>
      <p className="text-xl text-blue-100 mb-8 leading-relaxed">
        Fast, professional assembly from any retailer.<br />Orlando's trusted furniture assembly experts.
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
      <p className="text-sm opacity-75">Licensed • Insured • Same-Week Service • All Retailers</p>
    </div>
  </section>

    </main >
  );
}
