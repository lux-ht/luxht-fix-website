"use client";

import { useState, useRef, useEffect, useCallback } from 'react';
import { Search, ArrowRight, X, Hammer, DollarSign, FileText, HelpCircle } from 'lucide-react';
import Link from 'next/link';

interface SearchItem {
    title: string;
    href: string;
    category: 'service' | 'cost' | 'blog' | 'faq' | 'page';
    keywords: string[];
}

const searchIndex: SearchItem[] = [
    // Services — South Florida (primary)
    { title: "Drywall Repair", href: "/drywall-miami/", category: "service", keywords: ["drywall", "wall", "hole", "patch", "repair", "plaster", "sheetrock"] },
    { title: "Drywall Crack Repair", href: "/drywall-crack-repair-miami/", category: "service", keywords: ["crack", "drywall", "wall crack", "settling", "fracture"] },
    { title: "Drywall Hole Repair", href: "/drywall-hole-repair-miami/", category: "service", keywords: ["hole", "drywall", "punch", "doorknob", "wall hole"] },
    { title: "Water Damage Drywall", href: "/water-damage-drywall-repair-miami/", category: "service", keywords: ["water", "damage", "leak", "moisture", "mold", "flood", "drywall"] },
    { title: "Texture Matching", href: "/texture-matching-miami/", category: "service", keywords: ["texture", "orange peel", "knockdown", "smooth", "match"] },
    { title: "TV Mounting", href: "/tv-mounting-miami/", category: "service", keywords: ["tv", "mount", "television", "hang", "wall mount", "flat screen"] },
    { title: "TV Cable Concealment", href: "/tv-cable-concealment-miami/", category: "service", keywords: ["cable", "wire", "conceal", "hide", "tv", "cord"] },
    { title: "Fireplace TV Mounting", href: "/fireplace-tv-mounting-miami/", category: "service", keywords: ["fireplace", "tv", "mount", "above", "mantle"] },
    { title: "Soundbar Mounting", href: "/soundbar-mounting-miami/", category: "service", keywords: ["soundbar", "sound", "bar", "speaker", "mount"] },
    { title: "Outdoor TV Mounting", href: "/outdoor-tv-mounting-miami/", category: "service", keywords: ["outdoor", "patio", "tv", "outside", "weatherproof"] },
    { title: "Door, Lock & Trim", href: "/door-lock-trim-miami/", category: "service", keywords: ["door", "lock", "trim", "handle", "knob", "deadbolt"] },
    { title: "Door Alignment", href: "/door-alignment-miami/", category: "service", keywords: ["door", "alignment", "stuck", "swing", "frame"] },
    { title: "Deadbolt Installation", href: "/deadbolt-installation-miami/", category: "service", keywords: ["deadbolt", "lock", "security", "install"] },
    { title: "Smart Lock Installation", href: "/smart-lock-installation-miami/", category: "service", keywords: ["smart", "lock", "keypad", "keyless", "bluetooth", "wifi"] },
    { title: "Door Handle Replacement", href: "/door-handle-replacement-miami/", category: "service", keywords: ["handle", "door", "knob", "lever", "replace"] },
    { title: "Faucet & Fixtures", href: "/faucet-fixtures-miami/", category: "service", keywords: ["faucet", "fixture", "sink", "plumbing", "tap", "kitchen", "bathroom"] },
    { title: "Faucet Replacement", href: "/faucet-replacement-miami/", category: "service", keywords: ["faucet", "replace", "kitchen", "bathroom", "leak"] },
    { title: "Shower Head Replacement", href: "/shower-head-replacement-miami/", category: "service", keywords: ["shower", "head", "rain", "showerhead", "replace"] },
    { title: "Garbage Disposal", href: "/garbage-disposal-installation-miami/", category: "service", keywords: ["garbage", "disposal", "insinkerator", "kitchen", "sink"] },
    { title: "Toilet Repair", href: "/toilet-repair-miami/", category: "service", keywords: ["toilet", "bathroom", "running", "flush", "leak", "replace"] },
    { title: "Smart Home Installation", href: "/smart-home-installation-miami/", category: "service", keywords: ["smart", "home", "ring", "nest", "camera", "thermostat", "automation"] },
    { title: "Smart Doorbell", href: "/smart-doorbell-installation-miami/", category: "service", keywords: ["doorbell", "ring", "nest", "video", "smart"] },
    { title: "Flooring Installation", href: "/flooring-installation-miami/", category: "service", keywords: ["floor", "flooring", "hardwood", "vinyl", "tile", "laminate", "lvp", "carpet"] },
    { title: "Baseboard Installation", href: "/baseboard-installation-miami/", category: "service", keywords: ["baseboard", "trim", "molding", "base"] },
    { title: "Crown Molding", href: "/crown-molding-installation-miami/", category: "service", keywords: ["crown", "molding", "ceiling", "trim", "decorative"] },
    { title: "Kitchen Refacing", href: "/kitchen-refacing-miami/", category: "service", keywords: ["kitchen", "cabinet", "refacing", "remodel", "doors", "shaker"] },
    { title: "Bath Remodel", href: "/bath-remodel-miami/", category: "service", keywords: ["bathroom", "bath", "remodel", "renovation", "shower", "tub", "vanity", "tile"] },
    { title: "Deck Building", href: "/deck-building-miami/", category: "service", keywords: ["deck", "patio", "outdoor", "composite", "wood", "build"] },
    { title: "Furniture Assembly", href: "/furniture-assembly-miami/", category: "service", keywords: ["furniture", "assembly", "ikea", "desk", "bed", "shelf", "wardrobe", "bookcase"] },
    { title: "Hurricane Damage Repair", href: "/hurricane-damage-repair-miami/", category: "service", keywords: ["hurricane", "storm", "damage", "wind", "emergency", "repair"] },
    { title: "Stucco Repair", href: "/stucco-repair-miami/", category: "service", keywords: ["stucco", "exterior", "crack", "patch", "wall"] },
    { title: "Patio & Lanai Repair", href: "/patio-lanai-repair-miami/", category: "service", keywords: ["patio", "lanai", "screen", "outdoor", "enclosure"] },
    { title: "Screen Enclosure Repair", href: "/screen-enclosure-repair-miami/", category: "service", keywords: ["screen", "enclosure", "pool", "cage", "mesh", "repair"] },
    { title: "Property Maintenance", href: "/property-maintenance-miami/", category: "service", keywords: ["maintenance", "property", "seasonal", "preventative", "leak check", "upkeep"] },
    { title: "Commercial Property Maintenance", href: "/commercial-property-maintenance-miami/", category: "service", keywords: ["commercial", "facility", "business", "office", "retail", "maintenance", "repair"] },
    { title: "Rental Turnover Repairs", href: "/rental-turnover-repairs-miami/", category: "service", keywords: ["rental", "turnover", "tenant", "landlord", "paint", "prep", "punch list"] },
    { title: "Fence & Gate Repair", href: "/fence-gate-repair-miami/", category: "service", keywords: ["fence", "gate", "wood", "vinyl", "post", "hinge", "repair"] },
    { title: "Gutter Guard & Cleaning", href: "/gutter-maintenance-miami/", category: "service", keywords: ["gutter", "guard", "cleaning", "leaf", "maintenance", "downspout"] },
    { title: "Pressure Washing", href: "/pressure-washing-miami/", category: "service", keywords: ["pressure", "wash", "power", "cleaning", "grime", "mold", "driveway", "stucco"] },
    { title: "Accent Walls & Custom Trim", href: "/accent-walls-miami/", category: "service", keywords: ["accent", "wall", "trim", "shiplap", "wainscoting", "board", "batten", "carpentry"] },

    // Cost Guides
    { title: "Drywall Repair Costs", href: "/costs/drywall-repair/", category: "cost", keywords: ["drywall", "cost", "price", "how much", "repair"] },
    { title: "TV Mounting Costs", href: "/costs/tv-mounting/", category: "cost", keywords: ["tv", "mount", "cost", "price", "how much"] },
    { title: "Flooring Installation Costs", href: "/costs/flooring-installation/", category: "cost", keywords: ["floor", "flooring", "cost", "price", "how much"] },
    { title: "Bathroom Remodel Costs", href: "/costs/bathroom-remodel/", category: "cost", keywords: ["bathroom", "bath", "remodel", "cost", "price"] },
    { title: "Kitchen Refacing Costs", href: "/costs/kitchen-refacing/", category: "cost", keywords: ["kitchen", "cabinet", "refacing", "cost", "price"] },
    { title: "Deck Building Costs", href: "/costs/deck-building/", category: "cost", keywords: ["deck", "build", "cost", "price", "how much"] },
    { title: "Smart Home Costs", href: "/costs/smart-home-installation/", category: "cost", keywords: ["smart", "home", "cost", "price", "how much"] },
    { title: "Door & Lock Costs", href: "/costs/door-lock-trim/", category: "cost", keywords: ["door", "lock", "cost", "price", "how much"] },
    { title: "Faucet & Fixtures Costs", href: "/costs/faucet-fixtures/", category: "cost", keywords: ["faucet", "fixture", "cost", "price", "how much"] },
    { title: "Furniture Assembly Costs", href: "/costs/furniture-assembly/", category: "cost", keywords: ["furniture", "assembly", "cost", "price", "how much"] },

    // Blog
    { title: "Signs You Need Drywall Repair", href: "/blog/signs-you-need-drywall-repair", category: "blog", keywords: ["drywall", "signs", "damage", "when", "repair"] },
    { title: "TV Mounting Guide 2026", href: "/blog/ultimate-guide-tv-mounting-2026", category: "blog", keywords: ["tv", "mount", "guide", "how to", "tips"] },
    { title: "Bathroom Remodel Trends", href: "/blog/bathroom-remodel-trends-south-florida", category: "blog", keywords: ["bathroom", "remodel", "trends", "design", "2026"] },
    { title: "Smart Home Devices Guide", href: "/blog/smart-home-devices-every-florida-homeowner-needs", category: "blog", keywords: ["smart", "home", "devices", "ring", "nest", "camera"] },
    { title: "Hurricane Season Prep", href: "/blog/hurricane-season-home-prep-checklist", category: "blog", keywords: ["hurricane", "storm", "prep", "checklist", "protect"] },
    { title: "DIY vs Professional Handyman", href: "/blog/diy-vs-professional-handyman", category: "blog", keywords: ["diy", "professional", "handyman", "hire", "vs"] },
    { title: "Flooring Options Guide", href: "/blog/flooring-options-florida-homes", category: "blog", keywords: ["flooring", "floor", "hardwood", "vinyl", "tile", "options"] },
    { title: "Kitchen Refacing vs Remodel", href: "/blog/kitchen-refacing-vs-full-remodel", category: "blog", keywords: ["kitchen", "refacing", "remodel", "cabinet", "vs"] },
    { title: "Deck Maintenance Tips", href: "/blog/deck-maintenance-tips-florida-climate", category: "blog", keywords: ["deck", "maintenance", "care", "tips", "florida"] },
    { title: "Home Value Improvements", href: "/blog/home-improvements-that-increase-value", category: "blog", keywords: ["home", "value", "improvement", "roi", "increase", "invest"] },

    // Pages
    { title: "All Services", href: "/services/", category: "page", keywords: ["services", "all", "list", "categories"] },
    { title: "Cost Guides", href: "/costs/", category: "page", keywords: ["cost", "price", "guide", "how much", "pricing"] },
    { title: "About Us", href: "/about/", category: "page", keywords: ["about", "company", "team", "who", "story"] },
    { title: "FAQ", href: "/faq/", category: "page", keywords: ["faq", "question", "help", "answer"] },
    { title: "Portfolio", href: "/portfolio/", category: "page", keywords: ["portfolio", "work", "projects", "gallery", "photos"] },
    { title: "Testimonials", href: "/testimonials/", category: "page", keywords: ["testimonials", "reviews", "customers", "rating"] },
    { title: "Contact / Quote", href: "/#contact", category: "page", keywords: ["contact", "quote", "call", "phone", "email"] },
    { title: "South Florida Services", href: "/south-florida/", category: "page", keywords: ["south florida", "miami", "fort lauderdale", "broward"] },
    { title: "Blog", href: "/blog/", category: "page", keywords: ["blog", "articles", "news", "tips"] },
    { title: "Pricing Transparency", href: "/pricing-transparency/", category: "page", keywords: ["pricing", "transparent", "honest", "no hidden fees"] },
];

