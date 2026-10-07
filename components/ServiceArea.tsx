import Link from 'next/link';
import { CITY_PAGES } from '@/lib/service-area';

export default function ServiceArea() {
  return (
    <section className="border-y border-slate-200 bg-[#F1FBF9] px-4 py-12" aria-labelledby="service-area-title">
      <div className="mx-auto max-w-6xl">
        <h2 id="service-area-title" className="text-2xl font-bold text-slate-900">Our Broward service area</h2>
        <p className="mt-3 text-slate-600">Home repairs, installations, and property maintenance in these seven cities.</p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-4">
          {CITY_PAGES.map(city => <Link key={city.slug} href={`/service-areas/${city.slug}/`} className="font-semibold text-[#584D94] underline underline-offset-4 hover:text-[#267E70]">{city.name}</Link>)}
        </div>
      </div>
    </section>
  );
}
