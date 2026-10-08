import React from 'react';
import { SERVICES } from '../data/mockData';
import { ArrowRight, Check, Phone } from 'lucide-react';
import { businessConfig } from '../config/businessInfo';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  return (
    <section id="services" className="py-20 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#1d4ed8] block mb-2">
            Professional Concrete Supply
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase">
            Our Concrete Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            Supplying Wolverhampton, Birmingham, Dudley, Walsall, and the wider West Midlands 
            with precision volumetric mix-on-site concrete, floor screed, and ground line pump hire.
          </p>
        </div>

        {/* 3x2 Clean Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-[#f8f9fa] border border-slate-200 rounded-2xl overflow-hidden hover:border-[#1d4ed8] transition-all duration-300 flex flex-col group shadow-sm hover:shadow-md"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-slate-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {service.badge && (
                  <span className="absolute top-4 right-4 bg-[#1d4ed8] text-white font-black text-xs uppercase px-3 py-1 rounded-full shadow">
                    {service.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-heading text-xl font-black uppercase text-slate-900 group-hover:text-[#1d4ed8] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 border-t border-slate-200 pt-4 text-xs text-slate-700">
                  {service.benefits.slice(0, 3).map((b, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-[#1d4ed8] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Button */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectServiceForQuote(service.title)}
                    className="w-full py-3 px-4 rounded-full bg-white hover:bg-[#1d4ed8] text-[#1d4ed8] hover:text-white border border-[#1d4ed8] font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-sm"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#f0f4f8] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-200">
          <div>
            <h4 className="font-heading text-xl sm:text-2xl font-black text-slate-900 uppercase">
              Need Advice On Concrete Quantities or Mix Strengths?
            </h4>
            <p className="text-sm text-slate-600 mt-1">
              Speak directly with our local volumetric dispatch specialists at {businessConfig.contact.depotAddress.town}.
            </p>
          </div>
          <a
            href={`tel:${businessConfig.contact.primaryPhone}`}
            className="shrink-0 inline-flex items-center space-x-2 bg-[#1d4ed8] hover:bg-[#1e40af] text-white px-7 py-3.5 rounded-full font-black text-sm uppercase tracking-wider transition-all shadow-md"
          >
            <Phone className="w-4 h-4" />
            <span>Call {businessConfig.contact.primaryPhoneDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
