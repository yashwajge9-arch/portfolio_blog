import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="group flex flex-col rounded-2xl bg-[#12131c] border border-white/5 overflow-hidden transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-1 shadow-lg text-left">
      <Link
        to={`/blog/${post.slug}`}
        className="block relative aspect-[1200/630] w-full overflow-hidden bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
      >
        <img
          src={post.image}
          alt={post.imageAlt}
          width={1200}
          height={630}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </Link>

      <div className="p-5 flex flex-col flex-grow justify-between space-y-3">
        <div className="space-y-2">
          {/* Metadata: Unboxed text with typographic separator (PRD & anti-slop) */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>{post.date}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>

          <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug line-clamp-2">
            <Link to={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        <div className="pt-3 border-t border-white/5 flex items-center justify-between">
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 group-hover:text-amber-300 transition-colors"
          >
            <span>Read Guide</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};
