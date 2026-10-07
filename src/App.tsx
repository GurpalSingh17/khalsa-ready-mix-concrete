import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutIntro } from './components/AboutIntro';
import { ConcreteCalculator } from './components/ConcreteCalculator';
import { ServicesSection } from './components/ServicesSection';
import { PumpHireSection } from './components/PumpHireSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { MixGradeGuide } from './components/MixGradeGuide';
import { CoverageMap } from './components/CoverageMap';
import { ReviewsAndTrust } from './components/ReviewsAndTrust';
import { QuoteSection } from './components/QuoteSection';
import type { QuoteFormData } from './components/QuoteSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export function App() {
  const [quoteData, setQuoteData] = useState<Partial<QuoteFormData>>({
    volumeM3: 4.5,
    serviceType: 'Volumetric On-Site Concrete',
    mixGrade: 'C25 / RC25',
    postcode: '',
  });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTransferFromCalculator = (volume: number, recommendedMix: string, projectType: string) => {
    setQuoteData(prev => ({
      ...prev,
      volumeM3: volume,
      mixGrade: recommendedMix,
      accessNotes: `Estimated from online calculator: ${volume} m³ for ${projectType}.`
    }));
    scrollToSection('contact');
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setQuoteData(prev => ({
      ...prev,
      serviceType: serviceTitle,
    }));
    scrollToSection('contact');
  };

  const handleSelectPumpForQuote = (pumpType: string) => {
    setQuoteData(prev => ({
      ...prev,
      pumpRequired: pumpType,
    }));
    scrollToSection('contact');
  };

  const handleSelectMixForQuote = (mixCode: string) => {
    setQuoteData(prev => ({
      ...prev,
      mixGrade: mixCode,
    }));
    scrollToSection('contact');
  };

  const handleSelectAreaForQuote = (areaOrPostcode: string) => {
    setQuoteData(prev => ({
      ...prev,
      postcode: areaOrPostcode,
    }));
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col selection:bg-[#b6272e] selection:text-white">
      {/* 1. Header & Navigation (Matching Screenshot 1 & 2) */}
      <Navbar
        onOpenQuote={() => scrollToSection('contact')}
        onScrollToCalculator={() => scrollToSection('calculator')}
      />

      <main className="flex-1">
        {/* 2. Hero Section & 4 Bucket Cards (Matching Screenshot 1 & 2) */}
        <Hero
          onOpenQuote={() => scrollToSection('contact')}
          onScrollToCalculator={() => scrollToSection('calculator')}
        />

        {/* 3. Editorial Intro: Concrete Suppliers in Wolverhampton */}
        <AboutIntro
          onOpenQuote={() => scrollToSection('contact')}
          onScrollToCalculator={() => scrollToSection('calculator')}
        />

        {/* 4. Concrete Calculator (Matching Screenshot 3) */}
        <ConcreteCalculator
          onTransferToQuote={handleTransferFromCalculator}
        />

        {/* 5. Concrete Services */}
        <ServicesSection
          onSelectServiceForQuote={handleSelectServiceForQuote}
        />

        {/* 6. Concrete Pumping Solutions */}
        <PumpHireSection
          onSelectPumpForQuote={handleSelectPumpForQuote}
        />

        {/* 7. Why Choose Us: Only Pay For What You Use */}
        <WhyChooseUs />

        {/* 8. Types of Concrete / Mix Strengths */}
        <MixGradeGuide
          onSelectMixForQuote={handleSelectMixForQuote}
        />

        {/* 9. Areas Covered & Postcode Checker */}
        <CoverageMap
          onSelectAreaForQuote={handleSelectAreaForQuote}
        />

        {/* 10. Verified Reviews & Accreditations */}
        <ReviewsAndTrust />

        {/* 11. Quote Form */}
        <QuoteSection
          initialData={quoteData}
        />

        {/* 12. FAQs */}
        <FAQSection />
      </main>

      {/* 13. Trade Footer */}
      <Footer
        onScrollToCalculator={() => scrollToSection('calculator')}
        onOpenQuote={() => scrollToSection('contact')}
      />

      {/* 14. Mobile Sticky Bottom Action Bar */}
      <MobileStickyBar
        onOpenQuote={() => scrollToSection('contact')}
        onScrollToCalculator={() => scrollToSection('calculator')}
      />
    </div>
  );
}

export default App;
