import { ShieldCheck, Star } from 'lucide-react';
import { motion } from 'motion/react';

const partners = [
  "TechNova Solutions", "Global Retail Co.", "Apex Beauty Spa", "Prime Consultants",
  "EduCare Institute", "HealthPlus Clinic", "Urban Eatery", "CloudSync App",
  "TechNova Solutions", "Global Retail Co.", "Apex Beauty Spa", "Prime Consultants",
];

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

export default function TrustSection() {
  return (
    <section className="py-10 bg-white border-y border-gray-100 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      
      <div className="container-main">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={containerVariants}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600 shadow-inner">
              <ShieldCheck size={24} />
            </div>
            <div>
              <div className="text-sm font-black text-ink uppercase tracking-tighter">Trusted Choice</div>
              <div className="flex items-center gap-1 text-red-500 text-[10px] mt-0.5">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={10} fill="currentColor" />)}
              </div>
            </div>
          </motion.div>

          {/* Marquee */}
          <motion.div variants={itemVariants} className="overflow-hidden flex-1 relative w-full">
            <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
              {partners.map((partner, idx) => (
                <div key={idx} className="flex items-center gap-2 group">
                  <div className="w-8 h-8 rounded-full border-2 border-slate-100 bg-white flex items-center justify-center text-[10px] font-bold text-slate-400 group-hover:border-red-200 group-hover:text-red-500 transition-colors shadow-sm">
                    {partner.charAt(0)}
                  </div>
                  <span className="text-sm font-bold text-slate-400 group-hover:text-ink transition-colors">{partner}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
