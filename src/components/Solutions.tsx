import { Scissors, UtensilsCrossed, ShoppingBag, Briefcase, GraduationCap, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const solutions = [
  {
    icon: Scissors,
    title: 'Salons & Spas',
    desc: 'Automate appointment bookings, send reminders, share offers, and collect feedback — all via WhatsApp.',
    features: ['Online Booking', 'Auto Reminders', 'Offer Broadcasts', 'Feedback Collection'],
    gradient: 'linear-gradient(135deg, #DC2626, #EF4444)',
    bgGradient: 'linear-gradient(135deg, #FEF2F2, #FFF1F2)',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurants & Cafés',
    desc: 'Manage orders, reservations, delivery updates, and menu sharing through automated conversations.',
    features: ['Order Management', 'Table Booking', 'Delivery Tracking', 'Digital Menu'],
    gradient: 'linear-gradient(135deg, #0A0A0A, #1C1C1C)',
    bgGradient: 'linear-gradient(135deg, #FAFAFA, #F5F5F5)',
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce & Retail',
    desc: 'Share product catalogs, process orders, handle returns, and run flash sale campaigns at scale.',
    features: ['Product Catalogs', 'Order Updates', 'Return Handling', 'Flash Campaigns'],
    gradient: 'linear-gradient(135deg, #B91C1C, #DC2626)',
    bgGradient: 'linear-gradient(135deg, #FEF2F2, #FEFCE8)',
  },
  {
    icon: Briefcase,
    title: 'Consultants & Agencies',
    desc: 'Capture leads from ads, automate follow-ups, send proposals, and track your sales pipeline effortlessly.',
    features: ['Lead Capture', 'Auto Follow-ups', 'Proposal Sharing', 'Pipeline Tracking'],
    gradient: 'linear-gradient(135deg, #EF4444, #DC2626)',
    bgGradient: 'linear-gradient(135deg, #FFF1F2, #FEF2F2)',
  },
  {
    icon: GraduationCap,
    title: 'Education & Coaching',
    desc: 'Manage student inquiries, send class schedules, share study material, and collect fees via chat.',
    features: ['Inquiry Management', 'Schedule Sharing', 'Material Delivery', 'Fee Collection'],
    gradient: 'linear-gradient(135deg, #1C1C1C, #0A0A0A)',
    bgGradient: 'linear-gradient(135deg, #F5F5F5, #FAFAFA)',
  },
  {
    icon: Heart,
    title: 'Healthcare & Clinics',
    desc: 'Book patient appointments, send prescription reminders, share reports, and manage follow-up visits.',
    features: ['Appointment Booking', 'Rx Reminders', 'Report Sharing', 'Follow-up Alerts'],
    gradient: 'linear-gradient(135deg, #DC2626, #B91C1C)',
    bgGradient: 'linear-gradient(135deg, #FEF2F2, #FFF1F2)',
  },
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

export default function Solutions() {
  return (
    <section id="solutions" className="section-spacing bg-soft relative">
      <div className="container-main">
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="section-badge mx-auto mb-4">
            <Briefcase size={14} />
            <span>Industry Solutions</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="section-title mx-auto">
            Built for{' '}
            <span className="gradient-text">Every Industry</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle mx-auto mt-4">
            Whether you run a salon or a SaaS company — Blackstone AI adapts to your workflow.
          </motion.p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {solutions.map((s, i) => (
            <motion.div variants={itemVariants} key={i} className="glass-card group relative overflow-hidden" style={{ background: s.bgGradient }}>
              <div className="flex items-start gap-4">
                <div className="feature-icon-wrap shrink-0 !mb-0" style={{ background: s.gradient }}>
                  <s.icon size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-black text-ink mb-3">{s.title}</h3>
                  <p className="text-ink-muted text-base leading-relaxed mb-5">{s.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {s.features.map((f, j) => (
                      <span key={j} className="text-xs md:text-sm font-semibold px-3 py-1.5 rounded-full bg-white/80 text-ink-light border border-white/60 shadow-sm">
                        {f}
                      </span>
                    ))}
                  </div>
                  <a href="https://wa.me/6581798737?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
                     target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-1.5 text-base font-bold text-primary group-hover:gap-3 transition-all duration-300">
                    Get Started <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
