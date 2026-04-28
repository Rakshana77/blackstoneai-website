import { TrendingUp, Clock, Users, Shield, Zap, HeadphonesIcon, ArrowUpRight, MessageSquare, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const reasons = [
  { title: '3× More Conversions', desc: 'Businesses using Blackstone AI see up to 3× increase in lead-to-customer conversion rates.', icon: TrendingUp },
  { title: 'Reply in Under 2 Minutes', desc: 'AI agents respond instantly. No more losing customers to slow response times.', icon: Clock },
  { title: '500+ Businesses Trust Us', desc: 'From local shops to growing startups, hundreds of businesses rely on our platform daily.', icon: Users },
  { title: 'Enterprise-Grade Security', desc: 'End-to-end encryption, data privacy compliance, and secure cloud infrastructure.', icon: Shield },
  { title: 'Setup in 10 Minutes', desc: 'No developers needed. Connect your channels and start automating in minutes, not weeks.', icon: Zap },
  { title: 'Dedicated Support Team', desc: 'Real humans ready to help you succeed. Get onboarding assistance and priority support.', icon: HeadphonesIcon },
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

export default function WhyChooseUs() {
  const [chartData, setChartData] = useState([30, 45, 60, 50, 75, 90, 85, 110]);

  // Simulate real-time dashboard data changes
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prev => {
        const newData = [...prev.slice(1), Math.floor(Math.random() * 60) + 70];
        return newData;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="why-us" className="section-spacing relative overflow-hidden"
             style={{ background: 'linear-gradient(135deg, #0A0A0A 0%, #1A0000 50%, #2D0000 100%)' }}>
      
      {/* Dynamic particles and glow */}
      <motion.div 
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }} 
        transition={{ duration: 10, repeat: Infinity }} 
        className="glow-orb w-[600px] h-[600px] bg-red-600 top-[-200px] right-[-200px] blur-[120px]" 
      />
      <motion.div 
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.5, 1] }} 
        transition={{ duration: 15, repeat: Infinity, delay: 5 }} 
        className="glow-orb w-[500px] h-[500px] bg-rose-600 bottom-[-200px] left-[-200px] blur-[100px]" 
      />

      <div className="container-main relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Text Content */}
          <div>
            <motion.div variants={itemVariants} className="section-badge !bg-white/10 !text-red-300 mb-6 backdrop-blur-md border border-white/10">
              <Shield size={14} />
              <span>Why Blackstone AI</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Results That{' '}
              <span className="bg-gradient-to-r from-red-500 to-rose-400 animate-shimmer bg-[length:200%_auto] text-transparent bg-clip-text">
                Speak for Themselves
              </span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
              Don't just automate — accelerate. Watch your conversion rates multiply with an AI system that never sleeps and never misses a lead.
            </motion.p>

            <motion.div variants={containerVariants} className="grid sm:grid-cols-2 gap-6">
              {reasons.slice(0, 4).map((r, i) => (
                <motion.div key={i} variants={itemVariants} className="flex gap-4 group">
                  <div className="mt-1 shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-red-500/20 group-hover:border-red-500/30 transition-colors">
                    <r.icon size={18} className="text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-bold mb-1">{r.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Dashboard Animation */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-rose-600 rounded-3xl blur opacity-20 animate-pulse" />
            
            <div className="relative bg-[#111] rounded-3xl border border-white/10 p-6 shadow-2xl overflow-hidden backdrop-blur-xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-white font-bold text-xl">Conversion Growth</h3>
                  <p className="text-slate-500 text-base">Live AI Performance</p>
                </div>
                <div className="flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1.5 rounded-full text-sm font-bold border border-green-500/30">
                  <ArrowUpRight size={16} /> +324%
                </div>
              </div>

              {/* Animated Chart */}
              <div className="h-48 flex items-end gap-2 mb-8 border-b border-white/10 pb-4 relative">
                {chartData.map((val, i) => (
                  <div key={i} className="flex-1 flex flex-col justify-end group">
                    <motion.div 
                      layout
                      initial={{ height: 0 }}
                      animate={{ height: `${val}%` }}
                      transition={{ type: "spring", stiffness: 50 }}
                      className={`w-full rounded-t-md relative ${i === chartData.length - 1 ? 'bg-gradient-to-t from-red-600 to-rose-400' : 'bg-white/10 group-hover:bg-white/20'}`}
                    >
                      {i === chartData.length - 1 && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-rose-400 rounded-full blur-md opacity-50" />
                      )}
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Live Notifications */}
              <div className="space-y-3 relative">
                <div className="absolute -inset-4 bg-gradient-to-t from-[#111] via-transparent to-transparent z-10 pointer-events-none" />
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.5 }}
                  className="bg-white/5 rounded-xl p-3 flex items-center gap-3 border border-white/5"
                >
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400"><CheckCircle size={14} /></div>
                  <div className="flex-1">
                    <div className="text-base font-bold text-white">New Sale Closed</div>
                    <div className="text-sm text-slate-400">AI handled checkout process</div>
                  </div>
                  <div className="text-sm text-slate-500">Just now</div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ repeat: Infinity, repeatDelay: 4, duration: 0.5, delay: 1 }}
                  className="bg-white/5 rounded-xl p-3 flex items-center gap-3 border border-white/5"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><MessageSquare size={14} /></div>
                  <div className="flex-1">
                    <div className="text-base font-bold text-white">Meeting Booked</div>
                    <div className="text-sm text-slate-400">Via Instagram DM</div>
                  </div>
                  <div className="text-sm text-slate-500">2m ago</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
