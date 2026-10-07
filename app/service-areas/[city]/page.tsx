import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ServiceArea from '@/components/ServiceArea';
import { CITY_PAGES } from '@/lib/service-area';

export function generateStaticParams() {
  return CITY_PAGES.map(city => ({ city: city.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: slug } = await params;
  const city = CITY_PAGES.find(item => item.slug === slug);
  if (!city) return {};
  const title = `Home Repairs & Property Maintenance in ${city.name}`;
  const description = `${city.focus} in ${city.name}, FL. ${city.services.join(', ')} and more from LUXHT Fix. Request an estimate or call (954) 300-3043.`;
  return { title, description, alternates: { canonical: `/service-areas/${slug}/` }, openGraph: { title, description, url: `/service-areas/${slug}/` } };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params;
  const city = CITY_PAGES.find(item => item.slug === slug);
  if (!city) notFound();
  return (
    <main className="bg-white text-slate-800">
      <Navbar />
      <header className="bg-[#584D94] px-4 pb-16 pt-32 text-white">
        <div className="mx-auto max-w-5xl">
          <Link href="/south-florida/" className="text-sm text-white/80 underline">Broward service area</Link>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">Home Repairs & Property Maintenance in {city.name}</h1>
          <p className="mt-5 text-lg text-white/90">{city.focus}. Family-owned, fully insured, and personally responsible for your project.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="tel:9543003043" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-[#584D94]"><Phone size={18} /> Call (954) 300-3043</a>
            <a href="sms:9543003043" className="inline-flex items-center gap-2 rounded-lg border border-white px-5 py-3 font-semibold"><MessageSquare size={18} /> Text Us</a>
            <Link href="/estimate/" className="inline-flex items-center gap-2 rounded-lg bg-[#64CEBB] px-5 py-3 font-semibold text-slate-900">Request an Estimate <ArrowRight size={18} /></Link>
          </div>
        </div>
      </header>
      <section className="mx-auto grid max-w-5xl gap-10 px-4 py-14 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">Services for your {city.name} property</h2>
          <ul className="mt-5 list-disc space-y-3 pl-5">{city.services.map(service => <li key={service}>{service}</li>)}</ul>
          <Link href="/services/" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#584D94]">Browse all services <ArrowRight size={16} /></Link>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Planning your visit</h2>
          <p className="mt-5 leading-relaxed text-slate-600">{city.note}</p>
          <p className="mt-4 leading-relaxed text-slate-600">We confirm the scope, access, estimate, and scheduling before work begins. Availability depends on the project and current schedule.</p>
        </div>
      </section>
      <ServiceArea />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', name: `Property maintenance in ${city.name}`, provider: { '@id': 'https://fix.luxht.com/#localbusiness' }, areaServed: { '@type': 'City', name: city.name }, serviceType: [...city.services], url: `https://fix.luxht.com/service-areas/${slug}/` }) }} />
    </main>
  );
}
