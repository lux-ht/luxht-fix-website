"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function SpecialForm() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        zip: '',
        offer: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const { error } = await supabase.from('leads').insert([
                {
                    name: formData.name,
                    phone: formData.phone,
                    zip_code: formData.zip,
                    service: formData.offer,
                    source: 'magazine-winter-park',
                },
            ]);

            if (error) throw error;

            router.push('/special/thank-you/');
        } catch (error: any) {
            console.error('Submission Error:', error);
            alert(
                'Something went wrong submitting your offer claim. Please call us at (407) 288-0832 instead!'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form id="leadForm" onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="field">
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="First & Last Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="field">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="(407) 000-0000"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="field">
                <label htmlFor="zip">Zip Code</label>
                <input
                    type="text"
                    id="zip"
                    name="zip"
                    placeholder="32789, 32751, etc."
                    maxLength={5}
                    required
                    value={formData.zip}
                    onChange={handleChange}
                />
            </div>
            <div className="field">
                <label htmlFor="offer">Select Your Offer</label>
                <select
                    id="offer"
                    name="offer"
                    required
                    value={formData.offer}
                    onChange={handleChange}
                >
                    <option value="" disabled>
                        — Choose an offer —
                    </option>
                    <option value="Free In-Home Consultation">
                        Free In-Home Consultation
                    </option>
                    <option value="$50 Off Any Project Over $250">
                        $50 Off Any Project Over $250
                    </option>
                    <option value="10 Free Outlet Refresh">
                        10 Free Outlet Refresh
                    </option>
                </select>
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting…' : '✓ Claim My Offer Now — It\'s Free'}
            </button>
        </form>
    );
}
