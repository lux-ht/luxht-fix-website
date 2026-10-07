export const SERVICE_CITIES = [
  'Pembroke Pines', 'Hollywood', 'Fort Lauderdale', 'Wilton Manors',
  'Davie', 'Cooper City', 'Miramar',
] as const;

export const SERVICE_AREA_TEXT = SERVICE_CITIES.join(', ');
export const GOOGLE_REVIEW_URL = 'https://g.page/r/CeTcJVFwTD-jEBM/review';

export const CITY_PAGES = [
  { slug: 'pembroke-pines', name: 'Pembroke Pines', focus: 'Home repairs and ongoing property care', services: ['Drywall Repair', 'Door, Lock & Trim', 'TV Mounting'], note: 'Send photos of the repair, your property address, and any HOA access or working-hour requirements when requesting an estimate.' },
  { slug: 'hollywood', name: 'Hollywood', focus: 'Interior repairs and outdoor maintenance', services: ['Drywall Repair', 'Gutter Guard & Cleaning', 'Screen Enclosure Repair'], note: 'For outdoor repairs, include a wide photo of the affected area and a close-up. Tell us whether access is through a yard, patio, or shared building area.' },
  { slug: 'fort-lauderdale', name: 'Fort Lauderdale', focus: 'Residential, rental, and commercial property maintenance', services: ['Commercial Maintenance', 'Rental Turnover Repairs', 'Flooring Installation'], note: 'For rental or commercial work, include the vacancy or opening deadline, access instructions, and building-management requirements so we can plan the visit.' },
  { slug: 'wilton-manors', name: 'Wilton Manors', focus: 'Home repairs and patio care', services: ['Patio & Lanai Repair', 'Drywall Repair', 'Fence & Gate Repair'], note: 'For patio or lanai concerns, photograph the affected surface and explain when the problem occurs. For interior water damage, tell us whether the water source has already been addressed.' },
  { slug: 'davie', name: 'Davie', focus: 'Doors, trim, and exterior property upkeep', services: ['Door, Lock & Trim', 'Fence & Gate Repair', 'Pressure Washing'], note: 'For a gate or door that sticks, send a photo of the hinges, latch, and full opening. Mention any vehicle, pet, or yard-access arrangements needed for the visit.' },
  { slug: 'cooper-city', name: 'Cooper City', focus: 'Home maintenance and listing preparation', services: ['Property Maintenance', 'Drywall Repair', 'Flooring Installation'], note: 'If you are preparing to sell, share your target photo or listing date and your repair list. We can discuss which tasks fit the available time and budget.' },
  { slug: 'miramar', name: 'Miramar', focus: 'Installations and rental turnover repairs', services: ['TV Mounting', 'Rental Turnover Repairs', 'Door, Lock & Trim'], note: 'For installation work, include the product model, wall material if known, and photos of the installation area. For turnover repairs, send the full punch list together.' },
] as const;
