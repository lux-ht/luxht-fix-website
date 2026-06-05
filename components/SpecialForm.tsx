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
        ruthSupport: 'No need, regular scheduling is fine',
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
            const detailsText = [
                formData.ruthSupport ? `Ruth Support: ${formData.ruthSupport}` : ''
            ].filter(Boolean).join(' | ');

            const { error } = await supabase.from('leads').insert([
                {
                    name: formData.name,
                    phone: formData.phone,
                    zip_code: formData.zip,
                    service: formData.offer,
                    source: 'magazine-winter-park',
                    details: detailsText,
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
            <div className="field">
                <label>Would you feel more comfortable with Ruth involved?</label>
                <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.5', margin: '0 0 8px 0' }}>
                    Ruth is part of our family-owned team and stays personally connected to the process. Some clients feel better knowing there is a woman in the loop for communication, support, and extra reassurance.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '4px' }}>
                    {[
                        "I would prefer Ruth to be part of the visit if possible",
                        "No need, regular scheduling is fine"
                    ].map((opt) => (
                        <button
                            key={opt}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, ruthSupport: opt }))}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '14px 16px',
                                background: formData.ruthSupport === opt ? 'rgba(201, 168, 76, 0.12)' : 'rgba(255, 255, 255, 0.1)',
                                border: formData.ruthSupport === opt ? '2px solid var(--gold)' : '1px solid rgba(255, 255, 255, 0.2)',
                                borderRadius: '10px',
                                cursor: 'pointer',
                                textAlign: 'left',
                                fontSize: '14px',
                                fontWeight: '500',
                                color: 'var(--white)',
                                transition: 'all 0.15s',
                                fontFamily: 'inherit'
                            }}
                        >
                            <span style={{
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                border: formData.ruthSupport === opt ? '2px solid var(--gold)' : '2px solid rgba(255,255,255,0.4)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '11px',
                                fontWeight: '800',
                                color: 'var(--white)',
                                flexShrink: 0,
                                background: formData.ruthSupport === opt ? 'var(--gold)' : 'transparent',
                                transition: 'all 0.15s'
                            }}>
                                {formData.ruthSupport === opt ? '✓' : ''}
                            </span>
                            <span>{opt}</span>
                        </button>
                    ))}
                </div>
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting…' : '✓ Claim My Offer Now — It\'s Free'}
            </button>
        </form>
    );
}
