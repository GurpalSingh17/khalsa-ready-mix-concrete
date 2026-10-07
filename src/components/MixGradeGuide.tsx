import React, { useState } from 'react';
import { MIX_GRADES } from '../data/mockData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface MixGradeGuideProps {
  onSelectMixForQuote: (mixCode: string) => void;
}

export const MixGradeGuide: React.FC<MixGradeGuideProps> = ({ onSelectMixForQuote }) => {
  const [selectedGradeCode, setSelectedGradeCode] = useState<string>('C25 / RC25');

  const currentGrade = MIX_GRADES.find(g => g.code === selectedGradeCode) || MIX_GRADES[3];

  return (
    <section id="mix-guide" className="py-20 bg-[#f2eded] text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#b6272e] block mb-2">
            British Standards Guide
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase">
            Concrete Mix Strengths Explained
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            Unsure which strength grade your building inspector or project requires? 
            Select a grade below to see standard applications.
          </p>
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
                    ? 'bg-[#b6272e] text-white shadow-sm'
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
              <span className="text-xs font-black uppercase tracking-wider text-[#b6272e]">
                Compressive Strength: {currentGrade.strength}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 uppercase mt-0.5">
                {currentGrade.name} ({currentGrade.code})
              </h3>
            </div>
            <span className="bg-[#f2eded] text-slate-700 px-4 py-1.5 rounded-full text-xs font-bold border border-slate-200">
              BS EN 206 Standard
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
            <strong>Recommended Primary Use:</strong> {currentGrade.bestUse}. 
            Calibrated with precise aggregate sizing, cement content, and water-cement ratios.
          </p>

          <div className="mb-8">
            <span className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
              Standard Applications:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentGrade.recommendedFor.map((rec, i) => (
                <div key={i} className="flex items-center space-x-2 text-sm text-slate-800 bg-[#f8f9fa] p-3 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#b6272e] shrink-0" />
                  <span className="font-medium">{rec}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
            <span className="text-xs text-slate-500 text-center sm:text-left">
              Fibers, accelerators, or waterproof admixtures can be added directly on-site.
            </span>
            <button
              onClick={() => onSelectMixForQuote(currentGrade.code)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#b6272e] hover:bg-[#991b1b] text-white font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
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
