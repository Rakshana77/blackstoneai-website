import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { motion } from 'motion/react';

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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-white border-b border-gray-100 ${
        scrolled
          ? 'opacity-85 shadow-lg py-3'
          : 'opacity-100 py-5'
      }`}
    >
      <div className="w-full px-6 lg:px-12 flex items-center justify-between max-w-[1920px] mx-auto">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <motion.img 
            whileHover={{ scale: 1.05, rotate: 5 }} 
            src="/images/logo.png" 
            alt="Blackstone AI Logo" 
            className="w-14 h-14 object-contain" 
          />
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-ink font-black text-3xl tracking-tight leading-none transition-colors group-hover:text-red-600">Blackstone</span>
              <span className="font-black text-3xl tracking-tight gradient-text ml-1.5 leading-none">AI</span>
            </div>
            <span className="text-slate-500 text-[9px] font-bold tracking-widest mt-1 uppercase italic opacity-90 transition-opacity">Delivering value to your business</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 lg:gap-10">
          {navLinks.map((l) => (
            <motion.a 
              key={l.href} 
              href={l.href} 
              whileHover={{ y: -2 }}
              className="nav-link relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-red-500 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300"
            >
              {l.label}
            </motion.a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="tel:+6581798737" 
            className="flex items-center gap-2 text-ink font-bold text-lg hover:text-red-500 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
              <Zap size={16} className="text-red-600" />
            </div>
            <span>+65 81798737</span>
          </motion.a>
          <motion.a 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             href="https://wa.me/6581798737?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
             target="_blank" rel="noopener noreferrer" 
             className="btn-primary !py-3 !px-7 !text-sm shadow-[0_0_15px_rgba(220,38,38,0.2)] hover:shadow-[0_0_25px_rgba(220,38,38,0.4)]">
            <Zap size={16} /> Book Now
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          id="mobile-menu-toggle"
          className="lg:hidden text-ink p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-gray-100 mt-2 overflow-hidden"
        >
          <div className="container-main py-6 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-600 hover:text-ink font-semibold text-base py-2 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <a href="tel:+6581798737" className="text-ink font-bold py-2 border-b border-gray-100 flex items-center gap-2">
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
        </motion.div>
      )}
    </motion.nav>
  );
}
