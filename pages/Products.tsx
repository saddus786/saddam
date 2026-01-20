
import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../constants/products';

const Products: React.FC = () => {
  return (
    <div className="py-32 bg-midnight">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-6 animate-fade-in">
          <span className="text-xs font-black text-gold uppercase tracking-[0.5em]">Precision Machinery Portfolio</span>
          <h1 className="text-6xl font-black text-ivory uppercase tracking-tighter leading-none">Engineering Catalog</h1>
          <div className="w-32 h-2 gold-gradient-bg mx-auto rounded-full"></div>
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
            World-class industrial equipment engineered for the highest duty cycles and maximum energy efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, idx) => (
            <div key={product.id} className={`group glass-panel rounded-[3rem] overflow-hidden transition-all duration-700 border-gold/10 hover:border-gold/40 shadow-glass flex flex-col shimmer-effect animate-fade-in stagger-${(idx % 4) + 1}`}>
              <Link to={`/products/${product.id}`} className="block relative aspect-video overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.2s] ease-out" 
                />
                {product.tag && (
                  <div className="absolute top-6 left-6">
                    <span className="bg-gold text-midnight text-[10px] font-black uppercase tracking-widest px-5 py-2 rounded-full shadow-gold-glow">
                      {product.tag}
                    </span>
                  </div>
                )}
              </Link>
              <div className="p-10 flex flex-col flex-1 space-y-6">
                <Link to={`/products/${product.id}`} className="hover:gold-gradient-text transition-all duration-500">
                  <h3 className="text-3xl font-black text-ivory uppercase leading-none tracking-tighter">{product.name}</h3>
                </Link>
                <p className="text-base text-slate-500 leading-relaxed font-medium line-clamp-3">{product.description}</p>
                <div className="pt-8 mt-auto border-t border-gold/5 flex items-center justify-between">
                  <Link 
                    to={`/products/${product.id}`}
                    className="group/link flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-gold hover:text-gold-light transition-all"
                  >
                    TECHNICAL SPECS
                    <span className="material-symbols-outlined text-xl group-hover/link:translate-x-2 transition-transform">arrow_right_alt</span>
                  </Link>
                  <button className="size-12 rounded-full bg-gold/5 border border-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-midnight transition-all active:scale-90">
                    <span className="material-symbols-outlined">download</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Catalog Conversion Section - Fixed Visibility */}
        <section className="mt-32 p-16 md:p-24 bg-charcoal/50 rounded-[4rem] relative overflow-hidden border border-gold/20 animate-fade-in backdrop-blur-sm">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 blur-[130px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none floating-bg"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-2xl text-center lg:text-left space-y-8">
              <h2 className="text-5xl md:text-7xl font-black text-ivory uppercase tracking-tighter leading-none">Ready for Large-Scale <br className="hidden md:block" /> <span className="gold-gradient-text">Production?</span></h2>
              <p className="text-slate-300 text-xl font-medium leading-relaxed">
                Consult with our project engineers to design a custom production line integration for your facility.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 w-full lg:w-auto">
              <Link to="/get-a-quote" className="group gold-gradient-bg text-midnight px-14 py-7 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all text-sm shadow-gold-glow active:scale-95 overflow-hidden flex items-center justify-center gap-3">
                Request Quote
                <span className="material-symbols-outlined font-black">arrow_forward</span>
              </Link>
              <button className="glass-panel text-ivory border-gold/30 px-14 py-7 rounded-2xl font-black uppercase tracking-widest hover:bg-white/10 transition-all text-sm active:scale-95 flex items-center justify-center">
                Full 2024 Catalog
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
