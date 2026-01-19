
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
      <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="text-center">
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Product Not Found</h2>
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

    // Construct WhatsApp message with all details
    const message = `Hello Vishwakarma Engineering, I have an inquiry about the *${product.name}*.
    
*Full Name:* ${formData.fullName}
*Business Email:* ${formData.businessEmail}
*Message:* ${formData.message || 'I would like to get a quote and more technical details.'}`;

    const encodedMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919173477775?text=${encodedMsg}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-[#f9fafb] min-h-screen pb-20">
      <main className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 mb-12 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
          <Link className="hover:text-primary transition-colors" to="/">Home</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <Link className="hover:text-primary transition-colors" to="/products">Machinery Catalog</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Visuals & KPIs */}
          <div className="lg:col-span-7 space-y-16">
            <div className="space-y-8">
              <div className="rounded-[2.5rem] overflow-hidden shadow-xl bg-white p-4">
                <div className="aspect-[16/10] overflow-hidden rounded-[2rem]">
                  <img 
                    src={currentMainImage} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                  />
                </div>
              </div>

              {/* Gallery Thumbnails */}
              {product.gallery && product.gallery.length > 0 && (
                <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                  <button 
                    onClick={() => setActiveImage(product.image)}
                    className={`flex-shrink-0 w-24 h-24 rounded-2xl border-4 overflow-hidden transition-all ${!activeImage || activeImage === product.image ? 'border-primary' : 'border-transparent opacity-60'}`}
                  >
                    <img src={product.image} className="w-full h-full object-cover" alt="Primary" />
                  </button>
                  {product.gallery.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`flex-shrink-0 w-24 h-24 rounded-2xl border-4 overflow-hidden transition-all ${activeImage === img ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'}`}
                    >
                      <img src={img} className="w-full h-full object-cover" alt={`View ${idx + 1}`} />
                    </button>
                  ))}
                  {/* Additional mock static thumbnails for aesthetic parity with screenshot */}
                  <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-gray-200 overflow-hidden"><img src="https://picsum.photos/200/200?motor" className="w-full h-full object-cover grayscale" /></div>
                  <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-gray-200 overflow-hidden"><img src="https://picsum.photos/200/200?bearing" className="w-full h-full object-cover grayscale" /></div>
                </div>
              )}
            </div>

            {/* Features Section - KEY PERFORMANCE INDICATORS */}
            <div className="space-y-10">
              <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3 text-gray-900">
                <span className="material-symbols-outlined text-primary text-3xl font-black">verified</span>
                Key Performance Indicators
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Low Maintenance", icon: "settings_suggest", desc: "Engineered with self-lubricating systems for 24/7 industrial operation with minimal downtime." },
                  { title: "High Efficiency", icon: "energy_savings_leaf", desc: "Optimized power consumption to output ratio, maximizing your ROI on every ton produced." },
                  { title: "Heavy-Duty Build", icon: "precision_manufacturing", desc: "Reinforced steel frame and precision-ground components for extreme durability." }
                ].map((feature, idx) => (
                  <div key={idx} className="bg-white p-10 rounded-[2rem] shadow-sm border border-transparent hover:border-primary/20 transition-all flex flex-col gap-6">
                    <div className="size-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-3xl font-black">{feature.icon}</span>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-black text-xl uppercase tracking-tighter text-gray-900 leading-tight">{feature.title}</h4>
                      <p className="text-sm text-gray-400 font-medium leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Info & Form */}
          <div className="lg:col-span-5 flex flex-col gap-10 sticky top-32">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full mb-8">
                <span className="material-symbols-outlined text-xs">check_circle</span>
                Certified Enterprise Grade
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase leading-[1] text-[#1a2b3c]">{product.name}</h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-10 font-medium max-w-lg">
                {product.longDescription || product.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Capacity</p>
                  <p className="text-3xl font-black text-[#1a2b3c]">{product.capacity || '1200 kg/hr'}</p>
                </div>
                <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Motor</p>
                  <p className="text-3xl font-black text-[#1a2b3c]">{product.power || '90 HP'}</p>
                </div>
              </div>
            </div>

            {/* Quote Form - MATCHING SCREENSHOT */}
            <div className="relative">
              {/* Blue outline container from screenshot */}
              <div className="absolute -inset-4 border-2 border-[#3b82f6] rounded-[2.5rem] pointer-events-none opacity-50"></div>
              
              <div className="bg-[#1e293b] p-1.5 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <div className="bg-[#1e293b] p-10 md:p-12 rounded-[2.3rem]">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center animate-in zoom-in duration-500">
                      <div className="size-24 rounded-full bg-primary text-white flex items-center justify-center mb-8 shadow-2xl shadow-primary/30">
                        <span className="material-symbols-outlined text-5xl font-black">check</span>
                      </div>
                      <h3 className="text-3xl font-black text-white uppercase mb-4 tracking-tighter">Proposal Requested!</h3>
                      <p className="text-gray-400 text-lg font-medium">Opening WhatsApp for instant connection...</p>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-3xl font-black text-white uppercase mb-4 tracking-tighter">Request Instant Quote</h3>
                      <p className="text-gray-400 text-sm mb-12 font-bold uppercase tracking-widest opacity-60">Lead time: Under 2 business hours.</p>
                      <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="space-y-3">
                          <label className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-500">Full Name</label>
                          <input 
                            required 
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full bg-[#2a374a] border-none rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:ring-2 focus:ring-primary transition-all text-sm font-bold" 
                            placeholder="John Doe" 
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-500">Business Email</label>
                          <input 
                            required 
                            type="email" 
                            name="businessEmail"
                            value={formData.businessEmail}
                            onChange={handleInputChange}
                            className="w-full bg-[#2a374a] border-none rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:ring-2 focus:ring-primary transition-all text-sm font-bold" 
                            placeholder="rahul@enterprise.com" 
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-500">Message</label>
                          <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full bg-[#2a374a] border-none rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:ring-2 focus:ring-primary transition-all text-sm min-h-[120px] font-bold" 
                            placeholder="Describe your requirements..."
                          ></textarea>
                        </div>
                        <button type="submit" className="w-full bg-primary hover:bg-[#14b823] text-gray-900 font-black uppercase tracking-[0.2em] py-6 rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-4 text-sm active:scale-95 group">
                          Get Proposal
                          <span className="material-symbols-outlined font-black group-hover:translate-x-1 transition-transform">send</span>
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications Section */}
        {product.technicalSpecs && (
          <div className="mt-40">
            <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16">
              <div className="space-y-6">
                <h3 className="text-4xl font-black uppercase tracking-tighter text-gray-900">Technical Deep Dive</h3>
                <div className="w-24 h-2 bg-primary rounded-full"></div>
              </div>
              <p className="text-lg text-gray-400 font-medium max-w-sm">Detailed parameters for industrial-grade integration.</p>
            </div>
            <div className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-10 py-8 text-[11px] font-black uppercase tracking-[0.3em] text-gray-400">Parameter</th>
                    <th className="px-10 py-8 text-[11px] font-black uppercase tracking-[0.3em] text-primary">Standard Configuration</th>
                    <th className="px-10 py-8 text-[11px] font-black uppercase tracking-[0.3em] text-gray-400">Advanced Option</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {product.technicalSpecs.map((spec, idx) => (
                    <tr key={idx} className="hover:bg-primary/5 transition-colors group">
                      <td className="px-10 py-8 text-sm font-black uppercase tracking-tight text-gray-900 group-hover:text-primary transition-colors">{spec.parameter}</td>
                      <td className="px-10 py-8 text-sm text-gray-600 font-medium">{spec.standard}</td>
                      <td className="px-10 py-8 text-sm text-gray-400 font-medium italic">{spec.optional || 'N/A'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <section className="mt-40 py-24 px-12 bg-white rounded-[3rem] border border-gray-100 shadow-sm text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 text-[#1a2b3c] leading-tight">Need a custom facility blueprint?</h2>
          <p className="text-gray-400 font-medium text-xl max-w-3xl mx-auto mb-16">
            Our engineering team specializes in complete plant layouts. From site survey to automated output management.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <button className="bg-gray-900 text-white px-14 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-black transition-all shadow-2xl active:scale-95">
              Download Catalog
            </button>
            <Link to="/get-a-quote" className="border-4 border-primary text-primary px-14 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-all active:scale-95">
              Consult Head Engineer
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetail;
