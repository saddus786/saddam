
import React from 'react';
import { IMAGES } from '../images/catalog';

const Sustainability: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.SECTIONS.SUSTAINABILITY_HERO} 
            alt="Nature" 
            className="w-full h-full object-cover grayscale opacity-30"
          />
          <div className="absolute inset-0 bg-background-dark/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl px-4 space-y-8">
          <div className="flex justify-center mb-8">
             <img 
              src={IMAGES.LOGO} 
              alt="VE Logo" 
              className="size-40 object-contain drop-shadow-[0_0_15px_rgba(24,220,41,0.3)] animate-pulse"
            />
          </div>
          <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-black uppercase tracking-[0.2em]">Global Stewardship</span>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight leading-tight">
            Engineering the <br /> Future of Clean Energy
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-medium max-w-2xl mx-auto">
            Transforming the manufacturing landscape through innovative biomass solutions and a deep-rooted commitment to environmental preservation.
          </p>
        </div>
      </section>

      {/* Impact Pillars */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-black text-industrial-charcoal dark:text-white uppercase tracking-tight">Our Impact Pillars</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-green font-medium max-w-2xl mx-auto">
            We align our business objectives with global sustainability goals to create a measurable positive impact on the planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Waste to Wealth",
              icon: "recycling",
              img: IMAGES.SECTIONS.PILLARS.WASTE,
              desc: "Our precision-engineered machines transform agricultural residues—that would otherwise be burnt in fields—into high-calorie renewable fuel."
            },
            {
              title: "Carbon Neutrality",
              icon: "co2",
              img: IMAGES.SECTIONS.PILLARS.CARBON,
              desc: "We are pioneering the CO2 offset cycle. Biomass energy is carbon-neutral as it only releases the carbon absorbed during growth."
            },
            {
              title: "Community Growth",
              icon: "groups",
              img: IMAGES.SECTIONS.PILLARS.COMMUNITY,
              desc: "Beyond machinery, we build livelihoods. Creating manufacturing jobs and technical skill development within rural ecosystems."
            }
          ].map((pillar, idx) => (
            <div key={idx} className="group flex flex-col bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="aspect-video relative overflow-hidden">
                <img src={pillar.img} alt={pillar.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="p-8 space-y-4">
                <div className="size-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center -mt-14 relative z-10 shadow-lg group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">{pillar.icon}</span>
                </div>
                <h3 className="text-2xl font-black text-industrial-charcoal dark:text-white uppercase tracking-tight">{pillar.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="bg-industrial-charcoal py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[300px] text-white">format_quote</span>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12 relative z-10">
          <span className="material-symbols-outlined text-6xl text-primary">format_quote</span>
          <h2 className="text-3xl md:text-5xl text-white font-light italic leading-relaxed">
            "Sustainability isn't a department; it's our DNA. At Vishwakarma, we don't just sell machines; we engineer the tools for a cleaner, more prosperous tomorrow."
          </h2>
          <div className="space-y-2">
            <div className="text-xl font-black text-white tracking-[0.2em] uppercase">Rajesh Vishwakarma</div>
            <div className="text-primary font-black tracking-[0.3em] uppercase text-xs">Managing Director</div>
          </div>
        </div>
      </section>

      {/* Report CTA */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-background-light to-white dark:from-white/5 dark:to-white/10 border border-gray-100 dark:border-white/10 rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-sm">
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <h3 className="text-3xl font-black text-industrial-charcoal dark:text-white uppercase tracking-tight">Download our 2023 Sustainability Report</h3>
            <p className="text-gray-500 text-lg font-medium leading-relaxed">
              Get in-depth insights into our environmental performance, social impact metrics, and our roadmap for 2030 climate goals.
            </p>
          </div>
          <button className="flex items-center justify-center gap-3 bg-primary text-industrial-charcoal font-black uppercase tracking-widest px-10 py-5 rounded-2xl hover:scale-105 transition-all shadow-xl shadow-primary/20 text-sm">
            <span className="material-symbols-outlined">picture_as_pdf</span>
            Download PDF (12.4 MB)
          </button>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
