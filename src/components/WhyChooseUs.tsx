import { TrendingUp, Clock, Users, Shield, Zap, HeadphonesIcon } from 'lucide-react';

const reasons = [
  { title: '3× More Conversions', desc: 'Businesses using Blackstone AI see up to 3× increase in lead-to-customer conversion rates.', icon: TrendingUp },
  { title: 'Reply in Under 2 Minutes', desc: 'AI agents respond instantly. No more losing customers to slow response times.', icon: Clock },
  { title: '500+ Businesses Trust Us', desc: 'From local shops to growing startups, hundreds of businesses rely on our platform daily.', icon: Users },
  { title: 'Enterprise-Grade Security', desc: 'End-to-end encryption, data privacy compliance, and secure cloud infrastructure.', icon: Shield },
  { title: 'Setup in 10 Minutes', desc: 'No developers needed. Connect your channels and start automating in minutes, not weeks.', icon: Zap },
  { title: 'Dedicated Support Team', desc: 'Real humans ready to help you succeed. Get onboarding assistance and priority support.', icon: HeadphonesIcon },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-spacing relative overflow-hidden"
             style={{ background: 'linear-gradient(135deg, #0A0A0A 0%, #1A0000 50%, #2D0000 100%)' }}>
      <div className="glow-orb w-[500px] h-[500px] bg-primary top-[-100px] right-[-100px] opacity-[0.1]" />
      <div className="glow-orb w-[400px] h-[400px] bg-accent bottom-[-100px] left-[-100px] opacity-[0.1]" />

      <div className="container-main relative z-10">
        <div className="text-center mb-16">
          <div className="section-badge !bg-white/10 !text-red-300 mx-auto mb-4">
            <Shield size={14} />
            <span>Why Blackstone AI</span>
          </div>
          <h2 className="section-title !text-white mx-auto">
            Results That{' '}
            <span className="gradient-text">Speak for Themselves</span>
          </h2>
          <p className="section-subtitle !text-slate-400 mx-auto mt-4">
            Don't just automate — accelerate. Here's why global businesses choose us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-red-500/30 hover:-translate-y-1 group">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-red-600/20 border border-red-500/20">
                  <r.icon size={20} className="text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
