
import React from 'react';
import { IMAGES } from '../images/catalog';

const Sustainability: React.FC = () => {
  return (
    <div className="bg-midnight">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/60 to-midnight z-10"></div>
          <img 
            src={IMAGES.SECTIONS.SUSTAINABILITY_HERO} 
            alt="Nature" 
            className="w-full h-full object-cover grayscale opacity-20"
          />
        </div>
        <div className="relative z-20 max-w-4xl px-4 space-y-10">
          <span className="inline-block px-6 py-2 rounded-full glass-panel text-gold text-[10px] font-black uppercase tracking-[0.3em]">Global Stewardship</span>
          <h1 className="text-5xl md:text-8xl font-black text-ivory uppercase tracking-tighter leading-tight">
            Engineering a <br /> <span className="gold-gradient-text">Clean Legacy</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Transforming industrial waste into high-density energy solutions. Since 1995, we've been the standard for sustainable biomass manufacturing.
          </p>
        </div>
      </section>

      {/* Impact Pillars */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-6">
          <h2 className="text-5xl font-black text-ivory uppercase tracking-tighter">Our Impact Pillars</h2>
          <div className="w-24 h-2 gold-gradient-bg mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Waste to Wealth",
              icon: "recycling",
              img: IMAGES.SECTIONS.PILLARS.WASTE,
              desc: "Transforming agricultural field residues into high-calorie industrial fuel, reducing dependency on fossil coal."
            },
            {
              title: "Carbon Neutrality",
              icon: "co2",
              img: IMAGES.SECTIONS.PILLARS.CARBON,
              desc: "Pioneering the CO2 offset cycle. Our briquetting technology is a critical component of the global zero-carbon roadmap."
            },
            {
              title: "Social Ecosystem",
              icon: "groups",
              img: IMAGES.SECTIONS.PILLARS.COMMUNITY,
              desc: "Creating skilled manufacturing employment in rural sectors, fostering sustainable community development."
            }
          ].map((pillar, idx) => (
            <div key={idx} className="group glass-panel flex flex-col rounded-[3rem] overflow-hidden border-gold/10 hover:border-gold/30 transition-all duration-500">
              <div className="aspect-video relative overflow-hidden">
                <img src={pillar.img} alt={pillar.title} className="w-full h-full object-cover grayscale opacity-50 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100" />
              </div>
              <div className="p-10 space-y-6">
                <div className="size-16 rounded-2xl bg-midnight border border-gold/20 text-gold flex items-center justify-center -mt-20 relative z-10 shadow-glass transition-colors group-hover:bg-gold group-hover:text-midnight">
                  <span className="material-symbols-outlined text-4xl">{pillar.icon}</span>
                </div>
                <h3 className="text-3xl font-black text-ivory uppercase tracking-tighter group-hover:gold-gradient-text transition-all">{pillar.title}</h3>
                <p className="text-base text-slate-400 leading-relaxed font-medium">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industrial Quote */}
      <section className="bg-charcoal py-40 relative overflow-hidden border-y border-gold/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] text-gold pointer-events-none">
          <span className="material-symbols-outlined text-[600px]">eco</span>
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12 relative z-10">
          <span className="material-symbols-outlined text-7xl text-gold-light opacity-50">format_quote</span>
          <h2 className="text-3xl md:text-5xl text-ivory font-bold italic leading-relaxed tracking-tight">
            "Sustainability isn't an option; it's our foundational mandate. We engineer the tools that allow global enterprises to prosper while protecting the planetary balance."
          </h2>
          <div className="space-y-4">
            <div className="text-2xl font-black gold-gradient-text tracking-widest uppercase">Rajesh Vishwakarma</div>
            <div className="text-slate-500 font-black tracking-[0.4em] uppercase text-xs">Principal Engineer & MD</div>
          </div>
        </div>
      </section>

      {/* Report CTA */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="glass-panel rounded-[4rem] p-16 md:p-24 flex flex-col md:flex-row items-center justify-between gap-16 border-gold/10 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 blur-[80px] rounded-full"></div>
          <div className="space-y-6 max-w-xl text-center md:text-left relative z-10">
            <h3 className="text-4xl md:text-5xl font-black text-ivory uppercase tracking-tighter leading-none">Sustainability Audit 2024</h3>
            <p className="text-slate-400 text-xl font-medium leading-relaxed">
              Explore our comprehensive analysis of industrial carbon offsets and biomass energy feasibility metrics.
            </p>
          </div>
          <button className="flex items-center justify-center gap-4 gold-gradient-bg text-midnight font-black uppercase tracking-widest px-12 py-6 rounded-2xl shadow-gold-glow text-sm transition-all hover:scale-105 active:scale-95 relative z-10">
            <span className="material-symbols-outlined">picture_as_pdf</span>
            Access Full Report
          </button>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