const categoryConfig = {
    service: { icon: Hammer, label: "Services", color: "text-[#584D94]" },
    cost: { icon: DollarSign, label: "Cost Guides", color: "text-[#64CEBB]" },
    blog: { icon: FileText, label: "Blog Articles", color: "text-amber-500" },
    faq: { icon: HelpCircle, label: "Help", color: "text-blue-500" },
    page: { icon: ArrowRight, label: "Pages", color: "text-slate-500" },
};

function fuzzyMatch(query: string, text: string): boolean {
    const q = query.toLowerCase();
    const t = text.toLowerCase();
    if (t.includes(q)) return true;

    // Simple fuzzy: check if all chars appear in order
    let qi = 0;
    for (let i = 0; i < t.length && qi < q.length; i++) {
        if (t[i] === q[qi]) qi++;
    }
    return qi === q.length;
}

function scoreMatch(query: string, item: SearchItem): number {
    const q = query.toLowerCase();
    const title = item.title.toLowerCase();

    // Exact title start = highest
    if (title.startsWith(q)) return 100;
    // Title contains
    if (title.includes(q)) return 80;
    // Keyword exact match
    if (item.keywords.some(k => k.startsWith(q))) return 70;
    if (item.keywords.some(k => k.includes(q))) return 60;
    // Fuzzy
    if (fuzzyMatch(q, title)) return 30;
    if (item.keywords.some(k => fuzzyMatch(q, k))) return 20;

    return 0;
}

