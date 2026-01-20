
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4 text-white">Product Not Found</h2>
          <Link to="/products" className="text-primary font-bold uppercase tracking-widest hover:underline">Return to Catalog</Link>
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
    <div className="pb-20">
      <main className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12">
        <nav className="flex items-center gap-2 mb-12 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
          <Link className="hover:text-primary transition-colors" to="/">Home</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <Link className="hover:text-primary transition-colors" to="/products">Machinery Catalog</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-white">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-16">
            <div className="space-y-8">
              <div className="rounded-[2.5rem] overflow-hidden glass-card p-4">
                <div className="aspect-[16/10] overflow-hidden rounded-[2rem]">
                  <img 
                    src={currentMainImage} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                  />
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3 text-white">
                <span className="material-symbols-outlined text-primary text-3xl font-black">verified</span>
                Key Performance Indicators
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {product.features?.map((feature, idx) => (
                  <div key={idx} className="glass-card p-10 rounded-[2rem] hover:border-primary/30 transition-all flex flex-col gap-6">
                    <div className="size-14 rounded-2xl bg-primary/20 text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-3xl font-black">{feature.icon}</span>
                    </div>
                    <div className="space-y-4 text-center">
                      <h4 className="font-black text-xl uppercase tracking-tighter text-white leading-tight">{feature.title}</h4>
                      <p className="text-sm text-gray-400 font-medium leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex flex-col gap-10 sticky top-32">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary text-[10px] font-black uppercase tracking-widest rounded-full mb-8 border border-primary/30">
                <span className="material-symbols-outlined text-xs">check_circle</span>
                Certified Enterprise Grade
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase leading-[1] text-white">{product.name}</h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-10 font-medium max-w-lg">
                {product.longDescription || product.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="glass-card p-8 rounded-3xl">
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Capacity</p>
                  <p className="text-3xl font-black text-white">{product.capacity || '1200 kg/hr'}</p>
                </div>
                <div className="glass-card p-8 rounded-3xl">
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Motor</p>
                  <p className="text-3xl font-black text-white">{product.power || '90 HP'}</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 border-2 border-accent/30 rounded-[2.5rem] pointer-events-none"></div>
              <div className="bg-background-deeper p-10 md:p-12 rounded-[2.3rem] shadow-2xl border border-white/5">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="size-24 rounded-full bg-primary text-white flex items-center justify-center mb-8 shadow-2xl">
                      <span className="material-symbols-outlined text-5xl font-black">check</span>
                    </div>
                    <h3 className="text-3xl font-black text-white uppercase mb-4 tracking-tighter">Inquiry Sent!</h3>
                  </div>
                ) : (
                  <>
                    <h3 className="text-3xl font-black text-white uppercase mb-10 tracking-tighter">Request Quote</h3>
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <input 
                        required 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-accent transition-all text-sm font-bold" 
                        placeholder="Full Name" 
                      />
                      <input 
                        required 
                        type="email" 
                        name="businessEmail"
                        value={formData.businessEmail}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-accent transition-all text-sm font-bold" 
                        placeholder="Email Address" 
                      />
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-accent transition-all text-sm min-h-[120px] font-bold" 
                        placeholder="Requirement details..."
                      ></textarea>
                      <button type="submit" className="w-full bg-primary hover:brightness-110 text-background-dark font-black uppercase tracking-[0.2em] py-6 rounded-2xl transition-all shadow-xl shadow-primary/20 text-sm active:scale-95">
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
            <h3 className="text-4xl font-black uppercase tracking-tighter text-white mb-16 text-center lg:text-left">Technical Parameters</h3>
            <div className="glass-card rounded-[2.5rem] overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5">
                    <th className="px-10 py-8 text-[11px] font-black uppercase tracking-[0.3em] text-gray-400">Parameter</th>
                    <th className="px-10 py-8 text-[11px] font-black uppercase tracking-[0.3em] text-primary">Standard</th>
                    <th className="px-10 py-8 text-[11px] font-black uppercase tracking-[0.3em] text-gray-500">Optional</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {product.technicalSpecs.map((spec, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="px-10 py-8 text-sm font-black uppercase text-white">{spec.parameter}</td>
                      <td className="px-10 py-8 text-sm text-gray-300">{spec.standard}</td>
                      <td className="px-10 py-8 text-sm text-gray-500 italic">{spec.optional || 'N/A'}</td>
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
