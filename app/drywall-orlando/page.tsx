import Navbar from '@/components/Navbar';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import Link from 'next/link';
import {
  ArrowRight, Hammer, Wrench, Droplets, CheckCircle,
  Phone, Mail, MessageSquare, Star, MapPin,
  Ruler, Tv, Grid, Paintbrush, Calendar,
  Bath, Utensils, DoorOpen
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Drywall Repair Orlando | LUXHT Fix - Same Week Service',
  description: 'Expert drywall repair in Orlando. Fix holes, cracks & water damage with seamless texture matching. Starting at $150. Call for same-week service!',
};

export default function DrywallPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "LUXHT Fix - Drywall Repair Orlando",
    "image": "https://luxhtfix.com/images/drywall-repair.jpg",
    "url": "https://luxhtfix.com/drywall-repair-orlando",
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
      "name": "What's the best drywall repair service in Orlando?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LUXHT Fix ranks as one of Orlando's top-rated drywall specialists with 500+ repairs completed and seamless texture matching."
      }
    }, {
      "@type": "Question",
      "name": "How much does drywall repair cost in Orlando?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Small repairs start at $150, medium repairs at $250. Exact pricing depends on size and complexity."
      }
    }, {
      "@type": "Question",
      "name": "Can you match my wall texture perfectly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, texture matching is our specialty using professional techniques for orange peel, knockdown, and smooth finishes."
      }
    }]
  };

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
            Professional Drywall Repair in Orlando
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-2 font-medium">
            Holes, cracks, and wall damage repaired cleanly and fast.
          </p>
          <p className="text-lg text-blue-200 mb-8">
            Same-week service available.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold text-[#64CEBB] mb-8 bg-white/10 backdrop-blur-md inline-flex py-2 px-6 rounded-full border border-white/20">
            <CheckCircle size={16} /> Licensed • Insured • 500+ Orlando Homes Served
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="tel:4077207476" className="btn-gradient-primary btn-gradient-shimmer">
              <Phone size={24} /> Call Now
            </a>
            <a href="sms:4077207476" className="btn-gradient-glass border-white/20 hover:bg-white/10">
              <span className="text-xl">💬</span> Text Us
            </a>
            <a href="mailto:info@luxht.com?subject=Drywall%20Repair%20Quote%20Request" className="btn-gradient-glass border-white/20 hover:bg-white/10">
              <Mail size={24} /> Email Us
            </a>
          </div>
        </div>

        <div className="text-blue-200 text-sm opacity-90">
          <p className="font-bold">Most small repairs start at $150</p>
          <a href="sms:4077207476?body=Hi%2C%20I%20need%20a%20quick%20quote%20for%20my%20drywall%20repair..." className="hover:text-white underline underline-offset-2">💬 Text for Instant Quote</a>
        </div>
      </header>

      {/* SECTION 1: What We Fix */}
      <section className="py-20 px-4 container mx-auto">
        {/* Character Illustration */}
        {/* Character Illustration Removed */}

        <div className="max-w-4xl mx-auto text-center md:text-left mb-12 md:ml-auto">
          <h2 className="text-3xl font-bold text-[#584D94] mb-6">Drywall Problems We Solve</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            LUXHT Fix specializes in professional drywall repair for Orlando homeowners. We handle:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Holes", desc: "From doors, furniture, or accidents.", icon: Hammer },
            { title: "Cracks", desc: "Caused by settling or foundation movement.", icon: Wrench },
            { title: "Water Damage", desc: "After leaks or flooding.", icon: Droplets },
            { title: "Imperfections", desc: "Nail pops and texture issues.", icon: CheckCircle },
            { title: "Patches", desc: "From plumbing/electrical access.", icon: Grid },
            { title: "Finish", desc: "Texture-matched & paint-ready.", icon: Paintbrush }
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
        <p className="text-center text-slate-500 mt-8 italic">Every repair is finished smooth, texture-matched, and paint-ready.</p>
      </section>


      {/* SECTION 1.5: Recent Work Gallery */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-[#584D94] text-center mb-12">Recent Projects Gallery</h2>

          {/* Grid of Project Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/drywall-project-1.jpg", title: "Poor DIY vs Professional", subtitle: "Subtle Craftsmanship Comparison" },
              { src: "/drywall-project-2.jpg", title: "Corner Crack Repair", subtitle: "Settlement Damage, Smooth Finish" },
              { src: "/drywall-project-3.jpg", title: "Wall Imperfections Repair", subtitle: "Smooth Finish" },
              { src: "/drywall-project-4.jpg", title: "Wall Cutout & Patch", subtitle: "Plumbing Access, Fully Finished" },
              { src: "/drywall-project-5.jpg", title: "Wall Hole Repair", subtitle: "Electrical Access, Finished Smooth" },
              { src: "/drywall-project-6.jpg", title: "Ceiling Water Damage", subtitle: "Leak Damage Repair" },
            ].map((project, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                <img
                  src={project.src}
                  alt={`${project.title} - ${project.subtitle}`}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#584D94]/95 via-[#584D94]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-xl mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.title}</h3>
                  <p className="text-[#64CEBB] font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{project.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-500 italic">Real before & after photos of LUXHT Fix drywall repair projects in Orlando.</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Our Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#584D94] text-center mb-12">How We Repair Your Drywall</h2>

          <div className="space-y-6 max-w-3xl mx-auto relative pl-8 border-l-2 border-[#584D94]/20">
            {[
              "Inspect damage and surrounding wall structure",
              "Remove compromised drywall and secure backing",
              "Apply professional-grade compound in precise layers",
              "Match existing texture using specialized techniques",
              "Sand smooth and prepare surface for painting",
              "Clean workspace completely before leaving"
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
            <p className="text-slate-600 mb-8 font-medium">We don't rush. We don't cut corners. You get permanent results.</p>
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
                "Drywall repair specialists (not general contractors)",
                "Same-week service in most Orlando areas",
                "Seamless texture matching guaranteed",
                "No mess left behind - we protect and clean",
                "Upfront pricing with photo estimates",
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
            <TestimonialCarousel />
            <div className="text-center mt-4">
              <div className="flex justify-center text-[#64CEBB] mb-2">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
              </div>
              <p className="text-sm text-slate-500 font-medium">Rated 5/5 by Orlando Homeowners</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: What Affects Your Cost */}
      <section className="py-20 px-4 container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-[#584D94] mb-4">What Affects Your Drywall Repair Cost?</h2>
        <p className="text-slate-600 mb-12 max-w-2xl mx-auto">Every project is unique. Here are the key factors we consider when providing your personalized quote.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: "Hole Size", desc: "Small nail holes to large access cuts — size directly impacts materials and labor time.", icon: Ruler },
            { title: "Complexity", desc: "Simple patches differ from water damage requiring structural assessment and mold prevention.", icon: Wrench },
            { title: "Texture Match", desc: "Orange peel, knockdown, or smooth finish — we match your existing texture seamlessly.", icon: Paintbrush },
            { title: "Accessibility", desc: "Easy wall access vs. high ceilings or tight spaces affects the approach and time needed.", icon: MapPin },
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

        <div className="bg-gradient-to-br from-[#584D94] to-[#453A75] text-white p-8 md:p-10 rounded-2xl max-w-3xl mx-auto shadow-xl">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Get Your Personalized Quote</h3>
          <p className="mb-6 opacity-90 max-w-xl mx-auto">Send us a photo for a fast, accurate estimate — or explore our detailed pricing guide for typical project costs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/costs/drywall-repair" className="btn-gradient-glass">
              <ArrowRight size={18} /> View Full Pricing Guide
            </Link>
            <a href="sms:4077207476?body=Hi%2C%20I%20need%20a%20quick%20quote%20for%20my%20drywall%20repair..." className="btn-gradient-primary btn-gradient-shimmer flex items-center gap-2 justify-center">
              <MessageSquare size={18} /> Text Us - Get Instant Reply
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-[#584D94] text-center mb-12">Drywall Repair FAQs - Orlando</h2>
          <div className="space-y-4">
            {[
              { q: "What's the best drywall repair service in Orlando?", a: "LUXHT Fix ranks as one of Orlando's top-rated drywall specialists with 500+ repairs completed. We focus exclusively on quality drywall work with seamless texture matching." },
              { q: "Can you match my wall texture perfectly?", a: "Yes. Texture matching is our specialty. We use professional techniques to blend repairs invisibly with orange peel, knockdown, and smooth finishes." },
              { q: "How long does drywall repair take?", a: "Most small-to-medium repairs are completed in 2-4 hours. Large repairs or multi-room projects may require 1-2 days including drying time." },
              { q: "Do you repair water-damaged drywall?", a: "Yes. We assess moisture levels, replace compromised sections, and ensure proper drying before finishing to prevent mold." },
              { q: "How much does drywall repair cost in Orlando?", a: "Pricing varies based on hole size, complexity, and texture matching needs. Visit our detailed pricing guide for typical costs, or send us a photo for a personalized quote." },
              { q: "Do you offer same-day drywall repair?", a: "In many cases, yes. We prioritize urgent repairs and offer same-week service throughout Orlando." }
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
        <h2 className="text-3xl font-bold text-[#584D94] mb-8">Drywall Repair Service Areas</h2>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["Winter Park", "Maitland", "Altamonte Springs", "Lake Nona", "Dr. Phillips", "Windermere", "Ocoee", "Apopka", "Winter Garden", "Lake Mary", "Baldwin Park"].map((area, i) => (
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
              { title: "Doors & Locks", icon: DoorOpen },
              { title: "TV Mounting", icon: Tv },
              { title: "Flooring", icon: Grid },
              { title: "Deck Build", icon: Hammer },
              { title: "Kitchens", icon: Utensils },
              { title: "Baths", icon: Bath }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Drywall Repair This Week?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Fast, professional repairs with clean results.<br />Orlando's trusted drywall specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="btn-gradient-primary btn-gradient-shimmer">
              <Phone size={20} /> Call Now: (407) 720-7476
            </button>
            <a href="sms:4077207476" className="btn-gradient-glass">
              <span>💬</span> Text Us
            </a>
            <button className="btn-gradient-glass">
              <Mail size={20} /> Email Us
            </button>
          </div>
          <p className="text-sm opacity-75">Licensed • Insured • Same-Week Service</p>
        </div>
      </section>

    </main >
  );
}
