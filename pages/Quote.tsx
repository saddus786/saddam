
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
    const message = `Hello Vishwakarma Engineering, I have a formal industrial inquiry.
*Full Name:* ${formData.fullName}
*Mobile Number:* ${formData.mobileNumber}
*Machine Interest:* ${formData.machineType}
*Specific Requirements:* ${formData.goals || 'I require a formal quotation.'}`;
    const encodedMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919173477775?text=${encodedMsg}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="py-32 bg-midnight min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none grayscale invert">
        <div className="grid grid-cols-12 h-full gap-1">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border-r border-gold/20 h-full"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-xs font-black text-gold uppercase tracking-[0.5em]">Global Enterprise Inquiry</span>
              <h1 className="text-7xl font-black text-ivory leading-[1.1] tracking-tighter uppercase">
                Establish <br /> <span className="gold-gradient-text">Master Production</span>
              </h1>
              <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-lg">
                Connect with our senior engineering team to discuss turnkey project setups, export logistics, and custom machinery configurations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="flex gap-5">
                <div className="size-14 rounded-2xl bg-gold/5 text-gold flex items-center justify-center shrink-0 border border-gold/20">
                  <span className="material-symbols-outlined text-3xl font-black">support_agent</span>
                </div>
                <div>
                  <h5 className="font-black text-ivory uppercase text-[10px] tracking-widest mb-1">Commercial Dept.</h5>
                  <p className="text-xl font-black text-gold">+91 91734 77775</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="size-14 rounded-2xl bg-gold/5 text-gold flex items-center justify-center shrink-0 border border-gold/20">
                  <span className="material-symbols-outlined text-3xl font-black">description</span>
                </div>
                <div>
                  <h5 className="font-black text-ivory uppercase text-[10px] tracking-widest mb-1">Standard Warranty</h5>
                  <p className="text-sm font-bold text-slate-500">Global 12-Month Support Guarantee</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-10 md:p-16 rounded-[4rem] shadow-glass border-gold/10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="size-24 rounded-full bg-emerald/10 text-emerald flex items-center justify-center mb-8 border border-emerald/30 shadow-emerald-glow">
                  <span className="material-symbols-outlined text-5xl font-black">verified</span>
                </div>
                <h3 className="text-4xl font-black text-ivory uppercase tracking-tight">Protocol Initiated</h3>
                <p className="text-slate-400 mt-4 text-lg">A technical consultant will connect via WhatsApp shortly.</p>
              </div>
            ) : (
              <div className="space-y-12">
                <h3 className="text-3xl font-black text-ivory uppercase tracking-tight text-center lg:text-left">Inquiry Protocol</h3>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Corporate Full Name</label>
                      <input required name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full bg-midnight/50 border border-gold/10 rounded-2xl px-6 py-5 text-ivory focus:ring-2 focus:ring-gold outline-none transition-all text-sm font-bold placeholder:text-slate-700" placeholder="E.g. Alexander Pierce" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Contact Number</label>
                      <input required name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} className="w-full bg-midnight/50 border border-gold/10 rounded-2xl px-6 py-5 text-ivory focus:ring-2 focus:ring-gold outline-none transition-all text-sm font-bold placeholder:text-slate-700" placeholder="+91 XXXX XXXX" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Requirement Classification</label>
                    <select required name="machineType" value={formData.machineType} onChange={handleInputChange} className="w-full bg-midnight/50 border border-gold/10 rounded-2xl px-6 py-5 text-ivory focus:ring-2 focus:ring-gold outline-none transition-all cursor-pointer text-sm font-bold appearance-none">
                      <option value="" className="bg-charcoal">Select Machine Series</option>
                      <option value="VK-90 Briquette Machine" className="bg-charcoal">VK-90 Briquette Machine</option>
                      <option value="Series-X Wood Chipper" className="bg-charcoal">Series-X Wood Chipper</option>
                      <option value="Series-Z Hammer Mill" className="bg-charcoal">Series-Z Hammer Mill</option>
                      <option value="Turnkey Industrial Plant Setup" className="bg-charcoal">Turnkey Industrial Plant Setup</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Strategic Details</label>
                    <textarea name="goals" value={formData.goals} onChange={handleInputChange} className="w-full bg-midnight/50 border border-gold/10 rounded-2xl px-6 py-5 text-ivory focus:ring-2 focus:ring-gold outline-none transition-all min-h-[140px] text-sm font-bold placeholder:text-slate-700" placeholder="Outline your capacity requirements or site constraints..."></textarea>
                  </div>
                  <button type="submit" className="w-full gold-gradient-bg text-midnight font-black uppercase tracking-[0.2em] py-7 rounded-2xl transition-all shadow-gold-glow hover:scale-[1.02] text-sm">
                    Initiate Technical Inquiry
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
