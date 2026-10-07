import React, { useState } from 'react';
import { 
  ChevronDown, 
  Search, 
  Menu, 
  X,
  Phone
} from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
  onScrollToCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, onScrollToCalculator }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="w-full bg-white relative z-50">
      {/* Top Maroon Header Bar */}
      <div className="bg-[#8b1e27] text-white">
        <div className="max-w-[1920px] mx-auto flex items-stretch justify-between">
          
          {/* Top Links & Search */}
          <div className="flex items-center space-x-6 px-4 sm:px-8 py-2 text-xs md:text-sm font-semibold tracking-wide">
            <a href="#about" className="hover:text-amber-200 transition-colors hidden sm:inline">About Us</a>
            <button 
              onClick={onScrollToCalculator} 
              className="hover:text-amber-200 transition-colors hidden sm:inline"
            >
              Concrete Calculator
            </button>
            <a href="#news" className="hover:text-amber-200 transition-colors hidden md:inline">News</a>
            
            <div className="relative group hidden lg:flex items-center space-x-1 cursor-pointer hover:text-amber-200">
              <a href="#areas">Areas Covered</a>
              <ChevronDown className="w-4 h-4 text-white" />
            </div>

            <a href="#contact" className="hover:text-amber-200 transition-colors hidden sm:inline">Contact Us</a>

            {/* Search Box */}
            <div className="relative items-center hidden xl:flex ml-4">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/10 text-white placeholder-white/70 text-xs rounded px-3 py-1 pl-7 w-36 focus:outline-none focus:bg-white/20 focus:w-48 transition-all"
              />
              <Search className="w-3.5 h-3.5 text-white/80 absolute left-2 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Right Phone Block */}
          <div className="bg-[#78151d] hover:bg-[#681118] transition-colors flex items-center px-5 sm:px-10 py-2 sm:py-2.5 ml-auto">
            <a 
              href="tel:08081607324" 
              className="flex items-center font-black text-white text-base sm:text-xl lg:text-2xl tracking-wide font-heading"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-white" />
              <span>0808 160 7324</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main White Navbar */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between border-b border-slate-200">
        
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 group shrink-0">
          <div className="flex items-center">
            {/* Bold Stylized Trade Monogram & Logotype */}
            <div className="w-11 h-11 bg-[#b6272e] rounded-md flex items-center justify-center text-white font-black text-2xl shadow-sm mr-2.5">
              K
            </div>
            <div>
              <div className="flex flex-wrap items-baseline space-x-1.5 font-heading">
                <span className="text-xl sm:text-2xl 2xl:text-3xl font-black text-[#111827] tracking-tight">KHALSA</span>
                <span className="text-xl sm:text-2xl 2xl:text-3xl font-black text-[#b6272e] tracking-tight">READY MIX CONCRETE</span>
              </div>
              <span className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-500 -mt-0.5">
                Wolverhampton & West Midlands Supplier
              </span>
            </div>
          </div>
        </a>

        {/* Primary Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-6 text-[13px] 2xl:text-[14px] font-bold text-slate-800">
          <div className="flex items-center space-x-1 hover:text-[#b6272e] cursor-pointer">
            <a href="#services">Domestic Concrete</a>
            <ChevronDown className="w-4 h-4 text-slate-500" />
          </div>

          <a href="#services" className="hover:text-[#b6272e] transition-colors">Commercial Concrete</a>

          <div className="flex items-center space-x-1 hover:text-[#b6272e] cursor-pointer">
            <a href="#mix-guide">Types of Concrete</a>
            <ChevronDown className="w-4 h-4 text-slate-500" />
          </div>

          <div className="flex items-center space-x-1 hover:text-[#b6272e] cursor-pointer">
            <a href="#pumping">Concrete Pumping</a>
            <ChevronDown className="w-4 h-4 text-slate-500" />
          </div>

          <a href="#services" className="hover:text-[#b6272e] transition-colors">Screed</a>
          <a href="#out-of-hours" className="hover:text-[#b6272e] transition-colors">Out-of-Hours Concrete</a>
          <a href="#next-day" className="hover:text-[#b6272e] transition-colors">Next Day Concrete</a>
        </nav>

        {/* Mobile Burger Button */}
        <div className="flex xl:hidden items-center space-x-3">
          <button
            onClick={onOpenQuote}
            className="px-3 py-1.5 rounded-full bg-[#b6272e] text-white text-xs font-bold uppercase"
          >
            Get Quote
          </button>
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
        <div className="xl:hidden bg-[#8b1e27] text-white px-6 py-6 space-y-4 border-t border-red-900 shadow-xl">
          <div className="flex flex-col space-y-3 font-bold text-sm">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-200">Domestic Concrete</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-200">Commercial Concrete</a>
            <a href="#mix-guide" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-200">Types of Concrete</a>
            <a href="#pumping" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-200">Concrete Pumping</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-200">Screed</a>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onScrollToCalculator();
              }}
              className="text-left hover:text-amber-200"
            >
              Concrete Calculator
            </button>
            <a href="#areas" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-200">Areas Covered</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-200">Contact Us</a>
          </div>

          <div className="pt-4 border-t border-red-800 space-y-2">
            <a
              href="tel:08081607324"
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-full bg-white text-[#b6272e] font-black text-sm uppercase shadow"
            >
              <Phone className="w-4 h-4" />
              <span>Call 0808 160 7324</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
