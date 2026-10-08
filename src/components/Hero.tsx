import React from 'react';
import { Mail, MapPin, ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import { businessConfig } from '../config/businessInfo';

interface HeroProps {
  onOpenQuote: () => void;
  onScrollToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onScrollToCalculator }) => {
  return (
    <section className="bg-[#f0f4f8] w-full">
      {/* Split Hero Layout */}
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row items-stretch justify-center">
        
        {/* Left Box: Royal Blue Rounded Card */}
        <div className="w-full lg:w-[calc(50%-1rem)] 3xl:w-[calc(43%-2rem)] bg-gradient-to-b from-[#1d4ed8] to-[#1e3a8a] rounded-br-[32px] px-8 py-14 sm:py-20 lg:p-14 3xl:p-24 text-white flex flex-col justify-center">
          
          {/* Top Speed Tag Pill */}
          <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-blue-100 w-fit mb-6 border border-white/20">
            <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
            <span>Guaranteed Same-Day & Next-Day Dispatch</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl 3xl:text-6xl font-black leading-[1.05] border-b-[4px] border-white/40 pb-6 mb-6">
            Speedy concrete mixed for your needs
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl font-light text-blue-50 leading-relaxed mb-4">
            Volumetric mix-on-site concrete delivered straight to your door or site. Pay strictly for what you pour — zero waste, zero risk!
          </p>

          {/* Value points */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-blue-100 mb-8">
            <span className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Pay Only For What You Use</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Ground Line Pumps Up to 80m+</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Mon - Sat 6am to 6pm</span>
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-[#1d4ed8] rounded-full px-7 py-3.5 font-black text-sm uppercase tracking-wider transition-all duration-200 shadow-md"
            >
              <Mail className="w-4 h-4" />
              <span>Get A Free Quote</span>
            </button>

            <a
              href="#areas"
              className="inline-flex items-center space-x-2 bg-white text-[#1d4ed8] hover:bg-blue-50 rounded-full px-7 py-3.5 font-black text-sm uppercase tracking-wider shadow-sm transition-all duration-200"
            >
              <MapPin className="w-4 h-4" />
              <span>Areas We Cover</span>
            </a>
          </div>

        </div>

        {/* Right Box: Real Concrete Truck Image with Top-Right Calculator Badge */}
        <div className="w-full lg:w-1/2 3xl:w-[57%] rounded-bl-[32px] overflow-hidden relative min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] bg-slate-800">
          
          <img
            src="/images/hero-truck.png"
            alt="Khalsa Ready Mix Concrete Volumetric Mixer Truck"
            className="w-full h-full object-cover object-center"
          />

          {/* Floating Concrete Calculator Badge in Top-Right Corner */}
          <button
            onClick={onScrollToCalculator}
            className="absolute top-0 right-0 z-20 bg-white hover:bg-blue-50 transition-all rounded-bl-2xl px-5 sm:px-7 py-3.5 sm:py-4 shadow-lg flex items-center space-x-3 group border-l border-b border-blue-100"
          >
            <img
              src="/images/calculator.svg"
              alt="Concrete Calculator"
              className="w-9 sm:w-11 h-auto shrink-0 group-hover:scale-105 transition-transform"
            />
            <div className="text-left font-heading">
              <span className="block text-[#1d4ed8] font-black text-base sm:text-xl leading-none uppercase">
                Concrete
              </span>
              <span className="block text-[#1d4ed8] font-black text-base sm:text-xl leading-none uppercase mt-0.5">
                Calculator
              </span>
            </div>
          </button>

          {/* Bottom Trust Overlay Pill */}
          <div className="absolute bottom-4 left-4 z-20 bg-slate-900/85 backdrop-blur-md text-white text-xs px-4 py-2 rounded-xl flex items-center space-x-2 border border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold">Dispatching Daily from {businessConfig.contact.depotAddress.line1}, {businessConfig.contact.depotAddress.town}</span>
          </div>

        </div>

      </div>

      {/* 4 Service Bucket Cards Below Hero */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          
          {/* Card 1: Domestic Concrete */}
          <a
            href="#services"
            className="group relative block rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-slate-800 h-64 sm:h-72"
          >
            <img
              src="/images/domestic-card.webp"
              alt="Domestic Concrete"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-white p-5 flex items-center justify-between z-10 border-t border-slate-100">
              <span className="font-heading text-lg sm:text-xl font-black text-[#1d4ed8] uppercase">
                Domestic Concrete
              </span>
              <span className="w-7 h-7 rounded bg-blue-50 flex items-center justify-center text-[#1d4ed8] group-hover:bg-[#1d4ed8] group-hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </a>

          {/* Card 2: Commercial Concrete */}
          <a
            href="#services"
            className="group relative block rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-slate-800 h-64 sm:h-72"
          >
            <img
              src="/images/commercial-card.webp"
              alt="Commercial Concrete & Civil Groundworks"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-white p-5 flex items-center justify-between z-10 border-t border-slate-100">
              <span className="font-heading text-lg sm:text-xl font-black text-[#1d4ed8] uppercase">
                Commercial & Groundworks
              </span>
              <span className="w-7 h-7 rounded bg-blue-50 flex items-center justify-center text-[#1d4ed8] group-hover:bg-[#1d4ed8] group-hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </a>

          {/* Card 3: Ground Line Concrete Pumping */}
          <a
            href="#pumping"
            className="group relative block rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-slate-800 h-64 sm:h-72"
          >
            <img
              src="/images/pumping-card.webp"
              alt="Ground Line Concrete Pumping Up to 80m"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-white p-5 flex items-center justify-between z-10 border-t border-slate-100">
              <span className="font-heading text-lg sm:text-xl font-black text-[#1d4ed8] uppercase">
                Ground Line Pumps (80m+)
              </span>
              <span className="w-7 h-7 rounded bg-blue-50 flex items-center justify-center text-[#1d4ed8] group-hover:bg-[#1d4ed8] group-hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </a>

          {/* Card 4: Floor Screed */}
          <a
            href="#services"
            className="group relative block rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-slate-800 h-64 sm:h-72"
          >
            <img
              src="/images/screed-card.webp"
              alt="Floor Screed & Flowing Screed"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-white p-5 flex items-center justify-between z-10 border-t border-slate-100">
              <span className="font-heading text-lg sm:text-xl font-black text-[#1d4ed8] uppercase">
                Floor Screed
              </span>
              <span className="w-7 h-7 rounded bg-blue-50 flex items-center justify-center text-[#1d4ed8] group-hover:bg-[#1d4ed8] group-hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};
