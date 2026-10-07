import React, { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  postcode: string;
  address: string;
  serviceType: string;
  volumeM3: number | string;
  mixGrade: string;
  pumpRequired: string;
  deliveryDate: string;
  timeSlot: string;
  accessNotes: string;
}

interface QuoteSectionProps {
  initialData?: Partial<QuoteFormData>;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ initialData }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    email: '',
    postcode: initialData?.postcode || '',
    address: '',
    serviceType: initialData?.serviceType || 'Volumetric On-Site Concrete',
    volumeM3: initialData?.volumeM3 || 4,
    mixGrade: initialData?.mixGrade || 'C25 / RC25',
    pumpRequired: initialData?.pumpRequired || 'No pump (Direct chute or barrow)',
    deliveryDate: '',
    timeSlot: 'Morning (07:00 - 12:00)',
    accessNotes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [quoteRef, setQuoteRef] = useState('');

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        ...initialData
      }));
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'KC-' + Math.floor(100000 + Math.random() * 900000);
    setQuoteRef(ref);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-[#b6272e] block mb-2">
            Free No-Obligation Estimate
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase">
            Request A Free Quote
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Fill in your delivery details and our dispatch office will get back to you with competitive pricing.
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#f8f9fa] border-2 border-emerald-500 rounded-2xl p-8 sm:p-12 text-center shadow-sm">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-2xl font-black text-slate-900 uppercase mb-2">
              Quote Request Received
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
              Reference code: <strong className="text-[#b6272e] font-mono">{quoteRef}</strong>. 
              Our team will contact you shortly to confirm your delivery slot and rate.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:08081607324"
                className="px-6 py-3 rounded-full bg-[#b6272e] text-white font-black text-xs uppercase"
              >
                Call Dispatch: 0808 160 7324
              </a>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 rounded-full bg-white border border-slate-300 text-slate-700 font-bold text-xs"
              >
                Submit Another Quote
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#f8f9fa] border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Gurpal Singh"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#b6272e]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="e.g. 07123 456789"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#b6272e]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#b6272e]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Delivery Postcode *</label>
                <input
                  type="text"
                  name="postcode"
                  required
                  placeholder="e.g. WV1 4QT"
                  value={formData.postcode}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded px-3 py-2.5 text-sm text-slate-900 font-bold uppercase focus:outline-none focus:border-[#b6272e]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Estimated Volume (m³)</label>
                <input
                  type="number"
                  step="0.1"
                  min="0.5"
                  name="volumeM3"
                  value={formData.volumeM3}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded px-3 py-2.5 text-sm text-slate-900 font-bold focus:outline-none focus:border-[#b6272e]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Mix Grade</label>
                <select
                  name="mixGrade"
                  value={formData.mixGrade}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#b6272e]"
                >
                  <option value="C15 / GEN 2">C15 / GEN 2 (Shed bases)</option>
                  <option value="C20 / GEN 3">C20 / GEN 3 (Domestic slabs)</option>
                  <option value="C25 / RC25">C25 / RC25 (Foundations)</option>
                  <option value="C30 / PAV 1">C30 / PAV 1 (Driveways)</option>
                  <option value="C35 / PAV 2">C35 / PAV 2 (Heavy yard)</option>
                  <option value="Unsure / Need Advice">Unsure - Need Advice</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Do You Need A Concrete Pump?</label>
                <select
                  name="pumpRequired"
                  value={formData.pumpRequired}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#b6272e]"
                >
                  <option value="No pump (Direct chute or barrow)">No pump (Direct chute / wheelbarrow)</option>
                  <option value="Ground Line Pump (Up to 80m)">Yes, Ground Line Pump (Up to 80m)</option>
                  <option value="Boom Pump (Over rooftops)">Yes, Boom Pump (Over structures)</option>
                  <option value="Unsure - Please advise">Unsure - Please check access</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Delivery Date</label>
                <input
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#b6272e]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Project Notes / Site Access</label>
              <textarea
                rows={2}
                name="accessNotes"
                placeholder="e.g. Garden extension, 15m barrow run, narrow entrance..."
                value={formData.accessNotes}
                onChange={handleChange}
                className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-[#b6272e]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 rounded-full bg-[#b6272e] hover:bg-[#991b1b] text-white font-black text-sm uppercase tracking-wider transition-all shadow"
            >
              Get Free Quote
            </button>

            <div className="text-center pt-2">
              <span className="text-xs text-slate-500">
                Need to speak to someone right now? Call our friendly team on <a href="tel:08081607324" className="text-[#b6272e] font-bold hover:underline">0808 160 7324</a>
              </span>
            </div>
          </form>
        )}

      </div>
    </section>
  );
};
