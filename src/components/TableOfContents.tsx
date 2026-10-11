import React, { useState, useEffect } from 'react';
import { List } from 'lucide-react';

interface TOCProps {
  items: { id: string; label: string }[];
}

export const TableOfContents: React.FC<TOCProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = items.length - 1; i >= 0; i--) {
        const el = document.getElementById(items[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(items[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="rounded-2xl bg-[#12131c] border border-white/5 p-5 space-y-3">
      <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider pb-2 border-b border-white/5">
        <List className="w-4 h-4" />
        <span>Table of Contents</span>
      </div>

      <nav aria-label="Article Outline" className="space-y-1 text-xs">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToHeading(item.id)}
              className={`w-full text-left py-1.5 px-2 rounded-lg transition-colors flex items-center justify-between ${
                isActive
                  ? 'text-amber-400 bg-amber-500/10 font-medium'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              <span className="truncate pr-2">{item.label}</span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};
