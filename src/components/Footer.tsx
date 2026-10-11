import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Instagram, Linkedin, Twitter, ArrowUpRight, Mail } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#07070a] border-t border-white/5 pt-16 pb-24 md:pb-16 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/5">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-display text-2xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors">
                Yash Wajge
              </span>
            </Link>
            <p className="text-slate-400 max-w-md text-sm leading-relaxed">
              {siteConfig.tagline}
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{siteConfig.availabilityStatus}</span>
              <span className="text-slate-600">·</span>
              <span>{siteConfig.location}</span>
            </div>
          </div>

          {/* Site Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors">
                  Work (Featured)
                </Link>
              </li>
              <li>
                <Link to="/shorts" className="hover:text-amber-400 transition-colors">
                  Shorts Gallery (Reels, TikTok)
                </Link>
              </li>
              <li>
                <Link to="/long-form" className="hover:text-amber-400 transition-colors">
                  Long-Form (YouTube, Docs)
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-amber-400 transition-colors">
                  Editor's Blog (10 Guides)
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">
                  About, Tools &amp; Workflow
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">
                  Hire Me / Contact Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Channels & Contact */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2.5 mb-5">
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-red-500/20 hover:text-red-400 border border-white/5 flex items-center justify-center transition-all text-slate-300"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-pink-500/20 hover:text-pink-400 border border-white/5 flex items-center justify-center transition-all text-slate-300"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-500/20 hover:text-blue-400 border border-white/5 flex items-center justify-center transition-all text-slate-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-sky-500/20 hover:text-sky-400 border border-white/5 flex items-center justify-center transition-all text-slate-300"
                aria-label="Twitter X Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            <div className="space-y-2 text-xs">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>{siteConfig.email}</span>
              </a>
              <p className="text-slate-400">Response within 24 business hours</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Yash Wajge. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-slate-200 transition-colors">
              Inquire
            </Link>
            <Link to="/blog" className="hover:text-slate-200 transition-colors">
              Articles
            </Link>
            <span className="text-slate-400">PWA Enabled · Offline Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
