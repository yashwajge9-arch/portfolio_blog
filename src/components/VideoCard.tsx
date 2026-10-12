import React from 'react';
import { VideoItem } from '../types';
import { Play, Clock, Eye, Sparkles } from 'lucide-react';

interface VideoCardProps {
  video: VideoItem;
  onPlay: (video: VideoItem) => void;
  orientation?: 'vertical' | 'horizontal';
}

export const VideoCard: React.FC<VideoCardProps> = ({
  video,
  onPlay,
  orientation,
}) => {
  const isShort = orientation ? orientation === 'vertical' : video.type === 'short';

  if (isShort) {
    // 9:16 Vertical Card (Reels, TikTok, Shorts)
    return (
      <div
        onClick={() => onPlay(video)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onPlay(video);
          }
        }}
        tabIndex={0}
        role="button"
        aria-label={`Watch ${video.title}`}
        className="group relative flex flex-col rounded-2xl bg-[#12131c] border border-white/5 overflow-hidden transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer shadow-lg"
      >
        {/* Facade Thumbnail (9:16) */}
        <div className="relative aspect-[9/16] w-full overflow-hidden bg-slate-900">
          <img
            src={video.thumbnail}
            alt={video.title}
            width={540}
            height={960}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Measured gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-opacity" />

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-amber-500/90 text-black flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-400">
              <Play className="w-5 h-5 fill-black ml-0.5" />
            </div>
          </div>

          {/* Platform & Views overlay top */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/90">
            <span className="font-semibold text-amber-300 drop-shadow flex items-center gap-1">
              {video.isCustomReel && <Sparkles className="w-3 h-3 text-amber-400" />}
              {video.platform}
            </span>
            <span className="flex items-center gap-1 drop-shadow bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-xs">
              <Eye className="w-3 h-3 text-amber-400" />
              <span>{video.views}</span>
            </span>
          </div>

          {/* Bottom Card Meta info */}
          <div className="absolute bottom-3 left-3 right-3 space-y-1.5 text-left">
            <h3 className="font-display text-sm font-bold text-white line-clamp-2 leading-snug group-hover:text-amber-300 transition-colors">
              {video.title}
            </h3>

            <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
              <span>{video.client}</span>
              {video.runtime && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{video.runtime}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 16:9 Horizontal Card (YouTube, Podcasts, Docs)
  return (
    <div
      onClick={() => onPlay(video)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onPlay(video);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Watch ${video.title}`}
      className="group relative flex flex-col rounded-2xl bg-[#12131c] border border-white/5 overflow-hidden transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer shadow-lg"
    >
      {/* Facade Thumbnail (16:9) */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
        <img
          src={video.thumbnail}
          alt={video.title}
          width={960}
          height={540}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-amber-500/90 text-black flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-400">
            <Play className="w-5 h-5 fill-black ml-0.5" />
          </div>
        </div>

        {/* Runtime badge */}
        {video.runtime && (
          <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/80 text-[11px] font-mono font-medium text-white flex items-center gap-1 backdrop-blur-xs">
            <Clock className="w-3 h-3 text-amber-400" />
            <span>{video.runtime}</span>
          </div>
        )}

        {/* Platform tag top left */}
        <div className="absolute top-2.5 left-2.5 text-[11px] font-semibold text-amber-300 drop-shadow">
          {video.platform}
        </div>
      </div>

      {/* Content info */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between space-y-3 text-left">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="text-amber-400/90 font-medium">{video.client}</span>
            <span>{video.views}</span>
          </div>

          <h3 className="font-display text-base font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
            {video.title}
          </h3>

          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {video.description}
          </p>
        </div>

        {/* Footer info: Role & Tools */}
        <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
          <span className="truncate pr-2">{video.role}</span>
          <div className="flex items-center gap-1 shrink-0 text-slate-400 font-medium">
            <span>{video.tools[0]}</span>
            {video.tools.length > 1 && <span>+{video.tools.length - 1}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};
