"use client";

import React, { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import {
    Globe, Hammer, Tv, DoorOpen, Wrench, Grid, Paintbrush, Zap, Ruler,
    PaintRoller, Shield, Building2, Key, Fence, CloudRain, Sparkles, Layers, Bath
} from 'lucide-react';
import StarBorder from '@/components/StarBorder';

/* ─────────────────────────────────────────
   MODERN SVG ICONS (LUCIDE REACT)
───────────────────────────────────────── */
const icons = {
    drywall: <Hammer size={36} strokeWidth={1.5} />,
    tv: <Tv size={36} strokeWidth={1.5} />,
    doors: <DoorOpen size={36} strokeWidth={1.5} />,
    plumbing: <Wrench size={36} strokeWidth={1.5} />,
    flooring: <Grid size={36} strokeWidth={1.5} />,
    kitchen: <Bath size={36} strokeWidth={1.5} />,
    smart: <Zap size={36} strokeWidth={1.5} />,
    trim: <Ruler size={36} strokeWidth={1.5} />,
    outdoor: <PaintRoller size={36} strokeWidth={1.5} />,
    maintenance: <Shield size={36} strokeWidth={1.5} />,
    commercial: <Building2 size={36} strokeWidth={1.5} />,
    turnover: <Key size={36} strokeWidth={1.5} />,
    fence: <Fence size={36} strokeWidth={1.5} />,
    gutter: <CloudRain size={36} strokeWidth={1.5} />,
    pressure: <Sparkles size={36} strokeWidth={1.5} />,
    accent: <Layers size={36} strokeWidth={1.5} />,
};

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const SERVICES = [
    {
        id: 'drywall',
        icon: 'drywall',
        label: 'Drywall Repair',
        color: '#584D94',
        gradient: 'linear-gradient(135deg, #584D94 0%, #7B6FCC 100%)',
        subServices: [
            'Small hole (under 3 inches)',
            'Large hole or multiple holes',
            'Water damage / stain',
            'Crack repair',
            'Ceiling damage',
            'Full room / texture matching',
        ],
        supabaseService: 'Drywall Repair',
    },
    {
        id: 'tv',
        icon: 'tv',
        label: 'TV Mounting',
        color: '#4BC0AD',
        gradient: 'linear-gradient(135deg, #2196a7 0%, #64CEBB 100%)',
        subServices: [
            'Standard wall mount',
            'Hide cables in wall',
            'Fireplace / over mantel',
            'Outdoor TV',
            'Soundbar mounting',
        ],
        supabaseService: 'TV Mounting',
    },
    {
        id: 'doors',
        icon: 'doors',
        label: 'Doors & Locks',
        color: '#6B5FAA',
        gradient: 'linear-gradient(135deg, #6B5FAA 0%, #9B8FDD 100%)',
        subServices: [
            'Door alignment / sticking',
            'Deadbolt installation',
            'Smart lock installation',
            'Door handle replacement',
            'Other door issue',
        ],
        supabaseService: 'Door, Lock & Trim',
    },
    {
        id: 'plumbing',
        icon: 'plumbing',
        label: 'Faucets & Fixtures',
        color: '#0369a1',
        gradient: 'linear-gradient(135deg, #0369a1 0%, #0ea5e9 100%)',
        subServices: [
            'Faucet replacement',
            'Shower head replacement',
            'Garbage disposal',
            'Toilet repair',
            'Other fixture',
        ],
        supabaseService: 'Faucet & Fixtures',
    },
    {
        id: 'flooring',
        icon: 'flooring',
        label: 'Flooring',
        color: '#7C3AED',
        gradient: 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)',
        subServices: [
            'Hardwood flooring',
            'LVP / vinyl plank',
            'Tile installation',
            'Floor repair / patch',
        ],
        supabaseService: 'Flooring Installation',
    },
    {
        id: 'kitchen',
        icon: 'kitchen',
        label: 'Kitchen & Bath',
        color: '#BE185D',
        gradient: 'linear-gradient(135deg, #BE185D 0%, #F472B6 100%)',
        subServices: [
            'Bath remodel',
            'Kitchen cabinet refacing',
            'Countertop work',
            'Backsplash installation',
        ],
        supabaseService: 'Kitchen Refacing',
    },
    {
        id: 'smart',
        icon: 'smart',
        label: 'Smart Home',
        color: '#B45309',
        gradient: 'linear-gradient(135deg, #B45309 0%, #FBBF24 100%)',
        subServices: [
            'Smart lock setup',
            'Video doorbell',
            'Smart home devices',
        ],
        supabaseService: 'Smart Home Installation',
    },
    {
        id: 'trim',
        icon: 'trim',
        label: 'Trim & Molding',
        color: '#065F46',
        gradient: 'linear-gradient(135deg, #065F46 0%, #34D399 100%)',
        subServices: [
            'Baseboard installation',
            'Crown molding',
            'Door casing',
            'Chair rail',
        ],
        supabaseService: 'Baseboard Installation',
    },
    {
        id: 'outdoor',
        icon: 'outdoor',
        label: 'Deck & Outdoor',
        color: '#166534',
        gradient: 'linear-gradient(135deg, #166534 0%, #4ADE80 100%)',
        subServices: [
            'Deck building / repair',
            'Furniture assembly',
            'Patio / lanai repair',
            'Screen enclosure',
        ],
        supabaseService: 'Deck Building',
    },
    {
        id: 'maintenance',
        icon: 'maintenance',
        label: 'Property Maint.',
        color: '#4f46e5',
        gradient: 'linear-gradient(135deg, #4f46e5 0%, #818cf8 100%)',
        subServices: [
            'Gutter cleaning & leaf guards',
            'Weatherproofing & caulking',
            'Seasonal safety inspections',
            'Filter & battery replacements',
            'General property checkups',
        ],
        supabaseService: 'Property Maintenance',
    },
    {
        id: 'commercial',
        icon: 'commercial',
        label: 'Commercial Maint.',
        color: '#0f172a',
        gradient: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
        subServices: [
            'Ceiling tile replacement',
            'Drywall patch & paint',
            'Door closers & hardware',
            'Fixture installations',
            'General property upkeep',
        ],
        supabaseService: 'Commercial Property Maintenance',
    },
    {
        id: 'turnover',
        icon: 'turnover',
        label: 'Rental Turnover',
        color: '#0d9488',
        gradient: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)',
        subServices: [
            'Drywall patch & repaint',
            'Cabinet hardware adjust',
            'Light fixture updates',
            'Tenant damage fixes',
            'Turnover punch list',
        ],
        supabaseService: 'Rental Turnover Repairs',
    },
    {
        id: 'fence',
        icon: 'fence',
        label: 'Fence & Gate',
        color: '#78350f',
        gradient: 'linear-gradient(135deg, #78350f 0%, #b45309 100%)',
        subServices: [
            'Sagging gate adjustment',
            'Post replacement / reinforce',
            'Broken panel / board repair',
            'Latch or hinge replacement',
        ],
        supabaseService: 'Fence & Gate Repair',
    },
    {
        id: 'gutter',
        icon: 'gutter',
        label: 'Gutter Maint.',
        color: '#2563eb',
        gradient: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
        subServices: [
            'Gutter cleaning',
            'Leaf guard installation',
            'Gutter leak repair',
            'Downspout clearing / alignment',
        ],
        supabaseService: 'Gutter Guard & Cleaning',
    },
    {
        id: 'pressure',
        icon: 'pressure',
        label: 'Pressure Wash',
        color: '#0284c7',
        gradient: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)',
        subServices: [
            'Driveway & sidewalk cleaning',
            'Patio & deck washing',
            'Siding & exterior wall wash',
            'Fence pressure washing',
        ],
        supabaseService: 'Pressure Washing',
    },
    {
        id: 'accent-walls',
        icon: 'accent',
        label: 'Accent Walls',
        color: '#431407',
        gradient: 'linear-gradient(135deg, #431407 0%, #78350f 100%)',
        subServices: [
            'Accent wall (shiplap / board & batten)',
            'Crown molding',
            'Baseboard upgrades',
            'Custom wainscoting',
        ],
        supabaseService: 'Accent Walls & Custom Trim',
    },
];

