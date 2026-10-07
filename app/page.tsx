import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, MessageSquare, Shield, ClipboardCheck, BadgeDollarSign } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ServiceArea from '@/components/ServiceArea';
import DrywallGallery from '@/components/DrywallGallery';
import HomePageTestimonials from '@/components/HomePageTestimonials';
import { SERVICE_AREA_TEXT, GOOGLE_REVIEW_URL } from '@/lib/service-area';

const services = [
  { name: 'Drywall & Ceiling Repair', href: '/drywall-broward/', detail: 'Holes, cracks, water-damage repairs, and texture matching.' },
  { name: 'Property Maintenance', href: '/property-maintenance-broward/', detail: 'Preventative maintenance and ongoing care for your property.' },
  { name: 'Rental Turnover Repairs', href: '/rental-turnover-repairs-broward/', detail: 'Wall repairs, hardware, and finishing touches between tenants.' },
  { name: 'Doors, Locks & Trim', href: '/door-lock-trim-broward/', detail: 'Door alignment, replacement hardware, locks, and trim.' },
  { name: 'TV Mounting', href: '/tv-mounting-broward/', detail: 'Secure installation and cable-concealment options.' },
  { name: 'Patio & Lanai Repair', href: '/patio-lanai-repair-broward/', detail: 'Repairs and improvements for your outdoor living space.' },
];

export default function Home() {
  return (
    <main className="bg-white text-slate-800">
      <Navbar />
      <header className="relative isolate mt-24 min-h-[520px] overflow-hidden bg-slate-900 md:min-h-[620px]">
        <Image src="/drywall-before-after.jpg" alt="LUXHT Fix drywall repair, showing the wall before and after work" fill priority sizes="100vw" className="object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />
        <div className="relative mx-auto flex min-h-[520px] max-w-6xl flex-col justify-end px-4 pb-8 pt-32 text-white md:min-h-[620px] md:pb-12 md:pt-52">
          <h1 className="max-w-3xl text-[32px] font-bold leading-tight md:text-5xl">LUXHT Fix: Home Repairs & Property Maintenance in Broward</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed md:text-lg">Serving {SERVICE_AREA_TEXT}. Family-owned, fully insured, and personally responsible for your project.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="tel:9543003043" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-[#584D94]"><Phone size={18} /> (954) 300-3043</a>
            <a href="sms:9543003043" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white px-5 py-3 font-semibold hover:bg-white/10"><MessageSquare size={18} /> Text Us</a>
            <Link href="/estimate/" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#64CEBB] px-5 py-3 font-semibold text-slate-900">Request an Estimate <ArrowRight size={18} /></Link>
          </div>
        </div>
      </header>
      <section className="border-b border-slate-200 px-4 py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-10 gap-y-3 text-sm font-semibold">
          <span className="inline-flex items-center gap-2"><Shield size={18} className="text-[#267E70]" /> Fully Insured</span>
          <span>Family-Owned</span><span>Clear Estimates Before Work Begins</span>
          <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="text-[#584D94] underline underline-offset-4">Visit our Google profile</a>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-bold">What does your property need?</h2>
        <p className="mt-3 text-slate-600">Repairs and installations for homes, rentals, offices, and commercial properties.</p>
        <div className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(service => <article key={service.href} className="border-t border-slate-200 pt-5">
            <h3 className="text-xl font-semibold"><Link href={service.href} className="hover:text-[#584D94]">{service.name}</Link></h3>
            <p className="mt-3 leading-relaxed text-slate-600">{service.detail}</p>
            <Link href={service.href} className="mt-4 inline-flex items-center gap-2 font-semibold text-[#584D94]">Explore service <ArrowRight size={16} /></Link>
          </article>)}
        </div>
        <Link href="/services/" className="mt-8 inline-flex items-center gap-2 font-semibold text-[#584D94]">Browse all services <ArrowRight size={18} /></Link>
      </section>
      <ServiceArea />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-bold">A closer look at our work</h2>
        <p className="mb-6 mt-3 text-slate-600">Drywall repairs and finishing details from our existing project gallery.</p>
        <DrywallGallery />
        <Link href="/drywall-broward/" className="inline-flex items-center gap-2 font-semibold text-[#584D94]">Drywall repair details <ArrowRight size={16} /></Link>
      </section>
      <section className="border-y border-slate-200 bg-slate-50 px-4 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div><h2 className="text-3xl font-bold">Preparing to sell?</h2><p className="mt-4 leading-relaxed text-slate-600">Get your property listing-ready with a focused walkthrough, a repair priority list, and the finishing touches buyers notice.</p><Link href="/pre-sale-home-prep/" className="mt-5 inline-flex items-center gap-2 font-semibold text-[#584D94]">Pre-Sale Home Prep <ArrowRight size={18} /></Link></div>
          <div><h2 className="text-2xl font-bold">Personally responsible, from estimate to completion</h2><p className="mt-4 leading-relaxed text-slate-600">Tell us what needs attention and send photos. We discuss scope, access, pricing, and scheduling before work starts, then follow through on the agreed repairs.</p><p className="mt-4 text-slate-600">Availability depends on the project and current schedule.</p></div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="mb-7 text-3xl font-bold">Customer feedback</h2>
        <HomePageTestimonials />
        <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#584D94]">Leave a Google review <ArrowRight size={16} /></a>
      </section>
      <section className="border-t border-slate-200 px-4 py-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="flex gap-4"><BadgeDollarSign className="shrink-0 text-[#267E70]" size={26} /><div><h2 className="text-xl font-semibold">Financing available</h2><p className="mt-2 text-slate-600">Ask about flexible financing options for your project.</p></div></div>
          <div className="flex gap-4"><ClipboardCheck className="shrink-0 text-[#267E70]" size={26} /><div><h2 className="text-xl font-semibold">Project and permit coordination</h2><p className="mt-2 leading-relaxed text-slate-600">When required for the agreed scope, we coordinate plans, permits, inspections, and follow-through to final approval.</p></div></div>
        </div>
      </section>
      <section id="contact" className="bg-[#584D94] px-4 py-12 text-white">
        <div className="mx-auto max-w-6xl"><h2 className="text-3xl font-bold">Ready to discuss your repair?</h2><p className="mt-3">Send photos, your property city, and a short description of the work.</p><Link href="/estimate/" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-[#584D94]">Request an Estimate <ArrowRight size={18} /></Link></div>
      </section>
    </main>
  );
}
