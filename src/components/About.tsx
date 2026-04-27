import { Sparkles, MessageCircle, LayoutDashboard } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-spacing bg-soft relative overflow-hidden">
      <div className="glow-orb w-[300px] h-[300px] bg-primary top-0 right-0 opacity-[0.04]" />

      <div className="container-main">
        <div className="text-center mb-16">
          <div className="section-badge mx-auto mb-4">
            <Sparkles size={14} />
            <span>Key Features</span>
          </div>
          <h2 className="section-title mx-auto">
            Your Complete{' '}
            <span className="gradient-text">Business Engine</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* AI Sales */}
          <div className="glass-card group relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-600 text-white">AI SALES</span>
            </div>
            <div className="feature-icon-wrap" style={{ background: 'linear-gradient(135deg, #DC2626, #EF4444)' }}>
              <MessageCircle size={24} />
            </div>
            <h3 className="text-2xl font-bold text-ink mb-3">Your 24/7 AI Sales Team</h3>
            <p className="text-ink-muted leading-relaxed mb-6">
              AI agents automatically respond to customers using your business data. Never miss a lead, never lose a sale — even while you sleep.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Auto Responses', 'Lead Qualification', 'Smart Follow-ups', '24/7 Availability'].map((tag, i) => (
                <span key={i} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-red-50 text-red-600 border border-red-100">
                  {tag}
                </span>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                 style={{ background: 'linear-gradient(135deg, #DC2626, #EF4444)' }} />
          </div>

          {/* Smart CRM */}
          <div className="glass-card group relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#0A0A0A] text-white">SMART CRM</span>
            </div>
            <div className="feature-icon-wrap" style={{ background: 'linear-gradient(135deg, #0A0A0A, #1C1C1C)' }}>
              <LayoutDashboard size={24} />
            </div>
            <h3 className="text-2xl font-bold text-ink mb-3">Organized and Tracked</h3>
            <p className="text-ink-muted leading-relaxed mb-6">
              All customer data captured automatically. Turn every enquiry into a business asset. Track conversations, orders, and customer journeys in one dashboard.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Auto Data Capture', 'Customer History', 'Lead Tracking', 'Sales Pipeline'].map((tag, i) => (
                <span key={i} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                  {tag}
                </span>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                 style={{ background: 'linear-gradient(135deg, #0A0A0A, #1C1C1C)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
