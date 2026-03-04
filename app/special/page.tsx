import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SpecialForm from '@/components/SpecialForm';
export const metadata: Metadata = {
  title: 'LUXHT Fix — Exclusive Offers for Winter Park & Maitland',
  description:
    'Claim your exclusive magazine reader offers from LUXHT Fix. Free consultation, $50 off, or 10 free outlet replacements for Winter Park & Maitland homeowners.',
  robots: { index: false, follow: false },
};

export default function SpecialPage() {
  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
:root {
  --purple: #5B2D8E;
  --purple-mid: #7B3FBE;
  --purple-light: #9B59D0;
  --gold: #C9A84C;
  --gold-light: #E8C97A;
  --cream: #FAF7F2;
  --dark: #1A1020;
  --text: #2D1F3D;
  --white: #FFFFFF;
}

.sp-page * { margin: 0; padding: 0; box-sizing: border-box; }

.sp-page {
  font-family: 'DM Sans', sans-serif;
  background: var(--cream);
  color: var(--text);
  overflow-x: hidden;
}

/* HEADER */
.sp-header {
  background: var(--purple);
  padding: 14px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 20px rgba(91,45,142,0.4);
}

.sp-logo-area {
  display: flex;
  align-items: center;
  gap: 10px;
}

.sp-logo-icon {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(255,255,255,0.2);
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sp-logo-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sp-logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.sp-logo-text .sp-brand {
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: var(--white);
  letter-spacing: 0px;
}

.sp-logo-text .sp-sub {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  color: var(--gold-light);
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 500;
}

.sp-call-btn {
  background: var(--gold);
  color: var(--purple);
  text-decoration: none;
  padding: 10px 22px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.25s;
}

.sp-call-btn:hover {
  background: var(--gold-light);
  transform: scale(1.04);
  box-shadow: 0 4px 16px rgba(201,168,76,0.5);
}

.sp-call-btn svg { width: 16px; height: 16px; }

/* HERO */
.sp-hero {
  background: linear-gradient(135deg, var(--purple) 0%, #3D1A6E 50%, #2A0F50 100%);
  padding: 60px 32px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.sp-hero::before {
  content: '';
  position: absolute;
  top: -80px; right: -80px;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%);
  border-radius: 50%;
}

.sp-hero::after {
  content: '';
  position: absolute;
  bottom: 0; left: -60px;
  width: 300px; height: 300px;
  background: radial-gradient(circle, rgba(155,89,208,0.2) 0%, transparent 70%);
  border-radius: 50%;
}

.sp-exclusive-badge {
  display: inline-block;
  background: rgba(201,168,76,0.15);
  border: 1px solid var(--gold);
  color: var(--gold-light);
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  padding: 6px 18px;
  border-radius: 50px;
  margin-bottom: 20px;
}

.sp-hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(32px, 6vw, 58px);
  font-weight: 900;
  color: var(--white);
  line-height: 1.15;
  max-width: 700px;
  margin: 0 auto 16px;
  position: relative;
  z-index: 1;
}

.sp-hero h1 span { color: var(--gold-light); }

.sp-hero-sub {
  font-size: 18px;
  color: rgba(255,255,255,0.7);
  max-width: 500px;
  margin: 0 auto 40px;
  font-weight: 300;
  line-height: 1.6;
  position: relative;
  z-index: 1;
}

.sp-mascot-row {
  display: flex;
  justify-content: center;
  gap: 0;
  position: relative;
  z-index: 1;
  margin-top: 10px;
}

/* OFFERS SECTION */
.sp-offers {
  padding: 70px 24px;
  max-width: 1100px;
  margin: 0 auto;
}

.sp-section-label {
  text-align: center;
  font-size: 11px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--purple-light);
  margin-bottom: 12px;
}

.sp-section-title {
  text-align: center;
  font-family: 'Playfair Display', serif;
  font-size: clamp(26px, 4vw, 40px);
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 50px;
}

.sp-offers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 28px;
}

.sp-offer-card {
  background: var(--white);
  border-radius: 20px;
  padding: 36px 30px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(91,45,142,0.08);
  border: 1px solid rgba(91,45,142,0.08);
  transition: all 0.3s;
}

.sp-offer-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 48px rgba(91,45,142,0.16);
}

.sp-offer-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 5px;
  background: linear-gradient(90deg, var(--purple), var(--gold));
}

.sp-offer-icon {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, var(--purple), var(--purple-light));
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 26px;
}

.sp-offer-tag {
  display: inline-block;
  background: linear-gradient(135deg, var(--gold), var(--gold-light));
  color: var(--purple);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 50px;
  margin-bottom: 12px;
  letter-spacing: 1px;
}

.sp-offer-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 10px;
  line-height: 1.25;
}

