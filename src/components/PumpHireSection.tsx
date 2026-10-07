import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface PumpHireSectionProps {
  onSelectPumpForQuote: (pumpType: string) => void;
}

export const PumpHireSection: React.FC<PumpHireSectionProps> = ({ onSelectPumpForQuote }) => {
  return (
    <section id="pumping" className="py-20 bg-[#f2eded] text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#b6272e] block mb-2">
            Difficult Access Solved
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase">
            Concrete Pumping Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            If your site is in a back garden, down a narrow alleyway, or behind high walls, 
            our concrete pumps deliver mix directly into position without manual wheelbarrowing.
          </p>
        </div>

        {/* 2 Pump Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Ground Line Pump */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#b6272e] block">
                    Flexible Hose Pipeline
                  </span>
                  <h3 className="font-heading text-2xl font-black text-slate-900 uppercase mt-0.5">
                    Ground Line Concrete Pump
                  </h3>
                </div>
                <span className="bg-[#f2eded] text-slate-800 text-xs font-black px-3 py-1 rounded-full border border-slate-300">
                  Reach: Up to 80m+
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Flexible rubber hoses laid along the ground, through standard front doors, down garden alleys, 
                and around obstacles. Pours up to 1m³ of concrete every single minute.
              </p>

              <ul className="space-y-3 mb-6 border-t border-b border-slate-200 py-4 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#b6272e] shrink-0" />
                  <span><strong>Zero wheelbarrow labour</strong> — saves hours of exhausting work</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#b6272e] shrink-0" />
                  <span>Passes through 80cm standard residential doorways without mess</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#b6272e] shrink-0" />
                  <span>No damage to existing lawns, gravel drives, or flowerbeds</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#b6272e] shrink-0" />
                  <span>Trained operator included to manage pipes and flow speed</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onSelectPumpForQuote('Ground Line Pump Hire')}
              className="w-full py-3.5 px-6 rounded-full bg-[#b6272e] hover:bg-[#991b1b] text-white font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
            >
              <span>Book Ground Line Pump</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Boom Pump */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#b6272e] block">
                    Hydraulic Articulated Arm
                  </span>
                  <h3 className="font-heading text-2xl font-black text-slate-900 uppercase mt-0.5">
                    Boom Concrete Pump
                  </h3>
                </div>
                <span className="bg-[#f2eded] text-slate-800 text-xs font-black px-3 py-1 rounded-full border border-slate-300">
                  Reach: Over Rooftops
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Hydraulic robotic arms capable of extending over houses, boundary walls, railway embankments, 
                and into multi-storey commercial structures.
              </p>

              <ul className="space-y-3 mb-6 border-t border-b border-slate-200 py-4 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#b6272e] shrink-0" />
                  <span>Reaches directly over domestic roofs and tall barriers</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#b6272e] shrink-0" />
                  <span>High-speed commercial discharge for large slab pours</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#b6272e] shrink-0" />
                  <span>Ideal for upper-floor concrete decks and commercial columns</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-[#b6272e] shrink-0" />
                  <span>Experienced CPCS qualified operator with remote control precision</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onSelectPumpForQuote('Boom Pump Hire')}
              className="w-full py-3.5 px-6 rounded-full bg-[#111827] hover:bg-[#1f2937] text-white font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
            >
              <span>Book Boom Pump</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
