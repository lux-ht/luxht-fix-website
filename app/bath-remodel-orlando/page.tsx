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
  title: 'Bathroom Remodel Orlando | Complete Bath Renovations - LUXHT Fix',
  description: 'Professional bathroom remodeling in Orlando. Complete renovations including vanities, showers, tubs, tile, and fixtures. Free design consultation. Call today!',
};

export default function BathRemodelPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "LUXHT Fix - Bathroom Remodel Orlando",
    "image": "https://luxhtfix.com/images/bath-remodel.jpg",
    "url": "https://luxhtfix.com/bath-remodel-orlando",
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
      "name": "Who does the best bathroom remodels in Orlando?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LUXHT Fix specializes in complete bathroom renovations with 35+ projects completed in Orlando, handling everything from design to installation."
      }
    }, {
      "@type": "Question",
      "name": "How much does a bathroom remodel cost in Orlando?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Small bathroom refreshes start at $8,500. Full remodels range from $12,000-$18,000. Master bathrooms average $18,000-$25,000."
      }
    }, {
      "@type": "Question",
      "name": "How long does a bathroom remodel take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most bathroom remodels take 2-3 weeks from demolition to completion."
      }
    }]
  };

  const bathReviews: Review[] = [
    { text: "Our master bathroom went from outdated to spa-like in 3 weeks! The tile work is flawless and they stayed on budget. Best decision we made for our home.", name: "Karen & Steve M.", loc: "Lake Nona", rating: 5 },
    { text: "Converted our old tub to a walk-in shower. The glass installation is beautiful and the team was so respectful of our home.", name: "Patricia D.", loc: "Winter Park", rating: 5 },
    { text: "Full guest bath renovation. They handled the permits and plumbing perfectly. Highly recommended.", name: "Michael T.", loc: "Maitland", rating: 5 },
    { text: "Love our new double vanity and LED mirrors. The design advice was spot on.", name: "Jennifer K.", loc: "Oviedo", rating: 5 },
    { text: "Cleanest contractors we've ever hired. They protected our floors and cleaned up every day.", name: "Brian R.", loc: "Dr. Phillips", rating: 5 }
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
            Bathroom Remodel in Orlando
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-2 font-medium">
            Complete bathroom renovations including vanities, showers, tubs, tile, and fixtures.
          </p>
          <p className="text-lg text-blue-200 mb-8">
            Create a clean, modern, and functional space you'll love.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold text-[#64CEBB] mb-8 bg-white/10 backdrop-blur-md inline-flex py-2 px-6 rounded-full border border-white/20">
            <CheckCircle size={16} /> Licensed • Insured • 35+ Orlando Bathrooms Remodeled
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <a href="tel:4077207476" className="btn-gradient-primary btn-gradient-shimmer">
              <Phone size={24} /> Call Now
            </a>
            <a href="sms:4077207476" className="btn-gradient-glass border-white/20 hover:bg-white/10">
              <span className="text-xl">💬</span> Text Us
            </a>
            <a href="mailto:info@luxht.com?subject=Bath%20Remodel%20Quote%20Request" className="btn-gradient-glass border-white/20 hover:bg-white/10">
              <Mail size={24} /> Email Us
            </a>
          </div>
        </div>

        <div className="text-blue-200 text-sm opacity-90">
          <p className="font-bold">Bathroom remodels start at $8,500</p>
          <a href="sms:4077207476" className="hover:text-white underline underline-offset-2">📸 Send photos for free consultation</a>
        </div>
      </header>

      {/* SECTION 1: Services */}
      <section className="py-20 px-4 container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#584D94] mb-6">Complete Bathroom Renovation Services</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            LUXHT Fix provides full-service bathroom remodeling for Orlando homeowners. Our services include:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Design & Planning", desc: "Custom layouts & vision.", icon: Ruler },
            { title: "Vanity Install", desc: "Cabinets & countertops.", icon: Grid },
            { title: "Shower & Tub", desc: "Replacement & conversion.", icon: Bath },
            { title: "Tile Work", desc: "Floors, walls & surrounds.", icon: Grid },
            { title: "Fixtures", desc: "Modern faucets & toilets.", icon: Wrench },
            { title: "Lighting", desc: "LED mirrors & ventilation.", icon: Zap },
            { title: "Storage", desc: "Custom shelving solutions.", icon: DoorOpen },
            { title: "Accessibility", desc: "Grab bars & walk-ins.", icon: Shield },
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
        <p className="text-center text-slate-500 mt-8 italic">Every remodel is completed with attention to detail, quality materials, and clean execution for a bathroom that combines style and function.</p>
      </section>


      {/* SECTION 1.5: Recent Work Gallery */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-[#584D94] text-center mb-12">Recent Projects Gallery</h2>

          {/* Grid of Project Images */}
          <GalleryGrid images={[
            { src: "/images/services/bathroom-remodel/shower-and-tub-before.jpg", title: "Shower & Tub", subtitle: "Before: Dated Tile" },
            { src: "/images/services/bathroom-remodel/shower-and-tub-after.jpg", title: "Shower & Tub", subtitle: "After: Modern Spa" },
            { src: "/images/services/bathroom-remodel/vanity-install-before.jpg", title: "Vanity Install", subtitle: "Before: Old Cabinet" },
            { src: "/images/services/bathroom-remodel/vanity-install-after.jpg", title: "Vanity Install", subtitle: "After: Floating Vanity" },
            { src: "/images/services/bathroom-remodel/tile-work-before.jpg", title: "Tile Work", subtitle: "Before: Worn Floors" },
            { src: "/images/services/bathroom-remodel/tile-work-after.jpg", title: "Tile Work", subtitle: "After: Premium Porcelain" },
            { src: "/images/services/bathroom-remodel/design-and-planning-before.jpg", title: "Design Process", subtitle: "Before: Small Layout" },
            { src: "/images/services/bathroom-remodel/design-and-planning-after.jpg", title: "Design Process", subtitle: "After: Optimized Space" },
          ]}
          />

          <div className="text-center mt-12">
            <p className="text-slate-500 italic">Real photos of LUXHT Fix bathroom remodel projects in Orlando.</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Our Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#584D94] text-center mb-12">How We Remodel Your Bathroom</h2>

          <div className="space-y-6 max-w-3xl mx-auto relative pl-8 border-l-2 border-[#584D94]/20">
            {[
              "Free in-home consultation to discuss vision and budget",
              "Create detailed design plan with material selections",
              "Provide comprehensive written estimate",
              "Schedule project timeline (typically 2-3 weeks)",
              "Demo existing bathroom with careful protection",
              "Complete rough plumbing and electrical updates",
              "Install new shower/tub, tile, and waterproofing",
              "Install vanity, countertop, and fixtures",
              "Add finishing touches (lighting, mirrors, hardware)",
              "Final walkthrough and quality inspection"
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
            <p className="text-slate-600 mb-8 font-medium">We manage every detail from permits to cleanup so you can enjoy a stress-free renovation experience.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="btn-gradient-primary btn-gradient-shimmer">
                Get Free Consultation
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
                "Complete bathroom renovation specialists",
                "Custom designs tailored to your space and style",
                "Quality materials and professional craftsmanship",
                "Transparent pricing with detailed estimates",
                "On-time project completion (2-3 weeks typical)",
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
            <TestimonialCarousel customReviews={bathReviews} />
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
        <h2 className="text-3xl font-bold text-[#584D94] mb-4">What Affects Your Bathroom Remodel Cost?</h2>
        <p className="text-slate-600 mb-12 max-w-2xl mx-auto">Every bathroom is unique. Here are the key factors we consider when providing your personalized estimate.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: "Bathroom Size", desc: "Small half-bath vs. spacious master — square footage drives material quantities.", icon: Ruler },
            { title: "Scope of Work", desc: "Quick refresh vs. full demo — we tailor the project to your goals and budget.", icon: Hammer },
            { title: "Material Selections", desc: "Standard vs. premium tile, vanities, and fixtures — quality levels vary.", icon: Grid },
            { title: "Special Features", desc: "Heated floors, frameless glass, and custom tile work add luxury value.", icon: Zap },
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
          <h3 className="font-bold text-[#584D94] mb-3">Popular Upgrades</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Walk-in Shower", "Tub-to-Shower Conversion", "Double Vanity", "Heated Floors", "LED Mirrors", "Frameless Glass"].map((upgrade, i) => (
              <span key={i} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-slate-700 border border-slate-200">
                {upgrade}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#584D94] to-[#453A75] text-white p-8 md:p-10 rounded-2xl max-w-3xl mx-auto shadow-xl">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Get a Free Design Consultation</h3>
          <p className="mb-6 opacity-90 max-w-xl mx-auto">Every project receives a detailed written estimate after our free consultation — or explore our pricing guide.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/costs/bathroom-remodel" className="btn-gradient-glass">
              <ArrowRight size={18} /> View Full Pricing Guide
            </Link>
            <button className="btn-gradient-primary btn-gradient-shimmer">
              <Phone size={18} /> Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-[#584D94] text-center mb-12">Bathroom Remodel FAQs - Orlando</h2>
          <div className="space-y-4">
            {[
              { q: "Who does the best bathroom remodels in Orlando?", a: "LUXHT Fix specializes in complete bathroom renovations with 35+ projects completed in Orlando. We handle everything from design to final installation with quality craftsmanship." },
              { q: "How much does a bathroom remodel cost in Orlando?", a: "Pricing varies based on bathroom size, scope of work, and finishes selected. Visit our detailed pricing guide for typical costs, or schedule a consultation for a personalized estimate." },
              { q: "How long does a bathroom remodel take?", a: "Most bathroom remodels take 2-3 weeks from demolition to completion. Complex projects with custom tile or luxury features may take 3-4 weeks." },
              { q: "Can you convert my tub to a walk-in shower?", a: "Yes. Tub-to-shower conversions are very popular in Orlando bathrooms. We handle all plumbing, waterproofing, tile, and fixture installation." },
              { q: "Do you handle permits for bathroom remodels?", a: "Yes. We obtain all necessary permits for plumbing, electrical, and structural work to ensure your remodel meets Orlando building codes." },
              { q: "Can I use my bathroom during the remodel?", a: "Not typically. Most remodels require the bathroom to be out of service for 2-3 weeks. We work efficiently to minimize disruption and can discuss timeline strategies." }
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
        <h2 className="text-3xl font-bold text-[#584D94] mb-8">Bathroom Remodel Service Areas</h2>
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
              { title: "Kitchen Refacing", icon: Paintbrush },
              { title: "Faucet & Fixtures", icon: Wrench }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Bathroom?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Custom design. Quality materials. Expert craftsmanship.<br />Orlando's trusted bathroom remodeling experts.
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
          <p className="text-sm opacity-75">Licensed • Insured • Free Design Consultation • 2-3 Week Completion</p>
        </div>
      </section>

    </main >
  );
}
