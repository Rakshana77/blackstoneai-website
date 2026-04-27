import { Link2, Database, Bot, Megaphone } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Connect',
    desc: 'Integrate every social channel into one unified business dashboard.',
    icon: Link2,
    gradient: 'linear-gradient(135deg, #DC2626, #EF4444)',
  },
  {
    step: '02',
    title: 'Capture',
    desc: 'Automatically store customer data and history in your Smart CRM.',
    icon: Database,
    gradient: 'linear-gradient(135deg, #0A0A0A, #1C1C1C)',
  },
  {
    step: '03',
    title: 'Convert',
    desc: 'AI agents handle 24/7 replies and guide leads to checkout.',
    icon: Bot,
    gradient: 'linear-gradient(135deg, #B91C1C, #DC2626)',
  },
  {
    step: '04',
    title: 'Re-engage',
    desc: 'Run broadcast campaigns to bring one-time shoppers back.',
    icon: Megaphone,
    gradient: 'linear-gradient(135deg, #EF4444, #DC2626)',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-spacing bg-white relative">
      <div className="container-main">
        <div className="text-center mb-16">
          <div className="section-badge mx-auto mb-4">
            <span>⚡</span>
            <span>How It Works</span>
          </div>
          <h2 className="section-title mx-auto">
            Four Steps to{' '}
            <span className="gradient-text">Automate Everything</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            No more switching between apps. No more missed customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="glass-card group text-center relative overflow-hidden">
              {/* Step number */}
              <div className="text-6xl font-black text-gray-100 absolute top-4 right-4 leading-none select-none">{s.step}</div>
              
              <div className="feature-icon-wrap mx-auto relative z-10" style={{ background: s.gradient }}>
                <s.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-ink mb-2 relative z-10">{s.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed relative z-10">{s.desc}</p>

              {/* Connector line (except last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-red-200 to-transparent z-20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
