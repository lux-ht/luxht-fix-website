#!/usr/bin/env node
/**
 * Generates all South Florida (Miami) service pages by creating
 * template-based pages that mirror Orlando service pages.
 */
import fs from 'fs';
import path from 'path';

const MIAMI_NEIGHBORHOODS = [
  'Miami', 'Pembroke Pines', 'Cooper City', 'Aventura',
  'Hallandale Beach', 'Miramar', 'Davie', 'Hollywood',
  'Sunny Isles Beach', 'Fort Lauderdale', 'North Miami',
  'Coral Gables', 'Doral', 'Miami Beach'
];

const PHONE = '(407) 720-7476';
const PHONE_RAW = '4077207476';
const ZIP = '33028';
const GEO = { lat: 26.0031, lng: -80.2241 };

// Services that use ServicePageTemplate pattern (simpler pages)
const templateServices = [
  {
    name: 'Drywall Crack Repair', slug: 'drywall-crack-repair-miami',
    parent: 'Drywall Repair', parentSlug: 'drywall-miami',
    subtitle: 'Professional crack repair for settling, foundation movement, and stress fractures.',
    desc: 'Same-week service available.',
    intro: 'Cracks in your South Florida home\'s walls are more than cosmetic — they can signal settling, moisture intrusion, or structural stress common in the region\'s sandy soil and tropical climate. LUXHT Fix specializes in identifying the root cause of drywall cracks and delivering permanent, invisible repairs for homeowners across Miami, Fort Lauderdale, Hollywood, and surrounding communities.',
    details: ['Hairline crack repair','Settlement crack repair','Corner bead crack repair','Stress crack repair around doors/windows','Ceiling crack repair','Joint tape failure repair'],
    steps: ['Inspect crack pattern to determine root cause','Clean and prepare crack area','Apply fiberglass mesh tape for reinforcement','Build up compound in thin, precise layers','Match existing wall texture seamlessly','Sand smooth and prepare for painting'],
    why: ['Crack repair specialists serving South Florida','Root cause analysis before repair','Fiberglass mesh reinforcement for permanence','Seamless texture matching guaranteed','Same-week service across Miami-Dade & Broward','Fully insured and background-checked'],
    faqs: [
      {q:'Why do I have cracks in my South Florida home?',a:'South Florida\'s sandy soil, humidity, and occasional storm activity can cause settling and expansion that leads to drywall cracks. Older homes in Coral Gables, Hollywood, and Miami are especially prone.'},
      {q:'How much does drywall crack repair cost in Miami?',a:'Most crack repairs range from $120-$300 depending on length, location, and texture matching needs. Contact us for a photo-based quote.'},
      {q:'Can you prevent cracks from coming back?',a:'Yes. We use fiberglass mesh tape and flexible compound to create crack-resistant repairs that move with your home.'},
      {q:'Do you repair ceiling cracks too?',a:'Absolutely. Ceiling cracks are common in South Florida homes and we repair them with the same precision as wall cracks.'}
    ],
    related: [
      {title:'Drywall Repair',href:'/drywall-miami/'},{title:'Drywall Hole Repair',href:'/drywall-hole-repair-miami/'},
      {title:'Water Damage Drywall',href:'/water-damage-drywall-repair-miami/'},{title:'Texture Matching',href:'/texture-matching-miami/'}
    ],
    price: 'Crack repair starts at $120', stats: 'Fully Insured • Serving Miami-Dade & Broward'
  },
  {
    name: 'Drywall Hole Repair', slug: 'drywall-hole-repair-miami',
    parent: 'Drywall Repair', parentSlug: 'drywall-miami',
    subtitle: 'Fast, seamless hole repair for any size — from nail pops to large access cuts.',
    desc: 'Same-week service throughout South Florida.',
    intro: 'Whether it\'s a doorknob punch-through in your Aventura condo or a plumbing access cut in your Pembroke Pines home, LUXHT Fix delivers invisible drywall hole repairs across South Florida. We handle everything from small nail holes to large openings with professional-grade materials and expert texture matching.',
    details: ['Small hole patching (nail pops, anchors)','Medium hole repair (fist/doorknob size)','Large hole repair (access cuts, damage)','Multi-hole repair projects','Ceiling hole repair','Texture matching after repair'],
    steps: ['Assess hole size and surrounding wall condition','Cut clean edges and install backing support','Apply patch and build up compound layers','Match existing texture precisely','Sand smooth and prepare for painting','Clean workspace completely'],
    why: ['Hole repair specialists across South Florida','All sizes: nail holes to large access cuts','Seamless texture matching guaranteed','Same-week service in Miami-Dade & Broward','Clean execution with floor protection','Fully insured and background-checked'],
    faqs: [
      {q:'How much does drywall hole repair cost in Miami?',a:'Pricing depends on hole size and quantity. Small holes start at $150, large access cuts from $250. Send us a photo for an instant quote.'},
      {q:'How long does hole repair take?',a:'Most single-hole repairs take 2-3 hours including texture matching and drying time.'},
      {q:'Can you match my existing wall texture?',a:'Yes. Texture matching is our specialty — orange peel, knockdown, smooth, and popcorn ceiling textures.'},
      {q:'Do you repair holes in condo walls?',a:'Yes. We serve condos throughout Aventura, Sunny Isles Beach, Miami Beach, and all of South Florida.'}
    ],
    related: [
      {title:'Drywall Repair',href:'/drywall-miami/'},{title:'Drywall Crack Repair',href:'/drywall-crack-repair-miami/'},
      {title:'Water Damage Drywall',href:'/water-damage-drywall-repair-miami/'},{title:'Texture Matching',href:'/texture-matching-miami/'}
    ],
    price: 'Hole repair starts at $150', stats: 'Fully Insured • Serving All of South Florida'
  },
  {
    name: 'Water Damage Drywall Repair', slug: 'water-damage-drywall-repair-miami',
    parent: 'Drywall Repair', parentSlug: 'drywall-miami',
    subtitle: 'Expert repair of water-damaged walls and ceilings from leaks, floods, and storms.',
    desc: 'Moisture assessment and mold prevention included.',
    intro: 'South Florida\'s tropical storms, heavy rainfall, and high humidity make water damage a common issue for homeowners in Miami, Fort Lauderdale, Hollywood, and surrounding areas. LUXHT Fix provides comprehensive water damage drywall repair — from moisture assessment and mold prevention to seamless texture matching — ensuring your walls are restored safely and completely.',
    details: ['Water damage assessment and moisture testing','Removal of compromised drywall sections','Mold prevention treatment','New drywall installation','Seamless texture matching','Ceiling water damage repair'],
    steps: ['Test moisture levels with professional equipment','Identify and confirm water source is resolved','Remove all water-damaged drywall safely','Treat area for mold prevention','Install new drywall with proper backing','Match texture and prepare for painting'],
    why: ['Water damage repair experts in South Florida','Professional moisture testing equipment','Mold prevention protocols included','Hurricane and storm damage experience','Same-week emergency service available','Fully insured and background-checked'],
    faqs: [
      {q:'How do I know if my drywall has water damage?',a:'Signs include bubbling, soft spots, discoloration, peeling paint, and musty odors. South Florida humidity can make damage worse if not addressed quickly.'},
      {q:'Do you handle mold from water damage?',a:'We treat affected areas with mold prevention solutions and ensure proper drying before repair. For extensive mold, we recommend a certified mold remediation specialist first.'},
      {q:'How much does water damage drywall repair cost in Miami?',a:'Costs depend on the extent of damage. Small areas start at $200, larger sections requiring full replacement from $400+. Send photos for a fast estimate.'},
      {q:'Can you repair hurricane water damage?',a:'Yes. We have extensive experience with storm-related water damage repair throughout Miami-Dade and Broward counties.'}
    ],
    related: [
      {title:'Drywall Repair',href:'/drywall-miami/'},{title:'Hurricane Damage Repair',href:'/hurricane-damage-repair-miami/'},
      {title:'Drywall Crack Repair',href:'/drywall-crack-repair-miami/'},{title:'Texture Matching',href:'/texture-matching-miami/'}
    ],
    price: 'Water damage repair starts at $200', stats: 'Fully Insured • Storm Damage Experts'
  },
  {
    name: 'Texture Matching', slug: 'texture-matching-miami',
    parent: 'Drywall Repair', parentSlug: 'drywall-miami',
    subtitle: 'Invisible texture blending for repaired walls — orange peel, knockdown, and smooth.',
    desc: 'Perfect matching guaranteed.',
    intro: 'A repair is only as good as its finish. LUXHT Fix provides expert texture matching for South Florida homeowners, ensuring every patch and repair blends invisibly with your existing walls. Whether your home in Coral Gables has a smooth finish, your Pembroke Pines house has orange peel, or your Hollywood condo features knockdown texture, we match it perfectly.',
    details: ['Orange peel texture matching','Knockdown texture matching','Smooth finish blending','Skip trowel texture','Popcorn ceiling matching','Custom texture replication'],
    steps: ['Analyze existing wall texture pattern and depth','Prepare repair area with proper compound','Apply matching texture using specialized tools','Allow proper drying time','Fine-tune texture blend with surrounding area','Sand and prepare for painting'],
    why: ['Texture matching specialists in South Florida','All texture types: orange peel, knockdown, smooth','Professional-grade tools and materials','Invisible blending guaranteed','Serving Miami-Dade and Broward counties','Fully insured and background-checked'],
    faqs: [
      {q:'Can you match any wall texture?',a:'Yes. We match orange peel, knockdown, smooth, skip trowel, and custom textures found in South Florida homes of all ages.'},
      {q:'How do you ensure a perfect match?',a:'We analyze your existing texture\'s pattern, depth, and spacing, then replicate it using the same tools and techniques. The result is an invisible blend.'},
      {q:'How much does texture matching cost?',a:'Texture matching is typically included in our drywall repair pricing. Standalone texture work starts at $150 per area.'},
      {q:'Do older South Florida homes have different textures?',a:'Yes. Homes in areas like Coral Gables and North Miami often have unique textures from different decades. We have experience matching them all.'}
    ],
    related: [
      {title:'Drywall Repair',href:'/drywall-miami/'},{title:'Drywall Hole Repair',href:'/drywall-hole-repair-miami/'},
      {title:'Drywall Crack Repair',href:'/drywall-crack-repair-miami/'},{title:'Water Damage Repair',href:'/water-damage-drywall-repair-miami/'}
    ],
    price: 'Texture matching starts at $150', stats: 'Fully Insured • Perfect Match Guaranteed'
  },
  {
    name: 'TV Cable Concealment', slug: 'tv-cable-concealment-miami',
    parent: 'TV Mounting', parentSlug: 'tv-mounting-miami',
    subtitle: 'Clean, hidden cable routing for a sleek wall-mounted TV setup.',
    desc: 'In-wall and surface solutions available.',
    intro: 'Nothing ruins a beautiful TV mounting job like visible cables. LUXHT Fix provides professional cable concealment for South Florida homeowners — routing HDMI, power, and audio cables behind walls or through premium cable covers. Whether you\'re in a Miami Beach high-rise or a Davie single-family home, we deliver clean, organized setups.',
    details: ['In-wall cable routing (HDMI, power, audio)','Surface cable cover installation','Power outlet relocation behind TV','Cable management for soundbars','Multi-device cable organization','Conduit installation for concrete walls'],
    steps: ['Assess wall type and cable routing options','Plan optimal cable path from TV to devices','Cut access points or install surface tracks','Route cables through wall or covers','Install any needed power outlets','Test all connections and organize cables'],
    why: ['Cable concealment specialists in South Florida','In-wall and surface solutions for any wall type','Condo-friendly installations (no structural changes)','Clean, organized results every time','Same-week service across Miami-Dade & Broward','Fully insured and background-checked'],
    faqs: [
      {q:'Can you hide cables in a condo wall?',a:'Yes. We offer both in-wall routing and surface cable covers that work perfectly in condos throughout Aventura, Sunny Isles Beach, and Miami Beach without structural modifications.'},
      {q:'How much does cable concealment cost in Miami?',a:'Basic cable cover installation starts at $100. In-wall cable routing starts at $175. Pricing depends on wall type and number of cables.'},
      {q:'Do you relocate power outlets?',a:'Yes. We can install a power outlet behind your TV for the cleanest possible look — no visible cords at all.'},
      {q:'Can you conceal cables on concrete walls?',a:'Yes. Many South Florida condos have concrete walls. We use surface-mount solutions and conduit that look professional and clean.'}
    ],
    related: [
      {title:'TV Mounting',href:'/tv-mounting-miami/'},{title:'Fireplace TV Mounting',href:'/fireplace-tv-mounting-miami/'},
      {title:'Soundbar Mounting',href:'/soundbar-mounting-miami/'},{title:'Outdoor TV Mounting',href:'/outdoor-tv-mounting-miami/'}
    ],
    price: 'Cable concealment starts at $100', stats: 'Fully Insured • Condo-Friendly Solutions'
  },
];

