import React, { useState } from 'react';
import { MIX_GRADES } from '../data/mockData';
import { CheckCircle2, ArrowRight, Zap, ShieldAlert } from 'lucide-react';

interface MixGradeGuideProps {
  onSelectMixForQuote: (mixCode: string) => void;
}

export const MixGradeGuide: React.FC<MixGradeGuideProps> = ({ onSelectMixForQuote }) => {
  const [selectedGradeCode, setSelectedGradeCode] = useState<string>('C25 / RC25');

  const currentGrade = MIX_GRADES.find(g => g.code === selectedGradeCode) || MIX_GRADES[3];

  return (
    <section id="mix-guide" className="py-20 bg-[#f0f4f8] text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#1d4ed8] block mb-2">
            British Standards Guide
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase">
            Concrete Mix Strengths & Additives
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            Supplying standard strength grades C20 to C40, plus rapid-set accelerators 
            and polypropylene fibre reinforcement mixed directly on-site to your specification.
          </p>
        </div>

        {/* Additive Callout Badges */}
        <div className="max-w-4xl mx-auto mb-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl border border-blue-200 flex items-center space-x-3 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1d4ed8] flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-amber-500 fill-amber-500" />
            </div>
            <div>
              <span className="font-bold text-sm text-slate-900 block">Rapid-Set Accelerators Available</span>
              <span className="text-xs text-slate-600">Speed up curing time in cold weather or for urgent access requirements.</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-blue-200 flex items-center space-x-3 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1d4ed8] flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5 text-[#1d4ed8]" />
            </div>
            <div>
              <span className="font-bold text-sm text-slate-900 block">Fibre-Reinforced Concrete</span>
              <span className="text-xs text-slate-600">Micro-synthetic fibres mixed in to prevent plastic shrinkage cracking and replace mesh.</span>
            </div>
          </div>
        </div>

        {/* Grade Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {MIX_GRADES.map((grade) => {
            const isSelected = grade.code === selectedGradeCode;
            return (
              <button
                key={grade.code}
                type="button"
                onClick={() => setSelectedGradeCode(grade.code)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-black uppercase transition-all ${
                  isSelected
                    ? 'bg-[#1d4ed8] text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-400'
                }`}
              >
                {grade.code}
              </button>
            );
          })}
        </div>

        {/* Selected Mix Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-6">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#1d4ed8]">
                Compressive Strength: {currentGrade.strength}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 uppercase mt-0.5">
                {currentGrade.name} ({currentGrade.code})
              </h3>
            </div>
            <span className="bg-blue-50 text-[#1d4ed8] px-4 py-1.5 rounded-full text-xs font-bold border border-blue-200">
              BS EN 206 Standard
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
            <strong>Recommended Primary Use:</strong> {currentGrade.bestUse}. 
            Calibrated with precise aggregate sizing, certified cement content, and water-cement ratios.
          </p>

          <div className="mb-8">
            <span className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
              Standard Applications:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentGrade.recommendedFor.map((rec, i) => (
                <div key={i} className="flex items-center space-x-2 text-sm text-slate-800 bg-[#f8f9fa] p-3 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#1d4ed8] shrink-0" />
                  <span className="font-medium">{rec}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
            <span className="text-xs text-slate-500 text-center sm:text-left">
              Fibers, rapid-set accelerators, or retarders can be blended directly on-site at your chute.
            </span>
            <button
              onClick={() => onSelectMixForQuote(currentGrade.code)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-sm"
            >
              <span>Request Quote for {currentGrade.code}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
