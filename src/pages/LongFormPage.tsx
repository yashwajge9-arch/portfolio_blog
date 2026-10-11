import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { VideoCard } from '../components/VideoCard';
import { VideoModal } from '../components/VideoModal';
import { longFormData } from '../data/portfolio';
import { VideoItem } from '../types';
import { Film } from 'lucide-react';

export const LongFormPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const filters = [
    { label: 'All Projects', value: 'All' },
    { label: 'YouTube', value: 'YouTube' },
    { label: 'Podcast', value: 'Podcast' },
    { label: 'Documentary', value: 'Documentary' },
    { label: 'Corporate', value: 'Corporate' },
  ];

  const filteredProjects = longFormData.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.platform === activeFilter;
  });

  return (
    <>
      <SEO
        title="Long-Form Video Portfolio | YouTube & Docs by Alex Vance"
        description="Cinematic long-form editing: multi-camera switching, documentary storytelling, DaVinci Resolve color grading, and broadcast sound design."
        canonicalPath="/long-form"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-left">
        {/* Page Header */}
        <div className="max-w-3xl space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest">
            <Film className="w-4 h-4" />
            <span>Horizontal 16:9 Cinema &amp; Episodic</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Long-Form Portfolio (YouTube, Podcasts &amp; Documentaries)
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            High-retention episodic post-production: multi-camera synchronization, narrative assembly, custom After Effects graphics, ACES color grading, and broadcast mastering.
          </p>
        </div>

        {/* Filter chips */}
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
            Showing {filteredProjects.length} productions
          </span>
        </div>

        {/* Grid of horizontal 16:9 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              orientation="horizontal"
              onPlay={(v) => setActiveVideo(v)}
            />
          ))}
        </div>
      </div>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </>
  );
};
