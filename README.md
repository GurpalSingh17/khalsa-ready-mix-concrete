# Khalsa Concrete — Professional Ready-Mix & Volumetric Concrete Website

A modern, high-converting, professional website tailored for **Khalsa Concrete**, inspired by industry-leading UK suppliers [SS Concrete](https://www.ssconcrete.co.uk) and [Gills Mix Concrete](https://gillsmixconcrete.co.uk).

---

## 🚀 Key Features

1. **Urgent Top Header & Click-to-Call**
   - Freephone: `0800 999 5425`
   - BSI Kitemark certification, "Pay only for what you pour", and 24/7 out-of-hours delivery indicators.

2. **Hero Section with Instant Postcode Checker**
   - High-contrast industrial branding (Dark Slate, Construction Safety Orange & Amber).
   - Instant quick-quote box to capture leads within seconds.

3. **Interactive Concrete Volume & Mix Calculator**
   - **4 Project Shapes**:
     - Slab / Patio / Driveway ($L \times W \times D$)
     - Footing / Trench / Foundation ($L \times W \times D$)
     - Column / Post Hole / Cylinder ($\pi \times r^2 \times D$)
     - Steps / Staircases
   - **Units Support**: Metres ($m$) and Feet/Inches ($ft/in$).
   - **+10% Ground Unevenness Buffer** toggle.
   - **Instant Calculations**: Total $m^3$, 25kg bags equivalent (e.g. saves mixing ~100 bags), and wheelbarrow loads.
   - **"Transfer to Quote Request" Button**: Directly populates the quote form with the calculated volume and recommended mix grade.

4. **Dedicated Concrete Pumping Section**
   - Highlights **Ground Line Pumps** (up to 80m+ flexible lines through doorways and side alleys) and **Hydraulic Boom Pumps** (over walls and roofs).

5. **Why Choose Us & Transparent Comparison Table**
   - Comparison grid: *Khalsa Concrete Volumetric* vs *Traditional Drum Suppliers* (zero waste, no disposal charge, no short load fees, adjust slump on-site).

6. **Technical Mix Grade Advisor**
   - Explains C10, C15, C20, C25, C30, C35, and C40 applications and compressive strengths according to BS EN 206 / BS 8500.

7. **West Midlands Coverage Area Explorer & Live Postcode Checker**
   - Wolverhampton, Birmingham, Dudley, Walsall, West Bromwich, Solihull, Sutton Coldfield, Cannock, Telford, etc.
   - Interactive prefix checker for instant turnaround confirmation.

8. **Recent Project Gallery**
   - Filterable portfolio: Commercial, Domestic, Pumping, and Floor Screed.

9. **Customer Reviews & Industry Accreditations**
   - 4.9/5 Google rating card with 350+ reviews.
   - BSI Certified, CPCS Pump Crew, Constructionline, ISO 9001:2015.

10. **Full Quote & Booking Form**
    - Step-by-step fields: Contact details, Site location, Delivery date/slot, Volume, Mix grade, and Pump requirements.
    - Generates instant reference number upon submission with immediate dispatch hotline link.

11. **Mobile Bottom Action Bar**
    - Pinned bottom bar on mobile devices with instant "Call 0800..." and "Free Quote" actions for contractors on job sites.

---

## 🛠️ How to Run Locally

In your PowerShell terminal:

```powershell
# 1. Start the Vite development server:
npm.cmd run dev
```

Open `http://localhost:5173` in your browser.

---

## 📦 How to Build for Production Deployment

```powershell
npm.cmd run build
```

This compiles your static assets into the `dist/` directory. You can upload the contents of `dist/` to any web hosting provider (Vercel, Netlify, Cloudflare Pages, cPanel, Apache, Nginx, or AWS S3).

---

## 📁 Project Structure

```
Khalsa Concrete/
├── index.html                   # HTML template & Google Fonts (Chakra Petch & Plus Jakarta Sans)
├── src/
│   ├── main.tsx                 # React entry point
│   ├── App.tsx                  # Main application assembling all sections
│   ├── index.css                # Tailwind CSS v4 styling & theme configuration
│   ├── data/
│   │   └── mockData.ts          # Services, mix grades, areas, testimonials, gallery, FAQs
│   └── components/
│       ├── Navbar.tsx           # Sticky nav, top announcement bar & mobile menu
│       ├── Hero.tsx             # Main hero section & quick quote card
│       ├── ConcreteCalculator.tsx # Interactive 4-shape volume & mix estimator
│       ├── ServicesSection.tsx  # Grid of all 6 concrete services & detail modal
│       ├── PumpHireSection.tsx  # Ground line & boom pump hire showcase
│       ├── WhyChooseUs.tsx      # 4 pillars & traditional vs volumetric comparison
│       ├── MixGradeGuide.tsx    # C10 - C40 mix grade technical selector
│       ├── CoverageMap.tsx      # West Midlands coverage & postcode checker
│       ├── ProjectGallery.tsx   # Filterable recent pours gallery
│       ├── ReviewsAndTrust.tsx  # 4.9-star Google reviews & accreditations
│       ├── QuoteSection.tsx     # Guaranteed quote booking form
│       ├── FAQSection.tsx       # Interactive accordion for common questions
│       ├── Footer.tsx           # Accreditation badges, links, and dispatch hours
│       ├── MobileStickyBar.tsx  # Pinned mobile call & quote action bar
│       └── QuoteModal.tsx       # Pop-up quote request modal
```
