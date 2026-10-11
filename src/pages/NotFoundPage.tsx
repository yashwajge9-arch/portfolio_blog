import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Film, Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO
        title="404 — Scene Not Found | Yash Wajge"
        description="The requested page could not be located on the timeline. Return to the home portfolio or browse our video galleries."
        canonicalPath="/404"
      />

      <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 text-center">
        <div className="max-w-md space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 mx-auto flex items-center justify-center">
            <Film className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs font-semibold text-amber-400 uppercase tracking-widest">
              Error 404 · Clip Missing from Bin
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
              Scene Not Found
            </h1>
            <p className="text-sm text-slate-400 leading-relaxed">
              The cut or asset you are looking for has been moved, re-rendered, or trimmed from the master sequence.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="px-5 py-2.5 rounded-xl bg-amber-500 text-black font-bold text-xs hover:bg-amber-400 transition flex items-center gap-2 shadow-lg"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/shorts"
              className="px-4 py-2.5 rounded-xl bg-white/10 text-white font-semibold text-xs hover:bg-white/15 transition flex items-center gap-2 border border-white/10"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>View Shorts</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
