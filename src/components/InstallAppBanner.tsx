import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, Share2, PlusSquare, X } from 'lucide-react';

interface InstallBannerProps {
  variant?: 'banner' | 'button';
  className?: string;
}

export const InstallAppBanner: React.FC<InstallBannerProps> = ({
  variant = 'banner',
  className = '',
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // If already running as an installed PWA or dismissed, don't show banner
  if (isInstalled) {
    return null;
  }

  // Header / Navbar small button variant
  if (variant === 'button') {
    if (isInstallable) {
      return (
        <button
          onClick={install}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-500 text-black hover:bg-amber-400 active:scale-95 transition-all shadow-sm ${className}`}
          title="Install Alex Vance App to Home Screen / Desktop"
        >
          <Download className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Get App</span>
          <span className="sm:hidden">App</span>
        </button>
      );
    }

    if (isIOS) {
      return (
        <>
          <button
            onClick={() => setShowIOSGuide(true)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-amber-500/40 text-amber-300 hover:bg-amber-500/10 active:scale-95 transition-all ${className}`}
            title="Install on iOS Home Screen"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Get App</span>
            <span className="sm:hidden">App</span>
          </button>

          {showIOSGuide && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
              <div className="w-full max-w-sm rounded-2xl bg-[#12131c] border border-amber-500/30 p-6 shadow-2xl text-left">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-sm">
                      AV
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">Install Alex Vance App</h3>
                      <p className="text-[11px] text-slate-400">Add to iPhone / iPad Home Screen</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowIOSGuide(false)}
                    className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="mt-4 space-y-3.5 text-xs text-slate-300">
                  <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 font-bold text-xs">
                      1
                    </span>
                    <p>
                      Tap the <strong className="text-white flex inline-flex items-center gap-1"><Share2 className="w-3.5 h-3.5 text-blue-400" /> Share</strong> button in your Safari bottom toolbar.
                    </p>
                  </div>
                  <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 font-bold text-xs">
                      2
                    </span>
                    <p>
                      Scroll down and tap <strong className="text-white flex inline-flex items-center gap-1"><PlusSquare className="w-3.5 h-3.5 text-amber-400" /> Add to Home Screen</strong>.
                    </p>
                  </div>
                  <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 font-bold text-xs">
                      3
                    </span>
                    <p>
                      Launch from your Home Screen for full-screen video viewing with zero browser controls!
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="mt-5 w-full py-2.5 rounded-xl bg-amber-500 text-black font-semibold text-xs hover:bg-amber-400 active:scale-95 transition"
                >
                  Got It
                </button>
              </div>
            </div>
          )}
        </>
      );
    }

    return null;
  }

  // Floating or In-Line Banner Variant
  if (dismissed || (!isInstallable && !isIOS)) {
    return null;
  }

  return (
    <>
      <div className={`relative bg-gradient-to-r from-amber-500/15 via-[#161824] to-amber-500/10 border-y border-amber-500/20 py-2.5 px-4 text-xs ${className}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <p className="text-slate-200">
              <strong className="text-white">Install the Alex Vance App</strong> for instant offline showreels &amp; faster browsing.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {isInstallable && (
              <button
                onClick={install}
                className="px-3 py-1 rounded-md bg-amber-500 text-black font-semibold hover:bg-amber-400 transition flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Install</span>
              </button>
            )}
            {isIOS && (
              <button
                onClick={() => setShowIOSGuide(true)}
                className="px-3 py-1 rounded-md border border-amber-400/50 text-amber-300 font-semibold hover:bg-amber-500/20 transition flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Add to Home</span>
              </button>
            )}
            <button
              onClick={() => setDismissed(true)}
              className="p-1 text-slate-400 hover:text-white transition"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm rounded-2xl bg-[#12131c] border border-amber-500/30 p-6 shadow-2xl text-left">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-sm">
                  AV
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Install on iOS</h3>
                  <p className="text-[11px] text-slate-400">Standalone App Mode</p>
                </div>
              </div>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-4 space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 font-bold text-xs">
                  1
                </span>
                <p>
                  Tap <strong className="text-white flex inline-flex items-center gap-1"><Share2 className="w-3.5 h-3.5 text-blue-400" /> Share</strong> at the bottom of Safari.
                </p>
              </div>
              <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 font-bold text-xs">
                  2
                </span>
                <p>
                  Tap <strong className="text-white flex inline-flex items-center gap-1"><PlusSquare className="w-3.5 h-3.5 text-amber-400" /> Add to Home Screen</strong>.
                </p>
              </div>
              <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 font-bold text-xs">
                  3
                </span>
                <p>
                  Tap <strong>Add</strong> in the top right corner. The app icon will appear on your device!
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowIOSGuide(false)}
              className="mt-5 w-full py-2.5 rounded-xl bg-amber-500 text-black font-semibold text-xs hover:bg-amber-400 active:scale-95 transition"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
};
