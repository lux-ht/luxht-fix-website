'use client';

import Navbar from '@/components/Navbar';
import { FileText, AlertTriangle, Scale, Handshake, Ban, Clock } from 'lucide-react';

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-[#0a0a14] text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#584D94]/20 to-transparent"></div>
                <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#64CEBB]/10 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#64CEBB]/10 border border-[#64CEBB]/20 mb-6">
                            <FileText className="w-4 h-4 text-[#64CEBB]" />
                            <span className="text-[#64CEBB] text-sm font-medium">Legal Agreement</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Terms of <span className="text-[#64CEBB]">Service</span>
                        </h1>
                        <p className="text-xl text-slate-400">
                            Last updated: January 11, 2026
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12 space-y-12">

                            {/* Agreement to Terms */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-[#64CEBB]/10 flex items-center justify-center">
                                        <Handshake className="w-5 h-5 text-[#64CEBB]" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Agreement to Terms</h2>
                                </div>
                                <p className="text-slate-300 leading-relaxed">
                                    By accessing or using the LUXHT Fix website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services. These terms apply to all visitors, users, and customers of LUXHT Fix.
                                </p>
                            </div>

                            {/* Services Description */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-[#64CEBB]/10 flex items-center justify-center">
                                        <FileText className="w-5 h-5 text-[#64CEBB]" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Services Description</h2>
                                </div>
                                <p className="text-slate-300 leading-relaxed">
                                    LUXHT Fix provides professional home repair, renovation, and handyman services in the Orlando, Florida metropolitan area. Our services include, but are not limited to:
                                </p>
                                <ul className="text-slate-300 space-y-2 list-disc list-inside">
                                    <li>Drywall repair and installation</li>
                                    <li>TV mounting and smart home installation</li>
                                    <li>Flooring installation</li>
                                    <li>Deck building and repair</li>
                                    <li>Kitchen refacing and bathroom remodeling</li>
                                    <li>General home repairs and maintenance</li>
                                </ul>
                            </div>

                            {/* Service Agreements */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-[#64CEBB]/10 flex items-center justify-center">
                                        <Scale className="w-5 h-5 text-[#64CEBB]" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Service Agreements & Estimates</h2>
                                </div>
                                <ul className="text-slate-300 space-y-3 list-disc list-inside">
                                    <li>All service estimates are provided in good faith and may be subject to change based on actual conditions discovered during the project</li>
                                    <li>A signed service agreement or accepted quote is required before work begins</li>
                                    <li>Changes to the agreed scope of work may result in adjusted pricing</li>
                                    <li>Payment terms are outlined in individual service agreements</li>
                                </ul>
                            </div>

                            {/* Scheduling & Cancellation */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-[#64CEBB]/10 flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-[#64CEBB]" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Scheduling & Cancellation</h2>
                                </div>
                                <ul className="text-slate-300 space-y-3 list-disc list-inside">
                                    <li>We request at least 24 hours notice for appointment cancellations</li>
                                    <li>Repeated no-shows may result in a service fee</li>
                                    <li>We will make reasonable efforts to accommodate scheduling changes</li>
                                    <li>Weather or unforeseen circumstances may require rescheduling</li>
                                </ul>
                            </div>

                            {/* Warranties & Liability */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-[#64CEBB]/10 flex items-center justify-center">
                                        <AlertTriangle className="w-5 h-5 text-[#64CEBB]" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Warranties & Liability</h2>
                                </div>
                                <p className="text-slate-300 leading-relaxed">
                                    LUXHT Fix stands behind our workmanship. Specific warranty terms are provided with each service agreement. However:
                                </p>
                                <ul className="text-slate-300 space-y-2 list-disc list-inside">
                                    <li>Warranties do not cover damage caused by customer misuse or third-party modifications</li>
                                    <li>Material warranties are subject to manufacturer terms</li>
                                    <li>Our liability is limited to the value of services provided</li>
                                    <li>We are not liable for pre-existing conditions discovered during repairs</li>
                                </ul>
                            </div>

                            {/* Prohibited Uses */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-[#64CEBB]/10 flex items-center justify-center">
                                        <Ban className="w-5 h-5 text-[#64CEBB]" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Website Use Restrictions</h2>
                                </div>
                                <p className="text-slate-300 leading-relaxed">
                                    You agree not to:
                                </p>
                                <ul className="text-slate-300 space-y-2 list-disc list-inside">
                                    <li>Use the website for any unlawful purpose</li>
                                    <li>Attempt to gain unauthorized access to any portion of the website</li>
                                    <li>Interfere with the security features of the website</li>
                                    <li>Reproduce, duplicate, or copy material from our website for commercial purposes</li>
                                    <li>Submit false or misleading information</li>
                                </ul>
                            </div>

                            {/* Intellectual Property */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">Intellectual Property</h2>
                                <p className="text-slate-300 leading-relaxed">
                                    All content on this website, including text, graphics, logos, images, and software, is the property of LUXHT Fix and protected by copyright laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                                </p>
                            </div>

                            {/* Governing Law */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">Governing Law</h2>
                                <p className="text-slate-300 leading-relaxed">
                                    These Terms of Service shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved in the courts of Orange County, Florida.
                                </p>
                            </div>

                            {/* Changes to Terms */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">Changes to Terms</h2>
                                <p className="text-slate-300 leading-relaxed">
                                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services after changes constitutes acceptance of the new terms.
                                </p>
                            </div>

                            {/* Contact */}
                            <div className="bg-[#64CEBB]/10 rounded-xl p-6 border border-[#64CEBB]/20">
                                <h3 className="text-lg font-bold mb-3">Questions About These Terms?</h3>
                                <p className="text-slate-300">Contact us at info@luxht.com or call (407) 720-7476</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
