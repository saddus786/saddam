
import React from 'react';
import { IMAGES } from '../images/catalog';

const Certifications: React.FC = () => {
  const certs = [
    { title: "ISO 9001:2015", subtitle: "Quality Management System", icon: "verified" },
    { title: "CE Marking", subtitle: "European Safety Standards", icon: "security" },
    { title: "Export Excellence", subtitle: "Global Trade Compliance", icon: "public" },
    { title: "BEE Star Rated", subtitle: "Energy Efficiency Certified", icon: "energy_savings_leaf" }
  ];

  return (
    <div className="py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 space-y-4">
          <h1 className="text-5xl font-black text-industrial-charcoal dark:text-white uppercase tracking-tight">Global Compliance</h1>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Our machines are built to meet the most stringent international quality and safety benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {certs.map((cert, idx) => (
            <div key={idx} className="bg-white dark:bg-white/5 p-12 rounded-3xl border border-gray-100 dark:border-white/10 shadow-sm flex items-center gap-10 group hover:border-primary/50 transition-all">
              <div className="size-20 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-500 shadow-lg">
                <span className="material-symbols-outlined text-4xl">{cert.icon}</span>
              </div>
              <div>
                <h3 className="text-3xl font-black text-industrial-charcoal dark:text-white uppercase tracking-tight">{cert.title}</h3>
                <p className="text-lg text-gray-500 font-medium">{cert.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Global Reach Map Background - From Catalog */}
        <section className="relative rounded-[3rem] overflow-hidden bg-industrial-charcoal p-12 md:p-24 text-center">
          <div className="absolute inset-0 z-0">
            <img 
              src={IMAGES.SECTIONS.MAP_BG} 
              alt="World Map" 
              className="w-full h-full object-cover grayscale opacity-20"
            />
          </div>
          <div className="relative z-10 space-y-12">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight">Trusted in Over <br /> <span className="text-primary">20 Countries</span> Worldwide</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { label: "Installations", val: "500+" },
                { label: "Partners", val: "50+" },
                { label: "Patents", val: "12" },
                { label: "Awards", val: "08" }
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-4xl font-black text-white mb-2">{stat.val}</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">{stat.label}</div>
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
