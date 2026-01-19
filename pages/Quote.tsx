
import React, { useState } from 'react';

const Quote: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    machineType: '',
    goals: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `Hello Vishwakarma Engineering, I have an inquiry.
    
*Full Name:* ${formData.fullName}
*Mobile Number:* ${formData.mobileNumber}
*Machine Required:* ${formData.machineType}
*Requirement Details:* ${formData.goals || 'Not specified'}`;

    const encodedMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919173477775?text=${encodedMsg}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="py-24 bg-white min-h-[80vh] flex items-center">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-primary font-black uppercase tracking-[0.2em] text-sm block">Partner With Us</span>
              <h1 className="text-6xl md:text-7xl font-black text-[#1a2b3c] leading-[1.1] tracking-tighter uppercase">
                Ready to Expand <br /> Your Energy Portfolio?
              </h1>
              <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-xl">
                Connect with our technical specialists for a customized machinery feasibility study and tailored commercial estimates.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="flex gap-5">
                <div className="size-14 rounded-2xl bg-[#e8fbe9] text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-3xl">headset_mic</span>
                </div>
                <div>
                  <h5 className="font-black text-lg text-gray-900 uppercase tracking-tight">Expert Consultation</h5>
                  <p className="text-base text-gray-900 font-black">+91 91734 77775</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="size-14 rounded-2xl bg-[#e8fbe9] text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-3xl">verified</span>
                </div>
                <div>
                  <h5 className="font-black text-lg text-gray-900 uppercase tracking-tight">Quality Assurance</h5>
                  <p className="text-sm text-gray-500 font-medium">All machines come with 12-month standard warranty.</p>
                </div>
              </div>
            </div>
            
            <div className="pt-16 flex items-center gap-8">
                <div className="space-y-3">
                  <h4 className="font-black text-gray-900 uppercase tracking-tighter text-3xl">Excellence in Engineering</h4>
                  <p className="text-base text-gray-500 max-w-sm font-medium">Proudly serving the industrial sector from Rajkot, Gujarat since 1995.</p>
                </div>
            </div>
          </div>

          <div className="relative">
            {/* Decorative blue border box from screenshot */}
            <div className="absolute -inset-4 border-2 border-[#3b82f6] rounded-xl pointer-events-none"></div>
            
            <div className="bg-[#f3f4f6] p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center animate-in zoom-in duration-500">
                  <div className="size-24 rounded-full bg-primary text-white flex items-center justify-center mb-8 shadow-xl shadow-primary/30">
                    <span className="material-symbols-outlined text-5xl font-black">check</span>
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 uppercase mb-4 tracking-tighter">Inquiry Sent!</h3>
                  <p className="text-gray-500 text-lg font-medium">Redirecting you to WhatsApp...</p>
                </div>
              ) : (
                <div className="bg-white p-10 rounded-[32px] shadow-sm">
                  <h3 className="text-3xl font-black text-[#1a2b3c] uppercase mb-10 tracking-tight">Inquiry Details</h3>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">Full Name</label>
                        <input 
                          required 
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full bg-[#f3f4f6] border-none rounded-xl px-5 py-4 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-primary transition-all text-sm font-bold" 
                          placeholder="John Doe" 
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">Mobile Number</label>
                        <input 
                          required 
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleInputChange}
                          className="w-full bg-[#f3f4f6] border-none rounded-xl px-5 py-4 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-primary transition-all text-sm font-bold" 
                          placeholder="+91 98765 43210" 
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">Machine Required</label>
                      <select 
                        required 
                        name="machineType"
                        value={formData.machineType}
                        onChange={handleInputChange}
                        className="w-full bg-[#f3f4f6] border-none rounded-xl px-5 py-4 text-gray-900 focus:ring-2 focus:ring-primary transition-all appearance-none cursor-pointer text-sm font-bold"
                      >
                        <option value="">Select Machine Type</option>
                        <option>Biomass Briquette Machine</option>
                        <option>Wood Chipper Machine</option>
                        <option>Hammer Mill Grinder</option>
                        <option>Flash Dryer System</option>
                        <option>Complete Turnkey Plant</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">Production Goals (optional)</label>
                      <textarea 
                        name="goals"
                        value={formData.goals}
                        onChange={handleInputChange}
                        className="w-full bg-[#f3f4f6] border-none rounded-xl px-5 py-4 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-primary transition-all min-h-[140px] text-sm font-bold" 
                        placeholder="Tell us about your requirements..."
                      ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-primary hover:bg-[#14b823] text-gray-900 font-black uppercase tracking-[0.2em] py-6 rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-4 text-sm active:scale-95">
                      Submit Inquiry
                      <span className="material-symbols-outlined font-black">send</span>
                    </button>
                    <p className="text-[10px] text-center text-gray-400 font-black uppercase tracking-[0.3em] pt-4">
                      Trusted by 500+ enterprises worldwide
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
