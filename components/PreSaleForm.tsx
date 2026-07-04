"use client";

import React, { useState } from 'react';
import { CheckCircle, Loader2, Phone, MessageSquare } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const CONCERN_OPTIONS = [
  'Kitchen',
  'Bathrooms',
  'Paint & Walls',
  'Flooring',
  'Doors & Hardware',
  'Exterior & Curb Appeal',
  'Lighting',
  'Moisture & Stains',
  'Baseboards & Trim',
  'Ceilings',
];

export default function PreSaleForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    listingTimeline: '',
    occupancy: '',
    hasRealtor: '',
    budget: '',
    concerns: [] as string[],
    hasInspection: '',
    repairPreference: '',
    photoPermission: '',
    notes: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConcernToggle = (concern: string) => {
    setFormData((prev) => ({
      ...prev,
      concerns: prev.concerns.includes(concern)
        ? prev.concerns.filter((c) => c !== concern)
        : [...prev.concerns, concern],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const qualificationDetails = {
        listing_timeline: formData.listingTimeline,
        occupancy: formData.occupancy,
        has_realtor: formData.hasRealtor,
        budget: formData.budget,
        concerns: formData.concerns,
        has_inspection: formData.hasInspection,
        repair_preference: formData.repairPreference,
        photo_permission: formData.photoPermission,
        notes: formData.notes,
      };

      const { error } = await supabase.from('leads').insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          service: 'Pre-Sale Home Prep Walkthrough',
          source: 'pre-sale-home-prep',
          details: JSON.stringify(qualificationDetails),
        },
      ]);

      if (error) throw error;
      setIsSuccess(true);
    } catch (error: any) {
      console.error('Submission Error:', error);
      alert(
        'Something went wrong. Please call us at (954) 300-3043 instead!'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="w-20 h-20 bg-[#64CEBB] rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} className="text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Thank You!</h3>
        <p className="text-blue-100 leading-relaxed max-w-sm mx-auto mb-6">
          Your Pre-Sale Home Prep request has been received. Our team will
          contact you within 24 hours to schedule your walkthrough.
        </p>
        <p className="text-sm text-blue-200">
          Need faster response?{' '}
          <a href="tel:9543003043" className="text-[#64CEBB] font-semibold underline">Call (954) 300-3043</a> or{' '}
          <a href="sms:9543003043" className="text-[#64CEBB] font-semibold underline">text us</a>.
        </p>
      </div>
    );
  }

  const inputClasses = "w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-[#64CEBB] focus:bg-white/15 outline-none transition-all font-sans";
  const labelClasses = "text-xs font-semibold tracking-wider uppercase text-white/60 mb-1.5 block";

  return (
    <form id="preSaleForm" onSubmit={handleSubmit} className="space-y-4">
      {/* Row 1: Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ps-name" className={labelClasses}>Full Name *</label>
          <input type="text" id="ps-name" name="name" placeholder="First & Last Name" required value={formData.name} onChange={handleChange} className={inputClasses} />
        </div>
        <div>
          <label htmlFor="ps-phone" className={labelClasses}>Phone *</label>
          <input type="tel" id="ps-phone" name="phone" placeholder="(954) 000-0000" required value={formData.phone} onChange={handleChange} className={inputClasses} />
        </div>
      </div>

      {/* Row 2: Email + Address */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ps-email" className={labelClasses}>Email *</label>
          <input type="email" id="ps-email" name="email" placeholder="you@email.com" required value={formData.email} onChange={handleChange} className={inputClasses} />
        </div>
        <div>
          <label htmlFor="ps-address" className={labelClasses}>Property Address *</label>
          <input type="text" id="ps-address" name="address" placeholder="123 Main St, City, FL" required value={formData.address} onChange={handleChange} className={inputClasses} />
        </div>
      </div>

      {/* Row 3: Listing Timeline + Occupancy */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ps-timeline" className={labelClasses}>When are you planning to list? *</label>
          <select id="ps-timeline" name="listingTimeline" required value={formData.listingTimeline} onChange={handleChange} className={inputClasses}>
            <option value="" disabled>— Select —</option>
            <option value="Within 2 weeks">Within 2 weeks</option>
            <option value="1-2 months">1–2 months</option>
            <option value="3-6 months">3–6 months</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
        <div>
          <label htmlFor="ps-occupancy" className={labelClasses}>Is the home occupied or vacant? *</label>
          <select id="ps-occupancy" name="occupancy" required value={formData.occupancy} onChange={handleChange} className={inputClasses}>
            <option value="" disabled>— Select —</option>
            <option value="Occupied">Occupied</option>
            <option value="Vacant">Vacant</option>
            <option value="Tenant-occupied">Tenant-occupied</option>
          </select>
        </div>
      </div>

      {/* Row 4: Realtor + Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ps-realtor" className={labelClasses}>Do you already have a realtor? *</label>
          <select id="ps-realtor" name="hasRealtor" required value={formData.hasRealtor} onChange={handleChange} className={inputClasses}>
            <option value="" disabled>— Select —</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Looking for one">Looking for one</option>
          </select>
        </div>
        <div>
          <label htmlFor="ps-budget" className={labelClasses}>What is your target budget? *</label>
          <select id="ps-budget" name="budget" required value={formData.budget} onChange={handleChange} className={inputClasses}>
            <option value="" disabled>— Select —</option>
            <option value="Under $1,500">Under $1,500</option>
            <option value="$1,500-$3,500">$1,500 – $3,500</option>
            <option value="$3,500-$7,500">$3,500 – $7,500</option>
            <option value="$7,500-$15,000">$7,500 – $15,000</option>
            <option value="$15,000+">$15,000+</option>
          </select>
        </div>
      </div>

      {/* Concern Areas - Multi-select Chips */}
      <div>
        <label className={labelClasses}>What areas concern you most?</label>
        <div className="flex flex-wrap gap-2 mt-1">
          {CONCERN_OPTIONS.map((concern) => {
            const isActive = formData.concerns.includes(concern);
            return (
              <button
                key={concern}
                type="button"
                onClick={() => handleConcernToggle(concern)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  isActive
                    ? 'bg-[#64CEBB]/20 border-[#64CEBB] text-[#64CEBB]'
                    : 'bg-white/8 border-white/20 text-white/70 hover:bg-white/12 hover:border-white/35'
                }`}
              >
                {isActive && <CheckCircle size={12} className="inline mr-1 -mt-0.5" />}
                {concern}
              </button>
            );
          })}
        </div>
      </div>

      {/* Row 5: Inspection + Repair preference */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ps-inspection" className={labelClasses}>Do you have an inspection report?</label>
          <select id="ps-inspection" name="hasInspection" value={formData.hasInspection} onChange={handleChange} className={inputClasses}>
            <option value="" disabled>— Select —</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Planning to get one">Planning to get one</option>
          </select>
        </div>
        <div>
          <label htmlFor="ps-repair-pref" className={labelClasses}>Simple repairs or visual upgrades?</label>
          <select id="ps-repair-pref" name="repairPreference" value={formData.repairPreference} onChange={handleChange} className={inputClasses}>
            <option value="" disabled>— Select —</option>
            <option value="Simple repairs only">Simple repairs only</option>
            <option value="Visual upgrades">Visual upgrades</option>
            <option value="Both">Both</option>
          </select>
        </div>
      </div>

      {/* Photo Permission */}
      <div>
        <label htmlFor="ps-photos" className={labelClasses}>Can we take before & after photos?</label>
        <select id="ps-photos" name="photoPermission" value={formData.photoPermission} onChange={handleChange} className={inputClasses}>
          <option value="" disabled>— Select —</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Maybe">Maybe — let&apos;s discuss</option>
        </select>
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="ps-notes" className={labelClasses}>Additional notes</label>
        <textarea
          id="ps-notes"
          name="notes"
          rows={3}
          placeholder="Anything else we should know before the walkthrough?"
          value={formData.notes}
          onChange={handleChange}
          className={`${inputClasses} resize-y min-h-[80px]`}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#64CEBB] text-[#453A75] py-4 rounded-xl font-extrabold text-base tracking-wide hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#64CEBB]/40 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 size={20} className="animate-spin" /> Submitting...
          </>
        ) : (
          <>
            <CheckCircle size={20} /> Book My Pre-Sale Walkthrough — $295
          </>
        )}
      </button>
      <p className="text-center text-xs text-white/45 mt-3">
        The $295 walkthrough fee is credited toward your project if you approve work over $1,500.
      </p>
    </form>
  );
}
