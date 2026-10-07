'use client';

import { SERVICE_CITIES } from '@/lib/service-area';

export default function ServiceCityField({ value, onChange, id }: {
  value: string; onChange: (value: string) => void; id: string;
}) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-sm font-semibold mb-2">Property city *</label>
      <select id={id} name="serviceCity" value={value} onChange={e => onChange(e.target.value)} required
        className="w-full min-h-12 rounded-lg border border-slate-300 bg-white px-3 py-3 text-base text-slate-800 focus:outline-2 focus:outline-[#584D94]">
        <option value="">Select your property city</option>
        {SERVICE_CITIES.map(city => <option key={city} value={city}>{city}</option>)}
      </select>
      <p className="mt-2 text-sm text-slate-500">Service is available in these seven Broward cities.</p>
    </div>
  );
}
