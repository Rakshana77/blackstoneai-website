import { ShieldCheck, Globe, Star } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="py-10 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600">
              <ShieldCheck size={24} />
            </div>
            <div>
              <div className="text-sm font-black text-ink uppercase tracking-tighter">Trusted Choice</div>
              <div className="text-xs text-ink-muted font-bold">Industry Leading Solutions</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-red-100 flex items-center justify-center text-[10px] font-bold text-red-600">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-xs font-bold text-ink">
              <div className="flex items-center gap-1 text-red-500 mb-0.5">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={10} fill="currentColor" />)}
              </div>
              500+ Businesses Trust Us
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
