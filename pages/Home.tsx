
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../images/catalog';

const CinematicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles: any[] = [];
    const particleCount = 120;

    class RainDrop {
      x: number;
      y: number;
      len: number;
      speed: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.len = Math.random() * 20 + 10;
        this.speed = Math.random() * 10 + 15;
        this.opacity = Math.random() * 0.15 + 0.05;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(165, 243, 252, ${this.opacity})`; // Cool blue tint
        ctx.lineWidth = 1;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.len * 0.2, this.y + this.len); // 75 deg angle approx
        ctx.stroke();
      }

      update() {
        this.y += this.speed;
        this.x += this.speed * 0.1; // Diagonal drift

        if (this.y > height) {
          this.y = -this.len;
          this.x = Math.random() * width;
        }
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new RainDrop());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-midnight">
      {/* Volumetric Fog Layers */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03),transparent_70%)] animate-mist"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.05),transparent_60%)] animate-mist" style={{ animationDelay: '-5s' }}></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_50%)] animate-mist" style={{ animationDelay: '-12s' }}></div>
      </div>

      {/* Atmospheric Spotlights */}
      <div className="absolute top-0 left-0 w-[50vw] h-[50vh] bg-blue-500/10 blur-[150px] animate-light-pulse"></div>
      <div className="absolute top-0 right-0 w-[40vw] h-[40vh] bg-white/5 blur-[120px] animate-light-pulse" style={{ animationDelay: '-3s' }}></div>

      {/* Rain Canvas */}
      <canvas ref={canvasRef} className="diagonal-rain-canvas absolute inset-0 opacity-60" />
      
      {/* Dark Vignet */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-transparent to-midnight"></div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="bg-midnight overflow-hidden">
      {/* Cinematic Hero Section */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        <CinematicBackground />
        
        {/* Subtle Backdrop Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-midnight/40 z-10"></div>
          <img 
            src={IMAGES.HERO.FALLBACK_THUMB} 
            alt="Industrial Background" 
            className="w-full h-full object-cover grayscale opacity-10 scale-105"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-4xl space-y-12">
            <div className="inline-flex items-center gap-3 glass-panel px-6 py-3 rounded-full animate-fade-in stagger-1">
              <span className="size-2 bg-gold rounded-full animate-pulse shadow-gold-glow"></span>
              <span className="text-[11px] font-black text-ivory uppercase tracking-[0.4em]">
                Premium Industrial Engineering
              </span>
            </div>

            <div className="overflow-hidden">
              <h1 className="text-6xl md:text-[110px] font-black leading-[0.85] tracking-tighter uppercase text-ivory animate-reveal">
                The Master <br />
                <span className="gold-gradient-text">Production Hub</span>
              </h1>
            </div>

            <p className="text-xl md:text-3xl text-slate-300 font-medium max-w-2xl leading-relaxed animate-fade-in stagger-3">
              Precision built for high-duty cycles. <br className="hidden md:block" />
              Engineering the new global standard for industrial briquetting solutions.
            </p>

            <div className="flex flex-wrap gap-8 pt-10 animate-fade-in stagger-4">
              <Link
                to="/get-a-quote"
                className="group relative flex items-center justify-center gap-6 gold-gradient-bg text-midnight px-14 py-8 rounded-2xl font-black uppercase tracking-[0.2em] transition-all shadow-gold-glow hover:scale-[1.05] active:scale-95 overflow-hidden text-sm"
              >
                <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out skew-x-[-20deg]"></div>
                Request Quote
                <span className="material-symbols-outlined text-2xl group-hover:translate-x-3 transition-transform font-black">arrow_forward</span>
              </Link>
              <a
                href="https://wa.me/919173477775"
                target="_blank"
                className="flex items-center justify-center gap-6 glass-panel text-emerald px-14 py-8 rounded-2xl font-black uppercase tracking-[0.2em] transition-all hover:bg-emerald/10 hover:border-emerald/40 shadow-emerald-glow active:scale-95 text-sm"
              >
                <span className="material-symbols-outlined text-2xl font-black">chat</span>
                Support Desk
              </a>
            </div>
          </div>
        </div>

        {/* Floating Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
           <span className="material-symbols-outlined text-gold text-4xl">expand_more</span>
        </div>
      </section>

      {/* Stats Section with Glass Shimmer */}
      <section className="bg-charcoal border-y border-gold/10 py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Installations", val: "250+", color: "gold-gradient-text" },
              { label: "Global Reach", val: "20+", color: "text-ivory" },
              { label: "Annual Output", val: "100%", color: "gold-gradient-text" },
              { label: "Expert Desk", val: "24/7", color: "text-ivory" }
            ].map((stat, idx) => (
              <div key={idx} className={`group glass-panel p-12 rounded-[3rem] transition-all hover:-translate-y-3 text-center md:text-left animate-fade-in stagger-${idx + 1}`}>
                <div className={`text-6xl font-black ${stat.color} tracking-tighter mb-4`}>{stat.val}</div>
                <div className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 group-hover:text-gold transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Catalog */}
      <section className="py-40 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-6xl md:text-8xl font-black text-ivory uppercase tracking-tighter leading-none">
                Machinery <br /> <span className="gold-gradient-text">Portfolio</span>
              </h2>
              <div className="w-24 h-2 gold-gradient-bg rounded-full"></div>
            </div>
            <Link to="/products" className="text-[11px] font-black text-gold uppercase tracking-[0.4em] hover:text-gold-light transition-all flex items-center gap-4 group animate-fade-in">
              CATALOG 2024 <span className="material-symbols-outlined text-2xl group-hover:translate-x-3 transition-transform">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { id: "1", name: "VK-90 Press", img: IMAGES.MACHINES.VK90_PRIMARY, tag: "HEAVY DUTY" },
              { id: "2", name: "Series-X Chipper", img: IMAGES.MACHINES.SERIES_X, tag: "MAX TORQUE" },
              { id: "3", name: "Series-Z Mill", img: IMAGES.MACHINES.SERIES_Z, tag: "PRECISION" }
            ].map((product, idx) => (
              <div key={product.id} className={`group flex flex-col glass-panel rounded-[40px] overflow-hidden transition-all duration-700 border-gold/10 hover:border-gold/50 animate-fade-in stagger-${idx + 1}`}>
                <div className="p-8">
                  <div className="aspect-[4/3] relative rounded-[30px] overflow-hidden mb-10">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[2s] ease-out" 
                    />
                    <div className="absolute top-8 left-8">
                      <span className="bg-midnight/90 backdrop-blur-md text-gold text-[10px] font-black uppercase tracking-[0.3em] px-6 py-3 rounded-full border border-gold/30 shadow-glass">
                        {product.tag}
                      </span>
                    </div>
                  </div>
                  <div className="px-4 pb-4 space-y-8">
                    <h3 className="text-4xl font-black text-ivory tracking-tighter uppercase leading-none group-hover:gold-gradient-text transition-all duration-500">
                      {product.name}
                    </h3>
                    <Link 
                      to={`/products/${product.id}`} 
                      className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-gold hover:text-gold-light transition-all group/link"
                    >
                      TECHNICAL DOSSIER
                      <span className="material-symbols-outlined text-2xl group-hover/link:translate-x-3 transition-transform">
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

      {/* Global Partnership CTA */}
      <section className="py-48 bg-charcoal border-t border-gold/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-gold/10 blur-[200px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none animate-light-pulse"></div>
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16 relative z-10 animate-fade-in">
          <h2 className="text-6xl md:text-9xl font-black text-ivory uppercase tracking-tighter leading-none">
            Built for <span className="gold-gradient-text">Mastery</span>
          </h2>
          <p className="text-2xl md:text-4xl text-slate-200 font-medium max-w-4xl mx-auto leading-relaxed italic opacity-90 tracking-tight">
            "Engineering high-torque biomass solutions that establish new global benchmarks for durability and output."
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-10">
            <Link to="/get-a-quote" className="group w-full md:w-auto gold-gradient-bg text-midnight px-20 py-8 rounded-2xl font-black uppercase tracking-[0.3em] shadow-gold-glow hover:scale-105 transition-all active:scale-95 overflow-hidden flex items-center justify-center gap-6 text-sm">
              Request Commercial Protocol
              <span className="material-symbols-outlined font-black text-2xl">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
