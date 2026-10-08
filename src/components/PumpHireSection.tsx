import React from 'react';
import { Check, ArrowRight, ShieldCheck, Zap, Phone } from 'lucide-react';
import { businessConfig } from '../config/businessInfo';

interface PumpHireSectionProps {
  onSelectPumpForQuote: (pumpType: string) => void;
}

export const PumpHireSection: React.FC<PumpHireSectionProps> = ({ onSelectPumpForQuote }) => {
  return (
    <section id="pumping" className="py-20 bg-[#f0f4f8] text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-[#1d4ed8] block mb-2">
            Difficult Access Solved
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase">
            Ground Line Concrete Pump Hire
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            Got awkward access, a rear garden, or a long distance from the road? 
            Our <strong>Ground Line Pump system pumps concrete up to 80m+</strong> straight into your shuttering, footings, or slab.
          </p>
        </div>

        {/* Highlighted Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Card (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#1d4ed8] block">
                    High-Performance Flexible Hose Pipeline
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 uppercase mt-1">
                    Ground Line Pumping Up To 80 Metres+
                  </h3>
                </div>
                <span className="bg-blue-50 text-[#1d4ed8] text-xs font-black px-4 py-1.5 rounded-full border border-blue-200">
                  Distance: Up to 80m+
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Instead of tiring wheelbarrow runs that take hours and tear up driveways, our flexible line pump pipes 
                can navigate standard 80cm doorways, tight side alleys, garden gates, and steps. Concrete is poured 
                smoothly at up to <strong>1 cubic metre per minute</strong> directly into your foundations or floor.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm">
                    <Check className="w-4 h-4 text-[#1d4ed8] shrink-0" />
                    <span>Zero Barrow Fatigue</span>
                  </div>
                  <p className="text-xs text-slate-600">Saves massive physical labour. Complete pours in a fraction of the time.</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm">
                    <Check className="w-4 h-4 text-[#1d4ed8] shrink-0" />
                    <span>No Property Damage</span>
                  </div>
                  <p className="text-xs text-slate-600">Hoses protect lawns, gravel drives, flowerbeds, and patios from rutting.</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm">
                    <Check className="w-4 h-4 text-[#1d4ed8] shrink-0" />
                    <span>Experienced Operator</span>
                  </div>
                  <p className="text-xs text-slate-600">Dedicated pump technician sets up, controls line pressure, and cleans up.</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm">
                    <Check className="w-4 h-4 text-[#1d4ed8] shrink-0" />
                    <span>Consistent Fresh Mix</span>
                  </div>
                  <p className="text-xs text-slate-600">Rapid line pouring prevents premature setting or cold joint defects.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200">
              <button
                onClick={() => onSelectPumpForQuote('Ground Line Pump Hire (up to 80m+)')}
                className="py-3.5 px-8 rounded-full bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-sm"
              >
                <span>Add Ground Line Pump To Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${businessConfig.contact.primaryPhone}`}
                className="py-3.5 px-6 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold text-xs uppercase tracking-wider transition-all flex items-center space-x-2"
              >
                <Phone className="w-4 h-4 text-[#1d4ed8]" />
                <span>Call Dispatch: {businessConfig.contact.primaryPhoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Side Info Box (4 cols) */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#1e3a8a] to-[#1d4ed8] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-amber-300" />
              </div>

              <h4 className="font-heading text-xl sm:text-2xl font-black uppercase mb-3">
                How Our Pump Hire Works
              </h4>

              <div className="space-y-4 text-xs sm:text-sm text-blue-100 leading-relaxed">
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 rounded-full bg-white text-[#1d4ed8] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <p>Our pump and volumetric truck arrive at your site in coordinated tandem.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 rounded-full bg-white text-[#1d4ed8] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <p>Our operator lays the pipeline through your gate, alleyway, or hallway in under 15 minutes.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 rounded-full bg-white text-[#1d4ed8] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <p>Concrete is mixed fresh on-site and pumped directly into your formwork continuously.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 rounded-full bg-white text-[#1d4ed8] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                  <p>We wash out into our dedicated washdown bags and pack away neatly.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20 flex items-center space-x-3">
              <ShieldCheck className="w-6 h-6 text-emerald-300 shrink-0" />
              <p className="text-xs text-blue-100">
                Operating Mon-Sat 6:00 AM to 6:00 PM across all West Midlands towns.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
