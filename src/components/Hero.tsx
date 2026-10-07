import React from 'react';
import { Mail, MapPin, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
  onScrollToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onScrollToCalculator }) => {
  return (
    <section className="bg-[#f2eded] w-full">
      {/* Split Hero Layout */}
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row items-stretch justify-center">
        
        {/* Left Box: Crimson Red Rounded Card */}
        <div className="w-full lg:w-[calc(50%-1rem)] 3xl:w-[calc(43%-2rem)] bg-gradient-to-b from-[#b6272e] to-[#db3746] rounded-br-[32px] px-8 py-14 sm:py-20 lg:p-14 3xl:p-24 text-white flex flex-col justify-center">
          
          {/* Main Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl 3xl:text-6xl font-black leading-[1.05] border-b-[4px] border-white/50 pb-6 mb-6">
            Speedy concrete mixed for your needs
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl font-light text-white/95 leading-relaxed mb-8">
            Delivering durable concrete solutions for every project
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-[#b6272e] rounded-full px-7 py-3.5 font-black text-sm uppercase tracking-wider transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              <span>Get A Free Quote</span>
            </button>

            <a
              href="#areas"
              className="inline-flex items-center space-x-2 bg-[#f2eded] text-[#b6272e] hover:bg-white rounded-full px-7 py-3.5 font-black text-sm uppercase tracking-wider shadow-sm transition-all duration-200"
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
            alt="Khalsa Ready Mix Concrete Mercedes Mixer Truck on Site"
            className="w-full h-full object-cover object-center"
          />

          {/* Floating Concrete Calculator Badge in Top-Right Corner */}
          <button
            onClick={onScrollToCalculator}
            className="absolute top-0 right-0 z-20 bg-[#f2eded] hover:bg-white transition-all rounded-bl-2xl px-5 sm:px-7 py-3.5 sm:py-4 shadow-md flex items-center space-x-3 group"
          >
            <img
              src="/images/calculator.svg"
              alt="Concrete Calculator"
              className="w-9 sm:w-11 h-auto shrink-0 group-hover:scale-105 transition-transform"
            />
            <div className="text-left font-heading">
              <span className="block text-[#b6272e] font-black text-base sm:text-xl leading-none uppercase">
                Concrete
              </span>
              <span className="block text-[#b6272e] font-black text-base sm:text-xl leading-none uppercase mt-0.5">
                Calculator
              </span>
            </div>
          </button>

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
            <div className="absolute bottom-0 left-0 right-0 bg-white p-5 flex items-center justify-between z-10">
              <span className="font-heading text-lg sm:text-xl font-black text-[#b6272e] uppercase">
                Domestic Concrete
              </span>
              <span className="w-7 h-7 rounded bg-[#f2eded] flex items-center justify-center text-[#b6272e] group-hover:bg-[#b6272e] group-hover:text-white transition-colors">
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
              alt="Commercial Concrete"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-white p-5 flex items-center justify-between z-10">
              <span className="font-heading text-lg sm:text-xl font-black text-[#b6272e] uppercase">
                Commercial Concrete
              </span>
              <span className="w-7 h-7 rounded bg-[#f2eded] flex items-center justify-center text-[#b6272e] group-hover:bg-[#b6272e] group-hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </a>

          {/* Card 3: Concrete Pumping */}
          <a
            href="#pumping"
            className="group relative block rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-slate-800 h-64 sm:h-72"
          >
            <img
              src="/images/pumping-card.webp"
              alt="Concrete Pumping"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-white p-5 flex items-center justify-between z-10">
              <span className="font-heading text-lg sm:text-xl font-black text-[#b6272e] uppercase">
                Concrete Pumping
              </span>
              <span className="w-7 h-7 rounded bg-[#f2eded] flex items-center justify-center text-[#b6272e] group-hover:bg-[#b6272e] group-hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </a>

          {/* Card 4: Screed */}
          <a
            href="#services"
            className="group relative block rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-slate-800 h-64 sm:h-72"
          >
            <img
              src="/images/screed-card.webp"
              alt="Floor Screed"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-white p-5 flex items-center justify-between z-10">
              <span className="font-heading text-lg sm:text-xl font-black text-[#b6272e] uppercase">
                Screed
              </span>
              <span className="w-7 h-7 rounded bg-[#f2eded] flex items-center justify-center text-[#b6272e] group-hover:bg-[#b6272e] group-hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};
