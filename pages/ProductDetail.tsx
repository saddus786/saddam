
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../constants/products';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const [submitted, setSubmitted] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    message: ''
  });

  if (!product) {
    return (
      <div className="min-h-screen bg-midnight flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4 text-ivory">Product Not Found</h2>
          <Link to="/products" className="text-gold font-bold uppercase tracking-widest hover:underline">Return to Catalog</Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const currentMainImage = activeImage || product.image;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Vishwakarma Engineering, I have an inquiry about the *${product.name}*.
*Full Name:* ${formData.fullName}
*Business Email:* ${formData.businessEmail}
*Message:* ${formData.message || 'I would like to get a quote.'}`;
    const encodedMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919173477775?text=${encodedMsg}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-midnight pb-20">
      <main className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12">
        <nav className="flex items-center gap-2 mb-12 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
          <Link className="hover:text-gold transition-colors" to="/">Home</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <Link className="hover:text-gold transition-colors" to="/products">Machinery Catalog</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-ivory">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-16">
            <div className="space-y-8">
              <div className="rounded-[2.5rem] overflow-hidden glass-panel p-4">
                <div className="aspect-[16/10] overflow-hidden rounded-[2rem]">
                  <img 
                    src={currentMainImage} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 grayscale opacity-80 hover:grayscale-0 hover:opacity-100" 
                  />
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3 text-ivory">
                <span className="material-symbols-outlined text-gold text-3xl font-black">verified</span>
                Key Performance Indicators
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {product.features?.map((feature, idx) => (
                  <div key={idx} className="glass-panel p-10 rounded-[2rem] hover:border-gold/30 transition-all flex flex-col gap-6">
                    <div className="size-14 rounded-2xl bg-gold/10 text-gold flex items-center justify-center shrink-0 border border-gold/20">
                      <span className="material-symbols-outlined text-3xl font-black">{feature.icon}</span>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-black text-xl uppercase tracking-tighter text-ivory leading-tight">{feature.title}</h4>
                      <p className="text-sm text-slate-400 font-medium leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex flex-col gap-10 sticky top-32">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 text-gold text-[10px] font-black uppercase tracking-widest rounded-full mb-8 border border-gold/30">
                <span className="material-symbols-outlined text-xs">check_circle</span>
                Certified Enterprise Grade
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase leading-[1] text-ivory">{product.name}</h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-10 font-medium max-w-lg">
                {product.longDescription || product.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="glass-panel p-8 rounded-3xl">
                  <p className="text-[10px] font-black text-gold uppercase tracking-[0.2em] mb-2">Capacity</p>
                  <p className="text-3xl font-black text-ivory">{product.capacity || '1200 kg/hr'}</p>
                </div>
                <div className="glass-panel p-8 rounded-3xl">
                  <p className="text-[10px] font-black text-gold uppercase tracking-[0.2em] mb-2">Motor</p>
                  <p className="text-3xl font-black text-ivory">{product.power || '90 HP'}</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-charcoal p-10 md:p-12 rounded-[2.3rem] shadow-glass border border-gold/10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="size-24 rounded-full bg-gold/10 text-gold flex items-center justify-center mb-8 border border-gold/30 shadow-gold-glow">
                      <span className="material-symbols-outlined text-5xl font-black">check</span>
                    </div>
                    <h3 className="text-3xl font-black text-ivory uppercase mb-4 tracking-tighter">Inquiry Sent!</h3>
                  </div>
                ) : (
                  <>
                    <h3 className="text-3xl font-black text-ivory uppercase mb-10 tracking-tighter">Request Quote</h3>
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Name</label>
                        <input 
                          required 
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full bg-midnight border border-gold/10 rounded-xl px-5 py-4 text-ivory focus:ring-1 focus:ring-gold outline-none transition-all text-sm font-bold" 
                          placeholder="Full Name" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email</label>
                        <input 
                          required 
                          type="email" 
                          name="businessEmail"
                          value={formData.businessEmail}
                          onChange={handleInputChange}
                          className="w-full bg-midnight border border-gold/10 rounded-xl px-5 py-4 text-ivory focus:ring-1 focus:ring-gold outline-none transition-all text-sm font-bold" 
                          placeholder="Email Address" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Message</label>
                        <textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full bg-midnight border border-gold/10 rounded-xl px-5 py-4 text-ivory focus:ring-1 focus:ring-gold outline-none transition-all text-sm min-h-[120px] font-bold" 
                          placeholder="Requirement details..."
                        ></textarea>
                      </div>
                      <button type="submit" className="w-full gold-gradient-bg text-midnight font-black uppercase tracking-[0.2em] py-6 rounded-2xl transition-all shadow-gold-glow text-sm active:scale-95">
                        Get Proposal
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {product.technicalSpecs && (
          <div className="mt-40">
            <h3 className="text-4xl font-black uppercase tracking-tighter text-ivory mb-16 text-center lg:text-left">Technical Parameters</h3>
            <div className="glass-panel rounded-[2.5rem] overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5">
                    <th className="px-10 py-8 text-[11px] font-black uppercase tracking-[0.3em] text-slate-500">Parameter</th>
                    <th className="px-10 py-8 text-[11px] font-black uppercase tracking-[0.3em] text-gold">Standard</th>
                    <th className="px-10 py-8 text-[11px] font-black uppercase tracking-[0.3em] text-slate-500">Optional</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gold/10">
                  {product.technicalSpecs.map((spec, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="px-10 py-8 text-sm font-black uppercase text-ivory">{spec.parameter}</td>
                      <td className="px-10 py-8 text-sm text-slate-300">{spec.standard}</td>
                      <td className="px-10 py-8 text-sm text-slate-500 italic">{spec.optional || 'N/A'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductDetail;
