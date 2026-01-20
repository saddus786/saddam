
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'ROI Calculator', path: '/roi-calculator' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Workflow', path: '/workflow' },
    { name: 'Downloads', path: '/downloads' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Videos', path: '/videos' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-midnight flex flex-col font-sans selection:bg-gold selection:text-midnight">
      {/* Premium Header */}
      <header className="sticky top-0 z-50 bg-midnight/80 backdrop-blur-xl border-b border-gold/10 h-20 flex items-center shadow-glass">
        <div className="max-w-[1400px] w-full mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Branding - Gold Luxury Typography */}
            <Link to="/" className="flex flex-col group shrink-0">
              <span className="text-xl font-black leading-none tracking-tighter gold-gradient-text uppercase">
                Vishwakarma
              </span>
              <span className="text-[10px] font-bold leading-none tracking-[0.3em] text-ivory uppercase opacity-60">
                Engineering Group
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 text-[11px] font-black uppercase tracking-[0.15em] transition-all rounded-md ${
                    isActive(link.path) 
                      ? 'text-gold bg-gold/5' 
                      : 'text-cbd5e1/60 hover:text-gold hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Link
                to="/get-a-quote"
                className="hidden md:flex bg-gold text-midnight px-8 py-3 rounded-full text-[12px] font-black uppercase tracking-widest transition-all hover:scale-105 shadow-gold-glow"
              >
                Get a Quote
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gold"
              >
                <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-charcoal border-t border-gold/10 px-6 py-8 flex flex-col gap-4 shadow-glass animate-in fade-in slide-in-from-top-4 duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-black uppercase tracking-widest p-4 rounded-lg border border-transparent ${
                  isActive(link.path) ? 'text-gold border-gold/20 bg-gold/5' : 'text-slate-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/get-a-quote"
              onClick={() => setIsMenuOpen(false)}
              className="bg-gold text-midnight text-center py-5 rounded-xl font-black uppercase tracking-widest text-sm"
            >
              Get a Quote
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer - Deep Dark Redesign */}
      <footer className="bg-charcoal py-24 border-t border-gold/10 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2 space-y-10">
              <div className="flex flex-col">
                <span className="font-black text-4xl uppercase leading-none tracking-tighter gold-gradient-text">Vishwakarma</span>
                <span className="font-bold text-2xl uppercase leading-none tracking-tighter text-ivory opacity-40">Engineering</span>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed text-lg font-medium">
                Established 1995. Pioneering the future of industrial biomass energy through high-precision engineering and sustainable manufacturing.
              </p>
              <div className="flex gap-4">
                <a href="https://wa.me/919173477775" target="_blank" className="size-14 rounded-full glass-panel flex items-center justify-center text-gold hover:bg-gold hover:text-midnight transition-all shadow-gold-glow">
                  <span className="material-symbols-outlined text-2xl">chat</span>
                </a>
                <a href="mailto:sales@vishwakarma.com" className="size-14 rounded-full glass-panel flex items-center justify-center text-gold hover:bg-gold hover:text-midnight transition-all">
                  <span className="material-symbols-outlined text-2xl">mail</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-black uppercase text-[10px] tracking-[0.3em] mb-10 text-gold-light">Navigation</h4>
              <ul className="space-y-5 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                {navLinks.slice(0, 5).map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-gold transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-black uppercase text-[10px] tracking-[0.3em] mb-10 text-gold-light">Headquarters</h4>
              <ul className="space-y-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-gold text-2xl">location_on</span>
                  <span className="leading-relaxed text-ivory">Rajkot, Gujarat, 360004<br />India</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-gold text-2xl">call</span>
                  <span className="text-ivory font-black">+91 91734 77775</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-12 text-[10px] text-slate-600 font-black uppercase tracking-[0.4em] text-center">
            © 2024 Vishwakarma Engineering. Powered by Precision.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