.sp-offer-card p {
  font-size: 15px;
  color: #6B5F7A;
  line-height: 1.65;
  font-weight: 300;
}

/* FORM SECTION */
.sp-form-section {
  background: linear-gradient(135deg, var(--purple) 0%, #3D1A6E 100%);
  padding: 70px 24px;
  position: relative;
  overflow: hidden;
}

.sp-form-section::before {
  content: '';
  position: absolute;
  top: -100px; right: -100px;
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 60%);
  border-radius: 50%;
  pointer-events: none;
}

.sp-form-wrap {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.sp-form-section .sp-section-label { color: var(--gold-light); }
.sp-form-section .sp-section-title { color: var(--white); }

.sp-form-box {
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 24px;
  padding: 40px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
}

.field label {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.6);
}

.field input, .field select {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 10px;
  padding: 14px 16px;
  font-size: 15px;
  color: var(--white);
  font-family: 'DM Sans', sans-serif;
  outline: none;
  transition: border-color 0.2s, background 0.2s;
  -webkit-appearance: none;
}

.field input::placeholder { color: rgba(255,255,255,0.35); }

.field input:focus, .field select:focus {
  border-color: var(--gold);
  background: rgba(255,255,255,0.15);
}

.field select option { color: var(--dark); background: white; }

.submit-btn {
  width: 100%;
  background: linear-gradient(135deg, var(--gold), var(--gold-light));
  color: var(--purple);
  border: none;
  padding: 18px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  letter-spacing: 0.5px;
  transition: all 0.25s;
  margin-top: 8px;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(201,168,76,0.4);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

/* TRUST BAR */
.sp-trust-bar {
  background: var(--dark);
  padding: 28px 24px;
  display: flex;
  justify-content: center;
  gap: 48px;
  flex-wrap: wrap;
}

.sp-trust-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255,255,255,0.6);
  font-size: 14px;
  font-weight: 300;
}

.sp-trust-item .sp-icon {
  color: var(--gold);
  font-size: 18px;
}

/* FOOTER */
.sp-footer {
  background: #0E0818;
  padding: 32px 24px;
  text-align: center;
}

.sp-footer p {
  color: rgba(255,255,255,0.4);
  font-size: 13px;
  line-height: 1.8;
}

.sp-footer strong { color: rgba(255,255,255,0.7); }
.sp-footer a { color: var(--gold-light); text-decoration: none; }

/* RESPONSIVE */
@media (max-width: 600px) {
  .sp-header { padding: 12px 18px; }
  .sp-hero { padding: 40px 20px 0; }
  .form-row { grid-template-columns: 1fr; }
  .sp-form-box { padding: 28px 20px; }
  .sp-trust-bar { gap: 24px; }
}

/* Animation */
@keyframes spFadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

