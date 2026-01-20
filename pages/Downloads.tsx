
import React from 'react';
import { PDF_LINKS } from '../pdf/documents';

const Downloads: React.FC = () => {
  const resources = [
    { title: "Corporate Catalog 2024", size: "8.4 MB", type: "Catalog", color: "text-gold", url: PDF_LINKS.FULL_CATALOG },
    { title: "VK-90 Technical Dossier", size: "2.1 MB", type: "Specs", color: "text-gold", url: PDF_LINKS.VK90_TECHNICAL },
    { title: "Series-X Safety Protocols", size: "4.5 MB", type: "Manual", color: "text-gold", url: PDF_LINKS.CHIPPER_MANUAL },
    { title: "Plant Design Blueprints", size: "12.2 MB", type: "Guide", color: "text-gold", url: PDF_LINKS.PLANT_BLUEPRINT },
    { title: "Biomass Density Matrix", size: "1.1 MB", type: "Data", color: "text-gold", url: PDF_LINKS.MOISTURE_CHART },
    { title: "ESG Impact Report", size: "15.4 MB", type: "Report", color: "text-gold", url: PDF_LINKS.SUSTAINABILITY_REPORT }
  ];

  return (
    <div className="py-32 bg-midnight min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-6">
          <span className="text-xs font-black text-gold uppercase tracking-[0.5em]">Technical Knowledge Base</span>
          <h1 className="text-6xl md:text-8xl font-black text-ivory uppercase tracking-tighter leading-none">Resource Center</h1>
          <div className="w-24 h-2 gold-gradient-bg mx-auto rounded-full"></div>
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Access secure technical documentation, industrial specifications, and compliance certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {resources.map((res, idx) => (
            <a 
              key={idx} 
              href={res.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-panel p-10 rounded-[3rem] border-gold/10 hover:border-gold/40 transition-all group flex flex-col justify-between h-full shadow-glass"
            >
              <div className="space-y-8">
                <div className="size-16 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-midnight transition-all duration-500 shadow-gold-glow">
                  <span className="material-symbols-outlined text-4xl">picture_as_pdf</span>
                </div>
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 group-hover:text-gold transition-colors">{res.type}</span>
                  <h4 className="font-black text-2xl text-ivory uppercase tracking-tighter leading-tight group-hover:gold-gradient-text transition-all">{res.title}</h4>
                  <p className="text-xs text-slate-600 font-black uppercase tracking-widest">Format: PDF • Size: {res.size}</p>
                </div>
              </div>
              <div className="mt-10 flex items-center gap-3 text-gold text-xs font-black uppercase tracking-widest">
                Download Secure Link
                <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">download</span>
              </div>
            </a>
          ))}
        </div>

        {/* Enterprise Support */}
        <section className="mt-32 glass-panel p-12 md:p-20 rounded-[4rem] border-gold/10 flex flex-col md:flex-row items-center gap-16 shadow-glass">
          <div className="size-24 rounded-full bg-midnight border border-gold/20 text-gold flex items-center justify-center shrink-0 shadow-gold-glow">
            <span className="material-symbols-outlined text-5xl">support_agent</span>
          </div>
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-black text-ivory uppercase tracking-tighter leading-none">Specific Documentation?</h3>
            <p className="text-slate-400 text-xl font-medium leading-relaxed">Our technical desk provides custom site-specific documentation for enterprise plant integrations and older machine revisions.</p>
          </div>
          <button className="w-full md:w-auto gold-gradient-bg text-midnight px-12 py-6 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all text-sm shadow-gold-glow active:scale-95">
            Contact Support
          </button>
        </section>
      </div>
    </div>
  );
};

export default Downloads;
