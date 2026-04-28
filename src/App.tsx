import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import About from './components/About';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Solutions from './components/Solutions';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { ReactLenis } from 'lenis/react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true, orientation: 'vertical' }}>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <TrustSection />
          <About />
          <Features />
          <HowItWorks />
          <Solutions />
          <WhyChooseUs />
          <Testimonials />
          <FAQ />
          <CTABanner />
          <Contact />
        </main>
        <Footer />

        {/* Sticky WhatsApp CTA Button */}
        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          href="https://wa.me/6581798737?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          id="sticky-whatsapp-cta"
          className="sticky-cta"
          aria-label="Chat on WhatsApp"
        >
          <div className="w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl transition-transform hover:scale-110"
               style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 8px 30px rgba(37,211,102,0.4)' }}>
            <MessageCircle size={28} />
          </div>
        </motion.a>
      </div>
    </ReactLenis>
  );
}
