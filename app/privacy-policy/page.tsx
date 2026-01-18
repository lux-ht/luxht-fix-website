'use client';

import Navbar from '@/components/Navbar';
import { Shield, Lock, Eye, Database, Mail, UserCheck } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
                            <Shield className="w-4 h-4 text-[#64CEBB]" />
                            <span className="text-[#64CEBB] text-sm font-medium">Your Privacy Matters</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Privacy <span className="text-[#64CEBB]">Policy</span>
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

                            {/* Introduction */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-[#64CEBB]/10 flex items-center justify-center">
                                        <Eye className="w-5 h-5 text-[#64CEBB]" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Introduction</h2>
                                </div>
                                <p className="text-slate-300 leading-relaxed">
                                    LUXHT Fix ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our home repair and renovation services in the Orlando, Florida area.
                                </p>
                            </div>

                            {/* Information We Collect */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-[#64CEBB]/10 flex items-center justify-center">
                                        <Database className="w-5 h-5 text-[#64CEBB]" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Information We Collect</h2>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-[#64CEBB] mb-2">Personal Information</h3>
                                        <ul className="text-slate-300 space-y-2 list-disc list-inside">
                                            <li>Name, email address, phone number, and mailing address</li>
                                            <li>Service requests and project details</li>
                                            <li>Payment and billing information</li>
                                            <li>Communication records between you and LUXHT Fix</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-[#64CEBB] mb-2">Automatically Collected Information</h3>
                                        <ul className="text-slate-300 space-y-2 list-disc list-inside">
                                            <li>IP address and browser type</li>
                                            <li>Device information and operating system</li>
                                            <li>Pages visited and time spent on our website</li>
                                            <li>Referring website addresses</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* How We Use Your Information */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-[#64CEBB]/10 flex items-center justify-center">
                                        <UserCheck className="w-5 h-5 text-[#64CEBB]" />
                                    </div>
                                    <h2 className="text-2xl font-bold">How We Use Your Information</h2>
                                </div>
                                <ul className="text-slate-300 space-y-3 list-disc list-inside">
                                    <li>To provide and manage our home repair and renovation services</li>
                                    <li>To communicate with you about your projects and service appointments</li>
                                    <li>To process payments and send invoices</li>
                                    <li>To send promotional offers and company updates (with your consent)</li>
                                    <li>To improve our website and customer experience</li>
                                    <li>To comply with legal obligations</li>
                                </ul>
                            </div>

                            {/* Data Protection */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-[#64CEBB]/10 flex items-center justify-center">
                                        <Lock className="w-5 h-5 text-[#64CEBB]" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Data Protection</h2>
                                </div>
                                <p className="text-slate-300 leading-relaxed">
                                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encrypted data transmission, secure servers, and restricted access to personal data.
                                </p>
                            </div>

                            {/* Third-Party Sharing */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">Third-Party Sharing</h2>
                                <p className="text-slate-300 leading-relaxed">
                                    We do not sell your personal information. We may share your information with:
                                </p>
                                <ul className="text-slate-300 space-y-2 list-disc list-inside">
                                    <li>Service providers who assist in our operations (e.g., payment processors)</li>
                                    <li>Professional advisors (lawyers, accountants) as necessary</li>
                                    <li>Law enforcement when required by law</li>
                                </ul>
                            </div>

                            {/* Your Rights */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">Your Rights</h2>
                                <p className="text-slate-300 leading-relaxed">
                                    You have the right to:
                                </p>
                                <ul className="text-slate-300 space-y-2 list-disc list-inside">
                                    <li>Access your personal information we hold</li>
                                    <li>Request correction of inaccurate data</li>
                                    <li>Request deletion of your data</li>
                                    <li>Opt out of marketing communications</li>
                                    <li>Lodge a complaint with a supervisory authority</li>
                                </ul>
                            </div>

                            {/* Contact Us */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-[#64CEBB]/10 flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-[#64CEBB]" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Contact Us</h2>
                                </div>
                                <p className="text-slate-300 leading-relaxed">
                                    If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
                                </p>
                                <div className="bg-[#64CEBB]/10 rounded-xl p-6 border border-[#64CEBB]/20">
                                    <p className="text-white font-semibold">LUXHT Fix</p>
                                    <p className="text-slate-300">Email: info@luxht.com</p>
                                    <p className="text-slate-300">Phone: (407) 288-0832</p>
                                    <p className="text-slate-300">Service Area: Orlando, Winter Park & Surrounding FL Areas</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
