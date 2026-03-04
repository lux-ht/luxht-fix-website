import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'LUXHT Fix — Your Offers Are Locked In!',
  description:
    'Your exclusive magazine offer has been claimed. Ruth\'s team will be in touch within 2 hours.',
  robots: { index: false, follow: false },
};

export default function SpecialThankYouPage() {
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
  --green: #2ECC71;
}

.ty-page * { margin: 0; padding: 0; box-sizing: border-box; }

.ty-page {
  font-family: 'DM Sans', sans-serif;
  background: var(--dark);
  color: var(--text);
  min-height: 100vh;
  overflow-x: hidden;
}

/* HEADER */
.ty-header {
  background: rgba(255,255,255,0.04);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ty-logo-area {
  display: flex;
  align-items: center;
  gap: 10px;
}

.ty-logo-icon {
  width: 42px; height: 42px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(255,255,255,0.2);
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ty-logo-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ty-logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.ty-logo-text .ty-brand {
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: var(--white);
  letter-spacing: 0px;
}

.ty-logo-text .ty-sub {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  color: var(--gold-light);
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 500;
}

/* HERO */
.ty-hero {
  min-height: 100vh;
  background: linear-gradient(135deg, #1A1020 0%, #2A0F50 50%, #1A1020 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 24px;
  text-align: center;
}

/* Animated gold rings */
.ty-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(201,168,76,0.15);
  animation: tyPulseRing 4s ease-in-out infinite;
}
.ty-ring-1 { width: 300px; height: 300px; animation-delay: 0s; }
.ty-ring-2 { width: 500px; height: 500px; animation-delay: 0.6s; }
.ty-ring-3 { width: 700px; height: 700px; animation-delay: 1.2s; }
.ty-ring-4 { width: 900px; height: 900px; animation-delay: 1.8s; border-color: rgba(201,168,76,0.06); }

@keyframes tyPulseRing {
  0%, 100% { transform: scale(0.97); opacity: 0.5; }
  50% { transform: scale(1.03); opacity: 1; }
}

/* Success check */
.ty-check-circle {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--green), #27AE60);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 44px;
  margin: 0 auto 32px;
  position: relative;
  z-index: 2;
  animation: tyCheckPop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  box-shadow: 0 0 60px rgba(46,204,113,0.4);
  color: white;
}

@keyframes tyCheckPop {
  0% { transform: scale(0); opacity: 0; }
  60% { transform: scale(1.15); }
  100% { transform: scale(1); opacity: 1; }
}

.ty-hero-content {
  position: relative;
  z-index: 2;
  max-width: 640px;
  animation: tyFadeUp 0.7s 0.3s ease both;
}

@keyframes tyFadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to { opacity: 1; transform: translateY(0); }
}

.ty-status-pill {
  display: inline-block;
  background: rgba(46,204,113,0.15);
  border: 1px solid rgba(46,204,113,0.4);
  color: #2ECC71;
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  padding: 6px 18px;
  border-radius: 50px;
  margin-bottom: 22px;
}

.ty-hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(32px, 6vw, 54px);
  font-weight: 900;
  color: var(--white);
  line-height: 1.15;
  margin-bottom: 24px;
}

.ty-hero h1 span { color: var(--gold-light); }

.ty-promise-box {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  border-left: 4px solid var(--gold);
  border-radius: 14px;
  padding: 24px 28px;
  margin: 28px 0;
  text-align: left;
}

.ty-promise-label {
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold-light);
  margin-bottom: 8px;
}

.ty-promise-text {
  font-size: 17px;
  color: rgba(255,255,255,0.85);
  line-height: 1.65;
  font-weight: 300;
}

.ty-promise-text strong { color: var(--white); font-weight: 600; }

/* CTA button */
.ty-text-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, var(--gold), var(--gold-light));
  color: var(--purple);
  text-decoration: none;
  padding: 18px 36px;
  border-radius: 14px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.3px;
  transition: all 0.3s;
  margin: 8px;
  box-shadow: 0 6px 28px rgba(201,168,76,0.35);
}

