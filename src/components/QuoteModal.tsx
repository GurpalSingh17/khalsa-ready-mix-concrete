import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react';
import type { QuoteFormData } from './QuoteSection';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: Partial<QuoteFormData>;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialData }) => {
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

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-slate-900 border-2 border-orange-500/50 rounded-2xl max-w-2xl w-full p-6 sm:p-8 text-white relative shadow-2xl my-8">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-heading text-2xl font-bold uppercase text-white mb-2">
              Quote Request Sent!
            </h3>
            <p className="text-slate-300 text-sm mb-4">
              Reference: <span className="text-orange-400 font-mono font-bold">{quoteRef}</span>. 
              Our dispatch team will call you within 15 minutes with exact delivery pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a
                href="tel:08009995425"
                className="px-5 py-3 rounded-xl bg-orange-500 text-slate-950 font-bold text-xs uppercase"
              >
                Call Dispatch: 0800 999 5425
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-3 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-orange-400 uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Fast Online Estimate</span>
            </div>
            <h3 className="font-heading text-2xl font-black uppercase text-white mb-4">
              Instant Quote Request
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="07123 456789"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-orange-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Delivery Postcode *</label>
                  <input
                    type="text"
                    required
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    placeholder="e.g. WV1, B1"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white uppercase font-bold focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Estimated Volume (m³)</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0.5"
                    name="volumeM3"
                    value={formData.volumeM3}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white font-mono font-bold focus:border-orange-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Concrete Service</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-orange-500 focus:outline-none"
                  >
                    <option value="Volumetric On-Site Concrete">Volumetric On-Site (Pay for what you use)</option>
                    <option value="Ready Mix Drum Delivery">Ready Mix Drum Delivery</option>
                    <option value="Concrete Pump Hire Only">Concrete Pump Hire Only</option>
                    <option value="Floor Screed / Flowing Screed">Floor Screed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Need a Pump?</label>
                  <select
                    name="pumpRequired"
                    value={formData.pumpRequired}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-orange-500 focus:outline-none"
                  >
                    <option value="No pump (Direct chute or barrow)">No pump (Direct / barrow)</option>
                    <option value="Ground Line Pump (Up to 80m)">Ground Line Pump</option>
                    <option value="Hydraulic Boom Pump (Over roof)">Boom Pump</option>
                    <option value="Unsure - Please advise access">Unsure / Need Advice</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Access Notes / Extra Info</label>
                <textarea
                  rows={2}
                  name="accessNotes"
                  value={formData.accessNotes}
                  onChange={handleChange}
                  placeholder="e.g. Backyard extension, distance from road, required time..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-orange-500 focus:outline-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Request</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
