import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, ShieldCheck, Award, Building, HardHat } from 'lucide-react';

export const ReviewsAndTrust: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#f2eded] text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#b6272e] block mb-2">
              Customer Reviews
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase">
              What Our Customers Say
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-xl">
              Honest feedback from local builders, groundworkers, and domestic homeowners.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center space-x-4 shadow-sm shrink-0">
            <div className="text-center border-r border-slate-200 pr-4">
              <span className="font-heading text-3xl font-black text-slate-900 block">4.9</span>
              <div className="flex items-center space-x-0.5 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="text-xs text-slate-600">
              <span className="font-bold text-slate-900 block">350+ Google Reviews</span>
              <span>West Midlands Concrete Supplier</span>
            </div>
          </div>
        </div>

        {/* 2x2 Clean Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs text-slate-400 ml-2 font-medium">{item.date}</span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-6">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-heading text-base font-black text-slate-900 uppercase">
                    {item.name}
                  </h4>
                  <span className="text-xs text-slate-500">
                    {item.role} • <strong className="text-slate-700">{item.location}</strong>
                  </span>
                </div>

                <span className="text-[11px] font-bold text-[#b6272e] bg-red-50 px-2.5 py-1 rounded">
                  {item.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Accreditation Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center space-x-3">
            <Award className="w-6 h-6 text-[#b6272e] shrink-0" />
            <div>
              <div className="text-xs font-black text-slate-900 uppercase">BSI Certified</div>
              <div className="text-[11px] text-slate-500">BS EN 206 Standard</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center space-x-3">
            <HardHat className="w-6 h-6 text-[#b6272e] shrink-0" />
            <div>
              <div className="text-xs font-black text-slate-900 uppercase">CPCS Qualified</div>
              <div className="text-[11px] text-slate-500">Pump Operators</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center space-x-3">
            <Building className="w-6 h-6 text-[#b6272e] shrink-0" />
            <div>
              <div className="text-xs font-black text-slate-900 uppercase">Constructionline</div>
              <div className="text-[11px] text-slate-500">Vetted Supplier</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center space-x-3">
            <ShieldCheck className="w-6 h-6 text-[#b6272e] shrink-0" />
            <div>
              <div className="text-xs font-black text-slate-900 uppercase">ISO 9001:2015</div>
              <div className="text-[11px] text-slate-500">Quality Management</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
