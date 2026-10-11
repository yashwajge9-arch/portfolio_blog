import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { VideoCard } from '../components/VideoCard';
import { VideoModal } from '../components/VideoModal';
import { shortsData } from '../data/portfolio';
import { VideoItem } from '../types';
import { Sparkles } from 'lucide-react';

export const ShortsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Instagram Reels' | 'YouTube Shorts' | 'TikTok'>('All');
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const filters = [
    { label: 'All Shorts', value: 'All' as const },
    { label: 'Instagram Reels', value: 'Instagram Reels' as const },
    { label: 'YouTube Shorts', value: 'YouTube Shorts' as const },
    { label: 'TikTok', value: 'TikTok' as const },
  ];

  const filteredShorts = shortsData.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.platform === activeFilter;
  });

  return (
    <>
      <SEO
        title="Short-Form Video Portfolio | Reels & TikTok by Alex Vance"
        description="Browse vertical 9:16 video work for Instagram Reels, YouTube Shorts, and TikTok. High-retention hooks, kinetic subtitles, and pattern interrupts."
        canonicalPath="/shorts"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-left">
        {/* Page Header */}
        <div className="max-w-3xl space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>Vertical Video Library</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Short-Form Portfolio (Reels, Shorts &amp; TikTok)
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Every vertical edit is engineered around the opening 3-second hook window, rhythmic pattern interrupts, kinetic subtitles, and seamless audio loops to maximize algorithmic retention.
          </p>
        </div>

        {/* Filter chips (Functional buttons) */}
        <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-white/5 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                activeFilter === filter.value
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {filter.label}
            </button>
          ))}
          <span className="text-xs text-slate-400 ml-auto hidden sm:inline">
            Showing {filteredShorts.length} projects
          </span>
        </div>

        {/* Responsive Grid of vertical 9:16 cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
          {filteredShorts.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              orientation="vertical"
              onPlay={(v) => setActiveVideo(v)}
            />
          ))}
        </div>
      </div>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </>
  );
};
