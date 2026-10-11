import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { TableOfContents } from '../components/TableOfContents';
import { BlogCard } from '../components/BlogCard';
import { getBlogPostBySlug, getRelatedPosts } from '../data/blogPosts';
import { Share2, Bookmark, BookmarkCheck, ArrowLeft, ArrowUpRight, Check, HelpCircle } from 'lucide-react';
import { isBookmarked, toggleBookmark } from '../utils/bookmarks';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  const [saved, setSaved] = useState(() => (post ? isBookmarked(post.id) : false));
  const [copied, setCopied] = useState(false);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const relatedPosts = getRelatedPosts(post);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.metaDescription,
          url,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const handleBookmark = () => {
    const nowSaved = toggleBookmark({
      id: post.id,
      type: 'post',
      title: post.title,
      subtitle: `${post.date} · ${post.readTime}`,
      url: `/blog/${post.slug}`,
      thumbnail: post.image,
    });
    setSaved(nowSaved);
  };

  // Structured Data Schemas
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: `https://alexvance.video${post.image}`,
    datePublished: '2026-08-01T08:00:00+00:00',
    dateModified: '2026-10-08T09:00:00+00:00',
    author: {
      '@type': 'Person',
      name: 'Alex Vance',
      url: 'https://alexvance.video/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Alex Vance Video Editing',
      logo: {
        '@type': 'ImageObject',
        url: 'https://alexvance.video/pwa-192x192.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://alexvance.video/blog/${post.slug}`,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://alexvance.video',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://alexvance.video/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://alexvance.video/blog/${post.slug}`,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  // Render markdown blocks with proper typography and internal router links
  const renderContentBlocks = (content: string) => {
    const rawParagraphs = content.trim().split('\n\n');

    return rawParagraphs.map((block, idx) => {
      const trimmed = block.trim();

      // Heading 2
      if (trimmed.startsWith('## ')) {
        const title = trimmed.replace('## ', '');
        const headingId = title
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-');

        return (
          <h2
            key={idx}
            id={headingId}
            className="font-display text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pt-4 border-t border-white/5 scroll-mt-24"
          >
            {title}
          </h2>
        );
      }

      // Heading 3
      if (trimmed.startsWith('### ')) {
        return (
          <h3 key={idx} className="font-display text-lg font-bold text-slate-100 mt-6 mb-3">
            {trimmed.replace('### ', '')}
          </h3>
        );
      }

      // Unordered list
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const items = trimmed.split('\n').map((li) => li.replace(/^[-*]\s+/, ''));
        return (
          <ul key={idx} className="my-4 space-y-2 text-sm text-slate-300 pl-4 list-disc marker:text-amber-400">
            {items.map((item, itemIdx) => (
              <li key={itemIdx} className="leading-relaxed">
                {parseInlineFormatting(item)}
              </li>
            ))}
          </ul>
        );
      }

      // Ordered list
      if (/^\d+\.\s/.test(trimmed)) {
        const items = trimmed.split('\n').map((li) => li.replace(/^\d+\.\s+/, ''));
        return (
          <ol key={idx} className="my-4 space-y-2 text-sm text-slate-300 pl-4 list-decimal marker:text-amber-400">
            {items.map((item, itemIdx) => (
              <li key={itemIdx} className="leading-relaxed">
                {parseInlineFormatting(item)}
              </li>
            ))}
          </ol>
        );
      }

      // Table Markdown
      if (trimmed.startsWith('|') && trimmed.includes('\n|')) {
        const rows = trimmed.split('\n').filter((r) => r.trim().startsWith('|'));
        if (rows.length >= 2) {
          const headers = rows[0].split('|').map((c) => c.trim()).filter(Boolean);
          const dataRows = rows.slice(2).map((r) => r.split('|').map((c) => c.trim()).filter(Boolean));

          return (
            <div key={idx} className="my-6 overflow-x-auto rounded-xl border border-white/10 bg-[#12131c]">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 text-amber-400 font-semibold">
                    {headers.map((h, hIdx) => (
                      <th key={hIdx} className="p-3 sm:p-3.5 whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300">
                  {dataRows.map((r, rIdx) => (
                    <tr key={rIdx} className="hover:bg-white/[0.02]">
                      {r.map((cell, cIdx) => (
                        <td key={cIdx} className="p-3 sm:p-3.5">
                          {parseInlineFormatting(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
      }

      // Standard paragraph with inline formatting
      return (
        <p key={idx} className="my-4 text-sm sm:text-base text-slate-300 leading-relaxed">
          {parseInlineFormatting(trimmed)}
        </p>
      );
    });
  };

  // Helper to parse bold, links, and code
  const parseInlineFormatting = (text: string): React.ReactNode => {
    // Replace internal links [Text](/path) with React Router Links
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(parseBoldAndCode(text.substring(lastIndex, match.index)));
      }
      const label = match[1];
      const href = match[2];

      if (href.startsWith('/')) {
        parts.push(
          <Link
            key={match.index}
            to={href}
            className="text-amber-400 hover:text-amber-300 underline underline-offset-4 decoration-amber-400/40 font-medium transition-colors"
          >
            {label}
          </Link>
        );
      } else {
        parts.push(
          <a
            key={match.index}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-amber-400 hover:text-amber-300 underline underline-offset-4 decoration-amber-400/40 font-medium transition-colors"
          >
            {label}
          </a>
        );
      }
      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(parseBoldAndCode(text.substring(lastIndex)));
    }

    return parts.length > 0 ? parts : text;
  };

  const parseBoldAndCode = (str: string): React.ReactNode => {
    // Parse **bold** and `code`
    const boldRegex = /\*\*([^*]+)\*\*/g;
    const pieces: React.ReactNode[] = [];
    let last = 0;
    let m: RegExpExecArray | null;

    while ((m = boldRegex.exec(str)) !== null) {
      if (m.index > last) {
        pieces.push(str.substring(last, m.index));
      }
      pieces.push(
        <strong key={m.index} className="text-white font-semibold">
          {m[1]}
        </strong>
      );
      last = boldRegex.lastIndex;
    }

    if (last < str.length) {
      pieces.push(str.substring(last));
    }

    return pieces;
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.metaDescription}
        canonicalPath={`/blog/${post.slug}`}
        ogType="article"
        ogImage={post.image}
        articleData={{
          author: 'Alex Vance',
          publishedTime: '2026-08-01T08:00:00+00:00',
          section: 'Video Production',
          tags: [post.keyword, 'Video Editing', 'Post Production'],
        }}
        schema={[articleSchema, breadcrumbSchema, faqSchema]}
      />

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-left">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-6">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/blog" className="hover:text-white transition">Blog</Link>
          <span aria-hidden="true">/</span>
          <span className="text-amber-400 truncate max-w-[200px] sm:max-w-none">{post.title}</span>
        </nav>

        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header (Exact H1 as requested) */}
        <header className="max-w-4xl space-y-4 mb-8">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            {post.title}
          </h1>

          {/* Byline & Metadata (Unboxed text with separators) */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-y border-white/5 py-3 text-xs text-slate-400">
            <div className="flex items-center gap-2.5">
              <span className="text-white font-semibold">By Alex Vance</span>
              <span aria-hidden="true">·</span>
              <span>{post.date}</span>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
              <span aria-hidden="true">·</span>
              <span className="text-amber-400 font-medium">Verified Strategy</span>
            </div>

            {/* Social Share & In-App Bookmark Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition"
                title="Share Article Link"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Share'}</span>
              </button>

              <button
                onClick={handleBookmark}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 transition ${
                  saved ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30' : 'bg-white/5 hover:bg-white/10 text-slate-300'
                }`}
                title={saved ? 'Article Saved in App' : 'Save Article for Offline Reading'}
              >
                {saved ? <BookmarkCheck className="w-3.5 h-3.5 text-amber-400" /> : <Bookmark className="w-3.5 h-3.5" />}
                <span>{saved ? 'Saved' : 'Save'}</span>
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image (1200x630, WebP, under 100 KB) */}
        <div className="max-w-4xl mb-12 rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl aspect-[1200/630]">
          <img
            src={post.image}
            alt={post.imageAlt}
            width={1200}
            height={630}
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Layout Grid: TOC Sidebar + Body Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Body Content */}
          <div className="lg:col-span-8 max-w-none">
            {renderContentBlocks(post.content)}

            {/* FAQ Section */}
            <section className="mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 id="frequently-asked-questions" className="font-display text-2xl font-bold text-white mb-6">
                Common Questions &amp; Answers
              </h2>

              <div className="space-y-4">
                {post.faqs.map((faq, fIdx) => (
                  <div key={fIdx} className="p-5 rounded-xl bg-[#12131c] border border-white/5 space-y-2">
                    <h3 className="font-display text-base font-bold text-white">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* In-Article CTA Banner to /contact */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-amber-500/15 via-[#141624] to-black border border-amber-500/30 text-left space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                <span>Direct Studio Collaboration</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white leading-snug">
                Want Alex Vance to Edit Your Next Video?
              </h3>
              <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                Take the guesswork out of audience retention, pacing, and color grading. Reserve dedicated post-production capacity for your upcoming project.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="px-5 py-2.5 rounded-xl bg-amber-500 text-black font-bold text-xs hover:bg-amber-400 active:scale-95 transition flex items-center gap-1.5"
                >
                  <span>Request Turnaround &amp; Pricing</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/shorts"
                  className="px-4 py-2.5 rounded-xl bg-white/10 text-white font-semibold text-xs hover:bg-white/15 transition"
                >
                  <span>View Vertical Work</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar: Table of Contents & Author Card */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <TableOfContents items={post.toc} />

            {/* Author Profile Bio Box */}
            <div className="p-5 rounded-2xl bg-[#12131c] border border-white/5 space-y-3.5 text-left">
              <div className="flex items-center gap-3">
                <img
                  src="/images/editor-portrait.webp"
                  alt="Alex Vance - Video Editor"
                  width={96}
                  height={96}
                  className="w-12 h-12 rounded-full object-cover border border-amber-500/40"
                />
                <div>
                  <h4 className="font-display text-sm font-bold text-white">Alex Vance</h4>
                  <p className="text-xs text-amber-400 font-medium">Lead Video Editor &amp; Colorist</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Specializing in high-retention short-form pacing and documentary storytelling across YouTube, DaVinci Resolve, and Premiere Pro.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-white transition"
              >
                <span>Read Full Biography</span>
                <ArrowUpRight className="w-3 h-3 text-amber-400" />
              </Link>
            </div>
          </aside>
        </div>

        {/* Related Posts Section (3 recommendations) */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-white/5">
            <div className="mb-8">
              <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1">
                Continue Reading
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Related Editorial Guides
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <BlogCard key={related.id} post={related} />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
};
