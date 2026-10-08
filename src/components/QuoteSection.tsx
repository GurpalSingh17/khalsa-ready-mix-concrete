import React, { useState, useEffect } from 'react';
import { CheckCircle2, MessageCircle, Phone, Mail, ArrowRight } from 'lucide-react';
import { businessConfig } from '../config/businessInfo';

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  postcode: string;
  address: string;
  serviceType: string;
  volumeM3: number | string;
  mixGrade: string;
  additive?: string;
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
    additive: 'Standard Mix',
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
    const ref = 'KMC-' + Math.floor(100000 + Math.random() * 900000);
    setQuoteRef(ref);
    setSubmitted(true);
  };

  const whatsappMessage = `Hi Khalsa Ready Mix Concrete, I would like a quote.
Ref: ${quoteRef}
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Postcode: ${formData.postcode}
Volume: ${formData.volumeM3} m³
Mix Grade: ${formData.mixGrade}
Additive: ${formData.additive}
Pump: ${formData.pumpRequired}
Notes: ${formData.accessNotes || 'N/A'}`;

  const emailSubject = encodeURIComponent(`New Concrete Quote Request - ${formData.name} (${formData.postcode})`);
  const emailBody = encodeURIComponent(`Customer Concrete Quote Details:
Reference: ${quoteRef}
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Delivery Postcode: ${formData.postcode}
Estimated Volume: ${formData.volumeM3} m³
Mix Grade: ${formData.mixGrade}
Additives: ${formData.additive}
Pump Needed: ${formData.pumpRequired}
Target Date: ${formData.deliveryDate || 'ASAP'}
Site Notes: ${formData.accessNotes || 'N/A'}`);

  const mailtoUrl = `mailto:${businessConfig.contact.email}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section id="contact" className="py-20 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-[#1d4ed8] block mb-2">
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
          <div className="bg-slate-50 border-2 border-emerald-500 rounded-2xl p-8 sm:p-12 text-center shadow-sm">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-2xl font-black text-slate-900 uppercase mb-2">
              Quote Request Generated
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
              Reference code: <strong className="text-[#1d4ed8] font-mono text-base">{quoteRef}</strong>. 
              Our team at 15 Monmore Rd will confirm your delivery slot and exact rate.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              {/* Send email direct to dispatch */}
              <a
                href={mailtoUrl}
                className="px-6 py-3.5 rounded-full bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Send Directly to Dispatch Email</span>
              </a>

              {/* Instant WhatsApp option */}
              {businessConfig.whatsapp.enabled && (
                <a
                  href={`https://wa.me/${businessConfig.whatsapp.number}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </a>
              )}
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600">
              <a
                href={`tel:${businessConfig.contact.primaryPhone}`}
                className="font-bold text-slate-900 hover:text-[#1d4ed8] flex items-center space-x-1"
              >
                <Phone className="w-3.5 h-3.5 text-[#1d4ed8]" />
                <span>Or call {businessConfig.contact.primaryPhoneDisplay}</span>
              </a>
              <span>•</span>
              <button
                onClick={() => setSubmitted(false)}
                className="text-[#1d4ed8] font-bold hover:underline"
              >
                Submit another quote
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
            
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
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1d4ed8]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="e.g. 07983 682727"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1d4ed8]"
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
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1d4ed8]"
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
                  placeholder="e.g. WV1 2TZ"
                  value={formData.postcode}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 font-bold uppercase focus:outline-none focus:border-[#1d4ed8]"
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
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 font-bold focus:outline-none focus:border-[#1d4ed8]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Mix Grade</label>
                <select
                  name="mixGrade"
                  value={formData.mixGrade}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1d4ed8]"
                >
                  <option value="C20 / GEN 3">C20 / GEN 3 (Domestic slabs & footings)</option>
                  <option value="C25 / RC25">C25 / RC25 (Reinforced foundations)</option>
                  <option value="C30 / PAV 1">C30 / PAV 1 (Driveways & paving)</option>
                  <option value="C35 / PAV 2">C35 / PAV 2 (Heavy yard & access roads)</option>
                  <option value="C40 / RC40">C40 / RC40 (Structural high strength)</option>
                  <option value="Floor Screed">Floor Screed (Sand & cement)</option>
                  <option value="Unsure / Need Advice">Unsure - Need Advice</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Additives & Reinforcement</label>
                <select
                  name="additive"
                  value={formData.additive}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1d4ed8]"
                >
                  <option value="Standard Mix">Standard Mix (No Additive)</option>
                  <option value="Rapid-Set Accelerator">Rapid-Set Accelerator</option>
                  <option value="Polypropylene Fibre-Reinforced">Fibre-Reinforced (Crack Control)</option>
                  <option value="Both Rapid-Set + Fibres">Both Rapid-Set + Fibres</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Concrete Pump Required?</label>
                <select
                  name="pumpRequired"
                  value={formData.pumpRequired}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1d4ed8]"
                >
                  <option value="No pump (Direct chute or barrow)">No pump (Direct chute / wheelbarrow)</option>
                  <option value="Ground Line Pump (Up to 80m+)">Yes, Ground Line Pump (Up to 80m+)</option>
                  <option value="Unsure - Please advise">Unsure - Please advise on access</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Delivery Date</label>
                <input
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1d4ed8]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Project Notes / Site Access</label>
              <textarea
                rows={2}
                name="accessNotes"
                placeholder="e.g. Garden patio, narrow driveway, same-day delivery requested..."
                value={formData.accessNotes}
                onChange={handleChange}
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-[#1d4ed8]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 rounded-full bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-black text-sm uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Accepted payment methods */}
            <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
              <span>Accepted Payment: <strong>Credit/Debit Card, BACS Transfer, Cash on Delivery</strong></span>
              <span>Direct Dispatch: <strong className="text-slate-800">{businessConfig.contact.email}</strong></span>
            </div>
          </form>
        )}

      </div>
    </section>
  );
};
