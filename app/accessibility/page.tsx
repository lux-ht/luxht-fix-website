import Navbar from '@/components/Navbar';
import { Accessibility, Eye, Keyboard, MousePointer, Volume2, MessageCircle, RefreshCw } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Accessibility Statement | LUXHT Fix Orlando',
    description: 'LUXHT Fix is committed to ensuring digital accessibility for people of all abilities. Learn about our ongoing efforts to improve our website experience.',
    alternates: { canonical: 'https://fix.luxht.com/accessibility/' },
};

export default function AccessibilityPage() {
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
                            <Accessibility className="w-4 h-4 text-[#64CEBB]" />
                            <span className="text-[#64CEBB] text-sm font-medium">Inclusive Design</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Accessibility <span className="text-[#64CEBB]">Statement</span>
                        </h1>
                        <p className="text-xl text-slate-400">
                            Our commitment to making our website accessible to everyone
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12 space-y-12">

                            {/* Our Commitment */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-[#64CEBB]/10 flex items-center justify-center">
                                        <Accessibility className="w-5 h-5 text-[#64CEBB]" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Our Commitment</h2>
                                </div>
                                <p className="text-slate-300 leading-relaxed">
                                    LUXHT Fix is committed to ensuring digital accessibility for people of all abilities. We believe everyone deserves equal access to information about our home repair and renovation services. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                                </p>
                            </div>

                            {/* Conformance Status */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">Conformance Status</h2>
                                <p className="text-slate-300 leading-relaxed">
                                    We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible to people with disabilities and more user-friendly for everyone.
                                </p>
                            </div>

                            {/* Accessibility Features */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold">Accessibility Features</h2>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    Our website includes the following accessibility features:
                                </p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Eye className="w-5 h-5 text-[#64CEBB]" />
                                            <h3 className="text-lg font-semibold">Visual Design</h3>
                                        </div>
                                        <ul className="text-slate-300 text-sm space-y-2">
                                            <li>• High contrast color combinations</li>
                                            <li>• Resizable text without loss of functionality</li>
                                            <li>• Alternative text for images</li>
                                            <li>• Clear visual hierarchy</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Keyboard className="w-5 h-5 text-[#64CEBB]" />
                                            <h3 className="text-lg font-semibold">Keyboard Navigation</h3>
                                        </div>
                                        <ul className="text-slate-300 text-sm space-y-2">
                                            <li>• Full keyboard accessibility</li>
                                            <li>• Visible focus indicators</li>
                                            <li>• Logical tab order</li>
                                            <li>• Skip navigation links</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                        <div className="flex items-center gap-3 mb-3">
                                            <MousePointer className="w-5 h-5 text-[#64CEBB]" />
                                            <h3 className="text-lg font-semibold">Interactive Elements</h3>
                                        </div>
                                        <ul className="text-slate-300 text-sm space-y-2">
                                            <li>• Clear link purposes</li>
                                            <li>• Adequate click/tap targets</li>
                                            <li>• Consistent navigation</li>
                                            <li>• Error identification</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Volume2 className="w-5 h-5 text-[#64CEBB]" />
                                            <h3 className="text-lg font-semibold">Assistive Technology</h3>
                                        </div>
                                        <ul className="text-slate-300 text-sm space-y-2">
                                            <li>• Screen reader compatible</li>
                                            <li>• ARIA labels where appropriate</li>
                                            <li>• Semantic HTML structure</li>
                                            <li>• Descriptive headings</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Browser Compatibility */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">Browser Compatibility</h2>
                                <p className="text-slate-300 leading-relaxed">
                                    Our website is designed to be compatible with the following:
                                </p>
                                <ul className="text-slate-300 space-y-2 list-disc list-inside">
                                    <li>Recent versions of Chrome, Firefox, Safari, and Edge</li>
                                    <li>Mobile browsers on iOS and Android devices</li>
                                    <li>Screen readers including JAWS, NVDA, and VoiceOver</li>
                                </ul>
                            </div>

                            {/* Ongoing Efforts */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-[#64CEBB]/10 flex items-center justify-center">
                                        <RefreshCw className="w-5 h-5 text-[#64CEBB]" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Ongoing Efforts</h2>
                                </div>
                                <p className="text-slate-300 leading-relaxed">
                                    We are continuously working to improve the accessibility of our website. Our efforts include:
                                </p>
                                <ul className="text-slate-300 space-y-2 list-disc list-inside">
                                    <li>Regular accessibility audits and testing</li>
                                    <li>Training our team on accessibility best practices</li>
                                    <li>Incorporating user feedback into our improvements</li>
                                    <li>Staying updated on accessibility standards and guidelines</li>
                                </ul>
                            </div>

                            {/* Limitations */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold">Known Limitations</h2>
                                <p className="text-slate-300 leading-relaxed">
                                    While we strive for full accessibility, some content may have limitations:
                                </p>
                                <ul className="text-slate-300 space-y-2 list-disc list-inside">
                                    <li>Some older PDF documents may not be fully accessible</li>
                                    <li>Third-party content or tools may not meet all accessibility standards</li>
                                    <li>Some complex interactive features may require additional accessibility testing</li>
                                </ul>
                                <p className="text-slate-300 leading-relaxed mt-4">
                                    We are working to address these limitations and appreciate your patience.
                                </p>
                            </div>

                            {/* Feedback & Contact */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-[#64CEBB]/10 flex items-center justify-center">
                                        <MessageCircle className="w-5 h-5 text-[#64CEBB]" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Feedback</h2>
                                </div>
                                <p className="text-slate-300 leading-relaxed">
                                    We welcome your feedback on the accessibility of the LUXHT Fix website. If you encounter any accessibility barriers or have suggestions for improvement, please let us know:
                                </p>
                                <div className="bg-[#64CEBB]/10 rounded-xl p-6 border border-[#64CEBB]/20">
                                    <p className="text-white font-semibold mb-2">Contact Us About Accessibility</p>
                                    <p className="text-slate-300">Email: info@luxht.com</p>
                                    <p className="text-slate-300">Phone: (407) 720-7476</p>
                                    <p className="text-slate-400 text-sm mt-3">
                                        We aim to respond to accessibility feedback within 5 business days.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
