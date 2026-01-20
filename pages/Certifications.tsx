
import React from 'react';
import { IMAGES } from '../images/catalog';

const Certifications: React.FC = () => {
  const certs = [
    { title: "ISO 9001:2015", subtitle: "Quality Management Standard", icon: "verified" },
    { title: "CE Compliant", subtitle: "European Safety Accreditation", icon: "security" },
    { title: "Export Excellence", subtitle: "International Trade Authorization", icon: "public" },
    { title: "BEE Certified", subtitle: "High-Efficiency Energy Rating", icon: "energy_savings_leaf" }
  ];

  return (
    <div className="py-32 bg-midnight min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32 space-y-6">
          <span className="text-xs font-black text-gold uppercase tracking-[0.5em]">Global Trade Standards</span>
          <h1 className="text-6xl md:text-8xl font-black text-ivory uppercase tracking-tighter leading-none">Compliance Hub</h1>
          <div className="w-24 h-2 gold-gradient-bg mx-auto rounded-full"></div>
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Vishwakarma Engineering machinery is built to exceed international safety, quality, and environmental benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
          {certs.map((cert, idx) => (
            <div key={idx} className="glass-panel p-12 rounded-[3.5rem] border-gold/10 flex items-center gap-10 group hover:border-gold/30 transition-all shadow-glass">
              <div className="size-20 rounded-2xl bg-midnight border border-gold/10 text-gold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-midnight transition-all duration-700 shadow-gold-glow">
                <span className="material-symbols-outlined text-4xl">{cert.icon}</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-black text-ivory uppercase tracking-tighter group-hover:gold-gradient-text transition-all leading-none">{cert.title}</h3>
                <p className="text-lg text-slate-500 font-medium">{cert.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Global Reach Visualization */}
        <section className="relative rounded-[4rem] overflow-hidden bg-charcoal border border-gold/10 p-16 md:p-32 text-center shadow-glass">
          <div className="absolute inset-0 z-0">
            <img 
              src={IMAGES.SECTIONS.MAP_BG} 
              alt="World Map" 
              className="w-full h-full object-cover grayscale opacity-10"
            />
          </div>
          <div className="relative z-10 space-y-16">
            <h2 className="text-5xl md:text-8xl font-black text-ivory uppercase tracking-tighter leading-none">Global <br /> <span className="gold-gradient-text">Export Leader</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { label: "Installations", val: "500+" },
                { label: "Global Partners", val: "50+" },
                { label: "Patents Held", val: "12" },
                { label: "Design Awards", val: "08" }
              ].map((stat, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="text-5xl md:text-6xl font-black text-ivory tracking-tighter">{stat.val}</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Certifications;
