"use client";

import Image from 'next/image';
import Link from 'next/link';
import {
  Phone, ArrowRight, CheckCircle, Shield, Star, Mail, MapPin,
  Home, Eye, ClipboardList, Hammer, Paintbrush, Wrench,
  DoorOpen, Lightbulb, Droplets, Camera, Layers, Sparkles,
  Users, TrendingUp, Key, ChevronRight, ExternalLink
} from 'lucide-react';
import PreSaleForm from '@/components/PreSaleForm';

export default function PreSaleHomePrepPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Pre-Sale Home Prep",
            "description": "Focused repair, refresh, and preparation service that helps homeowners get their property ready before listing, showing, photographing, or going under inspection.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "LUXHT Fix",
              "image": "https://fix.luxht.com/images/logo-wide-hammers.png",
              "url": "https://fix.luxht.com",
              "telephone": "+1-954-300-3043",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "FL",
                "addressCountry": "US"
              }
            },
            "areaServed": { "@type": "State", "name": "Florida" },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Pre-Sale Home Prep Packages",
              "itemListElement": [
                { "@type": "Offer", "name": "Pre-Sale Home Readiness Walkthrough", "price": "295", "priceCurrency": "USD" },
                { "@type": "Offer", "name": "Listing-Ready Tune-Up", "price": "1500", "priceCurrency": "USD" },
                { "@type": "Offer", "name": "Market-Ready Refresh", "price": "3500", "priceCurrency": "USD" }
              ]
            }
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "What is a Pre-Sale Home Prep Walkthrough?", "acceptedAnswer": { "@type": "Answer", "text": "It is a 90-minute on-site visit where a LUXHT Fix professional walks through your home and identifies buyer-visible issues, creates a priority repair list, provides budget direction, and recommends what to fix and what to skip before listing." } },
              { "@type": "Question", "name": "How much does the Pre-Sale Walkthrough cost?", "acceptedAnswer": { "@type": "Answer", "text": "The walkthrough is $295. This fee is credited toward your project if you approve work over $1,500." } },
              { "@type": "Question", "name": "Do I need to remodel my home before selling?", "acceptedAnswer": { "@type": "Answer", "text": "No. Most homes do not need a full remodel. You need to fix the details buyers notice first. LUXHT Fix helps you focus your budget on what actually matters." } },
              { "@type": "Question", "name": "Can my realtor be involved?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We partner with realtors regularly. Your agent can be present during the walkthrough, receive the repair summary, and coordinate timing around photos and listing dates." } },
              { "@type": "Question", "name": "How long does the repair work take?", "acceptedAnswer": { "@type": "Answer", "text": "Depending on scope: a Listing-Ready Tune-Up takes 1-3 days, a Market-Ready Refresh takes 3-7 days, and a Premium Transformation takes 1-3 weeks." } },
              { "@type": "Question", "name": "What areas of Florida do you serve?", "acceptedAnswer": { "@type": "Answer", "text": "LUXHT Fix serves South Florida including Miami, Pembroke Pines, Fort Lauderdale, Hollywood, Cooper City, Davie, Miramar, and Central Florida including Orlando, Winter Park, Maitland, and surrounding areas." } },
              { "@type": "Question", "name": "Is LUXHT Fix licensed and insured?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. LUXHT Fix is fully insured. We are a subdivision of Luxury Home Transformations LLC, a family-owned business." } },
              { "@type": "Question", "name": "What is included in the walkthrough?", "acceptedAnswer": { "@type": "Answer", "text": "The walkthrough includes a full inspection of buyer-visible issues, photo notes, a priority repair list, budget direction, and a written prep summary." } }
            ]
          }),
        }}
      />

      {/* ========== CUSTOM HEADER BAR ========== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#584D94]/95 backdrop-blur-md border-b border-white/10 px-4 py-3 shadow-lg">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          {/* Left Side: Logo (No circle, white color, larger) */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/presale-logo-final.png"
              alt="LUXHT Fix Logo"
              width={224}
              height={77}
              className="object-contain opacity-95 transition-opacity hover:opacity-100"
              style={{
                maxHeight: '63px',
                width: 'auto',
                filter: 'invert(1) brightness(2)',
                mixBlendMode: 'screen'
              }}
              priority
            />
          </Link>

          {/* Right Side: Redesigned pill buttons */}
          <div className="flex items-center gap-2.5">
            {/* Book Walkthrough Bubble */}
            <a
              href="#book-walkthrough"
              className="bg-[#64CEBB] hover:bg-[#53b0a0] text-[#453A75] font-extrabold px-5 py-2.5 rounded-full text-xs md:text-sm shadow-md transition-all hover:-translate-y-0.5"
            >
              Book a Pre-Sale Walkthrough
            </a>

            {/* luxht.com Bubble */}
            <a
              href="https://www.luxht.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-white/80 hover:text-white border border-white/20 hover:border-white/50 bg-white/5 px-4 py-2.5 rounded-full text-xs font-bold transition-all hover:-translate-y-0.5"
            >
              luxht.com <ExternalLink size={10} />
            </a>

            {/* fix.luxht.com Bubble */}
            <a
              href="https://fix.luxht.com"
              className="hidden sm:flex items-center gap-1 text-[#64CEBB] hover:text-white border border-[#64CEBB]/30 hover:border-white bg-[#64CEBB]/10 px-4 py-2.5 rounded-full text-xs font-bold transition-all hover:-translate-y-0.5"
            >
              fix.luxht.com <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </header>

      {/* ========== HERO SECTION ========== */}
      <section className="relative bg-gradient-to-br from-[#584D94] via-[#7B6FCC] to-[#453A75] text-white pt-36 pb-20 px-4 overflow-hidden text-center">
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#64CEBB]/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#7B6FBF]/20 rounded-full blur-3xl -ml-40 -mb-40"></div>

        <div className="relative z-10 container mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 py-2 px-6 rounded-full text-sm font-bold text-[#64CEBB] mb-6">
            <Shield size={16} /> Pre-Sale Home Prep Service
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 tracking-tight">
            LUXHT Fix Pre-Sale Home Prep
          </h1>
          <h2 className="text-xl md:text-3xl font-medium text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Repairs, refreshes, and smart improvements before your home hits the market.
          </h2>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Selling your home soon? We help you fix what buyers notice before the home goes on the market.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="#book-walkthrough" className="btn-gradient-primary btn-gradient-shimmer">
              <ClipboardList size={20} /> Book a Pre-Sale Walkthrough
            </a>
            <a href="tel:9543003043" className="btn-gradient-glass">
              <Phone size={20} /> (954) 300-3043
            </a>
          </div>

          <p className="text-blue-200 text-sm font-medium">
            Starting at <strong className="text-white">$295</strong> &middot; Credited toward your project if you approve work over $1,500
          </p>
        </div>
      </section>


      {/* ========== HOW IT WORKS — 4 PHASES ========== */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-widest text-[#64CEBB] uppercase mb-2">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">From Walkthrough to Listing-Ready</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">A clear 4-phase process to get your home ready for photos, showings, and buyer confidence.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Eye,
                num: '01',
                title: 'Home Readiness Walkthrough',
                desc: 'We walk the property and check what buyers notice first — curb appeal, walls, bathrooms, kitchen, lighting, flooring, and photo-readiness.'
              },
              {
                icon: ClipboardList,
                num: '02',
                title: 'Pre-Sale Repair Plan',
                desc: 'A clear written plan with what should be repaired, what is worth refreshing for photos, and what is not worth spending money on.'
              },
              {
                icon: Hammer,
                num: '03',
                title: 'Focused Execution',
                desc: 'LUXHT Fix completes the approved work — drywall patches, paint, caulking, fixtures, baseboard repairs, pressure washing, and polish.'
              },
              {
                icon: CheckCircle,
                num: '04',
                title: 'Final Walkthrough',
                desc: 'Quality check, before and after photos, seller-ready checklist, and a realtor-ready summary. Your home is photo-ready.'
              },
            ].map((step, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm card-hover-lift h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#64CEBB] to-[#584D94]"></div>
                <div className="w-12 h-12 bg-[#584D94]/10 rounded-xl flex items-center justify-center text-[#584D94] mb-4 service-icon-pulse">
                  <step.icon size={24} />
                </div>
                <span className="text-xs font-bold text-[#64CEBB] tracking-widest">{step.num}</span>
                <h3 className="text-lg font-bold text-slate-800 mt-1 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHO IS IT FOR ========== */}
      <section className="py-24 bg-gradient-to-br from-[#584D94] via-[#7B6FCC] to-[#453A75] text-white px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-50"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-widest text-[#64CEBB] uppercase mb-2">Who This Is For</p>
            <h2 className="text-3xl md:text-4xl font-bold">Built for Sellers, Agents, and Investors</h2>
            <p className="text-blue-100 mt-3 max-w-xl mx-auto">Whether you are selling your own home, prepping a listing, or turning over a property — this service is for you.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Home, title: 'Homeowners Selling', desc: 'Fix the details buyers notice without overspending on a full remodel.' },
              { icon: Users, title: 'Realtors & Agents', desc: 'Get your listing ready before photos and showings. We handle the punch list.' },
              { icon: TrendingUp, title: 'Real Estate Investors', desc: 'Maximize listing appeal with focused repairs that improve buyer perception.' },
              { icon: Key, title: 'Property Managers', desc: 'Turnover prep with a focus on what sells — not just what needs repair.' },
            ].map((card, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 text-center card-hover-lift">
                <div className="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <card.icon size={28} className="text-[#64CEBB]" />
                </div>
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed font-light">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHAT WE CHECK ========== */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-widest text-[#64CEBB] uppercase mb-2">Our Checklist</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What We Check During the Walkthrough</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">Every area buyers look at first. Every detail that affects photos, showings, and confidence.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Home, label: 'Curb Appeal' },
              { icon: DoorOpen, label: 'Entry & Front Door' },
              { icon: Paintbrush, label: 'Walls, Ceilings & Paint' },
              { icon: Droplets, label: 'Bathrooms' },
              { icon: Layers, label: 'Kitchen' },
              { icon: Lightbulb, label: 'Lighting & Fixtures' },
              { icon: Wrench, label: 'Doors & Hardware' },
              { icon: Hammer, label: 'Baseboards & Trim' },
              { icon: Layers, label: 'Flooring' },
              { icon: Droplets, label: 'Moisture & Visible Damage' },
              { icon: Camera, label: 'Photo-Readiness' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 card-hover-lift">
                <div className="w-10 h-10 rounded-lg bg-[#584D94]/10 flex items-center justify-center text-[#584D94] flex-shrink-0 service-icon-pulse">
                  <item.icon size={20} />
                </div>
                <span className="font-semibold text-slate-700 text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PRICING ========== */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-widest text-[#64CEBB] uppercase mb-2">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Transparent Starting Prices</h2>
            <p className="text-slate-500 mt-3">Start with a walkthrough. Upgrade if it makes sense. No pressure.</p>
          </div>

          {/* Walkthrough Hero Card */}
          <div className="bg-gradient-to-br from-[#584D94] to-[#7B6FCC] text-white rounded-3xl p-8 md:p-12 mb-12 max-w-3xl mx-auto relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#64CEBB]/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 bg-[#64CEBB] text-[#453A75] text-xs font-bold py-1.5 px-4 rounded-full mb-6 uppercase tracking-wider">
                <Sparkles size={14} /> Start Here
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Pre-Sale Home Readiness Walkthrough</h3>
              <div className="text-5xl md:text-6xl font-black my-4">$295</div>
              <p className="text-blue-200 mb-8 font-medium">Credited toward your project if you approve work over $1,500</p>

              <div className="grid sm:grid-cols-2 gap-3 text-left max-w-lg mx-auto mb-8">
                {[
                  'Walkthrough up to 90 minutes',
                  'Photo notes of buyer-visible issues',
                  'Priority repair list',
                  'Budget direction and timeline',
                  'Written prep summary',
                  'What to fix vs. what to skip',
                  'Optional estimate for full scope',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle size={16} className="text-[#64CEBB] flex-shrink-0 mt-0.5" />
                    <span className="text-blue-100">{item}</span>
                  </div>
                ))}
              </div>

              <a href="#book-walkthrough" className="inline-flex items-center gap-2 bg-[#64CEBB] text-[#453A75] px-8 py-3.5 rounded-full font-bold shadow-lg hover:shadow-[#64CEBB]/50 hover:-translate-y-1 transition-all">
                Book Walkthrough <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Service Packages */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tag: 'Quick Fix',
                title: 'Listing-Ready Tune-Up',
                price: '$1,500 – $3,500',
                best: 'For sellers who need the home to look clean, fresh, and move-in ready without over-improving.',
                items: ['Drywall touch-ups', 'Paint touch-ups', 'Caulking refresh', 'Door adjustments', 'Hardware fixes', 'Minor fixture updates', 'Basic curb appeal', 'Pre-photo walkthrough'],
                timeline: '1–3 days',
                featured: false,
              },
              {
                tag: 'Most Popular',
                title: 'Market-Ready Refresh',
                price: '$3,500 – $7,500',
                best: 'For sellers who want to reduce buyer objections before the home goes live.',
                items: ['Everything in Tune-Up, plus:', 'Room repainting', 'Bathroom refresh', 'Kitchen hardware refresh', 'Lighting upgrades', 'Pressure washing', 'Front entry refresh', 'Repair summary for realtor'],
                timeline: '3–7 days',
                featured: true,
              },
              {
                tag: 'Premium',
                title: 'Pre-Sale Transformation',
                price: '$7,500 – $15,000+',
                best: 'For sellers who want the home to feel more updated without doing a full remodel.',
                items: ['Bathroom facelift', 'Kitchen surface refresh', 'Larger paint scope', 'Updated fixtures & lighting', 'Exterior improvement', 'Flooring touch-ups', 'Before & after presentation', 'Listing-photo support'],
                timeline: '1–3 weeks',
                featured: false,
              },
            ].map((pkg, i) => (
              <div key={i} className={`bg-white rounded-2xl p-6 border shadow-sm card-hover-lift h-full relative overflow-hidden ${pkg.featured ? 'border-[#64CEBB] shadow-lg ring-1 ring-[#64CEBB]/20' : 'border-slate-100'}`}>
                {pkg.featured && <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#64CEBB] to-[#584D94]"></div>}
                <div className="inline-flex items-center gap-1 bg-[#64CEBB]/10 text-[#53b0a0] text-xs font-bold py-1 px-3 rounded-full mb-3 uppercase tracking-wider">
                  {pkg.featured && <Star size={12} className="fill-current" />} {pkg.tag}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">{pkg.title}</h3>
                <p className="text-xl font-extrabold text-[#584D94] mb-2">{pkg.price}</p>
                <p className="text-slate-500 text-sm italic mb-4 leading-relaxed">{pkg.best}</p>
                <ul className="space-y-2 mb-4">
                  {pkg.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-[#64CEBB] flex-shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Sparkles size={12} /> Timeline: {pkg.timeline}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BEFORE & AFTER ========== */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-widest text-[#64CEBB] uppercase mb-2">Transformations</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Small Fixes, Big Buyer Impact</h2>
            <p className="text-slate-500 mt-3">These are the kinds of improvements we make — focused on what buyers notice first.</p>
          </div>

          {/* Grid of 6 Before & After Image Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: '/images/presale-bathroom-ba.png',
                title: 'Bathroom Caulk & Fixture Refresh',
                desc: 'Old caulk and dated fixtures make bathrooms feel neglected. Fresh caulk and modern fixtures change buyer perception instantly.',
                price: '$180 – $450',
              },
              {
                img: '/images/presale-entry-ba.png',
                title: 'Front Entry Refresh',
                desc: 'The first thing buyers see. A refreshed front door with new hardware and clean surroundings creates immediate confidence.',
                price: '$450 – $1,500',
              },
              {
                img: '/images/presale-kitchen-ba.png',
                title: 'Kitchen Hardware & Fixture Update',
                desc: 'Replacing outdated hardware and fixtures is one of the fastest ways to make a kitchen feel more modern and photo-ready.',
                price: '$250 – $850',
              },
              {
                img: '/images/presale-paint-ba.png',
                title: 'Paint Touch-Up & Repaint',
                desc: 'Scuffed walls, visible marks, and bold outdated colors turn buyers off. A professional neutral paint coat changes the space entirely.',
                price: '$350 – $1,500',
              },
              {
                img: '/images/presale-ceiling-ba.png',
                title: 'Ceiling Stain Repair',
                desc: 'Water stains and ceiling discoloration make buyers suspect hidden leaks. We repair the drywall and repaint to look like new.',
                price: '$250 – $750',
              },
              {
                img: '/images/presale-pressure-ba.png',
                title: 'Pressure Washing Walkways & Driveways',
                desc: 'Algae-stained driveways and entry paths ruin curb appeal. Professional pressure washing makes pathways look brand new.',
                price: '$250 – $750',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm card-hover-lift">
                <div className="relative h-64 overflow-hidden group">
                  <Image
                    src={item.img}
                    alt={`${item.title} — Before and After`}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between">
                    <span className="bg-red-500/90 backdrop-blur-sm text-white text-xs font-bold py-1 px-3 rounded-full">Before</span>
                    <span className="bg-[#64CEBB]/90 backdrop-blur-sm text-white text-xs font-bold py-1 px-3 rounded-full">After</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{item.desc}</p>
                  <span className="text-xs font-bold text-[#584D94] bg-[#584D94]/10 py-1 px-3 rounded-full">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== REALTOR PARTNERSHIP ========== */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-bold tracking-widest text-[#64CEBB] uppercase mb-2">For Realtors</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Send Us the Punch List Before Photos</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed font-light">
                LUXHT Fix helps realtors reduce buyer objections and strengthen listing quality.
                We walk the property, identify visible repairs and buyer turn-offs, create a priority
                list, and complete the approved work quickly.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Cleaner, stronger listing photos',
                  'Fewer buyer objections during showings',
                  'Smoother pre-sale and inspection process',
                  'Written repair summary for your records',
                  'Coordination with listing timeline',
                  'Before and after documentation',
                  'Direct communication with your team',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#64CEBB]/10 flex items-center justify-center text-[#64CEBB] flex-shrink-0">
                      <CheckCircle size={14} />
                    </div>
                    <span className="text-slate-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <a href="#book-walkthrough" className="btn-gradient-primary btn-gradient-shimmer">
                Partner With Us <ArrowRight size={18} />
              </a>
            </div>

            <div className="bg-gradient-to-br from-[#584D94] to-[#7B6FCC] rounded-3xl p-10 text-white text-center relative overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users size={40} className="text-[#64CEBB]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">One Walkthrough. One Repair Plan. One Cleaner Listing.</h3>
                <p className="text-blue-100 font-light leading-relaxed mb-8">
                  Partner with LUXHT Fix to offer your sellers a turnkey pre-sale prep
                  service. Your listings look better. Your sellers feel supported.
                  Your process runs smoother.
                </p>
                <a href="#book-walkthrough" className="inline-flex items-center gap-2 bg-[#64CEBB] text-[#453A75] px-8 py-3.5 rounded-full font-bold shadow-lg hover:shadow-[#64CEBB]/50 hover:-translate-y-1 transition-all">
                  Get Started <ChevronRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-widest text-[#64CEBB] uppercase mb-2">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: 'What is a Pre-Sale Home Prep Walkthrough?', a: 'It is a 90-minute on-site visit where a LUXHT Fix professional walks through your home and identifies buyer-visible issues, creates a priority repair list, provides budget direction, and recommends what to fix and what to skip before listing.' },
              { q: 'How much does the Pre-Sale Walkthrough cost?', a: 'The walkthrough is $295. This fee is credited toward your project if you approve work over $1,500. For larger homes over 3,000 sq ft, the fee is $395 to $495.' },
              { q: 'Do I need to remodel my home before selling?', a: 'No. Most homes do not need a full remodel. You need to fix the details buyers notice first — scuffed walls, old caulk, loose doors, dated fixtures, poor lighting. LUXHT Fix helps you focus your budget on what actually matters.' },
              { q: 'Can my realtor be involved?', a: 'Absolutely. We partner with realtors regularly. Your agent can be present during the walkthrough, receive the repair summary, and coordinate timing around photos and listing dates.' },
              { q: 'How long does the repair work take?', a: 'Depending on the scope: a Listing-Ready Tune-Up takes 1 to 3 days, a Market-Ready Refresh takes 3 to 7 days, and a Premium Transformation takes 1 to 3 weeks. We coordinate with your listing timeline.' },
              { q: 'What areas of Florida do you serve?', a: 'LUXHT Fix serves South Florida including Miami, Pembroke Pines, Fort Lauderdale, Hollywood, Cooper City, Davie, Miramar, and surrounding areas. We also serve Central Florida including Orlando, Winter Park, Maitland, and surrounding areas.' },
              { q: 'Is LUXHT Fix licensed and insured?', a: 'Yes. LUXHT Fix is fully insured. We are a subdivision of Luxury Home Transformations LLC, a family-owned business serving residential and commercial properties.' },
              { q: 'What if I only need a few small repairs?', a: 'That is exactly what the Listing-Ready Tune-Up is for. Starting at $1,500, it covers small repairs, touch-ups, and detail work to get the home looking clean and cared for without over-improving.' },
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 card-hover-lift">
                <h3 className="font-bold text-slate-800 text-lg mb-3">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CONTACT FORM ========== */}
      <section className="py-24 bg-gradient-to-br from-[#584D94] via-[#7B6FCC] to-[#453A75] text-white px-4 relative overflow-hidden" id="book-walkthrough">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#64CEBB]/8 rounded-full blur-3xl -mr-40 -mt-40"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#7B6FBF]/15 rounded-full blur-3xl -ml-40 -mb-40"></div>

        <div className="container mx-auto max-w-2xl relative z-10">
          <div className="text-center mb-10">
            <p className="text-sm font-bold tracking-widest text-[#64CEBB] uppercase mb-2">Book Your Walkthrough</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Pre-Sale Home Prep Walkthrough</h2>
            <p className="text-blue-100 font-light">Fill out the form below and our team will contact you within 24 hours to schedule your walkthrough.</p>
          </div>

          <div className="bg-white/8 backdrop-blur-xl border border-white/12 rounded-3xl p-8 md:p-10">
            <PreSaleForm />
          </div>
        </div>
      </section>

      {/* ========== TRUST BAR & INFO (NO BLACK BANNERS) ========== */}
      <section className="py-8 bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto px-4 flex justify-center flex-wrap gap-8 md:gap-12">
          {[
            { icon: Star, text: 'Family-Owned Business' },
            { icon: Shield, text: 'Fully Insured' },
            { icon: MapPin, text: 'South Florida & Central Florida' },
            { icon: Sparkles, text: 'Same-Week Response' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-slate-600 text-sm font-medium">
              <item.icon size={16} className="text-[#584D94]" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ========== FOOTER (NO BLACK BACKDROP, CLEAN LIGHT GREY) ========== */}
      <footer className="bg-slate-50 py-12 px-4 border-t border-slate-200 text-slate-600 text-center">
        <div className="container mx-auto max-w-3xl">
          <p className="mb-4">
            <strong className="text-slate-800">LUXHT Fix — Pre-Sale Home Prep</strong><br />
            <span className="text-xs text-slate-500">
              A subdivision of <strong>LUXURY HOME TRANSFORMATIONS LLC</strong>
            </span>
          </p>
          <div className="flex justify-center gap-4 my-6">
            <a href="tel:9543003043" className="bg-[#584D94] text-white hover:bg-[#453A75] font-bold py-2.5 px-6 rounded-full text-sm transition-all">
              📞 (954) 300-3043
            </a>
            <a href="https://fix.luxht.com" className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold py-2.5 px-6 rounded-full text-sm transition-all">
              🌐 fix.luxht.com
            </a>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed max-w-2xl mx-auto">
            LUXHT Fix does not replace a licensed home inspector. We help complete approved repair items
            and prepare the home for buyer confidence. Materials billed separately with 15% sourcing and handling
            fee, or included as a fixed allowance in the estimate.
          </p>
        </div>
      </footer>
    </main>
  );
}
