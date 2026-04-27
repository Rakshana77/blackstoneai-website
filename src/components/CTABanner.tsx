import { Rocket, ArrowRight, MessageCircle } from 'lucide-react';

export default function CTABanner() {
  return (
    <section id="cta-banner" className="relative overflow-hidden"
             style={{ background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 40%, #7F1D1D 100%)' }}>
      <div className="glow-orb w-[400px] h-[400px] bg-white top-[-100px] right-[-50px] opacity-[0.08]" />
      <div className="glow-orb w-[300px] h-[300px] bg-white bottom-[-80px] left-[-50px] opacity-[0.08]" />

      <div className="absolute inset-0 opacity-[0.03]"
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container-main relative z-10 py-20 md:py-28 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/15 text-white mb-6">
            <Rocket size={14} />
            <span>Start Growing Today</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Stop Losing Customers to{' '}
            <span className="text-black/70">Slow Replies</span>
          </h2>

          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
            Every minute you wait, a competitor replies first. Let Blackstone AI handle your conversations 24/7 — so you never miss another lead.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/6581798737?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
               target="_blank" rel="noopener noreferrer"
               id="cta-banner-demo"
               className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-2xl font-bold text-base text-red-600 bg-white transition-all duration-300 cursor-pointer hover:bg-gray-100 hover:-translate-y-0.5"
               style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
              Book Now <ArrowRight size={18} />
            </a>
            <a href="https://wa.me/6581798737?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
               target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-2xl font-bold text-base text-white bg-white/15 border border-white/25 transition-all duration-300 cursor-pointer hover:bg-white/25 hover:-translate-y-0.5">
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