export default function SmartSearch() {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const results = query.length >= 2
        ? searchIndex
            .map(item => ({ item, score: scoreMatch(query, item) }))
            .filter(r => r.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, 8)
            .map(r => r.item)
        : [];

    // Group by category
    const grouped = results.reduce<Record<string, SearchItem[]>>((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
    }, {});

    const flatResults = results;

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex(i => Math.min(i + 1, flatResults.length - 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex(i => Math.max(i - 1, 0));
        } else if (e.key === 'Enter' && flatResults[selectedIndex]) {
            window.location.href = flatResults[selectedIndex].href;
        } else if (e.key === 'Escape') {
            setQuery('');
            setIsOpen(false);
            inputRef.current?.blur();
        }
    }, [flatResults, selectedIndex]);

    useEffect(() => {
        setSelectedIndex(0);
    }, [query]);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={containerRef} className="relative w-full max-w-xl mx-auto mt-8">
            {/* Search Input */}
            <div className={`relative flex items-center bg-white/90 backdrop-blur-md border-2 rounded-2xl px-4 py-3 shadow-lg transition-all duration-300 ${isOpen && results.length > 0 ? 'border-[#584D94] shadow-[#584D94]/10 rounded-b-none' : 'border-slate-200 hover:border-[#64CEBB]'}`}>
                <Search size={20} className="text-slate-400 flex-shrink-0" />
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => { setQuery(e.target.value); setIsOpen(true); }}
                    onFocus={() => setIsOpen(true)}
                    onKeyDown={handleKeyDown}
                    placeholder="What are you looking for? (e.g. drywall, tv mounting, costs...)"
                    className="flex-1 ml-3 bg-transparent text-slate-800 placeholder-slate-400 text-sm focus:outline-none"
                    autoComplete="off"
                />
                {query && (
                    <button
                        onClick={() => { setQuery(''); inputRef.current?.focus(); }}
                        className="text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        <X size={18} />
                    </button>
                )}
            </div>

            {/* Results Dropdown */}
            {isOpen && results.length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white border-2 border-t-0 border-[#584D94] rounded-b-2xl shadow-xl z-50 overflow-hidden max-h-[400px] overflow-y-auto animate-in">
                    {Object.entries(grouped).map(([cat, items]) => {
                        const config = categoryConfig[cat as keyof typeof categoryConfig];
                        const Icon = config.icon;
                        return (
                            <div key={cat}>
                                <div className="px-4 py-2 bg-slate-50 border-b border-slate-100 flex items-center gap-2">
                                    <Icon size={14} className={config.color} />
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{config.label}</span>
                                </div>
                                {items.map((item, i) => {
                                    const globalIdx = flatResults.indexOf(item);
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={`flex items-center justify-between px-4 py-3 text-sm transition-colors ${
                                                globalIdx === selectedIndex
                                                    ? 'bg-[#584D94]/5 text-[#584D94]'
                                                    : 'text-slate-700 hover:bg-slate-50'
                                            }`}
                                            onMouseEnter={() => setSelectedIndex(globalIdx)}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <span className="font-medium">{item.title}</span>
                                            <ArrowRight size={14} className="text-slate-300" />
                                        </Link>
                                    );
                                })}
                            </div>
                        );
                    })}
                    <div className="px-4 py-2 bg-slate-50 text-center">
                        <span className="text-[10px] text-slate-400">↑↓ Navigate · Enter to select · Esc to close</span>
                    </div>
                </div>
            )}

            {/* No results */}
            {isOpen && query.length >= 2 && results.length === 0 && (
                <div className="absolute top-full left-0 right-0 bg-white border-2 border-t-0 border-[#584D94] rounded-b-2xl shadow-xl z-50 p-6 text-center">
                    <p className="text-slate-500 text-sm">No results for &quot;{query}&quot;</p>
                    <p className="text-slate-400 text-xs mt-1">Try searching for a service like &quot;drywall&quot; or &quot;tv mounting&quot;</p>
                </div>
            )}
        </div>
    );
}
