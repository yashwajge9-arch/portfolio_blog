import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { InstallAppBanner } from './InstallAppBanner';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Work', to: '/' },
    { label: 'Shorts', to: '/shorts' },
    { label: 'Long-Form', to: '/long-form' },
    { label: 'Blog', to: '/blog' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <Link
            to="/"
            className="flex items-center gap-2 group text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
          >
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
              Alex Vance
            </span>
          </Link>

          {/* Zone 2: Navigation Links (Text with subtle active indicator) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative py-1 transition-colors hover:text-white ${
                    isActive ? 'text-amber-400 font-semibold' : 'text-slate-300'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-400 rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: Primary Actions (Install App + Hire Me) */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* In-app install button */}
            <InstallAppBanner variant="button" />

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold rounded-lg bg-white text-black hover:bg-slate-200 active:scale-95 transition-all shadow-sm"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0d0e15] border-b border-white/10 px-4 pt-3 pb-6 space-y-2">
            <div className="grid grid-cols-2 gap-2 pt-1">
              {navLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                      isActive
                        ? 'bg-amber-500/15 text-amber-400 font-semibold border border-amber-500/30'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>alex@vanceedit.com</span>
              <span className="text-emerald-400 font-medium">● Available for work</span>
            </div>
          </div>
        )}
      </header>

      {/* Top promotional install banner (collapsible) */}
      <InstallAppBanner variant="banner" />
    </>
  );
};
