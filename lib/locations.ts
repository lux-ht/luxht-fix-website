// Central location configuration for multi-location SEO
// Used by service pages, components, and schema markup

export interface LocationConfig {
  id: string;
  name: string;
  region: string;
  slug: string;              // URL slug suffix: "orlando" or "miami"
  hubSlug: string;           // Hub page path
  phone: string;
  phoneRaw: string;
  email: string;
  neighborhoods: string[];
  address: {
    city: string;
    state: string;
    zip: string;
  };
  geo: {
    lat: number;
    lng: number;
  };
  serviceAreaRadius: string; // meters for schema
}

export const LOCATIONS: Record<string, LocationConfig> = {
  orlando: {
    id: 'orlando',
    name: 'Orlando',
    region: 'Central Florida',
    slug: 'orlando',
    hubSlug: '/',
    phone: '(954) 300-3043',
    phoneRaw: '9543003043',
    email: 'info@luxht.com',
    neighborhoods: [
      'Winter Park', 'Maitland', 'Altamonte Springs', 'Lake Nona',
      'Dr. Phillips', 'Windermere', 'Ocoee', 'Apopka',
      'Winter Garden', 'College Park', 'Baldwin Park', 'Longwood',
      'Lake Mary', 'Casselberry', 'Oviedo'
    ],
    address: { city: 'Maitland', state: 'FL', zip: '32751' },
    geo: { lat: 28.6256, lng: -81.3631 },
    serviceAreaRadius: '50000',
  },
  miami: {
    id: 'miami',
    name: 'South Florida',
    region: 'South Florida',
    slug: 'miami',
    hubSlug: '/south-florida/',
    phone: '(954) 300-3043',
    phoneRaw: '9543003043',
    email: 'info@luxht.com',
    neighborhoods: [
      'Miami', 'Pembroke Pines', 'Cooper City', 'Aventura',
      'Hallandale Beach', 'Miramar', 'Davie', 'Hollywood',
      'Sunny Isles Beach', 'Fort Lauderdale', 'North Miami',
      'Coral Gables', 'Doral', 'Miami Beach'
    ],
    address: { city: 'Pembroke Pines', state: 'FL', zip: '33028' },
    geo: { lat: 26.0031, lng: -80.2241 },
    serviceAreaRadius: '60000',
  },
};

// All services offered — used for generating pages and navigation
export interface ServiceDefinition {
  title: string;
  slug: string;        // base slug without location suffix
  category: string;
  price: string;
  parentSlug?: string; // for sub-services
}

