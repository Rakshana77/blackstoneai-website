import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Talk to Us', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-xl shadow-2xl shadow-black/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-main flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <img src="/images/logo.png" alt="Blackstone AI Logo" className="w-12 h-12 object-contain" />
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-white font-extrabold text-xl tracking-tight leading-none">Blackstone</span>
              <span className="font-extrabold text-xl tracking-tight gradient-text ml-1.5 leading-none">AI</span>
            </div>
            <span className="text-slate-400 text-[10px] font-bold tracking-wider mt-1 uppercase italic">Delivering value to your business</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+6581798737" className="flex items-center gap-2 text-white font-bold hover:text-red-500 transition-colors">
            <div className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center">
              <Zap size={14} className="text-red-500" />
            </div>
            <span>+65 81798737</span>
          </a>
          <a href="https://wa.me/6581798737?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
             target="_blank" rel="noopener noreferrer" 
             className="btn-primary !py-2.5 !px-6 !text-xs">
            <Zap size={14} /> Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          id="mobile-menu-toggle"
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0A0A0A]/98 backdrop-blur-xl border-t border-white/10 mt-2">
          <div className="container-main py-6 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-300 hover:text-white font-semibold text-base py-2 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <a href="tel:+6581798737" className="text-white font-bold py-2 border-b border-white/10 flex items-center gap-2">
                <Zap size={16} className="text-red-500" /> +65 81798737
              </a>
              <a href="https://wa.me/6581798737?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
                 target="_blank" rel="noopener noreferrer"
                 className="btn-primary text-center" 
                 onClick={() => setMobileOpen(false)}>
                <Zap size={16} /> Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
