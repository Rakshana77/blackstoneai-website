import { Heart } from 'lucide-react';

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

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-slate-400 relative overflow-hidden">
      {/* Top border gradient */}
      <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #DC2626, #EF4444, #DC2626, #B91C1C, #DC2626)' }} />

      <div className="container-main py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-lg"
                   style={{ background: 'linear-gradient(135deg, #DC2626, #EF4444)' }}>
                B
              </div>
              <div>
                <span className="text-white font-extrabold text-lg">Business</span>
                <span className="font-extrabold text-lg gradient-text">OnGo</span>
                <span className="text-slate-600 text-[10px] block -mt-1 font-medium tracking-wider">by Blackstone AI</span>
              </div>
            </a>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              AI-powered omnichannel customer engagement platform. Connect WhatsApp, Instagram, Facebook & Telegram — automate conversations, capture leads, and grow revenue. Built in India, for Indian businesses.
            </p>
            <div className="flex gap-3">
              {[
                { icon: '𝕏', label: 'Twitter' },
                { icon: 'in', label: 'LinkedIn' },
                { icon: '📸', label: 'Instagram' },
                { icon: '▶', label: 'YouTube' },
              ].map((social, i) => (
                <a key={i} href="#" aria-label={social.label}
                   className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sm font-bold text-slate-400 hover:text-white hover:bg-red-600/20 hover:border-red-500/30 transition-all">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((col, i) => (
            <div key={i}>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href={link.href} className="text-sm hover:text-white transition-colors duration-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} BusinessOnGo by Blackstone AI. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={12} className="text-red-500 fill-red-500" /> in Hyderabad, India
          </p>
        </div>
      </div>
    </footer>
  );
}
