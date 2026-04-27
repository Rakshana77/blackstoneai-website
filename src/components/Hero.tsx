import { ArrowRight, ChevronRight, MessageCircle, Instagram, Send as TelegramIcon } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="gradient-bg-hero relative overflow-hidden min-h-screen flex items-center">
      {/* Glow orbs */}
      <div className="glow-orb w-[500px] h-[500px] bg-primary top-[-100px] left-[-100px] animate-pulse-glow" />
      <div className="glow-orb w-[400px] h-[400px] bg-accent bottom-[-50px] right-[-50px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="glow-orb w-[300px] h-[300px] bg-primary-light top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" style={{ animationDelay: '1s' }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="container-main relative z-10 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <div className="section-badge !bg-white/10 !text-red-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              <span>OMNICHANNEL AI</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-6">
              Turn Customer Conversations into{' '}
              <span className="relative">
                <span className="gradient-text">Revenue</span>
              </span>
              {' '}— Automatically
            </h1>

            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-8 max-w-xl">
              Connect WhatsApp, Instagram, Facebook, and Telegram in one platform. Grow your business without increasing manpower.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#contact" id="hero-cta-demo" className="btn-primary !py-4 !px-8 !text-base !rounded-2xl">
                Book Demo <ArrowRight size={18} />
              </a>
              <a href="#how-it-works" id="hero-cta-learn" className="btn-secondary !py-4 !px-8 !text-base !rounded-2xl !bg-white/5 !border-white/20 !text-white hover:!bg-white/10">
                Learn More <ChevronRight size={16} />
              </a>
            </div>

            {/* Channel badges */}
            <div className="flex flex-wrap items-center gap-4 text-slate-500 text-sm">
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                <MessageCircle size={16} className="text-green-400" />
                <span className="text-slate-300 text-xs font-medium">WhatsApp</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                <Instagram size={16} className="text-pink-400" />
                <span className="text-slate-300 text-xs font-medium">Instagram</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                <span className="text-blue-400 text-sm font-bold">f</span>
                <span className="text-slate-300 text-xs font-medium">Facebook</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                <TelegramIcon size={16} className="text-sky-400" />
                <span className="text-slate-300 text-xs font-medium">Telegram</span>
              </div>
            </div>
          </div>

          {/* Right — Hero Visual */}
          <div className="animate-float hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl opacity-30"
                   style={{ background: 'linear-gradient(135deg, #DC2626, #EF4444)', filter: 'blur(40px)' }} />
              {/* Unified Inbox Card */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#111]/80 backdrop-blur-xl p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-red-400 mb-3">One Intelligent Inbox</div>
                <p className="text-slate-400 text-sm mb-5">All chats from WhatsApp, Instagram, and Telegram — in one view.</p>
                
                {/* Mock chat items */}
                <div className="space-y-3">
                  {[
                    { name: 'Priya S.', msg: 'Hi, I want to book an appointment for tomorrow', channel: 'WhatsApp', color: '#25D366', time: '2m ago' },
                    { name: 'Rajesh K.', msg: 'Can you share your menu?', channel: 'Instagram', color: '#E1306C', time: '5m ago' },
                    { name: 'Amit P.', msg: 'Order #1234 — delivery update?', channel: 'Telegram', color: '#0088CC', time: '12m ago' },
                    { name: 'Neha M.', msg: 'What are your salon timings?', channel: 'Facebook', color: '#1877F2', time: '18m ago' },
                  ].map((chat, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                           style={{ background: chat.color }}>
                        {chat.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm font-semibold">{chat.name}</span>
                          <span className="text-slate-600 text-[10px]">{chat.time}</span>
                        </div>
                        <p className="text-slate-400 text-xs truncate">{chat.msg}</p>
                      </div>
                      <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded-full shrink-0"
                            style={{ background: `${chat.color}20`, color: chat.color }}>
                        {chat.channel}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 50L60 45C120 40 240 30 360 33C480 37 600 53 720 58C840 63 960 57 1080 48C1200 40 1320 30 1380 25L1440 20V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z"
                fill="white"/>
        </svg>
      </div>
    </section>
  );
}
