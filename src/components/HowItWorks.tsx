import { Link2, Database, Bot, CheckCircle2, User, Sparkles, MessageCircle, Settings, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const steps = [
  {
    step: '01',
    title: 'CONVERSATIONS',
    items: ['WhatsApp', 'Instagram', 'Messenger', 'Telegram'],
    icon: MessageCircle,
    gradient: 'linear-gradient(135deg, #25D366, #128C7E)',
  },
  {
    step: '02',
    title: 'AI AGENTS',
    items: ['Instant responses', 'Product recommendations', 'Booking & order guidance'],
    icon: Bot,
    gradient: 'linear-gradient(135deg, #DC2626, #EF4444)',
  },
  {
    step: '03',
    title: 'SMART CRM',
    items: ['Customer profiles', 'Interaction history', 'Lead tracking', 'Segmentation'],
    icon: Database,
    gradient: 'linear-gradient(135deg, #0A0A0A, #1C1C1C)',
  },
  {
    step: '04',
    title: 'OPERATIONS',
    items: ['Orderly – Order management', 'Workly – Bookings & Scheduling', 'Workflow – Task management'],
    icon: Settings,
    gradient: 'linear-gradient(135deg, #4F46E5, #4338CA)',
  },
  {
    step: '05',
    title: 'INTEGRATIONS',
    items: ['POS Systems', 'Payment Gateways', 'ERP / Accounting', 'APIs & Webhooks'],
    icon: Link2,
    gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
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
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="grid md:grid-cols-5 gap-4 md:gap-8 relative"
          >
            {/* Animated Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-100 z-0">
              <motion.div 
                className="h-full bg-gradient-to-r from-red-500 to-rose-400"
                initial={{ width: "0%" }}
                animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
              />
            </div>

            {steps.map((s, i) => {
              // Highlight AI AGENTS card slightly
              const isAiAgent = i === 1;
              const isActive = activeStep === i;
              
              return (
                <motion.div 
                  key={i} 
                  variants={itemVariants} 
                  className={`relative z-10 flex flex-col items-center transition-all duration-500 ${
                    isActive ? 'scale-105 opacity-100' : 
                    isAiAgent ? 'scale-100 opacity-90' : 'scale-95 opacity-50'
                  }`}
                >
                  {/* Node */}
                  <div 
                    className="w-24 h-24 rounded-2xl flex items-center justify-center text-white mb-6 relative shadow-xl transition-all duration-500"
                    style={{ 
                      background: s.gradient,
                      boxShadow: isActive ? '0 20px 40px -10px rgba(220,38,38,0.5)' : 
                                 isAiAgent ? '0 10px 20px -5px rgba(220,38,38,0.3)' : '0 10px 20px -10px rgba(0,0,0,0.2)'
                    }}
                  >
                    <s.icon size={36} />
                    {isActive && (
                      <motion.div 
                        layoutId="active-ring"
                        className="absolute -inset-2 rounded-3xl border-2 border-red-400 opacity-50"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </div>
                  
                  {/* Text */}
                  <h3 className={`text-lg md:text-xl font-bold mb-4 text-center transition-colors ${isActive || isAiAgent ? 'text-ink' : 'text-slate-400'}`}>
                    {s.title}
                  </h3>
                  <ul className="text-center md:text-left text-sm text-slate-500 font-medium space-y-2 px-2 w-full">
                    {s.items.map((item, idx) => (
                      <li key={idx} className="flex items-start justify-center md:justify-start gap-2">
                        <span className="text-red-500 mt-0.5 shrink-0">•</span>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom Card (Business Knowledge) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="grid md:grid-cols-5 gap-4 md:gap-8 relative mt-16"
          >
            {/* Empty space for column 1 */}
            <div className="hidden md:block col-span-1" />
            
            {/* Business Knowledge Card aligned under AI AGENTS (column 2) */}
            <motion.div variants={itemVariants} className="relative z-10 flex flex-col items-center col-span-1 md:col-start-2">
              {/* Arrow connecting Business Knowledge up to AI Agents */}
              <div className="hidden md:block absolute -top-16 left-1/2 w-0 h-16 border-l-2 border-dashed border-red-300 z-0 flex flex-col items-center">
                 {/* Arrow head */}
                 <div className="w-2 h-2 border-t-2 border-l-2 border-red-400 rotate-45 transform -translate-y-1 bg-white" />
              </div>
              
              {/* Node */}
              <div 
                className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center text-white mb-6 relative shadow-xl transition-all duration-500"
                style={{ 
                  background: 'linear-gradient(135deg, #F43F5E, #E11D48)', // Rose red
                  boxShadow: '0 10px 20px -5px rgba(225,29,72,0.3)'
                }}
              >
                <BookOpen size={32} />
              </div>
              
              {/* Text */}
              <h3 className="text-lg md:text-xl font-bold mb-4 text-center text-ink">BUSINESS KNOWLEDGE</h3>
              <ul className="text-center md:text-left text-sm text-slate-500 font-medium space-y-2 px-2 w-full">
                <li className="flex items-start justify-center md:justify-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">•</span>
                  <span className="leading-snug">Product Info & Pricing</span>
                </li>
                <li className="flex items-start justify-center md:justify-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">•</span>
                  <span className="leading-snug">Business FAQs</span>
                </li>
                <li className="flex items-start justify-center md:justify-start gap-2">
                  <span className="text-red-500 mt-0.5 shrink-0">•</span>
                  <span className="leading-snug">Company Policies</span>
                </li>
              </ul>
              
              <div className="mt-6 text-xs font-bold text-red-600 bg-red-50 px-4 py-2 rounded-full uppercase tracking-wider border border-red-100 shadow-sm text-center">
                AI TRAINED ON YOUR DATA
              </div>
            </motion.div>
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
              {/* State 0: Conversations */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: activeStep === 0 ? 1 : 0, x: activeStep === 0 ? 0 : -20, pointerEvents: activeStep === 0 ? 'auto' : 'none' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 border border-white/10 shadow-xl max-w-sm w-full">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white"><MessageCircle size={20} /></div>
                  <div>
                    <div className="text-white text-sm font-bold">New Message (WhatsApp)</div>
                    <div className="text-slate-400 text-xs mt-1">"Can I book a table for tonight?"</div>
                  </div>
                </div>
              </motion.div>

              {/* State 1: AI Agents */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: activeStep === 1 ? 1 : 0, x: activeStep === 1 ? 0 : 20, pointerEvents: activeStep === 1 ? 'auto' : 'none' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-red-500/10 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 border border-red-500/20 shadow-[0_0_30px_rgba(220,38,38,0.15)] max-w-sm w-full">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white shadow-lg animate-pulse-glow"><Bot size={20} /></div>
                  <div>
                    <div className="text-white text-sm font-bold">AI Agent Replying...</div>
                    <div className="text-red-200 text-xs mt-1">"Yes! We have tables at 7 PM and 8 PM."</div>
                  </div>
                </div>
              </motion.div>

              {/* State 2: Smart CRM */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: activeStep === 2 ? 1 : 0, scale: activeStep === 2 ? 1 : 0.9, pointerEvents: activeStep === 2 ? 'auto' : 'none' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl text-center max-w-sm w-full">
                  <Database size={32} className="text-slate-300 mx-auto mb-3" />
                  <div className="text-white text-sm font-bold mb-1">Customer Profile Updated</div>
                  <div className="text-green-400 text-xs flex items-center justify-center gap-1"><CheckCircle2 size={12} /> Syncing Interaction History</div>
                </div>
              </motion.div>

              {/* State 3: Operations */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: activeStep === 3 ? 1 : 0, y: activeStep === 3 ? 0 : 20, pointerEvents: activeStep === 3 ? 'auto' : 'none' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-indigo-900/40 backdrop-blur-md rounded-2xl p-5 border border-indigo-500/20 shadow-xl max-w-sm w-full">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white text-sm font-bold">Workly Schedule</span>
                    <span className="text-indigo-400 text-xs font-bold bg-indigo-400/10 px-2 py-1 rounded">Booked</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-8 bg-indigo-500/20 border border-indigo-500/30 rounded flex items-center px-3 shadow-[0_0_15px_rgba(79,70,229,0.2)]">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2 animate-pulse" /> <span className="text-xs text-white font-bold">New Booking at 7 PM</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* State 4: Integrations */}
              <motion.div 
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: activeStep === 4 ? 1 : 0, scale: activeStep === 4 ? 1 : 1.1, pointerEvents: activeStep === 4 ? 'auto' : 'none' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-amber-900/40 backdrop-blur-md rounded-2xl p-5 border border-amber-500/20 shadow-xl max-w-sm w-full">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white text-sm font-bold">POS & Payments</span>
                    <span className="text-amber-400 text-xs font-bold bg-amber-400/10 px-2 py-1 rounded">Synced</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <Link2 className="text-amber-400" />
                     <div className="text-xs text-amber-100">API Webhook fired: Sending invoice to ERP...</div>
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
