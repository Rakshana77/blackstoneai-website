import { Rocket, ArrowRight, MessageCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const easeOutExpo = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOutExpo } },
};

export default function CTABanner() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);

  return (
    <section ref={ref} id="cta-banner" className="relative overflow-hidden"
             style={{ background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 40%, #7F1D1D 100%)' }}>
      
      {/* Animated Glowing Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="glow-orb w-[600px] h-[600px] bg-white top-[-100px] right-[-50px]" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        className="glow-orb w-[500px] h-[500px] bg-rose-200 bottom-[-80px] left-[-50px]" 
      />

      {/* Floating Particles Parallax */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div 
            key={`p1-${i}`}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 blur-[1px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ 
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1] 
            }}
            transition={{ duration: 4 + Math.random() * 4, repeat: Infinity }}
          />
        ))}
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div 
            key={`p2-${i}`}
            className="absolute w-3 h-3 bg-red-300 rounded-full opacity-10 blur-[2px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ 
              y: [0, 40, 0],
              opacity: [0.1, 0.4, 0.1] 
            }}
            transition={{ duration: 5 + Math.random() * 5, repeat: Infinity }}
          />
        ))}
      </motion.div>

      <div className="absolute inset-0 opacity-[0.03]"
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container-main relative z-10 py-24 md:py-32 text-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/15 text-white mb-6 border border-white/20 shadow-lg">
            <Rocket size={14} className="text-red-200" />
            <span>Start Growing Today</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
            Stop Losing Customers to{' '}
            <span className="text-black/70 block mt-2">Slow Replies</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto font-medium">
            Every minute you wait, a competitor replies first. Let Blackstone AI handle your conversations 24/7 — so you never miss another lead.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 justify-center">
            <motion.a 
               whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
               whileTap={{ scale: 0.95 }}
               animate={{ boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 40px rgba(255,255,255,0.4)", "0 0 0px rgba(255,255,255,0)"] }}
               transition={{ duration: 2, repeat: Infinity }}
               href="https://wa.me/6581798737?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
               target="_blank" rel="noopener noreferrer"
               id="cta-banner-demo"
               className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-2xl font-black text-base text-red-600 bg-white transition-colors cursor-pointer hover:bg-gray-50 border-2 border-white shadow-2xl relative group overflow-hidden">
              <span className="absolute inset-0 w-full h-full -ml-12 bg-red-100 opacity-20 -skew-x-12 group-hover:animate-[shimmer_1.5s_ease-in-out_infinite]" />
              <span className="relative flex items-center gap-2">Book Now <ArrowRight size={18} /></span>
            </motion.a>
            <motion.a 
               whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.25)" }}
               whileTap={{ scale: 0.95 }}
               href="https://wa.me/6581798737?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
               target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-2xl font-bold text-base text-white bg-white/15 border border-white/25 transition-colors cursor-pointer shadow-lg backdrop-blur-sm">
              <MessageCircle size={18} /> Chat on WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
