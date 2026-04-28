import { Link2, Database, Bot, Megaphone, CheckCircle2, User, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const steps = [
  {
    step: '01',
    title: 'User Message',
    desc: 'Customer sends a WhatsApp or DM inquiry.',
    icon: User,
    gradient: 'linear-gradient(135deg, #25D366, #128C7E)',
  },
  {
    step: '02',
    title: 'AI Reply',
    desc: 'Intelligent agent answers instantly.',
    icon: Bot,
    gradient: 'linear-gradient(135deg, #DC2626, #EF4444)',
  },
  {
    step: '03',
    title: 'Lead Stored',
    desc: 'Contact info securely captured.',
    icon: Database,
    gradient: 'linear-gradient(135deg, #0A0A0A, #1C1C1C)',
  },
  {
    step: '04',
    title: 'CRM Update',
    desc: 'Pipeline moves automatically.',
    icon: Link2,
    gradient: 'linear-gradient(135deg, #B91C1C, #DC2626)',
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

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how-it-works" className="section-spacing bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent" />
      
      <div className="container-main relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="section-badge mx-auto mb-4 border border-red-100 shadow-sm">
            <Sparkles size={14} className="text-red-500" />
            <span>Workflow Automation</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="section-title mx-auto">
            A Live System{' '}
            <span className="gradient-text">Working In Real-Time</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle mx-auto mt-4 max-w-2xl">
            Watch how our intelligent AI intercepts, responds, and logs data seamlessly without human intervention.
          </motion.p>
        </motion.div>

        {/* Dynamic Workflow Visualization */}
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="grid md:grid-cols-4 gap-8 relative"
          >
            {/* Animated Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-1/8 right-1/8 h-0.5 bg-gray-100 z-0">
              <motion.div 
                className="h-full bg-gradient-to-r from-red-500 to-rose-400"
                initial={{ width: "0%" }}
                animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
              />
            </div>

            {steps.map((s, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants} 
                className={`relative z-10 flex flex-col items-center transition-all duration-500 ${activeStep === i ? 'scale-105 opacity-100' : 'scale-95 opacity-50'}`}
              >
                {/* Node */}
                <div 
                  className="w-24 h-24 rounded-2xl flex items-center justify-center text-white mb-6 relative shadow-xl transition-all duration-500"
                  style={{ 
                    background: s.gradient,
                    boxShadow: activeStep === i ? '0 20px 40px -10px rgba(220,38,38,0.5)' : '0 10px 20px -10px rgba(0,0,0,0.2)'
                  }}
                >
                  <s.icon size={36} />
                  {activeStep === i && (
                    <motion.div 
                      layoutId="active-ring"
                      className="absolute -inset-2 rounded-3xl border-2 border-red-400 opacity-50"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </div>
                
                {/* Text */}
                <h3 className={`text-xl font-bold mb-2 transition-colors ${activeStep === i ? 'text-ink' : 'text-slate-400'}`}>{s.title}</h3>
                <p className="text-center text-base text-slate-500 font-medium px-4">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Interactive Simulation Window */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-[#0A0A0A] rounded-3xl border border-gray-800 p-6 md:p-10 shadow-2xl overflow-hidden relative group"
          >
            {/* Top Bar */}
            <div className="flex items-center gap-2 mb-8 border-b border-white/10 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="text-xs text-slate-500 ml-4 font-mono">system_activity_log</div>
            </div>

            <div className="min-h-[200px] flex items-center justify-center relative">
              {/* State 0: User Message */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: activeStep === 0 ? 1 : 0, x: activeStep === 0 ? 0 : -20, pointerEvents: activeStep === 0 ? 'auto' : 'none' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 border border-white/10 shadow-xl max-w-sm w-full">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white"><User size={20} /></div>
                  <div>
                    <div className="text-white text-sm font-bold">New message via WhatsApp</div>
                    <div className="text-slate-400 text-xs mt-1">"Hi, I need pricing for 10 users."</div>
                  </div>
                </div>
              </motion.div>

              {/* State 1: AI Reply */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: activeStep === 1 ? 1 : 0, x: activeStep === 1 ? 0 : 20, pointerEvents: activeStep === 1 ? 'auto' : 'none' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-red-500/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 border border-red-500/20 shadow-[0_0_30px_rgba(220,38,38,0.15)] max-w-sm w-full">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white shadow-lg animate-pulse-glow"><Bot size={20} /></div>
                  <div>
                    <div className="text-white text-sm font-bold">AI Agent Replying...</div>
                    <div className="text-red-200 text-xs mt-1">"Our team plan is $99/mo. Would you like a demo?"</div>
                  </div>
                </div>
              </motion.div>

              {/* State 2: Lead Stored */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: activeStep === 2 ? 1 : 0, scale: activeStep === 2 ? 1 : 0.9, pointerEvents: activeStep === 2 ? 'auto' : 'none' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl text-center max-w-sm w-full">
                  <Database size={32} className="text-slate-300 mx-auto mb-3" />
                  <div className="text-white text-sm font-bold mb-1">Lead Captured Securely</div>
                  <div className="text-green-400 text-xs flex items-center justify-center gap-1"><CheckCircle2 size={12} /> Syncing to Database</div>
                </div>
              </motion.div>

              {/* State 3: CRM Update */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: activeStep === 3 ? 1 : 0, y: activeStep === 3 ? 0 : 20, pointerEvents: activeStep === 3 ? 'auto' : 'none' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-gradient-to-r from-red-900/40 to-black rounded-2xl p-5 border border-red-500/20 shadow-xl max-w-sm w-full">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white text-sm font-bold">Sales Pipeline</span>
                    <span className="text-red-400 text-xs font-bold bg-red-400/10 px-2 py-1 rounded">Updated</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-8 bg-white/5 rounded flex items-center px-3 opacity-50">
                      <div className="w-2 h-2 rounded-full bg-slate-500 mr-2" /> <span className="text-xs text-slate-300">Cold Leads</span>
                    </div>
                    <div className="h-8 bg-red-500/20 border border-red-500/30 rounded flex items-center px-3 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                      <div className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse" /> <span className="text-xs text-white font-bold">Hot Prospects (+1)</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Grid overlay for aesthetic */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
