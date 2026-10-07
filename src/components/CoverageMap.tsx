import React, { useState } from 'react';
import { AREAS_COVERED } from '../data/mockData';
import { Search, CheckCircle2, ArrowRight } from 'lucide-react';

interface CoverageMapProps {
  onSelectAreaForQuote: (areaName: string) => void;
}

export const CoverageMap: React.FC<CoverageMapProps> = ({ onSelectAreaForQuote }) => {
  const [searchPostcode, setSearchPostcode] = useState('');
  const [checkResult, setCheckResult] = useState<{ covered: boolean; message: string } | null>(null);

  const handleCheckPostcode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchPostcode.trim()) return;

    const query = searchPostcode.trim().toUpperCase();
    const coveredPrefixes = ['WV', 'B', 'WS', 'DY', 'TF', 'CV', 'ST', 'WR'];
    const isCovered = coveredPrefixes.some(p => query.startsWith(p)) || query.length >= 2;

    if (isCovered) {
      setCheckResult({
        covered: true,
        message: `Postcode "${query}" is within our primary rapid delivery zone. Same-day & next-day slots available.`
      });
    } else {
      setCheckResult({
        covered: true,
        message: `We can deliver to "${query}" on scheduled routes. Call dispatch for a confirmed arrival slot.`
      });
    }
  };

  return (
    <section id="areas" className="py-20 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#b6272e] block mb-2">
            Local Delivery Network
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase">
            Areas We Cover
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            Supplying domestic and commercial concrete across the West Midlands, 
            Staffordshire, Shropshire, and Warwickshire.
          </p>
        </div>

        {/* Postcode Search */}
        <div className="max-w-xl mx-auto mb-14 bg-[#f8f9fa] border border-slate-200 rounded-2xl p-6 sm:p-8">
          <h3 className="font-heading text-lg font-black uppercase text-slate-900 mb-1 text-center">
            Check Your Delivery Postcode
          </h3>
          <p className="text-xs text-slate-500 text-center mb-4">
            Enter your UK postcode (e.g. WV1, B1, DY3, WS2) to verify immediate dispatch.
          </p>

          <form onSubmit={handleCheckPostcode} className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Enter postcode..."
                value={searchPostcode}
                onChange={(e) => setSearchPostcode(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg pl-10 pr-3 py-3 text-sm text-slate-900 uppercase font-bold focus:outline-none focus:border-[#b6272e]"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-[#b6272e] hover:bg-[#991b1b] text-white font-black text-xs uppercase tracking-wider transition-colors shrink-0"
            >
              Check Delivery
            </button>
          </form>

          {checkResult && (
            <div className="mt-4 p-4 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs sm:text-sm flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium">{checkResult.message}</p>
                <button
                  onClick={() => onSelectAreaForQuote(searchPostcode)}
                  className="mt-1 text-xs font-bold text-[#b6272e] hover:underline flex items-center"
                >
                  <span>Book delivery for this area</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Coverage Towns Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {AREAS_COVERED.map((area, idx) => (
            <div
              key={idx}
              className="bg-[#f8f9fa] border border-slate-200 hover:border-[#b6272e] p-4 rounded-xl transition-all flex flex-col justify-between"
            >
              <div>
                <h4 className="font-heading text-base font-black text-slate-900 uppercase">
                  {area.name}
                </h4>
                <span className="text-xs text-slate-500 block mt-0.5">
                  {area.time}
                </span>
              </div>

              <button
                onClick={() => onSelectAreaForQuote(area.name)}
                className="mt-3 pt-2 border-t border-slate-200 text-[11px] font-bold text-[#b6272e] hover:text-[#991b1b] transition-colors flex items-center justify-between"
              >
                <span>Request Delivery</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
