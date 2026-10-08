import React from 'react';
import { Phone, Mail, Calculator, MessageCircle } from 'lucide-react';
import { businessConfig } from '../config/businessInfo';

interface MobileStickyBarProps {
  onOpenQuote: () => void;
  onScrollToCalculator: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenQuote, onScrollToCalculator }) => {
  const whatsappUrl = `https://wa.me/${businessConfig.whatsapp.number}?text=${encodeURIComponent(businessConfig.whatsapp.defaultMessage)}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 p-2 sm:p-2.5 flex items-center gap-2 xl:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
      {/* Click to Call */}
      <a
        href={`tel:${businessConfig.contact.primaryPhone}`}
        className="flex-1 py-3 px-2 rounded-full bg-[#1d4ed8] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow"
      >
        <Phone className="w-3.5 h-3.5 text-white" />
        <span className="truncate">Call {businessConfig.contact.primaryPhoneDisplay}</span>
      </a>

      {/* WhatsApp Button */}
      {businessConfig.whatsapp.enabled && (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-emerald-600 text-white shadow flex items-center justify-center"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
      )}

      {/* Calculator Shortcut */}
      <button
        type="button"
        onClick={onScrollToCalculator}
        className="p-3 rounded-full bg-blue-50 text-[#1d4ed8] border border-blue-200"
        title="Concrete Calculator"
      >
        <Calculator className="w-4 h-4" />
      </button>

      {/* Free Quote Button */}
      <button
        type="button"
        onClick={onOpenQuote}
        className="flex-1 py-3 px-2 rounded-full bg-slate-900 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow"
      >
        <Mail className="w-3.5 h-3.5 text-white" />
        <span>Free Quote</span>
      </button>
    </div>
  );
};
