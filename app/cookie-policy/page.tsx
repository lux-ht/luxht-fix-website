'use client';

import Navbar from '@/components/Navbar';
import { Cookie, Settings, BarChart3, Target, Shield, ToggleRight } from 'lucide-react';

export default function CookiePolicyPage() {
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
                            <Cookie className="w-4 h-4 text-[#64CEBB]" />
                            <span className="text-[#64CEBB] text-sm font-medium">Cookie Information</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Cookie <span className="text-[#64CEBB]">Policy</span>
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

                            {/* What Are Cookies */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-[#64CEBB]/10 flex items-center justify-center">
                                        <Cookie className="w-5 h-5 text-[#64CEBB]" />
                                    </div>
                                    <h2 className="text-2xl font-bold">What Are Cookies?</h2>
                                </div>
                                <p className="text-slate-300 leading-relaxed">
                                    Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit websites. They help websites remember your preferences and understand how you interact with the site. Cookies are widely used to make websites work more efficiently and provide a better user experience.
                                </p>
                            </div>

                            {/* How We Use Cookies */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-[#64CEBB]/10 flex items-center justify-center">
                                        <Settings className="w-5 h-5 text-[#64CEBB]" />
                                    </div>
                                    <h2 className="text-2xl font-bold">How We Use Cookies</h2>
                                </div>
                                <p className="text-slate-300 leading-relaxed">
                                    LUXHT Fix uses cookies to enhance your browsing experience and improve our website. We use cookies to:
                                </p>
                                <ul className="text-slate-300 space-y-2 list-disc list-inside">
                                    <li>Remember your preferences and settings</li>
                                    <li>Understand how you navigate our website</li>
                                    <li>Improve website functionality and performance</li>
                                    <li>Analyze website traffic and usage patterns</li>
                                    <li>Provide relevant content and information</li>
                                </ul>
                            </div>

                            {/* Types of Cookies */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold">Types of Cookies We Use</h2>

                                <div className="grid gap-6">
                                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Shield className="w-5 h-5 text-[#64CEBB]" />
                                            <h3 className="text-lg font-semibold">Essential Cookies</h3>
                                        </div>
                                        <p className="text-slate-300 text-sm">
                                            These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies.
                                        </p>
                                    </div>

                                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                        <div className="flex items-center gap-3 mb-3">
                                            <BarChart3 className="w-5 h-5 text-[#64CEBB]" />
                                            <h3 className="text-lg font-semibold">Analytics Cookies</h3>
                                        </div>
                                        <p className="text-slate-300 text-sm">
                                            These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's structure and content.
                                        </p>
                                    </div>

                                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Settings className="w-5 h-5 text-[#64CEBB]" />
                                            <h3 className="text-lg font-semibold">Functional Cookies</h3>
                                        </div>
                                        <p className="text-slate-300 text-sm">
                                            These cookies enable enhanced functionality and personalization, such as remembering your preferences. They may be set by us or by third-party providers whose services we have added to our pages.
                                        </p>
                                    </div>

                                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Target className="w-5 h-5 text-[#64CEBB]" />
                                            <h3 className="text-lg font-semibold">Marketing Cookies</h3>
                                        </div>
                                        <p className="text-slate-300 text-sm">
                                            These cookies may be set through our site by advertising partners. They may be used to build a profile of your interests and show you relevant advertisements on other sites.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Third-Party Cookies */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">Third-Party Cookies</h2>
                                <p className="text-slate-300 leading-relaxed">
                                    Some cookies on our website are placed by third-party services that appear on our pages. We use the following third-party services:
                                </p>
                                <ul className="text-slate-300 space-y-2 list-disc list-inside">
                                    <li><strong>Google Analytics:</strong> To analyze website traffic and usage</li>
                                    <li><strong>Google Fonts:</strong> To display custom fonts</li>
                                    <li><strong>Social Media Widgets:</strong> For social sharing functionality</li>
                                </ul>
                            </div>

                            {/* Managing Cookies */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-[#64CEBB]/10 flex items-center justify-center">
                                        <ToggleRight className="w-5 h-5 text-[#64CEBB]" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Managing Your Cookie Preferences</h2>
                                </div>
                                <p className="text-slate-300 leading-relaxed">
                                    Most web browsers allow you to control cookies through their settings. You can:
                                </p>
                                <ul className="text-slate-300 space-y-2 list-disc list-inside">
                                    <li>View what cookies are stored on your device</li>
                                    <li>Delete all or specific cookies</li>
                                    <li>Block cookies from being set</li>
                                    <li>Set your browser to notify you when you receive a cookie</li>
                                </ul>
                                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mt-4">
                                    <p className="text-amber-200 text-sm">
                                        <strong>Note:</strong> Disabling cookies may affect the functionality of this website and other websites you visit.
                                    </p>
                                </div>
                            </div>

                            {/* Cookie Retention */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">Cookie Retention</h2>
                                <p className="text-slate-300 leading-relaxed">
                                    Different cookies have different lifespans:
                                </p>
                                <ul className="text-slate-300 space-y-2 list-disc list-inside">
                                    <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                                    <li><strong>Persistent Cookies:</strong> Remain until they expire or you delete them (typically 30 days to 2 years)</li>
                                </ul>
                            </div>

                            {/* Contact */}
                            <div className="bg-[#64CEBB]/10 rounded-xl p-6 border border-[#64CEBB]/20">
                                <h3 className="text-lg font-bold mb-3">Questions About Our Cookie Policy?</h3>
                                <p className="text-slate-300">Contact us at info@luxht.com or call (407) 288-0832</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
