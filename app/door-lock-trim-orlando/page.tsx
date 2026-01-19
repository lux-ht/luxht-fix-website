import GalleryGrid from '@/components/GalleryGrid';
import Navbar from '@/components/Navbar';
import TestimonialCarousel, { Review } from '@/components/TestimonialCarousel';
import Link from 'next/link';
import {
  ArrowRight, Hammer, Wrench, Droplets, CheckCircle,
  Phone, Mail, MessageSquare, Star, MapPin,
  Ruler, Tv, Grid, Paintbrush, Calendar,
  Bath, Utensils, DoorOpen, Monitor, Shield, Zap, Crown, Settings
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Door, Lock & Trim Repair Orlando | Fix Squeaky Doors & Install Locks - LUXHT Fix',
  description: 'Professional door, lock, and trim services in Orlando. Fix squeaky doors, install new locks, replace handles and trim. Same-week service. Call today!',
};

export default function DoorLockPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "LUXHT Fix - Door, Lock & Trim Orlando",
    "image": "https://luxhtfix.com/images/door-lock-trim.jpg",
    "url": "https://luxhtfix.com/door-lock-trim-orlando",
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
      "name": "Who fixes squeaky doors in Orlando?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LUXHT Fix specializes in door repair and adjustment, having fixed 400+ squeaky doors in Orlando through hinge tightening and hardware replacement."
      }
    }, {
      "@type": "Question",
      "name": "How much does lock installation cost in Orlando?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lock installation starts at $95 for standard deadbolts. Smart lock installation ranges from $150-$250."
      }
    }, {
      "@type": "Question",
      "name": "Can you install smart locks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, LUXHT Fix installs all major smart lock brands including August, Schlage Encode, Yale, and Kwikset with full smartphone integration."
      }
    }]
  };

  const doorReviews: Review[] = [
    { text: "Fixed three squeaky doors and installed new deadbolts in under 2 hours. No more annoying sounds and we feel much more secure!", name: "Rachel T.", loc: "Winter Park", rating: 5 },
    { text: "Installed a Schlage smart lock for us. It works perfectly and the installation was very clean.", name: "Michael B.", loc: "Lake Nona", rating: 5 },
    { text: "Great job replacing our baseboards after new flooring was put in. The cuts are precise and the caulking is neat.", name: "Sophia L.", loc: "Baldwin Park", rating: 5 },
    { text: "Came out the same day to fix a door that wouldn't latch. Simple fix but huge relief.", name: "David K.", loc: "Altamonte Springs", rating: 5 },
    { text: "Very professional. Replaced all our old gold doorknobs with modern black ones. Looks like a new house.", name: "Jessica M.", loc: "Dr. Phillips", rating: 5 }
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
            Door, Lock & Trim Services in Orlando
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-2 font-medium">
            Fix squeaky doors, install new locks, and replace handles, hinges, and trim.
          </p>
          <p className="text-lg text-blue-200 mb-8">
            Improve security, function, and comfort throughout your home.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold text-[#64CEBB] mb-8 bg-white/10 backdrop-blur-md inline-flex py-2 px-6 rounded-full border border-white/20">
            <CheckCircle size={16} /> Licensed • Insured • 400+ Orlando Homes Serviced
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <a href="tel:4077207476" className="btn-gradient-primary btn-gradient-shimmer">
              <Phone size={24} /> Call Now
            </a>
            <a href="sms:4077207476" className="btn-gradient-glass border-white/20 hover:bg-white/10">
              <span className="text-xl">💬</span> Text Us
            </a>
            <a href="mailto:info@luxht.com?subject=Door%20Lock%20Trim%20Quote%20Request" className="btn-gradient-glass border-white/20 hover:bg-white/10">
              <Mail size={24} /> Email Us
            </a>
          </div>
        </div>

        <div className="text-blue-200 text-sm opacity-90">
          <p className="font-bold">Door services start at $85</p>
          <a href="sms:4077207476?body=Attached%20photos%20for%20quote%20for%20my%20door%2Flock%20issue..." className="hover:text-white underline underline-offset-2">💬 Send a photo for instant estimate</a>
        </div>
      </header>

      {/* SECTION 1: Services */}
      <section className="py-20 px-4 container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#584D94] mb-6">Door, Lock & Trim Solutions</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            LUXHT Fix handles all door, lock, and trim needs for Orlando homeowners. We provide:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Door Repair", desc: "Squeaky doors & hinge replacement.", icon: DoorOpen },
            { title: "Handle Install", desc: "New knobs, levers, and hardware.", icon: Hammer },
            { title: "Lock Install", desc: "Deadbolts & smart locks.", icon: Shield },
            { title: "Door Adjustment", desc: "Fixing alignment & sticking.", icon: Wrench },
            { title: "Frame Repair", desc: "Reinforcement & draft sealing.", icon: Grid },
            { title: "Baseboards", desc: "Installation & replacement.", icon: Ruler },
            { title: "Crown Molding", desc: "Elegant ceiling trim updates.", icon: Crown },
            { title: "Weather Strip", desc: "Draft sealing for efficiency.", icon: Zap },
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
        <p className="text-center text-slate-500 mt-8 italic">Every service is completed with precision for smooth operation, enhanced security, and a polished appearance.</p>
      </section>

      {/* SECTION 1.5: Recent Work Gallery */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-[#584D94] text-center mb-12">Recent Projects Gallery</h2>

          {/* Grid of Project Images */}
          <GalleryGrid images={[
            { src: "/images/services/door-lock/door-adjustment-before.jpg", title: "Door Adjustment", subtitle: "Before: Misaligned" },
            { src: "/images/services/door-lock/door-adjustment-after.jpg", title: "Door Adjustment", subtitle: "After: Smooth Operation" },
            { src: "/images/services/door-lock/crown-molding-before.jpg", title: "Crown Molding", subtitle: "Before: Installation" },
            { src: "/images/services/door-lock/crown-molding-after.jpg", title: "Crown Molding", subtitle: "After: Elegant Finish" },
            { src: "/images/services/door-lock/door-repair-before.jpg", title: "Door Repair", subtitle: "Before: Damaged" },
            { src: "/images/services/door-lock/door-repair-after.jpg", title: "Door Repair", subtitle: "After: Restored" },
            { src: "/images/services/door-lock/frame-repair-before.jpg", title: "Frame Repair", subtitle: "Before: Compromised" },
            { src: "/images/services/door-lock/frame-repair-after.jpg", title: "Frame Repair", subtitle: "After: Secure & Solid" },
            { src: "/images/services/door-lock/lock-install-in-progress-before.jpg", title: "Lock Install", subtitle: "Before: Preparation" },
            { src: "/images/services/door-lock/lock-install-in-progress-after.jpg", title: "Lock Install", subtitle: "After: Secure Installation" },
            { src: "/images/services/door-lock/basboard-before.jpg", title: "Baseboard", subtitle: "Before: Replacement" },
            { src: "/images/services/door-lock/basboard-after.jpg", title: "Baseboard", subtitle: "After: Clean Finish" },
            { src: "/images/services/door-lock/handle-install-before.jpg", title: "Handle Install", subtitle: "Before: Old Hardware" },
            { src: "/images/services/door-lock/handle-install-close-door-fully-technician-slightly-out-of-frame.jpg", title: "Handle Install", subtitle: "After: Modern Hardware" },
            { src: "/images/services/door-lock/handle-install-technician-stepping-back-half-a-step-hands-relaxed.jpg", title: "Professional Service", subtitle: "Expert Installation" },
          ]}
          />

          <div className="text-center mt-12">
            <p className="text-slate-500 italic">Real photos of LUXHT Fix door, lock & trim projects in Orlando.</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Our Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#584D94] text-center mb-12">How We Fix Your Doors, Locks & Trim</h2>

          <div className="space-y-6 max-w-3xl mx-auto relative pl-8 border-l-2 border-[#584D94]/20">
            {[
              "Inspect door function, hardware, and trim condition",
              "Identify issues (squeaks, alignment, loose hardware)",
              "Tighten hinges, adjust alignment, or replace worn parts",
              "Install new locks, handles, or deadbolts securely",
              "Replace or install trim with precise measurements",
              "Test operation and ensure smooth, quiet function",
              "Clean work area completely"
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
            <p className="text-slate-600 mb-8 font-medium">We bring all necessary tools and hardware for efficient, same-visit completion.</p>
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
                "Door and lock specialists (not general contractors)",
                "Same-week service in most Orlando areas",
                "All hardware types: modern, traditional, smart locks",
                "Security-focused lock installations",
                "Precise trim work for clean, finished look",
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
            <TestimonialCarousel customReviews={doorReviews} />
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
        <h2 className="text-3xl font-bold text-[#584D94] mb-4">What Affects Your Door & Lock Service Cost?</h2>
        <p className="text-slate-600 mb-12 max-w-2xl mx-auto">Every home is different. Here's what we consider when creating your personalized quote.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: "Service Type", desc: "Simple hinge adjustment vs. full lock replacement — each service has different requirements.", icon: Settings },
            { title: "Hardware Quality", desc: "Standard hardware vs. premium smart locks — we work with all budgets and preferences.", icon: Shield },
            { title: "Number of Units", desc: "Single door fix vs. whole-house hardware upgrade — bulk service saves you money.", icon: DoorOpen },
            { title: "Complexity", desc: "Quick fix vs. frame repair or custom trim work — we assess before quoting.", icon: Wrench },
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
          <h3 className="font-bold text-[#584D94] mb-3">Popular Services Include</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Squeaky Door Fix", "Deadbolt Install", "Smart Lock Setup", "Handle Replacement", "Baseboard Install", "Crown Molding"].map((service, i) => (
              <span key={i} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-slate-700 border border-slate-200">
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#584D94] to-[#453A75] text-white p-8 md:p-10 rounded-2xl max-w-3xl mx-auto shadow-xl">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Get Your Personalized Quote</h3>
          <p className="mb-6 opacity-90 max-w-xl mx-auto">Tell us what you need — or explore our detailed pricing guide for typical project costs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/costs/door-lock-trim" className="btn-gradient-glass">
              <ArrowRight size={18} /> View Full Pricing Guide
            </Link>
            <a href="sms:4077207476?body=Attached%20photos%20for%20quote%20for%20my%20door%2Flock%20issue..." className="btn-gradient-primary btn-gradient-shimmer flex items-center gap-2 justify-center">
              <MessageSquare size={18} /> Send Photo for Quote
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-[#584D94] text-center mb-12">Door, Lock & Trim FAQs - Orlando</h2>
          <div className="space-y-4">
            {[
              { q: "Who fixes squeaky doors in Orlando?", a: "LUXHT Fix specializes in door repair and adjustment. We've fixed 400+ squeaky doors in Orlando by tightening hinges, lubricating hardware, or replacing worn components." },
              { q: "How much does it cost to install a new lock in Orlando?", a: "Pricing varies based on lock type and complexity. Visit our detailed pricing guide for typical costs, or send us a photo for a personalized quote." },
              { q: "How long does door and lock service take?", a: "Most door repairs and lock installations are completed in 30 minutes to 1 hour per door. Multiple doors can be serviced in a single visit." },
              { q: "Can you install smart locks?", a: "Yes. We install all major smart lock brands including August, Schlage Encode, Yale, and Kwikset smart locks with full smartphone integration." },
              { q: "Do you install interior and exterior doors?", a: "Yes. We handle door adjustments, hardware replacement, and full door installations for both interior and exterior applications." },
              { q: "Can you match existing trim and molding?", a: "Yes. We can match your existing trim profiles or help you select new styles that complement your home's design." }
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
        <h2 className="text-3xl font-bold text-[#584D94] mb-8">Door, Lock & Trim Service Areas</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Door or Lock Service This Week?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Fast, professional repairs and installations.<br />Orlando's trusted door and lock experts.
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
          <p className="text-sm opacity-75">Licensed • Insured • Same-Week Service</p>
        </div>
      </section>

    </main >
  );
}