.ty-text-btn:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 14px 40px rgba(201,168,76,0.5);
}

.ty-text-btn svg { width: 22px; height: 22px; }

.ty-btn-note {
  font-size: 12px;
  color: rgba(255,255,255,0.35);
  margin-top: 10px;
}

/* What happens next */
.ty-steps-section {
  background: rgba(255,255,255,0.03);
  border-top: 1px solid rgba(255,255,255,0.07);
  padding: 64px 24px;
}

.ty-steps-wrap {
  max-width: 800px;
  margin: 0 auto;
}

.ty-section-label {
  text-align: center;
  font-size: 11px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--purple-light);
  margin-bottom: 12px;
}

.ty-section-title {
  text-align: center;
  font-family: 'Playfair Display', serif;
  font-size: 30px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 44px;
}

.ty-steps-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.ty-step {
  text-align: center;
  padding: 28px 20px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  transition: all 0.25s;
}

.ty-step:hover {
  border-color: rgba(201,168,76,0.3);
  background: rgba(201,168,76,0.06);
}

.ty-step-num {
  width: 44px; height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--purple), var(--purple-light));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  color: var(--white);
  margin: 0 auto 14px;
}

.ty-step h4 {
  font-size: 15px;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 8px;
}

.ty-step p {
  font-size: 13px;
  color: rgba(255,255,255,0.45);
  line-height: 1.6;
  font-weight: 300;
}

/* Visit our site */
.ty-visit-section {
  background: rgba(91,45,142,0.15);
  border-top: 1px solid rgba(91,45,142,0.3);
  border-bottom: 1px solid rgba(91,45,142,0.3);
  padding: 48px 24px;
  text-align: center;
}

.ty-visit-section h3 {
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  color: var(--white);
  margin-bottom: 10px;
}

.ty-visit-section p {
  color: rgba(255,255,255,0.5);
  font-size: 15px;
  margin-bottom: 24px;
  font-weight: 300;
}

.ty-link-row {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.ty-site-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.25s;
}

.ty-site-link.ty-primary {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  color: var(--white);
}

.ty-site-link.ty-primary:hover {
  background: rgba(255,255,255,0.14);
  border-color: rgba(255,255,255,0.3);
  transform: translateY(-2px);
}

.ty-site-link.ty-secondary {
  background: rgba(91,45,142,0.2);
  border: 1px solid rgba(91,45,142,0.4);
  color: var(--purple-light);
}

.ty-site-link.ty-secondary:hover {
  background: rgba(91,45,142,0.35);
  transform: translateY(-2px);
}

/* FOOTER */
.ty-footer {
  background: #0A0512;
  padding: 32px 24px;
  text-align: center;
}

.ty-footer p {
  color: rgba(255,255,255,0.3);
  font-size: 13px;
  line-height: 1.9;
}

.ty-footer strong { color: rgba(255,255,255,0.6); }
.ty-footer a { color: var(--gold-light); text-decoration: none; }

