import Navbar from '@/components/Navbar';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Link from 'next/link';
import {
  ArrowRight, CheckCircle, Phone, Mail, MapPin,
  Hammer, Tv, Grid, DoorOpen, Bath, Utensils, Wrench,
  Monitor, Shield, Zap, Home, Droplets, Wind, Briefcase, Key, Layers
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Property Maintenance & Improvement in Broward County | Pembroke Pines, Fort Lauderdale — LUXHT Fix",
  description: "Home repairs and property maintenance in Pembroke Pines, Hollywood, Fort Lauderdale, Wilton Manors, Davie, Cooper City, and Miramar. Fully insured.",
  alternates: { canonical: 'https://fix.luxht.com/south-florida/' },
  openGraph: {
    title: "LUXHT Fix Broward County | Property Maintenance & Improvement",
    description: "Property maintenance and repairs in our seven Broward service cities. Call (954) 300-3043 for an estimate.",
    url: 'https://fix.luxht.com/south-florida/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

const services = [
  { title: 'Drywall Repair', icon: Hammer, href: '/drywall-broward/', desc: 'Holes, cracks, water damage — invisible repairs.' },
  { title: 'Property Maintenance', icon: Shield, href: '/property-maintenance-broward/', desc: 'Scheduled preventative & seasonal maintenance for your home.' },
  { title: 'Commercial Maintenance', icon: Briefcase, href: '/commercial-property-maintenance-broward/', desc: 'Facility repairs and upkeep for businesses & offices.' },
  { title: 'Rental Turnover Repairs', icon: Key, href: '/rental-turnover-repairs-broward/', desc: 'Tenant prep, paint touch-ups, wall repairs & hardware.' },
  { title: 'TV Mounting', icon: Tv, href: '/tv-mounting-broward/', desc: 'Wall mounting with concealed cables. All wall types.' },
  { title: 'Flooring Installation', icon: Grid, href: '/flooring-installation-broward/', desc: 'Hardwood, LVP, tile — humidity-resistant options.' },
  { title: 'Bath Remodel', icon: Bath, href: '/bath-remodel-broward/', desc: 'Complete bathroom renovations from design to finish.' },
  { title: 'Kitchen Refacing', icon: Utensils, href: '/kitchen-refacing-broward/', desc: 'Modern cabinet upgrades without full renovation.' },
  { title: 'Door, Lock & Trim', icon: DoorOpen, href: '/door-lock-trim-broward/', desc: 'Fix sticking doors, upgrade locks, install trim.' },
  { title: 'Smart Home', icon: Monitor, href: '/smart-home-installation-broward/', desc: 'Ring doorbells, smart locks, cameras & more.' },
  { title: 'Faucet & Fixtures', icon: Wrench, href: '/faucet-fixtures-broward/', desc: 'Faucets, toilets, disposals — leak-free installs.' },
  { title: 'Septic & Sewer Repair', icon: Droplets, href: '/septic-sewer-repair-broward/', desc: 'Underground line repair, pipe replacement & septic installation.' },
  { title: 'Fence & Gate Repair', icon: Hammer, href: '/fence-gate-repair-broward/', desc: 'Sagging gates, broken posts, and damaged panel repairs.' },
  { title: 'Gutter Guard & Cleaning', icon: Droplets, href: '/gutter-maintenance-broward/', desc: 'Clear gutters and professional leaf guard installations.' },
  { title: 'Pressure Washing', icon: Wind, href: '/pressure-washing-broward/', desc: 'Exterior grime, mold, and algae removal for patios & walls.' },
  { title: 'Accent Walls & Trim', icon: Layers, href: '/accent-walls-broward/', desc: 'Custom woodwork, shiplap, wainscoting & trim updates.' },
  { title: 'Deck Building', icon: Home, href: '/deck-building-broward/', desc: "Custom decks for Broward County outdoor living." },
  { title: 'Furniture Assembly', icon: Grid, href: '/furniture-assembly-broward/', desc: 'IKEA, Wayfair, Amazon — fast, professional assembly.' },
  // South Florida Specific
  { title: 'Hurricane Damage Repair', icon: Wind, href: '/hurricane-damage-repair-broward/', desc: 'Fast storm damage repair for walls, ceilings & doors.' },
  { title: 'Stucco Repair', icon: Hammer, href: '/stucco-repair-broward/', desc: 'Crack repair, patching, and color matching.' },
  { title: 'Screen Enclosure Repair', icon: Shield, href: '/screen-enclosure-repair-broward/', desc: 'Pool cage and lanai screen repair.' },
  { title: 'Patio & Lanai Repair', icon: Home, href: '/patio-lanai-repair-broward/', desc: 'Outdoor living space repair and refresh.' },
  { title: 'Impact Window Prep', icon: Zap, href: '/impact-window-prep-broward/', desc: 'Framing and finishing for impact window installs.' },
];

const neighborhoods = ["Pembroke Pines","Hollywood","Fort Lauderdale","Wilton Manors","Davie","Cooper City","Miramar"];

export default function SouthFloridaPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": "https://fix.luxht.com/#localbusiness-broward",
    "name": "LUXHT Fix - Broward County Home Repair",
    "image": "https://fix.luxht.com/images/logo-wide-hammers.png",
    "url": "https://fix.luxht.com/south-florida/",
    "telephone": "+1-954-300-3043",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pembroke Pines",
      "addressRegion": "FL",
      "postalCode": "33028",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.0031,
      "longitude": -80.2241
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "areaServed": neighborhoods.map(n => ({ "@type": "City", "name": n })),
    "sameAs": [
      "https://www.facebook.com/luxht",
      "https://www.instagram.com/luxht",
      "https://www.linkedin.com/company/luxht"
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <Navbar />
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: "Broward County", href: '/south-florida/' }]} />

      {/* HERO */}
      <header className="relative bg-gradient-to-br from-[#584D94] via-[#7B6FCC] to-[#453A75] text-white pt-32 pb-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5" />
        <div className="relative z-10 container mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-[#64CEBB]/20 text-[#64CEBB] px-4 py-2 rounded-full text-sm font-bold mb-6 border border-[#64CEBB]/30">
            <MapPin size={16} /> Now Serving Broward County
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Property Maintenance & Improvement in Broward County
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-2 font-medium">
            Professional home repair for Broward County counties.
          </p>
          <p className="text-lg text-blue-200 mb-8">
            Construction-grade property care, built specifically for Broward County.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold text-[#64CEBB] mb-8 bg-white/10 backdrop-blur-md inline-flex py-2 px-6 rounded-full border border-white/20">
            <CheckCircle size={16} /> Family-Owned • Fully Insured • Serving 14 Broward County Cities
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="tel:9543003043" className="btn-gradient-primary btn-gradient-shimmer">
              <Phone size={24} /> Call Now
            </a>
            <a href="sms:9543003043" className="btn-gradient-glass border-white/20 hover:bg-white/10">
              <span className="text-xl">💬</span> Text Us
            </a>
            <a href="mailto:info@luxht.com?subject=South%20Florida%20Service%20Request" className="btn-gradient-glass border-white/20 hover:bg-white/10">
              <Mail size={24} /> Email Us
            </a>
          </div>
        </div>
      </header>

      {/* ALL SERVICES GRID */}
      <section className="py-20 px-4 container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#584D94] text-center mb-4">Our Broward County Services</h2>
          <p className="text-center text-slate-500 mb-12 max-w-2xl mx-auto">
            From drywall repair and TV mounting to bathroom remodels and hurricane damage restoration — we handle it all across our Broward service area.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <Link key={i} href={svc.href} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all group hover:-translate-y-1 block">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#584D94]/10 rounded-xl flex items-center justify-center text-[#584D94] flex-shrink-0 group-hover:bg-[#584D94] group-hover:text-white transition-colors">
                    <svc.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-[#584D94] transition-colors">{svc.title}</h3>
                    <p className="text-sm text-slate-500 mb-2">{svc.desc}</p>
                    <span className="text-xs text-[#64CEBB] font-bold inline-flex items-center gap-1">
                      Learn More <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY LUXHT FIX IN SOUTH FLORIDA */}
      <section className="py-20 px-4 bg-[#584D94]/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#584D94] text-center mb-12">Why Broward County Trusts LUXHT Fix</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Local expertise across our seven Broward service cities',
              'Fully insured and background-checked professionals',
              "Same-week service across Broward County counties",
              "Specialized in Broward County challenges: humidity, storms, concrete walls",
              'Upfront pricing with photo-based estimates',
              'Condo and high-rise friendly — HOA compliant work',
              'Hurricane and storm damage repair experience',
              'Clean execution — we protect floors and clean up completely'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-slate-700 bg-white p-4 rounded-xl border border-slate-100">
                <span className="text-[#64CEBB] mt-0.5 flex-shrink-0"><CheckCircle size={20} /></span>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-20 px-4 container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-[#584D94] mb-4">Broward County Service Areas</h2>
        <p className="text-slate-500 mb-8">We proudly serve homeowners and condo owners across these Broward County communities:</p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {neighborhoods.map((area, i) => (
            <span key={i} className="bg-white text-slate-700 px-5 py-3 rounded-full text-sm font-semibold border border-slate-200 shadow-sm inline-flex items-center gap-2 hover:border-[#64CEBB] transition-colors">
              <MapPin size={14} className="text-[#64CEBB]" /> {area}
            </span>
          ))}
        </div>
        <p className="text-slate-500 text-sm">Not sure if we serve your area? Call or text — we&apos;ll confirm quickly.</p>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-br from-[#584D94] via-[#7B6FCC] to-[#453A75] text-white text-center px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started in Broward County?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Professional home repair with clean results.<br />Now serving Broward County counties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:9543003043" className="btn-gradient-primary btn-gradient-shimmer">
              <Phone size={20} /> Call Now: (954) 300-3043
            </a>
            <a href="sms:9543003043" className="btn-gradient-glass">
              <span>💬</span> Text Us
            </a>
            <a href="mailto:info@luxht.com" className="btn-gradient-glass">
              <Mail size={20} /> Email Us
            </a>
          </div>
          <p className="text-sm opacity-75">Fully Insured • Same-Week Service Available</p>
        </div>
      </section>
    </main>
  );
}
