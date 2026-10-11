import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Sparkles, Film, BookOpen, Mail } from 'lucide-react';

export const BottomNav: React.FC = () => {
  const tabs = [
    { label: 'Home', to: '/', icon: Home, exact: true },
    { label: 'Shorts', to: '/shorts', icon: Sparkles, exact: false },
    { label: 'Long-Form', to: '/long-form', icon: Film, exact: false },
    { label: 'Blog', to: '/blog', icon: BookOpen, exact: false },
    { label: 'Contact', to: '/contact', icon: Mail, exact: false },
  ];

  return (
    <nav
      aria-label="Mobile Navigation Dock"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/10 md:hidden pb-safe"
    >
      <div className="grid grid-cols-5 h-16 items-center px-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.exact}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center min-h-[48px] py-1 transition-all ${
                  isActive
                    ? 'text-amber-400 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="relative">
                    <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110 text-amber-400' : ''}`} />
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-400" />
                    )}
                  </div>
                  <span className="text-[10px] tracking-tight mt-1 truncate max-w-[64px]">
                    {tab.label}
                  </span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
