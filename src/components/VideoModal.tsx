import React, { useEffect, useState } from 'react';
import { VideoItem } from '../types';
import { X, Share2, Bookmark, BookmarkCheck, ExternalLink, Check, Clapperboard } from 'lucide-react';
import { isBookmarked, toggleBookmark } from '../utils/bookmarks';
import { ParallelLivesPlayer } from './ParallelLivesPlayer';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (video) {
      setSaved(isBookmarked(video.id));
    }
  }, [video]);

  // Lock body scroll and listen for ESC key
  useEffect(() => {
    if (!video) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [video, onClose]);

  if (!video) return null;

  const handleShare = async () => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${video.title} | Yash Wajge Edit`,
          text: `Check out this video edit: ${video.title}`,
          url: shareUrl,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const handleBookmark = () => {
    const isNowSaved = toggleBookmark({
      id: video.id,
      type: 'video',
      title: video.title,
      subtitle: `${video.platform} · ${video.role}`,
      url: window.location.pathname,
      thumbnail: video.thumbnail,
    });
    setSaved(isNowSaved);
  };

  const isShort = video.type === 'short';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className={`relative w-full ${
          isShort ? 'max-w-md' : 'max-w-4xl'
        } bg-[#10111a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0d0e15] shrink-0">
          <div className="flex items-center gap-2 truncate pr-2">
            <span className="text-xs font-semibold text-amber-400">
              {video.platform}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-400 truncate">{video.client}</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Native Web Share button */}
            <button
              onClick={handleShare}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition"
              title="Share Video Link"
              aria-label="Share video"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>

            {/* In-app Bookmark button */}
            <button
              onClick={handleBookmark}
              className={`p-1.5 rounded-lg transition ${
                saved
                  ? 'text-amber-400 bg-amber-500/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
              title={saved ? 'Saved in App' : 'Save to Bookmarks'}
              aria-label="Bookmark video"
            >
              {saved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Embed (Loaded on-demand facade or Custom Player) */}
        <div className={`relative bg-black w-full ${isShort ? 'aspect-[9/16]' : 'aspect-video'} overflow-hidden shrink-0`}>
          {video.isCustomReel || video.id === 'short-parallel-lives' ? (
            <ParallelLivesPlayer />
          ) : (
            <iframe
              src={video.embedUrl}
              title={video.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </div>

        {/* Video Info Details */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-3.5 bg-[#10111a]">
          <div>
            <h3 id="video-modal-title" className="font-display text-base sm:text-lg font-bold text-white leading-snug">
              {video.title}
            </h3>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400 mt-1">
              <span>{video.role}</span>
              <span aria-hidden="true">·</span>
              <span>{video.views}</span>
              {video.runtime && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{video.runtime}</span>
                </>
              )}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {video.description}
          </p>

          {/* Cast & Crew Credits if available */}
          {video.credits && video.credits.length > 0 && (
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-2 text-xs">
              <div className="flex items-center gap-1.5 text-amber-400 font-semibold text-[11px] uppercase tracking-wider">
                <Clapperboard className="w-3.5 h-3.5" />
                <span>Film Production Credits</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-[11px]">
                {video.credits.map((credit, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <p className="text-slate-400 text-[10px]">{credit.role}</p>
                    <p className="text-slate-200 font-medium">{credit.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools & Software Badges */}
          <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-1.5 text-slate-400">
              <span className="text-slate-400">Tools:</span>
              {video.tools.map((tool, idx) => (
                <span key={tool} className="text-slate-300">
                  {tool}{idx < video.tools.length - 1 ? ' ·' : ''}
                </span>
              ))}
            </div>

            <a
              href={video.videoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 transition text-xs font-medium"
            >
              <span>Watch on {video.platform.includes('YouTube') ? 'YouTube' : video.platform}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
