import React from 'react';
import { Mail, Calculator } from 'lucide-react';

interface AboutIntroProps {
  onOpenQuote: () => void;
  onScrollToCalculator: () => void;
}

export const AboutIntro: React.FC<AboutIntroProps> = ({ onOpenQuote, onScrollToCalculator }) => {
  return (
    <section id="about" className="py-20 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-black uppercase tracking-widest text-[#b6272e] block">
            West Midlands Concrete Specialists
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            Concrete Suppliers in Wolverhampton, Walsall & Dudley
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Welcome to <strong>Khalsa Ready Mix Concrete</strong>. We provide a fast and friendly service, delivering high-quality 
            ready mix and on-site mixed concrete straight to your door or commercial project site.
          </p>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our team is the trusted concrete supplier for the West Midlands, known for our quick, efficient, and bespoke delivery. 
            We make things easy from start to finish: along with tailored mixes, we provide concrete pumps for easy access 
            at your home or site, and we operate 24/7 to support your project schedule.
          </p>

          <div className="pt-4 border-t border-slate-200">
            <h3 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 mb-3">
              Reliable Local Concrete Delivery Across the West Midlands
            </h3>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto mb-6">
              With our modern fleet, <strong>you'll also only pay for what you use</strong>. This means no waste, 
              no over-ordering, and no waiting around. It's this commitment to customer service that makes us leading 
              concrete suppliers for Wolverhampton, Walsall, Dudley, Birmingham, and beyond.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center space-x-2 bg-[#b6272e] hover:bg-[#991b1b] text-white rounded-full px-8 py-3.5 font-black text-sm uppercase tracking-wider shadow-sm transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Get A Free Quote</span>
              </button>

              <button
                onClick={onScrollToCalculator}
                className="inline-flex items-center space-x-2 border-2 border-[#b6272e] text-[#b6272e] hover:bg-[#b6272e] hover:text-white rounded-full px-8 py-3.5 font-black text-sm uppercase tracking-wider transition-all"
              >
                <Calculator className="w-4 h-4" />
                <span>Concrete Calculator</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
