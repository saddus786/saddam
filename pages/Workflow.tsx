
import React from 'react';
import { IMAGES } from '../images/catalog';

const Workflow: React.FC = () => {
  const steps = [
    { title: "Material Collection", icon: "cyclone", desc: "Raw biomass, husk, or sawdust input into the primary industrial hopper." },
    { title: "Processing", icon: "settings_input_component", desc: "Size reduction and moisture control via precision Hammer Mills and Flash Dryers." },
    { title: "Crushing", icon: "precision_manufacturing", desc: "Multi-stage crushing ensures uniform particle size for optimal compression." },
    { title: "Briquetting", icon: "bolt", desc: "High-pressure mechanical compression without chemical binders to create high-density logs." },
    { title: "Final Output", icon: "inventory_2", desc: "Automated cooling and precision cutting of white coal briquettes for storage." }
  ];

  return (
    <div className="py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 space-y-4">
          <h1 className="text-5xl font-black text-industrial-charcoal dark:text-white uppercase tracking-tight">Precision Engineering Workflow</h1>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Our automated production lines are designed for maximum efficiency with minimal manual intervention.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-1 bg-gradient-to-r from-primary/10 via-primary to-primary/10 rounded-full z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-6 group">
                <div className="size-20 rounded-2xl bg-white dark:bg-white/5 border-2 border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500 shadow-lg group-hover:shadow-primary/30">
                  <span className="material-symbols-outlined text-4xl">{step.icon}</span>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-black text-industrial-charcoal dark:text-white uppercase tracking-tight">
                    <span className="text-primary mr-2">0{idx + 1}.</span>
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed px-4">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow Image - From Catalog */}
        <section className="mt-32">
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-industrial-charcoal border border-white/5 group relative">
            <img 
              src={IMAGES.SECTIONS.WORKFLOW_HERO} 
              alt="Industrial Workflow" 
              className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
              <div className="p-8 text-center space-y-4">
                <h3 className="text-4xl font-black text-white uppercase tracking-tight">Full Automated Plant Visualization</h3>
                <p className="text-gray-300 font-medium">Click to experience our interactive plant walkthrough</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Workflow;