export const ALL_SERVICES: ServiceDefinition[] = [
  // Drywall
  { title: 'Drywall Repair', slug: 'drywall', category: 'Drywall', price: '$150' },
  { title: 'Drywall Crack Repair', slug: 'drywall-crack-repair', category: 'Drywall', price: '$120', parentSlug: 'drywall' },
  { title: 'Drywall Hole Repair', slug: 'drywall-hole-repair', category: 'Drywall', price: '$150', parentSlug: 'drywall' },
  { title: 'Water Damage Drywall Repair', slug: 'water-damage-drywall-repair', category: 'Drywall', price: '$200', parentSlug: 'drywall' },
  { title: 'Texture Matching', slug: 'texture-matching', category: 'Drywall', price: '$150', parentSlug: 'drywall' },
  // TV Mounting
  { title: 'TV Mounting', slug: 'tv-mounting', category: 'TV Mounting', price: '$120' },
  { title: 'TV Cable Concealment', slug: 'tv-cable-concealment', category: 'TV Mounting', price: '$100', parentSlug: 'tv-mounting' },
  { title: 'Fireplace TV Mounting', slug: 'fireplace-tv-mounting', category: 'TV Mounting', price: '$175', parentSlug: 'tv-mounting' },
  { title: 'Soundbar Mounting', slug: 'soundbar-mounting', category: 'TV Mounting', price: '$75', parentSlug: 'tv-mounting' },
  { title: 'Outdoor TV Mounting', slug: 'outdoor-tv-mounting', category: 'TV Mounting', price: '$200', parentSlug: 'tv-mounting' },
  // Door & Lock
  { title: 'Door, Lock & Trim', slug: 'door-lock-trim', category: 'Door & Lock', price: '$85' },
  { title: 'Door Alignment', slug: 'door-alignment', category: 'Door & Lock', price: '$95', parentSlug: 'door-lock-trim' },
  { title: 'Deadbolt Installation', slug: 'deadbolt-installation', category: 'Door & Lock', price: '$85', parentSlug: 'door-lock-trim' },
  { title: 'Smart Lock Installation', slug: 'smart-lock-installation', category: 'Door & Lock', price: '$95', parentSlug: 'door-lock-trim' },
  { title: 'Door Handle Replacement', slug: 'door-handle-replacement', category: 'Door & Lock', price: '$75', parentSlug: 'door-lock-trim' },
  // Trim & Molding
  { title: 'Baseboard Installation', slug: 'baseboard-installation', category: 'Trim & Molding', price: '$3/ft' },
  { title: 'Crown Molding Installation', slug: 'crown-molding-installation', category: 'Trim & Molding', price: '$5/ft' },
  // Faucets & Fixtures
  { title: 'Faucet & Fixtures', slug: 'faucet-fixtures', category: 'Faucets & Fixtures', price: '$95' },
  { title: 'Faucet Replacement', slug: 'faucet-replacement', category: 'Faucets & Fixtures', price: '$95', parentSlug: 'faucet-fixtures' },
  { title: 'Shower Head Replacement', slug: 'shower-head-replacement', category: 'Faucets & Fixtures', price: '$75', parentSlug: 'faucet-fixtures' },
  { title: 'Garbage Disposal Installation', slug: 'garbage-disposal-installation', category: 'Faucets & Fixtures', price: '$150', parentSlug: 'faucet-fixtures' },
  { title: 'Toilet Repair', slug: 'toilet-repair', category: 'Faucets & Fixtures', price: '$95', parentSlug: 'faucet-fixtures' },
  // Smart Home
  { title: 'Smart Home Installation', slug: 'smart-home-installation', category: 'Smart Home', price: '$95' },
  { title: 'Smart Doorbell Installation', slug: 'smart-doorbell-installation', category: 'Smart Home', price: '$85', parentSlug: 'smart-home-installation' },
  // Flooring
  { title: 'Flooring Installation', slug: 'flooring-installation', category: 'Flooring', price: '$3/sf' },
  // Kitchen & Bath
  { title: 'Bath Remodel', slug: 'bath-remodel', category: 'Kitchen & Bath', price: '$8,500' },
  { title: 'Kitchen Cabinet Refacing', slug: 'kitchen-refacing', category: 'Kitchen & Bath', price: '$4,500' },
  // Outdoor
  { title: 'Deck Building', slug: 'deck-building', category: 'Deck & Outdoor', price: '$8,000' },
  { title: 'Furniture Assembly', slug: 'furniture-assembly', category: 'Deck & Outdoor', price: '$75' },
  // South Florida Specific Services
  { title: 'Hurricane Damage Repair', slug: 'hurricane-damage-repair', category: 'Storm & Water', price: '$200' },
  { title: 'Stucco Repair', slug: 'stucco-repair', category: 'Exterior', price: '$175' },
  { title: 'Screen Enclosure Repair', slug: 'screen-enclosure-repair', category: 'Exterior', price: '$150' },
  { title: 'Impact Window Installation Prep', slug: 'impact-window-prep', category: 'Storm & Water', price: '$250' },
  { title: 'Patio & Lanai Repair', slug: 'patio-lanai-repair', category: 'Exterior', price: '$200' },
];

// South Florida-only service slugs
export const SOUTH_FLORIDA_ONLY_SERVICES = [
  'hurricane-damage-repair',
  'stucco-repair',
  'screen-enclosure-repair',
  'impact-window-prep',
  'patio-lanai-repair',
];

// Helper to get full URL slug for a service + location
export function getServiceSlug(serviceSlug: string, locationSlug: string): string {
  return `/${serviceSlug}-${locationSlug}/`;
}

// Helper to get location config
export function getLocation(id: string): LocationConfig {
  return LOCATIONS[id];
}
