import React from 'react';
import { SEO } from '../components/SEO';
import { ContactForm } from '../components/ContactForm';
import { siteConfig } from '../data/siteConfig';
import { Mail, MessageSquare, Youtube, Instagram, Linkedin, Twitter, Clock, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact Alex Vance | Book Video Editing Projects"
        description="Get in touch to book freelance video editing for Reels, YouTube, and documentaries. Direct project inquiry form, rates, and contact links."
        canonicalPath="/contact"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Copy & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
                Start a Conversation
              </p>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Let's Elevate Your Channel's Visuals
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Tell me about your channel goals, raw footage duration, timeline expectations, and reference videos. I reply to all inquiries within 24 business hours.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="p-4 rounded-xl bg-[#12131c] border border-white/5 hover:border-amber-500/30 flex items-center gap-3.5 transition group"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Direct Email</p>
                  <p className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-[#12131c] border border-white/5 hover:border-emerald-500/30 flex items-center gap-3.5 transition group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">WhatsApp Business</p>
                  <p className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    +44 7700 900123 (Quick Text Chat)
                  </p>
                </div>
              </a>
            </div>

            {/* Social channels */}
            <div className="space-y-3 pt-2">
              <p className="text-xs font-semibold text-slate-300">
                Follow &amp; Connect Online
              </p>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={siteConfig.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-[#12131c] border border-white/5 hover:border-red-500/40 text-xs text-slate-300 hover:text-white flex items-center gap-2 transition"
                >
                  <Youtube className="w-3.5 h-3.5 text-red-400" />
                  <span>YouTube</span>
                </a>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-[#12131c] border border-white/5 hover:border-pink-500/40 text-xs text-slate-300 hover:text-white flex items-center gap-2 transition"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>Instagram</span>
                </a>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-[#12131c] border border-white/5 hover:border-blue-500/40 text-xs text-slate-300 hover:text-white flex items-center gap-2 transition"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={siteConfig.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-[#12131c] border border-white/5 hover:border-sky-500/40 text-xs text-slate-300 hover:text-white flex items-center gap-2 transition"
                >
                  <Twitter className="w-3.5 h-3.5 text-sky-400" />
                  <span>X (Twitter)</span>
                </a>
              </div>
            </div>

            {/* Guarantee / Trust Badges */}
            <div className="pt-6 border-t border-white/5 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Fast 24-hour turnaround on draft revisions via Frame.io</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Confidential NDA &amp; secure cloud storage transfer</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 rounded-2xl bg-[#10111a] border border-white/10 p-6 sm:p-8 shadow-2xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-6">
              Project Inquiry Form
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};
