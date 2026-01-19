import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { Phone, ChevronDown, HelpCircle, DollarSign, Calendar, Shield, Mail } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Frequently Asked Questions | LUXHT Fix Orlando',
    description: 'Common questions about pricing, scheduling, and our services. Learn how LUXHT Fix provides transparent, vital home repairs in Orlando.',
};

export default function FAQPage() {
    const faqs = [
        {
            category: "General",
            icon: HelpCircle,
            items: [
                { q: "Are you licensed and insured?", a: "Yes, LUXHT Fix is fully licensed and insured in the state of Florida. We carry liability insurance for your protection and ours." },
                { q: "What areas do you serve?", a: "We serve the greater Orlando area including Winter Park, Maitland, Altamonte Springs, Lake Nona, Dr. Phillips, Windermere, and surrounding communities." },
                { q: "Do you offer free estimates?", a: "Yes! For most standard jobs, we can provide a free estimate over the phone or via message if you send us photos. For larger renovations, we offer in-home consultations." }
            ]
        },
        {
            category: "Services & Scheduling",
            icon: Calendar,
            items: [
                { q: "How quickly can I get an appointment?", a: "We pride ourselves on 'Same-Week Service' for most repairs. Often, we can fit small jobs in within 24-48 hours." },
                { q: "Do I need to supply the materials?", a: "It depends. For repairs like drywall, we bring everything. For installations like light fixtures or faucets, you typically buy the item you want, and we install it. We can confirm this during booking." },
                { q: "Do you clean up after the job?", a: "Absolutely. We treat your home with respect, which means leaving the work area cleaner than we found it." }
            ]
        },
        {
            category: "Pricing & Payment",
            icon: DollarSign,
            items: [
                { q: "How do you charge?", a: "We offer flat-rate pricing for many common tasks (like TV mounting or faucet installation) so you know exactly what to pay. larger projects are estimated by the job, not just by the hour." },
                { q: "What forms of payment do you accept?", a: "We accept all major credit cards, debit cards, cash, and digital payments like Venmo or Zelle for your convenience." },
                { q: "Is there a warranty on your work?", a: "Yes, we stand behind our craftsmanship. We offer a 1-year workmanship warranty on all installations and repairs." }
            ]
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.flatMap(cat => cat.items.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
            }
        })))
    };

    return (
        <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Navbar />

            {/* Hero */}
            <header className="pt-32 pb-20 bg-gradient-to-br from-[#584D94] via-[#7B6FCC] to-[#453A75] text-white text-center px-4">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
                        Got questions? We've got answers. Here is everything you need to know about working with LUXHT Fix.
                    </p>
                </div>
            </header>

            {/* FAQ Sections */}
            <div className="container mx-auto px-4 py-20 max-w-4xl space-y-12">
                {faqs.map((section, idx) => (
                    <section key={idx}>
                        <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-2">
                            <div className="text-[#584D94]">
                                <section.icon size={28} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800">{section.category}</h2>
                        </div>

                        <div className="space-y-4">
                            {section.items.map((item, i) => (
                                <details key={i} className="group bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden cursor-pointer open:ring-1 open:ring-[#584D94]/20 open:shadow-md transition-all">
                                    <summary className="flex justify-between items-center p-6 font-bold text-slate-700 list-none select-none hover:bg-slate-50 transition-colors">
                                        {item.q}
                                        <span className="text-[#64CEBB] transform transition-transform duration-200 group-open:rotate-180">
                                            <ChevronDown size={20} />
                                        </span>
                                    </summary>
                                    <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 mt-2 pt-4">
                                        {item.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            {/* Still Have Questions CTA */}
            <section className="py-20 bg-white px-4 border-t border-slate-100">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-[#584D94] mb-6">Still Have Questions?</h2>
                    <p className="text-slate-600 mb-8">
                        We're happy to help. Give us a call or send a message and we'll get back to you quickly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:4077207476" className="bg-[#584D94] text-white font-bold py-4 px-8 rounded-full hover:shadow-lg transition-all flex items-center justify-center gap-2">
                            <Phone size={20} /> Call (407) 720-7476
                        </a>
                        <Link href="/#contact" className="bg-slate-100 text-slate-800 font-bold py-4 px-8 rounded-full hover:bg-slate-200 transition-all border border-slate-200 flex items-center gap-2">
                            <Mail size={20} /> Contact Us
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
