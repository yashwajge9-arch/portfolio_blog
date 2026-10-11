import React from 'react';
import { servicesData } from '../data/siteConfig';
import { Sparkles, Film, Mic, Sliders, Eye } from 'lucide-react';

export const ServicesStrip: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'Film':
        return <Film className="w-5 h-5 text-amber-400" />;
      case 'Mic':
        return <Mic className="w-5 h-5 text-amber-400" />;
      case 'Sliders':
        return <Sliders className="w-5 h-5 text-amber-400" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 border-t border-white/5 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-left mb-12">
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
            Capabilities &amp; Deliverables
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Comprehensive Post-Production Services
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            From viral short-form hooks to broadcast-standard long-form finishing, every project is engineered for audience retention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`p-6 sm:p-7 rounded-2xl bg-[#12131c] border border-white/5 hover:border-amber-500/30 transition-all duration-300 text-left flex flex-col justify-between ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="space-y-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  {getIcon(service.icon)}
                </div>

                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-xs text-amber-400/90 font-medium mt-0.5">
                    {service.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-1.5 pt-2 text-xs text-slate-300">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>Standard Turnaround:</span>
                <span className="text-slate-200 font-semibold">{service.turnaround}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