.sp-hero-content { animation: spFadeUp 0.7s ease both; }
.sp-offer-card:nth-child(1) { animation: spFadeUp 0.5s 0.1s ease both; }
.sp-offer-card:nth-child(2) { animation: spFadeUp 0.5s 0.2s ease both; }
.sp-offer-card:nth-child(3) { animation: spFadeUp 0.5s 0.3s ease both; }
          `,
        }}
      />

      <div className="sp-page">
        {/* HEADER */}
        <header className="sp-header">
          <div className="sp-logo-area">
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className="sp-logo-icon">
                <Image
                  src="/images/logo-wide-hammers.png"
                  alt="LUXHT Fix Logo"
                  width={42}
                  height={42}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="sp-logo-text">
                <span className="sp-brand">
                  LUXHT<span style={{ color: '#64CEBB', marginLeft: '2px' }}>Fix</span>
                </span>
                <span className="sp-sub" style={{ marginTop: '-2px' }}>Exclusive Offer</span>
              </div>
            </Link>
          </div>
          <a href="tel:4072880832" className="sp-call-btn">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.7 10.5 19.79 19.79 0 01.67 2a2 2 0 011.99-2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7 7a16 16 0 006 6l.88-.88a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
            </svg>
            (407) 288-0832
          </a>
        </header>

        {/* HERO */}
        <section className="sp-hero">
          <div className="sp-hero-content">
            <div className="sp-exclusive-badge">
              ✦ Exclusive Magazine Reader Offer ✦
            </div>
            <h1>
              Welcome, <span>Winter Park &amp; Maitland</span> Neighbors!
            </h1>
            <p className="sp-hero-sub">
              You&apos;ve unlocked 3 exclusive offers reserved just for our
              local community. Zero stress, zero obligation.
            </p>
            {/* Mascots Image */}
            <div className="sp-mascot-row" style={{ marginTop: '30px', position: 'relative', width: '100%', maxWidth: '340px', height: '270px', margin: '0 auto' }}>
              <Image
                src="/images/special/special_transparent.png"
                alt="LUXHT Fix Mascots"
                fill
                style={{ objectFit: 'contain' }}
                priority
                sizes="(max-width: 768px) 100vw, 340px"
              />
            </div>
          </div>
        </section>

        {/* OFFERS */}
        <section className="sp-offers">
          <p className="sp-section-label">Your Exclusive Perks</p>
          <h2 className="sp-section-title">
            3 Offers. Zero Strings Attached.
          </h2>

          <div className="sp-offers-grid">
            <div className="sp-offer-card">
              <div className="sp-offer-icon">🏠</div>
              <span className="sp-offer-tag">100% Free</span>
              <h3>Free In-Home Consultation</h3>
              <p>
                A professional LUXHT Fix technician visits your home, diagnoses
                the issue, and walks you through a clear plan — with absolutely
                no obligation to book.
              </p>
            </div>

            <div className="sp-offer-card">
              <div className="sp-offer-icon">💰</div>
              <span className="sp-offer-tag">Instant Savings</span>
              <h3>$50 Off Any Project Over $250</h3>
              <p>
                Valid on any home service we offer — drywall, flooring, bath
                remodel, deck building, and more. One simple discount, no fine
                print games.
              </p>
            </div>

            <div className="sp-offer-card">
              <div className="sp-offer-icon">⚡</div>
              <span className="sp-offer-tag">Instant Upgrade</span>
              <h3>10 Free Outlet Refresh</h3>
              <p>
                We replace 10 old, yellowed outlets to modernize your home
                instantly. Covers labor &amp; standard 15A/20A residential
                outlets. New residential clients in Winter Park &amp; Maitland
                only.
              </p>
            </div>
          </div>
        </section>

        {/* FORM */}
        <section className="sp-form-section">
          <div className="sp-form-wrap">
            <p className="sp-section-label">Claim Your Offer</p>
            <h2 className="sp-section-title" style={{ marginBottom: '30px' }}>
              Lock In Your Deal Today
            </h2>

            <div className="sp-form-box">
              <SpecialForm />
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <div className="sp-trust-bar">
          <div className="sp-trust-item">
            <span className="sp-icon">✓</span> 100% Satisfaction Guaranteed
          </div>
          <div className="sp-trust-item">
            <span className="sp-icon">📍</span> Serving Winter Park &amp;
            Maitland
          </div>
          <div className="sp-trust-item">
            <span className="sp-icon">⚡</span> 2-Hour Response Pledge
          </div>
          <div className="sp-trust-item">
            <span className="sp-icon">🔒</span> No Obligation. Ever.
          </div>
        </div>

        {/* FOOTER */}
        <footer className="sp-footer" style={{ backgroundColor: '#000000', padding: '40px 24px', textAlign: 'left', maxWidth: '100%', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ textAlign: 'center', marginBottom: '40px' }}>
              <strong>100% Satisfaction Guaranteed.</strong><br />
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
                A subdivision of <strong>LUXURY HOME TRANSFORMATIONS LLC</strong>
              </span><br />
              <span style={{ fontSize: '14px', marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center', justifyContent: 'center' }}>
                <a href="tel:4072880832" style={{ backgroundColor: '#ffffff', color: '#000000', textDecoration: 'none', padding: '12px 24px', borderRadius: '50px', fontWeight: 'bold', display: 'inline-block', width: '250px', textAlign: 'center' }}>📞 (407) 288-0832</a>
                <a href="https://fix.luxht.com" style={{ backgroundColor: '#ffffff', color: '#000000', textDecoration: 'none', padding: '12px 24px', borderRadius: '50px', fontWeight: 'bold', display: 'inline-block', width: '250px', textAlign: 'center' }}>🌐 fix.luxht.com</a>
              </span>
            </p>

            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.6', fontFamily: 'sans-serif' }}>
              <h4 style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', marginBottom: '4px', textTransform: 'uppercase' }}>Official Promotion Terms &amp; Conditions</h4>
              <p style={{ marginBottom: '16px' }}><strong>Effective Date:</strong> February 2026<br /><strong>Provider:</strong> These promotions are offered by LUXHT Fix, a subdivision of LUXURY HOME TRANSFORMATIONS LLC.</p>

              <h5 style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px', marginBottom: '4px', marginTop: '12px' }}>I. General Eligibility &amp; Scope</h5>
              <p style={{ marginBottom: '8px' }}><strong>Service Area:</strong> Offers are valid only for residential properties located within our standard service areas of Winter Park, Maitland, and Casselberry, Florida.</p>
              <p style={{ marginBottom: '8px' }}><strong>Residential Use:</strong> Offers apply to owner-occupied residential homes only. They are not valid for commercial properties, property management companies, or rental tenants without explicit written owner authorization.</p>
              <p style={{ marginBottom: '8px' }}><strong>Non-Combinable:</strong> Unless explicitly stated otherwise, these offers cannot be combined with each other, stacked with other discounts, or applied to previously contracted work.</p>
              <p style={{ marginBottom: '16px' }}><strong>Limit:</strong> Limit one (1) promotional offer redemption per household per 12-month period.</p>

              <h5 style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px', marginBottom: '4px', marginTop: '12px' }}>II. Offer-Specific Terms</h5>
              <p style={{ marginBottom: '4px' }}><strong>A. "Free In-Home Consultation &amp; Diagnosis"</strong></p>
              <ul style={{ paddingLeft: '16px', marginBottom: '12px', listStyleType: 'disc' }}>
                <li style={{ marginBottom: '4px' }}><strong>Scope of Visit:</strong> This offer provides for one (1) scheduled visit by a LUXHT Fix technician or project manager to visually inspect a specific issue, diagnose the problem, and provide a written estimate for repairs or upgrades.</li>
                <li style={{ marginBottom: '4px' }}><strong>No Obligation:</strong> The homeowner is under no obligation to purchase services.</li>
                <li style={{ marginBottom: '4px' }}><strong>Exclusions:</strong> This is a consultative visit only. No repairs, labor, or "quick fixes" will be performed during this free visit.</li>
                <li style={{ marginBottom: '4px' }}><strong>Invasive Testing:</strong> The consultation includes standard visual and non-invasive diagnostic tools. Any invasive discovery work required to diagnose a complex issue (e.g., opening drywall, extensive electrical tracing) is not included and would require a separate, billable agreement.</li>
              </ul>

              <p style={{ marginBottom: '4px' }}><strong>B. "$50 OFF Any Project Over $250"</strong></p>
              <ul style={{ paddingLeft: '16px', marginBottom: '12px', listStyleType: 'disc' }}>
                <li style={{ marginBottom: '4px' }}><strong>Minimum Spend:</strong> The total project invoice must exceed $250.00 before applicable taxes to qualify for the $50 discount.</li>
                <li style={{ marginBottom: '4px' }}><strong>Application:</strong> The discount is applied to the final invoice total (labor and materials provided by LUXHT Fix).</li>
                <li style={{ marginBottom: '4px' }}><strong>Value:</strong> The offer has no cash value and cannot be redeemed for cash or credit.</li>
              </ul>

              <p style={{ marginBottom: '4px' }}><strong>C. "10 Free Outlet Refresh Package"</strong></p>
              <p style={{ marginBottom: '4px' }}>This offer is designed to refresh the visual appearance of standard outlets in safe, working condition.</p>
              <ul style={{ paddingLeft: '16px', marginBottom: '12px', listStyleType: 'disc' }}>
                <li style={{ marginBottom: '4px' }}><strong>Inclusions:</strong> Offer includes labor and materials to replace up to exactly ten (10) existing duplex wall receptacles with new, standard residential-grade white outlets (15 Amp or 20 Amp, depending on circuit requirement) and standard white plastic faceplates.</li>
                <li style={{ marginBottom: '4px' }}><strong>Material Exclusions:</strong> This offer does not apply to and cannot be used for: GFCI (Ground Fault Circuit Interrupter) outlets (kitchens/baths/outdoor), AFCI outlets, Dimmer switches or fan speed controls, Smart outlets, USB-integrated outlets, or specialty receptacles (e.g., dryer/range plugs), Decorative, metal, or wood faceplates.</li>
                <li style={{ marginBottom: '4px' }}><strong>Safety &amp; Existing Conditions Clause (Crucial):</strong> This offer is strictly a "swap" of working hardware. It assumes existing wiring is up to current local building codes, safe, and functional. LUXHT Fix reserves the right to decline service under this offer if the technician discovers unsafe conditions, such as, but not limited to: degraded cloth wiring, aluminum wiring without proper remediation, lack of proper grounding, overloaded circuits, or fire hazards. If unsafe conditions are found, the homeowner will be provided with a quote to remediate the underlying electrical issues before any outlets can be replaced. The homeowner is under no obligation to proceed with the remediation, but the free offer will be voided for safety reasons.</li>
                <li style={{ marginBottom: '4px' }}><strong>Troubleshooting:</strong> This offer does not cover troubleshooting dead outlets or faulty circuits. The existing outlet must be functional prior to replacement.</li>
              </ul>

              <h5 style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px', marginBottom: '4px', marginTop: '12px' }}>III. Right to Modify</h5>
              <p style={{ marginBottom: '8px' }}>LUXURY HOME TRANSFORMATIONS LLC reserves the right to modify, extend, or terminate these promotions at any time without prior notice. All projects booked prior to termination will be honored under the terms active at the time of booking.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
