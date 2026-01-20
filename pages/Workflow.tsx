
import React from 'react';
import { IMAGES } from '../images/catalog';

const Workflow: React.FC = () => {
  const steps = [
    { title: "Material Intake", icon: "cyclone", desc: "Raw biomass, agro-residues, or sawdust is introduced into the heavy-duty industrial hopper." },
    { title: "Refining", icon: "settings_input_component", desc: "Size reduction and moisture equalization via precision Series-Z Hammer Mills." },
    { title: "Pre-Crushing", icon: "precision_manufacturing", desc: "Dual-stage processing ensures uniform particle density for the compression chamber." },
    { title: "Compression", icon: "bolt", desc: "High-pressure mechanical binding (without chemicals) using flagship VK-series presses." },
    { title: "Calibration", icon: "inventory_2", desc: "Automated cooling and precision cutting of high-density briquettes for dispatch." }
  ];

  return (
    <div className="py-32 bg-midnight">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32 space-y-6">
          <span className="text-xs font-black text-gold uppercase tracking-[0.5em]">Process Architecture</span>
          <h1 className="text-6xl md:text-8xl font-black text-ivory uppercase tracking-tighter leading-none">Industrial Workflow</h1>
          <div className="w-24 h-2 gold-gradient-bg mx-auto rounded-full"></div>
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Our automated production lines are engineered for 24/7 duty cycles with zero binders and maximum thermal efficiency.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-gold/20 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-8 group">
                <div className="size-24 rounded-[2rem] bg-charcoal border border-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-midnight group-hover:border-gold transition-all duration-700 shadow-glass group-hover:shadow-gold-glow">
                  <span className="material-symbols-outlined text-4xl font-black">{step.icon}</span>
                </div>
                <div className="space-y-4">
                  <div className="text-[10px] font-black text-gold uppercase tracking-[0.4em] opacity-40">Phase 0{idx + 1}</div>
                  <h4 className="text-2xl font-black text-ivory uppercase tracking-tighter group-hover:gold-gradient-text transition-all">
                    {step.title}
                  </h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed px-2">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow Visualization */}
        <section className="mt-48">
          <div className="rounded-[4rem] overflow-hidden shadow-glass bg-charcoal border border-gold/10 group relative aspect-[21/9]">
            <img 
              src={IMAGES.SECTIONS.WORKFLOW_HERO} 
              alt="Industrial Workflow" 
              className="w-full h-full object-cover opacity-30 grayscale group-hover:scale-105 transition-all duration-[2000ms]"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-midnight/40 group-hover:bg-midnight/10 transition-colors">
              <div className="p-12 text-center space-y-6">
                <h3 className="text-4xl md:text-6xl font-black text-ivory uppercase tracking-tighter">Plant Visualization</h3>
                <div className="flex items-center justify-center gap-4">
                  <span className="size-3 bg-emerald rounded-full animate-ping"></span>
                  <p className="text-gold font-black uppercase tracking-[0.3em] text-[10px]">Real-Time Monitoring Active</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Workflow;
