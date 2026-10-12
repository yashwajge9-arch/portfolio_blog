import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ServicesStrip } from '../components/ServicesStrip';
import { siteConfig } from '../data/siteConfig';
import { ArrowUpRight, Award, Film, Sliders, CheckCircle2, Linkedin } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="About Yash Wajge | Video Editor, Colorist & Storyteller"
        description="Learn about Yash Wajge: 6+ years post-production experience, software proficiency in Premiere & DaVinci Resolve, 4-step workflow, and services."
        canonicalPath="/about"
      />

      <div className="w-full text-left">
        {/* Hero Bio Section */}
        <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Editor Photo (WebP < 150 KB) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden bg-[#12131c] border border-white/10 shadow-2xl aspect-[4/5] group">
                <img
                  src="/images/editor-portrait.webp"
                  alt="Yash Wajge - Professional Freelance Video Editor in Studio"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-white text-sm">Yash Wajge</p>
                    <p className="text-amber-400 font-medium">Remote · Available Worldwide</p>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Bio Prose */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>6+ Years Professional Post-Production Experience</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Crafting Stories That Arrest Attention and Build Authority
              </h1>

              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>
                  I'm Yash Wajge, a freelance video editor and post-production director. Over the past six years, I have cut over 350 videos generating more than 85 million views for venture-backed tech startups, high-profile creators, and media companies.
                </p>
                <p>
                  My philosophy centers on one core truth: <strong className="text-white">an edit is not technical typing; it is audience psychology.</strong> Great pacing requires knowing what to omit. By combining rigorous retention analytics with cinematic color science and immersive sound design, I help channels double their average view duration and convert casual swipers into devoted advocates.
                </p>
                <p>
                  Whether handling high-volume daily short-form batches or directing the narrative assembly of an hour-long documentary feature, I operate as an invested creative partner rather than a transactional freelancer.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-xl bg-amber-500 text-black font-bold text-sm hover:bg-amber-400 active:scale-95 transition-all shadow-lg shadow-amber-500/20 flex items-center gap-1.5"
                >
                  <span>Book a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/shorts"
                  className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/10 transition"
                >
                  <span>Explore Shorts Work</span>
                </Link>

                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-3 rounded-xl bg-white/5 hover:bg-blue-600/20 hover:border-blue-500/40 text-slate-200 hover:text-white font-medium text-sm border border-white/10 transition flex items-center gap-2"
                  aria-label="Connect on LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Software & Technical Proficiency Matrix */}
        <section className="py-16 sm:py-20 border-t border-white/5 bg-[#08080c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
                Technical Toolkit
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Software &amp; Post-Production Pipeline
              </h2>
              <p className="text-sm text-slate-400 mt-2">
                Industry-standard NLEs, audio suites, and color management systems utilized daily.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {siteConfig.software.map((sw) => (
                <div
                  key={sw.name}
                  className="p-5 rounded-2xl bg-[#12131c] border border-white/5 hover:border-amber-500/30 transition-all space-y-2 text-left"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-base font-bold text-white">
                      {sw.name}
                    </h3>
                    <span className="text-[11px] font-semibold text-amber-400 font-mono">
                      {sw.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    {sw.tag}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4-Step Production Workflow */}
        <section className="py-16 sm:py-20 border-t border-white/5 bg-[#0a0a0f]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
                Structured Process
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                How We Collaborate from Ingestion to Master
              </h2>
              <p className="text-sm text-slate-400 mt-2">
                A transparent 4-stage pipeline designed for predictability, zero deadline drift, and collaborative review.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {siteConfig.workflowSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-6 rounded-2xl bg-[#12131c] border border-white/5 relative flex flex-col justify-between space-y-4 text-left"
                >
                  <div className="space-y-3">
                    <span className="font-display text-2xl font-extrabold text-amber-400/80">
                      {step.step}
                    </span>
                    <h3 className="font-display text-lg font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Quality verified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Component */}
        <ServicesStrip />

        {/* Call to action */}
        <section className="py-20 border-t border-white/5 bg-[#0d0e15] text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
              Ready to Discuss Your Production?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              I am currently accepting select new channel retainers and commercial projects for the upcoming quarter.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 text-black font-bold text-sm hover:bg-amber-400 transition shadow-xl shadow-amber-500/20"
              >
                <span>Get in Touch with Yash</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
