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
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-lg"
               style={{ background: 'linear-gradient(135deg, #DC2626, #EF4444)' }}>
            B
          </div>
          <div>
            <span className="text-white font-extrabold text-lg tracking-tight">Business</span>
            <span className="font-extrabold text-lg tracking-tight gradient-text">OnGo</span>
            <span className="text-slate-500 text-[10px] block -mt-1 font-medium tracking-wider">by Blackstone AI</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="#contact" className="btn-primary !py-2.5 !px-6 !text-xs">
            <Zap size={14} /> Book Demo
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
              <a href="#contact" className="btn-primary text-center" onClick={() => setMobileOpen(false)}>
                <Zap size={16} /> Book Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
