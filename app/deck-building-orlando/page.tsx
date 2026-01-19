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
  title: 'Deck Building Orlando | Custom Deck Design & Construction - LUXHT Fix',
  description: 'Professional deck building in Orlando. Custom designs with durable materials and expert craftsmanship. Free estimates. Transform your outdoor space today!',
};

export default function DeckBuildingPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "LUXHT Fix - Deck Building Orlando",
    "image": "https://luxhtfix.com/images/deck-building.jpg",
    "url": "https://luxhtfix.com/deck-building-orlando",
    "telephone": "+1-407-720-7476",
    "priceRange": "$$$",
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
      "name": "Who builds the best custom decks in Orlando?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LUXHT Fix specializes in custom deck design and construction with 50+ decks built in Orlando, handling everything from design to permits."
      }
    }, {
      "@type": "Question",
      "name": "How much does it cost to build a deck in Orlando?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Basic decks start at $8,000. Mid-size decks average $15,000-$20,000. Pricing depends on size, materials, and complexity."
      }
    }, {
      "@type": "Question",
      "name": "Do I need a permit to build a deck in Orlando?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most decks require permits in Orlando. LUXHT Fix handles all permitting and ensures code compliance."
      }
    }]
  };

  const deckReviews: Review[] = [
    { text: "Our new deck completely transformed our backyard! The design process was easy and the quality is outstanding. Worth every penny.", name: "Tom & Maria L.", loc: "Lake Nona", rating: 5 },
    { text: "Built a solid composite deck for our pool area. The team was respectful, on time, and cleaned up perfectly.", name: "James P.", loc: "Windermere", rating: 5 },
    { text: "We love our new pergola and deck extension. It feels like an outdoor living room now.", name: "Sarah K.", loc: "Winter Park", rating: 5 },
    { text: "Professional from start to finish. They handled the HOA approval and permits without me doing a thing.", name: "Robert M.", loc: "Baldwin Park", rating: 5 },
    { text: "High quality craftsmanship. You can tell they take pride in their work. Highly recommend.", name: "David B.", loc: "Dr. Phillips", rating: 5 }
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
            Custom Deck Building in Orlando
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-2 font-medium">
            Expand your outdoor living space with durable materials and professional craftsmanship.
          </p>
          <p className="text-lg text-blue-200 mb-8">
            Custom designs that fit your home and lifestyle.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold text-[#64CEBB] mb-8 bg-white/10 backdrop-blur-md inline-flex py-2 px-6 rounded-full border border-white/20">
            <CheckCircle size={16} /> Licensed • Insured • 50+ Orlando Decks Built
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
          <p className="font-bold">Custom deck projects start at $8,000</p>
          <p>Free design consultation and estimate</p>
        </div>
      </div>
    </header>

      {/* SECTION 1: Deck Services */ }
  <section className="py-20 px-4 container mx-auto">
    <div className="max-w-4xl mx-auto text-center mb-12">
      <h2 className="text-3xl font-bold text-[#584D94] mb-6">Professional Deck Building Services</h2>
      <p className="text-lg text-slate-600 leading-relaxed mb-4">
        LUXHT Fix designs and builds custom decks for Orlando homeowners. Our services include:
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {[
        { title: "Custom Deck Design", desc: "Tailored to your home and needs.", icon: Ruler },
        { title: "Ground-Level Decks", desc: "Perfect for patios and flat yards.", icon: Grid },
        { title: "Multi-Level Decks", desc: "Maximize space on sloped lots.", icon: Grid },
        { title: "Composite & Wood", desc: "Durable materials for longevity.", icon: Shield },
        { title: "Stairs & Railings", desc: "Safe, code-compliant access.", icon: Grid },
        { title: "Pergolas & Shade", desc: "Add comfort to your outdoor space.", icon: Hammer },
      ].map((item, i) => (
        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all h-64 flex flex-col justify-center group hover:-translate-y-1">
          <div className="w-14 h-14 bg-[#584D94]/10 rounded-full flex items-center justify-center text-[#584D94] mb-6 group-hover:bg-[#584D94] group-hover:text-white transition-colors">
            <item.icon size={28} />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
          <p className="text-slate-500">{item.desc}</p>
        </div>
      ))}
    </div>
    <p className="text-center text-slate-500 mt-8 italic">Every deck is built with quality materials, proper structural support, and attention to detail.</p>
  </section>

  {/* SECTION 1.5: Recent Work Gallery */ }
  <section className="py-20 px-4 bg-slate-50">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-3xl font-bold text-[#584D94] text-center mb-12">Recent Projects Gallery</h2>

      {/* Grid of Project Images */}
      <GalleryGrid images={[
        { src: "/images/services/deck/custom-deck-design.jpg", title: "Custom Deck Design", subtitle: "Tailored to Your Home" },
        { src: "/images/services/deck/composite-and-wood.jpg", title: "Material Options", subtitle: "Composite & Wood" },
        { src: "/images/services/deck/multi-level-decks.jpg", title: "Multi-Level Decks", subtitle: "maximize Space" },
        { src: "/images/services/deck/pergolas-and-shade.jpg", title: "Pergolas & Shade", subtitle: "Cool Comfort" },
        { src: "/images/services/deck/stairs-and-railings.jpg", title: "Stairs & Railings", subtitle: "Safe & Stylish" },
        { src: "/images/services/deck/ground-level-decks.jpg", title: "Ground Level", subtitle: "Seamless Transition" },
      ]}
      />

      <div className="text-center mt-12">
        <p className="text-slate-500 italic">Real photos of LUXHT Fix deck building projects in Orlando.</p>
      </div>
    </div>
  </section>

  {/* SECTION 2: Our Process */ }
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl font-bold text-[#584D94] text-center mb-12">How We Build Your Custom Deck</h2>

      <div className="space-y-6 max-w-3xl mx-auto relative pl-8 border-l-2 border-[#584D94]/20">
        {[
          "Free consultation to discuss design, size, and budget",
          "Create custom deck design with 3D rendering",
          "Obtain necessary permits and HOA approvals",
          "Prepare site and install proper foundation/footings",
          "Build deck frame with pressure-treated lumber",
          "Install decking material (composite or wood)",
          "Add stairs, railings, and finishing touches",
          "Final inspection and walkthrough"
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
        <p className="text-slate-600 mb-8 font-medium">We handle every detail from permits to cleanup so you can enjoy your new outdoor space stress-free.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-gradient-primary btn-gradient-shimmer">
            Get Free Design Consultation
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
        <h2 className="text-xl md:text-3xl font-bold text-[#584D94] mb-8">Why Orlando Homeowners Choose Us for Deck Building</h2>
        <ul className="space-y-4">
          {[
            "Custom deck designs tailored to your home",
            "Quality materials: composite, pressure-treated, cedar",
            "Proper permitting and code compliance",
            "Structural engineering for safety and longevity",
            "Transparent pricing with detailed quotes",
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
        <TestimonialCarousel customReviews={deckReviews} />
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
    <h2 className="text-3xl font-bold text-[#584D94] mb-4">What Affects Your Deck Building Cost?</h2>
    <p className="text-slate-600 mb-12 max-w-2xl mx-auto">Every deck project is unique. Here are the key factors we consider when providing your personalized estimate.</p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {[
        { title: "Deck Size", desc: "Square footage directly impacts materials and labor — from cozy 12x12 to expansive multi-zones.", icon: Ruler },
        { title: "Materials", desc: "Pressure-treated, composite, or exotic hardwoods — each has different costs and maintenance needs.", icon: Shield },
        { title: "Design Complexity", desc: "Ground-level vs. elevated, multi-level stairs, and custom features affect the scope.", icon: Grid },
        { title: "Add-ons", desc: "Pergolas, built-in seating, lighting, and railings enhance your outdoor experience.", icon: Hammer },
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
      <h3 className="font-bold text-[#584D94] mb-3">Material Options</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {["Pressure-Treated Wood", "Composite Decking", "Cedar", "Exotic Hardwoods", "Aluminum Railings"].map((material, i) => (
          <span key={i} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-slate-700 border border-slate-200">
            {material}
          </span>
        ))}
      </div>
    </div>

    <div className="bg-gradient-to-br from-[#584D94] to-[#453A75] text-white p-8 md:p-10 rounded-2xl max-w-3xl mx-auto shadow-xl">
      <h3 className="text-xl md:text-2xl font-bold mb-4">Get a Free Design Consultation</h3>
      <p className="mb-6 opacity-90 max-w-xl mx-auto">Every project receives a detailed written estimate after our free consultation — or explore our pricing guide.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/costs/deck-building" className="btn-gradient-glass">
          <ArrowRight size={18} /> View Full Pricing Guide
        </Link>
        <button className="btn-gradient-primary btn-gradient-shimmer">
          <Phone size={18} /> Schedule Consultation
        </button>
      </div>
    </div>
  </section>

  {/* SECTION 5: FAQ */ }
  <section className="py-20 bg-slate-50 px-4">
    <div className="container mx-auto max-w-3xl">
      <h2 className="text-3xl font-bold text-[#584D94] text-center mb-12">Deck Building FAQs - Orlando</h2>
      <div className="space-y-4">
        {[
          { q: "Who builds the best custom decks in Orlando?", a: "LUXHT Fix specializes in custom deck design and construction with 50+ decks built in Orlando. We handle everything from design to permits to final installation." },
          { q: "How much does it cost to build a deck in Orlando?", a: "Pricing varies based on size, materials, and complexity. Visit our detailed pricing guide for typical costs, or schedule a consultation for a personalized estimate." },
          { q: "How long does deck construction take?", a: "Most deck projects take 2-4 weeks from design to completion, including permit approval time. Complex multi-level decks may take 4-6 weeks." },
          { q: "Do I need a permit to build a deck in Orlando?", a: "Yes, most decks require permits in Orlando. We handle all permitting and ensure your deck meets local building codes and HOA requirements." },
          { q: "What's better - wood or composite decking?", a: "Composite requires less maintenance and lasts longer but costs more upfront. Pressure-treated wood is more economical but needs regular staining. We'll help you choose based on your budget and maintenance preferences." },
          { q: "Can you add a roof or pergola to my deck?", a: "Yes. We design and build pergolas, shade structures, and covered deck areas as part of your custom deck project." }
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
    <h2 className="text-3xl font-bold text-[#584D94] mb-8">Deck Building Service Areas</h2>
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
          { title: "Door, Lock & Trim", icon: DoorOpen },
          { title: "Kitchen Refacing", icon: Utensils },
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
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Dream Deck?</h2>
      <p className="text-xl text-blue-100 mb-8 leading-relaxed">
        Custom designs. Quality materials. Expert craftsmanship.<br />Orlando's trusted deck builders.
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
      <p className="text-sm opacity-75">Licensed • Insured • Free Design Consultation • Permits Handled</p>
    </div>
  </section>

    </main >
  );
}
