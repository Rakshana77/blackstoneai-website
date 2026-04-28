import { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import { motion } from 'motion/react';

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

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', business: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead captured:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', phone: '', business: '', message: '' });
  };

  return (
    <section id="contact" className="section-spacing bg-white relative">
      <div className="container-main">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="section-badge mx-auto mb-4">
            <Phone size={14} />
            <span>Talk to Us</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="section-title mx-auto">
            Let's Build Your{' '}
            <span className="gradient-text">Growth Engine</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle mx-auto mt-4">
            Book a free personalized demo. See exactly how Blackstone AI works for your business.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-stretch"
        >
          <div className="lg:col-span-2 flex flex-col gap-5">
            <motion.div variants={itemVariants} className="glass-card flex items-center gap-4 flex-1">
              <div className="feature-icon-wrap shrink-0" style={{ background: 'linear-gradient(135deg, #DC2626, #EF4444)' }}>
                <Phone size={20} />
              </div>
              <div>
                <div className="text-sm text-ink-muted font-semibold uppercase tracking-wider mb-1">Call Us</div>
                <a href="tel:+6581798737" className="text-ink text-lg font-bold hover:text-primary transition-colors">+65 81798737</a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card flex items-center gap-4 flex-1">
              <div className="feature-icon-wrap shrink-0" style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
                <MessageCircle size={20} />
              </div>
              <div>
                <div className="text-sm text-ink-muted font-semibold uppercase tracking-wider mb-1">WhatsApp</div>
                <a href="https://wa.me/6581798737?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
                   target="_blank" rel="noopener noreferrer"
                   className="text-ink text-lg font-bold hover:text-whatsapp transition-colors">Chat Instantly</a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card flex items-center gap-4 flex-1">
              <div className="feature-icon-wrap shrink-0" style={{ background: 'linear-gradient(135deg, #0A0A0A, #1C1C1C)' }}>
                <Mail size={20} />
              </div>
              <div>
                <div className="text-sm text-ink-muted font-semibold uppercase tracking-wider mb-1">Email</div>
                <a href="mailto:hello@blackstoneai.in" className="text-ink text-lg font-bold hover:text-primary transition-colors">hello@blackstoneai.in</a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card flex items-center gap-4 flex-1">
              <div className="feature-icon-wrap shrink-0" style={{ background: 'linear-gradient(135deg, #B91C1C, #DC2626)' }}>
                <Clock size={20} />
              </div>
              <div>
                <div className="text-sm text-ink-muted font-semibold uppercase tracking-wider mb-1">Availability</div>
                <span className="text-ink font-bold text-base">24/7 Automated Support</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card flex items-center gap-4 flex-1">
              <div className="feature-icon-wrap shrink-0" style={{ background: 'linear-gradient(135deg, #EF4444, #DC2626)' }}>
                <Send size={20} />
              </div>
              <div>
                <div className="text-sm text-ink-muted font-semibold uppercase tracking-wider mb-1">Privacy</div>
                <span className="text-ink font-bold text-base">End-to-end Encrypted</span>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="lg:col-span-3 flex">
            <form onSubmit={handleSubmit} className="glass-card !p-8 relative overflow-hidden flex-1 flex flex-col" id="lead-capture-form">
              {submitted && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur z-20 flex flex-col items-center justify-center rounded-2xl">
                  <div className="text-5xl mb-4">🚀</div>
                  <div className="text-xl font-bold text-ink mb-2">You're All Set!</div>
                  <div className="text-ink-muted text-sm">Our team will reach out within 2 hours.</div>
                </div>
              )}

              <h3 className="text-2xl font-bold text-ink mb-2">Book Your Free Demo</h3>
              <p className="text-ink-muted text-base mb-6">Fill the form below and we'll show you exactly how Blackstone AI works for your business.</p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <input id="contact-name" name="name" type="text" placeholder="Your Name *" required value={formData.name} onChange={handleChange} className="form-input" />
                <input id="contact-email" name="email" type="email" placeholder="Email Address *" required value={formData.email} onChange={handleChange} className="form-input" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <input id="contact-phone" name="phone" type="tel" placeholder="WhatsApp Number *" required value={formData.phone} onChange={handleChange} className="form-input" />
                <select id="contact-business" name="business" value={formData.business} onChange={handleChange} className="form-input">
                  <option value="">Your Industry</option>
                  <option value="salon">Salon / Spa</option>
                  <option value="restaurant">Restaurant / Café</option>
                  <option value="retail">E-Commerce / Retail</option>
                  <option value="healthcare">Healthcare / Clinic</option>
                  <option value="education">Education / Coaching</option>
                  <option value="service">Consulting / Agency</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <textarea id="contact-message" name="message" placeholder="Tell us about your business and what you'd like to automate..." rows={4} value={formData.message} onChange={handleChange} className="form-input mb-6 resize-none flex-1" />
              <a href="https://wa.me/6581798737?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
                 target="_blank" rel="noopener noreferrer"
                 className="btn-primary w-full !py-4 !text-base text-center flex items-center justify-center gap-2">
                <MessageCircle size={18} /> Book Now on WhatsApp
              </a>
              <p className="text-sm text-ink-muted text-center mt-3">
                🔒 100% secure. We never share your data. No spam, ever.
              </p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
