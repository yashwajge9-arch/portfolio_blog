import React from 'react';
import { SEO } from '../components/SEO';
import { BlogCard } from '../components/BlogCard';
import { blogPostsData } from '../data/blogPosts';
import { BookOpen } from 'lucide-react';

export const BlogListingPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Video Editing Blog & Guides | Yash Wajge"
        description="Actionable video editing tutorials, retention frameworks, NLE software comparisons, rates, and sound design guides by Yash Wajge."
        canonicalPath="/blog"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-left">
        {/* Page Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest">
            <BookOpen className="w-4 h-4" />
            <span>Editorial Hub &amp; Post-Production Insights</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The Video Editor's Handbook
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            In-depth guides on hook psychology, YouTube retention curves, color grading science, NLE speed workflows, and client pricing benchmarks.
          </p>
        </div>

        {/* Responsive Grid of all 10 post cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPostsData.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};
