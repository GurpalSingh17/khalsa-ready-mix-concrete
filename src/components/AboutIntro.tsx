import React from 'react';
import { Mail, Calculator, MapPin, CheckCircle2 } from 'lucide-react';
import { businessConfig } from '../config/businessInfo';

interface AboutIntroProps {
  onOpenQuote: () => void;
  onScrollToCalculator: () => void;
}

export const AboutIntro: React.FC<AboutIntroProps> = ({ onOpenQuote, onScrollToCalculator }) => {
  return (
    <section id="about" className="py-20 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#1d4ed8] text-xs font-black uppercase tracking-widest border border-blue-200">
            <MapPin className="w-3.5 h-3.5" />
            <span>Operating from {businessConfig.contact.depotAddress.full}</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            Independent Concrete Suppliers in Wolverhampton & West Midlands
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Welcome to <strong>{businessConfig.company.name}</strong>. Operating from our central yard on Monmore Road in Wolverhampton, 
            we provide rapid volumetric concrete mixed fresh at your kerbside or construction site across Wolverhampton, Birmingham, 
            Dudley, Walsall, West Bromwich, Cannock, Stafford, and Telford.
          </p>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Because our mobile batching units mix fresh on-site, <strong>you only pay for what you pour</strong>. 
            There are never any disposal fees, no penalty for leftover concrete, and no risk of under-ordering. 
            Need to reach awkward gardens, rear foundations, or interior floors? Our <strong>Ground Line concrete pumps</strong> extend 
            up to 80m+ through standard doorways and side alleys to eliminate wheelbarrows entirely.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="flex items-center space-x-2 text-[#1d4ed8] font-bold text-sm mb-1">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Zero Waste Policy</span>
              </div>
              <p className="text-xs text-slate-600">Pay strictly for what comes out of the chute. Never pay for wasted surplus mix.</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="flex items-center space-x-2 text-[#1d4ed8] font-bold text-sm mb-1">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Rapid Dispatch</span>
              </div>
              <p className="text-xs text-slate-600">Same-day and next-day scheduled slots. Operating Mon-Sat 6am to 6pm with out-of-hours pours.</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="flex items-center space-x-2 text-[#1d4ed8] font-bold text-sm mb-1">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Ground Line Pumping</span>
              </div>
              <p className="text-xs text-slate-600">Flexible 80m+ pipeline setup with experienced operator for zero barrow hassle.</p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200">
            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center space-x-2 bg-[#1d4ed8] hover:bg-[#1e40af] text-white rounded-full px-8 py-3.5 font-black text-sm uppercase tracking-wider shadow-md transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Get A Free Quote</span>
              </button>

              <button
                onClick={onScrollToCalculator}
                className="inline-flex items-center space-x-2 border-2 border-[#1d4ed8] text-[#1d4ed8] hover:bg-[#1d4ed8] hover:text-white rounded-full px-8 py-3.5 font-black text-sm uppercase tracking-wider transition-all"
              >
                <Calculator className="w-4 h-4" />
                <span>Concrete Calculator</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
