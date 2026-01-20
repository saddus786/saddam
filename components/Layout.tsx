
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IMAGES } from '../images/catalog.ts';

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
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background-dark/95 backdrop-blur-md border-b border-white/5 h-24 flex items-center shadow-2xl">
        <div className="max-w-[1400px] w-full mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Official Logo */}
            <Link to="/" className="flex items-center gap-5 group shrink-0">
              <div className="relative p-1 rounded-full bg-gradient-to-tr from-accent/20 to-white/10 group-hover:scale-105 transition-transform duration-500">
                <img 
                  src={IMAGES.LOGO} 
                  alt="Vishwakarma Engineering Logo" 
                  className="size-16 object-contain rounded-full border-2 border-accent/30 shadow-lg shadow-accent/10 p-1 bg-white"
                  onError={(e) => {
                    e.currentTarget.src = IMAGES.FALLBACK_LOGO; 
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black leading-none tracking-tighter text-white uppercase group-hover:text-accent transition-colors">
                  Vishwakarma
                </span>
                <span className="text-lg font-black leading-none tracking-tighter text-accent uppercase">
                  Engineering
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-[11px] xl:text-[12px] font-black uppercase tracking-widest transition-all ${
                    isActive(link.path) ? 'text-accent border-b-2 border-accent' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Link
                to="/get-a-quote"
                className="hidden md:flex bg-accent hover:brightness-110 text-background-dark px-8 py-5 rounded-lg text-[12px] font-black uppercase tracking-widest transition-all shadow-xl shadow-accent/20 text-center leading-tight h-14 items-center"
              >
                Get a Quote
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-white"
              >
                <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-24 left-0 w-full bg-background-dark border-t border-white/5 px-6 py-8 flex flex-col gap-5 animate-in fade-in slide-in-from-top-4 duration-300 shadow-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-black uppercase tracking-widest ${
                  isActive(link.path) ? 'text-accent' : 'text-gray-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/get-a-quote"
              onClick={() => setIsMenuOpen(false)}
              className="bg-accent text-background-dark text-center py-5 rounded-lg font-black uppercase tracking-widest text-sm"
            >
              Get a Quote
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-background-dark py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2 space-y-10">
              <div className="flex items-center gap-5">
                <img 
                  src={IMAGES.LOGO} 
                  alt="VE Logo" 
                  className="size-16 object-contain rounded-full border-2 border-accent/20 shadow-xl shadow-accent/10 p-1 bg-white"
                />
                <div className="flex flex-col">
                  <span className="font-black text-3xl uppercase leading-none text-white tracking-tighter">Vishwakarma</span>
                  <span className="font-black text-3xl uppercase leading-none text-accent tracking-tighter">Engineering</span>
                </div>
              </div>
              <p className="text-gray-400 max-w-sm leading-relaxed text-lg font-medium">
                Pioneering sustainable energy since 1995. We specialize in high-performance biomass briquetting plants and industrial machinery built for the future.
              </p>
              <div className="flex gap-4">
                <a href="https://wa.me/919173477775" target="_blank" rel="noopener noreferrer" className="size-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#25D366] transition-colors hover:text-white text-gray-400">
                  <span className="material-symbols-outlined font-black text-2xl">chat</span>
                </a>
                <a href="mailto:sales@vishwakarma.com" className="size-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-accent transition-colors hover:text-background-dark text-gray-400">
                  <span className="material-symbols-outlined text-2xl">mail</span>
                </a>
                <a href="tel:+919173477775" className="size-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-accent transition-colors hover:text-background-dark text-gray-400">
                  <span className="material-symbols-outlined text-2xl">call</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-black uppercase text-[11px] tracking-[0.3em] mb-10 text-accent opacity-80">Navigation</h4>
              <ul className="space-y-5 text-xs font-black uppercase tracking-widest text-gray-400">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-accent transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-black uppercase text-[11px] tracking-[0.3em] mb-10 text-accent opacity-80">Headquarters</h4>
              <ul className="space-y-8 text-xs font-black text-gray-400 uppercase tracking-widest">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-accent text-2xl">location_on</span>
                  <span className="leading-relaxed font-bold text-white">Rajkot, Gujarat, 360004<br />India</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-accent text-2xl">mail</span>
                  <span className="lowercase">sales@vishwakarma.com</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-accent text-2xl">call</span>
                  <span className="text-white font-black">+91 91734 77775</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-[10px] text-gray-500 font-black uppercase tracking-[0.3em]">
              © 2024 Vishwakarma Engineering. All rights reserved.
            </div>
            <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em]">
              <a href="#" className="text-gray-500 hover:text-accent">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-accent">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