// Generate more services using a shorter helper approach
const quickServices = [
  { name:'Fireplace TV Mounting', slug:'fireplace-tv-mounting-miami', parent:'TV Mounting', parentSlug:'tv-mounting-miami',
    subtitle:'Secure TV mounting above fireplaces with heat-safe solutions.', price:'$175',
    intro:'Mount your TV above the fireplace safely in your South Florida home. LUXHT Fix uses heat-resistant hardware and tilting mounts to ensure optimal viewing angles and safe operation for homes in Miami, Coral Gables, Cooper City, and beyond.' },
  { name:'Soundbar Mounting', slug:'soundbar-mounting-miami', parent:'TV Mounting', parentSlug:'tv-mounting-miami',
    subtitle:'Professional soundbar installation paired with your wall-mounted TV.', price:'$75',
    intro:'Complete your entertainment setup with a professionally mounted soundbar. LUXHT Fix securely installs soundbars below or alongside your TV with clean cable management throughout South Florida homes.' },
  { name:'Outdoor TV Mounting', slug:'outdoor-tv-mounting-miami', parent:'TV Mounting', parentSlug:'tv-mounting-miami',
    subtitle:'Weather-resistant outdoor TV installation for patios, lanais, and pool areas.', price:'$200',
    intro:'South Florida\'s year-round outdoor lifestyle demands professional outdoor TV installations. LUXHT Fix installs weather-resistant TVs on patios, lanais, pool decks, and outdoor kitchens across Miami, Fort Lauderdale, and Hollywood with proper waterproofing and UV protection.' },
  { name:'Door Alignment', slug:'door-alignment-miami', parent:'Door, Lock & Trim', parentSlug:'door-lock-trim-miami',
    subtitle:'Fix sticking, dragging, or misaligned doors caused by settling and humidity.', price:'$95',
    intro:'South Florida\'s humidity and soil conditions cause doors to stick, drag, and misalign more frequently than in other climates. LUXHT Fix provides expert door alignment services across Miami-Dade and Broward counties to restore smooth operation.' },
  { name:'Deadbolt Installation', slug:'deadbolt-installation-miami', parent:'Door, Lock & Trim', parentSlug:'door-lock-trim-miami',
    subtitle:'High-security deadbolt installation for homes and condos.', price:'$85',
    intro:'Protect your South Florida home with a professional deadbolt installation. LUXHT Fix installs Grade 1 and Grade 2 deadbolts throughout Miami, Pembroke Pines, Aventura, and surrounding areas for maximum security.' },
  { name:'Smart Lock Installation', slug:'smart-lock-installation-miami', parent:'Smart Home Installation', parentSlug:'smart-home-installation-miami',
    subtitle:'Keyless entry with keypad, fingerprint, or smartphone control.', price:'$95',
    intro:'Upgrade your South Florida home with smart lock technology. LUXHT Fix installs Schlage, August, Yale, and Kwikset smart locks with full app setup for homeowners across Miami, Fort Lauderdale, Cooper City, and surrounding areas.' },
  { name:'Door Handle Replacement', slug:'door-handle-replacement-miami', parent:'Door, Lock & Trim', parentSlug:'door-lock-trim-miami',
    subtitle:'Modern handle and knob upgrades for interior and exterior doors.', price:'$75',
    intro:'Update your South Florida home\'s door hardware with modern handles, knobs, and lever sets. LUXHT Fix provides fast, professional replacement throughout Miami-Dade and Broward counties.' },
  { name:'Baseboard Installation', slug:'baseboard-installation-miami', parent:'Baseboard Installation', parentSlug:'baseboard-installation-miami',
    subtitle:'Clean baseboard installation, replacement, and repair.', price:'$3/ft',
    intro:'Give your South Florida home a polished finish with professional baseboard installation. LUXHT Fix installs, replaces, and repairs baseboards throughout Miami, Hollywood, Davie, Miramar, and surrounding communities.' },
  { name:'Crown Molding Installation', slug:'crown-molding-installation-miami', parent:'Crown Molding Installation', parentSlug:'crown-molding-installation-miami',
    subtitle:'Elegant crown molding that adds architectural detail and value.', price:'$5/ft',
    intro:'Add sophistication to your South Florida home with professional crown molding. LUXHT Fix installs traditional and modern crown molding styles throughout Coral Gables, Aventura, Miami Beach, and all surrounding areas.' },
  { name:'Faucet Replacement', slug:'faucet-replacement-miami', parent:'Faucet & Fixtures', parentSlug:'faucet-fixtures-miami',
    subtitle:'Leak-free faucet installation for kitchens and bathrooms.', price:'$95',
    intro:'Upgrade or replace your kitchen and bathroom faucets with professional installation from LUXHT Fix. We serve homeowners throughout South Florida with fast, clean faucet replacements.' },
  { name:'Shower Head Replacement', slug:'shower-head-replacement-miami', parent:'Faucet & Fixtures', parentSlug:'faucet-fixtures-miami',
    subtitle:'Upgrade to modern rain, handheld, or multi-function shower heads.', price:'$75',
    intro:'Transform your daily shower experience with a professional shower head upgrade. LUXHT Fix installs rain heads, handheld units, and multi-function systems across South Florida homes and condos.' },
  { name:'Garbage Disposal Installation', slug:'garbage-disposal-installation-miami', parent:'Faucet & Fixtures', parentSlug:'faucet-fixtures-miami',
    subtitle:'Professional garbage disposal installation and replacement.', price:'$150',
    intro:'Get a new garbage disposal installed properly in your South Florida kitchen. LUXHT Fix handles removal of old units and installation of new InSinkErator, Waste King, and other brands across Miami-Dade and Broward.' },
  { name:'Toilet Repair', slug:'toilet-repair-miami', parent:'Faucet & Fixtures', parentSlug:'faucet-fixtures-miami',
    subtitle:'Fix running, leaking, or malfunctioning toilets quickly.', price:'$95',
    intro:'Stop wasting water and money on a faulty toilet. LUXHT Fix provides fast toilet repair and replacement services across South Florida — from running toilets in Aventura condos to complete replacements in Pembroke Pines homes.' },
  { name:'Smart Doorbell Installation', slug:'smart-doorbell-installation-miami', parent:'Smart Home Installation', parentSlug:'smart-home-installation-miami',
    subtitle:'Ring, Nest, and other smart doorbell installation with Wi-Fi setup.', price:'$85',
    intro:'Enhance your South Florida home\'s security with a professionally installed smart doorbell. LUXHT Fix installs Ring, Nest, Arlo, and other brands with proper wiring and Wi-Fi configuration across Miami-Dade and Broward counties.' },
  // South Florida specific
  { name:'Hurricane Damage Repair', slug:'hurricane-damage-repair-miami', parent:'Hurricane Damage Repair', parentSlug:'hurricane-damage-repair-miami',
    subtitle:'Fast storm damage repair for walls, ceilings, doors, and exteriors.', price:'$200',
    intro:'When hurricanes and tropical storms hit South Florida, LUXHT Fix is ready to help restore your home. We repair storm-damaged drywall, doors, trim, and interior finishes across Miami, Fort Lauderdale, Hollywood, Pembroke Pines, and all surrounding areas. Our team responds quickly after storms to secure and repair your home.' },
  { name:'Stucco Repair', slug:'stucco-repair-miami', parent:'Stucco Repair', parentSlug:'stucco-repair-miami',
    subtitle:'Professional stucco crack repair, patching, and color matching.', price:'$175',
    intro:'Stucco is the dominant exterior finish on South Florida homes, and cracks, chips, and water intrusion are common issues in our tropical climate. LUXHT Fix provides expert stucco repair throughout Miami, Coral Gables, Doral, and Pembroke Pines with professional color matching.' },
  { name:'Screen Enclosure Repair', slug:'screen-enclosure-repair-miami', parent:'Screen Enclosure Repair', parentSlug:'screen-enclosure-repair-miami',
    subtitle:'Screen repair and re-screening for pool cages, lanais, and patios.', price:'$150',
    intro:'South Florida\'s pool cages and lanai screen enclosures take a beating from storms, sun, and daily use. LUXHT Fix repairs torn screens, replaces damaged panels, and re-screens entire enclosures across Miami-Dade and Broward counties.' },
  { name:'Impact Window Installation Prep', slug:'impact-window-prep-miami', parent:'Impact Window Prep', parentSlug:'impact-window-prep-miami',
    subtitle:'Framing, trim, and finishing work for impact window installations.', price:'$250',
    intro:'Preparing your South Florida home for impact windows requires precise framing, trim work, and finishing. LUXHT Fix handles the carpentry and interior finishing around impact window installations throughout Miami, Fort Lauderdale, and surrounding areas.' },
  { name:'Patio & Lanai Repair', slug:'patio-lanai-repair-miami', parent:'Patio & Lanai Repair', parentSlug:'patio-lanai-repair-miami',
    subtitle:'Repair and refresh your outdoor living spaces — tiles, railings, and structures.', price:'$200',
    intro:'South Florida\'s outdoor living spaces are essential to the lifestyle. LUXHT Fix repairs patios, lanais, outdoor tile, railings, and structures across Miami, Hollywood, Davie, and Miramar to keep your outdoor areas safe and beautiful.' },
];

