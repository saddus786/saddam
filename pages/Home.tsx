
import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../images/catalog';

const Home: React.FC = () => {
  return (
    <div className="bg-midnight overflow-hidden">
      {/* Cinematic Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Cinematic Backdrop */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight z-10"></div>
          <img 
            src={IMAGES.HERO.FALLBACK_THUMB} 
            alt="Industrial Background" 
            className="w-full h-full object-cover grayscale opacity-30 scale-105"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-4xl space-y-12">
            <div className="inline-flex items-center gap-3 glass-panel px-6 py-2 rounded-full">
              <span className="size-2.5 bg-gold rounded-full animate-pulse shadow-gold-glow"></span>
              <span className="text-[10px] font-black text-ivory uppercase tracking-[0.3em]">
                Excellence in Engineering Since 1995
              </span>
            </div>

            <h1 className="text-6xl md:text-[100px] font-black leading-[0.9] tracking-tighter uppercase text-ivory">
              High-Performance <br />
              <span className="gold-gradient-text">Briquetting Machines</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl leading-relaxed">
              Save Energy. Reduce Waste. Increase Profits. <br className="hidden md:block" />
              Engineering high-torque biomass solutions for the global green energy market.
            </p>

            <div className="flex flex-wrap gap-6 pt-6">
              <Link
                to="/get-a-quote"
                className="group flex items-center justify-center gap-4 gold-gradient-bg text-midnight px-12 py-6 rounded-2xl font-black uppercase tracking-widest transition-all shadow-gold-glow hover:scale-105 active:scale-95"
              >
                Get Free Quote
                <span className="material-symbols-outlined text-2xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </Link>
              <a
                href="https://wa.me/919173477775"
                target="_blank"
                className="flex items-center justify-center gap-4 glass-panel text-emerald px-12 py-6 rounded-2xl font-black uppercase tracking-widest transition-all hover:bg-emerald/10 shadow-emerald-glow active:scale-95"
              >
                <span className="material-symbols-outlined text-2xl">chat</span>
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Stats Section */}
      <section className="bg-charcoal border-y border-gold/10 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Installations", val: "250+", color: "gold-gradient-text" },
              { label: "Countries Served", val: "20+", color: "text-ivory" },
              { label: "Annual Growth", val: "100%", color: "gold-gradient-text" },
              { label: "Customer Support", val: "24/7", color: "text-ivory" }
            ].map((stat, idx) => (
              <div key={idx} className="group glass-panel p-10 rounded-[2.5rem] transition-all hover:-translate-y-2 text-center md:text-left">
                <div className={`text-6xl font-black ${stat.color} tracking-tighter mb-4`}>{stat.val}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-gold transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Catalog */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-black text-ivory uppercase tracking-tighter leading-none">
                Industrial <br /> <span className="gold-gradient-text">Mastery</span>
              </h2>
              <div className="w-24 h-2 gold-gradient-bg rounded-full"></div>
            </div>
            <Link to="/products" className="text-sm font-black text-gold uppercase tracking-[0.2em] hover:underline flex items-center gap-3">
              Explore Full Range <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { id: "1", name: "VK-90 Briquette Press", img: IMAGES.MACHINES.VK90_PRIMARY, tag: "Heavy Duty" },
              { id: "2", name: "Series-X Wood Chipper", img: IMAGES.MACHINES.SERIES_X, tag: "Max Torque" },
              { id: "3", name: "VK-Mill Pro Grinder", img: IMAGES.MACHINES.SERIES_Z, tag: "Precision" }
            ].map((product) => (
              <div key={product.id} className="group flex flex-col glass-panel rounded-[40px] overflow-hidden transition-all duration-500 border-gold/5 hover:border-gold/40">
                <div className="p-6">
                  <div className="aspect-[4/3] relative rounded-[30px] overflow-hidden mb-8">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" 
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-midnight/80 backdrop-blur-md text-gold text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full border border-gold/20 shadow-glass">
                        {product.tag}
                      </span>
                    </div>
                  </div>
                  <div className="px-4 pb-8 space-y-6">
                    <h3 className="text-3xl font-black text-ivory tracking-tighter uppercase leading-none group-hover:gold-gradient-text transition-all">
                      {product.name}
                    </h3>
                    <Link 
                      to={`/products/${product.id}`} 
                      className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-gold hover:text-gold-light transition-all"
                    >
                      TECHNICAL SPECIFICATIONS
                      <span className="material-symbols-outlined text-xl group-hover:translate-x-2 transition-transform">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-40 bg-charcoal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12 relative z-10">
          <h2 className="text-5xl md:text-8xl font-black text-ivory uppercase tracking-tighter leading-none">
            Built for <span className="gold-gradient-text">Global Markets</span>
          </h2>
          <p className="text-xl md:text-3xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed italic">
            "Establishing the new standard for industrial reliability and environmental compliance."
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-10">
            <Link to="/get-a-quote" className="w-full md:w-auto gold-gradient-bg text-midnight px-16 py-6 rounded-2xl font-black uppercase tracking-[0.2em] shadow-gold-glow hover:scale-105 transition-all">
              Request Commercial Proposal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
