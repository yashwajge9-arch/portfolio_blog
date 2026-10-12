import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Sparkles, ChevronRight, ChevronLeft, Award } from 'lucide-react';

interface Scene {
  time: string;
  title: string;
  concept: string;
  location: string;
  description: string;
  splitLeft: { label: string; action: string; tone: string };
  splitRight: { label: string; action: string; tone: string };
}

const scenes: Scene[] = [
  {
    time: '00:00',
    title: 'The Parallel Morning',
    concept: 'Line · Balance · Movement',
    location: 'Residential Tower & Metro Stairs',
    description: 'Symmetrical split-screen separated by a central yellow vector line. Left: Descending stairs. Right: Descending elevator L-2.',
    splitLeft: { label: 'Line', action: 'Descending stairs', tone: 'Olive Sepia' },
    splitRight: { label: 'Balance', action: 'Elevator doors L-2', tone: 'Muted Teal' },
  },
  {
    time: '00:05',
    title: 'Mumbai Awakens',
    concept: 'Perspective · Reflection · Rhythm',
    location: 'Marine Drive & Taj Mahal Palace',
    description: 'Serene morning fog over the Arabian Sea, architectural puddle reflection of the Taj, and tick of antique horology.',
    splitLeft: { label: 'Parallel Lives', action: 'Fisherman on calm bay', tone: 'Morning Golden Hour' },
    splitRight: { label: 'Mumbai 08:00 AM', action: 'Colaba architectural puddle', tone: 'Historic Pastel' },
  },
  {
    time: '00:18',
    title: 'Street Rhythms & Typography',
    concept: 'Fonts · Variety · Cadence',
    location: 'Art Corner & Raju Ki Chai',
    description: 'Hand-painted truck art typography, nostalgic Mumbai tea stall banners, and purposeful morning strides.',
    splitLeft: { label: 'Fonts', action: 'Raju Ki Chai tea stall', tone: 'Vintage Mustard' },
    splitRight: { label: 'Variety', action: 'Morning tea ritual', tone: 'Amber Radiance' },
  },
  {
    time: '00:22',
    title: 'Space & Hierarchy',
    concept: 'Space · Hierarchy',
    location: 'Cafe Roastery',
    description: 'Sipping cappuccino beside laptop and tiramisu, exploring negative space and visual hierarchy in modern spaces.',
    splitLeft: { label: 'Space', action: 'Morning coffee & study', tone: 'Pastel Teal' },
    splitRight: { label: 'Hierarchy', action: 'Editorial framing', tone: 'Warm Cream' },
  },
  {
    time: '00:26',
    title: 'Heritage Architectural Texture',
    concept: 'Proportion · Shapes · Pattern · Contrast',
    location: 'Yazdani Restaurant & Flora Fountain',
    description: 'Passing Flora Fountain into Fort heritage district. Iconic Yazdani Bakery facade as vintage black-and-yellow taxi glides past.',
    splitLeft: { label: 'Proportion', action: 'Flora Fountain historic stone', tone: 'Sunlit Stone' },
    splitRight: { label: 'Pattern & Contrast', action: 'Yazdani Bakery & vintage taxi', tone: 'Wes Anderson Pastel' },
  },
  {
    time: '00:40',
    title: 'The Intersection',
    concept: 'Individuality · Passive White Space · Unity',
    location: 'The City Library',
    description: 'Two parallel journeys converge at opposite ends of a wooden library table. Silent eye contact, shared notes, and visual unity.',
    splitLeft: { label: 'Individuality', action: 'Quiet bookshelf focus', tone: 'Emerald Olive' },
    splitRight: { label: 'Unity', action: 'Shared tablet exchange', tone: 'Warm Study Gold' },
  },
  {
    time: '01:05',
    title: 'Official Film Credits',
    concept: 'Directed & Edited by Yash Wajge',
    location: 'Brand Breakdown Bureau (BBB)',
    description: 'Classic Wes Anderson yellow title card: Cast Yana Rizvi & Omkar Sonone. Directed by Harsh Saini & Yash Wajge. Edited by Yash Wajge.',
    splitLeft: { label: 'Directed By', action: 'Harsh Saini & Yash Wajge', tone: 'Mustard Yellow' },
    splitRight: { label: 'Edited By', action: 'Yash Wajge', tone: 'Mustard Yellow' },
  },
];