type Screen = 'home' | 'service' | 'message' | 'success';
type Service = (typeof SERVICES)[number];

/* ─────────────────────────────────────────
   MAIN PAGE COMPONENT
───────────────────────────────────────── */
export default function EstimatePage() {
    const [screen, setScreen] = useState<Screen>('home');
    const [activeService, setActiveService] = useState<Service | null>(null);
    const [selectedSubs, setSelectedSubs] = useState<string[]>([]);
    const [photo, setPhoto] = useState<File | null>(null);
    const [photoPreview, setPhotoPreview] = useState<string | null>(null);
    const [showAll, setShowAll] = useState(false);
    const [defaultCount, setDefaultCount] = useState(6);

    useEffect(() => {
        const updateCount = () => {
            setDefaultCount(window.innerWidth >= 768 ? 8 : 6);
        };
        updateCount();
        window.addEventListener('resize', updateCount);
        return () => window.removeEventListener('resize', updateCount);
    }, []);

    const [msgName, setMsgName] = useState('');
    const [msgPhone, setMsgPhone] = useState('');
    const [msgNote, setMsgNote] = useState('');
    const [ruthSupport, setRuthSupport] = useState('No need, regular scheduling is fine');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const visibleServices = showAll ? SERVICES : SERVICES.slice(0, defaultCount);

    const openService = useCallback((svc: Service) => {
        setActiveService(svc);
        setSelectedSubs([]);
        setPhoto(null);
        setPhotoPreview(null);
        setScreen('service');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const toggleSub = (sub: string) => {
        setSelectedSubs(prev =>
            prev.includes(sub) ? prev.filter(s => s !== sub) : [...prev, sub]
        );
    };

    const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setPhoto(file);
        const reader = new FileReader();
        reader.onload = (ev) => setPhotoPreview(ev.target?.result as string);
        reader.readAsDataURL(file);
    };

    const callNow = () => { window.location.href = 'tel:4077207476'; };

    const textService = () => {
        if (!activeService) return;
        const msg = encodeURIComponent(
            `Hi LUXHT Fix! I need help with: ${activeService.label}${selectedSubs.length ? ' — ' + selectedSubs.join(', ') : ''}. Scanned your QR magnet.`
        );
        window.location.href = `sms:4077207476?body=${msg}`;
    };

    const handleMessageSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            let imageUrl: string | null = null;
            if (photo) {
                const ext = photo.name.split('.').pop();
                const fileName = `estimate_${Date.now()}_${Math.random().toString(36).substr(2, 6)}.${ext}`;
                const { data: uploadData, error: uploadErr } = await supabase.storage
                    .from('quote-images')
                    .upload(fileName, photo);
                if (!uploadErr && uploadData) {
                    const { data: { publicUrl } } = supabase.storage
                        .from('quote-images')
                        .getPublicUrl(uploadData.path);
                    imageUrl = publicUrl;
                }
            }
            const details = [
                activeService ? `Service: ${activeService.label}` : '',
                selectedSubs.length ? `Details: ${selectedSubs.join(', ')}` : '',
                msgNote ? `Note: ${msgNote}` : '',
                ruthSupport ? `Ruth Support: ${ruthSupport}` : '',
                'Source: QR Magnet / estimate page (South Florida)',
            ].filter(Boolean).join(' | ');

            await supabase.from('leads').insert([{
                name: msgName,
                phone: msgPhone,
                service: activeService?.supabaseService ?? 'General Repair',
                details,
                image_url: imageUrl,
                referral_source: 'QR-magnet-south-florida',
            }]);
            setScreen('success');
        } catch (err) {
            console.error(err);
            alert('Something went wrong. Please call us at (407) 720-7476!');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="est-root">

            {/* ── HOME SCREEN ── */}
            <div className={`est-screen ${screen === 'home' ? 'est-screen--active' : ''}`}>
                {/* Top bar */}
                <header className="est-topbar">
                    <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
                        <Image
                            src="/images/luxht-fix-logo-transparent.png"
                            alt="LUXHT Fix"
                            width={1024}
                            height={481}
                            className="est-logo"
                            priority
                        />
                    </Link>
                    <a href="tel:4077207476" className="est-call-chip">
                        <span className="est-call-chip__dot" />
                        Call Us
                    </a>
                </header>

                {/* Hero */}
                <div className="est-hero">
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
                        <Link href="/" className="est-hero-back-link">
                            ← Back to Home Page
                        </Link>
                    </div>
                    <div className="est-hero__badge">📍 Miami-Dade · Broward · Palm Beach</div>
                    <h1 className="est-hero__title">What needs<br /><span className="est-gradient-text">fixing today?</span></h1>
                    <p className="est-hero__sub">Tap a service → get a free estimate 👇</p>
                </div>

                {/* Service grid */}
                <div className="est-grid">
                    {visibleServices.map((svc) => (
                        <StarBorder
                            key={svc.id}
                            as="button"
                            className="est-tile"
                            onClick={() => openService(svc)}
                            color="#ffffff"
                            speed="5s"
                            thickness={2}
                            style={{ '--tile-gradient': svc.gradient } as React.CSSProperties}
                        >
                            <div className="est-tile__icon">
                                {icons[svc.icon as keyof typeof icons]}
                            </div>
                            <span className="est-tile__label">{svc.label}</span>
                        </StarBorder>
                    ))}
                </div>

                {!showAll && (
                    <button className="est-show-more" onClick={() => setShowAll(true)}>
                        + {SERVICES.length - defaultCount} More Services
                    </button>
                )}

                {/* Bottom actions */}
                <div className="est-home-actions">
                    <div className="est-home-actions__label">Not sure what you need?</div>
                    <div className="est-home-actions__row">
                        <button className="est-action-btn est-action-btn--primary" onClick={callNow}>
                            <span>📞</span> Call for Advice
                        </button>
                        <button className="est-action-btn est-action-btn--outline"
                            onClick={() => { setActiveService(null); setScreen('message'); }}>
                            <span>✉️</span> Leave a Message
                        </button>
                    </div>
                </div>

                {/* About Us button — standalone, not near services */}
                <div className="est-about-wrap">
                    <a href="https://fix.luxht.com" className="est-about-btn" target="_blank" rel="noopener noreferrer">
                        <span className="est-about-btn__icon">
                            <Globe size={17} strokeWidth={1.8} />
                        </span>
                        About LUXHT Fix
                        <span className="est-about-btn__arrow">↗</span>
                    </a>
                </div>

                {/* Trust strip */}
                <div className="est-trust">
                    <span>✓ Fully Insured</span>
                    <span className="est-trust__dot">·</span>
                    <span>⭐ 5-Star Rated</span>
                    <span className="est-trust__dot">·</span>
                    <span>🏠 500+ Projects</span>
                </div>
            </div>

            {/* ── SERVICE DETAIL SCREEN ── */}
            <div className={`est-screen ${screen === 'service' ? 'est-screen--active' : ''}`}>
                {activeService && (
                    <>
                        <header className="est-detail-header" style={{ background: activeService.gradient }}>
                            <button className="est-back-btn" onClick={() => setScreen('home')}>← Back</button>
                            <div className="est-detail-header__content">
                                <div className="est-detail-header__icon">
                                    {icons[activeService.icon as keyof typeof icons]}
                                </div>
                                <h2 className="est-detail-header__title">{activeService.label}</h2>
                                <p className="est-detail-header__sub">Select what applies — then choose how to connect</p>
                            </div>
                        </header>

                        <div className="est-detail-body">
                            <div className="est-section">
                                <div className="est-section__label">What's the issue?</div>
                                <div className="est-checklist">
                                    {activeService.subServices.map((sub) => (
                                        <button key={sub}
                                            className={`est-check-item ${selectedSubs.includes(sub) ? 'est-check-item--selected' : ''}`}
                                            onClick={() => toggleSub(sub)}>
                                            <span className="est-check-item__box">{selectedSubs.includes(sub) ? '✓' : ''}</span>
                                            <span>{sub}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="est-section">
                                <div className="est-section__label">📸 Add a photo (optional)</div>
                                <input ref={fileInputRef} type="file" accept="image/*" capture="environment"
                                    onChange={handlePhoto} className="est-hidden-file" id="photo-upload" />
                                {photoPreview ? (
                                    <div className="est-photo-preview">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={photoPreview} alt="Preview" className="est-photo-preview__img" />
                                        <button className="est-photo-preview__remove"
                                            onClick={() => { setPhoto(null); setPhotoPreview(null); }}>✕ Remove</button>
                                    </div>
                                ) : (
                                    <label htmlFor="photo-upload" className="est-photo-btn">
                                        <span className="est-photo-btn__icon">📷</span>
                                        <span>Take or upload a photo</span>
                                        <span className="est-photo-btn__hint">Helps us estimate faster</span>
                                    </label>
                                )}
                            </div>

                            <div className="est-section">
                                <div className="est-section__label">How would you like to connect?</div>
                                <button className="est-cta-btn est-cta-btn--call" onClick={callNow}>
                                    <span className="est-cta-btn__icon">📞</span>
                                    <div>
                                        <div className="est-cta-btn__main">Call for Free Estimate</div>
                                        <div className="est-cta-btn__sub">(407) 720-7476 · Fastest response</div>
                                    </div>
                                    <span className="est-cta-btn__arrow">→</span>
                                </button>
                                <button className="est-cta-btn est-cta-btn--text" onClick={textService}>
                                    <span className="est-cta-btn__icon">💬</span>
                                    <div>
                                        <div className="est-cta-btn__main">Text Us Your Request</div>
                                        <div className="est-cta-btn__sub">Pre-filled with your selection</div>
                                    </div>
                                    <span className="est-cta-btn__arrow">→</span>
                                </button>
                                <button className="est-cta-btn est-cta-btn--message" onClick={() => setScreen('message')}>
                                    <span className="est-cta-btn__icon">✉️</span>
                                    <div>
                                        <div className="est-cta-btn__main">Leave a Message</div>
                                        <div className="est-cta-btn__sub">We'll call you back soon</div>
                                    </div>
                                    <span className="est-cta-btn__arrow">→</span>
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* ── MESSAGE FORM SCREEN ── */}
            <div className={`est-screen ${screen === 'message' ? 'est-screen--active' : ''}`}>
                <header className="est-form-header">
                    <button className="est-back-btn"
                        onClick={() => setScreen(activeService ? 'service' : 'home')}>← Back</button>
                    <div className="est-form-header__content">
                        <div className="est-form-header__emoji">✉️</div>
                        <h2 className="est-form-header__title">Leave a Message</h2>
                        <p className="est-form-header__sub">We'll reach out within 2 hours</p>
                    </div>
                </header>
                <div className="est-form-body">
                    <form onSubmit={handleMessageSubmit} className="est-form">
                        {activeService && (
                            <div className="est-form-service-badge" style={{ background: activeService.gradient }}>
                                <div className="est-form-badge-icon">{icons[activeService.icon as keyof typeof icons]}</div>
                                {activeService.label}
                                {selectedSubs.length > 0 && (
                                    <span className="est-form-service-badge__subs">
                                        {' · '}{selectedSubs.slice(0, 2).join(', ')}{selectedSubs.length > 2 ? ` +${selectedSubs.length - 2}` : ''}
                                    </span>
                                )}
                            </div>
                        )}
                        <div className="est-field est-field--half">
                            <label className="est-field__label">Your Name *</label>
                            <input type="text" required placeholder="First & Last Name"
                                value={msgName} onChange={e => setMsgName(e.target.value)}
                                className="est-field__input" autoComplete="name" />
                        </div>
                        <div className="est-field est-field--half">
                            <label className="est-field__label">Phone Number *</label>
                            <input type="tel" required placeholder="(305) 000-0000"
                                value={msgPhone} onChange={e => setMsgPhone(e.target.value)}
                                className="est-field__input" autoComplete="tel" inputMode="tel" />
                        </div>
                        <div className="est-field est-field--full">
                            <label className="est-field__label">Brief description (optional)</label>
                            <textarea rows={3} placeholder="Tell us a little more about what you need..."
                                value={msgNote} onChange={e => setMsgNote(e.target.value)}
                                className="est-field__input est-field__input--textarea" />
                        </div>
                        <div className="est-field est-field--full">
                            <label className="est-field__label">Would you feel more comfortable with Ruth involved?</label>
                            <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: '1.4', margin: '0 0 6px 0' }}>
                                Ruth is part of our family-owned team and stays personally connected to the process. Some clients feel better knowing there is a woman in the loop for communication, support, and extra reassurance.
                            </p>
                            <div className="est-ruth-options" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {[
                                    "I would prefer Ruth to be part of the visit if possible",
                                    "No need, regular scheduling is fine"
                                ].map((opt) => (
                                    <button
                                        key={opt}
                                        type="button"
                                        className={`est-check-item ${ruthSupport === opt ? 'est-check-item--selected' : ''}`}
                                        onClick={() => setRuthSupport(opt)}
                                        style={{ width: '100%' }}
                                    >
                                        <span className="est-check-item__box" style={{ borderRadius: '50%' }}>
                                            {ruthSupport === opt ? '✓' : ''}
                                        </span>
                                        <span>{opt}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="est-field est-field--full">
                            <label className="est-field__label">📸 Add a photo (optional)</label>
                            <input type="file" accept="image/*" capture="environment"
                                onChange={handlePhoto} className="est-hidden-file" id="msg-photo" />
                            {photoPreview ? (
                                <div className="est-photo-preview">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={photoPreview} alt="Preview" className="est-photo-preview__img" />
                                    <button type="button" className="est-photo-preview__remove"
                                        onClick={() => { setPhoto(null); setPhotoPreview(null); }}>✕ Remove</button>
                                </div>
                            ) : (
                                <label htmlFor="msg-photo" className="est-photo-btn">
                                    <span className="est-photo-btn__icon">📷</span>
                                    <span>Take or upload a photo</span>
                                </label>
                            )}
                        </div>
                        <button type="submit" className="est-submit-btn" disabled={isSubmitting}>
                            {isSubmitting ? (<><span className="est-spinner" /> Sending...</>) : '✓ Send My Request — It\'s Free'}
                        </button>
                        <p className="est-form-note">No spam. We'll only contact you about your request.</p>
                    </form>
                </div>
            </div>

            {/* ── SUCCESS SCREEN ── */}
            <div className={`est-screen est-screen--center ${screen === 'success' ? 'est-screen--active' : ''}`}>
                <div className="est-success">
                    <div className="est-success__ring">
                        <div className="est-success__check">✓</div>
                    </div>
                    <h2 className="est-success__title">Message Sent! 🎉</h2>
                    <p className="est-success__sub">
                        We got your request and will call you back within 2 hours.<br />
                        In the meantime, feel free to call us directly.
                    </p>
                    <a href="tel:4077207476" className="est-success__call">📞 (407) 720-7476</a>
                    <button className="est-success__back"
                        onClick={() => { setScreen('home'); setActiveService(null); }}>
                        Back to Services
                    </button>
                </div>
            </div>

            {/* ── STYLES ── */}
            <style>{`
                .est-root {
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                    min-height: 100dvh;
                    background: #f5f4fc;
                    color: #1a1535;
                    max-width: 480px;
                    margin: 0 auto;
                    overflow-x: hidden;
                }
                .est-screen { display: none; opacity: 0; animation: estFadeIn 0.3s ease forwards; min-height: 100dvh; }
                .est-screen--active { display: block; }
                /* NOTE: do NOT set display on .est-screen--center alone — it would override display:none */
                .est-screen--active.est-screen--center { display: flex; align-items: center; justify-content: center; }
                @keyframes estFadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                /* TOP BAR */
                .est-topbar {
                    display: flex; align-items: center; justify-content: space-between;
                    padding: 14px 18px;
                    background: white;
                    border-bottom: 1px solid rgba(88,77,148,0.08);
                    position: sticky; top: 0; z-index: 50;
                    box-shadow: 0 2px 16px rgba(88,77,148,0.07);
                }
                .est-logo { height: 60px; max-width: 60%; width: auto; object-fit: contain; }
                .est-call-chip {
                    display: flex; align-items: center; gap: 7px;
                    background: linear-gradient(135deg, #584D94 0%, #7B6FCC 100%);
                    color: white; font-size: 13px; font-weight: 700;
                    padding: 9px 18px; border-radius: 50px; text-decoration: none;
                    box-shadow: 0 4px 14px rgba(88,77,148,0.28);
                    transition: transform 0.15s;
                }
                .est-call-chip:active { transform: scale(0.95); }
                .est-call-chip__dot {
                    width: 8px; height: 8px; border-radius: 50%;
                    background: #64CEBB;
                    animation: pulseDot 1.8s ease-in-out infinite;
                }
                @keyframes pulseDot {
                    0%,100% { box-shadow: 0 0 0 0 rgba(100,206,187,0.5); }
                    50% { box-shadow: 0 0 0 5px rgba(100,206,187,0); }
                }

                /* HERO */
                .est-hero { padding: 26px 20px 16px; text-align: center; background: white; }
                .est-hero__badge {
                    display: inline-block; font-size: 11.5px; font-weight: 700;
                    background: rgba(100,206,187,0.12); color: #1a8a7a;
                    padding: 5px 14px; border-radius: 50px;
                    border: 1px solid rgba(100,206,187,0.3); margin-bottom: 14px;
                }
                .est-hero__title {
                    font-size: 30px; font-weight: 800; color: #1a1535;
                    line-height: 1.2; margin-bottom: 8px; letter-spacing: -0.5px;
                }
                .est-gradient-text {
                    background: linear-gradient(135deg, #584D94 0%, #64CEBB 100%);
                    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
                }
                .est-hero__sub { font-size: 14px; color: #6b7280; font-weight: 500; }

                .est-hero-back-link {
                    font-size: 13px;
                    color: #584d94;
                    font-weight: 700;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 8px 16px;
                    border-radius: 50px;
                    background: rgba(88, 77, 148, 0.07);
                    transition: all 0.2s;
                    border: 1px solid rgba(88, 77, 148, 0.15);
                }
                .est-hero-back-link:active {
                    background: rgba(88, 77, 148, 0.15);
                    transform: scale(0.96);
                }

                /* SERVICE GRID */
                .est-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 11px; padding: 16px 14px 0; }
                .est-tile {
                    position: relative; aspect-ratio: 1; border-radius: 22px; border: none;
                    cursor: pointer;
                    overflow: hidden;
                    background: transparent;
                    transition: transform 0.18s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.18s ease;
                    box-shadow: 0 4px 18px rgba(0,0,0,0.14), 0 1px 4px rgba(0,0,0,0.08);
                }
                .est-tile .inner-content {
                    border: none;
                    background: var(--tile-gradient);
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    padding: 10px 8px;
                    border-radius: 20px;
                    color: white;
                    z-index: 1;
                }
                .est-tile::after {
                    content: ''; position: absolute; inset: 0;
                    background: linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 60%);
                    border-radius: 22px; pointer-events: none;
                }
                .est-tile:active { transform: scale(0.91); box-shadow: 0 2px 6px rgba(0,0,0,0.1); }
                @media (hover: hover) {
                    .est-tile:hover { transform: translateY(-3px) scale(1.03); box-shadow: 0 10px 28px rgba(0,0,0,0.2); }
                }
                .est-tile__icon { display: flex; align-items: center; justify-content: center; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15)); }
                .est-tile__label {
                    font-size: 10.5px; font-weight: 700; color: white; text-align: center;
                    line-height: 1.25; text-shadow: 0 1px 4px rgba(0,0,0,0.25);
                    letter-spacing: 0.1px;
                }

                /* SHOW MORE */
                .est-show-more {
                    display: block; margin: 12px auto 0; background: none;
                    border: 2px solid rgba(88,77,148,0.18); color: #584D94;
                    font-size: 13px; font-weight: 700; padding: 10px 26px;
                    border-radius: 50px; cursor: pointer; transition: all 0.2s;
                    font-family: inherit;
                }
                .est-show-more:active { background: rgba(88,77,148,0.05); transform: scale(0.97); }

                /* BOTTOM ACTIONS */
                .est-home-actions { padding: 20px 14px 0; text-align: center; }
                .est-home-actions__label {
                    font-size: 11.5px; font-weight: 600; color: #9ca3af;
                    text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 10px;
                }
                .est-home-actions__row { display: flex; gap: 10px; }
                .est-action-btn {
                    flex: 1; display: flex; align-items: center; justify-content: center;
                    gap: 7px; padding: 14px 10px; border-radius: 16px;
                    font-size: 13px; font-weight: 700; cursor: pointer; border: none;
                    transition: transform 0.15s; font-family: inherit;
                }
                .est-action-btn--primary {
                    background: linear-gradient(135deg, #584D94 0%, #7B6FCC 100%);
                    color: white; box-shadow: 0 4px 16px rgba(88,77,148,0.3);
                }
                .est-action-btn--outline {
                    background: white; color: #584D94;
                    border: 2px solid rgba(88,77,148,0.18);
                    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                }
                .est-action-btn:active { transform: scale(0.95); }

                /* ABOUT US BUTTON */
                .est-about-wrap {
                    display: flex; justify-content: center; padding: 16px 14px 4px;
                }
                .est-about-btn {
                    display: inline-flex; align-items: center; gap: 7px;
                    color: #584D94; font-size: 13px; font-weight: 700;
                    text-decoration: none;
                    background: rgba(88,77,148,0.07);
                    border: 1.5px solid rgba(88,77,148,0.18);
                    padding: 10px 22px; border-radius: 50px;
                    transition: all 0.2s;
                    letter-spacing: 0.2px;
                }
                .est-about-btn:active { background: rgba(88,77,148,0.12); transform: scale(0.97); }
                .est-about-btn__icon { display: flex; align-items: center; opacity: 0.8; }
                .est-about-btn__arrow { font-size: 14px; opacity: 0.5; }

                /* TRUST STRIP */
                .est-trust {
                    display: flex; align-items: center; justify-content: center;
                    flex-wrap: wrap; gap: 6px; padding: 14px 16px 20px;
                    font-size: 11.5px; font-weight: 600; color: #6b7280;
                }
                .est-trust__dot { color: #d1d5db; font-size: 16px; line-height: 1; }

                /* DETAIL HEADER */
                .est-detail-header { padding: 16px 20px 28px; color: white; }
                .est-detail-header__content { text-align: center; padding-top: 10px; }
                .est-detail-header__icon {
                    display: flex; align-items: center; justify-content: center;
                    margin-bottom: 10px; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
                }
                .est-detail-header__icon svg { width: 52px; height: 52px; }
                .est-detail-header__title { font-size: 24px; font-weight: 800; margin-bottom: 6px; }
                .est-detail-header__sub { font-size: 13px; opacity: 0.82; font-weight: 500; }

                .est-detail-body { padding: 20px 16px 32px; }

                /* SECTIONS */
                .est-section { margin-bottom: 24px; }
                .est-section__label {
                    font-size: 10.5px; font-weight: 800; color: #9ca3af;
                    text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 10px;
                }

                /* CHECKLIST */
                .est-checklist { display: flex; flex-direction: column; gap: 8px; }
                .est-check-item {
                    display: flex; align-items: center; gap: 12px; padding: 14px 16px;
                    background: white; border-radius: 14px; border: 2px solid transparent;
                    cursor: pointer; text-align: left; font-size: 14px; font-weight: 500;
                    color: #374151; transition: all 0.15s;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.05); font-family: inherit;
                }
                .est-check-item--selected { border-color: #64CEBB; background: rgba(100,206,187,0.06); color: #1a1535; }
                .est-check-item:active { transform: scale(0.98); }
                .est-check-item__box {
                    width: 22px; height: 22px; border-radius: 7px; border: 2px solid #e5e7eb;
                    display: flex; align-items: center; justify-content: center;
                    font-size: 12px; font-weight: 800; color: white;
                    flex-shrink: 0; transition: all 0.15s; background: white;
                }
                .est-check-item--selected .est-check-item__box { border-color: #64CEBB; background: #64CEBB; }

                /* PHOTO */
                .est-hidden-file { position: absolute; width: 1px; height: 1px; opacity: 0; pointer-events: none; }
                .est-photo-btn {
                    display: flex; flex-direction: column; align-items: center;
                    justify-content: center; gap: 6px; padding: 20px;
                    background: white; border: 2px dashed rgba(88,77,148,0.22);
                    border-radius: 16px; cursor: pointer; text-align: center;
                    font-size: 13px; font-weight: 600; color: #584D94; transition: all 0.2s;
                }
                .est-photo-btn:active { background: rgba(88,77,148,0.04); }
                .est-photo-btn__icon { font-size: 26px; }
                .est-photo-btn__hint { font-size: 11px; color: #9ca3af; font-weight: 400; }
                .est-photo-preview { position: relative; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.1); }
                .est-photo-preview__img { width: 100%; max-height: 200px; object-fit: cover; display: block; }
                .est-photo-preview__remove {
                    position: absolute; top: 10px; right: 10px;
                    background: rgba(0,0,0,0.6); color: white; font-size: 11px; font-weight: 700;
                    padding: 5px 10px; border-radius: 50px; border: none; cursor: pointer; font-family: inherit;
                }

                /* CTA BUTTONS */
                .est-cta-btn {
                    display: flex; align-items: center; gap: 14px;
                    width: 100%; padding: 18px 16px; border-radius: 18px; border: none;
                    cursor: pointer; margin-bottom: 10px; transition: transform 0.15s; text-align: left;
                    font-family: inherit;
                }
                .est-cta-btn:active { transform: scale(0.97); }
                .est-cta-btn--call { background: linear-gradient(135deg, #584D94 0%, #7B6FCC 100%); color: white; box-shadow: 0 6px 22px rgba(88,77,148,0.32); }
                .est-cta-btn--text { background: linear-gradient(135deg, #4BC0AD 0%, #64CEBB 100%); color: white; box-shadow: 0 6px 22px rgba(75,192,173,0.28); }
                .est-cta-btn--message { background: white; color: #374151; border: 2px solid rgba(88,77,148,0.14); box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
                .est-cta-btn__icon { font-size: 22px; flex-shrink: 0; width: 32px; text-align: center; }
                .est-cta-btn__main { font-size: 15px; font-weight: 700; }
                .est-cta-btn__sub { font-size: 11.5px; opacity: 0.72; margin-top: 2px; }
                .est-cta-btn__arrow { margin-left: auto; font-size: 18px; opacity: 0.55; flex-shrink: 0; }

                /* BACK */
                .est-back-btn {
                    background: rgba(255,255,255,0.18); backdrop-filter: blur(8px);
                    border: 1px solid rgba(255,255,255,0.28); color: white;
                    font-size: 13px; font-weight: 700; padding: 8px 14px;
                    border-radius: 50px; cursor: pointer; transition: all 0.15s; font-family: inherit;
                }
                .est-back-btn--dark { background: rgba(88,77,148,0.07); border-color: rgba(88,77,148,0.18); color: #584D94; }
                .est-back-btn:active { transform: scale(0.95); }

                /* FORM HEADER */
                .est-form-header { padding: 16px 20px 24px; background: linear-gradient(135deg, #584D94 0%, #7B6FCC 100%); color: white; }
                .est-form-header__content { text-align: center; padding-top: 8px; }
                .est-form-header__emoji { font-size: 36px; margin-bottom: 8px; }
                .est-form-header__title { font-size: 22px; font-weight: 800; margin-bottom: 4px; }
                .est-form-header__sub { font-size: 13px; opacity: 0.82; }

                /* FORM */
                .est-form-body { padding: 20px 16px 40px; }
                .est-form { display: flex; flex-direction: column; gap: 16px; }
                .est-form-service-badge {
                    display: flex; align-items: center; gap: 10px;
                    padding: 12px 16px; border-radius: 14px; color: white;
                    font-size: 13px; font-weight: 700; flex-wrap: wrap;
                }
                .est-form-badge-icon { display: flex; align-items: center; }
                .est-form-badge-icon svg { width: 22px; height: 22px; }
                .est-form-service-badge__subs { opacity: 0.78; font-weight: 500; }
                .est-field { display: flex; flex-direction: column; gap: 7px; }
                .est-field__label { font-size: 10.5px; font-weight: 800; color: #6b7280; text-transform: uppercase; letter-spacing: 0.9px; }
                .est-field__input {
                    padding: 14px 16px; background: white;
                    border: 2px solid rgba(88,77,148,0.1); border-radius: 14px;
                    font-size: 15px; color: #1a1535; font-family: inherit;
                    outline: none; transition: border-color 0.2s; -webkit-appearance: none;
                }
                .est-field__input:focus { border-color: #64CEBB; box-shadow: 0 0 0 3px rgba(100,206,187,0.14); }
                .est-field__input::placeholder { color: #c4c4cc; }
                .est-field__input--textarea { resize: none; line-height: 1.5; }
                .est-submit-btn {
                    display: flex; align-items: center; justify-content: center; gap: 8px;
                    padding: 18px; background: linear-gradient(135deg, #64CEBB 0%, #4BC0AD 40%, #584D94 100%);
                    background-size: 200% 200%; animation: gradShift 4s ease infinite;
                    color: white; font-size: 16px; font-weight: 800; border: none;
                    border-radius: 16px; cursor: pointer; font-family: inherit;
                    box-shadow: 0 6px 22px rgba(88,77,148,0.28);
                    transition: transform 0.15s;
                }
                .est-submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }
                .est-submit-btn:not(:disabled):active { transform: scale(0.97); }
                @keyframes gradShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .est-spinner {
                    display: inline-block; width: 16px; height: 16px;
                    border: 2.5px solid rgba(255,255,255,0.3); border-top-color: white;
                    border-radius: 50%; animation: spin 0.7s linear infinite;
                }
                @keyframes spin { to { transform: rotate(360deg); } }
                .est-form-note { text-align: center; font-size: 11px; color: #9ca3af; }

                /* SUCCESS */
                .est-success {
                    text-align: center; padding: 40px 28px;
                    display: flex; flex-direction: column; align-items: center; gap: 16px;
                }
                .est-success__ring {
                    width: 88px; height: 88px; border-radius: 50%;
                    background: linear-gradient(135deg, #64CEBB, #584D94);
                    display: flex; align-items: center; justify-content: center;
                    box-shadow: 0 0 0 12px rgba(100,206,187,0.14), 0 0 0 24px rgba(100,206,187,0.06);
                    animation: successPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
                }
                @keyframes successPop { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }
                .est-success__check { font-size: 36px; color: white; font-weight: 800; }
                .est-success__title { font-size: 26px; font-weight: 800; color: #1a1535; }
                .est-success__sub { font-size: 14px; color: #6b7280; line-height: 1.6; }
                .est-success__call {
                    display: block; background: linear-gradient(135deg, #584D94 0%, #7B6FCC 100%);
                    color: white; font-size: 16px; font-weight: 800; padding: 16px 32px;
                    border-radius: 16px; text-decoration: none;
                    box-shadow: 0 6px 20px rgba(88,77,148,0.3); width: 100%; text-align: center;
                    transition: transform 0.15s;
                }
                .est-success__call:active { transform: scale(0.97); }
                .est-success__back {
                    background: none; border: none; color: #584D94; font-size: 13px; font-weight: 700;
                    cursor: pointer; padding: 8px; text-decoration: underline; text-underline-offset: 3px;
                    font-family: inherit;
                }

                @media (min-width: 768px) {
                    .est-root {
                        max-width: 1000px;
                        background: #f8f7ff;
                        box-shadow: 0 4px 30px rgba(88,77,148,0.05);
                        border-radius: 24px;
                        margin: 40px auto;
                        padding-bottom: 40px;
                        min-height: auto;
                    }
                    .est-screen {
                        min-height: auto;
                    }
                    .est-topbar {
                        padding: 20px 40px;
                        border-radius: 24px 24px 0 0;
                    }
                    .est-logo {
                        height: 70px;
                    }
                    .est-hero {
                        padding: 48px 40px 32px;
                    }
                    .est-hero__title {
                        font-size: 42px;
                        margin-bottom: 12px;
                    }
                    .est-hero__sub {
                        font-size: 18px;
                    }
                    .est-grid {
                        grid-template-columns: repeat(4, 1fr);
                        gap: 20px;
                        padding: 24px 40px 0;
                    }
                    .est-tile {
                        border-radius: 28px;
                    }
                    .est-tile .inner-content {
                        border-radius: 26px;
                        padding: 24px 16px;
                        gap: 14px;
                    }
                    .est-tile__label {
                        font-size: 15px;
                        letter-spacing: 0.3px;
                    }
                    .est-tile__icon svg {
                        width: 48px !important;
                        height: 48px !important;
                    }
                    .est-tile:hover .est-tile__icon svg {
                        transform: scale(1.15) rotate(5deg);
                    }
                    
                    /* Detail screen split layout */
                    .est-detail-header {
                        padding: 40px 40px 48px;
                        border-radius: 0 0 24px 24px;
                    }
                    .est-detail-header__title {
                        font-size: 38px;
                    }
                    .est-detail-header__sub {
                        font-size: 16px;
                    }
                    .est-detail-header__icon svg {
                        width: 72px !important;
                        height: 72px !important;
                    }
                    .est-detail-body {
                        display: grid;
                        grid-template-columns: 1.2fr 1fr;
                        gap: 24px 40px;
                        padding: 40px;
                        align-items: start;
                    }
                    .est-detail-body > .est-section:nth-child(1) {
                        grid-column: 1;
                        grid-row: 1;
                        margin-bottom: 0;
                    }
                    .est-detail-body > .est-section:nth-child(2) {
                        grid-column: 1;
                        grid-row: 2;
                        margin-bottom: 0;
                    }
                    .est-detail-body > .est-section:nth-child(3) {
                        grid-column: 2;
                        grid-row: 1 / span 2;
                        margin-bottom: 0;
                    }
                    .est-check-item {
                        padding: 16px 20px;
                        font-size: 15px;
                        border-radius: 16px;
                    }
                    .est-check-item:hover {
                        background: #fafafc;
                        border-color: rgba(88,77,148,0.15);
                    }
                    .est-check-item--selected:hover {
                        background: rgba(100,206,187,0.08);
                        border-color: #64CEBB;
                    }
                    .est-photo-btn {
                        padding: 30px;
                        border-radius: 20px;
                    }
                    .est-cta-btn {
                        padding: 20px 24px;
                        border-radius: 20px;
                        margin-bottom: 14px;
                    }
                    .est-cta-btn__main {
                        font-size: 16px;
                    }
                    .est-cta-btn__sub {
                        font-size: 12.5px;
                    }
                    .est-cta-btn:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 8px 24px rgba(88,77,148,0.25);
                    }
                    .est-cta-btn--text:hover {
                        box-shadow: 0 8px 24px rgba(75,192,173,0.22);
                    }
                    
                    /* Form page grid layout */
                    .est-form-header {
                        padding: 40px 40px 48px;
                        border-radius: 0 0 24px 24px;
                    }
                    .est-form-header__title {
                        font-size: 34px;
                    }
                    .est-form-header__sub {
                        font-size: 16px;
                    }
                    .est-form-body {
                        padding: 40px;
                        max-width: 800px;
                        margin: 0 auto;
                    }
                    .est-form {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 24px;
                    }
                    .est-field--full {
                        grid-column: 1 / span 2;
                    }
                    .est-field--half {
                        grid-column: span 1;
                    }
                    .est-form-service-badge {
                        grid-column: 1 / span 2;
                        padding: 16px 20px;
                        font-size: 15px;
                    }
                    .est-submit-btn {
                        grid-column: 1 / span 2;
                        padding: 20px;
                        font-size: 17px;
                        border-radius: 20px;
                    }
                    .est-form-note {
                        grid-column: 1 / span 2;
                        font-size: 12px;
                    }
                    
                    /* Success page */
                    .est-success {
                        padding: 60px 40px;
                        max-width: 500px;
                        margin: 0 auto;
                    }
                    .est-success__title {
                        font-size: 30px;
                    }
                    .est-success__sub {
                        font-size: 16px;
                    }
                    
                    /* Bottom action rows and strips */
                    .est-home-actions {
                        padding: 32px 40px 0;
                    }
                    .est-home-actions__row {
                        max-width: 600px;
                        margin: 0 auto;
                        gap: 16px;
                    }
                    .est-action-btn {
                        padding: 16px 20px;
                        font-size: 15px;
                        border-radius: 20px;
                    }
                    .est-about-wrap {
                        padding: 24px 40px 8px;
                    }
                    .est-about-btn {
                        padding: 12px 28px;
                        font-size: 14px;
                    }
                    .est-trust {
                        padding: 20px 40px 30px;
                        font-size: 13px;
                        gap: 12px;
                    }
                }
            `}</style>
        </div>
    );
}
