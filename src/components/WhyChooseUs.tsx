import React from 'react';
import { Check, X, Award, ShieldCheck, Clock, Coins } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const comparison = [
    {
      feature: 'Pay ONLY for what you use (No surplus waste)',
      khalsa: true,
      traditional: false,
      note: 'Our truck stops mixing the instant your forms are full. No leftover charges.'
    },
    {
      feature: 'Ability to alter mix strength or slump on-site',
      khalsa: true,
      traditional: false,
      note: 'Change from C20 to C25 or adjust water content right at the chute.'
    },
    {
      feature: 'Short-load penalty fees charged?',
      khalsa: 'NO (Never charged)',
      traditional: 'YES (£80 - £150)',
      note: 'Small deliveries from 0.5m³ are always welcome.'
    },
    {
      feature: 'Same-day and 24/7 out-of-hours pours',
      khalsa: true,
      traditional: false,
      note: 'Flexible dispatch to match your groundwork schedule.'
    },
    {
      feature: 'Freshly mixed raw materials on arrival',
      khalsa: true,
      traditional: false,
      note: 'No risk of premature curing in traffic transit.'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#b6272e] block mb-2">
            The Khalsa Ready Mix Concrete Policy
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase">
            Only Pay For What You Use
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            See how our mobile volumetric batching saves you money, time, and hassle 
            compared with rigid drum batching plants.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-[#f2eded] text-[#b6272e] flex items-center justify-center mx-auto mb-4">
              <Coins className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-black text-slate-900 uppercase mb-2">
              Zero Waste Guarantee
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Never pay for concrete you don't pour. No disposal charges, no over-ordering guesswork.
            </p>
          </div>

          <div className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-[#f2eded] text-[#b6272e] flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-black text-slate-900 uppercase mb-2">
              Punctual Delivery
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Guaranteed morning, afternoon, or out-of-hours time slots so your trades aren't waiting around.
            </p>
          </div>

          <div className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-[#f2eded] text-[#b6272e] flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-black text-slate-900 uppercase mb-2">
              BSI Certified Quality
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every mix is calibrated to strict British Standards (BS EN 206) with cube testing available.
            </p>
          </div>

          <div className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-[#f2eded] text-[#b6272e] flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-black text-slate-900 uppercase mb-2">
              Free Barrow Time
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Generous discharge time included with polite, helpful drivers who support your project.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-[#f8f9fa] border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider font-heading">
                  <th className="py-4 px-6 font-bold">Benefit / Guarantee</th>
                  <th className="py-4 px-6 font-black text-white bg-[#b6272e] w-1/3 text-center">
                    Khalsa Ready Mix Concrete (Volumetric)
                  </th>
                  <th className="py-4 px-6 font-bold text-slate-300 w-1/3 text-center">
                    Traditional Drum Mixers
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-100 transition-colors">
                    <td className="py-4 px-6 font-medium text-slate-800">
                      <div className="font-bold">{row.feature}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{row.note}</div>
                    </td>
                    <td className="py-4 px-6 bg-red-50 text-center font-bold text-[#b6272e]">
                      {typeof row.khalsa === 'boolean' ? (
                        <span className="inline-flex items-center text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full text-xs font-black">
                          <Check className="w-4 h-4 mr-1 stroke-[3]" /> YES
                        </span>
                      ) : (
                        <span className="text-emerald-700 font-black">{row.khalsa}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center text-slate-500 font-medium">
                      {typeof row.traditional === 'boolean' ? (
                        <span className="inline-flex items-center text-rose-700 bg-rose-100 px-3 py-1 rounded-full text-xs font-bold">
                          <X className="w-4 h-4 mr-1 stroke-[3]" /> NO
                        </span>
                      ) : (
                        <span className="text-rose-700 font-bold">{row.traditional}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
