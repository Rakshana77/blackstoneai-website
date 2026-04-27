import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    q: 'What exactly is BusinessOnGo?',
    a: 'BusinessOnGo is an AI-powered omnichannel communication platform built by Blackstone AI. It connects WhatsApp, Instagram, Facebook, and Telegram into one unified inbox — with AI chatbots, Smart CRM, broadcast campaigns, and team collaboration tools. Think of it as your entire customer communication stack in one place.',
  },
  {
    q: 'How does the AI chatbot work?',
    a: 'Our AI chatbot is trained on your business data — products, services, FAQs, pricing, and policies. It understands natural language, answers customer queries instantly, qualifies leads, collects contact information, and can even process orders. When a query needs human attention, it seamlessly hands off to your team.',
  },
  {
    q: 'Which messaging channels are supported?',
    a: 'BusinessOnGo currently supports WhatsApp Business API, Instagram Direct Messages, Facebook Messenger, and Telegram. All conversations appear in one unified inbox, so your team never has to switch between apps.',
  },
  {
    q: 'Is it suitable for small businesses?',
    a: 'Absolutely! BusinessOnGo is designed specifically for growing businesses in India — salons, restaurants, clinics, retail stores, coaching centers, and service providers. Our pricing is affordable, setup takes under 10 minutes, and no technical skills are required.',
  },
  {
    q: 'Do you offer a free trial or demo?',
    a: 'Yes! We offer a free personalized demo where our team walks you through the platform and shows how it applies to your specific business. You can also start with a free trial to experience the full power of automation before committing to a plan.',
  },
  {
    q: 'How is BusinessOnGo different from other tools?',
    a: 'Unlike single-channel tools, BusinessOnGo is a true omnichannel platform. We combine AI chatbots, CRM, broadcast campaigns, multi-agent support, and analytics in one solution. Plus, we\'re built for Indian businesses with local support, affordable pricing, and industry-specific templates.',
  },
  {
    q: 'How quickly can I get started?',
    a: 'Most businesses are up and running within 10–15 minutes. Simply connect your WhatsApp Business API, configure your AI chatbot responses, and you\'re live. Our onboarding team helps you every step of the way — for free.',
  },
  {
    q: 'Is my customer data secure?',
    a: 'Yes. We use enterprise-grade encryption, comply with data privacy regulations, and host on secure cloud infrastructure. Your customer data is never shared with third parties. We take security as seriously as you do.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-spacing bg-soft">
      <div className="container-main max-w-3xl">
        <div className="text-center mb-12">
          <div className="section-badge mx-auto mb-4">
            <span>💬</span>
            <span>FAQ</span>
          </div>
          <h2 className="section-title mx-auto">
            Got{' '}
            <span className="gradient-text">Questions?</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Everything you need to know about BusinessOnGo. Can't find your answer? Chat with us.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl border border-divider overflow-hidden transition-all duration-300"
                 style={{ background: openIndex === i ? 'linear-gradient(135deg, #FEF2F2, #FFF1F2)' : 'white' }}>
              <button
                id={`faq-toggle-${i}`}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-bold text-ink text-sm md:text-base pr-4">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-ink-muted transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-[500px] pb-5' : 'max-h-0'}`}>
                <p className="px-5 text-ink-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
