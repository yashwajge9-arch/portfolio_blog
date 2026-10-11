import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { VideoCard } from '../components/VideoCard';
import { VideoModal } from '../components/VideoModal';
import { BlogCard } from '../components/BlogCard';
import { ServicesStrip } from '../components/ServicesStrip';
import { Testimonials } from '../components/Testimonials';
import { shortsData, longFormData } from '../data/portfolio';
import { blogPostsData } from '../data/blogPosts';
import { siteConfig } from '../data/siteConfig';
import { VideoItem } from '../types';
import { ArrowRight, Play, Sparkles, Film, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [showreelPlaying, setShowreelPlaying] = useState(false);

  // Latest 3 blog posts
  const latestPosts = blogPostsData.slice(0, 3);

  return (
    <>
      <SEO
        title="Yash Wajge | Video Editor for Reels, Shorts & YouTube"
        description="Professional video editing for short-form and long-form content: high-retention Reels, Shorts & YouTube videos. View portfolio and hire Yash Wajge."
        canonicalPath="/"
      />

      <div className="w-full">
        {/* 1. Hero Section */}
        <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
          {/* Subtle background ambient glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Headline & Value Prop */}
              <div className="lg:col-span-7 space-y-6">
                {/* Live Availability Trust Marker */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{siteConfig.availabilityStatus}</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-amber-400">{siteConfig.location}</span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] text-balance">
                  Yash Wajge – Video Editor for Creators &amp; Brands
                </h1>

                <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                  {siteConfig.tagline}
                </p>

                {/* Primary & Secondary Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4">
                  <a
                    href="#work"
                    className="px-6 py-3.5 rounded-xl bg-amber-500 text-black font-bold text-sm hover:bg-amber-400 active:scale-95 transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2"
                  >
                    <span>View My Work</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <Link
                    to="/contact"
                    className="px-6 py-3.5 rounded-xl bg-white/10 text-white font-semibold text-sm hover:bg-white/15 active:scale-95 transition-all border border-white/10 flex items-center gap-2"
                  >
                    <span>Hire Me</span>
                    <ArrowUpRight className="w-4 h-4 text-amber-400" />
                  </Link>
                </div>

                {/* Quantitative metrics proof */}
                <div className="pt-8 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {siteConfig.stats.map((stat) => (
                    <div key={stat.label} className="space-y-0.5">
                      <div className="font-display text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
                        {stat.value}
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Showreel Facade Player (Lazy-loaded, zero video bloat) */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl bg-[#12131c] border border-white/10 overflow-hidden shadow-2xl aspect-[4/3] group">
                  {showreelPlaying ? (
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/R6MlUcmOul8?autoplay=1&mute=1&loop=1&playlist=R6MlUcmOul8"
                      title="Yash Wajge Video Editing Showreel"
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div
                      onClick={() => setShowreelPlaying(true)}
                      className="relative w-full h-full cursor-pointer overflow-hidden"
                    >
                      <img
                        src="/images/editor-studio.webp"
                        alt="Yash Wajge video editing studio setup and timeline monitor"
                        width={1200}
                        height={750}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

                      {/* Play trigger */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-3">
                        <div className="w-16 h-16 rounded-full bg-amber-500 text-black flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-400">
                          <Play className="w-7 h-7 fill-black ml-1" />
                        </div>
                        <div>
                          <p className="font-display text-base font-bold text-white tracking-wide">
                            2026 Showreel
                          </p>
                          <p className="text-xs text-slate-300 mt-0.5">
                            Click to play (0:60 highlights)
                          </p>
                        </div>
                      </div>

                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-slate-300">
                        <span>4K / 60FPS Reel</span>
                        <span className="text-amber-400 font-medium">Click to Load</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Short-Form Section (Reels, Shorts, TikTok) */}
        <section id="work" className="py-16 sm:py-24 border-t border-white/5 bg-[#0a0a0f]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 text-left">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Vertical Format Specialization</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  Short-Form Content (Reels, Shorts, TikTok)
                </h2>
                <p className="text-sm text-slate-400 mt-2 max-w-xl">
                  Engineered for algorithmic discovery: 3-second hook retention, kinetic subtitles, and pattern interrupts.
                </p>
              </div>

              <Link
                to="/shorts"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors shrink-0"
              >
                <span>View all shorts</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Grid of 6 vertical (9:16) video cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
              {shortsData.slice(0, 6).map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  orientation="vertical"
                  onPlay={(v) => setActiveVideo(v)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 3. Long-Form Section (YouTube, Podcasts, Documentaries) */}
        <section className="py-16 sm:py-24 border-t border-white/5 bg-[#08080c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 text-left">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
                  <Film className="w-4 h-4" />
                  <span>Cinematic Storytelling</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  Long-Form Content (YouTube, Podcasts, Documentaries)
                </h2>
                <p className="text-sm text-slate-400 mt-2 max-w-xl">
                  Narrative restructuring, multi-camera switching, DaVinci Resolve color grading, and broadcast sound mixing.
                </p>
              </div>

              <Link
                to="/long-form"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors shrink-0"
              >
                <span>View all long-form</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Grid of 6 horizontal (16:9) cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {longFormData.slice(0, 6).map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  orientation="horizontal"
                  onPlay={(v) => setActiveVideo(v)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 4. Services Strip */}
        <ServicesStrip />

        {/* 5. Latest from the Blog (3 most recent posts) */}
        <section className="py-16 sm:py-24 border-t border-white/5 bg-[#0a0a0f]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 text-left">
              <div>
                <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
                  The Video Editor's Handbook
                </p>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  Latest from the Blog
                </h2>
                <p className="text-sm text-slate-400 mt-2 max-w-xl">
                  Proven frameworks on video retention, NLE software comparisons, sound design, and creator workflows.
                </p>
              </div>

              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors shrink-0"
              >
                <span>View all 10 articles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* 6. Testimonials */}
        <Testimonials />

        {/* 7. Final Call to Action Strip */}
        <section className="py-20 border-t border-white/5 bg-gradient-to-b from-[#0a0a0f] to-[#12131f] text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Ready to Upgrade Your Channel's Retention?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Whether you need daily viral short-form edits or a dedicated lead editor for your weekly YouTube documentary series, let's build something exceptional.
            </p>
            <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-xl bg-amber-500 text-black font-bold text-sm hover:bg-amber-400 active:scale-95 transition-all shadow-xl shadow-amber-500/25 flex items-center gap-2"
              >
                <span>Hire Yash Wajge</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="px-6 py-3.5 rounded-xl bg-white/10 text-white font-semibold text-sm hover:bg-white/15 active:scale-95 transition-all border border-white/10"
              >
                <span>About Workflow &amp; Software</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Video Modal Player Facade */}
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </>
  );
};
