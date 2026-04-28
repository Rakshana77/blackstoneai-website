import { MessageSquare, Bot, LayoutDashboard, Instagram, Megaphone, UsersRound, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: MessageSquare,
    title: 'Omnichannel Inbox',
    desc: 'Manage conversations from WhatsApp, Instagram DMs, Facebook Messenger, and Telegram — all in one unified dashboard.',
    gradient: 'linear-gradient(135deg, #25D366, #128C7E)',
    tag: 'Core',
  },
  {
    icon: Bot,
    title: 'AI-Powered Chatbot',
    desc: 'Deploy intelligent chatbots that understand context, answer FAQs, qualify leads, and hand off to human agents when needed.',
    gradient: 'linear-gradient(135deg, #DC2626, #EF4444)',
    tag: 'AI',
  },
  {
    icon: LayoutDashboard,
    title: 'Smart CRM',
    desc: 'Automatically capture customer data from every conversation. Track leads, manage pipelines, and never lose a potential sale.',
    gradient: 'linear-gradient(135deg, #0A0A0A, #1C1C1C)',
    tag: 'CRM',
  },
  {
    icon: Megaphone,
    title: 'Broadcast Campaigns',
    desc: 'Send bulk WhatsApp messages, promotional offers, and re-engagement campaigns to your entire customer list in one click.',
    gradient: 'linear-gradient(135deg, #DC2626, #B91C1C)',
    tag: 'Marketing',
  },
  {
    icon: Instagram,
    title: 'Social Media Automation',
    desc: 'Auto-reply to Instagram comments, capture leads from Facebook ads, and route social inquiries to your sales team instantly.',
    gradient: 'linear-gradient(135deg, #EF4444, #DC2626)',
    tag: 'Social',
  },
  {
    icon: UsersRound,
    title: 'Multi-Agent Support',
    desc: 'Assign conversations to team members based on skills or availability. Collaborate on complex queries with internal notes.',
    gradient: 'linear-gradient(135deg, #1C1C1C, #0A0A0A)',
    tag: 'Team',
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

export default function Features() {
  return (
    <section id="features" className="section-spacing bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="glow-orb w-[400px] h-[400px] bg-primary top-0 right-0 opacity-[0.04]" />
      <div className="glow-orb w-[300px] h-[300px] bg-accent bottom-0 left-0 opacity-[0.04]" />

      <div className="container-main relative z-10">
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="section-badge mx-auto mb-4">
            <Bot size={14} />
            <span>Platform Features</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="section-title mx-auto">
            One Platform.{' '}
            <span className="gradient-text">Infinite Possibilities.</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle mx-auto mt-4">
            Everything you need to automate customer engagement, boost sales, and scale your business — without hiring more people.
          </motion.p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((f, i) => (
            <motion.div variants={itemVariants} key={i} className="glass-card group relative overflow-hidden">
              {/* Tag */}
              <div className="absolute top-4 right-4">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                      style={{ background: f.gradient, color: 'white', opacity: 0.9 }}>
                  {f.tag}
                </span>
              </div>

              {/* Icon */}
              <div className="feature-icon-wrap" style={{ background: f.gradient }}>
                <f.icon size={28} />
              </div>

              <h3 className="text-2xl font-black text-ink mb-3">{f.title}</h3>
              <p className="text-ink-muted text-base md:text-lg leading-relaxed mb-6">{f.desc}</p>

              <a href="https://wa.me/6581798737?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-1.5 text-base font-bold text-primary group-hover:gap-3 transition-all duration-300">
                Learn More <ArrowRight size={16} />
              </a>

              {/* Bottom gradient line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                   style={{ background: f.gradient }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
