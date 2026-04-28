import { Heart, Facebook, Instagram, Linkedin, MessageCircle, Phone } from 'lucide-react';
import { motion } from 'motion/react';

const footerLinks = [
  {
    title: 'Platform',
    links: [
      { label: 'Omnichannel Inbox', href: '#features' },
      { label: 'AI Chatbot', href: '#features' },
      { label: 'Smart CRM', href: '#features' },
      { label: 'Broadcast Campaigns', href: '#features' },
      { label: 'Multi-Agent Support', href: '#features' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Salons & Spas', href: '#solutions' },
      { label: 'Restaurants & Cafés', href: '#solutions' },
      { label: 'E-Commerce & Retail', href: '#solutions' },
      { label: 'Healthcare & Clinics', href: '#solutions' },
      { label: 'Education & Coaching', href: '#solutions' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Success Stories', href: '#testimonials' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact Us', href: '#contact' },
    ],
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

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-slate-400 relative overflow-hidden">
      {/* Top border gradient */}
      <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #DC2626, #EF4444, #DC2626, #B91C1C, #DC2626)' }} />

      <div className="container-main py-16">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <a href="#hero" className="inline-flex items-center gap-3 mb-6 group bg-white px-5 py-3 rounded-2xl shadow-lg border border-gray-100">
              <img src="/images/logo.png" alt="Blackstone AI Logo" className="w-14 h-14 object-contain" />
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-ink font-black text-3xl tracking-tight leading-none group-hover:text-red-600 transition-colors">Blackstone</span>
                  <span className="font-black text-3xl tracking-tight gradient-text ml-1.5 leading-none">AI</span>
                </div>
                <span className="text-slate-500 text-[9px] font-bold tracking-widest mt-1 uppercase italic">Delivering value to your business</span>
              </div>
            </a>
            <p className="text-base leading-relaxed mb-6 max-w-sm">
              AI-powered omnichannel customer engagement platform. Grow your business with smart digital solutions. Delivering value to your business worldwide.
            </p>
            
            <div className="flex flex-col gap-4 mb-6">
              <a href="tel:+6581798737" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                <Phone size={16} className="text-red-500" />
                <span className="text-lg font-bold">+65 81798737</span>
              </a>
            </div>

            <div className="flex gap-4">
              {[
                { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/blackstoneai' },
                { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/blackstoneai' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/blackstoneai' },
                { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/6581798737?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services.' },
              ].map((social, i) => (
                <a key={i} href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600 hover:border-red-500 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all duration-300">
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((col, i) => (
            <motion.div variants={itemVariants} key={i}>
              <h4 className="text-white font-bold text-base mb-4 uppercase tracking-wider">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href={link.href} className="text-base hover:text-white transition-colors duration-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
        >
          <p>© {new Date().getFullYear()} Blackstone AI. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
