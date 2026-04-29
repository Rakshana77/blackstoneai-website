import { ArrowRight, ChevronRight, MessageCircle, Instagram, Send as TelegramIcon } from 'lucide-react';
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from 'motion/react';

const easeOutExpo = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

const titleWords = "Grow Your Business with".split(" ");

export default function Hero() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '20%']);
  const contentY = useTransform(scrollY, [0, 1000], ['0%', '10%']);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      id="hero"
      className="gradient-bg-hero relative overflow-hidden min-h-screen flex items-center group"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Cursor Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(220,38,38,0.15), transparent 80%)`
        }}
      />

      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        {/* Glow orbs */}
        <div className="glow-orb w-[500px] h-[500px] bg-primary top-[-100px] left-[-100px] animate-pulse-glow" />
        <div className="glow-orb w-[400px] h-[400px] bg-accent bottom-[-50px] right-[-50px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="glow-orb w-[300px] h-[300px] bg-primary-light top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" style={{ animationDelay: '1s' }} />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </motion.div>

      <div className="container-main relative z-10 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ y: contentY }}
          >
            <motion.div variants={itemVariants} className="section-badge !bg-white/10 !text-red-300 mb-6 backdrop-blur-md border border-white/10 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              <span className="tracking-widest">DELIVERING VALUE TO YOUR BUSINESS</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.05] mb-6 tracking-tight flex flex-wrap gap-x-4">
              {titleWords.map((word, i) => (
                <motion.span key={i} variants={itemVariants} className="inline-block">{word}</motion.span>
              ))}
              <motion.span variants={itemVariants} className="relative inline-block mt-2 w-full">
                <span className="bg-gradient-to-r from-red-500 via-rose-400 to-red-600 bg-[length:200%_auto] animate-shimmer text-transparent bg-clip-text">
                  Agentic AI Solutions
                </span>
              </motion.span>
            </h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-300/80 leading-relaxed mb-10 max-w-xl font-medium">
              Delivering value to your business with intelligent automation. Experience the next generation of conversational AI and CRM.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/6581798737?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank" rel="noopener noreferrer"
                className="btn-primary !py-4 !px-8 !text-base !rounded-2xl shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all overflow-hidden relative group">
                <span className="absolute inset-0 w-full h-full -ml-12 bg-white opacity-20 -skew-x-12 group-hover:animate-[shimmer_1.5s_ease-in-out_infinite]" />
                <span className="relative flex items-center gap-2">Book Now <ArrowRight size={18} /></span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/6581798737?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank" rel="noopener noreferrer"
                className="btn-secondary !py-4 !px-8 !text-base !rounded-2xl !bg-white/5 !border-white/20 !text-white hover:!bg-white/10 flex items-center gap-2 backdrop-blur-sm">
                <MessageCircle size={18} className="text-green-400" /> Chat on WhatsApp
              </motion.a>
            </motion.div>

            {/* Channel badges */}
            <motion.div variants={containerVariants} className="flex flex-wrap items-center gap-4 text-slate-500 text-sm">
              {[
                { icon: <MessageCircle size={16} className="text-green-400" />, text: 'WhatsApp' },
                { icon: <Instagram size={16} className="text-pink-400" />, text: 'Instagram' },
                { icon: <span className="text-blue-400 text-sm font-bold">f</span>, text: 'Facebook' },
                { icon: <TelegramIcon size={16} className="text-sky-400" />, text: 'Telegram' },
              ].map((badge, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.1, y: -2 }} className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10 cursor-pointer transition-all hover:bg-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_20px_rgba(220,38,38,0.2)]">
                  {badge.icon}
                  <span className="text-slate-300 text-xs font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Hero Visual */}
          <div className="hidden lg:block relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateX: 10, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              className="relative perspective-[1200px]"
            >
              <motion.div
                animate={{ y: [0, -20, 0], rotateZ: [0, 2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-3xl opacity-40"
                style={{ background: 'linear-gradient(135deg, #DC2626, #EF4444)', filter: 'blur(50px)' }}
              />
              {/* Unified Inbox Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A]/60 backdrop-blur-2xl p-7 shadow-2xl group"
              >
                {/* Spotlight inside card */}
                <motion.div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
                  style={{
                    background: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(220,38,38,0.2), transparent 80%)`
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className="text-xs font-bold uppercase tracking-widest text-red-400">One Intelligent Inbox</div>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                  </div>
                  <p className="text-slate-400 text-sm mb-6">All chats from WhatsApp, Instagram, and Telegram — in one view.</p>

                  {/* Mock chat items */}
                  <div className="space-y-3">
                    {[
                      { name: 'Priya S.', msg: 'Hi, I want to book an appointment for tomorrow', channel: 'WhatsApp', color: '#25D366', time: '2m ago' },
                      { name: 'Rajesh K.', msg: 'Can you share your menu?', channel: 'Instagram', color: '#E1306C', time: '5m ago' },
                      { name: 'Amit P.', msg: 'Order #1234 — delivery update?', channel: 'Telegram', color: '#0088CC', time: '12m ago' },
                      { name: 'Neha M.', msg: 'What are your salon timings?', channel: 'Facebook', color: '#1877F2', time: '18m ago' },
                    ].map((chat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + (i * 0.15), type: 'spring', damping: 15 }}
                        whileHover={{ scale: 1.02, x: 8 }}
                        className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-all cursor-pointer shadow-sm hover:shadow-md"
                      >
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 shadow-inner"
                          style={{ background: chat.color }}>
                          {chat.name.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="text-white text-sm font-semibold">{chat.name}</span>
                            <span className="text-slate-500 text-[10px] font-medium">{chat.time}</span>
                          </div>
                          <p className="text-slate-400 text-xs truncate">{chat.msg}</p>
                        </div>
                        <span className="text-[9px] font-bold uppercase px-2.5 py-1 rounded-full shrink-0"
                          style={{ background: `${chat.color}20`, color: chat.color }}>
                          {chat.channel}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 50L60 45C120 40 240 30 360 33C480 37 600 53 720 58C840 63 960 57 1080 48C1200 40 1320 30 1380 25L1440 20V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z"
            fill="white" />
        </svg>
      </div>
    </section>
  );
}
