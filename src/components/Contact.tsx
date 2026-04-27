import { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock } from 'lucide-react';

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
        <div className="text-center mb-16">
          <div className="section-badge mx-auto mb-4">
            <Phone size={14} />
            <span>Talk to Us</span>
          </div>
          <h2 className="section-title mx-auto">
            Let's Build Your{' '}
            <span className="gradient-text">Growth Engine</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Book a free personalized demo. See exactly how BusinessOnGo works for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="glass-card flex items-center gap-4 flex-1">
              <div className="feature-icon-wrap shrink-0" style={{ background: 'linear-gradient(135deg, #DC2626, #EF4444)' }}>
                <Phone size={20} />
              </div>
              <div>
                <div className="text-xs text-ink-muted font-semibold uppercase tracking-wider mb-1">Call Us</div>
                <a href="tel:+919876543210" className="text-ink font-bold hover:text-primary transition-colors">+91 98765 43210</a>
              </div>
            </div>

            <div className="glass-card flex items-center gap-4 flex-1">
              <div className="feature-icon-wrap shrink-0" style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
                <MessageCircle size={20} />
              </div>
              <div>
                <div className="text-xs text-ink-muted font-semibold uppercase tracking-wider mb-1">WhatsApp</div>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
                   className="text-ink font-bold hover:text-whatsapp transition-colors">Chat Instantly</a>
              </div>
            </div>

            <div className="glass-card flex items-center gap-4 flex-1">
              <div className="feature-icon-wrap shrink-0" style={{ background: 'linear-gradient(135deg, #0A0A0A, #1C1C1C)' }}>
                <Mail size={20} />
              </div>
              <div>
                <div className="text-xs text-ink-muted font-semibold uppercase tracking-wider mb-1">Email</div>
                <a href="mailto:hello@businessongo.in" className="text-ink font-bold hover:text-primary transition-colors">hello@businessongo.in</a>
              </div>
            </div>

            <div className="glass-card flex items-center gap-4 flex-1">
              <div className="feature-icon-wrap shrink-0" style={{ background: 'linear-gradient(135deg, #B91C1C, #DC2626)' }}>
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-xs text-ink-muted font-semibold uppercase tracking-wider mb-1">Office</div>
                <span className="text-ink font-bold text-sm">Blackstone AI, Hyderabad, India</span>
              </div>
            </div>

            <div className="glass-card flex items-center gap-4 flex-1">
              <div className="feature-icon-wrap shrink-0" style={{ background: 'linear-gradient(135deg, #EF4444, #DC2626)' }}>
                <Clock size={20} />
              </div>
              <div>
                <div className="text-xs text-ink-muted font-semibold uppercase tracking-wider mb-1">Response Time</div>
                <span className="text-ink font-bold text-sm">Under 2 hours on working days</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 flex">
            <form onSubmit={handleSubmit} className="glass-card !p-8 relative overflow-hidden flex-1 flex flex-col" id="lead-capture-form">
              {submitted && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur z-20 flex flex-col items-center justify-center rounded-2xl">
                  <div className="text-5xl mb-4">🚀</div>
                  <div className="text-xl font-bold text-ink mb-2">You're All Set!</div>
                  <div className="text-ink-muted text-sm">Our team will reach out within 2 hours.</div>
                </div>
              )}

              <h3 className="text-xl font-bold text-ink mb-1">Book Your Free Demo</h3>
              <p className="text-ink-muted text-sm mb-6">Fill the form below and we'll show you exactly how BusinessOnGo works for your business.</p>
              
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
              <button type="submit" id="contact-submit" className="btn-primary w-full !py-4 !text-base">
                <Send size={18} /> Book Free Demo
              </button>
              <p className="text-xs text-ink-muted text-center mt-3">
                🔒 100% secure. We never share your data. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
