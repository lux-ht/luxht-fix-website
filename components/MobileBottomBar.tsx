import { Phone, MessageSquare } from 'lucide-react';

export default function MobileBottomBar() {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-3 py-2.5 flex gap-2.5">
            {/* Call button */}
            <a
                href="tel:4077207476"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white text-sm btn-gradient-primary btn-gradient-shimmer"
                aria-label="Call LUXHT Fix"
            >
                <Phone size={18} />
                Call Now
            </a>

            {/* Text button */}
            <a
                href="sms:4077207476"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm border-2 border-[#584D94] text-[#584D94] bg-white transition-colors active:bg-[#584D94]/5"
                aria-label="Text LUXHT Fix"
            >
                <MessageSquare size={18} />
                Text Us
            </a>
        </div>
    );
}
