import GalleryGrid from '@/components/GalleryGrid';
import Navbar from '@/components/Navbar';
import TestimonialCarousel, { Review } from '@/components/TestimonialCarousel';
import Link from 'next/link';
import {
  ArrowRight, Hammer, Wrench, Droplets, CheckCircle,
  Phone, Mail, MessageSquare, Star, MapPin,
  Ruler, Tv, Grid, Paintbrush, Calendar,
  Bath, Utensils, DoorOpen, Monitor, Shield, Zap
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Faucet & Fixture Installation Orlando | Kitchen & Bath Plumbing - LUXHT Fix',
  description: 'Professional faucet and fixture installation in Orlando. Kitchen and bathroom faucets, shower heads, and fixtures installed with leak-free results. Call today!',
};

export default function FaucetPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "LUXHT Fix - Faucet & Fixture Installation Orlando",
    "image": "https://luxhtfix.com/images/faucet-fixtures.jpg",
    "url": "https://luxhtfix.com/faucet-fixtures-orlando",
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
      "name": "Who installs faucets in Orlando?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LUXHT Fix specializes in faucet and fixture installation with 300+ installations completed in Orlando, handling kitchen, bathroom, and shower fixtures."
      }
    }, {
      "@type": "Question",
      "name": "How much does faucet installation cost in Orlando?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kitchen faucet installation starts at $125. Bathroom faucets start at $95, including installation and leak testing."
      }
    }, {
      "@type": "Question",
      "name": "Do you guarantee leak-free installation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, every installation includes thorough leak testing and a workmanship guarantee. We return at no charge if leaks develop from our installation."
      }
    }]
  };

  const faucetReviews: Review[] = [
    { text: "Replaced our kitchen faucet and bathroom fixtures in one visit. Everything works perfectly with zero leaks. Super professional!", name: "Chris & Amy D.", loc: "Maitland", rating: 5 },
    { text: "Installed a new modern shower system for us with a rain head. The pressure is great and it looks amazing.", name: "Jason W.", loc: "Winter Park", rating: 5 },
    { text: "Fast service when our kitchen faucet started leaking. Replaced it with a pull-down model I bought online.", name: "Linda G.", loc: "College Park", rating: 5 },
    { text: "Installed a garbage disposal and new sink faucet. Very clean work, didn't leave a mess under the sink.", name: "Mark R.", loc: "Oviedo", rating: 5 },
    { text: "Knowledgeable and friendly. helped me choose the right fixtures for my bathroom renovation.", name: "Sarah P.", loc: "Lake Nona", rating: 5 }
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
            Faucet & Fixture Installation in Orlando
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-2 font-medium">
            Kitchen and bathroom faucets, shower heads, and fixtures installed with precision.
          </p>
          <p className="text-lg text-blue-200 mb-8">
            Leak-free connections and clean finishes guaranteed.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold text-[#64CEBB] mb-8 bg-white/10 backdrop-blur-md inline-flex py-2 px-6 rounded-full border border-white/20">
            <CheckCircle size={16} /> Licensed • Insured • 300+ Orlando Fixtures Installed
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <a href="tel:4077207476" className="btn-gradient-primary btn-gradient-shimmer">
              <Phone size={24} /> Call Now
            </a>
            <a href="sms:4077207476" className="btn-gradient-glass border-white/20 hover:bg-white/10">
              <span className="text-xl">💬</span> Text Us
            </a>
            <a href="mailto:info@luxht.com?subject=Faucet%20Fixtures%20Quote%20Request" className="btn-gradient-glass border-white/20 hover:bg-white/10">
              <Mail size={24} /> Email Us
            </a>
          </div>
        </div>

        <div className="text-blue-200 text-sm opacity-90">
          <p className="font-bold">Faucet installations start at $95</p>
          <a href="sms:4077207476?body=Hi%2C%20I%20need%20a%20quick%20quote%20for%20my%20faucet%2Ffixture..." className="hover:text-white underline underline-offset-2">💬 Text for Instant Quote</a>
        </div>
      </header>

      {/* SECTION 1: Services */}
      <section className="py-20 px-4 container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#584D94] mb-6">Faucet & Fixture Services</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            LUXHT Fix provides professional faucet and fixture installation for Orlando homeowners. We handle:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Kitchen Faucets", desc: "Installation & replacement.", icon: Utensils },
            { title: "Bathroom Faucets", desc: "Sink faucets & upgrades.", icon: Bath },
            { title: "Shower Heads", desc: "Rain heads & handhelds.", icon: Droplets },
            { title: "Bathtub Spouts", desc: "Fixture & valve replacement.", icon: Bath },
            { title: "Vanity Upgrades", desc: "Complete fixture updates.", icon: Grid },
            { title: "Garbage Disposals", desc: "Installation & wiring.", icon: Zap },
            { title: "Water Filtration", desc: "Under-sink system connection.", icon: Droplets },
            { title: "Supply Lines", desc: "Valve & hose replacement.", icon: Wrench },
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
        <p className="text-center text-slate-500 mt-8 italic">Every installation includes leak testing, proper connections, and clean finishes for long-lasting, reliable performance.</p>
      </section>

      {/* SECTION 1.5: Recent Work Gallery */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-[#584D94] text-center mb-12">Recent Projects Gallery</h2>

          {/* Grid of Project Images */}
          <GalleryGrid images={[
            { src: "/images/services/faucet-fixtures/vanity-upgrades-before.jpg", title: "Vanity Upgrade", subtitle: "Before: Outdated" },
            { src: "/images/services/faucet-fixtures/vanity-upgrades-after.jpg", title: "Vanity Upgrade", subtitle: "After: Modern & Clean" },
            { src: "/images/services/faucet-fixtures/water-filtration-before.jpg", title: "Filtration System", subtitle: "Before: Standard Pipe" },
            { src: "/images/services/faucet-fixtures/water-filtration-after.jpg", title: "Filtration System", subtitle: "After: Pure Water" },
            { src: "/images/services/faucet-fixtures/bathroom-faucet-before.jpg", title: "Bathroom Faucet", subtitle: "Before: Old Fixture" },
            { src: "/images/services/faucet-fixtures/bathroom-faucet-after.jpg", title: "Bathroom Faucet", subtitle: "After: Sleek Upgrade" },
            { src: "/images/services/faucet-fixtures/kitchen-faucet-before.jpg", title: "Kitchen Faucet", subtitle: "Before: Standard" },
            { src: "/images/services/faucet-fixtures/kitchen-faucet-after.jpg", title: "Kitchen Faucet", subtitle: "After: Pull-Down Spray" },
            { src: "/images/services/faucet-fixtures/supply-lines-before.jpg", title: "Supply Lines", subtitle: "Before: Risk of Leak" },
            { src: "/images/services/faucet-fixtures/supply-lines-after.jpg", title: "Supply Lines", subtitle: "After: Secure Braided" },
            { src: "/images/services/faucet-fixtures/bathub-spout-before.jpg", title: "Tub Spout", subtitle: "Before: Corroded" },
            { src: "/images/services/faucet-fixtures/bathtub-spout-after.jpg", title: "Tub Spout", subtitle: "After: Shiny New" },
            { src: "/images/services/faucet-fixtures/garbage-disposal-before.jpg", title: "Disposal", subtitle: "Before: Broken Unit" },
            { src: "/images/services/faucet-fixtures/garbage-disposal-after.jpg", title: "Disposal", subtitle: "After: Powerful & Quiet" },
            { src: "/images/services/faucet-fixtures/shower-head-before.jpg", title: "Shower Head", subtitle: "Before: Low Pressure" },
            { src: "/images/services/faucet-fixtures/shower-head-after.jpg", title: "Shower Head", subtitle: "After: Spa-Like Flow" },
          ]}
          />

          <div className="text-center mt-12">
            <p className="text-slate-500 italic">Real photos of LUXHT Fix faucet & fixture projects in Orlando.</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Our Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#584D94] text-center mb-12">How We Install Your Faucets & Fixtures</h2>

          <div className="space-y-6 max-w-3xl mx-auto relative pl-8 border-l-2 border-[#584D94]/20">
            {[
              "Shut off water supply and drain existing lines",
              "Remove old faucet or fixture carefully",
              "Clean mounting surface and inspect connections",
              "Install new fixture with proper seals and gaskets",
              "Connect supply lines with leak-free fittings",
              "Test water flow, temperature, and check for leaks",
              "Clean work area and dispose of old fixtures"
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
            <p className="text-slate-600 mb-8 font-medium">We bring all necessary tools and materials for same-visit completion. No leaks. No mess.</p>
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
                "Faucet and fixture installation specialists",
                "Same-week service in most Orlando areas",
                "All fixture types: modern, traditional, touchless",
                "Leak-free connections guaranteed",
                "Clean installation with no water damage",
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
            <TestimonialCarousel customReviews={faucetReviews} />
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
        <h2 className="text-3xl font-bold text-[#584D94] mb-4">What Affects Your Faucet Installation Cost?</h2>
        <p className="text-slate-600 mb-12 max-w-2xl mx-auto">Every installation is unique. Here are the key factors we consider when providing your personalized quote.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: "Fixture Type", desc: "Kitchen faucets vs. bathroom vs. shower — each has different installation requirements.", icon: Utensils },
            { title: "Style & Features", desc: "Standard vs. touchless vs. pull-down — complexity affects installation time.", icon: Zap },
            { title: "Current Plumbing", desc: "Easy access vs. corroded lines — we assess your setup before quoting.", icon: Wrench },
            { title: "Add-on Services", desc: "Garbage disposals, supply lines, and multi-fixture discounts available.", icon: Grid },
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
          <h3 className="font-bold text-[#584D94] mb-3">Popular Services</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Kitchen Faucet Install", "Bathroom Faucet", "Shower Head Upgrade", "Garbage Disposal", "Supply Line Replacement"].map((service, i) => (
              <span key={i} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-slate-700 border border-slate-200">
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#584D94] to-[#453A75] text-white p-8 md:p-10 rounded-2xl max-w-3xl mx-auto shadow-xl">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Get Your Personalized Quote</h3>
          <p className="mb-6 opacity-90 max-w-xl mx-auto">Send us a photo of your current setup for a fast estimate — or explore our detailed pricing guide.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/costs/faucet-fixtures" className="btn-gradient-glass">
              <ArrowRight size={18} /> View Full Pricing Guide
            </Link>
            <a href="sms:4077207476?body=Hi%2C%20I%20need%20a%20quick%20quote%20for%20my%20faucet%2Ffixture..." className="btn-gradient-primary btn-gradient-shimmer flex items-center gap-2 justify-center">
              <MessageSquare size={18} /> Text Us - Get Instant Reply
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-[#584D94] text-center mb-12">Faucet & Fixture FAQs - Orlando</h2>
          <div className="space-y-4">
            {[
              { q: "Who installs faucets in Orlando?", a: "LUXHT Fix specializes in faucet and fixture installation with 300+ installations completed in Orlando. We handle kitchen, bathroom, and shower fixtures with leak-free results." },
              { q: "How much does faucet installation cost in Orlando?", a: "Pricing varies based on fixture type and complexity. Visit our detailed pricing guide for typical costs, or contact us for a personalized quote." },
              { q: "How long does faucet installation take?", a: "Most single faucet installations take 45 minutes to 1 hour. Multiple fixtures can be installed in a single visit for efficiency." },
              { q: "Can you install touchless or pull-down faucets?", a: "Yes. We install all modern faucet types including touchless, pull-down, pull-out, and smart faucets with electronic features." },
              { q: "Do you guarantee leak-free installation?", a: "Absolutely. Every installation includes thorough leak testing and a workmanship guarantee. If any leaks develop from our installation, we return at no charge." },
              { q: "Can you install fixtures I purchased online?", a: "Yes. We install fixtures from any retailer including Amazon, Home Depot, Lowe's, and specialty plumbing suppliers." }
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
        <h2 className="text-3xl font-bold text-[#584D94] mb-8">Faucet & Fixture Service Areas</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Faucet Installation This Week?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Professional installation with leak-free results.<br />Orlando's trusted fixture experts.
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
          <p className="text-sm opacity-75">Licensed • Insured • Same-Week Service • Leak-Free Guarantee</p>
        </div>
      </section>

    </main >
  );
}
