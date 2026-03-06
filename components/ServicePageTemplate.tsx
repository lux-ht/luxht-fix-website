import Navbar from '@/components/Navbar';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import Link from 'next/link';
import {
    ArrowRight, CheckCircle, Phone, Mail, MapPin, Star
} from 'lucide-react';

export interface FAQItem {
    q: string;
    a: string;
}

export interface RelatedService {
    title: string;
    href: string;
}

export interface ServicePageProps {
    serviceName: string;
    slug: string;
    neighborhoods: string[];
    parentCategory: string;
    parentSlug: string;
    heroSubtitle: string;
    heroDescription?: string;
    introParagraph: string;
    serviceDetails: string[];
    processSteps: string[];
    whyChooseUs: string[];
    faqs: FAQItem[];
    relatedServices: RelatedService[];
    startingPrice?: string;
    statsText?: string;
}

export default function ServicePageTemplate({
    serviceName,
    slug,
    neighborhoods,
    parentCategory,
    parentSlug,
    heroSubtitle,
    heroDescription,
    introParagraph,
    serviceDetails,
    processSteps,
    whyChooseUs,
    faqs,
    relatedServices,
    startingPrice,
    statsText,
}: ServicePageProps) {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "name": `LUXHT Fix - ${serviceName} Orlando`,
        "image": "https://fix.luxht.com/images/logo-wide-hammers.png",
        "url": `https://fix.luxht.com/${slug}/`,
        "telephone": "+1-407-720-7476",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Orlando",
            "addressRegion": "FL",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 28.5383,
            "longitude": -81.3792
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "18:00"
        },
        "areaServed": neighborhoods.map(n => ({
            "@type": "City",
            "name": n
        })),
        "sameAs": [
            "https://www.instagram.com/luxhtfix"
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <Navbar />
            <BreadcrumbSchema items={[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services/' },
                { name: parentCategory, href: `/${parentSlug}/` },
                { name: serviceName, href: `/${slug}/` }
            ]} />

            {/* HERO SECTION */}
            <header className="relative bg-gradient-to-br from-[#584D94] via-[#7B6FCC] to-[#453A75] text-white pt-32 pb-24 px-4 text-center overflow-hidden">
                <div className="relative z-10 container mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        {serviceName} in Orlando, FL
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 mb-2 font-medium">
                        {heroSubtitle}
                    </p>
                    {heroDescription && (
                        <p className="text-lg text-blue-200 mb-8">
                            {heroDescription}
                        </p>
                    )}

                    <div className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold text-[#64CEBB] mb-8 bg-white/10 backdrop-blur-md inline-flex py-2 px-6 rounded-full border border-white/20">
                        <CheckCircle size={16} /> {statsText || 'Licensed • Insured • Orlando\'s Trusted Experts'}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        <a href="tel:4077207476" className="btn-gradient-primary btn-gradient-shimmer">
                            <Phone size={24} /> Call Now
                        </a>
                        <a href="sms:4077207476" className="btn-gradient-glass border-white/20 hover:bg-white/10">
                            <span className="text-xl">💬</span> Text Us
                        </a>
                        <a href={`mailto:info@luxht.com?subject=${encodeURIComponent(serviceName)}%20Quote%20Request`} className="btn-gradient-glass border-white/20 hover:bg-white/10">
                            <Mail size={24} /> Email Us
                        </a>
                    </div>
                </div>

                {startingPrice && (
                    <div className="text-blue-200 text-sm opacity-90">
                        <p className="font-bold">{startingPrice}</p>
                        <a href={`sms:4077207476?body=Hi%2C%20I%20need%20a%20quick%20quote%20for%20${encodeURIComponent(serviceName.toLowerCase())}...`} className="hover:text-white underline underline-offset-2">💬 Text for Instant Quote</a>
                    </div>
                )}
            </header>

            {/* INTRO + SERVICE DETAILS */}
            <section className="py-20 px-4 container mx-auto">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#584D94] mb-6">
                        Professional {serviceName} in Orlando
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        {introParagraph}
                    </p>

                    {/* Neighborhood mentions */}
                    <p className="text-slate-600 leading-relaxed mb-8">
                        We proudly serve homeowners in <strong>{neighborhoods.slice(0, -1).join(', ')}</strong>{neighborhoods.length > 1 ? `, and <strong>${neighborhoods[neighborhoods.length - 1]}</strong>` : ''} with expert {serviceName.toLowerCase()} services. Whether you{"'"}re in a historic home in {neighborhoods[0]} or a newer community in {neighborhoods[neighborhoods.length - 1]}, LUXHT Fix delivers the same high-quality results.
                    </p>

                    {serviceDetails.length > 0 && (
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            {serviceDetails.map((detail, i) => (
                                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100">
                                    <span className="text-[#64CEBB] mt-1 flex-shrink-0"><CheckCircle size={20} /></span>
                                    <span className="text-slate-700">{detail}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* PROCESS */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-[#584D94] text-center mb-12">Our {serviceName} Process</h2>

                    <div className="space-y-6 max-w-3xl mx-auto relative pl-8 border-l-2 border-[#584D94]/20">
                        {processSteps.map((step, i) => (
                            <div key={i} className="relative pl-8">
                                <span className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-[#64CEBB] text-white flex items-center justify-center font-bold text-sm border-4 border-white">
                                    {i + 1}
                                </span>
                                <p className="text-lg text-slate-700 font-medium">{step}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:4077207476" className="btn-gradient-primary btn-gradient-shimmer">
                                <Phone size={18} /> Get Free Estimate
                            </a>
                            <a href="sms:4077207476" className="btn-gradient-secondary">
                                <span>💬</span> Text Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-20 px-4 container mx-auto bg-[#584D94]/5 rounded-3xl my-8 max-w-6xl">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl md:text-3xl font-bold text-[#584D94] mb-8">Why Orlando Homeowners Choose LUXHT Fix</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {whyChooseUs.map((item, i) => (
                            <div key={i} className="flex items-start gap-3 text-slate-700">
                                <span className="text-[#64CEBB] mt-1 flex-shrink-0"><CheckCircle size={20} /></span>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ — VISIBLE (NO ACCORDION) */}
            <section className="py-20 bg-slate-50 px-4">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold text-[#584D94] text-center mb-12">{serviceName} FAQs — Orlando</h2>
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white border border-slate-200 rounded-lg p-6">
                                <h3 className="font-bold text-slate-800 text-lg mb-3">{faq.q}</h3>
                                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SERVICE AREA */}
            <section className="py-20 px-4 container mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-bold text-[#584D94] mb-8">{serviceName} Service Areas</h2>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {["Orlando", ...neighborhoods].map((area, i) => (
                        <span key={i} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium border border-slate-200 inline-flex items-center gap-1">
                            <MapPin size={14} className="text-[#64CEBB]" /> {area}
                        </span>
                    ))}
                </div>
                <p className="text-slate-500">Not sure if we serve your area? Call or message — we{"'"}ll confirm quickly.</p>
            </section>

            {/* RELATED SERVICES */}
            <section className="py-20 bg-white px-4 border-t border-slate-100">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-2xl font-bold text-[#584D94] text-center mb-12">Related Services</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {relatedServices.map((service, i) => (
                            <Link key={i} href={service.href} className="bg-slate-50 hover:bg-[#584D94]/5 p-4 rounded-xl text-center transition-colors border border-slate-100 hover:border-[#584D94]/20">
                                <h3 className="font-semibold text-slate-700 text-sm">{service.title}</h3>
                                <span className="text-xs text-[#64CEBB] font-bold mt-1 inline-flex items-center gap-1">
                                    Learn More <ArrowRight size={10} />
                                </span>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link href="/services/" className="text-[#64CEBB] font-bold underline hover:text-[#53b0a0]">View All Services</Link>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-24 bg-gradient-to-br from-[#584D94] via-[#7B6FCC] to-[#453A75] text-white text-center px-4">
                <div className="container mx-auto max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Need {serviceName} This Week?</h2>
                    <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                        Fast, professional service with quality results.<br />Orlando{"'"}s trusted home repair experts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <a href="tel:4077207476" className="btn-gradient-primary btn-gradient-shimmer">
                            <Phone size={20} /> Call Now: (407) 720-7476
                        </a>
                        <a href="sms:4077207476" className="btn-gradient-glass">
                            <span>💬</span> Text Us
                        </a>
                        <a href="mailto:info@luxht.com" className="btn-gradient-glass">
                            <Mail size={20} /> Email Us
                        </a>
                    </div>
                    <p className="text-sm opacity-75">Licensed • Insured • Same-Week Service</p>
                </div>
            </section>
        </main>
    );
}
