import React from 'react';
import { Phone, Mail, Calculator } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenQuote: () => void;
  onScrollToCalculator: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenQuote, onScrollToCalculator }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-300 p-2.5 flex items-center gap-2 xl:hidden shadow-lg">
      <a
        href="tel:08081607324"
        className="flex-1 py-3 px-3 rounded-full bg-[#b6272e] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow"
      >
        <Phone className="w-3.5 h-3.5 text-white" />
        <span>0808 160 7324</span>
      </a>

      <button
        type="button"
        onClick={onScrollToCalculator}
        className="p-3 rounded-full bg-[#f2eded] text-[#b6272e] font-bold"
        title="Calculator"
      >
        <Calculator className="w-4 h-4" />
      </button>

      <button
        type="button"
        onClick={onOpenQuote}
        className="flex-1 py-3 px-3 rounded-full bg-[#111827] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow"
      >
        <Mail className="w-3.5 h-3.5 text-white" />
        <span>Free Quote</span>
      </button>
    </div>
  );
};
