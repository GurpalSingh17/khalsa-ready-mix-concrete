import React from 'react';
import { Phone, Mail, Clock, ArrowUp, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onScrollToCalculator: () => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToCalculator, onOpenQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111827] text-slate-300 text-sm">
      
      {/* Top Red Strip */}
      <div className="bg-[#b6272e] text-white py-10 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase tracking-tight">
              Ready to arrange your concrete delivery?
            </h3>
            <p className="text-white/90 text-sm mt-1">
              Call our team today for same-day delivery slots and expert volume guidance.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="px-7 py-3.5 rounded-full bg-white text-[#b6272e] font-black text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors shadow-sm"
            >
              Get A Free Quote
            </button>
            <a
              href="tel:08081607324"
              className="px-7 py-3.5 rounded-full bg-[#8b1e27] hover:bg-[#78151d] text-white font-black text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>0808 160 7324</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-10 h-10 bg-[#b6272e] rounded flex items-center justify-center text-white font-black text-xl">
                K
              </div>
              <div className="font-heading">
                <span className="text-2xl font-black text-white">KHALSA </span>
                <span className="text-2xl font-black text-[#b6272e]">READY MIX CONCRETE</span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Supplying Wolverhampton, Birmingham, Dudley, Walsall, and the wider West Midlands 
              with premium ready-mix and on-site volumetric concrete, floor screed, and pump hire.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-xs text-emerald-400 font-bold">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>BSI KiteMark Certified • Only Pay For What You Use</span>
            </div>
          </div>

          {/* Concrete Services */}
          <div>
            <h4 className="font-heading text-white font-black uppercase text-sm mb-4 tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Domestic Concrete</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Commercial Concrete</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Volumetric (Mix On Site)</a></li>
              <li><a href="#pumping" className="hover:text-white transition-colors">Concrete Pumping</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Floor Screed</a></li>
              <li><a href="#out-of-hours" className="hover:text-white transition-colors">Out-of-Hours Delivery</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-white font-black uppercase text-sm mb-4 tracking-wider">
              Helpful Tools
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={onScrollToCalculator} className="hover:text-white transition-colors text-left">
                  Concrete Calculator
                </button>
              </li>
              <li><a href="#mix-guide" className="hover:text-white transition-colors">Mix Grades (C10 - C40)</a></li>
              <li><a href="#areas" className="hover:text-white transition-colors">Areas Covered</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Customer Reviews</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="font-heading text-white font-black uppercase text-sm mb-4 tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <a href="tel:08081607324" className="flex items-center space-x-2 text-white hover:text-red-400 font-bold transition-colors">
                <Phone className="w-4 h-4 text-[#b6272e] shrink-0" />
                <span>0808 160 7324</span>
              </a>
              <a href="tel:01902488500" className="flex items-center space-x-2 text-white hover:text-red-400 font-bold transition-colors">
                <Phone className="w-4 h-4 text-[#b6272e] shrink-0" />
                <span>01902 488 500</span>
              </a>
              <a href="mailto:info@khalsaconcrete.co.uk" className="flex items-center space-x-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#b6272e] shrink-0" />
                <span>info@khalsaconcrete.co.uk</span>
              </a>
              <div className="flex items-start space-x-2 text-slate-400">
                <Clock className="w-4 h-4 text-[#b6272e] shrink-0 mt-0.5" />
                <div>
                  <p>Mon - Sat: 06:30 - 18:00</p>
                  <p className="text-amber-400 font-semibold mt-0.5">24/7 Out of hours available</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Khalsa Ready Mix Concrete Ltd. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Cookie Policy</a>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