@media (max-width: 600px) {
  .ty-steps-row { grid-template-columns: 1fr; }
  .ty-hero { padding: 40px 20px; }
  .ty-header { padding: 12px 18px; }
}
          `,
        }}
      />

      <div className="ty-page">
        {/* HEADER */}
        <header className="ty-header">
          <div className="ty-logo-area">
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className="ty-logo-icon">
                <Image
                  src="/images/logo-wide-hammers.png"
                  alt="LUXHT Fix Logo"
                  width={42}
                  height={42}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="ty-logo-text">
                <span className="ty-brand">
                  LUXHT<span style={{ color: '#64CEBB', marginLeft: '2px' }}>Fix</span>
                </span>
                <span className="ty-sub" style={{ marginTop: '-2px' }}>Exclusive Offer</span>
              </div>
            </Link>
          </div>
          <a
            href="tel:4072880832"
            style={{
              backgroundColor: 'var(--gold)',
              color: 'var(--purple)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 700,
              padding: '10px 22px',
              borderRadius: '50px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.25s',
            }}
          >
            <span>📞</span> (407) 288-0832
          </a>
        </header>

        {/* HERO */}
        <section className="ty-hero">
          {/* Animated rings */}
          <div className="ty-ring ty-ring-1" />
          <div className="ty-ring ty-ring-2" />
          <div className="ty-ring ty-ring-3" />
          <div className="ty-ring ty-ring-4" />

          <div className="ty-check-circle">✓</div>

          <div className="ty-hero-content">
            <div className="ty-status-pill">✓ Offer Successfully Claimed</div>
            <h1>
              Success! Your Offers
              <br />
              <span>Are Locked In.</span>
            </h1>

            <div className="ty-promise-box">
              <p className="ty-promise-label">Our Response Promise</p>
              <p className="ty-promise-text">
                Thanks for choosing LUXHT Fix.{' '}
                <strong>
                  Ruth&apos;s team will be in touch within 2 hours
                </strong>{' '}
                to schedule your visit and confirm your offer details.
              </p>
            </div>

            <p
              style={{
                color: 'rgba(255,255,255,0.45)',
                fontSize: '15px',
                marginBottom: '20px',
              }}
            >
              Don&apos;t want to wait? Text us directly and we&apos;ll
              prioritize your booking.
            </p>

            <a href="sms:4072880832" className="ty-text-btn">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              Text Us Now
            </a>

            <p className="ty-btn-note">
              Opens your messages app → (407) 288-0832
            </p>
          </div>
        </section>

        {/* WHAT HAPPENS NEXT */}
        <section className="ty-steps-section">
          <div className="ty-steps-wrap">
            <p className="ty-section-label">Zero-Stress Process</p>
            <h2 className="ty-section-title">What Happens Next</h2>
            <div className="ty-steps-row">
              <div className="ty-step">
                <div className="ty-step-num">1</div>
                <h4>We Call You</h4>
                <p>
                  Ruth&apos;s team contacts you within 2 hours to confirm your
                  offer and preferred schedule.
                </p>
              </div>
              <div className="ty-step">
                <div className="ty-step-num">2</div>
                <h4>We Visit Your Home</h4>
                <p>
                  A LUXHT Fix professional arrives on time, in uniform, ready to
                  work or consult.
                </p>
              </div>
              <div className="ty-step">
                <div className="ty-step-num">3</div>
                <h4>Zero-Stress Results</h4>
                <p>
                  We deliver on every promise — or we make it right. 100%
                  satisfaction guaranteed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VISIT OUR SITES */}
        <section className="ty-visit-section">
          <h3>Explore More From LUXHT</h3>
          <p>
            Visit our home services site or browse our full construction
            portfolio for larger projects.
          </p>
          <div className="ty-link-row">
            <a
              href="https://fix.luxht.com"
              className="ty-site-link ty-primary"
            >
              🔧 &nbsp;fix.luxht.com — Home Services
            </a>
            <a
              href="https://luxht.com"
              className="ty-site-link ty-secondary"
            >
              🏗️ &nbsp;luxht.com — Full Construction Portfolio
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="ty-footer" style={{ backgroundColor: '#000000', padding: '40px 24px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p style={{ marginBottom: '20px' }}>
            <strong>100% Satisfaction Guaranteed.</strong>
          </p>
          <p style={{ marginBottom: '30px', fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
            A subdivision of{' '}
            <strong>LUXURY HOME TRANSFORMATIONS LLC</strong>
          </p>
          <p style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center', justifyContent: 'center' }}>
            <a href="tel:4072880832" style={{ backgroundColor: '#ffffff', color: '#000000', textDecoration: 'none', padding: '12px 24px', borderRadius: '50px', fontWeight: 'bold', display: 'inline-block', width: '250px' }}>📞 (407) 288-0832</a>
            <a href="https://fix.luxht.com" style={{ backgroundColor: '#ffffff', color: '#000000', textDecoration: 'none', padding: '12px 24px', borderRadius: '50px', fontWeight: 'bold', display: 'inline-block', width: '250px' }}>🌐 fix.luxht.com</a>
          </p>
        </footer>
      </div>
    </>
  );
}
