import React from 'react';
import { testimonialsData } from '../data/siteConfig';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 border-t border-white/5 bg-[#08080c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-left mb-12">
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
            Client Outcomes &amp; Retention Proof
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Trusted by Top Creators &amp; Media Brands
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            Real outcomes from creators and channels scaling their audiences with retention-engineered editing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#12131c] border border-white/5 hover:border-amber-500/30 transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                    <Quote className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-amber-400 font-mono">
                    {item.metric}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-xs font-bold text-amber-400">
                  {item.avatarText}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    {item.clientName}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {item.clientRole} · <span className="text-slate-300">{item.channelOrCompany}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
