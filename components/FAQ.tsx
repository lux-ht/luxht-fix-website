'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import clsx from 'clsx';

const faqs = [
    {
        question: "Can You Repair Drywall and Match Texture?",
        answer: "Yes. Texture matching is a critical part of professional drywall repair. We carefully blend the repaired area with the surrounding wall so the patch does not stand out after painting."
    },
    {
        question: "Do You Offer Same Week Drywall Repair in Orlando?",
        answer: "In most cases, yes. We prioritize drywall repair jobs that require fast turnaround and will schedule you as quickly as possible based on availability."
    },
    {
        question: "Do You Only Repair Drywall or Offer Other Services?",
        answer: "Drywall repair is our primary specialty. After drywall work is complete, we also assist homeowners with additional home repair services if needed, including trim work, fixture replacement, TV mounting, and more."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className={clsx(
                        "glass-panel rounded-xl overflow-hidden transition-colors sm:hover:bg-white/10",
                        openIndex === index ? "bg-white/10 border-white/20" : ""
                    )}
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="flex items-center justify-between w-full p-6 text-left"
                    >
                        <span className="font-semibold text-lg">{faq.question}</span>
                        <span className="ml-4 text-blue-400">
                            {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                        </span>
                    </button>

                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                                <div className="px-6 pb-6 text-gray-300">
                                    {faq.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
