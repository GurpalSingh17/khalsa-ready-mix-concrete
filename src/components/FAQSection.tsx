import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { ChevronDown, ChevronUp, Phone } from 'lucide-react';
import { businessConfig } from '../config/businessInfo';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#f0f4f8] text-slate-800 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#1d4ed8] block mb-2">
            Any Questions?
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Find quick answers to common questions about our volumetric concrete delivery, pricing, and ground line pump hire.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-[#1d4ed8] text-white' : 'bg-slate-100 text-slate-600'}`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-left">
            <h4 className="font-bold text-slate-900 text-base">Have a question not listed here?</h4>
            <p className="text-xs text-slate-500 mt-0.5">Call our experienced dispatch team in Wolverhampton today.</p>
          </div>
          <a
            href={`tel:${businessConfig.contact.primaryPhone}`}
            className="shrink-0 inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-bold text-xs uppercase shadow transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>{businessConfig.contact.primaryPhoneDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
