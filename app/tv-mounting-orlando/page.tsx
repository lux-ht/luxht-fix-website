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
  title: 'TV Mounting Orlando | Professional Installation - LUXHT Fix',
  description: 'Expert TV mounting in Orlando. Secure installation with concealed cables on any wall type. Starting at $120. Same-week service. Call today!',
};

export default function TVMountingPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "LUXHT Fix - TV Mounting Orlando",
    "image": "https://luxhtfix.com/images/tv-mounting.jpg",
    "url": "https://luxhtfix.com/tv-mounting-orlando",
    "telephone": "+1-407-288-0832",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street",
      "addressLocality": "Orlando",
      "addressRegion": "FL",
      "postalCode": "32801",
      "addressCountry": "US"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What's the best TV mounting service in Orlando?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LUXHT Fix specializes in professional TV mounting with 300+ installations in Orlando and concealed cable solutions."
      }
    }, {
      "@type": "Question",
      "name": "How much does TV mounting cost in Orlando?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Small TVs start at $120, medium TVs at $150, large TVs at $200. Pricing depends on size and wall type."
      }
    }, {
      "@type": "Question",
      "name": "Do you hide the cables?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Cable concealment is included in every installation. We route cables behind walls or use professional cable covers."
      }
    }]
  };

  const tvReviews: Review[] = [
    { text: "Mounted our 75\" TV perfectly with all cables hidden. Looks like it was built into the wall!", name: "Mike R.", loc: "Lake Nona", rating: 5 },
    { text: "Professional, quick, and clean. They mounted my TV on a brick fireplace with no issues.", name: "Sarah J.", loc: "Winter Park", rating: 5 },
    { text: "Excellent cable management. My setup looks so clean now.", name: "David L.", loc: "Downtown Orlando", rating: 5 },
    { text: "Arrived on time and did a fantastic job mounting two TVs in my new home.", name: "Emily W.", loc: "Baldwin Park", rating: 5 },
    { text: "Highly recommend for anyone needing secure TV installation. Very knowledgeable.", name: "Chris P.", loc: "Altamonte Springs", rating: 5 }
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
            Professional TV Mounting in Orlando
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-2 font-medium">
            Secure installation with concealed cables and optimized viewing angles.
          </p>
          <p className="text-lg text-blue-200 mb-8">
            Same-week service available.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold text-[#64CEBB] mb-8 bg-white/10 backdrop-blur-md inline-flex py-2 px-6 rounded-full border border-white/20">
            <CheckCircle size={16} /> Licensed • Insured • 300+ TVs Mounted in Orlando
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <a href="tel:4072880832" className="btn-gradient-primary btn-gradient-shimmer">
              <Phone size={24} /> Call Now
            </a>
            <a href="#contact" className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 text-white font-bold py-4 px-10 rounded-full hover:bg-white/20 transition-all flex items-center gap-2 transform hover:scale-105 duration-200">
              <Mail size={24} /> Contact Us
            </a>
          </div>

          <div className="text-blue-200 text-sm opacity-90">
            <p className="font-bold">TV mounting starts at $120</p>
            <p>Send a photo for instant estimate</p>
          </div>
        </div>
      </header>

      {/* SECTION 1: What We Mount */}
      <section className="py-20 px-4 container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#584D94] mb-6">TV Mounting Services We Provide</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            LUXHT Fix offers professional TV mounting for Orlando homes. We handle:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Flat Screen TVs", desc: "All sizes: 32\" to 85\"+.", icon: Tv },
            { title: "Soundbar Installation", desc: "Mounted securely below TV.", icon: Monitor },
            { title: "Cable Management", desc: "Concealment for a clean look.", icon: Zap },
            { title: "Any Wall Type", desc: "Drywall, studs, concrete, or brick.", icon: Hammer },
            { title: "Mount Types", desc: "Fixed, tilting, and full-motion.", icon: Grid },
            { title: "Outdoor TV", desc: "Weather-safe patio installation.", icon: Shield },
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
        <p className="text-center text-slate-500 mt-8 italic">Every installation includes proper anchoring, level placement, and organized cables.</p>
      </section>

      {/* SECTION 2: Our Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#584D94] text-center mb-12">How We Mount Your TV</h2>

          <div className="space-y-6 max-w-3xl mx-auto relative pl-8 border-l-2 border-[#584D94]/20">
            {[
              "Confirm TV size, wall type, and desired viewing height",
              "Locate studs or install proper wall anchors",
              "Mount bracket securely with professional-grade hardware",
              "Level and attach TV to bracket",
              "Conceal or organize all cables (HDMI, power, etc.)",
              "Test stability and optimize viewing angle"
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
            <p className="text-slate-600 mb-8 font-medium">We protect your walls and floors throughout the entire process.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-gradient-primary btn-gradient-shimmer">
                Get Free Estimate
              </button>
              <a href="tel:4072880832" className="btn-gradient-secondary">
                <Phone size={18} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Why LUXHT Fix */}
      <section className="py-20 px-4 container mx-auto bg-[#584D94]/5 rounded-3xl my-8 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-xl md:text-3xl font-bold text-[#584D94] mb-8">Why Orlando Homeowners Choose Us for TV Mounting</h2>
            <ul className="space-y-4">
              {[
                "TV mounting specialists (not general contractors)",
                "Same-week service in most Orlando areas",
                "Concealed cable solutions included",
                "All wall types: drywall, brick, concrete",
                "Adjustable mounts for perfect viewing angles",
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
            <TestimonialCarousel customReviews={tvReviews} />
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
        <h2 className="text-3xl font-bold text-[#584D94] mb-4">What Affects Your TV Mounting Cost?</h2>
        <p className="text-slate-600 mb-12 max-w-2xl mx-auto">Every installation is unique. Here are the key factors we consider when providing your personalized quote.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: "TV Size", desc: "32\" to 85\"+ — larger TVs require heavier-duty mounts and more careful handling.", icon: Tv },
            { title: "Wall Type", desc: "Drywall with studs vs. brick or concrete — each requires different hardware and techniques.", icon: Hammer },
            { title: "Cable Management", desc: "Surface covers vs. in-wall concealment — we offer clean solutions for any setup.", icon: Zap },
            { title: "Mount Type", desc: "Fixed, tilting, or full-motion — your viewing preferences determine the best option.", icon: Grid },
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
          <h3 className="font-bold text-[#584D94] mb-3">Popular Add-ons</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Soundbar Mounting", "In-Wall Cable Concealment", "Outdoor TV Setup", "Fireplace Installation", "Multi-Room Setup"].map((service, i) => (
              <span key={i} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-slate-700 border border-slate-200">
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#584D94] to-[#453A75] text-white p-8 md:p-10 rounded-2xl max-w-3xl mx-auto shadow-xl">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Get Your Personalized Quote</h3>
          <p className="mb-6 opacity-90 max-w-xl mx-auto">Send us a photo of your wall and TV for a fast estimate — or explore our detailed pricing guide.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/costs/tv-mounting" className="btn-gradient-glass">
              <ArrowRight size={18} /> View Full Pricing Guide
            </Link>
            <button className="btn-gradient-primary btn-gradient-shimmer">
              <Phone size={18} /> Send Photo for Quote
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-[#584D94] text-center mb-12">TV Mounting FAQs - Orlando</h2>
          <div className="space-y-4">
            {[
              { q: "What's the best TV mounting service in Orlando?", a: "LUXHT Fix specializes in professional TV mounting with 300+ installations in Orlando. We handle all wall types and provide concealed cable solutions." },
              { q: "Can you mount a TV on any wall?", a: "Yes. We mount on drywall (with studs or anchors), brick, concrete, and outdoor surfaces using the correct hardware for each material." },
              { q: "How long does TV mounting take?", a: "Most TV mounting jobs are completed in 1-2 hours, including cable management." },
              { q: "Do you hide the cables?", a: "Yes. Cable concealment is included in every installation. We route cables behind walls or use professional cable covers." },
              { q: "How much does TV mounting cost in Orlando?", a: "Pricing varies based on TV size, wall type, and cable management needs. Visit our detailed pricing guide for typical costs, or send us a photo for a personalized quote." },
              { q: "Can you mount TVs above fireplaces?", a: "Yes. We specialize in fireplace TV mounting with proper heat considerations and adjustable mounts for optimal viewing." }
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
        <h2 className="text-3xl font-bold text-[#584D94] mb-8">TV Mounting Service Areas</h2>
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
              { title: "Door, Lock & Trim", icon: DoorOpen },
              { title: "Flooring", icon: Grid },
              { title: "Deck Building", icon: Calendar },
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

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-br from-[#584D94] via-[#7B6FCC] to-[#453A75] text-white text-center px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need TV Mounting This Week?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Professional installation with concealed cables.<br />Orlando's trusted TV mounting experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:4072880832" className="btn-gradient-primary btn-gradient-shimmer">
              <Phone size={20} /> Call Now: (407) 288-0832
            </a>
            <a href="#contact" className="btn-gradient-glass">
              <Mail size={20} /> Contact Us
            </a>
          </div>
          <p className="text-sm opacity-75">Licensed • Insured • Same-Week Service</p>
        </div>
      </section>

    </main>
  );
}
