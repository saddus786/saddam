
import React from 'react';
import { PDF_LINKS } from '../pdf/documents';

const Downloads: React.FC = () => {
  const resources = [
    { title: "Full Product Catalog 2024", size: "8.4 MB", type: "Catalog", color: "bg-primary", url: PDF_LINKS.FULL_CATALOG },
    { title: "VK-90 Technical Specifications", size: "2.1 MB", type: "Specs", color: "bg-blue-500", url: PDF_LINKS.VK90_TECHNICAL },
    { title: "Industrial Chipper Safety Manual", size: "4.5 MB", type: "Manual", color: "bg-orange-500", url: PDF_LINKS.CHIPPER_MANUAL },
    { title: "Plant Installation Blueprint", size: "12.2 MB", type: "Guide", color: "bg-purple-500", url: PDF_LINKS.PLANT_BLUEPRINT },
    { title: "Biomass Moisture Chart", size: "1.1 MB", type: "Data", color: "bg-teal-500", url: PDF_LINKS.MOISTURE_CHART },
    { title: "Annual Sustainability Report", size: "15.4 MB", type: "Report", color: "bg-muted-green", url: PDF_LINKS.SUSTAINABILITY_REPORT }
  ];

  return (
    <div className="py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 space-y-4">
          <h1 className="text-5xl font-black text-industrial-charcoal dark:text-white uppercase tracking-tight">Resource Center</h1>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Access technical documentation, product catalogs, and safety manuals for our complete machine range.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((res, idx) => (
            <a 
              key={idx} 
              href={res.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white dark:bg-white/5 p-8 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className={`size-16 rounded-xl ${res.color} text-white flex items-center justify-center shrink-0 shadow-lg`}>
                  <span className="material-symbols-outlined text-3xl">picture_as_pdf</span>
                </div>
                <div className="flex-1 space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">{res.type}</span>
                  <h4 className="font-bold text-lg dark:text-white group-hover:text-primary transition-colors">{res.title}</h4>
                  <p className="text-xs text-gray-400 font-medium">PDF • {res.size}</p>
                </div>
                <span className="material-symbols-outlined text-gray-300 group-hover:text-primary transition-colors">download</span>
              </div>
            </a>
          ))}
        </div>

        {/* Support Section */}
        <section className="mt-24 p-12 bg-white dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10 flex flex-col md:flex-row items-center gap-12">
          <div className="size-24 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-5xl">support_agent</span>
          </div>
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-black text-industrial-charcoal dark:text-white uppercase tracking-tight">Can't find what you're looking for?</h3>
            <p className="text-gray-500 font-medium leading-relaxed">Our technical support team is available 24/7 to provide specialized documentation for custom plant layouts and older machine models.</p>
          </div>
          <button className="bg-industrial-charcoal dark:bg-primary dark:text-industrial-charcoal text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all text-sm">
            Contact Support
          </button>
        </section>
      </div>
    </div>
  );
};

export default Downloads;
