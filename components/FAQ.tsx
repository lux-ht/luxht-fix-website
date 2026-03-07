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
    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="glass-panel rounded-xl overflow-hidden bg-white/10 border-white/20"
                >
                    <div className="p-6">
                        <span className="font-semibold text-lg block mb-3">{faq.question}</span>
                        <div className="text-gray-300">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
