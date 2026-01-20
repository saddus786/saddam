
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../images/catalog';

const CinematicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles: RainDrop[] = [];
    const particleCount = 100;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    class RainDrop {
      x: number = 0;
      y: number = 0;
      len: number = 0;
      speed: number = 0;
      opacity: number = 0;

      constructor() {
        this.reset();
        this.y = Math.random() * height;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = -20;
        this.len = Math.random() * 25 + 15;
        this.speed = Math.random() * 12 + 18;
        this.opacity = Math.random() * 0.12 + 0.04;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(165, 243, 252, ${this.opacity})`;
        ctx.lineWidth = 1.2;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.len * 0.15, this.y + this.len);
        ctx.stroke();
      }

      update() {
        this.y += this.speed;
        this.x += this.speed * 0.08;
        if (this.y > height) this.reset();
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new RainDrop());
      }
    };

    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-midnight select-none">
      {/* Volumetric Fog Layers with Hardware Acceleration */}
      <div className="absolute inset-0 opacity-40 mix-blend-screen">
        <div className="absolute top-[-20%] left-[-10%] w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04),transparent_65%)] animate-mist"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.06),transparent_55%)] animate-mist" style={{ animationDelay: '-5s' }}></div>
      </div>

      {/* Atmospheric Spotlights */}
      <div className="absolute top-0 left-0 w-[60vw] h-[60vh] bg-blue-500/10 blur-[160px] animate-light-pulse"></div>
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-white/5 blur-[140px] animate-light-pulse" style={{ animationDelay: '-4s' }}></div>

      {/* Rain Canvas */}
      <canvas ref={canvasRef} className="diagonal-rain-canvas absolute inset-0 opacity-70" />
      
      {/* Luxury Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-transparent to-midnight"></div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="bg-midnight overflow-hidden">
      {/* Cinematic Hero Section */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <CinematicBackground />
        
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-midnight/50 z-10"></div>
          <img 
            src={IMAGES.HERO.FALLBACK_THUMB} 
            alt="Industrial Background" 
            className="w-full h-full object-cover grayscale opacity-15 scale-105"
            loading="eager"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-4xl space-y-12">
            <div className="inline-flex items-center gap-4 glass-panel px-6 py-3 rounded-full animate-fade-in stagger-1">
              <span className="size-2.5 bg-gold rounded-full animate-pulse shadow-gold-glow"></span>
              <span className="text-[11px] font-black text-ivory uppercase tracking-[0.4em]">
                Excellence in Engineering
              </span>
            </div>

            <div className="overflow-hidden">
              <h1 className="text-6xl md:text-[115px] font-black leading-[0.82] tracking-tighter uppercase text-ivory animate-reveal">
                Industrial <br />
                <span className="gold-gradient-text">Master Hub</span>
              </h1>
            </div>

            <p className="text-xl md:text-3xl text-slate-200 font-medium max-w-2xl leading-relaxed animate-fade-in stagger-3">
              Precision engineered for the global biomass market. <br className="hidden md:block" />
              High-torque solutions for zero-binder compression.
            </p>

            <div className="flex flex-wrap gap-8 pt-10 animate-fade-in stagger-4">
              <Link
                to="/get-a-quote"
                className="group relative flex items-center justify-center gap-6 gold-gradient-bg text-midnight px-16 py-8 rounded-2xl font-black uppercase tracking-[0.2em] transition-all shadow-gold-glow hover:scale-[1.05] active:scale-95 overflow-hidden text-sm"
              >
                <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1200ms] ease-in-out skew-x-[-20deg]"></div>
                Request Quote
                <span className="material-symbols-outlined text-2xl group-hover:translate-x-3 transition-transform font-black">arrow_forward</span>
              </Link>
              <a
                href="https://wa.me/919173477775"
                target="_blank"
                className="flex items-center justify-center gap-6 glass-panel text-emerald-light border-emerald/30 px-16 py-8 rounded-2xl font-black uppercase tracking-[0.2em] transition-all hover:bg-emerald/10 hover:border-emerald/50 shadow-emerald-glow active:scale-95 text-sm"
              >
                <span className="material-symbols-outlined text-2xl font-black">chat</span>
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
           <span className="material-symbols-outlined text-gold text-5xl">keyboard_double_arrow_down</span>
        </div>
      </section>

      {/* Global Performance Stats */}
      <section className="bg-charcoal border-y border-gold/10 py-36 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Active Sites", val: "250+", color: "gold-gradient-text" },
              { label: "Global Reach", val: "20+", color: "text-ivory" },
              { label: "Annual Growth", val: "100%", color: "gold-gradient-text" },
              { label: "Technical Desk", val: "24/7", color: "text-ivory" }
            ].map((stat, idx) => (
              <div key={idx} className={`group glass-panel p-12 rounded-[3.5rem] transition-all hover:-translate-y-4 text-center md:text-left animate-fade-in stagger-${idx + 1}`}>
                <div className={`text-6xl font-black ${stat.color} tracking-tighter mb-4`}>{stat.val}</div>
                <div className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 group-hover:text-gold transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Catalog */}
      <section className="py-44 relative bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-28">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-6xl md:text-9xl font-black text-ivory uppercase tracking-tighter leading-none">
                Industrial <br /> <span className="gold-gradient-text">Mastery</span>
              </h2>
              <div className="w-24 h-2 gold-gradient-bg rounded-full"></div>
            </div>
            <Link to="/products" className="text-[11px] font-black text-gold uppercase tracking-[0.4em] hover:text-gold-light transition-all flex items-center gap-5 group animate-fade-in stagger-2">
              BROWSE INVENTORY <span className="material-symbols-outlined text-3xl group-hover:translate-x-3 transition-transform">arrow_right_alt</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { id: "1", name: "VK-90 Press", img: IMAGES.MACHINES.VK90_PRIMARY, tag: "PREMIUM GRADE" },
              { id: "2", name: "Series-X Chipper", img: IMAGES.MACHINES.SERIES_X, tag: "HIGH TORQUE" },
              { id: "3", name: "Series-Z Mill", img: IMAGES.MACHINES.SERIES_Z, tag: "PRECISION" }
            ].map((product, idx) => (
              <div key={product.id} className={`group flex flex-col glass-panel rounded-[50px] overflow-hidden transition-all duration-[800ms] border-gold/10 hover:border-gold/60 animate-fade-in stagger-${idx + 1}`}>
                <div className="p-8">
                  <div className="aspect-[4/3] relative rounded-[40px] overflow-hidden mb-12">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[2.5s] ease-out" 
                    />
                    <div className="absolute top-10 left-10">
                      <span className="bg-midnight/90 backdrop-blur-xl text-gold text-[10px] font-black uppercase tracking-[0.3em] px-8 py-4 rounded-full border border-gold/40 shadow-glass">
                        {product.tag}
                      </span>
                    </div>
                  </div>
                  <div className="px-4 pb-6 space-y-10">
                    <h3 className="text-4xl font-black text-ivory tracking-tighter uppercase leading-none group-hover:gold-gradient-text transition-all duration-700">
                      {product.name}
                    </h3>
                    <Link 
                      to={`/products/${product.id}`} 
                      className="flex items-center gap-5 text-[10px] font-black uppercase tracking-[0.4em] text-gold hover:text-gold-light transition-all group/link"
                    >
                      TECHNICAL DOSSIER
                      <span className="material-symbols-outlined text-3xl group-hover/link:translate-x-3 transition-transform">
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

      {/* Enterprise Conversion CTA */}
      <section className="py-52 bg-charcoal border-t border-gold/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[1400px] h-[1400px] bg-gold/10 blur-[240px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none animate-light-pulse"></div>
        <div className="max-w-7xl mx-auto px-6 text-center space-y-20 relative z-10 animate-fade-in">
          <h2 className="text-7xl md:text-[140px] font-black text-ivory uppercase tracking-tighter leading-none">
            Built for <span className="gold-gradient-text">Growth</span>
          </h2>
          <p className="text-2xl md:text-5xl text-slate-200 font-medium max-w-5xl mx-auto leading-relaxed italic opacity-95 tracking-tight">
            "We don't just build machines; we engineer the foundations of sustainable industrial empires."
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-14 pt-10">
            <Link to="/get-a-quote" className="group w-full md:w-auto gold-gradient-bg text-midnight px-24 py-9 rounded-2xl font-black uppercase tracking-[0.3em] shadow-gold-glow hover:scale-105 transition-all active:scale-95 overflow-hidden flex items-center justify-center gap-8 text-sm">
              Initiate Commercial Protocol
              <span className="material-symbols-outlined font-black text-3xl">arrow_right_alt</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
