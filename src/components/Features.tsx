import { MessageSquare, Bot, LayoutDashboard, Instagram, Megaphone, UsersRound, ArrowRight } from 'lucide-react';

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

export default function Features() {
  return (
    <section id="features" className="section-spacing bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="glow-orb w-[400px] h-[400px] bg-primary top-0 right-0 opacity-[0.04]" />
      <div className="glow-orb w-[300px] h-[300px] bg-accent bottom-0 left-0 opacity-[0.04]" />

      <div className="container-main relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-badge mx-auto mb-4">
            <Bot size={14} />
            <span>Platform Features</span>
          </div>
          <h2 className="section-title mx-auto">
            One Platform.{' '}
            <span className="gradient-text">Infinite Possibilities.</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Everything you need to automate customer engagement, boost sales, and scale your business — without hiring more people.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <div key={i} className="glass-card group relative overflow-hidden">
              {/* Tag */}
              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                      style={{ background: f.gradient, color: 'white', opacity: 0.9 }}>
                  {f.tag}
                </span>
              </div>

              {/* Icon */}
              <div className="feature-icon-wrap" style={{ background: f.gradient }}>
                <f.icon size={24} />
              </div>

              <h3 className="text-xl font-bold text-ink mb-3">{f.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed mb-4">{f.desc}</p>

              <a href="https://wa.me/6581798737?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-3 transition-all duration-300">
                Learn More <ArrowRight size={14} />
              </a>

              {/* Bottom gradient line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                   style={{ background: f.gradient }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