function generateTemplatePage(svc) {
  const neighborhoods = JSON.stringify(MIAMI_NEIGHBORHOODS);
  const details = JSON.stringify(svc.details || [
    `Professional ${svc.name.toLowerCase()} service`,
    'Expert craftsmanship and quality materials',
    'Clean execution with area protection',
    'Same-week scheduling available',
    'Serving all of South Florida',
    'Fully insured professionals'
  ]);
  const steps = JSON.stringify(svc.steps || [
    'Assess the project scope and requirements',
    'Provide detailed quote with transparent pricing',
    'Schedule service at your convenience',
    'Complete work with professional-grade materials',
    'Clean workspace and inspect results',
    'Ensure your complete satisfaction'
  ]);
  const why = JSON.stringify(svc.why || [
    `${svc.name} specialists serving South Florida`,
    'Professional-grade materials and tools',
    'Clean, respectful execution in your home',
    'Transparent pricing with no hidden fees',
    'Same-week service across Miami-Dade & Broward',
    'Fully insured and background-checked'
  ]);
  const faqs = JSON.stringify(svc.faqs || [
    {q:`How much does ${svc.name.toLowerCase()} cost in South Florida?`,a:`Pricing varies by project scope. ${svc.name} starts at ${svc.price}. Contact us with photos for a fast, personalized quote.`},
    {q:`Do you serve my area in South Florida?`,a:`Yes! LUXHT Fix serves all of Miami-Dade and Broward counties including Miami, Fort Lauderdale, Hollywood, Pembroke Pines, and surrounding cities.`},
    {q:`How quickly can you schedule ${svc.name.toLowerCase()}?`,a:`We offer same-week service for most projects. Contact us to check current availability in your area.`},
    {q:`Are you fully insured?`,a:`Yes. LUXHT Fix is fully fully insured for all work we perform throughout South Florida.`}
  ]);
  const related = JSON.stringify(svc.related || [
    {title:'All Services',href:'/south-florida/'},
    {title:'Drywall Repair',href:'/drywall-miami/'},
    {title:'TV Mounting',href:'/tv-mounting-miami/'},
    {title:'Flooring',href:'/flooring-installation-miami/'},
    {title:'Bath Remodel',href:'/bath-remodel-miami/'}
  ]);

  return `import ServicePageTemplate from '@/components/ServicePageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${svc.name} in South Florida | Miami, Fort Lauderdale - LUXHT Fix',
  description: 'Professional ${svc.name.toLowerCase()} in South Florida. Serving Miami, Fort Lauderdale, Hollywood, Pembroke Pines & more. Fully Insured. Call today!',
  alternates: { canonical: 'https://fix.luxht.com/${svc.slug}/' },
  openGraph: {
    title: '${svc.name} in South Florida | LUXHT Fix',
    description: 'Professional ${svc.name.toLowerCase()} in South Florida. Serving Miami, Fort Lauderdale & surrounding areas.',
    url: 'https://fix.luxht.com/${svc.slug}/',
    type: 'website',
    siteName: 'LUXHT Fix',
  },
};

export default function ${svc.slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()).replace(/ /g, '')}Page() {
  return (
    <ServicePageTemplate
      serviceName="${svc.name}"
      slug="${svc.slug}"
      location="miami"
      neighborhoods={${neighborhoods}}
      parentCategory="${svc.parent}"
      parentSlug="${svc.parentSlug}"
      heroSubtitle="${svc.subtitle}"
      heroDescription="${svc.desc || 'Same-week service available throughout South Florida.'}"
      introParagraph={\`${svc.intro}\`}
      serviceDetails={${details}}
      processSteps={${steps}}
      whyChooseUs={${why}}
      faqs={${faqs}}
      relatedServices={${related}}
      startingPrice="${svc.price ? `${svc.name} starts at ${svc.price}` : ''}"
      statsText="Fully Insured • Serving Miami-Dade & Broward"
    />
  );
}
`;
}

// Create all directories and files
const appDir = path.join(process.cwd(), 'app');
const allServices = [...templateServices, ...quickServices];
let created = 0;

for (const svc of allServices) {
  const dir = path.join(appDir, svc.slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const filePath = path.join(dir, 'page.tsx');
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, generateTemplatePage(svc));
    created++;
    console.log(`✅ Created: app/${svc.slug}/page.tsx`);
  } else {
    console.log(`⏭️  Skipped (exists): app/${svc.slug}/page.tsx`);
  }
}

console.log(`\n🎉 Done! Created ${created} new Miami service pages.`);
