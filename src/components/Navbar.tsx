import React, { useState } from 'react';
import { 
  Search, 
  Menu, 
  X,
  Phone,
  MessageCircle,
  Clock
} from 'lucide-react';
import { businessConfig } from '../config/businessInfo';

interface NavbarProps {
  onOpenQuote: () => void;
  onScrollToCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, onScrollToCalculator }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const whatsappUrl = `https://wa.me/${businessConfig.whatsapp.number}?text=${encodeURIComponent(businessConfig.whatsapp.defaultMessage)}`;

  return (
    <header className="w-full bg-white relative z-50">
      {/* Top Royal Blue Header Bar */}
      <div className="bg-[#1e3a8a] text-white">
        <div className="max-w-[1920px] mx-auto flex items-stretch justify-between">
          
          {/* Top Links & Search */}
          <div className="flex items-center space-x-6 px-4 sm:px-8 py-2 text-xs md:text-sm font-semibold tracking-wide">
            <a href="#about" className="hover:text-blue-200 transition-colors hidden sm:inline">About Us</a>
            <button 
              onClick={onScrollToCalculator} 
              className="hover:text-blue-200 transition-colors hidden sm:inline"
            >
              Concrete Calculator
            </button>
            <a href="#areas" className="hover:text-blue-200 transition-colors hidden md:inline">Areas Covered</a>
            <a href="#mix-guide" className="hover:text-blue-200 transition-colors hidden lg:inline">Mix Strengths</a>
            <a href="#contact" className="hover:text-blue-200 transition-colors hidden sm:inline">Contact Us</a>

            {/* Hours pill */}
            <div className="hidden 2xl:flex items-center space-x-1.5 text-blue-200 text-xs">
              <Clock className="w-3.5 h-3.5" />
              <span>{businessConfig.hours.schedule}</span>
            </div>

            {/* Direct WhatsApp pill */}
            {businessConfig.whatsapp.enabled && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            )}

            {/* Search Box */}
            <div className="relative items-center hidden xl:flex ml-2">
              <input
                type="text"
                placeholder="Search mix or area..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/10 text-white placeholder-white/70 text-xs rounded px-3 py-1 pl-7 w-36 focus:outline-none focus:bg-white/20 focus:w-48 transition-all"
              />
              <Search className="w-3.5 h-3.5 text-white/80 absolute left-2 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Right Phone Block - Royal Blue Accent */}
          <div className="bg-[#1d4ed8] hover:bg-[#1e40af] transition-colors flex items-center px-4 sm:px-8 py-2 sm:py-2.5 ml-auto">
            <a 
              href={`tel:${businessConfig.contact.primaryPhone}`} 
              className="flex items-center font-black text-white text-sm sm:text-lg lg:text-xl tracking-wide font-heading"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-white fill-white/20" />
              <span>{businessConfig.contact.primaryPhoneDisplay}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main White Navbar */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex items-center justify-between gap-4 border-b border-slate-200">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center group shrink-0">
          <img
            src="/images/khalsa-logo-transparent.png"
            alt="Khalsa Ready Mix Concrete"
            className="h-10 sm:h-12 2xl:h-14 w-auto object-contain hover:opacity-95 transition-opacity"
          />
        </a>

        {/* Primary Desktop Navigation Links */}
        <nav className="hidden 2xl:flex items-center gap-5 text-sm font-bold text-slate-800 whitespace-nowrap shrink-0">
          <a href="#services" className="hover:text-[#1d4ed8] transition-colors">Domestic Concrete</a>
          <a href="#services" className="hover:text-[#1d4ed8] transition-colors">Commercial & Groundworks</a>
          <a href="#pumping" className="hover:text-[#1d4ed8] transition-colors">Ground Line Pumps (80m+)</a>
          <a href="#services" className="hover:text-[#1d4ed8] transition-colors">Floor Screed</a>
          <a href="#calculator" onClick={onScrollToCalculator} className="hover:text-[#1d4ed8] transition-colors">Concrete Calculator</a>
          <a href="#areas" className="hover:text-[#1d4ed8] transition-colors">Areas Covered</a>
          
          <button
            onClick={onOpenQuote}
            className="px-4 py-2 rounded-full bg-[#1d4ed8] text-white hover:bg-[#1e40af] text-xs font-black uppercase tracking-wider shadow-sm transition-all"
          >
            Get Free Quote
          </button>
        </nav>

        {/* Mid-screen compact nav for standard laptops (1024px - 1535px) */}
        <nav className="hidden lg:flex 2xl:hidden items-center gap-3 text-xs font-bold text-slate-800 whitespace-nowrap shrink-0">
          <a href="#services" className="hover:text-[#1d4ed8] transition-colors">Services</a>
          <a href="#pumping" className="hover:text-[#1d4ed8] transition-colors">Pump Hire</a>
          <a href="#calculator" onClick={onScrollToCalculator} className="hover:text-[#1d4ed8] transition-colors">Calculator</a>
          <a href="#areas" className="hover:text-[#1d4ed8] transition-colors">Areas</a>
          <button
            onClick={onOpenQuote}
            className="px-3 py-1.5 rounded-full bg-[#1d4ed8] text-white hover:bg-[#1e40af] text-xs font-black uppercase tracking-wider shadow-sm transition-all"
          >
            Free Quote
          </button>
        </nav>

        {/* Mobile Action Buttons */}
        <div className="flex lg:hidden items-center space-x-2">
          {businessConfig.whatsapp.enabled && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-emerald-600 text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          )}
          <a
            href={`tel:${businessConfig.contact.primaryPhone}`}
            className="p-2 rounded-full bg-[#1d4ed8] text-white"
            aria-label="Call Now"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:bg-slate-100 rounded-md"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1e3a8a] text-white px-6 py-6 space-y-4 border-t border-blue-900 shadow-xl">
          <div className="flex flex-col space-y-3 font-bold text-sm">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-200">Domestic Concrete</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-200">Commercial & Groundworks</a>
            <a href="#pumping" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-200">Ground Line Pump Hire (80m+)</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-200">Floor Screed</a>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onScrollToCalculator();
              }}
              className="text-left hover:text-blue-200"
            >
              Concrete Calculator
            </button>
            <a href="#areas" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-200">Areas Covered</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-200">Contact & Free Quote</a>
          </div>

          <div className="pt-4 border-t border-blue-800 space-y-2">
            <a
              href={`tel:${businessConfig.contact.primaryPhone}`}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-full bg-white text-[#1d4ed8] font-black text-sm uppercase shadow"
            >
              <Phone className="w-4 h-4" />
              <span>Call {businessConfig.contact.primaryPhoneDisplay}</span>
            </a>
            <a
              href={`tel:${businessConfig.contact.secondaryPhone}`}
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-full bg-blue-900 text-white font-bold text-xs uppercase"
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Secondary / Out-of-Hours: {businessConfig.contact.secondaryPhoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