export const ParallelLivesPlayer: React.FC = () => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentSceneIndex((prev) => (prev + 1) % scenes.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const scene = scenes[currentSceneIndex];

  return (
    <div className="w-full h-full flex flex-col justify-between bg-[#0b0d13] text-white relative select-none overflow-hidden font-sans">
      {/* Wes Anderson Retro Style Top Bar */}
      <div className="px-4 py-2.5 bg-[#12151f] border-b border-white/10 flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest font-mono">
            PARALLEL LIVES · {scene.time}
          </span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] text-amber-300 font-medium">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>Wes Anderson Aesthetic</span>
        </div>
      </div>

      {/* Main Reel Visual Stage */}
      <div className="relative flex-grow flex items-center justify-center p-3 sm:p-4 overflow-hidden">
        {/* Background Film Split Visual Container */}
        <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-xl overflow-hidden shadow-2xl border border-amber-500/30 bg-[#161a24] flex flex-col justify-between">
          {/* Top Title Overlay */}
          <div className="p-3 text-center bg-gradient-to-b from-black/80 via-black/40 to-transparent z-10">
            <p className="text-[10px] font-bold tracking-[3px] text-amber-400 uppercase font-mono">
              MUMBAI · 08:00 AM
            </p>
            <h4 className="font-display text-lg font-extrabold text-white tracking-wide mt-0.5">
              {scene.title}
            </h4>
            <p className="text-[11px] text-amber-300/90 font-serif italic">
              {scene.concept}
            </p>
          </div>

          {/* Symmetrical Split Screen Canvas Simulation */}
          <div className="relative flex-grow grid grid-cols-2 divide-x-2 divide-amber-400 overflow-hidden my-1">
            {/* Left Screen */}
            <div className="p-3 flex flex-col justify-between bg-gradient-to-br from-[#2a3428] to-[#1c221a] text-left relative">
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-black/60 text-amber-300 font-mono w-max">
                LEFT FRAME
              </span>
              <div className="my-auto space-y-1 text-center py-4">
                <span className="font-serif italic text-lg sm:text-xl font-bold text-white block drop-shadow">
                  {scene.splitLeft.label}
                </span>
                <p className="text-[10px] text-slate-300 leading-tight">
                  {scene.splitLeft.action}
                </p>
              </div>
              <span className="text-[9px] text-slate-400 font-mono">
                {scene.splitLeft.tone}
              </span>
            </div>

            {/* Right Screen */}
            <div className="p-3 flex flex-col justify-between bg-gradient-to-bl from-[#253538] to-[#162224] text-right relative">
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-black/60 text-amber-300 font-mono w-max ml-auto">
                RIGHT FRAME
              </span>
              <div className="my-auto space-y-1 text-center py-4">
                <span className="font-serif italic text-lg sm:text-xl font-bold text-white block drop-shadow">
                  {scene.splitRight.label}
                </span>
                <p className="text-[10px] text-slate-300 leading-tight">
                  {scene.splitRight.action}
                </p>
              </div>
              <span className="text-[9px] text-slate-400 font-mono">
                {scene.splitRight.tone}
              </span>
            </div>

            {/* Signature Center Yellow Dividing Line Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <span className="px-2 py-1 rounded-full bg-amber-500 text-black font-extrabold text-[9px] shadow-lg tracking-wider">
                SPLIT
              </span>
            </div>
          </div>

          {/* Bottom Scene Metadata & Location */}
          <div className="p-3 bg-gradient-to-t from-black/90 via-black/70 to-transparent z-10 text-left space-y-1">
            <p className="text-[11px] text-slate-200 line-clamp-2 leading-relaxed">
              {scene.description}
            </p>
            <div className="flex items-center justify-between text-[10px] text-amber-400/90 font-mono pt-1">
              <span>📍 {scene.location}</span>
              <span>Scene {currentSceneIndex + 1} / {scenes.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Film Strip Progress Indicators */}
      <div className="px-4 py-2 bg-[#0e111a] border-t border-white/5 space-y-2">
        <div className="flex items-center gap-1.5 w-full">
          {scenes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSceneIndex(idx)}
              className={`h-1.5 rounded-full flex-grow transition-all duration-300 ${
                idx === currentSceneIndex
                  ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]'
                  : 'bg-white/15 hover:bg-white/30'
              }`}
              title={`Jump to Scene ${idx + 1}`}
              aria-label={`Jump to Scene ${idx + 1}`}
            />
          ))}
        </div>

        {/* Playback Controls & Director Credit */}
        <div className="flex items-center justify-between text-xs pt-1">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded-lg bg-amber-500 text-black hover:bg-amber-400 transition font-medium flex items-center gap-1"
              aria-label={isPlaying ? 'Pause Reel' : 'Play Reel'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span className="text-[11px]">{isPlaying ? 'Pause' : 'Play'}</span>
            </button>

            <button
              onClick={() => setCurrentSceneIndex(0)}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition"
              title="Restart from Beginning"
              aria-label="Restart Reel"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentSceneIndex((prev) => (prev > 0 ? prev - 1 : scenes.length - 1))}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition"
              aria-label="Previous Scene"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setCurrentSceneIndex((prev) => (prev + 1) % scenes.length)}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition"
              aria-label="Next Scene"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Directed & Edited by Yash Wajge badge */}
        <div className="pt-1.5 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>Directed &amp; Edited by Yash Wajge</span>
          </div>
          <span className="text-[10px] text-slate-500">Produced by BBB</span>
        </div>
      </div>
    </div>
  );
};
