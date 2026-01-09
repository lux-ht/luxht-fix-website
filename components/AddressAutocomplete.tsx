"use client";

import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Loader2 } from 'lucide-react';

interface AddressAutocompleteProps {
    value: string;
    onChange: (value: string) => void;
}

interface NominatimResult {
    place_id: number;
    display_name: string;
    lat: string;
    lon: string;
}

export default function AddressAutocomplete({ value, onChange }: AddressAutocompleteProps) {
    const [suggestions, setSuggestions] = useState<NominatimResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Debounce search
    useEffect(() => {
        const timer = setTimeout(() => {
            if (value.length > 2 && showSuggestions) {
                searchAddress(value);
            }
        }, 800); // 800ms debounce to be respectful to OSM API

        return () => clearTimeout(timer);
    }, [value, showSuggestions]);

    // Handle clicking outside to close suggestions
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const searchAddress = async (query: string) => {
        setIsLoading(true);
        try {
            // Biasing search towards Orlando, FL area
            // Viewbox: min_lon,min_lat,max_lon,max_lat (approx for Central FL)
            // Orlando coords: ~28.5383° N, 81.3792° W
            // Box: -81.8, 28.2, -80.8, 29.0
            const viewbox = "-81.8,29.0,-80.8,28.2";

            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5&addressdetails=1&countrycodes=us&viewbox=${viewbox}&bounded=1`,
                {
                    headers: {
                        "User-Agent": "LUXHT-Fix-Website/1.0"
                    }
                }
            );

            if (response.ok) {
                const data = await response.json();
                setSuggestions(data);
            }
        } catch (error) {
            console.error("Error fetching address:", error);
            setSuggestions([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSelect = (address: string) => {
        onChange(address);
        setShowSuggestions(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
        setShowSuggestions(true);
    };

    return (
        <div className="relative" ref={wrapperRef}>
            <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                Property Address
            </label>
            <div className="relative">
                <input
                    type="text"
                    name="address"
                    required
                    autoComplete="off" // Disable browser default to show ours
                    placeholder="123 Orlando Ave, Orlando, FL"
                    value={value}
                    onChange={handleInputChange}
                    onFocus={() => {
                        if (value.length > 2) setShowSuggestions(true);
                    }}
                    className="w-full px-4 py-3 pl-10 rounded-xl border border-slate-200 focus:border-[#64CEBB] focus:ring-2 focus:ring-[#64CEBB]/20 outline-none transition-all placeholder:text-slate-400"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    {isLoading ? (
                        <Loader2 size={18} className="animate-spin text-[#64CEBB]" />
                    ) : (
                        <MapPin size={18} />
                    )}
                </div>
            </div>

            {/* Suggestions Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
                <div className="absolute z-50 w-full mt-1 bg-white rounded-xl shadow-xl border border-slate-100 max-h-60 overflow-y-auto">
                    {suggestions.map((item) => (
                        <button
                            key={item.place_id}
                            type="button"
                            onClick={() => handleSelect(item.display_name)}
                            className="w-full text-left px-4 py-3 hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0 text-sm text-slate-700 block"
                        >
                            {item.display_name}
                        </button>
                    ))}
                    <div className="bg-slate-50 px-3 py-1 text-[10px] text-slate-400 text-center uppercase tracking-wider">
                        Powered by OpenStreetMap
                    </div>
                </div>
            )}
        </div>
    );
}
