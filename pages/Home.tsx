
import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../images/catalog';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center bg-background-dark overflow-hidden">
        {/* YouTube Background Video from centralized config */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[177.77777778vh] h-[56.25vw] pointer-events-none">
            <iframe 
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${IMAGES.HERO.VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${IMAGES.HERO.VIDEO_ID}&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3`} 
              title="Industrial background video"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-4xl space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-primary/20 backdrop-blur-sm border border-primary/30 px-4 py-2 rounded-full shadow-2xl">
              <span className="size-2.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(24,220,41,0.8)]"></span>
              <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">
                ISO 9001:2015 Certified Manufacturing
              </span>
            </div>

            {/* Title */}
            <h1 className="text-6xl md:text-[100px] font-[900] text-white leading-[0.9] tracking-tighter uppercase">
              High-Performance <br />
              <span className="text-primary block mt-4">Briquetting Machines</span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-200 font-medium max-w-2xl leading-relaxed">
              Save Energy. Reduce Waste. Increase Profits.<br />
              Transforming your industrial agricultural waste into<br className="hidden md:block" /> sustainable, high-caloric fuel.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6 pt-6">
              <Link
                to="/get-a-quote"
                className="group flex items-center justify-center gap-4 bg-primary hover:bg-primary/90 text-gray-900 px-10 py-6 rounded-2xl font-black uppercase tracking-widest transition-all shadow-[0_20px_40px_-15px_rgba(24,220,41,0.4)] hover:scale-105 active:scale-95"
              >
                Get Free Quote
                <span className="material-symbols-outlined text-2xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </Link>
              <a
                href="https://wa.me/919173477775"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-4 border-2 border-white/40 hover:border-white text-white px-10 py-6 rounded-2xl font-black uppercase tracking-widest backdrop-blur-md transition-all hover:bg-[#25D366] active:scale-95"
              >
                <span className="material-symbols-outlined text-2xl">chat</span>
                Whatsapp Chat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-white border-y border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
            <div className="flex flex-col gap-2">
              <div className="text-6xl font-black text-primary tracking-tighter">250+</div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Units Installed</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-6xl font-black text-primary tracking-tighter">20+</div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Countries Served</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-6xl font-black text-primary tracking-tighter">100%</div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Growth Rate</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-6xl font-black text-primary tracking-tighter">24/7</div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Technical Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Catalog Section - Centralized Images */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-black text-[#1a1a1a] uppercase tracking-tighter">
                Engineering Catalog
              </h2>
              <div className="w-24 h-2 bg-primary rounded-full"></div>
            </div>
            <Link 
              to="/products" 
              className="group flex items-center gap-3 text-sm font-black uppercase tracking-[0.1em] text-primary hover:text-gray-900 transition-colors"
            >
              Explore Our Full Range
              <span className="material-symbols-outlined text-2xl group-hover:translate-x-2 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Product 1: Briquette Press */}
            <div className="group flex flex-col bg-[#f3f4f5] rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/20">
              <div className="p-4 flex-1 flex flex-col">
                <div className="aspect-[4/3] relative rounded-[24px] overflow-hidden mb-8">
                  <img 
                    src={IMAGES.MACHINES.VK90_PRIMARY} 
                    alt="VK-90 BRIQUETTE PRESS" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-primary text-gray-900 text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full shadow-lg">
                      Heavy Duty
                    </span>
                  </div>
                </div>
                <div className="px-6 pb-10 flex-1 flex flex-col">
                  <h3 className="text-3xl font-black text-gray-900 tracking-tighter uppercase leading-tight mb-8">
                    VK-90 Briquette<br />Press
                  </h3>
                  <div className="mt-auto">
                    <Link 
                      to="/products/1" 
                      className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.15em] text-primary hover:text-gray-900 transition-all group/link"
                    >
                      Technical Specifications
                      <span className="material-symbols-outlined text-2xl group-hover/link:translate-x-2 transition-transform">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 2: Wood Chipper */}
            <div className="group flex flex-col bg-[#f3f4f5] rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/20">
              <div className="p-4 flex-1 flex flex-col">
                <div className="aspect-[4/3] relative rounded-[24px] overflow-hidden mb-8">
                  <img 
                    src={IMAGES.MACHINES.SERIES_X} 
                    alt="SERIES-X WOOD CHIPPER" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-primary text-gray-900 text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full shadow-lg">
                      Max Torque
                    </span>
                  </div>
                </div>
                <div className="px-6 pb-10 flex-1 flex flex-col">
                  <h3 className="text-3xl font-black text-gray-900 tracking-tighter uppercase leading-tight mb-8">
                    Series-X Wood<br />Chipper
                  </h3>
                  <div className="mt-auto">
                    <Link 
                      to="/products/2" 
                      className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.15em] text-primary hover:text-gray-900 transition-all group/link"
                    >
                      Technical Specifications
                      <span className="material-symbols-outlined text-2xl group-hover/link:translate-x-2 transition-transform">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 3: Hammer Mill */}
            <div className="group flex flex-col bg-[#f3f4f5] rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/20">
              <div className="p-4 flex-1 flex flex-col">
                <div className="aspect-[4/3] relative rounded-[24px] overflow-hidden mb-8">
                  <img 
                    src={IMAGES.MACHINES.SERIES_Z} 
                    alt="VK-MILL PRO GRINDER" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-primary text-gray-900 text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full shadow-lg">
                      Precision
                    </span>
                  </div>
                </div>
                <div className="px-6 pb-10 flex-1 flex flex-col">
                  <h3 className="text-3xl font-black text-gray-900 tracking-tighter uppercase leading-tight mb-8">
                    VK-Mill Pro<br />Grinder
                  </h3>
                  <div className="mt-auto">
                    <Link 
                      to="/products/3" 
                      className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.15em] text-primary hover:text-gray-900 transition-all group/link"
                    >
                      Technical Specifications
                      <span className="material-symbols-outlined text-2xl group-hover/link:translate-x-2 transition-transform">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-5xl font-black text-gray-900 uppercase tracking-tighter">Why Partner With Us</h2>
            <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
            <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
              Engineering excellence meets industrial reliability for high-performance biomass solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { title: "Turnkey Setup", icon: "settings_suggest", desc: "Complete plant planning, from site layout to final commissioning and operator training." },
              { title: "Global Reach", icon: "public", desc: "Trusted by major industrial hubs across 20+ countries with full export documentation." },
              { title: "Pro Support", icon: "support_agent", desc: "Expert engineers available 24/7 for remote diagnostics and on-site maintenance." },
              { title: "R&D Focused", icon: "precision_manufacturing", desc: "Proprietary alloy formulations and wear-resistant parts for maximum uptime." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group">
                <div className="size-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-black mb-4 text-gray-900 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
