import React from 'react';
import { Phone, Mail, Clock, ArrowUp, ShieldCheck, MapPin, MessageCircle } from 'lucide-react';
import { businessConfig } from '../config/businessInfo';

interface FooterProps {
  onScrollToCalculator: () => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToCalculator, onOpenQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${businessConfig.whatsapp.number}?text=${encodeURIComponent(businessConfig.whatsapp.defaultMessage)}`;

  return (
    <footer className="bg-[#0f172a] text-slate-300 text-sm">
      
      {/* Top Royal Blue Strip */}
      <div className="bg-[#1d4ed8] text-white py-10 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase tracking-tight">
              Ready to arrange your concrete delivery?
            </h3>
            <p className="text-white/90 text-sm mt-1">
              Call our team today for same-day delivery slots and expert volume guidance.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenQuote}
              className="px-7 py-3.5 rounded-full bg-white text-[#1d4ed8] font-black text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors shadow-sm"
            >
              Get A Free Quote
            </button>
            <a
              href={`tel:${businessConfig.contact.primaryPhone}`}
              className="px-7 py-3.5 rounded-full bg-[#1e3a8a] hover:bg-[#172554] text-white font-black text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>{businessConfig.contact.primaryPhoneDisplay}</span>
            </a>
            {businessConfig.whatsapp.enabled && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <img
                src="/images/khalsa-logo-footer.png"
                alt="Khalsa Ready Mix Concrete"
                className="h-12 w-auto object-contain mb-2"
              />
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Supplying Wolverhampton, Birmingham, Dudley, Walsall, and the wider West Midlands 
              with premium volumetric on-site concrete, floor screed, and ground line pump hire.
            </p>

            <div className="space-y-1.5 text-xs text-slate-400">
              <div className="flex items-start space-x-2 text-slate-300">
                <MapPin className="w-4 h-4 text-[#60a5fa] shrink-0 mt-0.5" />
                <span>Operating Depot: <strong>{businessConfig.contact.depotAddress.full}</strong></span>
              </div>
              <div className="flex items-center space-x-2 text-emerald-400 font-bold pt-1">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Pay Only For What You Use • Zero Waste Policy</span>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-2 flex items-center space-x-3 text-xs">
              <span className="text-slate-400">Follow us:</span>
              <a href={businessConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Facebook</a>
              <span className="text-slate-600">•</span>
              <a href={businessConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Instagram</a>
              <span className="text-slate-600">•</span>
              <a href={businessConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Concrete Services */}
          <div>
            <h4 className="font-heading text-white font-black uppercase text-sm mb-4 tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Domestic Concrete</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Commercial & Groundworks</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Volumetric Mix On Site</a></li>
              <li><a href="#pumping" className="hover:text-white transition-colors">Ground Line Pump Hire (80m+)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Floor Screed</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Same-Day Rapid Delivery</a></li>
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
              <li><a href="#mix-guide" className="hover:text-white transition-colors">Mix Strengths (C20 - C40)</a></li>
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
              <a href={`tel:${businessConfig.contact.primaryPhone}`} className="flex items-center space-x-2 text-white hover:text-blue-400 font-bold transition-colors">
                <Phone className="w-4 h-4 text-[#60a5fa] shrink-0" />
                <span>{businessConfig.contact.primaryPhoneDisplay}</span>
              </a>
              <a href={`tel:${businessConfig.contact.secondaryPhone}`} className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#60a5fa] shrink-0" />
                <span>2nd Line: {businessConfig.contact.secondaryPhoneDisplay}</span>
              </a>
              <a href={`mailto:${businessConfig.contact.email}`} className="flex items-center space-x-2 hover:text-white transition-colors break-all">
                <Mail className="w-4 h-4 text-[#60a5fa] shrink-0" />
                <span>{businessConfig.contact.email}</span>
              </a>
              <div className="flex items-start space-x-2 text-slate-400 pt-1">
                <Clock className="w-4 h-4 text-[#60a5fa] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-slate-200">{businessConfig.hours.schedule}</p>
                  <p className="text-blue-300 text-[11px] mt-0.5">Out of hours available on request</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Payment badges & bottom row */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {businessConfig.company.legalName}. All rights reserved.
          </div>
          <div className="flex items-center space-x-3 text-slate-400">
            <span>Payment Accepted:</span>
            <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-[11px]">Credit/Debit Cards</span>
            <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-[11px]">BACS Transfer</span>
            <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-[11px]">Cash on Delivery</span>
          </div>
          <div>
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
