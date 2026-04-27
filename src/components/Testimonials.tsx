import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Owner, Glow Beauty Lounge',
    text: "Our no-show rate dropped by 60% after automating appointment reminders on WhatsApp. BusinessOnGo literally pays for itself. I can't imagine running my salon without it now.",
    rating: 5,
    avatar: '👩‍💼',
    gradient: 'linear-gradient(135deg, #DC2626, #EF4444)',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Manager, Spice Garden Restaurant',
    text: "We handle 40% more orders with the same team now. The automated order confirmations and delivery updates have freed up hours of manual work every single day.",
    rating: 5,
    avatar: '👨‍🍳',
    gradient: 'linear-gradient(135deg, #0A0A0A, #1C1C1C)',
  },
  {
    name: 'Amit Patel',
    role: 'Founder, Urban Trends Retail',
    text: "Instagram lead automation tripled our online inquiries in the first month. The AI chatbot handles 80% of customer questions without any human intervention. Mind-blowing!",
    rating: 5,
    avatar: '👨‍💼',
    gradient: 'linear-gradient(135deg, #B91C1C, #DC2626)',
  },
  {
    name: 'Dr. Neha Gupta',
    role: 'Director, HealthFirst Clinic',
    text: "Patient appointment booking via WhatsApp has been a game-changer. We reduced front-desk workload by 50% and patients love the convenience of automated reminders.",
    rating: 5,
    avatar: '👩‍⚕️',
    gradient: 'linear-gradient(135deg, #EF4444, #DC2626)',
  },
  {
    name: 'Vikram Singh',
    role: 'CEO, LearnPro Academy',
    text: "Managing 2000+ student inquiries manually was impossible. BusinessOnGo handles the initial screening and only sends qualified leads to our counselors. Enrollment is up 45%.",
    rating: 5,
    avatar: '👨‍🏫',
    gradient: 'linear-gradient(135deg, #1C1C1C, #0A0A0A)',
  },
  {
    name: 'Sneha Reddy',
    role: 'Founder, Luxe Home Décor',
    text: "The broadcast campaign feature alone drove ₹3L in sales last Diwali. Being able to share catalogs and take orders on WhatsApp has completely transformed our business.",
    rating: 5,
    avatar: '👩‍🎨',
    gradient: 'linear-gradient(135deg, #DC2626, #B91C1C)',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-spacing bg-white relative">
      <div className="container-main">
        <div className="text-center mb-16">
          <div className="section-badge mx-auto mb-4">
            <Star size={14} />
            <span>Success Stories</span>
          </div>
          <h2 className="section-title mx-auto">
            Real Businesses.{' '}
            <span className="gradient-text">Real Results.</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            See how businesses across India are growing with our AI-powered automation platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card relative group">
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={40} />
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-warning text-warning" />
                ))}
              </div>

              <p className="text-ink-muted text-sm leading-relaxed mb-6 relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-divider">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl text-white"
                     style={{ background: t.gradient }}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-ink text-sm">{t.name}</div>
                  <div className="text-ink-muted text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
