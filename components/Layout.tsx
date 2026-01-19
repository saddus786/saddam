
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IMAGES } from '../images/catalog';

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
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 h-24 flex items-center">
        <div className="max-w-[1400px] w-full mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Official Logo from centralized images */}
            <Link to="/" className="flex items-center gap-4 group shrink-0">
              <img 
                src={IMAGES.LOGO} 
                alt="VE Logo" 
                className="size-16 object-contain group-hover:scale-105 transition-transform"
                onError={(e) => {
                  e.currentTarget.src = IMAGES.FALLBACK_LOGO; 
                }}
              />
              <div className="flex flex-col">
                <span className="text-xl font-black leading-none tracking-tighter text-gray-900 uppercase">
                  Vishwakarma
                </span>
                <span className="text-lg font-black leading-none tracking-tighter text-primary uppercase">
                  Engineering
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-[10px] xl:text-[11px] font-extrabold uppercase tracking-widest transition-colors ${
                    isActive(link.path) ? 'text-primary' : 'text-gray-800 hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Link
                to="/get-a-quote"
                className="hidden md:flex bg-primary hover:bg-[#14b823] text-gray-900 px-8 py-5 rounded-lg text-[12px] font-black uppercase tracking-widest transition-all shadow-xl shadow-primary/20 text-center leading-tight h-16 items-center"
              >
                Get a Quote
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-900"
              >
                <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-24 left-0 w-full bg-white border-t border-gray-100 px-6 py-8 flex flex-col gap-5 animate-in fade-in slide-in-from-top-4 duration-300 shadow-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-black uppercase tracking-widest ${
                  isActive(link.path) ? 'text-primary' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/get-a-quote"
              onClick={() => setIsMenuOpen(false)}
              className="bg-primary text-gray-900 text-center py-5 rounded-lg font-black uppercase tracking-widest text-sm"
            >
              Get a Quote
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2 space-y-10">
              <div className="flex items-center gap-4">
                <img 
                  src={IMAGES.LOGO} 
                  alt="VE Logo" 
                  className="size-14 object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-black text-3xl uppercase leading-none text-gray-900 tracking-tighter">Vishwakarma</span>
                  <span className="font-black text-3xl uppercase leading-none text-primary tracking-tighter">Engineering</span>
                </div>
              </div>
              <p className="text-gray-500 max-w-sm leading-relaxed text-lg font-medium">
                Pioneering sustainable energy since 1995. We specialize in high-performance biomass briquetting plants and industrial machinery built for the future.
              </p>
              <div className="flex gap-4">
                <a href="https://wa.me/919173477775" target="_blank" rel="noopener noreferrer" className="size-14 rounded-2xl bg-gray-50 flex items-center justify-center hover:bg-[#25D366] transition-colors hover:text-white text-gray-400">
                  <span className="material-symbols-outlined font-black">chat</span>
                </a>
                <a href="mailto:sales@vishwakarma.com" className="size-14 rounded-2xl bg-gray-50 flex items-center justify-center hover:bg-primary transition-colors hover:text-white text-gray-400">
                  <span className="material-symbols-outlined">mail</span>
                </a>
                <a href="tel:+919173477775" className="size-14 rounded-2xl bg-gray-50 flex items-center justify-center hover:bg-primary transition-colors hover:text-white text-gray-400">
                  <span className="material-symbols-outlined">call</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-black uppercase text-[11px] tracking-[0.3em] mb-10 text-gray-900 opacity-50">Navigation</h4>
              <ul className="space-y-5 text-xs font-black uppercase tracking-widest text-gray-600">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-primary transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-black uppercase text-[11px] tracking-[0.3em] mb-10 text-gray-900 opacity-50">Headquarters</h4>
              <ul className="space-y-8 text-xs font-black text-gray-600 uppercase tracking-widest">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                  <span className="leading-relaxed font-bold">Rajkot, Gujarat, 360004<br />India</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary text-2xl">mail</span>
                  <span className="lowercase">sales@vishwakarma.com</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary text-2xl">call</span>
                  <span className="text-gray-900 font-black">+91 91734 77775</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-[10px] text-gray-400 font-black uppercase tracking-[0.3em]">
              © 2024 Vishwakarma Engineering. All rights reserved.
            </div>
            <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em]">
              <a href="#" className="text-gray-400 hover:text-primary">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
